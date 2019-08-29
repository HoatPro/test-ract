'use strict';

const Mysql = require('../../../../commons/databases/my-sql/facade/backend');
const mysql = new Mysql(console);
const _ = require('lodash');
const _var = require('../../../../commons/utils/var');
const elk = require('../../../../commons/databases/elasticsearch/facade/elastic-facade');
const base = require('../../base-controller');
const middleware = require('../../middleware/middleware');
const bcrypt = require('bcryptjs');

async function login(req, res) {
    const body = req.body;
    let result = {};
    const _bcrypt = _var.bcrypt;

    try {
        //------TEST LOGIN --------//
        let email = body. email;
        email = email.trim().toLocaleLowerCase();
        const password = body.password;

        let exist = await new Promise(resolve => {
            mysql.query('select * from tbl_Users where email=? or username=?', [email, email], resp => {
                resolve(resp);
            })
        });

        if(exist && _.size(exist) > 0) {
            exist = exist[0];
            const compare = bcrypt.compareSync(password, exist.password);

            if(!compare) {
                result = {
                    status: 401,
                    message: "Unauthorized",
                    data: {
                        user: {}
                    }
                };
            } else {
                const permission = await middleware.checkPermission(exist.email);

                 delete exist.password;

                const user = {
                    ...exist,
                    permission
                };

                req.session.passport = {};
                req.session.passport = {user};
                result = {
                    status: 200,
                    message: "Successful",
                    data: {
                        user: user,
                        authtoken: req.sessionID
                    }
                }
            }
        } else {
            result = {
                status: 500,
                message: "Login failed",
                data: {
                    user: {}
                }
            };
        }

        res.json(result);
    }
    catch (error) {
        elk.error({
            controller: 'auth-controller',
            function: 'login',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: body
        });
        result = {
            status: 500,
            message: "Login failed!",
            data: {
                user: {}
            }
        };
        res.json(result);
    }
}

async function authUser(req, res){
    const body = req.body;
    let result = {};
    let user = await base.getSession(req);
    try{
        if(user) {
            delete user.password;
            result = {
                status: 200,
                message: "success",
                data: {
                    auth: true,
                    user: user
                }
            };
        } else {
            result = {
                status: 403,
                message: "failure",
                data: {
                    auth: false,
                    user: user
                }
            };
        }

        res.json(result);
    }
    catch(error){
        elk.error({
            controller: 'auth-controller',
            function: 'authUser',
            error: {
                message: error.message,
                stack: error.stack
            },
            data: {
                body,
                user
            }
        });
        result = {
            status: 500,
            message: "failure",
            data: {
                auth: false,
                user: user
            }
        };
        res.json(result);
    }
}


async function promisify(inner) {
    return new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );
}

async function addUser(user) {
    let formatDate = (current_datetime) => {
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    };

    user.createdDate = formatDate(new Date());
    user.updatedDate = formatDate(new Date());
    let query = `SELECT * FROM User WHERE email = ${connection.escape(user.email)} AND userName=${connection.escape(user.username.toLowerCase())}`;
    let results = await promisify(cb => connection.query(query, cb));

    if (results.length === 0) {
        let query = `INSERT INTO User(userID, userName, email, createdDate, updatedDate, status, description, type, fullName, districtId, createdBy, updatedBy) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
        let data = await promisify(cb => connection.query(query, [user.userId, user.username.toLowerCase(), user.email, user.createdDate, user.updatedDate, user.status, user.description, user.type, user.fullName, user.districtId, user.createdBy, user.updatedBy], cb));
        console.log('add user', data);
    }
}

async function checkUser(user) {
    let query = `SELECT * FROM User WHERE email=? AND userName=?`;
    let data = await promisify(cb => connection.query(query, [user.email, user.username.toLowerCase()], cb));
    return (data.length !== 0 && data[0].allow_access === 1);
}

module.exports = {
    login,
    authUser
};


// let userrr = JSON.parse(req.sessionStore.sessions[body.keyId]).user; 1