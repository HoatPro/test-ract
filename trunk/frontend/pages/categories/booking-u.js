import React, { Component } from 'react';
import { Label, Header, Segment, Form } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {rackA} from '../../src/redux/_actions/categories/rackA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;
import Cookies from 'js-cookie';

class BookingU extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {racks, dispatch} = this.props;
        const {action = '', loading = 0, current = {}} = racks;
        let _current = Cookies.get('current');
        let _bookingU = Cookies.get('bookingU');

        if(_current && _bookingU) {
            _current = JSON.parse(_current);
            dispatch(rackA.updateCurrent('current', _current));
            _bookingU = JSON.parse(_bookingU);
            dispatch(rackA.handleBookingU(_bookingU));
            this.resetCookies();
        }
        this.getData();
        
    }

    resetCookies() {
        Cookies.remove('current');
        Cookies.remove('bookingU');
    }

    componentWillReceiveProps(nextProps) {
        const {racks} = nextProps;
        const {action = '', loading = 0, current = {}} = racks;
        const {bookingU = {}} = racks;
        if(action === 'insert' && !_.isUndefined(bookingU.saveSuccess) && bookingU.saveSuccess){
            // console.log("aaa");
            const url = prevURL + '/categories/rack-view?id=' + current.rackId;
            // console.log(url);
            Router.push(url);
        }

        // if((action === 'insert' && loading === 2 && !_.isUndefined(current.bookingUId) && current.bookingUId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
        //     Router.push('/categories/rack-view');
        // }
        // if(action === 'update' && loading === 0 && _.size(current) > 0) {
        //     if(current.parentId) this.setState({isParent: false});
        // }
    }

    getData() {
        this.props.dispatch(rackA.getOthers());
    }

    validate() {
        let {racks, dispatch} = this.props;
        let {bookingU = {}} = racks;

        let positionU = '';
        let height = '';
        let description = '';
        if(!bookingU.positionU) {
            positionU = 'This field is required';
        }
        if(!bookingU.height) {
            height = 'This field is required';
        }
        if(!bookingU.description) {
            description = 'This field is required';
        }
        if(!positionU && !height && !description) {
            return true;
        }
        dispatch(rackA.validate({positionU, height, description}));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {racks = {}, dispatch} = this.props;
        let {current = {}, bookingU = {}} = racks;
        let data = {
            rackId: current.rackId,
            ...bookingU,
        };
        dispatch(rackA.bookingU(data));
        // if(action === 'insert') {
        //     dispatch(rackA.insertCustomer(current));
        // } else if(action === 'update') {
        //     dispatch(rackA.updateCustomer(current));
        // }
    }

    handleCancel() {
        const {racks = {}} = this.props;
        if(racks.current.rackId) {
            Router.push(prevURL + '/categories/rack-view?id=' + racks.current.rackId);
        }
        // Router.push('/categories/rack-view');
    }

    handleChangeInput(e) {
        const {racks = {}, dispatch} = this.props;
        const {bookingU  = {}} = racks;
        const {name, value} = e.target;

        dispatch(rackA.handleBookingU({
            ...bookingU,
            [name]: value
        }));
    }

    handleSelect(e, data) {
        const {value, name} = data;
        const {dispatch, racks = {}} = this.props;
        const {bookingU = {}} = racks;
        dispatch(rackA.handleBookingU({
            ...bookingU,
            [name]: value
        }));
    }

    getPositionU () {
        let result = [];
        for(let i = 0; i < 42; i++) {
            result.push({text: i + 1, value: i + 1});
        }
        return result;
    }

    getHeight() {
        let result = [];
        for(let i = 0; i < 42; i++) {
            result.push({text: i + 1, value: i + 1});
        }
        return result;
    }

    render() {
        let {racks = {}} = this.props;
        let {bookingU = {}, validate = {
            positionU: '',
            height: '',
            description: ''
        }, loading = 0, action, locations = []} = racks;
        const title = 'Booking U';
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
                                <Form.Dropdown
                                    name='positionU' 
                                    label={<label>Position U <strong className="error-validate">*</strong></label>}
                                    fluid
                                    placeholder='Select...' 
                                    search 
                                    selection
                                    clearable
                                    options={this.getPositionU()}
                                    onChange={this.handleSelect.bind(this)}
                                    value={bookingU.positionU || ''}
                                    error={validate.positionU? true: false}
                                />
                                <Label className={`error-text ${validate.positionU? '': 'hide'}`} basic color='red' pointing>
                                    {validate.positionU}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Dropdown
                                    name='height'
                                    label={<label>Height <strong className="error-validate">*</strong></label>}
                                    fluid 
                                    placeholder='Select...'
                                    search 
                                    selection
                                    clearable
                                    options={this.getHeight()}
                                    onChange={this.handleSelect.bind(this)}
                                    value={bookingU.height || ''}
                                    error={validate.height? true: false}
                                />
                                <Label className={`error-text ${validate.height? '': 'hide'}`} basic color='red' pointing>
                                    {validate.height}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.TextArea name='description' fluid={"true"}
                                            onChange={this.handleChangeInput.bind(this)} 
                                            value={bookingU.description || ''} 
                                            label={<label>Description <strong className="error-validate">*</strong></label>} placeholder='Description' 
                                            error={validate.description? true: false} 
                                />
                            </Form.Group>
                            <Label style={{marginBottom: 12}} className={`error-text ${validate.description ? '': 'hide'}`} basic color='red' pointing>
                                {validate.description}
                            </Label>
                            <Form.Group >
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

BookingU.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(rackA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(rackA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
}
 
// const mapStateToProps =({racks}) => ({racks});
const mapStateToProps = (state, props) => {
    const { racks } = state;
    const _racks = props.racks;
    if(racks.originalUrl) {
        return {
            racks
        };
    } else {
        return {
            racks: {
                ...props.racks,
                ...racks,
            }
        };
    }
    
};

export default connect(mapStateToProps, null)(BookingU);