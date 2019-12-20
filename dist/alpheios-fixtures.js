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

/***/ "../node_modules/fast-xml-parser/src/json2xml.js":
/*!*******************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/json2xml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//parse Empty Node as self closing node
const buildOptions = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js").buildOptions;

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataTagName: false,
  cdataPositionChar: '\\c',
  format: false,
  indentBy: '  ',
  supressEmptyNode: false,
  tagValueProcessor: function(a) {
    return a;
  },
  attrValueProcessor: function(a) {
    return a;
  },
};

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'cdataTagName',
  'cdataPositionChar',
  'format',
  'indentBy',
  'supressEmptyNode',
  'tagValueProcessor',
  'attrValueProcessor',
];

function Parser(options) {
  this.options = buildOptions(options, defaultOptions, props);
  if (this.options.ignoreAttributes || this.options.attrNodeName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }
  if (this.options.cdataTagName) {
    this.isCDATA = isCDATA;
  } else {
    this.isCDATA = function(/*a*/) {
      return false;
    };
  }
  this.replaceCDATAstr = replaceCDATAstr;
  this.replaceCDATAarr = replaceCDATAarr;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }

  if (this.options.supressEmptyNode) {
    this.buildTextNode = buildEmptyTextNode;
    this.buildObjNode = buildEmptyObjNode;
  } else {
    this.buildTextNode = buildTextValNode;
    this.buildObjNode = buildObjectNode;
  }

  this.buildTextValNode = buildTextValNode;
  this.buildObjectNode = buildObjectNode;
}

Parser.prototype.parse = function(jObj) {
  return this.j2x(jObj, 0).val;
};

Parser.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  const keys = Object.keys(jObj);
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += ' ' + attr + '="' + this.options.attrValueProcessor('' + jObj[key]) + '"';
      } else if (this.isCDATA(key)) {
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAstr('', jObj[key]);
        }
      } else {
        //tag value
        if (key === this.options.textNodeName) {
          if (jObj[this.options.cdataTagName]) {
            //value will added while processing cdata
          } else {
            val += this.options.tagValueProcessor('' + jObj[key]);
          }
        } else {
          val += this.buildTextNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      if (this.isCDATA(key)) {
        val += this.indentate(level);
        if (jObj[this.options.textNodeName]) {
          val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
        } else {
          val += this.replaceCDATAarr('', jObj[key]);
        }
      } else {
        //nested nodes
        const arrLen = jObj[key].length;
        for (let j = 0; j < arrLen; j++) {
          const item = jObj[key][j];
          if (typeof item === 'undefined') {
            // supress undefined node
          } else if (item === null) {
            val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          } else if (typeof item === 'object') {
            const result = this.j2x(item, level + 1);
            val += this.buildObjNode(result.val, key, result.attrStr, level);
          } else {
            val += this.buildTextNode(item, key, '', level);
          }
        }
      }
    } else {
      //nested node
      if (this.options.attrNodeName && key === this.options.attrNodeName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += ' ' + Ks[j] + '="' + this.options.attrValueProcessor('' + jObj[key][Ks[j]]) + '"';
        }
      } else {
        const result = this.j2x(jObj[key], level + 1);
        val += this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

function replaceCDATAstr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata + ']]' + this.tagEndChar;
  } else {
    return str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata + ']]' + this.tagEndChar);
  }
}

function replaceCDATAarr(str, cdata) {
  str = this.options.tagValueProcessor('' + str);
  if (this.options.cdataPositionChar === '' || str === '') {
    return str + '<![CDATA[' + cdata.join(']]><![CDATA[') + ']]' + this.tagEndChar;
  } else {
    for (let v in cdata) {
      str = str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata[v] + ']]>');
    }
    return str + this.newLine;
  }
}

function buildObjectNode(val, key, attrStr, level) {
  if (attrStr && !val.includes('<')) {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      '>' +
      val +
      //+ this.newLine
      // + this.indentate(level)
      '</' +
      key +
      this.tagEndChar
    );
  } else {
    return (
      this.indentate(level) +
      '<' +
      key +
      attrStr +
      this.tagEndChar +
      val +
      //+ this.newLine
      this.indentate(level) +
      '</' +
      key +
      this.tagEndChar
    );
  }
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
    //+ this.newLine
  }
}

function buildTextValNode(val, key, attrStr, level) {
  return (
    this.indentate(level) +
    '<' +
    key +
    attrStr +
    '>' +
    this.options.tagValueProcessor(val) +
    '</' +
    key +
    this.tagEndChar
  );
}

function buildEmptyTextNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildTextValNode(val, key, attrStr, level);
  } else {
    return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
  }
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

function isCDATA(name) {
  return name === this.options.cdataTagName;
}

//formatting
//indentation
//\n after each closing or self closing tag

module.exports = Parser;


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/nimndata.js":
/*!*******************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/nimndata.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const char = function(a) {
  return String.fromCharCode(a);
};

const chars = {
  nilChar: char(176),
  missingChar: char(201),
  nilPremitive: char(175),
  missingPremitive: char(200),

  emptyChar: char(178),
  emptyValue: char(177), //empty Premitive

  boundryChar: char(179),

  objStart: char(198),
  arrStart: char(204),
  arrayEnd: char(185),
};

const charsArr = [
  chars.nilChar,
  chars.nilPremitive,
  chars.missingChar,
  chars.missingPremitive,
  chars.boundryChar,
  chars.emptyChar,
  chars.emptyValue,
  chars.arrayEnd,
  chars.objStart,
  chars.arrStart,
];

const _e = function(node, e_schema, options) {
  if (typeof e_schema === 'string') {
    //premitive
    if (node && node[0] && node[0].val !== undefined) {
      return getValue(node[0].val, e_schema);
    } else {
      return getValue(node, e_schema);
    }
  } else {
    const hasValidData = hasData(node);
    if (hasValidData === true) {
      let str = '';
      if (Array.isArray(e_schema)) {
        //attributes can't be repeated. hence check in children tags only
        str += chars.arrStart;
        const itemSchema = e_schema[0];
        //var itemSchemaType = itemSchema;
        const arr_len = node.length;

        if (typeof itemSchema === 'string') {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = getValue(node[arr_i].val, itemSchema);
            str = processValue(str, r);
          }
        } else {
          for (let arr_i = 0; arr_i < arr_len; arr_i++) {
            const r = _e(node[arr_i], itemSchema, options);
            str = processValue(str, r);
          }
        }
        str += chars.arrayEnd; //indicates that next item is not array item
      } else {
        //object
        str += chars.objStart;
        const keys = Object.keys(e_schema);
        if (Array.isArray(node)) {
          node = node[0];
        }
        for (let i in keys) {
          const key = keys[i];
          //a property defined in schema can be present either in attrsMap or children tags
          //options.textNodeName will not present in both maps, take it's value from val
          //options.attrNodeName will be present in attrsMap
          let r;
          if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
            r = _e(node.attrsMap[key], e_schema[key], options);
          } else if (key === options.textNodeName) {
            r = _e(node.val, e_schema[key], options);
          } else {
            r = _e(node.child[key], e_schema[key], options);
          }
          str = processValue(str, r);
        }
      }
      return str;
    } else {
      return hasValidData;
    }
  }
};

const getValue = function(a /*, type*/) {
  switch (a) {
    case undefined:
      return chars.missingPremitive;
    case null:
      return chars.nilPremitive;
    case '':
      return chars.emptyValue;
    default:
      return a;
  }
};

const processValue = function(str, r) {
  if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
    str += chars.boundryChar;
  }
  return str + r;
};

const isAppChar = function(ch) {
  return charsArr.indexOf(ch) !== -1;
};

function hasData(jObj) {
  if (jObj === undefined) {
    return chars.missingChar;
  } else if (jObj === null) {
    return chars.nilChar;
  } else if (
    jObj.child &&
    Object.keys(jObj.child).length === 0 &&
    (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)
  ) {
    return chars.emptyChar;
  } else {
    return true;
  }
}

const x2j = __webpack_require__(/*! ./xmlstr2xmlnode */ "../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js");
const buildOptions = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js").buildOptions;

const convert2nimn = function(node, e_schema, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);
  return _e(node, e_schema, options);
};

exports.convert2nimn = convert2nimn;


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/node2json.js":
/*!********************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/node2json.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js");

const convertToJson = function(node, options) {
  const jObj = {};

  //when no child node or attr is present
  if ((!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
    return util.isExist(node.val) ? node.val : '';
  } else {
    //otherwise create a textnode if node has some text
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        if(options.arrayMode === "strict"){
          jObj[options.textNodeName] = [ node.val ];
        }else{
          jObj[options.textNodeName] = node.val;
        }
      }
    }
  }

  util.merge(jObj, node.attrsMap, options.arrayMode);

  const keys = Object.keys(node.child);
  for (let index = 0; index < keys.length; index++) {
    var tagname = keys[index];
    if (node.child[tagname] && node.child[tagname].length > 1) {
      jObj[tagname] = [];
      for (var tag in node.child[tagname]) {
        jObj[tagname].push(convertToJson(node.child[tagname][tag], options));
      }
    } else {
      if(options.arrayMode === true){
        const result = convertToJson(node.child[tagname][0], options)
        if(typeof result === 'object')
          jObj[tagname] = [ result ];
        else
          jObj[tagname] = result;
      }else if(options.arrayMode === "strict"){
        jObj[tagname] = [convertToJson(node.child[tagname][0], options) ];
      }else{
        jObj[tagname] = convertToJson(node.child[tagname][0], options);
      }
    }
  }

  //add value
  return jObj;
};

exports.convertToJson = convertToJson;


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/node2json_str.js":
/*!************************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/node2json_str.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js");
const buildOptions = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js").buildOptions;
const x2j = __webpack_require__(/*! ./xmlstr2xmlnode */ "../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js");

//TODO: do it later
const convertToJsonString = function(node, options) {
  options = buildOptions(options, x2j.defaultOptions, x2j.props);

  options.indentBy = options.indentBy || '';
  return _cToJsonStr(node, options, 0);
};

const _cToJsonStr = function(node, options, level) {
  let jObj = '{';

  //traver through all the children
  const keys = Object.keys(node.child);

  for (let index = 0; index < keys.length; index++) {
    var tagname = keys[index];
    if (node.child[tagname] && node.child[tagname].length > 1) {
      jObj += '"' + tagname + '" : [ ';
      for (var tag in node.child[tagname]) {
        jObj += _cToJsonStr(node.child[tagname][tag], options) + ' , ';
      }
      jObj = jObj.substr(0, jObj.length - 1) + ' ] '; //remove extra comma in last
    } else {
      jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + ' ,';
    }
  }
  util.merge(jObj, node.attrsMap);
  //add attrsMap as new children
  if (util.isEmptyObject(jObj)) {
    return util.isExist(node.val) ? node.val : '';
  } else {
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
      }
    }
  }
  //add value
  if (jObj[jObj.length - 1] === ',') {
    jObj = jObj.substr(0, jObj.length - 2);
  }
  return jObj + '}';
};

function stringval(v) {
  if (v === true || v === false || !isNaN(v)) {
    return v;
  } else {
    return '"' + v + '"';
  }
}

function indentate(options, level) {
  return options.indentBy.repeat(level);
}

exports.convertToJsonString = convertToJsonString;


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/parser.js":
/*!*****************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/parser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const nodeToJson = __webpack_require__(/*! ./node2json */ "../node_modules/fast-xml-parser/src/node2json.js");
const xmlToNodeobj = __webpack_require__(/*! ./xmlstr2xmlnode */ "../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js");
const x2xmlnode = __webpack_require__(/*! ./xmlstr2xmlnode */ "../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js");
const buildOptions = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js").buildOptions;
const validator = __webpack_require__(/*! ./validator */ "../node_modules/fast-xml-parser/src/validator.js");

exports.parse = function(xmlData, options, validationOption) {
  if( validationOption){
    if(validationOption === true) validationOption = {}
    
    const result = validator.validate(xmlData, validationOption);
    if (result !== true) {
      throw Error( result.err.msg)
    }
  }
  options = buildOptions(options, x2xmlnode.defaultOptions, x2xmlnode.props);
  return nodeToJson.convertToJson(xmlToNodeobj.getTraversalObj(xmlData, options), options);
};
exports.convertTonimn = __webpack_require__(/*! ../src/nimndata */ "../node_modules/fast-xml-parser/src/nimndata.js").convert2nimn;
exports.getTraversalObj = xmlToNodeobj.getTraversalObj;
exports.convertToJson = nodeToJson.convertToJson;
exports.convertToJsonString = __webpack_require__(/*! ./node2json_str */ "../node_modules/fast-xml-parser/src/node2json_str.js").convertToJsonString;
exports.validate = validator.validate;
exports.j2xParser = __webpack_require__(/*! ./json2xml */ "../node_modules/fast-xml-parser/src/json2xml.js");
exports.parseToNimn = function(xmlData, schema, options) {
  return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
};


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/util.js":
/*!***************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const doesMatch = function(string, regex) {
  const match = regex.exec(string);
  return !(match === null || typeof match === 'undefined');
};

const doesNotMatch = function(string, regex) {
  return !doesMatch(string, regex);
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if(arrayMode === 'strict'){
        target[keys[i]] = [ a[keys[i]] ];
      }else{
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.buildOptions = function(options, defaultOptions, props) {
  var newOptions = {};
  if (!options) {
    return defaultOptions; //if there are not options
  }

  for (let i = 0; i < props.length; i++) {
    if (options[props[i]] !== undefined) {
      newOptions[props[i]] = options[props[i]];
    } else {
      newOptions[props[i]] = defaultOptions[props[i]];
    }
  }
  return newOptions;
};

exports.doesMatch = doesMatch;
exports.doesNotMatch = doesNotMatch;
exports.getAllMatches = getAllMatches;


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/validator.js":
/*!********************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/validator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js");

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  localeRange: 'a-zA-Z',
};

const props = ['allowBooleanAttributes', 'localeRange'];

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = util.buildOptions(options, defaultOptions, props);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const localRangeRegex = new RegExp(`[${options.localeRange}]`);

  if (localRangeRegex.test("<#$'\"\\\/:0")) {
    return getErrorObject('InvalidOptions', 'Invalid localeRange', 1);
  }

  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  const regxAttrName = new RegExp(`^[${options.localeRange}_][${options.localeRange}0-9\\-\\.:]*$`);
  const regxTagName = new RegExp(`^([${options.localeRange}_])[${options.localeRange}0-9\\.\\-_:]*$`);
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value

      i++;
      if (xmlData[i] === '?') {
        i = readPI(xmlData, ++i);
        if (i.err) {
          return i;
        }
      } else if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (
          ;
          i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r';
          i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName, regxTagName)) {
          let msg;
          if(tagName.trim().length === 0) {
            msg = "There is an unnecessary space between tag name and backward slash '</ ..'.";
          }else{
            msg = `Tag '${tagName}' is an invalid name.`;
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', `Attributes for '${tagName}' have open quote.`, getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options, regxAttrName);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', `Closing tag '${tagName}' doesn't have proper closing.`, getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', `Closing tag '${tagName}' can't have attributes or invalid starting.`, getLineNumberForPosition(xmlData, i));
          } else {
            const otg = tags.pop();
            if (tagName !== otg) {
              return getErrorObject('InvalidTag', `Closing tag '${otg}' is expected inplace of '${tagName}'.`, getLineNumberForPosition(xmlData, i));
            }

            //when there are no more tags, we reached the root level.
            if(tags.length == 0)
            {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options, regxAttrName);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if(reachedRoot === true) {
              return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else {
              tags.push(tagName);
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else {
              break;
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
        continue;
      }
      return getErrorObject('InvalidChar', `char '${xmlData[i]}' is not expected.`, getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', `Invalid '${JSON.stringify(tags, null, 4).replace(/\r?\n/g, '')}' found.`, 1);
  }

  return true;
};

/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  var start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

var doubleQuote = '"';
var singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
        continue;
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return { value: attrStr, index: i, tagClosed: tagClosed };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options, regxAttrName) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', `Attribute '${matches[i][2]}' has no space in starting.`, getPositionFromMatch(attrStr, matches[i][0]))
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', `boolean attribute '${matches[i][2]}' is not allowed.`, getPositionFromMatch(attrStr, matches[i][0]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName, regxAttrName)) {
      return getErrorObject('InvalidAttr', `Attribute '${attrName}' is an invalid name.`, getPositionFromMatch(attrStr, matches[i][0]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', `Attribute '${attrName}' is repeated.`, getPositionFromMatch(attrStr, matches[i][0]));
    }
  }

  return true;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber,
    },
  };
}

function validateAttrName(attrName, regxAttrName) {
  // const validAttrRegxp = new RegExp(regxAttrName);
  return util.doesMatch(attrName, regxAttrName);
}

//const startsWithXML = new RegExp("^[Xx][Mm][Ll]");
//  startsWith = /^([a-zA-Z]|_)[\w.\-_:]*/;

function validateTagName(tagname, regxTagName) {
  /*if(util.doesMatch(tagname,startsWithXML)) return false;
    else*/
  //return !tagname.toLowerCase().startsWith("xml") || !util.doesNotMatch(tagname, regxTagName);
  return !util.doesNotMatch(tagname, regxTagName);
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  var lines = xmlData.substring(0, index).split(/\r?\n/);
  return lines.length;
}

//this function returns the position of the last character of match within attrStr
function getPositionFromMatch(attrStr, match) {
  return attrStr.indexOf(match) + match.length;
}

/***/ }),

/***/ "../node_modules/fast-xml-parser/src/xmlNode.js":
/*!******************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/xmlNode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags
  this.attrsMap = {}; //attributes map
  this.val = val; //text only
  this.addChild = function(child) {
    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
};


/***/ }),

/***/ "../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js":
/*!*************************************************************!*\
  !*** ../node_modules/fast-xml-parser/src/xmlstr2xmlnode.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js");
const buildOptions = __webpack_require__(/*! ./util */ "../node_modules/fast-xml-parser/src/util.js").buildOptions;
const xmlNode = __webpack_require__(/*! ./xmlNode */ "../node_modules/fast-xml-parser/src/xmlNode.js");
const TagType = {OPENING: 1, CLOSING: 2, SELF: 3, CDATA: 4};
let regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)';

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

//polyfill
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}

const defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false, //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseNodeValue: true,
  parseAttributeValue: false,
  arrayMode: false,
  trimValues: true, //Trim string values of tag and attributes
  cdataTagName: false,
  cdataPositionChar: '\\c',
  localeRange: '',
  tagValueProcessor: function(a, tagName) {
    return a;
  },
  attrValueProcessor: function(a, attrName) {
    return a;
  },
  stopNodes: []
  //decodeStrict: false,
};

exports.defaultOptions = defaultOptions;

const props = [
  'attributeNamePrefix',
  'attrNodeName',
  'textNodeName',
  'ignoreAttributes',
  'ignoreNameSpace',
  'allowBooleanAttributes',
  'parseNodeValue',
  'parseAttributeValue',
  'arrayMode',
  'trimValues',
  'cdataTagName',
  'cdataPositionChar',
  'localeRange',
  'tagValueProcessor',
  'attrValueProcessor',
  'parseTrueNumberOnly',
  'stopNodes'
];
exports.props = props;

const getTraversalObj = function(xmlData, options) {
  options = buildOptions(options, defaultOptions, props);
  //xmlData = xmlData.replace(/\r?\n/g, " ");//make it single line
  xmlData = xmlData.replace(/<!--[\s\S]*?-->/g, ''); //Remove  comments

  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;

  regx = regx.replace(/\[\\w/g, '[' + options.localeRange + '\\w');
  const tagsRegx = new RegExp(regx, 'g');
  let tag = tagsRegx.exec(xmlData);
  let nextTag = tagsRegx.exec(xmlData);
  while (tag) {
    const tagType = checkForTagType(tag);

    if (tagType === TagType.CLOSING) {
      //add parsed data to parent node
      if (currentNode.parent && tag[14]) {
        currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue(tag, options, currentNode.parent.tagname);
      }
      if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
        currentNode.child = []
        if (currentNode.attrsMap == undefined) { currentNode.attrsMap = {}}
        currentNode.val = xmlData.substr(currentNode.startIndex + 1, tag.index - currentNode.startIndex - 1)
      }
      currentNode = currentNode.parent;
    } else if (tagType === TagType.CDATA) {
      if (options.cdataTagName) {
        //add cdata node
        const childNode = new xmlNode(options.cdataTagName, currentNode, tag[3]);
        childNode.attrsMap = buildAttributesMap(tag[8], options);
        currentNode.addChild(childNode);
        //for backtracking
        currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
        //add rest value to parent node
        if (tag[14]) {
          currentNode.val += processTagValue(tag, options);
        }
      } else {
        currentNode.val = (currentNode.val || '') + (tag[3] || '') + processTagValue(tag, options);
      }
    } else if (tagType === TagType.SELF) {
      if (currentNode && tag[14]) {
        currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tag, options);
      }

      const childNode = new xmlNode(options.ignoreNameSpace ? tag[7] : tag[5], currentNode, '');
      if (tag[8] && tag[8].length > 0) {
        tag[8] = tag[8].substr(0, tag[8].length - 1);
      }
      childNode.attrsMap = buildAttributesMap(tag[8], options);
      currentNode.addChild(childNode);
    } else {
      //TagType.OPENING
      const childNode = new xmlNode(
        options.ignoreNameSpace ? tag[7] : tag[5],
        currentNode,
        processTagValue(tag, options)
      );
      if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
        childNode.startIndex=tag.index + tag[1].length
      }
      childNode.attrsMap = buildAttributesMap(tag[8], options);
      currentNode.addChild(childNode);
      currentNode = childNode;
    }

    tag = nextTag;
    nextTag = tagsRegx.exec(xmlData);
  }

  return xmlObj;
};

function processTagValue(parsedTags, options, parentTagName) {
  const tagName = parsedTags[7] || parentTagName;
  let val = parsedTags[14];
  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }
    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue, options.parseTrueNumberOnly);
  }

  return val;
}

function checkForTagType(match) {
  if (match[4] === ']]>') {
    return TagType.CDATA;
  } else if (match[10] === '/') {
    return TagType.CLOSING;
  } else if (typeof match[8] !== 'undefined' && match[8].substr(match[8].length - 1) === '/') {
    return TagType.SELF;
  } else {
    return TagType.OPENING;
  }
}

function resolveNameSpace(tagname, options) {
  if (options.ignoreNameSpace) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

function parseValue(val, shouldParse, parseTrueNumberOnly) {
  if (shouldParse && typeof val === 'string') {
    let parsed;
    if (val.trim() === '' || isNaN(val)) {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = Number.parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = Number.parseFloat(val);
        val = val.replace(/0+$/,"");
      } else {
        parsed = Number.parseInt(val, 10);
      }
      if (parseTrueNumberOnly) {
        parsed = String(parsed) === val ? parsed : val;
      }
    }
    return parsed;
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

function buildAttributesMap(attrStr, options) {
  if (!options.ignoreAttributes && typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = resolveNameSpace(matches[i][1], options);
      if (attrName.length) {
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }
          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[options.attributeNamePrefix + attrName] = parseValue(
            matches[i][4],
            options.parseAttributeValue,
            options.parseTrueNumberOnly
          );
        } else if (options.allowBooleanAttributes) {
          attrs[options.attributeNamePrefix + attrName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (options.attrNodeName) {
      const attrCollection = {};
      attrCollection[options.attrNodeName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}

exports.getTraversalObj = getTraversalObj;


/***/ }),

/***/ "./fixture.js":
/*!********************!*\
  !*** ./fixture.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fixture; });
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-xml-parser */ "../node_modules/fast-xml-parser/src/parser.js");
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/localJson/tufts-default.xml */ "./localJson/tufts-default.xml");
/* harmony import */ var _localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localJson_gez_tufts_hageriye_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/localJson/gez-tufts-hageriye.xml */ "./localJson/gez-tufts-hageriye.xml");
/* harmony import */ var _localJson_gez_tufts_hageriye_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_localJson_gez_tufts_hageriye_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _localJson_grc_tufts_eloin_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/localJson/grc-tufts-eloin.xml */ "./localJson/grc-tufts-eloin.xml");
/* harmony import */ var _localJson_grc_tufts_eloin_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_localJson_grc_tufts_eloin_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _localJson_grc_tufts_oudemia_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/localJson/grc-tufts-oudemia.xml */ "./localJson/grc-tufts-oudemia.xml");
/* harmony import */ var _localJson_grc_tufts_oudemia_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_localJson_grc_tufts_oudemia_xml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _localJson_lat_tufts_aberis_xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/localJson/lat-tufts-aberis.xml */ "./localJson/lat-tufts-aberis.xml");
/* harmony import */ var _localJson_lat_tufts_aberis_xml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_aberis_xml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _localJson_lat_tufts_adsum_xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/localJson/lat-tufts-adsum.xml */ "./localJson/lat-tufts-adsum.xml");
/* harmony import */ var _localJson_lat_tufts_adsum_xml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_adsum_xml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _localJson_lat_tufts_auditum_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/localJson/lat-tufts-auditum.xml */ "./localJson/lat-tufts-auditum.xml");
/* harmony import */ var _localJson_lat_tufts_auditum_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_auditum_xml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _localJson_lat_tufts_cepit_xml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/localJson/lat-tufts-cepit.xml */ "./localJson/lat-tufts-cepit.xml");
/* harmony import */ var _localJson_lat_tufts_cepit_xml__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_cepit_xml__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _localJson_lat_tufts_conditum_xml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/localJson/lat-tufts-conditum.xml */ "./localJson/lat-tufts-conditum.xml");
/* harmony import */ var _localJson_lat_tufts_conditum_xml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_conditum_xml__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _localJson_lat_tufts_cupidinibus_xml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/localJson/lat-tufts-cupidinibus.xml */ "./localJson/lat-tufts-cupidinibus.xml");
/* harmony import */ var _localJson_lat_tufts_cupidinibus_xml__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_cupidinibus_xml__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _localJson_lat_tufts_ego_xml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/localJson/lat-tufts-ego.xml */ "./localJson/lat-tufts-ego.xml");
/* harmony import */ var _localJson_lat_tufts_ego_xml__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_ego_xml__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _localJson_lat_tufts_est_xml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/localJson/lat-tufts-est.xml */ "./localJson/lat-tufts-est.xml");
/* harmony import */ var _localJson_lat_tufts_est_xml__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_est_xml__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _localJson_lat_tufts_mare_xml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/localJson/lat-tufts-mare.xml */ "./localJson/lat-tufts-mare.xml");
/* harmony import */ var _localJson_lat_tufts_mare_xml__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_mare_xml__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _localJson_lat_tufts_mellitisque_xml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/localJson/lat-tufts-mellitisque.xml */ "./localJson/lat-tufts-mellitisque.xml");
/* harmony import */ var _localJson_lat_tufts_mellitisque_xml__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_mellitisque_xml__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _localJson_lat_tufts_palmaque_xml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/localJson/lat-tufts-palmaque.xml */ "./localJson/lat-tufts-palmaque.xml");
/* harmony import */ var _localJson_lat_tufts_palmaque_xml__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_palmaque_xml__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _localJson_lat_tufts_placito_xml__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/localJson/lat-tufts-placito.xml */ "./localJson/lat-tufts-placito.xml");
/* harmony import */ var _localJson_lat_tufts_placito_xml__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_placito_xml__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _localJson_lat_tufts_submersasque_xml__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/localJson/lat-tufts-submersasque.xml */ "./localJson/lat-tufts-submersasque.xml");
/* harmony import */ var _localJson_lat_tufts_submersasque_xml__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_submersasque_xml__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _localJson_lat_tufts_sui_xml__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/localJson/lat-tufts-sui.xml */ "./localJson/lat-tufts-sui.xml");
/* harmony import */ var _localJson_lat_tufts_sui_xml__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_sui_xml__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _localJson_lat_tufts_sum_xml__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/localJson/lat-tufts-sum.xml */ "./localJson/lat-tufts-sum.xml");
/* harmony import */ var _localJson_lat_tufts_sum_xml__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_localJson_lat_tufts_sum_xml__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _localJson_ara_tufts_trjmh_xml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/localJson/ara-tufts-trjmh.xml */ "./localJson/ara-tufts-trjmh.xml");
/* harmony import */ var _localJson_ara_tufts_trjmh_xml__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_localJson_ara_tufts_trjmh_xml__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _localJson_ara_tufts_mshkel_ha_xml__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/localJson/ara-tufts-mshkel‌ha.xml */ "./localJson/ara-tufts-mshkel‌ha.xml");
/* harmony import */ var _localJson_ara_tufts_mshkel_ha_xml__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_localJson_ara_tufts_mshkel_ha_xml__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _localJson_per_tufts_pass_xml__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/localJson/per-tufts-pass.xml */ "./localJson/per-tufts-pass.xml");
/* harmony import */ var _localJson_per_tufts_pass_xml__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_localJson_per_tufts_pass_xml__WEBPACK_IMPORTED_MODULE_22__);

































const library = {
  gez: {
    tufts: {
      default: _localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1___default.a,
      'ሀገርየ': _localJson_gez_tufts_hageriye_xml__WEBPACK_IMPORTED_MODULE_2___default.a
    }
  },
  grc: {
    tufts: {
      default: _localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1___default.a,
      'ἐλῴην': _localJson_grc_tufts_eloin_xml__WEBPACK_IMPORTED_MODULE_3___default.a,
      'οὐδεμία': _localJson_grc_tufts_oudemia_xml__WEBPACK_IMPORTED_MODULE_4___default.a
    }
  },
  lat: {
    tufts: {
      default: _localJson_tufts_default_xml__WEBPACK_IMPORTED_MODULE_1___default.a,
      'aberis': _localJson_lat_tufts_aberis_xml__WEBPACK_IMPORTED_MODULE_5___default.a,
      'adsum': _localJson_lat_tufts_adsum_xml__WEBPACK_IMPORTED_MODULE_6___default.a,
      'auditum': _localJson_lat_tufts_auditum_xml__WEBPACK_IMPORTED_MODULE_7___default.a,
      'cepit': _localJson_lat_tufts_cepit_xml__WEBPACK_IMPORTED_MODULE_8___default.a,
      'conditum': _localJson_lat_tufts_conditum_xml__WEBPACK_IMPORTED_MODULE_9___default.a,
      'cupidinibus': _localJson_lat_tufts_cupidinibus_xml__WEBPACK_IMPORTED_MODULE_10___default.a,
      'ego': _localJson_lat_tufts_ego_xml__WEBPACK_IMPORTED_MODULE_11___default.a,
      'est': _localJson_lat_tufts_est_xml__WEBPACK_IMPORTED_MODULE_12___default.a,
      'mare': _localJson_lat_tufts_mare_xml__WEBPACK_IMPORTED_MODULE_13___default.a,
      'mellitisque': _localJson_lat_tufts_mellitisque_xml__WEBPACK_IMPORTED_MODULE_14___default.a,
      'palmaque': _localJson_lat_tufts_palmaque_xml__WEBPACK_IMPORTED_MODULE_15___default.a,
      'placito': _localJson_lat_tufts_placito_xml__WEBPACK_IMPORTED_MODULE_16___default.a,      
      'submersasque': _localJson_lat_tufts_submersasque_xml__WEBPACK_IMPORTED_MODULE_17___default.a,
      'sui': _localJson_lat_tufts_sui_xml__WEBPACK_IMPORTED_MODULE_18___default.a,
      'sum': _localJson_lat_tufts_sum_xml__WEBPACK_IMPORTED_MODULE_19___default.a
    }
  },
  ara: {
    tufts: {
      'ترجمة': _localJson_ara_tufts_trjmh_xml__WEBPACK_IMPORTED_MODULE_20___default.a,
      'مشکل‌ها': _localJson_ara_tufts_mshkel_ha_xml__WEBPACK_IMPORTED_MODULE_21___default.a
    }
  },
  per: {
    tufts: {
      'بگذرد': _localJson_per_tufts_pass_xml__WEBPACK_IMPORTED_MODULE_22___default.a
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
    // console.info('updateMean - ', bodyItem.rest.entry.mean)
    if (bodyItem.rest.entry && bodyItem.rest.entry.mean) {
      if (!Array.isArray(bodyItem.rest.entry.mean)) { bodyItem.rest.entry.mean = [bodyItem.rest.entry.mean] }

      for (let i = 0; i < bodyItem.rest.entry.mean.length; i++) {
        bodyItem.rest.entry.mean[i] = Fixture.updateProp(bodyItem.rest.entry.mean[i])
      }
    }
  }

  static getFixtureRes(params) {
    const sourceData = Fixture.defineFileByParameters(params)

    if (!sourceData) { 
      console.info('There is no fixture for ', params.langCode + '-' + params.adapter + '-' + params.word)
      return
    }
    const options = {
      ignoreNameSpace : true,
      ignoreAttributes : false,
      attributeNamePrefix : "",
      textNodeName : "$"
    }
    
    const resJson = fast_xml_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(sourceData, options)

    if (!resJson.RDF.Annotation.Body) {
      return resJson
    }

    Fixture.updateProvider(resJson)
    Fixture.checkBody(resJson)

    
    resJson.RDF.Annotation.Body.forEach(bodyItem => {
      Fixture.updateInfl(bodyItem)
      Fixture.updateDict(bodyItem)
      Fixture.updateMean(bodyItem)
    })
    return resJson
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

/***/ "./localJson/ara-tufts-mshkel‌ha.xml":
/*!*******************************************!*\
  !*** ./localJson/ara-tufts-mshkel‌ha.xml ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:مشکل‌ها:aramorph\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:aramorph.v2\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T11:03:31.624940</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:مشکل‌ها\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154429296160\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154429296160\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUN</morph>\n            <xmpl>problem/difficulty</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n              <suff>ُ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNu/CASE_DEF_NOM</morph>\n            <xmpl>problem/difficulty + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n              <suff>َ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNa/CASE_DEF_ACC</morph>\n            <xmpl>problem/difficulty + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n              <suff>ٌ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNN/CASE_INDEF_NOM</morph>\n            <xmpl>problem/difficulty + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n              <suff>ٍ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNK/CASE_INDEF_GEN</morph>\n            <xmpl>problem/difficulty + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشْكِل</stem>\n              <suff>ِ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNi/CASE_DEF_GEN</morph>\n            <xmpl>problem/difficulty + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">مُشْكِل</hdwd>\n            <pofs order=\"9\">noun</pofs>\n          </dict>\n          <mean>problem/difficulty</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154429398352\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154429398352\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJ</morph>\n            <xmpl>variegated</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ُ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJu/CASE_DEF_NOM</morph>\n            <xmpl>variegated + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>َ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJa/CASE_DEF_ACC</morph>\n            <xmpl>variegated + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٌ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJN/CASE_INDEF_NOM</morph>\n            <xmpl>variegated + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٍ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJK/CASE_INDEF_GEN</morph>\n            <xmpl>variegated + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ِ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJi/CASE_DEF_GEN</morph>\n            <xmpl>variegated + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">مُشَكَّل</hdwd>\n            <pofs order=\"0\">adjective</pofs>\n          </dict>\n          <mean>variegated</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154429399488\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154429399488\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJ</morph>\n            <xmpl>composed/formed</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ُ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJu/CASE_DEF_NOM</morph>\n            <xmpl>composed/formed + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>َ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJa/CASE_DEF_ACC</morph>\n            <xmpl>composed/formed + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٌ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJN/CASE_INDEF_NOM</morph>\n            <xmpl>composed/formed + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٍ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJK/CASE_INDEF_GEN</morph>\n            <xmpl>composed/formed + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ِ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJi/CASE_DEF_GEN</morph>\n            <xmpl>composed/formed + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">مُشَكَّل</hdwd>\n            <pofs order=\"0\">adjective</pofs>\n          </dict>\n          <mean>composed/formed</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154429367728\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154429367728\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJ</morph>\n            <xmpl>diacriticized (with short vowels and diacritics)</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ُ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJu/CASE_DEF_NOM</morph>\n            <xmpl>diacriticized (with short vowels and diacritics) + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>َ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJa/CASE_DEF_ACC</morph>\n            <xmpl>diacriticized (with short vowels and diacritics) + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٌ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJN/CASE_INDEF_NOM</morph>\n            <xmpl>diacriticized (with short vowels and diacritics) + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ٍ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJK/CASE_INDEF_GEN</morph>\n            <xmpl>diacriticized (with short vowels and diacritics) + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>مُشَكَّل</stem>\n              <suff>ِ</suff>\n            </term>\n            <pofs order=\"0\">adjective</pofs>\n            <morph>ADJi/CASE_DEF_GEN</morph>\n            <xmpl>diacriticized (with short vowels and diacritics) + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">مُشَكَّل</hdwd>\n            <pofs order=\"0\">adjective</pofs>\n          </dict>\n          <mean>diacriticized (with short vowels and diacritics)</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432856160\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432856160\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>ها</stem>\n            </term>\n            <pofs order=\"0\">interjection</pofs>\n            <morph>INTERJ</morph>\n            <xmpl>look/now</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">ها</hdwd>\n            <pofs order=\"0\">interjection</pofs>\n          </dict>\n          <mean>look/now</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/ara-tufts-trjmh.xml":
/*!***************************************!*\
  !*** ./localJson/ara-tufts-trjmh.xml ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:ترجمة:aramorph\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:aramorph.v2\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T11:02:29.269130</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Morphology provided by Buckwalter Arabic Morphological Analyzer Version 2.0 from QAMUS LLC (www.qamus.org).</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:ترجمة\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440212663240\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440212663240\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةٌ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM</morph>\n            <xmpl>biography + [fem.sg.] + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةُ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM</morph>\n            <xmpl>biography + [fem.sg.] + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةً</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC</morph>\n            <xmpl>biography + [fem.sg.] + [indef.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةٍ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN</morph>\n            <xmpl>biography + [fem.sg.] + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةَ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC</morph>\n            <xmpl>biography + [fem.sg.] + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َة</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG</morph>\n            <xmpl>biography + [fem.sg.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةِ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN</morph>\n            <xmpl>biography + [fem.sg.] + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">تَرْجَمَة</hdwd>\n            <pofs order=\"9\">noun</pofs>\n          </dict>\n          <mean>biography</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209752264\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209752264\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةٌ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_NOM</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [indef.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةُ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_NOM</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [def.nom.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةً</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_ACC</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [indef.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةٍ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_INDEF_GEN</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [indef.gen.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةَ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_ACC</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [def.acc.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َة</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG</morph>\n            <xmpl>translation/interpretation + [fem.sg.]</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َةِ</suff>\n            </term>\n            <pofs order=\"9\">noun</pofs>\n            <morph>NOUNap/NSUFF_FEM_SG+CASE_DEF_GEN</morph>\n            <xmpl>translation/interpretation + [fem.sg.] + [def.gen.]</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">تَرْجَمَة</hdwd>\n            <pofs order=\"9\">noun</pofs>\n          </dict>\n          <mean>translation/interpretation</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209585128\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209585128\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تَ</pref>\n              <stem>رْجُم</stem>\n              <suff>ْهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSrojum/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + revile/stone + [jus.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + revile/stone + [jus.] + it/him</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تَ</pref>\n              <stem>رْجُم</stem>\n              <suff>ُهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSrojum/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + revile/stone + [ind.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + revile/stone + [ind.] + it/him</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تَ</pref>\n              <stem>رْجُم</stem>\n              <suff>َهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSrojum/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + revile/stone + [sub.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + revile/stone + [sub.] + it/him</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">رَجَم</hdwd>\n            <pofs order=\"10\">verb</pofs>\n          </dict>\n          <mean>revile/stone</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440212458712\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440212458712\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تُ</pref>\n              <stem>رَجِّم</stem>\n              <suff>ْهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSraj~im/VERB_IMPERFECTo/IVSUFF_MOOD:J+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + surmise/conjecture + [jus.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + surmise/conjecture + [jus.] + it/him</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تُ</pref>\n              <stem>رَجِّم</stem>\n              <suff>ُهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSraj~im/VERB_IMPERFECTu/IVSUFF_MOOD:I+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + surmise/conjecture + [ind.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + surmise/conjecture + [ind.] + it/him</xmpl>\n          </infl>\n          <infl>\n            <term xml:lang=\"ara\">\n              <pref>تُ</pref>\n              <stem>رَجِّم</stem>\n              <suff>َهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>IV3FSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS</morph>\n            <morph>IV2MSraj~im/VERB_IMPERFECTa/IVSUFF_MOOD:S+IVSUFF_DO:3MS</morph>\n            <xmpl>it/they/she + surmise/conjecture + [sub.] + it/him</xmpl>\n            <xmpl>you [masc.sg.] + surmise/conjecture + [sub.] + it/him</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">رَجَّم</hdwd>\n            <pofs order=\"10\">verb</pofs>\n          </dict>\n          <mean>surmise/conjecture</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440212459368\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440212459368\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <infl>\n            <term xml:lang=\"ara\">\n              <stem>تَرْجَم</stem>\n              <suff>َهُ</suff>\n            </term>\n            <pofs order=\"10\">verb</pofs>\n            <morph>VERB_PERFECTa/PVSUFF_SUBJ:3MS+PVSUFF_DO:3MS</morph>\n            <xmpl>translate/interpret + he/it [verb] + it/him</xmpl>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"ara\">تَرْجَم</hdwd>\n            <pofs order=\"10\">verb</pofs>\n          </dict>\n          <mean>translate/interpret</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/gez-tufts-hageriye.xml":
/*!******************************************!*\
  !*** ./localJson/gez-tufts-hageriye.xml ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:ሀገርየ:traces\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"betamasaheft.eu:morpho.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:23:14.576264</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Gǝʿǝz morphology parser (http://betamasaheft.eu/morpho) was developed for the TraCES European Research Council Advanced Grant (https://www.traces.uni-hamburg.de/), Grant Agreement 338756. TraCES corpus data was annotated with the GeTa tool (developed by Cristina Vertan) by the project team (https://www.traces.uni-hamburg.de/en/team.html) directed by Alessandro Bausi. Core reference tables of schemata and affixes were provided by Vitagrazia Pisani and Magdalena Krzyżanowska. Augustus Dillmann's Lexicon Linguae Aethiopicae Online (http://betamasaheft.eu/Dillmann/) used for validation of hypotheses is curated by the TraCES project team, and especially by Alessandro Bausi and Andreas Ellwardt. Current engine  provided by Pietro Liuzzo (https://github.com/TraCES-Lexicon/lexicon/tree/master/geezParser) with support from the project Beta maṣāḥǝft: Manuscripts of Ethiopia and Eritrea (Schriftkultur des christlichen Äthiopiens: eine multimediale Forschungsumgebung) is a long-term project funded within the framework of the Academies' Programme (coordinated by the Union of the German Academies of Sciences and Humanities) under survey of the Akademie der Wissenschaften in Hamburg.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:ሀገርየ\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432739344\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432739344\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <dict>\n            <hdwd xml:lang=\"gez\">ሀገር</hdwd>\n            <src>https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199</src>\n          </dict>\n          <mean xml:lang=\"la\"> ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker </mean>\n          <infl>\n            <term xml:lang=\"gez\">\n              <stem>ሀገር</stem>\n              <suff>ya</suff>\n            </term>\n            <pofs>noun</pofs>\n            <note/>\n            <note/>\n            <mood/>\n            <gend>common</gend>\n            <num>singular</num>\n            <pers>first</pers>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154437246288\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154437246288\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <dict>\n            <hdwd xml:lang=\"gez\">ሀገር</hdwd>\n            <src>https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199</src>\n          </dict>\n          <mean xml:lang=\"la\"> ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker </mean>\n          <infl>\n            <term xml:lang=\"gez\">\n              <stem>ሀገር</stem>\n              <suff>ya</suff>\n            </term>\n            <pofs>noun</pofs>\n            <note/>\n            <note/>\n            <mood/>\n            <gend>common</gend>\n            <num>singular</num>\n            <pers>first</pers>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154433219792\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154433219792\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <dict>\n            <hdwd xml:lang=\"gez\">ሀገር</hdwd>\n            <src>https://betamasaheft.eu/Dillmann/lemma/L46836496ad7b4239855ba274c5a77199</src>\n          </dict>\n          <mean xml:lang=\"la\"> ager cultus ,  terra inhabitata ,  regio ,  provincia ,  patria ,  patria ,  Armenia ,  provincia Sêwae ,  provincia Dambeae ,  pagus ,  vicus ,  villa ,  oppidum ,  urbs ,  civitas ,  sedes Saul regis ,  urbs munita ,  castellum ,  arx ,  emporium ,  in urbe ,  oppido ,  ruri ,  in agro ,  urbe ,  metropolis ,  patriam ,  incolis urbis vel oppidi ,  civibus ,  civitate ,  agricola ,  ager ,  Acker </mean>\n          <infl>\n            <term xml:lang=\"gez\">\n              <stem>ሀገር</stem>\n            </term>\n            <pofs>common noun</pofs>\n            <mood/>\n            <gend>unmarked</gend>\n            <case>nominative</case>\n            <note>pronominal state</note>\n            <num>singularp unmarkeds</num>\n            <pers/>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/grc-tufts-eloin.xml":
/*!***************************************!*\
  !*** ./localJson/grc-tufts-eloin.xml ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:ἐλῴην:morpheusgrc\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"org.perseus:tools:morpheus.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:15:27.015536</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:ἐλῴην\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209086952\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209086952\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <dict>\n            <hdwd xml:lang=\"grc\">ἐλαύνω</hdwd>\n            <pofs order=\"1\">verb</pofs>\n          </dict>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>ἐλ</stem>\n              <suff>ῴην</suff>\n            </term>\n            <pofs order=\"1\">verb</pofs>\n            <mood>optative</mood>\n            <num>singular</num>\n            <pers>1st</pers>\n            <tense>future</tense>\n            <voice>active</voice>\n            <dial>Attic</dial>\n            <stemtype>aw_fut</stemtype>\n            <derivtype>a_stem</derivtype>\n            <morph>contr</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>ἐλ</stem>\n              <suff>ῴην</suff>\n            </term>\n            <pofs order=\"1\">verb</pofs>\n            <mood>optative</mood>\n            <num>singular</num>\n            <pers>1st</pers>\n            <tense>present</tense>\n            <voice>active</voice>\n            <dial>epic</dial>\n            <stemtype>aw_pr</stemtype>\n            <derivtype>a_stem</derivtype>\n            <morph>contr poetic rare</morph>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/grc-tufts-oudemia.xml":
/*!*****************************************!*\
  !*** ./localJson/grc-tufts-oudemia.xml ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:οὐδεμία:morpheusgrc\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"org.perseus:tools:morpheus.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:21:16.497758</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:οὐδεμία\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154430392016\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154430392016\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry uri=\"\">\n          <dict>\n            <hdwd xml:lang=\"grc\">οὐδείς</hdwd>\n            <pofs order=\"5\">pronoun</pofs>\n          </dict>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμία</stem>\n            </term>\n            <pofs order=\"5\">pronoun</pofs>\n            <case order=\"7\">nominative</case>\n            <gend>feminine</gend>\n            <num>singular</num>\n            <stemtype>pron_adj1</stemtype>\n            <morph>indeclform</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμία</stem>\n            </term>\n            <pofs order=\"5\">pronoun</pofs>\n            <case order=\"1\">vocative</case>\n            <gend>feminine</gend>\n            <num>singular</num>\n            <stemtype>pron_adj1</stemtype>\n            <morph>indeclform</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμίᾱ</stem>\n            </term>\n            <pofs order=\"5\">pronoun</pofs>\n            <case order=\"7\">nominative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>pron_adj1</stemtype>\n            <morph>indeclform</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμίᾱ</stem>\n            </term>\n            <pofs order=\"5\">pronoun</pofs>\n            <case order=\"1\">vocative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>pron_adj1</stemtype>\n            <morph>indeclform</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμίᾱ</stem>\n            </term>\n            <pofs order=\"5\">pronoun</pofs>\n            <case order=\"4\">accusative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>pron_adj1</stemtype>\n            <morph>indeclform</morph>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμι</stem>\n              <suff>ᾱ</suff>\n            </term>\n            <pofs order=\"2\">adjective</pofs>\n            <decl>1st &amp; 2nd</decl>\n            <case order=\"7\">nominative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>os_h_on</stemtype>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμι</stem>\n              <suff>ᾱ</suff>\n            </term>\n            <pofs order=\"2\">adjective</pofs>\n            <decl>1st &amp; 2nd</decl>\n            <case order=\"1\">vocative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>os_h_on</stemtype>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμι</stem>\n              <suff>ᾱ</suff>\n            </term>\n            <pofs order=\"2\">adjective</pofs>\n            <decl>1st &amp; 2nd</decl>\n            <case order=\"4\">accusative</case>\n            <gend>feminine</gend>\n            <num>dual</num>\n            <stemtype>os_h_on</stemtype>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμι</stem>\n              <suff>ᾱ</suff>\n            </term>\n            <pofs order=\"2\">adjective</pofs>\n            <decl>1st &amp; 2nd</decl>\n            <case order=\"7\">nominative</case>\n            <gend>feminine</gend>\n            <num>singular</num>\n            <dial>Attic Doric Aeolic</dial>\n            <stemtype>os_h_on</stemtype>\n          </infl>\n          <infl>\n            <term xml:lang=\"grc\">\n              <stem>οὐδεμι</stem>\n              <suff>ᾱ</suff>\n            </term>\n            <pofs order=\"2\">adjective</pofs>\n            <decl>1st &amp; 2nd</decl>\n            <case order=\"1\">vocative</case>\n            <gend>feminine</gend>\n            <num>singular</num>\n            <dial>Attic Doric Aeolic</dial>\n            <stemtype>os_h_on</stemtype>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-aberis.xml":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-aberis.xml ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:aberis:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:26:03.921572</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:aberis\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213343208\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213343208\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>ab</stem>\n              <suff>eris</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>5th</conj>\n            <var>1st</var>\n            <tense>future</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>2nd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">absum, abesse, abfui, abfuturus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <freq order=\"3\">lesser</freq>\n            <src>Lewis+Short</src>\n          </dict>\n          <dict>\n            <hdwd xml:lang=\"lat\">absum, abesse, afui, afuturus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>be away/absent/distant/missing; be free/removed from; be lacking; be distinct;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-adsum.xml":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-adsum.xml ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:adsum:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:26:56.429929</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:adsum\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440208177880\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440208177880\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>ads</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>5th</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>1st</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">adsum, adesse, adfui, adfuturus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <dict>\n            <hdwd xml:lang=\"lat\">adsum, adesse, arfui, arfuturus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <age order=\"2\">early</age>\n            <freq order=\"4\">common</freq>\n            <src>Lewis+Short</src>\n          </dict>\n          <mean>be near, be present, be in attendance, arrive, appear; aid (w/DAT);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440215153832\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440215153832\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>adsum</stem>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>imperative</mood>\n            <pers>2nd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">adsumo, adsumere, adsumpsi, adsumptus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <kind>transitive</kind>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>take (to/up/on/from), adopt/raise, use; assume/receive; insert/add; usurp/claim</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-auditum.xml":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-auditum.xml ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:auditum:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:27:24.544922</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:auditum\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440212467704\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440212467704\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>supine</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">audio, audire, audivi, auditus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>4th</conj>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>hear, listen, accept, agree with; obey; harken, pay attention; be able to hear;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209419288\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209419288\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>audit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <var>1st</var>\n            <case order=\"6\">genitive</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">auditus, auditus</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <gend>masculine</gend>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>hearing; listening; act/sense of hearing; hearsay;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-cepit.xml":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-cepit.xml ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:cepit:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-19T10:57:11.078215</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:cepit\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213258136\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213258136\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cep</stem>\n              <suff>it</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <tense>perfect</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>3rd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">capio, capere, cepi, captus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <kind>transitive</kind>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>take hold, seize; grasp; take bribe; arrest/capture; put on; occupy; captivate;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-conditum.xml":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-conditum.xml ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:conditum:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:16:15.450664</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:conditum\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440208124120\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440208124120\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>supine</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">condo, condere, condidi, conditus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <kind>transitive</kind>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>put/insert (into); store up/put away, preserve, bottle (wine); bury/inter; sink</mean>\n          <mean>build/found, make; shut (eyes); conceal/hide/keep safe; put together, compose;</mean>\n          <mean>restore; sheathe (sword); plunge/bury (weapon in enemy); put out of sight;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440217484520\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440217484520\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs>supine</pofs>\n            <conj>3rd</conj>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">condio, condire, condivi, conditus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>4th</conj>\n            <kind>transitive</kind>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>preserve/pickle; embalm/mummify; spice; season/flavor/render pleasant/give zest</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209844168\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209844168\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"6\">genitive</case>\n            <num>plural</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">conditum, conditi</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <gend>neuter</gend>\n            <freq order=\"2\">uncommon</freq>\n            <src>Lewis+Short</src>\n          </dict>\n          <mean>aromatic/spiced wine; seasoned food (pl.) (OLD);</mean>\n          <mean>secret, something hidden/concealed;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209259768\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209259768\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <var>1st</var>\n            <case order=\"6\">genitive</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">conditus, conditus</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>4th</decl>\n            <gend>masculine</gend>\n            <area>government</area>\n            <freq order=\"1\">very rare</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>founding (of a city); establishment; preparing (L+S); preserving fruit; hiding;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209404680\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209404680\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>condit</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">conditus, condita, conditum</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>preserved, kept in store; hidden, concealed, secret; sunken (eyes);</mean>\n          <dict>\n            <hdwd xml:lang=\"lat\">conditus, condita -um, conditior -or -us, conditissimus -a -um</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>seasoned, spiced up, flavored, savory; polished, ornamented (discourse/style);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-cupidinibus.xml":
/*!*********************************************!*\
  !*** ./localJson/lat-tufts-cupidinibus.xml ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:cupidinibus:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:14:18.628862</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:cupidinibus\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440220979832\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440220979832\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"2\">locative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">Cupido, Cupidinis</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <gend>masculine</gend>\n            <area>religion</area>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>Cupid, son of Venus; personification of carnal desire;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440220847528\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440220847528\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"2\">locative</case>\n            <num>plural</num>\n            <gend>common</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>plural</num>\n            <gend>common</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>cupidin</stem>\n              <suff>ibus</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>plural</num>\n            <gend>common</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">cupido, cupidinis</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <gend>common</gend>\n            <freq order=\"5\">frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>desire/love/wish/longing (passionate); lust; greed, appetite; desire for gain;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-ego.xml":
/*!*************************************!*\
  !*** ./localJson/lat-tufts-ego.xml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:ego:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:24:21.009875</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:ego\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440220930936\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440220930936\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>ego</stem>\n            </term>\n            <pofs>pronoun</pofs>\n            <decl>5th</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>common</gend>\n          </infl>\n          <dict>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>I, me (PERS); myself (REFLEX);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-est.xml":
/*!*************************************!*\
  !*** ./localJson/lat-tufts-est.xml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:est:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:22:24.704695</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:est\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213841288\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213841288\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>es</stem>\n              <suff>t</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>7th</conj>\n            <var>3rd</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>3rd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">edo, esse, -, -</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <kind>transitive</kind>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>eat/consume/devour; eat away (fire/water/disease); destroy; spend money on food</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440214249592\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440214249592\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <suff>est</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>5th</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>3rd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">sum, esse, fui, futurus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-mare.xml":
/*!**************************************!*\
  !*** ./localJson/lat-tufts-mare.xml ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:mare:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-19T02:00:25.136392</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:mare\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154440031376\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154440031376\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mare</stem>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">mare</hdwd>\n            <freq order=\"1\">very rare</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\n</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154433597040\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154433597040\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mare</stem>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>4th</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mare</stem>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>4th</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>4th</var>\n            <case order=\"2\">locative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>4th</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mare</stem>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>4th</var>\n            <case order=\"4\">accusative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">mare, maris</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <gend>neuter</gend>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>sea; sea water;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154429465696\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154429465696\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"2\">locative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">mas, maris</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <gend>masculine</gend>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>male (human/animal/plant); man;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432160656\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432160656\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mar</stem>\n              <suff>e</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>3rd</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>all</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">mas, (gen.), maris</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <freq order=\"4\">common</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-mellitisque.xml":
/*!*********************************************!*\
  !*** ./localJson/lat-tufts-mellitisque.xml ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:mellitisque:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:17:25.115441</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:mellitisque\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213059896\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213059896\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>Two words</stem>\n            </term>\n          </infl>\n          <mean>May be 2 words combined (mellitis+que) If not obvious, probably incorrect</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213451640\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213451640\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mellit</stem>\n              <suff>is</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>plural</num>\n            <gend>all</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>mellit</stem>\n              <suff>is</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>plural</num>\n            <gend>all</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">mellitus, mellita, mellitum</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>sweetened with honey; honey-sweet;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440222685528\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440222685528\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>que</stem>\n            </term>\n            <pofs>conjunction</pofs>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">que</hdwd>\n            <pofs>conjunction</pofs>\n            <age order=\"6\">medieval</age>\n            <freq order=\"2\">uncommon</freq>\n          </dict>\n          <mean>and; (while properly attached as enclitic sometimes copyists make mistakes);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-palmaque.xml":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-palmaque.xml ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:palmaque:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-18T01:23:23.790311</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:palmaque\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154428676800\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154428676800\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>Two words</stem>\n            </term>\n          </infl>\n          <mean>May be 2 words combined (palma+que) If not obvious, probably incorrect</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154436558768\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154436558768\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>palm</stem>\n              <suff>a</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>singular</num>\n            <gend>feminine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>palm</stem>\n              <suff>a</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"1\">vocative</case>\n            <num>singular</num>\n            <gend>feminine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>palm</stem>\n              <suff>a</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>feminine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">palma, palmae</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>1st</decl>\n            <gend>feminine</gend>\n            <freq order=\"6\">very frequent</freq>\n            <src>Ox.Lat.Dict.</src>\n          </dict>\n          <mean>palm/width of the hand; hand; palm tree/branch; date; palm award/first place;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432593872\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432593872\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>que</stem>\n            </term>\n            <pofs>conjunction</pofs>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">que</hdwd>\n            <pofs>conjunction</pofs>\n            <age order=\"6\">medieval</age>\n            <freq order=\"2\">uncommon</freq>\n          </dict>\n          <mean>and; (while properly attached as enclitic sometimes copyists make mistakes);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-placito.xml":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-placito.xml ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:placito:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-19T12:03:58.373424</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:placito\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154433246432\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154433246432\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>2nd</conj>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>2nd</conj>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>2nd</conj>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>2nd</conj>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">placeo, placere, placui, placitus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>2nd</conj>\n            <kind>taking dative</kind>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>please, satisfy, give pleasure to (with dat.);</mean>\n          <dict>\n            <hdwd xml:lang=\"lat\">placet, placere, -, placitus est</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>2nd</conj>\n            <kind>impersonal</kind>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>it is pleasing/satisfying, gives pleasure; is believed/settled/agreed/decided;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432924064\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432924064\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">placitum, placiti</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <gend>neuter</gend>\n            <age order=\"6\">medieval</age>\n            <area>government</area>\n            <freq order=\"1\">very rare</freq>\n            <src>Bracton</src>\n          </dict>\n          <mean>plea;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154427834192\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154427834192\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">placitus, placita, placitum</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <area>poetry</area>\n            <freq order=\"3\">lesser</freq>\n            <src>Lewis+Short</src>\n          </dict>\n          <mean>pleasing; agreed upon;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154428951776\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154428951776\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>placit</stem>\n              <suff>o</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>1st</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>1st</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">placito, placitare, placitavi, placitatus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>1st</conj>\n            <age order=\"6\">medieval</age>\n            <area>government</area>\n            <freq order=\"1\">very rare</freq>\n            <src>Bracton</src>\n          </dict>\n          <mean>plead;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-submersasque.xml":
/*!**********************************************!*\
  !*** ./localJson/lat-tufts-submersasque.xml ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:submersasque:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-19T11:14:03.668495</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:submersasque\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154439578528\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154439578528\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>Two words</stem>\n            </term>\n          </infl>\n          <mean>May be 2 words combined (submersas+que) If not obvious, probably incorrect</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432838336\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432838336\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>que</stem>\n            </term>\n            <pofs>conjunction</pofs>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">que</hdwd>\n            <pofs>conjunction</pofs>\n            <age order=\"6\">medieval</age>\n            <freq order=\"2\">uncommon</freq>\n          </dict>\n          <mean>and; (while properly attached as enclitic sometimes copyists make mistakes);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154432961664\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154432961664\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>submers</stem>\n              <suff>as</suff>\n            </term>\n            <pofs>verb participle</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <case order=\"4\">accusative</case>\n            <num>plural</num>\n            <gend>feminine</gend>\n            <tense>perfect</tense>\n            <voice>passive</voice>\n            <mood>participle</mood>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">submergo, submergere, submersi, submersus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>plunge under, submerge;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-sui.xml":
/*!*************************************!*\
  !*** ./localJson/lat-tufts-sui.xml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:sui:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:16:54.977005</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:sui\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440208586376\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440208586376\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>1st</var>\n            <case order=\"6\">genitive</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>1st</var>\n            <case order=\"2\">locative</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>1st</var>\n            <case order=\"1\">vocative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">suus, sui</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <gend>masculine</gend>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>his men (pl.), his friends;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440223193576\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440223193576\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"6\">genitive</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <var>2nd</var>\n            <case order=\"2\">locative</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">suum, sui</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>2nd</decl>\n            <gend>neuter</gend>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>his property (pl.); [se suaque =&gt; themselves and their possessions];</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440208239112\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440208239112\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"6\">genitive</case>\n            <num>singular</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"6\">genitive</case>\n            <num>singular</num>\n            <gend>neuter</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"7\">nominative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"4\">adjective</pofs>\n            <decl>1st</decl>\n            <var>1st</var>\n            <case order=\"1\">vocative</case>\n            <num>plural</num>\n            <gend>masculine</gend>\n            <comp>positive</comp>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">suus, sua, suum</hdwd>\n            <pofs order=\"4\">adjective</pofs>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>his/one's (own), her (own), hers, its (own); (pl.) their (own), theirs;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209068424\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209068424\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>passive</voice>\n            <mood>infinitive</mood>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <tense>perfect</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>1st</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">suo, suere, sui, sutus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>sew together/up, stitch;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440212345384\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440212345384\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"2\">locative</case>\n            <num>singular</num>\n            <gend>common</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"5\">dative</case>\n            <num>singular</num>\n            <gend>common</gend>\n          </infl>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>su</stem>\n              <suff>i</suff>\n            </term>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <var>3rd</var>\n            <case order=\"3\">ablative</case>\n            <num>singular</num>\n            <gend>common</gend>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">sus, suis</hdwd>\n            <pofs order=\"5\">noun</pofs>\n            <decl>3rd</decl>\n            <gend>common</gend>\n            <freq order=\"3\">lesser</freq>\n          </dict>\n          <mean>swine; hog, pig, sow;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440209377112\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440209377112\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>s</stem>\n              <suff>ui</suff>\n            </term>\n            <pofs>pronoun</pofs>\n            <decl>5th</decl>\n            <var>4th</var>\n            <case order=\"6\">genitive</case>\n            <gend>common</gend>\n          </infl>\n          <dict>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>him/her/it/ones-self; him/her/it; them (selves) (pl.); each other, one another;</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/lat-tufts-sum.xml":
/*!*************************************!*\
  !*** ./localJson/lat-tufts-sum.xml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:sum:whitakerLat\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T06:25:13.194022</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:sum\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440213340008\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440213340008\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>sum</stem>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>imperative</mood>\n            <pers>2nd</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">sumo, sumere, sumpsi, sumptus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>take up; begin; suppose, assume; select; purchase; exact (punishment); obtain;</mean>\n          <dict>\n            <hdwd xml:lang=\"lat\">sumo, sumere, sumsi, sumtus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <conj>3rd</conj>\n            <freq order=\"2\">uncommon</freq>\n            <src>Lewis+Short</src>\n          </dict>\n          <mean>accept; begin; suppose; select; purchase; obtain; (sumpsi, sumptum);</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140440217598936\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140440217598936\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <infl>\n            <term xml:lang=\"lat\">\n              <stem>s</stem>\n              <suff>um</suff>\n            </term>\n            <pofs order=\"3\">verb</pofs>\n            <conj>5th</conj>\n            <var>1st</var>\n            <tense>present</tense>\n            <voice>active</voice>\n            <mood>indicative</mood>\n            <pers>1st</pers>\n            <num>singular</num>\n          </infl>\n          <dict>\n            <hdwd xml:lang=\"lat\">sum, esse, fui, futurus</hdwd>\n            <pofs order=\"3\">verb</pofs>\n            <freq order=\"6\">very frequent</freq>\n          </dict>\n          <mean>be; exist; (also used to form verb perfect passive tenses) with NOM PERF PPL</mean>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/per-tufts-pass.xml":
/*!**************************************!*\
  !*** ./localJson/per-tufts-pass.xml ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:بگذرد:hazm\">\n    <dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\n      <foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"org.PersDigUMD:tools.hazm.v2\"/>\n    </dcterms:creator>\n    <dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-20T11:27:50.268655</dcterms:created>\n    <dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">Morphology from the HAZM Analyzer (http://www.sobhe.ir/hazm), supplied by the Center for Advanced Study of Language (CASL) at the University of Maryland, College Park (UMD) and adapted by the Roshan Institute for Persian Studies at UMD (http://persdig.umd.edu). This work was also supported by the Perseus Digital Library at Tufts University (http://www.perseus.tufts.edu).</dc:rights>\n    <oac:hasTarget>\n      <rdf:Description rdf:about=\"urn:word:بگذرد\"/>\n    </oac:hasTarget>\n    <dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\n    <oac:hasBody rdf:resource=\"urn:uuid:idm140154427207744\"/>\n    <oac:Body rdf:about=\"urn:uuid:idm140154427207744\">\n      <rdf:type rdf:resource=\"cnt:ContentAsXML\"/>\n      <cnt:rest xmlns:cnt=\"http://www.w3.org/2008/content#\">\n        <entry>\n          <dict>\n            <hdwd xml:lang=\"per\">گذشت#گذر</hdwd>\n          </dict>\n          <infl>\n            <term xml:lang=\"per\">\n              <stem>بگذرد</stem>\n            </term>\n          </infl>\n        </entry>\n      </cnt:rest>\n    </oac:Body>\n  </oac:Annotation>\n</rdf:RDF>\n";

/***/ }),

/***/ "./localJson/tufts-default.xml":
/*!*************************************!*\
  !*** ./localJson/tufts-default.xml ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\r\n<oac:Annotation xmlns:oac=\"http://www.openannotation.org/ns/\" rdf:about=\"urn:TuftsMorphologyService:foo:whitakerLat\">\r\n<dcterms:creator xmlns:dcterms=\"http://purl.org/dc/terms/\">\r\n<foaf:Agent xmlns:foaf=\"http://xmlns.com/foaf/0.1/\" rdf:about=\"net.alpheios:tools:wordsxml.v1\"/>\r\n</dcterms:creator>\r\n<dcterms:created xmlns:dcterms=\"http://purl.org/dc/terms/\">2019-12-19T11:04:09.165478</dcterms:created>\r\n<dc:rights xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\r\nShort definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\r\n</dc:rights>\r\n<oac:hasTarget>\r\n<rdf:Description rdf:about=\"urn:word:foo\"/>\r\n</oac:hasTarget>\r\n<dc:title xmlns:dc=\"http://purl.org/dc/elements/1.1/\"/>\r\n</oac:Annotation>\r\n</rdf:RDF>";

/***/ })

/******/ });
});
//# sourceMappingURL=alpheios-fixtures.js.map