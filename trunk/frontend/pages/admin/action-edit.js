import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {actionA} from '../../src/redux/_actions/admin/actionA';
import _ from 'lodash';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class ActionEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions, dispatch} = this.props;
        const {action = '', loading = 0, current = {}} = actions;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = actions;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(actionA.getActionById({actionId: id}));
        }
        
    }

    componentWillReceiveProps(nextProps) {
        const {actions} = nextProps;
        const {action = '', loading = 0, current = {}} = actions;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.actionId) && current.actionId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/admin/actions');
        }
    }

    validate() {
        let {actions, dispatch} = this.props;
        let {current = {}} = actions;
        
        let actionName = '';
        let actionKey = '';
        if(!current.actionName) {
            actionName = 'May be not empty';
        }

        if(!current.actionKey) {
            actionKey = 'May be not empty';
        }
       
        if(!actionName && !actionKey) {
            return true;
        }
        dispatch(actionA.validate({actionName: actionName, actionKey: actionKey}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {actions, dispatch} = this.props;
        let {current, action} = actions;
        if(action === 'insert') {
            dispatch(actionA.insertAction(current));
        } else if(action === 'update') {
            dispatch(actionA.updateAction(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/admin/actions');
    }

    handleChangeInput(e) {
        const {actions = {}, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = actions;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(actionA.updateCurrent(name, value, _error));
    }

    render() {
        let {actions = {}} = this.props;
        let {current = {
            actionId: '',
            actionName: '',
            icon: '',
            description: ''
        }, validate = {
            actionName: '',
            actionKey: '',
        }, loading = 0, action, operations= [], routes = [], expanded = []} = actions;
        const title = action === 'update'? 'Update Action': 'Insert Action';
       
        const _routes = _.map(routes, item => ({text: item.routeName, value: item.routeId}));
        
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
                                <Form.Input 
                                    name='actionName' 
                                    value={current.actionName} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Action name<strong className="error-validate">*</strong></label>} 
                                    placeholder='Tên Action' error={validate.actionName? true: false}/>
                                <Label className={`error-text ${validate.actionName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.actionName}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input 
                                    name='actionKey' 
                                    value={current.actionKey} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Action key<strong className="error-validate">*</strong></label>} 
                                    placeholder='Action key' error={validate.actionKey? true: false}/>
                                <Label className={`error-text ${validate.actionKey? '': 'hide'}`} basic color='red' pointing>
                                    {validate.actionKey}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input 
                                    name='icon'
                                    value={current.icon} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Icon</label>} 
                                    placeholder='Icon'/>
                                
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.TextArea 
                                name='description' 
                                fluid={"true"} 
                                rows={3}
                                onChange={this.handleChangeInput.bind(this)} value={current.description || ''} label='Description' placeholder='Description' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Button secondary type='submit' disabled={loading === 1} onClick={this.handleCancel.bind(this)}>Hủy</Form.Button>
                                <Form.Button primary type='submit' disabled={loading === 1} onClick={this.handleSave.bind(this)}>Lưu</Form.Button>
                            </Form.Group>
                        </Form>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

ActionEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(actionA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(actionA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({actions}) => ({actions});
const mapStateToProps = (state, props) => {
    const { actions = {} } = state;
    const _actions = props.actions;
    if(actions.originalUrl) {
        return {
            actions
        };
    } else {
        return {
            actions: {
                ..._actions,
                ...actions,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(ActionEdit);