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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Righteous-Regular.ttf */ \"./src/assets/fonts/Righteous-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"righteous\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\nhtml {\\n  font-size: 62.5%;\\n  height: 100%;\\n}\\n\\nbody {\\n  background-color: #002A32;\\n  color: #fff;\\n  font-family: righteous, sans-serif;\\n  font-size: 2rem;\\n  height: 100%;\\n  margin: 0;\\n}\\n\\nmain {\\n  margin: 0 auto;\\n  max-width: 1500px;\\n}\\n\\nh1 {\\n  margin: 0;\\n}\\n\\nh2 {\\n  font-size: 2.4rem;\\n  letter-spacing: 1px;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n  font-family: inherit;\\n  font-size: 1.8rem;\\n  margin: 1rem;\\n  padding: 1rem 2rem;\\n}\\n\\n.game-controls {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  text-align: center;\\n}\\n\\n.play-btn {\\n  background-color: #002A32;\\n  border: 2px solid #fff;\\n  border-radius: 10px;\\n  color: inherit;\\n  font-size: 2rem;\\n  margin-bottom: 2rem;\\n  padding: 1.5rem 3rem;\\n  transition: all 0.2s ease;\\n}\\n.play-btn:hover {\\n  border: 2px solid #ff6188;\\n  color: #ff6188;\\n}\\n.play-btn p {\\n  letter-spacing: 1px;\\n  margin: 0;\\n}\\n\\n.move-btns-container {\\n  display: none;\\n}\\n\\n.move-btn {\\n  background-color: #f4f3f6;\\n  border: none;\\n  margin: 0;\\n  width: 33.33%;\\n}\\n.move-btn .move-icon {\\n  transition: all 0.4s ease;\\n}\\n.move-btn:hover .move-icon {\\n  transform: scale(1.1);\\n}\\n\\n@media only screen and (min-width: 400px) and (orientation: portrait) {\\n  .play-btn {\\n    font-size: 2.6rem;\\n    padding: 2rem 6rem;\\n  }\\n}\\n@media only screen and (min-width: 600px) and (orientation: portrait) {\\n  .play-btn {\\n    font-size: 3rem;\\n    padding: 2rem 8rem;\\n  }\\n}\\n@media only screen and (min-width: 760px) and (orientation: portrait) {\\n  .play-btn {\\n    font-size: 3.5rem;\\n    margin: 4rem;\\n  }\\n}\\n@media only screen and (min-width: 900px) and (orientation: portrait) {\\n  .play-btn {\\n    font-size: 4.5rem;\\n    padding: 3rem 8rem;\\n  }\\n}\\n@media only screen and (min-width: 480px) and (orientation: landscape) {\\n  .game-controls {\\n    height: 100%;\\n    left: auto;\\n    right: 0;\\n    max-width: 20vw;\\n  }\\n\\n  .play-btn {\\n    padding: 1.5rem 1rem;\\n    position: absolute;\\n    right: 1rem;\\n    top: 50%;\\n    transform: translateY(-50%);\\n  }\\n  .play-btn p {\\n    letter-spacing: 0;\\n    writing-mode: vertical-lr;\\n    text-orientation: upright;\\n  }\\n\\n  .move-btns-container {\\n    height: 100%;\\n    flex-flow: column nowrap;\\n  }\\n\\n  .move-btn {\\n    height: 33.33%;\\n    width: 100%;\\n  }\\n}\\n@media only screen and (min-width: 640px) and (orientation: landscape) {\\n  .play-btn {\\n    padding: 2rem 1.5rem;\\n  }\\n}\\n@media only screen and (min-width: 960px) and (orientation: landscape) {\\n  .play-btn {\\n    font-size: 3rem;\\n    padding: 3rem 2.5rem;\\n  }\\n}\\n@media only screen and (min-width: 1020px) and (orientation: landscape) {\\n  .game-controls {\\n    height: auto;\\n    left: 0;\\n    right: 0;\\n    max-width: unset;\\n  }\\n\\n  .move-btns-container {\\n    height: auto;\\n    flex-flow: row nowrap;\\n  }\\n\\n  .play-btn {\\n    position: static;\\n    right: 1rem;\\n    top: 50%;\\n    transform: none;\\n  }\\n  .play-btn p {\\n    writing-mode: horizontal-tb;\\n    text-orientation: initial;\\n  }\\n}\\n@media only screen and (min-width: 1300px) and (orientation: landscape) {\\n  .move-btn {\\n    padding: 1.5rem 3rem;\\n  }\\n\\n  .play-btn {\\n    padding: 3rem 5rem;\\n  }\\n  .play-btn p {\\n    letter-spacing: 3px;\\n  }\\n}\\n@media only screen and (min-width: 1600px) and (orientation: landscape) {\\n  .play-btn {\\n    margin-bottom: 3rem;\\n  }\\n}\\n.move-icon {\\n  width: 50px;\\n}\\n\\n@media only screen and (min-width: 320px) and (min-height: 568px) and (orientation: portrait) {\\n  .players-moves {\\n    margin-top: 2rem;\\n  }\\n\\n  .players-moves .move-icon {\\n    width: 65px;\\n  }\\n}\\n@media only screen and (min-width: 360px) and (orientation: portrait) {\\n  .move-icon {\\n    width: 60px;\\n  }\\n\\n  .players-moves .move-icon {\\n    width: 75px;\\n  }\\n}\\n@media only screen and (min-width: 400px) and (orientation: portrait) {\\n  .move-icon {\\n    width: 80px;\\n  }\\n\\n  .players-moves .move-icon {\\n    width: 100px;\\n  }\\n}\\n@media only screen and (min-width: 600px) and (orientation: portrait) {\\n  .move-icon {\\n    width: 100px;\\n  }\\n\\n  .players-moves .move-icon {\\n    width: 120px;\\n  }\\n}\\n@media only screen and (min-width: 760px) and (orientation: portrait) {\\n  .move-icon {\\n    width: 120px;\\n  }\\n\\n  .players-moves {\\n    margin-top: 4rem;\\n  }\\n  .players-moves .move-icon {\\n    width: 140px;\\n  }\\n}\\n@media only screen and (min-width: 760px) and (orientation: portrait) {\\n  .move-icon {\\n    width: 140px;\\n  }\\n\\n  .players-moves {\\n    margin-top: 5rem;\\n  }\\n  .players-moves .move-icon {\\n    width: 160px;\\n  }\\n}\\n@media only screen and (min-width: 568px) and (orientation: landscape) {\\n  .players-moves .move-icon {\\n    width: 58px;\\n  }\\n}\\n@media only screen and (min-width: 640px) and (orientation: landscape) {\\n  .move-icon, .players-moves .move-icon {\\n    width: 60px;\\n  }\\n}\\n@media only screen and (min-width: 800px) and (orientation: landscape) {\\n  .move-icon, .players-moves .move-icon {\\n    width: 80px;\\n  }\\n}\\n@media only screen and (min-width: 960px) and (orientation: landscape) {\\n  .move-icon, .players-moves .move-icon {\\n    width: 100px;\\n  }\\n}\\nheader {\\n  margin: 0 auto;\\n  max-width: 1500px;\\n  padding-top: 1.5rem;\\n}\\nheader p {\\n  margin: 0;\\n}\\n\\nh1 {\\n  font-size: 3.2rem;\\n  margin-bottom: 2rem;\\n  text-align: center;\\n}\\nh1 span:first-child {\\n  color: #F70D2E;\\n}\\nh1 span:nth-child(2) {\\n  color: #86E411;\\n}\\nh1 span:last-child {\\n  color: #3fdfdf;\\n}\\n\\n.round-display {\\n  display: none;\\n  position: absolute;\\n  padding: 0 1rem 2rem;\\n}\\n\\n.score-display {\\n  display: none;\\n  padding: 2rem 0;\\n  text-align: center;\\n}\\n\\n.info-display {\\n  font-size: 1.9rem;\\n  padding: 0 0.5rem 2rem;\\n  text-align: center;\\n}\\n\\n/*\\n\\tMEDIA QUERIES PORTRAIT ORIENTATION\\n*/\\n@media only screen and (min-width: 360px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 3.4rem;\\n  }\\n\\n  .info-display {\\n    padding: 1rem 2rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2rem;\\n  }\\n}\\n@media only screen and (min-width: 400px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 3.8rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2.2rem;\\n  }\\n}\\n@media only screen and (min-width: 480px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 4.2rem;\\n  }\\n}\\n@media only screen and (min-width: 600px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 5rem;\\n    margin: 2rem 0;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2.6rem;\\n  }\\n\\n  .info-display, .score-display {\\n    margin: 1rem 0;\\n  }\\n}\\n@media only screen and (min-width: 760px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 6rem;\\n    margin: 2rem 0;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 3rem;\\n    padding: 2rem;\\n  }\\n}\\n@media only screen and (min-width: 900px) and (orientation: portrait) {\\n  h1 {\\n    font-size: 8rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 4rem;\\n    padding: 4rem;\\n  }\\n}\\n/*\\n\\tMEDIA QUERIES LANDSCAPE ORIENTATION\\n*/\\n@media only screen and (min-width: 480px) and (orientation: landscape) {\\n  header {\\n    padding-top: 1rem;\\n  }\\n\\n  h1 {\\n    font-size: 2.5rem;\\n    margin-left: 1rem;\\n    text-align: left;\\n  }\\n\\n  .round-display {\\n    padding: 1.5rem 1rem;\\n  }\\n\\n  .score-display {\\n    padding: 1.5rem;\\n  }\\n\\n  .info-display {\\n    font-size: 1.6rem;\\n    padding: 0 1rem 2rem;\\n    text-align: left;\\n    max-width: 80vw;\\n  }\\n}\\n@media only screen and (min-width: 640px) and (orientation: landscape) {\\n  h1 {\\n    font-size: 3.2rem;\\n    margin: 1rem 2rem 2rem;\\n  }\\n\\n  .info-display {\\n    padding: 1rem 2rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2rem;\\n    padding-left: 2rem;\\n  }\\n}\\n@media only screen and (min-width: 800px) and (orientation: landscape) {\\n  h1 {\\n    font-size: 3.6rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2.2rem;\\n  }\\n}\\n@media only screen and (min-width: 960px) and (orientation: landscape) {\\n  h1 {\\n    font-size: 4.4rem;\\n  }\\n\\n  .info-display, .round-display, .score-display {\\n    font-size: 2.8rem;\\n  }\\n}\\n@media only screen and (min-width: 1020px) and (orientation: landscape) {\\n  h1 {\\n    margin: 2rem 4rem;\\n  }\\n\\n  .info-display {\\n    margin: 4rem auto;\\n    text-align: center;\\n  }\\n}\\n@media only screen and (min-width: 1300px) and (orientation: landscape) {\\n  h1 {\\n    font-size: 5rem;\\n  }\\n}\\n.players-moves {\\n  display: flex;\\n}\\n\\n.player-move-container {\\n  box-sizing: border-box;\\n  padding: 1rem;\\n  text-align: center;\\n  width: 50%;\\n}\\n\\n@media only screen and (min-width: 480px) and (orientation: landscape) {\\n  .players-moves {\\n    width: 80vw;\\n  }\\n\\n  .player-move-container:first-child {\\n    text-align: right;\\n    padding-right: 2rem;\\n  }\\n  .player-move-container:nth-child(2) {\\n    text-align: left;\\n    padding-left: 2rem;\\n  }\\n}\\n@media only screen and (min-width: 1020px) and (orientation: landscape) {\\n  .players-moves {\\n    position: absolute;\\n    top: 50%;\\n    left: 0;\\n    right: 0;\\n    width: 100vw;\\n  }\\n\\n  .player-move-container:first-child {\\n    padding-right: 4rem;\\n  }\\n  .player-move-container:nth-child(2) {\\n    padding-left: 4rem;\\n  }\\n}\\n.players {\\n  display: flex;\\n}\\n\\n.player {\\n  height: 33vh;\\n  padding: 1rem;\\n  text-align: center;\\n  width: 50%;\\n}\\n\\n.avatar {\\n  width: 60px;\\n}\\n\\n.player-avatar {\\n  width: 75px;\\n}\\n\\n/* \\n\\tMEDIA QUERIES PORTRAIT \\n*/\\n@media only screen and (min-width: 360px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 2.6rem;\\n  }\\n\\n  .avatar {\\n    width: 70px;\\n  }\\n\\n  .player-avatar {\\n    width: 90px;\\n  }\\n}\\n@media only screen and (min-width: 400px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 2.8rem;\\n  }\\n\\n  .avatar {\\n    width: 80px;\\n  }\\n\\n  .player-avatar {\\n    width: 102px;\\n  }\\n}\\n@media only screen and (min-width: 480px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 3rem;\\n  }\\n}\\n@media only screen and (min-width: 600px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 3.2rem;\\n  }\\n\\n  .avatar {\\n    width: 100px;\\n  }\\n\\n  .player-avatar {\\n    width: 128px;\\n  }\\n}\\n@media only screen and (min-width: 760px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 4rem;\\n  }\\n\\n  .avatar {\\n    width: 110px;\\n  }\\n\\n  .player-avatar {\\n    width: 140px;\\n  }\\n}\\n@media only screen and (min-width: 900px) and (orientation: portrait) {\\n  .player-name {\\n    font-size: 5rem;\\n  }\\n\\n  .avatar {\\n    width: 130px;\\n  }\\n\\n  .player-avatar {\\n    width: 165px;\\n  }\\n}\\n/*\\n\\tMEDIA QUERIES LANDSCAPE\\n*/\\n@media only screen and (min-width: 480px) and (orientation: landscape) {\\n  .players {\\n    width: 75vw;\\n  }\\n\\n  .player {\\n    text-align: left;\\n  }\\n\\n  .player.computer {\\n    text-align: right;\\n  }\\n\\n  .player-name {\\n    font-size: 2rem;\\n    margin-top: 0;\\n  }\\n}\\n@media only screen and (min-width: 640px) and (orientation: landscape) {\\n  .player {\\n    padding: 2rem;\\n  }\\n\\n  .player-name {\\n    font-size: 2.4rem;\\n  }\\n}\\n@media only screen and (min-width: 800px) and (orientation: landscape) {\\n  .player-name {\\n    font-size: 2.6rem;\\n  }\\n\\n  .avatar {\\n    width: 80px;\\n  }\\n\\n  .player-avatar {\\n    width: 102px;\\n  }\\n}\\n@media only screen and (min-width: 960px) and (orientation: landscape) {\\n  .player-name {\\n    font-size: 3.2rem;\\n  }\\n\\n  .avatar {\\n    width: 100px;\\n  }\\n\\n  .player-avatar {\\n    width: 123px;\\n  }\\n}\\n@media only screen and (min-width: 1020px) and (orientation: landscape) {\\n  .players {\\n    width: 100%;\\n  }\\n\\n  .player, .player.computer {\\n    text-align: center;\\n  }\\n}\\n@media only screen and (min-width: 1300px) and (orientation: landscape) {\\n  .player-name {\\n    font-size: 4rem;\\n  }\\n\\n  .avatar {\\n    width: 150px;\\n  }\\n\\n  .player-avatar {\\n    width: 183px;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

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

/***/ "./src/assets/fonts/Righteous-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Righteous-Regular.ttf ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fd0110471f2228c1808a75b977150a0a.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Righteous-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/paper.png":
/*!*************************************!*\
  !*** ./src/assets/images/paper.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ee1235ea257f7225e58a11b1cf155555.png\");\n\n//# sourceURL=webpack:///./src/assets/images/paper.png?");

/***/ }),

/***/ "./src/assets/images/rock.png":
/*!************************************!*\
  !*** ./src/assets/images/rock.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3262db33ebc16f86770d36f09388ebac.png\");\n\n//# sourceURL=webpack:///./src/assets/images/rock.png?");

/***/ }),

/***/ "./src/assets/images/scissors.png":
/*!****************************************!*\
  !*** ./src/assets/images/scissors.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7feb307dc23d6cc9cf99eb386e8bbf29.png\");\n\n//# sourceURL=webpack:///./src/assets/images/scissors.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initEventListeners(_modules_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"./src/modules/play.js\");\n/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round */ \"./src/modules/round.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ \"./src/modules/score.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function checkWinner() {\n    return _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"player\") == 3 || _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"computer\") == 3;\n  }\n\n  function gameOver() {\n    var winner = getWinner();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setGameOverDisplay(winner);\n  }\n\n  function getWinner() {\n    if (_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"player\") == 3) return \"player\";\n    if (_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"computer\") == 3) return \"evil\";\n    return null;\n  }\n\n  function onMoveClick(e) {\n    var results = _play__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResults(e);\n\n    if (!results.draw) {\n      _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(results.winner);\n    }\n\n    var formattedScore = _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getFormatted();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPlayResults(_objectSpread(_objectSpread({}, results), {}, {\n      score: formattedScore\n    }));\n    if (checkWinner()) gameOver();else {\n      _round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set();\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayNewRound(_round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"padded\"));\n    }\n  }\n\n  function onPlayClick() {\n    _round__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reset();\n    _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reset();\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setNewGameDisplay();\n  }\n\n  return {\n    onMoveClick: onMoveClick,\n    onPlayClick: onPlayClick\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_rock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/rock.png */ \"./src/assets/images/rock.png\");\n/* harmony import */ var _assets_images_paper_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/paper.png */ \"./src/assets/images/paper.png\");\n/* harmony import */ var _assets_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/scissors.png */ \"./src/assets/images/scissors.png\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  var computerMoveDisplay = document.querySelector(\".computer-move\");\n  var infoDisplay = document.querySelector(\".info-display\");\n  var mainHeading = document.querySelector(\"h1\");\n  var moveBtns = document.querySelectorAll(\".move-btn\");\n  var moveBtnsContainer = document.querySelector(\".move-btns-container\");\n  var playBtn = document.querySelector(\".play-btn\");\n  var playerMoveDisplay = document.querySelector(\".player-move\");\n  var roundDisplay = document.querySelector(\".round-display\");\n  var scoreDisplay = document.querySelector(\".score-display\");\n\n  function displayPlayResults(_ref) {\n    var playerMove = _ref.playerMove,\n        computerMove = _ref.computerMove,\n        draw = _ref.draw,\n        winner = _ref.winner,\n        score = _ref.score;\n    var resultMessage = draw ? \"égalité !\" : winner == \"player\" ? \"Player 1 remporte cette manche !\" : \"Evil Robot remporte cette manche !\";\n    playerMoveDisplay.src = playerMove == \"rock\" ? _assets_images_rock_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : playerMove == \"paper\" ? _assets_images_paper_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _assets_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    computerMoveDisplay.src = computerMove == \"rock\" ? _assets_images_rock_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"] : computerMove == \"paper\" ? _assets_images_paper_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _assets_images_scissors_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    playerMoveDisplay.alt = \"an icon representing a \".concat(playerMove);\n    computerMoveDisplay.alt = \"an icon representing a \".concat(computerMove);\n    scoreDisplay.textContent = score;\n    infoDisplay.textContent = resultMessage;\n    infoDisplay.style.color = draw ? \"#3fdfdf\" : winner == \"player\" ? \"#86E411\" : \"#F70D2E\";\n  }\n\n  function displayNewRound(round) {\n    roundDisplay.textContent = \"Round \".concat(round);\n  }\n\n  function initEventListeners(app) {\n    playBtn.addEventListener(\"click\", app.onPlayClick);\n    moveBtns.forEach(function (btn) {\n      btn.addEventListener(\"click\", app.onMoveClick);\n    });\n  }\n\n  function setGameOverDisplay(winner) {\n    var winMessage = \"\".concat(winner == \"player\" ? \"Player 1\" : \"Evil Robot\", \" gagne la partie !\\n    Game Over\");\n    moveBtnsContainer.style.display = \"none\";\n    playBtn.style.display = \"inline-block\";\n    infoDisplay.textContent = winMessage;\n    infoDisplay.style.color = winner == \"player\" ? \"#86E411\" : \"#F70D2E\";\n  }\n\n  function setNewGameDisplay() {\n    mainHeading.style.display = \"none\";\n    moveBtnsContainer.style.display = \"flex\";\n    playBtn.style.display = \"none\";\n    computerMoveDisplay.src = \"#\";\n    playerMoveDisplay.src = \"#\";\n    computerMoveDisplay.alt = \"\";\n    playerMoveDisplay.alt = \"\";\n    infoDisplay.textContent = \"choisissez votre mouvement\";\n    infoDisplay.style.color = \"white\";\n    roundDisplay.textContent = \"Round 01\";\n    scoreDisplay.textContent = \"00 - 00\";\n    roundDisplay.style.display = \"block\";\n    scoreDisplay.style.display = \"block\";\n  }\n\n  return {\n    initEventListeners: initEventListeners,\n    setGameOverDisplay: setGameOverDisplay,\n    displayPlayResults: displayPlayResults,\n    setNewGameDisplay: setNewGameDisplay,\n    displayNewRound: displayNewRound\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/play.js":
/*!*****************************!*\
  !*** ./src/modules/play.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function getComputerMove() {\n    var n = Math.floor(Math.random() * 3);\n    return n === 0 ? \"rock\" : n === 1 ? \"paper\" : \"scissors\";\n  }\n\n  function getResults(e) {\n    var playerMove = e.target.dataset.move;\n    var computerMove = getComputerMove();\n    var draw = playerMove === computerMove;\n    var winner = null;\n\n    if (!draw) {\n      winner = getWinner(playerMove, computerMove);\n    }\n\n    return {\n      playerMove: playerMove,\n      computerMove: computerMove,\n      draw: draw,\n      winner: winner\n    };\n  }\n\n  function getWinner(playerMove, computerMove) {\n    return playerMove == \"rock\" && computerMove == \"scissors\" || playerMove == \"scissors\" && computerMove == \"paper\" || playerMove == \"paper\" && computerMove == \"rock\" ? \"player\" : \"computer\";\n  }\n\n  return {\n    getResults: getResults\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/play.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  function get(player) {\n    return sessionStorage.getItem(\"\".concat(player, \"Score\"));\n  }\n\n  function getFormatted() {\n    var playerScore = get(\"player\");\n    var computerScore = get(\"computer\");\n    return \"\".concat(playerScore.padStart(2, \"0\"), \" - \").concat(computerScore.padStart(2, \"0\"));\n  }\n\n  function reset() {\n    set(\"player\", 0);\n    set(\"computer\", 0);\n  }\n\n  function set(player) {\n    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var score = n !== null && n !== void 0 ? n : +get(player) + 1;\n    sessionStorage.setItem(\"\".concat(player, \"Score\"), score);\n  }\n\n  return {\n    get: get,\n    getFormatted: getFormatted,\n    reset: reset,\n    set: set\n  };\n})());\n\n//# sourceURL=webpack:///./src/modules/score.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });