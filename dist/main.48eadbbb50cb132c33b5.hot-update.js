/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectric"]("main",{

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = document.querySelectorAll('.top-slider_item'),\n      sliderDots = document.querySelector('.slick-dots'),\n      textItem = document.querySelectorAll('.table');\n  var currentSlide = 0,\n      interval,\n      dots;\n\n  var removeClass = function removeClass(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var addClass = function addClass(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    removeClass(slide, currentSlide, 'top-slider_item__active');\n    removeClass(textItem, currentSlide, 'active');\n    removeClass(sliderDots, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    addClass(slide, currentSlide, 'top-slider_item__active');\n    addClass(textItem, currentSlide, 'active');\n    addClass(sliderDots, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var addDots = function addDots() {\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n\n      if (i === 0) {\n        li.classList.add('slick-active');\n      }\n\n      sliderDots.append(li);\n    }\n\n    dots = document.querySelectorAll('.dot');\n  };\n\n  addDots();\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electric/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e50d5a729c3da4c83ea")
/******/ })();
/******/ 
/******/ }
);