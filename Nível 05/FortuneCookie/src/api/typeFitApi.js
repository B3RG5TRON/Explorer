import { PhrasesApi } from './phrases-api.js'

export class TypeFitApi extends PhrasesApi {
  constructor() {
    super({ baseURL: 'https://type.fit/api' })
  }

  /**
   * @typedef Quote
   * @property {string} text
   * @property {string} author
   * 
   * @returns {Promise<string[]>}
   */
  async getPhrases() {
    try {
      const response = await fetch(`${this.url}/quotes`)

      /** @type {Quote[]} */
      const quotes = await response.json()
      const data = quotes.map(quote => quote.text)

      return data
    } catch {
      return []
    }
  }
}