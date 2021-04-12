const { response } = require('express');
const ApplicationModel = require('../Models/Applications.model') ;//importing ApplicationModel


/*
 * Purpose: Create an Application
 */
var CreateApplication = function(req, res){   

    newApplication = new ApplicationModel({                 //create new Applicant
        Firstname: req.body.Firstname,    //SchemaTypes
        Lastname:req.body.Lastname,
        Home_Address:req.body.Home_Address,
        Gender:req.body.Gender,
        DoB:req.body.DoB,
        Skill:req.body.Skill,
        _userId: req.user_id,
        Status: "Pending",
        ContactNo1: req.body.ContactNo1, //Array of numbers
        ContactNo2: req.body.ContactNo2,
        Email:req.body.Email,
        Availability:req.body.Availability,
        Reapply:false, 
        Date_created: new Date
    }) ;
    newApplication.save(function(err,response){
    if(err){
        res.send(err)
        console.log(err)
    }
    else
    res.send(response)
    console.log(response)
});
} 


/*
* Purpose: GET Application
*/
var GetoneApplication = function(req, res){  
ApplicationModel.findOne({
    _id:req.params.id
}).then((Applications) => {
    res.send(Applications);
});
};

/*
* Purpose: GET Pending Application
*/
var GetPendingApplication = function(req, res){  
    ApplicationModel.find({
        Status:"Pending"
}).then((Applications) => {
        res.send(Applications);
});
};

/*
* Purpose: GET Accepted Application
*/
var GetAcceptedApplication = function(req, res){  
        ApplicationModel.find({
            Status:"Accepted"
}).then((Applications) => {
            res.send(Applications);
});
};

/*
* Purpose: GET Declined Application
*/
var GetDeclinedApplication = function(req, res){  
         ApplicationModel.find({
            _userId: req.user_id,
            Status:"Declined"
}).then((Applications) => {
             res.send(Applications);
});
};

/*
* Purpose: GET All Application
*/
var GetAllApplication = function(req, res){  
ApplicationModel.find({}).then((Applications) => {
    res.send(Applications);
});
};  

/*
* Purpose: GET one Declined Application
*/
var GetOneDeclinedApplication = function(req, res){  
    ApplicationModel.findOne({
        _userId: req.user_id,
       Status:"Declined"
      }).then((Applications) => {
        res.send(Applications);
        });
       };

/*
* Purpose: GET one Accepted Application
*/
var GetOneAcceptedApplication = function(req, res){  
    ApplicationModel.findOne({
        _userId: req.user_id,
       Status:"Accepted"
      }).then((Applications) => {
        res.send(Applications);
        });
       };

/*
* Purpose: GET one Pending Application 
*/
var GetOnePendingApplication = function(req, res){  
    ApplicationModel.findOne({
        _userId: req.user_id,
       Status:"Pending"
      }).then((Applications) => {
        res.send(Applications);
        });
       };

/*
* Purpose: GET one Application based on _userId
*/
var GetApplicantApplication = function(req, res){  
    ApplicationModel.findOne({
        _userId: req.user_id,
}).then((Applications) => {
        res.send(Applications);
});
};

/*
* Purpose: Update Application 
*/

var UpdateApplication = function(req, res, next){  //EOC/EditTask
    var myquery = {_userId: req.user_id};
    var newvalues = { $set: {
        Firstname: req.body.Firstname,    //SchemaTypes
        Lastname:req.body.Lastname,
        Home_Address:req.body.Home_Address,
        Gender:req.body.Gender,
        DoB:req.body.DoB,
        Skill:req.body.Skill,
        ContactNo1: req.body.ContactNo1, //Array of numbers
        ContactNo2: req.body.ContactNo2,
        Email:req.body.Email,
    } };
    ApplicationModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log(response); 
})
}

/*
* Purpose: Update Status field to Accepted
*/
var Accepted = function(req, res){
ApplicationModel.findByIdAndUpdate({ _id: req.params.id}, {
    $set: {
        Status:"Accepted",
        Comments: "Congrats, your application has been accepted, please wait for your new password to login as a volunteer"
    }},{new: true}
).then((response) => {
    console.log(response)
    res.send(response);
});
};

/*
* Purpose: Update Status field to decline
*/
var Declined = function(req, res){
ApplicationModel.findByIdAndUpdate({ _id: req.params.id}, {
    $set: {
        Status:"Declined",
        Comments: req.body.Comments
    }
},{new: true}).then((response) => {
    console.log(response)
    res.send(response);
});
};

/*
* Purpose: Update Status field to Volunteer
*/
var Volunteer = function(req, res){
    ApplicationModel.findByIdAndUpdate({_id: req.params.id}, {
     $set:{
     Status:"Volunteer" 
    }
    }).then((response) => {
        res.send(response);
    });
    };

/*
* Purpose: find Application based on _userId based on _userId
*/
var Getvolunteer = function(req, res){
    ApplicationModel.findOne({ _userId: req.params._userId}).then((response) => {
    res.send(response);
});
};


/*
* Purpose: Update Application 
*/
var  UpdateAvailability = function(req, res){
    var myquery = {_userId: req.user_id};
    var newvalues = { $set: {  
      Availability:req.body
    } };
    ApplicationModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log("1 document updated"); 
})
}


/*
* Purpose: find Application based on _userId based on _userId
*/
var Update_Uploads = function(req, res){  
    Image.find({
    }).then((Applications) => {
        res.send(Applications);
    });
    };
    
    
/*
* Purpose: GET the Day of the Availability
*/

var GetTime= function(req, res){   
    ApplicationModel.find(
{$and:[ 
{ "Availability.Day":req.body.Day},
{"Availability.TimeStart":{$gte: req.body.start}},
{"Availability.TimeEnd": {$lte: req.body.end}},
{ "Availability.AM_PM":req.body.AM_PM},
{ "Availability.AM_PM1":req.body.AM_PM1}]},
    ).then((Applications) => {
        console.log(req.body.Time)
        res.send(Applications);
 });
 };

 var GetTimeAMtoPM= function(req, res){   
    ApplicationModel.find(
{ "Availability.Day":req.body.Day},
{$or:[ 
{"Availability.TimeStart":{$gte: req.body.start}},
{"Availability.TimeEnd": {$lte: req.body.end}},
{ "Availability.AM_PM":req.body.AM_PM},
{ "Availability.AM_PM1":req.body.AM_PM1}]},
    ).then((Applications) => {
        console.log(req.body.Time)
        res.send(Applications);
 });
 };


/*
* Purpose: Update Volunteer Skill
*/
var Reapply= function(req, res){   
    var myquery = {_userId: req.user_id};
    var newvalues = { $set: {
        Skill:req.body.Skill,
        Reapply:true,
    } };
    ApplicationModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log(response); 
})
}

/*
* Purpose: GET one Reapplying Application 
*/
var GetOneReapplyingApplication = function(req, res){  
    ApplicationModel.find({
       Reapply:true
      }).then((Applications) => {
        res.send(Applications);
        });
       };

/*
* Purpose: Update Reapplying Application
*/
var AcceptReapply= function(req, res){   
    var myquery = {_id: req.params.id};
    var newvalues = { $set: {
        Reapply:false,
    } };
    ApplicationModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log(response); 
})
}

/*
* Purpose: Update Reapplying Application
*/
var DeclineReapply= function(req, res){   
    var myquery = {_id: req.params.id};
    var newvalues = { $set: {
        Reapply:false,
        Skill:req.body.Skill,
    } };
    ApplicationModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log(response); 
})
}



module.exports = { 
GetTimeAMtoPM,
DeclineReapply,
AcceptReapply,
GetOneReapplyingApplication,
Reapply,
GetTime,
Update_Uploads,
CreateApplication,
GetoneApplication,
GetAllApplication,
GetAcceptedApplication,
GetDeclinedApplication,
GetPendingApplication,
Declined,
Accepted,
Volunteer,
GetApplicantApplication,
GetOnePendingApplication,
GetOneAcceptedApplication,
GetOneDeclinedApplication,
UpdateApplication,
Getvolunteer,
//GetAvailability,
UpdateAvailability,
//Birthpaper
 }