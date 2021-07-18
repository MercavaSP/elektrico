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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = document.querySelectorAll('.top-slider_item'),\n      sliderDots = document.querySelector('.slick-dots'),\n      textItem = document.querySelectorAll('.table');\n  var currentSlide = 0,\n      interval,\n      dots;\n\n  var autoPlaySlide = function autoPlaySlide() {\n    slide[currentSlide].classList.remove('top-slider_item__active');\n    textItem[currentSlide].classList.remove('active'); // sliderDots[currentSlide].classList.remove('slick-active');\n\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    slide[currentSlide].classList.add('top-slider_item__active');\n    textItem[currentSlide].classList.add('active'); // sliderDots[currentSlide].classList.add('slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  }; // const addDots = () => {\n  //         for (let i = 0; i < slide.length; i++) {\n  //             let li = document.createElement('li');\n  //             li.classList.add('dot');\n  //             if (i === 0) {\n  //                 li.classList.add('slick-active');\n  //             }\n  //             sliderDots.append(li);\n  //         }\n  //         dots = document.querySelectorAll('.dot');\n  //     };\n  // addDots();\n\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electric/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d44febbb7954c3986e4")
/******/ })();
/******/ 
/******/ }
);