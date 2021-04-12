const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// JWT Secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const UserSchema = new mongoose.Schema({
    age: Number,

});



const User = mongoose.model('number', UserSchema);

module.exports = User 