var mongoose = require("mongoose");

var schema = mongoose.Schema;


var postSchema = new schema({
    subject: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);