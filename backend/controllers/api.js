const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.use('/auth', controllers.auth)

module.exports = {
  router
}
