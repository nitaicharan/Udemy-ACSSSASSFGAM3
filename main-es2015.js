(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-container></app-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n        gdColumns=\"[sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end]\"\n        gdRows=\"80vh min-content 40vw repeat(3, min-content)\"\n        class=\"container\">\n    <app-sidebar gdColumn=\"sidebar-start / sidebar-end\" gdRow=\"1 / -1\"></app-sidebar>\n    <app-header gdColumn=\"full-start / col-end 6\"></app-header>\n    <app-realtors gdColumn=\"col-start 7 / ful-end\"></app-realtors>\n    <app-features gdColumn=\"center-start / center-end\"></app-features>\n    <app-story-pictures gdColumn=\"full-start / col-end 4\"></app-story-pictures>\n    <app-story-content gdColumn=\"col-start 5 / full-end\"></app-story-content>\n    <app-homes gdColumn=\"center-start / center-end\"></app-homes>\n    <app-gallery gdColumn=\"full-start / full-end\"></app-gallery>\n    <app-footer gdColumn=\"full-start / full-end\"></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/feature/feature.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/feature/feature.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div gdGap=\"1.5rem 2.5rem\" gdColumnGap=\"2.5rem\" gdColumns=\"min-content 1fr\" class=\"feature\">\n    <svg gdRow=\"1/span 2\" class=\"feature__icon\">\n        <use attr.xlink:href=\"{{imgpath}}\"></use>\n    </svg>\n    <h4 class=\"heading-4 heading-4--dark\">{{title}}</h4>\n    <p class=\"feature__text\">{{description}}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/features.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/features.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n            fxLayoutAlign=\"start\"\n            gdGap=\"6rem\"\n            gdColumns=\"repeat(auto-fit, minmax(25rem,1fr))\"\n            class=\"features\">\n    <app-feature\n        title=\"{{item.title}}\"\n        description=\"{{item.description}}\"\n        imgpath=\"{{item.imgpath}}\"\n        *ngFor=\"let item of items\"></app-feature>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/footer/footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer fxFlex class=\"footer\">footer works!</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/gallery/gallery.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/gallery/gallery.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex class=\"gallery\">gallery works!</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header fxFlex class=\"header\">header works!</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n        gdGap=\"3.5rem\"\n        gdColumns=\"repeat(2,1fr)\"\n        class=\"home\">\n    <img\n        gdColumn=\"1/3\"\n        gdRow=\"1/2\"\n        class=\"home__img\" src=\"{{path}}\" alt=\"House 1\">\n    <svg\n        gdGridAlign=\"end start\"\n        gdColumn=\"2/3\"\n        gdRow=\"1/2\"\n        class=\"home__like\">\n        <use xlink:href=\"../../../assets/img/sprite.svg#icon-heart-full\"></use>\n    </svg>\n    <h5\n        gdRow=\"1/2\"\n        gdGridAlign=\"center end\"\n        gdColumn=\"1/-1\"\n        class=\"home__name\">{{name}}</h5>\n    <div\n        fxLayoutGap=\"1rem\"\n        fxLayoutAlign=\"none center\"\n        class=\"home__location\">\n        <svg>\n            <use xlink:href=\"../../../assets/img/sprite.svg#icon-map-pin\"></use>\n        </svg>\n        <p>{{location}}</p>\n    </div>\n    <div\n        fxLayoutGap=\"1rem\"\n        fxLayoutAlign=\"none center\"\n        class=\"home__rooms\">\n        <svg>\n            <use xlink:href=\"../../../assets/img/sprite.svg#icon-profile-male\"></use>\n        </svg>\n        <p>{{rooms}} rooms</p>\n    </div>\n    <div\n        fxLayoutGap=\"1rem\"\n        fxLayoutAlign=\"none center\"\n        class=\"home__area\">\n        <svg>\n            <use xlink:href=\"../../../assets/img/sprite.svg#icon-expand\"></use>\n        </svg>\n        <p>{{area}} m<sup>2</sup></p>\n    </div>\n    <div\n        fxLayoutGap=\"1rem\"\n        fxLayoutAlign=\"none center\"\n        class=\"home__price\">\n        <svg>\n            <use xlink:href=\"../../../assets/img/sprite.svg#icon-key\"></use>\n        </svg>\n        <p>${{price}}</p>\n    </div>\n    <button\n        gdColumn=\"1/-1\"\n        class=\"btn home__btn\">Contact realtor</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/homes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/homes.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxFlex gdGap=\"7rem\" gdColumns=\"repeat(auto-fit, minmax(25rem, 1fr))\" class=\"homes\">\n    <app-home\n        path={{item.path}}\n        name={{item.name}}\n        location={{item.location}}\n        rooms={{item.rooms}}\n        area={{item.area}}\n        price={{item.price}}\n        *ngFor=\"let item of items\"\n        ></app-home>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/realtors/realtors.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/realtors/realtors.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex class=\"realtors\">realtors works!</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/sidebar/sidebar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/sidebar/sidebar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex class=\"sidebar\">sidebar works!</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-content/story-content.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-content/story-content.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"story__content\">\n    <h3 class=\"heading-3 mb-sm\">Happy Customers</h3>\n    <h2 class=\"heading-2 heading-2--dark mb-md\">&ldquo;The best decision of our live&rdquo;</h2>\n    <p class=\"story__text\">Ipsum laboriosam possimus porro non nostrum! Repellat culpa corrupti voluptatibus accusamus iste tempore. Perspiciatis tenetur doloribus vitae sequi eum? Error illo quibusdam dolores illum placeat. Dicta quod quis quisquam ut</p>\n    <button class=\"btn\">Find your own home</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-pictures/story-pictures.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-pictures/story-pictures.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n        fxFlex\n        gdAlignColumns=\"center center\"\n        gdColumns=\"repeat(6, 1fr)\"\n        gdRows=\"repeat(6, 1fr)\"\n        class=\"story__pictures\">\n    <img gdRow=\"2/6\" gdColumn=\"2/6\" class=\"story__img--1\" src=\"./assets/img/story-1.jpeg\" alt=\"Couple with new house\">\n    <img gdRow=\"4/6\" gdColumn=\"4/7\" class=\"story__img--2\" src=\"./assets/img/story-2.jpeg\" alt=\"New house\">\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'course';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _container_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container/header/header.component */ "./src/app/container/header/header.component.ts");
/* harmony import */ var _container_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/sidebar/sidebar.component */ "./src/app/container/sidebar/sidebar.component.ts");
/* harmony import */ var _container_realtors_realtors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/realtors/realtors.component */ "./src/app/container/realtors/realtors.component.ts");
/* harmony import */ var _container_features_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container/features/features.component */ "./src/app/container/features/features.component.ts");
/* harmony import */ var _container_homes_homes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container/homes/homes.component */ "./src/app/container/homes/homes.component.ts");
/* harmony import */ var _container_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./container/gallery/gallery.component */ "./src/app/container/gallery/gallery.component.ts");
/* harmony import */ var _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./container/footer/footer.component */ "./src/app/container/footer/footer.component.ts");
/* harmony import */ var _container_features_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./container/features/feature/feature.component */ "./src/app/container/features/feature/feature.component.ts");
/* harmony import */ var _container_story_pictures_story_pictures_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./container/story-pictures/story-pictures.component */ "./src/app/container/story-pictures/story-pictures.component.ts");
/* harmony import */ var _container_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./container/story-content/story-content.component */ "./src/app/container/story-content/story-content.component.ts");
/* harmony import */ var _container_homes_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./container/homes/home/home.component */ "./src/app/container/homes/home/home.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"],
            _container_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _container_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
            _container_realtors_realtors_component__WEBPACK_IMPORTED_MODULE_10__["RealtorsComponent"],
            _container_features_features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"],
            _container_homes_homes_component__WEBPACK_IMPORTED_MODULE_12__["HomesComponent"],
            _container_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"],
            _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _container_features_feature_feature_component__WEBPACK_IMPORTED_MODULE_15__["FeatureComponent"],
            _container_story_pictures_story_pictures_component__WEBPACK_IMPORTED_MODULE_16__["StoryPicturesComponent"],
            _container_story_content_story_content_component__WEBPACK_IMPORTED_MODULE_17__["StoryContentComponent"],
            _container_homes_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexModule"],
            _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_4__["GridModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/container/container.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  font-family: --font-primary;\n  color: var(--color-grey-dark-2);\n  font-weight: 300;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZm9udC1mYW1pbHk6IC0tZm9udC1wcmltYXJ5O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWRhcmstMik7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiAtLWZvbnQtcHJpbWFyeTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktZGFyay0yKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContainerComponent = class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./container.component.scss */ "./src/app/container/container.component.scss")).default]
    })
], ContainerComponent);



/***/ }),

/***/ "./src/app/container/features/feature/feature.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/container/features/feature/feature.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feature__icon {\n  fill: var(--color-primary);\n  width: 4.5rem;\n  height: 4.5rem;\n  transform: translateY(-1rem);\n}\n.feature__text {\n  font-size: 1.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2ZlYXR1cmVzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL2ZlYXR1cmVzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyL2ZlYXR1cmVzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlIHtcbiAgICAmX19pY29uIHtcbiAgICAgICAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHdpZHRoOiA0LjVyZW07XG4gICAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG59XG4iLCIuZmVhdHVyZV9faWNvbiB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbn1cbi5mZWF0dXJlX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/container/features/feature/feature.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/container/features/feature/feature.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeatureComponent = class FeatureComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureComponent.prototype, "imgpath", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeatureComponent.prototype, "description", void 0);
FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/feature/feature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feature.component.scss */ "./src/app/container/features/feature/feature.component.scss")).default]
    })
], FeatureComponent);



/***/ }),

/***/ "./src/app/container/features/features.component.scss":
/*!************************************************************!*\
  !*** ./src/app/container/features/features.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".features {\n  margin: 15rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXIvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZXMge1xuICAgIG1hcmdpbjogMTVyZW0gMDtcbn1cbiIsIi5mZWF0dXJlcyB7XG4gIG1hcmdpbjogMTVyZW0gMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/features/features.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/container/features/features.component.ts ***!
  \**********************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesComponent = class FeaturesComponent {
    constructor() {
        this.items = [
            {
                imgpath: "./assets/img/sprite.svg#icon-global",
                title: "World's best luxury homes",
                description: "Elit dolore fugiat nemo error deleniti? Corrupti recusandae veritatis sed aut excepturi Eveniet fugiat quasi id consequatur natus Delectus totam perspiciatis dolore iste vel explicabo dolore. Dignissimos nesciunt fuga fugit."
            },
            {
                imgpath: "./assets/img/sprite.svg#icon-trophy",
                title: "Only the best properties",
                description: "Consectetur ullam aliquid in officiis natus molestiae Necessitatibus unde dicta amet saepe similique Explicabo officiis rem voluptatum ducimus delectus autem Ullam eligendi quo fuga sapiente eveniet ab. Dolor enim et"
            },
            {
                imgpath: "./assets/img/sprite.svg#icon-map-pin",
                title: "All homes in in top locations",
                description: "Amet tempore explicabo fuga cupiditate officia Facilis illo dolores ea ratione necessitatibus? Accusantium iure non deserunt deleniti veritatis debitis Similique hic architecto unde minus minima. Ducimus reprehenderit et quibusdam recusandae."
            },
            {
                imgpath: "./assets/img/sprite.svg#icon-key",
                title: "New home in one week",
                description: "Adipisicing deleniti accusantium commodi animi nesciunt cumque, aliquam necessitatibus? Expedita quae quidem at ut cumque. Officiis obcaecati quidem voluptate aspernatur maiores Quod officiis obcaecati reprehenderit iste sunt non recusandae animi!"
            },
            {
                imgpath: "./assets/img/sprite.svg#icon-presentation",
                title: "Top 1% realtors",
                description: "Consectetur consectetur et assumenda quidem cumque. Hic voluptas ad perferendis saepe nulla? Facilis minus voluptatibus doloremque asperiores expedita Maiores illum rerum veritatis earum odio Voluptatibus quas nulla excepturi saepe atque!"
            },
            {
                imgpath: "./assets/img/sprite.svg#icon-lock",
                title: "Secure payments on nexter",
                description: "Amet dignissimos quisquam aut iure a officiis quaerat? Qui nam neque in voluptate numquam? Accusamus ducimus rem iusto ab debitis enim nihil. Totam sint quam doloribus possimus consectetur temporibus. Ratione"
            }
        ];
    }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/features/features.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.scss */ "./src/app/container/features/features.component.scss")).default]
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/container/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/container/footer/footer.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/container/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/container/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/container/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/container/gallery/gallery.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/container/gallery/gallery.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gallery {\n  background-color: var(--color-grey-dark-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXktZGFyay0xKTtcbn1cbiIsIi5nYWxsZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleS1kYXJrLTEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/container/gallery/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/container/gallery/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.scss */ "./src/app/container/gallery/gallery.component.scss")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/container/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/container/header/header.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background-color: var(--color-grey-dark-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleS1kYXJrLTEpO1xufVxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXktZGFyay0xKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/container/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/container/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/container/homes/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/container/homes/home/home.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  background-color: var(--color-grey-light-1);\n}\n.home__img {\n  width: 100%;\n  z-index: 1;\n}\n.home__like {\n  fill: var(--color-primary);\n  height: 2.5rem;\n  width: 2.5rem;\n  z-index: 2;\n  margin: 1rem;\n}\n.home__name {\n  z-index: 3;\n  width: 80%;\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  text-align: center;\n  padding: 1.25rem;\n  background-color: var(--color-secondary);\n  color: #fff;\n  font-weight: 400;\n  transform: translateY(50%);\n}\n.home__location, .home__rooms {\n  margin-top: 2.5rem;\n}\n.home__location, .home__rooms, .home__area, .home__price {\n  font-size: 1.5rem;\n  margin-left: 2rem;\n}\n.home__location svg, .home__rooms svg, .home__area svg, .home__price svg {\n  fill: var(--color-primary);\n  height: 2rem;\n  width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2hvbWVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL2hvbWVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDQ1I7QURFSTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0RSO0FESUk7RUFFSSxrQkFBQTtBQ0hSO0FETUk7RUFLSSxpQkFBQTtFQUNBLGlCQUFBO0FDUlI7QURVUTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9ob21lcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC0xKTtcblxuICAgICZfX2ltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICZfX2xpa2Uge1xuICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIHdpZHRoOiAgMi41cmVtO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgJl9fbmFtZSB7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgfVxuXG4gICAgJl9fbG9jYXRpb25cbiAgICAsJl9fcm9vbXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgfVxuXG4gICAgJl9fbG9jYXRpb25cbiAgICAsJl9fcm9vbXNcbiAgICAsJl9fYXJlYVxuICAgICwmX19wcmljZSB7XG5cbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAgMnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2J0biB7XG4gICAgfVxufVxuIiwiLmhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LTEpO1xufVxuLmhvbWVfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLmhvbWVfX2xpa2Uge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi5ob21lX19uYW1lIHtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbn1cbi5ob21lX19sb2NhdGlvbiwgLmhvbWVfX3Jvb21zIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuLmhvbWVfX2xvY2F0aW9uLCAuaG9tZV9fcm9vbXMsIC5ob21lX19hcmVhLCAuaG9tZV9fcHJpY2Uge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4uaG9tZV9fbG9jYXRpb24gc3ZnLCAuaG9tZV9fcm9vbXMgc3ZnLCAuaG9tZV9fYXJlYSBzdmcsIC5ob21lX19wcmljZSBzdmcge1xuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/homes/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/container/homes/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "country", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "location", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "rooms", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "area", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "price", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/container/homes/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/container/homes/homes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/container/homes/homes.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homes {\n  margin: 15rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL2hvbWVzL2hvbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXIvaG9tZXMvaG9tZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvaG9tZXMvaG9tZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXMge1xuICAgIG1hcmdpbjogMTVyZW0gMDtcbn1cbiIsIi5ob21lcyB7XG4gIG1hcmdpbjogMTVyZW0gMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/homes/homes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/container/homes/homes.component.ts ***!
  \****************************************************/
/*! exports provided: HomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesComponent", function() { return HomesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomesComponent = class HomesComponent {
    constructor() {
        this.items = [
            {
                path: "./assets/img/house-6.jpeg",
                name: "Modern Familiy Apartment",
                location: "Italy",
                rooms: "3",
                area: "180",
                price: "600,000"
            },
            {
                path: "./assets/img/house-5.jpeg",
                name: "Majestic Palace House",
                location: "Germany",
                rooms: "18",
                area: "4,230",
                price: "9,500,000"
            },
            {
                path: "./assets/img/house-4.jpeg",
                name: "Large Rustical Villa",
                location: "Portugal",
                rooms: "6",
                area: "480",
                price: "1,950,000"
            },
            {
                path: "./assets/img/house-3.jpeg",
                name: "Cozy Country House",
                location: "UK",
                rooms: "4",
                area: "250",
                price: "850,000"
            },
            {
                path: "./assets/img/house-2.jpeg",
                name: "Modern Glass Villa",
                location: "Canada",
                rooms: "6",
                area: "450",
                price: "2,750,000"
            },
            {
                path: "./assets/img/house-1.jpeg",
                name: "Beautiful Familiy House",
                location: "USA",
                rooms: "5",
                area: "325",
                price: "1,200,000"
            }
        ];
    }
    ngOnInit() {
    }
};
HomesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/homes/homes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homes.component.scss */ "./src/app/container/homes/homes.component.scss")).default]
    })
], HomesComponent);



/***/ }),

/***/ "./src/app/container/realtors/realtors.component.scss":
/*!************************************************************!*\
  !*** ./src/app/container/realtors/realtors.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".realtors {\n  background-color: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL3JlYWx0b3JzL3JlYWx0b3JzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXIvcmVhbHRvcnMvcmVhbHRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyL3JlYWx0b3JzL3JlYWx0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWx0b3JzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuIiwiLnJlYWx0b3JzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/realtors/realtors.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/container/realtors/realtors.component.ts ***!
  \**********************************************************/
/*! exports provided: RealtorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtorsComponent", function() { return RealtorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RealtorsComponent = class RealtorsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RealtorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-realtors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./realtors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/realtors/realtors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./realtors.component.scss */ "./src/app/container/realtors/realtors.component.scss")).default]
    })
], RealtorsComponent);



/***/ }),

/***/ "./src/app/container/sidebar/sidebar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/container/sidebar/sidebar.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  background-color: var(--color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuIiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/container/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/container/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/container/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/container/story-content/story-content.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/container/story-content/story-content.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".story__content {\n  background-color: var(--color-grey-light-1);\n  padding: 6rem 8vw;\n}\n.story__text {\n  font-size: 1.5rem;\n  font-style: italic;\n  margin-bottom: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL3N0b3J5LWNvbnRlbnQvc3RvcnktY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVyL3N0b3J5LWNvbnRlbnQvc3RvcnktY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJDQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvc3RvcnktY29udGVudC9zdG9yeS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3J5IHtcbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC0xKTtcbiAgICAgICAgcGFkZGluZzogNnJlbSA4dnc7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICB9XG59XG4iLCIuc3RvcnlfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LTEpO1xuICBwYWRkaW5nOiA2cmVtIDh2dztcbn1cbi5zdG9yeV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/container/story-content/story-content.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/container/story-content/story-content.component.ts ***!
  \********************************************************************/
/*! exports provided: StoryContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryContentComponent", function() { return StoryContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoryContentComponent = class StoryContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoryContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-content/story-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-content.component.scss */ "./src/app/container/story-content/story-content.component.scss")).default]
    })
], StoryContentComponent);



/***/ }),

/***/ "./src/app/container/story-pictures/story-pictures.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/container/story-pictures/story-pictures.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".story__pictures {\n  background-color: var(--color-primary);\n  background-image: linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url('back.jpg');\n  background-size: cover;\n}\n.story__img--1 {\n  width: 100%;\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n.story__img--2 {\n  width: 115%;\n  z-index: 20;\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0zL3NyYy9hcHAvY29udGFpbmVyL3N0b3J5LXBpY3R1cmVzL3N0b3J5LXBpY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXIvc3RvcnktcGljdHVyZXMvc3RvcnktcGljdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxzQ0FBQTtFQUNBLG9HQUFBO0VBQ0Esc0JBQUE7QUNEUjtBRElJO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0FDRlI7QURLSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9zdG9yeS1waWN0dXJlcy9zdG9yeS1waWN0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeSB7XG5cbiAgICAmX19waWN0dXJlcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgjYzY5OTYzLC41KSxyZ2JhKCNjNjk5NjMsLjUpKSx1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2suanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cblxuICAgICZfX2ltZy0tMSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJyZW0gNXJlbSByZ2JhKCMwMDAsIC4xKTtcbiAgICB9XG5cbiAgICAmX19pbWctLTIge1xuICAgICAgICB3aWR0aDogMTE1JTtcbiAgICAgICAgei1pbmRleDoyMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycmVtIDVyZW0gcmdiYSgjMDAwLCAuMik7XG4gICAgfVxufVxuIiwiLnN0b3J5X19waWN0dXJlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTgsIDE1MywgOTksIDAuNSksIHJnYmEoMTk4LCAxNTMsIDk5LCAwLjUpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zdG9yeV9faW1nLS0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMnJlbSA1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zdG9yeV9faW1nLS0yIHtcbiAgd2lkdGg6IDExNSU7XG4gIHotaW5kZXg6IDIwO1xuICBib3gtc2hhZG93OiAwIDJyZW0gNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/container/story-pictures/story-pictures.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/container/story-pictures/story-pictures.component.ts ***!
  \**********************************************************************/
/*! exports provided: StoryPicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryPicturesComponent", function() { return StoryPicturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoryPicturesComponent = class StoryPicturesComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoryPicturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-story-pictures',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./story-pictures.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/container/story-pictures/story-pictures.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./story-pictures.component.scss */ "./src/app/container/story-pictures/story-pictures.component.scss")).default]
    })
], StoryPicturesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/acdan/Git/Udemy-ACSSSASSFGAM3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map