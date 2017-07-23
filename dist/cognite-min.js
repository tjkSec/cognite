/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js_all_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util_js_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js_chunk_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js_chunk_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__util_js_chunk_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_js_distill_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_js_distill_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_js_distill_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js_group_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js_group_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_js_group_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_js_drop_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_js_drop_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__util_js_drop_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_js_lop_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_js_lop_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__util_js_lop_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_js_fill_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_js_fill_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__util_js_fill_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_js_flatten_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_js_flatten_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__util_js_flatten_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_js_pair_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_js_pair_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__util_js_pair_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_js_first_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_js_first_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__util_js_first_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_js_last_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_js_last_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__util_js_last_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_js_lose_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_js_lose_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__util_js_lose_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_js_loseTop_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_js_loseTop_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__util_js_loseTop_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_js_conjoin_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_js_conjoin_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__util_js_conjoin_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_js_nth_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_js_nth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__util_js_nth_js__);
/* Arrays & Objects */
















class Cognite {
  constructor(data) {
    this.datatype = data;
  }
}

Cognite.prototype.all = __WEBPACK_IMPORTED_MODULE_0__util_js_all_js__["all"];
Cognite.prototype.chunk = __WEBPACK_IMPORTED_MODULE_1__util_js_chunk_js__["chunk"];
Cognite.prototype.distill = __WEBPACK_IMPORTED_MODULE_2__util_js_distill_js__["distill"];
Cognite.prototype.group = __WEBPACK_IMPORTED_MODULE_3__util_js_group_js__["group"];
Cognite.prototype.drop = __WEBPACK_IMPORTED_MODULE_4__util_js_drop_js__["drop"];
Cognite.prototype.lop = __WEBPACK_IMPORTED_MODULE_5__util_js_lop_js__["lop"];
Cognite.prototype.fill = __WEBPACK_IMPORTED_MODULE_6__util_js_fill_js__["fill"];
Cognite.prototype.flatten = __WEBPACK_IMPORTED_MODULE_7__util_js_flatten_js__["flatten"];
Cognite.prototype.pair = __WEBPACK_IMPORTED_MODULE_8__util_js_pair_js__["pair"];
Cognite.prototype.first = __WEBPACK_IMPORTED_MODULE_9__util_js_first_js__["first"];
Cognite.prototype.last = __WEBPACK_IMPORTED_MODULE_10__util_js_last_js__["last"];
Cognite.prototype.lose = __WEBPACK_IMPORTED_MODULE_11__util_js_lose_js__["lose"];
Cognite.prototype.loseTop = __WEBPACK_IMPORTED_MODULE_12__util_js_loseTop_js__["loseTop"];
Cognite.prototype.conjoin = __WEBPACK_IMPORTED_MODULE_13__util_js_conjoin_js__["conjoin"];
Cognite.prototype.nth = __WEBPACK_IMPORTED_MODULE_14__util_js_nth_js__["nth"];

const x = new Cognite([0, 1, 2, 3, 3, 3, 4, 5]);

document.addEventListener("click", function() {
  alert(JSON.stringify(x.nth(1)));
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function all() {
    return this.datatype;
}
exports.all = all;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function chunk(size) {
    var i;
    var chunked = [];
    for (i = 0; i < this.datatype.length; i += size) {
        chunked.push(this.datatype.slice(i, i + size));
    }
    return chunked;
}
exports.chunk = chunk;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function distill() {
    return this.datatype.filter(Boolean);
}
exports.distill = distill;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function group() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var grouped = [].concat.apply([], rest);
    return grouped;
}
exports.group = group;
;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function drop(amount) {
    this.datatype.splice(0, amount);
    return this.datatype;
}
exports.drop = drop;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function lop(amount) {
    this.datatype.splice(-Math.abs(amount));
    return this.datatype;
}
exports.lop = lop;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function fill(value, start, deleteCount) {
    var _this = this;
    if (start && deleteCount !== undefined) {
        var i = void 0;
        for (i = start + 1; i < deleteCount; i++) {
            this.datatype[i] = value;
        }
        return this.datatype;
    }
    else {
        this.datatype.forEach(function (el, id) {
            _this.datatype[id] = value;
        });
        return this.datatype;
    }
}
exports.fill = fill;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function flattener(arr) {
    var flat = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(flattener(arr[i]));
        }
        else {
            flat.push(arr[i]);
        }
    }
    return flat;
}
function flatten() {
    return flattener(this.datatype);
}
exports.flatten = flatten;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function pair() {
    var newObj = {};
    for (var i = 0; i < this.datatype.length; i++) {
        newObj[String(this.datatype[i][0])] = String(this.datatype[i][1]);
    }
    ;
    return newObj;
}
exports.pair = pair;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function first() {
    return this.datatype[0];
}
exports.first = first;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function last() {
    return this.datatype.slice(-1)[0];
}
exports.last = last;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function lose() {
    this.datatype.pop();
    return this.datatype;
}
exports.lose = lose;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function loseTop() {
    this.datatype.shift();
    return this.datatype;
}
exports.loseTop = loseTop;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function conjoin(joiner) {
    return this.datatype.join(joiner);
}
exports.conjoin = conjoin;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function nth(n) {
    return this.datatype[n];
}
exports.nth = nth;


/***/ })
/******/ ]);