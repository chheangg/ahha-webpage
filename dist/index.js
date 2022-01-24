/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: whitesmoke;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 16px;\n}\n\n.nav-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 22px;\n}\n\n.nav-content li {\n    display: inline-block;\n    color: white;\n    font-size: 24px;\n    font-family: 'Roboto';\n    font-weight: 300;\n    cursor: pointer;\n}\n\n.line {\n    background-color: white;\n    width: 1px;\n    height: 26px;\n    cursor: none;\n}\n\n.header {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    height: 60vh;\n}\n\n.logo-wrapper {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(1,22,39,0.7);\n    text-align: center;\n}\n\n.logo-wrapper img {\n    width: 20vw;\n}\n\n.main-content {\n    padding: 24px 48px 24px 64px;\n    width: 60vw;\n    height: 100%;   \n    margin: 0 auto;\n    font-family: 'Roboto';\n    background-color: white;\n}\n\n.title {\n    text-align: center;\n    margin-bottom: 24px;\n    padding-bottom: 24px;\n    border-bottom: 0.5px solid rgba(1,22,39,1);\n}\n\n.map-wrapper {\n    padding-left: 12px;\n    margin-left: 12px;\n    border-left: 4px solid rgba(1,22,39,1);\n}\n\n.title {\n    font-size: 64px;\n    font-weight: 600;\n    color: rgba(1,22,39,1);\n}\n\n.main-content h2 span {\n    font-size: 28px;\n    font-weight: 500;\n    color: white;\n    background-color: rgba(1,22,39,1);\n    padding: 8px 12px;\n    border-radius: 12px;\n}\n\n.main-content h2 {\n    margin-bottom: 20px;\n\n}\n\n.main-content p {\n    font-size: 22px;\n    font-weight: 400;\n    margin-left: 12px;\n    margin-bottom: 32px;\n    padding-left: 12px;\n    border-left: 4px solid rgba(1,22,39,1);\n}\n\n.main-content .main-text {\n    font-size: 32px;\n    font-weight: 300;\n    margin-bottom: 48px;\n    padding-bottom: 24px;\n    border-bottom: 0.5px solid rgba(1,22,39,1);\n    border-left: 0;\n}\n\n.second-content {\n    background-color: rgba(1,22,39,1);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 48px;\n}\n\n.menu {\n    color: white;\n    width: 60vw;\n    border-collapse: collapse;  \n    margin: 24px 0;\n}\n\ncaption {\n    text-align: left;\n    margin-bottom: 16px;\n    font-size: 48px;\n    font-weight: 800;\n    font-family: 'Roboto';\n}\n\n.menu tr {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntbody tr {\n    border-bottom: 1px solid white;\n}\n\ntbody tr:nth-child(odd) {\n    margin-top: 4px;\n    font-size: 24px;\n    border-bottom: none;\n}\n\ntbody tr:nth-child(even) {\n    height: 100%;\n    margin-top: -8px;\n    padding-bottom: 12px;\n}\n\ntbody tr:nth-child(even) td {\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.menu-header {\n    border-bottom: 3px solid white;\n}\n\n.menu th {\n    font-family: 'Roboto';\n    font-weight: 600;\n    font-size: 32px;  \n}\n\n.menu td {\n    font-family: 'Roboto';\n    font-weight: 300;\n    font-size: 24px;\n}\n\n.contact-container-wrapper {\n    width: 60vw;\n    margin: 0 auto;\n}\n\n.contact-title {\n    margin-top: 16px;\n    margin-left: 24px;\n    margin-right: 24px;\n    font-family: 'Roboto';\n    font-size: 48px;\n    font-weight: 900;\n    color: rgba(1,22,39,1);\n    border-bottom: 5px solid rgba(1,22,39,1);\n}\n\n.contact-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 36px;\n    padding: 24px;\n}\n\n.contact-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: \twhite;\n    padding: 24px 0;\n    border-radius: 15px;\n    border: 0.25px solid gainsboro;\n}\n\n.name, .position, .number {\n    font-family: 'Roboto';\n}\n\n.name {\n    font-size: 36px;\n    font-weight: 800;\n    padding-bottom: 4px;\n    border-bottom: 0.5px solid black;\n    margin-bottom: 20px;\n}\n\n.position {\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 4px;\n}\n\n.number {\n    font-size: 24px;\n    font-weight: 300;\n}\n\n.footer {\n    color: white;\n    padding: 24px;\n    text-align: center;\n    font-family: 'Roboto';\n    font-weight: 300;\n    background-color: rgba(1,22,39,1);\n    justify-self: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: whitesmoke;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 16px;\n}\n\n.nav-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 22px;\n}\n\n.nav-content li {\n    display: inline-block;\n    color: white;\n    font-size: 24px;\n    font-family: 'Roboto';\n    font-weight: 300;\n    cursor: pointer;\n}\n\n.line {\n    background-color: white;\n    width: 1px;\n    height: 26px;\n    cursor: none;\n}\n\n.header {\n    background-image: url('./background.jpg');\n    height: 60vh;\n}\n\n.logo-wrapper {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(1,22,39,0.7);\n    text-align: center;\n}\n\n.logo-wrapper img {\n    width: 20vw;\n}\n\n.main-content {\n    padding: 24px 48px 24px 64px;\n    width: 60vw;\n    height: 100%;   \n    margin: 0 auto;\n    font-family: 'Roboto';\n    background-color: white;\n}\n\n.title {\n    text-align: center;\n    margin-bottom: 24px;\n    padding-bottom: 24px;\n    border-bottom: 0.5px solid rgba(1,22,39,1);\n}\n\n.map-wrapper {\n    padding-left: 12px;\n    margin-left: 12px;\n    border-left: 4px solid rgba(1,22,39,1);\n}\n\n.title {\n    font-size: 64px;\n    font-weight: 600;\n    color: rgba(1,22,39,1);\n}\n\n.main-content h2 span {\n    font-size: 28px;\n    font-weight: 500;\n    color: white;\n    background-color: rgba(1,22,39,1);\n    padding: 8px 12px;\n    border-radius: 12px;\n}\n\n.main-content h2 {\n    margin-bottom: 20px;\n\n}\n\n.main-content p {\n    font-size: 22px;\n    font-weight: 400;\n    margin-left: 12px;\n    margin-bottom: 32px;\n    padding-left: 12px;\n    border-left: 4px solid rgba(1,22,39,1);\n}\n\n.main-content .main-text {\n    font-size: 32px;\n    font-weight: 300;\n    margin-bottom: 48px;\n    padding-bottom: 24px;\n    border-bottom: 0.5px solid rgba(1,22,39,1);\n    border-left: 0;\n}\n\n.second-content {\n    background-color: rgba(1,22,39,1);\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 48px;\n}\n\n.menu {\n    color: white;\n    width: 60vw;\n    border-collapse: collapse;  \n    margin: 24px 0;\n}\n\ncaption {\n    text-align: left;\n    margin-bottom: 16px;\n    font-size: 48px;\n    font-weight: 800;\n    font-family: 'Roboto';\n}\n\n.menu tr {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntbody tr {\n    border-bottom: 1px solid white;\n}\n\ntbody tr:nth-child(odd) {\n    margin-top: 4px;\n    font-size: 24px;\n    border-bottom: none;\n}\n\ntbody tr:nth-child(even) {\n    height: 100%;\n    margin-top: -8px;\n    padding-bottom: 12px;\n}\n\ntbody tr:nth-child(even) td {\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.menu-header {\n    border-bottom: 3px solid white;\n}\n\n.menu th {\n    font-family: 'Roboto';\n    font-weight: 600;\n    font-size: 32px;  \n}\n\n.menu td {\n    font-family: 'Roboto';\n    font-weight: 300;\n    font-size: 24px;\n}\n\n.contact-container-wrapper {\n    width: 60vw;\n    margin: 0 auto;\n}\n\n.contact-title {\n    margin-top: 16px;\n    margin-left: 24px;\n    margin-right: 24px;\n    font-family: 'Roboto';\n    font-size: 48px;\n    font-weight: 900;\n    color: rgba(1,22,39,1);\n    border-bottom: 5px solid rgba(1,22,39,1);\n}\n\n.contact-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 36px;\n    padding: 24px;\n}\n\n.contact-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: \twhite;\n    padding: 24px 0;\n    border-radius: 15px;\n    border: 0.25px solid gainsboro;\n}\n\n.name, .position, .number {\n    font-family: 'Roboto';\n}\n\n.name {\n    font-size: 36px;\n    font-weight: 800;\n    padding-bottom: 4px;\n    border-bottom: 0.5px solid black;\n    margin-bottom: 20px;\n}\n\n.position {\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 4px;\n}\n\n.number {\n    font-size: 24px;\n    font-weight: 300;\n}\n\n.footer {\n    color: white;\n    padding: 24px;\n    text-align: center;\n    font-family: 'Roboto';\n    font-weight: 300;\n    background-color: rgba(1,22,39,1);\n    justify-self: flex-end;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontPagePost": () => (/* binding */ frontPagePost),
/* harmony export */   "firstMenu": () => (/* binding */ firstMenu),
/* harmony export */   "secondMenu": () => (/* binding */ secondMenu),
/* harmony export */   "thirdMenu": () => (/* binding */ thirdMenu),
/* harmony export */   "fourthMenu": () => (/* binding */ fourthMenu),
/* harmony export */   "fifthMenu": () => (/* binding */ fifthMenu),
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
function Post(title, content, type) {
    return { title, content, type }
}

function Menu(name, price, recipe) {
    return { name, price, recipe }
};

function Contact(name, position, contact) {
    return { name, position, contact }
}

const frontPagePost = [
    Post('A SECOND LIFE!',
    "\"Don't implore your mind to change what was to be, implore your mind to change and change for what's next! this relived version of the project will put to rest of a memory that's bitter.\"",
    'main'),
    Post('WHY AHHA?', 
    "Want a step back from the usual generic food you eat at a conventional food fair? <br>have you tasted a food that you would remember to want to taste for next school fair? <br>No? <br><br>Come here then!",
    'sub'),
    Post('WHEN\'S AHHA?',
    "We'll be hosting the fair for two days from 8:00 A.M to 4:30 P.M! Be sure to check us out at Western International School, Stadium Campus on the 1st and 2nd of February.",
    'sub'), Post('WHERE\'S AHHA EXACTLY?','','sub')
];

const firstMenu =  [
    Menu('Kimchi Fried Rice and Fried Gyoza set.', 
    '10000៛', 
    'Kimchi fried rice, Fried Gyoza set, and Beverages'),
    Menu('Teriyaki Chicken with rice set.',
    '10000៛',
    'Teriyaki Chicken, Kimchi/Pickled raddish, and Beverages'),
    Menu('Pasta Set.',
    '10000៛',
    'Mou\'s special pasta, Hasbrown. and Beverages'),
]

const secondMenu = [
    Menu('Kimchi Onigiri (cheese is optional)',
    '5000៛',
    'Kimchi, Rice, Egg/Spam/Ham'),
    Menu('Teriyaki Chicken Rice',
    '6500៛',
    'Chicken, Rice, Special sauce'),
    Menu('Mou\'s special pasta (Shrimp is optional)',
    '6500៛',
    'Special recipe'),
    Menu('Quesadilla',
    '5000៛',
    'Tortilla, Vegetables, Cheese, Meats'),
]

const thirdMenu = [
    Menu('Fried Gyoza (4 pieces)',
    '5000៛',
    'Pork/Shrimp dumping'),
    Menu('Cheese bites (6 pieces)',
    '2500៛',
    'Cheese blocks'),
    Menu('Chicken nuggets (4 pieces)',
    '5000៛',
    'Chicken breast, special mixture and spices'),
    Menu('BBQ Skweres (2 sticks)',
    '3500៛',
    'Beet Bell peppers, Onion, and stuffs'),
    Menu('Hashbrown (1 piece)',
    '2500៛',
    'Potato, special mixture, and spices'),
]

const fourthMenu = [
    Menu('Fruity smoothie',
    '7500៛',
    'Banana/Strawberry/Blueberry'),
    Menu('Chia seeds drink',
    '9000៛',
    'Chia seeds'),
    Menu('Sparkling Chia Lemonade with berries',
    '4500៛',
    'Strawberry/Blueberry/Kiwi/Mixed'),
    Menu('Beverages',
    '-៛',
    'Dasani/Coke/Sprite'),
]

const fifthMenu = [
    Menu('S\'more',
    '2000៛',
    'Marshmellow, crackers, choclate'),
    Menu('Shaved ice',
    '2500៛',
    'Green/red bean, ice, syrup'),
    Menu('Candied fruits',
    '2000៛',
    'Strawberry/Apple/Banana with caramel or chocolate.'),
    Menu('Matcha cake',
    '5000៛',
    'Special recipe (limited edition)'),
]

const contacts = [
    Contact('Chheang', 'CEO', '069980981'),
    Contact('Puthyrath', 'CEO', 'Prey'),
    Contact('Malin', 'CEO', '0703xx2xx'),
    Contact('Mary', 'CEO', '0103XX2XX'),
    Contact('Monah', 'CEO', '0986XX1XX'),
    Contact('Erissa', 'CEO', '0939XX7XX'),
    Contact('Ponita', 'CEO', '0103XX2XX'),
    Contact('Thika', 'CEO', '0103XX2XX'),
]


/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
// This function will check for the tab that is being passed and load the content
// accordingly to the current tab the user is in.



function mainLoad(tab, contents) {
    const contentHolder = document.getElementById('content');
    contentHolder.textContent = '';

    let currentTab;

    if (currentTab === tab) {
        return true;
    }

    currentTab = tab;

    if (tab === 'Home') {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('main-content');

        contentHolder.appendChild(contentWrapper);
        contentLoader.loadPost(contents);
        contentLoader.loadMap();
    }

    if (tab === 'Order') {
        let tableContainer = document.createElement('div');
        tableContainer.classList.add('second-content');
        contentHolder.appendChild(tableContainer);

        contentLoader.loadTableContent(contents);
    }

    if (tab === 'Contact') {
        let title = document.createElement('p');
        let contactContainerWrapper = document.createElement('div');
        let contactContainer = document.createElement('div');

        title.classList.add('contact-title');
        contactContainer.classList.add('contact-wrapper');
        contactContainerWrapper.classList.add('contact-container-wrapper');

        title.textContent = 'Meet our teams...'

        contactContainerWrapper.appendChild(title);
        contactContainerWrapper.appendChild(contactContainer);
        contentHolder.appendChild(contactContainerWrapper);

        contentLoader.loadContact(contents);
    }
    
}


// This content loader module will give the function the ability to load the type of post
// according to the tab presented above.

const contentLoader = (function() {
    // For front page post blog-ish type.
    function unloadContent(content) {
        content.textContent = '';
    }
    function loadPost(contents) {
        contents.forEach((content) => {
            const contentWrapper = document.querySelector('.main-content');
            if ( content['type'] === 'main' ) {
                let h1 = document.createElement('h1');
                let p = document.createElement('p');

                h1.classList.add('title');
                p.classList.add('main-text');

                h1.textContent = content['title'];
                p.textContent = content['content'];

                contentWrapper.appendChild(h1)
                contentWrapper.appendChild(p)
            } else if ( content['type'] === 'sub') {
                let span = document.createElement('span');
                let h2 = document.createElement('h2');

                span.textContent = content['title'];

                h2.appendChild(span);
                contentWrapper.appendChild(h2)
                if (content['content']) {
                    let p = document.createElement('p');
                    p.innerHTML = content['content'];
                    contentWrapper.appendChild(p)
                }
            }
        })
    }

    // Load iframe map
    function loadMap() {
        const contentWrapper = document.querySelector('.main-content');
        let mapWrapper = document.createElement('div');
        let iframeMap = document.createElement('iframe');

        mapWrapper.classList.add('map-wrapper');
        iframeMap.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.11711592949!2d104.88549924033948!3d11.583470858516003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519e61e7251b%3A0x308b0c2e593ce8b8!2sWestern%20International%20School%20-%20Stadium%20Campus!5e0!3m2!1sen!2skh!4v1642911058871!5m2!1sen!2skh");
        iframeMap.setAttribute('width', '600');
        iframeMap.setAttribute('height', '450');
        iframeMap.setAttribute('style', 'border:0');
        iframeMap.setAttribute('allowfullscreen', "");
        iframeMap.setAttribute('loading', 'lazy');

        mapWrapper.appendChild(iframeMap);
        contentWrapper.appendChild(mapWrapper);
    }

    // Load table content
    function loadTableContent(category) {
        category.forEach((contents) => {
            let tableWrapper = document.createElement('table');
            let tableTitle = document.createElement('caption');
            let tableHeader = document.createElement('thead');
            let tableBody = document.createElement('tbody');
            let rowHeader = document.createElement('tr');
            let headerData;

            tableWrapper.classList.add('menu');
            
            tableWrapper.appendChild(tableTitle)

            if ( category[0] === contents ) {
                tableTitle.textContent = 'Valueable Sets!';
                headerData = ['Sets', 'Price'];
            } else if ( category[1] === contents ) {
                tableTitle.textContent = 'Meals of the day!';
                headerData = [ 'Meals', 'Price']
            } else if ( category[2] === contents ) {
                tableTitle.textContent = 'Satiate your appetite';
                headerData = [ 'Appetizers', 'Price']
            } else if ( category[3] === contents) {
                tableTitle.textContent = 'Lactated by Puthyrath :D';
                headerData = [ 'Drinks', 'Price']
            } else if ( category[4] === contents) {
                tableTitle.textContent = 'Always room for it...';
                headerData = [ 'Desserts', 'Price']
            }

            headerData.forEach((value) => {
                let headerContent = document.createElement('th');
                headerContent.textContent = value;

                rowHeader.appendChild(headerContent);
            })

            rowHeader.classList.add('menu-header');

            tableHeader.appendChild(rowHeader);
            tableWrapper.appendChild(tableHeader);

            contents.forEach((content) => {
                let firstRow = document.createElement('tr');
                let secondRow = document.createElement('tr');

                for ( let value in content ) {
                    let data = document.createElement('td');
                    if ( value === 'name' || value === 'price' ) {
                        data.textContent = content[value];
                        firstRow.appendChild(data);
                    } else if ( value === 'recipe' ) {
                        data.textContent = content[value];
                        secondRow.appendChild(data);
                    }
                }
                
                tableBody.appendChild(firstRow);
                tableBody.appendChild(secondRow);
            })

            tableWrapper.appendChild(tableBody);
            document.querySelector('.second-content').appendChild(tableWrapper);
        })
    }

    function loadContact(contents) {
        contents.forEach((content) => {
            let contactWrapper = document.querySelector('.contact-wrapper')
            let contactBox = document.createElement('span');
            let name = document.createElement('p');
            let position = document.createElement('p');
            let number = document.createElement('p');

            contactBox.classList.add('contact-box');
            name.classList.add('name');
            position.classList.add('position');
            number.classList.add('number');

            name.textContent = content['name'];
            position.textContent = content['position'];
            number.textContent = content['contact'];

            contactBox.appendChild(name);
            contactBox.appendChild(position);
            contactBox.appendChild(number);
            contactWrapper.appendChild(contactBox);
        })
    }

    return {loadPost, unloadContent, loadTableContent, loadContact, loadMap};
})();




/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "996fa0f575c267242b7c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.jpg */ "./src/background.jpg");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");





const navTab = ['Home', 'Order', 'Contact'];

// initial page load will present the user the front page.
(0,_pageload__WEBPACK_IMPORTED_MODULE_3__.mainLoad)('Home', _config__WEBPACK_IMPORTED_MODULE_2__.frontPagePost);

// load the list of navigations that is presented in navtab, add a divider in between.
const navFunction = (function() {
    function loadNav(btn) {
        let navBar = document.createElement('nav');
        let navList = document.createElement('ul');
        let navContent = btn;
        
        for ( let i = 0; i < navContent.length; i++) {
            let navBox = document.createElement('li');
            navBox.classList.add('tab')
            navBox.textContent = navContent[i];
            navList.appendChild(navBox);

            if (!(navContent.length-1 === i)) {
                let navDivider = document.createElement('li');
                navDivider.classList.add('line');
                navList.appendChild(navDivider);
            }
        }

        navList.classList.add('nav-content')
        navBar.classList.add('nav-bar');

        navBar.appendChild(navList);
        document.body.appendChild(navBar);
    }
    return {loadNav};
})();

//load nav at all time.
navFunction.loadNav(navTab);

document.querySelectorAll('.tab').forEach((tabs) => {
    tabs.addEventListener('click', (tab) => {
        if ( tab.target.textContent === 'Home') {
            (0,_pageload__WEBPACK_IMPORTED_MODULE_3__.mainLoad)('Home', _config__WEBPACK_IMPORTED_MODULE_2__.frontPagePost);
        } else if ( tab.target.textContent === 'Order' ) {
            (0,_pageload__WEBPACK_IMPORTED_MODULE_3__.mainLoad)('Order', [_config__WEBPACK_IMPORTED_MODULE_2__.firstMenu, _config__WEBPACK_IMPORTED_MODULE_2__.secondMenu, _config__WEBPACK_IMPORTED_MODULE_2__.thirdMenu, _config__WEBPACK_IMPORTED_MODULE_2__.fourthMenu, _config__WEBPACK_IMPORTED_MODULE_2__.fifthMenu]);
        } else if ( tab.target.textContent === 'Contact' ) {
            (0,_pageload__WEBPACK_IMPORTED_MODULE_3__.mainLoad)('Contact', _config__WEBPACK_IMPORTED_MODULE_2__.contacts)
        }
    })
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0RBQWtE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YUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7O0FBRW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3TUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDSztBQUNpRjtBQUNyRTs7QUFFdEM7O0FBRUE7QUFDQSxtREFBUSxTQUFTLGtEQUFhOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFRLFNBQVMsa0RBQWE7QUFDMUMsVUFBVTtBQUNWLFlBQVksbURBQVEsV0FBVyw4Q0FBUyxFQUFFLCtDQUFVLEVBQUUsOENBQVMsRUFBRSwrQ0FBVSxFQUFFLDhDQUFTO0FBQ3RGLFVBQVU7QUFDVixZQUFZLG1EQUFRLFlBQVksNkNBQVE7QUFDeEM7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDE2cHg7XFxufVxcblxcbi5uYXYtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMjJweDtcXG59XFxuXFxuLm5hdi1jb250ZW50IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4ubG9nby13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDIyLDM5LDAuNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28td3JhcHBlciBpbWcge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAyNHB4IDY0cHg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDEsMjIsMzksMSk7XFxufVxcblxcbi5tYXAtd3JhcHBlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiYSgxLDIyLDM5LDEpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG59XFxuXFxuLm1haW4tY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMSwyMiwzOSwxKTtcXG59XFxuXFxuLm1haW4tY29udGVudCAubWFpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgxLDIyLDM5LDEpO1xcbiAgICBib3JkZXItbGVmdDogMDtcXG59XFxuXFxuLnNlY29uZC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDIyLDM5LDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICBcXG4gICAgbWFyZ2luOiAyNHB4IDA7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuLm1lbnUgdHIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRib2R5IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1lbnUgdGgge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMzJweDsgIFxcbn1cXG5cXG4ubWVudSB0ZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHJnYmEoMSwyMiwzOSwxKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMSwyMiwzOSwxKTtcXG59XFxuXFxuLmNvbnRhY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAzNnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4uY29udGFjdC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHR3aGl0ZTtcXG4gICAgcGFkZGluZzogMjRweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBnYWluc2Jvcm87XFxufVxcblxcbi5uYW1lLCAucG9zaXRpb24sIC5udW1iZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnBvc2l0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5udW1iZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVB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Q2YsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMTZweDtcXG59XFxuXFxuLm5hdi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAyMnB4O1xcbn1cXG5cXG4ubmF2LWNvbnRlbnQgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4ubG9nby13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDIyLDM5LDAuNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28td3JhcHBlciBpbWcge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDI0cHggNDhweCAyNHB4IDY0cHg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDEsMjIsMzksMSk7XFxufVxcblxcbi5tYXAtd3JhcHBlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiYSgxLDIyLDM5LDEpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgaDIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG59XFxuXFxuLm1haW4tY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYmEoMSwyMiwzOSwxKTtcXG59XFxuXFxuLm1haW4tY29udGVudCAubWFpbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgxLDIyLDM5LDEpO1xcbiAgICBib3JkZXItbGVmdDogMDtcXG59XFxuXFxuLnNlY29uZC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDIyLDM5LDEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICBcXG4gICAgbWFyZ2luOiAyNHB4IDA7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG59XFxuXFxuLm1lbnUgdHIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRib2R5IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1lbnUgdGgge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMzJweDsgIFxcbn1cXG5cXG4ubWVudSB0ZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHJnYmEoMSwyMiwzOSwxKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMSwyMiwzOSwxKTtcXG59XFxuXFxuLmNvbnRhY3Qtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAzNnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4uY29udGFjdC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcXHR3aGl0ZTtcXG4gICAgcGFkZGluZzogMjRweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBnYWluc2Jvcm87XFxufVxcblxcbi5uYW1lLCAucG9zaXRpb24sIC5udW1iZXIge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnBvc2l0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5udW1iZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsMjIsMzksMSk7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBQb3N0KHRpdGxlLCBjb250ZW50LCB0eXBlKSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUgfVxufVxuXG5mdW5jdGlvbiBNZW51KG5hbWUsIHByaWNlLCByZWNpcGUpIHtcbiAgICByZXR1cm4geyBuYW1lLCBwcmljZSwgcmVjaXBlIH1cbn07XG5cbmZ1bmN0aW9uIENvbnRhY3QobmFtZSwgcG9zaXRpb24sIGNvbnRhY3QpIHtcbiAgICByZXR1cm4geyBuYW1lLCBwb3NpdGlvbiwgY29udGFjdCB9XG59XG5cbmNvbnN0IGZyb250UGFnZVBvc3QgPSBbXG4gICAgUG9zdCgnQSBTRUNPTkQgTElGRSEnLFxuICAgIFwiXFxcIkRvbid0IGltcGxvcmUgeW91ciBtaW5kIHRvIGNoYW5nZSB3aGF0IHdhcyB0byBiZSwgaW1wbG9yZSB5b3VyIG1pbmQgdG8gY2hhbmdlIGFuZCBjaGFuZ2UgZm9yIHdoYXQncyBuZXh0ISB0aGlzIHJlbGl2ZWQgdmVyc2lvbiBvZiB0aGUgcHJvamVjdCB3aWxsIHB1dCB0byByZXN0IG9mIGEgbWVtb3J5IHRoYXQncyBiaXR0ZXIuXFxcIlwiLFxuICAgICdtYWluJyksXG4gICAgUG9zdCgnV0hZIEFISEE/JywgXG4gICAgXCJXYW50IGEgc3RlcCBiYWNrIGZyb20gdGhlIHVzdWFsIGdlbmVyaWMgZm9vZCB5b3UgZWF0IGF0IGEgY29udmVudGlvbmFsIGZvb2QgZmFpcj8gPGJyPmhhdmUgeW91IHRhc3RlZCBhIGZvb2QgdGhhdCB5b3Ugd291bGQgcmVtZW1iZXIgdG8gd2FudCB0byB0YXN0ZSBmb3IgbmV4dCBzY2hvb2wgZmFpcj8gPGJyPk5vPyA8YnI+PGJyPkNvbWUgaGVyZSB0aGVuIVwiLFxuICAgICdzdWInKSxcbiAgICBQb3N0KCdXSEVOXFwnUyBBSEhBPycsXG4gICAgXCJXZSdsbCBiZSBob3N0aW5nIHRoZSBmYWlyIGZvciB0d28gZGF5cyBmcm9tIDg6MDAgQS5NIHRvIDQ6MzAgUC5NISBCZSBzdXJlIHRvIGNoZWNrIHVzIG91dCBhdCBXZXN0ZXJuIEludGVybmF0aW9uYWwgU2Nob29sLCBTdGFkaXVtIENhbXB1cyBvbiB0aGUgMXN0IGFuZCAybmQgb2YgRmVicnVhcnkuXCIsXG4gICAgJ3N1YicpLCBQb3N0KCdXSEVSRVxcJ1MgQUhIQSBFWEFDVExZPycsJycsJ3N1YicpXG5dO1xuXG5jb25zdCBmaXJzdE1lbnUgPSAgW1xuICAgIE1lbnUoJ0tpbWNoaSBGcmllZCBSaWNlIGFuZCBGcmllZCBHeW96YSBzZXQuJywgXG4gICAgJzEwMDAw4Z+bJywgXG4gICAgJ0tpbWNoaSBmcmllZCByaWNlLCBGcmllZCBHeW96YSBzZXQsIGFuZCBCZXZlcmFnZXMnKSxcbiAgICBNZW51KCdUZXJpeWFraSBDaGlja2VuIHdpdGggcmljZSBzZXQuJyxcbiAgICAnMTAwMDDhn5snLFxuICAgICdUZXJpeWFraSBDaGlja2VuLCBLaW1jaGkvUGlja2xlZCByYWRkaXNoLCBhbmQgQmV2ZXJhZ2VzJyksXG4gICAgTWVudSgnUGFzdGEgU2V0LicsXG4gICAgJzEwMDAw4Z+bJyxcbiAgICAnTW91XFwncyBzcGVjaWFsIHBhc3RhLCBIYXNicm93bi4gYW5kIEJldmVyYWdlcycpLFxuXVxuXG5jb25zdCBzZWNvbmRNZW51ID0gW1xuICAgIE1lbnUoJ0tpbWNoaSBPbmlnaXJpIChjaGVlc2UgaXMgb3B0aW9uYWwpJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ0tpbWNoaSwgUmljZSwgRWdnL1NwYW0vSGFtJyksXG4gICAgTWVudSgnVGVyaXlha2kgQ2hpY2tlbiBSaWNlJyxcbiAgICAnNjUwMOGfmycsXG4gICAgJ0NoaWNrZW4sIFJpY2UsIFNwZWNpYWwgc2F1Y2UnKSxcbiAgICBNZW51KCdNb3VcXCdzIHNwZWNpYWwgcGFzdGEgKFNocmltcCBpcyBvcHRpb25hbCknLFxuICAgICc2NTAw4Z+bJyxcbiAgICAnU3BlY2lhbCByZWNpcGUnKSxcbiAgICBNZW51KCdRdWVzYWRpbGxhJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ1RvcnRpbGxhLCBWZWdldGFibGVzLCBDaGVlc2UsIE1lYXRzJyksXG5dXG5cbmNvbnN0IHRoaXJkTWVudSA9IFtcbiAgICBNZW51KCdGcmllZCBHeW96YSAoNCBwaWVjZXMpJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ1BvcmsvU2hyaW1wIGR1bXBpbmcnKSxcbiAgICBNZW51KCdDaGVlc2UgYml0ZXMgKDYgcGllY2VzKScsXG4gICAgJzI1MDDhn5snLFxuICAgICdDaGVlc2UgYmxvY2tzJyksXG4gICAgTWVudSgnQ2hpY2tlbiBudWdnZXRzICg0IHBpZWNlcyknLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnQ2hpY2tlbiBicmVhc3QsIHNwZWNpYWwgbWl4dHVyZSBhbmQgc3BpY2VzJyksXG4gICAgTWVudSgnQkJRIFNrd2VyZXMgKDIgc3RpY2tzKScsXG4gICAgJzM1MDDhn5snLFxuICAgICdCZWV0IEJlbGwgcGVwcGVycywgT25pb24sIGFuZCBzdHVmZnMnKSxcbiAgICBNZW51KCdIYXNoYnJvd24gKDEgcGllY2UpJyxcbiAgICAnMjUwMOGfmycsXG4gICAgJ1BvdGF0bywgc3BlY2lhbCBtaXh0dXJlLCBhbmQgc3BpY2VzJyksXG5dXG5cbmNvbnN0IGZvdXJ0aE1lbnUgPSBbXG4gICAgTWVudSgnRnJ1aXR5IHNtb290aGllJyxcbiAgICAnNzUwMOGfmycsXG4gICAgJ0JhbmFuYS9TdHJhd2JlcnJ5L0JsdWViZXJyeScpLFxuICAgIE1lbnUoJ0NoaWEgc2VlZHMgZHJpbmsnLFxuICAgICc5MDAw4Z+bJyxcbiAgICAnQ2hpYSBzZWVkcycpLFxuICAgIE1lbnUoJ1NwYXJrbGluZyBDaGlhIExlbW9uYWRlIHdpdGggYmVycmllcycsXG4gICAgJzQ1MDDhn5snLFxuICAgICdTdHJhd2JlcnJ5L0JsdWViZXJyeS9LaXdpL01peGVkJyksXG4gICAgTWVudSgnQmV2ZXJhZ2VzJyxcbiAgICAnLeGfmycsXG4gICAgJ0Rhc2FuaS9Db2tlL1Nwcml0ZScpLFxuXVxuXG5jb25zdCBmaWZ0aE1lbnUgPSBbXG4gICAgTWVudSgnU1xcJ21vcmUnLFxuICAgICcyMDAw4Z+bJyxcbiAgICAnTWFyc2htZWxsb3csIGNyYWNrZXJzLCBjaG9jbGF0ZScpLFxuICAgIE1lbnUoJ1NoYXZlZCBpY2UnLFxuICAgICcyNTAw4Z+bJyxcbiAgICAnR3JlZW4vcmVkIGJlYW4sIGljZSwgc3lydXAnKSxcbiAgICBNZW51KCdDYW5kaWVkIGZydWl0cycsXG4gICAgJzIwMDDhn5snLFxuICAgICdTdHJhd2JlcnJ5L0FwcGxlL0JhbmFuYSB3aXRoIGNhcmFtZWwgb3IgY2hvY29sYXRlLicpLFxuICAgIE1lbnUoJ01hdGNoYSBjYWtlJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ1NwZWNpYWwgcmVjaXBlIChsaW1pdGVkIGVkaXRpb24pJyksXG5dXG5cbmNvbnN0IGNvbnRhY3RzID0gW1xuICAgIENvbnRhY3QoJ0NoaGVhbmcnLCAnQ0VPJywgJzA2OTk4MDk4MScpLFxuICAgIENvbnRhY3QoJ1B1dGh5cmF0aCcsICdDRU8nLCAnUHJleScpLFxuICAgIENvbnRhY3QoJ01hbGluJywgJ0NFTycsICcwNzAzeHgyeHgnKSxcbiAgICBDb250YWN0KCdNYXJ5JywgJ0NFTycsICcwMTAzWFgyWFgnKSxcbiAgICBDb250YWN0KCdNb25haCcsICdDRU8nLCAnMDk4NlhYMVhYJyksXG4gICAgQ29udGFjdCgnRXJpc3NhJywgJ0NFTycsICcwOTM5WFg3WFgnKSxcbiAgICBDb250YWN0KCdQb25pdGEnLCAnQ0VPJywgJzAxMDNYWDJYWCcpLFxuICAgIENvbnRhY3QoJ1RoaWthJywgJ0NFTycsICcwMTAzWFgyWFgnKSxcbl1cbmV4cG9ydCB7ZnJvbnRQYWdlUG9zdCwgZmlyc3RNZW51LCBzZWNvbmRNZW51LCB0aGlyZE1lbnUsIGZvdXJ0aE1lbnUsIGZpZnRoTWVudSwgY29udGFjdHN9OyIsIi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBjaGVjayBmb3IgdGhlIHRhYiB0aGF0IGlzIGJlaW5nIHBhc3NlZCBhbmQgbG9hZCB0aGUgY29udGVudFxuLy8gYWNjb3JkaW5nbHkgdG8gdGhlIGN1cnJlbnQgdGFiIHRoZSB1c2VyIGlzIGluLlxuXG5pbXBvcnQgeyBjb250YWN0cyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5mdW5jdGlvbiBtYWluTG9hZCh0YWIsIGNvbnRlbnRzKSB7XG4gICAgY29uc3QgY29udGVudEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudEhvbGRlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGN1cnJlbnRUYWI7XG5cbiAgICBpZiAoY3VycmVudFRhYiA9PT0gdGFiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYWIgPSB0YWI7XG5cbiAgICBpZiAodGFiID09PSAnSG9tZScpIHtcbiAgICAgICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gICAgICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuICAgICAgICBjb250ZW50TG9hZGVyLmxvYWRQb3N0KGNvbnRlbnRzKTtcbiAgICAgICAgY29udGVudExvYWRlci5sb2FkTWFwKCk7XG4gICAgfVxuXG4gICAgaWYgKHRhYiA9PT0gJ09yZGVyJykge1xuICAgICAgICBsZXQgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZCh0YWJsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29udGVudExvYWRlci5sb2FkVGFibGVDb250ZW50KGNvbnRlbnRzKTtcbiAgICB9XG5cbiAgICBpZiAodGFiID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29udGFjdENvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyLXdyYXBwZXInKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZWV0IG91ciB0ZWFtcy4uLidcblxuICAgICAgICBjb250YWN0Q29udGFpbmVyV3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXJXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICAgICAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXJXcmFwcGVyKTtcblxuICAgICAgICBjb250ZW50TG9hZGVyLmxvYWRDb250YWN0KGNvbnRlbnRzKTtcbiAgICB9XG4gICAgXG59XG5cblxuLy8gVGhpcyBjb250ZW50IGxvYWRlciBtb2R1bGUgd2lsbCBnaXZlIHRoZSBmdW5jdGlvbiB0aGUgYWJpbGl0eSB0byBsb2FkIHRoZSB0eXBlIG9mIHBvc3Rcbi8vIGFjY29yZGluZyB0byB0aGUgdGFiIHByZXNlbnRlZCBhYm92ZS5cblxuY29uc3QgY29udGVudExvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBGb3IgZnJvbnQgcGFnZSBwb3N0IGJsb2ctaXNoIHR5cGUuXG4gICAgZnVuY3Rpb24gdW5sb2FkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFBvc3QoY29udGVudHMpIHtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIGNvbnRlbnRbJ3R5cGUnXSA9PT0gJ21haW4nICkge1xuICAgICAgICAgICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnbWFpbi10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ2NvbnRlbnQnXTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjb250ZW50Wyd0eXBlJ10gPT09ICdzdWInKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb250ZW50Wyd0aXRsZSddO1xuXG4gICAgICAgICAgICAgICAgaDIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRbJ2NvbnRlbnQnXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBjb250ZW50Wydjb250ZW50J107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExvYWQgaWZyYW1lIG1hcFxuICAgIGZ1bmN0aW9uIGxvYWRNYXAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgICAgICBsZXQgbWFwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaWZyYW1lTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgICAgICAgbWFwV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYXAtd3JhcHBlcicpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdzcmMnLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDc4MTcuMTE3MTE1OTI5NDkhMmQxMDQuODg1NDk5MjQwMzM5NDghM2QxMS41ODM0NzA4NTg1MTYwMDMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDMxMDk1MTllNjFlNzI1MWIlM0EweDMwOGIwYzJlNTkzY2U4YjghMnNXZXN0ZXJuJTIwSW50ZXJuYXRpb25hbCUyMFNjaG9vbCUyMC0lMjBTdGFkaXVtJTIwQ2FtcHVzITVlMCEzbTIhMXNlbiEyc2toITR2MTY0MjkxMTA1ODg3MSE1bTIhMXNlbiEyc2toXCIpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc2MDAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzQ1MCcpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6MCcpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCBcIlwiKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdsYXp5Jyk7XG5cbiAgICAgICAgbWFwV3JhcHBlci5hcHBlbmRDaGlsZChpZnJhbWVNYXApO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChtYXBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIHRhYmxlIGNvbnRlbnRcbiAgICBmdW5jdGlvbiBsb2FkVGFibGVDb250ZW50KGNhdGVnb3J5KSB7XG4gICAgICAgIGNhdGVnb3J5LmZvckVhY2goKGNvbnRlbnRzKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFibGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgICAgIGxldCB0YWJsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FwdGlvbicpO1xuICAgICAgICAgICAgbGV0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICAgICAgICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICAgICAgbGV0IHJvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBsZXQgaGVhZGVyRGF0YTtcblxuICAgICAgICAgICAgdGFibGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFibGVXcmFwcGVyLmFwcGVuZENoaWxkKHRhYmxlVGl0bGUpXG5cbiAgICAgICAgICAgIGlmICggY2F0ZWdvcnlbMF0gPT09IGNvbnRlbnRzICkge1xuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGUudGV4dENvbnRlbnQgPSAnVmFsdWVhYmxlIFNldHMhJztcbiAgICAgICAgICAgICAgICBoZWFkZXJEYXRhID0gWydTZXRzJywgJ1ByaWNlJ107XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjYXRlZ29yeVsxXSA9PT0gY29udGVudHMgKSB7XG4gICAgICAgICAgICAgICAgdGFibGVUaXRsZS50ZXh0Q29udGVudCA9ICdNZWFscyBvZiB0aGUgZGF5ISc7XG4gICAgICAgICAgICAgICAgaGVhZGVyRGF0YSA9IFsgJ01lYWxzJywgJ1ByaWNlJ11cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNhdGVnb3J5WzJdID09PSBjb250ZW50cyApIHtcbiAgICAgICAgICAgICAgICB0YWJsZVRpdGxlLnRleHRDb250ZW50ID0gJ1NhdGlhdGUgeW91ciBhcHBldGl0ZSc7XG4gICAgICAgICAgICAgICAgaGVhZGVyRGF0YSA9IFsgJ0FwcGV0aXplcnMnLCAnUHJpY2UnXVxuICAgICAgICAgICAgfSBlbHNlIGlmICggY2F0ZWdvcnlbM10gPT09IGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGFibGVUaXRsZS50ZXh0Q29udGVudCA9ICdMYWN0YXRlZCBieSBQdXRoeXJhdGggOkQnO1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgPSBbICdEcmlua3MnLCAnUHJpY2UnXVxuICAgICAgICAgICAgfSBlbHNlIGlmICggY2F0ZWdvcnlbNF0gPT09IGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGFibGVUaXRsZS50ZXh0Q29udGVudCA9ICdBbHdheXMgcm9vbSBmb3IgaXQuLi4nO1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgPSBbICdEZXNzZXJ0cycsICdQcmljZSddXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlckRhdGEuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgaGVhZGVyQ29udGVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgcm93SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG5cbiAgICAgICAgICAgIHRhYmxlSGVhZGVyLmFwcGVuZENoaWxkKHJvd0hlYWRlcik7XG4gICAgICAgICAgICB0YWJsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXIpO1xuXG4gICAgICAgICAgICBjb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgICAgICAgICAgICAgIGZvciAoIGxldCB2YWx1ZSBpbiBjb250ZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdmFsdWUgPT09ICduYW1lJyB8fCB2YWx1ZSA9PT0gJ3ByaWNlJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dENvbnRlbnQgPSBjb250ZW50W3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0Um93LmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB2YWx1ZSA9PT0gJ3JlY2lwZScgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRDb250ZW50ID0gY29udGVudFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRSb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGZpcnN0Um93KTtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoc2Vjb25kUm93KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRhYmxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1jb250ZW50JykuYXBwZW5kQ2hpbGQodGFibGVXcmFwcGVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQ29udGFjdChjb250ZW50cykge1xuICAgICAgICBjb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29udGFjdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC13cmFwcGVyJylcbiAgICAgICAgICAgIGxldCBjb250YWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBjb250YWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYm94Jyk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uJyk7XG4gICAgICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG5cbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBjb250ZW50WyduYW1lJ107XG4gICAgICAgICAgICBwb3NpdGlvbi50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ3Bvc2l0aW9uJ107XG4gICAgICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBjb250ZW50Wydjb250YWN0J107XG5cbiAgICAgICAgICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCb3gpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7bG9hZFBvc3QsIHVubG9hZENvbnRlbnQsIGxvYWRUYWJsZUNvbnRlbnQsIGxvYWRDb250YWN0LCBsb2FkTWFwfTtcbn0pKCk7XG5cblxuZXhwb3J0IHttYWluTG9hZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IHsgZnJvbnRQYWdlUG9zdCwgZmlyc3RNZW51LCBzZWNvbmRNZW51LCB0aGlyZE1lbnUsIGZvdXJ0aE1lbnUsIGZpZnRoTWVudSwgY29udGFjdHN9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IG1haW5Mb2FkIH0gZnJvbSAnLi9wYWdlbG9hZCc7XG5cbmNvbnN0IG5hdlRhYiA9IFsnSG9tZScsICdPcmRlcicsICdDb250YWN0J107XG5cbi8vIGluaXRpYWwgcGFnZSBsb2FkIHdpbGwgcHJlc2VudCB0aGUgdXNlciB0aGUgZnJvbnQgcGFnZS5cbm1haW5Mb2FkKCdIb21lJywgZnJvbnRQYWdlUG9zdCk7XG5cbi8vIGxvYWQgdGhlIGxpc3Qgb2YgbmF2aWdhdGlvbnMgdGhhdCBpcyBwcmVzZW50ZWQgaW4gbmF2dGFiLCBhZGQgYSBkaXZpZGVyIGluIGJldHdlZW4uXG5jb25zdCBuYXZGdW5jdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBsb2FkTmF2KGJ0bikge1xuICAgICAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIGxldCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGV0IG5hdkNvbnRlbnQgPSBidG47XG4gICAgICAgIFxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBuYXZDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmF2Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG5hdkJveC5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgICAgICAgICAgbmF2Qm94LnRleHRDb250ZW50ID0gbmF2Q29udGVudFtpXTtcbiAgICAgICAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2Qm94KTtcblxuICAgICAgICAgICAgaWYgKCEobmF2Q29udGVudC5sZW5ndGgtMSA9PT0gaSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmF2RGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbmF2RGl2aWRlci5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XG4gICAgICAgICAgICAgICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZEaXZpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWNvbnRlbnQnKVxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIH1cbiAgICByZXR1cm4ge2xvYWROYXZ9O1xufSkoKTtcblxuLy9sb2FkIG5hdiBhdCBhbGwgdGltZS5cbm5hdkZ1bmN0aW9uLmxvYWROYXYobmF2VGFiKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpLmZvckVhY2goKHRhYnMpID0+IHtcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHRhYikgPT4ge1xuICAgICAgICBpZiAoIHRhYi50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgbWFpbkxvYWQoJ0hvbWUnLCBmcm9udFBhZ2VQb3N0KTtcbiAgICAgICAgfSBlbHNlIGlmICggdGFiLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ09yZGVyJyApIHtcbiAgICAgICAgICAgIG1haW5Mb2FkKCdPcmRlcicsIFtmaXJzdE1lbnUsIHNlY29uZE1lbnUsIHRoaXJkTWVudSwgZm91cnRoTWVudSwgZmlmdGhNZW51XSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRhYi50YXJnZXQudGV4dENvbnRlbnQgPT09ICdDb250YWN0JyApIHtcbiAgICAgICAgICAgIG1haW5Mb2FkKCdDb250YWN0JywgY29udGFjdHMpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9