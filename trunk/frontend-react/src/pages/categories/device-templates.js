import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Menu, Dropdown, Form, Grid, Segment, Icon, Modal,Image  } from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {deviceTemplateA} from '../../redux/_actions/categories/deviceTemplateA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../utils/config';
import XLSX from 'xlsx';
import {loadingA} from "../../redux/_actions/loadingA";
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import FileUpload from "../../components/Uploads/FileUpload";
/* eslint-disable import/first */
const prevURL = _config[_config.environment].prevURL;
import Base from '../../assets/js/base';

class DeviceTemplates extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null,
             image: '',
             openImage: false,
        };
        this.base = new Base();
    }

    componentDidMount() {
        this.getData();
        this.getDeviceTypes();
        document.title = "Device Template List";
    }

    componentWillReceiveProps(nextProps) {
        const {deviceTemplates} = nextProps;
        const {action = '', loading = false, current = {}} = deviceTemplates;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { deviceTemplates, dispatch } = this.props;
        const {search = {}, pagination = {}} = deviceTemplates;
        dispatch(deviceTemplateA.getDeviceTemplates({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    getDeviceTypes() {
        this.props.dispatch(deviceTemplateA.getDeviceTypes());
    }

    handleDeleteRow(id) {
        const {deviceTemplates, dispatch} = this.props;
        const {list = []} = deviceTemplates;
        const find = _.find(list, {deviceTemplateId: id});
        if(find) {
            dispatch(deviceTemplateA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {deviceTemplates, dispatch} = this.props;
        const {list = []} = deviceTemplates;
        const find = _.find(list, {deviceTemplateId: id});
        if(find) {
            dispatch(deviceTemplateA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(deviceTemplateA.modal(false));
    }

    handleCloseView() {
        this.setState({
            image: '',
            openImage: false
        })
    }

    onDelete() {
        const {deviceTemplates} = this.props;
        const {current = {}} = deviceTemplates;
        const id = current.deviceTemplateId;
        if(id) this.props.dispatch(deviceTemplateA.deleteDeviceTemplate({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {deviceTemplates, dispatch} = this.props;
        let {search = {}, pagination = {}} = deviceTemplates;
        search[name] = value;
        dispatch(deviceTemplateA.handleSearch(name, value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.getData(search, pagination);
        }, 500);
    }

    handleSelect(e, data) {
        const {name, value} = data;
        const {deviceTemplates, dispatch} = this.props;
        let {search = {}, pagination = {}} = deviceTemplates;
        search[name] = value;
        dispatch(deviceTemplateA.handleSearch(name, value));
        this.getData(search, pagination);
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    getChildState(data) {
        const files = data.files;
        const target = data.target;
        if (_.size(files) > 0) {
            var file = files[0];
            var regex = /(.xls|.xlsx|.csv)$/;

            if (regex.test(file.name.toLowerCase())) {
                if (typeof FileReader != "undefined") {
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
        const {dispatch} = this.props;
        //Read the Excel File data.
        try {
            let error = [];
            var workbook = XLSX.read(data, {
                type: 'binary'
            }); //Fetch the name of First Sheet.

            var firstSheet = workbook.SheetNames[0]; //Read all rows from First Sheet into an JSON array.

            let excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
            let result = [];

            var length = excelRows.length;
            if (length === 0) {
                toast.error('File is empty');
                return false;
            }

            _.forEach(excelRows, (item, i) => {
                let strError = [];
                let name = item.Name.toString().trim();
                let deviceTypeName = item["Device type"] || '';
                deviceTypeName = deviceTypeName.toString().trim();
                let CPU = item.CPU;
                let RAM = item.RAM;
                let Disk = item.Disk || '';
                Disk = Disk.toString().trim();
                let powerMax = item["Power max"];
                let powerModule = item["Power module"];
                let weight = item.Weight;
                let height = item.Height;
                let manufacturer = item.Manufacturer || '';
                manufacturer = manufacturer.toString().trim();
                let desc = item.Description || '';
                desc = desc.toString().trim();

                // validate
                if(!name) strError.push('"Name" is required');
                if(!deviceTypeName) strError.push('"Device type" is required');

                if(strError.length === 0) {
                    result.push({
                        name: name,
                        deviceTypeName,
                        CPU,
                        RAM,
                        Disk,
                        powerMax,
                        powerModule,
                        weight,
                        height,
                        manufacturer,
                        desc: desc
                    });
                } else {
                    error.push(`Row ${i + 2}: ${strError.join(', ')}`);
                }
            });

            if(error.length > 0) {
                toast.error(error.join('<br>'), {autoClose: false});
            } else {
                dispatch(loadingA.start());
                dispatch(deviceTemplateA.importDeviceTemplate({deviceTemplates: result}));
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    render() {
        const {deviceTemplates = {}} = this.props;
        const {
            open = false,
            current = {
                deviceTemplateName: '',
                deviceTemplateId: '',
                deviceTypeId: '',
            },
            search = {str: ''},
            searchLoading = false,
            pagination = {currentPage: 0, countPage: 1},
            deviceTypes = []
        } = deviceTemplates;
        const {image, openImage} = this.state;
        const _deviceTypes = _.map(deviceTypes, item => ({text: item.deviceTypeName, value: item.deviceTypeId}));
        let list = [];
        _.forEach(deviceTemplates.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['deviceTemplateName', 'deviceTypeName', 'CPU', 'RAM', 'disk', 'maxPower', 'powerModule', 'weight', 'height', 'manufacturer', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.deviceTemplateId;
            temp.push({
                cell: (<Fragment>
                    <Link to={prevURL + '/categories/device-template-edit?id=' + id} >
                        <Button size="mini" icon onClick={() => this.handleUpdateRow(id)}>
                            <Icon name="pencil" />
                        </Button>
                    </Link>
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
            ['Index', 'Device Template', 'Device Type', 'CPU', 'RAM', 'Disk', 'Power max', 'Power module', 'Weight', 'Height', 'Manufacturer', 'Description', 'Created date', ''],
        ];

        return (
            <div>
                <Loading type="PacmanLoader" />
                <DashboardLayout>
                    <Segment>
                        <Header>Device Template List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input
                                    icon='search'
                                    placeholder="Search..."
                                    name='str'
                                    loading={searchLoading}
                                    value={search.str}
                                    onChange={this.handleSearch.bind(this)}
                                />
                            </Grid.Column>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Form.Dropdown
                                    name='deviceTypeId'
                                    label=''
                                    fluid
                                    placeholder='Device Type...'
                                    search
                                    selection
                                    clearable
                                    options={_deviceTypes}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.deviceTypeId}
                                />
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Link to={prevURL + "/categories/device-template-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove DeviceTemplate</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Device Template: {`"${current.deviceTemplateName}"`} ?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                        <Modal open={openImage} closeIcon onClose={this.handleCloseView.bind(this)}>
                            <Modal.Content image className='center'>
                                <Image wrapped size='medium' src={image} />
                            </Modal.Content>
                    </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ deviceTemplates }) => ({ deviceTemplates });

export default connect(mapStateToProps, null)(DeviceTemplates);