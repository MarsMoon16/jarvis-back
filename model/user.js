const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Module = new Schema(
    {
        name: { type: String, required: true },
        event: { type: String, required: true },
        date: { type: String, required: true },
    }
)
module.exports = mongoose.model('henstevents', Module)
