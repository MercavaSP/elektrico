/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectric"]("main",{

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.modal-callback'),\n      overlay = document.querySelector('.modal-overlay'),\n      popupBtn = document.querySelectorAll('.callback-btn'),\n      popupClose = document.querySelector('.modal-close'),\n      order = document.querySelectorAll('.img-wrapper_s::after');\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      overlay.style.display = 'block';\n    });\n  });\n  console.log(order);\n  order.forEach(function (e) {\n    e.addEventListener('click', function () {\n      popup.style.display = 'none';\n      overlay.style.display = 'none';\n    });\n  });\n  popupClose.addEventListener('click', function () {\n    popup.style.display = 'none';\n    overlay.style.display = 'none';\n  });\n  overlay.addEventListener('click', function (e) {\n    if (e.target === overlay) {\n      popup.style.display = 'none';\n      overlay.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://electric/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c610b2d72f669ca3e75")
/******/ })();
/******/ 
/******/ }
);