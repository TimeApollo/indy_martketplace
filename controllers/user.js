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

user.get('/', (req, res) => {
  User.find({}, null , { sort: { firstName: 1}} , function ( err , users ){
    res.json(users)
  })
})

module.exports = {
  user
}
