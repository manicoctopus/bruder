const mongoose = require('mongoose')

const Schema = mongoose.Schema


const exchangeRateSchema = new Schema({

    fy: {
        type: String,
        required: true
    },

    qtr: {
        type: String,
        required: true
    },

    rate: {
      type: String,
      required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('ExchangeRate', exchangeRateSchema)