
const mongoose = require('mongoose')//importing mongoose 

var TaskSchema = mongoose.Schema({  //Creating mongooseSchema for Task
    Task_Status:String,   
    Resources:String,      
    Task_Name: String,
    Task_Description: String,
    Task_Location: String,
    Task_Priority:String,
    Date_Task_Began: Date,
    Event_id:mongoose.Types.ObjectId,
    EOC_id:mongoose.Types.ObjectId ,
    Volunteer_id:Array
})

//Converting Schema into a Model to work with
var TaskModel = mongoose.model("Tasks", TaskSchema) ; //Collection name

module.exports = TaskModel ;