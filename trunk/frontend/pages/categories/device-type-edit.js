import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {deviceTypeA} from '../../src/redux/_actions/categories/deviceTypeA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class DeviceTypeEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {deviceTypes, dispatch} = this.props;;
        const {action = '', loading = 0, current = {}} = deviceTypes;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = deviceTypes;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(deviceTypeA.getDeviceTypeById({deviceTypeId: id}));
        }
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {deviceTypes} = nextProps;
        const {action = '', loading = 0, current = {}} = deviceTypes;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.deviceTypeId) && current.deviceTypeId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/categories/device-types');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        // this.props.dispatch(deviceTypeA.getOthers());
    }

    validate() {
        let {deviceTypes, dispatch} = this.props;
        let {current = {}} = deviceTypes;
        
        let deviceTypeName = '';
        if(!current.deviceTypeName) {
            deviceTypeName = 'May be not empty';
        }

        if(!deviceTypeName) {
            return true;
        }
        dispatch(deviceTypeA.validate({deviceTypeName: deviceTypeName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {deviceTypes, dispatch} = this.props;
        let {current, action} = deviceTypes;
        if(action === 'insert') {
            dispatch(deviceTypeA.insertDeviceType(current));
        } else if(action === 'update') {
            dispatch(deviceTypeA.updateDeviceType(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/categories/device-types');
    }

    handleChangeInput(e) {
        const {deviceTypes, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = deviceTypes;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(deviceTypeA.updateCurrent(name, value, _error));
    }

    render() {
        let {deviceTypes} = this.props;
        let {current = {
            deviceTypeName: '',
            description: ''
        }, validate = {
            deviceTypeName: '',
        }, loading = 0, action, locations = []} = deviceTypes;
        const title = action === 'update'? 'Update Device Type': 'Add Device Type';
        const _locations = _.map(locations, item => ({text: item.locationName, value: item.locationId}));
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
                                    name='deviceTypeName' 
                                    value={current.deviceTypeName} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Name <strong className="error-validate">*</strong></label>} 
                                    placeholder='Name' 
                                    error={validate.deviceTypeName? true: false}/>
                                <Label className={`error-text ${validate.deviceTypeName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.deviceTypeName}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.TextArea name='description' fluid={"true"} onChange={this.handleChangeInput.bind(this)} value={current.description || ''} label='Description' placeholder='Description' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Button secondary  type='submit' disabled={loading === 1} onClick={this.handleCancel.bind(this)}>Cancel</Form.Button>
                                <Form.Button primary type='submit' disabled={loading === 1} onClick={this.handleSave.bind(this)}>Save</Form.Button>
                            </Form.Group>
                        </Form>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

DeviceTypeEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(deviceTypeA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(deviceTypeA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({deviceTypes}) => ({deviceTypes});
const mapStateToProps = (state, props) => {
    const { deviceTypes } = state;
    const _deviceTypes = props.deviceTypes;
    if(deviceTypes.originalUrl) {
        return {
            deviceTypes
        };
    } else {
        return {
            deviceTypes: {
                ...props.deviceTypes,
                ...deviceTypes,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(DeviceTypeEdit);