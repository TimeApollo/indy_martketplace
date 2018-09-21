var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  }
});

module.exports = mongoose.model('User', UserSchema);