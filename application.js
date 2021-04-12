process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var express =require("express") ; //We are importing express in our file. We have access to it through the variable Express. We use it to create an application and assign it to var app
var cors  = require("cors") ;//Initilizing cors
var app = express() ;   //Initiating express
var bodyParser = require('body-parser') //bodyparser
var mongo =require('mongodb')  
var url = "mongodb://localhost:27017/";
var fs = require('fs');  //Initilizing gridfs
var path = require('path'); //Working with file directory 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


//CORS
//app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(cors({origin:"*"})) ;
// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
  res.header(
      'Access-Control-Expose-Headers',
      'x-access-token, x-refresh-token'
  );
  next();
});


const jwt = require('jsonwebtoken') //Intiliaizing jwt token
//Gridfs
const GridFsStorage = require('multer-gridfs-storage'); // Intiliaizing GridFs-multer Storage
const Grid = require('gridfs-stream') ;  //Intiliaizing Grid Storage
const bcrypt = require('bcryptjs') ; //Intiliaizing bcrypt
const multer = require('multer')  ;  //Intiliaizingmulter


//Intiliaizing Controllers
var auth=require('./Controller/AuthenticationController')
var Events=require('./Routes/Event')
var Chat=require('./Routes/Chat')
var Tasks=require('./Routes/Task')
var Application=require('./Routes/Application')
var Volunteer = require('./Routes/Volunteers'); //importing the Volunteer module
var EOC = require('./Routes/EOC');//importing the EOC module
var Authentication = require('./Routes/Authentication');//importing the EOC module
var Maps=require('./Routes/Map');
var EOC1 = require('./Controller/EOCController') 

/*
//Web push
const webpush= require('web-push') ; 
console.log(webpush.generateVAPIDKeys()) ;
const publicKey= 'BPvJfZUIV8vK41W_NgrXml68dh1gmQVDfXV63y9WcTm0zvRww93L8spg05tPQ1oti5C6c00Qz6h0rr1IFqzcLJY';
const privateKey='yI2qT9gyfoKefx1xjxi3pElZx2KhwZvWImhlxjo6_ck';
*/



//Creating "Propeties' file to connect to mongoDB server
var mongoose = require("mongoose") //Importing  mongoose into our file
var dbURL1= require("./properties").DB_URL1 ; //Importing Properties file into our file
const { isObject } = require("util");
//const { getMaxListeners } = require("./models/Applicants.model");
mongoose.connect(dbURL1) // Connect to MongoDB "Systems" Database
mongoose.connection.on("connected",()=> {    //Listening for error events on the connection
    console.log("Connected to MongoDB using Mongoose")
});

app.use(bodyParser.urlencoded({ extended: true })) ;
app.use(bodyParser.json());
app.use(bodyParser.raw()) ;
app.use(bodyParser.text());

//mongoose
//Schema-datatypes
var ApplicationModel = require('./Models/Applications.model') //importing the ApplicationModel
var EOCModel = require('./Models/EOC.model')        //importing the EOCModel
var TaskModel = require('./Models/Task.model')//importing the TaskModel
var EventModel = require('./Models/Event.model')//importing the EventModel
var ChatModel = require('./Models/Chat.model')//importing the ChatModel
var User = require('./Models/User');//importing the ChatModel
const { indexOf } = require("lodash");

// connecting to mongoose
const conn = mongoose.createConnection(dbURL1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

///Gridfs and Multer Uplaoding files
//Init GFS
const uri = 'mongodb:mongodb://localhost:27017/Systems'


let gfs ;
conn.once('open', function() {
    //Init stream
gfs = Grid(conn.db, mongoose.mongo) ; 
gfs.collection('fs') ; 
})

let storage = new GridFsStorage({ 
  url: uri,
  file: (req, file) => {
      return new Promise(
          (resolve, reject) => {
                     const fileInfo = {
                  filename: file.originalname,
         //         bucketName: "imageUpload",
                  metadata: req.user_id,
                  fieldname:file.fieldname
              }
              resolve(fileInfo)

          }
      )
  }
})

const upload = multer({storage}) ;

app.post('/Upload',auth.authenticate,upload.single("productImage"),function(req, res){    //Upload an image
  res.send(req.file)
  console.log(req.file)
})


app.get('/Profile/:filename', (req, res) => {  //Get profile picture for profile page
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {

      //check if files exist
      if (!file || file.length == 0) {
          return res.status(404).json({
              err: "No files exist"
          })
      }
      //check if image
      if (file.contentType === 'image/jpeg' || file.contentType === "image/png" ||file.contentType === "application/pdf" ) {
          //read output to browser
          const readStream = gfs.createReadStream(file.filename)
          readStream.pipe(res)
      } else {
          res.status(404).json({
              err: "Not an image"
          })
      }
  })
})

app.get('/Picture/:filename',(req,res)=>{ //Get a picture based on filename
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
  
        //check if files exist
        if (!file || file.length == 0) {
            return res.status(404).json({
                err: "No files exist"
            })
        }
        //check if image
        if (file.contentType === 'image/jpeg' || file.contentType === "image/png" ||file.contentType === "application/pdf" ) {
            //read output to browser
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
        } else {
            res.status(404).json({
                err: "Not an image"
            })
        }
    })
  })

  app.get('/files/:metadata', (req,res) =>{  //Get a specific file based on user ID
    gfs.files.find({metadata: req.params.metadata}).toArray((err, files) =>{
      if(!files || files.length === 0) {
          return res.status(404).json({
          err: "No file exist"
          });
      }
      return res.json(files);
    });
    });


    app.get('/Pictures',(req,res)=>{  //Find all the pictures in th gfs Storage
        gfs.files.find({}, (err, files) => {
      
         return   res.json(files[0].metadata);
        })
      })
    

app.get('/Profile/:metadata', (req, res) => {   //Picture for profile picture 
    gfs.files.findOne({ metadata: req.params.metadata}, (err, file) => {
  
        //check if files exist
        if (!file || file.length == 0) {
            return res.status(404).json({
                err: "No files exist"
            })
        }
        //check if image
        if (file.contentType === 'image/jpeg' || file.contentType === "image/png" ||file.contentType === "application/pdf"||file.contentType==="docx" ) //Suported Files
        {
            //read output to browser
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
        } else {
            res.status(404).json({
                err: "Not an image"
            })
        }
    })
  })



///Sending an email 
  var nodemailer = require('nodemailer');


  app.post('/sendmail_Volunteer', (req, res) => {
    let email = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'volunteercoordinationtool@gmail.com',
          pass: 'Make1choice'
        }
      });
      
      let mailOptions = {
        from: 'volunteercoordinationtool@gmail.com',
        to: email,
        subject: 'You now a Volunteer!!!',
        text: 'You can sign into the Volunteer Coordination Tool as a Volunteer, have great day'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent!');
        }
      });
  })


  app.post('/sendmail_EOC', (req, res) => {
    let email = req.body.Email;
    let password = req.body.Password;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'volunteercoordinationtool@gmail.com',
          pass: 'Make1choice'
        }
      });
      
      let mailOptions = {
        from: 'volunteercoordinationtool@gmail.com',
        to: email,
        subject: 'New account',
        text: 'You can sign now sign into the Volunteer Coordination Tool using your email and this password:  '+ `${password}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent!');
        }
      });
  })

  app.post('/sendmail_Task', (req, res) => {
    let email = req.body.Email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'volunteercoordinationtool@gmail.com',
          pass: 'Make1choice'
        }
      });
      
      let mailOptions = {
        from: 'volunteercoordinationtool@gmail.com',
        to: email,
        subject: 'New Task',
        text: 'You have a new Task assigned to you, please check the Volunteer Coordination Tool'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent!');
        }
      });
  })


  app.post('/sendmail_Decline', (req, res) => {
    let email = req.body.email;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'volunteercoordinationtool@gmail.com',
          pass: 'Make1choice'
        }
      });
      
      let mailOptions = {
        from: 'volunteercoordinationtool@gmail.com',
        to: email,
        subject: 'Application Status',
        text: 'Your Application has been decline, sign in the Volunteer Coordination to see the Application Status'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent!');
        }
      });
  })

  app.post('/Reset_password', (req, res) => {
    let email = req.body.Email;
    let password = req.body.Password;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'volunteercoordinationtool@gmail.com',
          pass: 'Make1choice'
        }
      });
      
      let mailOptions = {
        from: 'volunteercoordinationtool@gmail.com',
        to: email,
        subject: 'New account',
        text: 'Your new password is: '+ `${password}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent!');
        }
      });
  })


app.get('/',function(req, res){    //Default route localhost 4000
    res.send('Welcome to Voluteer Coordination Tool')  //response
 })

 app.get('/Chat',function(req, res){    //Default route localhost 4000
  ChatModel.find({}).then((Chat) => {
    res.send(Chat);
})
})



app.use('/Chat',Chat)
app.use('/Event',Events) //Event Route
app.use('/Task',Tasks)  //Task Route 
app.use('/EOC',EOC)     //EOC Route 
app.use('/Application',Application) //Application Route
app.use('/Authentication',Authentication)  //Authentication Route
app.use('/Map',Maps)    //Map Route 
app.use('/Volunteer',Volunteer) //Volunteer Route 

app.listen(4000) ; //localhot 4000