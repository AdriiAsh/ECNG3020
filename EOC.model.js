const mongoose = require('mongoose') //importing mongoose 

var EOCSchema = mongoose.Schema({ //Creating mongooseSchema for EOC
    Firstname: String,    
    Lastname:String,
    Address:String,
    Gender:String,
    DoB:Date,
    ContactNo1: String, //Array of numbers
    ContactNo2: String,
    _userId:mongoose.Types.ObjectId,
    Email:String,
    Position: String,
    Date_created: Date
})

//Converting Schema into a Model to work with
var EOCModel = mongoose.model("EOC", EOCSchema) ; //Collection name
module.exports = EOCModel ;
