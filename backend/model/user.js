var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

