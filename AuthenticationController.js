const express = require('express');
const User = require('../Models/User')
const jwt = require('jsonwebtoken');
const { response } = require('express');
const bcrypt = require('bcryptjs');


// check whether the request has a valid JWT access token
var authenticate = (req, res,next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}

// Verify Refresh Token Middleware (which will be verifying the session)
var verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }


    // if the code reaches here - the user was found
 // therefore the refresh token exists in the database - but we still have to check if it has expired or not

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}

/* END MIDDLEWARE  */

/* USER ROUTES */

/**
 * POST /users
 * Purpose: Sign up
 */
var Signup=function(req,res){
    // User sign up
    newUser = new User({                 //create new Applicant
        email: req.body.email,            
        password:req.body.password,
        Role: "Applicant",
    }) 
    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        // Session created successfully - refreshToken returned.
        // now we geneate an access auth token for the user

        return newUser.generateAccessAuthToken().then((accessToken) => {
            // access auth token generated successfully, now we return an object containing the auth tokens
            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
        console.log(e)
    })
}

var SignupEOC=function(req,res){
    // User sign up
    newUser = new User({                 //create new EOC
        email: req.body.email,            
        password:req.body.password,
        Role: req.body.Role,
        First: true,
    }) 
    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        // Session created successfully - refreshToken returned.
        // now we geneate an access auth token for the user

        return newUser.generateAccessAuthToken().then((accessToken) => {
            // access auth token generated successfully, now we return an object containing the auth tokens
            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
            console.log(newUser)
    }).catch((e) => {
        res.status(400).send(e);
        console.log(e)
    })
}

/**
 * POST /users/login
 * Purpose: Login
 */
 var Login=function(req,res){
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            // Session created successfully - refreshToken returned.
            // now we geneate an access auth token for the user

            return user.generateAccessAuthToken().then((accessToken) => {
                // access auth token generated successfully, now we return an object containing the auth tokens
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
                console.log(user)
        })
    }).catch((e) => {
        res.status(400).send(e);
        console.log(e)
    });
}


/**
 * GET /users/me/access-token
 * Purpose: generates and returns an access token
 */
//app.get('/users/me/access-token', verifySession, (req, res) => {
    var AccessToken=function(req,res){
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
}

/**
 * Purpose: Update volunteer Account
 */
 var VolunteerAccount = function(req, res){
    User.findByIdAndUpdate({ _id: req.params.id}, {
        $set:{
        Role:"Volunteer",
       // First:true
        }
    }).then((response) => {
        console.log(response)
        res.send(response);
    });
};

/*
 * Purpose: Get User
 */
var getUserRole = function(req, res){  
    User.findOne({
     _id: req.user_id,      
    }).then((user) => {
        res.send(user);
    })
};

/*
 * Purpose: Get Applicant email 
 */
var getUserEmail = function(req, res){  
    User.findOne({
     email: req.body.email,      
    }).then((response) => {
        res.send(response);
        console.log(response)
    })
   
};


/*
 * Purpose: GET EOC
 */
var getSession = function(req, res){  
    User.findOne({
    _id: req.user_id,      
    }).then((response) => {
        res.send(response.sessions);
        console.log(user)
    })
   
};

/*
 * Purpose: Update passowrd
 */
var UpdatePassword = function(req, res){
   
    newpassword=req.body.password

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newpassword, salt, (err, hash) => {
          newpassword = hash;


      User.findByIdAndUpdate({_id:req.user_id},{
        password: newpassword, 
        First:false
      },function (err,response) {
        if (err) {
          return err
        } else {
            
            console.log(newpassword) 
         //   console.log(response)
              res.send("password updated successfully!");
            }
       
      })
    })
})

}
   

/*
 * Purpose: Get Applicant email 
 */
var getAccount = function(req, res){  
    User.findOne({
        _id: req.params.id,      
    }).then((response) => {
        res.send(response);
        console.log(response)
    })
   
};






       





module.exports = { 
    getAccount,
    SignupEOC,
    AccessToken,
    Login,
    verifySession,
    authenticate,
    Signup,
    getUserRole,
    getUserEmail,
    getSession,
    VolunteerAccount,
    UpdatePassword,
     }





