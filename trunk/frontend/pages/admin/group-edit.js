import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {groupA} from '../../src/redux/_actions/admin/groupA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class GroupEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {groups, dispatch} = this.props;;
        const {action = '', loading = 0, current = {}} = groups;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = groups;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(groupA.getGroupById({groupId: id}));
        }
        
    }

    componentWillReceiveProps(nextProps) {
        const {groups} = nextProps;
        const {action = '', loading = 0, current = {}} = groups;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.groupId) && current.groupId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/admin/groups');
        }
    }

    validate() {
        let {groups, dispatch} = this.props;
        let {current = {}} = groups;
        
        let groupName = '';
        if(!current.groupName) {
            groupName = 'May be not empty';
        }
       
        if(!groupName) {
            return true;
        }
        dispatch(groupA.validate({groupName: groupName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {groups, dispatch} = this.props;
        let {current, action} = groups;
        if(action === 'insert') {
            dispatch(groupA.insertGroup(current));
        } else if(action === 'update') {
            dispatch(groupA.updateGroup(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/admin/groups');
    }

    handleChangeInput(e) {
        const {groups = {}, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = groups;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(groupA.updateCurrent(name, value, _error));
    }

    render() {
        let {groups = {}} = this.props;
        let {current = {
            groupId: '',
            groupName: '',
            description: ''
        }, validate = {
            groupName: '',
            groupKey: '',
        }, loading = 0, action} = groups;
        const title = action === 'update'? 'Cập nhật Nhóm quyền': 'Thêm mới Nhóm quyền';
      
        return (
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>{title}</Header>
                        <Form>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input name='groupName' value={current.groupName} onChange={this.handleChangeInput.bind(this)} fluid label={<label>Tên Group <strong className="error-validate">*</strong></label>} placeholder='Tên Group' error={validate.groupName? true: false}/>
                                <Label className={`error-text ${validate.groupName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.groupName}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.TextArea name='description' fluid={"true"} onChange={this.handleChangeInput.bind(this)} value={current.description || ''} label='Mô tả' placeholder='Mô tả' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Button secondary type='submit' disabled={loading === 1} onClick={this.handleCancel.bind(this)}>Cancel</Form.Button>
                                <Form.Button primary type='submit' disabled={loading === 1} onClick={this.handleSave.bind(this)}>Save</Form.Button>
                            </Form.Group>
                        </Form>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

GroupEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(groupA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(groupA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({groups}) => ({groups});
const mapStateToProps = (state, props) => {
    const { groups = {} } = state;
    const _groups = props.groups;
    if(groups.originalUrl) {
        return {
            groups
        };
    } else {
        return {
            groups: {
                ..._groups,
                ...groups,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(GroupEdit);