var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Database Schema
var userSchema = new Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String,

    id: String,
    date_created: String
});

//User Schema
var users = mongoose.model('users', userSchema);

module.exports = users;
