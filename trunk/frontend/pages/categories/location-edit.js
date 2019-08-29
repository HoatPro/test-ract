import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {locationA} from '../../src/redux/_actions/categories/locationA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class LocationEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {locations, dispatch} = this.props;
        const {action = '', loading = 0, current = {}} = locations;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = locations;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(locationA.getLocationById({locationId: id}));
        }
        this.getData();
        
    }

    componentWillReceiveProps(nextProps) {
        const {locations} = nextProps;
        const {action = '', loading = 0, current = {}} = locations;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.locationId) && current.locationId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/categories/locations');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
    }

    validate() {
        let {locations, dispatch} = this.props;
        let {current = {}} = locations;
        
        let locationName = '';
        if(!current.locationName) {
            locationName = 'May be not empty';
        }

        if(!locationName) {
            return true;
        }
        dispatch(locationA.validate({locationName: locationName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {locations, dispatch} = this.props;
        let {current, action} = locations;
        if(action === 'insert') {
            dispatch(locationA.insertLocation(current));
        } else if(action === 'update') {
            dispatch(locationA.updateLocation(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/categories/locations');
    }

    handleChangeInput(e) {
        const {locations, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = locations;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(locationA.updateCurrent(name, value, _error));
    }

    render() {
        let {locations} = this.props;
        let {current = {
            locationName: '',
            description: ''
        }, validate = {
            locationName: '',
        }, loading = 0, action} = locations;
        let parents = [];
        _.forEach(locations.parents, item => {
            parents.push({text: item.locationName, value: item.locationId});
        });
        const title = action === 'update'? 'Update Location': 'Add new Location';
        
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
                                <Form.Input name='locationName' value={current.locationName} onChange={this.handleChangeInput.bind(this)} fluid label={<label>Tên Địa điểm <strong className="error-validate">*</strong></label>} placeholder='Name Location' error={validate.locationName? true: false}/>
                                <Label className={`error-text ${validate.locationName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.locationName}
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

LocationEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(locationA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(locationA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({locations}) => ({locations});
const mapStateToProps = (state, props) => {
    const { locations } = state;
    const _locations = props.locations;
    if(locations.originalUrl) {
        return {
            locations
        };
    } else {
        return {
            locations: {
                ...props.locations,
                ...locations,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(LocationEdit);