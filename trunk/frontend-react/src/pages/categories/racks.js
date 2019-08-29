import React, {Component, Fragment} from 'react';
import {Button, Input, Header, Grid, Segment, Icon, Modal, Image} from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {rackA} from '../../redux/_actions/categories/rackA';
import {layoutA} from '../../redux/_actions/layoutA';
import _ from 'lodash';
import moment from 'moment/moment';
import defaultImage from '../../static/images/default_image.png';
// import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import _config from '../../utils/config';

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
        document.title = "Rack List";
    }

    componentWillReceiveProps(nextProps) {
        const {racks} = nextProps;
        const {action = '', loading = false, current = {}} = racks;
        if (action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const {racks = {}, dispatch} = this.props;
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
        if (find) {
            dispatch(rackA.handleDeleteRow(find));
        }
    }

    handleUpdateRow(id) {
        const {racks, dispatch} = this.props;
        const {list = []} = racks;
        const find = _.find(list, {rackId: id});
        if(find) {
            dispatch(layoutA.updateCurrent('current', {cancel: '/categories/racks'}));
            dispatch(rackA.handleUpdateRow(find));
            window.open(`${prevURL}/categories/rack-edit?id=${id}`, '_self');
        }
    }

    handleClose() {
        this.props.dispatch(rackA.modal(false));
    }

    handleCloseView() {
        this.props.dispatch(rackA.updateCurrent('current', {
            rackId: '',
            x: '',
            y: '',
            height: '',
            width: '',
            locationId: '',
            dataCenterId: '',
            roomId: '',
            rackName: '',
            image: ''
        }))
        this.setState({
            image: defaultImage,
            openImage: false
        })
    }

    onDelete() {
        const {racks} = this.props;
        const {current = {}} = racks;
        const id = current.rackId;
        if (id) this.props.dispatch(rackA.deleteRack({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {racks, dispatch} = this.props;
        let {search = {}, pagination = {}} = racks;
        search[name] = value;
        dispatch(rackA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log(value);
            this.getData(search, pagination);
        }, 500);
    }

    handleViewImage(rackId, roomId, value) {
        const {racks = {}, dispatch} = this.props;
        const {list = []} = racks;
        const find = _.find(list, {rackId: rackId});
        if (find) dispatch(rackA.updateCurrent('current', find));
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

    render() {
        const {racks = {}} = this.props;
        const {
            open = false, current = {
                rackName: '',
                rackId: ''
            }, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}
        } = racks;
        let list = [];
        _.forEach(racks.list, (item, i) => {
            let temp = [];
            let index = 1;
            if (_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)) {
                index = i + 1;
            } else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['rackName', 'zoneName', 'roomName', 'groupCustomerName', 'createdDate'], c => {
                let value = item[c];
                if (c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if (c === 'image') {
                    const image = item[c];
                    value = <Button size="mini" icon
                                    onClick={() => this.handleViewImage(item.rackId, item.roomId, image)}><Icon
                        name="eye"/></Button>;
                }
                if (_.isNull(value)) value = '';
                temp.push(value);
            });
            const id = item.rackId;
            temp.push({
                cell: (<Fragment>
                    <Link to={prevURL + '/categories/rack-view?id=' + id}>
                        <Button size="mini" icon>
                            <Icon name="eye"/>
                        </Button>
                    </Link>

                    <Link to={prevURL + '/categories/rack-edit?id=' + id}>

                        <Button size="mini" icon onClick={() => this.handleUpdateRow(id)}>
                            <Icon name="pencil"/>
                        </Button>
                    </Link>
                    <Button color="red" size="mini" icon onClick={() => this.handleDeleteRow(id)}>
                        <Icon name="delete"/>
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
                <DashboardLayout>
                    <Segment>
                        <Header>Rack List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading}
                                       value={search.str} onChange={this.handleSearch.bind(this)}/>
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5}
                                         moblie={8}>

                                {/* <Link to="/categories/rack-edit"><Button primary>Add</Button></Link> */}
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
                            <Modal.Content>
                                <p>Do you want to remove the Rack: {`"${current.rackName}"`} ?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes'
                                        onClick={this.onDelete.bind(this)}/>
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({racks}) => ({racks});

export default connect(mapStateToProps, null)(Racks);