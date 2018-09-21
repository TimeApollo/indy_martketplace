var mongoose = require("mongoose");

var MessageSchema = new mongoose.Schema({
    messages: [{
        email: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        timestamp: {
            type: Date,
            default: Date.now()
        }
    }]
});

module.exports = mongoose.model('Messages', MessageSchema);