/**
 * @param {number} min 
 * @param {number} max 
 */
export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}