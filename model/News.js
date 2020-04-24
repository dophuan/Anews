import Model from './Model'
const API_KEY = '40f89abfb0db4b70b85e81d3b53ee90b'

export default class News extends Model {

  resource() {
    return ''
  }

  getTopHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    return this.$http.get(url)
  }

  getKeywordPosts(key) {
    const url = `https://newsapi.org/v2/everything?q=${key}&apiKey=${API_KEY}`
    return this.$http.get(url)
  }
}
