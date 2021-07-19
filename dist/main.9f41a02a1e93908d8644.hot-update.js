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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider'),\n      slide = document.querySelectorAll('.top-slider_item'),\n      sliderDots = document.querySelector('.slick-dots'),\n      textItem = document.querySelectorAll('.table');\n  var currentSlide = 0,\n      interval,\n      dots;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'top-slider_item__active');\n    prevSlide(textItem, currentSlide, 'active');\n    prevSlide(dots, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'top-slider_item__active');\n    nextSlide(textItem, currentSlide, 'active');\n    nextSlide(dots, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide(e) {\n    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;\n    event.preventDefault();\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'top-slider_item__active');\n    prevSlide(textItem, currentSlide, 'active');\n    prevSlide(dots, currentSlide, 'slick-active');\n\n    if (target.matches('.dot')) {\n      dots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'top-slider_item__active');\n    nextSlide(textItem, currentSlide, 'active');\n    nextSlide(dots, currentSlide, 'slick-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n\n  var addDots = function addDots() {\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n\n      if (i === 0) {\n        li.classList.add('slick-active');\n      }\n\n      sliderDots.append(li);\n    }\n\n    dots = document.querySelectorAll('.dot');\n  };\n\n  addDots();\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electric/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94da51abf379cde03cfd")
/******/ })();
/******/ 
/******/ }
);