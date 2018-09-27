var mongoose = require("mongoose");

var ConvoSchema = new mongoose.Schema({
    emails: [String],
    messages: [{
        message: String, 
        email: String, 
        timestamp: { 
            type: Date, 
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Conversation', ConvoSchema);