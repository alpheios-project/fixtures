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
/* harmony import */ var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json");
var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_30___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json", 1);
/* harmony import */ var _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/localJson/lat-tufts-adeo.json */ "./localJson/lat-tufts-adeo.json");
var _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_31___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adeo.json */ "./localJson/lat-tufts-adeo.json", 1);
/* harmony import */ var _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/localJson/lat-tufts-adfuimus.json */ "./localJson/lat-tufts-adfuimus.json");
var _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_32___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adfuimus.json */ "./localJson/lat-tufts-adfuimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json");
var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_33___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/localJson/lat-tufts-afueras.json */ "./localJson/lat-tufts-afueras.json");
var _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_34___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-afueras.json */ "./localJson/lat-tufts-afueras.json", 1);
/* harmony import */ var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json");
var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_35___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/localJson/lat-tufts-cecinisse.json */ "./localJson/lat-tufts-cecinisse.json");
var _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_36___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cecinisse.json */ "./localJson/lat-tufts-cecinisse.json", 1);
/* harmony import */ var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json");
var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_37___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json", 1);
/* harmony import */ var _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/localJson/lat-tufts-colendi.json */ "./localJson/lat-tufts-colendi.json");
var _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_38___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-colendi.json */ "./localJson/lat-tufts-colendi.json", 1);
/* harmony import */ var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json");
var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_39___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json");
var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_40___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json", 1);
/* harmony import */ var _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @/localJson/lat-tufts-cursu.json */ "./localJson/lat-tufts-cursu.json");
var _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_41___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cursu.json */ "./localJson/lat-tufts-cursu.json", 1);
/* harmony import */ var _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @/localJson/lat-tufts-curru.json */ "./localJson/lat-tufts-curru.json");
var _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_42___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-curru.json */ "./localJson/lat-tufts-curru.json", 1);
/* harmony import */ var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json");
var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_43___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json", 1);
/* harmony import */ var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json");
var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_44___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json", 1);
/* harmony import */ var _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/localJson/lat-tufts-iam.json */ "./localJson/lat-tufts-iam.json");
var _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iam.json */ "./localJson/lat-tufts-iam.json", 1);
/* harmony import */ var _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @/localJson/lat-tufts-ierint.json */ "./localJson/lat-tufts-ierint.json");
var _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_46___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ierint.json */ "./localJson/lat-tufts-ierint.json", 1);
/* harmony import */ var _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @/localJson/lat-tufts-ierunt.json */ "./localJson/lat-tufts-ierunt.json");
var _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_47___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ierunt.json */ "./localJson/lat-tufts-ierunt.json", 1);
/* harmony import */ var _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @/localJson/lat-tufts-ineo.json */ "./localJson/lat-tufts-ineo.json");
var _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_48___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ineo.json */ "./localJson/lat-tufts-ineo.json", 1);
/* harmony import */ var _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @/localJson/lat-tufts-inerimus.json */ "./localJson/lat-tufts-inerimus.json");
var _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_49___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-inerimus.json */ "./localJson/lat-tufts-inerimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @/localJson/lat-tufts-itum.json */ "./localJson/lat-tufts-itum.json");
var _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_50___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-itum.json */ "./localJson/lat-tufts-itum.json", 1);
/* harmony import */ var _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @/localJson/lat-tufts-itu.json */ "./localJson/lat-tufts-itu.json");
var _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_51___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-itu.json */ "./localJson/lat-tufts-itu.json", 1);
/* harmony import */ var _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @/localJson/lat-tufts-iverim.json */ "./localJson/lat-tufts-iverim.json");
var _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_52___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iverim.json */ "./localJson/lat-tufts-iverim.json", 1);
/* harmony import */ var _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @/localJson/lat-tufts-ivissem.json */ "./localJson/lat-tufts-ivissem.json");
var _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_53___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ivissem.json */ "./localJson/lat-tufts-ivissem.json", 1);
/* harmony import */ var _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @/localJson/lat-tufts-iugandis.json */ "./localJson/lat-tufts-iugandis.json");
var _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_54___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-iugandis.json */ "./localJson/lat-tufts-iugandis.json", 1);
/* harmony import */ var _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @/localJson/lat-tufts-ferent.json */ "./localJson/lat-tufts-ferent.json");
var _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_55___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ferent.json */ "./localJson/lat-tufts-ferent.json", 1);
/* harmony import */ var _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @/localJson/lat-tufts-maluerimus.json */ "./localJson/lat-tufts-maluerimus.json");
var _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_56___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-maluerimus.json */ "./localJson/lat-tufts-maluerimus.json", 1);
/* harmony import */ var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json");
var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_57___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json", 1);
/* harmony import */ var _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @/localJson/lat-tufts-marita.json */ "./localJson/lat-tufts-marita.json");
var _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_58___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-marita.json */ "./localJson/lat-tufts-marita.json", 1);
/* harmony import */ var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json");
var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_59___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json", 1);
/* harmony import */ var _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @/localJson/lat-tufts-nequeo.json */ "./localJson/lat-tufts-nequeo.json");
var _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_60___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nequeo.json */ "./localJson/lat-tufts-nequeo.json", 1);
/* harmony import */ var _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @/localJson/lat-tufts-nevolo.json */ "./localJson/lat-tufts-nevolo.json");
var _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_61___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nevolo.json */ "./localJson/lat-tufts-nevolo.json", 1);
/* harmony import */ var _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @/localJson/lat-tufts-nitido.json */ "./localJson/lat-tufts-nitido.json");
var _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_62___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nitido.json */ "./localJson/lat-tufts-nitido.json", 1);
/* harmony import */ var _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @/localJson/lat-tufts-nolo.json */ "./localJson/lat-tufts-nolo.json");
var _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_63___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-nolo.json */ "./localJson/lat-tufts-nolo.json", 1);
/* harmony import */ var _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @/localJson/lat-tufts-obsum.json */ "./localJson/lat-tufts-obsum.json");
var _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_64___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-obsum.json */ "./localJson/lat-tufts-obsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json");
var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_65___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json", 1);
/* harmony import */ var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json");
var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_66___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json", 1);
/* harmony import */ var _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @/localJson/lat-tufts-praefuistis.json */ "./localJson/lat-tufts-praefuistis.json");
var _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_67___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-praefuistis.json */ "./localJson/lat-tufts-praefuistis.json", 1);
/* harmony import */ var _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @/localJson/lat-tufts-possum.json */ "./localJson/lat-tufts-possum.json");
var _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_68___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-possum.json */ "./localJson/lat-tufts-possum.json", 1);
/* harmony import */ var _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @/localJson/lat-tufts-proderitis.json */ "./localJson/lat-tufts-proderitis.json");
var _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_69___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-proderitis.json */ "./localJson/lat-tufts-proderitis.json", 1);
/* harmony import */ var _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @/localJson/lat-tufts-servet.json */ "./localJson/lat-tufts-servet.json");
var _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_70___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-servet.json */ "./localJson/lat-tufts-servet.json", 1);
/* harmony import */ var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json");
var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_71___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json", 1);
/* harmony import */ var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json");
var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_72___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json", 1);
/* harmony import */ var _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @/localJson/lat-tufts-subsum.json */ "./localJson/lat-tufts-subsum.json");
var _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_73___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-subsum.json */ "./localJson/lat-tufts-subsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json");
var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_74___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json", 1);
/* harmony import */ var _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @/localJson/lat-tufts-supersum.json */ "./localJson/lat-tufts-supersum.json");
var _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_75___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-supersum.json */ "./localJson/lat-tufts-supersum.json", 1);
/* harmony import */ var _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @/localJson/lat-tufts-tuleritis.json */ "./localJson/lat-tufts-tuleritis.json");
var _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_76___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-tuleritis.json */ "./localJson/lat-tufts-tuleritis.json", 1);
/* harmony import */ var _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @/localJson/lat-tufts-veneo.json */ "./localJson/lat-tufts-veneo.json");
var _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_77___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-veneo.json */ "./localJson/lat-tufts-veneo.json", 1);
/* harmony import */ var _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @/localJson/lat-tufts-venit.json */ "./localJson/lat-tufts-venit.json");
var _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_78___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-venit.json */ "./localJson/lat-tufts-venit.json", 1);
/* harmony import */ var _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @/localJson/lat-tufts-volui.json */ "./localJson/lat-tufts-volui.json");
var _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_79___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-volui.json */ "./localJson/lat-tufts-volui.json", 1);
/* harmony import */ var _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @/localJson/lat-tufts-queo.json */ "./localJson/lat-tufts-queo.json");
var _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_80___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-queo.json */ "./localJson/lat-tufts-queo.json", 1);
/* harmony import */ var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json");
var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_81___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json", 1);
/* harmony import */ var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json");
var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_82___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json", 1);
/* harmony import */ var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json");
var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_83___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json", 1);


























































































































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
      'πᾶσι': _localJson_grc_tufts_pasi_json__WEBPACK_IMPORTED_MODULE_29__
    }
  },
  lat: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_0__,
      'aberis': _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_30__,
      'adeo': _localJson_lat_tufts_adeo_json__WEBPACK_IMPORTED_MODULE_31__,
      'adfuimus': _localJson_lat_tufts_adfuimus_json__WEBPACK_IMPORTED_MODULE_32__,
      'adsum': _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_33__,
      'afueras': _localJson_lat_tufts_afueras_json__WEBPACK_IMPORTED_MODULE_34__,
      'auditum': _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_35__,
      'cecinisse': _localJson_lat_tufts_cecinisse_json__WEBPACK_IMPORTED_MODULE_36__,
      'cepit': _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_37__,
      'colendi': _localJson_lat_tufts_colendi_json__WEBPACK_IMPORTED_MODULE_38__,
      'conditum': _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_39__,
      'cupidinibus': _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_40__,
      'curru': _localJson_lat_tufts_curru_json__WEBPACK_IMPORTED_MODULE_42__,
      'cursu': _localJson_lat_tufts_cursu_json__WEBPACK_IMPORTED_MODULE_41__,
      'ego': _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_43__,
      'est': _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_44__,
      'iam': _localJson_lat_tufts_iam_json__WEBPACK_IMPORTED_MODULE_45__,
      'ierint': _localJson_lat_tufts_ierint_json__WEBPACK_IMPORTED_MODULE_46__,
      'ierunt': _localJson_lat_tufts_ierunt_json__WEBPACK_IMPORTED_MODULE_47__,
      'ineo': _localJson_lat_tufts_ineo_json__WEBPACK_IMPORTED_MODULE_48__,
      'inerimus': _localJson_lat_tufts_inerimus_json__WEBPACK_IMPORTED_MODULE_49__,
      'itu': _localJson_lat_tufts_itu_json__WEBPACK_IMPORTED_MODULE_51__,
      'itum': _localJson_lat_tufts_itum_json__WEBPACK_IMPORTED_MODULE_50__,
      'iugandis': _localJson_lat_tufts_iugandis_json__WEBPACK_IMPORTED_MODULE_54__,
      'iverim': _localJson_lat_tufts_iverim_json__WEBPACK_IMPORTED_MODULE_52__,
      'ivissem': _localJson_lat_tufts_ivissem_json__WEBPACK_IMPORTED_MODULE_53__,
      'ferent': _localJson_lat_tufts_ferent_json__WEBPACK_IMPORTED_MODULE_55__,
      'maluerimus': _localJson_lat_tufts_maluerimus_json__WEBPACK_IMPORTED_MODULE_56__,
      'mare': _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_57__,
      'marita': _localJson_lat_tufts_marita_json__WEBPACK_IMPORTED_MODULE_58__,
      'mellitisque': _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_59__,
      'nequeo': _localJson_lat_tufts_nequeo_json__WEBPACK_IMPORTED_MODULE_60__,
      'nevolo': _localJson_lat_tufts_nevolo_json__WEBPACK_IMPORTED_MODULE_61__,
      'nitido': _localJson_lat_tufts_nitido_json__WEBPACK_IMPORTED_MODULE_62__,
      'nolo': _localJson_lat_tufts_nolo_json__WEBPACK_IMPORTED_MODULE_63__,
      'obsum': _localJson_lat_tufts_obsum_json__WEBPACK_IMPORTED_MODULE_64__,
      'palmaque': _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_65__,
      'placito': _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_66__,     
      'praefuistis': _localJson_lat_tufts_praefuistis_json__WEBPACK_IMPORTED_MODULE_67__,
      'possum': _localJson_lat_tufts_possum_json__WEBPACK_IMPORTED_MODULE_68__,
      'proderitis': _localJson_lat_tufts_proderitis_json__WEBPACK_IMPORTED_MODULE_69__,
      'servet': _localJson_lat_tufts_servet_json__WEBPACK_IMPORTED_MODULE_70__, 
      'submersasque': _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_71__,
      'sui': _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_72__,
      'sum': _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_74__,
      'subsum': _localJson_lat_tufts_subsum_json__WEBPACK_IMPORTED_MODULE_73__,
      'supersum': _localJson_lat_tufts_supersum_json__WEBPACK_IMPORTED_MODULE_75__,
      'tuleritis': _localJson_lat_tufts_tuleritis_json__WEBPACK_IMPORTED_MODULE_76__,
      'veneo': _localJson_lat_tufts_veneo_json__WEBPACK_IMPORTED_MODULE_77__,
      'venit': _localJson_lat_tufts_venit_json__WEBPACK_IMPORTED_MODULE_78__,
      'volui': _localJson_lat_tufts_volui_json__WEBPACK_IMPORTED_MODULE_79__,
      'queo': _localJson_lat_tufts_queo_json__WEBPACK_IMPORTED_MODULE_80__
    }
  },
  ara: {
    tufts: {
      'ترجمة': _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_81__,
      'مشکل‌ها': _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_82__
    }
  },
  per: {
    tufts: {
      'بگذرد': _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_83__
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

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιμεν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:27:42.793184\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιμεν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440212835880\"},\"Body\":{\"about\":\"urn:uuid:idm140440212835880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιμεν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"infinitive\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dedotai.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dedotai.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δέδιτε:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:29:17.656751\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δέδιτε\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154432801152\"},\"Body\":{\"about\":\"urn:uuid:idm140154432801152\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δέδιτε\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"imperative\"},\"num\":{\"$\":\"plural\"},\"pers\":{\"$\":\"2nd\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"stemtype\":{\"$\":\"perf2_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-dynamai.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-dynamai.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:δύναμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:57:08.292115\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:δύναμαι\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440217439944\"},\"Body\":{\"about\":\"urn:uuid:idm140440217439944\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δύναμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"δυν\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-edediei.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-edediei.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐδεδίειν:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:30:49.205284\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐδεδίειν\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154427690976\"},\"Body\":{\"about\":\"urn:uuid:idm140154427690976\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"δείδω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:δεδι\"},\"suff\":{\"$\":\"ειν\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"pluperfect\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic epic Ionic\"},\"stemtype\":{\"$\":\"perf_act\"}}}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-eloin.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-eloin.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐλῴην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:31:28.810630\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐλῴην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429116000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429116000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐλαύνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr poetic rare\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-epistamai.json":
/*!********************************************!*\
  !*** ./localJson/grc-tufts-epistamai.json ***!
  \********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐπίσταμαι:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:58:27.717321\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐπίσταμαι\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154427992880\"},{\"resource\":\"urn:uuid:idm140154427290336\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154427992880\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐφίστημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπί:ἱστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Ionic\"},\"stemtype\":{\"$\":\"ami_pr\"},\"morph\":{\"$\":\"unasp_preverb causal pres_redupl\"}}}}},{\"about\":\"urn:uuid:idm140154427290336\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐπίσταμαι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐπιστ\"},\"suff\":{\"$\":\"αμαι\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"mediopassive\"},\"stemtype\":{\"$\":\"ami_short\"},\"derivtype\":{\"$\":\"a_stem\"}}}}}]}}}");

/***/ }),

/***/ "./localJson/grc-tufts-etheto.json":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-etheto.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἔθετο:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T10:54:48.929383\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἔθετο\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440207728600\"},{\"resource\":\"urn:uuid:idm140440211789528\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440207728600\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἔθω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐθ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"imperfect\"},\"voice\":{\"$\":\"mediopassive\"},\"dial\":{\"$\":\"Homeric Ionic\"},\"stemtype\":{\"$\":\"w_stem\"},\"morph\":{\"$\":\"unaugmented\"}}}}},{\"about\":\"urn:uuid:idm140440211789528\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"τίθημι\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐ:θ\"},\"suff\":{\"$\":\"ετο\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"indicative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"3rd\"},\"tense\":{\"$\":\"aorist\"},\"voice\":{\"$\":\"middle\"},\"stemtype\":{\"$\":\"emi_aor\"}}}}}]}}}");

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

/***/ "./localJson/grc-tufts-kalypso.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-kalypso.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:Καλυψώ:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T11:13:12.969618\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:Καλυψώ\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440211790984\"},\"Body\":{\"about\":\"urn:uuid:idm140440211790984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"Καλυψώ\"},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"feminine\"}},\"infl\":{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"Καλυψ\"},\"suff\":{\"$\":\"ω\"}},\"pofs\":{\"order\":3,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"w_oos\"}}}}}}}}");

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