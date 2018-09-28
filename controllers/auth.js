const express = require("express");
const { User, Messages } = require("../models");
const auth = express.Router();

//register user
auth.post("/register", (req, res) => {
  console.log(req.body);
  User.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      email_lower: req.body.email.toLowerCase(),
      password: req.body.password,
      about: "Tell us about yoself"
    },
    function(err, user) {
      if (err) {
        res.send(err);
      } else if ( user.hasOwnProperty('errmsg') ) {
        res.json(user)
      } else {
        delete user._doc.password
        user = {
          ...user._doc,
          token: 1231231981,
        };
        res.json(user);
      }
    }
  );
});

auth.post("/login", (req, res) => {
  User.findOne({ email_lower: req.body.email.toLowerCase(), password: req.body.password }, function(
    err,
    user
  ) {
    if (err) {
      res.json(err);
    } else {
      delete user._doc.password
      user = {
        ...user._doc,
        token: 1231231981,
      };
      res.json(user);
    }
  });
});

auth.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: true, message: "Logged out!" });
});

module.exports = {
  auth
};
