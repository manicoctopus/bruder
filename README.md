mutation {
  createArticle(article: {title: "Test", body: "This is a test"}) {
    title
  	body
  	createdAt
  }
}

query {
  articles {
    title
    body
    createdAt
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
    base
    quote
  }
}

mutation {
  createExchangeRate(exchangeRate: {fy: "2022", qtr: "Q3", rate:"1.43"}) {
    fy
    qtr
    rate
  }
}

query {
  exchangeRates {
    fy
    qtr
    rate
    createdAt
  }
}