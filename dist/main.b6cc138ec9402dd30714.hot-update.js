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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeonToggle */ \"./src/modules/accordeonToggle.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formRules */ \"./src/modules/formRules.js\");\n\n\n\n\n\n // import validate from \"./modules/validate\";\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)();\n  (0,_modules_formRules__WEBPACK_IMPORTED_MODULE_6__.default)();\n  var carousel = new _modules_carousel__WEBPACK_IMPORTED_MODULE_3__.default({\n    main: '.services-elements',\n    wrap: '.services-carousel',\n    next: '#btnRight',\n    prev: '#btnLeft',\n    slidesToShow: 3,\n    infinity: true\n  });\n  carousel.init();\n});\n\n//# sourceURL=webpack://electric/./src/index.js?");

/***/ }),

/***/ "./src/modules/formRules.js":
/*!**********************************!*\
  !*** ./src/modules/formRules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formsRules = function formsRules() {\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (e.inputType === 'insertFromPaste') {\n      target.value = '';\n      return;\n    }\n  });\n  body.addEventListener('focusout', function (e) {\n    var target = e.target;\n\n    if (target.value) {\n      if (target.matches('#form2-name,#form1-name'\n      /*,#form2-message'*/\n      )) {\n        target.value = target.value.replace(/^\\s+|\\s+$/g, '');\n        target.value = target.value.replace(/\\s{2,}/g, ' ');\n      } else if (target.matches('#form2-email,#form1-email,#form3-email')) {\n        target.value = target.value.replace(/^\\-+|\\-+$/g, '');\n        target.value = target.value.replace(/\\-{2,}/g, '-');\n      }\n\n      if (target.matches('#form2-name,#form1-name,#form3-name') && target.value) {\n        var str = target.value;\n        str = str.split(' ');\n        str.forEach(function (el, id) {\n          return str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase();\n        });\n        str = str.join(' ');\n        target.value = str;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsRules);\n\n//# sourceURL=webpack://electric/./src/modules/formRules.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59164414c2ee681697ba")
/******/ })();
/******/ 
/******/ }
);