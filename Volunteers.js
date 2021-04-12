var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Volunteer= require('../Controller/VolunteerController')  ;
var Authentication = require('../Controller/AuthenticationController') ;

//For Volunteer
router.get('/Volunteer',Authentication.authenticate,Volunteer.GetVolunteer); //Get Volunteer

router.get('/Volunteers',Volunteer.GetVolunteers); //Get all Volunteer

router.get('/Availability',Volunteer.GetAvailability);//Get Availability

router.get('/Volunteer/:_userId',Volunteer.GetOneVolunteer); //Get Volunteer based on _userId

router.get('/Volunteer_id/:id',Volunteer.GetOneVolunteer_Id);//Get Volunteer based on id

module.exports = router