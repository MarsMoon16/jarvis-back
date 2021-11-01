const http = require('http');
const express = require('express');
const app = express();
const db = require('./db/conn');
const Module = require('./model/user');

const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);

server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});


app.use((req, res, next) => {
    console.log('req received', req.originalUrl)
    next()
})

app.get('/user', function (req, res, next) {
    Module.find({})
        .then((Modules) => {
            console.log('modules : ', Modules)
            res.status(200).json(Modules)
        })
        .catch(error => {
            console.log('error getModules : ', error)
            res.status(200).json({error: "fucked"})
        })

    // res.send('MARSEILLE BB');
});

server.listen(port);

