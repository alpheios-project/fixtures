(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cedict/cedict-fixture.js":
/*!**********************************!*\
  !*** ./cedict/cedict-fixture.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CedictFixture; });
/* harmony import */ var _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/cedict/data/zho-cedict.json */ "./cedict/data/zho-cedict.json");
var _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/cedict/data/zho-cedict.json */ "./cedict/data/zho-cedict.json", 1);


/**
 * This class provides stubs that can be used for testing CEDICT functionality of Lexis CS package.
 * Please see descriptions of each individual method to inspect how each one can be used during testing.
 */
class CedictFixture {
  /**
   * This stub is supposed to be used for testing a `Cedict` class fo Lexis CS.
   * Cedict has an internal _downloadData() method that loads CEDICT data from a remote service.
   * If to replace that method with this stub Cedict class will, instead of going to a remote
   * service, load a local test sample of CEDICT data bundled into the `fixtures` library.
   * This will allow to test CEDICT functionality of Lexis CS locally, without sending any network requests.
   * This stub can also be useful for other tests that involves creation of `Cedict` class instances.
   *
   * @returns {Promise<object>} Returns a promise that is resolved with
   *          an object containing dictionary data.. Please see Cedict._downloadData() for
   *          a more detailed information about the format of a return value.
   */
  static downloadData() {
    return Promise.resolve({ meta: _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0__.metadata, dictionary: _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0__.entries })
  }

  /**
   * A stub that imitates a CEDICT `getWords` request sent to a Lexis CS service. It can be used
   * as a replacement for `sendRequestTo()` method of a Lexis CS `MessagingService`. The stub
   * employs a test subset of CEDICT data and a body of its return value for the words from this subset
   * is exactly the same as of a production version of `getWords` CEDICT request.
   *
   *
   * @param {string} destName - A request's destination name. It is not used in a stub and can be of any value.
   * @param {object} request - A LeisCS request, please consult Lexis CS documentation for a more detailed
   *        description of its format.
   * @returns {Promise<{body: object}>} - A response that fully emulates a response of Lexis CS CEDICT service.
   */
  static async lexisCedictRequest(destName, request) {
    // This stub implements business logic of `getWords()` method from lexis-cs/src/cedict-service/cedict.js
    const preferredCharacterForm = 'traditional'
    const fallbackCharacterForm = 'simplified'

    let words = request.body.getWords.words
    // Create an object with props for the words
    let result = words.reduce((accumulator, key) => { accumulator[key] = []; return accumulator }, {}) // eslint-disable-line prefer-const
    // Try to get some results for the preferredCharacterForm
    words.forEach(word => {
      result[word] = _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0__.entries.filter(entry => entry[preferredCharacterForm].headword === word)
    })
    if (CedictFixture._getResultRecordsCount(result) > 0) {
      return {
        body: {
          [preferredCharacterForm]: result
        }
      }
    }

    // If no results for preferredCharacterForm are found, try fallbackCharacterForm instead
    words.forEach(word => {
      result[word] = _cedict_data_zho_cedict_json__WEBPACK_IMPORTED_MODULE_0__.entries.filter(entry => entry[fallbackCharacterForm].headword === word)
    })
    if (CedictFixture._getResultRecordsCount(result) > 0) {
      return {
        body: {
          [fallbackCharacterForm]: result
        }
      }
    }

    // If no records are found for any of the words CEDICT service will return an empty object
    return { body: {} }
  }

  static _getResultRecordsCount (resultsObject) {
    return Object.values(resultsObject).flat().length
  }
}


/***/ }),

/***/ "./cedict/data/zho-cedict.json":
/*!*************************************!*\
  !*** ./cedict/data/zho-cedict.json ***!
  \*************************************/
/*! exports provided: metadata, cedictMeta, entries, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"metadata\":{\"version\":20191029,\"revision\":1,\"frequency\":[{\"value\":1,\"name\":\"least frequent\",\"order\":5},{\"value\":2,\"name\":\"less frequent\",\"order\":4},{\"value\":3,\"name\":\"moderatelyfrequent\",\"order\":3},{\"value\":4,\"name\":\"more frequent\",\"order\":2},{\"value\":5,\"name\":\"most frequent\",\"order\":1}]},\"cedictMeta\":{\"name\":\"CC-CEDICT\",\"description\":\"Community maintained free Chinese-English dictionary.\",\"licenseName\":\"Creative Commons Attribution-ShareAlike 4.0 International License\",\"licenseURI\":\"https://creativecommons.org/licenses/by-sa/4.0/\",\"referencedWorks\":[\"CEDICT - Copyright (C) 1997, 1998 Paul Andrew Denisowski\"],\"downloadURI\":\"https://www.mdbg.net/chinese/dictionary?page=cc-cedict\",\"editorURI\":\"https://cc-cedict.org/editor/editor.php\",\"referenceURI\":\"https://cc-cedict.org/wiki/\",\"originalVersion\":\"1\",\"originalSubversion\":\"0\",\"originalFormat\":\"ts\",\"originalCharset\":\"UTF-8\",\"publisher\":\"MDBG\",\"dateTime\":\"2019-10-29T06:16:52.000Z\"},\"entries\":[{\"index\":2,\"type\":\"not specified\",\"traditional\":{\"headword\":\"21三體綜合症\"},\"simplified\":{\"headword\":\"21三体综合症\"},\"pinyin\":\"er4 shi2 yi1 san1 ti3 zong1 he2 zheng4\",\"definitions\":[\"trisomy\",\"Down's syndrome\"]},{\"index\":35909,\"type\":\"not specified\",\"traditional\":{\"headword\":\"幻滅\"},\"simplified\":{\"headword\":\"幻灭\"},\"pinyin\":\"huan4 mie4\",\"definitions\":[\"(of dreams, hopes etc) to vanish\",\"to evaporate\",\"(of a person) to become disillusioned\",\"disillusionment\"]},{\"index\":49467,\"type\":\"not specified\",\"traditional\":{\"headword\":\"日\",\"cantonese\":\"jat6\",\"mandarin\":\"rì\",\"tang\":\"*njit\",\"codePoint\":\"U+65E5\",\"radical\":{\"index\":72,\"additionalStrokes\":0,\"character\":\"日\"},\"frequency\":2,\"totalStrokes\":4},\"simplified\":{\"headword\":\"日\",\"cantonese\":\"jat6\",\"mandarin\":\"rì\",\"tang\":\"*njit\",\"codePoint\":\"U+65E5\",\"radical\":{\"index\":72,\"additionalStrokes\":0,\"character\":\"日\"},\"frequency\":2,\"totalStrokes\":4},\"pinyin\":\"Ri4\",\"definitions\":[\"abbr. for 日本[Ri4 ben3], Japan\"]},{\"index\":49468,\"type\":\"not specified\",\"traditional\":{\"headword\":\"日\",\"cantonese\":\"jat6\",\"mandarin\":\"rì\",\"tang\":\"*njit\",\"codePoint\":\"U+65E5\",\"radical\":{\"index\":72,\"additionalStrokes\":0,\"character\":\"日\"},\"frequency\":2,\"totalStrokes\":4},\"simplified\":{\"headword\":\"日\",\"cantonese\":\"jat6\",\"mandarin\":\"rì\",\"tang\":\"*njit\",\"codePoint\":\"U+65E5\",\"radical\":{\"index\":72,\"additionalStrokes\":0,\"character\":\"日\"},\"frequency\":2,\"totalStrokes\":4},\"pinyin\":\"ri4\",\"definitions\":[\"sun\",\"day\",\"date, day of the month\"]},{\"index\":49533,\"type\":\"not specified\",\"traditional\":{\"headword\":\"日月\"},\"simplified\":{\"headword\":\"日月\"},\"pinyin\":\"ri4 yue4\",\"definitions\":[\"the sun and moon\",\"day and month\",\"every day and every month\",\"season\",\"life and livelihood\"]},{\"index\":55562,\"type\":\"not specified\",\"traditional\":{\"headword\":\"槓\",\"cantonese\":\"gong3 gung3 lung5\",\"mandarin\":\"gàng\",\"codePoint\":\"U+69D3\",\"radical\":{\"index\":75,\"additionalStrokes\":10,\"character\":\"木\"},\"frequency\":5,\"totalStrokes\":14},\"simplified\":{\"headword\":\"杠\",\"cantonese\":\"gong1 gong3\",\"mandarin\":\"gāng\",\"codePoint\":\"U+6760\",\"radical\":{\"index\":75,\"additionalStrokes\":3,\"character\":\"木\"},\"totalStrokes\":7},\"pinyin\":\"gang4\",\"definitions\":[\"thick pole\",\"bar\",\"rod\",\"thick line\",\"to mark with a thick line\",\"to sharpen (knife)\",\"(old) coffin-bearing pole\"]},{\"index\":72267,\"type\":\"not specified\",\"traditional\":{\"headword\":\"白眉鶇\"},\"simplified\":{\"headword\":\"白眉鸫\"},\"pinyin\":\"bai2 mei2 dong1\",\"definitions\":[\"(bird species of China) eyebrowed thrush (Turdus obscurus)\"]},{\"index\":73893,\"type\":\"not specified\",\"traditional\":{\"headword\":\"眠\",\"cantonese\":\"min4\",\"mandarin\":\"mián\",\"tang\":\"*men\",\"codePoint\":\"U+7720\",\"radical\":{\"index\":109,\"additionalStrokes\":5,\"character\":\"目\"},\"frequency\":4,\"totalStrokes\":10},\"simplified\":{\"headword\":\"眠\",\"cantonese\":\"min4\",\"mandarin\":\"mián\",\"tang\":\"*men\",\"codePoint\":\"U+7720\",\"radical\":{\"index\":109,\"additionalStrokes\":5,\"character\":\"目\"},\"frequency\":4,\"totalStrokes\":10},\"pinyin\":\"mian2\",\"definitions\":[\"to sleep\",\"to hibernate\"]},{\"index\":83686,\"type\":\"not specified\",\"traditional\":{\"headword\":\"而今\"},\"simplified\":{\"headword\":\"而今\"},\"pinyin\":\"er2 jin1\",\"definitions\":[\"now\",\"at the present (time)\"]},{\"index\":108832,\"type\":\"not specified\",\"traditional\":{\"headword\":\"隱飾\"},\"simplified\":{\"headword\":\"隐饰\"},\"pinyin\":\"yin3 shi4\",\"definitions\":[\"a cover-up\"]},{\"index\":108835,\"type\":\"not specified\",\"traditional\":{\"headword\":\"隴\",\"cantonese\":\"lung5\",\"mandarin\":\"lǒng\",\"tang\":\"*liǒng\",\"codePoint\":\"U+96B4\",\"radical\":{\"index\":170,\"additionalStrokes\":16,\"character\":\"阜\"},\"totalStrokes\":18},\"simplified\":{\"headword\":\"陇\",\"cantonese\":\"lung5\",\"mandarin\":\"lǒng\",\"codePoint\":\"U+9647\",\"radical\":{\"index\":170,\"additionalStrokes\":5,\"simplified\":false,\"character\":\"阜\"},\"totalStrokes\":7},\"pinyin\":\"Long3\",\"definitions\":[\"short name for Gansu province 甘肅省|甘肃省[Gan1 su4 Sheng3]\"]}]}");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Fixture, CedictFixture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tufts_tufts_fixture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/tufts-fixture.js */ "./tufts/tufts-fixture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fixture", function() { return _tufts_tufts_fixture_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _cedict_cedict_fixture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/cedict/cedict-fixture.js */ "./cedict/cedict-fixture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CedictFixture", function() { return _cedict_cedict_fixture_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./tufts/localJson/ara-tufts-fixtures.js":
/*!***********************************************!*\
  !*** ./tufts/localJson/ara-tufts-fixtures.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AraTuftsFixture; });
/* harmony import */ var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json");
var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json", 1);
/* harmony import */ var _tufts_localJson_ara_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/ara/ara-tufts-trjmh.json */ "./tufts/localJson/ara/ara-tufts-trjmh.json");
var _tufts_localJson_ara_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/ara/ara-tufts-trjmh.json */ "./tufts/localJson/ara/ara-tufts-trjmh.json", 1);
/* harmony import */ var _tufts_localJson_ara_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tufts/localJson/ara/ara-tufts-mshkel‌.json */ "./tufts/localJson/ara/ara-tufts-mshkel‌.json");
var _tufts_localJson_ara_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/ara/ara-tufts-mshkel‌.json */ "./tufts/localJson/ara/ara-tufts-mshkel‌.json", 1);
/* harmony import */ var _tufts_localJson_ara_ara_tufts_mkr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tufts/localJson/ara/ara-tufts-mkr.json */ "./tufts/localJson/ara/ara-tufts-mkr.json");
var _tufts_localJson_ara_ara_tufts_mkr_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/ara/ara-tufts-mkr.json */ "./tufts/localJson/ara/ara-tufts-mkr.json", 1);
/* harmony import */ var _tufts_localJson_ara_ara_tufts_sitan_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tufts/localJson/ara/ara-tufts-sitan.json */ "./tufts/localJson/ara/ara-tufts-sitan.json");
var _tufts_localJson_ara_ara_tufts_sitan_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/ara/ara-tufts-sitan.json */ "./tufts/localJson/ara/ara-tufts-sitan.json", 1);






class AraTuftsFixture {
  static get library () {
    return {
        default: _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
        'ترجمة': _tufts_localJson_ara_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_1__,
        'مشکل‌ها': _tufts_localJson_ara_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_2__,
        'مَقَرٍ': _tufts_localJson_ara_ara_tufts_mkr_json__WEBPACK_IMPORTED_MODULE_3__,
        'سُلطَان': _tufts_localJson_ara_ara_tufts_sitan_json__WEBPACK_IMPORTED_MODULE_4__
    }
  }
}

/***/ }),

/***/ "./tufts/localJson/ara/ara-tufts-mkr.json":
/*!************************************************!*\
  !*** ./tufts/localJson/ara/ara-tufts-mkr.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:مَقَرٍ:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-24T02:38:30.325650\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:مَقَرٍ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429084592\"},\"Body\":{\"about\":\"urn:uuid:idm140154429084592\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUN\"},\"xmpl\":{\"$\":\"center/headquarters/residence\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"center/headquarters/residence + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"center/headquarters/residence + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"center/headquarters/residence + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"center/headquarters/residence + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مَقَرّ\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"center/headquarters/residence + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مَقَرّ\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"center/headquarters/residence\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/ara/ara-tufts-mshkel‌.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/ara/ara-tufts-mshkel‌.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:مشکل‌ها:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-23T06:34:36.915313\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:مشکل‌ها\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207807208\"},{\"resource\":\"urn:uuid:idm140440208600008\"},{\"resource\":\"urn:uuid:idm140440209948264\"},{\"resource\":\"urn:uuid:idm140440208855576\"},{\"resource\":\"urn:uuid:idm140440209664040\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207807208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUN\"},\"xmpl\":{\"$\":\"problem/difficulty\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"problem/difficulty + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"problem/difficulty + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشْكِل\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"problem/difficulty\"}}}},{\"about\":\"urn:uuid:idm140440208600008\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"variegated\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"variegated + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"variegated + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"variegated + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"variegated + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"variegated + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"variegated\"}}}},{\"about\":\"urn:uuid:idm140440209948264\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"composed/formed\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"composed/formed + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"composed/formed + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"composed/formed + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"composed/formed + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"composed/formed + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"composed/formed\"}}}},{\"about\":\"urn:uuid:idm140440208855576\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics)\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"diacriticized (with short vowels and diacritics)\"}}}},{\"about\":\"urn:uuid:idm140440209664040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"ها\"}},\"pofs\":{\"order\":0,\"$\":\"interjection\"},\"morph\":{\"$\":\"INTERJ\"},\"xmpl\":{\"$\":\"look/now\"}},\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"ها\"},\"pofs\":{\"order\":0,\"$\":\"interjection\"}},\"mean\":{\"$\":\"look/now\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/ara/ara-tufts-sitan.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/ara/ara-tufts-sitan.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:سُلطَان:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-24T05:18:56.244733\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:سُلطَان\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440212585768\"},{\"resource\":\"urn:uuid:idm140440213296904\"},{\"resource\":\"urn:uuid:idm140440210049272\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440212585768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUN\"},\"xmpl\":{\"$\":\"power\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"power + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"power + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"power + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"power + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"power + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"سُلْطان\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"power\"}}}},{\"about\":\"urn:uuid:idm140440213296904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROP\"},\"xmpl\":{\"$\":\"Sultan\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROPu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"Sultan + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROPa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"Sultan + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROPN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"Sultan + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROPK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"Sultan + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":8,\"$\":\"proper noun\"},\"morph\":{\"$\":\"NOUN_PROPi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"Sultan + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"سُلْطان\"},\"pofs\":{\"order\":8,\"$\":\"proper noun\"}},\"mean\":{\"$\":\"Sultan\"}}}},{\"about\":\"urn:uuid:idm140440210049272\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUN\"},\"xmpl\":{\"$\":\"Sultan\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"Sultan + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"Sultan + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"Sultan + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"Sultan + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"سُلْطان\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"Sultan + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"سُلْطان\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"Sultan\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/ara/ara-tufts-trjmh.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/ara/ara-tufts-trjmh.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ترجمة:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-23T06:33:44.209551\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ترجمة\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208544824\"},{\"resource\":\"urn:uuid:idm140440210232632\"},{\"resource\":\"urn:uuid:idm140440210234904\"},{\"resource\":\"urn:uuid:idm140440210409656\"},{\"resource\":\"urn:uuid:idm140440212641000\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208544824\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةً\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةَ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َة\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG\"},\"xmpl\":{\"$\":\"biography + [fem.sg.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَمَة\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"biography\"}}}},{\"about\":\"urn:uuid:idm140440210232632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةً\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةَ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َة\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَمَة\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"translation/interpretation\"}}}},{\"about\":\"urn:uuid:idm140440210234904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"ْهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [jus.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [jus.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"ُهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [ind.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [ind.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [sub.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [sub.] + it/him\"}]}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"رَجَم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"revile/stone\"}}}},{\"about\":\"urn:uuid:idm140440210409656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"ْهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [jus.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [jus.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"ُهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [ind.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [ind.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [sub.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [sub.] + it/him\"}]}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"رَجَّم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"surmise/conjecture\"}}}},{\"about\":\"urn:uuid:idm140440212641000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":{\"$\":\"VERB_PERFECTa/PVSUFF_SUBJ:3MS+PVSUFF_DO:3MS\"},\"xmpl\":{\"$\":\"translate/interpret + he/it [verb] + it/him\"}},\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"translate/interpret\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/gez-tufts-fixtures.js":
/*!***********************************************!*\
  !*** ./tufts/localJson/gez-tufts-fixtures.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GezTuftsFixture; });
/* harmony import */ var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json");
var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json", 1);
/* harmony import */ var _tufts_localJson_gez_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/gez/gez-tufts-hageriye.json */ "./tufts/localJson/gez/gez-tufts-hageriye.json");
var _tufts_localJson_gez_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/gez/gez-tufts-hageriye.json */ "./tufts/localJson/gez/gez-tufts-hageriye.json", 1);



class GezTuftsFixture {
  static get library () {
    return {
      default: _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'ሀገርየ': _tufts_localJson_gez_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1__
    }
  }
}

/***/ }),

/***/ "./tufts/localJson/gez/gez-tufts-hageriye.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/gez/gez-tufts-hageriye.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ሀገርየ:traces\",\"creator\":{\"Agent\":{\"about\":\"betamasaheft.eu:morpho.v1\"}},\"created\":{\"$\":\"2019-12-23T06:30:07.632210\"},\"rights\":{\"$\":\"Gǝʿǝz morphology parser (http://betamasaheft.eu/morpho) was developed for the TraCES European Research Council Advanced Grant (https://www.traces.uni-hamburg.de/), Grant Agreement 338756. TraCES corpus data was annotated with the GeTa tool (developed by Cristina Vertan) by the project team (https://www.traces.uni-hamburg.de/en/team.html) directed by Alessandro Bausi. Core reference tables of schemata and affixes were provided by Vitagrazia Pisani and Magdalena Krzyżanowska. Augustus Dillmann's Lexicon Linguae Aethiopicae Online (http://betamasaheft.eu/Dillmann/) used for validation of hypotheses is curated by the TraCES project team, and especially by Alessandro Bausi and Andreas Ellwardt. Current engine  provided by Pietro Liuzzo (https://github.com/TraCES-Lexicon/lexicon/tree/master/geezParser) with support from the project Beta maṣāḥǝft: Manuscripts of Ethiopia and Eritrea (Schriftkultur des christlichen Äthiopiens: eine multimediale Forschungsumgebung) is a long-term project funded within the framework of the Academies' Programme (coordinated by the Union of the German Academies of Sciences and Humanities) under survey of the Akademie der Wissenschaften in Hamburg.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ሀገርየ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154434174688\"},{\"resource\":\"urn:uuid:idm140154434503200\"},{\"resource\":\"urn:uuid:idm140154430059808\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154434174688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"},\"suff\":{\"$\":\"ya\"}},\"pofs\":{\"$\":\"noun\"},\"note\":[{},{}],\"mood\":{},\"gend\":{\"$\":\"common\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"first\"}}}}},{\"about\":\"urn:uuid:idm140154434503200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"},\"suff\":{\"$\":\"ya\"}},\"pofs\":{\"$\":\"noun\"},\"note\":[{},{}],\"mood\":{},\"gend\":{\"$\":\"common\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"first\"}}}}},{\"about\":\"urn:uuid:idm140154430059808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"}},\"pofs\":{\"$\":\"common noun\"},\"mood\":{},\"gend\":{\"$\":\"unmarked\"},\"case\":{\"$\":\"nominative\"},\"note\":{\"$\":\"pronominal state\"},\"num\":{\"$\":\"singularp unmarkeds\"},\"pers\":{}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc-tufts-fixtures.js":
/*!***********************************************!*\
  !*** ./tufts/localJson/grc-tufts-fixtures.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GrcTuftsFixture; });
/* harmony import */ var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json");
var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eloin.json */ "./tufts/localJson/grc/grc-tufts-eloin.json");
var _tufts_localJson_grc_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eloin.json */ "./tufts/localJson/grc/grc-tufts-eloin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oudemia.json */ "./tufts/localJson/grc/grc-tufts-oudemia.json");
var _tufts_localJson_grc_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oudemia.json */ "./tufts/localJson/grc/grc-tufts-oudemia.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dedia.json */ "./tufts/localJson/grc/grc-tufts-dedia.json");
var _tufts_localJson_grc_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dedia.json */ "./tufts/localJson/grc/grc-tufts-dedia.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dedii.json */ "./tufts/localJson/grc/grc-tufts-dedii.json");
var _tufts_localJson_grc_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dedii.json */ "./tufts/localJson/grc/grc-tufts-dedii.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dediiton.json */ "./tufts/localJson/grc/grc-tufts-dediiton.json");
var _tufts_localJson_grc_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dediiton.json */ "./tufts/localJson/grc/grc-tufts-dediiton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dediite.json */ "./tufts/localJson/grc/grc-tufts-dediite.json");
var _tufts_localJson_grc_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dediite.json */ "./tufts/localJson/grc/grc-tufts-dediite.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dedimen.json */ "./tufts/localJson/grc/grc-tufts-dedimen.json");
var _tufts_localJson_grc_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dedimen.json */ "./tufts/localJson/grc/grc-tufts-dedimen.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dedotai.json */ "./tufts/localJson/grc/grc-tufts-dedotai.json");
var _tufts_localJson_grc_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dedotai.json */ "./tufts/localJson/grc/grc-tufts-dedotai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-edediei.json */ "./tufts/localJson/grc/grc-tufts-edediei.json");
var _tufts_localJson_grc_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-edediei.json */ "./tufts/localJson/grc/grc-tufts-edediei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oida.json */ "./tufts/localJson/grc/grc-tufts-oida.json");
var _tufts_localJson_grc_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oida.json */ "./tufts/localJson/grc/grc-tufts-oida.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fo.json */ "./tufts/localJson/grc/grc-tufts-fo.json");
var _tufts_localJson_grc_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fo.json */ "./tufts/localJson/grc/grc-tufts-fo.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fis.json */ "./tufts/localJson/grc/grc-tufts-fis.json");
var _tufts_localJson_grc_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fis.json */ "./tufts/localJson/grc/grc-tufts-fis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fite.json */ "./tufts/localJson/grc/grc-tufts-fite.json");
var _tufts_localJson_grc_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fite.json */ "./tufts/localJson/grc/grc-tufts-fite.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-faii.json */ "./tufts/localJson/grc/grc-tufts-faii.json");
var _tufts_localJson_grc_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-faii.json */ "./tufts/localJson/grc/grc-tufts-faii.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-faimen.json */ "./tufts/localJson/grc/grc-tufts-faimen.json");
var _tufts_localJson_grc_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-faimen.json */ "./tufts/localJson/grc/grc-tufts-faimen.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-faien.json */ "./tufts/localJson/grc/grc-tufts-faien.json");
var _tufts_localJson_grc_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-faien.json */ "./tufts/localJson/grc/grc-tufts-faien.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-etheto.json */ "./tufts/localJson/grc/grc-tufts-etheto.json");
var _tufts_localJson_grc_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-etheto.json */ "./tufts/localJson/grc/grc-tufts-etheto.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dynamai.json */ "./tufts/localJson/grc/grc-tufts-dynamai.json");
var _tufts_localJson_grc_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dynamai.json */ "./tufts/localJson/grc/grc-tufts-dynamai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-epistamai.json */ "./tufts/localJson/grc/grc-tufts-epistamai.json");
var _tufts_localJson_grc_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-epistamai.json */ "./tufts/localJson/grc/grc-tufts-epistamai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-poio.json */ "./tufts/localJson/grc/grc-tufts-poio.json");
var _tufts_localJson_grc_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-poio.json */ "./tufts/localJson/grc/grc-tufts-poio.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-poioumen.json */ "./tufts/localJson/grc/grc-tufts-poioumen.json");
var _tufts_localJson_grc_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-poioumen.json */ "./tufts/localJson/grc/grc-tufts-poioumen.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-plei.json */ "./tufts/localJson/grc/grc-tufts-plei.json");
var _tufts_localJson_grc_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-plei.json */ "./tufts/localJson/grc/grc-tufts-plei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oi.json */ "./tufts/localJson/grc/grc-tufts-oi.json");
var _tufts_localJson_grc_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oi.json */ "./tufts/localJson/grc/grc-tufts-oi.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oi2.json */ "./tufts/localJson/grc/grc-tufts-oi2.json");
var _tufts_localJson_grc_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_24___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oi2.json */ "./tufts/localJson/grc/grc-tufts-oi2.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oi3.json */ "./tufts/localJson/grc/grc-tufts-oi3.json");
var _tufts_localJson_grc_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oi3.json */ "./tufts/localJson/grc/grc-tufts-oi3.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-prosfyma.json */ "./tufts/localJson/grc/grc-tufts-prosfyma.json");
var _tufts_localJson_grc_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_26___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-prosfyma.json */ "./tufts/localJson/grc/grc-tufts-prosfyma.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-kalypso.json */ "./tufts/localJson/grc/grc-tufts-kalypso.json");
var _tufts_localJson_grc_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_27___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-kalypso.json */ "./tufts/localJson/grc/grc-tufts-kalypso.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pasi.json */ "./tufts/localJson/grc/grc-tufts-pasi.json");
var _tufts_localJson_grc_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_28___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pasi.json */ "./tufts/localJson/grc/grc-tufts-pasi.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aftin.json */ "./tufts/localJson/grc/grc-tufts-aftin.json");
var _tufts_localJson_grc_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_29___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aftin.json */ "./tufts/localJson/grc/grc-tufts-aftin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-afton.json */ "./tufts/localJson/grc/grc-tufts-afton.json");
var _tufts_localJson_grc_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_30___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-afton.json */ "./tufts/localJson/grc/grc-tufts-afton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aftois.json */ "./tufts/localJson/grc/grc-tufts-aftois.json");
var _tufts_localJson_grc_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_31___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aftois.json */ "./tufts/localJson/grc/grc-tufts-aftois.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fyin.json */ "./tufts/localJson/grc/grc-tufts-fyin.json");
var _tufts_localJson_grc_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_32___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fyin.json */ "./tufts/localJson/grc/grc-tufts-fyin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tis.json */ "./tufts/localJson/grc/grc-tufts-tis.json");
var _tufts_localJson_grc_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_33___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tis.json */ "./tufts/localJson/grc/grc-tufts-tis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ode.json */ "./tufts/localJson/grc/grc-tufts-ode.json");
var _tufts_localJson_grc_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_34___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ode.json */ "./tufts/localJson/grc/grc-tufts-ode.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tous.json */ "./tufts/localJson/grc/grc-tufts-tous.json");
var _tufts_localJson_grc_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_35___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tous.json */ "./tufts/localJson/grc/grc-tufts-tous.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dyo.json */ "./tufts/localJson/grc/grc-tufts-dyo.json");
var _tufts_localJson_grc_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_36___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dyo.json */ "./tufts/localJson/grc/grc-tufts-dyo.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voulevis.json */ "./tufts/localJson/grc/grc-tufts-voulevis.json");
var _tufts_localJson_grc_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_37___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voulevis.json */ "./tufts/localJson/grc/grc-tufts-voulevis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voulevesthon.json */ "./tufts/localJson/grc/grc-tufts-voulevesthon.json");
var _tufts_localJson_grc_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_38___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voulevesthon.json */ "./tufts/localJson/grc/grc-tufts-voulevesthon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voulevefso.json */ "./tufts/localJson/grc/grc-tufts-voulevefso.json");
var _tufts_localJson_grc_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_39___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voulevefso.json */ "./tufts/localJson/grc/grc-tufts-voulevefso.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agagois.json */ "./tufts/localJson/grc/grc-tufts-agagois.json");
var _tufts_localJson_grc_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_40___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agagois.json */ "./tufts/localJson/grc/grc-tufts-agagois.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agagou.json */ "./tufts/localJson/grc/grc-tufts-agagou.json");
var _tufts_localJson_grc_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_41___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agagou.json */ "./tufts/localJson/grc/grc-tufts-agagou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voulefthis.json */ "./tufts/localJson/grc/grc-tufts-voulefthis.json");
var _tufts_localJson_grc_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_42___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voulefthis.json */ "./tufts/localJson/grc/grc-tufts-voulefthis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-leloipi.json */ "./tufts/localJson/grc/grc-tufts-leloipi.json");
var _tufts_localJson_grc_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_43___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-leloipi.json */ "./tufts/localJson/grc/grc-tufts-leloipi.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gegrapsai.json */ "./tufts/localJson/grc/grc-tufts-gegrapsai.json");
var _tufts_localJson_grc_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_44___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gegrapsai.json */ "./tufts/localJson/grc/grc-tufts-gegrapsai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-memnomai.json */ "./tufts/localJson/grc/grc-tufts-memnomai.json");
var _tufts_localJson_grc_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-memnomai.json */ "./tufts/localJson/grc/grc-tufts-memnomai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-egegrapso.json */ "./tufts/localJson/grc/grc-tufts-egegrapso.json");
var _tufts_localJson_grc_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_46___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-egegrapso.json */ "./tufts/localJson/grc/grc-tufts-egegrapso.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tethnixeis.json */ "./tufts/localJson/grc/grc-tufts-tethnixeis.json");
var _tufts_localJson_grc_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_47___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tethnixeis.json */ "./tufts/localJson/grc/grc-tufts-tethnixeis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-estathi.json */ "./tufts/localJson/grc/grc-tufts-estathi.json");
var _tufts_localJson_grc_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_48___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-estathi.json */ "./tufts/localJson/grc/grc-tufts-estathi.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tethnaton.json */ "./tufts/localJson/grc/grc-tufts-tethnaton.json");
var _tufts_localJson_grc_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_49___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tethnaton.json */ "./tufts/localJson/grc/grc-tufts-tethnaton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-poieiton.json */ "./tufts/localJson/grc/grc-tufts-poieiton.json");
var _tufts_localJson_grc_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_50___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-poieiton.json */ "./tufts/localJson/grc/grc-tufts-poieiton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eplei.json */ "./tufts/localJson/grc/grc-tufts-eplei.json");
var _tufts_localJson_grc_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_51___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eplei.json */ "./tufts/localJson/grc/grc-tufts-eplei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-epoiou.json */ "./tufts/localJson/grc/grc-tufts-epoiou.json");
var _tufts_localJson_grc_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_52___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-epoiou.json */ "./tufts/localJson/grc/grc-tufts-epoiou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-edeonto.json */ "./tufts/localJson/grc/grc-tufts-edeonto.json");
var _tufts_localJson_grc_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_53___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-edeonto.json */ "./tufts/localJson/grc/grc-tufts-edeonto.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oras.json */ "./tufts/localJson/grc/grc-tufts-oras.json");
var _tufts_localJson_grc_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_54___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oras.json */ "./tufts/localJson/grc/grc-tufts-oras.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-chromen.json */ "./tufts/localJson/grc/grc-tufts-chromen.json");
var _tufts_localJson_grc_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_55___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-chromen.json */ "./tufts/localJson/grc/grc-tufts-chromen.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eorasthon.json */ "./tufts/localJson/grc/grc-tufts-eorasthon.json");
var _tufts_localJson_grc_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_56___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eorasthon.json */ "./tufts/localJson/grc/grc-tufts-eorasthon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-chronto.json */ "./tufts/localJson/grc/grc-tufts-chronto.json");
var _tufts_localJson_grc_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_57___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-chronto.json */ "./tufts/localJson/grc/grc-tufts-chronto.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dilois.json */ "./tufts/localJson/grc/grc-tufts-dilois.json");
var _tufts_localJson_grc_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_58___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dilois.json */ "./tufts/localJson/grc/grc-tufts-dilois.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dilousthon.json */ "./tufts/localJson/grc/grc-tufts-dilousthon.json");
var _tufts_localJson_grc_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_59___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dilousthon.json */ "./tufts/localJson/grc/grc-tufts-dilousthon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-etithetin.json */ "./tufts/localJson/grc/grc-tufts-etithetin.json");
var _tufts_localJson_grc_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_60___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-etithetin.json */ "./tufts/localJson/grc/grc-tufts-etithetin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tithesthon.json */ "./tufts/localJson/grc/grc-tufts-tithesthon.json");
var _tufts_localJson_grc_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_61___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tithesthon.json */ "./tufts/localJson/grc/grc-tufts-tithesthon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ethesan.json */ "./tufts/localJson/grc/grc-tufts-ethesan.json");
var _tufts_localJson_grc_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_62___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ethesan.json */ "./tufts/localJson/grc/grc-tufts-ethesan.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ethemetha.json */ "./tufts/localJson/grc/grc-tufts-ethemetha.json");
var _tufts_localJson_grc_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_63___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ethemetha.json */ "./tufts/localJson/grc/grc-tufts-ethemetha.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-iin.json */ "./tufts/localJson/grc/grc-tufts-iin.json");
var _tufts_localJson_grc_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_64___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-iin.json */ "./tufts/localJson/grc/grc-tufts-iin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-iesthon.json */ "./tufts/localJson/grc/grc-tufts-iesthon.json");
var _tufts_localJson_grc_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_65___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-iesthon.json */ "./tufts/localJson/grc/grc-tufts-iesthon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dido.json */ "./tufts/localJson/grc/grc-tufts-dido.json");
var _tufts_localJson_grc_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_66___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dido.json */ "./tufts/localJson/grc/grc-tufts-dido.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-didoio.json */ "./tufts/localJson/grc/grc-tufts-didoio.json");
var _tufts_localJson_grc_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_67___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-didoio.json */ "./tufts/localJson/grc/grc-tufts-didoio.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-edoton.json */ "./tufts/localJson/grc/grc-tufts-edoton.json");
var _tufts_localJson_grc_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_68___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-edoton.json */ "./tufts/localJson/grc/grc-tufts-edoton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dotai.json */ "./tufts/localJson/grc/grc-tufts-dotai.json");
var _tufts_localJson_grc_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_69___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dotai.json */ "./tufts/localJson/grc/grc-tufts-dotai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-istatin.json */ "./tufts/localJson/grc/grc-tufts-istatin.json");
var _tufts_localJson_grc_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_70___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-istatin.json */ "./tufts/localJson/grc/grc-tufts-istatin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-istatai.json */ "./tufts/localJson/grc/grc-tufts-istatai.json");
var _tufts_localJson_grc_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_71___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-istatai.json */ "./tufts/localJson/grc/grc-tufts-istatai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-estitin.json */ "./tufts/localJson/grc/grc-tufts-estitin.json");
var _tufts_localJson_grc_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_72___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-estitin.json */ "./tufts/localJson/grc/grc-tufts-estitin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-edynato.json */ "./tufts/localJson/grc/grc-tufts-edynato.json");
var _tufts_localJson_grc_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_73___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-edynato.json */ "./tufts/localJson/grc/grc-tufts-edynato.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-epististhe.json */ "./tufts/localJson/grc/grc-tufts-epististhe.json");
var _tufts_localJson_grc_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_74___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-epististhe.json */ "./tufts/localJson/grc/grc-tufts-epististhe.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-edeiknyte.json */ "./tufts/localJson/grc/grc-tufts-edeiknyte.json");
var _tufts_localJson_grc_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_75___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-edeiknyte.json */ "./tufts/localJson/grc/grc-tufts-edeiknyte.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-deiknytai.json */ "./tufts/localJson/grc/grc-tufts-deiknytai.json");
var _tufts_localJson_grc_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_76___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-deiknytai.json */ "./tufts/localJson/grc/grc-tufts-deiknytai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eston.json */ "./tufts/localJson/grc/grc-tufts-eston.json");
var _tufts_localJson_grc_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_77___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eston.json */ "./tufts/localJson/grc/grc-tufts-eston.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-iton.json */ "./tufts/localJson/grc/grc-tufts-iton.json");
var _tufts_localJson_grc_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_78___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-iton.json */ "./tufts/localJson/grc/grc-tufts-iton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-faiis.json */ "./tufts/localJson/grc/grc-tufts-faiis.json");
var _tufts_localJson_grc_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_79___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-faiis.json */ "./tufts/localJson/grc/grc-tufts-faiis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-vito.json */ "./tufts/localJson/grc/grc-tufts-vito.json");
var _tufts_localJson_grc_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_80___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-vito.json */ "./tufts/localJson/grc/grc-tufts-vito.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gnoton.json */ "./tufts/localJson/grc/grc-tufts-gnoton.json");
var _tufts_localJson_grc_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_81___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gnoton.json */ "./tufts/localJson/grc/grc-tufts-gnoton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-dythi.json */ "./tufts/localJson/grc/grc-tufts-dythi.json");
var _tufts_localJson_grc_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_82___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-dythi.json */ "./tufts/localJson/grc/grc-tufts-dythi.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ideis.json */ "./tufts/localJson/grc/grc-tufts-ideis.json");
var _tufts_localJson_grc_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_83___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ideis.json */ "./tufts/localJson/grc/grc-tufts-ideis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agontos_json__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agontos.json */ "./tufts/localJson/grc/grc-tufts-agontos.json");
var _tufts_localJson_grc_grc_tufts_agontos_json__WEBPACK_IMPORTED_MODULE_84___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agontos.json */ "./tufts/localJson/grc/grc-tufts-agontos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_menoun_json__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-menoun.json */ "./tufts/localJson/grc/grc-tufts-menoun.json");
var _tufts_localJson_grc_grc_tufts_menoun_json__WEBPACK_IMPORTED_MODULE_85___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-menoun.json */ "./tufts/localJson/grc/grc-tufts-menoun.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_orosa_json__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-orosa.json */ "./tufts/localJson/grc/grc-tufts-orosa.json");
var _tufts_localJson_grc_grc_tufts_orosa_json__WEBPACK_IMPORTED_MODULE_86___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-orosa.json */ "./tufts/localJson/grc/grc-tufts-orosa.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lipon_json__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lipon.json */ "./tufts/localJson/grc/grc-tufts-lipon.json");
var _tufts_localJson_grc_grc_tufts_lipon_json__WEBPACK_IMPORTED_MODULE_87___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lipon.json */ "./tufts/localJson/grc/grc-tufts-lipon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_istante_json__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-istante.json */ "./tufts/localJson/grc/grc-tufts-istante.json");
var _tufts_localJson_grc_grc_tufts_istante_json__WEBPACK_IMPORTED_MODULE_88___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-istante.json */ "./tufts/localJson/grc/grc-tufts-istante.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lysanta_json__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lysanta.json */ "./tufts/localJson/grc/grc-tufts-lysanta.json");
var _tufts_localJson_grc_grc_tufts_lysanta_json__WEBPACK_IMPORTED_MODULE_89___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lysanta.json */ "./tufts/localJson/grc/grc-tufts-lysanta.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lythentos_json__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lythentos.json */ "./tufts/localJson/grc/grc-tufts-lythentos.json");
var _tufts_localJson_grc_grc_tufts_lythentos_json__WEBPACK_IMPORTED_MODULE_90___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lythentos.json */ "./tufts/localJson/grc/grc-tufts-lythentos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_didontoin_json__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-didontoin.json */ "./tufts/localJson/grc/grc-tufts-didontoin.json");
var _tufts_localJson_grc_grc_tufts_didontoin_json__WEBPACK_IMPORTED_MODULE_91___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-didontoin.json */ "./tufts/localJson/grc/grc-tufts-didontoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_deiknynta_json__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-deiknynta.json */ "./tufts/localJson/grc/grc-tufts-deiknynta.json");
var _tufts_localJson_grc_grc_tufts_deiknynta_json__WEBPACK_IMPORTED_MODULE_92___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-deiknynta.json */ "./tufts/localJson/grc/grc-tufts-deiknynta.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_leloipoton_json__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-leloipoton.json */ "./tufts/localJson/grc/grc-tufts-leloipoton.json");
var _tufts_localJson_grc_grc_tufts_leloipoton_json__WEBPACK_IMPORTED_MODULE_93___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-leloipoton.json */ "./tufts/localJson/grc/grc-tufts-leloipoton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_estosai_json__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-estosai.json */ "./tufts/localJson/grc/grc-tufts-estosai.json");
var _tufts_localJson_grc_grc_tufts_estosai_json__WEBPACK_IMPORTED_MODULE_94___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-estosai.json */ "./tufts/localJson/grc/grc-tufts-estosai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pempomenous_json__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pempomenous.json */ "./tufts/localJson/grc/grc-tufts-pempomenous.json");
var _tufts_localJson_grc_grc_tufts_pempomenous_json__WEBPACK_IMPORTED_MODULE_95___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pempomenous.json */ "./tufts/localJson/grc/grc-tufts-pempomenous.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gegrammenoin_json__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gegrammenoin.json */ "./tufts/localJson/grc/grc-tufts-gegrammenoin.json");
var _tufts_localJson_grc_grc_tufts_gegrammenoin_json__WEBPACK_IMPORTED_MODULE_96___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gegrammenoin.json */ "./tufts/localJson/grc/grc-tufts-gegrammenoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_zoni_json__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-zoni.json */ "./tufts/localJson/grc/grc-tufts-zoni.json");
var _tufts_localJson_grc_grc_tufts_zoni_json__WEBPACK_IMPORTED_MODULE_97___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-zoni.json */ "./tufts/localJson/grc/grc-tufts-zoni.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_syndeei_json__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-syndeei.json */ "./tufts/localJson/grc/grc-tufts-syndeei.json");
var _tufts_localJson_grc_grc_tufts_syndeei_json__WEBPACK_IMPORTED_MODULE_98___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-syndeei.json */ "./tufts/localJson/grc/grc-tufts-syndeei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_me_json__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-me.json */ "./tufts/localJson/grc/grc-tufts-me.json");
var _tufts_localJson_grc_grc_tufts_me_json__WEBPACK_IMPORTED_MODULE_99___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-me.json */ "./tufts/localJson/grc/grc-tufts-me.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_synechis_json__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-synechis.json */ "./tufts/localJson/grc/grc-tufts-synechis.json");
var _tufts_localJson_grc_grc_tufts_synechis_json__WEBPACK_IMPORTED_MODULE_100___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-synechis.json */ "./tufts/localJson/grc/grc-tufts-synechis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_tain_json__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-tain.json */ "./tufts/localJson/grc/grc-tufts-tain.json");
var _tufts_localJson_grc_grc_tufts_tain_json__WEBPACK_IMPORTED_MODULE_101___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-tain.json */ "./tufts/localJson/grc/grc-tufts-tain.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_emaftou_json__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-emaftou.json */ "./tufts/localJson/grc/grc-tufts-emaftou.json");
var _tufts_localJson_grc_grc_tufts_emaftou_json__WEBPACK_IMPORTED_MODULE_102___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-emaftou.json */ "./tufts/localJson/grc/grc-tufts-emaftou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agon_json__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agon.json */ "./tufts/localJson/grc/grc-tufts-agon.json");
var _tufts_localJson_grc_grc_tufts_agon_json__WEBPACK_IMPORTED_MODULE_103___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agon.json */ "./tufts/localJson/grc/grc-tufts-agon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_anthropos_json__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-anthropos.json */ "./tufts/localJson/grc/grc-tufts-anthropos.json");
var _tufts_localJson_grc_grc_tufts_anthropos_json__WEBPACK_IMPORTED_MODULE_104___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-anthropos.json */ "./tufts/localJson/grc/grc-tufts-anthropos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_estatin_json__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-estatin.json */ "./tufts/localJson/grc/grc-tufts-estatin.json");
var _tufts_localJson_grc_grc_tufts_estatin_json__WEBPACK_IMPORTED_MODULE_105___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-estatin.json */ "./tufts/localJson/grc/grc-tufts-estatin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lelysthai_json__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lelysthai.json */ "./tufts/localJson/grc/grc-tufts-lelysthai.json");
var _tufts_localJson_grc_grc_tufts_lelysthai_json__WEBPACK_IMPORTED_MODULE_106___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lelysthai.json */ "./tufts/localJson/grc/grc-tufts-lelysthai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_elelyki_json__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-elelyki.json */ "./tufts/localJson/grc/grc-tufts-elelyki.json");
var _tufts_localJson_grc_grc_tufts_elelyki_json__WEBPACK_IMPORTED_MODULE_107___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-elelyki.json */ "./tufts/localJson/grc/grc-tufts-elelyki.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agagitai_json__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agagitai.json */ "./tufts/localJson/grc/grc-tufts-agagitai.json");
var _tufts_localJson_grc_grc_tufts_agagitai_json__WEBPACK_IMPORTED_MODULE_108___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agagitai.json */ "./tufts/localJson/grc/grc-tufts-agagitai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_evolefthin_json__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-evolefthin.json */ "./tufts/localJson/grc/grc-tufts-evolefthin.json");
var _tufts_localJson_grc_grc_tufts_evolefthin_json__WEBPACK_IMPORTED_MODULE_109___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-evolefthin.json */ "./tufts/localJson/grc/grc-tufts-evolefthin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_vouleftho_json__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-vouleftho.json */ "./tufts/localJson/grc/grc-tufts-vouleftho.json");
var _tufts_localJson_grc_grc_tufts_vouleftho_json__WEBPACK_IMPORTED_MODULE_110___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-vouleftho.json */ "./tufts/localJson/grc/grc-tufts-vouleftho.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_vouleftheiin_json__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-vouleftheiin.json */ "./tufts/localJson/grc/grc-tufts-vouleftheiin.json");
var _tufts_localJson_grc_grc_tufts_vouleftheiin_json__WEBPACK_IMPORTED_MODULE_111___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-vouleftheiin.json */ "./tufts/localJson/grc/grc-tufts-vouleftheiin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_egrafin_json__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-egrafin.json */ "./tufts/localJson/grc/grc-tufts-egrafin.json");
var _tufts_localJson_grc_grc_tufts_egrafin_json__WEBPACK_IMPORTED_MODULE_112___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-egrafin.json */ "./tufts/localJson/grc/grc-tufts-egrafin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_oistrodonou_json__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-oistrodonou.json */ "./tufts/localJson/grc/grc-tufts-oistrodonou.json");
var _tufts_localJson_grc_grc_tufts_oistrodonou_json__WEBPACK_IMPORTED_MODULE_113___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-oistrodonou.json */ "./tufts/localJson/grc/grc-tufts-oistrodonou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ergon_json__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ergon.json */ "./tufts/localJson/grc/grc-tufts-ergon.json");
var _tufts_localJson_grc_grc_tufts_ergon_json__WEBPACK_IMPORTED_MODULE_114___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ergon.json */ "./tufts/localJson/grc/grc-tufts-ergon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_choras_json__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-choras.json */ "./tufts/localJson/grc/grc-tufts-choras.json");
var _tufts_localJson_grc_grc_tufts_choras_json__WEBPACK_IMPORTED_MODULE_115___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-choras.json */ "./tufts/localJson/grc/grc-tufts-choras.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_chorain_json__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-chorain.json */ "./tufts/localJson/grc/grc-tufts-chorain.json");
var _tufts_localJson_grc_grc_tufts_chorain_json__WEBPACK_IMPORTED_MODULE_116___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-chorain.json */ "./tufts/localJson/grc/grc-tufts-chorain.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gnomon_json__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gnomon.json */ "./tufts/localJson/grc/grc-tufts-gnomon.json");
var _tufts_localJson_grc_grc_tufts_gnomon_json__WEBPACK_IMPORTED_MODULE_117___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gnomon.json */ "./tufts/localJson/grc/grc-tufts-gnomon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gnomin_json__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gnomin.json */ "./tufts/localJson/grc/grc-tufts-gnomin.json");
var _tufts_localJson_grc_grc_tufts_gnomin_json__WEBPACK_IMPORTED_MODULE_118___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gnomin.json */ "./tufts/localJson/grc/grc-tufts-gnomin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ygieia_json__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ygieia.json */ "./tufts/localJson/grc/grc-tufts-ygieia.json");
var _tufts_localJson_grc_grc_tufts_ygieia_json__WEBPACK_IMPORTED_MODULE_119___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ygieia.json */ "./tufts/localJson/grc/grc-tufts-ygieia.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ygieiain_json__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ygieiain.json */ "./tufts/localJson/grc/grc-tufts-ygieiain.json");
var _tufts_localJson_grc_grc_tufts_ygieiain_json__WEBPACK_IMPORTED_MODULE_120___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ygieiain.json */ "./tufts/localJson/grc/grc-tufts-ygieiain.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_thalattan_json__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-thalattan.json */ "./tufts/localJson/grc/grc-tufts-thalattan.json");
var _tufts_localJson_grc_grc_tufts_thalattan_json__WEBPACK_IMPORTED_MODULE_121___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-thalattan.json */ "./tufts/localJson/grc/grc-tufts-thalattan.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_thalattas_json__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-thalattas.json */ "./tufts/localJson/grc/grc-tufts-thalattas.json");
var _tufts_localJson_grc_grc_tufts_thalattas_json__WEBPACK_IMPORTED_MODULE_122___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-thalattas.json */ "./tufts/localJson/grc/grc-tufts-thalattas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_neaniou_json__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-neaniou.json */ "./tufts/localJson/grc/grc-tufts-neaniou.json");
var _tufts_localJson_grc_grc_tufts_neaniou_json__WEBPACK_IMPORTED_MODULE_123___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-neaniou.json */ "./tufts/localJson/grc/grc-tufts-neaniou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_neaniain_json__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-neaniain.json */ "./tufts/localJson/grc/grc-tufts-neaniain.json");
var _tufts_localJson_grc_grc_tufts_neaniain_json__WEBPACK_IMPORTED_MODULE_124___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-neaniain.json */ "./tufts/localJson/grc/grc-tufts-neaniain.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_stratiotin_json__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-stratiotin.json */ "./tufts/localJson/grc/grc-tufts-stratiotin.json");
var _tufts_localJson_grc_grc_tufts_stratiotin_json__WEBPACK_IMPORTED_MODULE_125___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-stratiotin.json */ "./tufts/localJson/grc/grc-tufts-stratiotin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_stratiotais_json__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-stratiotais.json */ "./tufts/localJson/grc/grc-tufts-stratiotais.json");
var _tufts_localJson_grc_grc_tufts_stratiotais_json__WEBPACK_IMPORTED_MODULE_126___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-stratiotais.json */ "./tufts/localJson/grc/grc-tufts-stratiotais.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_xiri_json__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-xiri.json */ "./tufts/localJson/grc/grc-tufts-xiri.json");
var _tufts_localJson_grc_grc_tufts_xiri_json__WEBPACK_IMPORTED_MODULE_127___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-xiri.json */ "./tufts/localJson/grc/grc-tufts-xiri.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_klops_json__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-klops.json */ "./tufts/localJson/grc/grc-tufts-klops.json");
var _tufts_localJson_grc_grc_tufts_klops_json__WEBPACK_IMPORTED_MODULE_128___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-klops.json */ "./tufts/localJson/grc/grc-tufts-klops.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_klope_json__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-klope.json */ "./tufts/localJson/grc/grc-tufts-klope.json");
var _tufts_localJson_grc_grc_tufts_klope_json__WEBPACK_IMPORTED_MODULE_129___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-klope.json */ "./tufts/localJson/grc/grc-tufts-klope.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fylakon_json__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fylakon.json */ "./tufts/localJson/grc/grc-tufts-fylakon.json");
var _tufts_localJson_grc_grc_tufts_fylakon_json__WEBPACK_IMPORTED_MODULE_130___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fylakon.json */ "./tufts/localJson/grc/grc-tufts-fylakon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_fylax_json__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-fylax.json */ "./tufts/localJson/grc/grc-tufts-fylax.json");
var _tufts_localJson_grc_grc_tufts_fylax_json__WEBPACK_IMPORTED_MODULE_131___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-fylax.json */ "./tufts/localJson/grc/grc-tufts-fylax.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_charis_json__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-charis.json */ "./tufts/localJson/grc/grc-tufts-charis.json");
var _tufts_localJson_grc_grc_tufts_charis_json__WEBPACK_IMPORTED_MODULE_132___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-charis.json */ "./tufts/localJson/grc/grc-tufts-charis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_charites_json__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-charites.json */ "./tufts/localJson/grc/grc-tufts-charites.json");
var _tufts_localJson_grc_grc_tufts_charites_json__WEBPACK_IMPORTED_MODULE_133___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-charites.json */ "./tufts/localJson/grc/grc-tufts-charites.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aspidoin_json__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aspidoin.json */ "./tufts/localJson/grc/grc-tufts-aspidoin.json");
var _tufts_localJson_grc_grc_tufts_aspidoin_json__WEBPACK_IMPORTED_MODULE_134___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aspidoin.json */ "./tufts/localJson/grc/grc-tufts-aspidoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aspidas_json__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aspidas.json */ "./tufts/localJson/grc/grc-tufts-aspidas.json");
var _tufts_localJson_grc_grc_tufts_aspidas_json__WEBPACK_IMPORTED_MODULE_135___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aspidas.json */ "./tufts/localJson/grc/grc-tufts-aspidas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ellada_json__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ellada.json */ "./tufts/localJson/grc/grc-tufts-ellada.json");
var _tufts_localJson_grc_grc_tufts_ellada_json__WEBPACK_IMPORTED_MODULE_136___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ellada.json */ "./tufts/localJson/grc/grc-tufts-ellada.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_elladoin_json__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-elladoin.json */ "./tufts/localJson/grc/grc-tufts-elladoin.json");
var _tufts_localJson_grc_grc_tufts_elladoin_json__WEBPACK_IMPORTED_MODULE_137___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-elladoin.json */ "./tufts/localJson/grc/grc-tufts-elladoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gerontos_json__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gerontos.json */ "./tufts/localJson/grc/grc-tufts-gerontos.json");
var _tufts_localJson_grc_grc_tufts_gerontos_json__WEBPACK_IMPORTED_MODULE_138___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gerontos.json */ "./tufts/localJson/grc/grc-tufts-gerontos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_geronton_json__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-geronton.json */ "./tufts/localJson/grc/grc-tufts-geronton.json");
var _tufts_localJson_grc_grc_tufts_geronton_json__WEBPACK_IMPORTED_MODULE_139___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-geronton.json */ "./tufts/localJson/grc/grc-tufts-geronton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_giganta_json__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-giganta.json */ "./tufts/localJson/grc/grc-tufts-giganta.json");
var _tufts_localJson_grc_grc_tufts_giganta_json__WEBPACK_IMPORTED_MODULE_140___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-giganta.json */ "./tufts/localJson/grc/grc-tufts-giganta.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_giganton_json__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-giganton.json */ "./tufts/localJson/grc/grc-tufts-giganton.json");
var _tufts_localJson_grc_grc_tufts_giganton_json__WEBPACK_IMPORTED_MODULE_141___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-giganton.json */ "./tufts/localJson/grc/grc-tufts-giganton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_odontoin_json__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-odontoin.json */ "./tufts/localJson/grc/grc-tufts-odontoin.json");
var _tufts_localJson_grc_grc_tufts_odontoin_json__WEBPACK_IMPORTED_MODULE_142___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-odontoin.json */ "./tufts/localJson/grc/grc-tufts-odontoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_odontos_json__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-odontos.json */ "./tufts/localJson/grc/grc-tufts-odontos.json");
var _tufts_localJson_grc_grc_tufts_odontos_json__WEBPACK_IMPORTED_MODULE_143___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-odontos.json */ "./tufts/localJson/grc/grc-tufts-odontos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pragmatos_json__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pragmatos.json */ "./tufts/localJson/grc/grc-tufts-pragmatos.json");
var _tufts_localJson_grc_grc_tufts_pragmatos_json__WEBPACK_IMPORTED_MODULE_144___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pragmatos.json */ "./tufts/localJson/grc/grc-tufts-pragmatos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pragmatoin_json__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pragmatoin.json */ "./tufts/localJson/grc/grc-tufts-pragmatoin.json");
var _tufts_localJson_grc_grc_tufts_pragmatoin_json__WEBPACK_IMPORTED_MODULE_145___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pragmatoin.json */ "./tufts/localJson/grc/grc-tufts-pragmatoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_terati_json__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-terati.json */ "./tufts/localJson/grc/grc-tufts-terati.json");
var _tufts_localJson_grc_grc_tufts_terati_json__WEBPACK_IMPORTED_MODULE_146___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-terati.json */ "./tufts/localJson/grc/grc-tufts-terati.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_teraton_json__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-teraton.json */ "./tufts/localJson/grc/grc-tufts-teraton.json");
var _tufts_localJson_grc_grc_tufts_teraton_json__WEBPACK_IMPORTED_MODULE_147___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-teraton.json */ "./tufts/localJson/grc/grc-tufts-teraton.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ritoros_json__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ritoros.json */ "./tufts/localJson/grc/grc-tufts-ritoros.json");
var _tufts_localJson_grc_grc_tufts_ritoros_json__WEBPACK_IMPORTED_MODULE_148___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ritoros.json */ "./tufts/localJson/grc/grc-tufts-ritoros.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ritores_json__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ritores.json */ "./tufts/localJson/grc/grc-tufts-ritores.json");
var _tufts_localJson_grc_grc_tufts_ritores_json__WEBPACK_IMPORTED_MODULE_149___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ritores.json */ "./tufts/localJson/grc/grc-tufts-ritores.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_daimon_json__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-daimon.json */ "./tufts/localJson/grc/grc-tufts-daimon.json");
var _tufts_localJson_grc_grc_tufts_daimon_json__WEBPACK_IMPORTED_MODULE_150___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-daimon.json */ "./tufts/localJson/grc/grc-tufts-daimon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_daimonas_json__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-daimonas.json */ "./tufts/localJson/grc/grc-tufts-daimonas.json");
var _tufts_localJson_grc_grc_tufts_daimonas_json__WEBPACK_IMPORTED_MODULE_151___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-daimonas.json */ "./tufts/localJson/grc/grc-tufts-daimonas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agona_json__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agona.json */ "./tufts/localJson/grc/grc-tufts-agona.json");
var _tufts_localJson_grc_grc_tufts_agona_json__WEBPACK_IMPORTED_MODULE_152___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agona.json */ "./tufts/localJson/grc/grc-tufts-agona.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agonon_json__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agonon.json */ "./tufts/localJson/grc/grc-tufts-agonon.json");
var _tufts_localJson_grc_grc_tufts_agonon_json__WEBPACK_IMPORTED_MODULE_153___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agonon.json */ "./tufts/localJson/grc/grc-tufts-agonon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ali_json__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ali.json */ "./tufts/localJson/grc/grc-tufts-ali.json");
var _tufts_localJson_grc_grc_tufts_ali_json__WEBPACK_IMPORTED_MODULE_154___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ali.json */ "./tufts/localJson/grc/grc-tufts-ali.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aloin_json__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aloin.json */ "./tufts/localJson/grc/grc-tufts-aloin.json");
var _tufts_localJson_grc_grc_tufts_aloin_json__WEBPACK_IMPORTED_MODULE_155___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aloin.json */ "./tufts/localJson/grc/grc-tufts-aloin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_patri_json__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-patri.json */ "./tufts/localJson/grc/grc-tufts-patri.json");
var _tufts_localJson_grc_grc_tufts_patri_json__WEBPACK_IMPORTED_MODULE_156___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-patri.json */ "./tufts/localJson/grc/grc-tufts-patri.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pateroin_json__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pateroin.json */ "./tufts/localJson/grc/grc-tufts-pateroin.json");
var _tufts_localJson_grc_grc_tufts_pateroin_json__WEBPACK_IMPORTED_MODULE_157___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pateroin.json */ "./tufts/localJson/grc/grc-tufts-pateroin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_mitera_json__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-mitera.json */ "./tufts/localJson/grc/grc-tufts-mitera.json");
var _tufts_localJson_grc_grc_tufts_mitera_json__WEBPACK_IMPORTED_MODULE_158___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-mitera.json */ "./tufts/localJson/grc/grc-tufts-mitera.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_miteron_json__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-miteron.json */ "./tufts/localJson/grc/grc-tufts-miteron.json");
var _tufts_localJson_grc_grc_tufts_miteron_json__WEBPACK_IMPORTED_MODULE_159___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-miteron.json */ "./tufts/localJson/grc/grc-tufts-miteron.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_thygatera_json__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-thygatera.json */ "./tufts/localJson/grc/grc-tufts-thygatera.json");
var _tufts_localJson_grc_grc_tufts_thygatera_json__WEBPACK_IMPORTED_MODULE_160___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-thygatera.json */ "./tufts/localJson/grc/grc-tufts-thygatera.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_thygateroin_json__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-thygateroin.json */ "./tufts/localJson/grc/grc-tufts-thygateroin.json");
var _tufts_localJson_grc_grc_tufts_thygateroin_json__WEBPACK_IMPORTED_MODULE_161___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-thygateroin.json */ "./tufts/localJson/grc/grc-tufts-thygateroin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_andri_json__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-andri.json */ "./tufts/localJson/grc/grc-tufts-andri.json");
var _tufts_localJson_grc_grc_tufts_andri_json__WEBPACK_IMPORTED_MODULE_162___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-andri.json */ "./tufts/localJson/grc/grc-tufts-andri.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_andron_json__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-andron.json */ "./tufts/localJson/grc/grc-tufts-andron.json");
var _tufts_localJson_grc_grc_tufts_andron_json__WEBPACK_IMPORTED_MODULE_163___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-andron.json */ "./tufts/localJson/grc/grc-tufts-andron.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_triirous_json__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-triirous.json */ "./tufts/localJson/grc/grc-tufts-triirous.json");
var _tufts_localJson_grc_grc_tufts_triirous_json__WEBPACK_IMPORTED_MODULE_164___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-triirous.json */ "./tufts/localJson/grc/grc-tufts-triirous.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_triireis_json__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-triireis.json */ "./tufts/localJson/grc/grc-tufts-triireis.json");
var _tufts_localJson_grc_grc_tufts_triireis_json__WEBPACK_IMPORTED_MODULE_165___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-triireis.json */ "./tufts/localJson/grc/grc-tufts-triireis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_genei_json__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-genei.json */ "./tufts/localJson/grc/grc-tufts-genei.json");
var _tufts_localJson_grc_grc_tufts_genei_json__WEBPACK_IMPORTED_MODULE_166___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-genei.json */ "./tufts/localJson/grc/grc-tufts-genei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_geni_json__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-geni.json */ "./tufts/localJson/grc/grc-tufts-geni.json");
var _tufts_localJson_grc_grc_tufts_geni_json__WEBPACK_IMPORTED_MODULE_167___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-geni.json */ "./tufts/localJson/grc/grc-tufts-geni.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gera_json__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gera.json */ "./tufts/localJson/grc/grc-tufts-gera.json");
var _tufts_localJson_grc_grc_tufts_gera_json__WEBPACK_IMPORTED_MODULE_168___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gera.json */ "./tufts/localJson/grc/grc-tufts-gera.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_geron_json__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-geron.json */ "./tufts/localJson/grc/grc-tufts-geron.json");
var _tufts_localJson_grc_grc_tufts_geron_json__WEBPACK_IMPORTED_MODULE_169___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-geron.json */ "./tufts/localJson/grc/grc-tufts-geron.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gynaiki_json__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gynaiki.json */ "./tufts/localJson/grc/grc-tufts-gynaiki.json");
var _tufts_localJson_grc_grc_tufts_gynaiki_json__WEBPACK_IMPORTED_MODULE_170___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gynaiki.json */ "./tufts/localJson/grc/grc-tufts-gynaiki.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gynaikas_json__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gynaikas.json */ "./tufts/localJson/grc/grc-tufts-gynaikas.json");
var _tufts_localJson_grc_grc_tufts_gynaikas_json__WEBPACK_IMPORTED_MODULE_171___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gynaikas.json */ "./tufts/localJson/grc/grc-tufts-gynaikas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_cheire_json__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-cheire.json */ "./tufts/localJson/grc/grc-tufts-cheire.json");
var _tufts_localJson_grc_grc_tufts_cheire_json__WEBPACK_IMPORTED_MODULE_172___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-cheire.json */ "./tufts/localJson/grc/grc-tufts-cheire.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_cheiras_json__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-cheiras.json */ "./tufts/localJson/grc/grc-tufts-cheiras.json");
var _tufts_localJson_grc_grc_tufts_cheiras_json__WEBPACK_IMPORTED_MODULE_173___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-cheiras.json */ "./tufts/localJson/grc/grc-tufts-cheiras.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_yeos_json__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-yeos.json */ "./tufts/localJson/grc/grc-tufts-yeos.json");
var _tufts_localJson_grc_grc_tufts_yeos_json__WEBPACK_IMPORTED_MODULE_174___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-yeos.json */ "./tufts/localJson/grc/grc-tufts-yeos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_yieos_json__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-yieos.json */ "./tufts/localJson/grc/grc-tufts-yieos.json");
var _tufts_localJson_grc_grc_tufts_yieos_json__WEBPACK_IMPORTED_MODULE_175___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-yieos.json */ "./tufts/localJson/grc/grc-tufts-yieos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_yioin_json__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-yioin.json */ "./tufts/localJson/grc/grc-tufts-yioin.json");
var _tufts_localJson_grc_grc_tufts_yioin_json__WEBPACK_IMPORTED_MODULE_176___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-yioin.json */ "./tufts/localJson/grc/grc-tufts-yioin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_poleos_json__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-poleos.json */ "./tufts/localJson/grc/grc-tufts-poleos.json");
var _tufts_localJson_grc_grc_tufts_poleos_json__WEBPACK_IMPORTED_MODULE_177___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-poleos.json */ "./tufts/localJson/grc/grc-tufts-poleos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_poleoin_json__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-poleoin.json */ "./tufts/localJson/grc/grc-tufts-poleoin.json");
var _tufts_localJson_grc_grc_tufts_poleoin_json__WEBPACK_IMPORTED_MODULE_178___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-poleoin.json */ "./tufts/localJson/grc/grc-tufts-poleoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_pichyn_json__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-pichyn.json */ "./tufts/localJson/grc/grc-tufts-pichyn.json");
var _tufts_localJson_grc_grc_tufts_pichyn_json__WEBPACK_IMPORTED_MODULE_179___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-pichyn.json */ "./tufts/localJson/grc/grc-tufts-pichyn.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_picheon_json__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-picheon.json */ "./tufts/localJson/grc/grc-tufts-picheon.json");
var _tufts_localJson_grc_grc_tufts_picheon_json__WEBPACK_IMPORTED_MODULE_180___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-picheon.json */ "./tufts/localJson/grc/grc-tufts-picheon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_astei_json__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-astei.json */ "./tufts/localJson/grc/grc-tufts-astei.json");
var _tufts_localJson_grc_grc_tufts_astei_json__WEBPACK_IMPORTED_MODULE_181___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-astei.json */ "./tufts/localJson/grc/grc-tufts-astei.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_asteon_json__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-asteon.json */ "./tufts/localJson/grc/grc-tufts-asteon.json");
var _tufts_localJson_grc_grc_tufts_asteon_json__WEBPACK_IMPORTED_MODULE_182___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-asteon.json */ "./tufts/localJson/grc/grc-tufts-asteon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ichthyos_json__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ichthyos.json */ "./tufts/localJson/grc/grc-tufts-ichthyos.json");
var _tufts_localJson_grc_grc_tufts_ichthyos_json__WEBPACK_IMPORTED_MODULE_183___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ichthyos.json */ "./tufts/localJson/grc/grc-tufts-ichthyos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ichthyes_json__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ichthyes.json */ "./tufts/localJson/grc/grc-tufts-ichthyes.json");
var _tufts_localJson_grc_grc_tufts_ichthyes_json__WEBPACK_IMPORTED_MODULE_184___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ichthyes.json */ "./tufts/localJson/grc/grc-tufts-ichthyes.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ippeos_json__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ippeos.json */ "./tufts/localJson/grc/grc-tufts-ippeos.json");
var _tufts_localJson_grc_grc_tufts_ippeos_json__WEBPACK_IMPORTED_MODULE_185___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ippeos.json */ "./tufts/localJson/grc/grc-tufts-ippeos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ippeoin_json__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ippeoin.json */ "./tufts/localJson/grc/grc-tufts-ippeoin.json");
var _tufts_localJson_grc_grc_tufts_ippeoin_json__WEBPACK_IMPORTED_MODULE_186___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ippeoin.json */ "./tufts/localJson/grc/grc-tufts-ippeoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gravn_json__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gravn.json */ "./tufts/localJson/grc/grc-tufts-gravn.json");
var _tufts_localJson_grc_grc_tufts_gravn_json__WEBPACK_IMPORTED_MODULE_187___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gravn.json */ "./tufts/localJson/grc/grc-tufts-gravn.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_graoin_json__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-graoin.json */ "./tufts/localJson/grc/grc-tufts-graoin.json");
var _tufts_localJson_grc_grc_tufts_graoin_json__WEBPACK_IMPORTED_MODULE_188___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-graoin.json */ "./tufts/localJson/grc/grc-tufts-graoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_navn_json__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-navn.json */ "./tufts/localJson/grc/grc-tufts-navn.json");
var _tufts_localJson_grc_grc_tufts_navn_json__WEBPACK_IMPORTED_MODULE_189___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-navn.json */ "./tufts/localJson/grc/grc-tufts-navn.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_neon_json__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-neon.json */ "./tufts/localJson/grc/grc-tufts-neon.json");
var _tufts_localJson_grc_grc_tufts_neon_json__WEBPACK_IMPORTED_MODULE_190___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-neon.json */ "./tufts/localJson/grc/grc-tufts-neon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voun_json__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voun.json */ "./tufts/localJson/grc/grc-tufts-voun.json");
var _tufts_localJson_grc_grc_tufts_voun_json__WEBPACK_IMPORTED_MODULE_191___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voun.json */ "./tufts/localJson/grc/grc-tufts-voun.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_voon_json__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-voon.json */ "./tufts/localJson/grc/grc-tufts-voon.json");
var _tufts_localJson_grc_grc_tufts_voon_json__WEBPACK_IMPORTED_MODULE_192___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-voon.json */ "./tufts/localJson/grc/grc-tufts-voon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_nou_json__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-nou.json */ "./tufts/localJson/grc/grc-tufts-nou.json");
var _tufts_localJson_grc_grc_tufts_nou_json__WEBPACK_IMPORTED_MODULE_193___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-nou.json */ "./tufts/localJson/grc/grc-tufts-nou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_noin_json__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-noin.json */ "./tufts/localJson/grc/grc-tufts-noin.json");
var _tufts_localJson_grc_grc_tufts_noin_json__WEBPACK_IMPORTED_MODULE_194___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-noin.json */ "./tufts/localJson/grc/grc-tufts-noin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_kanou_json__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-kanou.json */ "./tufts/localJson/grc/grc-tufts-kanou.json");
var _tufts_localJson_grc_grc_tufts_kanou_json__WEBPACK_IMPORTED_MODULE_195___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-kanou.json */ "./tufts/localJson/grc/grc-tufts-kanou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_kanoin_json__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-kanoin.json */ "./tufts/localJson/grc/grc-tufts-kanoin.json");
var _tufts_localJson_grc_grc_tufts_kanoin_json__WEBPACK_IMPORTED_MODULE_196___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-kanoin.json */ "./tufts/localJson/grc/grc-tufts-kanoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gis_json__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gis.json */ "./tufts/localJson/grc/grc-tufts-gis.json");
var _tufts_localJson_grc_grc_tufts_gis_json__WEBPACK_IMPORTED_MODULE_197___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gis.json */ "./tufts/localJson/grc/grc-tufts-gis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_gin_json__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-gin.json */ "./tufts/localJson/grc/grc-tufts-gin.json");
var _tufts_localJson_grc_grc_tufts_gin_json__WEBPACK_IMPORTED_MODULE_198___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-gin.json */ "./tufts/localJson/grc/grc-tufts-gin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_sykis_json__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-sykis.json */ "./tufts/localJson/grc/grc-tufts-sykis.json");
var _tufts_localJson_grc_grc_tufts_sykis_json__WEBPACK_IMPORTED_MODULE_199___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-sykis.json */ "./tufts/localJson/grc/grc-tufts-sykis.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_sykai_json__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-sykai.json */ "./tufts/localJson/grc/grc-tufts-sykai.json");
var _tufts_localJson_grc_grc_tufts_sykai_json__WEBPACK_IMPORTED_MODULE_200___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-sykai.json */ "./tufts/localJson/grc/grc-tufts-sykai.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_mnas_json__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-mnas.json */ "./tufts/localJson/grc/grc-tufts-mnas.json");
var _tufts_localJson_grc_grc_tufts_mnas_json__WEBPACK_IMPORTED_MODULE_201___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-mnas.json */ "./tufts/localJson/grc/grc-tufts-mnas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_mnais_json__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-mnais.json */ "./tufts/localJson/grc/grc-tufts-mnais.json");
var _tufts_localJson_grc_grc_tufts_mnais_json__WEBPACK_IMPORTED_MODULE_202___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-mnais.json */ "./tufts/localJson/grc/grc-tufts-mnais.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ermin_json__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ermin.json */ "./tufts/localJson/grc/grc-tufts-ermin.json");
var _tufts_localJson_grc_grc_tufts_ermin_json__WEBPACK_IMPORTED_MODULE_203___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ermin.json */ "./tufts/localJson/grc/grc-tufts-ermin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_ermas_json__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-ermas.json */ "./tufts/localJson/grc/grc-tufts-ermas.json");
var _tufts_localJson_grc_grc_tufts_ermas_json__WEBPACK_IMPORTED_MODULE_204___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-ermas.json */ "./tufts/localJson/grc/grc-tufts-ermas.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_neo_json__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-neo.json */ "./tufts/localJson/grc/grc-tufts-neo.json");
var _tufts_localJson_grc_grc_tufts_neo_json__WEBPACK_IMPORTED_MODULE_205___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-neo.json */ "./tufts/localJson/grc/grc-tufts-neo.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_neos_json__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-neos.json */ "./tufts/localJson/grc/grc-tufts-neos.json");
var _tufts_localJson_grc_grc_tufts_neos_json__WEBPACK_IMPORTED_MODULE_206___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-neos.json */ "./tufts/localJson/grc/grc-tufts-neos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_leon_json__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-leon.json */ "./tufts/localJson/grc/grc-tufts-leon.json");
var _tufts_localJson_grc_grc_tufts_leon_json__WEBPACK_IMPORTED_MODULE_207___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-leon.json */ "./tufts/localJson/grc/grc-tufts-leon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_leos_json__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-leos.json */ "./tufts/localJson/grc/grc-tufts-leos.json");
var _tufts_localJson_grc_grc_tufts_leos_json__WEBPACK_IMPORTED_MODULE_208___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-leos.json */ "./tufts/localJson/grc/grc-tufts-leos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lago_json__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lago.json */ "./tufts/localJson/grc/grc-tufts-lago.json");
var _tufts_localJson_grc_grc_tufts_lago_json__WEBPACK_IMPORTED_MODULE_209___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lago.json */ "./tufts/localJson/grc/grc-tufts-lago.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_lagos_json__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-lagos.json */ "./tufts/localJson/grc/grc-tufts-lagos.json");
var _tufts_localJson_grc_grc_tufts_lagos_json__WEBPACK_IMPORTED_MODULE_210___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-lagos.json */ "./tufts/localJson/grc/grc-tufts-lagos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eos_json__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eos.json */ "./tufts/localJson/grc/grc-tufts-eos.json");
var _tufts_localJson_grc_grc_tufts_eos_json__WEBPACK_IMPORTED_MODULE_211___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eos.json */ "./tufts/localJson/grc/grc-tufts-eos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_eo_json__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-eo.json */ "./tufts/localJson/grc/grc-tufts-eo.json");
var _tufts_localJson_grc_grc_tufts_eo_json__WEBPACK_IMPORTED_MODULE_212___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-eo.json */ "./tufts/localJson/grc/grc-tufts-eo.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aidous_json__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aidous.json */ "./tufts/localJson/grc/grc-tufts-aidous.json");
var _tufts_localJson_grc_grc_tufts_aidous_json__WEBPACK_IMPORTED_MODULE_213___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aidous.json */ "./tufts/localJson/grc/grc-tufts-aidous.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_aidos_json__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-aidos.json */ "./tufts/localJson/grc/grc-tufts-aidos.json");
var _tufts_localJson_grc_grc_tufts_aidos_json__WEBPACK_IMPORTED_MODULE_214___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-aidos.json */ "./tufts/localJson/grc/grc-tufts-aidos.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_iroa_json__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-iroa.json */ "./tufts/localJson/grc/grc-tufts-iroa.json");
var _tufts_localJson_grc_grc_tufts_iroa_json__WEBPACK_IMPORTED_MODULE_215___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-iroa.json */ "./tufts/localJson/grc/grc-tufts-iroa.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_iroon_json__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-iroon.json */ "./tufts/localJson/grc/grc-tufts-iroon.json");
var _tufts_localJson_grc_grc_tufts_iroon_json__WEBPACK_IMPORTED_MODULE_216___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-iroon.json */ "./tufts/localJson/grc/grc-tufts-iroon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axiou_json__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axiou.json */ "./tufts/localJson/grc/grc-tufts-axiou.json");
var _tufts_localJson_grc_grc_tufts_axiou_json__WEBPACK_IMPORTED_MODULE_217___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axiou.json */ "./tufts/localJson/grc/grc-tufts-axiou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axioin_json__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axioin.json */ "./tufts/localJson/grc/grc-tufts-axioin.json");
var _tufts_localJson_grc_grc_tufts_axioin_json__WEBPACK_IMPORTED_MODULE_218___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axioin.json */ "./tufts/localJson/grc/grc-tufts-axioin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axious_json__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axious.json */ "./tufts/localJson/grc/grc-tufts-axious.json");
var _tufts_localJson_grc_grc_tufts_axious_json__WEBPACK_IMPORTED_MODULE_219___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axious.json */ "./tufts/localJson/grc/grc-tufts-axious.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axian_json__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axian.json */ "./tufts/localJson/grc/grc-tufts-axian.json");
var _tufts_localJson_grc_grc_tufts_axian_json__WEBPACK_IMPORTED_MODULE_220___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axian.json */ "./tufts/localJson/grc/grc-tufts-axian.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axion_json__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axion.json */ "./tufts/localJson/grc/grc-tufts-axion.json");
var _tufts_localJson_grc_grc_tufts_axion_json__WEBPACK_IMPORTED_MODULE_221___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axion.json */ "./tufts/localJson/grc/grc-tufts-axion.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axio_json__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axio.json */ "./tufts/localJson/grc/grc-tufts-axio.json");
var _tufts_localJson_grc_grc_tufts_axio_json__WEBPACK_IMPORTED_MODULE_222___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axio.json */ "./tufts/localJson/grc/grc-tufts-axio.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_axiois_json__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-axiois.json */ "./tufts/localJson/grc/grc-tufts-axiois.json");
var _tufts_localJson_grc_grc_tufts_axiois_json__WEBPACK_IMPORTED_MODULE_223___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-axiois.json */ "./tufts/localJson/grc/grc-tufts-axiois.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agathou_json__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agathou.json */ "./tufts/localJson/grc/grc-tufts-agathou.json");
var _tufts_localJson_grc_grc_tufts_agathou_json__WEBPACK_IMPORTED_MODULE_224___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agathou.json */ "./tufts/localJson/grc/grc-tufts-agathou.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agathoin_json__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agathoin.json */ "./tufts/localJson/grc/grc-tufts-agathoin.json");
var _tufts_localJson_grc_grc_tufts_agathoin_json__WEBPACK_IMPORTED_MODULE_225___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agathoin.json */ "./tufts/localJson/grc/grc-tufts-agathoin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agathin_json__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agathin.json */ "./tufts/localJson/grc/grc-tufts-agathin.json");
var _tufts_localJson_grc_grc_tufts_agathin_json__WEBPACK_IMPORTED_MODULE_226___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agathin.json */ "./tufts/localJson/grc/grc-tufts-agathin.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agathon_json__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agathon.json */ "./tufts/localJson/grc/grc-tufts-agathon.json");
var _tufts_localJson_grc_grc_tufts_agathon_json__WEBPACK_IMPORTED_MODULE_227___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agathon.json */ "./tufts/localJson/grc/grc-tufts-agathon.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agatho_json__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agatho.json */ "./tufts/localJson/grc/grc-tufts-agatho.json");
var _tufts_localJson_grc_grc_tufts_agatho_json__WEBPACK_IMPORTED_MODULE_228___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agatho.json */ "./tufts/localJson/grc/grc-tufts-agatho.json", 1);
/* harmony import */ var _tufts_localJson_grc_grc_tufts_agatha_json__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! @/tufts/localJson/grc/grc-tufts-agatha.json */ "./tufts/localJson/grc/grc-tufts-agatha.json");
var _tufts_localJson_grc_grc_tufts_agatha_json__WEBPACK_IMPORTED_MODULE_229___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/grc/grc-tufts-agatha.json */ "./tufts/localJson/grc/grc-tufts-agatha.json", 1);


















































































































































































































































































class GrcTuftsFixture {
  static get library () {
    return {
      default: _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'ἐλῴην': _tufts_localJson_grc_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_1__,
      'οὐδεμία': _tufts_localJson_grc_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_2__,
      'δέδια': _tufts_localJson_grc_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_3__,
      'δεδίῃ': _tufts_localJson_grc_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_4__,
      'δεδίητον': _tufts_localJson_grc_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_5__,
      'δεδίητε': _tufts_localJson_grc_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_6__,
      'δέδιμεν': _tufts_localJson_grc_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_7__,
      'δέδιτε': _tufts_localJson_grc_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_8__,
      'ἐδεδίειν': _tufts_localJson_grc_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_9__,
      'οἶδα': _tufts_localJson_grc_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_10__,
      'φῶ': _tufts_localJson_grc_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_11__,
      'φῇς': _tufts_localJson_grc_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_12__,
      'φῆτε': _tufts_localJson_grc_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_13__,
      'φαίη': _tufts_localJson_grc_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_14__,
      'φαῖμεν': _tufts_localJson_grc_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_15__,
      'φαῖεν': _tufts_localJson_grc_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_16__,
      'ἔθετο': _tufts_localJson_grc_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_17__,
      'δύναμαι': _tufts_localJson_grc_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_18__,
      'ἐπίσταμαι': _tufts_localJson_grc_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_19__,
      'ποιῶ': _tufts_localJson_grc_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_20__,
      'ποιοῦμεν': _tufts_localJson_grc_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_21__,
      'πλεῖ': _tufts_localJson_grc_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_22__,
      'οἷ': _tufts_localJson_grc_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_23__,
      'οἵ': _tufts_localJson_grc_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_24__,
      'οἱ': _tufts_localJson_grc_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_25__,
      'πρόσφυμα': _tufts_localJson_grc_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_26__,
      'Καλυψώ': _tufts_localJson_grc_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_27__,
      'πᾶσι': _tufts_localJson_grc_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_28__,
      'αὐτὴν': _tufts_localJson_grc_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_29__,
      'φυήν': _tufts_localJson_grc_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_32__,
      'τις': _tufts_localJson_grc_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_33__,
      'ὅδε': _tufts_localJson_grc_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_34__,
      'αὑτῶν': _tufts_localJson_grc_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_30__,
      'τοὺς': _tufts_localJson_grc_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_35__,
      'αὐτοῖς': _tufts_localJson_grc_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_31__,
      'δύο': _tufts_localJson_grc_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_36__,
      'βουλεύῃς': _tufts_localJson_grc_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_37__,
      'βουλευέσθων': _tufts_localJson_grc_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_38__,
      'βουλεύσω': _tufts_localJson_grc_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_39__,
      'ἀγάγοις': _tufts_localJson_grc_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_40__,
      'ἀγαγοῦ': _tufts_localJson_grc_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_41__,
      'βουλευθῇς': _tufts_localJson_grc_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_42__,
      'λελοίπῃ': _tufts_localJson_grc_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_43__,
      'γέγραψαι': _tufts_localJson_grc_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_44__,
      'μεμνῶμαι': _tufts_localJson_grc_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_45__,
      'ἐγέγραψο': _tufts_localJson_grc_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_46__,
      'τεθνήξεις': _tufts_localJson_grc_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_47__,
      'ἕσταθι': _tufts_localJson_grc_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_48__,
      'τέθνατον': _tufts_localJson_grc_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_49__,
      'ποιεῖτον': _tufts_localJson_grc_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_50__,
      'ἔπλει': _tufts_localJson_grc_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_51__,
      'ἐποιοῦ': _tufts_localJson_grc_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_52__,
      'ἐδέοντο': _tufts_localJson_grc_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_53__,
      'ὁρᾷς': _tufts_localJson_grc_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_54__,
      'χρῷμεν': _tufts_localJson_grc_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_55__,
      'ἑωρᾶσθον': _tufts_localJson_grc_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_56__,
      'χρῷντο': _tufts_localJson_grc_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_57__,
      'δηλοῖς': _tufts_localJson_grc_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_58__,
      'δηλοῦσθον': _tufts_localJson_grc_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_59__,
      'ἐτιθέτην': _tufts_localJson_grc_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_60__,
      'τιθέσθων': _tufts_localJson_grc_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_61__,
      'ἔθεσαν': _tufts_localJson_grc_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_62__,
      'ἐθέμεθα': _tufts_localJson_grc_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_63__,
      'ἵην': _tufts_localJson_grc_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_64__,
      'ἵεσθον': _tufts_localJson_grc_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_65__,
      'διδῷ': _tufts_localJson_grc_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_66__,
      'διδοῖο': _tufts_localJson_grc_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_67__,
      'ἔδοτον': _tufts_localJson_grc_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_68__,
      'δῶται': _tufts_localJson_grc_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_69__,
      'ἱστάτην': _tufts_localJson_grc_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_70__,
      'ἵσταται': _tufts_localJson_grc_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_71__,
      'ἐστήτην': _tufts_localJson_grc_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_72__,
      'ἐδύνατο': _tufts_localJson_grc_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_73__,
      'ἐπίστησθε': _tufts_localJson_grc_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_74__,
      'ἐδείκνῠτε': _tufts_localJson_grc_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_75__,
      'δείκνῠται': _tufts_localJson_grc_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_76__,
      'ἔστων': _tufts_localJson_grc_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_77__,
      'ἴτων': _tufts_localJson_grc_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_78__,
      'φαίης': _tufts_localJson_grc_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_79__,
      'βήτω': _tufts_localJson_grc_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_80__,
      'γνῶτον': _tufts_localJson_grc_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_81__,
      'δῦθι': _tufts_localJson_grc_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_82__,
      'ᾔδεις': _tufts_localJson_grc_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_83__,
      'ἄγοντος': _tufts_localJson_grc_grc_tufts_agontos_json__WEBPACK_IMPORTED_MODULE_84__,
      'μενοῦν': _tufts_localJson_grc_grc_tufts_menoun_json__WEBPACK_IMPORTED_MODULE_85__,
      'ὁρώσᾱ': _tufts_localJson_grc_grc_tufts_orosa_json__WEBPACK_IMPORTED_MODULE_86__,
      'λιπόν': _tufts_localJson_grc_grc_tufts_lipon_json__WEBPACK_IMPORTED_MODULE_87__,
      'ἱστάντε': _tufts_localJson_grc_grc_tufts_istante_json__WEBPACK_IMPORTED_MODULE_88__,
      'λύσαντᾰ': _tufts_localJson_grc_grc_tufts_lysanta_json__WEBPACK_IMPORTED_MODULE_89__,
      'λυθέντος': _tufts_localJson_grc_grc_tufts_lythentos_json__WEBPACK_IMPORTED_MODULE_90__,
      'διδόντοιν': _tufts_localJson_grc_grc_tufts_didontoin_json__WEBPACK_IMPORTED_MODULE_91__,
      'δεικνύντᾰ': _tufts_localJson_grc_grc_tufts_deiknynta_json__WEBPACK_IMPORTED_MODULE_92__,
      'λελοιπότων': _tufts_localJson_grc_grc_tufts_leloipoton_json__WEBPACK_IMPORTED_MODULE_93__,
      'ἑστῶσαι': _tufts_localJson_grc_grc_tufts_estosai_json__WEBPACK_IMPORTED_MODULE_94__,
      'πεμπομένους': _tufts_localJson_grc_grc_tufts_pempomenous_json__WEBPACK_IMPORTED_MODULE_95__,
      'γεγραμμένοιν': _tufts_localJson_grc_grc_tufts_gegrammenoin_json__WEBPACK_IMPORTED_MODULE_96__,
      'ζώνη': _tufts_localJson_grc_grc_tufts_zoni_json__WEBPACK_IMPORTED_MODULE_97__,
      'συνδέει': _tufts_localJson_grc_grc_tufts_syndeei_json__WEBPACK_IMPORTED_MODULE_98__,
      'με': _tufts_localJson_grc_grc_tufts_me_json__WEBPACK_IMPORTED_MODULE_99__,
      'συνεχής': _tufts_localJson_grc_grc_tufts_synechis_json__WEBPACK_IMPORTED_MODULE_100__,
      'ταῖν': _tufts_localJson_grc_grc_tufts_tain_json__WEBPACK_IMPORTED_MODULE_101__,
      'ἐμαυτοῦ': _tufts_localJson_grc_grc_tufts_emaftou_json__WEBPACK_IMPORTED_MODULE_102__,
      'ἄγων': _tufts_localJson_grc_grc_tufts_agon_json__WEBPACK_IMPORTED_MODULE_103__,
      'ἄνθρωπος': _tufts_localJson_grc_grc_tufts_anthropos_json__WEBPACK_IMPORTED_MODULE_104__,
      'ἑστάτην': _tufts_localJson_grc_grc_tufts_estatin_json__WEBPACK_IMPORTED_MODULE_105__,
      'λελύσθαι': _tufts_localJson_grc_grc_tufts_lelysthai_json__WEBPACK_IMPORTED_MODULE_106__,
      'ἐλελύκη': _tufts_localJson_grc_grc_tufts_elelyki_json__WEBPACK_IMPORTED_MODULE_107__,
      'ἀγάγηται': _tufts_localJson_grc_grc_tufts_agagitai_json__WEBPACK_IMPORTED_MODULE_108__,
      
      'ἐβουλεύθην': _tufts_localJson_grc_grc_tufts_evolefthin_json__WEBPACK_IMPORTED_MODULE_109__,
      'βουλευθῶ': _tufts_localJson_grc_grc_tufts_vouleftho_json__WEBPACK_IMPORTED_MODULE_110__,
      'βουλευθείην': _tufts_localJson_grc_grc_tufts_vouleftheiin_json__WEBPACK_IMPORTED_MODULE_111__,
      'ἐγράφην': _tufts_localJson_grc_grc_tufts_egrafin_json__WEBPACK_IMPORTED_MODULE_112__,
      'οἰστροδόνου': _tufts_localJson_grc_grc_tufts_oistrodonou_json__WEBPACK_IMPORTED_MODULE_113__,

      'ἔργον': _tufts_localJson_grc_grc_tufts_ergon_json__WEBPACK_IMPORTED_MODULE_114__,

      'χώρᾱς': _tufts_localJson_grc_grc_tufts_choras_json__WEBPACK_IMPORTED_MODULE_115__,
      'χώραιν': _tufts_localJson_grc_grc_tufts_chorain_json__WEBPACK_IMPORTED_MODULE_116__,
      'γνωμῶν': _tufts_localJson_grc_grc_tufts_gnomon_json__WEBPACK_IMPORTED_MODULE_117__,
      'γνώμην': _tufts_localJson_grc_grc_tufts_gnomin_json__WEBPACK_IMPORTED_MODULE_118__,

      'ὑγιείᾳ': _tufts_localJson_grc_grc_tufts_ygieia_json__WEBPACK_IMPORTED_MODULE_119__,
      'ὑγιείαιν': _tufts_localJson_grc_grc_tufts_ygieiain_json__WEBPACK_IMPORTED_MODULE_120__,
      'θάλαττᾰν': _tufts_localJson_grc_grc_tufts_thalattan_json__WEBPACK_IMPORTED_MODULE_121__,
      'θαλάττᾱς': _tufts_localJson_grc_grc_tufts_thalattas_json__WEBPACK_IMPORTED_MODULE_122__,

      'νεανίου': _tufts_localJson_grc_grc_tufts_neaniou_json__WEBPACK_IMPORTED_MODULE_123__,
      'νεανίαιν': _tufts_localJson_grc_grc_tufts_neaniain_json__WEBPACK_IMPORTED_MODULE_124__,
      'στρατιώτην': _tufts_localJson_grc_grc_tufts_stratiotin_json__WEBPACK_IMPORTED_MODULE_125__,
      'στρατιώταις': _tufts_localJson_grc_grc_tufts_stratiotais_json__WEBPACK_IMPORTED_MODULE_126__,
      
      'ξηρή': _tufts_localJson_grc_grc_tufts_xiri_json__WEBPACK_IMPORTED_MODULE_127__,

      'κλώψ': _tufts_localJson_grc_grc_tufts_klops_json__WEBPACK_IMPORTED_MODULE_128__,
      'κλῶπε': _tufts_localJson_grc_grc_tufts_klope_json__WEBPACK_IMPORTED_MODULE_129__,
      'φυλάκων': _tufts_localJson_grc_grc_tufts_fylakon_json__WEBPACK_IMPORTED_MODULE_130__,
      'φύλαξ': _tufts_localJson_grc_grc_tufts_fylax_json__WEBPACK_IMPORTED_MODULE_131__,

      'χάρις': _tufts_localJson_grc_grc_tufts_charis_json__WEBPACK_IMPORTED_MODULE_132__,
      'χάριτες': _tufts_localJson_grc_grc_tufts_charites_json__WEBPACK_IMPORTED_MODULE_133__,
      'ἀσπίδοιν': _tufts_localJson_grc_grc_tufts_aspidoin_json__WEBPACK_IMPORTED_MODULE_134__,
      'ἀσπίδᾰς': _tufts_localJson_grc_grc_tufts_aspidas_json__WEBPACK_IMPORTED_MODULE_135__,
      'Ἑλλάδᾰ': _tufts_localJson_grc_grc_tufts_ellada_json__WEBPACK_IMPORTED_MODULE_136__,
      'Ἑλλάδοιν': _tufts_localJson_grc_grc_tufts_elladoin_json__WEBPACK_IMPORTED_MODULE_137__,

      'γέροντος': _tufts_localJson_grc_grc_tufts_gerontos_json__WEBPACK_IMPORTED_MODULE_138__,
      'γερόντων': _tufts_localJson_grc_grc_tufts_geronton_json__WEBPACK_IMPORTED_MODULE_139__,
      'γίγαντᾰ': _tufts_localJson_grc_grc_tufts_giganta_json__WEBPACK_IMPORTED_MODULE_140__,
      'γιγάντων': _tufts_localJson_grc_grc_tufts_giganton_json__WEBPACK_IMPORTED_MODULE_141__,
      'ὀδόντοιν': _tufts_localJson_grc_grc_tufts_odontoin_json__WEBPACK_IMPORTED_MODULE_142__,
      'ὀδόντος': _tufts_localJson_grc_grc_tufts_odontos_json__WEBPACK_IMPORTED_MODULE_143__,

      'πράγματος': _tufts_localJson_grc_grc_tufts_pragmatos_json__WEBPACK_IMPORTED_MODULE_144__,
      'πραγμάτοιν': _tufts_localJson_grc_grc_tufts_pragmatoin_json__WEBPACK_IMPORTED_MODULE_145__,
      'τέρατι': _tufts_localJson_grc_grc_tufts_terati_json__WEBPACK_IMPORTED_MODULE_146__,
      'τεράτων': _tufts_localJson_grc_grc_tufts_teraton_json__WEBPACK_IMPORTED_MODULE_147__,

      'ῥήτορος': _tufts_localJson_grc_grc_tufts_ritoros_json__WEBPACK_IMPORTED_MODULE_148__,
      'ῥήτορες': _tufts_localJson_grc_grc_tufts_ritores_json__WEBPACK_IMPORTED_MODULE_149__,
      'δαῖμον': _tufts_localJson_grc_grc_tufts_daimon_json__WEBPACK_IMPORTED_MODULE_150__,
      'δαίμονᾰς': _tufts_localJson_grc_grc_tufts_daimonas_json__WEBPACK_IMPORTED_MODULE_151__,
      'ἀγῶνᾰ': _tufts_localJson_grc_grc_tufts_agona_json__WEBPACK_IMPORTED_MODULE_152__,
      'ἀγώνων': _tufts_localJson_grc_grc_tufts_agonon_json__WEBPACK_IMPORTED_MODULE_153__,
      'ἁλί': _tufts_localJson_grc_grc_tufts_ali_json__WEBPACK_IMPORTED_MODULE_154__,
      'ἁλοῖν': _tufts_localJson_grc_grc_tufts_aloin_json__WEBPACK_IMPORTED_MODULE_155__,

      'πατρί': _tufts_localJson_grc_grc_tufts_patri_json__WEBPACK_IMPORTED_MODULE_156__,
      'πατέροιν': _tufts_localJson_grc_grc_tufts_pateroin_json__WEBPACK_IMPORTED_MODULE_157__,
      'μητέρᾰ': _tufts_localJson_grc_grc_tufts_mitera_json__WEBPACK_IMPORTED_MODULE_158__,
      'μητέρων': _tufts_localJson_grc_grc_tufts_miteron_json__WEBPACK_IMPORTED_MODULE_159__,
      'θυγατέρᾰ': _tufts_localJson_grc_grc_tufts_thygatera_json__WEBPACK_IMPORTED_MODULE_160__,
      'θυγατέροιν': _tufts_localJson_grc_grc_tufts_thygateroin_json__WEBPACK_IMPORTED_MODULE_161__,
      'ἀνδρί': _tufts_localJson_grc_grc_tufts_andri_json__WEBPACK_IMPORTED_MODULE_162__,
      'ἀνδρῶν': _tufts_localJson_grc_grc_tufts_andron_json__WEBPACK_IMPORTED_MODULE_163__,

      'τριήρους': _tufts_localJson_grc_grc_tufts_triirous_json__WEBPACK_IMPORTED_MODULE_164__,
      'τριήρεις': _tufts_localJson_grc_grc_tufts_triireis_json__WEBPACK_IMPORTED_MODULE_165__,
      'γένει': _tufts_localJson_grc_grc_tufts_genei_json__WEBPACK_IMPORTED_MODULE_166__,
      'γένη': _tufts_localJson_grc_grc_tufts_geni_json__WEBPACK_IMPORTED_MODULE_167__,
      'γέρᾱ': _tufts_localJson_grc_grc_tufts_gera_json__WEBPACK_IMPORTED_MODULE_168__,
      'γερῶν': _tufts_localJson_grc_grc_tufts_geron_json__WEBPACK_IMPORTED_MODULE_169__,

      'γυναικί': _tufts_localJson_grc_grc_tufts_gynaiki_json__WEBPACK_IMPORTED_MODULE_170__,
      'γυναῖκας': _tufts_localJson_grc_grc_tufts_gynaikas_json__WEBPACK_IMPORTED_MODULE_171__,
      'χεῖρε': _tufts_localJson_grc_grc_tufts_cheire_json__WEBPACK_IMPORTED_MODULE_172__,
      'χεῖρᾰς': _tufts_localJson_grc_grc_tufts_cheiras_json__WEBPACK_IMPORTED_MODULE_173__,
      'ὑέος': _tufts_localJson_grc_grc_tufts_yeos_json__WEBPACK_IMPORTED_MODULE_174__,
      'υἱέος': _tufts_localJson_grc_grc_tufts_yieos_json__WEBPACK_IMPORTED_MODULE_175__,
      'υἱοῖν': _tufts_localJson_grc_grc_tufts_yioin_json__WEBPACK_IMPORTED_MODULE_176__,

      'πόλεως': _tufts_localJson_grc_grc_tufts_poleos_json__WEBPACK_IMPORTED_MODULE_177__,
      'πολέοιν': _tufts_localJson_grc_grc_tufts_poleoin_json__WEBPACK_IMPORTED_MODULE_178__,
      'πῆχυν': _tufts_localJson_grc_grc_tufts_pichyn_json__WEBPACK_IMPORTED_MODULE_179__,
      'πήχεων': _tufts_localJson_grc_grc_tufts_picheon_json__WEBPACK_IMPORTED_MODULE_180__,
      'ἄστει': _tufts_localJson_grc_grc_tufts_astei_json__WEBPACK_IMPORTED_MODULE_181__,
      'ἄστεων': _tufts_localJson_grc_grc_tufts_asteon_json__WEBPACK_IMPORTED_MODULE_182__,
      'ἰχθύος': _tufts_localJson_grc_grc_tufts_ichthyos_json__WEBPACK_IMPORTED_MODULE_183__,
      'ἰχθύες': _tufts_localJson_grc_grc_tufts_ichthyes_json__WEBPACK_IMPORTED_MODULE_184__,

      'ἱππέως': _tufts_localJson_grc_grc_tufts_ippeos_json__WEBPACK_IMPORTED_MODULE_185__,
      'ἱππέοιν': _tufts_localJson_grc_grc_tufts_ippeoin_json__WEBPACK_IMPORTED_MODULE_186__,
      'γραῦν': _tufts_localJson_grc_grc_tufts_gravn_json__WEBPACK_IMPORTED_MODULE_187__,
      'γρᾱοῖν': _tufts_localJson_grc_grc_tufts_graoin_json__WEBPACK_IMPORTED_MODULE_188__,
      'ναῦν': _tufts_localJson_grc_grc_tufts_navn_json__WEBPACK_IMPORTED_MODULE_189__,
      'νεῶν': _tufts_localJson_grc_grc_tufts_neon_json__WEBPACK_IMPORTED_MODULE_190__,
      'βοῦν': _tufts_localJson_grc_grc_tufts_voun_json__WEBPACK_IMPORTED_MODULE_191__,
      'βοῶν': _tufts_localJson_grc_grc_tufts_voon_json__WEBPACK_IMPORTED_MODULE_192__,

      'νοῦ': _tufts_localJson_grc_grc_tufts_nou_json__WEBPACK_IMPORTED_MODULE_193__,
      'νοῖν': _tufts_localJson_grc_grc_tufts_noin_json__WEBPACK_IMPORTED_MODULE_194__,
      'κανοῦ': _tufts_localJson_grc_grc_tufts_kanou_json__WEBPACK_IMPORTED_MODULE_195__,
      'κανοῖν': _tufts_localJson_grc_grc_tufts_kanoin_json__WEBPACK_IMPORTED_MODULE_196__,

      'γῆς': _tufts_localJson_grc_grc_tufts_gis_json__WEBPACK_IMPORTED_MODULE_197__,
      'γῆν': _tufts_localJson_grc_grc_tufts_gin_json__WEBPACK_IMPORTED_MODULE_198__,
      'συκῆς': _tufts_localJson_grc_grc_tufts_sykis_json__WEBPACK_IMPORTED_MODULE_199__,
      'συκαῖ': _tufts_localJson_grc_grc_tufts_sykai_json__WEBPACK_IMPORTED_MODULE_200__,
      'μνᾶς': _tufts_localJson_grc_grc_tufts_mnas_json__WEBPACK_IMPORTED_MODULE_201__,
      'μναῖς': _tufts_localJson_grc_grc_tufts_mnais_json__WEBPACK_IMPORTED_MODULE_202__,
      'Ἑρμῆν': _tufts_localJson_grc_grc_tufts_ermin_json__WEBPACK_IMPORTED_MODULE_203__,
      'Ἑρμᾶς': _tufts_localJson_grc_grc_tufts_ermas_json__WEBPACK_IMPORTED_MODULE_204__,

      'νεώ': _tufts_localJson_grc_grc_tufts_neo_json__WEBPACK_IMPORTED_MODULE_205__,
      'νεῴς': _tufts_localJson_grc_grc_tufts_neos_json__WEBPACK_IMPORTED_MODULE_206__,
      'λεών': _tufts_localJson_grc_grc_tufts_leon_json__WEBPACK_IMPORTED_MODULE_207__,
      'λεώς': _tufts_localJson_grc_grc_tufts_leos_json__WEBPACK_IMPORTED_MODULE_208__,
      'λαγώ': _tufts_localJson_grc_grc_tufts_lago_json__WEBPACK_IMPORTED_MODULE_209__,
      'λαγώς': _tufts_localJson_grc_grc_tufts_lagos_json__WEBPACK_IMPORTED_MODULE_210__,

      'ἕως': _tufts_localJson_grc_grc_tufts_eos_json__WEBPACK_IMPORTED_MODULE_211__,
      'ἕω': _tufts_localJson_grc_grc_tufts_eo_json__WEBPACK_IMPORTED_MODULE_212__,

      'αἰδοῦς': _tufts_localJson_grc_grc_tufts_aidous_json__WEBPACK_IMPORTED_MODULE_213__,
      'αἰδώς': _tufts_localJson_grc_grc_tufts_aidos_json__WEBPACK_IMPORTED_MODULE_214__,
      'ἥρωᾰ': _tufts_localJson_grc_grc_tufts_iroa_json__WEBPACK_IMPORTED_MODULE_215__,
      'ἡρώων': _tufts_localJson_grc_grc_tufts_iroon_json__WEBPACK_IMPORTED_MODULE_216__,

      'ἀξίου': _tufts_localJson_grc_grc_tufts_axiou_json__WEBPACK_IMPORTED_MODULE_217__,
      'ἀξίοιν': _tufts_localJson_grc_grc_tufts_axioin_json__WEBPACK_IMPORTED_MODULE_218__,
      'ἀξίους': _tufts_localJson_grc_grc_tufts_axious_json__WEBPACK_IMPORTED_MODULE_219__,

      'ἀξίᾱν': _tufts_localJson_grc_grc_tufts_axian_json__WEBPACK_IMPORTED_MODULE_220__,
      'ἀξίων': _tufts_localJson_grc_grc_tufts_axion_json__WEBPACK_IMPORTED_MODULE_221__,

      'ἀξίω': _tufts_localJson_grc_grc_tufts_axio_json__WEBPACK_IMPORTED_MODULE_222__,
      'ἀξίοις': _tufts_localJson_grc_grc_tufts_axiois_json__WEBPACK_IMPORTED_MODULE_223__,

      'ἀγαθοῦ': _tufts_localJson_grc_grc_tufts_agathou_json__WEBPACK_IMPORTED_MODULE_224__,
      'ἀγαθοῖν': _tufts_localJson_grc_grc_tufts_agathoin_json__WEBPACK_IMPORTED_MODULE_225__,

      'ἀγαθήν': _tufts_localJson_grc_grc_tufts_agathin_json__WEBPACK_IMPORTED_MODULE_226__,
      'ἀγαθῶν': _tufts_localJson_grc_grc_tufts_agathon_json__WEBPACK_IMPORTED_MODULE_227__,

      'ἀγαθῷ': _tufts_localJson_grc_grc_tufts_agatho_json__WEBPACK_IMPORTED_MODULE_228__,
      'ἀγαθά': _tufts_localJson_grc_grc_tufts_agatha_json__WEBPACK_IMPORTED_MODULE_229__
    }
  }
}

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aftin.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aftin.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὐτὴν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:20:39.422140\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὐτὴν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210311448\"},\"Body\":{\"about\":\"urn:uuid:idm140440210311448\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αὐτός\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"art_adj\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aftois.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aftois.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὐτοῖς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:27:56.411380\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὐτοῖς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429850608\"},\"Body\":{\"about\":\"urn:uuid:idm140154429850608\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αὐτός\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-afton.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-afton.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὑτῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:25:40.255844\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὑτῶν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430426816\"},\"Body\":{\"about\":\"urn:uuid:idm140154430426816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἑαυτοῦ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agagitai.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agagitai.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγάγηται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-17T07:36:33.375938\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγάγηται\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102669828000\"},\"Body\":{\"about\":\"urn:uuid:idm140102669828000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαγ\"},\"suff\":{\"$\":\"ηται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agagois.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agagois.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγάγοις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:50:08.175773\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγάγοις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432926000\"},\"Body\":{\"about\":\"urn:uuid:idm140154432926000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαγ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agagou.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agagou.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαγοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:51:21.711723\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαγοῦ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208241112\"},\"Body\":{\"about\":\"urn:uuid:idm140440208241112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαγ\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"contr redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agatha.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agatha.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθά:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:20:58.626511\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθά\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667615232\"},\"Body\":{\"about\":\"urn:uuid:idm140102667615232\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"α\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"α\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"α\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agathin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agathin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθήν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:11:53.289822\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθήν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090966955816\"},\"Body\":{\"about\":\"urn:uuid:idm140090966955816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"os_h_on\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agatho.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agatho.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθῷ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:25:57.828342\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθῷ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968367528\"},\"Body\":{\"about\":\"urn:uuid:idm140090968367528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῳ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῳ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agathoin.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agathoin.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:07:02.309153\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθοῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969124008\"},\"Body\":{\"about\":\"urn:uuid:idm140090969124008\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agathon.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agathon.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:11:57.873714\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθῶν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666855296\"},{\"resource\":\"urn:uuid:idm140102667697824\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666855296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140102667697824\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agathou.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agathou.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαθοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T06:06:57.731953\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαθοῦ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666539968\"},{\"resource\":\"urn:uuid:idm140102670421856\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666539968\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140102670421856\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγαθόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαθ\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agon.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agon.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἄγων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-09T02:31:04.968741\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἄγων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090967136728\"},{\"resource\":\"urn:uuid:idm140090968507832\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090967136728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}},{\"about\":\"urn:uuid:idm140090968507832\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agona.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agona.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγῶνᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:44:56.375475\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγῶνᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670144544\"},\"Body\":{\"about\":\"urn:uuid:idm140102670144544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγών\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγω\"},\"suff\":{\"$\":\"να\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"n_nos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agonon.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agonon.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγώνων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:45:01.795949\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγώνων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968205976\"},{\"resource\":\"urn:uuid:idm140090966528328\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968205976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγωνος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγων\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγων\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγων\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_on\"}}]}}},{\"about\":\"urn:uuid:idm140090966528328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀγών\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγω\"},\"suff\":{\"$\":\"νων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"n_nos\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-agontos.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-agontos.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἄγοντος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:20:30.418422\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἄγοντος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212857528\"},\"Body\":{\"about\":\"urn:uuid:idm140440212857528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aidos.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aidos.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αἰδώς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T11:19:20.703088\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αἰδώς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971441912\"},\"Body\":{\"about\":\"urn:uuid:idm140090971441912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αἰδώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ws_oos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aidous.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aidous.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αἰδοῦς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T11:19:15.083024\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αἰδοῦς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090967839176\"},{\"resource\":\"urn:uuid:idm140090967839528\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090967839176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αἰδώ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"w_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"w_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"w_oos\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140090967839528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αἰδώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αἰδ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ali.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ali.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἁλί:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:45:08.947184\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἁλί\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102673007472\"},{\"resource\":\"urn:uuid:idm140102673077248\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102673007472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἅλς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλί\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλί\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140102673077248\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἁλίς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλ\"},\"suff\":{\"$\":\"ι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_idos\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aloin.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aloin.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἁλοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:45:16.329786\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἁλοῖν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102668029104\"},{\"resource\":\"urn:uuid:idm140102670104112\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102668029104\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἅλς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλοῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλοῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλοῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁλοῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140102670104112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἁλής\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἁ̄λ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_es\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-andri.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-andri.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀνδρί:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:30:17.824699\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀνδρί\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090972229976\"},{\"resource\":\"urn:uuid:idm140090972229848\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090972229976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀνδρίς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_idos\"}}}}},{\"about\":\"urn:uuid:idm140090972229848\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀνήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρί\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-andron.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-andron.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀνδρῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:30:22.610474\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀνδρῶν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102670431440\"},{\"resource\":\"urn:uuid:idm140102667478176\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102670431440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀνδρόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"}}]}}},{\"about\":\"urn:uuid:idm140102667478176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀνήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνδρῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-anthropos.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-anthropos.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἄνθρωπος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-16T00:29:23.614818\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἄνθρωπος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102672561200\"},\"Body\":{\"about\":\"urn:uuid:idm140102672561200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄνθρωπος\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀνθρωπ\"},\"suff\":{\"$\":\"ος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_ou\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aspidas.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aspidas.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀσπίδᾰς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:24:48.445793\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀσπίδᾰς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667970576\"},\"Body\":{\"about\":\"urn:uuid:idm140102667970576\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀσπίς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀσπ\"},\"suff\":{\"$\":\"ιδας\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"is_idos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-aspidoin.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-aspidoin.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀσπίδοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:24:27.472349\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀσπίδοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968878488\"},\"Body\":{\"about\":\"urn:uuid:idm140090968878488\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀσπίς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀσπ\"},\"suff\":{\"$\":\"ίδοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"is_idos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀσπ\"},\"suff\":{\"$\":\"ίδοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"is_idos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-astei.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-astei.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἄστει:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:23.703343\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἄστει\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968452712\"},\"Body\":{\"about\":\"urn:uuid:idm140090968452712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄστυ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀστ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"us_ews\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀστ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"us_ews\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀστ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"us_ews\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀστ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"us_ews\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-asteon.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-asteon.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἄστεων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:28.686198\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἄστεων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967545640\"},\"Body\":{\"about\":\"urn:uuid:idm140090967545640\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄστυ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀστ\"},\"suff\":{\"$\":\"εω̆ν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"us_ews\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axian.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axian.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίᾱν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T05:16:04.612934\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίᾱν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102668088976\"},{\"resource\":\"urn:uuid:idm140102670381120\"},{\"resource\":\"urn:uuid:idm140102668241104\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102668088976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}}}},{\"about\":\"urn:uuid:idm140102670381120\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξία\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"h_hs\"}}}}},{\"about\":\"urn:uuid:idm140102668241104\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr unaugmented poetic\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ᾱν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr unaugmented poetic\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axio.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axio.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T05:35:38.574316\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίω\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666628048\"},{\"resource\":\"urn:uuid:idm140102672986464\"},{\"resource\":\"urn:uuid:idm140102666831680\"},{\"resource\":\"urn:uuid:idm140102666309008\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666628048\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140102672986464\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀ̄ξ\"},\"suff\":{\"$\":\"ίω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"numi\"}}}}},{\"about\":\"urn:uuid:idm140102666831680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξ\"},\"suff\":{\"$\":\"ίω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}},{\"about\":\"urn:uuid:idm140102666309008\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented poetic\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axioin.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axioin.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T03:39:54.586052\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666329712\"},\"Body\":{\"about\":\"urn:uuid:idm140102666329712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axiois.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axiois.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίοις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T05:35:45.773883\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίοις\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667334016\"},{\"resource\":\"urn:uuid:idm140102670077872\"},{\"resource\":\"urn:uuid:idm140102667801504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667334016\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140102670077872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀ̄ξ\"},\"suff\":{\"$\":\"ίοις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"numi\"}}}}},{\"about\":\"urn:uuid:idm140102667801504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξ\"},\"suff\":{\"$\":\"ίοις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axion.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axion.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T05:16:10.996040\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666893216\"},{\"resource\":\"urn:uuid:idm140102672809200\"},{\"resource\":\"urn:uuid:idm140102670367248\"},{\"resource\":\"urn:uuid:idm140102670366512\"},{\"resource\":\"urn:uuid:idm140102670371184\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666893216\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140102672809200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀ̄ξ\"},\"suff\":{\"$\":\"ίων\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"numi\"}}}}},{\"about\":\"urn:uuid:idm140102670367248\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξ\"},\"suff\":{\"$\":\"ίων\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}},{\"about\":\"urn:uuid:idm140102670366512\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"iaw_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}},{\"about\":\"urn:uuid:idm140102670371184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axiou.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axiou.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίου:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T03:39:49.584553\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίου\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968730536\"},{\"resource\":\"urn:uuid:idm140090969245624\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968730536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140090969245624\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-axious.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-axious.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀξίους:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-30T03:40:00.517775\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀξίους\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666283024\"},{\"resource\":\"urn:uuid:idm140102666169520\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666283024\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄξιος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_h_on\"}}}}},{\"about\":\"urn:uuid:idm140102666169520\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἀξιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀξι\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-charis.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-charis.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χάρις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:23:30.031701\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χάρις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971487288\"},\"Body\":{\"about\":\"urn:uuid:idm140090971487288\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χάρις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χαρ\"},\"suff\":{\"$\":\"ις\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_itos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-charites.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-charites.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χάριτες:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:23:58.985166\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χάριτες\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667585648\"},\"Body\":{\"about\":\"urn:uuid:idm140102667585648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χάρις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χαρ\"},\"suff\":{\"$\":\"ιτες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"is_itos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χαρ\"},\"suff\":{\"$\":\"ιτες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"is_itos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-cheiras.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-cheiras.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χεῖρᾰς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:23.820194\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χεῖρᾰς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967430392\"},\"Body\":{\"about\":\"urn:uuid:idm140090967430392\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χείρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χεῖρας\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-cheire.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-cheire.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χεῖρε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:18.867679\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χεῖρε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967688104\"},\"Body\":{\"about\":\"urn:uuid:idm140090967688104\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χείρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χεῖρε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χεῖρε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χεῖρε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-chorain.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-chorain.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χώραιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T10:36:00.808268\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χώραιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102665996272\"},\"Body\":{\"about\":\"urn:uuid:idm140102665996272\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χώρα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρ\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"h_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρ\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-choras.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-choras.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χώρᾱς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T10:34:10.410094\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χώρᾱς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667660784\"},{\"resource\":\"urn:uuid:idm140102667145344\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667660784\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χώρα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρ\"},\"suff\":{\"$\":\"ᾱς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"h_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρ\"},\"suff\":{\"$\":\"ᾱς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}},{\"about\":\"urn:uuid:idm140102667145344\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χωρέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρᾱ\"},\"suff\":{\"$\":\"ς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ath_primary\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χωρᾱ\"},\"suff\":{\"$\":\"ς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ath_primary\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"unaugmented poetic\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-chromen.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-chromen.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χρῷμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:16:11.550134\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χρῷμεν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154427589328\"},{\"resource\":\"urn:uuid:idm140154427451312\"},{\"resource\":\"urn:uuid:idm140154428871440\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154427589328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154427451312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154428871440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χραύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"av_stem\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-chronto.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-chronto.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χρῷντο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:19:32.193719\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χρῷντο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432699648\"},{\"resource\":\"urn:uuid:idm140154427548432\"},{\"resource\":\"urn:uuid:idm140154429472656\"},{\"resource\":\"urn:uuid:idm140154429704624\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432699648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140154427548432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429472656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429704624\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χραύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"av_stem\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-daimon.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-daimon.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δαῖμον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:44:45.461521\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δαῖμον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967924184\"},\"Body\":{\"about\":\"urn:uuid:idm140090967924184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δαίμων\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δαιμ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wn_onos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δαιμ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wn_onos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-daimonas.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-daimonas.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δαίμονᾰς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:44:51.141433\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δαίμονᾰς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971943864\"},\"Body\":{\"about\":\"urn:uuid:idm140090971943864\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δαίμων\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δαιμ\"},\"suff\":{\"$\":\"ονας\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"wn_onos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δαιμ\"},\"suff\":{\"$\":\"ονας\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"wn_onos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dedia.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dedia.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδια:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:22:13.524958\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδια\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432607360\"},\"Body\":{\"about\":\"urn:uuid:idm140154432607360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"α\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dedii.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dedii.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίῃ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:23:33.492334\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίῃ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428186848\"},\"Body\":{\"about\":\"urn:uuid:idm140154428186848\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ῃ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dediite.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dediite.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίητε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:26:19.401937\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίητε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212411912\"},\"Body\":{\"about\":\"urn:uuid:idm140440212411912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dediiton.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dediiton.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίητον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:24:50.962931\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίητον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432625488\"},\"Body\":{\"about\":\"urn:uuid:idm140154432625488\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dedimen.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dedimen.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:06:03.122658\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιμεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429856864\"},\"Body\":{\"about\":\"urn:uuid:idm140154429856864\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dedotai.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dedotai.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:29:17.656751\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432801152\"},\"Body\":{\"about\":\"urn:uuid:idm140154432801152\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-deiknynta.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-deiknynta.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεικνύντᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:09:41.207306\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεικνύντᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430092208\"},\"Body\":{\"about\":\"urn:uuid:idm140154430092208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείκνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"ύντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"ύντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"ύντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"ύντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-deiknytai.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-deiknytai.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δείκνῠται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:51:27.831725\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δείκνῠται\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209326664\"},\"Body\":{\"about\":\"urn:uuid:idm140440209326664\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείκνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"υται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dido.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dido.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:διδῷ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:32:21.675001\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:διδῷ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212264136\"},\"Body\":{\"about\":\"urn:uuid:idm140440212264136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"ῷ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-didoio.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-didoio.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:διδοῖο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:33:30.986884\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:διδοῖο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210312472\"},\"Body\":{\"about\":\"urn:uuid:idm140440210312472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"οῖο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-didontoin.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-didontoin.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:διδόντοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:08:04.690374\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:διδόντοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212606360\"},\"Body\":{\"about\":\"urn:uuid:idm140440212606360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dilois.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dilois.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δηλοῖς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:20:55.477614\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δηλοῖς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429480208\"},\"Body\":{\"about\":\"urn:uuid:idm140154429480208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δηλόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dilousthon.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dilousthon.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δηλοῦσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:22:25.769490\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δηλοῦσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209371656\"},\"Body\":{\"about\":\"urn:uuid:idm140440209371656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δηλόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dotai.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dotai.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δῶται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:35:58.637359\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δῶται\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430135632\"},{\"resource\":\"urn:uuid:idm140154429103440\"},{\"resource\":\"urn:uuid:idm140154429948016\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430135632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δ\"},\"suff\":{\"$\":\"ῶται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"omi_aor\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429103440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δώτης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}}]}}},{\"about\":\"urn:uuid:idm140154429948016\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δωτήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dynamai.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dynamai.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δύναμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:57:08.292115\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δύναμαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440217439944\"},\"Body\":{\"about\":\"urn:uuid:idm140440217439944\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύναμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δυν\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dyo.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dyo.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δύο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:29:28.393132\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δύο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210414744\"},\"Body\":{\"about\":\"urn:uuid:idm140440210414744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύο\"},\"pofs\":{\"order\":4,\"$\":\"numeral\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-dythi.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-dythi.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δῦθι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:55:14.862278\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δῦθι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430056160\"},\"Body\":{\"about\":\"urn:uuid:idm140154430056160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δ\"},\"suff\":{\"$\":\"ῡθι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_u_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-edediei.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-edediei.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδεδίειν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:30:49.205284\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδεδίειν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427690976\"},\"Body\":{\"about\":\"urn:uuid:idm140154427690976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δεδι\"},\"suff\":{\"$\":\"ειν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-edeiknyte.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-edeiknyte.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδείκνῠτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:44:31.884169\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδείκνῠτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209977976\"},\"Body\":{\"about\":\"urn:uuid:idm140440209977976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείκνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δεικν\"},\"suff\":{\"$\":\"υτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-edeonto.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-edeonto.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδέοντο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:14:01.828444\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδέοντο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429145728\"},{\"resource\":\"urn:uuid:idm140154427986560\"},{\"resource\":\"urn:uuid:idm140154432330144\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429145728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}}}}},{\"about\":\"urn:uuid:idm140154427986560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"e_stem\"}}}}},{\"about\":\"urn:uuid:idm140154432330144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-edoton.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-edoton.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔδοτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:34:49.315247\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔδοτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432802752\"},\"Body\":{\"about\":\"urn:uuid:idm140154432802752\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"οτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-edynato.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-edynato.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδύνατο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:41:50.693991\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδύνατο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429839808\"},\"Body\":{\"about\":\"urn:uuid:idm140154429839808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύναμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δυν\"},\"suff\":{\"$\":\"ατο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-egegrapso.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-egegrapso.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐγέγραψο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:00:33.787465\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐγέγραψο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209112200\"},\"Body\":{\"about\":\"urn:uuid:idm140440209112200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:γεγρα\"},\"suff\":{\"$\":\"ψο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-egrafin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-egrafin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐγράφην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-21T05:01:42.033766\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐγράφην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666515648\"},\"Body\":{\"about\":\"urn:uuid:idm140102666515648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:γραφ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"dial\":{\"$\":\"epic Doric Aeolic\"},\"stemtype\":{\"$\":\"aor2_pass\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:γραφ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor2_pass\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-elelyki.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-elelyki.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐλελύκη:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-16T11:26:04.583638\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐλελύκη\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666298944\"},\"Body\":{\"about\":\"urn:uuid:idm140102666298944\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:λελυκ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"perf_act\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:λελυκ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"},\"derivtype\":{\"$\":\"reg_conj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ellada.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ellada.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Ἑλλάδᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:25:01.514082\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Ἑλλάδᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969641464\"},\"Body\":{\"about\":\"urn:uuid:idm140090969641464\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Ἑλλάς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑλλα\"},\"suff\":{\"$\":\"δα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"s_dos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-elladoin.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-elladoin.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Ἑλλάδοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T07:25:19.747303\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Ἑλλάδοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102673073472\"},\"Body\":{\"about\":\"urn:uuid:idm140102673073472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Ἑλλάς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑλλα\"},\"suff\":{\"$\":\"δοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"s_dos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑλλα\"},\"suff\":{\"$\":\"δοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"s_dos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eloin.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eloin.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐλῴην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:31:28.810630\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐλῴην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429116000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429116000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐλαύνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr poetic rare\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-emaftou.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-emaftou.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐμαυτοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T04:44:25.806964\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐμαυτοῦ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209663096\"},\"Body\":{\"about\":\"urn:uuid:idm140440209663096\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐμαυτοῦ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐμαυτοῦ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐμαυτοῦ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron1\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eo.json":
/*!***********************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eo.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἕω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T05:03:48.691427\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἕω\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967725112\"},\"Body\":{\"about\":\"urn:uuid:idm140090967725112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἠώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eorasthon.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eorasthon.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἑωρᾶσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:18:20.739432\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἑωρᾶσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209269288\"},\"Body\":{\"about\":\"urn:uuid:idm140440209269288\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁράω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾶσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"syll_augment contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾶσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"syll_augment contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eos.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eos.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἕως:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T05:03:44.163869\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἕως\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102670086592\"},{\"resource\":\"urn:uuid:idm140102667424096\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102670086592\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕως\"},\"pofs\":{\"order\":0,\"$\":\"conjunction\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἕως\"}},\"pofs\":{\"order\":0,\"$\":\"conjunction\"},\"stemtype\":{\"$\":\"conj\"},\"morph\":{\"$\":\"indeclform\"}}}}},{\"about\":\"urn:uuid:idm140102667424096\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἠώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_oos\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-epistamai.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-epistamai.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐπίσταμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:58:27.717321\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐπίσταμαι\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154427992880\"},{\"resource\":\"urn:uuid:idm140154427290336\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154427992880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐφίστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπί:ἱστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"unasp_preverb causal pres_redupl\"}}}}},{\"about\":\"urn:uuid:idm140154427290336\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐπίσταμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπιστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-epististhe.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-epististhe.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐπίστησθε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:43:10.391661\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐπίστησθε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432527696\"},\"Body\":{\"about\":\"urn:uuid:idm140154432527696\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐπίσταμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπιστ\"},\"suff\":{\"$\":\"ησθε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eplei.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eplei.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔπλει:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:08:57.343046\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔπλει\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432403888\"},\"Body\":{\"about\":\"urn:uuid:idm140154432403888\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πλέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-epoiou.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-epoiou.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐποιοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:12:39.248210\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐποιοῦ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209562200\"},{\"resource\":\"urn:uuid:idm140440210087544\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209562200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:ποι\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140440210087544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:ποι\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ergon.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ergon.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔργον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T09:59:34.596671\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔργον\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968442008\"},{\"resource\":\"urn:uuid:idm140090967310472\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968442008\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἔργνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}}]}}},{\"about\":\"urn:uuid:idm140090967310472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἔργον\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐργ\"},\"suff\":{\"$\":\"ον\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_ou\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ermas.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ermas.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Ἑρμᾶς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:46:16.950165\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Ἑρμᾶς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090971678328\"},{\"resource\":\"urn:uuid:idm140090968963992\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090971678328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Ἑρμῆς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑρμ\"},\"suff\":{\"$\":\"ᾶς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic Doric\"},\"stemtype\":{\"$\":\"ehs_eou\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090968963992\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἑρμάζω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑρμ\"},\"suff\":{\"$\":\"ᾶ̄ς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ermin.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ermin.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Ἑρμῆν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:46:11.928939\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Ἑρμῆν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667237424\"},\"Body\":{\"about\":\"urn:uuid:idm140102667237424\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Ἑρμῆς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑρμ\"},\"suff\":{\"$\":\"ῆν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ehs_eou\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Ἑρμ\"},\"suff\":{\"$\":\"ῆν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"epic Doric\"},\"stemtype\":{\"$\":\"ehs_eou\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-estathi.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-estathi.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἕσταθι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:03:37.081810\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἕσταθι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208976584\"},\"Body\":{\"about\":\"urn:uuid:idm140440208976584\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"αθι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"},\"morph\":{\"$\":\"poetic\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-estatin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-estatin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἑστάτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-16T11:06:40.338884\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἑστάτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670146272\"},\"Body\":{\"about\":\"urn:uuid:idm140102670146272\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-estitin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-estitin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐστήτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:39:48.057098\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐστήτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429844160\"},\"Body\":{\"about\":\"urn:uuid:idm140154429844160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:στ\"},\"suff\":{\"$\":\"ήτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-eston.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-eston.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔστων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:47:17.700538\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔστων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208376712\"},\"Body\":{\"about\":\"urn:uuid:idm140440208376712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"εἰμί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἔστων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-estosai.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-estosai.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἑστῶσαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:13:12.516036\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἑστῶσαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212912744\"},\"Body\":{\"about\":\"urn:uuid:idm140440212912744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"ῶσαι\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"ῶσαι\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ethemetha.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ethemetha.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐθέμεθα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:27:46.887576\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐθέμεθα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209420872\"},\"Body\":{\"about\":\"urn:uuid:idm140440209420872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:θ\"},\"suff\":{\"$\":\"έμεθα\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ethesan.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ethesan.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔθεσαν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:26:25.993636\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔθεσαν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207618632\"},\"Body\":{\"about\":\"urn:uuid:idm140440207618632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐθεσαν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-etheto.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-etheto.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔθετο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:54:48.929383\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔθετο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207728600\"},{\"resource\":\"urn:uuid:idm140440211789528\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207728600\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἔθω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐθ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"w_stem\"},\"morph\":{\"$\":\"unaugmented\"}}}}},{\"about\":\"urn:uuid:idm140440211789528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:θ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-etithetin.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-etithetin.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐτιθέτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:23:44.238889\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐτιθέτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154431979808\"},\"Body\":{\"about\":\"urn:uuid:idm140154431979808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:τιθ\"},\"suff\":{\"$\":\"έτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"emi_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-evolefthin.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-evolefthin.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐβουλεύθην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-21T06:04:01.569899\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐβουλεύθην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666562912\"},\"Body\":{\"about\":\"urn:uuid:idm140102666562912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:βουλευθ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"dial\":{\"$\":\"epic Doric Aeolic\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:βουλευθ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-faien.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-faien.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαῖεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:53:37.318893\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαῖεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209731496\"},\"Body\":{\"about\":\"urn:uuid:idm140440209731496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αῖεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-faii.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-faii.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαίη:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:51:42.935254\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαίη\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208546040\"},\"Body\":{\"about\":\"urn:uuid:idm140440208546040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αίη\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-faiis.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-faiis.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαίης:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:49:53.704172\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαίης\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208554952\"},\"Body\":{\"about\":\"urn:uuid:idm140440208554952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αίης\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-faimen.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-faimen.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαῖμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:52:39.526888\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαῖμεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429896416\"},\"Body\":{\"about\":\"urn:uuid:idm140154429896416\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αῖμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fis.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fis.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῇς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:49:31.430474\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῇς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427593632\"},\"Body\":{\"about\":\"urn:uuid:idm140154427593632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῇς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fite.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fite.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῆτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:50:36.510938\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῆτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209097832\"},\"Body\":{\"about\":\"urn:uuid:idm140440209097832\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῆτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fo.json":
/*!***********************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fo.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῶ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:34:30.315596\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῶ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432185536\"},\"Body\":{\"about\":\"urn:uuid:idm140154432185536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fyin.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fyin.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φυήν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:21:53.604455\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φυήν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429049088\"},\"Body\":{\"about\":\"urn:uuid:idm140154429049088\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φυή\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fylakon.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fylakon.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φυλάκων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T06:36:09.644907\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φυλάκων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090971520536\"},{\"resource\":\"urn:uuid:idm140090967725464\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090971520536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φύλαξ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυλα\"},\"suff\":{\"$\":\"κων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"c_kos\"}}}}},{\"about\":\"urn:uuid:idm140090967725464\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φυλακός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυλακ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_ou\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-fylax.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-fylax.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φύλαξ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T06:55:33.378489\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φύλαξ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967341832\"},\"Body\":{\"about\":\"urn:uuid:idm140090967341832\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φύλαξ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυλα\"},\"suff\":{\"$\":\"ξ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"c_kos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυλα\"},\"suff\":{\"$\":\"ξ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"c_kos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gegrammenoin.json":
/*!*********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gegrammenoin.json ***!
  \*********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γεγραμμένοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:16:57.065235\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γεγραμμένοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210023288\"},\"Body\":{\"about\":\"urn:uuid:idm140440210023288\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"μμένοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"μμένοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"μμένοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"μμένοιν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gegrapsai.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gegrapsai.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γέγραψαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:57:36.240456\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γέγραψαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212483544\"},\"Body\":{\"about\":\"urn:uuid:idm140440212483544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"ψαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-genei.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-genei.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γένει:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:48:58.333459\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γένει\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971595032\"},\"Body\":{\"about\":\"urn:uuid:idm140090971595032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γένος\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"εϊ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"hs_eos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-geni.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-geni.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γένη:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:49:03.334653\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γένη\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666394544\"},\"Body\":{\"about\":\"urn:uuid:idm140102666394544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γένος\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεν\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gera.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gera.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γέρᾱ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:49:08.384326\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γέρᾱ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666278176\"},\"Body\":{\"about\":\"urn:uuid:idm140102666278176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γέρας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-geron.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-geron.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γερῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:49:12.882063\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γερῶν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090966958472\"},{\"resource\":\"urn:uuid:idm140090969351176\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090966958472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γέρας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"as_aos\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090969351176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γεράζω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-geronton.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-geronton.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γερόντων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:02:03.953537\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γερόντων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969094872\"},\"Body\":{\"about\":\"urn:uuid:idm140090969094872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γέρων\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"όντων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"wn_ontos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gerontos.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gerontos.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γέροντος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:01:58.677153\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γέροντος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102668328944\"},\"Body\":{\"about\":\"urn:uuid:idm140102668328944\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γέρων\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γερ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wn_ontos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-giganta.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-giganta.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γίγαντᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:02:09.889458\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γίγαντᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102672809360\"},\"Body\":{\"about\":\"urn:uuid:idm140102672809360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γίγας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γιγ\"},\"suff\":{\"$\":\"αντα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"as_antos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-giganton.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-giganton.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γιγάντων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:02:15.687079\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γιγάντων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967637704\"},\"Body\":{\"about\":\"urn:uuid:idm140090967637704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γίγας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γιγ\"},\"suff\":{\"$\":\"άντων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_antos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gin.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gin.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γῆν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:45:44.553202\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γῆν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090967855496\"},{\"resource\":\"urn:uuid:idm140090967143736\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090967855496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Γαῖα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090967143736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γῆ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"(null)\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gis.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gis.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γῆς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:45:39.383860\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γῆς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090969423768\"},{\"resource\":\"urn:uuid:idm140090971910440\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090969423768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Γαῖα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090971910440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γῆ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"(null)\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gnomin.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gnomin.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γνώμην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T10:39:11.719548\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γνώμην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968888248\"},\"Body\":{\"about\":\"urn:uuid:idm140090968888248\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γνώμη\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γνωμ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gnomon.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gnomon.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γνωμῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T10:37:53.161507\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γνωμῶν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971362200\"},\"Body\":{\"about\":\"urn:uuid:idm140090971362200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γνώμη\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γνωμ\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"h_hs\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gnoton.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gnoton.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γνῶτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:54:07.877773\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γνῶτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429148000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429148000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γιγνώσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ωτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ῶτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ῶτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ωτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-graoin.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-graoin.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γρᾱοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:32:57.127338\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γρᾱοῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667931648\"},\"Body\":{\"about\":\"urn:uuid:idm140102667931648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γραῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γρᾱοῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gravn.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gravn.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γραῦν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:32:52.075085\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γραῦν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102673048320\"},\"Body\":{\"about\":\"urn:uuid:idm140102673048320\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γραῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γραῦν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gynaikas.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gynaikas.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γυναῖκας:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:13.373802\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γυναῖκας\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102668435296\"},\"Body\":{\"about\":\"urn:uuid:idm140102668435296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γυνή\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γυναῖκας\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-gynaiki.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-gynaiki.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γυναικί:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:08.690792\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γυναικί\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666600960\"},\"Body\":{\"about\":\"urn:uuid:idm140102666600960\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γυνή\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γυναικί\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ichthyes.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ichthyes.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἰχθύες:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:39.791698\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἰχθύες\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968188200\"},\"Body\":{\"about\":\"urn:uuid:idm140090968188200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἰχθύς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰχθ\"},\"suff\":{\"$\":\"υες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"uLs_uos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰχθ\"},\"suff\":{\"$\":\"υες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"uLs_uos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰχθ\"},\"suff\":{\"$\":\"υες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"uLs_uos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰχθ\"},\"suff\":{\"$\":\"υες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"uLs_uos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ichthyos.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ichthyos.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἰχθύος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:33.799997\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἰχθύος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102672849312\"},\"Body\":{\"about\":\"urn:uuid:idm140102672849312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἰχθύς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰχθ\"},\"suff\":{\"$\":\"υος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"uLs_uos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ideis.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ideis.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ᾔδεις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:12:14.250507\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ᾔδεις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211930568\"},\"Body\":{\"about\":\"urn:uuid:idm140440211930568\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἶδα\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ᾐδ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"perf_act\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-iesthon.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-iesthon.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵεσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:30:58.656074\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵεσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210681128\"},\"Body\":{\"about\":\"urn:uuid:idm140440210681128\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵ̄εσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-iin.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-iin.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:29:37.836547\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207727816\"},\"Body\":{\"about\":\"urn:uuid:idm140440207727816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"irreg_mi\"},\"morph\":{\"$\":\"unaugmented\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵ̄ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ippeoin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ippeoin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἱππέοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:32:47.034578\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἱππέοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971394456\"},\"Body\":{\"about\":\"urn:uuid:idm140090971394456\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἱππεύς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱππ\"},\"suff\":{\"$\":\"έοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"eus_ews\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱππ\"},\"suff\":{\"$\":\"έοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"eus_ews\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ippeos.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ippeos.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἱππέως:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:32:40.903640\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἱππέως\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967768568\"},\"Body\":{\"about\":\"urn:uuid:idm140090967768568\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἱππεύς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱππ\"},\"suff\":{\"$\":\"έως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"eus_ews\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱππ\"},\"suff\":{\"$\":\"εω̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"eus_ews\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱππ\"},\"suff\":{\"$\":\"έως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"eus_ews\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-iroa.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-iroa.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἥρωᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T11:19:27.377408\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἥρωᾰ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667431392\"},{\"resource\":\"urn:uuid:idm140102670606912\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667431392\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἥρως\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἡρ\"},\"suff\":{\"$\":\"ω̆α\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ws_wos\"}}}}},{\"about\":\"urn:uuid:idm140102670606912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἥρωσἥρως\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἡρ\"},\"suff\":{\"$\":\"ω̆α\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἡρ\"},\"suff\":{\"$\":\"ω̆α\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-iroon.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-iroon.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἡρώων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-29T11:19:37.544252\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἡρώων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102665880880\"},\"Body\":{\"about\":\"urn:uuid:idm140102665880880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἥρως\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἡρ\"},\"suff\":{\"$\":\"ώων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"ws_oos\"},\"morph\":{\"$\":\"poetic\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἡρ\"},\"suff\":{\"$\":\"ώ̆ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"ws_wos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-istante.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-istante.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἱστάντε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:36:01.434323\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἱστάντε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428741040\"},\"Body\":{\"about\":\"urn:uuid:idm140154428741040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άντε\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-istatai.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-istatai.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵσταται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:38:30.657312\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵσταται\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210560792\"},\"Body\":{\"about\":\"urn:uuid:idm140440210560792\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"αται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-istatin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-istatin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἱστάτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:37:12.002128\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἱστάτην\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208723560\"},{\"resource\":\"urn:uuid:idm140440209173160\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208723560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"unaugmented causal pres_redupl\"}}]}}},{\"about\":\"urn:uuid:idm140440209173160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἱστάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"ά̄την\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"ά̄την\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-iton.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-iton.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἴτων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:48:46.427744\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἴτων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440210239688\"},{\"resource\":\"urn:uuid:idm140440209908680\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440210239688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"εἶμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἴτων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}}}},{\"about\":\"urn:uuid:idm140440209908680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἴτον\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_ou\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-kalypso.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-kalypso.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Καλυψώ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:13:12.969618\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Καλυψώ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211790984\"},\"Body\":{\"about\":\"urn:uuid:idm140440211790984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Καλυψώ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Καλυψ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"w_oos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-kanoin.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-kanoin.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:κανοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:16:00.106902\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:κανοῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102673043792\"},\"Body\":{\"about\":\"urn:uuid:idm140102673043792\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"κάνεον\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"καν\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"eos_eou\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"καν\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"eos_eou\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-kanou.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-kanou.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:κανοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:15:55.391397\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:κανοῦ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968634616\"},{\"resource\":\"urn:uuid:idm140090967819880\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968634616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"κάνεον\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"καν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"eos_eou\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090967819880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"καίνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"καν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-klope.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-klope.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:κλῶπε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T06:35:53.599072\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:κλῶπε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670066496\"},\"Body\":{\"about\":\"urn:uuid:idm140102670066496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"κλώψ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"κλω\"},\"suff\":{\"$\":\"πε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"y_pos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"κλω\"},\"suff\":{\"$\":\"πε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"y_pos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"κλω\"},\"suff\":{\"$\":\"πε\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"y_pos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-klops.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-klops.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:κλώψ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T06:35:33.815495\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:κλώψ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971891688\"},\"Body\":{\"about\":\"urn:uuid:idm140090971891688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"κλώψ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"κλω\"},\"suff\":{\"$\":\"ψ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"y_pos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"κλω\"},\"suff\":{\"$\":\"ψ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"y_pos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lago.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lago.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λαγώ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:51:04.272262\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λαγώ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969245416\"},\"Body\":{\"about\":\"urn:uuid:idm140090969245416\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λαγῶς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω̆\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lagos.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lagos.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λαγώς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:51:09.514478\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λαγώς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670207744\"},\"Body\":{\"about\":\"urn:uuid:idm140102670207744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λαγῶς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λαγ\"},\"suff\":{\"$\":\"ω̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-leloipi.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-leloipi.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λελοίπῃ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:54:46.480828\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λελοίπῃ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208118360\"},\"Body\":{\"about\":\"urn:uuid:idm140440208118360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λείπω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λελοιπ\"},\"suff\":{\"$\":\"ῃ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-leloipoton.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-leloipoton.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λελοιπότων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:11:23.611187\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λελοιπότων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430127664\"},\"Body\":{\"about\":\"urn:uuid:idm140154430127664\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λείπω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λελοιπ\"},\"suff\":{\"$\":\"ότων\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λελοιπ\"},\"suff\":{\"$\":\"ότων\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lelysthai.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lelysthai.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λελύσθαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-16T11:13:26.690201\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λελύσθαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670200560\"},\"Body\":{\"about\":\"urn:uuid:idm140102670200560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λελυ\"},\"suff\":{\"$\":\"σθαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_vow\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-leon.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-leon.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λεών:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:50:52.742764\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λεών\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670456224\"},\"Body\":{\"about\":\"urn:uuid:idm140102670456224\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λαός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-leos.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-leos.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λεώς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:50:59.016442\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λεώς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971348360\"},\"Body\":{\"about\":\"urn:uuid:idm140090971348360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λαός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Doric Ionic\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λε\"},\"suff\":{\"$\":\"ως\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ws_wos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lipon.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lipon.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λιπόν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:34:54.101945\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λιπόν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430088608\"},\"Body\":{\"about\":\"urn:uuid:idm140154430088608\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λείπω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λιπ\"},\"suff\":{\"$\":\"όν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λιπ\"},\"suff\":{\"$\":\"όν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λιπ\"},\"suff\":{\"$\":\"όν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λιπ\"},\"suff\":{\"$\":\"όν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lysanta.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lysanta.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λύσαντᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T01:55:46.299686\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λύσαντᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427548112\"},\"Body\":{\"about\":\"urn:uuid:idm140154427548112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λῡς\"},\"suff\":{\"$\":\"αντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λῡς\"},\"suff\":{\"$\":\"αντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λῡς\"},\"suff\":{\"$\":\"αντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λῡς\"},\"suff\":{\"$\":\"αντα\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"reg_conj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-lythentos.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-lythentos.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λυθέντος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T01:58:22.045782\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λυθέντος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429898736\"},\"Body\":{\"about\":\"urn:uuid:idm140154429898736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λυθ\"},\"suff\":{\"$\":\"έντος\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"reg_conj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λυθ\"},\"suff\":{\"$\":\"έντος\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"reg_conj\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-me.json":
/*!***********************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-me.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:με:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:45:39.014317\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:με\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428756128\"},\"Body\":{\"about\":\"urn:uuid:idm140154428756128\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐγώ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"με\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"stemtype\":{\"$\":\"pron1\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"με\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"stemtype\":{\"$\":\"pron1\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-memnomai.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-memnomai.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μεμνῶμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:58:52.972704\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μεμνῶμαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207831016\"},\"Body\":{\"about\":\"urn:uuid:idm140440207831016\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μιμνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεμνῶμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_vow\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-menoun.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-menoun.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μενοῦν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:32:48.605959\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μενοῦν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428048928\"},\"Body\":{\"about\":\"urn:uuid:idm140154428048928\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μένω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεν\"},\"suff\":{\"$\":\"οῦν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_fut\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεν\"},\"suff\":{\"$\":\"οῦν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_fut\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεν\"},\"suff\":{\"$\":\"οῦν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_fut\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεν\"},\"suff\":{\"$\":\"οῦν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_fut\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-mitera.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-mitera.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μητέρᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:29:48.217089\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μητέρᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090972250456\"},\"Body\":{\"about\":\"urn:uuid:idm140090972250456\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μήτηρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μητ\"},\"suff\":{\"$\":\"ερα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hr_eros\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-miteron.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-miteron.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μητέρων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:30:01.408973\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μητέρων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102669868704\"},\"Body\":{\"about\":\"urn:uuid:idm140102669868704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μήτηρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μητ\"},\"suff\":{\"$\":\"έρων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hr_eros\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-mnais.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-mnais.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μναῖς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:46:05.893855\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μναῖς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971563384\"},\"Body\":{\"about\":\"urn:uuid:idm140090971563384\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μνᾶ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μν\"},\"suff\":{\"$\":\"αῖς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"ah_ahs\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-mnas.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-mnas.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μνᾶς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:45:58.983919\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μνᾶς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967893368\"},\"Body\":{\"about\":\"urn:uuid:idm140090967893368\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μνᾶ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μν\"},\"suff\":{\"$\":\"ᾶς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"ah_ahs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μν\"},\"suff\":{\"$\":\"ᾶς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"ah_ahs\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-navn.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-navn.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ναῦν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:33:02.234344\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ναῦν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968681544\"},\"Body\":{\"about\":\"urn:uuid:idm140090968681544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ναῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"(null)\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ναῦν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ναῦν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-neaniain.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-neaniain.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νεανίαιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T12:56:21.926172\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νεανίαιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968948040\"},\"Body\":{\"about\":\"urn:uuid:idm140090968948040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεανίης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νεᾱνι\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hs_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νεᾱνι\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hs_ou\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-neaniou.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-neaniou.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νεανίου:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T12:49:03.578861\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νεανίου\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969434664\"},\"Body\":{\"about\":\"urn:uuid:idm140090969434664\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεανίης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νεᾱνι\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hs_ou\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-neo.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-neo.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νεώ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:50:40.749379\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νεώ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090967861400\"},{\"resource\":\"urn:uuid:idm140090971564568\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090967861400\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ναός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ω̆\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}},{\"about\":\"urn:uuid:idm140090971564568\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ω̆\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-neon.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-neon.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νεῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:33:06.912237\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νεῶν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968513784\"},{\"resource\":\"urn:uuid:idm140090967568888\"},{\"resource\":\"urn:uuid:idm140090968534552\"},{\"resource\":\"urn:uuid:idm140090969157208\"},{\"resource\":\"urn:uuid:idm140090968060968\"},{\"resource\":\"urn:uuid:idm140090968907976\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968513784\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ναός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}},{\"about\":\"urn:uuid:idm140090967568888\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ναῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νεῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"epic Doric Ionic\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}}}},{\"about\":\"urn:uuid:idm140090968534552\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νέα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"h_hs\"}}}}},{\"about\":\"urn:uuid:idm140090969157208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140090968060968\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"}}]}}},{\"about\":\"urn:uuid:idm140090968907976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-neos.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-neos.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νεῴς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T23:50:46.567493\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νεῴς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102670442112\"},{\"resource\":\"urn:uuid:idm140102667118112\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102670442112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ναός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῳ̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}},{\"about\":\"urn:uuid:idm140102667118112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νεώς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"νε\"},\"suff\":{\"$\":\"ῳ̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"ws_w\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-noin.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-noin.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:15:50.784993\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νοῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666891072\"},\"Body\":{\"about\":\"urn:uuid:idm140102666891072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νόος\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"oos_oou\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"oos_oou\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-nou.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-nou.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:νοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:15:44.580401\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:νοῦ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090971570968\"},{\"resource\":\"urn:uuid:idm140090971611704\"},{\"resource\":\"urn:uuid:idm140090967384200\"},{\"resource\":\"urn:uuid:idm140090967078056\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090971570968\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νέομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"morph\":{\"$\":\"contr poetic\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"morph\":{\"$\":\"contr unaugmented poetic\"}}]}}},{\"about\":\"urn:uuid:idm140090971611704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr unaugmented poetic\"}}]}}},{\"about\":\"urn:uuid:idm140090967384200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νέω3\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"e_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140090967078056\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"νόος\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"oos_oou\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ν\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"oos_oou\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ode.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ode.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὅδε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:24:15.617027\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὅδε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208791064\"},\"Body\":{\"about\":\"urn:uuid:idm140440208791064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὅδε\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὅδε\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"demonstr\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-odontoin.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-odontoin.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὀδόντοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:02:21.097462\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὀδόντοιν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667468240\"},{\"resource\":\"urn:uuid:idm140102672861984\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667468240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὀδούς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"ous_ontos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"ous_ontos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"wn_ontos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"wn_ontos\"}}]}}},{\"about\":\"urn:uuid:idm140102672861984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὀδών\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"wn_ontos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"όντοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"wn_ontos\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-odontos.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-odontos.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὀδόντος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T10:02:26.219626\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὀδόντος\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968947272\"},{\"resource\":\"urn:uuid:idm140090968621032\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968947272\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὀδούς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ous_ontos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wn_ontos\"}}]}}},{\"about\":\"urn:uuid:idm140090968621032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὀδών\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὀδ\"},\"suff\":{\"$\":\"οντος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wn_ontos\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oi.json":
/*!***********************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oi.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἷ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:04:59.249453\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἷ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207849704\"},{\"resource\":\"urn:uuid:idm140440212691384\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207849704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440212691384\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oi2.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oi2.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἵ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:06:13.585628\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἵ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209828264\"},{\"resource\":\"urn:uuid:idm140440208557816\"},{\"resource\":\"urn:uuid:idm140440209330504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209828264\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440208557816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440209330504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὅς\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"relative\"},\"morph\":{\"$\":\"indeclform\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oi3.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oi3.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἱ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:18:19.883783\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἱ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429705680\"},{\"resource\":\"urn:uuid:idm140154432388656\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429705680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140154432388656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oida.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oida.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἶδα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:33:10.637027\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἶδα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430570880\"},\"Body\":{\"about\":\"urn:uuid:idm140154430570880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἶδα\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰδα\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oistrodonou.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oistrodonou.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἰστροδόνου:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-21T07:00:10.265111\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἰστροδόνου\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090968443528\"},{\"resource\":\"urn:uuid:idm140090968505976\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090968443528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἰστρόδονος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}}]}}},{\"about\":\"urn:uuid:idm140090968505976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἰστροδόνος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰστροδον\"},\"suff\":{\"$\":\"ου\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"os_on\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oras.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oras.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὁρᾷς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:15:07.106637\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὁρᾷς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208364952\"},\"Body\":{\"about\":\"urn:uuid:idm140440208364952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁράω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾷς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾷς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-orosa.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-orosa.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὁρώσᾱ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T00:33:47.888139\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὁρώσᾱ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430271584\"},\"Body\":{\"about\":\"urn:uuid:idm140154430271584\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁράω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ώσᾱ\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ώσᾱ\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ώσᾱ\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"dual\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-oudemia.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-oudemia.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οὐδεμία:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:32:21.543086\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οὐδεμία\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429675552\"},\"Body\":{\"about\":\"urn:uuid:idm140154429675552\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οὐδείς\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pasi.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pasi.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πᾶσι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:17:02.912855\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πᾶσι\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440212666328\"},{\"resource\":\"urn:uuid:idm140440208048296\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440212666328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πᾶς\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾶσι\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"irreg_adj3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾶσι\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"irreg_adj3\"},\"morph\":{\"$\":\"indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440208048296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πᾶσις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾱς\"},\"suff\":{\"$\":\"ι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_ews\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pateroin.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pateroin.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πατέροιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:29:42.918530\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πατέροιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969422376\"},\"Body\":{\"about\":\"urn:uuid:idm140090969422376\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πατήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πατέροιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πατ\"},\"suff\":{\"$\":\"έροιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hr_eros\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πατ\"},\"suff\":{\"$\":\"έροιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hr_eros\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-patri.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-patri.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πατρί:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:29:28.063636\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πατρί\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667145904\"},{\"resource\":\"urn:uuid:idm140102669793216\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667145904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πατήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πατ\"},\"suff\":{\"$\":\"ρι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hr_eros\"},\"morph\":{\"$\":\"syncope\"}}}}},{\"about\":\"urn:uuid:idm140102669793216\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πατρίς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πατρ\"},\"suff\":{\"$\":\"ι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_idos\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pempomenous.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pempomenous.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πεμπομένους:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:15:14.672530\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πεμπομένους\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430144208\"},\"Body\":{\"about\":\"urn:uuid:idm140154430144208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πέμπω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πεμπ\"},\"suff\":{\"$\":\"ομένους\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"plural\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"reg_conj\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-picheon.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-picheon.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πήχεων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:18.391254\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πήχεων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666539152\"},\"Body\":{\"about\":\"urn:uuid:idm140102666539152\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πῆχυς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πηχ\"},\"suff\":{\"$\":\"εω̆ν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"us_ews\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pichyn.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pichyn.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πῆχυν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:12.513776\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πῆχυν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968109224\"},\"Body\":{\"about\":\"urn:uuid:idm140090968109224\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πῆχυς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πηχ\"},\"suff\":{\"$\":\"υν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"us_ews\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-plei.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-plei.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πλεῖ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:02:07.542904\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πλεῖ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432345952\"},\"Body\":{\"about\":\"urn:uuid:idm140154432345952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πλέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"εῖ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"εῖ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-poieiton.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-poieiton.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιεῖτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:07:39.441078\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιεῖτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209055896\"},\"Body\":{\"about\":\"urn:uuid:idm140440209055896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-poio.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-poio.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιῶ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:59:45.227269\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιῶ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154428810416\"},{\"resource\":\"urn:uuid:idm140154429128112\"},{\"resource\":\"urn:uuid:idm140154429853904\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154428810416\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140154429128112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140154429853904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-poioumen.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-poioumen.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιοῦμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:01:01.341465\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιοῦμεν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430005920\"},{\"resource\":\"urn:uuid:idm140154429355184\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430005920\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}},{\"about\":\"urn:uuid:idm140154429355184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-poleoin.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-poleoin.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πολέοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:44:06.645789\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πολέοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667043760\"},\"Body\":{\"about\":\"urn:uuid:idm140102667043760\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πόλις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πολ\"},\"suff\":{\"$\":\"έοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"is_ews\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πολ\"},\"suff\":{\"$\":\"έοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"is_ews\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-poleos.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-poleos.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πόλεως:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T09:39:12.673196\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πόλεως\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667200176\"},\"Body\":{\"about\":\"urn:uuid:idm140102667200176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πόλις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πολ\"},\"suff\":{\"$\":\"εω̆ς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"is_ews\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pragmatoin.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pragmatoin.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πραγμάτοιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:00:28.917161\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πραγμάτοιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670387408\"},\"Body\":{\"about\":\"urn:uuid:idm140102670387408\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πρᾶγμα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πρᾱγ\"},\"suff\":{\"$\":\"μάτοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"ma_matos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πρᾱγ\"},\"suff\":{\"$\":\"μάτοιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"ma_matos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-pragmatos.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-pragmatos.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πράγματος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:00:22.644151\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πράγματος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967973464\"},\"Body\":{\"about\":\"urn:uuid:idm140090967973464\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πρᾶγμα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πρᾱγ\"},\"suff\":{\"$\":\"ματος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-prosfyma.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-prosfyma.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πρόσφυμα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:11:43.231348\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πρόσφυμα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427819520\"},\"Body\":{\"about\":\"urn:uuid:idm140154427819520\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πρόσφυμα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ritores.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ritores.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ῥήτορες:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:44:40.380798\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ῥήτορες\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670522400\"},\"Body\":{\"about\":\"urn:uuid:idm140102670522400\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ῥήτωρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ῥητ\"},\"suff\":{\"$\":\"ορες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"wr_oros\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ῥητ\"},\"suff\":{\"$\":\"ορες\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"wr_oros\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ritoros.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ritoros.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ῥήτορος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:44:31.855268\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ῥήτορος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102665890560\"},\"Body\":{\"about\":\"urn:uuid:idm140102665890560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ῥήτωρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ῥητ\"},\"suff\":{\"$\":\"ορος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"wr_oros\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-stratiotais.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-stratiotais.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:στρατιώταις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T12:56:34.197950\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:στρατιώταις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102665904768\"},\"Body\":{\"about\":\"urn:uuid:idm140102665904768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"στρατιώτης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"στρατιωτ\"},\"suff\":{\"$\":\"αις\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-stratiotin.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-stratiotin.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:στρατιώτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T12:56:28.349576\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:στρατιώτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666920272\"},\"Body\":{\"about\":\"urn:uuid:idm140102666920272\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"στρατιώτης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"στρατιωτ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"hs_ou\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-sykai.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-sykai.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:συκαῖ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:45:54.102741\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:συκαῖ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102668175072\"},\"Body\":{\"about\":\"urn:uuid:idm140102668175072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συκῆ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συκ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συκ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σῡκ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σῡκ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-sykis.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-sykis.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:συκῆς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T11:45:49.241338\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:συκῆς\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102668115072\"},{\"resource\":\"urn:uuid:idm140102670597888\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102668115072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συκάζω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σῡκ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"azw\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140102670597888\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συκῆ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συκ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σῡκ\"},\"suff\":{\"$\":\"ῆς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eh_ehs\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-syndeei.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-syndeei.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:συνδέει:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:44:13.699637\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:συνδέει\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208215368\"},{\"resource\":\"urn:uuid:idm140440208057880\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208215368\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συνδέομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συνδ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σύν:δ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σύν:δ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"}}]}}},{\"about\":\"urn:uuid:idm140440208057880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συνδέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συνδ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συνδ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σύν:δ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"e_stem\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"σύν:δ\"},\"suff\":{\"$\":\"έει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"e_stem\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-synechis.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-synechis.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:συνεχής:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:47:06.407617\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:συνεχής\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428779744\"},\"Body\":{\"about\":\"urn:uuid:idm140154428779744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"συνεχής\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συνεχ\"},\"suff\":{\"$\":\"ης\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hs_es\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"συνεχ\"},\"suff\":{\"$\":\"ης\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hs_es\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tain.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tain.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ταῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T04:32:44.884459\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ταῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432383888\"},\"Body\":{\"about\":\"urn:uuid:idm140154432383888\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ταῖν\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ταῖν\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-terati.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-terati.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τέρατι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:00:34.331362\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τέρατι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968947288\"},\"Body\":{\"about\":\"urn:uuid:idm140090968947288\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τέρας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τερ\"},\"suff\":{\"$\":\"ατι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"as_atos\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-teraton.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-teraton.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τεράτων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T11:00:45.004686\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τεράτων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102667776544\"},{\"resource\":\"urn:uuid:idm140102672748000\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102667776544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τέρας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τερ\"},\"suff\":{\"$\":\"άτων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_atos\"}}}}},{\"about\":\"urn:uuid:idm140102672748000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τέρατέρας\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τερ\"},\"suff\":{\"$\":\"άτων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"as_atos\"}}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tethnaton.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tethnaton.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τέθνατον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:04:56.107781\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τέθνατον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432338704\"},\"Body\":{\"about\":\"urn:uuid:idm140154432338704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τεθν\"},\"suff\":{\"$\":\"ατον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"},\"morph\":{\"$\":\"syncope\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tethnixeis.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tethnixeis.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τεθνήξεις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:02:17.986454\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τεθνήξεις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427887648\"},\"Body\":{\"about\":\"urn:uuid:idm140154427887648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τεθνηξ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"fut_perf\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-thalattan.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-thalattan.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:θάλαττᾰν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T11:40:51.375316\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:θάλαττᾰν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968080536\"},\"Body\":{\"about\":\"urn:uuid:idm140090968080536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θάλασσα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θαλαττ\"},\"suff\":{\"$\":\"αν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"a_hs\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-thalattas.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-thalattas.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:θαλάττᾱς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T11:40:56.925118\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:θαλάττᾱς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090967708776\"},\"Body\":{\"about\":\"urn:uuid:idm140090967708776\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θάλασσα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θαλαττ\"},\"suff\":{\"$\":\"ᾱς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"a_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θαλαττ\"},\"suff\":{\"$\":\"ᾱς\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"a_hs\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-thygatera.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-thygatera.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:θυγατέρᾰ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:30:06.704470\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:θυγατέρᾰ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667597424\"},\"Body\":{\"about\":\"urn:uuid:idm140102667597424\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θυγάτηρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θυγατ\"},\"suff\":{\"$\":\"ερα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"hr_eros\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-thygateroin.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-thygateroin.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:θυγατέροιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:30:12.948554\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:θυγατέροιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971545352\"},\"Body\":{\"about\":\"urn:uuid:idm140090971545352\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θυγάτηρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θυγατ\"},\"suff\":{\"$\":\"έροιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hr_eros\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"θυγατ\"},\"suff\":{\"$\":\"έροιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"hr_eros\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tis.json":
/*!************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tis.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:23:07.874614\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211731512\"},\"Body\":{\"about\":\"urn:uuid:idm140440211731512\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τις\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"indef\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"indef\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tithesthon.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tithesthon.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τιθέσθων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:25:14.753112\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τιθέσθων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154431870736\"},\"Body\":{\"about\":\"urn:uuid:idm140154431870736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τιθ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"emi_pr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-tous.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-tous.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τοὺς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:26:43.708142\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τοὺς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428396304\"},\"Body\":{\"about\":\"urn:uuid:idm140154428396304\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τούς\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-triireis.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-triireis.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τριήρεις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:48:53.140218\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τριήρεις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090968512472\"},\"Body\":{\"about\":\"urn:uuid:idm140090968512472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τριήρης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τριηρ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τριηρ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τριηρ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-triirous.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-triirous.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τριήρους:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-27T12:48:48.072197\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τριήρους\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667600656\"},\"Body\":{\"about\":\"urn:uuid:idm140102667600656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τριήρης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τριηρ\"},\"suff\":{\"$\":\"ους\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"hs_eos\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-vito.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-vito.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βήτω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:53:05.455705\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βήτω\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207832184\"},\"Body\":{\"about\":\"urn:uuid:idm140440207832184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βαίνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"β\"},\"suff\":{\"$\":\"ήτω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"ath_h_aor\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voon.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voon.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βοῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:33:16.671190\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βοῶν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102666447120\"},{\"resource\":\"urn:uuid:idm140102667002672\"},{\"resource\":\"urn:uuid:idm140102667004864\"},{\"resource\":\"urn:uuid:idm140102667082768\"},{\"resource\":\"urn:uuid:idm140102666638448\"},{\"resource\":\"urn:uuid:idm140102672883616\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102666447120\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βόα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"h_hs\"}}}}},{\"about\":\"urn:uuid:idm140102667002672\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βόειος\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eos_eh_eon\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eos_eh_eon\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"eos_eh_eon\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140102667004864\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βοάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"aw_denom\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140102667082768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βοή\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"h_hs\"}}}}},{\"about\":\"urn:uuid:idm140102666638448\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βοόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":0,\"$\":\"verb participle\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"mood\":{\"$\":\"participle\"},\"num\":{\"$\":\"singular\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βο\"},\"suff\":{\"$\":\"ῶν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Doric\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"}}]}}},{\"about\":\"urn:uuid:idm140102672883616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βοῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βοῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βοῶν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-vouleftheiin.json":
/*!*********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-vouleftheiin.json ***!
  \*********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευθείην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-21T06:04:19.870496\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευθείην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090972277336\"},\"Body\":{\"about\":\"urn:uuid:idm140090972277336\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευθ\"},\"suff\":{\"$\":\"είην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voulefthis.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voulefthis.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευθῇς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:53:05.569094\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευθῇς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432700144\"},\"Body\":{\"about\":\"urn:uuid:idm140154432700144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευθ\"},\"suff\":{\"$\":\"ῇς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-vouleftho.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-vouleftho.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευθῶ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-21T06:04:12.648968\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευθῶ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969537832\"},\"Body\":{\"about\":\"urn:uuid:idm140090969537832\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευθ\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voulevefso.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voulevefso.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλεύσω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:48:23.300155\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλεύσω\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212755032\"},\"Body\":{\"about\":\"urn:uuid:idm140440212755032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"euw\"},\"morph\":{\"$\":\"unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voulevesthon.json":
/*!*********************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voulevesthon.json ***!
  \*********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευέσθων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:45:55.282220\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευέσθων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427444096\"},\"Body\":{\"about\":\"urn:uuid:idm140154427444096\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voulevis.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voulevis.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλεύῃς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:44:24.613490\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλεύῃς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207832328\"},\"Body\":{\"about\":\"urn:uuid:idm140440207832328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"ῃς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-voun.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-voun.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βοῦν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T10:33:12.037937\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βοῦν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102667200672\"},\"Body\":{\"about\":\"urn:uuid:idm140102667200672\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βοῦς\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine/feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βοῦν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βοῦν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"irreg_decl3\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-xiri.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-xiri.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ξηρή:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-22T10:12:26.019544\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ξηρή\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102665902848\"},{\"resource\":\"urn:uuid:idm140102666296064\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102665902848\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ξηρά\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ξηρ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ξηρ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}},{\"about\":\"urn:uuid:idm140102666296064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ξηρός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ξηρ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ξηρ\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-yeos.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-yeos.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὑέος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:28.886452\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὑέος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102666502672\"},\"Body\":{\"about\":\"urn:uuid:idm140102666502672\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"υἱός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑ\"},\"suff\":{\"$\":\"εος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"eus_ews\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑ\"},\"suff\":{\"$\":\"εος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"hs_eos\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ygieia.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ygieia.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὑγιείᾳ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T11:40:39.291199\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὑγιείᾳ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971405896\"},\"Body\":{\"about\":\"urn:uuid:idm140090971405896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὑγίεια\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"ᾱͅ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"a_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"ᾱͅ\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-ygieiain.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-ygieiain.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὑγιείαιν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-24T11:40:44.494072\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὑγιείαιν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102670817648\"},\"Body\":{\"about\":\"urn:uuid:idm140102670817648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὑγίεια\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"a_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"a_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"h_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὑγιει\"},\"suff\":{\"$\":\"αιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-yieos.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-yieos.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:υἱέος:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:34.065753\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:υἱέος\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102668283456\"},\"Body\":{\"about\":\"urn:uuid:idm140102668283456\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"υἱός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"υἱ\"},\"suff\":{\"$\":\"εος\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"eus_ews\"}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-yioin.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-yioin.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:υἱοῖν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2020-01-28T08:17:39.342217\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:υἱοῖν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090969119928\"},\"Body\":{\"about\":\"urn:uuid:idm140090969119928\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"υἱός\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"υἱ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"eus_ews\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"υἱ\"},\"suff\":{\"$\":\"οῖν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"eus_ews\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"υἱ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"υἱ\"},\"suff\":{\"$\":\"οιν\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_ou\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/grc/grc-tufts-zoni.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/grc/grc-tufts-zoni.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ζώνη:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-24T02:41:31.120620\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ζώνη\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210410760\"},\"Body\":{\"about\":\"urn:uuid:idm140440210410760\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ζώνη\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ζων\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ζων\"},\"suff\":{\"$\":\"η\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat-tufts-fixtures.js":
/*!***********************************************!*\
  !*** ./tufts/localJson/lat-tufts-fixtures.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LatTuftsFixture; });
/* harmony import */ var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json");
var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-aberis.json */ "./tufts/localJson/lat/lat-tufts-aberis.json");
var _tufts_localJson_lat_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-aberis.json */ "./tufts/localJson/lat/lat-tufts-aberis.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-adeo.json */ "./tufts/localJson/lat/lat-tufts-adeo.json");
var _tufts_localJson_lat_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-adeo.json */ "./tufts/localJson/lat/lat-tufts-adeo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-adfuimus.json */ "./tufts/localJson/lat/lat-tufts-adfuimus.json");
var _tufts_localJson_lat_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-adfuimus.json */ "./tufts/localJson/lat/lat-tufts-adfuimus.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-adsum.json */ "./tufts/localJson/lat/lat-tufts-adsum.json");
var _tufts_localJson_lat_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-adsum.json */ "./tufts/localJson/lat/lat-tufts-adsum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-afueras.json */ "./tufts/localJson/lat/lat-tufts-afueras.json");
var _tufts_localJson_lat_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-afueras.json */ "./tufts/localJson/lat/lat-tufts-afueras.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-auditum.json */ "./tufts/localJson/lat/lat-tufts-auditum.json");
var _tufts_localJson_lat_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-auditum.json */ "./tufts/localJson/lat/lat-tufts-auditum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-cecinisse.json */ "./tufts/localJson/lat/lat-tufts-cecinisse.json");
var _tufts_localJson_lat_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-cecinisse.json */ "./tufts/localJson/lat/lat-tufts-cecinisse.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-cepit.json */ "./tufts/localJson/lat/lat-tufts-cepit.json");
var _tufts_localJson_lat_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-cepit.json */ "./tufts/localJson/lat/lat-tufts-cepit.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-colendi.json */ "./tufts/localJson/lat/lat-tufts-colendi.json");
var _tufts_localJson_lat_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-colendi.json */ "./tufts/localJson/lat/lat-tufts-colendi.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-conditum.json */ "./tufts/localJson/lat/lat-tufts-conditum.json");
var _tufts_localJson_lat_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-conditum.json */ "./tufts/localJson/lat/lat-tufts-conditum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-cupidinibus.json */ "./tufts/localJson/lat/lat-tufts-cupidinibus.json");
var _tufts_localJson_lat_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-cupidinibus.json */ "./tufts/localJson/lat/lat-tufts-cupidinibus.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-cursu.json */ "./tufts/localJson/lat/lat-tufts-cursu.json");
var _tufts_localJson_lat_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-cursu.json */ "./tufts/localJson/lat/lat-tufts-cursu.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-curru.json */ "./tufts/localJson/lat/lat-tufts-curru.json");
var _tufts_localJson_lat_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-curru.json */ "./tufts/localJson/lat/lat-tufts-curru.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ego.json */ "./tufts/localJson/lat/lat-tufts-ego.json");
var _tufts_localJson_lat_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ego.json */ "./tufts/localJson/lat/lat-tufts-ego.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-est.json */ "./tufts/localJson/lat/lat-tufts-est.json");
var _tufts_localJson_lat_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-est.json */ "./tufts/localJson/lat/lat-tufts-est.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-iam.json */ "./tufts/localJson/lat/lat-tufts-iam.json");
var _tufts_localJson_lat_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-iam.json */ "./tufts/localJson/lat/lat-tufts-iam.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ierint.json */ "./tufts/localJson/lat/lat-tufts-ierint.json");
var _tufts_localJson_lat_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ierint.json */ "./tufts/localJson/lat/lat-tufts-ierint.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ierunt.json */ "./tufts/localJson/lat/lat-tufts-ierunt.json");
var _tufts_localJson_lat_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ierunt.json */ "./tufts/localJson/lat/lat-tufts-ierunt.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ineo.json */ "./tufts/localJson/lat/lat-tufts-ineo.json");
var _tufts_localJson_lat_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ineo.json */ "./tufts/localJson/lat/lat-tufts-ineo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-inerimus.json */ "./tufts/localJson/lat/lat-tufts-inerimus.json");
var _tufts_localJson_lat_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-inerimus.json */ "./tufts/localJson/lat/lat-tufts-inerimus.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-itum.json */ "./tufts/localJson/lat/lat-tufts-itum.json");
var _tufts_localJson_lat_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-itum.json */ "./tufts/localJson/lat/lat-tufts-itum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-itu.json */ "./tufts/localJson/lat/lat-tufts-itu.json");
var _tufts_localJson_lat_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-itu.json */ "./tufts/localJson/lat/lat-tufts-itu.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-iverim.json */ "./tufts/localJson/lat/lat-tufts-iverim.json");
var _tufts_localJson_lat_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-iverim.json */ "./tufts/localJson/lat/lat-tufts-iverim.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ivissem.json */ "./tufts/localJson/lat/lat-tufts-ivissem.json");
var _tufts_localJson_lat_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_24___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ivissem.json */ "./tufts/localJson/lat/lat-tufts-ivissem.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-iugandis.json */ "./tufts/localJson/lat/lat-tufts-iugandis.json");
var _tufts_localJson_lat_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-iugandis.json */ "./tufts/localJson/lat/lat-tufts-iugandis.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ferent.json */ "./tufts/localJson/lat/lat-tufts-ferent.json");
var _tufts_localJson_lat_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_26___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ferent.json */ "./tufts/localJson/lat/lat-tufts-ferent.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-maluerimus.json */ "./tufts/localJson/lat/lat-tufts-maluerimus.json");
var _tufts_localJson_lat_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_27___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-maluerimus.json */ "./tufts/localJson/lat/lat-tufts-maluerimus.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-mare.json */ "./tufts/localJson/lat/lat-tufts-mare.json");
var _tufts_localJson_lat_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_28___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-mare.json */ "./tufts/localJson/lat/lat-tufts-mare.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-marita.json */ "./tufts/localJson/lat/lat-tufts-marita.json");
var _tufts_localJson_lat_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_29___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-marita.json */ "./tufts/localJson/lat/lat-tufts-marita.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-mellitisque.json */ "./tufts/localJson/lat/lat-tufts-mellitisque.json");
var _tufts_localJson_lat_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_30___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-mellitisque.json */ "./tufts/localJson/lat/lat-tufts-mellitisque.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-nequeo.json */ "./tufts/localJson/lat/lat-tufts-nequeo.json");
var _tufts_localJson_lat_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_31___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-nequeo.json */ "./tufts/localJson/lat/lat-tufts-nequeo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-nevolo.json */ "./tufts/localJson/lat/lat-tufts-nevolo.json");
var _tufts_localJson_lat_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_32___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-nevolo.json */ "./tufts/localJson/lat/lat-tufts-nevolo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-nitido.json */ "./tufts/localJson/lat/lat-tufts-nitido.json");
var _tufts_localJson_lat_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_33___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-nitido.json */ "./tufts/localJson/lat/lat-tufts-nitido.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-nolo.json */ "./tufts/localJson/lat/lat-tufts-nolo.json");
var _tufts_localJson_lat_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_34___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-nolo.json */ "./tufts/localJson/lat/lat-tufts-nolo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-obsum.json */ "./tufts/localJson/lat/lat-tufts-obsum.json");
var _tufts_localJson_lat_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_35___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-obsum.json */ "./tufts/localJson/lat/lat-tufts-obsum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-palmaque.json */ "./tufts/localJson/lat/lat-tufts-palmaque.json");
var _tufts_localJson_lat_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_36___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-palmaque.json */ "./tufts/localJson/lat/lat-tufts-palmaque.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-placito.json */ "./tufts/localJson/lat/lat-tufts-placito.json");
var _tufts_localJson_lat_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_37___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-placito.json */ "./tufts/localJson/lat/lat-tufts-placito.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-praefuistis.json */ "./tufts/localJson/lat/lat-tufts-praefuistis.json");
var _tufts_localJson_lat_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_38___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-praefuistis.json */ "./tufts/localJson/lat/lat-tufts-praefuistis.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-possum.json */ "./tufts/localJson/lat/lat-tufts-possum.json");
var _tufts_localJson_lat_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_39___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-possum.json */ "./tufts/localJson/lat/lat-tufts-possum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-proderitis.json */ "./tufts/localJson/lat/lat-tufts-proderitis.json");
var _tufts_localJson_lat_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_40___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-proderitis.json */ "./tufts/localJson/lat/lat-tufts-proderitis.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-servet.json */ "./tufts/localJson/lat/lat-tufts-servet.json");
var _tufts_localJson_lat_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_41___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-servet.json */ "./tufts/localJson/lat/lat-tufts-servet.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-submersasque.json */ "./tufts/localJson/lat/lat-tufts-submersasque.json");
var _tufts_localJson_lat_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_42___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-submersasque.json */ "./tufts/localJson/lat/lat-tufts-submersasque.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-sui.json */ "./tufts/localJson/lat/lat-tufts-sui.json");
var _tufts_localJson_lat_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_43___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-sui.json */ "./tufts/localJson/lat/lat-tufts-sui.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-subsum.json */ "./tufts/localJson/lat/lat-tufts-subsum.json");
var _tufts_localJson_lat_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_44___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-subsum.json */ "./tufts/localJson/lat/lat-tufts-subsum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-sum.json */ "./tufts/localJson/lat/lat-tufts-sum.json");
var _tufts_localJson_lat_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-sum.json */ "./tufts/localJson/lat/lat-tufts-sum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-supersum.json */ "./tufts/localJson/lat/lat-tufts-supersum.json");
var _tufts_localJson_lat_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_46___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-supersum.json */ "./tufts/localJson/lat/lat-tufts-supersum.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-tuleritis.json */ "./tufts/localJson/lat/lat-tufts-tuleritis.json");
var _tufts_localJson_lat_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_47___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-tuleritis.json */ "./tufts/localJson/lat/lat-tufts-tuleritis.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-veneo.json */ "./tufts/localJson/lat/lat-tufts-veneo.json");
var _tufts_localJson_lat_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_48___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-veneo.json */ "./tufts/localJson/lat/lat-tufts-veneo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-venit.json */ "./tufts/localJson/lat/lat-tufts-venit.json");
var _tufts_localJson_lat_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_49___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-venit.json */ "./tufts/localJson/lat/lat-tufts-venit.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-volui.json */ "./tufts/localJson/lat/lat-tufts-volui.json");
var _tufts_localJson_lat_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_50___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-volui.json */ "./tufts/localJson/lat/lat-tufts-volui.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-queo.json */ "./tufts/localJson/lat/lat-tufts-queo.json");
var _tufts_localJson_lat_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_51___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-queo.json */ "./tufts/localJson/lat/lat-tufts-queo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_facili_json__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-facili.json */ "./tufts/localJson/lat/lat-tufts-facili.json");
var _tufts_localJson_lat_lat_tufts_facili_json__WEBPACK_IMPORTED_MODULE_52___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-facili.json */ "./tufts/localJson/lat/lat-tufts-facili.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_ovo_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-ovo.json */ "./tufts/localJson/lat/lat-tufts-ovo.json");
var _tufts_localJson_lat_lat_tufts_ovo_json__WEBPACK_IMPORTED_MODULE_53___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-ovo.json */ "./tufts/localJson/lat/lat-tufts-ovo.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_adsit_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-adsit.json */ "./tufts/localJson/lat/lat-tufts-adsit.json");
var _tufts_localJson_lat_lat_tufts_adsit_json__WEBPACK_IMPORTED_MODULE_54___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-adsit.json */ "./tufts/localJson/lat/lat-tufts-adsit.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_Orontea_json__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-Orontea.json */ "./tufts/localJson/lat/lat-tufts-Orontea.json");
var _tufts_localJson_lat_lat_tufts_Orontea_json__WEBPACK_IMPORTED_MODULE_55___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-Orontea.json */ "./tufts/localJson/lat/lat-tufts-Orontea.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_perfundere_json__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-perfundere.json */ "./tufts/localJson/lat/lat-tufts-perfundere.json");
var _tufts_localJson_lat_lat_tufts_perfundere_json__WEBPACK_IMPORTED_MODULE_56___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-perfundere.json */ "./tufts/localJson/lat/lat-tufts-perfundere.json", 1);
/* harmony import */ var _tufts_localJson_lat_lat_tufts_male_json__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @/tufts/localJson/lat/lat-tufts-male.json */ "./tufts/localJson/lat/lat-tufts-male.json");
var _tufts_localJson_lat_lat_tufts_male_json__WEBPACK_IMPORTED_MODULE_57___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/lat/lat-tufts-male.json */ "./tufts/localJson/lat/lat-tufts-male.json", 1);





























































































class LatTuftsFixture {
  static get library () {
    return {
      default: _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'aberis': _tufts_localJson_lat_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_1__,
      'adeo': _tufts_localJson_lat_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_2__,
      'adfuimus': _tufts_localJson_lat_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_3__,
      'adsum': _tufts_localJson_lat_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_4__,
      'afueras': _tufts_localJson_lat_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_5__,
      'auditum': _tufts_localJson_lat_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_6__,
      'cecinisse': _tufts_localJson_lat_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_7__,
      'cepit': _tufts_localJson_lat_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8__,
      'colendi': _tufts_localJson_lat_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_9__,
      'conditum': _tufts_localJson_lat_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_10__,
      'cupidinibus': _tufts_localJson_lat_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_11__,
      'curru': _tufts_localJson_lat_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_13__,
      'cursu': _tufts_localJson_lat_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_12__,
      'ego': _tufts_localJson_lat_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_14__,
      'est': _tufts_localJson_lat_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_15__,
      'iam': _tufts_localJson_lat_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_16__,
      'ierint': _tufts_localJson_lat_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_17__,
      'ierunt': _tufts_localJson_lat_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_18__,
      'ineo': _tufts_localJson_lat_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_19__,
      'inerimus': _tufts_localJson_lat_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_20__,
      'itu': _tufts_localJson_lat_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_22__,
      'itum': _tufts_localJson_lat_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_21__,
      'iugandis': _tufts_localJson_lat_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_25__,
      'iverim': _tufts_localJson_lat_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_23__,
      'ivissem': _tufts_localJson_lat_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_24__,
      'facili': _tufts_localJson_lat_lat_tufts_facili_json__WEBPACK_IMPORTED_MODULE_52__,
      'ferent': _tufts_localJson_lat_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_26__,
      'maluerimus': _tufts_localJson_lat_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_27__,
      'mare': _tufts_localJson_lat_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_28__,
      'marita': _tufts_localJson_lat_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_29__,
      'mellitisque': _tufts_localJson_lat_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_30__,
      'nequeo': _tufts_localJson_lat_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_31__,
      'nevolo': _tufts_localJson_lat_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_32__,
      'nitido': _tufts_localJson_lat_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_33__,
      'nolo': _tufts_localJson_lat_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_34__,
      'obsum': _tufts_localJson_lat_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_35__,
      'ovo': _tufts_localJson_lat_lat_tufts_ovo_json__WEBPACK_IMPORTED_MODULE_53__,
      'palmaque': _tufts_localJson_lat_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_36__,
      'placito': _tufts_localJson_lat_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_37__,     
      'praefuistis': _tufts_localJson_lat_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_38__,
      'possum': _tufts_localJson_lat_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_39__,
      'proderitis': _tufts_localJson_lat_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_40__,
      'servet': _tufts_localJson_lat_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_41__, 
      'submersasque': _tufts_localJson_lat_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_42__,
      'sui': _tufts_localJson_lat_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_43__,
      'sum': _tufts_localJson_lat_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_45__,
      'subsum': _tufts_localJson_lat_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_44__,
      'supersum': _tufts_localJson_lat_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_46__,
      'tuleritis': _tufts_localJson_lat_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_47__,
      'veneo': _tufts_localJson_lat_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_48__,
      'venit': _tufts_localJson_lat_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_49__,
      'volui': _tufts_localJson_lat_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_50__,
      'queo': _tufts_localJson_lat_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_51__,
      'adsit': _tufts_localJson_lat_lat_tufts_adsit_json__WEBPACK_IMPORTED_MODULE_54__,
      'Orontea': _tufts_localJson_lat_lat_tufts_Orontea_json__WEBPACK_IMPORTED_MODULE_55__,
      'perfundere': _tufts_localJson_lat_lat_tufts_perfundere_json__WEBPACK_IMPORTED_MODULE_56__,
      'male': _tufts_localJson_lat_lat_tufts_male_json__WEBPACK_IMPORTED_MODULE_57__
    }
  }
}

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-Orontea.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-Orontea.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Orontea:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-22T10:29:11.155283\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Orontea\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090974286024\"},\"Body\":{\"about\":\"urn:uuid:idm140090974286024\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Orontea\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"gend\":{\"$\":\"all\"}},\"mean\":{\"$\":\"Assume this is capitalized proper name/abbr\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-aberis.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-aberis.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:aberis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:20:11.050753\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:aberis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154441263312\"},\"Body\":{\"about\":\"urn:uuid:idm140154441263312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ab\"},\"suff\":{\"$\":\"eris\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, abfui, abfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"},\"src\":{\"$\":\"Lewis+Short\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":{\"$\":\"be away/absent/distant/missing; be free/removed from; be lacking; be distinct;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-adeo.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-adeo.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adeo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:19:57.189728\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adeo\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429843344\"},{\"resource\":\"urn:uuid:idm140154437535136\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429843344\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ade\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adeo, adire, adivi(ii), aditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"approach; attack; visit, address; undertake; take possession (inheritance);\"}}}},{\"about\":\"urn:uuid:idm140154437535136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adeo\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adeo\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"to such a degree/pass/point; precisely, exactly; thus far; indeed, truly, even;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-adfuimus.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-adfuimus.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adfuimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:29:29.065403\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adfuimus\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432943296\"},{\"resource\":\"urn:uuid:idm140154441230720\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432943296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adfu\"},\"suff\":{\"$\":\"imus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adfuo, adfuere, adfuxi, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"intransitive\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"flow/stream/issue (from), flow away; abound in (w/ABL), be abundant, abound;\"}}}},{\"about\":\"urn:uuid:idm140154441230720\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adfu\"},\"suff\":{\"$\":\"imus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-adsit.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-adsit.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adsit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-22T10:28:11.593744\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adsit\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140090971410728\"},\"Body\":{\"about\":\"urn:uuid:idm140090971410728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ads\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, arfui, arfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"age\":{\"order\":2,\"$\":\"early\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-adsum.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-adsum.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:21:52.514237\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adsum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213062536\"},{\"resource\":\"urn:uuid:idm140440213115816\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213062536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ads\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, arfui, arfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"age\":{\"order\":2,\"$\":\"early\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}},{\"about\":\"urn:uuid:idm140440213115816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adsum\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsumo, adsumere, adsumpsi, adsumptus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take (to/up/on/from), adopt/raise, use; assume/receive; insert/add; usurp/claim\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-afueras.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-afueras.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:afueras:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:30:32.549980\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:afueras\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213060456\"},\"Body\":{\"about\":\"urn:uuid:idm140440213060456\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"afu\"},\"suff\":{\"$\":\"eras\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"apsum, apesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":{\"$\":\"be away/absent/distant/missing; be free/removed from; be lacking; be distinct;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-auditum.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-auditum.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:auditum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:14.876725\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:auditum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432900560\"},{\"resource\":\"urn:uuid:idm140154428369984\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432900560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"audio, audire, audivi, auditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hear, listen, accept, agree with; obey; harken, pay attention; be able to hear;\"}}}},{\"about\":\"urn:uuid:idm140154428369984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"auditus, auditus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hearing; listening; act/sense of hearing; hearsay;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-cecinisse.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-cecinisse.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cecinisse:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:02:56.072513\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cecinisse\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213059896\"},\"Body\":{\"about\":\"urn:uuid:idm140440213059896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cecin\"},\"suff\":{\"$\":\"isse\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"infinitive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cano, canere, cecini, cantus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"sing, celebrate, chant; crow; recite; play (music)/sound (horn); foretell;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-cepit.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-cepit.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cepit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:38.012590\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cepit\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440214675736\"},\"Body\":{\"about\":\"urn:uuid:idm140440214675736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cep\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"capio, capere, cepi, captus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take hold, seize; grasp; take bribe; arrest/capture; put on; occupy; captivate;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-colendi.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-colendi.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:colendi:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:06:54.283240\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:colendi\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440215139528\"},\"Body\":{\"about\":\"urn:uuid:idm140440215139528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"colo, colere, colui, cultus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"live in (place), inhabit; till, cultivate, promote growth; foster, maintain;\"},{\"$\":\"honor, cherish, worship; tend, take care of; adorn, dress, decorate, embellish;\"}]}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-conditum.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-conditum.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:conditum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:57.714468\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:conditum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440212346408\"},{\"resource\":\"urn:uuid:idm140440212857352\"},{\"resource\":\"urn:uuid:idm140440207955816\"},{\"resource\":\"urn:uuid:idm140440208432936\"},{\"resource\":\"urn:uuid:idm140440212620424\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440212346408\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"condo, condere, condidi, conditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"put/insert (into); store up/put away, preserve, bottle (wine); bury/inter; sink\"},{\"$\":\"build/found, make; shut (eyes); conceal/hide/keep safe; put together, compose;\"},{\"$\":\"restore; sheathe (sword); plunge/bury (weapon in enemy); put out of sight;\"}]}}},{\"about\":\"urn:uuid:idm140440212857352\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"condio, condire, condivi, conditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"preserve/pickle; embalm/mummify; spice; season/flavor/render pleasant/give zest\"}}}},{\"about\":\"urn:uuid:idm140440207955816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditum, conditi\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Lewis+Short\"}},\"mean\":[{\"$\":\"aromatic/spiced wine; seasoned food (pl.) (OLD);\"},{\"$\":\"secret, something hidden/concealed;\"}]}}},{\"about\":\"urn:uuid:idm140440208432936\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, conditus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"founding (of a city); establishment; preparing (L+S); preserving fruit; hiding;\"}}}},{\"about\":\"urn:uuid:idm140440212620424\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, condita, conditum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, condita -um, conditior -or -us, conditissimus -a -um\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":[{\"$\":\"preserved, kept in store; hidden, concealed, secret; sunken (eyes);\"},{\"$\":\"seasoned, spiced up, flavored, savory; polished, ornamented (discourse/style);\"}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-cupidinibus.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-cupidinibus.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cupidinibus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:16.309115\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cupidinibus\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208154872\"},{\"resource\":\"urn:uuid:idm140440218417896\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208154872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"Cupido, Cupidinis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"religion\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"Cupid, son of Venus; personification of carnal desire;\"}}}},{\"about\":\"urn:uuid:idm140440218417896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cupido, cupidinis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"common\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"desire/love/wish/longing (passionate); lust; greed, appetite; desire for gain;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-curru.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-curru.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:curru:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:54:28.730026\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:curru\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213127032\"},\"Body\":{\"about\":\"urn:uuid:idm140440213127032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curr\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curr\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"currus, currus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"chariot, light horse vehicle; triumphal chariot; triumph; wheels on plow; cart;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-cursu.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-cursu.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cursu:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:05:32.652354\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cursu\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208608744\"},{\"resource\":\"urn:uuid:idm140440214842440\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208608744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"curro, currere, cucurri, cursus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"intransitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"run/trot/gallop, hurry/hasten/speed, move/travel/proceed/flow swiftly/quickly;\"}}}},{\"about\":\"urn:uuid:idm140440214842440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cursus, cursus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"running; speed/zeal; charge, onrush; forward movement/march; revolution (wheel)\"},{\"$\":\"course/direction, line of advance, orbit; voyage/passage; race; career; series;\"},{\"$\":\"lesson;\"}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ego.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ego.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ego:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:35.260474\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ego\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213319880\"},\"Body\":{\"about\":\"urn:uuid:idm140440213319880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ego\"}},\"pofs\":{\"$\":\"pronoun\"},\"decl\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},\"dict\":{\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"I, me (PERS); myself (REFLEX);\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-est.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-est.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:est:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:51.790009\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:est\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440216700168\"},{\"resource\":\"urn:uuid:idm140440220806712\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440216700168\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"es\"},\"suff\":{\"$\":\"t\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"7th\"},\"var\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"edo, esse, -, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"eat/consume/devour; eat away (fire/water/disease); destroy; spend money on food\"}}}},{\"about\":\"urn:uuid:idm140440220806712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"suff\":{\"$\":\"est\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sum, esse, fui, futurus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-facili.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-facili.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:facili:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-22T10:10:32.842712\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:facili\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102679092080\"},\"Body\":{\"about\":\"urn:uuid:idm140102679092080\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"facil\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"facil\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"facilis, facile, facilior -or -us, facillimus -a -um\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"easy, easy to do, without difficulty, ready, quick, good natured, courteous;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ferent.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ferent.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ferent:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:17:14.738060\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ferent\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154434054352\"},\"Body\":{\"about\":\"urn:uuid:idm140154434054352\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"fer\"},\"suff\":{\"$\":\"ent\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"fero, ferre, tuli, latus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"bring, bear; tell/speak of; consider; carry off, win, receive, produce; get;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-iam.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-iam.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iam:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:07:54.037531\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iam\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432913232\"},{\"resource\":\"urn:uuid:idm140154441469760\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432913232\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"i\"},\"suff\":{\"$\":\"am\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154441469760\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iam\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"jam\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"now, already, by/even now; besides; [non ~ => no longer; ~ pridem => long ago];\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ierint.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ierint.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ierint:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:12:40.866667\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ierint\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154438432144\"},{\"resource\":\"urn:uuid:idm140154429843344\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154438432144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Syncope  ier=>iver\"}}},\"mean\":{\"$\":\"Syncopated perfect often drops the 'v' and contracts vowel\"}}}},{\"about\":\"urn:uuid:idm140154429843344\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erint\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erint\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ierunt.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ierunt.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ierunt:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:15:42.046261\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ierunt\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213063064\"},{\"resource\":\"urn:uuid:idm140440211994072\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213063064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Syncope  ier=>iver\"}}},\"mean\":{\"$\":\"Syncopated perfect often drops the 'v' and contracts vowel\"}}}},{\"about\":\"urn:uuid:idm140440211994072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erunt\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ineo.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ineo.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ineo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:19:07.458401\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ineo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427770176\"},\"Body\":{\"about\":\"urn:uuid:idm140154427770176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ine\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ineo, inire, inivi(ii), initus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"enter; undertake; begin; go in; enter upon; [consilium ~ => form a plan];\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-inerimus.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-inerimus.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:inerimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:26:27.574403\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:inerimus\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209971976\"},\"Body\":{\"about\":\"urn:uuid:idm140440209971976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"in\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"insum, inesse, infui, infuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be in/on/there; belong to; be involved in;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-itu.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-itu.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:itu:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:09:45.430558\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:itu\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154439800432\"},{\"resource\":\"urn:uuid:idm140154433195600\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154439800432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154433195600\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"itus, itus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"going, gait; departure;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-itum.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-itum.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:itum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:09:20.002922\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:itum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154439902144\"},{\"resource\":\"urn:uuid:idm140154432866976\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154439902144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154432866976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"itus, itus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"going, gait; departure;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-iugandis.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-iugandis.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iugandis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:58:37.556080\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iugandis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154437099024\"},\"Body\":{\"about\":\"urn:uuid:idm140154437099024\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iug\"},\"suff\":{\"$\":\"andis\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iug\"},\"suff\":{\"$\":\"andis\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"jugo, jugare, jugavi, jugatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"marry; join (to);\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-iverim.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-iverim.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iverim:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:17:04.941996\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iverim\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213326136\"},\"Body\":{\"about\":\"urn:uuid:idm140440213326136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erim\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ivissem.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ivissem.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ivissem:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:19:02.677580\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ivissem\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428621216\"},\"Body\":{\"about\":\"urn:uuid:idm140154428621216\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"issem\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-male.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-male.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:male:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-20T08:42:00.749881\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:male\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140090980040680\"},{\"resource\":\"urn:uuid:idm140090975240424\"},{\"resource\":\"urn:uuid:idm140090972863784\"},{\"resource\":\"urn:uuid:idm140090971748200\"}],\"Body\":[{\"about\":\"urn:uuid:idm140090980040680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mal\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"malus, mali\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"mast; beam; tall pole, upright pole; standard, prop, staff;\"}}}},{\"about\":\"urn:uuid:idm140090975240424\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mal\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"malus, mali\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"feminine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"apple tree;\"}}}},{\"about\":\"urn:uuid:idm140090972863784\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mal\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"malus, mala -um, pejor -or -us, -\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"bad, evil, wicked; ugly; unlucky;\"}}}},{\"about\":\"urn:uuid:idm140090971748200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"male\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"male, pejus, pessime\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"badly, ill, wrongly, wickedly, unfortunately; extremely;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-maluerimus.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-maluerimus.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:maluerimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:15:02.990444\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:maluerimus\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432879904\"},\"Body\":{\"about\":\"urn:uuid:idm140154432879904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"malu\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"malu\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"malo, malle, malui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"prefer; incline toward, wish rather;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-mare.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-mare.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mare:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:14.058672\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mare\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208162616\"},{\"resource\":\"urn:uuid:idm140440222926952\"},{\"resource\":\"urn:uuid:idm140440212861240\"},{\"resource\":\"urn:uuid:idm140440208185768\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208162616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}},{\"about\":\"urn:uuid:idm140440222926952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"sea; sea water;\"}}}},{\"about\":\"urn:uuid:idm140440212861240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male (human/animal/plant); man;\"}}}},{\"about\":\"urn:uuid:idm140440208185768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, (gen.), maris\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-marita.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-marita.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:marita:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:04:21.001664\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:marita\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213063064\"},{\"resource\":\"urn:uuid:idm140440215513912\"},{\"resource\":\"urn:uuid:idm140440208060104\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213063064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"marita, maritae\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"wife;\"}}}},{\"about\":\"urn:uuid:idm140440215513912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"maritus, marita, maritum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"nuptial; of marriage; married, wedded, united;\"}}}},{\"about\":\"urn:uuid:idm140440208060104\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"marito, maritare, maritavi, maritatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"marry, give in marriage;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-mellitisque.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-mellitisque.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mellitisque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:35.784022\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mellitisque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154433077328\"},{\"resource\":\"urn:uuid:idm140154432497312\"},{\"resource\":\"urn:uuid:idm140154434237504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154433077328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (mellitis+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432497312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mellitus, mellita, mellitum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"sweetened with honey; honey-sweet;\"}}}},{\"about\":\"urn:uuid:idm140154434237504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-nequeo.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-nequeo.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nequeo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:21:08.613801\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nequeo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213122408\"},\"Body\":{\"about\":\"urn:uuid:idm140440213122408\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"neque\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nequeo, nequire, nequivi(ii), nequitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be unable, cannot;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-nevolo.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-nevolo.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nevolo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:14:22.935161\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nevolo\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213058088\"},{\"resource\":\"urn:uuid:idm140440211994072\"},{\"resource\":\"urn:uuid:idm140440216894648\"},{\"resource\":\"urn:uuid:idm140440213066072\"},{\"resource\":\"urn:uuid:idm140440226194728\"},{\"resource\":\"urn:uuid:idm140440207890072\"},{\"resource\":\"urn:uuid:idm140440212384120\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213058088\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (ne+volo) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140440211994072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"n\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"neo, nere, nevi, netus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"spin; weave; produce by spinning;\"}}}},{\"about\":\"urn:uuid:idm140440216894648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ne\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ne\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":[{\"$\":\"not; (intro clause of purpose with subj verb); [ne....quidem => not even];\"},{\"$\":\"truly, indeed, verily, assuredly; (particle of assurance); (w/personal PRON);\"}]}}},{\"about\":\"urn:uuid:idm140440213066072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ne\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ne\"},\"pofs\":{\"$\":\"conjunction\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"that not, lest; (for negative of IMP);\"}}}},{\"about\":\"urn:uuid:idm140440226194728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, velle, volui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"wish, want, prefer; be willing, will;\"}}}},{\"about\":\"urn:uuid:idm140440207890072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, volare, volavi, volatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"fly;\"}}}},{\"about\":\"urn:uuid:idm140440212384120\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volo\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volo\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, volonis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"military\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Cassell's\"}},\"mean\":{\"$\":\"volunteers (pl.); (in the Second Punic War);\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-nitido.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-nitido.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nitido:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:57:20.863444\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nitido\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432879904\"},\"Body\":{\"about\":\"urn:uuid:idm140154432879904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nitidus, nitida, nitidum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"shining, bright;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-nolo.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-nolo.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nolo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:15:14.297608\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nolo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154434795568\"},\"Body\":{\"about\":\"urn:uuid:idm140154434795568\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nolo, nolle, nolui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be unwilling; wish not to; refuse to;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-obsum.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-obsum.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:obsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:25:23.029053\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:obsum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154437231296\"},\"Body\":{\"about\":\"urn:uuid:idm140154437231296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"obs\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"obsum, obesse, obfui, obfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"obsum, obesse, offui, offuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}}],\"mean\":{\"$\":\"hurt; be a nuisance to, tell against;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-ovo.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-ovo.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ovo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-22T10:26:02.387506\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ovo\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140102672933664\"},{\"resource\":\"urn:uuid:idm140102673250880\"}],\"Body\":[{\"about\":\"urn:uuid:idm140102672933664\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ov\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ov\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ovum, ovi\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"egg; oval;\"}}}},{\"about\":\"urn:uuid:idm140102673250880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ov\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ovo, ovare, ovavi, ovatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"rejoice;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-palmaque.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-palmaque.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:palmaque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:04.835169\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:palmaque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154437084688\"},{\"resource\":\"urn:uuid:idm140154432820544\"},{\"resource\":\"urn:uuid:idm140154428164720\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154437084688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (palma+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432820544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"palma, palmae\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"palm/width of the hand; hand; palm tree/branch; date; palm award/first place;\"}}}},{\"about\":\"urn:uuid:idm140154428164720\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-perfundere.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-perfundere.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:perfundere:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2020-01-22T10:30:08.713949\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:perfundere\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140102673318672\"},\"Body\":{\"about\":\"urn:uuid:idm140102673318672\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"perfund\"},\"suff\":{\"$\":\"ere\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"infinitive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"perfund\"},\"suff\":{\"$\":\"ere\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"perfund\"},\"suff\":{\"$\":\"ere\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"perfund\"},\"suff\":{\"$\":\"ere\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"perfundo, perfundere, perfudi, perfusus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"pour over/through, wet, flood, bathe; overspread, coat, overlay; imbue;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-placito.json":
/*!****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-placito.json ***!
  \****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:placito:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:24.183580\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:placito\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430090656\"},{\"resource\":\"urn:uuid:idm140154432866976\"},{\"resource\":\"urn:uuid:idm140154429222656\"},{\"resource\":\"urn:uuid:idm140154432413840\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430090656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placeo, placere, placui, placitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"kind\":{\"$\":\"taking dative\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placet, placere, -, placitus est\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"kind\":{\"$\":\"impersonal\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}}],\"mean\":[{\"$\":\"please, satisfy, give pleasure to (with dat.);\"},{\"$\":\"it is pleasing/satisfying, gives pleasure; is believed/settled/agreed/decided;\"}]}}},{\"about\":\"urn:uuid:idm140154432866976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placitum, placiti\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Bracton\"}},\"mean\":{\"$\":\"plea;\"}}}},{\"about\":\"urn:uuid:idm140154429222656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placitus, placita, placitum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"area\":{\"$\":\"poetry\"},\"freq\":{\"order\":3,\"$\":\"lesser\"},\"src\":{\"$\":\"Lewis+Short\"}},\"mean\":{\"$\":\"pleasing; agreed upon;\"}}}},{\"about\":\"urn:uuid:idm140154432413840\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placito, placitare, placitavi, placitatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Bracton\"}},\"mean\":{\"$\":\"plead;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-possum.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-possum.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:possum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:12:12.511258\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:possum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213501496\"},\"Body\":{\"about\":\"urn:uuid:idm140440213501496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"poss\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"possum, posse, potui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be able, can; [multum  posse => have much/more/most influence/power];\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-praefuistis.json":
/*!********************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-praefuistis.json ***!
  \********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:praefuistis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:24:20.776672\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:praefuistis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213127032\"},\"Body\":{\"about\":\"urn:uuid:idm140440213127032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"praefu\"},\"suff\":{\"$\":\"istis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"praesum, praeesse, praefui, praefuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be in charge/control/head (of) (w/DAT); take the lead (in); be present (at);\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-proderitis.json":
/*!*******************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-proderitis.json ***!
  \*******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:proderitis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:32:16.699411\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:proderitis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208177880\"},\"Body\":{\"about\":\"urn:uuid:idm140440208177880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"prod\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"prosum, prodesse, profui, profuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be useful, be advantageous, benefit, profit (with DAT);\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-queo.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-queo.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:queo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:23:24.059969\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:queo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154442151616\"},\"Body\":{\"about\":\"urn:uuid:idm140154442151616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"queo, quire, quivi(ii), quitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be able;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-servet.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-servet.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:servet:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:59:53.119068\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:servet\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432977872\"},\"Body\":{\"about\":\"urn:uuid:idm140154432977872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"serv\"},\"suff\":{\"$\":\"et\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"servo, servare, servavi, servatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"watch over; protect, store, keep, guard, preserve, save;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-submersasque.json":
/*!*********************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-submersasque.json ***!
  \*********************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:submersasque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:43.652502\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:submersasque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154428091200\"},{\"resource\":\"urn:uuid:idm140154432909728\"},{\"resource\":\"urn:uuid:idm140154436103696\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154428091200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (submersas+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432909728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}},{\"about\":\"urn:uuid:idm140154436103696\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"submers\"},\"suff\":{\"$\":\"as\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"feminine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"submergo, submergere, submersi, submersus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"plunge under, submerge;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-subsum.json":
/*!***************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-subsum.json ***!
  \***************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:subsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:29:17.509369\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:subsum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208177880\"},\"Body\":{\"about\":\"urn:uuid:idm140440208177880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"subs\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"subsum, subesse, subfui, subfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"be underneath/a basis for discussion/close at hand as a reserve, be near;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-sui.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-sui.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:sui:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:26:06.832418\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:sui\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209339480\"},{\"resource\":\"urn:uuid:idm140440227388728\"},{\"resource\":\"urn:uuid:idm140440208370840\"},{\"resource\":\"urn:uuid:idm140440209271592\"},{\"resource\":\"urn:uuid:idm140440209368312\"},{\"resource\":\"urn:uuid:idm140440208451320\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209339480\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suus, sui\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his men (pl.), his friends;\"}}}},{\"about\":\"urn:uuid:idm140440227388728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suum, sui\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his property (pl.); [se suaque => themselves and their possessions];\"}}}},{\"about\":\"urn:uuid:idm140440208370840\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suus, sua, suum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his/one's (own), her (own), hers, its (own); (pl.) their (own), theirs;\"}}}},{\"about\":\"urn:uuid:idm140440209271592\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"infinitive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suo, suere, sui, sutus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"sew together/up, stitch;\"}}}},{\"about\":\"urn:uuid:idm140440209368312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sus, suis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"common\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"swine; hog, pig, sow;\"}}}},{\"about\":\"urn:uuid:idm140440208451320\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"s\"},\"suff\":{\"$\":\"ui\"}},\"pofs\":{\"$\":\"pronoun\"},\"decl\":{\"$\":\"5th\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"common\"}},\"dict\":{\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"him/her/it/ones-self; him/her/it; them (selves) (pl.); each other, one another;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-sum.json":
/*!************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-sum.json ***!
  \************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:sum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:26:27.788508\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:sum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154433246432\"},{\"resource\":\"urn:uuid:idm140154439799536\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154433246432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"sum\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sumo, sumere, sumpsi, sumptus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sumo, sumere, sumsi, sumtus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":[{\"$\":\"take up; begin; suppose, assume; select; purchase; exact (punishment); obtain;\"},{\"$\":\"accept; begin; suppose; select; purchase; obtain; (sumpsi, sumptum);\"}]}}},{\"about\":\"urn:uuid:idm140154439799536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"s\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sum, esse, fui, futurus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-supersum.json":
/*!*****************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-supersum.json ***!
  \*****************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:supersum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:27:28.521396\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:supersum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440217173048\"},\"Body\":{\"about\":\"urn:uuid:idm140440217173048\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"supers\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"supersum, superesse, superfui, superfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be left over; survive; be in excess/superfluous (to); remain to be performed;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-tuleritis.json":
/*!******************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-tuleritis.json ***!
  \******************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:tuleritis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:16:26.407776\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:tuleritis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440216963880\"},\"Body\":{\"about\":\"urn:uuid:idm140440216963880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"tul\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"tul\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"fero, ferre, tuli, latus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"bring, bear; tell/speak of; consider; carry off, win, receive, produce; get;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-veneo.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-veneo.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:veneo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:18:43.513003\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:veneo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154433151632\"},\"Body\":{\"about\":\"urn:uuid:idm140154433151632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vene\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"veneo, venire, venivi(ii), venitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;\"}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-venit.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-venit.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:venit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:03:56.955770\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:venit\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154437070240\"},{\"resource\":\"urn:uuid:idm140154439313360\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154437070240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"veni\"},\"suff\":{\"$\":\"t\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"veneo, venire, venivi(ii), venitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;\"}}}},{\"about\":\"urn:uuid:idm140154439313360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ven\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ven\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"venio, venire, veni, ventus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"come;\"}}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/lat/lat-tufts-volui.json":
/*!**************************************************!*\
  !*** ./tufts/localJson/lat/lat-tufts-volui.json ***!
  \**************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:volui:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:13:09.342476\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:volui\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432817584\"},{\"resource\":\"urn:uuid:idm140154433814480\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432817584\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, velle, volui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"wish, want, prefer; be willing, will;\"}}}},{\"about\":\"urn:uuid:idm140154433814480\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"infinitive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volvo, volvere, volvi, volutus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"roll, cause to roll; travel in circle/circuit; bring around/about; revolve;\"},{\"$\":\"envelop, wrap up; unroll (scroll); recite, reel off; turn over (in mind);\"},{\"$\":\"roll along/forward; (PASS) move sinuously (snake); grovel, roll on ground;\"}]}}}]}}}");

/***/ }),

/***/ "./tufts/localJson/per-tufts-fixtures.js":
/*!***********************************************!*\
  !*** ./tufts/localJson/per-tufts-fixtures.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerTuftsFixture; });
/* harmony import */ var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json");
var _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/tufts-default.json */ "./tufts/localJson/tufts-default.json", 1);
/* harmony import */ var _tufts_localJson_per_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/per/per-tufts-pass.json */ "./tufts/localJson/per/per-tufts-pass.json");
var _tufts_localJson_per_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/tufts/localJson/per/per-tufts-pass.json */ "./tufts/localJson/per/per-tufts-pass.json", 1);



class PerTuftsFixture {
  static get library () {
    return {
      default: _tufts_localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'بگذرد': _tufts_localJson_per_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_1__
    }
  }
}

/***/ }),

/***/ "./tufts/localJson/per/per-tufts-pass.json":
/*!*************************************************!*\
  !*** ./tufts/localJson/per/per-tufts-pass.json ***!
  \*************************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:بگذرد:hazm\",\"creator\":{\"Agent\":{\"about\":\"org.PersDigUMD:tools.hazm.v2\"}},\"created\":{\"$\":\"2019-12-23T06:35:55.802615\"},\"rights\":{\"$\":\"Morphology from the HAZM Analyzer (http://www.sobhe.ir/hazm), supplied by the Center for Advanced Study of Language (CASL) at the University of Maryland, College Park (UMD) and adapted by the Roshan Institute for Persian Studies at UMD (http://persdig.umd.edu). This work was also supported by the Perseus Digital Library at Tufts University (http://www.perseus.tufts.edu).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:بگذرد\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212857112\"},\"Body\":{\"about\":\"urn:uuid:idm140440212857112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"per\",\"$\":\"گذشت#گذر\"}},\"infl\":{\"term\":{\"lang\":\"per\",\"stem\":{\"$\":\"بگذرد\"}}}}}}}}}");

/***/ }),

/***/ "./tufts/localJson/tufts-default.json":
/*!********************************************!*\
  !*** ./tufts/localJson/tufts-default.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:bla-bla:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:38:44.395081\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:bla-bla\"}},\"title\":{}}}}");

/***/ }),

/***/ "./tufts/tufts-fixture.js":
/*!********************************!*\
  !*** ./tufts/tufts-fixture.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fixture; });
/* harmony import */ var _tufts_localJson_ara_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tufts/localJson/ara-tufts-fixtures.js */ "./tufts/localJson/ara-tufts-fixtures.js");
/* harmony import */ var _tufts_localJson_per_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tufts/localJson/per-tufts-fixtures.js */ "./tufts/localJson/per-tufts-fixtures.js");
/* harmony import */ var _tufts_localJson_gez_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tufts/localJson/gez-tufts-fixtures.js */ "./tufts/localJson/gez-tufts-fixtures.js");
/* harmony import */ var _tufts_localJson_grc_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tufts/localJson/grc-tufts-fixtures.js */ "./tufts/localJson/grc-tufts-fixtures.js");
/* harmony import */ var _tufts_localJson_lat_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tufts/localJson/lat-tufts-fixtures.js */ "./tufts/localJson/lat-tufts-fixtures.js");






const library = {
  gez: {
    tufts: _tufts_localJson_gez_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_2__["default"].library
  },
  grc: {
    tufts: _tufts_localJson_grc_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_3__["default"].library
  },
  lat: {
    tufts: _tufts_localJson_lat_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_4__["default"].library
  },
  ara: {
    tufts: _tufts_localJson_ara_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_0__["default"].library
  },
  per: {
    tufts: _tufts_localJson_per_tufts_fixtures_js__WEBPACK_IMPORTED_MODULE_1__["default"].library
  }
}

class Fixture {
  static defineFileByParameters (params) {
    if (!library[params.langCode]) { return }
    if (!library[params.langCode][params.adapter]) { return }
    
    return library[params.langCode][params.adapter][params.word] ? library[params.langCode][params.adapter][params.word] : library[params.langCode][params.adapter].default
  }

  static getFixtureRes(params) {
    const sourceFile = Fixture.defineFileByParameters(params)
    
    if (!sourceFile) { 
      console.info('There is no fixture for ', params.langCode + '-' + params.adapter + '-' + params.word)
    }

    return sourceFile
  }
}



/***/ })

/******/ });
});
//# sourceMappingURL=alpheios-fixtures.js.map