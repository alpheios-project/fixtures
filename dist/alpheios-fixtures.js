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
/* harmony import */ var _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/localJson/tufts-default.json */ "./localJson/tufts-default.json");
var _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/tufts-default.json */ "./localJson/tufts-default.json", 1);
/* harmony import */ var _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/localJson/gez-tufts-hageriye.json */ "./localJson/gez-tufts-hageriye.json");
var _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/gez-tufts-hageriye.json */ "./localJson/gez-tufts-hageriye.json", 1);
/* harmony import */ var _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/localJson/grc-tufts-eloin.json */ "./localJson/grc-tufts-eloin.json");
var _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-eloin.json */ "./localJson/grc-tufts-eloin.json", 1);
/* harmony import */ var _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/localJson/grc-tufts-oudemia.json */ "./localJson/grc-tufts-oudemia.json");
var _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/grc-tufts-oudemia.json */ "./localJson/grc-tufts-oudemia.json", 1);
/* harmony import */ var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json");
var _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-aberis.json */ "./localJson/lat-tufts-aberis.json", 1);
/* harmony import */ var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json");
var _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-adsum.json */ "./localJson/lat-tufts-adsum.json", 1);
/* harmony import */ var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json");
var _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-auditum.json */ "./localJson/lat-tufts-auditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json");
var _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cepit.json */ "./localJson/lat-tufts-cepit.json", 1);
/* harmony import */ var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json");
var _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-conditum.json */ "./localJson/lat-tufts-conditum.json", 1);
/* harmony import */ var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json");
var _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-cupidinibus.json */ "./localJson/lat-tufts-cupidinibus.json", 1);
/* harmony import */ var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json");
var _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-ego.json */ "./localJson/lat-tufts-ego.json", 1);
/* harmony import */ var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json");
var _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-est.json */ "./localJson/lat-tufts-est.json", 1);
/* harmony import */ var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json");
var _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mare.json */ "./localJson/lat-tufts-mare.json", 1);
/* harmony import */ var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json");
var _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-mellitisque.json */ "./localJson/lat-tufts-mellitisque.json", 1);
/* harmony import */ var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json");
var _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-palmaque.json */ "./localJson/lat-tufts-palmaque.json", 1);
/* harmony import */ var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json");
var _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-placito.json */ "./localJson/lat-tufts-placito.json", 1);
/* harmony import */ var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json");
var _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-submersasque.json */ "./localJson/lat-tufts-submersasque.json", 1);
/* harmony import */ var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json");
var _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sui.json */ "./localJson/lat-tufts-sui.json", 1);
/* harmony import */ var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json");
var _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/lat-tufts-sum.json */ "./localJson/lat-tufts-sum.json", 1);
/* harmony import */ var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json");
var _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-trjmh.json */ "./localJson/ara-tufts-trjmh.json", 1);
/* harmony import */ var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json");
var _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/ara-tufts-mshkel‌.json */ "./localJson/ara-tufts-mshkel‌.json", 1);
/* harmony import */ var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json");
var _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/localJson/per-tufts-pass.json */ "./localJson/per-tufts-pass.json", 1);

































const library = {
  gez: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_1__,
      'ሀገርየ': _localJson_gez_tufts_hageriye_json__WEBPACK_IMPORTED_MODULE_2__
    }
  },
  grc: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_1__,
      'ἐλῴην': _localJson_grc_tufts_eloin_json__WEBPACK_IMPORTED_MODULE_3__,
      'οὐδεμία': _localJson_grc_tufts_oudemia_json__WEBPACK_IMPORTED_MODULE_4__
    }
  },
  lat: {
    tufts: {
      default: _localJson_tufts_default_json__WEBPACK_IMPORTED_MODULE_1__,
      'aberis': _localJson_lat_tufts_aberis_json__WEBPACK_IMPORTED_MODULE_5__,
      'adsum': _localJson_lat_tufts_adsum_json__WEBPACK_IMPORTED_MODULE_6__,
      'auditum': _localJson_lat_tufts_auditum_json__WEBPACK_IMPORTED_MODULE_7__,
      'cepit': _localJson_lat_tufts_cepit_json__WEBPACK_IMPORTED_MODULE_8__,
      'conditum': _localJson_lat_tufts_conditum_json__WEBPACK_IMPORTED_MODULE_9__,
      'cupidinibus': _localJson_lat_tufts_cupidinibus_json__WEBPACK_IMPORTED_MODULE_10__,
      'ego': _localJson_lat_tufts_ego_json__WEBPACK_IMPORTED_MODULE_11__,
      'est': _localJson_lat_tufts_est_json__WEBPACK_IMPORTED_MODULE_12__,
      'mare': _localJson_lat_tufts_mare_json__WEBPACK_IMPORTED_MODULE_13__,
      'mellitisque': _localJson_lat_tufts_mellitisque_json__WEBPACK_IMPORTED_MODULE_14__,
      'palmaque': _localJson_lat_tufts_palmaque_json__WEBPACK_IMPORTED_MODULE_15__,
      'placito': _localJson_lat_tufts_placito_json__WEBPACK_IMPORTED_MODULE_16__,      
      'submersasque': _localJson_lat_tufts_submersasque_json__WEBPACK_IMPORTED_MODULE_17__,
      'sui': _localJson_lat_tufts_sui_json__WEBPACK_IMPORTED_MODULE_18__,
      'sum': _localJson_lat_tufts_sum_json__WEBPACK_IMPORTED_MODULE_19__
    }
  },
  ara: {
    tufts: {
      'ترجمة': _localJson_ara_tufts_trjmh_json__WEBPACK_IMPORTED_MODULE_20__,
      'مشکل‌ها': _localJson_ara_tufts_mshkel_json__WEBPACK_IMPORTED_MODULE_21__
    }
  },
  per: {
    tufts: {
      'بگذرد': _localJson_per_tufts_pass_json__WEBPACK_IMPORTED_MODULE_22__
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

/***/ "./localJson/grc-tufts-eloin.json":
/*!****************************************!*\
  !*** ./localJson/grc-tufts-eloin.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:ἐλῴην:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:31:28.810630\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:ἐλῴην\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429116000\"},\"Body\":{\"about\":\"urn:uuid:idm140154429116000\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"ἐλαύνω\"},\"pofs\":{\"order\":1,\"$\":\"verb\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"Attic\"},\"stemtype\":{\"$\":\"aw_fut\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"ἐλ\"},\"suff\":{\"$\":\"ῴην\"}},\"pofs\":{\"order\":1,\"$\":\"verb\"},\"mood\":{\"$\":\"optative\"},\"num\":{\"$\":\"singular\"},\"pers\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"dial\":{\"$\":\"epic\"},\"stemtype\":{\"$\":\"aw_pr\"},\"derivtype\":{\"$\":\"a_stem\"},\"morph\":{\"$\":\"contr poetic rare\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/grc-tufts-oudemia.json":
/*!******************************************!*\
  !*** ./localJson/grc-tufts-oudemia.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:οὐδεμία:morpheusgrc\",\"creator\":{\"Agent\":{\"about\":\"org.perseus:tools:morpheus.v1\"}},\"created\":{\"$\":\"2019-12-23T06:32:21.543086\"},\"rights\":{\"$\":\"Morphology provided by Morpheus from the Perseus Digital Library at Tufts University.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:οὐδεμία\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154429675552\"},\"Body\":{\"about\":\"urn:uuid:idm140154429675552\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"uri\":null,\"dict\":{\"hdwd\":{\"lang\":\"grc\",\"$\":\"οὐδείς\"},\"pofs\":{\"order\":5,\"$\":\"pronoun\"}},\"infl\":[{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμία\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμίᾱ\"}},\"pofs\":{\"order\":5,\"$\":\"pronoun\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"pron_adj1\"},\"morph\":{\"$\":\"indeclform\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"dual\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}},{\"term\":{\"lang\":\"grc\",\"stem\":{\"$\":\"οὐδεμι\"},\"suff\":{\"$\":\"ᾱ\"}},\"pofs\":{\"order\":2,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st & 2nd\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"gend\":{\"$\":\"feminine\"},\"num\":{\"$\":\"singular\"},\"dial\":{\"$\":\"Attic Doric Aeolic\"},\"stemtype\":{\"$\":\"os_h_on\"}}]}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-aberis.json":
/*!*****************************************!*\
  !*** ./localJson/lat-tufts-aberis.json ***!
  \*****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:aberis:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:20:11.050753\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:aberis\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140154441263312\"},\"Body\":{\"about\":\"urn:uuid:idm140154441263312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ab\"},\"suff\":{\"$\":\"eris\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"future\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, abfui, abfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":3,\"$\":\"lesser\"},\"src\":{\"$\":\"Lewis+Short\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"absum, abesse, afui, afuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}}],\"mean\":{\"$\":\"be away/absent/distant/missing; be free/removed from; be lacking; be distinct;\"}}}}}}}");

/***/ }),

/***/ "./localJson/lat-tufts-adsum.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-adsum.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:adsum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:21:52.514237\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:adsum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440213062536\"},{\"resource\":\"urn:uuid:idm140440213115816\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440213062536\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"ads\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"5th\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"1st\"},\"num\":{\"$\":\"singular\"}},\"dict\":[{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, adfui, adfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsum, adesse, arfui, arfuturus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"age\":{\"order\":2,\"$\":\"early\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Lewis+Short\"}}],\"mean\":{\"$\":\"be near, be present, be in attendance, arrive, appear; aid (w/DAT);\"}}}},{\"about\":\"urn:uuid:idm140440213115816\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"adsum\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"present\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"imperative\"},\"pers\":{\"$\":\"2nd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"adsumo, adsumere, adsumpsi, adsumptus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take (to/up/on/from), adopt/raise, use; assume/receive; insert/add; usurp/claim\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-auditum.json":
/*!******************************************!*\
  !*** ./localJson/lat-tufts-auditum.json ***!
  \******************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:auditum:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:14.876725\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:auditum\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154432900560\"},{\"resource\":\"urn:uuid:idm140154428369984\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154432900560\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"$\":\"supine\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"audio, audire, audivi, auditus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"4th\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hear, listen, accept, agree with; obey; harken, pay attention; be able to hear;\"}}}},{\"about\":\"urn:uuid:idm140154428369984\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"audit\"},\"suff\":{\"$\":\"um\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":6,\"$\":\"genitive\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"auditus, auditus\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"4th\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"hearing; listening; act/sense of hearing; hearsay;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-cepit.json":
/*!****************************************!*\
  !*** ./localJson/lat-tufts-cepit.json ***!
  \****************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:cepit:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:22:38.012590\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:cepit\"}},\"title\":{},\"hasBody\":{\"resource\":\"urn:uuid:idm140440214675736\"},\"Body\":{\"about\":\"urn:uuid:idm140440214675736\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"cep\"},\"suff\":{\"$\":\"it\"}},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"active\"},\"mood\":{\"$\":\"indicative\"},\"pers\":{\"$\":\"3rd\"},\"num\":{\"$\":\"singular\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"capio, capere, cepi, captus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"kind\":{\"$\":\"transitive\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"take hold, seize; grasp; take bribe; arrest/capture; put on; occupy; captivate;\"}}}}}}}");

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

/***/ "./localJson/lat-tufts-mare.json":
/*!***************************************!*\
  !*** ./localJson/lat-tufts-mare.json ***!
  \***************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mare:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:14.058672\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mare\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140440208162616\"},{\"resource\":\"urn:uuid:idm140440222926952\"},{\"resource\":\"urn:uuid:idm140440212861240\"},{\"resource\":\"urn:uuid:idm140440208185768\"}],\"Body\":[{\"about\":\"urn:uuid:idm140440208162616\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare\"},\"freq\":{\"order\":1,\"$\":\"very rare\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}},{\"about\":\"urn:uuid:idm140440222926952\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":7,\"$\":\"nominative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":1,\"$\":\"vocative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mare\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"4th\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"neuter\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mare, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"neuter\"},\"freq\":{\"order\":6,\"$\":\"very frequent\"}},\"mean\":{\"$\":\"sea; sea water;\"}}}},{\"about\":\"urn:uuid:idm140440212861240\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":2,\"$\":\"locative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"3rd\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"masculine\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, maris\"},\"pofs\":{\"order\":5,\"$\":\"noun\"},\"decl\":{\"$\":\"3rd\"},\"gend\":{\"$\":\"masculine\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male (human/animal/plant); man;\"}}}},{\"about\":\"urn:uuid:idm140440208185768\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mar\"},\"suff\":{\"$\":\"e\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"singular\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mas, (gen.), maris\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":4,\"$\":\"common\"},\"src\":{\"$\":\"Ox.Lat.Dict.\"}},\"mean\":{\"$\":\"male; masculine, of the male sex; manly, virile, brave, noble; G:masculine;\"}}}}]}}}");

/***/ }),

/***/ "./localJson/lat-tufts-mellitisque.json":
/*!**********************************************!*\
  !*** ./localJson/lat-tufts-mellitisque.json ***!
  \**********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:mellitisque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:24:35.784022\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:mellitisque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154433077328\"},{\"resource\":\"urn:uuid:idm140154432497312\"},{\"resource\":\"urn:uuid:idm140154434237504\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154433077328\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (mellitis+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432497312\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":[{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":5,\"$\":\"dative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}},{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"mellit\"},\"suff\":{\"$\":\"is\"}},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"decl\":{\"$\":\"1st\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":3,\"$\":\"ablative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"all\"},\"comp\":{\"$\":\"positive\"}}],\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"mellitus, mellita, mellitum\"},\"pofs\":{\"order\":4,\"$\":\"adjective\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"sweetened with honey; honey-sweet;\"}}}},{\"about\":\"urn:uuid:idm140154434237504\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}}]}}}");

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

/***/ "./localJson/lat-tufts-submersasque.json":
/*!***********************************************!*\
  !*** ./localJson/lat-tufts-submersasque.json ***!
  \***********************************************/
/*! exports provided: RDF, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"RDF\":{\"Annotation\":{\"about\":\"urn:TuftsMorphologyService:submersasque:whitakerLat\",\"creator\":{\"Agent\":{\"about\":\"net.alpheios:tools:wordsxml.v1\"}},\"created\":{\"$\":\"2019-12-23T06:25:43.652502\"},\"rights\":{\"$\":\"Short definitions and morphology from Words by William Whitaker, Copyright 1993-2007.\"},\"hasTarget\":{\"Description\":{\"about\":\"urn:word:submersasque\"}},\"title\":{},\"hasBody\":[{\"resource\":\"urn:uuid:idm140154428091200\"},{\"resource\":\"urn:uuid:idm140154432909728\"},{\"resource\":\"urn:uuid:idm140154436103696\"}],\"Body\":[{\"about\":\"urn:uuid:idm140154428091200\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"Two words\"}}},\"mean\":{\"$\":\"May be 2 words combined (submersas+que) If not obvious, probably incorrect\"}}}},{\"about\":\"urn:uuid:idm140154432909728\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"que\"}},\"pofs\":{\"$\":\"conjunction\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"que\"},\"pofs\":{\"$\":\"conjunction\"},\"age\":{\"order\":6,\"$\":\"medieval\"},\"freq\":{\"order\":2,\"$\":\"uncommon\"}},\"mean\":{\"$\":\"and; (while properly attached as enclitic sometimes copyists make mistakes);\"}}}},{\"about\":\"urn:uuid:idm140154436103696\",\"type\":{\"resource\":\"cnt:ContentAsXML\"},\"rest\":{\"entry\":{\"infl\":{\"term\":{\"lang\":\"lat\",\"stem\":{\"$\":\"submers\"},\"suff\":{\"$\":\"as\"}},\"pofs\":{\"$\":\"verb participle\"},\"conj\":{\"$\":\"3rd\"},\"var\":{\"$\":\"1st\"},\"case\":{\"order\":4,\"$\":\"accusative\"},\"num\":{\"$\":\"plural\"},\"gend\":{\"$\":\"feminine\"},\"tense\":{\"$\":\"perfect\"},\"voice\":{\"$\":\"passive\"},\"mood\":{\"$\":\"participle\"}},\"dict\":{\"hdwd\":{\"lang\":\"lat\",\"$\":\"submergo, submergere, submersi, submersus\"},\"pofs\":{\"order\":3,\"$\":\"verb\"},\"conj\":{\"$\":\"3rd\"},\"freq\":{\"order\":3,\"$\":\"lesser\"}},\"mean\":{\"$\":\"plunge under, submerge;\"}}}}]}}}");

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