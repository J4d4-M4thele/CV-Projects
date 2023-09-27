const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    quote: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Quotes', quoteSchema)