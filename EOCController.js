const EOCModel = require('../Models/EOC.model') //importing EOCModel

/*
 * Purpose: Create an EOC
 */
var CreateEOC = function(req, res){   

        newEOC = new EOCModel({                 //create new EOC
            Firstname: req.body.Firstname,    
            Lastname: req.body.Lastname,
            Address:req.body.Address,
            Gender:req.body.Gender,
            DoB:req.body.DoB,
            ContactNo1: req.body.ContactNo1, 
            _userId: req.user_id,
            ContactNo2: req.body.ContactNo2,
            Email:req.body.Email,
            Position: req.body.Position,
            Date_created: new Date
        }) 
        newEOC.save(function(err,response){
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
 * Purpose: Delete an EOC
 */
var DeleteEOC = function(req, res){  
    EOCModel.deleteOne({
        _id: req.params.id,
    }).then((EOC) => {
        res.send(EOC);
    })
};

/*
 * Purpose: GET EOC for params
 */
var GetoneEOC = function(req, res){  
    EOCModel.find({
        _id:req.params.id
    }).then((EOC) => {
        res.send(EOC);
    })
};

/*
 * Purpose: GET EOC for profile
 */
var GetProfileEOC = function(req, res){  
    EOCModel.findOne({
   _userId: req.user_id    
    }).then((EOC) => {
        res.send(EOC);
    })
};


/*
 * Purpose: GET AllEOC
 */
var GetAllEOC = function(req, res){  
    EOCModel.find({}).then((EOC) => {
        console.log(EOC)
        res.send(EOC);
        
    })
};  



var UpdateEOC = function(req, res, next){  //EOC/EditTask
    var myquery = {_userId: req.user_id};
    var newvalues = { $set: {
        Firstname: req.body.Firstname,    //SchemaTypes
        Lastname:req.body.Lastname,
        Address:req.body.Address,
        Gender:req.body.Gender,
        DoB:req.body.DoB,
        Position:req.body.Position,
        ContactNo1: req.body.ContactNo1, //Array of numbers
        ContactNo2: req.body.ContactNo2,
        Email:req.body.Email,
    } };
    EOCModel.updateOne(myquery, newvalues, function(err, response) {
      if(err) throw err;
      else
      res.send(response)
      console.log(response); 
})
}



module.exports = { 
    CreateEOC,
    DeleteEOC,
    GetoneEOC,
    UpdateEOC,
    GetAllEOC,
    GetProfileEOC,
     }
