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
  
  type Query {
    articles:[Article!]
    currencyPair:[CurrencyPair!]
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
    createCurrencyPair(currencyPair:CurrencyPairInput): CurrencyPair
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)