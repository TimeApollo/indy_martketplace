const express = require('express')
const cors = require('cors')
const controllers = require('./controllers')


const app = express();
//security
app.use(cors());

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(express.json())

//Api route
app.use('/api', controllers.api)