'use strict';

const Mysql = require('../../../../commons/databases/my-sql/facade/backend');
const mysql = new Mysql(console);
const _ = require('lodash');
const _var = require('../../../../commons/utils/var');
const elk = require('../../../../commons/databases/elasticsearch/facade/elastic-facade');
const base = require('../../base-controller');

function getAllRack(req, res){
    let result = [];
    try{
        mysql.query('select * from tbl_Racks order by rackName', null, resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Get all rack successful',
                data: temp
            };
            res.json(result);
        });
    }
    catch (err){
        // console.error('getAllRacks_racks-controller', { error: err, data: {} });
        elk.error({
            controller: 'racks-controller',
            function: 'getAllRacks',
            error: err,
            data: {}
        });
        result = {
            status: 500,
            message: 'Get all rack failed',
            data: []
        };
        res.json(result);
    }
}

async function getRacks(req, res){
    const query = req.query;
    let result = {};
    try {
        const connection = await mysql.transaction();
        const _pagination = query.pagination? JSON.parse(query.pagination): {};
        const search = query.search? JSON.parse(query.search): {};
        const pagination = {
            currentPage: _pagination.currentPage ? parseInt(_pagination.currentPage): _var.pagination.currentPage,
            sizePage: _pagination.sizePage ? parseInt(_pagination.sizePage) : _var.pagination.sizePage,
        };
        try {
            if(connection) {
                // begin transaction
                await connection.beginTransaction();

                // count rows
                const where = `%${search.str? search.str: ''}%`;
                let count = await mysql.query_transaction(connection, `select count(*) as count from tbl_Racks where rackName like ?`, [where]);
                count = count[0].count;
                const countPage = ~~((count - 1) / pagination.sizePage) + 1;
                if(count === 0) {
                    result = {
                        status: 200,
                        data: [],
                        pagination: {
                            currentPage: pagination.currentPage,
                            countPage: countPage,
                            sizePage: pagination.sizePage
                        },
                        message: "Get racks successful!"
                    };
                } else {
                    const from = pagination.currentPage * pagination.sizePage;
                    const racks = await mysql.query_transaction(connection, `select rackId, rackName, model, uNumber, SNMP, maxPower, wattage, maxWeight,
                        tbl_Racks.width, tbl_Racks.height, tbl_Racks.x, tbl_Racks.y, tbl_Racks.description, tbl_Racks.status, rackWidth, rackHeight, rackDepth,
                        tbl_Racks.createdDate, tbl_Racks.updatedDate, tbl_Locations.locationId, locationName, tbl_DataCenters.dataCenterId, dataCenterName, dataCenterKey,
                        tbl_Rooms.roomId, roomName, tbl_Rooms.codeRoom, tbl_Zones.zoneId, zoneName, tbl_Zones.width as zoneWidth, tbl_Zones.height as zoneHeight, tbl_Zones.x as zoneX, 
                        tbl_Zones.y as zoneY, image
                        from tbl_Racks
                        join tbl_Zones on tbl_Zones.zoneId=tbl_Racks.zoneId
                        join tbl_Rooms on tbl_Rooms.roomId=tbl_Zones.roomId
                        join tbl_DataCenters on tbl_Rooms.dataCenterId=tbl_DataCenters.dataCenterId
                        join tbl_Locations on tbl_DataCenters.locationId=tbl_Locations.locationId
                        where rackName like ?
                        order by tbl_Racks.createdDate desc
                        limit ?, ?`, [where, from, pagination.sizePage]);
                    result = {
                        status: 200,
                        data: racks,
                        pagination: {
                            currentPage: pagination.currentPage,
                            countPage: countPage,
                            sizePage: pagination.sizePage
                        },
                        message: "Get Racks successful!"
                    };
                }
                // end transaction
                await connection.commit();
                connection.release();
                res.json(result);
            }
        } catch (error) {
            connection.rollback();
            elk.error({
                controller: 'racks-controller',
                function: 'getRacks',
                error: error,
                data: query,
                // user: user
            });
            result = {
                status: 500,
                message: "Lỗi tạo phiếu Đặt hàng"
            };
            res.json(result);
        }
    }
    catch (err){
        elk.error({
            controller: 'racks-controller',
            function: 'getRacks',
            error: err,
            data: query
        });
        result = {
            status: 500,
            message: "getRacks failed!",
            data: [],
        };
        res.json(result);
    }
}

function getRackById(req, res) {
    let result = {};
    const query = req.query;
    try {
        const rack = new Promise(resolve => {
            mysql.query(`select rackId, rackName, model, uNumber, SNMP, maxPower, wattage, maxWeight,
            tbl_Racks.width, tbl_Racks.height, tbl_Racks.x, tbl_Racks.y, tbl_Racks.description, tbl_Racks.status, rackWidth, rackHeight, rackDepth,
            tbl_Racks.createdDate, tbl_Racks.updatedDate, tbl_Locations.locationId, locationName, tbl_DataCenters.dataCenterId, dataCenterName, dataCenterKey,
            tbl_Rooms.roomId, roomName, tbl_Rooms.codeRoom, tbl_Zones.zoneId, zoneName, tbl_Zones.width as zoneWidth, tbl_Zones.height as zoneHeight, tbl_Zones.x as zoneX, 
            tbl_Zones.y as zoneY, image
            from tbl_Racks
            join tbl_Zones on tbl_Zones.zoneId=tbl_Racks.zoneId
            join tbl_Rooms on tbl_Rooms.roomId=tbl_Zones.roomId
            join tbl_DataCenters on tbl_Rooms.dataCenterId=tbl_DataCenters.dataCenterId
            join tbl_Locations on tbl_DataCenters.locationId=tbl_Locations.locationId
            where rackId=?`, query.rackId,resp => {
                let temp = {};
                if(!_.isNull(resp)) {
                    temp = resp[0];
                }
                resolve(temp);
            });
        });
        const bookingUs = new Promise(resolve => {
            mysql.query(`select * from tbl_Racks_BookingUs where rackId=?`, query.rackId,resp => {
                let temp = [];
                if(!_.isNull(resp)) {
                    temp = resp;
                }
                resolve(temp);
            });
        });
        const devices = new Promise(resolve => {
            mysql.query(`select * from tbl_Racks_Devices where rackId=?`, query.rackId,resp => {
                let temp = [];
                if(!_.isNull(resp)) {
                    temp = resp;
                }
                resolve(temp);
            });
        });
        Promise.all([rack, bookingUs, devices]).then(resp => {
            res.json({
                status: 200,
                data: {
                    ...resp[0],
                    bookingUs: resp[1],
                    devices: resp[2]
                }
            })
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'getRackById',
            error: e,
            data: {}
        });
        result = {
            status: 500,
            message: "Get Racks failed!",
            data: {}
        };
        res.json(result);
    }
}

function getRackByZone(req, res) {
    let result = {};
    const query = req.query;
    try {
        mysql.query(`select * from tbl_Racks where zoneId=?`, query.zoneId, resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Get Racks failed!",
                    data: []
                };
            } else {
                result = {
                    status: 200,
                    message: "Get Racks successful!",
                    data: resp
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'getRackByZone',
            error: e,
            data: []
        });
        result = {
            status: 500,
            message: "Get Racks failed!",
            data: []
        };
        res.json(result);
    }
}

async function insertRack (req, res) {
    const body = req.body;
    let result = {};
    try {
        const user = await base.getSession(req);
        const createdDate = new Date();
        if(!validate(body)) {
            res.json(result = {
                status: 500,
                message: "Add Rack failed!"
            });
            return false;
        }

        const query = `insert into tbl_Racks (rackName, model, uNumber, SNMP, maxPower, wattage, maxWeight, x, y, width, height, rackWidth, rackHeight, rackDepth, zoneId, description, status, createdDate, createdBy) values ?`;
        console.log('insertRack 1');
        mysql.query(query,[[[body.rackName, body.model, body.uNumber, body.SNMP, body.maxPower, body.wattage, body.maxWeight, body.x, body.y, body.width, body.height, body.rackWidth, body.rackHeight, body.rackDepth, body.zoneId, body.description, 1, createdDate, user.userId]]], resp => {
            console.log('insertRack resp', resp);

            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message:  "Add Rack failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Add Rack successful!",
                    data: {
                        ...body,
                        createdDate: createdDate,
                        rackId: resp.insertId,
                    }
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'insertRack',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
            status: 500,
            message: "Add Rack failed!"
        };
        res.json(result);
    }
}

async function updateRack (req, res) {
    const body = req.body;
    let result = {};
    const user = await base.getSession(req);
    try {
        if(!validate(body)) {
            res.json(result = {
                status: 500,
                message: "Update failed!"
            });
            return false;
        }
        // rackName, model, uNumber, SNMP, maxPower, wattage, maxWeight, x, y, width, height, rackWidth, rackHeight, rackDepth, zoneId, description, status, createdDate, createdBy
        let data = {
            rackName: body.rackName,
            model: body.model,
            uNumber: body.uNumber,
            SNMP: body.SNMP,
            maxPower: body.maxPower,
            wattage: body.wattage,
            maxWeight: body.maxWeight,
            x: body.x,
            y: body.y,
            width: body.width,
            height: body.height,
            rackWidth: body.rackWidth,
            rackHeight: body.rackHeight,
            rackDepth: body.rackDepth,
            zoneId: body.zoneId,
            description: body.description,
            updatedDate: new Date(),
            updatedBy: user.userId
        };
        const query = `update tbl_Racks set ? where rackId=?`;
        mysql.query(query, [data, body.rackId], resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Update failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Update successful!",
                    data: {
                        ...data,
                        rackId: body.rackId
                    }
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'updateRack',
            error: e,
            data: body
        });
        result = {
            status: 500,
            message: "Update failed!"
        };
        res.json(result);
    }
}

function deleteRack(req, res) {
    const query = req.query;
    let result = {};
    try {
        mysql.query(`delete from tbl_Racks where rackId=?`, parseInt(query.id), resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Remove failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Remove successful!",
                    data: {
                        rackId: query.id
                    }
                };
            }
            res.json(result);
        })
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'deleteRack',
            error: e,
            data: query
        });
        result = {
            status: 500,
            message: "Remove failed!"
        };
        res.json(result);
    }
}

function validate(data) {
    if(!data.rackName) {
        return false;
    }

    if(!data.zoneId) {
        return false;
    }

    return true;
}

function validateBookingU(data) {
    if(!data.positionU) {
        return false;
    }

    if(!data.height) {
        return false;
    }

    if(!data.description) {
        return false;
    }
    return true;
}

async function bookingU (req, res) {
    const body = req.body;
    let result = {};
    try {
        const user = await base.getSession(req);
        const createdDate = new Date();
        if(!validateBookingU(body)) {
            res.json(result = {
                status: 500,
                message: "Booking U failed!"
            });
            return false;
        }
        const query = `insert into tbl_Racks_BookingUs (rackId, position, positionU, description, height, createdDate, createdBy) values ?`;

        mysql.query(query,[[[body.rackId, body.position, body.positionU, body.description, body.height, createdDate, user.userId]]], resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message:  "Booking U failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Booking U successful!",
                    data: {
                        ...body,
                        createdDate: createdDate,
                        bookingUId: resp.insertId,
                    }
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'bookingU',
            error: e,
            data: body
        });
        result = {
            status: 500,
            message: "Booking U failed!"
        };
        res.json(result);
    }
}

function validateAddDevice(data) {
    let regexIP = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$");

    if(!data.deviceName) {
        return false;
    }

    if(!data.connectorNumber) {
        return false;
    }

    if(!data.deviceTypeId) {
        return false;
    }
    if(!data.deviceTemplateId) {
        return false;
    }
    if(!data.contractId) {
        return false;
    }
    // if(!data.ip) {
    //     return false;
    // } else if (!regexIP.test(data.ip)) {
    //     return false;
    // }

    if(!data.height) {
        return false;
    }
    return true;
}

async function addDeviceRack (req, res) {
    const body = req.body;
    let result = {};
    try {
        const user = await base.getSession(req);
        const createdDate = new Date();
        if(!validateAddDevice(body)) {
            res.json(result = {
                status: 500,
                message: "Add Device Rack failed!"
            });
            return false;
        }
        const label = `${body.dataCenterKey}.${body.contractId}.${body.codeRoom}.${body.rackName}.U${body.positionU}(${body.height})`; // dataCenterKey.MA HD.ROOM.TEN RACK. VI TRI(height)
        const query = `insert into tbl_Racks_Devices (rackId, deviceName, label, deviceTypeId, deviceTemplateId, 
                        connectorNumber, contractId, IP, position, positionU, height, createdDate, createdBy) values ?`;

        mysql.query(query,[[[body.rackId, body.deviceName, label, body.deviceTypeId, body.deviceTemplateId, parseInt(body.connectorNumber),
            body.contractId, body.ip, body.position, body.positionU, parseInt(body.height), createdDate, user.userId]]], resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message:  "Add device rack failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Add device rack successful!",
                    data: {
                        ...body,
                        createdDate: createdDate,
                        deviceId: resp.insertId,
                    }
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'addDevice',
            error: e,
            data: body
        });
        result = {
            status: 500,
            message: "Add Device rack failed!"
        };
        res.json(result);
    }
}

function deleteBooking(req, res) {
    const query = req.query;
    let result = {};
    try {
        mysql.query(`delete from tbl_Racks_BookingUs where bookingUId=?`, parseInt(query.bookingUId), resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Remove Booking failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Remove Booking successful!",
                    data: {
                        bookingUId: query.id
                    }
                };
            }
            res.json(result);
        })
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'deleteBooking',
            error: e,
            data: query
        });
        result = {
            status: 500,
            message: "Remove Booking failed!"
        };
        res.json(result);
    }
}

function deleteDeviceRack(req, res) {
    const query = req.query;
    let result = {};
    try {
        mysql.query(`delete from tbl_Racks_Devices where deviceId=?`, query.deviceId, resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Remove Device on Rack failed!"
                };
            } else {
                result = {
                    status: 200,
                    message: "Remove Device on Rack successful!",
                    data: {
                        deviceId: query.deviceId
                    }
                };
            }
            res.json(result);
        })
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'deleteDevice',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: query
        });
        result = {
            status: 500,
            message: "Remove Device on Rack failed!"
        };
        res.json(result);
    }
}

function validateMoveU(data) {
    if(!data.rackId) {
        return false;
    }
    if(!data.positionU) {
        return false;
    }
    return true
}

async function saveMoveU (req, res) {
    const body = req.body;
    let result = {};
    const user = await base.getSession(req);
    try {
        if(!validateMoveU(body)) {
            res.json(result = {
                status: 500,
                message: "Update failed!"
            });
            return false;
        }
        // rackName, model, uNumber, SNMP, maxPower, wattage, maxWeight, x, y, width, height, rackWidth, rackHeight, rackDepth, zoneId, description, status, createdDate, createdBy


        if(body.typeMove === 'Booking') {
            let data = {
                rackId: body.rackId,
                positionU: body.positionU,
                updatedDate: new Date(),
                updatedBy: user.userId
            };
            const query = `update tbl_Racks_BookingUs set ? where bookingUId=?`;
            mysql.query(query, [data, body.bookingUId], resp => {
                if(_.isNull(resp)) {
                    result = {
                        status: 500,
                        message: "Update failed!"
                    };
                } else {
                    result = {
                        status: 200,
                        message: "Update successful!",
                        data: {
                            ...body
                        }
                    };
                }
                res.json(result);
            });
        }
        else if(body.typeMove === 'Device') {
            let data = {
                rackId: body.rackId,
                positionU: body.positionU,
                updatedDate: new Date(),
                updatedBy: user.id || 21
            };
            const query = `update tbl_Racks_Devices set ? where deviceId=?`;
            mysql.query(query, [data, body.deviceId], resp => {
                if(_.isNull(resp)) {
                    result = {
                        status: 500,
                        message: "Update failed!"
                    };
                } else {
                    result = {
                        status: 200,
                        message: "Update successful!",
                        data: {
                            ...body
                        }
                    };
                }
                res.json(result);
            });
        }

    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'moveU',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
            status: 500,
            message: "Update failed!"
        };
        res.json(result);
    }
}

function getDeviceById(req, res) {
    const query = req.query;
    try {
        mysql.query(`select * from tbl_Racks_Devices where deviceId=?`, [query.deviceId],resp => {
            let temp = {};
            if(!_.isNull(resp)) {
                temp = resp[0];
            }
            res.json({
                status: 200,
                message: "Get Device successful!",
                data: temp
            });
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'getDeviceById',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
            }
        });
        res.json({
            status: 500,
            message: "Get Device failed!",
            data: {}
        });
    }
}

async function importDeviceToRack(req, res) {
    const body = req.body;
    let result = {};
    const user = await base.getSession(req);
    try {
        const createdDate = new Date();
        // const
        let data = [];
        let dataInsert = [];
        let devices = body;
        const length = devices.length;
        const status = 1;
        let error = [];

        const racks = await new Promise(resolve => {
            mysql.query(`SELECT deviceTemplateId, deviceTemplateName, dtp.deviceTypeId, dt.deviceTypeName
                FROM tbl_DeviceTemplates as dtp
                join tbl_DeviceTypes as dt on dtp.deviceTypeId=dt.deviceTypeId`, null, resp => {
                let result = [];
                if(!_.isNull(resp)) {
                    result =resp;
                }
                resolve(result);
            });
        });

        const query = `insert into tbl_DeviceTemplates (deviceTemplateName, deviceTypeId, CPU, RAM, disk, maxPower, powerModule, weight, height, manufacturer, front, rear, description, createdDate, createdBy, status) values ?;`;

        for(let i = 0; i < length; i++) {
            const item = deviceTemplates[i];
            let name = item.name.toString().trim();
            let deviceTypeName = item.deviceTypeName.toString().trim();
            let CPU = item.CPU;
            let RAM = item.RAM;
            let Disk = item.Disk;
            let powerMax = item.powerMax;
            let powerModule = item.powerModule;
            let weight = item.weight;
            let height = item.height;
            let manufacturer = item.manufacturer.toString().trim();
            let desc = item.desc.toString().trim();
            const deviceType = _.find(deviceTypes, {deviceTypeName: deviceTypeName});
            const deviceTypeId = deviceType? deviceType.deviceTypeId: '';
            if(!deviceTypeId) {
                error.push(i + 2);
                continue;
            }
            item.deviceTypeId = deviceTypeId;

            if(name && _.findIndex(data, {name: name, deviceTypeId: deviceTypeId}) === -1) {
                data.push({
                    name,
                    CPU,
                    RAM,
                    Disk,
                    powerMax,
                    powerModule,
                    weight,
                    height,
                    manufacturer,
                    description: desc,
                    createdDate,
                    deviceTypeId,
                    createdBy: user.userId,
                    status
                });
                const temp = [
                    name,
                    deviceTypeId,
                    CPU,
                    RAM,
                    Disk,
                    powerMax,
                    powerModule,
                    weight,
                    height,
                    manufacturer,
                    '',
                    '',
                    desc,
                    createdDate,
                    user.userId,
                    status
                ];

                dataInsert.push(temp);
                //
                // const promise = new Promise(resolve => {
                //     mysql.query(query, [[temp]], resp => {
                //         if(_.isNull(resp) || resp.affectedRows === 0) {
                //             error.push(i + 2);
                //         }
                //         resolve(true);
                //     })
                // });
                //
                // promises.push(promise);
            } else {
                error.push(i + 2);
            }
        }

        mysql.query(query, [dataInsert], resp => {
            if(resp && resp.affectedRows > 0) {
                if(_.size(error) > 0) {
                    result = {
                        status: 500,
                        message: `Error in rows: ${error.join(', ')}`
                    };
                } else {
                    result = {
                        status: 200,
                        message: 'Import Device to Rack successful!'
                    };
                }
            } else {
                result = {
                    status: 500,
                    message: 'Import Device to Rack failed!'
                };
            }

            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'importDeviceToRack',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
            status: 500,
            message: "Import Device to Rack failed!"
        };
        res.json(result);
    }
}

async function getRackByRoom(req, res) {
    let result = {};
    const query = req.query;
    try {
        mysql.query(`select * from tbl_Racks where roomId=?`, query.roomId, resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Get Racks failed!",
                    data: []
                };
            } else {
                result = {
                    status: 200,
                    message: "Get Racks successful!",
                    data: resp
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'getRackByRoom',
            error: e,
            data: []
        });
        result = {
            status: 500,
            message: "Get Racks failed!",
            data: []
        };
        res.json(result);
    }
}

function getRackByZones(req, res) {
    let result = {};
    const query = req.query;
    try {
        let zoneId = query.zoneId;
        zoneId = _.isArray(zoneId)? zoneId: [zoneId];
        mysql.query(`select * from tbl_Racks where zoneId=?`, query.zoneId, resp => {
            if(_.isNull(resp)) {
                result = {
                    status: 500,
                    message: "Get Racks failed!",
                    data: []
                };
            } else {
                result = {
                    status: 200,
                    message: "Get Racks successful!",
                    data: resp
                };
            }
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'racks-controller',
            function: 'getRackByZone',
            error: e,
            data: []
        });
        result = {
            status: 500,
            message: "Get Racks failed!",
            data: []
        };
        res.json(result);
    }
}

module.exports = {
    getAllRack,
    getRacks,
    insertRack,
    updateRack,
    deleteRack,
    getRackById,
    getRackByZone,
    getRackByZones,
    getRackByRoom,
    bookingU,
    addDeviceRack,
    deleteDeviceRack,
    deleteBooking,
    saveMoveU,
    getDeviceById,
    importDeviceToRack,
};