const mongoose = require('mongoose') //importing mongoose 

var ChatSchema = mongoose.Schema({ //Creating mongooseSchema for EOC
        user:String,
        message:String,
        Time: Date,
        Role:String,
})

//Converting Schema into a Model to work with
var ChatModel = mongoose.model("Chat", ChatSchema) ; //Collection name
module.exports = ChatModel ;
