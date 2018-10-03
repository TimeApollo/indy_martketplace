const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Conversations, User } = require("../models");
const moment = require("moment");

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
            messages: { message: req.body.message, email: req.body.email, timestamp: moment().format('MMMM Do YYYY, h:mm:ss a') }
          }
        },
        { new: true },
        function(err, convo) {
          if (err) {
            res.json(err);
          } else {
            res.json(convo);
          }
        }
      );
    } else {
      Conversations.create(
        {
          emails: req.body.emails,
          messages: [{ message: req.body.message, email: req.body.email, timestamp: moment().format('MMMM Do YYYY, h:mm:ss a') }]
        },
        function(err, convo) {
          if (err) {
            res.json(err);
          } else {
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
      Conversations.find({ emails: { $in: user.email_lower }}, null, {sort: {"messages.timestamp": -1}}, function(err, convo) {
        if (err) {
          res.json(err);
        } else if (convo) {
          res.json(convo);
        }
      });
    }
  });
});

router.get("/:id", (req, res) => {
  Conversations.findById(req.params.id, function(err, convo) {
    if (err) {
      res.json("error getting conversation: ", err);
    } else if (convo) {
      res.json(convo)
    }
  })
})

module.exports = router;
