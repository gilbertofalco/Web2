const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    password: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema)