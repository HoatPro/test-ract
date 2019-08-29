import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {departmentA} from '../../src/redux/_actions/categories/departmentA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class Departments extends Component {

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
        const {departments} = nextProps;
        const {action = '', loading = false, current = {}} = departments;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { departments, dispatch } = this.props;
        const {search = {}, pagination = {}} = departments;
        dispatch(departmentA.getDepartments({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {departments, dispatch} = this.props;
        const {list = []} = departments;
        const find = _.find(list, {departmentId: id});
        if(find) {
            dispatch(departmentA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {departments, dispatch} = this.props;
        const {list = []} = departments;
        const find = _.find(list, {departmentId: id});
        if(find) {
            dispatch(departmentA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(departmentA.modal(false));
    }

    onDelete() {
        const {departments} = this.props;
        const {current = {}} = departments;
        const id = current.departmentId;
        if(id) this.props.dispatch(departmentA.deleteDepartment({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {departments, dispatch} = this.props;
        let {search = {}, pagination = {}} = departments;
        search[name] = value;
        dispatch(departmentA.handleSearch(value));
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
        const {departments} = this.props;
        const {open = false, current = {departmentName: '', departmentId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = departments;
        let list = [];
        _.forEach(departments.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['departmentName', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.departmentId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/categories/department-edit?id=' + id} >
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
            ['STT', 'Department', 'Description', 'Created date', ''],
        ];
        return (
            <div>
                <Head>
                    <title>Department List</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Department List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Department parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link href={prevURL + "/categories/department-edit"}><Button primary>Add</Button></Link>
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
                            <Modal.Header>Remove Department</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Department: {`"${current.departmentName}"`}?</p>
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

const mapStateToProps = ({ departments }) => ({ departments });

export default connect(mapStateToProps, null)(Departments);