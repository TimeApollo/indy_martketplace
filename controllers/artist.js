const express = require('express')
const { User } = require('../models')
const artist = express.Router()

artist.get('/', (req, res) => {
  User.find({isArtist: true}, null , {sort: { firstName: 1}}, function ( err , artists ){
    res.json(artists)
  })
})

artist.get('/:id', (req, res) => {
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
  artist
}