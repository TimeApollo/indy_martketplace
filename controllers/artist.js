const express = require('express')
const { User } = require('../models')
const artist = express.Router()

artist.get('/', (req, res) => {
  User.find({isArtist: true}, null , {sort: { firstName: 1}}, function ( err , artists ){
    res.json(artists)
  })
})

module.exports = {
  artist
}