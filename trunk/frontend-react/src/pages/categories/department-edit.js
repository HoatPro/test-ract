import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';

import {Router} from 'react-router-dom';
import { connect } from 'react-redux';
import {departmentA} from '../../redux/_actions/categories/departmentA';
import _ from 'lodash';
import _config from '../../utils/config';
const prevURL = _config[_config.environment].prevURL;

class DepartmentEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let {location, dispatch} = this.props;

        const query = location.search || "";
        const params = new URLSearchParams(query);
        const originalUrl = location.pathname;

        if (params.get('id')) {
            dispatch(departmentA.initUpdate({originalUrl, action: 'update'}));
        } else {
            dispatch(departmentA.initUpdate({originalUrl, action: 'insert'}));
        }
    }

    componentDidMount() {
        const {departments, dispatch} = this.props;
        const {action = '', loading = 0, current = {}} = departments;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = departments;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(departmentA.getDepartmentById({departmentId: id}));
        }
        this.getData();
        document.title = action === 'update'? 'Update Department': 'Add Department';
    }

    componentWillReceiveProps(nextProps) {
        const {departments} = nextProps;
        const {history} = this.props;
        const {action = '', loading = 0, current = {}} = departments;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.departmentId) && current.departmentId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            history.push(prevURL + '/categories/departments');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        this.props.dispatch(departmentA.getOthers());
    }

    validate() {
        let {departments, dispatch} = this.props;
        let {current = {}} = departments;
        
        let departmentName = '';
        if(!current.departmentName) {
            departmentName = 'May be not empty';
        }

        if(!departmentName) {
            return true;
        }
        dispatch(departmentA.validate({departmentName: departmentName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {departments, dispatch} = this.props;
        let {current, action} = departments;
        if(action === 'insert') {
            dispatch(departmentA.insertDepartment(current));
        } else if(action === 'update') {
            dispatch(departmentA.updateDepartment(current));
        }
    }

    handleCancel() {
        const {history} = this.props;
        history.push(prevURL + '/categories/departments');
    }

    handleChangeInput(e) {
        const {departments, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = departments;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(departmentA.updateCurrent(name, value, _error));
    }

    handleSelect(e, data) {
        this.props.dispatch(departmentA.updateCurrent('locationId', data.value));
    }

    render() {
        let {departments} = this.props;
        let {current = {
            departmentName: '',
            description: ''
        }, validate = {
            departmentName: '',
        }, loading = 0, action, locations = []} = departments;
        const title = action === 'update'? 'Update Department': 'Add Department';
        const _locations = _.map(locations, item => ({text: item.locationName, value: item.locationId}));
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>{title}</Header>
                        <Form>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input 
                                    name='departmentName' 
                                    value={current.departmentName} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Name <strong className="error-validate">*</strong></label>} 
                                    placeholder='Name' 
                                    error={validate.departmentName? true: false}/>
                                <Label className={`error-text ${validate.departmentName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.departmentName}
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

// const mapStateToProps =({departments}) => ({departments});
const mapStateToProps = (state, props) => {
    const { departments } = state;
    const _departments = props.departments;
    if(departments.originalUrl) {
        return {
            departments
        };
    } else {
        return {
            departments: {
                ...props.departments,
                ...departments,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(DepartmentEdit);