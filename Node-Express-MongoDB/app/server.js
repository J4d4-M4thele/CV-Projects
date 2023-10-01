//requiring dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); 

//initialising express app
const app = express();

//linking to database
const db = require('./models/index');
mongoose.set('strictQuery', true);
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database!');
})
.catch(err => {
    console.log('Cannot connect to database!',err);
    process.exit();
})

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
  res.json({message: "Welcome to bezkoder application."})
});

require("./routes/tutorial.routes")(app);

//setting port and print message to terminal
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});