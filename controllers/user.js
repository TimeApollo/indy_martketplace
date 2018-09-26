const express = require('express')
const router = express.Router();
const { User } = require('../models')
const user = express.Router()


router.get('/:id', (req, res) => {
  User.findById(req.params.id, function (err, user) {
      if (err) {
          res.json(err)
      } else {
        user = {
          ...user._doc,
          password: ""
        };
        res.json(user)
      }
  })
})

module.exports = {
  user
}
