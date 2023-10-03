//import and and initialise express app
const express = require('express');
let app = new express();
//port listening on
const PORT = 3000;
//const MongoClient = require('mongodb').MongoClient
//mongoose for people who contact the company
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JadaMathele:kPfIAdYSqOfix3ap@cluster0.rm0hggx.mongodb.net/menu', { useNewUrlParser: true });

const path = require("path");
const bodyParser = require("body-parser");
const ejs = require('ejs');
//const bootstrap = require("./src/boostrap");
//const { getMeals } = require('./src/models/mealModel');
const contactController = require('./src/controllers/contactController.js');


//templating engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//creating router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

bootstrap(app, router);

//import template from public file (static files)
app.use(express.static('public'))

/**********REQUESTS********/
//home page
router.get("/", (req, res, next) => {
    res.render("index");
});

router.post("/#contact_section", contactController);

router.use((err, req, res, next) => {
    if (err) {
        //Handle file type and max size of image
        return res.send(err.message);
    }
});

app.listen(PORT, err => {
    if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`);
});
