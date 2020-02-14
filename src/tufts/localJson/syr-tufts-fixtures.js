import TuftsDefault from '@/tufts/localJson/tufts-default.json'
import SyrTuftsSpeak from '@/tufts/localJson/syr/syr-tufts-speak.json'

export default class SyrTuftsFixture {
  static get library () {
    return {
      default: TuftsDefault,
      'ܘܐܡܪܝܢ': SyrTuftsSpeak
    }
  }
}