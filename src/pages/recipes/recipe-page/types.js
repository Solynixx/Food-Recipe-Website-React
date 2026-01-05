/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {string} description
 * @property {Object} meta
 * @property {string} meta.prepTime
 * @property {string} meta.cookTime
 * @property {string} meta.totalTime
 * @property {string} meta.difficulty
 * @property {number} meta.rating
 * @property {number} meta.reviews
 * @property {string[]} ingredients
 * @property {Array<{
 *   section: string,
 *   steps: string[]
 * }>} instructions
 * @property {Object} nutrition
 * @property {string} nutrition.calories
 * @property {string} nutrition.carbs
 * @property {string} nutrition.protein
 * @property {string} nutrition.fat
 * @property {string} nutrition.saturatedFat
 * @property {string} nutrition.cholesterol
 * @property {string} nutrition.sodium
 * @property {string} nutrition.fiber
 * @property {string} nutrition.sugar
 * @property {string[]} tags
 * @property {string} video
 */

export {};