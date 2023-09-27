//requiring dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initialising express app
const app = express();

//setting cors option
var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
//parse content-type requests
//in json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route
app.get('/', (req, res) => {
  res.json({message: "Welcome to my application."})
});

//setting port and print message to terminal
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});