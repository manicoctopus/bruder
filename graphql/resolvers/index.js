const mongoose = require('mongoose')
const Article = require('../../model/article')
const CurrencyPair = require('../../model/currencyPair')
const ExchangeRate = require('../../model/exchangeRate')
const NestedCurrencyPair = require('../../model/nestedCurrencyPair')
const NestedExchangeRate = require('../../model/nestedExchangeRate')

module.exports = {

    articles: async () => {
        try {
            const articlesFetched = await Article.find()
            return articlesFetched.map(article => {
                return { 
                    ...article._doc, 
                    _id: article.id, 
                    createdAt: new Date(article._doc.createdAt).toISOString(),
                    updatedAt: new Date(article._doc.updatedAt).toISOString()
                }
            })
        }
        catch (error) {
            throw error
        }
    },

    articleByID: async (_id) => {
        try {
            const article = await Article.findById(_id)
            return { 
                ...article._doc, 
                _id: article.id, 
                createdAt: new Date(article._doc.createdAt).toISOString(),
                updatedAt: new Date(article._doc.updatedAt).toISOString()
            }
        }
        catch (error) {
            throw error
        }
    },

    createArticle: async args => {
        try {
            const { title, body } = args.article
            const article = new Article({
                title,
                body
            })
            const newArticle = await article.save()
            return { 
                ...newArticle._doc, 
                _id: newArticle.id,
                createdAt: new Date(article._doc.createdAt).toISOString(),
                updatedAt: new Date(article._doc.updatedAt).toISOString()
            }
        }
        catch (error) {
            throw error
        }
    },

    currencyPairs: async () => {
        try {
            const currencyPairsFetched = await CurrencyPair.find()
            return currencyPairsFetched.map(currencyPair => {
                return { 
                    ...currencyPair._doc, 
                    _id: currencyPair.id
                }
            })
        }
        catch (error) {
            throw error
        }
    },

    currencyPairByID: async (_id) => {
        try {
            const currencyPair = await CurrencyPair.findById(_id)
            return { 
                ...currencyPair._doc, 
                _id: currencyPair.id, 
            }
        }
        catch (error) {
            throw error
        }
    },

    createCurrencyPair: async args => {
        try {
            const { base, quote } = args.currencyPair
            const currencyPair = new CurrencyPair({
                base,
                quote
            })
            const newCurrencyPair = await currencyPair.save()
            return { ...newCurrencyPair._doc, _id: newCurrencyPair.id }
        }
        catch (error) {
            throw error
        }
    },

    exchangeRates: async () => {
        try {
            const exchangeRatesFetched = await ExchangeRate.find()
            return exchangeRatesFetched.map(exchangeRate => {
                return { 
                    ...exchangeRate._doc, 
                    _id: exchangeRate.id,
                    createdAt: new Date(exchangeRate._doc.createdAt).toISOString(),
                    updatedAt: new Date(exchangeRate._doc.updatedAt).toISOString() 
                }
            })
        }
        catch (error) {
            throw error
        }
    },
    
    exchangeRateByID: async (_id) => {
        try {
            const exchangeRate = await ExchangeRate.findById(_id)
            return { 
                ...exchangeRate._doc, 
                _id: exchangeRate.id, 
                createdAt: new Date(exchangeRate._doc.createdAt).toISOString(),
                updatedAt: new Date(exchangeRate._doc.updatedAt).toISOString()
            }
        }
        catch (error) {
            throw error
        }
    },

    createExchangeRate: async args => {
        try {
            const { fy, qtr, rate } = args.exchangeRate
            const exchangeRate = new ExchangeRate({
                fy,
                qtr,
                rate
            })
            const newExchangeRate = await exchangeRate.save()
            return { 
                ...newExchangeRate._doc, 
                _id: newExchangeRate.id,
                createdAt: new Date(exchangeRate._doc.createdAt).toISOString(),
                updatedAt: new Date(exchangeRate._doc.updatedAt).toISOString()  
            }
        }
        catch (error) {
            throw error
        }
    },

    nestedCurrencyPairs: async () => {
        try {
            const nestedCurrencyPairsFetched = await NestedCurrencyPair
                .find()
                .populate({
                    path: "rates",
                })
            return nestedCurrencyPairsFetched.map(nestedCurrencyPair => {
                return { 
                    ...nestedCurrencyPair._doc, 
                    _id: nestedCurrencyPair.id,
                }
            })
        }
        catch (error) {
            throw error
        }
    },

    nestedCurrencyPairByID: async (_id) => {
        try {
            const nestedCurrencyPair = await NestedCurrencyPair
                .findById(_id)
                .populate({
                    path: "rates",
                })
            return { 
                ...nestedCurrencyPair._doc, 
                _id: nestedCurrencyPair.id, 
            }
        }
        catch (error) {
            throw error
        }
    },

    createNestedCurrencyPair: async args => {
        try {
            const { base, quote } = args.nestedCurrencyPair
            const nestedCurrencyPair = new NestedCurrencyPair({
                base,
                quote
            })
            const newNestedCurrencyPair = await nestedCurrencyPair.save()
            return { ...newNestedCurrencyPair._doc, _id: newNestedCurrencyPair.id }
        }
        catch (error) {
            throw error
        }
    },

    nestedExchangeRates: async () => {
        try {
            const nestedExchangeRatesFetched = await NestedExchangeRate.find()
            return nestedExchangeRatesFetched.map(nestedExchangeRate => {
                return { 
                    ...nestedExchangeRate._doc, 
                    _id: nestedExchangeRate.id,
                    createdAt: new Date(nestedExchangeRate._doc.createdAt).toISOString(), 
                    updatedAt: new Date(nestedExchangeRate._doc.updatedAt).toISOString()
                }
            })
        }
        catch (error) {
            throw error
        }
    },

    nestedExchangeRateByID: async (_id) => {
        try {
            const nestedExchangeRate = await NestedExchangeRate.findById(_id)
            return { 
                ...nestedExchangeRate._doc, 
                _id: nestedExchangeRate.id, 
                createdAt: new Date(nestedExchangeRate._doc.createdAt).toISOString(),
                updatedAt: new Date(nestedExchangeRate._doc.updatedAt).toISOString()
            }
        }
        catch (error) {
            throw error
        }
    },

    createNestedExchangeRate: async args => {
        try {
            const { nestedCurrencyPair, fy, qtr, rate } = args.nestedExchangeRate      
            const nestedExchangeRate = new NestedExchangeRate({
                nestedCurrencyPair,
                fy,
                qtr,
                rate
            })
            const newNestedExchangeRate = await nestedExchangeRate.save()
            const updateNestedCurrencyPair = await NestedCurrencyPair.findById(nestedCurrencyPair)
            updateNestedCurrencyPair.rates.push(newNestedExchangeRate.id)
            updateNestedCurrencyPair.save()
            return { 
                ...newNestedExchangeRate._doc, 
                _id: newNestedExchangeRate.id, 
                createdAt: new Date(nestedExchangeRate._doc.createdAt).toISOString(), 
                updatedAt: new Date(nestedExchangeRate._doc.updatedAt).toISOString()
            }
        }
        catch (error) {
            throw error
        }
    }
}