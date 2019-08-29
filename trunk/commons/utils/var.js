module.exports = {
    user: {
        username: 'admin',
        password: '1q2w3e4r',
        email: 'namld9@fpt.com.vn',
        status: 1
    },
    bcrypt: {
        saltRounds: 10
    },
    jwt: {
        exp: '24h',
        secret: 'noc-raca',
        secretAPI: 'noc-raca-api-inf',
        secretToken: 'noc-raca-token',
        algorithms: 'HS256',
        pageLoad: {
            openApi: true
        }
    },
    pagination: {
        currentPage: 0,
        sizePage: 10
    },
    datetime: {
        fileName: 'DDMMYYYYHHmmss',
    },
    logConfig: {
        prevIndex: 'raca-log',
        formatDate: 'YYYY-MM',
        _type: 'log',
        type: {
            error: 'error',
            action: 'action',
            survey: 'survey-info',
            getLocation: 'get-location',
            getDataCenter: 'get-data-center',
            getRoom: 'get-room',
            getZone: 'get-zone',
            getRack: 'get-rack',
            deployment: 'survey-info',
        },
        indexCount: 'count-request',
    },
    department: {
        ots: 'Ots',
        net: 'Net'
    },
    userType: {
        normal: 0,
        admin: 1
    }
};