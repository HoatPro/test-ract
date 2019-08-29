import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {locationA} from '../../src/redux/_actions/categories/locationA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {locations} = nextProps;
        const {action = '', loading = false, current = {}} = locations;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { locations, dispatch } = this.props;
        const {search = {}, pagination = {}} = locations;
        dispatch(locationA.getLocations({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {locations, dispatch} = this.props;
        const {list = []} = locations;
        const find = _.find(list, {locationId: id});
        if(find) {
            dispatch(locationA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {locations, dispatch} = this.props;
        const {list = []} = locations;
        const find = _.find(list, {locationId: id});
        if(find) {
            dispatch(locationA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(locationA.modal(false));
    }

    onDelete() {
        const {locations} = this.props;
        const {current = {}} = locations;
        const id = current.locationId;
        if(id) this.props.dispatch(locationA.deleteLocation({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {locations, dispatch} = this.props;
        let {search = {}, pagination = {}} = locations;
        search[name] = value;
        dispatch(locationA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log(value);
            this.getData(search, pagination);
        }, 500);
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    render() {
        const {locations} = this.props;
        const {parents = [], open = false, current = {locationName: '', locationId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = locations;
        let list = [];
        _.forEach(locations.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
        
            _.forEach(['locationName', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(c === 'parentId') {
                    const find = _.find(parents, {locationId: value});
                    if(find) {
                        value = find.locationName;
                    }
                }
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.locationId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/location-edit?id=' + id} >
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
            ['Index', 'Name', 'Descriptions', 'Created Date', ''],
        ];
        return (
            <div>
                <Head>
                    <title> Location List </title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Location List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Location parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link href={prevURL + "/categories/location-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove Location</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the {`"${current.locationName}"`} location?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>No</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ locations }) => ({ locations });

export default connect(mapStateToProps, null)(Locations);