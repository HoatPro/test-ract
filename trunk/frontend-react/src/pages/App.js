import React from 'react';
import {Route} from 'react-router'
import {Router} from 'react-router-dom';
import {Loader} from 'semantic-ui-react'
import Index from "./index";
import Users from "./admin/users";
import UserEdit from "./admin/user-edit";
import Routes from "./admin/routes";
import RouteEdit from "./admin/route-edit";
import Actions from "./admin/actions";
import ActionEdit from "./admin/action-edit";
import Groups from "./admin/groups";
import GroupEdit from "./admin/group-edit";
import Permissions from "./admin/permissions";
import Locations from "./categories/locations";
import LocationEdit from "./categories/location-edit";
import Datacenters from "./categories/datacenters";
import DatacenterEdit from "./categories/datacenter-edit";
import Rooms from "./categories/rooms";
import RoomEdit from "./categories/room-edit";
import Zones from "./categories/zones";
import ZoneEdit from "./categories/zone-edit";
import Departments from "./categories/departments";
import DepartmentEdit from "./categories/department-edit";
import Customers from "./categories/customers";
import CustomerEdit from "./categories/customer-edit";
import Regions from "./categories/regions";
import RegionEdit from "./categories/region-edit";
import DeviceTypes from "./categories/device-types";
import DeviceTypeEdit from "./categories/device-type-edit";
import DeviceTemplates from "./categories/device-templates";
import DeviceTemplateEdit from "./categories/device-template-edit";
import Racks from "./categories/racks";
import RackEdit from "./categories/rack-edit";
import RackView from "./categories/rack-view";
import Contracts from "./categories/contracts";
import ContractEdit from "./categories/contract-edit";
import Layouts from "./layouts/layouts";
import UpNew from "./request/up-new";
import {history} from "./history";
import {withCookies} from 'react-cookie';
/* eslint-disable import/first */
import _config from '../utils/config';
import {Auth} from "./Auth";
import redirectTo from "../components/Common/redirectTo";
const config = _config[_config.environment];


class App extends React.Component {
    componentWillMount() {
        Auth(this.props).then((data) => this.setState({auth: data}))
    }

    renderPage(Page) {
        let {auth} = this.state;
        return (auth === 200 ? (Page) : (auth === 403 ? (redirectTo(config.originRoot + '/openid', {
            res: null,
            status: 301
        })) : (
            redirectTo(config.originFrontend + '/access', {res: null, status: 301}))));
    }

    render() {
        return (this.state && this.state.auth) ? (
            <Router history={history}>
                <Route exact path='/' component={() => this.renderPage(<Index/>)}/>
                <Route exact path='/admin/users' component={() => this.renderPage(<Users/>)}/>
                <Route exact path='/admin/user-edit' component={() => this.renderPage(<UserEdit/>)}/>
                <Route exact path='/admin/routes' component={() => this.renderPage(<Routes/>)}/>
                <Route exact path='/admin/route-edit' component={() => this.renderPage(<RouteEdit/>)}/>
                <Route exact path='/admin/actions' component={() => this.renderPage(<Actions/>)}/>
                <Route exact path='/admin/action-edit' component={() => this.renderPage(<ActionEdit/>)}/>
                <Route exact path='/admin/groups' component={() => this.renderPage(<Groups/>)}/>
                <Route exact path='/admin/group-edit' component={() => this.renderPage(<GroupEdit/>)}/>
                <Route exact path='/admin/permissions' component={() => this.renderPage(<Permissions/>)}/>
                <Route exact path='/categories/locations' component={() => this.renderPage(<Locations/>)}/>
                <Route exact path='/categories/location-edit' component={() => this.renderPage(<LocationEdit/>)}/>
                <Route exact path='/categories/datacenters' component={() => this.renderPage(<Datacenters/>)}/>
                <Route exact path='/categories/datacenter-edit' component={() => this.renderPage(<DatacenterEdit/>)}/>
                <Route exact path='/categories/rooms' component={() => this.renderPage(<Rooms/>)}/>
                <Route exact path='/categories/room-edit' component={() => this.renderPage(<RoomEdit/>)}/>
                <Route exact path='/categories/zones' component={() => this.renderPage(<Zones/>)}/>
                <Route exact path='/categories/zone-edit' component={() => this.renderPage(<ZoneEdit/>)}/>
                <Route exact path='/categories/departments' component={() => this.renderPage(<Departments/>)}/>
                <Route exact path='/categories/department-edit' component={() => this.renderPage(<DepartmentEdit/>)}/>
                <Route exact path='/categories/customers' component={() => this.renderPage(<Customers/>)}/>
                <Route exact path='/categories/customer-edit' component={() => this.renderPage(<CustomerEdit/>)}/>
                <Route exact path='/categories/regions' component={() => this.renderPage(<Regions/>)}/>
                <Route exact path='/categories/region-edit' component={() => this.renderPage(<RegionEdit/>)}/>
                <Route exact path='/categories/device-types' component={() => this.renderPage(<DeviceTypes/>)}/>
                <Route exact path='/categories/device-type-edit' component={() => this.renderPage(<DeviceTypeEdit/>)}/>
                <Route exact path='/categories/device-templates' component={() => this.renderPage(<DeviceTemplates/>)}/>
                <Route exact path='/categories/device-template-edit'
                       component={() => this.renderPage(<DeviceTemplateEdit/>)}/>
                <Route exact path='/categories/racks' component={() => this.renderPage(<Racks/>)}/>
                <Route exact path='/categories/rack-edit' component={() => this.renderPage(<RackEdit/>)}/>
                <Route exact path='/categories/rack-view' component={() => this.renderPage(<RackView/>)}/>
                <Route exact path='/categories/contracts' component={() => this.renderPage(<Contracts/>)}/>
                <Route exact path='/categories/contract-edit' component={() => this.renderPage(<ContractEdit/>)}/>
                <Route exact path='/layouts/layouts' component={() => this.renderPage(<Layouts/>)}/>
                <Route exact path='/request/up-new' component={() => this.renderPage(<UpNew/>)}/>
            </Router>
        ) : (<Loader active size='massive'/>);
    }
}

export default withCookies(App);
