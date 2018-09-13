const express = require('express')

const router = express.Router()

//register user
router.post('/register', (reg, res)=>{
  res.json({success: true})
})

module.exports = {
  router
}