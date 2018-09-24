var mongoose = require("mongoose");

var ConvoSchema = new mongoose.Schema({
    emails: [String],
    messages: [{ message: String, email: String, date: Date.now() }]
});

module.exports = mongoose.model('Conversations', ConvoSchema);