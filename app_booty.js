require( 'dotenv-safe' ).config({ allowEmptyValues: true })
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors');
const controllers = require("./controllers");

const app = express();

//security
// app.use(cors());

//settings
app.set("port", process.env.PORT || 5000);

//middleware
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'client/build')));

//Api route
app.use('/api/messages', controllers.messages);
app.use('/api/auth', controllers.auth);

const URI = 'mongodb://localhost:27017/art'
// const URI = process.env.MONGODB_URI
// console.log(URI)

app.listen(app.get("port"), () => {
  console.log(`API server started on port ${app.get("port")}`)
})

mongoose.connect( process.env.MONGODB_URI , { useNewUrlParser: true } );
console.log(mongoose.connection)