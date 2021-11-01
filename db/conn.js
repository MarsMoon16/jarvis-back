const mongoose = require('mongoose')

mongoose.
    connect('mongodb+srv://mars:marseillebb@cluster0.9cqqm.mongodb.net/Cluster0?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('mongodb is : connectedd'))
    .catch(() => console.log('mongodb is : not connected'))

const db = mongoose.connection

module.exports = db