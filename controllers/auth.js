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
      password: req.body.email,
      about: "Tell us about yoself"
    },
    function(err, user) {
      if (err) {
        res.send(err);
      } else {
        console.log("this is the user", user);
        console.log(user.id);
        res.json({
          name: user.firstName + "" + user.lastName,
          userId: user.id,
          token: 1234
        });
      }
    }
  );
});

auth.post("/login", (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password }, function(
    err,
    user
  ) {
    if (err) {
      res.json(err);
    } else {
      user = {
        ...user._doc,
        token: 1231231981,
        password: ""
      }
      res.json(user);
    }
  });
});

module.exports = {
  auth
};
