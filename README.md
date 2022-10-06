mutation {
  createArticle(article: {title: "Test", body: "This is a test"}) {
    title
  	body
  	createdAt
    updatedAt
  }
}

query {
  articles {
    _id
    title
    body
    createdAt
    updatedAt
  }
}

query {
  articleByID(_id: "633f3b26724331f31c5c51a3") {
    _id
    title
    body
    createdAt
    updatedAt
  }
}

mutation {
  createCurrencyPair(currencyPair: {base: "USD", quote: "SGD"}) {
    base
  	quote
  }
}

query {
  currencyPairs {
    _id
    base
    quote
  }
}

query {
  currencyPairByID(_id: "633f374e7e94c2e1d504fd92") {
    _id
    base
    quote
  }
}

mutation {
  createExchangeRate(exchangeRate: {fy: "2022", qtr: "Q2", rate:1.39}) {
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}

query {
  exchangeRates {
    _id
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}

query {
  exchangeRateByID(_id: "633f37627e94c2e1d504fd95") {
    _id
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}

mutation {
  createNestedCurrencyPair(nestedCurrencyPair: {base: USD, quote: SGD}) {
    base
  	quote
  }
}

query {
  nestedCurrencyPairs {
    _id
    base
    quote
  }
}

query {
  nestedCurrencyPairs {
    _id
    base
    quote
    rates {
      _id
      fy
      qtr
      rate
    }
  }
}

query {
  nestedCurrencyPairByID(_id: "633f37837e94c2e1d504fd98") {
    _id
    base
    quote
    rates {
      _id
      fy
      qtr
      rate
    }
  }
}

mutation {
  createNestedExchangeRate(nestedExchangeRate: {nestedCurrencyPair: "633f37837e94c2e1d504fd98", fy: FY22, qtr: Q2, rate:1.39}) {
    nestedCurrencyPair
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}

mutation {
  createNestedExchangeRate(nestedExchangeRate: {nestedCurrencyPair: "633f37837e94c2e1d504fd98", fy: FY22, qtr: Q3, rate:1.42}) {
    nestedCurrencyPair
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}

query {
  nestedExchangeRates {
    _id
    nestedCurrencyPair
    fy
    qtr
    rate
    createdAt
    updatedAt
  }
}