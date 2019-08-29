import React, {Component} from 'react';
import {Label, Header, Segment, Form} from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';

import {Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {datacenterA} from '../../redux/_actions/categories/datacenterA';
import _ from 'lodash';
import _config from '../../utils/config';

const prevURL = _config[_config.environment].prevURL;

class DataCenterEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let {location, dispatch} = this.props;

        const query = location.search || "";
        const params = new URLSearchParams(query);
        const originalUrl = location.pathname;

        if (params.get('id')) {
            dispatch(datacenterA.initUpdate({originalUrl, action: 'update'}));
        } else {
            dispatch(datacenterA.initUpdate({originalUrl, action: 'insert'}));
        }
    }

    componentDidMount() {
        const {datacenters, dispatch, location} = this.props;
        const {action = '', loading = 0, current = {}} = datacenters;
        if (action === 'update' && loading === 0 && _.size(current) === 0) {
            const query = location.search || "";
            const params = new URLSearchParams(query);
            const id = params.get('id') || null;
            if (!_.isNull(id)) dispatch(datacenterA.getDataCenterById({dataCenterId: id}));
        }

        this.getData();
        document.title = action === 'update' ? 'Update DataCenter' : 'Add new DataCenter';

    }

    componentWillReceiveProps(nextProps) {
        const {datacenters} = nextProps;
        const {history} = this.props;
        const {action = '', loading = 0, current = {}} = datacenters;
        if ((action === 'insert' && loading === 2 && !_.isUndefined(current.dataCenterId) && current.dataCenterId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            history.push(prevURL + '/categories/datacenters');
        }
        if (action === 'update' && loading === 0 && _.size(current) > 0) {
            if (current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        this.props.dispatch(datacenterA.getOthers());
    }

    validate() {
        let {datacenters, dispatch} = this.props;
        let {current = {}} = datacenters;

        let dataCenterName = '';
        if (!current.dataCenterName) {
            dataCenterName = 'May be not empty';
        }

        if (!dataCenterName) {
            return true;
        }
        dispatch(datacenterA.validate({dataCenterName: dataCenterName}));
        return false;
    }

    handleSave(e) {
        if (!this.validate()) return false;
        const {datacenters, dispatch} = this.props;
        let {current, action} = datacenters;
        if (action === 'insert') {
            dispatch(datacenterA.insertDatacenter(current));
        } else if (action === 'update') {
            dispatch(datacenterA.updateDatacenter(current));
        }
    }

    handleCancel() {
        const {history} = this.props;
        history.push(prevURL + '/categories/datacenters');
    }

    handleChangeInput(e) {
        const {datacenters, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = datacenters;
        let _error = '';
        if (!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(datacenterA.updateCurrent(name, value, _error));
    }

    handleSelect(e, data) {
        this.props.dispatch(datacenterA.updateCurrent('locationId', data.value));
    }

    render() {
        let {datacenters} = this.props;
        let {
            current = {
                dataCenterName: '',
                description: ''
            }, validate = {
                dataCenterName: '',
            }, loading = 0, action, locations = []
        } = datacenters;
        const title = action === 'update' ? 'Update DataCenter' : 'Add new DataCenter';
        const _locations = _.map(locations, item => ({text: item.locationName, value: item.locationId}));
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>{title}</Header>
                        <Form>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input name='dataCenterName' value={current.dataCenterName}
                                            onChange={this.handleChangeInput.bind(this)} fluid
                                            label={<label>Name <strong className="error-validate">*</strong></label>}
                                            placeholder='Name' error={validate.dataCenterName ? true : false}/>
                                <Label className={`error-text ${validate.dataCenterName ? '' : 'hide'}`} basic
                                       color='red' pointing>
                                    {validate.dataCenterName}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input name='dataCenterKey' value={current.dataCenterKey}
                                            onChange={this.handleChangeInput.bind(this)} fluid
                                            label={<label>Short Name<strong
                                                className="error-validate">*</strong></label>} placeholder='Short Name'
                                            error={validate.dataCenterKey ? true : false}/>
                                <Label className={`error-text ${validate.dataCenterKey ? '' : 'hide'}`} basic
                                       color='red' pointing>
                                    {validate.dataCenterKey}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input type="number" name='totalRoom' value={current.totalRoom || 0}
                                            onChange={this.handleChangeInput.bind(this)} fluid
                                            label={<label>Total Room<strong
                                                className="error-validate">*</strong></label>} placeholder='Total Room'
                                            error={validate.totalRoom ? true : false}/>
                                <Label className={`error-text ${validate.totalRoom ? '' : 'hide'}`} basic color='red'
                                       pointing>
                                    {validate.totalRoom}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Dropdown
                                    label='Location'
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_locations}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.locationId}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.TextArea name='description' fluid={"true"}
                                               onChange={this.handleChangeInput.bind(this)}
                                               value={current.description || ''} label='Description'
                                               placeholder='Description'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Button secondary type='submit' disabled={loading === 1}
                                             onClick={this.handleCancel.bind(this)}>Cancel</Form.Button>
                                <Form.Button primary type='submit' disabled={loading === 1}
                                             onClick={this.handleSave.bind(this)}>Save</Form.Button>
                            </Form.Group>
                        </Form>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}


// const mapStateToProps =({datacenters}) => ({datacenters});
const mapStateToProps = (state, props) => {
    const {datacenters} = state;
    const _datacenters = props.datacenters;
    if (datacenters.originalUrl) {
        return {
            datacenters
        };
    } else {
        return {
            datacenters: {
                ...props.datacenters,
                ...datacenters,
            }
        };
    }

};

export default connect(mapStateToProps, null)(DataCenterEdit);