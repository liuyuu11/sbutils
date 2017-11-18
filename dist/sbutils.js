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
var isArrRepeat = __webpack_require__(3);
var getCookie = __webpack_require__(4);
var removeCookie = __webpack_require__(5);
var setCookie = __webpack_require__(0);
var getExplore = __webpack_require__(6);
var getOS = __webpack_require__(7);
var getKeyName = __webpack_require__(8);
var isEmptyObj = __webpack_require__(9);
var randomColor = __webpack_require__(10);
var randomNum = __webpack_require__(11);
var queryParse = __webpack_require__(12);
var queryString = __webpack_require__(13);
var getMaxOfArray = __webpack_require__(14);
var getMinOfArray = __webpack_require__(15);
module.exports = {
	arrayEqual: arrayEqual,
	isArrRepeat: isArrRepeat,
	getCookie: getCookie,
	removeCookie: removeCookie,
	setCookie: setCookie,
	getExplore: getExplore,
	getOS: getOS,
	getKeyName: getKeyName,
	isEmptyObj: isEmptyObj,
	randomColor: randomColor,
	randomNum: randomNum,
	queryParse: queryParse,
	queryString: queryString,
	getMaxOfArray: getMaxOfArray,
	getMinOfArray: getMinOfArray
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
 * @desc 判断数组元素是否重复
 * @author snoob
 * @param {Array}
 * @return {Boolean}
 */
module.exports = function (arr) {
	var _arr = arr.sort();
	for (var i = 0; i < _arr.length; i++) {
		if (_arr[i] === _arr[i + 1]) {
			return true;
		}
	}
	return false;
};

/***/ }),
/* 4 */
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
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * @desc 获取浏览器类型和版本相关信息
 * @author snoob
 * @return {String} 
 */
module.exports = function () {
	var sys = {},
	    ua = navigator.userAgent.toLowerCase(),
	    s = void 0;
	(s = ua.search(/rv:([\d.]+)\) like gecko/)) ? sys.ie = ua : (s = ua.search(/msie ([\d\.]+)/)) ? sys.ie = ua : (s = ua.search(/edge\/([\d\.]+)/)) ? sys.edge = ua : (s = ua.search(/firefox\/([\d\.]+)/)) ? sys.firefox = ua : (s = ua.search(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = ua : (s = ua.search(/chrome\/([\d\.]+)/)) ? sys.chrome = ua : (s = ua.search(/ucweb/)) ? sys.ucweb = ua : (s = ua.search(/360se/)) ? sys._360se = ua : (s = ua.search(/bidubrowser/)) ? sys.bidubrowser = ua : (s = ua.search(/metasr/)) ? sys.sougou = ua : (s = ua.search(/micromessenger/)) ? sys.weixin = ua : (s = ua.search(/qqbrowser/)) ? sys.qq = ua : (s = ua.search(/lbbrowser/)) ? sys.liebao = ua : (s = ua.search(/version\/([\d\.]+).*safari/)) ? sys.safari = ua : 0;
	if (sys.ie) return 'this is IE: ' + sys.ie;
	if (sys.edge) return 'this is EDGE: ' + sys.edge;
	if (sys.firefox) return 'this is Firefox: ' + sys.firefox;
	if (sys.chrome) return 'this is Chrome: ' + sys.chrome;
	if (sys.opera) return 'this is Opera: ' + sys.opera;
	if (sys.ucweb) return 'this is ucweb: ' + sys.ucweb;
	if (sys._360se) return 'this is _360se: ' + sys._360se;
	if (sys.bidubrowser) return 'this is bidubrowser: ' + sys.bidubrowser;
	if (sys.sougou) return 'this is sougou: ' + sys.sougou;
	if (sys.weixin) return 'this is weixin: ' + sys.weixin;
	if (sys.qq) return 'this is qq: ' + sys.qq;
	if (sys.lbbrowser) return 'this is lbbrowser: ' + sys.lbbrowser;
	if (sys.safari) return 'this is Safari: ' + sys.safari;
	return 'Unkonwn';
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * 
 * @desc 获取操作系统类型
 * @return {String} 
 */
module.exports = function () {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion)) return 'MacOSX';
    if (/win/i.test(appVersion)) return 'windows';
    if (/linux/i.test(appVersion)) return 'linux';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var keyCodeMap = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pause',
    20: 'Caps Lock',
    27: 'Escape',
    32: 'Space',
    33: 'Page Up',
    34: 'Page Down',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    42: 'Print Screen',
    45: 'Insert',
    46: 'Delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    91: 'Windows',
    93: 'Right Click',
    96: 'Numpad 0',
    97: 'Numpad 1',
    98: 'Numpad 2',
    99: 'Numpad 3',
    100: 'Numpad 4',
    101: 'Numpad 5',
    102: 'Numpad 6',
    103: 'Numpad 7',
    104: 'Numpad 8',
    105: 'Numpad 9',
    106: 'Numpad *',
    107: 'Numpad +',
    109: 'Numpad -',
    110: 'Numpad .',
    111: 'Numpad /',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'Num Lock',
    145: 'Scroll Lock',
    182: 'My Computer',
    183: 'My Calculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
};
/**
 * @desc 根据keycode获得键名
 * @author snoob
 * @param  {Number} keycode 
 * @return {String}
 */
module.exports = function (keycode) {
    if (keyCodeMap[keycode]) {
        return keyCodeMap[keycode];
    } else {
        console.log('Unknow Key(Key Code:' + keycode + ')');
        return '';
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @desc   判断obj是否为空
 * @author snoob
 * @param  {Object} obj
 * @return {Boolean}
 */
module.exports = function (obj) {
    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || Array.isArray(obj)) return false;
    return !Object.keys(obj).length;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * @desc 随机生成颜色
 * @author snoob
 * @return {String}
 */
module.exports = function () {
	var color = '',
	    point = '0123456789ABCDEF';
	while (color.length < 6) {
		color += point[Math.floor(Math.random() * 16)];
	}
	return '#' + color;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * @desc 生成指定范围随机数
 * @author snoob
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
module.exports = function () {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return Math.floor(min + Math.random() * (max - min));
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * @desc   url_query => obj
 * @author snoob
 * @param  {String} url  default: if null will set url use window.location.href
 * @return {Object} 
 */
module.exports = function (url) {
	var urlstring = url == null ? window.location.href : url;
	var search = urlstring.substring(urlstring.lastIndexOf('?') + 1);
	if (!search) {
		return {};
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * @desc   obj => url_query
 * @author snoob
 * @param  {Object} obj 
 * @return {String}
 */
module.exports = function (obj) {
	if (!obj) return '';
	var tmp = [];
	for (var key in obj) {
		var value = obj[key];
		if (value instanceof Array) {
			for (var i = 0; i < value.length; ++i) {
				tmp.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
			}
		}
		tmp.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	}
	return tmp.join('&');
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * @desc 获取数组最大值
 * @author snoob
 * @param {Array}
 * @return {Number}
 */

module.exports = function (numArray) {
  return Math.max.apply(null, numArray);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * @desc 获取数组最小值
 * @author snoob
 * @param {Array}
 * @return {Number}
 */

module.exports = function (numArray) {
  return Math.min.apply(null, numArray);
};

/***/ })
/******/ ]);
});