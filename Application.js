var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Application= require('../Controller/ApplicationController')  ;//importing ApplicationController
var Authentication = require('../Controller/AuthenticationController') ;//importing AuthenticationController

//For EOC
router.get('/Application',Application.GetAllApplication) ; //Get all applications

router.get('/Application/:id',Application.GetoneApplication) ; //Get one application 

router.get('/Accepted',Application.GetAcceptedApplication); //Get all accepted application

router.get('/Pending',Application.GetPendingApplication); //Get all pending application

router.get('/Declined',Application.GetDeclinedApplication);//Get all decline application

router.get('/Reapply',Application.GetOneReapplyingApplication);//Get all decline application

//For Null
router.get('/OneAccepted',Application.GetOneAcceptedApplication);//Get one accepted application

router.get('/OnePending',Application.GetOnePendingApplication); //Get one pending application

router.get('/OneDeclined',Application.GetOneDeclinedApplication); //Get one decline application

router.get('/Myapplication',Authentication.authenticate,Application.GetApplicantApplication); //Get my application

router.get('/Getvolunteer/:_userId',Application.Getvolunteer); //Get volunteer based on _userId

//Post and Update
router.post('/Application',Authentication.authenticate,Application.CreateApplication) ; //Create an application

router.patch('/Accepted/:id',Application.Accepted); //updated the Status field to Accepted for one application

router.patch('/Declined/:id',Application.Declined); //updated the Status field to Decline for one application

router.patch('/Volunteer/:id',Application.Volunteer); //updated the Status field to Volunteer for one application

router.patch('/Application',Authentication.authenticate,Application.UpdateApplication); //Update an application

router.patch('/Availability',Authentication.authenticate,Application.UpdateAvailability) ; //Update an Availability field

router.patch('/Reapply',Authentication.authenticate,Application.Reapply) ; //Update an Availability field

router.patch('/AcceptReapply/:id',Application.AcceptReapply) ; //Update an Availability field

router.patch('/DeclineReapply/:id',Application.DeclineReapply) ; //Update an Availability field

router.post('/GetTime', Application.GetTime); //Find a document with a specific day 

router.post('/GetTimeAMtoPM', Application.GetTimeAMtoPM); //Find a document with a specific day 

module.exports = router