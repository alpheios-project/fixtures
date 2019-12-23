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

/***/ "./fixture.js":
/*!********************!*\
  !*** ./fixture.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fixture; });
/* harmony import */ var _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/localJson/tufts-default.json */ "./localJson/tufts-default.json");
var _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/tufts-default.json */ "./localJson/tufts-default.json", 1);
/* harmony import */ var _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/localJson/gez-tufts-hageriye.json */ "./localJson/gez-tufts-hageriye.json");
var _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/gez-tufts-hageriye.json */ "./localJson/gez-tufts-hageriye.json", 1);
/* harmony import */ var _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/localJson/grc-tufts-eloin.json */ "./localJson/grc-tufts-eloin.json");
var _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-eloin.json */ "./localJson/grc-tufts-eloin.json", 1);
/* harmony import */ var _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/localJson/grc-tufts-oudemia.json */ "./localJson/grc-tufts-oudemia.json");
var _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oudemia.json */ "./localJson/grc-tufts-oudemia.json", 1);
/* harmony import */ var _localJson_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/localJson/grc-tufts-dedia.json */ "./localJson/grc-tufts-dedia.json");
var _localJson_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dedia.json */ "./localJson/grc-tufts-dedia.json", 1);
/* harmony import */ var _localJson_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/localJson/grc-tufts-dedii.json */ "./localJson/grc-tufts-dedii.json");
var _localJson_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dedii.json */ "./localJson/grc-tufts-dedii.json", 1);
/* harmony import */ var _localJson_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/localJson/grc-tufts-dediiton.json */ "./localJson/grc-tufts-dediiton.json");
var _localJson_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dediiton.json */ "./localJson/grc-tufts-dediiton.json", 1);
/* harmony import */ var _localJson_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/localJson/grc-tufts-dediite.json */ "./localJson/grc-tufts-dediite.json");
var _localJson_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dediite.json */ "./localJson/grc-tufts-dediite.json", 1);
/* harmony import */ var _localJson_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/localJson/grc-tufts-dedimen.json */ "./localJson/grc-tufts-dedimen.json");
var _localJson_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dedimen.json */ "./localJson/grc-tufts-dedimen.json", 1);
/* harmony import */ var _localJson_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/localJson/grc-tufts-dedotai.json */ "./localJson/grc-tufts-dedotai.json");
var _localJson_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dedotai.json */ "./localJson/grc-tufts-dedotai.json", 1);
/* harmony import */ var _localJson_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/localJson/grc-tufts-edediei.json */ "./localJson/grc-tufts-edediei.json");
var _localJson_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-edediei.json */ "./localJson/grc-tufts-edediei.json", 1);
/* harmony import */ var _localJson_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/localJson/grc-tufts-oida.json */ "./localJson/grc-tufts-oida.json");
var _localJson_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oida.json */ "./localJson/grc-tufts-oida.json", 1);
/* harmony import */ var _localJson_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/localJson/grc-tufts-fo.json */ "./localJson/grc-tufts-fo.json");
var _localJson_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-fo.json */ "./localJson/grc-tufts-fo.json", 1);
/* harmony import */ var _localJson_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/localJson/grc-tufts-fis.json */ "./localJson/grc-tufts-fis.json");
var _localJson_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-fis.json */ "./localJson/grc-tufts-fis.json", 1);
/* harmony import */ var _localJson_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/localJson/grc-tufts-fite.json */ "./localJson/grc-tufts-fite.json");
var _localJson_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-fite.json */ "./localJson/grc-tufts-fite.json", 1);
/* harmony import */ var _localJson_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/localJson/grc-tufts-faii.json */ "./localJson/grc-tufts-faii.json");
var _localJson_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-faii.json */ "./localJson/grc-tufts-faii.json", 1);
/* harmony import */ var _localJson_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/localJson/grc-tufts-faimen.json */ "./localJson/grc-tufts-faimen.json");
var _localJson_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-faimen.json */ "./localJson/grc-tufts-faimen.json", 1);
/* harmony import */ var _localJson_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/localJson/grc-tufts-faien.json */ "./localJson/grc-tufts-faien.json");
var _localJson_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-faien.json */ "./localJson/grc-tufts-faien.json", 1);
/* harmony import */ var _localJson_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/localJson/grc-tufts-etheto.json */ "./localJson/grc-tufts-etheto.json");
var _localJson_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-etheto.json */ "./localJson/grc-tufts-etheto.json", 1);
/* harmony import */ var _localJson_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/localJson/grc-tufts-dynamai.json */ "./localJson/grc-tufts-dynamai.json");
var _localJson_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dynamai.json */ "./localJson/grc-tufts-dynamai.json", 1);
/* harmony import */ var _localJson_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/localJson/grc-tufts-epistamai.json */ "./localJson/grc-tufts-epistamai.json");
var _localJson_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-epistamai.json */ "./localJson/grc-tufts-epistamai.json", 1);
/* harmony import */ var _localJson_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/localJson/grc-tufts-poio.json */ "./localJson/grc-tufts-poio.json");
var _localJson_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-poio.json */ "./localJson/grc-tufts-poio.json", 1);
/* harmony import */ var _localJson_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/localJson/grc-tufts-poioumen.json */ "./localJson/grc-tufts-poioumen.json");
var _localJson_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-poioumen.json */ "./localJson/grc-tufts-poioumen.json", 1);
/* harmony import */ var _localJson_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/localJson/grc-tufts-plei.json */ "./localJson/grc-tufts-plei.json");
var _localJson_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-plei.json */ "./localJson/grc-tufts-plei.json", 1);
/* harmony import */ var _localJson_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/localJson/grc-tufts-oi.json */ "./localJson/grc-tufts-oi.json");
var _localJson_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_24___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oi.json */ "./localJson/grc-tufts-oi.json", 1);
/* harmony import */ var _localJson_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/localJson/grc-tufts-oi2.json */ "./localJson/grc-tufts-oi2.json");
var _localJson_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oi2.json */ "./localJson/grc-tufts-oi2.json", 1);
/* harmony import */ var _localJson_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/localJson/grc-tufts-oi3.json */ "./localJson/grc-tufts-oi3.json");
var _localJson_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_26___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oi3.json */ "./localJson/grc-tufts-oi3.json", 1);
/* harmony import */ var _localJson_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/localJson/grc-tufts-prosfyma.json */ "./localJson/grc-tufts-prosfyma.json");
var _localJson_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_27___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-prosfyma.json */ "./localJson/grc-tufts-prosfyma.json", 1);
/* harmony import */ var _localJson_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/localJson/grc-tufts-kalypso.json */ "./localJson/grc-tufts-kalypso.json");
var _localJson_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_28___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-kalypso.json */ "./localJson/grc-tufts-kalypso.json", 1);
/* harmony import */ var _localJson_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/localJson/grc-tufts-pasi.json */ "./localJson/grc-tufts-pasi.json");
var _localJson_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_29___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-pasi.json */ "./localJson/grc-tufts-pasi.json", 1);
/* harmony import */ var _localJson_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/localJson/grc-tufts-aftin.json */ "./localJson/grc-tufts-aftin.json");
var _localJson_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_30___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-aftin.json */ "./localJson/grc-tufts-aftin.json", 1);
/* harmony import */ var _localJson_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/localJson/grc-tufts-afton.json */ "./localJson/grc-tufts-afton.json");
var _localJson_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_31___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-afton.json */ "./localJson/grc-tufts-afton.json", 1);
/* harmony import */ var _localJson_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/localJson/grc-tufts-aftois.json */ "./localJson/grc-tufts-aftois.json");
var _localJson_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_32___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-aftois.json */ "./localJson/grc-tufts-aftois.json", 1);
/* harmony import */ var _localJson_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/localJson/grc-tufts-fyin.json */ "./localJson/grc-tufts-fyin.json");
var _localJson_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_33___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-fyin.json */ "./localJson/grc-tufts-fyin.json", 1);
/* harmony import */ var _localJson_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/localJson/grc-tufts-tis.json */ "./localJson/grc-tufts-tis.json");
var _localJson_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_34___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-tis.json */ "./localJson/grc-tufts-tis.json", 1);
/* harmony import */ var _localJson_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/localJson/grc-tufts-ode.json */ "./localJson/grc-tufts-ode.json");
var _localJson_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_35___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-ode.json */ "./localJson/grc-tufts-ode.json", 1);
/* harmony import */ var _localJson_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/localJson/grc-tufts-tous.json */ "./localJson/grc-tufts-tous.json");
var _localJson_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_36___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-tous.json */ "./localJson/grc-tufts-tous.json", 1);
/* harmony import */ var _localJson_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/localJson/grc-tufts-dyo.json */ "./localJson/grc-tufts-dyo.json");
var _localJson_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_37___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dyo.json */ "./localJson/grc-tufts-dyo.json", 1);
/* harmony import */ var _localJson_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/localJson/grc-tufts-voulevis.json */ "./localJson/grc-tufts-voulevis.json");
var _localJson_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_38___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-voulevis.json */ "./localJson/grc-tufts-voulevis.json", 1);
/* harmony import */ var _localJson_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/localJson/grc-tufts-voulevesthon.json */ "./localJson/grc-tufts-voulevesthon.json");
var _localJson_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_39___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-voulevesthon.json */ "./localJson/grc-tufts-voulevesthon.json", 1);
/* harmony import */ var _localJson_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/localJson/grc-tufts-voulevefso.json */ "./localJson/grc-tufts-voulevefso.json");
var _localJson_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_40___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-voulevefso.json */ "./localJson/grc-tufts-voulevefso.json", 1);
/* harmony import */ var _localJson_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @/localJson/grc-tufts-agagois.json */ "./localJson/grc-tufts-agagois.json");
var _localJson_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_41___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-agagois.json */ "./localJson/grc-tufts-agagois.json", 1);
/* harmony import */ var _localJson_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @/localJson/grc-tufts-agagou.json */ "./localJson/grc-tufts-agagou.json");
var _localJson_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_42___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-agagou.json */ "./localJson/grc-tufts-agagou.json", 1);
/* harmony import */ var _localJson_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/localJson/grc-tufts-voulefthis.json */ "./localJson/grc-tufts-voulefthis.json");
var _localJson_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_43___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-voulefthis.json */ "./localJson/grc-tufts-voulefthis.json", 1);
/* harmony import */ var _localJson_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/localJson/grc-tufts-leloipi.json */ "./localJson/grc-tufts-leloipi.json");
var _localJson_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_44___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-leloipi.json */ "./localJson/grc-tufts-leloipi.json", 1);
/* harmony import */ var _localJson_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/localJson/grc-tufts-gegrapsai.json */ "./localJson/grc-tufts-gegrapsai.json");
var _localJson_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-gegrapsai.json */ "./localJson/grc-tufts-gegrapsai.json", 1);
/* harmony import */ var _localJson_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @/localJson/grc-tufts-memnomai.json */ "./localJson/grc-tufts-memnomai.json");
var _localJson_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_46___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-memnomai.json */ "./localJson/grc-tufts-memnomai.json", 1);
/* harmony import */ var _localJson_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @/localJson/grc-tufts-egegrapso.json */ "./localJson/grc-tufts-egegrapso.json");
var _localJson_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_47___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-egegrapso.json */ "./localJson/grc-tufts-egegrapso.json", 1);
/* harmony import */ var _localJson_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @/localJson/grc-tufts-tethnixeis.json */ "./localJson/grc-tufts-tethnixeis.json");
var _localJson_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_48___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-tethnixeis.json */ "./localJson/grc-tufts-tethnixeis.json", 1);
/* harmony import */ var _localJson_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @/localJson/grc-tufts-estathi.json */ "./localJson/grc-tufts-estathi.json");
var _localJson_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_49___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-estathi.json */ "./localJson/grc-tufts-estathi.json", 1);
/* harmony import */ var _localJson_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @/localJson/grc-tufts-tethnaton.json */ "./localJson/grc-tufts-tethnaton.json");
var _localJson_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_50___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-tethnaton.json */ "./localJson/grc-tufts-tethnaton.json", 1);
/* harmony import */ var _localJson_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @/localJson/grc-tufts-poieiton.json */ "./localJson/grc-tufts-poieiton.json");
var _localJson_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_51___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-poieiton.json */ "./localJson/grc-tufts-poieiton.json", 1);
/* harmony import */ var _localJson_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @/localJson/grc-tufts-eplei.json */ "./localJson/grc-tufts-eplei.json");
var _localJson_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_52___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-eplei.json */ "./localJson/grc-tufts-eplei.json", 1);
/* harmony import */ var _localJson_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @/localJson/grc-tufts-epoiou.json */ "./localJson/grc-tufts-epoiou.json");
var _localJson_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_53___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-epoiou.json */ "./localJson/grc-tufts-epoiou.json", 1);
/* harmony import */ var _localJson_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @/localJson/grc-tufts-edeonto.json */ "./localJson/grc-tufts-edeonto.json");
var _localJson_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_54___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-edeonto.json */ "./localJson/grc-tufts-edeonto.json", 1);
/* harmony import */ var _localJson_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @/localJson/grc-tufts-oras.json */ "./localJson/grc-tufts-oras.json");
var _localJson_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_55___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oras.json */ "./localJson/grc-tufts-oras.json", 1);
/* harmony import */ var _localJson_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @/localJson/grc-tufts-chromen.json */ "./localJson/grc-tufts-chromen.json");
var _localJson_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_56___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-chromen.json */ "./localJson/grc-tufts-chromen.json", 1);
/* harmony import */ var _localJson_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @/localJson/grc-tufts-eorasthon.json */ "./localJson/grc-tufts-eorasthon.json");
var _localJson_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_57___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-eorasthon.json */ "./localJson/grc-tufts-eorasthon.json", 1);
/* harmony import */ var _localJson_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @/localJson/grc-tufts-chronto.json */ "./localJson/grc-tufts-chronto.json");
var _localJson_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_58___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-chronto.json */ "./localJson/grc-tufts-chronto.json", 1);
/* harmony import */ var _localJson_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @/localJson/grc-tufts-dilois.json */ "./localJson/grc-tufts-dilois.json");
var _localJson_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_59___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dilois.json */ "./localJson/grc-tufts-dilois.json", 1);
/* harmony import */ var _localJson_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @/localJson/grc-tufts-dilousthon.json */ "./localJson/grc-tufts-dilousthon.json");
var _localJson_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_60___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dilousthon.json */ "./localJson/grc-tufts-dilousthon.json", 1);
/* harmony import */ var _localJson_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @/localJson/grc-tufts-etithetin.json */ "./localJson/grc-tufts-etithetin.json");
var _localJson_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_61___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-etithetin.json */ "./localJson/grc-tufts-etithetin.json", 1);
/* harmony import */ var _localJson_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @/localJson/grc-tufts-tithesthon.json */ "./localJson/grc-tufts-tithesthon.json");
var _localJson_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_62___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-tithesthon.json */ "./localJson/grc-tufts-tithesthon.json", 1);
/* harmony import */ var _localJson_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @/localJson/grc-tufts-ethesan.json */ "./localJson/grc-tufts-ethesan.json");
var _localJson_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_63___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-ethesan.json */ "./localJson/grc-tufts-ethesan.json", 1);
/* harmony import */ var _localJson_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @/localJson/grc-tufts-ethemetha.json */ "./localJson/grc-tufts-ethemetha.json");
var _localJson_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_64___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-ethemetha.json */ "./localJson/grc-tufts-ethemetha.json", 1);
/* harmony import */ var _localJson_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @/localJson/grc-tufts-iin.json */ "./localJson/grc-tufts-iin.json");
var _localJson_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_65___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-iin.json */ "./localJson/grc-tufts-iin.json", 1);
/* harmony import */ var _localJson_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @/localJson/grc-tufts-iesthon.json */ "./localJson/grc-tufts-iesthon.json");
var _localJson_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_66___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-iesthon.json */ "./localJson/grc-tufts-iesthon.json", 1);
/* harmony import */ var _localJson_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @/localJson/grc-tufts-dido.json */ "./localJson/grc-tufts-dido.json");
var _localJson_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_67___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dido.json */ "./localJson/grc-tufts-dido.json", 1);
/* harmony import */ var _localJson_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @/localJson/grc-tufts-didoio.json */ "./localJson/grc-tufts-didoio.json");
var _localJson_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_68___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-didoio.json */ "./localJson/grc-tufts-didoio.json", 1);
/* harmony import */ var _localJson_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @/localJson/grc-tufts-edoton.json */ "./localJson/grc-tufts-edoton.json");
var _localJson_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_69___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-edoton.json */ "./localJson/grc-tufts-edoton.json", 1);
/* harmony import */ var _localJson_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @/localJson/grc-tufts-dotai.json */ "./localJson/grc-tufts-dotai.json");
var _localJson_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_70___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dotai.json */ "./localJson/grc-tufts-dotai.json", 1);
/* harmony import */ var _localJson_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @/localJson/grc-tufts-istatin.json */ "./localJson/grc-tufts-istatin.json");
var _localJson_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_71___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-istatin.json */ "./localJson/grc-tufts-istatin.json", 1);
/* harmony import */ var _localJson_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @/localJson/grc-tufts-istatai.json */ "./localJson/grc-tufts-istatai.json");
var _localJson_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_72___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-istatai.json */ "./localJson/grc-tufts-istatai.json", 1);
/* harmony import */ var _localJson_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @/localJson/grc-tufts-estitin.json */ "./localJson/grc-tufts-estitin.json");
var _localJson_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_73___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-estitin.json */ "./localJson/grc-tufts-estitin.json", 1);
/* harmony import */ var _localJson_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @/localJson/grc-tufts-edynato.json */ "./localJson/grc-tufts-edynato.json");
var _localJson_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_74___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-edynato.json */ "./localJson/grc-tufts-edynato.json", 1);
/* harmony import */ var _localJson_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @/localJson/grc-tufts-epististhe.json */ "./localJson/grc-tufts-epististhe.json");
var _localJson_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_75___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-epististhe.json */ "./localJson/grc-tufts-epististhe.json", 1);
/* harmony import */ var _localJson_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @/localJson/grc-tufts-edeiknyte.json */ "./localJson/grc-tufts-edeiknyte.json");
var _localJson_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_76___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-edeiknyte.json */ "./localJson/grc-tufts-edeiknyte.json", 1);
/* harmony import */ var _localJson_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @/localJson/grc-tufts-deiknytai.json */ "./localJson/grc-tufts-deiknytai.json");
var _localJson_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_77___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-deiknytai.json */ "./localJson/grc-tufts-deiknytai.json", 1);
/* harmony import */ var _localJson_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @/localJson/grc-tufts-eston.json */ "./localJson/grc-tufts-eston.json");
var _localJson_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_78___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-eston.json */ "./localJson/grc-tufts-eston.json", 1);
/* harmony import */ var _localJson_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @/localJson/grc-tufts-iton.json */ "./localJson/grc-tufts-iton.json");
var _localJson_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_79___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-iton.json */ "./localJson/grc-tufts-iton.json", 1);
/* harmony import */ var _localJson_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @/localJson/grc-tufts-faiis.json */ "./localJson/grc-tufts-faiis.json");
var _localJson_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_80___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-faiis.json */ "./localJson/grc-tufts-faiis.json", 1);
/* harmony import */ var _localJson_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @/localJson/grc-tufts-vito.json */ "./localJson/grc-tufts-vito.json");
var _localJson_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_81___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-vito.json */ "./localJson/grc-tufts-vito.json", 1);
/* harmony import */ var _localJson_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @/localJson/grc-tufts-gnoton.json */ "./localJson/grc-tufts-gnoton.json");
var _localJson_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_82___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-gnoton.json */ "./localJson/grc-tufts-gnoton.json", 1);
/* harmony import */ var _localJson_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @/localJson/grc-tufts-dythi.json */ "./localJson/grc-tufts-dythi.json");
var _localJson_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_83___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-dythi.json */ "./localJson/grc-tufts-dythi.json", 1);
/* harmony import */ var _localJson_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @/localJson/grc-tufts-ideis.json */ "./localJson/grc-tufts-ideis.json");
var _localJson_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_84___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-ideis.json */ "./localJson/grc-tufts-ideis.json", 1);
/* harmony import */ var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json");
var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_85___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json", 1);
/* harmony import */ var _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @/localJson/lat-tufts-adeo.json */ "./localJson/lat-tufts-adeo.json");
var _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_86___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adeo.json */ "./localJson/lat-tufts-adeo.json", 1);
/* harmony import */ var _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @/localJson/lat-tufts-adfuimus.json */ "./localJson/lat-tufts-adfuimus.json");
var _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_87___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adfuimus.json */ "./localJson/lat-tufts-adfuimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json");
var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_88___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @/localJson/lat-tufts-afueras.json */ "./localJson/lat-tufts-afueras.json");
var _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_89___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-afueras.json */ "./localJson/lat-tufts-afueras.json", 1);
/* harmony import */ var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json");
var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_90___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @/localJson/lat-tufts-cecinisse.json */ "./localJson/lat-tufts-cecinisse.json");
var _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_91___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cecinisse.json */ "./localJson/lat-tufts-cecinisse.json", 1);
/* harmony import */ var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json");
var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_92___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json", 1);
/* harmony import */ var _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! @/localJson/lat-tufts-colendi.json */ "./localJson/lat-tufts-colendi.json");
var _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_93___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-colendi.json */ "./localJson/lat-tufts-colendi.json", 1);
/* harmony import */ var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json");
var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_94___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json");
var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_95___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json", 1);
/* harmony import */ var _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @/localJson/lat-tufts-cursu.json */ "./localJson/lat-tufts-cursu.json");
var _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_96___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cursu.json */ "./localJson/lat-tufts-cursu.json", 1);
/* harmony import */ var _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! @/localJson/lat-tufts-curru.json */ "./localJson/lat-tufts-curru.json");
var _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_97___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-curru.json */ "./localJson/lat-tufts-curru.json", 1);
/* harmony import */ var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json");
var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_98___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json", 1);
/* harmony import */ var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json");
var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_99___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json", 1);
/* harmony import */ var _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! @/localJson/lat-tufts-iam.json */ "./localJson/lat-tufts-iam.json");
var _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_100___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iam.json */ "./localJson/lat-tufts-iam.json", 1);
/* harmony import */ var _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! @/localJson/lat-tufts-ierint.json */ "./localJson/lat-tufts-ierint.json");
var _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_101___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ierint.json */ "./localJson/lat-tufts-ierint.json", 1);
/* harmony import */ var _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! @/localJson/lat-tufts-ierunt.json */ "./localJson/lat-tufts-ierunt.json");
var _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_102___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ierunt.json */ "./localJson/lat-tufts-ierunt.json", 1);
/* harmony import */ var _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @/localJson/lat-tufts-ineo.json */ "./localJson/lat-tufts-ineo.json");
var _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_103___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ineo.json */ "./localJson/lat-tufts-ineo.json", 1);
/* harmony import */ var _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! @/localJson/lat-tufts-inerimus.json */ "./localJson/lat-tufts-inerimus.json");
var _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_104___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-inerimus.json */ "./localJson/lat-tufts-inerimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @/localJson/lat-tufts-itum.json */ "./localJson/lat-tufts-itum.json");
var _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_105___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-itum.json */ "./localJson/lat-tufts-itum.json", 1);
/* harmony import */ var _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @/localJson/lat-tufts-itu.json */ "./localJson/lat-tufts-itu.json");
var _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_106___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-itu.json */ "./localJson/lat-tufts-itu.json", 1);
/* harmony import */ var _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @/localJson/lat-tufts-iverim.json */ "./localJson/lat-tufts-iverim.json");
var _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_107___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iverim.json */ "./localJson/lat-tufts-iverim.json", 1);
/* harmony import */ var _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @/localJson/lat-tufts-ivissem.json */ "./localJson/lat-tufts-ivissem.json");
var _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_108___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ivissem.json */ "./localJson/lat-tufts-ivissem.json", 1);
/* harmony import */ var _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! @/localJson/lat-tufts-iugandis.json */ "./localJson/lat-tufts-iugandis.json");
var _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_109___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iugandis.json */ "./localJson/lat-tufts-iugandis.json", 1);
/* harmony import */ var _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! @/localJson/lat-tufts-ferent.json */ "./localJson/lat-tufts-ferent.json");
var _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_110___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ferent.json */ "./localJson/lat-tufts-ferent.json", 1);
/* harmony import */ var _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! @/localJson/lat-tufts-maluerimus.json */ "./localJson/lat-tufts-maluerimus.json");
var _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_111___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-maluerimus.json */ "./localJson/lat-tufts-maluerimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json");
var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_112___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json", 1);
/* harmony import */ var _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! @/localJson/lat-tufts-marita.json */ "./localJson/lat-tufts-marita.json");
var _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_113___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-marita.json */ "./localJson/lat-tufts-marita.json", 1);
/* harmony import */ var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json");
var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_114___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json", 1);
/* harmony import */ var _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! @/localJson/lat-tufts-nequeo.json */ "./localJson/lat-tufts-nequeo.json");
var _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_115___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nequeo.json */ "./localJson/lat-tufts-nequeo.json", 1);
/* harmony import */ var _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! @/localJson/lat-tufts-nevolo.json */ "./localJson/lat-tufts-nevolo.json");
var _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_116___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nevolo.json */ "./localJson/lat-tufts-nevolo.json", 1);
/* harmony import */ var _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! @/localJson/lat-tufts-nitido.json */ "./localJson/lat-tufts-nitido.json");
var _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_117___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nitido.json */ "./localJson/lat-tufts-nitido.json", 1);
/* harmony import */ var _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! @/localJson/lat-tufts-nolo.json */ "./localJson/lat-tufts-nolo.json");
var _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_118___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nolo.json */ "./localJson/lat-tufts-nolo.json", 1);
/* harmony import */ var _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! @/localJson/lat-tufts-obsum.json */ "./localJson/lat-tufts-obsum.json");
var _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_119___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-obsum.json */ "./localJson/lat-tufts-obsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json");
var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_120___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json", 1);
/* harmony import */ var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json");
var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_121___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json", 1);
/* harmony import */ var _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! @/localJson/lat-tufts-praefuistis.json */ "./localJson/lat-tufts-praefuistis.json");
var _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_122___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-praefuistis.json */ "./localJson/lat-tufts-praefuistis.json", 1);
/* harmony import */ var _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! @/localJson/lat-tufts-possum.json */ "./localJson/lat-tufts-possum.json");
var _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_123___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-possum.json */ "./localJson/lat-tufts-possum.json", 1);
/* harmony import */ var _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! @/localJson/lat-tufts-proderitis.json */ "./localJson/lat-tufts-proderitis.json");
var _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_124___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-proderitis.json */ "./localJson/lat-tufts-proderitis.json", 1);
/* harmony import */ var _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! @/localJson/lat-tufts-servet.json */ "./localJson/lat-tufts-servet.json");
var _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_125___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-servet.json */ "./localJson/lat-tufts-servet.json", 1);
/* harmony import */ var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json");
var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_126___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json", 1);
/* harmony import */ var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json");
var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_127___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json", 1);
/* harmony import */ var _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! @/localJson/lat-tufts-subsum.json */ "./localJson/lat-tufts-subsum.json");
var _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_128___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-subsum.json */ "./localJson/lat-tufts-subsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json");
var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_129___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json", 1);
/* harmony import */ var _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! @/localJson/lat-tufts-supersum.json */ "./localJson/lat-tufts-supersum.json");
var _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_130___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-supersum.json */ "./localJson/lat-tufts-supersum.json", 1);
/* harmony import */ var _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! @/localJson/lat-tufts-tuleritis.json */ "./localJson/lat-tufts-tuleritis.json");
var _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_131___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-tuleritis.json */ "./localJson/lat-tufts-tuleritis.json", 1);
/* harmony import */ var _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! @/localJson/lat-tufts-veneo.json */ "./localJson/lat-tufts-veneo.json");
var _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_132___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-veneo.json */ "./localJson/lat-tufts-veneo.json", 1);
/* harmony import */ var _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! @/localJson/lat-tufts-venit.json */ "./localJson/lat-tufts-venit.json");
var _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_133___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-venit.json */ "./localJson/lat-tufts-venit.json", 1);
/* harmony import */ var _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! @/localJson/lat-tufts-volui.json */ "./localJson/lat-tufts-volui.json");
var _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_134___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-volui.json */ "./localJson/lat-tufts-volui.json", 1);
/* harmony import */ var _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! @/localJson/lat-tufts-queo.json */ "./localJson/lat-tufts-queo.json");
var _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_135___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-queo.json */ "./localJson/lat-tufts-queo.json", 1);
/* harmony import */ var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json");
var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_136___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json", 1);
/* harmony import */ var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json");
var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_137___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json", 1);
/* harmony import */ var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json");
var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_138___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json", 1);

























































































































































































const library = {
  gez: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'ሀገርየ': _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_1__
    }
  },
  grc: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'ἐλῴην': _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_2__,
      'οὐδεμία': _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_3__,
      'δέδια': _localJson_grc_tufts_dedia_json__WEBPACK_IMPORTED_MODULE_4__,
      'δεδίῃ': _localJson_grc_tufts_dedii_json__WEBPACK_IMPORTED_MODULE_5__,
      'δεδίητον': _localJson_grc_tufts_dediiton_json__WEBPACK_IMPORTED_MODULE_6__,
      'δεδίητε': _localJson_grc_tufts_dediite_json__WEBPACK_IMPORTED_MODULE_7__,
      'δέδιμεν': _localJson_grc_tufts_dedimen_json__WEBPACK_IMPORTED_MODULE_8__,
      'δέδιτε': _localJson_grc_tufts_dedotai_json__WEBPACK_IMPORTED_MODULE_9__,
      'ἐδεδίειν': _localJson_grc_tufts_edediei_json__WEBPACK_IMPORTED_MODULE_10__,
      'οἶδα': _localJson_grc_tufts_oida_json__WEBPACK_IMPORTED_MODULE_11__,
      'φῶ': _localJson_grc_tufts_fo_json__WEBPACK_IMPORTED_MODULE_12__,
      'φῇς': _localJson_grc_tufts_fis_json__WEBPACK_IMPORTED_MODULE_13__,
      'φῆτε': _localJson_grc_tufts_fite_json__WEBPACK_IMPORTED_MODULE_14__,
      'φαίη': _localJson_grc_tufts_faii_json__WEBPACK_IMPORTED_MODULE_15__,
      'φαῖμεν': _localJson_grc_tufts_faimen_json__WEBPACK_IMPORTED_MODULE_16__,
      'φαῖεν': _localJson_grc_tufts_faien_json__WEBPACK_IMPORTED_MODULE_17__,
      'ἔθετο': _localJson_grc_tufts_etheto_json__WEBPACK_IMPORTED_MODULE_18__,
      'δύναμαι': _localJson_grc_tufts_dynamai_json__WEBPACK_IMPORTED_MODULE_19__,
      'ἐπίσταμαι': _localJson_grc_tufts_epistamai_json__WEBPACK_IMPORTED_MODULE_20__,
      'ποιῶ': _localJson_grc_tufts_poio_json__WEBPACK_IMPORTED_MODULE_21__,
      'ποιοῦμεν': _localJson_grc_tufts_poioumen_json__WEBPACK_IMPORTED_MODULE_22__,
      'πλεῖ': _localJson_grc_tufts_plei_json__WEBPACK_IMPORTED_MODULE_23__,
      'οἷ': _localJson_grc_tufts_oi_json__WEBPACK_IMPORTED_MODULE_24__,
      'οἵ': _localJson_grc_tufts_oi2_json__WEBPACK_IMPORTED_MODULE_25__,
      'οἱ': _localJson_grc_tufts_oi3_json__WEBPACK_IMPORTED_MODULE_26__,
      'πρόσφυμα': _localJson_grc_tufts_prosfyma_json__WEBPACK_IMPORTED_MODULE_27__,
      'Καλυψώ': _localJson_grc_tufts_kalypso_json__WEBPACK_IMPORTED_MODULE_28__,
      'πᾶσι': _localJson_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_29__,
      'αὐτὴν': _localJson_grc_tufts_aftin_json__WEBPACK_IMPORTED_MODULE_30__,
      'φυήν': _localJson_grc_tufts_fyin_json__WEBPACK_IMPORTED_MODULE_33__,
      'τις': _localJson_grc_tufts_tis_json__WEBPACK_IMPORTED_MODULE_34__,
      'ὅδε': _localJson_grc_tufts_ode_json__WEBPACK_IMPORTED_MODULE_35__,
      'αὑτῶν': _localJson_grc_tufts_afton_json__WEBPACK_IMPORTED_MODULE_31__,
      'τοὺς': _localJson_grc_tufts_tous_json__WEBPACK_IMPORTED_MODULE_36__,
      'αὐτοῖς': _localJson_grc_tufts_aftois_json__WEBPACK_IMPORTED_MODULE_32__,
      'δύο': _localJson_grc_tufts_dyo_json__WEBPACK_IMPORTED_MODULE_37__,
      'βουλεύῃς': _localJson_grc_tufts_voulevis_json__WEBPACK_IMPORTED_MODULE_38__,
      'βουλευέσθων': _localJson_grc_tufts_voulevesthon_json__WEBPACK_IMPORTED_MODULE_39__,
      'βουλεύσω': _localJson_grc_tufts_voulevefso_json__WEBPACK_IMPORTED_MODULE_40__,
      'ἀγάγοις': _localJson_grc_tufts_agagois_json__WEBPACK_IMPORTED_MODULE_41__,
      'ἀγαγοῦ': _localJson_grc_tufts_agagou_json__WEBPACK_IMPORTED_MODULE_42__,
      'βουλευθῇς': _localJson_grc_tufts_voulefthis_json__WEBPACK_IMPORTED_MODULE_43__,
      'λελοίπῃ': _localJson_grc_tufts_leloipi_json__WEBPACK_IMPORTED_MODULE_44__,
      'γέγραψαι': _localJson_grc_tufts_gegrapsai_json__WEBPACK_IMPORTED_MODULE_45__,
      'μεμνῶμαι': _localJson_grc_tufts_memnomai_json__WEBPACK_IMPORTED_MODULE_46__,
      'ἐγέγραψο': _localJson_grc_tufts_egegrapso_json__WEBPACK_IMPORTED_MODULE_47__,
      'τεθνήξεις': _localJson_grc_tufts_tethnixeis_json__WEBPACK_IMPORTED_MODULE_48__,
      'ἕσταθι': _localJson_grc_tufts_estathi_json__WEBPACK_IMPORTED_MODULE_49__,
      'τέθνατον': _localJson_grc_tufts_tethnaton_json__WEBPACK_IMPORTED_MODULE_50__,
      'ποιεῖτον': _localJson_grc_tufts_poieiton_json__WEBPACK_IMPORTED_MODULE_51__,
      'ἔπλει': _localJson_grc_tufts_eplei_json__WEBPACK_IMPORTED_MODULE_52__,
      'ἐποιοῦ': _localJson_grc_tufts_epoiou_json__WEBPACK_IMPORTED_MODULE_53__,
      'ἐδέοντο': _localJson_grc_tufts_edeonto_json__WEBPACK_IMPORTED_MODULE_54__,
      'ὁρᾷς': _localJson_grc_tufts_oras_json__WEBPACK_IMPORTED_MODULE_55__,
      'χρῷμεν': _localJson_grc_tufts_chromen_json__WEBPACK_IMPORTED_MODULE_56__,
      'ἑωρᾶσθον': _localJson_grc_tufts_eorasthon_json__WEBPACK_IMPORTED_MODULE_57__,
      'χρῷντο': _localJson_grc_tufts_chronto_json__WEBPACK_IMPORTED_MODULE_58__,
      'δηλοῖς': _localJson_grc_tufts_dilois_json__WEBPACK_IMPORTED_MODULE_59__,
      'δηλοῦσθον': _localJson_grc_tufts_dilousthon_json__WEBPACK_IMPORTED_MODULE_60__,
      'ἐτιθέτην': _localJson_grc_tufts_etithetin_json__WEBPACK_IMPORTED_MODULE_61__,
      'τιθέσθων': _localJson_grc_tufts_tithesthon_json__WEBPACK_IMPORTED_MODULE_62__,
      'ἔθεσαν': _localJson_grc_tufts_ethesan_json__WEBPACK_IMPORTED_MODULE_63__,
      'ἐθέμεθα': _localJson_grc_tufts_ethemetha_json__WEBPACK_IMPORTED_MODULE_64__,
      'ἵην': _localJson_grc_tufts_iin_json__WEBPACK_IMPORTED_MODULE_65__,
      'ἵεσθον': _localJson_grc_tufts_iesthon_json__WEBPACK_IMPORTED_MODULE_66__,
      'διδῷ': _localJson_grc_tufts_dido_json__WEBPACK_IMPORTED_MODULE_67__,
      'διδοῖο': _localJson_grc_tufts_didoio_json__WEBPACK_IMPORTED_MODULE_68__,
      'ἔδοτον': _localJson_grc_tufts_edoton_json__WEBPACK_IMPORTED_MODULE_69__,
      'δῶται': _localJson_grc_tufts_dotai_json__WEBPACK_IMPORTED_MODULE_70__,
      'ἱστάτην': _localJson_grc_tufts_istatin_json__WEBPACK_IMPORTED_MODULE_71__,
      'ἵσταται': _localJson_grc_tufts_istatai_json__WEBPACK_IMPORTED_MODULE_72__,
      'ἐστήτην': _localJson_grc_tufts_estitin_json__WEBPACK_IMPORTED_MODULE_73__,
      'ἐδύνατο': _localJson_grc_tufts_edynato_json__WEBPACK_IMPORTED_MODULE_74__,
      'ἐπίστησθε': _localJson_grc_tufts_epististhe_json__WEBPACK_IMPORTED_MODULE_75__,
      'ἐδείκνῠτε': _localJson_grc_tufts_edeiknyte_json__WEBPACK_IMPORTED_MODULE_76__,
      'δείκνῠται': _localJson_grc_tufts_deiknytai_json__WEBPACK_IMPORTED_MODULE_77__,
      'ἔστων': _localJson_grc_tufts_eston_json__WEBPACK_IMPORTED_MODULE_78__,
      'ἴτων': _localJson_grc_tufts_iton_json__WEBPACK_IMPORTED_MODULE_79__,
      'φαίης': _localJson_grc_tufts_faiis_json__WEBPACK_IMPORTED_MODULE_80__,
      'βήτω': _localJson_grc_tufts_vito_json__WEBPACK_IMPORTED_MODULE_81__,
      'γνῶτον': _localJson_grc_tufts_gnoton_json__WEBPACK_IMPORTED_MODULE_82__,
      'δῦθι': _localJson_grc_tufts_dythi_json__WEBPACK_IMPORTED_MODULE_83__,
      'ᾔδεις': _localJson_grc_tufts_ideis_json__WEBPACK_IMPORTED_MODULE_84__
    }
  },
  lat: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'aberis': _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_85__,
      'adeo': _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_86__,
      'adfuimus': _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_87__,
      'adsum': _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_88__,
      'afueras': _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_89__,
      'auditum': _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_90__,
      'cecinisse': _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_91__,
      'cepit': _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_92__,
      'colendi': _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_93__,
      'conditum': _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_94__,
      'cupidinibus': _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_95__,
      'curru': _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_97__,
      'cursu': _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_96__,
      'ego': _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_98__,
      'est': _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_99__,
      'iam': _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_100__,
      'ierint': _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_101__,
      'ierunt': _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_102__,
      'ineo': _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_103__,
      'inerimus': _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_104__,
      'itu': _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_106__,
      'itum': _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_105__,
      'iugandis': _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_109__,
      'iverim': _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_107__,
      'ivissem': _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_108__,
      'ferent': _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_110__,
      'maluerimus': _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_111__,
      'mare': _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_112__,
      'marita': _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_113__,
      'mellitisque': _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_114__,
      'nequeo': _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_115__,
      'nevolo': _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_116__,
      'nitido': _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_117__,
      'nolo': _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_118__,
      'obsum': _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_119__,
      'palmaque': _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_120__,
      'placito': _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_121__,     
      'praefuistis': _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_122__,
      'possum': _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_123__,
      'proderitis': _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_124__,
      'servet': _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_125__, 
      'submersasque': _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_126__,
      'sui': _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_127__,
      'sum': _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_129__,
      'subsum': _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_128__,
      'supersum': _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_130__,
      'tuleritis': _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_131__,
      'veneo': _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_132__,
      'venit': _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_133__,
      'volui': _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_134__,
      'queo': _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_135__
    }
  },
  ara: {
    tufts: {
      'ترجمة': _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_136__,
      'مشکل‌ها': _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_137__
    }
  },
  per: {
    tufts: {
      'بگذرد': _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_138__
    }
  }
}

class Fixture {
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



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Fixture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fixture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/fixture.js */ "./fixture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fixture", function() { return _fixture_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./localJson/ara-tufts-mshkel‌.json":
/*!******************************************!*\
  !*** ./localJson/ara-tufts-mshkel‌.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:مشکل‌ها:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-23T06:34:36.915313\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:مشکل‌ها\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207807208\"},{\"resource\":\"urn:uuid:idm140440208600008\"},{\"resource\":\"urn:uuid:idm140440209948264\"},{\"resource\":\"urn:uuid:idm140440208855576\"},{\"resource\":\"urn:uuid:idm140440209664040\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207807208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUN\"},\"xmpl\":{\"$\":\"problem/difficulty\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"problem/difficulty + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"problem/difficulty + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشْكِل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"problem/difficulty + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشْكِل\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"problem/difficulty\"}}}},{\"about\":\"urn:uuid:idm140440208600008\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"variegated\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"variegated + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"variegated + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"variegated + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"variegated + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"variegated + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"variegated\"}}}},{\"about\":\"urn:uuid:idm140440209948264\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"composed/formed\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"composed/formed + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"composed/formed + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"composed/formed + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"composed/formed + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"composed/formed + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"composed/formed\"}}}},{\"about\":\"urn:uuid:idm140440208855576\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJ\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics)\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ُ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJu/CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"َ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJa/CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٌ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJN/CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ٍ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJK/CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"مُشَكَّل\"},\"suff\":{\"$\":\"ِ\"}},\"pofs\":{\"order\":0,\"$\":\"adjective\"},\"morph\":{\"$\":\"ADJi/CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"diacriticized (with short vowels and diacritics) + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"مُشَكَّل\"},\"pofs\":{\"order\":0,\"$\":\"adjective\"}},\"mean\":{\"$\":\"diacriticized (with short vowels and diacritics)\"}}}},{\"about\":\"urn:uuid:idm140440209664040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"ها\"}},\"pofs\":{\"order\":0,\"$\":\"interjection\"},\"morph\":{\"$\":\"INTERJ\"},\"xmpl\":{\"$\":\"look/now\"}},\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"ها\"},\"pofs\":{\"order\":0,\"$\":\"interjection\"}},\"mean\":{\"$\":\"look/now\"}}}}]}}}");

/***/ }),

/***/ "./localJson/ara-tufts-trjmh.json":
/*!****************************************!*\
  !*** ./localJson/ara-tufts-trjmh.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ترجمة:aramorph\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:aramorph.v2\"}},\"created\":{\"$\":\"2019-12-23T06:33:44.209551\"},\"rights\":{\"$\":\"Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ترجمة\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208544824\"},{\"resource\":\"urn:uuid:idm140440210232632\"},{\"resource\":\"urn:uuid:idm140440210234904\"},{\"resource\":\"urn:uuid:idm140440210409656\"},{\"resource\":\"urn:uuid:idm140440212641000\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208544824\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةً\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةَ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َة\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG\"},\"xmpl\":{\"$\":\"biography + [fem.sg.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"biography + [fem.sg.] + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَمَة\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"biography\"}}}},{\"about\":\"urn:uuid:idm140440210232632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٌ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةُ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.nom.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةً\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةٍ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [indef.gen.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةَ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.acc.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َة\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.]\"}},{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َةِ\"}},\"pofs\":{\"order\":9,\"$\":\"noun\"},\"morph\":{\"$\":\"NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN\"},\"xmpl\":{\"$\":\"translation/interpretation + [fem.sg.] + [def.gen.]\"}}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَمَة\"},\"pofs\":{\"order\":9,\"$\":\"noun\"}},\"mean\":{\"$\":\"translation/interpretation\"}}}},{\"about\":\"urn:uuid:idm140440210234904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"ْهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [jus.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [jus.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"ُهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [ind.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [ind.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تَ\"},\"stem\":{\"$\":\"رْجُم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + revile/stone + [sub.] + it/him\"},{\"$\":\"you [masc.sg.] + revile/stone + [sub.] + it/him\"}]}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"رَجَم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"revile/stone\"}}}},{\"about\":\"urn:uuid:idm140440210409656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":[{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"ْهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [jus.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [jus.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"ُهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [ind.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [ind.] + it/him\"}]},{\"term\":{\"lang\":\"ara\",\"pref\":{\"$\":\"تُ\"},\"stem\":{\"$\":\"رَجِّم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":[{\"$\":\"IV3FSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"},{\"$\":\"IV2MSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS\"}],\"xmpl\":[{\"$\":\"it/they/she + surmise/conjecture + [sub.] + it/him\"},{\"$\":\"you [masc.sg.] + surmise/conjecture + [sub.] + it/him\"}]}],\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"رَجَّم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"surmise/conjecture\"}}}},{\"about\":\"urn:uuid:idm140440212641000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"infl\":{\"term\":{\"lang\":\"ara\",\"stem\":{\"$\":\"تَرْجَم\"},\"suff\":{\"$\":\"َهُ\"}},\"pofs\":{\"order\":10,\"$\":\"verb\"},\"morph\":{\"$\":\"VERB_PERFECTa/PVSUFF_SUBJ:3MS+PVSUFF_DO:3MS\"},\"xmpl\":{\"$\":\"translate/interpret + he/it [verb] + it/him\"}},\"dict\":{\"hdwd\":{\"lang\":\"ara\",\"$\":\"تَرْجَم\"},\"pofs\":{\"order\":10,\"$\":\"verb\"}},\"mean\":{\"$\":\"translate/interpret\"}}}}]}}}");

/***/ }),

/***/ "./localJson/gez-tufts-hageriye.json":
/*!*******************************************!*\
  !*** ./localJson/gez-tufts-hageriye.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ሀገርየ:traces\",\"creator\":{\"Agent\":{\"about\":\"betamasaheft.eu:morpho.v1\"}},\"created\":{\"$\":\"2019-12-23T06:30:07.632210\"},\"rights\":{\"$\":\"Gǝʿǝz morphology parser (http://betamasaheft.eu/morpho) was developed for the TraCES European Research Council Advanced Grant (https://www.traces.uni-hamburg.de/), Grant Agreement 338756. TraCES corpus data was annotated with the GeTa tool (developed by Cristina Vertan) by the project team (https://www.traces.uni-hamburg.de/en/team.html) directed by Alessandro Bausi. Core reference tables of schemata and affixes were provided by Vitagrazia Pisani and Magdalena Krzyżanowska. Augustus Dillmann's Lexicon Linguae Aethiopicae Online (http://betamasaheft.eu/Dillmann/) used for validation of hypotheses is curated by the TraCES project team, and especially by Alessandro Bausi and Andreas Ellwardt. Current engine  provided by Pietro Liuzzo (https://github.com/TraCES-Lexicon/lexicon/tree/master/geezParser) with support from the project Beta maṣāḥǝft: Manuscripts of Ethiopia and Eritrea (Schriftkultur des christlichen Äthiopiens: eine multimediale Forschungsumgebung) is a long-term project funded within the framework of the Academies' Programme (coordinated by the Union of the German Academies of Sciences and Humanities) under survey of the Akademie der Wissenschaften in Hamburg.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ሀገርየ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154434174688\"},{\"resource\":\"urn:uuid:idm140154434503200\"},{\"resource\":\"urn:uuid:idm140154430059808\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154434174688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"},\"suff\":{\"$\":\"ya\"}},\"pofs\":{\"$\":\"noun\"},\"note\":[{},{}],\"mood\":{},\"gend\":{\"$\":\"common\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"first\"}}}}},{\"about\":\"urn:uuid:idm140154434503200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"},\"suff\":{\"$\":\"ya\"}},\"pofs\":{\"$\":\"noun\"},\"note\":[{},{}],\"mood\":{},\"gend\":{\"$\":\"common\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"first\"}}}}},{\"about\":\"urn:uuid:idm140154430059808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"gez\",\"$\":\"ሀገር\"},\"src\":{\"$\":\"https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199\"}},\"mean\":{\"lang\":\"la\",\"$\":\"ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker\"},\"infl\":{\"term\":{\"lang\":\"gez\",\"stem\":{\"$\":\"ሀገር\"}},\"pofs\":{\"$\":\"common noun\"},\"mood\":{},\"gend\":{\"$\":\"unmarked\"},\"case\":{\"$\":\"nominative\"},\"note\":{\"$\":\"pronominal state\"},\"num\":{\"$\":\"singularp unmarkeds\"},\"pers\":{}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-aftin.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-aftin.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὐτὴν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:20:39.422140\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὐτὴν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210311448\"},\"Body\":{\"about\":\"urn:uuid:idm140440210311448\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αὐτός\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"art_adj\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-aftois.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-aftois.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὐτοῖς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:27:56.411380\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὐτοῖς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429850608\"},\"Body\":{\"about\":\"urn:uuid:idm140154429850608\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"αὐτός\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὐτ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-afton.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-afton.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:αὑτῶν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:25:40.255844\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:αὑτῶν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430426816\"},\"Body\":{\"about\":\"urn:uuid:idm140154430426816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἑαυτοῦ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"αὑτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"art_adj\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-agagois.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-agagois.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγάγοις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:50:08.175773\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγάγοις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432926000\"},\"Body\":{\"about\":\"urn:uuid:idm140154432926000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαγ\"},\"suff\":{\"$\":\"οις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"redupl\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-agagou.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-agagou.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἀγαγοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:51:21.711723\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἀγαγοῦ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208241112\"},\"Body\":{\"about\":\"urn:uuid:idm140440208241112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἄγω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἀγαγ\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aor2\"},\"morph\":{\"$\":\"contr redupl\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-chromen.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-chromen.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χρῷμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:16:11.550134\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χρῷμεν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154427589328\"},{\"resource\":\"urn:uuid:idm140154427451312\"},{\"resource\":\"urn:uuid:idm140154428871440\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154427589328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154427451312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154428871440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χραύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"av_stem\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-chronto.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-chronto.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:χρῷντο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:19:32.193719\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:χρῷντο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432699648\"},{\"resource\":\"urn:uuid:idm140154427548432\"},{\"resource\":\"urn:uuid:idm140154429472656\"},{\"resource\":\"urn:uuid:idm140154429704624\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432699648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140154427548432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429472656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χράω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ajw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429704624\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"χραύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"χρ\"},\"suff\":{\"$\":\"ῷντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"av_stem\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dedia.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-dedia.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδια:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:22:13.524958\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδια\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432607360\"},\"Body\":{\"about\":\"urn:uuid:idm140154432607360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"α\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dedii.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-dedii.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίῃ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:23:33.492334\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίῃ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428186848\"},\"Body\":{\"about\":\"urn:uuid:idm140154428186848\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ῃ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dediite.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dediite.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίητε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:26:19.401937\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίητε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212411912\"},\"Body\":{\"about\":\"urn:uuid:idm140440212411912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dediiton.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-dediiton.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δεδίητον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:24:50.962931\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δεδίητον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432625488\"},\"Body\":{\"about\":\"urn:uuid:idm140154432625488\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεδι\"},\"suff\":{\"$\":\"ητον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dedimen.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dedimen.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:06:03.122658\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιμεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429856864\"},\"Body\":{\"about\":\"urn:uuid:idm140154429856864\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dedotai.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dedotai.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:29:17.656751\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432801152\"},\"Body\":{\"about\":\"urn:uuid:idm140154432801152\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-deiknytai.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-deiknytai.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δείκνῠται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:51:27.831725\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δείκνῠται\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209326664\"},\"Body\":{\"about\":\"urn:uuid:idm140440209326664\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείκνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δεικν\"},\"suff\":{\"$\":\"υται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dido.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-dido.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:διδῷ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:32:21.675001\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:διδῷ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212264136\"},\"Body\":{\"about\":\"urn:uuid:idm140440212264136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"ῷ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-didoio.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-didoio.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:διδοῖο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:33:30.986884\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:διδοῖο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210312472\"},\"Body\":{\"about\":\"urn:uuid:idm140440210312472\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"διδ\"},\"suff\":{\"$\":\"οῖο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"omi_pr\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dilois.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-dilois.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δηλοῖς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:20:55.477614\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δηλοῖς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429480208\"},\"Body\":{\"about\":\"urn:uuid:idm140154429480208\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δηλόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῖς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dilousthon.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-dilousthon.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δηλοῦσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:22:25.769490\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δηλοῦσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209371656\"},\"Body\":{\"about\":\"urn:uuid:idm140440209371656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δηλόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δηλ\"},\"suff\":{\"$\":\"οῦσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dotai.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-dotai.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δῶται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:35:58.637359\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δῶται\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430135632\"},{\"resource\":\"urn:uuid:idm140154429103440\"},{\"resource\":\"urn:uuid:idm140154429948016\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430135632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δ\"},\"suff\":{\"$\":\"ῶται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"omi_aor\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140154429103440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δώτης\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}}]}}},{\"about\":\"urn:uuid:idm140154429948016\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δωτήρ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"masculine\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δωτ\"},\"suff\":{\"$\":\"αι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"hs_ou\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dynamai.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dynamai.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δύναμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:57:08.292115\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δύναμαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440217439944\"},\"Body\":{\"about\":\"urn:uuid:idm140440217439944\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύναμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δυν\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dyo.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-dyo.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δύο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:29:28.393132\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δύο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210414744\"},\"Body\":{\"about\":\"urn:uuid:idm140440210414744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύο\"},\"pofs\":{\"order\":4,\"$\":\"numeral\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δύο\"}},\"pofs\":{\"order\":4,\"$\":\"numeral\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"numeral\"},\"morph\":{\"$\":\"indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dythi.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-dythi.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δῦθι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:55:14.862278\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δῦθι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430056160\"},\"Body\":{\"about\":\"urn:uuid:idm140154430056160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δ\"},\"suff\":{\"$\":\"ῡθι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_u_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edediei.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-edediei.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδεδίειν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:30:49.205284\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδεδίειν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427690976\"},\"Body\":{\"about\":\"urn:uuid:idm140154427690976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δεδι\"},\"suff\":{\"$\":\"ειν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edeiknyte.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-edeiknyte.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδείκνῠτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:44:31.884169\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδείκνῠτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209977976\"},\"Body\":{\"about\":\"urn:uuid:idm140440209977976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείκνυμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δεικν\"},\"suff\":{\"$\":\"υτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"umi_pr\"},\"derivtype\":{\"$\":\"numi\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edeonto.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-edeonto.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδέοντο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:14:01.828444\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδέοντο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429145728\"},{\"resource\":\"urn:uuid:idm140154427986560\"},{\"resource\":\"urn:uuid:idm140154432330144\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429145728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέομαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"epic Doric Ionic Aeolic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}}}}},{\"about\":\"urn:uuid:idm140154427986560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέω1\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"e_stem\"}}}}},{\"about\":\"urn:uuid:idm140154432330144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δέω2\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"έοντο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edoton.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-edoton.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔδοτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:34:49.315247\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔδοτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432802752\"},\"Body\":{\"about\":\"urn:uuid:idm140154432802752\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δίδωμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δ\"},\"suff\":{\"$\":\"οτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"omi_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edynato.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-edynato.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδύνατο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:41:50.693991\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδύνατο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429839808\"},\"Body\":{\"about\":\"urn:uuid:idm140154429839808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύναμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δυν\"},\"suff\":{\"$\":\"ατο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-egegrapso.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-egegrapso.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐγέγραψο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:00:33.787465\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐγέγραψο\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209112200\"},\"Body\":{\"about\":\"urn:uuid:idm140440209112200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:γεγρα\"},\"suff\":{\"$\":\"ψο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-eloin.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-eloin.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐλῴην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:31:28.810630\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐλῴην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429116000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429116000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐλαύνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr poetic rare\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-eorasthon.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-eorasthon.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἑωρᾶσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:18:20.739432\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἑωρᾶσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209269288\"},\"Body\":{\"about\":\"urn:uuid:idm140440209269288\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁράω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾶσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"syll_augment contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾶσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"syll_augment contr\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-epistamai.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-epistamai.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐπίσταμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:58:27.717321\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐπίσταμαι\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154427992880\"},{\"resource\":\"urn:uuid:idm140154427290336\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154427992880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐφίστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπί:ἱστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"unasp_preverb causal pres_redupl\"}}}}},{\"about\":\"urn:uuid:idm140154427290336\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐπίσταμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπιστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-epististhe.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-epististhe.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐπίστησθε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:43:10.391661\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐπίστησθε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432527696\"},\"Body\":{\"about\":\"urn:uuid:idm140154432527696\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐπίσταμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπιστ\"},\"suff\":{\"$\":\"ησθε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-eplei.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-eplei.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔπλει:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:08:57.343046\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔπλει\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432403888\"},\"Body\":{\"about\":\"urn:uuid:idm140154432403888\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πλέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-epoiou.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-epoiou.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐποιοῦ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:12:39.248210\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐποιοῦ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209562200\"},{\"resource\":\"urn:uuid:idm140440210087544\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209562200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:ποι\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}}}}},{\"about\":\"urn:uuid:idm140440210087544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:ποι\"},\"suff\":{\"$\":\"οῦ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-estathi.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-estathi.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἕσταθι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:03:37.081810\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἕσταθι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208976584\"},\"Body\":{\"about\":\"urn:uuid:idm140440208976584\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἑστ\"},\"suff\":{\"$\":\"αθι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"},\"morph\":{\"$\":\"poetic\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-estitin.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-estitin.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐστήτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:39:48.057098\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐστήτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429844160\"},\"Body\":{\"about\":\"urn:uuid:idm140154429844160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:στ\"},\"suff\":{\"$\":\"ήτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-eston.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-eston.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔστων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:47:17.700538\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔστων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208376712\"},\"Body\":{\"about\":\"urn:uuid:idm140440208376712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"εἰμί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἔστων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-ethemetha.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-ethemetha.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐθέμεθα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:27:46.887576\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐθέμεθα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209420872\"},\"Body\":{\"about\":\"urn:uuid:idm140440209420872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:θ\"},\"suff\":{\"$\":\"έμεθα\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-ethesan.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-ethesan.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔθεσαν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:26:25.993636\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔθεσαν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207618632\"},\"Body\":{\"about\":\"urn:uuid:idm140440207618632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐθεσαν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-etheto.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-etheto.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔθετο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:54:48.929383\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔθετο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207728600\"},{\"resource\":\"urn:uuid:idm140440211789528\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207728600\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἔθω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐθ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"w_stem\"},\"morph\":{\"$\":\"unaugmented\"}}}}},{\"about\":\"urn:uuid:idm140440211789528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:θ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-etithetin.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-etithetin.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐτιθέτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:23:44.238889\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐτιθέτην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154431979808\"},\"Body\":{\"about\":\"urn:uuid:idm140154431979808\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:τιθ\"},\"suff\":{\"$\":\"έτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"emi_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-faien.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-faien.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαῖεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:53:37.318893\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαῖεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209731496\"},\"Body\":{\"about\":\"urn:uuid:idm140440209731496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αῖεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-faii.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-faii.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαίη:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:51:42.935254\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαίη\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208546040\"},\"Body\":{\"about\":\"urn:uuid:idm140440208546040\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αίη\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-faiis.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-faiis.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαίης:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:49:53.704172\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαίης\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208554952\"},\"Body\":{\"about\":\"urn:uuid:idm140440208554952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αίης\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-faimen.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-faimen.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φαῖμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:52:39.526888\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φαῖμεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429896416\"},\"Body\":{\"about\":\"urn:uuid:idm140154429896416\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φ\"},\"suff\":{\"$\":\"αῖμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-fis.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-fis.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῇς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:49:31.430474\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῇς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427593632\"},\"Body\":{\"about\":\"urn:uuid:idm140154427593632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῇς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-fite.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-fite.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῆτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:50:36.510938\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῆτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209097832\"},\"Body\":{\"about\":\"urn:uuid:idm140440209097832\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῆτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-fo.json":
/*!*************************************!*\
  !*** ./localJson/grc-tufts-fo.json ***!
  \*************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φῶ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:34:30.315596\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φῶ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432185536\"},\"Body\":{\"about\":\"urn:uuid:idm140154432185536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φημί\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-fyin.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-fyin.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:φυήν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:21:53.604455\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:φυήν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429049088\"},\"Body\":{\"about\":\"urn:uuid:idm140154429049088\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"φυή\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"φυ\"},\"suff\":{\"$\":\"ην\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"h_hs\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-gegrapsai.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-gegrapsai.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γέγραψαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:57:36.240456\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γέγραψαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212483544\"},\"Body\":{\"about\":\"urn:uuid:idm140440212483544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γράφω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γεγρα\"},\"suff\":{\"$\":\"ψαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_p\"},\"derivtype\":{\"$\":\"reg_conj\"},\"morph\":{\"$\":\"late\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-gnoton.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-gnoton.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:γνῶτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:54:07.877773\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:γνῶτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429148000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429148000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"γιγνώσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ωτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ῶτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ῶτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"γν\"},\"suff\":{\"$\":\"ωτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ath_w_aor\"},\"derivtype\":{\"$\":\"o_stem\"},\"morph\":{\"$\":\"unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-ideis.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-ideis.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ᾔδεις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:56:23.901521\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ᾔδεις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208575592\"},\"Body\":{\"about\":\"urn:uuid:idm140440208575592\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἶδα\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ᾐδ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"perf_act\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-iesthon.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-iesthon.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵεσθον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:30:58.656074\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵεσθον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210681128\"},\"Body\":{\"about\":\"urn:uuid:idm140440210681128\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵεσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵ̄εσθον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"irreg_mi\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-iin.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-iin.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:29:37.836547\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207727816\"},\"Body\":{\"about\":\"urn:uuid:idm140440207727816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"irreg_mi\"},\"morph\":{\"$\":\"unaugmented\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἵ̄ην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-istatai.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-istatai.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἵσταται:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:38:30.657312\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἵσταται\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440210560792\"},\"Body\":{\"about\":\"urn:uuid:idm140440210560792\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"αται\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-istatin.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-istatin.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἱστάτην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:37:12.002128\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἱστάτην\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208723560\"},{\"resource\":\"urn:uuid:idm140440209173160\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208723560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἵστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"causal pres_redupl\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"άτην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"unaugmented causal pres_redupl\"}}]}}},{\"about\":\"urn:uuid:idm140440209173160\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἱστάω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"ά̄την\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἱστ\"},\"suff\":{\"$\":\"ά̄την\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-iton.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-iton.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἴτων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:48:46.427744\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἴτων\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440210239688\"},{\"resource\":\"urn:uuid:idm140440209908680\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440210239688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"εἶμι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἴτων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"irreg_mi\"}}}}},{\"about\":\"urn:uuid:idm140440209908680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἴτον\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἰτ\"},\"suff\":{\"$\":\"ων\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"os_ou\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-kalypso.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-kalypso.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Καλυψώ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:13:12.969618\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Καλυψώ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211790984\"},\"Body\":{\"about\":\"urn:uuid:idm140440211790984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Καλυψώ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Καλυψ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"w_oos\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-leloipi.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-leloipi.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:λελοίπῃ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:54:46.480828\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:λελοίπῃ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208118360\"},\"Body\":{\"about\":\"urn:uuid:idm140440208118360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"λείπω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"λελοιπ\"},\"suff\":{\"$\":\"ῃ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-memnomai.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-memnomai.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:μεμνῶμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:58:52.972704\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:μεμνῶμαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207831016\"},\"Body\":{\"about\":\"urn:uuid:idm140440207831016\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"μιμνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"μεμνῶμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"perfp_vow\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-ode.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-ode.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὅδε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:24:15.617027\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὅδε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208791064\"},\"Body\":{\"about\":\"urn:uuid:idm140440208791064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὅδε\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὅδε\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"demonstr\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oi.json":
/*!*************************************!*\
  !*** ./localJson/grc-tufts-oi.json ***!
  \*************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἷ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:04:59.249453\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἷ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207849704\"},{\"resource\":\"urn:uuid:idm140440212691384\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207849704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440212691384\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἷ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oi2.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-oi2.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἵ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:06:13.585628\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἵ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209828264\"},{\"resource\":\"urn:uuid:idm140440208557816\"},{\"resource\":\"urn:uuid:idm140440209330504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209828264\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440208557816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440209330504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὅς\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἵ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"relative\"},\"morph\":{\"$\":\"indeclform\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oi3.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-oi3.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἱ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:18:19.883783\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἱ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429705680\"},{\"resource\":\"urn:uuid:idm140154432388656\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429705680\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἕ\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"epic Ionic\"},\"stemtype\":{\"$\":\"pron3\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140154432388656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἱ\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"proclitic indeclform\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oida.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-oida.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οἶδα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:33:10.637027\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οἶδα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154430570880\"},\"Body\":{\"about\":\"urn:uuid:idm140154430570880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οἶδα\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οἰδα\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ath_primary\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oras.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-oras.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ὁρᾷς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:15:07.106637\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ὁρᾷς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208364952\"},\"Body\":{\"about\":\"urn:uuid:idm140440208364952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁράω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾷς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ὁρ\"},\"suff\":{\"$\":\"ᾷς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oudemia.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-oudemia.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οὐδεμία:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:32:21.543086\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οὐδεμία\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429675552\"},\"Body\":{\"about\":\"urn:uuid:idm140154429675552\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οὐδείς\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-pasi.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-pasi.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πᾶσι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:17:02.912855\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πᾶσι\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440212666328\"},{\"resource\":\"urn:uuid:idm140440208048296\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440212666328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πᾶς\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾶσι\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"irreg_adj3\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾶσι\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"plural\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"irreg_adj3\"},\"morph\":{\"$\":\"indeclform\"}}]}}},{\"about\":\"urn:uuid:idm140440208048296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πᾶσις\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πᾱς\"},\"suff\":{\"$\":\"ι\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"is_ews\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-plei.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-plei.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πλεῖ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:02:07.542904\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πλεῖ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432345952\"},\"Body\":{\"about\":\"urn:uuid:idm140154432345952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πλέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"εῖ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"εῖ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric Ionic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"πλ\"},\"suff\":{\"$\":\"ει\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"evw_pr\"},\"derivtype\":{\"$\":\"ev_stem\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-poieiton.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-poieiton.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιεῖτον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:07:39.441078\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιεῖτον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209055896\"},\"Body\":{\"about\":\"urn:uuid:idm140440209055896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"εῖτον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-poio.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-poio.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιῶ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:59:45.227269\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιῶ\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154428810416\"},{\"resource\":\"urn:uuid:idm140154429128112\"},{\"resource\":\"urn:uuid:idm140154429853904\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154428810416\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}}]}}},{\"about\":\"urn:uuid:idm140154429128112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιός\"},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}},{\"about\":\"urn:uuid:idm140154429853904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"ῶ\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-poioumen.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-poioumen.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ποιοῦμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:01:01.341465\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ποιοῦμεν\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430005920\"},{\"resource\":\"urn:uuid:idm140154429355184\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430005920\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιέω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Doric\"},\"stemtype\":{\"$\":\"ew_pr\"},\"derivtype\":{\"$\":\"ew_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}},{\"about\":\"urn:uuid:idm140154429355184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ποιόω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ποι\"},\"suff\":{\"$\":\"οῦμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"ow_pr\"},\"derivtype\":{\"$\":\"ow_denom\"},\"morph\":{\"$\":\"contr unaugmented\"}}]}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-prosfyma.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-prosfyma.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:πρόσφυμα:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:11:43.231348\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:πρόσφυμα\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427819520\"},\"Body\":{\"about\":\"urn:uuid:idm140154427819520\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"πρόσφυμα\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"προσφυ\"},\"suff\":{\"$\":\"μα\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"neuter\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"ma_matos\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-tethnaton.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-tethnaton.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τέθνατον:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:04:56.107781\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τέθνατον\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432338704\"},\"Body\":{\"about\":\"urn:uuid:idm140154432338704\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τεθν\"},\"suff\":{\"$\":\"ατον\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"},\"morph\":{\"$\":\"syncope\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-tethnixeis.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-tethnixeis.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τεθνήξεις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:02:17.986454\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τεθνήξεις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427887648\"},\"Body\":{\"about\":\"urn:uuid:idm140154427887648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"θνήσκω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τεθνηξ\"},\"suff\":{\"$\":\"εις\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"fut_perf\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-tis.json":
/*!**************************************!*\
  !*** ./localJson/grc-tufts-tis.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τις:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:23:07.874614\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τις\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211731512\"},\"Body\":{\"about\":\"urn:uuid:idm140440211731512\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τις\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"indef\"},\"morph\":{\"$\":\"enclitic indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τις\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"indef\"},\"morph\":{\"$\":\"enclitic indeclform\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-tithesthon.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-tithesthon.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τιθέσθων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:25:14.753112\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τιθέσθων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154431870736\"},\"Body\":{\"about\":\"urn:uuid:idm140154431870736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τιθ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"emi_pr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-tous.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-tous.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:τοὺς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:26:43.708142\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:τοὺς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428396304\"},\"Body\":{\"about\":\"urn:uuid:idm140154428396304\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ὁ\"},\"pofs\":{\"order\":0,\"$\":\"article\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"τούς\"}},\"pofs\":{\"order\":0,\"$\":\"article\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"masculine\"},\"num\":{\"$\":\"plural\"},\"stemtype\":{\"$\":\"article\"},\"morph\":{\"$\":\"indeclform\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-vito.json":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-vito.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βήτω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T12:53:05.455705\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βήτω\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207832184\"},\"Body\":{\"about\":\"urn:uuid:idm140440207832184\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βαίνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"β\"},\"suff\":{\"$\":\"ήτω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"ath_h_aor\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-voulefthis.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-voulefthis.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευθῇς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:53:05.569094\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευθῇς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432700144\"},\"Body\":{\"about\":\"urn:uuid:idm140154432700144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευθ\"},\"suff\":{\"$\":\"ῇς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"passive\"},\"stemtype\":{\"$\":\"aor_pass\"},\"derivtype\":{\"$\":\"euw\"},\"morph\":{\"$\":\"contr\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-voulevefso.json":
/*!*********************************************!*\
  !*** ./localJson/grc-tufts-voulevefso.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλεύσω:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:48:23.300155\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλεύσω\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212755032\"},\"Body\":{\"about\":\"urn:uuid:idm140440212755032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"reg_fut\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευς\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"aor1\"},\"derivtype\":{\"$\":\"euw\"},\"morph\":{\"$\":\"unaugmented\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-voulevesthon.json":
/*!***********************************************!*\
  !*** ./localJson/grc-tufts-voulevesthon.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλευέσθων:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:45:55.282220\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλευέσθων\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427444096\"},\"Body\":{\"about\":\"urn:uuid:idm140154427444096\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"έσθων\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"dual\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-voulevis.json":
/*!*******************************************!*\
  !*** ./localJson/grc-tufts-voulevis.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:βουλεύῃς:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:44:24.613490\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:βουλεύῃς\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440207832328\"},\"Body\":{\"about\":\"urn:uuid:idm140440207832328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"βουλεύω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"βουλευ\"},\"suff\":{\"$\":\"ῃς\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"subjunctive\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"w_stem\"},\"derivtype\":{\"$\":\"euw\"}}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-aberis.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-aberis.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:aberis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:20:11.050753\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:aberis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154441263312\"},\"Body\":{\"about\":\"urn:uuid:idm140154441263312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ab\"},\"suff\":{\"$\":\"eris\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, abfui, abfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"},\"src\":{\"$\":\"Lewis+Short\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":{\"$\":\"be away/absent/distant/missing; be free/removed from; be lacking; be distinct;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-adeo.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-adeo.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adeo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:19:57.189728\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adeo\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154429843344\"},{\"resource\":\"urn:uuid:idm140154437535136\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154429843344\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ade\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adeo, adire, adivi(ii), aditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"approach; attack; visit, address; undertake; take possession (inheritance);\"}}}},{\"about\":\"urn:uuid:idm140154437535136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adeo\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adeo\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"to such a degree/pass/point; precisely, exactly; thus far; indeed, truly, even;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-adfuimus.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-adfuimus.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adfuimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:29:29.065403\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adfuimus\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432943296\"},{\"resource\":\"urn:uuid:idm140154441230720\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432943296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adfu\"},\"suff\":{\"$\":\"imus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adfuo, adfuere, adfuxi, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"intransitive\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"flow/stream/issue (from), flow away; abound in (w/ABL), be abundant, abound;\"}}}},{\"about\":\"urn:uuid:idm140154441230720\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adfu\"},\"suff\":{\"$\":\"imus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-adsum.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-adsum.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:21:52.514237\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adsum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213062536\"},{\"resource\":\"urn:uuid:idm140440213115816\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213062536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ads\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, arfui, arfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"age\":{\"order\":2,\"$\":\"early\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}},{\"about\":\"urn:uuid:idm140440213115816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adsum\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsumo, adsumere, adsumpsi, adsumptus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take (to/up/on/from), adopt/raise, use; assume/receive; insert/add; usurp/claim\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-afueras.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-afueras.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:afueras:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:30:32.549980\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:afueras\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213060456\"},\"Body\":{\"about\":\"urn:uuid:idm140440213060456\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"afu\"},\"suff\":{\"$\":\"eras\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"apsum, apesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":{\"$\":\"be away/absent/distant/missing; be free/removed from; be lacking; be distinct;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-auditum.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-auditum.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:auditum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:14.876725\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:auditum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432900560\"},{\"resource\":\"urn:uuid:idm140154428369984\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432900560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"audio, audire, audivi, auditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hear, listen, accept, agree with; obey; harken, pay attention; be able to hear;\"}}}},{\"about\":\"urn:uuid:idm140154428369984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"auditus, auditus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hearing; listening; act/sense of hearing; hearsay;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-cecinisse.json":
/*!********************************************!*\
  !*** ./localJson/lat-tufts-cecinisse.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cecinisse:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:02:56.072513\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cecinisse\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213059896\"},\"Body\":{\"about\":\"urn:uuid:idm140440213059896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cecin\"},\"suff\":{\"$\":\"isse\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"infinitive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cano, canere, cecini, cantus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"sing, celebrate, chant; crow; recite; play (music)/sound (horn); foretell;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-cepit.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-cepit.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cepit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:38.012590\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cepit\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440214675736\"},\"Body\":{\"about\":\"urn:uuid:idm140440214675736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cep\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"capio, capere, cepi, captus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take hold, seize; grasp; take bribe; arrest/capture; put on; occupy; captivate;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-colendi.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-colendi.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:colendi:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:06:54.283240\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:colendi\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440215139528\"},\"Body\":{\"about\":\"urn:uuid:idm140440215139528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"col\"},\"suff\":{\"$\":\"endi\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"colo, colere, colui, cultus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"live in (place), inhabit; till, cultivate, promote growth; foster, maintain;\"},{\"$\":\"honor, cherish, worship; tend, take care of; adorn, dress, decorate, embellish;\"}]}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-conditum.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-conditum.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:conditum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:57.714468\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:conditum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440212346408\"},{\"resource\":\"urn:uuid:idm140440212857352\"},{\"resource\":\"urn:uuid:idm140440207955816\"},{\"resource\":\"urn:uuid:idm140440208432936\"},{\"resource\":\"urn:uuid:idm140440212620424\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440212346408\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"condo, condere, condidi, conditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"put/insert (into); store up/put away, preserve, bottle (wine); bury/inter; sink\"},{\"$\":\"build/found, make; shut (eyes); conceal/hide/keep safe; put together, compose;\"},{\"$\":\"restore; sheathe (sword); plunge/bury (weapon in enemy); put out of sight;\"}]}}},{\"about\":\"urn:uuid:idm140440212857352\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"condio, condire, condivi, conditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"preserve/pickle; embalm/mummify; spice; season/flavor/render pleasant/give zest\"}}}},{\"about\":\"urn:uuid:idm140440207955816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditum, conditi\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Lewis+Short\"}},\"mean\":[{\"$\":\"aromatic/spiced wine; seasoned food (pl.) (OLD);\"},{\"$\":\"secret, something hidden/concealed;\"}]}}},{\"about\":\"urn:uuid:idm140440208432936\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, conditus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"founding (of a city); establishment; preparing (L+S); preserving fruit; hiding;\"}}}},{\"about\":\"urn:uuid:idm140440212620424\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"condit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, condita, conditum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"conditus, condita -um, conditior -or -us, conditissimus -a -um\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":[{\"$\":\"preserved, kept in store; hidden, concealed, secret; sunken (eyes);\"},{\"$\":\"seasoned, spiced up, flavored, savory; polished, ornamented (discourse/style);\"}]}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-cupidinibus.json":
/*!**********************************************!*\
  !*** ./localJson/lat-tufts-cupidinibus.json ***!
  \**********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cupidinibus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:16.309115\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cupidinibus\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208154872\"},{\"resource\":\"urn:uuid:idm140440218417896\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208154872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"Cupido, Cupidinis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"religion\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"Cupid, son of Venus; personification of carnal desire;\"}}}},{\"about\":\"urn:uuid:idm140440218417896\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cupidin\"},\"suff\":{\"$\":\"ibus\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"common\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cupido, cupidinis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"common\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"desire/love/wish/longing (passionate); lust; greed, appetite; desire for gain;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-curru.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-curru.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:curru:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:54:28.730026\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:curru\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213127032\"},\"Body\":{\"about\":\"urn:uuid:idm140440213127032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curr\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curr\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"currus, currus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"chariot, light horse vehicle; triumphal chariot; triumph; wheels on plow; cart;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-cursu.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-cursu.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cursu:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:05:32.652354\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cursu\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208608744\"},{\"resource\":\"urn:uuid:idm140440214842440\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208608744\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"curro, currere, cucurri, cursus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"intransitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"run/trot/gallop, hurry/hasten/speed, move/travel/proceed/flow swiftly/quickly;\"}}}},{\"about\":\"urn:uuid:idm140440214842440\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"curs\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"cursus, cursus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"running; speed/zeal; charge, onrush; forward movement/march; revolution (wheel)\"},{\"$\":\"course/direction, line of advance, orbit; voyage/passage; race; career; series;\"},{\"$\":\"lesson;\"}]}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ego.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-ego.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ego:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:35.260474\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ego\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213319880\"},\"Body\":{\"about\":\"urn:uuid:idm140440213319880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ego\"}},\"pofs\":{\"$\":\"pronoun\"},\"decl\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},\"dict\":{\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"I, me (PERS); myself (REFLEX);\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-est.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-est.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:est:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:23:51.790009\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:est\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440216700168\"},{\"resource\":\"urn:uuid:idm140440220806712\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440216700168\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"es\"},\"suff\":{\"$\":\"t\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"7th\"},\"var\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"edo, esse, -, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"eat/consume/devour; eat away (fire/water/disease); destroy; spend money on food\"}}}},{\"about\":\"urn:uuid:idm140440220806712\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"suff\":{\"$\":\"est\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sum, esse, fui, futurus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ferent.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-ferent.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ferent:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:17:14.738060\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ferent\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154434054352\"},\"Body\":{\"about\":\"urn:uuid:idm140154434054352\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"fer\"},\"suff\":{\"$\":\"ent\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"fero, ferre, tuli, latus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"bring, bear; tell/speak of; consider; carry off, win, receive, produce; get;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-iam.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-iam.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iam:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:07:54.037531\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iam\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432913232\"},{\"resource\":\"urn:uuid:idm140154441469760\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432913232\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"i\"},\"suff\":{\"$\":\"am\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154441469760\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iam\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"jam\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"now, already, by/even now; besides; [non ~ => no longer; ~ pridem => long ago];\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ierint.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-ierint.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ierint:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:12:40.866667\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ierint\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154438432144\"},{\"resource\":\"urn:uuid:idm140154429843344\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154438432144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Syncope  ier=>iver\"}}},\"mean\":{\"$\":\"Syncopated perfect often drops the 'v' and contracts vowel\"}}}},{\"about\":\"urn:uuid:idm140154429843344\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erint\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erint\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ierunt.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-ierunt.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ierunt:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:15:42.046261\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ierunt\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213063064\"},{\"resource\":\"urn:uuid:idm140440211994072\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213063064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Syncope  ier=>iver\"}}},\"mean\":{\"$\":\"Syncopated perfect often drops the 'v' and contracts vowel\"}}}},{\"about\":\"urn:uuid:idm140440211994072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erunt\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ineo.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-ineo.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ineo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:19:07.458401\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ineo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427770176\"},\"Body\":{\"about\":\"urn:uuid:idm140154427770176\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ine\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ineo, inire, inivi(ii), initus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"enter; undertake; begin; go in; enter upon; [consilium ~ => form a plan];\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-inerimus.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-inerimus.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:inerimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:26:27.574403\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:inerimus\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440209971976\"},\"Body\":{\"about\":\"urn:uuid:idm140440209971976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"in\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"insum, inesse, infui, infuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be in/on/there; belong to; be involved in;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-itu.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-itu.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:itu:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:09:45.430558\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:itu\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154439800432\"},{\"resource\":\"urn:uuid:idm140154433195600\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154439800432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154433195600\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"u\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"itus, itus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"going, gait; departure;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-itum.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-itum.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:itum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:09:20.002922\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:itum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154439902144\"},{\"resource\":\"urn:uuid:idm140154432866976\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154439902144\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}},{\"about\":\"urn:uuid:idm140154432866976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"it\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"itus, itus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"going, gait; departure;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-iugandis.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-iugandis.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iugandis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:58:37.556080\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iugandis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154437099024\"},\"Body\":{\"about\":\"urn:uuid:idm140154437099024\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iug\"},\"suff\":{\"$\":\"andis\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iug\"},\"suff\":{\"$\":\"andis\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"jugo, jugare, jugavi, jugatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"marry; join (to);\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-iverim.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-iverim.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:iverim:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:17:04.941996\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:iverim\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213326136\"},\"Body\":{\"about\":\"urn:uuid:idm140440213326136\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"erim\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-ivissem.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-ivissem.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ivissem:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T10:19:02.677580\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ivissem\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154428621216\"},\"Body\":{\"about\":\"urn:uuid:idm140154428621216\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"iv\"},\"suff\":{\"$\":\"issem\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"eo, ire, ivi(ii), itus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"go, walk; march, advance; pass; flow; pass (time); ride; sail;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-maluerimus.json":
/*!*********************************************!*\
  !*** ./localJson/lat-tufts-maluerimus.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:maluerimus:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:15:02.990444\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:maluerimus\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432879904\"},\"Body\":{\"about\":\"urn:uuid:idm140154432879904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"malu\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"malu\"},\"suff\":{\"$\":\"erimus\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"malo, malle, malui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"prefer; incline toward, wish rather;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-mare.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-mare.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mare:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:14.058672\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mare\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208162616\"},{\"resource\":\"urn:uuid:idm140440222926952\"},{\"resource\":\"urn:uuid:idm140440212861240\"},{\"resource\":\"urn:uuid:idm140440208185768\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208162616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}},{\"about\":\"urn:uuid:idm140440222926952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"sea; sea water;\"}}}},{\"about\":\"urn:uuid:idm140440212861240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male (human/animal/plant); man;\"}}}},{\"about\":\"urn:uuid:idm140440208185768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, (gen.), maris\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-marita.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-marita.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:marita:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:04:21.001664\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:marita\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213063064\"},{\"resource\":\"urn:uuid:idm140440215513912\"},{\"resource\":\"urn:uuid:idm140440208060104\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213063064\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"marita, maritae\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"wife;\"}}}},{\"about\":\"urn:uuid:idm140440215513912\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"maritus, marita, maritum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"nuptial; of marriage; married, wedded, united;\"}}}},{\"about\":\"urn:uuid:idm140440208060104\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"marit\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"marito, maritare, maritavi, maritatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"marry, give in marriage;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-mellitisque.json":
/*!**********************************************!*\
  !*** ./localJson/lat-tufts-mellitisque.json ***!
  \**********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mellitisque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:35.784022\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mellitisque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154433077328\"},{\"resource\":\"urn:uuid:idm140154432497312\"},{\"resource\":\"urn:uuid:idm140154434237504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154433077328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (mellitis+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432497312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mellitus, mellita, mellitum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"sweetened with honey; honey-sweet;\"}}}},{\"about\":\"urn:uuid:idm140154434237504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-nequeo.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-nequeo.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nequeo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:21:08.613801\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nequeo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213122408\"},\"Body\":{\"about\":\"urn:uuid:idm140440213122408\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"neque\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nequeo, nequire, nequivi(ii), nequitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be unable, cannot;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-nevolo.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-nevolo.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nevolo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:14:22.935161\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nevolo\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213058088\"},{\"resource\":\"urn:uuid:idm140440211994072\"},{\"resource\":\"urn:uuid:idm140440216894648\"},{\"resource\":\"urn:uuid:idm140440213066072\"},{\"resource\":\"urn:uuid:idm140440226194728\"},{\"resource\":\"urn:uuid:idm140440207890072\"},{\"resource\":\"urn:uuid:idm140440212384120\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213058088\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (ne+volo) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140440211994072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"n\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"neo, nere, nevi, netus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"spin; weave; produce by spinning;\"}}}},{\"about\":\"urn:uuid:idm140440216894648\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ne\"}},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ne\"},\"pofs\":{\"order\":2,\"$\":\"adverb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":[{\"$\":\"not; (intro clause of purpose with subj verb); [ne....quidem => not even];\"},{\"$\":\"truly, indeed, verily, assuredly; (particle of assurance); (w/personal PRON);\"}]}}},{\"about\":\"urn:uuid:idm140440213066072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ne\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"ne\"},\"pofs\":{\"$\":\"conjunction\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"that not, lest; (for negative of IMP);\"}}}},{\"about\":\"urn:uuid:idm140440226194728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, velle, volui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"wish, want, prefer; be willing, will;\"}}}},{\"about\":\"urn:uuid:idm140440207890072\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, volare, volavi, volatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"fly;\"}}}},{\"about\":\"urn:uuid:idm140440212384120\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volo\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volo\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, volonis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"area\":{\"$\":\"military\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Cassell's\"}},\"mean\":{\"$\":\"volunteers (pl.); (in the Second Punic War);\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-nitido.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-nitido.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nitido:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:57:20.863444\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nitido\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432879904\"},\"Body\":{\"about\":\"urn:uuid:idm140154432879904\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nitid\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nitidus, nitida, nitidum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"shining, bright;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-nolo.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-nolo.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:nolo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:15:14.297608\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:nolo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154434795568\"},\"Body\":{\"about\":\"urn:uuid:idm140154434795568\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"nol\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"nolo, nolle, nolui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be unwilling; wish not to; refuse to;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-obsum.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-obsum.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:obsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:25:23.029053\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:obsum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154437231296\"},\"Body\":{\"about\":\"urn:uuid:idm140154437231296\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"obs\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"obsum, obesse, obfui, obfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"obsum, obesse, offui, offuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}}],\"mean\":{\"$\":\"hurt; be a nuisance to, tell against;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-palmaque.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-palmaque.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:palmaque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:04.835169\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:palmaque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154437084688\"},{\"resource\":\"urn:uuid:idm140154432820544\"},{\"resource\":\"urn:uuid:idm140154428164720\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154437084688\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (palma+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432820544\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"palm\"},\"suff\":{\"$\":\"a\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"feminine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"palma, palmae\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"1st\"},\"gend\":{\"$\":\"feminine\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"palm/width of the hand; hand; palm tree/branch; date; palm award/first place;\"}}}},{\"about\":\"urn:uuid:idm140154428164720\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-placito.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-placito.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:placito:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:24.183580\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:placito\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154430090656\"},{\"resource\":\"urn:uuid:idm140154432866976\"},{\"resource\":\"urn:uuid:idm140154429222656\"},{\"resource\":\"urn:uuid:idm140154432413840\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154430090656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}}],\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placeo, placere, placui, placitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"kind\":{\"$\":\"taking dative\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placet, placere, -, placitus est\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"2nd\"},\"kind\":{\"$\":\"impersonal\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}}],\"mean\":[{\"$\":\"please, satisfy, give pleasure to (with dat.);\"},{\"$\":\"it is pleasing/satisfying, gives pleasure; is believed/settled/agreed/decided;\"}]}}},{\"about\":\"urn:uuid:idm140154432866976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placitum, placiti\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Bracton\"}},\"mean\":{\"$\":\"plea;\"}}}},{\"about\":\"urn:uuid:idm140154429222656\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placitus, placita, placitum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"area\":{\"$\":\"poetry\"},\"freq\":{\"order\":3,\"$\":\"lesser\"},\"src\":{\"$\":\"Lewis+Short\"}},\"mean\":{\"$\":\"pleasing; agreed upon;\"}}}},{\"about\":\"urn:uuid:idm140154432413840\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"placit\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"placito, placitare, placitavi, placitatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"area\":{\"$\":\"government\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Bracton\"}},\"mean\":{\"$\":\"plead;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-possum.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-possum.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:possum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:12:12.511258\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:possum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213501496\"},\"Body\":{\"about\":\"urn:uuid:idm140440213501496\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"poss\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"possum, posse, potui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be able, can; [multum  posse => have much/more/most influence/power];\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-praefuistis.json":
/*!**********************************************!*\
  !*** ./localJson/lat-tufts-praefuistis.json ***!
  \**********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:praefuistis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:24:20.776672\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:praefuistis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440213127032\"},\"Body\":{\"about\":\"urn:uuid:idm140440213127032\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"praefu\"},\"suff\":{\"$\":\"istis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"praesum, praeesse, praefui, praefuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be in charge/control/head (of) (w/DAT); take the lead (in); be present (at);\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-proderitis.json":
/*!*********************************************!*\
  !*** ./localJson/lat-tufts-proderitis.json ***!
  \*********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:proderitis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:32:16.699411\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:proderitis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208177880\"},\"Body\":{\"about\":\"urn:uuid:idm140440208177880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"prod\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"prosum, prodesse, profui, profuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be useful, be advantageous, benefit, profit (with DAT);\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-queo.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-queo.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:queo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:23:24.059969\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:queo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154442151616\"},\"Body\":{\"about\":\"urn:uuid:idm140154442151616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"queo, quire, quivi(ii), quitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"}},\"mean\":{\"$\":\"be able;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-servet.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-servet.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:servet:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T08:59:53.119068\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:servet\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432977872\"},\"Body\":{\"about\":\"urn:uuid:idm140154432977872\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"serv\"},\"suff\":{\"$\":\"et\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"servo, servare, servavi, servatus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"1st\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"watch over; protect, store, keep, guard, preserve, save;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-submersasque.json":
/*!***********************************************!*\
  !*** ./localJson/lat-tufts-submersasque.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:submersasque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:43.652502\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:submersasque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154428091200\"},{\"resource\":\"urn:uuid:idm140154432909728\"},{\"resource\":\"urn:uuid:idm140154436103696\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154428091200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (submersas+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432909728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}},{\"about\":\"urn:uuid:idm140154436103696\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"submers\"},\"suff\":{\"$\":\"as\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"feminine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"submergo, submergere, submersi, submersus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"plunge under, submerge;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-subsum.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-subsum.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:subsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:29:17.509369\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:subsum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440208177880\"},\"Body\":{\"about\":\"urn:uuid:idm140440208177880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"subs\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"subsum, subesse, subfui, subfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"be underneath/a basis for discussion/close at hand as a reserve, be near;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-sui.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-sui.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:sui:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:26:06.832418\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:sui\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440209339480\"},{\"resource\":\"urn:uuid:idm140440227388728\"},{\"resource\":\"urn:uuid:idm140440208370840\"},{\"resource\":\"urn:uuid:idm140440209271592\"},{\"resource\":\"urn:uuid:idm140440209368312\"},{\"resource\":\"urn:uuid:idm140440208451320\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440209339480\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suus, sui\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his men (pl.), his friends;\"}}}},{\"about\":\"urn:uuid:idm140440227388728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"var\":{\"$\":\"2nd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suum, sui\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"2nd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his property (pl.); [se suaque => themselves and their possessions];\"}}}},{\"about\":\"urn:uuid:idm140440208370840\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suus, sua, suum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"his/one's (own), her (own), hers, its (own); (pl.) their (own), theirs;\"}}}},{\"about\":\"urn:uuid:idm140440209271592\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"infinitive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"suo, suere, sui, sutus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"sew together/up, stitch;\"}}}},{\"about\":\"urn:uuid:idm140440209368312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"su\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"common\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sus, suis\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"common\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"swine; hog, pig, sow;\"}}}},{\"about\":\"urn:uuid:idm140440208451320\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"s\"},\"suff\":{\"$\":\"ui\"}},\"pofs\":{\"$\":\"pronoun\"},\"decl\":{\"$\":\"5th\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"gend\":{\"$\":\"common\"}},\"dict\":{\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"him/her/it/ones-self; him/her/it; them (selves) (pl.); each other, one another;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-sum.json":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-sum.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:sum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:26:27.788508\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:sum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154433246432\"},{\"resource\":\"urn:uuid:idm140154439799536\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154433246432\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"sum\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sumo, sumere, sumpsi, sumptus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sumo, sumere, sumsi, sumtus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":[{\"$\":\"take up; begin; suppose, assume; select; purchase; exact (punishment); obtain;\"},{\"$\":\"accept; begin; suppose; select; purchase; obtain; (sumpsi, sumptum);\"}]}}},{\"about\":\"urn:uuid:idm140154439799536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"s\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"sum, esse, fui, futurus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-supersum.json":
/*!*******************************************!*\
  !*** ./localJson/lat-tufts-supersum.json ***!
  \*******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:supersum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:27:28.521396\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:supersum\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440217173048\"},\"Body\":{\"about\":\"urn:uuid:idm140440217173048\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"supers\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"supersum, superesse, superfui, superfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"be left over; survive; be in excess/superfluous (to); remain to be performed;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-tuleritis.json":
/*!********************************************!*\
  !*** ./localJson/lat-tufts-tuleritis.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:tuleritis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:16:26.407776\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:tuleritis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440216963880\"},\"Body\":{\"about\":\"urn:uuid:idm140440216963880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"tul\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"subjunctive\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"tul\"},\"suff\":{\"$\":\"eritis\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"future perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"plural\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"fero, ferre, tuli, latus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"bring, bear; tell/speak of; consider; carry off, win, receive, produce; get;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-veneo.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-veneo.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:veneo:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:18:43.513003\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:veneo\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154433151632\"},\"Body\":{\"about\":\"urn:uuid:idm140154433151632\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"vene\"},\"suff\":{\"$\":\"o\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"veneo, venire, venivi(ii), venitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-venit.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-venit.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:venit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T11:03:56.955770\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:venit\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154437070240\"},{\"resource\":\"urn:uuid:idm140154439313360\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154437070240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"veni\"},\"suff\":{\"$\":\"t\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"veneo, venire, venivi(ii), venitus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":5,\"$\":\"frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"go for sale, be sold (as slave), be disposed of for (dishonorable/venal) gain;\"}}}},{\"about\":\"urn:uuid:idm140154439313360\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ven\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ven\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"venio, venire, veni, ventus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"come;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-volui.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-volui.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:volui:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T09:13:09.342476\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:volui\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432817584\"},{\"resource\":\"urn:uuid:idm140154433814480\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432817584\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"6th\"},\"var\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volo, velle, volui, -\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"wish, want, prefer; be willing, will;\"}}}},{\"about\":\"urn:uuid:idm140154433814480\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"infinitive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"volu\"},\"suff\":{\"$\":\"i\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"volvo, volvere, volvi, volutus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":[{\"$\":\"roll, cause to roll; travel in circle/circuit; bring around/about; revolve;\"},{\"$\":\"envelop, wrap up; unroll (scroll); recite, reel off; turn over (in mind);\"},{\"$\":\"roll along/forward; (PASS) move sinuously (snake); grovel, roll on ground;\"}]}}}]}}}");

/***/ }),

/***/ "./localJson/per-tufts-pass.json":
/*!***************************************!*\
  !*** ./localJson/per-tufts-pass.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:بگذرد:hazm\",\"creator\":{\"Agent\":{\"about\":\"org.PersDigUMD:tools.hazm.v2\"}},\"created\":{\"$\":\"2019-12-23T06:35:55.802615\"},\"rights\":{\"$\":\"Morphology from the HAZM Analyzer (http://www.sobhe.ir/hazm), supplied by the Center for Advanced Study of Language (CASL) at the University of Maryland, College Park (UMD) and adapted by the Roshan Institute for Persian Studies at UMD (http://persdig.umd.edu). This work was also supported by the Perseus Digital Library at Tufts University (http://www.perseus.tufts.edu).\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:بگذرد\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212857112\"},\"Body\":{\"about\":\"urn:uuid:idm140440212857112\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"dict\":{\"hdwd\":{\"lang\":\"per\",\"$\":\"گذشت#گذر\"}},\"infl\":{\"term\":{\"lang\":\"per\",\"stem\":{\"$\":\"بگذرد\"}}}}}}}}}");

/***/ }),

/***/ "./localJson/tufts-default.json":
/*!**************************************!*\
  !*** ./localJson/tufts-default.json ***!
  \**************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:bla-bla:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:38:44.395081\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:bla-bla\"}},\"title\":{}}}}");

/***/ })

/******/ });
});
//# sourceMappingURL=alpheios-fixtures.js.map