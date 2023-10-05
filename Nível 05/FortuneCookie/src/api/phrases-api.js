export class PhrasesApi {
  /** @protected */
  url

  /**
   * @param {Object} options
   * @param {string} options.baseURL 
   */
  constructor({ baseURL }) {
    if (this.constructor === PhrasesApi) {
      throw new Error("Abstract classes can't be instantiated.")
    }

    this.url = baseURL
  }

  /**
   * @returns {Promise<string[]>}
   */
  async getPhrases() {
    throw new Error("Method 'getPhrases()' must be implemented.");
  }
}
