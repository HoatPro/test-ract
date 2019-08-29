import { combineReducers } from 'redux';
import { sideMenuR } from './sideMenuR';
import { routes } from './admin/routeR';
import { actions } from './admin/actionR';
import { groups } from './admin/groupR';
import { users } from './admin/userR';
import { permissions } from './admin/permissionR';
import { locations } from './categories/locationR';
import { datacenters } from './categories/datacenterR';
import { rooms } from './categories/roomR';
import { zones } from './categories/zoneR';
import { customers } from './categories/customerR';
import { departments } from './categories/departmentR';
import { deviceTypes } from './categories/deviceTypeR';
import { regions } from './categories/regionR';
import { deviceTemplates } from './categories/deviceTemplateR';
import { racks } from './categories/rackR';
import { layouts } from './layoutR';
import { alerts } from './alertR';
import { loading } from './loadingR';
import { contracts } from './categories/contractR';

const appReducers = combineReducers({
    sideMenuR,
    routes,
    actions,
    groups,
    users,
    permissions,
    alerts,
    locations,
    datacenters,
    rooms,
    zones,
    customers,
    departments,
    regions,
    deviceTypes,
    deviceTemplates,
    layouts,
    racks,
    contracts,
    loading
});

export default appReducers;