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
          // password: ""
        };
        res.json(user)
      }
  })
})

//will only need to update one field at a time so this won't  be necessary

user.patch("/", (req, res) => {
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

  User.update(patch, {
    where: {
      id: req.user.id
    }
  })

});


module.exports = {
  user
}
