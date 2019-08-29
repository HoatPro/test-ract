import React, { Component, Fragment } from 'react';
import { Button, Input, Header, Grid, Segment, Icon, Modal } from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actionA} from '../../redux/_actions/admin/actionA';
import _ from 'lodash';
import moment from 'moment/moment';
import _config from '../../utils/config';
const prevURL = _config[_config.environment].prevURL;

class Actions extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null
        }
    }

    componentDidMount() {
        document.title = " Action list ";
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {actions} = nextProps;
        const {action = '', loading = false, current = {}} = actions;
        if(action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const { actions = {}, dispatch } = this.props;
        const {search = {}, pagination = {}} = actions;
        dispatch(actionA.getActions({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {actions, dispatch} = this.props;
        const {list = []} = actions;
        const find = _.find(list, {actionId: id});
        if(find) {
            dispatch(actionA.handleDeleteRow(find));
        } 
    }

    handleUpdateRow(id) {
        const {actions = {}, dispatch} = this.props;
        const {list = []} = actions;
        const find = _.find(list, {actionId: id});
        if(find) {
            dispatch(actionA.handleUpdateRow(find));
        } 
    }

    handleClose() {
        this.props.dispatch(actionA.modal(false));
    }

    onDelete() {
        const {actions = {}} = this.props;
        const {current = {}} = actions;
        const id = current.actionId;
        if(id) this.props.dispatch(actionA.deleteAction({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {actions, dispatch} = this.props;
        let {search = {}, pagination = {}} = actions;
        search[name] = value;
        dispatch(actionA.handleSearch(value));
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
        const {actions = {}} = this.props;
        const {open = false, operations = [], current = {actionName: '', actionId: ''}, search = {str: ''}, searchLoading = false, pagination = {currentPage: 0, countPage: 1}, list = []} = actions;
        let _list = [];
        _.forEach(list, (item, i) => {
            let index = (pagination.currentPage * pagination.sizePage) + i + 1;
            let children = [index];
            _.forEach(['actionName', 'actionKey', 'icon', 'description', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') {
                    value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                    children.push(value);
                } else {
                    children.push(value);
                }
            });
            const id = item.actionId;
            children.push({
                cell: (<Fragment>
                    <Link to={`${prevURL}/admin/action-edit?id=${id}}`}>
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
            _list.push(children);
        });
        const header = [
            [
                { cell: <label>Index</label>},
                { cell: <label>Action name</label>},
                { cell: <label>Action key</label>},
                { cell: <label>Icon</label>},
                { cell: <label>Description</label>},
                { cell: <label>Created date</label>},
                { cell: <label></label>},
            ],
        ];
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>Action list</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link to={prevURL + "/admin/action-edit"}><Button primary>Insert</Button></Link>
                            </Grid.Column>
                        </Grid>
                        <CustomTable
                            header={header}
                            body={_list}
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
                            <Modal.Header>Delete Action</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to delete the action: {`"${current.actionName}"`}?</p>
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

const mapStateToProps = ({ actions }) => ({ actions });

export default connect(mapStateToProps, null)(Actions);