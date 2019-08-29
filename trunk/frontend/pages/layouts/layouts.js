import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { Button, Input, Header, Grid, Segment, Checkbox, Modal, Label, Dropdown, Icon  } from 'semantic-ui-react';
import DashboardLayout from '../../src/components/Layout/DashboadLayout';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {layoutA} from '../../src/redux/_actions/layoutA';
import {rackA} from '../../src/redux/_actions/categories/rackA';
import _ from 'lodash';
import 'react-contexify/dist/ReactContexify.min.css';
import { Menu, Item, contextMenu } from 'react-contexify';
import {
    Layer,
    Stage,
} from 'react-konva';
import Rectangle from '../../src/components/Shapes/Rectangle';
import DrawImage from '../../src/components/Shapes/Image';
import _config from '../../src/utils/config';
import {zoneA} from "../../src/redux/_actions/categories/zoneA";
const config = _config[_config.environment];
const prevURL = config.prevURL;
const originBackend = config.originBackend;
const prevOrigin = config.prevOrigin;

class CustomMenu extends Component {
    render() {
        const {handleAddRack, handleEditRackInfo, handleDeleteRack, handleViewRack, action} = this.props;
        if(action === 'insert') {
            return <Menu id='ctmRack'>
                <Item onClick={handleAddRack}><Icon name='plus' /> Add rack info</Item>
                <Item onClick={handleDeleteRack}><Icon name='remove' /> Remove rack</Item>
            </Menu>
        } else {
            return <Menu id='ctmRack'>
                <Item onClick={handleEditRackInfo}><Icon name='pencil' /> Edit rack info</Item>
                <Item onClick={handleViewRack}><Icon name='search' /> View rack</Item>
                <Item onClick={handleDeleteRack}><Icon name='remove' /> Remove rack</Item>
            </Menu>
        }
    }
}

CustomMenu.defaultProps = {
    handleAddRack: () => {},
    handleEditRackInfo: () => {},
    handleDeleteRack: () => {},
    handleViewRack: () => {},
    action: 'insert'
};

CustomMenu.propTypes = {
    handleAddRack: PropTypes.func,
    handleEditRackInfo: PropTypes.func,
    handleDeleteRack: PropTypes.func,
    handleViewRack: PropTypes.func,
    action: PropTypes.oneOf(['insert', 'update'])
};

class Layouts extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(layoutA.getOthers()).then(() => {
            this.loadLayout();
        });
    }

    componentWillReceiveProps(nextProps) {
        const {layouts = {}, racks = {}, dispatch} = nextProps;
        const _current = racks.current || {};
        const {action = '', loading = false, current = {}} = layouts;
        // if(action === 'delete' && loading && _.size(current) === 0) {
        //     dispatch(layoutA.getRackByZone({zoneId: current.zoneId}));
        // }
        if(racks.action === 'insert' && racks.loading === 2 && _current.rackId) {
            const {draw = {}} = current;
            const {shapes = []} = draw;
            const find = _.find(shapes, {name: _current.name});
            if(find && find.id === '') {
                find.id = _current.rackId;
                // dispatch(layoutA.updateCurrent('current', current));
                dispatch(rackA.updateCurrent('current', {}));
            }
        }

    }

    loadLayout() {
        const {dispatch, layouts = {}} = this.props;
        let {zones = [], rooms = [], current = {}} = layouts;
        let temp = '';
        // const zoneId = current.zoneId;
        // const find = _.find(zones, {zoneId: zoneId});
        const roomId = current.roomId;
        const find1 = _.find(rooms, {roomId: roomId});
        // const img = new Image();
        // if(find) {
        //     const img = document.createElement('img');
        //     img.addEventListener('load', this.onLoad.bind(this));
        //     img.src = `${originBackend + prevOrigin}/uploads/rooms/${current.roomId}/${current.image}`;
        //     dispatch(layoutA.updateCurrent('current', current));
        //     setTimeout(() => {
        //         dispatch(layoutA.getRackByZone({zoneId: zoneId}));
        //     }, 500);
        //
        // }

        if(find1) {
            const img = document.createElement('img');
            img.addEventListener('load', this.onLoad.bind(this));
            img.src = `${originBackend + prevOrigin}/uploads/rooms/${current.roomId}/${current.image}`;
            new Promise(resolve => {
                dispatch(layoutA.updateCurrent('current', current));
                resolve();
            }).then(() => {
                dispatch(layoutA.getRackByRoom({roomId: roomId}));
            });
        }
    }

    handleDeleteRack(e) {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}} = layouts;
        if(current.rackId) {
            dispatch(layoutA.deleteRackLayout({id: current.rackId}));
        } else {
            const {draw = {}} = current;
            let {shapes = []} = draw;
            const index = _.findIndex(shapes, {name: current.name});
            if(index > -1) {
                shapes.splice(index, 1);
                const data = {
                    ...current,
                    draw: {
                        ...draw,
                        shapes: shapes
                    }
                };
                dispatch(layoutA.updateCurrent('current', data));
            }
        }
    }

    handleUpdateRow(id) {
        const {layouts, dispatch} = this.props;
        const {list = []} = layouts;
        const find = _.find(list, {layoutId: id});
        if(find) {
            dispatch(layoutA.handleUpdateRow(find));
        }
    }

    onLoad(e) {
        const {target} = e;
        const {dispatch, layouts = {}} = this.props;
        const {current = {}, racks = []} = layouts;
        const {draw = {}, zoneGroup = []} = current;
        const name = this.makeRandomName();
        const img = {
            x: 0,
            y: 0,
            image: target,
            type: 'image',
            name: name,
            zIndex: 0
        };
        // push background image
        const index = _.findIndex(draw.shapes, { type: 'image'});
        let shapes = [];
        if(index > -1) {
            shapes = [];
        }
        shapes.push(img);

        //push zone to background
        _.forEach(zoneGroup, item => {
            shapes.push({
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                draggable: false,
                stroke: '#22A0FA',
                strokeWidth: 2,
                name: 'zone',
                id: item.zoneGroupId,
                // stroke: '#0093fb',
                // strokeWidth: 4
            });
        });

        // push racks
        _.forEach(racks, item => {
            shapes.push({
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                draggable: true,
                stroke: 'red',
                // strokeWidth: 1,
                name: this.makeRandomName(),
                id: item.rackId,
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
        dispatch(layoutA.updateCurrent('current', data));
    }

    makeRandomName(length) {
        let result = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        length = length? length: possible.length;

        for (let i = 0; i < 5; i++)
            result += possible.charAt(Math.floor(Math.random() * length));

        return result;
    }

    async handleSelect(e, data) {
        const {dispatch, layouts = {}} = this.props;
        const {name, value} = data;
        const {zones = [], rooms = [], current = {}} = layouts;
        console.log('layouts current', current);
        let temp = '';
        if(name === 'zoneId') {
            const find = _.find(zones, {zoneId: value});
            // const img = new Image();
            if(find) {
                temp = {
                    zoneName: find.zoneName,
                    zoneGroupId: find.zoneGroupId,
                    zoneGroup: find.zoneGroup,
                    zoneId: value
                };
                await new Promise(resolve => {
                    dispatch(layoutA.updateCurrent('current', temp));
                    resolve();
                });
                await new Promise(resolve => {
                    dispatch(layoutA.getRackByZone({zoneId: value}));
                    resolve();
                });
                const img = document.createElement('img');
                img.addEventListener('load', this.onLoad.bind(this));
                img.src = `${originBackend + prevOrigin}/uploads/rooms/${current.roomId}/${current.image}`;
            } else {
                temp = {
                    zoneName: '',
                    zoneGroupId: '',
                    zoneGroup: [],
                    zoneId: ''
                };
                dispatch(layoutA.updateCurrent('current', temp));
            }

        } else if(name === 'roomId') {
            const find = _.find(rooms, {roomId: value});
            if(find) {
                temp = {
                    image: find.image,
                    roomId: value,
                };

                await new Promise(resolve => {
                    dispatch(layoutA.updateCurrent('current', temp));
                    resolve();
                });
                await new Promise(resolve => {
                    dispatch(layoutA.getRackByRoom({roomId: value}));
                    resolve();
                });
                const img = document.createElement('img');
                img.addEventListener('load', this.onLoad.bind(this));
                img.src = `${originBackend + prevOrigin}/uploads/rooms/${value}/${find.image}`;
            } else {
                temp = {
                    image: '',
                    roomId: '',
                };
                dispatch(layoutA.updateCurrent('current', temp));
            }
        } else if(name === 'dataCenterId') {
            const data = {
                dataCenterId: value
            };
            dispatch(layoutA.updateCurrent('new', data));
        } else {
            dispatch(layoutA.updateCurrent(name, value));
        }
    }

    handleChecked() {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}} = layouts;
        const {drawMode = false} = current;

        dispatch(layoutA.updateCurrent('drawMode', !drawMode));
    }

    handleClose() {
        this.props.dispatch(zoneA.modal(false));
    }

    onDelete() {
        const {racks = {}} = this.props;
        const {current = {}} = racks;
        const id = current.rackId;

        if(id) this.props.dispatch(rackA.deleteRack({id: id}));
    }

    handleStageMouseDown = (e) => {
        const target = e.target;
        const evt = e.evt;
        const {dispatch, layouts = {}} = this.props;
        const {current = {}} = layouts;
        const {drawMode = false, isDrawing = false, draw = {}} = current;
        // right click
        if(evt.which === 3 || evt.button === 2) {
            dispatch(layoutA.updateCurrent('selectedShapeName', ''));
            return;
        }

        // drawing mode is false
        if (!drawMode) {
            const layer = target.getLayer();
            layer.getChildren((node) => {
                if(node.className === 'Rect') {
                    node.draggable(false);
                    return node;
                }
            });
            dispatch(layoutA.updateCurrent('menuSetting', null));
            return;
        }
        // if we are drawing a shape, a click finishes the drawing
        if (isDrawing) {
            dispatch(layoutA.updateCurrent('isDrawing', !isDrawing));
            return;
        }

        if (target === target.getStage() || target.className === 'Image' || target.getAttr('name') === 'zone') {
            if (target.getAttr('name') === 'zone') {
                const newShapes = draw.shapes.slice();
                const name = this.makeRandomName();
                newShapes.push({
                    x: evt.layerX,
                    y: evt.layerY,
                    width: 0,
                    height: 0,
                    stroke: 'red',
                    draggable: true,
                    name: name,
                    id: ''
                });

                // this.setState({
                //     isDrawing: true,
                //     selectedShapeName: '',
                //     menuSetting: null
                // });
                const data = {
                    ...current,
                    isDrawing: true,
                    selectedShapeName: '',
                    menuSetting: null,
                    draw: {
                        ...draw,
                        shapes: newShapes,
                    }
                };
                dispatch(layoutA.updateCurrent('current', data))
            } else {
                dispatch(layoutA.updateCurrent('current', {
                    selectedShapeName: '',
                    menuSetting: null
                }));
            }
            return;
        }
    };

    handleStageMouseUp = (e) => {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}} = layouts;
        const {drawMode = false, isDrawing = false, isMoving = null, draw = {}} = current;

        if (!drawMode) return;

        if (isDrawing) {
            return dispatch(layoutA.updateCurrent('isDrawing', !isDrawing));
        }

        if (isMoving) {
            return dispatch(layoutA.updateCurrent('current', {
                isMoving: null,
                ctrl: false,
                copy: null,
                selectedShapeName: null,
            }));
        }
    };

    handleMouseMove= (e) => {
        const {dispatch, layouts = {}} = this.props;
        const {current = {}} = layouts;
        const {
            drawMode = false,
            isDrawing = false,
            copy = null,
            ctrl = false,
            draw = {},
        } = current;
        let {shapes = []} = draw;

        const konva = document.getElementsByClassName('konvajs-content')[0];
        if (!drawMode) {
            konva.style.cursor = 'default';
            return;
        }

        const mouseX = e.evt.layerX;
        const mouseY = e.evt.layerY;
        konva.style.cursor = 'crosshair';
        // update the current rectangle's width and height based on the mouse position
        if (isDrawing) {
            // get the current shape (the last shape in this.state.shapes)
            const currShapeIndex = draw.shapes.length - 1;
            const currShape = draw.shapes[currShapeIndex];
            const newWidth = mouseX - currShape.x;
            const newHeight = mouseY - currShape.y;

            const newShapesList = draw.shapes.slice();
            const oldShape = newShapesList[currShapeIndex];
            newShapesList[currShapeIndex] = {
                ...oldShape,
                x: currShape.x,   // keep starting position the same
                y: currShape.y,
                width: newWidth,  // new width and height
                height: newHeight,
            };
            const data = {
                draw: {
                    ...draw,
                    shapes: newShapesList
                }
            };
            return dispatch(layoutA.updateCurrent('current', data));
        }

        if (ctrl && copy) {
            konva.style.cursor = 'copy';
            let newShapesList = shapes.slice();
            let rect;
            const find = _.find(newShapesList, {name: copy});
            if(find) {
                rect = {
                    ...find,
                    x: mouseX,
                    y: mouseY
                };
                return dispatch(layoutA.updateCurrent('current', {
                    ...current,
                    isMoving: rect.name,
                    draw: {
                        ...draw,
                        shapes: newShapesList
                    }
                }));
            }
        }
    };

    onChange = (index, newProps) => {
        const {dispatch, layouts = {}} = this.props;
        const {current = {}} = layouts;
        const {draw = {}} = current;
        const rectangles = draw.shapes.slice();

        rectangles[index] = newProps;
        const data = {
            draw: {
                ...draw,
                shapes: rectangles
            }
        };
        dispatch(layoutA.updateCurrent('current', data));
    };

    onKeyDown = (e) => {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}} = layouts;
        const {draw = {}, selectedShapeName = '', ctrl = false} = current;
        let shapes = draw.shapes || [];
        const keyCode = e.keyCode || e.which;
        const index = _.findIndex(draw.shapes, {name: selectedShapeName});
        let update = true;

        if(index > -1) {
            let shape = shapes[index];
            switch(keyCode) {
                case 17: // ctrl (copy)
                    if(!ctrl && selectedShapeName) {
                        const name = this.makeRandomName(5);
                        let rect = {
                            ...shape,
                            name: name,
                        };
                        current.ctrl = true;
                        current.copy = name;
                        shapes.push(rect);
                    }

                    break;
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

    onKeyUp = (e) => {
        const {layouts = {}, dispatch} = this.props;
        let {current = {}} = layouts;
        const {isMoving = null} = current;
        const keyCode = e.keyCode || e.which;

        if(keyCode === 17) {
            if(isMoving) {
                dispatch(layoutA.updateCurrent('current', {
                    isMoving: null,
                    ctrl: false,
                    copy: null,
                    selectedShapeName: null,
                }));
            } else {
                dispatch(layoutA.updateCurrent('current', {
                    ctrl: false,
                }));
            }
        }
    };


    onSelect(e, name) {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}} = layouts;
        const {drawMode = false} = current;
        const target = e.target;

        if(!drawMode) return;
        if(target.getAttr('name') === 'zone') return;
        dispatch(layoutA.updateCurrent('current', {
            selectedShapeName: name,
            menuSetting: null
        }));
    }

    menuSetting(event) {
        const evt = event.evt;
        if((evt.which === 3 || evt.button === 2) && event.target.getAttr('name') !== 'zone') {

            const {layouts = {}, dispatch} = this.props;
            const {current = {}, racks = {}} = layouts;
            // const racks = this.props.racks.items.data;
            const target = event.currentTarget;
            const attrs = target.attrs;
            const id = attrs.id? attrs.id : '';
            let rack = _.find(racks, {rackId: id});
            if(_.size(rack) === 0) {
                rack = {
                    rackId: '',
                    model: '',
                    uNumber: null,
                    SNMP: '',
                    maxPower: null,
                    wattage: null,
                    maxWeight: null,
                    dataCenterId: current.dataCenterId,
                    roomId: current.roomId,
                    zoneId: current.zoneId,
                    x: attrs.x,
                    y: attrs.y,
                    width: attrs.width,
                    height: attrs.height,
                    rackDepth: null,
                    rackWidth: null,
                    rackHeight: null,
                    description: '',
                    parentId: '',
                    status: true,
                    background: '',
                    rackName: ''
                };
            } else {
                rack.dataCenterId = current.dataCenterId;
                rack.roomId = current.roomId;
                rack.zoneId = current.zoneId;
                delete rack.draw;
            }
            contextMenu.show({
                id: 'ctmRack',
                event: evt,
                props: {
                    foo: 'bar'
                }
            });
            dispatch(layoutA.updateLoading(0));
            dispatch(layoutA.updateCurrent('current', {
                ...rack,
                name: attrs.name,
                cancel: '/layouts/layouts',
                menuSetting: evt
            }));

            evt.preventDefault();
            evt.stopPropagation();
            return false;
        }
    }

    handleEditRackInfo() {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}, racks = {}} = layouts;
        // dispatch(layoutA.handleUpdateRow(find));
        Router.push(prevURL + '/categories/rack-edit?id='+ current.rackId);

    }

    handleAddRack() {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}, racks = {}} = layouts;
        let query = [];
        _.forEach(current, (value, key) => {
            if(value && key !== 'draw') {
                query.push(`${key}=${value}`);
            }
        });
        // Router.push(prevURL + '/categories/rack-edit?' + query.join('&'));
        Router.push(prevURL + '/categories/rack-edit');
    }

    handleViewRack() {
        const {layouts = {}, dispatch} = this.props;
        const {current = {}, racks = {}} = layouts;
        if(current.rackId) {
            Router.push(prevURL + '/categories/rack-view?id=' + current.rackId);
        }
    }

    render() {
        const {layouts = {}} = this.props;
        let {
            current = {layoutName: '', layoutId: ''},
            dataCenters = [],
            _rooms = [],
            rooms = [],
            zones = [],
            _zones = [],
            open = false,
        } = layouts;
        const {drawMode = false, menuSetting, selectedShapeName = ''} = current;
        const draw = current.draw || {};
        const stage = draw.stage || {};
        let shapes = draw.shapes || [];
        const _dataCenters = _.map(dataCenters, item => ({text: item.dataCenterName, value: item.dataCenterId}));
        if(current.dataCenterId && _.size(_rooms) === 0) {
            _rooms = _.filter(rooms, item => {return (current.dataCenterId === item.dataCenterId)});
        }
        _rooms = _.map(_rooms, item => ({text: item.roomName, value: item.roomId}));
        if(current.roomId && _.size(_zones) === 0) {
            _zones = _.filter(zones, item => {return (current.roomId === item.roomId)});
        }
        _zones = _.map(_zones, item => ({text: item.zoneName, value: item.zoneId}));

        return (
            <div>
                <Head>
                    <title>Data Center Layout</title>
                </Head>
                <DashboardLayout>
                    <Segment>
                        <Header>Data Center Layout</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Label>Data Center</Label>
                                <Dropdown
                                    name='dataCenterId'
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_dataCenters}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.dataCenterId}
                                />
                            </Grid.Column>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Label>Room</Label>
                                <Dropdown
                                    name='roomId'
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_rooms}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.roomId}
                                />
                            </Grid.Column>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Label>Zone</Label>
                                <Dropdown
                                    name='zoneId'
                                    fluid
                                    placeholder='Select...'
                                    search
                                    selection
                                    clearable
                                    options={_zones}
                                    onChange={this.handleSelect.bind(this)}
                                    value={current.zoneId}
                                />
                            </Grid.Column>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8} className='draw-mode'>
                                <Checkbox
                                    checked={drawMode}
                                    label='Draw mode'
                                    onChange={this.handleChecked.bind(this)}
                                />
                            </Grid.Column>
                            <Grid.Row>
                                <Grid.Column>
                                    <div tabIndex={1} onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp}>
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
                                                                onSelect={(e) => {
                                                                    this.onSelect(e, shape.name);
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
                                        {menuSetting || null?
                                            <CustomMenu
                                                handleAddRack={this.handleAddRack.bind(this)}
                                                handleEditRackInfo={this.handleEditRackInfo.bind(this)}
                                                handleDeleteRack={this.handleDeleteRack.bind(this)}
                                                handleViewRack={this.handleViewRack.bind(this)}
                                                action={current.rackId? 'update': 'insert'}
                                            /> : ''
                                        }
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Modal size={'mini'} open={open}
                            onClose={this.handleClose.bind(this)}
                            closeOnEscape={true}
                            closeOnDimmerClick={false}
                        >
                            <Modal.Header>Remove Layout</Modal.Header>
                            <Modal.Content>
                                <p>Do you want to remove the Rack: {`"${current.rackName}"`} ?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button negative onClick={this.handleClose.bind(this)}>Cancel</Button>
                                <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.onDelete.bind(this)} />
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({ layouts, racks }) => ({ layouts, racks });

export default connect(mapStateToProps, null)(Layouts);