import parser from 'fast-xml-parser'

import TuftsDefault from '@/localJson/tufts-default.json'

import GezTuftsHageriye from '@/localJson/gez-tufts-hageriye.json'

import GrcTuftsEloin from '@/localJson/grc-tufts-eloin.json'
import GrcTuftsOudemia from '@/localJson/grc-tufts-oudemia.json'

import LatTuftsAberis from '@/localJson/lat-tufts-aberis.json'
import LatTuftsAdsum from '@/localJson/lat-tufts-adsum.json'
import LatTuftsAuditum from '@/localJson/lat-tufts-auditum.json'
import LatTuftsCepit from '@/localJson/lat-tufts-cepit.json'

import LatTuftsConditum from '@/localJson/lat-tufts-conditum.json'
import LatTuftsCupidinibus from '@/localJson/lat-tufts-cupidinibus.json'
import LatTuftsEgo from '@/localJson/lat-tufts-ego.json'
import LatTuftsEst from '@/localJson/lat-tufts-est.json'
import LatTuftsMare from '@/localJson/lat-tufts-mare.json'
import LatTuftsMellitisque from '@/localJson/lat-tufts-mellitisque.json'

import LatTuftsPalmaque from '@/localJson/lat-tufts-palmaque.json'
import LatTuftsPlacito from '@/localJson/lat-tufts-placito.json'
import LatTuftsSubmersasque from '@/localJson/lat-tufts-submersasque.json'

import LatTuftsSui from '@/localJson/lat-tufts-sui.json'
import LatTuftsSum from '@/localJson/lat-tufts-sum.json'

import AraTuftsTrjmh from '@/localJson/ara-tufts-trjmh.json'
import AraTuftsMshkelha from '@/localJson/ara-tufts-mshkel‌.json'

import PerTuftsPass from '@/localJson/per-tufts-pass.json'

const library = {
  gez: {
    tufts: {
      default: TuftsDefault,
      'ሀገርየ': GezTuftsHageriye
    }
  },
  grc: {
    tufts: {
      default: TuftsDefault,
      'ἐλῴην': GrcTuftsEloin,
      'οὐδεμία': GrcTuftsOudemia
    }
  },
  lat: {
    tufts: {
      default: TuftsDefault,
      'aberis': LatTuftsAberis,
      'adsum': LatTuftsAdsum,
      'auditum': LatTuftsAuditum,
      'cepit': LatTuftsCepit,
      'conditum': LatTuftsConditum,
      'cupidinibus': LatTuftsCupidinibus,
      'ego': LatTuftsEgo,
      'est': LatTuftsEst,
      'mare': LatTuftsMare,
      'mellitisque': LatTuftsMellitisque,
      'palmaque': LatTuftsPalmaque,
      'placito': LatTuftsPlacito,      
      'submersasque': LatTuftsSubmersasque,
      'sui': LatTuftsSui,
      'sum': LatTuftsSum
    }
  },
  ara: {
    tufts: {
      'ترجمة': AraTuftsTrjmh,
      'مشکل‌ها': AraTuftsMshkelha
    }
  },
  per: {
    tufts: {
      'بگذرد': PerTuftsPass
    }
  }
}

export default class Fixture {
  static defineFileByParameters (params) {
    if (!library[params.langCode]) { return }
    if (!library[params.langCode][params.adapter]) { return }
    
    return library[params.langCode][params.adapter][params.word] ? library[params.langCode][params.adapter][params.word] : library[params.langCode][params.adapter].default
  }

  static updateProp (prop) {   
    if (!Array.isArray(prop)) {
      return prop.$ ? prop : { '$': prop }
    } else {
      let props = []
      prop.forEach(propItem => {
        props.push(propItem.$ ? propItem : { '$': propItem })
      })
      return props
    }
  }

  static updateProvider (resJson) {
    if (resJson.RDF.Annotation.rights) { resJson.RDF.Annotation.rights = Fixture.updateProp(resJson.RDF.Annotation.rights) }
  }

  static checkBody(resJson) {
    if (!Array.isArray(resJson.RDF.Annotation.Body)) {
      resJson.RDF.Annotation.Body = [resJson.RDF.Annotation.Body]
    }

    resJson.RDF.Annotation.Body.forEach(bodyItem => {
      if (bodyItem.rest.entry.infl && !Array.isArray(bodyItem.rest.entry.infl)) {
        bodyItem.rest.entry.infl = [bodyItem.rest.entry.infl]
      }
    })
  }

  static updateInfl(bodyItem) {
    if (bodyItem.rest.entry && bodyItem.rest.entry.infl) {
      bodyItem.rest.entry.infl.forEach(infl => {
        let checkProps = ['stem', 'suff', 'pref']
        checkProps.forEach(prop => {
          if (infl.term[prop]) { infl.term[prop] = Fixture.updateProp(infl.term[prop]) }
        })

        checkProps = [ 'xmpl', 'pofs', 'var', 'case', 'gend', 'decl', 'conj', 'num', 'tense', 'voice', 'mood', 'pers', 'comp', 'stemtype', 'derivtype', 'dial', 'morph']
        checkProps.forEach(prop => {
          if (infl[prop]) { infl[prop] = Fixture.updateProp(infl[prop]) }
        })
      })
    }
  }

  static updateDict(bodyItem) {
    if (bodyItem.rest.entry && bodyItem.rest.entry.dict) {
      let checkProps = [ 'pofs', 'var', 'case', 'gend', 'decl', 'conj', 'num', 'tense', 'voice', 'mood', 'pers', 'comp', 'stemtype', 'derivtype', 'dial', 'morph']
      checkProps.forEach(prop => {
        if (bodyItem.rest.entry.dict[prop]) { bodyItem.rest.entry.dict[prop] = Fixture.updateProp(bodyItem.rest.entry.dict[prop]) }
      })
    }
  }

  static updateMean(bodyItem) {
    if (bodyItem.rest.entry && bodyItem.rest.entry.mean) {
      if (!Array.isArray(bodyItem.rest.entry.mean)) { bodyItem.rest.entry.mean = [bodyItem.rest.entry.mean] }

      for (let i = 0; i < bodyItem.rest.entry.mean.length; i++) {
        bodyItem.rest.entry.mean[i] = Fixture.updateProp(bodyItem.rest.entry.mean[i])
      }
    }
  }

  static getFixtureRes(params) {
    const sourceFile = Fixture.defineFileByParameters(params)
    
    if (!sourceFile) { 
      console.info('There is no fixture for ', params.langCode + '-' + params.adapter + '-' + params.word)
    }

    return sourceFile
  }
}

