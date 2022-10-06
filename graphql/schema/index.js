const { buildSchema } = require('graphql')


module.exports = buildSchema(`

  enum CurrencyType {
    SGD
    JPY
    USD
  } 

  enum FiscalYearType {
    FY15
    FY16
    FY17
    FY18
    FY19
    FY20
    FY21
    FY22
  }

  enum QuarterType {
    Q1
    Q2
    Q3
    Q4
  }

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
    updatedAt: String!
  }
  
  input ArticleInput {
    title: String!
    body: String!
  }

  type NestedCurrencyPair {
    _id: ID!
    base: CurrencyType!
    quote: CurrencyType!
    rates: [NestedExchangeRate]
  }

  input NestedCurrencyPairInput {
    base: CurrencyType!
    quote: CurrencyType!
  }

  type NestedExchangeRate {
    _id: ID!
    nestedCurrencyPair: ID!
    fy: FiscalYearType!
    qtr: QuarterType!
    rate: Float!
    createdAt: String!
    updatedAt: String!
  }

  input NestedExchangeRateInput {
    nestedCurrencyPair: ID!
    fy: FiscalYearType!
    qtr: QuarterType!
    rate: Float!
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
    rate: Float!
    createdAt: String!
    updatedAt: String!
  }
  
  input ExchangeRateInput {
    fy: String!
    qtr: String!
    rate: Float!
  }
  
  type Query {
    articles: [Article!]
    articleByID(_id: ID!): Article
    currencyPairs: [CurrencyPair!]
    currencyPairByID(_id: ID!): CurrencyPair
    exchangeRates: [ExchangeRate!]
    exchangeRateByID(_id: ID!): ExchangeRate
    nestedCurrencyPairs: [NestedCurrencyPair!]
    nestedCurrencyPairByID(_id: ID!): NestedCurrencyPair
    nestedExchangeRates: [NestedExchangeRate!]
    nestedExchangeRateByID(_id: ID!): NestedExchangeRate
  }

  type Mutation {
    createArticle(article: ArticleInput!): Article
    createCurrencyPair(currencyPair: CurrencyPairInput!): CurrencyPair
    createExchangeRate(exchangeRate: ExchangeRateInput!): ExchangeRate
    createNestedCurrencyPair(nestedCurrencyPair: NestedCurrencyPairInput!): NestedCurrencyPair
    createNestedExchangeRate(nestedExchangeRate: NestedExchangeRateInput!): NestedExchangeRate
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)