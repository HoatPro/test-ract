import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal,Image  } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {roomA} from '../../src/redux/_actions/categories/roomA';
import _ from 'lodash';
import moment from 'moment/moment';
import base from '../../src/utils/base';
import _config from '../../src/utils/config';
const config = _config[_config.environment];
const prevURL = config.prevURL;
const originBackend = config.originBackend;
const prevOrigin = config.prevOrigin;

class Rooms extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null,
             image: '',
             openImage: false,
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {rooms} = nextProps;
        const {action = '', loading = false, current = {}} = rooms;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { rooms, dispatch } = this.props;
        const {search = {}, pagination = {}} = rooms;
        dispatch(roomA.getRooms({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {rooms, dispatch} = this.props;
        const {list = []} = rooms;
        const find = _.find(list, {roomId: id});
        if(find) {
            dispatch(roomA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {rooms, dispatch} = this.props;
        const {list = []} = rooms;
        const find = _.find(list, {roomId: id});
        if(find) {
            dispatch(roomA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(roomA.modal(false));
    }

    handleCloseView() {
        this.setState({
            image: '',
            openImage: false
        })
    }

    onDelete() {
        const {rooms} = this.props;
        const {current = {}} = rooms;
        const id = current.roomId;
        if(id) this.props.dispatch(roomA.deleteRoom({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {rooms, dispatch} = this.props;
        let {search = {}, pagination = {}} = rooms;
        search[name] = value;
        dispatch(roomA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log(value);
            this.getData(search, pagination);
        }, 500);
    }

    handleViewImage(id, value) {
        const path = `${originBackend + prevOrigin}/uploads/rooms/${id}/${value}`;
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
        const {rooms} = this.props;
        const {open = false, current = {roomName: '', roomId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = rooms;
        const {image, openImage} = this.state;
        let list = [];
        _.forEach(rooms.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['roomName', 'codeRoom', 'width', 'height', 'capacity', 'image', 'locationName', 'dataCenterName', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(c === 'image') {
                    const image =  item[c];
                    value = <Button size="mini" icon onClick={() => this.handleViewImage(item.roomId, image)}><Icon name="eye" /></Button>;
                }
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.roomId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/room-edit?id=' + id} >
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
            ['Index', 'Room', 'Code room', 'Width', 'Height', 'Capacity', 'Image', 'Location', 'DataCenter', 'Description', 'Created date', ''],
        ];
        return (
            <div>
                <Head>
                    <title>Room List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Room List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Room parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link href={prevURL + "/categories/room-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove Room</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Room: {`"${current.roomName}"`} ?</p>
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

const mapStateToProps = ({ rooms }) => ({ rooms });

export default connect(mapStateToProps, null)(Rooms);