'use strict';
const PORT = 3000;
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    // server.get('/p/:id', (req, res) => {
    //     const actualPage = '/post';
    //     const queryParams = { title: req.params.id };
    //     app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/show/:id', (req, res) => {
    //     const actualPage = '/show';
    //     const queryParams = { id: req.params.id };
    //     app.render(req, res, actualPage, queryParams)
    // })


    server.get('*', (req, res) => {
        // res.redirect('/login');
        // let url = req.url;
        // if(!dev) {
        //     if(url.indexOf('static') > -1) {
        //         req.url = req.url.replace('static', 'raca/static');
        //     }
        // }
        // if(req.url.indexOf('layouts') > -1) {
        //     console.log(req.url);
        // }
        // req.url = req.url.replace('/raca', '');

        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if(err) throw err;
        console.log('>>>>>>> Ready on http://localhost:3000 <<<<<<');
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});