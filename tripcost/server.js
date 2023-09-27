const express = require("express")
//const mongo = require("mongodb").MongoClient
const mongoose = require('mongoose');
const app = express()

app.use(express.json())

mongoose.connect(
    "mongodb://127.0.0.1/tripcost",
    { useNewUrlParser: true }
)

//import models
const trips = require('./models/trip');
const expense = require("./models/expense");

app.post("/trip", async (req, res) => {
    try {
        const name = req.body.name
        const newTrip = new trips({ name: name })
        await newTrip.save();
        res.status(200).json({ ok: true })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
})

app.get("/trips", async (req, res) => {
    try {
        const name = req.body.name
        const trip = await trips.find({ name: name });
        res.status(200).json({ trips: trips })

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
})

app.post("/expense", async (req, res) => {
    try {
        const { trip, date, amount, category, description } = req.body
        const newExpense = new expense({ trip, date, amount, category, description });
        await newExpense.save();
        res.status(200).json({ ok: true })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
})
app.get("/expenses", async (req, res) => {
    try {
        const trip = req.body.trip 
        const date = req.body.date 
        const amount = req.body.amount 
        const category = req.body.category 
        const description = req.body.description
        const expense = await expense.find({ trip: trip, date: date, amount: amount, category: category, description: description });
        res.status(200).json({ expense: expense })

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ err: err })
    }
})

app.listen(3000, () => console.log("Server ready"))