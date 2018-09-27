var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email_lower: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 5,
    required: true
  },
  about: {
    type: String,
    minLength: 1,
    required: true
  },
  mediums: {
    type: [String],
    minLength: 1,
    required: true
  },
  styles: {
    type: [String],
    minLength: 1,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
