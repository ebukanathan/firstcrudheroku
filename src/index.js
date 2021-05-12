const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config;

const friends = require('./models/friends')
const friendsRoutes = require('./routes/friendsRoute')
const dbSetup = require('./database/setup')


app.use(bodyParser.json())

app.use(express.json())

//setup database


dbSetup();

app.use(friendsRoutes)

const port = process.env.PORT ||4000
app.listen(port)