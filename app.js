const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const graphqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')


const app = express()

app.use('/graphql', graphqlHTTP({
    schema:graphqlSchema,
    rootValue:graphqlResolvers,
    graphiql: true
}))

// `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uox7n.mongodb.net/${process.env.MONGO_DB}?authSource=admin&retryWrites=true&w=majority`
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/${process.env.MONGO_DB}?authSource=admin&retryWrites=true&w=majority`
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, options)
        .then(() => app.listen(3000, console.log('Server is running')))
        .catch(error => { throw error })
