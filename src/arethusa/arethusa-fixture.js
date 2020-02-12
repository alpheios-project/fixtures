import ArethusaDefault from '@/arethusa/data/default.json'
import Aberis from '@/arethusa/data/aberis.json'

export default class ArethusaFixture {
  static get library () {
    return {
      1 : {
        1 : Aberis
      }
    }
  }

  static async treebankServiceRequest {
    let wordId = request.body.getMorph.wordId
    let sentenceId = request.body.getMorph.wordId
    let response
    try {
      const sourceFile = library[sentenceId][wordId]
      return sourceFile
    } catch {
      console.info(`There is no fixture for ${params}`)
      return {}
    }
  }
}

