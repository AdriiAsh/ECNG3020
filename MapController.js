const User = require('../Models/User')

var GetoneLocation = function(req, res){  
    User.find({
        _id:req.params.id
    }).then((EOC) => {
        res.send(EOC);
    })
};


var UpdateLocation = function(req, res){
    User.updateOne({ _id: req.params.id}, {
        $set:{
            coordinates:req.body
        }
    }).then((response) => {
        res.send(response);
    });
    };

/*
 * Purpose: GET a User's Location
 */
var getLocation = function(req, res){  
    User.findOne({
        _id: req.params.id,      
    }).then((user) => {
        res.send(user);
    })
};

/*
 * Purpose: GET All User's Location
 */
var getAllLocation = function(req, res){  
    User.find({
        Role:"Volunteer"  
    }).then((user) => {
        console.log(user)
        res.send(user);
    })
};




module.exports = { 
    UpdateLocation,
    getLocation,
    getAllLocation
     }