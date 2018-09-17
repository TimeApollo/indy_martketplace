const express = require('express')
const auth = express.Router()

//register user
auth.post('/register', (req, res)=>{
  console.log('I think its working')
  res.json({ name: 'Aaron Jackson' , userId: 8 , token: 1234 })
})

module.exports = {
  auth
}