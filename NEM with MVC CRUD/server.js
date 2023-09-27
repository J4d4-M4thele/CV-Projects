//import and initialise app
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const MongoClient = require('mongodb').MongoClient

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

mongoose.connect('mongodb://127.0.0.1/star-wars-quotes',
    { useNewUrlParser: true }
);

const Quotes = require('./models/model')
//reading quotes
app.get('/', async (req, res) => {
    try{
        const quotes = await Quotes.find({}).exec();
        res.render('index.ejs', { quotes })
    }
    catch (err){
        console.log(err)
    }
})

//creating quotess
app.post('/quotes', (req, res) => {
    const newQuote = new Quotes({name: req.body.name, quote: req.body.quote});
    newQuote.save()
        .then(res => {
            console.log('saved to database')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
})

app.listen(3000, () => {
    console.log('listening on 3000');
})