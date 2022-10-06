const { buildSchema } = require('graphql')


module.exports = buildSchema(`

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }
  
  input ArticleInput {
    title: String!
    body: String!
  }

  type CurrencyPair {
    _id: ID!
    base: String!
    quote: String!
  }
  
  input CurrencyPairInput {
    base: String!
    quote: String!
  }

  type ExchangeRate {
    _id: ID!
    fy: String!
    qtr: String!
    rate: String!
    createdAt: String!
  }
  
  input ExchangeRateInput {
    fy: String!
    qtr: String!
    rate: String!
  }
  
  type Query {
    articles:[Article!]
    currencyPairs:[CurrencyPair!]
    exchangeRates:[ExchangeRate!]
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
    createCurrencyPair(currencyPair:CurrencyPairInput): CurrencyPair
    createExchangeRate(exchangeRate:ExchangeRateInput): ExchangeRate
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)