var mongoose = require("mongoose");

var ConvoSchema = new mongoose.Schema({
    emails: [String],
    messages: [{
        message: String, 
        email: String, 
        timestamp: String
    }]
});

module.exports = mongoose.model('Conversation', ConvoSchema);