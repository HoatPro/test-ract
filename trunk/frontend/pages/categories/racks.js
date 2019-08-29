import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal,Image  } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {rackA} from '../../src/redux/_actions/categories/rackA';
import {layoutA} from '../../src/redux/_actions/layoutA';
import _ from 'lodash';
import moment from 'moment/moment';
import defaultImage from '../../static/images/default_image.png';
import _config from '../../src/utils/config';
import FileUpload from "../../src/components/Uploads/FileUpload";
import {toast} from "react-toastify";
import XLSX from "xlsx";
import {loadingA} from "../../src/redux/_actions/loadingA";
import Loading from "../../src/components/Loading/Loading";
const config = _config[_config.environment];
const prevURL = config.prevURL;
const originBackend = config.originBackend;
const prevOrigin = config.prevOrigin;

class Racks extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {racks} = nextProps;
        const {action = '', loading = false, current = {}} = racks;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { racks = {}, dispatch } = this.props;
        const {search = {}, pagination = {}} = racks;
        dispatch(rackA.getRacks({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {racks, dispatch} = this.props;
        const {list = []} = racks;
        const find = _.find(list, {rackId: id});
        if(find) {
            dispatch(rackA.handleDeleteRow(find));
        }
    }

    handleUpdateRow(id) {
        const {racks, dispatch} = this.props;
        const {list = []} = racks;
        const find = _.find(list, {rackId: id});
        if(find) {
            new Promise(resolve => {
                dispatch(layoutA.updateCurrent('current', {cancel: '/categories/racks'}));
                dispatch(rackA.handleUpdateRow(find));
                resolve();
            }).then(() => {
                window.open(`${prevURL}/categories/rack-edit?id=${id}`, '_self');
            });
        }
    }

    handleClose() {
        this.props.dispatch(rackA.modal(false));
    }

    handleCloseView() {
        this.props.dispatch(rackA.updateCurrent('current', {
            rackId: '',
            x: '',
            y:'',
            height: '',
            width: '',
            locationId: '',
            dataCenterId: '',
            roomId: '',
            rackName: '',
            image: ''
        }));
        this.setState({
            image: defaultImage,
            openImage: false
        })
    }

    onDelete() {
        const {racks} = this.props;
        const {current = {}} = racks;
        const id = current.rackId;
        if(id) this.props.dispatch(rackA.deleteRack({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {racks, dispatch} = this.props;
        let {search = {}, pagination = {}} = racks;
        search[name] = value;
        new Promise(resolve => {
            dispatch(rackA.handleSearch(value));
            resolve();
        }).then(() => {
            this.getData(search, pagination);
        });
    }

    handleViewImage(rackId, roomId, value) {
        const {racks = {}, dispatch} = this.props;
        const {list = []} = racks;
        const find = _.find(list, {rackId: rackId});
        if(find) dispatch(rackA.updateCurrent('current', find));
        const path = `${originBackend + prevOrigin}/uploads/rooms/${roomId}/${value}`;
        this.setState({
            openImage: true,
            image: path
        });
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    getChildState(data) {
        // const {dispatch} = this.props;
        const files = data.files;
        const target = data.target;

        if (_.size(files) > 0) {
            var file = files[0];
            var regex = /(.xls|.xlsx|.csv)$/;

            if (regex.test(file.name.toLowerCase())) {
                if (typeof FileReader != "undefined") {
                    this.props.dispatch(loadingA.start());
                    var reader = new FileReader(); //For Browsers other than IE.

                    if (reader.readAsBinaryString) {
                        reader.onload = (e) => {
                            // this.props.dispatch(loadingA.start());
                            this.processExcel(e.target.result);
                        };

                        reader.readAsBinaryString(file);
                    } else {
                        //For IE Browser.
                        reader.onload = (e) => {
                            var data = "";
                            var bytes = new Uint8Array(e.target.result);

                            for (let i = 0; i < bytes.byteLength; i++) {
                                data += String.fromCharCode(bytes[i]);
                            }
                            // this.props.dispatch(loadingA.start());
                            this.processExcel(data);
                        };

                        reader.readAsArrayBuffer(file);
                    }
                } else {
                    toast.error("This browser does not support HTML5.");
                }
            } else {
                toast.error("Please upload a valid Excel file.");
            }
        }
    }

    processExcel(data) {
        let error = [];
        const {dispatch} = this.props;
        //Read the Excel File data.
        try {
            let workbook = XLSX.read(data, {
                type: 'binary'
            }); //Fetch the name of First Sheet.
            let result = [];
            const sheets = workbook.SheetNames; //Read all rows from First Sheet into an JSON array.
            const columns = {
                "Device Name": "deviceName",
                "Device Type": "deviceType",
                "U Position": "UPosition",
                "Rack": "rack",
                "Room": "room",
                "Contract": "contract",
                "Customer": "customer",
                "StartDate": "startDate",
                "EndDate": "endDate"
            };
            const columnNames = _.keys(columns);

            // get rows by sheet
            for (let i = 0; i < sheets.length; i++) {
                const sheetName = sheets[i];
                let rows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

                _.forEach(rows, (item, j) => {

                    let temp = {};

                    // get value by column
                    _.forEach(columnNames, c => {
                        let strError = [];
                        const value = item[c];
                        if(!value) strError.push(`"${c}" is required`);

                        // check error
                        if(strError.length === 0) {
                            temp[`${columns[c]}`] = value;
                        } else {
                            error.push(`Sheet "${sheetName}" Row ${j + 2}: ${strError.join(', ')}`);
                        }
                    });

                    // push data
                    result.push(temp);
                });
            }

            // let excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);


            if (result.length === 0) {
                toast.error('File is empty');
                return false;
            }
            dispatch(loadingA.stop());
            if(error.length > 0) {
                dispatch(rackA.updateCurrent('current', {openError: true, error: _.map(error, item => <div>{item}</div>)}));
                // toast.error(<div>{_.map(error, item => <div>{item}</div>)}</div>, {autoClose: false, toastClassName: 'toastr-full-screen'});
            } else {
                new Promise(resolve => {
                    dispatch(rackA.importDeviceToRack(result));
                    resolve()
                }).then(() => {
                    dispatch(loadingA.stop());
                })
            }
        } catch (error) {
            toast.error(error.message);
            dispatch(loadingA.stop());
        }
    }

    onCloseError() {
        this.props.dispatch(rackA.updateCurrent('current', {openError: false, error: null}));
    }


    render() {
        const {racks = {}} = this.props;
        const {
            open = false,
            current = {},
            search = {str: ''},
            searchLoading = false,
            pagination = {currentPage: 0, countPage: 1}
        } = racks;
        const {openError = false, rackName = '', error = null} = current;
        let list = [];
        _.forEach(racks.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['rackName', 'zoneName', 'roomName', 'groupCustomerName', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(c === 'image') {
                    const image =  item[c];
                    value = <Button size="mini" icon onClick={() => this.handleViewImage(item.rackId, item.roomId, image)}><Icon name="eye" /></Button>;
                }
                if(_.isNull(value)) value = '';
                temp.push(value);
            });
            const id = item.rackId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/rack-view?id=' + id} >
                        <Button size="mini" icon>
                            <Icon name="eye" />
                        </Button>
                    </Link>

                    <Button size="mini" icon onClick={() => this.handleUpdateRow(id)}>
                        <Icon name="pencil" />
                    </Button>
                    <Button color="red" size="mini" icon onClick={() => this.handleDeleteRow(id)}>
                        <Icon name="delete" />
                    </Button>
                </Fragment>),
                props: {
                    textAlign: 'center'
                }
            });
            list.push(temp);
        });
        const header = [
            ['Index', 'Rack', 'Zone', 'Room', 'Group Customer', 'Created date', ''],
        ];
        return (
            <div>
                <Loading type="PacmanLoader" />
                <Head>
                    <title>Rack List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Rack List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <FileUpload
                                    name="Import"
                                    getChildState={this.getChildState.bind(this)}
                                />
                            </Grid.Column>
                        </Grid>
                        <CustomTable
                            header={header}
                            body={list}
                            pagination={true}
                            paginationProps={{
                                defaultActivePage: pagination.currentPage + 1,
                                totalPages: pagination.countPage
                            }}
                            onPageChange={this.onPageChange.bind(this)}
                        />
                        <Modal size={'mini'} open={open}
                            onClose={this.handleClose.bind(this)}
                            closeOnEscape={true}
                            closeOnDimmerClick={false}
                        >
                            <Modal.Header>Remove Rack</Modal.Header>
                            <Modal.Content scolling>
                                <p>Do you want to remove the Rack: {`"${rackName}"`} ?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                        <Modal open={openError} onClose={this.onCloseError.bind(this)}>
                            <Modal.Header>Error</Modal.Header>
                            <Modal.Content>
                                {error}
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.onCloseError.bind(this)}>Close</Button>
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ racks }) => ({ racks });

export default connect(mapStateToProps, null)(Racks);