import { getRandomNumber } from './get-random-number.js'
import { fetchPhrases } from './fetch-phrases.js'
import { TypeFitApi } from '../api/typeFitApi.js'
import { internalPhrases } from './phrases.js'

export async function getRandomPhrase() {
  const typeFitApi = new TypeFitApi()
  const externalPhrases = await fetchPhrases(typeFitApi)

  const phrases = internalPhrases.concat(externalPhrases)

  const max = phrases.length - 1
  const randomIndex = getRandomNumber(0, max)
  const phrase = phrases[randomIndex]

  return phrase ?? null
}
