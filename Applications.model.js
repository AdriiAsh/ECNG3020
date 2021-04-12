const mongoose = require('mongoose') //importing mongoose 

var ApplicationSchema = mongoose.Schema({ //Creating mongooseSchema for Application
    Firstname: String,    //SchemaTypes
    Lastname:String,
    Home_Address:String,
    Gender:String,
    DoB:Date,
    _userId:mongoose.Types.ObjectId,
    Status:String,
    ContactNo1: String, //Array of numbers
    Skill: Array,
    ContactNo2: String,
    Email:String,
    Comments:String,
    Availability:Array,
    Birthpaper:String,
    Reapply:Boolean,
    Date_created: Date
})

//Converting Schema into a Model to work with
var ApplicationModel = mongoose.model("Application", ApplicationSchema) ; //Collection name
module.exports = ApplicationModel ;
