/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectric"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_ckilck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ckilck */ \"./src/modules/ckilck.js\");\n/* harmony import */ var _modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeonToggle */ \"./src/modules/accordeonToggle.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n // import carousel from \"./modules/carousel\";\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)(); // carousel();\n\n  (0,_modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)();\n  (0,_modules_ckilck__WEBPACK_IMPORTED_MODULE_3__.default)();\n});\n\n//# sourceURL=webpack://electric/./src/index.js?");

/***/ }),

/***/ "./src/modules/ckilck.js":
/*!*******************************!*\
  !*** ./src/modules/ckilck.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar clickCheck = function clickCheck() {\n  document.querySelectorAll('.card').forEach(function (card) {\n    return card.addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log(this.dataset.id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickCheck);\n\n//# sourceURL=webpack://electric/./src/modules/ckilck.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("768282b26b6aea344d4f")
/******/ })();
/******/ 
/******/ }
);