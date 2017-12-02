var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    password: String
})

var User = mongoose.model('todoUser',UserSchema);

module.exports = User;