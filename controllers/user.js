const express = require('express')
const { User } = require('../models')
const user = express.Router()


user.get('/:id', (req, res) => {
  User.findById(req.params.id, function (err, user) {
      if (err) {
          res.json(err)
      } else {
        user = {
          ...user._doc,
        };
        res.json(user)
      }
  })
})

module.exports = {
  user
}
