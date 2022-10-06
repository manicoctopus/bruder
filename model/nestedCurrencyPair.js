const mongoose = require('mongoose')

const Schema = mongoose.Schema


const nestedCurrencyPairSchema = new Schema({

    base: {
        type: String,
        enum: ["SGD", "JPY", "USD"],
        required: true
    },

    quote: {
        type: String,
        enum: ["SGD", "JPY", "USD"],
        required: true
    },

    rates: [{ type: Schema.Types.ObjectId, ref: "NestedExchangeRate" }],

})


module.exports = mongoose.model('NestedCurrencyPair', nestedCurrencyPairSchema)