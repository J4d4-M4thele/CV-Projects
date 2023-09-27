//requiring dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initialising express app
const app = express();

//setting cors option
var corsOptions = {
    origin: 'http://localhost:8081'
}