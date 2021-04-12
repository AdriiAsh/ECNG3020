const EventModel = require('../Models/Event.model') //importing EventModel
const { ObjectId } = require('mongodb')


/*
 * Purpose: Create an event
 */
var CreateEvent = function(req, res){   

        newEvent = new EventModel({                 //create new Applicant
            Event_Name: req.body.Event_Name,            
            Event_Type:req.body.Event_Type,
            Event_Description: req.body.Event_Description,
            Event_Location:req.body.Event_Location,
            Event_Date: new Date
        }) 
        newEvent.save(function(err,response){
        if(err){
            res.send(err)
            console.log(err)
        }
        else
        res.send(response)
        console.log(response)
    })   
} 


/*
 * Purpose: Delete an event
 */
var DeleteEvent = function(req, res){  
    EventModel.deleteOne({
        _id: req.params.id,
    }).then((Events) => {
        res.send(Events);
    })
};

/*
 * Purpose: GET one Event
 */
var GetoneEvent = function(req, res){  
    EventModel.findOne({
        _id:req.params.id
    }).then((Events) => {
        res.send(Events);
    })
};

/*
 * Purpose: GET Allevents
 */
var GetAllEvent = function(req, res){  
    EventModel.find({}).then((Events) => {
        res.send(Events);
    })
};  

/*
 * Purpose: Update Event
 */
var UpdateEvent = function(req, res, next){  //EOC/EditTask
        var myquery = {_id:req.params.id};
        var newvalues = { $set: {
            Event_Name: req.body.Event_Name,            
            Event_Type: req.body.Event_Type,
            Event_Description: req.body.Event_Description,
            Event_Location: req.body.Event_Location
        } };
        EventModel.updateOne(myquery, newvalues, function(err, response) {
          if(err) throw err;
          else
          res.send(response)
          console.log("1 document updated"); 
    })
}



module.exports = { 
    CreateEvent,
    DeleteEvent,
    GetoneEvent,
    UpdateEvent,
    GetAllEvent
     }
