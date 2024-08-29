const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
    cardtype: String,
    cardbank: String,
    cardholdername: String,
    cardnumber: Number,
    cardexpiry: Date,
    cardCVC: Number,

}, { timestamps: true});

module.exports = mongoose.model('Card', CardSchema);