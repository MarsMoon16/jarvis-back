const Module = require('../model/user');


exports.createEvent = async (req, res, next) => {
    let body = req.body;
    console.log('body', body)
    if (!body) {
        console.log('You must provide an event  model')
        return res.status(400).json({
            success: false,
            error: 'You must provide an event model',
        })
    }
    const honestEvent = new Module(body)

    honestEvent
        .save()
        .then(() => {
            console.log('body : then')
            return res.status(201).json({
                success: true,
                id: Module._id,
                message: 'event model created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'event model not created!',
            })
        })
}

exports.getEvents = async (req, res, next) => {
    Module.find({})
        .then((Modules) => {
            // conso&le.log('modules : ', Modules)
            res.status(200).json(Modules)
        })
        .catch(error => console.log('error getModules : ', error))
}