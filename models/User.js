var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true
  }
});

module.exports = mongoose.model('User', UserSchema); 