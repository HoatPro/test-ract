import React, { Component } from 'react';
import { Label, Header, Segment, Form, Image, Grid, Icon } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
// import {layoutA} from '../../src/redux/_actions/categories/layoutA';
import {layoutA} from '../../src/redux/_actions/layoutA';
import _ from 'lodash';
import _config from '../../src/utils/config';
const prevURL = _config[_config.environment].prevURL;

class RackEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refresh: true,
        }
    }

    componentDidMount() {
        const {layouts = {}, dispatch} = this.props;
        let {action = '', loading = 0, current = {}} = layouts;
        const router = Router.router || {};
        const query = router.query || {};
        const id = query.id || null;
        if(!id && _.size(query) > 0 && !current.isUpdateCurrent) {
            let temp = {};
            _.forEach(query, (value, key) => {
                if(!isNaN(value)) {
                    value = parseInt(value);
                }
                temp[key] = value;
            });
            current = {...current, ...temp, isUpdateCurrent: true};
            dispatch(layoutA.updateCurrent('current',current));
        }
        if(id && loading === 0 && _.size(current) === 0) {

            // const {originalUrl =  ''} = layouts;
            // const regex = new RegExp(/id\=(\d+)/);
            // const find = originalUrl.match(regex);
            // const id = find? parseInt(find[1]): null;
            console.log('id', id);
            if(!_.isNull(id)) dispatch(layoutA.getRackById({rackId: id}));
        }
        this.getData();

    }

    componentWillReceiveProps(nextProps) {
        const {layouts} = nextProps;
        const {action = '', loading = 0, current = {}} = layouts;
        if((action === 'insert' && loading === 2 && !_.isUndefined(current.rackId) && current.rackId !== '') || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            let query = [];
            _.forEach(current, (value, key) => {
                if(value && key !== 'draw') {
                    query.push(`${key}=${value}`);
                }
            });
            if(current.cancel) {
                Router.push(prevURL + current.cancel);
            } else {
                Router.push(prevURL + `/layouts/layouts`);
            }
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }
    }

    getData() {
        this.props.dispatch(layoutA.getOthers());
    }

    validate() {
        let {layouts, dispatch} = this.props;
        let {current = {}} = layouts;

        let rackName = '';
        let zoneId = '';
        if(!current.rackName) {
            rackName = 'May be not empty';
        }

        if(!current.zoneId) {
            zoneId = 'May be not empty';
        }

        if(!rackName && !zoneId) {
            return true;
        }
        dispatch(layoutA.validate({
            rackName: rackName,
            zoneId: zoneId,
        }));
        return false;
    }

    handleSave(e) {
        console.log('save', this.props.layouts.current);
        if(!this.validate()) return false;
        const {layouts, dispatch} = this.props;
        let {current, action} = layouts;
        const data = {
            ...current,
        };
        if(data.draw) delete data.draw;
        console.log('save 1', data, action);
        const id = Router.router.query.id || null;
        if(id) {
            dispatch(layoutA.updateRackLayout(data));

        } else {
            dispatch(layoutA.insertRackLayout(data));
        }
    }

    handleCancel() {
        const {layouts = {}} = this.props;
        const {current = {}} = layouts;

        if(current.cancel) {
            Router.push(prevURL + current.cancel);
        } else {
            Router.push(prevURL + '/layouts/layouts');
        }

    }

    handleChangeInput(e) {
        const {layouts, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = layouts;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(layoutA.updateCurrent(name, value, _error));
    }

    getChildState(data) {
        this.props.dispatch(layoutA.updateCurrent('images', data));
    }

    onCropEnd = () => {
        let crop = this.refs.cropper.getData();
        console.log(crop);
        this.props.dispatch(layoutA.updateCurrent('crop', {
            width: crop.width,
            height: crop.height,
            x: crop.x,
            y: crop.y,
        }));
    };

    render() {
        let {layouts = {}} = this.props;
        let {
            current = {},
            validate = {
                rackName: '',
            },
            loading = 0,
            action,
            _dataCenters = [],
            dataCenters = [],
            _rooms = [],
            rooms = [],
            _zones = [],
            zones = []
        } = layouts;

        const router = Router.router || {};
        const query = router.query || {};
        const id = query.id || null;
        const title = id? 'Edit Rack': 'Add new Rack';
        if(current.dataCenterId && _.size(_rooms) === 0) {
            _rooms = _.filter(rooms, item => {return (current.dataCenterId === item.dataCenterId)});
        }
        if(current.roomId && _.size(_zones) === 0) {
            _zones = _.filter(zones, item => {return (current.roomId === item.roomId)});
        }
        _dataCenters = _.map(dataCenters, item => ({text: item.dataCenterName, value: item.dataCenterId}));
        _rooms = _.map(_rooms, item => ({text: item.roomName, value: item.roomId}));
        _zones = _.map(_zones, item => ({text: item.zoneName, value: item.zoneId}));
        let list = [];
        for(let i = 42; i > 0; i--) {
            list.push([{cell: <label>{i}</label>, props: {width: 1}}, i, {cell: <Icon name='setting' />, props: {width: 1}}]);
        }
        return (
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>{title}</Header>
                        <Grid className='grid-toolbar'>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Dropdown
                                                name='dataCenterId'
                                                label={<label>Data Center</label>}
                                                fluid
                                                placeholder='Select...'
                                                search
                                                selection
                                                clearable
                                                disabled
                                                options={_dataCenters}
                                                // onChange={this.handleSelectDataCenter.bind(this)}
                                                value={current.dataCenterId}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Dropdown
                                                name='roomId'
                                                label={<label>Room</label>}
                                                fluid
                                                placeholder='Select...'
                                                search
                                                selection
                                                clearable
                                                disabled
                                                options={_rooms}
                                                // onChange={this.handleSelectRoom.bind(this)}
                                                value={current.roomId}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Dropdown
                                                name='zoneId'
                                                label={<label>Zone</label>}
                                                fluid
                                                placeholder='Select...'
                                                search
                                                selection
                                                clearable
                                                disabled
                                                options={_zones}
                                                // onChange={this.handleSelectRoom.bind(this)}
                                                value={current.zoneId}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className='row-edit'>
                                <Grid.Column width={8}>
                                    <Form>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='rackName'
                                                value={current.rackName}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Name <strong className="error-validate">*</strong></label>}
                                                placeholder='Name'
                                                error={validate.rackName? true: false}
                                            />
                                            <Label className={`error-text ${validate.rackName? '': 'hide'}`} basic color='red' pointing>
                                                {validate.rackName}
                                            </Label>
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='model'
                                                value={current.model}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Model</label>}
                                                placeholder='Model'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='SNMP'
                                                value={current.SNMP}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>SNMP</label>}
                                                placeholder='SNMP'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='uNumber'
                                                value={current.uNumber}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>U Number</label>}
                                                placeholder='U Number'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='maxPower'
                                                value={current.maxPower}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Power Max</label>}
                                                placeholder='Power Max'
                                            />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Form>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='wattage'
                                                value={current.wattage}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Measured Wattage</label>}
                                                placeholder='Measured Wattage'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='maxWeight'
                                                value={current.maxWeight}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Max Weight</label>}
                                                placeholder='Max Weight'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='rackWidth'
                                                value={current.rackWidth}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Width</label>}
                                                placeholder='Width'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='rackHeight'
                                                value={current.rackHeight}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Height</label>}
                                                placeholder='Height'
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-group" widths='equal'>
                                            <Form.Input
                                                name='rackDepth'
                                                value={current.rackDepth}
                                                onChange={this.handleChangeInput.bind(this)}
                                                fluid
                                                label={<label>Depth</label>}
                                                placeholder='Depth'
                                            />
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className='row-edit'>
                                <Grid.Column width={16}>
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.TextArea name='description' fluid={"true"} onChange={this.handleChangeInput.bind(this)} value={current.description || ''} label='Description' placeholder='Description' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Button secondary disabled={loading === 1} onClick={this.handleCancel.bind(this)}>Cancel</Form.Button>
                                        <Form.Button primary disabled={loading === 1} onClick={this.handleSave.bind(this)}>Save</Form.Button>
                                    </Form.Group>
                                </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

RackEdit.getInitialProps = async (context) => {
    const {req = {}, query = {}, store} = context;
    const { originalUrl } = req;
    if(query.id) {
        await store.dispatch(layoutA.initUpdate({originalUrl, action: 'update'}));
    } else {
        await store.dispatch(layoutA.initUpdate({originalUrl, action: 'insert'}));
    }
    return  store.getState();
};


const mapStateToProps = ({ layouts }) => ({ layouts });

export default connect(mapStateToProps, null)(RackEdit);