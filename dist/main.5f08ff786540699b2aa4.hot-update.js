/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectric"]("main",{

/***/ "./src/modules/formRules.js":
/*!**********************************!*\
  !*** ./src/modules/formRules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formsRules = function formsRules() {\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (e.inputType === 'insertFromPaste') {\n      target.value = '';\n      return;\n    }\n  });\n  body.addEventListener('focusout', function (e) {\n    var target = e.target;\n\n    if (target.value) {\n      if (target.matches('fio-1')) {\n        target.value = target.value.replace(/^\\s+|\\s+$/g, '');\n        target.value = target.value.replace(/\\s{2,}/g, ' ');\n      }\n\n      if (target.matches('fio-1') && target.value) {\n        var str = target.value;\n        str = str.split(' ');\n        str.forEach(function (el, id) {\n          return str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase();\n        });\n        str = str.join(' ');\n        target.value = str;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsRules);\n\n//# sourceURL=webpack://electric/./src/modules/formRules.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21a6107b7fd611df0b7d")
/******/ })();
/******/ 
/******/ }
);