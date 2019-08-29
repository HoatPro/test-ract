import React, {Component} from 'react';
import {Label, Header, Segment, Form, Image, Grid} from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';

import {connect} from 'react-redux';
import {zoneA} from '../../redux/_actions/categories/zoneA';
import _ from 'lodash';
import _config from '../../utils/config';
import ReactDOM from "react-dom";
import {
    Layer,
    Stage,
} from 'react-konva';
import {actionA} from "../../redux/_actions/admin/actionA";
import Rectangle from '../../components/Shapes/Rectangle';
import DrawImage from "../../components/Shapes/Image";
const config = _config[_config.environment];
const prevURL = config.prevURL;
const originBackend = config.originBackend;
const prevOrigin = config.prevOrigin;

class ZoneEdit extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        let {location, dispatch} = this.props;

        const query = location.search || "";
        const params = new URLSearchParams(query);
        const originalUrl = location.pathname;

        if (params.get('id')) {
            dispatch(zoneA.initUpdate({originalUrl, action: 'update'}));
        } else {
            dispatch(zoneA.initUpdate({originalUrl, action: 'insert'}));
        }
    }

    componentDidMount() {
        const {zones, dispatch, location} = this.props;
        const {action = '', loading = 0, current = {}} = zones;
        const query = location.search || "";
        const params = new URLSearchParams(query);
        const id = params.get('id');

        if ((action === 'update' && loading === 0 && _.size(current) === 0) || (id && _.size(current) === 0)) {
            if(!_.isNull(id)) dispatch(zoneA.getZoneById({zoneId: id})).then(resp => {
                this.loadLayout();
            });
        }

        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            this.loadLayout();
        }
        this.resizeZone();
        this.getData();
        document.title = action === 'update' ? 'Edit Zone' : 'Add new Zone';
    }

    componentWillReceiveProps(nextProps) {
        const {zones} = nextProps;
        const {history} = this.props;
        const {action = '', loading = 0, current = {}} = zones;
        if((action === 'insert' && loading === 2 && current.zoneId) || (action === 'update' && loading === 2 && _.size(current) > 0)) {
            history.push(prevURL + '/categories/zones');
        }
        if(action === 'update' && loading === 0 && _.size(current) > 0) {
            if(current.parentId) this.setState({isParent: false});
        }

    }

    resizeZone() {
        const zone = ReactDOM.findDOMNode(this.refs.zone);
        if(zone) {
            const width = zone.clientWidth;

            zone.style.maxWidth = `${width}px`;
            zone.style.overflow = 'auto';
        }
    }

    getData() {
        this.props.dispatch(zoneA.getOthers());
    }

    validate() {
        let {zones, dispatch} = this.props;
        let {current = {}} = zones;

        let zoneName = '';
        let shapes = '';
        let roomId = '';
        if (!current.zoneName) {
            zoneName = 'May be not empty';
        }

        if(!current.roomId) {
            roomId = 'May be not empty';
        }

        if(current.draw.shapes.length < 2) {
            shapes = "You haven't drawn the zone";
        }

        if(!zoneName && !roomId && !shapes) {
            return true;
        }

        dispatch(zoneA.validate({
            zoneName,
            roomId,
            shapes
        }));
        return false;
    }

    handleSave(e) {
        if(!this.validate()) return false;
        const {zones = {}, dispatch} = this.props;
        let {current = {}, action} = zones;
        const {zoneName, roomId, zoneId, draw = {}} = current;
        const {shapes = []} = draw;
        const _shapes = _.filter(shapes, item => item.type !== 'image');

        if(action === 'insert') {
            const data = {
                zoneName,
                roomId,
                shapes: _shapes
            };
            dispatch(zoneA.insertZone(data));
        } else if(action === 'update') {
            const data = {
                zoneId,
                zoneName,
                roomId,
                shapes: _shapes
            };
            dispatch(zoneA.updateZone(data));
        }
    }

    handleCancel() {
        const {history} = this.props;
        history.push(prevURL + '/categories/zones');
    }

    handleChangeInput(e) {
        const {zones, dispatch} = this.props;
        const {name, value} = e.target;
        const {validate = {}} = zones;
        let _error = '';
        if(!value && !_.isUndefined(validate[name])) {
            _error = 'May be not empty';
        }
        dispatch(zoneA.updateCurrent(name, value, _error));
    }

    handleSelectLocation(e, data) {
        const {dispatch} = this.props;
        dispatch(zoneA.onChangeLocation(data.value));
        dispatch(zoneA.updateCurrent('locationId', data.value));
    }

    handleSelectDataCenter(e, data) {
        const {dispatch} = this.props;
        dispatch(zoneA.onChangeDatCenter(data.value));
        dispatch(zoneA.updateCurrent('dataCenterId', data.value));
    }

    handleSelectRoom(e, data) {
        const {dispatch} = this.props;
        dispatch(zoneA.onChangeRoom(data.value));
        new Promise(resolve => {
            dispatch(zoneA.updateCurrent('roomId', data.value));
            resolve();
        }).then(() => {
            this.loadLayout();
        })

    }

    getChildState(data) {
        this.props.dispatch(zoneA.updateCurrent('images', data));
    }

    loadLayout() {
        const { zones = {}} = this.props;
        const {current = {}} = zones;
        const {roomId, image} = current;

        if(roomId && image) {
            const img = document.createElement('img');
            img.addEventListener('load', this.onLoad.bind(this));
            img.src = `${originBackend + prevOrigin}/uploads/rooms/${roomId}/${image}`;
        }

    }

    onLoad(e) {
        const {target} = e;
        const {dispatch, zones = {}} = this.props;
        const {current = {}} = zones;
        const {draw = {}, zoneGroup = []} = current;
        const img = {
            x: 0,
            y: 0,
            image: target,
            type: 'image',
            name: this.makeRandomName(),
            zIndex: 0
        };
        const index = _.findIndex(draw.shapes, { type: 'image'});
        let shapes = [];
        if(index > -1) {
            shapes = [];
        }
        shapes.push(img);
        // push zone to background
        _.forEach(zoneGroup, item => {
            shapes.push({
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                draggable: true,
                stroke: '#22A0FA',
                name: this.makeRandomName(),
                id: item.zoneGroupId,
                // stroke: '#0093fb',
                // strokeWidth: 4
            });
        });


        const data = {
            ...current,
            draw: {
                ...draw,
                stage: {
                    width: target.width,
                    height: target.height
                },
                shapes: shapes
            }
        };
        dispatch(zoneA.updateCurrent('current', data));
    }

    handleStageMouseDown = (e) => {

        const target = e.target;
        const evt = e.evt;
        const {dispatch, zones = {}} = this.props;
        const {current = {}} = zones;
        const {drawMode = true, isDrawing = false, draw = {}} = current;
        // right click
        if(evt.which === 3 || evt.button === 2) {
            dispatch(zoneA.updateCurrent('selectedShapeName', ''));
            return;
        }
        // if(!attrs.draggable && attrs.name !== 'zone') {

        // }

        // drawing mode is false
        if (!drawMode) {
            const layer = target.getLayer();
            layer.getChildren((node) => {
                if(node.className === 'Rect') {
                    node.draggable(false);
                    return node;
                }
            });
            dispatch(zoneA.updateCurrent('menuSetting', null));
            return;
        }
        // if we are drawing a shape, a click finishes the drawing
        if (isDrawing) {
            dispatch(zoneA.updateCurrent('isDrawing', !isDrawing));
            return;
        }

        if (target === target.getStage() || target.className === 'Image') {
            // if (target.getAttr('name') === 'zone') {
                let newShapes = draw.shapes.slice();
                const name = this.makeRandomName();

                newShapes.push({
                    x: evt.layerX,
                    y: evt.layerY,
                    width: 0,
                    height: 0,
                    draggable: true,
                    name: name,
                    stroke: '#22A0FA',
                    id: ''
                });
                // console.log(evt.layerX, evt.layerY, newShapes);

                const data = {
                    ...current,
                    isDrawing: true,
                    selectedShapeName: '',
                    menuSetting: null,
                    drawing: name,
                    draw: {
                        ...draw,
                        shapes: newShapes,
                    }
                };
                dispatch(zoneA.updateCurrent('current', data));
            // } else {
            //     this.setState({
            //         selectedShapeName: '',
            //         menuSetting: null,
            //         drawing: ''
            //     })
            // }

            return;
        }

        // clicked on transformer - do nothing
        // const clickedOnTransformer =
        //     target.getParent().className === 'Transformer';
        // if (clickedOnTransformer) {
        //     return;
        // }
        //
        // // find clicked rect by its name
        // const name = target.name();
        // const rect = draw.shapes.find(r => r.name === name);
        // if (rect) {
        //     this.setState({
        //         selectedShapeName: name,
        //         menuSetting: null
        //     });
        // } else {
        //     this.setState({
        //         selectedShapeName: '',
        //         menuSetting: null
        //     });
        // }
    };

    makeRandomName() {
        let result = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            result += possible.charAt(Math.floor(Math.random() * possible.length));

        return result;
    }

    handleStageMouseUp = (e) => {
        const {zones = {}, dispatch} = this.props;
        const {current = {}} = zones;
        const {drawMode = true, isDrawing = false} = current;
        if (!drawMode) return;
        if (isDrawing) {
            dispatch(zoneA.updateCurrent('current', {
                isDrawing: !isDrawing,
                drawing: ''
            }));
            return;
        }
    };

    handleMouseMove= (e) => {
        const {dispatch, zones = {}} = this.props;
        const {current = {}} = zones;
        const {draw = {}, drawMode = true, isDrawing = false, drawing = ''} = current;
        const {evt} = e;
        const {target, layerX, layerY} = evt;
        const konva = document.getElementsByClassName('konvajs-content')[0];

        if (!drawMode) {
            konva.style.cursor = 'default';
            return;
        }

        const mouseX = layerX;
        const mouseY = layerY;
        konva.style.cursor = 'crosshair';
        // update the current rectangle's width and height based on the mouse position
        if (isDrawing && drawing) {
            // get the current shape (the last shape in this.state.shapes)
            let shapes = draw.shapes.slice();
            const index = _.findIndex(shapes, {name: drawing});
            if(index > -1) {
                let _drawing = shapes[index];
                const newWidth = mouseX - _drawing.x;
                const newHeight = mouseY - _drawing.y;

                _drawing = {
                    ..._drawing,
                    width: newWidth,  // new width and height
                    height: newHeight,
                };
                shapes[index] = _drawing;
                const data = {
                    ...current,
                    draw: {
                        ...draw,
                        shapes: shapes
                    }
                };
                dispatch(zoneA.updateCurrent('current', data));
            }

        }
    };

    handleRectChange = (index, newProps) => {
        const {dispatch, zones = {}} = this.props;
        const {current = {}} = zones;
        const {draw = {}} = current;
        const rectangles = draw.shapes.concat();
        rectangles[index] = {
            ...rectangles[index],
            ...newProps
        };
        const data = {
            ...current,
            draw: {
                ...draw,
                shapes: rectangles
            }
        };
        dispatch(zoneA.updateCurrent('current', data));
    };

    onKeyDown = (e) => {
        const {zones = {}, dispatch} = this.props;
        const {current = {}} = zones;
        const {draw = {}, selectedShapeName = ''} = current;
        let shapes = draw.shapes || [];
        const keyCode = e.keyCode || e.which;
        const index = _.findIndex(draw.shapes, {name: selectedShapeName});
        let update = true;

        if(index > -1) {
            let shape = shapes[index];
            switch(keyCode) {
                case 37: // arrow left
                    shape.x -= 1;
                    break;
                case 38: // arrow up
                    shape.y -= 1;
                    break;
                case 39: // arrow right
                    shape.x += 1;
                    break;
                case 40: // arrow down
                    shape.y += 1;
                    break;
                case 46:
                    shapes.splice(index, 1);
                    break;
                default:
                    update = false;
                    break;

            }
            if(update) {
                dispatch(zoneA.updateCurrent('current', {
                    ...current,
                    draw: {
                        ...draw,
                        shapes: shapes
                    }
                }))
            }
            e.preventDefault();
        }
    };

    onSelect(name) {
        this.props.dispatch(zoneA.updateCurrent('current', {
            selectedShapeName: name,
            menuSetting: null
        }));
    }

    onChange (index, newProps) {
        const {dispatch, zones = {}} = this.props;
        const {current = {}} = zones;
        const {draw = {}} = current;
        const rectangles = draw.shapes.slice();

        rectangles[index] = newProps;
        const data = {
            draw: {
                ...draw,
                shapes: rectangles
            }
        };
        dispatch(zoneA.updateCurrent('current', data));
    };

    render() {
        let {zones} = this.props;
        let {
            current = {
                zoneName: '',
                description: '',
                image: '',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                images: {},
                draw: {}
            }, validate = {
                zoneName: '',
            }, loading = 0,
            action,
            locations = [],
            _dataCenters = [],
            dataCenters = [],
            _rooms = [],
            rooms = []
        } = zones;
        const {selectedShapeName = ''} = current;
        let draw = current.draw || {};
        const stage = draw.stage || {};
        let shapes = draw.shapes || [];
        const title = action === 'update'? 'Edit Zone': 'Add new Zone';
        const _locations = _.map(locations, item => ({text: item.locationName, value: item.locationId}));
        if (current.locationId && _.size(_dataCenters) === 0) {
            _dataCenters = _.filter(dataCenters, item => {
                return (current.locationId === item.locationId)
            });
        }
        if (current.dataCenterId && _.size(_rooms) === 0) {
            _rooms = _.filter(rooms, item => {
                return (current.dataCenterId === item.dataCenterId)
            });
        }
        _dataCenters = _.map(_dataCenters, item => ({text: item.dataCenterName, value: item.dataCenterId}));
        _rooms = _.map(_rooms, item => ({text: item.roomName, value: item.roomId}));

        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>{title}</Header>
                        <Form>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Dropdown
                                    name='locationId'
                                    label={<label>Location <strong className="error-validate">*</strong></label>}
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_locations}
                                    onChange={this.handleSelectLocation.bind(this)}
                                    value={current.locationId}
                                    error={validate.locationId? true: false}
                                />
                                <Label className={`error-text ${validate.locationId? '': 'hide'}`} basic color='red' pointing>
                                    {validate.locationId}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Dropdown
                                    name='dataCenterId'
                                    label={<label>Data Center <strong className="error-validate">*</strong></label>}
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_dataCenters}
                                    onChange={this.handleSelectDataCenter.bind(this)}
                                    value={current.dataCenterId}
                                    error={validate.dataCenterId? true: false}
                                />
                                <Label className={`error-text ${validate.dataCenterId? '': 'hide'}`} basic color='red' pointing>
                                    {validate.dataCenterId}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Dropdown
                                    name='roomId'
                                    label={<label>Room <strong className="error-validate">*</strong></label>}
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_rooms}
                                    onChange={this.handleSelectRoom.bind(this)}
                                    value={current.roomId}
                                    error={validate.roomId? true: false}
                                />
                                <Label className={`error-text ${validate.roomId? '': 'hide'}`} basic color='red' pointing>
                                    {validate.roomId}
                                </Label>
                            </Form.Group>
                            <Form.Group className="form-group" widths='equal'>
                                <Form.Input
                                    name='zoneName'
                                    value={current.zoneName || ''}
                                    onChange={this.handleChangeInput.bind(this)}
                                    fluid
                                    label={<label>Name <strong className="error-validate">*</strong></label>}
                                    placeholder='Name'
                                    error={validate.zoneName? true: false}
                                />
                                <Label className={`error-text ${validate.zoneName? '': 'hide'}`} basic color='red' pointing>
                                    {validate.zoneName}
                                </Label>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Grid className='grid-toolbar' doubling stackable>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <div ref='zone' tabIndex={1} onKeyDown={this.onKeyDown}>
                                                <Stage
                                                    width={stage.width}
                                                    height={stage.height}
                                                    onMouseDown={this.handleStageMouseDown}
                                                    onMouseUp={this.handleStageMouseUp}
                                                    onContentMouseMove={this.handleMouseMove}

                                                >
                                                    <Layer ref='layer'>
                                                        { _.size(shapes) === 0 ? null : shapes.map((shape, index) => {
                                                            if(shape.type === 'image') {
                                                                return (
                                                                    <DrawImage
                                                                        key={index}
                                                                        {...shape}
                                                                    />
                                                                )
                                                            } else {
                                                                return (
                                                                    <Rectangle
                                                                        key={index}
                                                                        shapeProps={shape}
                                                                        isSelected={shape.name === selectedShapeName}
                                                                        onSelect={() => {
                                                                            this.onSelect(shape.name);
                                                                        }}
                                                                        onChange={newAttrs => {
                                                                            this.onChange(index, newAttrs);
                                                                        }}
                                                                    />
                                                                );
                                                            }
                                                        })}
                                                    </Layer>
                                                </Stage>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
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

// const mapStateToProps =({zones}) => ({zones});
const mapStateToProps = (state, props) => {
    const {zones = {}} = state;
    const _zones = props.zones || {};
    if (zones.originalUrl) {
        return {
            zones
        };
    } else {
        return {
            zones: {
                ...props.zones,
                ...zones,
            }
        };
    }

};

export default connect(mapStateToProps, null)(ZoneEdit);