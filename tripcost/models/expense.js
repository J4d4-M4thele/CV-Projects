const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    },
    amount: Number,
    category: String,
    description: String
})

module.exports = mongoose.model('expenses', expenseSchema)