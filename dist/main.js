/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Righteous-Regular.ttf */ \"./src/fonts/Righteous-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"righteous\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: righteous, sans-serif;\\n  font-size: 2rem;\\n  margin: 0;\\n}\\n\\nh2 {\\n  font-size: 2.2rem;\\n}\\n\\n#round-display {\\n  position: absolute;\\n  padding: 2rem 1rem;\\n}\\n\\n#score-display {\\n  padding: 2rem 0;\\n  text-align: center;\\n}\\n\\n#info-display {\\n  padding: 2rem 0;\\n  text-align: center;\\n}\\n\\n#players article {\\n  box-sizing: border-box;\\n  float: left;\\n  height: 33vh;\\n  padding: 1rem;\\n  width: 50%;\\n}\\n\\n#computer h2 {\\n  text-align: right;\\n}\\n\\n#computer-play {\\n  text-align: right;\\n}\\n\\n#game-controls {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n\\n#game-controls section {\\n  text-align: center;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  font-family: inherit;\\n  font-size: 1.8rem;\\n  margin: 1rem;\\n  padding: 1rem 2rem;\\n}\\n\\n.move-btn {\\n  background: none;\\n  border: 1px solid white;\\n  border-radius: 10px;\\n  visibility: hidden;\\n}\\n\\n.move-btn:hover {\\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, .3);\\n}\\n\\n.move-icon {\\n  height: 10rem;\\n  width: 10rem;\\n}\\n\\n#reset-btn {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/fonts/Righteous-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Righteous-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fd0110471f2228c1808a75b977150a0a.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/Righteous-Regular.ttf?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\n\n(function () {\n  var playBtn = document.querySelector(\"#play-btn\");\n  var resetBtn = document.querySelector(\"#reset-btn\");\n  var moveBtns = document.querySelectorAll(\".move-btn\");\n  playBtn.addEventListener(\"click\", function (e) {\n    _modules_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetGame(e);\n    _modules_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setNewGame();\n  });\n  resetBtn.addEventListener(\"click\", _modules_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetGame);\n  moveBtns.forEach(function (btn) {\n    btn.addEventListener(\"click\", _modules_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onMoveClick);\n  });\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  var playBtn = document.querySelector(\"#play-btn\");\n  var resetBtn = document.querySelector(\"#reset-btn\");\n  var moveBtns = document.querySelectorAll(\".move-btn\");\n  var infoDisplay = document.querySelector(\"#info-display\");\n  var computerMoveDisplay = document.querySelector(\"#computer-move\");\n  var playerMoveDisplay = document.querySelector(\"#player-move\");\n  var roundDisplay = document.querySelector(\"#round-display\");\n  var scoreDisplay = document.querySelector(\"#score-display\");\n\n  function gameOver(winner) {\n    var winMessage = \"\".concat(winner, \" wins the game!\\n    Game Over\");\n\n    _print(infoDisplay, winMessage);\n\n    _hideAll(moveBtns);\n\n    _remove(resetBtn);\n\n    _display(playBtn);\n  }\n\n  function reset(e) {\n    if (e.target.id === \"reset-btn\") {\n      _clear(roundDisplay);\n\n      _hideAll(moveBtns);\n\n      _remove(resetBtn);\n\n      _display(playBtn);\n\n      _print(infoDisplay, 'click \"play\" to start a new game');\n    }\n\n    _clear(computerMoveDisplay);\n\n    _clear(playerMoveDisplay);\n\n    _print(scoreDisplay, \"00 - 00\");\n  }\n\n  function printPlayResults(_ref) {\n    var playerMove = _ref.playerMove,\n        computerMove = _ref.computerMove,\n        draw = _ref.draw,\n        winner = _ref.winner,\n        score = _ref.score;\n    var resultMessage = draw ? \"it's a draw !\" : winner == \"player\" ? \"Player wins this round !\" : \"Evil wins this round !\";\n\n    _print(playerMoveDisplay, \"\".concat(playerMove, \" !\"));\n\n    _print(computerMoveDisplay, \"\".concat(computerMove, \" !\"));\n\n    _print(infoDisplay, resultMessage);\n\n    _print(scoreDisplay, score);\n  }\n\n  function setNewGame() {\n    _remove(playBtn);\n\n    _display(resetBtn);\n\n    _showAll(moveBtns);\n\n    _print(roundDisplay, \"Round 01\");\n\n    _print(infoDisplay, \"choose your move\");\n  }\n\n  function setNewRound(round) {\n    _print(roundDisplay, \"Round \".concat(round));\n  }\n\n  function _clear(element) {\n    element.textContent = \"\";\n  }\n\n  function _clearAll(elements) {\n    elements.forEach(function (element) {\n      element.textContent = \"\";\n    });\n  }\n\n  function _display(element) {\n    var displayVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"inline-block\";\n    element.style.display = displayVal;\n  }\n\n  function _displayAll(elements) {\n    var displayVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"inline-block\";\n    elements.forEach(function (element) {\n      element.style.display = displayVal;\n    });\n  }\n\n  function _hide(element) {\n    element.style.visibility = \"hidden\";\n  }\n\n  function _hideAll(elements) {\n    elements.forEach(function (element) {\n      element.style.visibility = \"hidden\";\n    });\n  }\n\n  function _print(element, text) {\n    element.textContent = text;\n  }\n\n  function _remove(element) {\n    element.style.display = \"none\";\n  }\n\n  function _removeAll(elements) {\n    elements.forEach(function (element) {\n      element.style.display = \"none\";\n    });\n  }\n\n  function _show(element) {\n    element.style.visibility = \"visible\";\n  }\n\n  function _showAll(elements) {\n    elements.forEach(function (element) {\n      element.style.visibility = \"visible\";\n    });\n  }\n\n  return {\n    gameOver: gameOver,\n    printPlayResults: printPlayResults,\n    reset: reset,\n    setNewGame: setNewGame,\n    setNewRound: setNewRound\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"./src/modules/play.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round */ \"./src/modules/round.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ \"./src/modules/score.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function onMoveClick(e) {\n    var results = _play__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResults(e);\n\n    if (!results.draw) {\n      _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(results.winner);\n    }\n\n    var playerScore = _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"player\", \"padded\");\n    var computerScore = _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"computer\", \"padded\");\n    var scoreString = \"\".concat(playerScore, \" - \").concat(computerScore);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].printPlayResults(_objectSpread(_objectSpread({}, results), {}, {\n      score: scoreString\n    }));\n\n    if (_checkWinner()) {\n      _gameOver();\n    } else {\n      _round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set();\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setNewRound(_round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"padded\"));\n    }\n  }\n\n  function resetGame(e) {\n    _round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reset();\n    _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reset();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reset(e);\n  }\n\n  function setNewGame() {\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setNewGame();\n  }\n\n  function _checkWinner() {\n    return _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"player\") == 3 || _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"computer\") == 3;\n  }\n\n  function _gameOver() {\n    var winner = _getWinner();\n\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver(winner);\n  }\n\n  function _getWinner() {\n    if (_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"player\") == 3) return \"player\";\n    if (_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"computer\") == 3) return \"evil\";\n    return null;\n  }\n\n  return {\n    onMoveClick: onMoveClick,\n    resetGame: resetGame,\n    setNewGame: setNewGame\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/play.js":
/*!*****************************!*\
  !*** ./src/modules/play.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function _getComputerMove() {\n    var n = Math.floor(Math.random() * 3);\n    return n === 0 ? \"rock\" : n === 1 ? \"paper\" : \"scissors\";\n  }\n\n  function _getWinner(playerMove, computerMove) {\n    return playerMove == \"rock\" && computerMove == \"scissors\" || playerMove == \"scissors\" && computerMove == \"paper\" || playerMove == \"paper\" && computerMove == \"rock\" ? \"player\" : \"computer\";\n  }\n\n  function getResults(e) {\n    var playerMove = e.target.parentNode.dataset.move;\n\n    var computerMove = _getComputerMove();\n\n    var draw = playerMove === computerMove;\n    var winner = null;\n\n    if (!draw) {\n      winner = _getWinner(playerMove, computerMove);\n    }\n\n    return {\n      playerMove: playerMove,\n      computerMove: computerMove,\n      draw: draw,\n      winner: winner\n    };\n  }\n\n  return {\n    getResults: getResults\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/play.js?");

/***/ }),

/***/ "./src/modules/round.js":
/*!******************************!*\
  !*** ./src/modules/round.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function get() {\n    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var round = sessionStorage.getItem(\"round\");\n\n    if (format == \"padded\") {\n      return round.padStart(2, \"0\");\n    }\n\n    return round;\n  }\n\n  function reset() {\n    sessionStorage.setItem(\"round\", 1);\n  }\n\n  function set() {\n    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var current = +get();\n    var round = num ? num : current ? current + 1 : 1;\n    sessionStorage.setItem(\"round\", round);\n  }\n\n  return {\n    get: get,\n    reset: reset,\n    set: set\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/round.js?");

/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function get(player) {\n    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var score = sessionStorage.getItem(\"\".concat(player, \"Score\"));\n\n    if (format == \"padded\") {\n      return score.padStart(2, \"0\");\n    }\n\n    return score;\n  }\n\n  function reset() {\n    set(\"player\", 0);\n    set(\"computer\", 0);\n  }\n\n  function set(player) {\n    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var score = num !== null && num !== void 0 ? num : +get(player) + 1;\n    sessionStorage.setItem(\"\".concat(player, \"Score\"), score);\n  }\n\n  return {\n    get: get,\n    reset: reset,\n    set: set\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/score.js?");

/***/ })

/******/ });