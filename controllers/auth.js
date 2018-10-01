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
      about: "Tell us about yoself",
      isArtist: req.body.isArtist
    },
    function(err, user) {
      if (err) {
        res.send({error: err});
      // } else if ( user.hasOwnProperty('errmsg') ) {
      //   res.json({ error: true, message: user.errmsg })
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

//login
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

//logout
auth.get("/logout", (req, res) => {
  req.logout();
  res.json({ success: true, message: "Logged out!" });
});

//edit profile
auth.patch("/", (req, res) => {
  const patch = {};
  if (req.body.password !== undefined) {
    patch.password = req.body.password;
  }
  if (req.body.about !== undefined) {
    patch.about = req.body.about;
  }
  if (req.body.mediums !== undefined) {
    patch.mediums = req.body.mediums
  }
  if (req.body.styles !== undefined) {
    patch.styles = req.body.styles
  }
  if (req.body.email !== undefined) {
    patch.email = req.body.email
  }
  if (req.body.firstName !== undefined) {
    patch.firstName = req.body.firstName
  }
  if (req.body.lastName !== undefined) {
    patch.lastName = req.body.lastName
  }

  User.update(patch, {
    where: {
      id: req.user.id
    }
  })

});


module.exports = {
  auth
};
