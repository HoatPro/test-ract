import React, {Component, Fragment} from 'react';
import {Button, Input, Header, Grid, Segment, Icon, Modal, Image} from 'semantic-ui-react';
import DashboardLayout from '../../components/Layout/DashboadLayout';
import CustomTable from '../../components/Table/Table';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {zoneA} from '../../redux/_actions/categories/zoneA';
import _ from 'lodash';
import moment from 'moment/moment';
import defaultImage from '../../static/images/default_image.png';
import "cropperjs/dist/cropper.css";
import _config from '../../utils/config';
import  {
    Layer,
    Stage,
} from 'react-konva';
import DrawImage from "../../components/Shapes/Image";
import DrawRect from "../../components/Shapes/Rect";
const config = _config[_config.environment];
const prevURL = config.prevURL;
const originBackend = config.originBackend;
const prevOrigin = config.prevOrigin;


class Zones extends Component {

    constructor(props) {
        super(props);
        this.state = {
             timeout: null,
             image: defaultImage,
             openImage: false,
        }
    }

    componentDidMount() {
        document.title = "Zone List";
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        const {zones} = nextProps;
        const {action = '', loading = false, current = {}} = zones;
        if (action === 'delete' && loading && _.size(current) === 0) {
            this.getData();
        }
    }

    getData(_search, _pagination) {
        const {zones = {}, dispatch} = this.props;
        const {search = {}, pagination = {}} = zones;
        dispatch(zoneA.getZones({
            search: _search ? _search : search,
            pagination: _pagination ? _pagination : pagination
        }));
    }

    handleDeleteRow(id) {
        const {zones, dispatch} = this.props;
        const {list = []} = zones;
        const find = _.find(list, {zoneId: id});
        if (find) {
            dispatch(zoneA.handleDeleteRow(find));
        }
    }

    handleUpdateRow(id) {
        const {zones, dispatch} = this.props;
        const {list = []} = zones;
        const find = _.find(list, {zoneId: id});
        if (find) {
            dispatch(zoneA.handleUpdateRow(find));
        }
    }

    handleClose() {
        this.props.dispatch(zoneA.modal(false));
    }

    handleCloseView() {
        this.props.dispatch(zoneA.handleCloseViewImage( {
            image: defaultImage,
            openImage: false,
            current: {}
        }));
    }

    onDelete() {
        const {zones} = this.props;
        const {current = {}} = zones;
        const id = current.zoneId;
        if(id) this.props.dispatch(zoneA.deleteZone({id: id}));
    }

    handleSearch(e) {
        const {name, value} = e.target;
        const {zones, dispatch} = this.props;
        let {search = {}, pagination = {}} = zones;
        search[name] = value;
        dispatch(zoneA.handleSearch(value));
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log(value);
            this.getData(search, pagination);
        }, 500);
    }

    handleViewImage(zoneId, roomId, value) {
        const {zones = {}, dispatch} = this.props;
        const {list = [], current = {}} = zones;
        const {draw = {}} = current;

        const find = _.find(list, {zoneId: zoneId});
        if(find) {
            const path = `${originBackend + prevOrigin}/uploads/rooms/${roomId}/${value}`;
            const img = document.createElement('img');
            img.addEventListener('load', (e) => {
                const {target} = e;
                const {draw = {}, zoneGroup = []} = find;

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
                        draggable: false,
                        stroke: '#22A0FA',
                        strokeWidth: 2,
                        name: this.makeRandomName(),
                        id: item.zoneGroupId
                    });
                });

                const data = {
                    openImage: true,
                    image: path,
                    current: {
                        ...find,
                        draw: {
                            ...draw,
                            stage: {
                                width: target.width,
                                height: target.height
                            },
                            shapes: shapes
                        }
                    }
                };
                dispatch(zoneA.handleViewImage(data));
            });
            img.src = path;
        }
    }

    makeRandomName() {
        let result = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            result += possible.charAt(Math.floor(Math.random() * possible.length));

        return result;
    }

    onPageChange(e, data) {
        const {activePage} = data;
        const {dispatch, search = {}, pagination = {}} = this.props;
        this.getData(search, {...pagination, currentPage: activePage - 1});
    }

    render() {
        const {zones = {}} = this.props;
        const {
            open = false,
            current = {zoneName: '', zoneId: '', draw: {}}, search = {str: ''},
            searchLoading = false,
            pagination = {currentPage: 0, countPage: 1},
            openImage = false,
        } = zones;
        let draw = current.draw || {};
        const stage = draw.stage || {};
        let shapes = draw.shapes || [];
        let list = [];
        _.forEach(zones.list, (item, i) => {
            let temp = [];
            let index = 1;
            if(_.isNull(pagination.currentPage) || _.isUndefined(pagination.currentPage)){
                index = i + 1;
            }else {
                index = (pagination.currentPage * pagination.sizePage) + i + 1;
            }
            temp.push(index);
            _.forEach(['zoneName', 'image', 'locationName', 'dataCenterName', 'roomName', 'createdDate'], c => {
                let value = item[c];
                if(c === 'createdDate') value = moment(value).format('DD-MM-YYYY HH:mm:ss');
                if(c === 'image') {
                    const image =  item[c];
                    value = <Button size="mini" icon onClick={() => this.handleViewImage(item.zoneId, item.roomId, image)}><Icon name="eye" /></Button>;
                }
                if(_.isNull(value)) value = '';
                temp.push(value);
            });
            const id = item.zoneId;
            temp.push({
                cell: (<Fragment>
                    <Link to={prevURL + '/categories/zone-edit?id=' + id} >
                        <Button size="mini" icon onClick={() => this.handleUpdateRow(id)}>
                            <Icon name="pencil" />
                        </Button>
                    </Link>
                    <Button color="red" size="mini" icon onClick={() => this.handleDeleteRow(id)}>
                        <Icon name="delete" />
                    </Button>
                </Fragment>),
                props: {
                    textAlign: 'center'
                }
            });
            list.push(temp);
        });
        const header = [
            ['Index', 'Zone', 'Image', 'Location', 'DataCenter', 'Room', 'Created date', ''],
        ];
        return (
            <div>
                <DashboardLayout>
                    <Segment>
                        <Header>Zone List</Header>
                        <Grid className='grid-toolbar' doubling stackable>
                            <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Search..." name='str' loading={searchLoading} value={search.str} onChange={this.handleSearch.bind(this)} />
                            </Grid.Column>
                            {/* <Grid.Column computer={3} largeScreen={3} tablet={5} moblie={8}>
                                <Input icon='search' placeholder="Zone parent..." />
                            </Grid.Column> */}
                            <Grid.Column floated='right' textAlign="right" computer={3} largeScreen={3} tablet={5} moblie={8}>

                                <Link to={prevURL + "/categories/zone-edit"}><Button primary>Add</Button></Link>
                            </Grid.Column>
                        </Grid>
                        <CustomTable
                            header={header}
                            body={list}
                            pagination={true}
                            paginationProps={{
                                defaultActivePage: pagination.currentPage + 1,
                                totalPages: pagination.countPage
                            }}
                            onPageChange={this.onPageChange.bind(this)}
                        />
                        <Modal id="mdViewImage" open={openImage} closeIcon size="large" onClose={this.handleCloseView.bind(this)}>
                            <Modal.Content image className='center' scrolling={true}>
                                {openImage? <Stage
                                    width={stage.width}
                                    height={stage.height}
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
                                                    <DrawRect
                                                        key={index}
                                                        {...shape}
                                                        isDrawingMode={false}
                                                        // menuSetting={this.menuSetting.bind(this)}

                                                        // pass isDrawingMode so we know when we can click on a shape
                                                    />
                                                );
                                            }
                                        })}
                                    </Layer>
                                </Stage>: null}
                            </Modal.Content>
                        </Modal>
                    </Segment>
                </DashboardLayout>
            </div>
        );
    }
}

const mapStateToProps = ({zones}) => ({zones});

export default connect(mapStateToProps, null)(Zones);