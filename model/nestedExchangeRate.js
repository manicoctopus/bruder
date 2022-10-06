const mongoose = require('mongoose')

const Schema = mongoose.Schema


const nestedExchangeRateSchema = new Schema({

    nestedCurrencyPair: {
        type: Schema.Types.ObjectId,
        ref: "NestedCurrencyPair",
        required: true
    },

    fy: {
        type: String,
        enum: ["FY15", "FY16", "FY17", "FY18", "FY19", "FY20", "FY21", "FY22"],
        required: true
    },

    qtr: {
        type: String,
        enum: ["Q1", "Q2", "Q3", "Q4"],
        required: true
    },

    rate: {
      type: Number,
      required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('NestedExchangeRate', nestedExchangeRateSchema)