(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sbutils"] = factory();
	else
		root["sbutils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * 
 * @desc  设置Cookie
 * @author snoob
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
module.exports = function (name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEqual = __webpack_require__(2);
var getCookie = __webpack_require__(3);
var removeCookie = __webpack_require__(4);
var setCookie = __webpack_require__(0);
module.exports = {
	arrayEqual: arrayEqual,
	getCookie: getCookie,
	removeCookie: removeCookie,
	setCookie: setCookie
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * @description 判断两个数组是否相等
 * @author snoob
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
module.exports = function (arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * @desc 根据name读取cookie
 * @author snoob
 * @param  {String} name 
 * @return {String}
 */
module.exports = function (name) {
	var arr = document.cookie.replace(/\s/g, "").split(';');
	for (var i = 0; i < arr.length; i++) {
		var tempArr = arr[i].split('=');
		if (tempArr[0] == name) {
			return decodeURIComponent(tempArr[1]);
		}
	}
	return '';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setCookie = __webpack_require__(0);
/**
 * @desc 根据name删除cookie
 * @author snoob
 * @param  {String} name 
 */
module.exports = function (name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1);
};

/***/ })
/******/ ]);
});