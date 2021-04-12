var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Task= require('../Controller/TaskController')  ;
var Authentication = require('../Controller/AuthenticationController') ;


router.get('/Task',Task.GetAllTask) ; //Get all Task

router.get('/Task/:id',Task.GetoneTask) ;//Get one Task

router.get('/VolunteerTask',Authentication.authenticate,Task.GetVolunteerTask) ; //Get one task that belongs to volunteer

router.get('/EOCTask',Authentication.authenticate,Task.GetEOCTask);//get EOC Task

router.post('/Task/:Event_id',Authentication.authenticate,Task.CreateTask) ;//Create a Task

router.patch('/Task/:id',Task.UpdateTask);//Update a Task

router.patch('/Assign/:id/:Volunteer_id',Task.AssignTask);//Assign a task

router.patch('/Complete/:id',Task.Complete);//Complete a Task

router.patch('/Incomplete/:id',Task.Incomplete);//Update a Task to incomplete

router.delete('/Task/:id',Task.DeleteTask)   ;// Delete a Task

module.exports = router