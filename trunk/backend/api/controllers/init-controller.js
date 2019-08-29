const Mysql = require('../../../commons/databases/my-sql/facade/backend');
const mysql = new Mysql(console);
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const _var = require('../../../commons/utils/var');
const elk = require('../../../commons/databases/elasticsearch/facade/elastic-facade');
const type = _var.logConfig.type;
const baseController = require('../base-controller');
// const testSearch =require('../../../commons/databases/elasticsearch/test');
// function getDataSurveyDC(req,res) {
//     console.log(testSearch);
//
// }
function surveyDC(req, res) {
    const body = req.body;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        const CONTRACT = ['CUSTOMERNAME', 'CONTRACTNUMBER', 'CONTRACTDATE','FROMDATE_CONTRACT', 'TODATE_CONTRACT', 'SALEPROMOTIONINFORMATION', 'CONTACTNAME', 'CONTACTPHONENUMBER', 'CREATEDBY', 'CREATEDDATE', 'SALENAME'];
        const data = {
            controller: "init-controller",
            function: 'surveyDC',
            type: type.survey,
            data: {
                body: body,
                token: token,
                address: address
            }
        };
        console.log('surveyDC', data);
        elk.insert(data, function (resp) {
            if(resp) {
                result = {
                    status: 200,
                    message: "Successful!"
                };
                res.json(result);
            } else {
                result = {
                    status: 500,
                    message: "Failed!"
                };
            }
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'surveyDC',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                body: body,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function deployment(req, res) {
    const body = req.body;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        const data = {
            controller: "init-controller",
            function: 'deployment',
            type: type.survey,
            data: {
                body: body,
                token: token,
                address: address
            }
        };
        console.log('deployment', data);
        elk.insert(data, function (resp) {
            if(resp) {
                result = {
                    status: 200,
                    message: "Successful!"
                };
                res.json(result);
            } else {
                result = {
                    status: 500,
                    message: "Failed!"
                };
            }
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'surveyDC',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                body: body,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function getLocation(req, res) {
    const query = req.query;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        let str = `select locationId, locationName, description from tbl_Locations`;
        let params = null;

        mysql.query(str, params, resp => {
            let data = [];

            if(!_.isNull(resp)) {
                data = resp;
                result = {
                    status: 200,
                    message: "Successful!",
                    data: data
                };
            } else {
                result = {
                    status: 500,
                    message: "Failed!",
                    data: data
                };
            }

            // log
            elk.insert({
                controller: "init-controller",
                function: 'getLocation',
                type: type.getLocation,
                data: {
                    query: query,
                    token: token,
                    address: address
                }
            }, respLog => {
                console.log(respLog);
            });

            res.json(result);
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'getLocation',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function getDataCenter(req, res) {
    const query = req.query;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        let str = 'select dataCenterId, dataCenterName, locationId, description from tbl_DataCenters';
        let params = null;
        const locationId = query.locationId;
        if(locationId) {
            str += ' where locationId=?';
            params = [locationId];
        }
        mysql.query(str, params, resp => {
            let data = [];

            if(!_.isNull(resp)) {
                data = resp;
                result = {
                    status: 200,
                    message: "Successful!",
                    data: data
                };
            } else {
                result = {
                    status: 500,
                    message: "Failed!",
                    data: data
                };
            }

            // log
            elk.insert({
                controller: "init-controller",
                function: 'getDataCenter',
                type: type.getDataCenter,
                data: {
                    query: query,
                    token: token,
                    address: address
                }
            }, respLog => {
                console.log(respLog);
            });

            res.json(result);
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'getDataCenter',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function getRoom(req, res) {
    const query = req.query;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        let str = 'select roomId, roomName, dataCenterId, description from tbl_Rooms';
        let params = null;
        const dataCenterId = query.dataCenterId;
        if(dataCenterId) {
            str += ' where dataCenterId=?';
            params = [dataCenterId];
        }

        mysql.query(str, params, resp => {
            let data = [];

            if(!_.isNull(resp)) {
                data = resp;
                result = {
                    status: 200,
                    message: "Successful!",
                    data: data
                };
            } else {
                result = {
                    status: 500,
                    message: "Failed!",
                    data: data
                };
            }

            // log
            elk.insert({
                controller: "init-controller",
                function: 'getRoom',
                type: type.getRoom,
                data: {
                    query: query,
                    token: token,
                    address: address
                }
            }, respLog => {
                console.log(respLog);
            });

            res.json(result);
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'getRoom',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function getZone(req, res) {
    const query = req.query;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        let str = 'select zoneId, zoneName, roomId from tbl_Zones';
        let params = null;
        const roomId = query.roomId;
        if(roomId) {
            str += ' where roomId=?';
            params = [roomId];
        }

        mysql.query(str, params, resp => {
            let data = [];

            if(!_.isNull(resp)) {
                data = resp;
                result = {
                    status: 200,
                    message: "Successful!",
                    data: data
                };
            } else {
                result = {
                    status: 500,
                    message: "Failed!",
                    data: data
                };
            }

            // log
            elk.insert({
                controller: "init-controller",
                function: 'getZone',
                type: type.getZone,
                data: {
                    query: query,
                    token: token,
                    address: address
                }
            }, respLog => {
                console.log(respLog);
            });

            res.json(result);
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'getZone',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

function getRack(req, res) {
    const query = req.query;
    let result = {};
    const token = baseController.getToken(req);
    const address = baseController.getAddress(req);
    try {
        let str = 'select rackId, rackName, zoneId from tbl_Racks';
        let params = null;
        const zoneId = query.zoneId;
        if(zoneId) {
            str += ' where zoneId=?';
            params = [zoneId];
        }

        mysql.query(str, params, resp => {
            let data = [];

            if(!_.isNull(resp)) {
                data = resp;
                result = {
                    status: 200,
                    message: "Successful!",
                    data: data
                };
            } else {
                result = {
                    status: 500,
                    message: "Failed!",
                    data: data
                };
            }

            // log
            elk.insert({
                controller: "init-controller",
                function: 'getRack',
                type: type.getRack,
                data: {
                    query: query,
                    token: token,
                    address: address
                }
            }, respLog => {
                console.log(respLog);
            });

            res.json(result);
        });

    } catch(error) {
        elk.error({
            controller: 'init-controller',
            function: 'getRack',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                query: query,
                token: token,
                address: address
            }
        });
        result = {
            status: 500,
            message: "Failed!"
        };
        res.json(result);
    }
}

module.exports = {
    surveyDC,
    deployment,
    getLocation,
    getDataCenter,
    getRoom,
    getZone,
    getRack,
};