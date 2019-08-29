import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {regionA} from '../../src/redux/_actions/categories/regionA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class Regions extends Component {

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
        const {regions} = nextProps;
        const {action = '', loading = false, current = {}} = regions;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { regions, dispatch } = this.props;
        const {search = {}, pagination = {}} = regions;
        dispatch(regionA.getRegions({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {regions, dispatch} = this.props;
        const {list = []} = regions;
        const find = _.find(list, {regionId: id});
        if(find) {
            dispatch(regionA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {regions, dispatch} = this.props;
        const {list = []} = regions;
        const find = _.find(list, {regionId: id});
        if(find) {
            dispatch(regionA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(regionA.modal(false));
    }

    onDelete() {
        const {regions} = this.props;
        const {current = {}} = regions;
        const id = current.regionId;
        if(id) this.props.dispatch(regionA.deleteRegion({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {regions, dispatch} = this.props;
        let {search = {}, pagination = {}} = regions;
        search[name] = value;
        dispatch(regionA.handleSearch(value));
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
        const {regions} = this.props;
        const {open = false, current = {regionName: '', regionId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = regions;
        let list = [];
        _.forEach(regions.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['regionName', 'description', 'departmentName', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.regionId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/region-edit?id=' + id} >
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
            ['Index', 'Region', 'Description', 'Department', 'Created date', ''],
        ];
        return (
            <div>
                <Head>
                    <title>Region List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Region List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Link href={prevURL + "/categories/region-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove Region</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Region: {`"${current.regionName}"`}?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ regions }) => ({ regions });

export default connect(mapStateToProps, null)(Regions);