const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Conversations, User } = require("../models");

//Creates new conversation if one does not exist, updates if exists.
router.patch("/", (req, res) => {
  Conversations.findOne({ emails: { $all: req.body.emails } }, function(
    err,
    convo
  ) {
    if (err) {
      res.json(err);
    } else if (convo) {
      Conversations.findOneAndUpdate(
        { emails: { $all: req.body.emails } },
        {
          $push: {
            messages: { message: req.body.message, email: req.body.email }
          }
        },
        { new: true },
        function(err, convo) {
          if (err) {
            res.json(err);
          } else {
            console.log("update", convo);
            res.json(convo);
          }
        }
      );
    } else {
      Conversations.create(
        {
          emails: req.body.emails,
          messages: [{ message: req.body.message, email: req.body.email }]
        },
        function(err, convo) {
          if (err) {
            res.json(err);
          } else {
            console.log(convo);
            res.json({ emails: convo.emails, messages: convo.messages });
          }
        }
      );
    }
  });
});

//get message history for user
router.get("/:id", (req, res) => {
  // Conversations.find()
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.json(err);
    } else {
      Conversations.find({ emails: { $in: user.email }}, null, {sort: {"messages.timestamp": -1}}, function(err, convo) {
        if (err) {
          res.json(err);
        } else if (convo) {
          res.json(convo);
        }
      });
    }
  });
});

module.exports = router;
