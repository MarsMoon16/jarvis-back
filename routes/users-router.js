const express = require('express')
const router = express.Router();

const eventsController = require('../controllers/events-controller')


//CRUD API
router.post('/event', eventsController.createEvent)
// router.put('/event/:id', eventsController.updateEventById)
router.get('/events', eventsController.getEvents);
// router.get('/event/:id', eventsController.getEventById);

module.exports = router;

