import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {customerA} from '../../src/redux/_actions/categories/customerA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class CustomerEdit extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {customers, dispatch} = this.props;;
        const {action = '', loading = 0, current = {}} = customers;
        if(action === 'update' && loading === 0 && _.size(current) === 0) {
            const {originalUrl =  ''} = customers;
            const regex = new RegExp(/id\=(\d+)/);
            const find = originalUrl.match(regex);
            const id = find? parseInt(find[1]): null;
            if(!_.isNull(id)) dispatch(customerA.getCustomerById({customerId: id}));
        }
        this.getData();
        
    }

    componentWillReceiveProps(nextProps) {
        const {customers} = nextProps;
        const {action = '', loading = 0, current = {}} = customers;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.customerId) && current.customerId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            Router.push(prevURL + '/categories/customers');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        this.props.dispatch(customerA.getOthers());
    }

    validate() {
        let {customers, dispatch} = this.props;
        let {current = {}} = customers;
        
        let customerName = '';
        if(!current.customerName) {
            customerName = 'May be not empty';
        }

        if(!customerName) {
            return true;
        }
        dispatch(customerA.validate({customerName: customerName}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {customers, dispatch} = this.props;
        let {current, action} = customers;
        if(action === 'insert') {
            dispatch(customerA.insertCustomer(current));
        } else if(action === 'update') {
            dispatch(customerA.updateCustomer(current));
        }
    }

    handleCancel() {
        Router.push(prevURL + '/categories/customers');
    }

    handleChangeInput(e) {
        const {customers, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = customers;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(customerA.updateCurrent(name, value, _error));
    }

    handleSelect(e, data) {
        this.props.dispatch(customerA.updateCurrent('locationId', data.value));
    }

    render() {
        let {customers} = this.props;
        let {current = {
            customerName: '',
            description: ''
        }, validate = {
            customerName: '',
        }, loading = 0, action, locations = []} = customers;
        const title = action === 'update'? 'Update Customer': 'Add Customer';
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
                                    name='customerName' 
                                    value={current.customerName} 
                                    onChange={this.handleChangeInput.bind(this)} 
                                    fluid 
                                    label={<label>Name <strong className="error-validate">*</strong></label>} 
                                    placeholder='Name' 
                                    error={validate.customerName? true: false}/>
                                <Label className={`error-text ${validate.customerName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.customerName}
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

CustomerEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(customerA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(customerA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}

// const mapStateToProps =({customers}) => ({customers});
const mapStateToProps = (state, props) => {
    const { customers } = state;
    const _customers = props.customers;
    if(customers.originalUrl) {
        return {
            customers
        };
    } else {
        return {
            customers: {
                ...props.customers,
                ...customers,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(CustomerEdit);