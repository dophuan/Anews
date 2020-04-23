import Model from './Model'

export default class News extends Model {
  resource() {
    return ''
  }

  getTopHeadlines() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=40f89abfb0db4b70b85e81d3b53ee90b'
    return this.$http.get(url)
  }
}
