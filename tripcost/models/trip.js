const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String
    },
})

module.exports = mongoose.model('trips', tripSchema)