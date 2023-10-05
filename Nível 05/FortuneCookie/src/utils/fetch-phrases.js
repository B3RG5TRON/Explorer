import { PhrasesApi } from '../api/phrases-api.js'

/**
 * 
 * @param {PhrasesApi} api 
 * @returns {Promise<string[]>}
 */
export async function fetchPhrases(api) {
  const phrases = await api.getPhrases()

  return phrases
}