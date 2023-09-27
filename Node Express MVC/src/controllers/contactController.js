const contact = require('../models/contact.js');
const path = require('path');

module.exports = (req, res) => {
    const newContact = new contact({name: req.body.name, email: req.body.email, phone: req.body.phone, message: req.body.message});
    newContact.save()
        .then(res => {
            console.log('message sent')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
};