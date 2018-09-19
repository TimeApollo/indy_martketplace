const express = require('express')
const { User } = require('../models')
const auth = express.Router()

//register user
auth.post('/register', (req, res)=>{
  console.log('I think its working')
  res.json({ name: 'Aaron Jackson' , userId: 8 , token: 1234 })
})

module.exports = {
  auth
}

// auth.post('/login', (req, res)=>{
//   console.log("it's working, yo")
//   res.json({ })
// })

// module.exports = {
//   auth
// }