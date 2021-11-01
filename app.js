const express = require('express');
const eventRoutes = require('./routes/users-router')
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', eventRoutes);
// app.use('/honest', mqttRoutes)

app.use(express.static('static'));


module.exports = app;