const ApplicationModel = require('../Models/Applications.model') ;//importing ApplicationModel

/*
* Purpose: GET one Volunteer
*/
var GetVolunteer = function(req, res){  
  
    ApplicationModel.findOne({
        _userId: req.user_id,
      }).then((Volunteers) => {
        res.send(Volunteers);
        });
       };

/*
* Purpose: GET one Volunteer
*/
var GetOneVolunteer = function(req, res){  
     ApplicationModel.findOne({ _userId: req.params._userId
    }).then((Volunteers) => {
            res.send(Volunteers);
            });
           };

/*
* Purpose: GET one Volunteer
*/
var GetOneVolunteer_Id=function(req,res){
  ApplicationModel.findOne({ _id: req.params.id
  }).then((Volunteers) => {
    console.log(Volunteers)
          res.send(Volunteers);
          });
         };


/*
* Purpose: GET all Volunteer
*/
var GetVolunteers = function(req, res){  
    ApplicationModel.find({
     Status:"Volunteer"
          }).then((Volunteers) => {
            console.log(Volunteers)
            res.send(Volunteers);
            });
           };
/*
* Purpose: GET Availability
*/
  var GetAvailability = function(req, res){  
            ApplicationModel.find({
                   Status:"Volunteer"
                  }).then((Volunteers) => {
                    res.send(Volunteers);
                    });
                   };
    

module.exports = { 
  GetOneVolunteer_Id,
    GetOneVolunteer,
    GetVolunteer,
    GetVolunteers,
    GetAvailability
}