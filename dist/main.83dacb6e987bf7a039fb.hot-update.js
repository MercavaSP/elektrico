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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeonToggle */ \"./src/modules/accordeonToggle.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_accordeonToggle__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n});\n\n//# sourceURL=webpack://electric/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar forms = function forms() {\n  var form = document.querySelectorAll('form'),\n      inputs = document.querySelectorAll('input');\n  var message = {\n    loading: 'Загрузка...',\n    sucess: 'Спасибо! Скоро с вами свяжемся',\n    failure: 'Что-то пошло не так...'\n  };\n\n  var postData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              document.querySelector('.status').textContent = message.loading;\n              _context.next = 3;\n              return fetch(url, {\n                method: \"POST\",\n                body: data\n              });\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.text();\n\n            case 6:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postData(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var clearInpust = function clearInpust() {\n    inputs.forEach(function (item) {\n      item.value = '';\n    });\n  };\n\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var statusMessage = document.createElement('div');\n      statusMessage.classList.add('status');\n      item.appendChild(statusMessage);\n      var formData = new FormData(item);\n      postData('./server.php', formData).then(function (res) {\n        console.log(res);\n        statusMessage.textContent = message.sucess;\n      })[\"catch\"](function () {\n        return statusMessage.textContent = message.failure;\n      }).finaly(function () {\n        clearInpust();\n        setTimeout(function () {\n          statusMessage.remuve();\n        }, 5000);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://electric/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b1d8960f196b8c766ef")
/******/ })();
/******/ 
/******/ }
);