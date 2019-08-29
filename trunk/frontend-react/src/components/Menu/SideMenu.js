import React, {Component} from 'react'
import {Menu, Accordion} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TextIcon from "../Extension/TextIcon";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {sideMenuA} from '../../redux/_actions/sideMenuA';
import PropTypes from "prop-types";
import _config from "../../../src/utils/config";
const prevURL = _config[_config.environment].prevURL;
class SideMenu extends Component {
    state = {smallMenu: false};

    static propTypes = {
        sideMenuR: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.props.sideMenuR;
        const newIndex = activeIndex === index ? -1 : index;
        this.props.dispatch(sideMenuA.sendIndex(newIndex));
        // this.setState({ activeIndex: newIndex })
    };

    handleItemClick = (e) => {
        // this.setState({activeItem: name});
        // history.push(name);
        // this.props.dispatch(sideMenuA.sendIndex(-1));
    };

    componentDidMount() {
        const path = this.props.location.pathname;
        const index = path.split('/');
        if (index.length === 2) {
            this.props.dispatch(sideMenuA.activeItem(path));
            this.props.dispatch(sideMenuA.sendIndex(-1));
        } else if (index.length > 2) {
            this.props.dispatch(sideMenuA.activeItem(`/${index[2]}`));
            this.props.dispatch(sideMenuA.sendIndex(index[1]));
        }

    }

    componentWillReceiveProps(nextProps) {
        const iconDropdown = document.querySelectorAll('.title>i.dropdown.icon');
        const itemSidebar = document.querySelectorAll('.item-side-bar');
        if (nextProps.sideMenuR.smallMenu !== this.state.smallMenu) {
            this.setState({smallMenu: nextProps.sideMenuR.smallMenu});

            if (nextProps.sideMenuR.smallMenu) {
                // a.style.cssText = 'display:none !important';
                iconDropdown.forEach(el => el.style.display = 'none');
                itemSidebar.forEach(item => {
                    const temp = item.innerHTML;
                    item.innerHTML = item.getAttribute("name");
                    item.setAttribute("name", temp);
                    item.style.cssText = 'padding-left: 0px';
                })

            } else {
                iconDropdown.forEach(el => el.style.display = 'inline');
                itemSidebar.forEach(item => {
                    const temp = item.innerHTML;
                    item.innerHTML = item.getAttribute("name");
                    item.setAttribute("name", temp);
                    item.style.cssText = 'padding-left: 20px';
                })
            }
        }
    }

    // changeSize = () => this.setState({smallSidebar: !this.props.smallMenu});

    getMenu = () => {
        const activeIndex = this.props.sideMenuR.activeIndex;
        const {smallMenu, activeItem} = this.props.sideMenuR;
        return (
            <Accordion as={Menu} fixed='left' borderless className={(smallMenu ? 'small-side' : '') + ' side'} vertical>
                <Link to="/">
                    <Menu.Item as='div' active={activeItem === '/'} onClick={this.handleItemClick}>
                        <TextIcon hideText={smallMenu} color='blue' name='home'>
                            Dashboard
                        </TextIcon>
                    </Menu.Item>
                </Link>
                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 'admin'}
                        content={<TextIcon hideText={smallMenu} name='users'>
                            Admin
                        </TextIcon>}
                        index={'admin'}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 'admin'} >
                        <Menu vertical secondary>
                            <Link to={prevURL + '/admin/users'}>
                                <Menu.Item as='div' active={activeItem === '/users'}>
                                    <div className={'item-side-bar'} name='U'>Users</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/admin/routes'}>
                                <Menu.Item as='div' active={activeItem === '/routes'}>
                                    <div className={'item-side-bar'} name='R'>Routes</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/admin/actions'}>
                                <Menu.Item as='div' active={activeItem === '/actions'}>
                                    <div className={'item-side-bar'} name='A'>Actions</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/admin/groups'}>
                                <Menu.Item as='div' active={activeItem === '/groups'}>
                                    <div className={'item-side-bar'} name='G'>Groups</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/admin/permissions'}>
                                <Menu.Item as='div' active={activeItem === '/permissions'}>
                                    <div className={'item-side-bar'} name='P'>Permissions</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 'categories'}
                        content={<TextIcon hideText={smallMenu} name='list layout'>
                            Categories
                        </TextIcon>}
                        index={'categories'}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 'categories'}>
                        <Menu vertical secondary>
                            <Link to={prevURL + '/categories/locations'}>
                                <Menu.Item active={activeItem === '/locations'}>
                                    <div className={'item-side-bar'} name='Lo'>Locations</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/datacenters'}>
                                <Menu.Item active={activeItem === '/datacenters'}>
                                    <div className={'item-side-bar'} name='Dc'>DataCenters</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/rooms'}>
                                <Menu.Item active={activeItem === '/rooms'}>
                                    <div className={'item-side-bar'} name='Rm'>Rooms</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/zones'}>
                                <Menu.Item active={activeItem === '/zones'}>
                                    <div className={'item-side-bar'} name='Zn'>Zones</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/departments'}>
                                <Menu.Item active={activeItem === '/departments'}>
                                    <div className={'item-side-bar'} name='De'>Departments</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/customers'}>
                                <Menu.Item active={activeItem === '/customers'}>
                                    <div className={'item-side-bar'} name='Cu'>Customers</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/regions'}>
                                <Menu.Item active={activeItem === '/regions'}>
                                    <div className={'item-side-bar'} name='Rg'>Regions</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/device-types'}>
                                <Menu.Item active={activeItem === '/device-types'}>
                                    <div className={'item-side-bar'} name='Dt'>Device Types</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/device-templates'}>
                                <Menu.Item active={activeItem === '/device-templates'}>
                                    <div className={'item-side-bar'} name='DT'>Device Templates</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/racks'}>
                                <Menu.Item active={activeItem === '/racks'}>
                                    <div className={'item-side-bar'} name='Ra'>Racks</div>
                                </Menu.Item>
                            </Link>
                            <Link to={prevURL + '/categories/contracts'}>
                                <Menu.Item active={activeItem === '/contracts'}>
                                    <div className={'item-side-bar'} name='Ct'>Contracts</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>
                {/*<Link prefetch to={prevURL + "/layouts"}>*/}
                {/*    <Menu.Item active={activeItem === '/layouts'} onClick={this.handleItemClick}>*/}
                {/*        <TextIcon hideText={smallMenu} name='th large'>*/}
                {/*            Layouts*/}
                {/*        </TextIcon>*/}
                {/*    </Menu.Item>*/}
                {/*</Link>*/}
                <Menu.Item as='div'>
                    <Accordion.Title
                        active={activeIndex === 'layouts'}

                        content={<TextIcon hideText={smallMenu} name='th large'>
                            Layouts
                        </TextIcon>}
                        index={'layouts'}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 'layouts'} >
                        <Menu vertical secondary>
                            <Link to={prevURL + '/layouts/layouts'}>
                                <Menu.Item as='div' active={activeItem === '/layouts'}>
                                    <div className={'item-side-bar'} name='LO'>Layouts</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>
                <Menu.Item as='div'>
                    <Accordion.Title
                        active={activeIndex === 'request'}

                        content={<TextIcon hideText={smallMenu} name='checked calendar'>
                            Request
                        </TextIcon>}
                        index={'request'}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content active={activeIndex === 'request'} >
                        <Menu vertical secondary>
                            <Link to={prevURL + '/request/up-new'}>
                                <Menu.Item as='div' active={activeItem === '/up-new'}>
                                    <div className={'item-side-bar'} name='U'>Up new</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>

            </Accordion>
        )
    };

    render() {
        const {smallMenu} = this.props.sideMenuR;
        return (
            <div className='parent'>
                <div className={(smallMenu ? 'small-side ' : '') + 'side'}>
                    {this.getMenu()}
                </div>
                <div className={(smallMenu ? 'small-content ' : '') + 'content-layout'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({sideMenuR}) => ({sideMenuR});

export default withRouter(connect(mapStateToProps, null)(SideMenu));