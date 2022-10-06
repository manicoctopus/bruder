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
  createCurrencyPair(currencyPair: {base: "USE", quote: "SGD"}) {
    base
  	quote
  }
}

query {
  currencyPair {
    base
    quote
  }
}