//configure dontev
require('dotenv').config();

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

//throws any error if connection fails
database.on('error', (error) => {
    console.log(error);
})
//message printed to terminal if database connects
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

const routes = require('./routes/routes.js');

app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})