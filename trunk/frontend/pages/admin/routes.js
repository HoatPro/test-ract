import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import CustomTable from '../../src/components/Table/Table';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import {routeA} from '../../src/redux/_actions/admin/routeA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null
        }
    }

    componentWillMount() {
        this.props.dispatch(routeA.getAllAction());
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {routes} = nextProps;
        const {action = '', loading = false, current = {}} = routes;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { routes, dispatch } = this.props;
        const {search = {}, pagination = {}} = routes;
        dispatch(routeA.getRouteParents());
        dispatch(routeA.getRoutes({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {routes, dispatch} = this.props;
        const {list = []} = routes;
        const find = _.find(list, {routeId: id});
        if(find) {
            dispatch(routeA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {routes = {}, dispatch} = this.props;
        const {list = [], parents = [], actions = []} = routes;
        const find = _.find(list, {routeId: id});
        if(find) {
            let _find = {...find};
            const code = _find.code;
            _find._actions = find.actions;
            _find.actions = _.map(_find.actions, a => a.actionKey);
            if(_find.actions.length > 0 && _find.actions.length < actions.length) {
                _find.indeterminate = true;
            }
            if(code.length > 3) {
                const parent = _.find(parents, {code: code.slice(0, 3)});
                _find.isParent = false;
                _find.parentId = parent.routeId;
            } else {
                _find.isParent = true;
            }
            dispatch(routeA.handleUpdateRow(_find));
        } 
    }

    handleClose() {
        this.props.dispatch(routeA.modal(false));
    }

    onDelete() {
        const {routes} = this.props;
        const {current = {}} = routes;
        const id = current.routeId;
        if(id) this.props.dispatch(routeA.deleteRoute({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {routes, dispatch} = this.props;
        let {search = {}, pagination = {}} = routes;
        search[name] = value;
        dispatch(routeA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.getData(search, pagination);
        }, 500);
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    render() {
        const {routes = {}} = this.props;
        const {parents = [], actions = [], open = false, current = {routeName: '', routeId: '',}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}} = routes;
        let list = [];
        let actionLength = actions.length;
        _.forEach(routes.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['routeName', 'routeKey', 'parentId', 'actions', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'actions') {
                    if(actionLength === 0) actionLength = 4;
                    _.forEach(actions, a => {
                        const index = _.findIndex(value, {actionId: a.actionId});
                        let text = '';
                        if(index > -1) {
                            text = <Icon name="check" color="green" />;
                        }
                        temp.push({
                            cell: <label>{text}</label>,
                            props: {
                                className: 'text-center'
                            }
                        });
                    })
                    return;
                }
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(c === 'parentId' && item.code.length > 3) {
                    const find = _.find(parents, {code: item.code.slice(0, 3)});
                    if(find) {
                        value = find.routeName;
                    }
                }
                if(_.isNull(value)) value = ''; 
                temp.push(value);
            });
            const id = item.routeId;
            temp.push({
                cell: (<Fragment>
                    <Link href={prevURL + '/admin/route-edit?id=' + id} >
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
        const cellActions = actionLength === 0 ? [
            { cell: <label>View</label>, props: { className: 'cell-border-left text-center'} },
            { cell: <label>Insert</label>, props: { className: 'text-center'} },
            { cell: <label>Update</label>, props: { className: 'text-center'} },
            { cell: <label>Delete</label>, props: { className: 'text-center'} },
        ] : _.map(actions, (a, index) => {return { cell: <label>{a.actionName}</label>, props: index === 0? { className: 'cell-border-left text-center'}: { className: 'text-center'} };});

        const header = [
            [
                { cell: <label>Index</label>, props: {rowSpan: 2}},
                { cell: <label>Route name</label>, props: {rowSpan: 2}},
                { cell: <label>Route link</label>, props: {rowSpan: 2}},
                { cell: <label>Route parent</label>, props: {rowSpan: 2}},
                { cell: <label>Actions</label>, props: {colSpan: cellActions.length, className: 'text-center'}},
                { cell: <label>Description</label>, props: {rowSpan: 2}},
                { cell: <label>Created date</label>, props: {rowSpan: 2}},
                { cell: <label></label>, props: {rowSpan: 2}},
            ],
            cellActions
        ];
        const columnCount = header[0].length + header[1].length - 1;
        return (
            <div>
                <Head>
                    <title>Route list</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Route list</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Route parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link href={prevURL + "/admin/route-edit"}><Button primary>Insert</Button></Link>
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
                            columnCount={columnCount}
                        />
                        <Modal size={'mini'} open={open} 
                            onClose={this.handleClose.bind(this)}
                            closeOnEscape={true}
                            closeOnDimmerClick={false}
                        >
                            <Modal.Header>Delete Route</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to delete the Route: {`"${current.routeName}"`}?</p>
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

const mapStateToProps = ({ routes }) => ({ routes });

export default connect(mapStateToProps, null)(Routes);