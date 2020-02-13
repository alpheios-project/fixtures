import Aberis from '@/arethusa/data/1-1.json'

export default class ArethusaFixture {
  static get library () {
    return {
      'example.org/treebank': {
        '1' : {
          '1' : Aberis
        }
      }
    }
  }

  static async treebankServiceRequest(srcUrl,sentenceId,wordId) {
    let response
    try {
      console.info(`Retrieve ${srcUrl} ${sentenceId} ${wordId}`)
      const sourceFile = ArethusaFixture.library[srcUrl][sentenceId][wordId]
      return sourceFile
    } catch(error) {
      console.info(`There is no fixture for ${sentenceId}-${wordId}`, error)
      return {}
    }
  }
}

