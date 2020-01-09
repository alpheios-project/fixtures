import CedictData from '@/cedict/data/zho-cedict.json'

export default class CedictFixture {
  /**
   * A stub for Cedict._downloadData() that will load local test data instead of a real one.
   *
   * @returns {Promise<object>} Returns a promise that is resolved with
   *          an object containing dictionary data.
   */
  static downloadData() {
    return Promise.resolve({ meta: CedictData.metadata, dictionary: CedictData.entries })
  }

  /**
   * A stub that imitates a LexisCS CEDICT service response.
   * @param {string} destName - A request's destination name (not used).
   * @param {object} request - A LeisCS request.
   * @returns {Promise<{body: object}>} - A fixture of Lexis CEDICT response.
   */
  static async lexisCedictRequest(destName, request) {
    // The following stub implements business logic of `getWords()` method from lexis-cs/src/cedict-service/cedict.js
    const preferredCharacterForm = 'traditional'
    const fallbackCharacterForm = 'simplified'

    const targetWord = request.body.getWords.words[0]

    let results = CedictData.entries.filter(entry => entry[preferredCharacterForm].headword === targetWord)
    if (results.length > 0) {
      return {
        body: {
          [preferredCharacterForm]: {
            [targetWord]: results
          }
        }
      }
    }
    results = CedictData.entries.filter(entry => entry[fallbackCharacterForm].headword === targetWord)
    if (results.length > 0) {
      return {
        body: {
          [fallbackCharacterForm]: {
            [targetWord]: results
          }
        }
      }
    }

    // If no records are found for the target word, CEDICT service will return an empty object
    return { body: {} }
  }
}
