var express =require("express") ; //We are importing express in our file. We have access to it through the variable Express. We use it to create an application and assign it to var app
var app = express() ;   //Initiating express
var express = require('express'); //importing express 
var router = express.Router();  // Creating an object of express
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const ChatModel = require('../Models/Chat.model') //importing EOCModel


var server =require('http').Server(app);
var io =require('socket.io')(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

io.on('connection', function(socket){
  console.log("Chat is working hooray!!!!")

socket.on('output-messages', function(data){
    ChatModel.find().then(result=>{
        console.log(result)
     //   socket.emit('new message',{user:data.user, message:result})
    })
    
})



  socket.emit('test event', 'Chat server is working')

  //A user joined a room
  socket.on('join', function(data){
    socket.join(data.room) ;
    console.log(data.user + 'joined the room'+data.room)
    socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room'})
  })

    //A user left a room
    socket.on('leave', function(data){
    
      console.log(data.user + 'left the room'+data.room)
      socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room'})
      socket.leave(data.room) ;
   
    })

socket.on('message', function(data){
      //save message
  const message = new ChatModel({message:data.message, user:data.user , Time:new Date, Role:data.Role});
  message.save().then(()=>{
  })
  io.in(data.room).emit('new message', {user:data.user, message:data.message, Time:new Date, Role:data.Role})
})

});



server.listen(3000,()=>{
  console.log("Socket.io server is working")
})



module.exports = router