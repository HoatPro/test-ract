import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {datacenterA} from '../../src/redux/_actions/categories/datacenterA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class Datacenters extends Component {

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
        const {datacenters} = nextProps;
        const {action = '', loading = false, current = {}} = datacenters;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { datacenters, dispatch } = this.props;
        const {search = {}, pagination = {}} = datacenters;
        dispatch(datacenterA.getDatacenters({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {datacenters, dispatch} = this.props;
        const {list = []} = datacenters;
        const find = _.find(list, {dataCenterId: id});
        if(find) {
            dispatch(datacenterA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {datacenters, dispatch} = this.props;
        const {list = []} = datacenters;
        const find = _.find(list, {dataCenterId: id});
        if(find) {
            dispatch(datacenterA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(datacenterA.modal(false));
    }

    onDelete() {
        const {datacenters} = this.props;
        const {current = {}} = datacenters;
        const id = current.dataCenterId;
        if(id) this.props.dispatch(datacenterA.deleteDatacenter({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {datacenters, dispatch} = this.props;
        let {search = {}, pagination = {}} = datacenters;
        search[name] = value;
        dispatch(datacenterA.handleSearch(value));
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
        const {datacenters} = this.props;
        const {open = false, current = {dataCenterName: '', dataCenterId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = datacenters;
        let list = [];
        _.forEach(datacenters.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['dataCenterName', 'dataCenterKey', 'totalRoom', 'locationName', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.dataCenterId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/datacenter-edit?id=' + id} >
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
            ['Index', 'Name', 'Short Name', 'Total Room', 'Location', 'Description', 'Created Date', ''],
        ];
        return (
            <div>
                <Head>
                    <title>DataCenter List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>DataCenter List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Datacenter parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link href={prevURL + "/categories/datacenter-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove DataCenter</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove {`"${current.dataCenterName}"`} datacenter?</p>
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

const mapStateToProps = ({ datacenters }) => ({ datacenters });

export default connect(mapStateToProps, null)(Datacenters);