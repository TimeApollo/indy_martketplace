const express = require('express')
const { User , Messages } = require('../models')
const auth = express.Router()

//register user
auth.post('/register', (req, res)=>{
  console.log(req.body)
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.email
  }, function( err , user){
    if (err) { res.send(err)}
    else {
      console.log(user)
      console.log(user.id)
      res.json({ name: res.body.firstName + '' + res.body.lastName , userId: 8 , token: 1234 })
    }
  })
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