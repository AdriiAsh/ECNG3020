var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Event= require('../Controller/EventController')  ;
var Authentication = require('../Controller/AuthenticationController') ;


router.get('/Event',Event.GetAllEvent) ; //Get all Events

router.get('/Event/:id',Event.GetoneEvent) ;//Get one Event

router.post('/Event',Event.CreateEvent) ; //Create an Event

router.patch('/Event/:id',Event.UpdateEvent);//Update an Event
 
router.delete('/Event/:id',Event.DeleteEvent);//Delete an Event

module.exports = router