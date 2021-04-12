var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var Authentication = require('../Controller/AuthenticationController') ;


router.post('/Signup',Authentication.Signup) ; //Signup for Applicant

router.post('/SignupEOC',Authentication.SignupEOC) ; //Signup for EOC

router.patch('/UpdatePassword',Authentication.authenticate,Authentication.UpdatePassword); //Update Password field 

router.post('/Login',Authentication.Login) ; //Login  

//router.post('/Login',Authentication.verifySession,Authentication.AccessToken) ;

router.get('/GetUser',Authentication.authenticate,Authentication.getUserRole) ;//Get User Role

router.get('/getAccount/:id',Authentication.authenticate,Authentication.getAccount) ;//Get User Role

router.post('/getEmail',Authentication.getUserEmail) ;//Get User Email entered by user 

router.patch('/Account/:id',Authentication.VolunteerAccount) ; //Update Applicant account to a Volunteer account


module.exports = router