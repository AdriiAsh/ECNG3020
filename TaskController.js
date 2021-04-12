const TaskModel = require('../Models/Task.model') ;//importing TaskModel
const { ObjectId } = require('mongodb');


/*
 * Purpose: Create an task
 */
var CreateTask = function(req, res){   

        newTask = new TaskModel({                 //create new Applicant
            Task_Status:"Incomplete",         
            Task_Name: req.body.Task_Name,
            Resources: req.body.Resources,
            Task_Description: req.body.Task_Description,
            Task_Location: req.body.Task_Location,
            Task_Priority:req.body.Task_Priority,
            Date_Task_Began: new Date,
            Event_id: req.params.Event_id,
        //    Volunteer_id:req.params.Volunteer_id,
            EOC_id:req.user_id
        }) ;
        newTask.save(function(err,response){
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
 * Purpose: Delete an task
 */
var DeleteTask = function(req, res){  
    TaskModel.deleteOne({
        _id: req.params.id,
    }).then((Tasks) => {
        res.send(Tasks);
    });
};

/*
 * Purpose: GET one Task
 */
var GetoneTask = function(req, res){  
    TaskModel.findOne({
        _id:req.params.id
    }).then((Tasks) => {
        res.send(Tasks);
    });
};

/*
 * Purpose: GET Alltask
 */
var GetAllTask = function(req, res){  
    TaskModel.find({

    }).then((Tasks) => {
        res.send(Tasks);
    });
};  

/*
 * Purpose: GET Volunteer's task
 */
var GetVolunteerTask = function(req, res){  
    TaskModel.find({ Volunteer_id: { "$in": req.user_id} }
    ).then((Tasks) => {
        res.send(Tasks);
        console.log(Tasks)
    });
};  

/*
 * Purpose: GET All EOC's Task 
 */
var GetEOCTask = function(req, res){  
    TaskModel.find({
        EOC_id:req.user_id
    }).then((Tasks) => {
        res.send(Tasks);
    });
};  



/*
 * Purpose: Update Task
 */
var UpdateTask = function(req, res, next){  //EOC/EditTask
    var myquery = {_id:req.params.id};
    var newvalues = { $set: {
        Task_Name: req.body.Task_Name,
        Task_Description: req.body.Task_Description,
        Resources:req.body.Resources,
        Task_Location: req.body.Task_Location,
        Task_Priority:req.body.Task_Priority,
    } };
    TaskModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log("1 document updated"); 
})
}
/*
 * Purpose: Update Task to Assign to Volunteer
 */
var AssignTask = function(req, res){
    TaskModel.updateOne({ _id: req.params.id}, 
        { $push: { Volunteer_id: req.params.Volunteer_id} },
    ).then((response) => {
        res.send(response);
    });
};

/*
 * Purpose: Update Task to incomplete
 */
var Incomplete = function(req, res){
    TaskModel.updateOne({ _id: req.params.id}, {
        $set: {
            Task_Status:"incomplete",
        }
    }).then(() => {
        res.send('updated');
    });
};

/*
 * Purpose: Update Task to complete
 */
var Complete = function(req, res){
    TaskModel.updateOne({ _id: req.params.id}, {
        $set: {
            Task_Status:"Complete",
        }
    }).then(() => {
        res.send('updated');
    });
};

/*
 * Purpose: Update Task to complete
 */
var PreDefineTask = function(req, res){
    TaskModel.updateOne({ _id: req.params.id}, {
        $set: {
            Task_Status:"Complete",
        }
    }).then(() => {
        res.send('updated');
    });
};




module.exports = { 
    CreateTask,
    DeleteTask,
    GetoneTask,
    UpdateTask,
    GetAllTask,
    AssignTask,
    Complete,
    Incomplete,
    GetVolunteerTask,
    GetEOCTask
     }
