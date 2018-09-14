const express = require('express')
const auth = express.Router()

//register user
auth.get('/register', (req, res)=>{
  console.log('I think its working')
  res.json({success: true})
})

module.exports = {
  auth
}