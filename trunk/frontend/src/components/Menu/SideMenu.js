import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Accordion } from 'semantic-ui-react'
import Link from "next/link";
import Router from 'next/router'
import TextIcon from "../Extension/TextIcon";
import { connect } from "react-redux";
import { sideMenuA } from '../../redux/_actions/sideMenuA';
import _config from '../../utils/config';
const prevURL = _config[_config.environment].prevURL;
import Cookies from 'js-cookie';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { smallMenu: false };
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.props.sideMenuR;
        const newIndex = activeIndex === index ? -1 : index;
        this.props.dispatch(sideMenuA.sendIndex(newIndex));
        // this.setState({ activeIndex: newIndex })
    };

    handleItemClick = (e) => {
        // this.setState({activeItem: name});
        // Router.push(name);
        // this.props.dispatch(sideMenuA.sendIndex(-1));
    };

    componentDidMount() {
        const path = Router.asPath;
        const index = path.split('/');
        if(index.length === 2){
            this.props.dispatch(sideMenuA.activeItem(path));
            this.props.dispatch(sideMenuA.sendIndex(-1));
        }
        else if(index.length === 3){
            this.props.dispatch(sideMenuA.activeItem(`/${index[2]}`));
            this.props.dispatch(sideMenuA.sendIndex(index[1]));
        } else if(index.length === 4){
            this.props.dispatch(sideMenuA.activeItem(`/${index[3]}`));
            this.props.dispatch(sideMenuA.sendIndex(index[2]));
        }

    }

    componentWillReceiveProps(nextProps) {
        const iconDropdown = document.querySelectorAll('.title>i.dropdown.icon');
        const itemSidebar = document.querySelectorAll('.item-side-bar');
        if (nextProps.sideMenuR.smallMenu !== this.state.smallMenu) {
            this.setState({ smallMenu: nextProps.sideMenuR.smallMenu });

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
        // let user = Cookies.get('user');
        // let permission = [];
        // if(user && user !== 'undefined') {
        //     user = JSON.parse(user);
        //     permission = user.permission || [];
        // }
        // const permission = user.permission;
        const activeIndex = this.props.sideMenuR.activeIndex;
        let { smallMenu, activeItem } = this.props.sideMenuR;

        return (
            <Accordion as={Menu} fixed='left' borderless className={(smallMenu ? 'small-side' : 'large-side') + ' side'} vertical>
                <Link prefetch href="/">
                    <Menu.Item active={activeItem === '/'} onClick={this.handleItemClick}>
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
                            <Link href={prevURL + '/admin/users'}>
                                <Menu.Item active={activeItem === '/users'}>
                                    <div className={'item-side-bar'} name='U'>Users</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/admin/routes'}>
                                <Menu.Item active={activeItem === '/routes'}>
                                    <div className={'item-side-bar'} name='R'>Routes</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/admin/actions'}>
                                <Menu.Item active={activeItem === '/actions'}>
                                    <div className={'item-side-bar'} name='A'>Actions</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/admin/groups'}>
                                <Menu.Item active={activeItem === '/groups'}>
                                    <div className={'item-side-bar'} name='G'>Groups</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/admin/permissions'}>
                                <Menu.Item active={activeItem === '/permissions'}>
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
                            <Link href={prevURL + '/categories/locations'}>
                                <Menu.Item active={activeItem === '/locations'}>
                                    <div className={'item-side-bar'} name='Lo'>Locations</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/datacenters'}>
                                <Menu.Item active={activeItem === '/datacenters'}>
                                    <div className={'item-side-bar'} name='Dc'>DataCenters</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/rooms'}>
                                <Menu.Item active={activeItem === '/rooms'}>
                                    <div className={'item-side-bar'} name='Rm'>Rooms</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/zones'}>
                                <Menu.Item active={activeItem === '/zones'}>
                                    <div className={'item-side-bar'} name='Zn'>Zones</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/departments'}>
                                <Menu.Item active={activeItem === '/departments'}>
                                    <div className={'item-side-bar'} name='De'>Departments</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/customers'}>
                                <Menu.Item active={activeItem === '/customers'}>
                                    <div className={'item-side-bar'} name='Cu'>Customers</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/regions'}>
                                <Menu.Item active={activeItem === '/regions'}>
                                    <div className={'item-side-bar'} name='Rg'>Regions</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/device-types'}>
                                <Menu.Item active={activeItem === '/device-types'}>
                                    <div className={'item-side-bar'} name='Dt'>Device Types</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/device-templates'}>
                                <Menu.Item active={activeItem === '/device-templates'}>
                                    <div className={'item-side-bar'} name='DT'>Device Templates</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/racks'}>
                                <Menu.Item active={activeItem === '/racks'}>
                                    <div className={'item-side-bar'} name='Ra'>Racks</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/categories/contracts'}>
                                <Menu.Item active={activeItem === '/contracts'}>
                                    <div className={'item-side-bar'} name='Ct'>Contracts</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>
                {/*<Link prefetch href={prevURL + "/layouts"}>*/}
                {/*    <Menu.Item active={activeItem === '/layouts'} onClick={this.handleItemClick}>*/}
                {/*        <TextIcon hideText={smallMenu} name='th large'>*/}
                {/*            Layouts*/}
                {/*        </TextIcon>*/}
                {/*    </Menu.Item>*/}
                {/*</Link>*/}
                <Menu.Item>
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
                            <Link href={prevURL + '/layouts/layouts'}>
                                <Menu.Item active={activeItem === '/layouts'}>
                                    <div className={'item-side-bar'} name='LO'>Layouts</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>
                <Menu.Item>
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
                            <Link href={prevURL + '/request/up-new'}>
                                <Menu.Item active={activeItem === '/up-new'}>
                                    <div className={'item-side-bar'} name='U'>Up new</div>
                                </Menu.Item>
                            </Link>
                            <Link href={prevURL + '/request/survey-device'}>
                                <Menu.Item active={activeItem === '/survey-device'}>
                                    <div className={'item-side-bar'} name='S'>Survey Device</div>
                                </Menu.Item>
                            </Link>
                        </Menu>
                    </Accordion.Content>
                </Menu.Item>
            </Accordion>
        )
    };

    render() {
        const { smallMenu } = this.props.sideMenuR;
        let _class = '';
        if(smallMenu) {
            _class = 'small-side ';
        } else {
            _class = 'large-side ';
        }

        return (
            <div ref="sideMenu" className='parent'>
                {/* <Login></Login> */}
                <div className={(smallMenu? 'small-side ': 'large-side ') + 'side'}>
                    {this.getMenu()}
                </div>
                <div className={(smallMenu ? 'small-content ' : '') + 'content-layout'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ sideMenuR }) => ({ sideMenuR });

export default connect(mapStateToProps, null )(SideMenu);