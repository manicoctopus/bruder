const mongoose = require('mongoose')

const Schema = mongoose.Schema


const currencyPairSchema = new Schema({

    base: {
        type: String,
        required: true
    },

    quote: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('CurrencyPair', currencyPairSchema)