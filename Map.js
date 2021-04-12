var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Maps= require('../Controller/MapController')  ;
var Authentication = require('../Controller/AuthenticationController') ;


router.patch('/Map/:id',Maps.UpdateLocation); //Update user location

router.get('/GetLocation/:id',Maps.getLocation) ;//get user location

router.get('/Map',Maps.getAllLocation) ; //get all location

module.exports = router