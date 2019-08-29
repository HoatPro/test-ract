 	'use strict';

const Mysql = require('../../../../commons/databases/my-sql/facade/backend');
const mysql = new Mysql(console);
const _ = require('lodash');
const _var = require('../../../../commons/utils/var');
const elk = require('../../../../commons/databases/elasticsearch/facade/elastic-facade');

function getAllAction(req, res){
    let result = [];
    try{
        mysql.query(`select * from tbl_Actions order by tbl_Actions.order`, null, resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Get all action successful',
                data: temp
            };
            res.json(result);
        });
    }
    catch (error){
        // console.error('getAllActions_actions-controller', { error: err, data: {} });
        elk.error({
            controller: 'actions-controller',
            function: 'getAllActions',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {}
        });
        res.json({
            status: 500,
            message: 'Get all action failed',
            data: []
        });
    }
}

async function getActions(req, res){
	const query = req.query;
	let result = {};
	try{
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
                let count = await mysql.query_transaction(connection, `select count(*) as count from tbl_Actions where actionName like ?`, [where, where]);
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
                        message: "Get successful!"
                    };
                } else {
                    //select action by pagination
                    const from = pagination.currentPage * pagination.sizePage;
                    const query = `select * from tbl_Actions where actionName like ? order by tbl_Actions.createdDate desc limit ?, ?`;
                    const actions = await mysql.query_transaction(connection, query, [where, from, pagination.sizePage]);
                    
                    result = {
                        status: 200,
                        data: actions,
                        pagination: {
                            currentPage: pagination.currentPage,
                            countPage: countPage,
                            sizePage: pagination.sizePage
                        },
                        message: "Get successful!"
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
                controller: 'actions-controller',
                function: 'getActions',
                error: {
                    message: error.message,
                    stack: error.stack
                },
                data: query,
                // user: user
            });
            result = {
                status: 500,
                message: "Get failed"
            };
            res.json(result);
        }
	}
	catch (error){
		// console.error('getActions_actions-controller', { error: err, data: {} });
        elk.error({
            controller: 'actions-controller',
            function: 'getActions',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: query
        });
        result = {
			status: 500,
			message: "getActions failed!"
		};
		res.json(result);
	}
}

function insertAction (req, res) {
	const body = req.body;
	let result = {};
	try {
        const createdDate = new Date();
        if(!validate(body)) {
            elk.error({
                controller: 'actions-controller',
                function: 'insertAction',
                error: {
                    message: 'validate failed'
                },
                data: body,
            });
            res.json({
                status: 500,
                message: "Insert failed!"
            });
            return false;
        }
        mysql.query(`insert into tbl_Actions (actionName, actionKey, icon, description, createdDate, status) values ?`,  [[[body.actionName, body.actionKey, body.icon, body.description, createdDate, 1]]], resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Insert successful',
                data: {
                    actionId: resp.insertId
                }
            };
            res.json(result);
        });
	}
	catch (error) {
		// console.error('addAction_actions-controller', { error: e, data: body });
        elk.error({
            controller: 'actions-controller',
            function: 'insertAction',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
			status: 500,
			message: "Insert failed!"
		};
		res.json(result);
	}
}

function updateAction (req, res) {
	const body = req.body;
	let result = {};
	try {
        const updatedDate = new Date();
        if(!validate(body)) {
            elk.error({
                controller: 'actions-controller',
                function: 'updateAction',
                error: {
                    message: 'validate failed'
                },
                data: body,
            });
            res.json({
                status: 500,
                message: "Insert failed!"
            });
            return false;
        }
        // update action
        let data = {
            actionName: body.actionName,
            actionKey: body.actionKey,
            icon: body.icon,
            description: body.description,
            updatedDate: updatedDate,
        };
        mysql.query(`update tbl_Actions set ? where actionId=?`, [data, body.actionId], resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Update successful',
                data: temp
            };
            res.json(result);
        });
	}
	catch (error) {
        elk.error({
            controller: 'actions-controller',
            function: 'updateAction',
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

function deleteAction(req, res) {
	const body = req.query;
	let result = {};
	try {
        mysql.query(`delete from tbl_Actions where actionId=?`, [body.id], resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Delete successful',
                data: temp
            };
            res.json(result);
        });
	}
	catch (error) {
		// console.error('deleteAction_actions-controller', { error: e, data: body });
        elk.error({
            controller: 'actions-controller',
            function: 'deleteAction',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
			status: 500,
			message: "Delete failed!"
		};
		res.json(result);
	}
}

function validate(data) {
    if(!data.actionName) {
        return false;
    }

    if(!data.actionKey) {
        return false;
    }
   
    return true;
}

async function getActionById(req, res) {
    let result = {};
    const query = req.query;
    try {
        mysql.query(`select * from tbl_Actions where actionId=?`, [query.actionId], resp => {
            let temp = [];
            if(!_.isNull(resp)) {
                temp = resp;
            }
            result = {
                status: 200,
                message: 'Get successful',
                data: temp
            };
            res.json(result);
        });
    }
    catch (error) {
        elk.error({
            controller: 'actions-controller',
            function: 'getActionById',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: []
        });
        result = {
            status: 500,
            message: "Get failed!",
            data: []
        };
        res.json(result);
    }
}


module.exports = {
	getActions,
	getAllAction,
	insertAction,
	updateAction,
    deleteAction,
    getActionById
};