var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var EOC= require('../Controller/EOCController')  ;
var Authentication = require('../Controller/AuthenticationController') ;


router.get('/EOC',EOC.GetAllEOC) ; //Get all EOC Account

router.get('/EOC/:id',EOC.GetoneEOC) ; //Get an EOC member

router.get('/Profile',Authentication.authenticate,EOC.GetProfileEOC) ; //Get the Profile of the EOC

router.post('/EOC',Authentication.authenticate,EOC.CreateEOC) ; //Create a EOC Account

router.patch('/EOC',Authentication.authenticate,EOC.UpdateEOC);//Update EOC account

router.delete('/EOC/:id',EOC.DeleteEOC)   ;//Delete EOC

module.exports = router