const Article = require('../../model/article')
const CurrencyPair = require('../../model/currencyPair')

module.exports = {

    articles: async () => {
        try {
            const articlesFetched = await Article.find()
            return articlesFetched.map(article => {
                return { 
                    ...article._doc, 
                    _id: article.id, 
                createdAt: new Date(article._doc.createdAt).toISOString() }
            })
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
            return { ...newArticle._doc, _id: newArticle.id }
        }
        catch (error) {
            throw error
        }
    },

    currencyPair: async () => {
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
    }
}