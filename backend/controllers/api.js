const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

// Routes
router.use('/auth', controllers.auth)
router.use('/messages', controllers.messages)

module.exports = {
  router
}