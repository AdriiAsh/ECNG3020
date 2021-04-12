const mongoose = require('mongoose') //importing mongoose 

var EventSchema = mongoose.Schema({ //Creating mongooseSchema for Event
    Event_Name: String,            
    Event_Type: String,
    Event_Description: String,
    Event_Location: String,
    Event_Date: Date
})

//Converting Schema into a Model to work with
var EventModel = mongoose.model("Event", EventSchema) ; //Collection name
module.exports = EventModel ;