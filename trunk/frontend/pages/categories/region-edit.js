import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {regionA} from '../../src/redux/_actions/categories/regionA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class RegionEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {regions, dispatch} = this.props;
        const {action = '', loading = 0, current = {}} = regions;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = regions;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(regionA.getRegionById({regionId: id}));
        }
        this.getData();
        
    }

    componentWillReceiveProps(nextProps) {
        const {regions} = nextProps;
        const {action = '', loading = 0, current = {}} = regions;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.regionId) && current.regionId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/categories/regions');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        this.props.dispatch(regionA.getOthers());
    }

    validate() {
        let {regions, dispatch} = this.props;
        let {current = {}} = regions;
        
        let regionName = '';
        if(!current.regionName) {
            regionName = 'May be not empty';
        }

        if(!regionName) {
            return true;
        }
        dispatch(regionA.validate({regionName: regionName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {regions, dispatch} = this.props;
        let {current, action} = regions;
        if(action === 'insert') {
            dispatch(regionA.insertRegion(current));
        } else if(action === 'update') {
            dispatch(regionA.updateRegion(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/categories/regions');
    }

    handleChangeInput(e) {
        const {regions, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = regions;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(regionA.updateCurrent(name, value, _error));
    }

    handleSelect(e, data) {
        this.props.dispatch(regionA.updateCurrent('departmentId', data.value));
    }

    render() {
        let {regions} = this.props;
        let {current = {
            regionName: '',
            description: ''
        }, validate = {
            regionName: '',
        }, loading = 0, action, departments = []} = regions;
        const title = action === 'update'? 'Update Region': 'Add Region';
        const _departments = _.map(departments, item => ({text: item.departmentName, value: item.departmentId}));
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
                                <Form.Input name='regionName' value={current.regionName} onChange={this.handleChangeInput.bind(this)} fluid label={<label>Name <strong className="error-validate">*</strong></label>} placeholder='Name' error={validate.regionName? true: false}/>
                                <Label className={`error-text ${validate.regionName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.regionName}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Dropdown
                                    label='Department' 
                                    fluid 
                                    placeholder='Select...' 
                                    search 
                                    selection
                                    clearable
                                    options={_departments}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.departmentId}
                                />
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

RegionEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(regionA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(regionA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({regions}) => ({regions});
const mapStateToProps = (state, props) => {
    const { regions } = state;
    const _regions = props.regions;
    if(regions.originalUrl) {
        return {
            regions
        };
    } else {
        return {
            regions: {
                ...props.regions,
                ...regions,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(RegionEdit);