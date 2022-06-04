/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: rgba(141, 141, 141, 0.5);\n}\n\n#app {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n\n  background-color: rgb(223, 48, 48);\n}\n\n@media screen and (min-width: 500px) {\n  #app {\n    margin-top: 100px;\n    width: 360px;\n    height: 720px;\n  }\n}\n\nbutton.fancy {\n  width: 309px;\n  height: 162px;\n\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.92) -11.64%,\n    rgb(34, 34, 34) 19.75%,\n    rgb(34, 34, 34) 19.75%,\n    rgba(0, 0, 0, 0.92) 112.35%\n  );\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  border-style: none;\n}\n\n.fancyLetters {\n  color: white;\n  font-size: 32px;\n  font-family: 'Cormorant Garamond', serif;\n  font-weight: 500;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n\n.board {\n  width: 80%;\n  aspect-ratio: 1 / 1;\n  background-color: rgba(211, 211, 211, 0.959);\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.stopper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 35vh;\n  background-color: rgba(68, 68, 68, 0.185);\n  z-index: 20;\n}\n\n#game-view {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n  padding: 12.5%;\n}\n\n.toggle-orientation {\n  /* position: absolute;\n  bottom: 70px;\n  left: 20px; */\n  /* z-index: 10; */\n  width: 42px;\n  height: 42px;\n}\n\n.picker-container {\n  /*Outer Layout*/\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n  \n  /* Styling */\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.92) -11.64%,\n    rgb(34, 34, 34) 19.75%,\n    rgb(34, 34, 34) 19.75%,\n    rgba(0, 0, 0, 0.92) 112.35%\n  );\n  border-radius: 5px 5px 0 0;\n\n  /* Inner Layout */\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.mock-cell {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n}\n\n.active-ship {\n  border: 3px solid rgb(212, 24, 24);\n}\n\n.picker-counter {\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  width: 300px;\n  height: 300px;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/index.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;;EAElB,kCAAkC;AACpC;;AAEA;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;EACf;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb;;;;;;GAMC;EACD,2CAA2C;EAC3C,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,wCAAwC;EACxC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,4CAA4C;EAC5C,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,iBAAiB;EACjB,yCAAyC;EACzC,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE;;eAEa;EACb,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;;EAEb,YAAY;EACZ;;;;;;GAMC;EACD,0BAA0B;;EAE1B,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: rgba(141, 141, 141, 0.5);\n}\n\n#app {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n\n  background-color: rgb(223, 48, 48);\n}\n\n@media screen and (min-width: 500px) {\n  #app {\n    margin-top: 100px;\n    width: 360px;\n    height: 720px;\n  }\n}\n\nbutton.fancy {\n  width: 309px;\n  height: 162px;\n\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.92) -11.64%,\n    rgb(34, 34, 34) 19.75%,\n    rgb(34, 34, 34) 19.75%,\n    rgba(0, 0, 0, 0.92) 112.35%\n  );\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  border-style: none;\n}\n\n.fancyLetters {\n  color: white;\n  font-size: 32px;\n  font-family: 'Cormorant Garamond', serif;\n  font-weight: 500;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 50px;\n}\n\n.board {\n  width: 80%;\n  aspect-ratio: 1 / 1;\n  background-color: rgba(211, 211, 211, 0.959);\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n}\n\n.stopper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 35vh;\n  background-color: rgba(68, 68, 68, 0.185);\n  z-index: 20;\n}\n\n#game-view {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 60px;\n  padding: 12.5%;\n}\n\n.toggle-orientation {\n  /* position: absolute;\n  bottom: 70px;\n  left: 20px; */\n  /* z-index: 10; */\n  width: 42px;\n  height: 42px;\n}\n\n.picker-container {\n  /*Outer Layout*/\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 200px;\n  \n  /* Styling */\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.92) -11.64%,\n    rgb(34, 34, 34) 19.75%,\n    rgb(34, 34, 34) 19.75%,\n    rgba(0, 0, 0, 0.92) 112.35%\n  );\n  border-radius: 5px 5px 0 0;\n\n  /* Inner Layout */\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.mock-cell {\n  width: 30px;\n  height: 30px;\n  background-color: white;\n}\n\n.active-ship {\n  border: 3px solid rgb(212, 24, 24);\n}\n\n.picker-counter {\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  width: 300px;\n  height: 300px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/stylesheets/index.css":
/*!***********************************!*\
  !*** ./src/stylesheets/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/logic-modules/gameBoardFactory.js":
/*!***********************************************!*\
  !*** ./src/logic-modules/gameBoardFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _zonks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zonks.js */ "./src/zonks.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ "./src/logic-modules/shipFactory.js");



function gameBoardFactory(widthLen) {
  const _markedCells = [];
  const _allShips = [];
  const _sunkShips = [];
  const _shipIndexes = {};

  function getMarkedCells() {
    return _markedCells;
  }

  function receiveAttack(index) {
    index = index.toString();
    _markedCells.push(index);
    const shipExists = Object.keys(_shipIndexes).includes(index);
    const isHit = shipExists ? _shipIndexes[index].hit(index) : false;
    if (shipExists && _shipIndexes[index].isSunk()) {
      _sunkShips.push(_shipIndexes[index]);
      return 'sunk';
    }
    return isHit;
  }

  function _horizontalValid(range) {
    const ln = Math.trunc(range[0] / widthLen);
    return range.reduce(
      (curr, next) => Math.trunc(next / widthLen) === ln && curr,
      true
    );
  }

  function _verticalValid(range) {
    return range.reduce(
      (curr, next) => Math.trunc(next / widthLen) < widthLen && curr,
      true
    );
  }

  function _spotTaken(range) {
    const anyTaken = range.filter((elem) =>
      Object.keys(_shipIndexes).includes(elem.toString())
    );
    return anyTaken.length;
  }

  function _appendShip(origin, orientation, shipLen) {
    const ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(origin, orientation, shipLen, widthLen);
    Object.assign(
      _shipIndexes,
      Object.fromEntries(ship.getBoundaries().map((idx) => [idx, ship]))
    );
    _allShips.push(ship);
    return true;
  }

  function placeShip(origin, orientation, shipLen) {
    if (
      origin === undefined ||
      orientation === undefined ||
      shipLen === undefined
    )
      throw new Error('Invalid Input');
    const shipSpan = (0,_zonks_js__WEBPACK_IMPORTED_MODULE_0__.range)(origin, shipLen, orientation * widthLen);
    const valid = orientation
      ? _verticalValid(shipSpan)
      : _horizontalValid(shipSpan);
    if (!valid) throw new Error('Invalid Position');
    if (_spotTaken(shipSpan)) throw new Error('Spot Taken');
    return _appendShip(origin, orientation, shipLen);
  }

  function allShipsSunk() {
    return _allShips.reduce((curr, next) => next.isSunk() && curr, true);
  }

  function placeRandomShip(size, boardCellNumber = 100) {
    let origin,
      orientation = true,
      shipSpan,
      valid = false;
    do {
      orientation = Math.random() >= 0.5;
      origin = Math.trunc(Math.random() * boardCellNumber);
      shipSpan = (0,_zonks_js__WEBPACK_IMPORTED_MODULE_0__.range)(origin, size, orientation * widthLen);
      valid = orientation
        ? _verticalValid(shipSpan)
        : _horizontalValid(shipSpan);
    } while (!valid || _spotTaken(shipSpan));
    _appendShip(origin, orientation, size);
    return `empty spot at ${shipSpan}`;
  }

  function peekAtShips() {
    return _allShips;
  }

  function getShipIndexes() {
    return Object.keys(_shipIndexes);
  }

  function getSunkShips() {
    return _sunkShips;
  }

  return {
    getMarkedCells,
    receiveAttack,
    placeShip,
    allShipsSunk,
    placeRandomShip,
    peekAtShips,
    getShipIndexes,
    getSunkShips
  };
}


/***/ }),

/***/ "./src/logic-modules/playerFactory.js":
/*!********************************************!*\
  !*** ./src/logic-modules/playerFactory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameBoardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory.js */ "./src/logic-modules/gameBoardFactory.js");


function playerFactory(boardLen) {
  const _board = (0,_gameBoardFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(boardLen);

  function deployShip(index, orientation, size) {
    try {
      _board.placeShip(index, orientation, size);
    } catch (err) {
      throw err;
    }
  }

  function receiveAttack(index) {
    const truthy = _board.receiveAttack(index);
    if (truthy === 'sunk') {
      return true;
    }
    return truthy ? 'hit' : 'miss';
  }

  function allShipsSunk() {
    return _board.allShipsSunk();
  }

  function placeRandomShip(size, boardCellNumber = 100) {
    return _board.placeRandomShip(size, boardCellNumber);
  }

  function getMarkedCells() {
    return _board.getMarkedCells();
  }

  function setRandomBoard() {
    for (let i = 2; i < 6; i++) {
      placeRandomShip(i)
    }
  }

  function peekAtShips () {
    return _board.peekAtShips();
  }

  function peekAtShipIndexes () {
    return _board.getShipIndexes();
  }

  function getSunkShips() {
    return _board.getSunkShips();
  }

  return {
    deployShip,
    receiveAttack,
    allShipsSunk,
    placeRandomShip,
    getMarkedCells,
    setRandomBoard,
    peekAtShips,
    peekAtShipIndexes,
    getSunkShips
  };
}


/***/ }),

/***/ "./src/logic-modules/shipFactory.js":
/*!******************************************!*\
  !*** ./src/logic-modules/shipFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
/* harmony import */ var _zonks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zonks.js */ "./src/zonks.js");


function shipFactory(
  origin,
  orientation,
  shipLength,
  boardEdge
) {
  /**
   * origin: starting point of ship
   * orientation: false for horizontal, true for vertical
   * length: how far the ship spans from the origin
   */

  const _segments = Object.fromEntries(
    (0,_zonks_js__WEBPACK_IMPORTED_MODULE_0__.range)(origin, shipLength, boardEdge * orientation).map((elem) => [
      elem,
      'a',
    ])
  );

  function getBoundaries() {
    return Object.keys(_segments);
  }

  function hit(index) {
    const gotten = Object.keys(_segments).includes(index.toString());
    if (!gotten) return false;
    _segments[index] = 'hit';
    return 'hit';
  }

  function isSunk() {
    return Object.values(_segments).reduce(
      (current, next) => next === 'hit' && current,
      true
    );
  }

  function getOrientation() {
    return orientation;
  }

  function getSegments() {
    return _segments;
  }

  return {
    getBoundaries,
    hit,
    isSunk,
    getOrientation,
    getSegments,
  };
}


/***/ }),

/***/ "./src/ui-modules/boardContainer.js":
/*!******************************************!*\
  !*** ./src/ui-modules/boardContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boardContainer)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");
/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameOverModal */ "./src/ui-modules/gameOverModal.js");
/* harmony import */ var _boardRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardRenderer */ "./src/ui-modules/boardRenderer.js");
/* harmony import */ var _renderState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderState */ "./src/ui-modules/renderState.js");





function boardContainer(owner, game) {
  const container = document.createElement('div');

  const board = (0,_boardRenderer__WEBPACK_IMPORTED_MODULE_2__["default"])(game);
  if (!owner) {
    for (const cell of board.children) {
      cell.addEventListener('click', (e) => {
        const idx = e.target.id.slice(1);
        const gameOver = game.registerAttack(parseInt(idx));
        if (gameOver) {
          (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShips)(board, game.getEnemyData().sunk);
          (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShots)(board, game.getEnemyData().marks);
          setTimeout(() => {
            container.parentNode.appendChild((0,_gameOverModal__WEBPACK_IMPORTED_MODULE_1__["default"])(game));
          }, 400);
          return;
        }
        (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShips)(board, game.getEnemyData().ships, true);
        (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShots)(board, game.getEnemyData().marks);
        game.cyclePlayer();
        setTimeout(() => {
          container.parentNode.remove();
          game.puppeteer('next-player');
        }, 400);
      });
    }
    (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShips)(board, game.getEnemyData().ships, true);
    (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShots)(board, game.getEnemyData().marks);
  } else {
    (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShots)(board, game.getCurrentData().marks);
    (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.renderShips)(board, game.getCurrentData().ships);
  }
  container.appendChild(board);
 
  return container;
}


/***/ }),

/***/ "./src/ui-modules/boardRenderer.js":
/*!*****************************************!*\
  !*** ./src/ui-modules/boardRenderer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boardRenderer)
/* harmony export */ });
function boardRenderer(game) {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('board-cell');
    container.appendChild(cell);
    cell.style.backgroundColor = 'white';
    cell.id = `c${i}`;
  }
  return container;
}


/***/ }),

/***/ "./src/ui-modules/fancyButton.js":
/*!***************************************!*\
  !*** ./src/ui-modules/fancyButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fancyButton)
/* harmony export */ });
function fancyButton() {
  const btn = document.createElement('button');
  btn.classList.add('fancy', 'fancyLetters');

  return btn;
}


/***/ }),

/***/ "./src/ui-modules/gameOverModal.js":
/*!*****************************************!*\
  !*** ./src/ui-modules/gameOverModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameOverModal)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");


function gameOverModal(game) {
  const stopper = document.createElement('div');
  stopper.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  stopper.classList.add('stopper');

  const btn = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  btn.textContent = `game over. player ${game.getCurrentPlayer() + 1} wins`;
  btn.addEventListener('click', (e) => {
    stopper.parentNode.remove();
    setTimeout(() => game.puppeteer('title-screen'), 225);
  });
  btn.style.padding = '15px';
  stopper.appendChild(btn);

  return stopper;
}


/***/ }),

/***/ "./src/ui-modules/gameView.js":
/*!************************************!*\
  !*** ./src/ui-modules/gameView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameView)
/* harmony export */ });
/* harmony import */ var _boardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardContainer */ "./src/ui-modules/boardContainer.js");


function gameView(game) {
  const container = document.createElement('div');
  container.id = 'game-view';

  container.appendChild((0,_boardContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(false, game));
  container.appendChild((0,_boardContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(true, game));

  return container;
}


/***/ }),

/***/ "./src/ui-modules/nextPlayer.js":
/*!**************************************!*\
  !*** ./src/ui-modules/nextPlayer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextPlayer)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");


const root = document.querySelector('#app');

function nextPlayer(game) {
  const container = document.createElement('div');
  container.id = 'next-player';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '40vh',
  });

  const btn = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  btn.textContent = `player ${game.getCurrentPlayer() + 1} is next..`;
  if (game.getCurrentPlayer() && game.isAiPlaying()) {
    btn.textContent = `computer made it's move..`
  }
  btn.style.height = '100px';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    if (game.getCurrentPlayer() && game.isAiPlaying()) {
      game.registerAImove();
      game.cyclePlayer();
    }
    game.puppeteer('game-view');
  });
  container.appendChild(btn);

  return container;
}


/***/ }),

/***/ "./src/ui-modules/pickPlayers.js":
/*!***************************************!*\
  !*** ./src/ui-modules/pickPlayers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pickPlayersScreen)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");


const root = document.querySelector('#app');

function pickPlayersScreen(game) {
  const container = document.createElement('div');
  container.id = 'pick-players';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '30vh',
  });

  const btnAI = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])()
  btnAI.textContent = 'against a computer.';
  btnAI.style.fontWeight = 600;
  btnAI.style.height = "2.5em";
  btnAI.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.setAiPlayer();
    game.puppeteer('setup-prompt')
  });
  container.appendChild(btnAI);

  const btnHuman = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])()
  btnHuman.textContent = 'against a human.';
  btnHuman.style.fontWeight = 600;
  btnHuman.style.height = '2.5em';
  btnHuman.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('setup-prompt');
  });
  container.appendChild(btnHuman);

  return container;
}


/***/ }),

/***/ "./src/ui-modules/renderState.js":
/*!***************************************!*\
  !*** ./src/ui-modules/renderState.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flameIcon": () => (/* binding */ flameIcon),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "renderShots": () => (/* binding */ renderShots),
/* harmony export */   "shipIcon": () => (/* binding */ shipIcon)
/* harmony export */ });
/* harmony import */ var _images_flame_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/flame.svg */ "./src/images/flame.svg");
/* harmony import */ var _images_shipTip_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/shipTip.svg */ "./src/images/shipTip.svg");
/* harmony import */ var _images_shipBody_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/shipBody.svg */ "./src/images/shipBody.svg");




function flameIcon() {
  const img = document.createElement('img');
  img.src = _images_flame_svg__WEBPACK_IMPORTED_MODULE_0__;
  img.style.width = '24px';
  img.style.height = '24px';
  return img;
}

function shipIcon(tip, end, orientation) {
  const img = document.createElement('img');
  img.src = tip ? _images_shipTip_svg__WEBPACK_IMPORTED_MODULE_1__ : _images_shipBody_svg__WEBPACK_IMPORTED_MODULE_2__;
  if (!orientation) {
    img.style.transform = `rotate(90deg)`;
  }
  if (!end && !orientation) {
    img.style.transform = `rotate(270deg)`;
  }
  if (end && orientation) {
    img.style.transform = `rotate(-180deg)`;
  }
  img.style.width = '105%';
  img.style.height = '105%';
  return img;
}
function renderShots(board, playerMarks) {
  for (const shot of playerMarks) {
    const cell = board.children[shot];
    if (cell === undefined) {
      console.log(playerMarks);
      throw new Error('wut?');
    }
    const img = flameIcon();
    img.style.position = 'absolute';
    img.style.zIndex = '10';
    cell.appendChild(img);
  }
}
function renderShips(board, playerShips, hitFlag = false) {
  for (const ship of playerShips) {
    const orientation = ship.getOrientation();
    const boundaries = ship.getBoundaries();
    for (let i = 0; i < boundaries.length; i++) {
      if (hitFlag) {
        let shipPart = ship.getSegments()[boundaries[i]];
        if (shipPart === 'hit') {
          shipPartImg(board, boundaries, i, orientation);
        }
        continue;
      }
      shipPartImg(board, boundaries, i, orientation);
    }
  }
}

function shipPartImg(board, boundaries, i, orientation) {
  const cell = board.children[boundaries[i]];
  cell.style.position = 'relative';
  const startTip = i === 0;
  const endTip = i === boundaries.length - 1;
  const img = shipIcon(startTip | endTip, endTip, orientation);
  img.style.position = 'absolute';
  img.style.zIndex = '5';
  cell.appendChild(img);
}


/***/ }),

/***/ "./src/ui-modules/setupBoard.js":
/*!**************************************!*\
  !*** ./src/ui-modules/setupBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupBoard)
/* harmony export */ });
/* harmony import */ var _boardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardContainer */ "./src/ui-modules/boardContainer.js");
/* harmony import */ var _boardRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardRenderer */ "./src/ui-modules/boardRenderer.js");
/* harmony import */ var _zonks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zonks */ "./src/zonks.js");
/* harmony import */ var _renderState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderState */ "./src/ui-modules/renderState.js");
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");






const boardLen = 10;
let shipBucket = {};
let shipsToBeshipped = [];
let pickerSize = { size: 0, 2: 1, 3: 1, 4: 1, 5: 1 };

function setupBoard(game) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'setup-board';
  container.style.paddingTop = '10vh';

  // Done button
  const done = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_4__["default"])();
  done.id = 'done-button';
  done.textContent = 'deploying ships..';
  done.style.height = '2em';
  done.style.padding = '10px';
  done.addEventListener('click', (e) => {
    if (!allShipsDeployed()) return;
    e.target.parentNode.remove();
    if (game.isAiPlaying()) {
      game.deployAllShips(shipsToBeshipped);
      game.puppeteer('next-player');
      return
    }
    if (!game.getCurrentPlayer()) {
      // if player 1
      game.deployAllShips(shipsToBeshipped);
      game.cyclePlayer();
      game.puppeteer('setup-prompt');
    } else {
      // if player 2
      game.deployAllShips(shipsToBeshipped);
      game.cyclePlayer();
      game.puppeteer('next-player');
    }
    shipBucket = {};
    shipsToBeshipped = [];
    pickerSize = { size: 0, 2: 1, 3: 1, 4: 1, 5: 1 };
  });
  container.appendChild(done);

  // Board configurations;
  const board = (0,_boardRenderer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  for (const node of board.childNodes) {
    node.addEventListener('click', (e) => {
      const idx = parseInt(e.target.id.slice(1));
      if (!pickerSize.size) return;
      if (!pickerSize[pickerSize.size]) return;
      const size = pickerSize.size;
      const orientation = toggle.value === 'false' ? false : true;
      const span = (0,_zonks__WEBPACK_IMPORTED_MODULE_2__.range)(idx, size, orientation * boardLen);
      const valid = orientation ? verValid(span) : horValid(span);
      if (!valid) return;
      if (spotTaken(span)) {
        console.log('taken');
        return;
      }
      updateAmount(size, false);
      Object.assign(
        shipBucket,
        Object.fromEntries(span.map((elem) => [elem, span]))
      );
      shipsToBeshipped.push([idx, orientation, size]);
      renderShip(span);
      if (allShipsDeployed()) {
        document.querySelector('#done-button').textContent = 'done?.';
      }
    });
  }
  container.appendChild(board);

  // Orientation button
  const toggle = makeToggleButton();

  // Ship picker
  const shipPicker = document.createElement('div');
  shipPicker.appendChild(toggle);
  shipPicker.classList.add('picker-container');
  for (let i = 5; i > 1; i--) {
    const ms = mockShip(i);
    const counter = makeCounter(i);
    ms.addEventListener('click', (e) => {
      const selected = document.querySelector('.active-ship');
      if (selected) {
        selected.classList.remove('active-ship');
      }
      e.target.parentNode.classList.add('active-ship');
      pickerSize.size = i;
    });
    shipPicker.appendChild(ms);
    shipPicker.appendChild(counter);
  }
  container.appendChild(shipPicker);

  return container;
}

/* --------------------  Helper Functions      ----------------- */
function spotTaken(span) {
  const anyTaken = span.filter((elem) =>
    Object.keys(shipBucket).includes(elem.toString())
  );
  return anyTaken.length;
}

function horValid(span) {
  const org = Math.trunc(span[0] / boardLen);
  return span.reduce(
    (curr, next) => Math.trunc(next / boardLen) === org && curr,
    true
  );
}

function verValid(span) {
  return span.reduce((curr, next) => next / boardLen < boardLen && curr, true);
}

function renderShip(span) {
  const orientation = span[0] % boardLen === span[1] % boardLen;
  for (let i = 0; i < span.length; i++) {
    const cell = document.querySelector(`#c${span[i]}`);
    cell.style.position = 'relative';
    const startTip = i === 0;
    const endTip = i === span.length - 1;
    const img = (0,_renderState__WEBPACK_IMPORTED_MODULE_3__.shipIcon)(startTip | endTip, endTip, orientation);
    img.style.position = 'absolute';
    img.style.zIndex = '5';
    img.addEventListener('click', removeShip);
    cell.appendChild(img);
  }
}

function removeShip(e) {
  const cellId = e.target.parentNode.id.slice(1);
  const ship = shipBucket[cellId];
  updateAmount(ship.length, true);
  for (let i = 0; i < shipsToBeshipped.length; i++) {
    if (shipsToBeshipped[i][0] === ship[0]) {
      shipsToBeshipped.splice(i, 1);
      break;
    }
  }
  for (const part of ship) {
    document.querySelector(`#c${part}`).innerHTML = '';
    delete shipBucket[part];
  }
}

function makeToggleButton() {
  const toggle = document.createElement('button');
  toggle.classList.add('toggle-orientation');
  toggle.value = false;
  toggle.textContent = 'Hor';
  toggle.style.backgroundColor = 'violet';
  toggle.addEventListener('click', (e) => {
    if (e.target.value === 'false') {
      e.target.value = true;
      e.target.textContent = 'Ver';
      e.target.style.backgroundColor = 'lightgreen';
    } else {
      e.target.value = false;
      e.target.textContent = 'Hor';
      e.target.style.backgroundColor = 'violet';
    }
  });
  return toggle;
}

function mockShip(size) {
  const container = document.createElement('div');
  for (let i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('mock-cell');
    container.appendChild(cell);
  }
  return container;
}

function makeCounter(size) {
  const counter = document.createElement('div');
  counter.classList.add('picker-counter');
  const amount = document.createElement('p');
  amount.id = `amount${size}`;
  amount.textContent = pickerSize[size];
  counter.appendChild(amount);
  return counter;
}

function updateAmount(size, add) {
  pickerSize[size] += 2 * add - 1;
  document.querySelector(`#amount${size}`).textContent = pickerSize[size];
}

function allShipsDeployed() {
  let allDeployed = true;
  for (let i = 5; i > 1; i--) {
    allDeployed &= pickerSize[i] === 0;
  }
  return allDeployed;
}


/***/ }),

/***/ "./src/ui-modules/setupPrompt.js":
/*!***************************************!*\
  !*** ./src/ui-modules/setupPrompt.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupPrompt)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");


function setupPrompt(game) {
  const container = document.createElement('div');
  container.id = 'setup-prompt';
  container.classList.add('container');
  container.style.paddingTop = '40vh';

  const btn = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  btn.textContent = `player ${game.getCurrentPlayer() + 1} to deploy ships..`;
  btn.style.height = 'fit-content';
  btn.style.padding = '20px';
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('setup-board');
  });
  container.appendChild(btn);

  return container;
}


/***/ }),

/***/ "./src/ui-modules/titleScreen.js":
/*!***************************************!*\
  !*** ./src/ui-modules/titleScreen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ titleScreen)
/* harmony export */ });
/* harmony import */ var _fancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancyButton */ "./src/ui-modules/fancyButton.js");


const root = document.querySelector('#app');

function titleScreen(game) {
  const container = document.createElement('div');
  container.id = 'title-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '35vh',
  });

  const btn = (0,_fancyButton__WEBPACK_IMPORTED_MODULE_0__["default"])();
  btn.textContent = 'Fancy Battleship.';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('pick-players')
  });
  container.appendChild(btn);

  return container;
}


/***/ }),

/***/ "./src/zonks.js":
/*!**********************!*\
  !*** ./src/zonks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "range": () => (/* binding */ range)
/* harmony export */ });
function range(startAt = 0, size, step) {
  if (!step) {
    step =  1;
  };
  return [...Array(size).keys()].map((i) => i * step + startAt);
}




/***/ }),

/***/ "./src/images/flame.svg":
/*!******************************!*\
  !*** ./src/images/flame.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14534bcfe7aaa3c5949f.svg";

/***/ }),

/***/ "./src/images/shipBody.svg":
/*!*********************************!*\
  !*** ./src/images/shipBody.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be0b1f670334839a6946.svg";

/***/ }),

/***/ "./src/images/shipTip.svg":
/*!********************************!*\
  !*** ./src/images/shipTip.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8981b45fb3bc88616678.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _stylesheets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/index.css */ "./src/stylesheets/index.css");
/* harmony import */ var _ui_modules_nextPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-modules/nextPlayer */ "./src/ui-modules/nextPlayer.js");
/* harmony import */ var _ui_modules_pickPlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-modules/pickPlayers */ "./src/ui-modules/pickPlayers.js");
/* harmony import */ var _ui_modules_titleScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-modules/titleScreen */ "./src/ui-modules/titleScreen.js");
/* harmony import */ var _ui_modules_setupPrompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-modules/setupPrompt */ "./src/ui-modules/setupPrompt.js");
/* harmony import */ var _ui_modules_gameView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-modules/gameView */ "./src/ui-modules/gameView.js");
/* harmony import */ var _ui_modules_setupBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-modules/setupBoard */ "./src/ui-modules/setupBoard.js");
/* harmony import */ var _logic_modules_playerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic-modules/playerFactory */ "./src/logic-modules/playerFactory.js");
/* harmony import */ var _ui_modules_renderState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-modules/renderState */ "./src/ui-modules/renderState.js");










const root = document.querySelector('#app');

const game = (function () {
  const players = [(0,_logic_modules_playerFactory__WEBPACK_IMPORTED_MODULE_7__["default"])(10), (0,_logic_modules_playerFactory__WEBPACK_IMPORTED_MODULE_7__["default"])(10)];
  let currentPlayer = false; // There will only be 2 players, so bool works fine
  let player2ai = false;

  // players[0].setRandomBoard();
  // players[1].setRandomBoard();
  // setAiPlayer();

  function resetGame() {
    players.splice(0, players.length);
    a.push((0,_logic_modules_playerFactory__WEBPACK_IMPORTED_MODULE_7__["default"])(10), (0,_logic_modules_playerFactory__WEBPACK_IMPORTED_MODULE_7__["default"])(10));
    currentPlayer = false;
  }

  function registerAttack(idx) {
    players[!currentPlayer * 1].receiveAttack(idx);
    const wincon =
      players[!currentPlayer * 1].getSunkShips().length ===
      players[!currentPlayer * 1].peekAtShips().length;
    return wincon;
  }

  function setAiPlayer() {
    player2ai = true;
    players[1].setRandomBoard();
  }

  function isAiPlaying() {
    return player2ai;
  }

  function puppeteer(screen) {
    switch (screen) {
      case 'title-screen':
        root.appendChild((0,_ui_modules_titleScreen__WEBPACK_IMPORTED_MODULE_3__["default"])(game));
        break;

      case 'pick-players':
        root.appendChild((0,_ui_modules_pickPlayers__WEBPACK_IMPORTED_MODULE_2__["default"])(game));
        break;

      case 'game-view':
        root.appendChild((0,_ui_modules_gameView__WEBPACK_IMPORTED_MODULE_5__["default"])(game));
        break;

      case 'next-player':
        root.appendChild((0,_ui_modules_nextPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])(game));
        break;

      case 'setup-prompt':
        root.appendChild((0,_ui_modules_setupPrompt__WEBPACK_IMPORTED_MODULE_4__["default"])(game));
        break;

      case 'setup-board':
        root.appendChild((0,_ui_modules_setupBoard__WEBPACK_IMPORTED_MODULE_6__["default"])(game));
        break;
    }
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function cyclePlayer() {
    currentPlayer = !currentPlayer;
  }

  function deployAllShips(shipsToBeDeployed) {
    let weirdIndexFix = currentPlayer + 1 - 1;
    for (const ship of shipsToBeDeployed) {
      players[weirdIndexFix].deployShip(...ship);
    }
  }

  function getCurrentData() {
    return {
      ships: players[currentPlayer + 1 - 1].peekAtShips(),
      marks: players[currentPlayer + 1 - 1].getMarkedCells(),
      sunk: players[currentPlayer + 1 - 1].getSunkShips(),
    };
  }

  function getEnemyData() {
    return {
      ships: players[!currentPlayer + 1 - 1].peekAtShips(),
      marks: players[!currentPlayer + 1 - 1].getMarkedCells(),
      sunk: players[!currentPlayer + 1 - 1].getSunkShips(),
    };
  }

  function registerAImove() {
    const getRandomIdx = () => Math.trunc(Math.random() * 100);
    if (isAiPlaying()) {
      let move = getRandomIdx();
      while (players[0].peekAtShipIndexes().includes(move)) {
        move = getRandomIdx();
      }
      players[0].receiveAttack(move);
    }
  }

  return {
    resetGame,
    registerAttack,
    setAiPlayer,
    puppeteer,
    getCurrentPlayer,
    deployAllShips,
    getCurrentData,
    getEnemyData,
    cyclePlayer,
    isAiPlaying,
    registerAImove,
  };
})();

game.puppeteer('title-screen');

/**
 * for every ship
 *  console.log(ship.getSegments())
 */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EseUJBQXlCLGtFQUFVO0FBQ25DOztBQUVBO0FBQ0EseUJBQXlCLG1FQUFXO0FBQ3BDOztBQUVBO0FBQ0EseUJBQXlCLGtFQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LmNzcz8yN2Y2Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2xvZ2ljLW1vZHVsZXMvZ2FtZUJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbG9naWMtbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy1tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS1tb2R1bGVzL2JvYXJkQ29udGFpbmVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS1tb2R1bGVzL2JvYXJkUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLW1vZHVsZXMvZmFuY3lCdXR0b24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLW1vZHVsZXMvZ2FtZU92ZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWktbW9kdWxlcy9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWktbW9kdWxlcy9uZXh0UGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS1tb2R1bGVzL3BpY2tQbGF5ZXJzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS1tb2R1bGVzL3JlbmRlclN0YXRlLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91aS1tb2R1bGVzL3NldHVwQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLW1vZHVsZXMvc2V0dXBQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLW1vZHVsZXMvdGl0bGVTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3pvbmtzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQrR2FyYW1vbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDEsIDE0MSwgMTQxLCAwLjUpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA0OCwgNDgpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgI2FwcCB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIGhlaWdodDogNzIwcHg7XFxuICB9XFxufVxcblxcbmJ1dHRvbi5mYW5jeSB7XFxuICB3aWR0aDogMzA5cHg7XFxuICBoZWlnaHQ6IDE2MnB4O1xcblxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODBkZWcsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC45MikgLTExLjY0JSxcXG4gICAgcmdiKDM0LCAzNCwgMzQpIDE5Ljc1JSxcXG4gICAgcmdiKDM0LCAzNCwgMzQpIDE5Ljc1JSxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjkyKSAxMTIuMzUlXFxuICApO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmZhbmN5TGV0dGVycyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjk1OSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbn1cXG5cXG4uc3RvcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzV2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDY4LCA2OCwgMC4xODUpO1xcbiAgei1pbmRleDogMjA7XFxufVxcblxcbiNnYW1lLXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNjBweDtcXG4gIHBhZGRpbmc6IDEyLjUlO1xcbn1cXG5cXG4udG9nZ2xlLW9yaWVudGF0aW9uIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNzBweDtcXG4gIGxlZnQ6IDIwcHg7ICovXFxuICAvKiB6LWluZGV4OiAxMDsgKi9cXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbn1cXG5cXG4ucGlja2VyLWNvbnRhaW5lciB7XFxuICAvKk91dGVyIExheW91dCovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBcXG4gIC8qIFN0eWxpbmcgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOTIpIC0xMS42NCUsXFxuICAgIHJnYigzNCwgMzQsIDM0KSAxOS43NSUsXFxuICAgIHJnYigzNCwgMzQsIDM0KSAxOS43NSUsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC45MikgMTEyLjM1JVxcbiAgKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcblxcbiAgLyogSW5uZXIgTGF5b3V0ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4ubW9jay1jZWxsIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmUtc2hpcCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjEyLCAyNCwgMjQpO1xcbn1cXG5cXG4ucGlja2VyLWNvdW50ZXIge1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWI7Ozs7OztHQU1DO0VBQ0QsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRTs7ZUFFYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7O0VBRWIsWUFBWTtFQUNaOzs7Ozs7R0FNQztFQUNELDBCQUEwQjs7RUFFMUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQxLCAxNDEsIDE0MSwgMC41KTtcXG59XFxuXFxuI2FwcCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgNDgsIDQ4KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gICNhcHAge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBoZWlnaHQ6IDcyMHB4O1xcbiAgfVxcbn1cXG5cXG5idXR0b24uZmFuY3kge1xcbiAgd2lkdGg6IDMwOXB4O1xcbiAgaGVpZ2h0OiAxNjJweDtcXG5cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOTIpIC0xMS42NCUsXFxuICAgIHJnYigzNCwgMzQsIDM0KSAxOS43NSUsXFxuICAgIHJnYigzNCwgMzQsIDM0KSAxOS43NSUsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC45MikgMTEyLjM1JVxcbiAgKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5mYW5jeUxldHRlcnMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogODAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC45NTkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG59XFxuXFxuLnN0b3BwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDM1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA2OCwgNjgsIDAuMTg1KTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4jZ2FtZS12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDYwcHg7XFxuICBwYWRkaW5nOiAxMi41JTtcXG59XFxuXFxuLnRvZ2dsZS1vcmllbnRhdGlvbiB7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDcwcHg7XFxuICBsZWZ0OiAyMHB4OyAqL1xcbiAgLyogei1pbmRleDogMTA7ICovXFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDtcXG59XFxuXFxuLnBpY2tlci1jb250YWluZXIge1xcbiAgLypPdXRlciBMYXlvdXQqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgXFxuICAvKiBTdHlsaW5nICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE4MGRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjkyKSAtMTEuNjQlLFxcbiAgICByZ2IoMzQsIDM0LCAzNCkgMTkuNzUlLFxcbiAgICByZ2IoMzQsIDM0LCAzNCkgMTkuNzUlLFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOTIpIDExMi4zNSVcXG4gICk7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG5cXG4gIC8qIElubmVyIExheW91dCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLm1vY2stY2VsbCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlLXNoaXAge1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIxMiwgMjQsIDI0KTtcXG59XFxuXFxuLnBpY2tlci1jb3VudGVyIHtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi4vem9ua3MuanMnO1xuaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmRGYWN0b3J5KHdpZHRoTGVuKSB7XG4gIGNvbnN0IF9tYXJrZWRDZWxscyA9IFtdO1xuICBjb25zdCBfYWxsU2hpcHMgPSBbXTtcbiAgY29uc3QgX3N1bmtTaGlwcyA9IFtdO1xuICBjb25zdCBfc2hpcEluZGV4ZXMgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNYXJrZWRDZWxscygpIHtcbiAgICByZXR1cm4gX21hcmtlZENlbGxzO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhpbmRleCkge1xuICAgIGluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICBfbWFya2VkQ2VsbHMucHVzaChpbmRleCk7XG4gICAgY29uc3Qgc2hpcEV4aXN0cyA9IE9iamVjdC5rZXlzKF9zaGlwSW5kZXhlcykuaW5jbHVkZXMoaW5kZXgpO1xuICAgIGNvbnN0IGlzSGl0ID0gc2hpcEV4aXN0cyA/IF9zaGlwSW5kZXhlc1tpbmRleF0uaGl0KGluZGV4KSA6IGZhbHNlO1xuICAgIGlmIChzaGlwRXhpc3RzICYmIF9zaGlwSW5kZXhlc1tpbmRleF0uaXNTdW5rKCkpIHtcbiAgICAgIF9zdW5rU2hpcHMucHVzaChfc2hpcEluZGV4ZXNbaW5kZXhdKTtcbiAgICAgIHJldHVybiAnc3Vuayc7XG4gICAgfVxuICAgIHJldHVybiBpc0hpdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ob3Jpem9udGFsVmFsaWQocmFuZ2UpIHtcbiAgICBjb25zdCBsbiA9IE1hdGgudHJ1bmMocmFuZ2VbMF0gLyB3aWR0aExlbik7XG4gICAgcmV0dXJuIHJhbmdlLnJlZHVjZShcbiAgICAgIChjdXJyLCBuZXh0KSA9PiBNYXRoLnRydW5jKG5leHQgLyB3aWR0aExlbikgPT09IGxuICYmIGN1cnIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF92ZXJ0aWNhbFZhbGlkKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlZHVjZShcbiAgICAgIChjdXJyLCBuZXh0KSA9PiBNYXRoLnRydW5jKG5leHQgLyB3aWR0aExlbikgPCB3aWR0aExlbiAmJiBjdXJyLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBfc3BvdFRha2VuKHJhbmdlKSB7XG4gICAgY29uc3QgYW55VGFrZW4gPSByYW5nZS5maWx0ZXIoKGVsZW0pID0+XG4gICAgICBPYmplY3Qua2V5cyhfc2hpcEluZGV4ZXMpLmluY2x1ZGVzKGVsZW0udG9TdHJpbmcoKSlcbiAgICApO1xuICAgIHJldHVybiBhbnlUYWtlbi5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBfYXBwZW5kU2hpcChvcmlnaW4sIG9yaWVudGF0aW9uLCBzaGlwTGVuKSB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KG9yaWdpbiwgb3JpZW50YXRpb24sIHNoaXBMZW4sIHdpZHRoTGVuKTtcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAgX3NoaXBJbmRleGVzLFxuICAgICAgT2JqZWN0LmZyb21FbnRyaWVzKHNoaXAuZ2V0Qm91bmRhcmllcygpLm1hcCgoaWR4KSA9PiBbaWR4LCBzaGlwXSkpXG4gICAgKTtcbiAgICBfYWxsU2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChvcmlnaW4sIG9yaWVudGF0aW9uLCBzaGlwTGVuKSB7XG4gICAgaWYgKFxuICAgICAgb3JpZ2luID09PSB1bmRlZmluZWQgfHxcbiAgICAgIG9yaWVudGF0aW9uID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHNoaXBMZW4gPT09IHVuZGVmaW5lZFxuICAgIClcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBJbnB1dCcpO1xuICAgIGNvbnN0IHNoaXBTcGFuID0gcmFuZ2Uob3JpZ2luLCBzaGlwTGVuLCBvcmllbnRhdGlvbiAqIHdpZHRoTGVuKTtcbiAgICBjb25zdCB2YWxpZCA9IG9yaWVudGF0aW9uXG4gICAgICA/IF92ZXJ0aWNhbFZhbGlkKHNoaXBTcGFuKVxuICAgICAgOiBfaG9yaXpvbnRhbFZhbGlkKHNoaXBTcGFuKTtcbiAgICBpZiAoIXZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUG9zaXRpb24nKTtcbiAgICBpZiAoX3Nwb3RUYWtlbihzaGlwU3BhbikpIHRocm93IG5ldyBFcnJvcignU3BvdCBUYWtlbicpO1xuICAgIHJldHVybiBfYXBwZW5kU2hpcChvcmlnaW4sIG9yaWVudGF0aW9uLCBzaGlwTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gX2FsbFNoaXBzLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4gbmV4dC5pc1N1bmsoKSAmJiBjdXJyLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlUmFuZG9tU2hpcChzaXplLCBib2FyZENlbGxOdW1iZXIgPSAxMDApIHtcbiAgICBsZXQgb3JpZ2luLFxuICAgICAgb3JpZW50YXRpb24gPSB0cnVlLFxuICAgICAgc2hpcFNwYW4sXG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA+PSAwLjU7XG4gICAgICBvcmlnaW4gPSBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBib2FyZENlbGxOdW1iZXIpO1xuICAgICAgc2hpcFNwYW4gPSByYW5nZShvcmlnaW4sIHNpemUsIG9yaWVudGF0aW9uICogd2lkdGhMZW4pO1xuICAgICAgdmFsaWQgPSBvcmllbnRhdGlvblxuICAgICAgICA/IF92ZXJ0aWNhbFZhbGlkKHNoaXBTcGFuKVxuICAgICAgICA6IF9ob3Jpem9udGFsVmFsaWQoc2hpcFNwYW4pO1xuICAgIH0gd2hpbGUgKCF2YWxpZCB8fCBfc3BvdFRha2VuKHNoaXBTcGFuKSk7XG4gICAgX2FwcGVuZFNoaXAob3JpZ2luLCBvcmllbnRhdGlvbiwgc2l6ZSk7XG4gICAgcmV0dXJuIGBlbXB0eSBzcG90IGF0ICR7c2hpcFNwYW59YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlZWtBdFNoaXBzKCkge1xuICAgIHJldHVybiBfYWxsU2hpcHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwSW5kZXhlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoX3NoaXBJbmRleGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gX3N1bmtTaGlwcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFya2VkQ2VsbHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGFjZVNoaXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHBsYWNlUmFuZG9tU2hpcCxcbiAgICBwZWVrQXRTaGlwcyxcbiAgICBnZXRTaGlwSW5kZXhlcyxcbiAgICBnZXRTdW5rU2hpcHNcbiAgfTtcbn1cbiIsImltcG9ydCBnYW1lQm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZUJvYXJkRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllckZhY3RvcnkoYm9hcmRMZW4pIHtcbiAgY29uc3QgX2JvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeShib2FyZExlbik7XG5cbiAgZnVuY3Rpb24gZGVwbG95U2hpcChpbmRleCwgb3JpZW50YXRpb24sIHNpemUpIHtcbiAgICB0cnkge1xuICAgICAgX2JvYXJkLnBsYWNlU2hpcChpbmRleCwgb3JpZW50YXRpb24sIHNpemUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soaW5kZXgpIHtcbiAgICBjb25zdCB0cnV0aHkgPSBfYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgaWYgKHRydXRoeSA9PT0gJ3N1bmsnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydXRoeSA/ICdoaXQnIDogJ21pc3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBfYm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVJhbmRvbVNoaXAoc2l6ZSwgYm9hcmRDZWxsTnVtYmVyID0gMTAwKSB7XG4gICAgcmV0dXJuIF9ib2FyZC5wbGFjZVJhbmRvbVNoaXAoc2l6ZSwgYm9hcmRDZWxsTnVtYmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlZENlbGxzKCkge1xuICAgIHJldHVybiBfYm9hcmQuZ2V0TWFya2VkQ2VsbHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFJhbmRvbUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDwgNjsgaSsrKSB7XG4gICAgICBwbGFjZVJhbmRvbVNoaXAoaSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZWVrQXRTaGlwcyAoKSB7XG4gICAgcmV0dXJuIF9ib2FyZC5wZWVrQXRTaGlwcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVla0F0U2hpcEluZGV4ZXMgKCkge1xuICAgIHJldHVybiBfYm9hcmQuZ2V0U2hpcEluZGV4ZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN1bmtTaGlwcygpIHtcbiAgICByZXR1cm4gX2JvYXJkLmdldFN1bmtTaGlwcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkZXBsb3lTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHBsYWNlUmFuZG9tU2hpcCxcbiAgICBnZXRNYXJrZWRDZWxscyxcbiAgICBzZXRSYW5kb21Cb2FyZCxcbiAgICBwZWVrQXRTaGlwcyxcbiAgICBwZWVrQXRTaGlwSW5kZXhlcyxcbiAgICBnZXRTdW5rU2hpcHNcbiAgfTtcbn1cbiIsImltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi4vem9ua3MuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRmFjdG9yeShcbiAgb3JpZ2luLFxuICBvcmllbnRhdGlvbixcbiAgc2hpcExlbmd0aCxcbiAgYm9hcmRFZGdlXG4pIHtcbiAgLyoqXG4gICAqIG9yaWdpbjogc3RhcnRpbmcgcG9pbnQgb2Ygc2hpcFxuICAgKiBvcmllbnRhdGlvbjogZmFsc2UgZm9yIGhvcml6b250YWwsIHRydWUgZm9yIHZlcnRpY2FsXG4gICAqIGxlbmd0aDogaG93IGZhciB0aGUgc2hpcCBzcGFucyBmcm9tIHRoZSBvcmlnaW5cbiAgICovXG5cbiAgY29uc3QgX3NlZ21lbnRzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIHJhbmdlKG9yaWdpbiwgc2hpcExlbmd0aCwgYm9hcmRFZGdlICogb3JpZW50YXRpb24pLm1hcCgoZWxlbSkgPT4gW1xuICAgICAgZWxlbSxcbiAgICAgICdhJyxcbiAgICBdKVxuICApO1xuXG4gIGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKF9zZWdtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcbiAgICBjb25zdCBnb3R0ZW4gPSBPYmplY3Qua2V5cyhfc2VnbWVudHMpLmluY2x1ZGVzKGluZGV4LnRvU3RyaW5nKCkpO1xuICAgIGlmICghZ290dGVuKSByZXR1cm4gZmFsc2U7XG4gICAgX3NlZ21lbnRzW2luZGV4XSA9ICdoaXQnO1xuICAgIHJldHVybiAnaGl0JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhfc2VnbWVudHMpLnJlZHVjZShcbiAgICAgIChjdXJyZW50LCBuZXh0KSA9PiBuZXh0ID09PSAnaGl0JyAmJiBjdXJyZW50LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWdtZW50cygpIHtcbiAgICByZXR1cm4gX3NlZ21lbnRzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRCb3VuZGFyaWVzLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0T3JpZW50YXRpb24sXG4gICAgZ2V0U2VnbWVudHMsXG4gIH07XG59XG4iLCJpbXBvcnQgZmFuY3lCdXR0b24gZnJvbSAnLi9mYW5jeUJ1dHRvbic7XG5pbXBvcnQgZ2FtZU92ZXJNb2RhbCBmcm9tICcuL2dhbWVPdmVyTW9kYWwnO1xuaW1wb3J0IGJvYXJkUmVuZGVyZXIgZnJvbSAnLi9ib2FyZFJlbmRlcmVyJztcbmltcG9ydCB7IHJlbmRlclNoaXBzLCByZW5kZXJTaG90cyB9IGZyb20gJy4vcmVuZGVyU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2FyZENvbnRhaW5lcihvd25lciwgZ2FtZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBib2FyZCA9IGJvYXJkUmVuZGVyZXIoZ2FtZSk7XG4gIGlmICghb3duZXIpIHtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgYm9hcmQuY2hpbGRyZW4pIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZHggPSBlLnRhcmdldC5pZC5zbGljZSgxKTtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSBnYW1lLnJlZ2lzdGVyQXR0YWNrKHBhcnNlSW50KGlkeCkpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIpIHtcbiAgICAgICAgICByZW5kZXJTaGlwcyhib2FyZCwgZ2FtZS5nZXRFbmVteURhdGEoKS5zdW5rKTtcbiAgICAgICAgICByZW5kZXJTaG90cyhib2FyZCwgZ2FtZS5nZXRFbmVteURhdGEoKS5tYXJrcyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChnYW1lT3Zlck1vZGFsKGdhbWUpKTtcbiAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJTaGlwcyhib2FyZCwgZ2FtZS5nZXRFbmVteURhdGEoKS5zaGlwcywgdHJ1ZSk7XG4gICAgICAgIHJlbmRlclNob3RzKGJvYXJkLCBnYW1lLmdldEVuZW15RGF0YSgpLm1hcmtzKTtcbiAgICAgICAgZ2FtZS5jeWNsZVBsYXllcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICBnYW1lLnB1cHBldGVlcignbmV4dC1wbGF5ZXInKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJTaGlwcyhib2FyZCwgZ2FtZS5nZXRFbmVteURhdGEoKS5zaGlwcywgdHJ1ZSk7XG4gICAgcmVuZGVyU2hvdHMoYm9hcmQsIGdhbWUuZ2V0RW5lbXlEYXRhKCkubWFya3MpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlclNob3RzKGJvYXJkLCBnYW1lLmdldEN1cnJlbnREYXRhKCkubWFya3MpO1xuICAgIHJlbmRlclNoaXBzKGJvYXJkLCBnYW1lLmdldEN1cnJlbnREYXRhKCkuc2hpcHMpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2FyZFJlbmRlcmVyKGdhbWUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBjZWxsLmlkID0gYGMke2l9YDtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmFuY3lCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnZmFuY3knLCAnZmFuY3lMZXR0ZXJzJyk7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cbiIsImltcG9ydCBmYW5jeUJ1dHRvbiBmcm9tICcuL2ZhbmN5QnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXJNb2RhbChnYW1lKSB7XG4gIGNvbnN0IHN0b3BwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RvcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHN0b3BwZXIuY2xhc3NMaXN0LmFkZCgnc3RvcHBlcicpO1xuXG4gIGNvbnN0IGJ0biA9IGZhbmN5QnV0dG9uKCk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IGBnYW1lIG92ZXIuIHBsYXllciAke2dhbWUuZ2V0Q3VycmVudFBsYXllcigpICsgMX0gd2luc2A7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3RvcHBlci5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gZ2FtZS5wdXBwZXRlZXIoJ3RpdGxlLXNjcmVlbicpLCAyMjUpO1xuICB9KTtcbiAgYnRuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCc7XG4gIHN0b3BwZXIuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gc3RvcHBlcjtcbn1cbiIsImltcG9ydCBib2FyZENvbnRhaW5lciBmcm9tICcuL2JvYXJkQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZVZpZXcoZ2FtZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlkID0gJ2dhbWUtdmlldyc7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKGZhbHNlLCBnYW1lKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcih0cnVlLCBnYW1lKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBmYW5jeUJ1dHRvbiBmcm9tICcuL2ZhbmN5QnV0dG9uJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV4dFBsYXllcihnYW1lKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaWQgPSAnbmV4dC1wbGF5ZXInO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250YWluZXIuc3R5bGUsIHtcbiAgICBwYWRkaW5nVG9wOiAnNDB2aCcsXG4gIH0pO1xuXG4gIGNvbnN0IGJ0biA9IGZhbmN5QnV0dG9uKCk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IGBwbGF5ZXIgJHtnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKSArIDF9IGlzIG5leHQuLmA7XG4gIGlmIChnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKSAmJiBnYW1lLmlzQWlQbGF5aW5nKCkpIHtcbiAgICBidG4udGV4dENvbnRlbnQgPSBgY29tcHV0ZXIgbWFkZSBpdCdzIG1vdmUuLmBcbiAgfVxuICBidG4uc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgYnRuLnN0eWxlLmZvbnRXZWlnaHQgPSA2MDA7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBpZiAoZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkgJiYgZ2FtZS5pc0FpUGxheWluZygpKSB7XG4gICAgICBnYW1lLnJlZ2lzdGVyQUltb3ZlKCk7XG4gICAgICBnYW1lLmN5Y2xlUGxheWVyKCk7XG4gICAgfVxuICAgIGdhbWUucHVwcGV0ZWVyKCdnYW1lLXZpZXcnKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgZmFuY3lCdXR0b24gZnJvbSBcIi4vZmFuY3lCdXR0b25cIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlja1BsYXllcnNTY3JlZW4oZ2FtZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlkID0gJ3BpY2stcGxheWVycyc7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRhaW5lci5zdHlsZSwge1xuICAgIHBhZGRpbmdUb3A6ICczMHZoJyxcbiAgfSk7XG5cbiAgY29uc3QgYnRuQUkgPSBmYW5jeUJ1dHRvbigpXG4gIGJ0bkFJLnRleHRDb250ZW50ID0gJ2FnYWluc3QgYSBjb21wdXRlci4nO1xuICBidG5BSS5zdHlsZS5mb250V2VpZ2h0ID0gNjAwO1xuICBidG5BSS5zdHlsZS5oZWlnaHQgPSBcIjIuNWVtXCI7XG4gIGJ0bkFJLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGdhbWUuc2V0QWlQbGF5ZXIoKTtcbiAgICBnYW1lLnB1cHBldGVlcignc2V0dXAtcHJvbXB0JylcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5BSSk7XG5cbiAgY29uc3QgYnRuSHVtYW4gPSBmYW5jeUJ1dHRvbigpXG4gIGJ0bkh1bWFuLnRleHRDb250ZW50ID0gJ2FnYWluc3QgYSBodW1hbi4nO1xuICBidG5IdW1hbi5zdHlsZS5mb250V2VpZ2h0ID0gNjAwO1xuICBidG5IdW1hbi5zdHlsZS5oZWlnaHQgPSAnMi41ZW0nO1xuICBidG5IdW1hbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBnYW1lLnB1cHBldGVlcignc2V0dXAtcHJvbXB0Jyk7XG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuSHVtYW4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgZmxhbWUgZnJvbSAnLi4vaW1hZ2VzL2ZsYW1lLnN2Zyc7XG5pbXBvcnQgc2hpcFRpcCBmcm9tICcuLi9pbWFnZXMvc2hpcFRpcC5zdmcnO1xuaW1wb3J0IHNoaXBCb2R5IGZyb20gJy4uL2ltYWdlcy9zaGlwQm9keS5zdmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxhbWVJY29uKCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IGZsYW1lO1xuICBpbWcuc3R5bGUud2lkdGggPSAnMjRweCc7XG4gIGltZy5zdHlsZS5oZWlnaHQgPSAnMjRweCc7XG4gIHJldHVybiBpbWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwSWNvbih0aXAsIGVuZCwgb3JpZW50YXRpb24pIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSB0aXAgPyBzaGlwVGlwIDogc2hpcEJvZHk7XG4gIGlmICghb3JpZW50YXRpb24pIHtcbiAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSg5MGRlZylgO1xuICB9XG4gIGlmICghZW5kICYmICFvcmllbnRhdGlvbikge1xuICAgIGltZy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKDI3MGRlZylgO1xuICB9XG4gIGlmIChlbmQgJiYgb3JpZW50YXRpb24pIHtcbiAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgtMTgwZGVnKWA7XG4gIH1cbiAgaW1nLnN0eWxlLndpZHRoID0gJzEwNSUnO1xuICBpbWcuc3R5bGUuaGVpZ2h0ID0gJzEwNSUnO1xuICByZXR1cm4gaW1nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNob3RzKGJvYXJkLCBwbGF5ZXJNYXJrcykge1xuICBmb3IgKGNvbnN0IHNob3Qgb2YgcGxheWVyTWFya3MpIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQuY2hpbGRyZW5bc2hvdF07XG4gICAgaWYgKGNlbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2cocGxheWVyTWFya3MpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3dXQ/Jyk7XG4gICAgfVxuICAgIGNvbnN0IGltZyA9IGZsYW1lSWNvbigpO1xuICAgIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaW1nLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgY2VsbC5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcHMoYm9hcmQsIHBsYXllclNoaXBzLCBoaXRGbGFnID0gZmFsc2UpIHtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHBsYXllclNoaXBzKSB7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldE9yaWVudGF0aW9uKCk7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHNoaXAuZ2V0Qm91bmRhcmllcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhpdEZsYWcpIHtcbiAgICAgICAgbGV0IHNoaXBQYXJ0ID0gc2hpcC5nZXRTZWdtZW50cygpW2JvdW5kYXJpZXNbaV1dO1xuICAgICAgICBpZiAoc2hpcFBhcnQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgc2hpcFBhcnRJbWcoYm9hcmQsIGJvdW5kYXJpZXMsIGksIG9yaWVudGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHNoaXBQYXJ0SW1nKGJvYXJkLCBib3VuZGFyaWVzLCBpLCBvcmllbnRhdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNoaXBQYXJ0SW1nKGJvYXJkLCBib3VuZGFyaWVzLCBpLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBjZWxsID0gYm9hcmQuY2hpbGRyZW5bYm91bmRhcmllc1tpXV07XG4gIGNlbGwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICBjb25zdCBzdGFydFRpcCA9IGkgPT09IDA7XG4gIGNvbnN0IGVuZFRpcCA9IGkgPT09IGJvdW5kYXJpZXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgaW1nID0gc2hpcEljb24oc3RhcnRUaXAgfCBlbmRUaXAsIGVuZFRpcCwgb3JpZW50YXRpb24pO1xuICBpbWcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBpbWcuc3R5bGUuekluZGV4ID0gJzUnO1xuICBjZWxsLmFwcGVuZENoaWxkKGltZyk7XG59XG4iLCJpbXBvcnQgYm9hcmRDb250YWluZXIgZnJvbSAnLi9ib2FyZENvbnRhaW5lcic7XG5pbXBvcnQgYm9hcmRSZW5kZXJlciBmcm9tICcuL2JvYXJkUmVuZGVyZXInO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuLi96b25rcyc7XG5pbXBvcnQgeyBzaGlwSWNvbiB9IGZyb20gJy4vcmVuZGVyU3RhdGUnO1xuaW1wb3J0IGZhbmN5QnV0dG9uIGZyb20gJy4vZmFuY3lCdXR0b24nO1xuXG5jb25zdCBib2FyZExlbiA9IDEwO1xubGV0IHNoaXBCdWNrZXQgPSB7fTtcbmxldCBzaGlwc1RvQmVzaGlwcGVkID0gW107XG5sZXQgcGlja2VyU2l6ZSA9IHsgc2l6ZTogMCwgMjogMSwgMzogMSwgNDogMSwgNTogMSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cEJvYXJkKGdhbWUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29udGFpbmVyLmlkID0gJ3NldHVwLWJvYXJkJztcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3AgPSAnMTB2aCc7XG5cbiAgLy8gRG9uZSBidXR0b25cbiAgY29uc3QgZG9uZSA9IGZhbmN5QnV0dG9uKCk7XG4gIGRvbmUuaWQgPSAnZG9uZS1idXR0b24nO1xuICBkb25lLnRleHRDb250ZW50ID0gJ2RlcGxveWluZyBzaGlwcy4uJztcbiAgZG9uZS5zdHlsZS5oZWlnaHQgPSAnMmVtJztcbiAgZG9uZS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xuICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFsbFNoaXBzRGVwbG95ZWQoKSkgcmV0dXJuO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgaWYgKGdhbWUuaXNBaVBsYXlpbmcoKSkge1xuICAgICAgZ2FtZS5kZXBsb3lBbGxTaGlwcyhzaGlwc1RvQmVzaGlwcGVkKTtcbiAgICAgIGdhbWUucHVwcGV0ZWVyKCduZXh0LXBsYXllcicpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghZ2FtZS5nZXRDdXJyZW50UGxheWVyKCkpIHtcbiAgICAgIC8vIGlmIHBsYXllciAxXG4gICAgICBnYW1lLmRlcGxveUFsbFNoaXBzKHNoaXBzVG9CZXNoaXBwZWQpO1xuICAgICAgZ2FtZS5jeWNsZVBsYXllcigpO1xuICAgICAgZ2FtZS5wdXBwZXRlZXIoJ3NldHVwLXByb21wdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBwbGF5ZXIgMlxuICAgICAgZ2FtZS5kZXBsb3lBbGxTaGlwcyhzaGlwc1RvQmVzaGlwcGVkKTtcbiAgICAgIGdhbWUuY3ljbGVQbGF5ZXIoKTtcbiAgICAgIGdhbWUucHVwcGV0ZWVyKCduZXh0LXBsYXllcicpO1xuICAgIH1cbiAgICBzaGlwQnVja2V0ID0ge307XG4gICAgc2hpcHNUb0Jlc2hpcHBlZCA9IFtdO1xuICAgIHBpY2tlclNpemUgPSB7IHNpemU6IDAsIDI6IDEsIDM6IDEsIDQ6IDEsIDU6IDEgfTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lKTtcblxuICAvLyBCb2FyZCBjb25maWd1cmF0aW9ucztcbiAgY29uc3QgYm9hcmQgPSBib2FyZFJlbmRlcmVyKCk7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBib2FyZC5jaGlsZE5vZGVzKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBpZHggPSBwYXJzZUludChlLnRhcmdldC5pZC5zbGljZSgxKSk7XG4gICAgICBpZiAoIXBpY2tlclNpemUuc2l6ZSkgcmV0dXJuO1xuICAgICAgaWYgKCFwaWNrZXJTaXplW3BpY2tlclNpemUuc2l6ZV0pIHJldHVybjtcbiAgICAgIGNvbnN0IHNpemUgPSBwaWNrZXJTaXplLnNpemU7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRvZ2dsZS52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHNwYW4gPSByYW5nZShpZHgsIHNpemUsIG9yaWVudGF0aW9uICogYm9hcmRMZW4pO1xuICAgICAgY29uc3QgdmFsaWQgPSBvcmllbnRhdGlvbiA/IHZlclZhbGlkKHNwYW4pIDogaG9yVmFsaWQoc3Bhbik7XG4gICAgICBpZiAoIXZhbGlkKSByZXR1cm47XG4gICAgICBpZiAoc3BvdFRha2VuKHNwYW4pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWtlbicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB1cGRhdGVBbW91bnQoc2l6ZSwgZmFsc2UpO1xuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc2hpcEJ1Y2tldCxcbiAgICAgICAgT2JqZWN0LmZyb21FbnRyaWVzKHNwYW4ubWFwKChlbGVtKSA9PiBbZWxlbSwgc3Bhbl0pKVxuICAgICAgKTtcbiAgICAgIHNoaXBzVG9CZXNoaXBwZWQucHVzaChbaWR4LCBvcmllbnRhdGlvbiwgc2l6ZV0pO1xuICAgICAgcmVuZGVyU2hpcChzcGFuKTtcbiAgICAgIGlmIChhbGxTaGlwc0RlcGxveWVkKCkpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbmUtYnV0dG9uJykudGV4dENvbnRlbnQgPSAnZG9uZT8uJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gIC8vIE9yaWVudGF0aW9uIGJ1dHRvblxuICBjb25zdCB0b2dnbGUgPSBtYWtlVG9nZ2xlQnV0dG9uKCk7XG5cbiAgLy8gU2hpcCBwaWNrZXJcbiAgY29uc3Qgc2hpcFBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwUGlja2VyLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gIHNoaXBQaWNrZXIuY2xhc3NMaXN0LmFkZCgncGlja2VyLWNvbnRhaW5lcicpO1xuICBmb3IgKGxldCBpID0gNTsgaSA+IDE7IGktLSkge1xuICAgIGNvbnN0IG1zID0gbW9ja1NoaXAoaSk7XG4gICAgY29uc3QgY291bnRlciA9IG1ha2VDb3VudGVyKGkpO1xuICAgIG1zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1zaGlwJyk7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXNoaXAnKTtcbiAgICAgIH1cbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNoaXAnKTtcbiAgICAgIHBpY2tlclNpemUuc2l6ZSA9IGk7XG4gICAgfSk7XG4gICAgc2hpcFBpY2tlci5hcHBlbmRDaGlsZChtcyk7XG4gICAgc2hpcFBpY2tlci5hcHBlbmRDaGlsZChjb3VudGVyKTtcbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFBpY2tlcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEhlbHBlciBGdW5jdGlvbnMgICAgICAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuZnVuY3Rpb24gc3BvdFRha2VuKHNwYW4pIHtcbiAgY29uc3QgYW55VGFrZW4gPSBzcGFuLmZpbHRlcigoZWxlbSkgPT5cbiAgICBPYmplY3Qua2V5cyhzaGlwQnVja2V0KS5pbmNsdWRlcyhlbGVtLnRvU3RyaW5nKCkpXG4gICk7XG4gIHJldHVybiBhbnlUYWtlbi5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGhvclZhbGlkKHNwYW4pIHtcbiAgY29uc3Qgb3JnID0gTWF0aC50cnVuYyhzcGFuWzBdIC8gYm9hcmRMZW4pO1xuICByZXR1cm4gc3Bhbi5yZWR1Y2UoXG4gICAgKGN1cnIsIG5leHQpID0+IE1hdGgudHJ1bmMobmV4dCAvIGJvYXJkTGVuKSA9PT0gb3JnICYmIGN1cnIsXG4gICAgdHJ1ZVxuICApO1xufVxuXG5mdW5jdGlvbiB2ZXJWYWxpZChzcGFuKSB7XG4gIHJldHVybiBzcGFuLnJlZHVjZSgoY3VyciwgbmV4dCkgPT4gbmV4dCAvIGJvYXJkTGVuIDwgYm9hcmRMZW4gJiYgY3VyciwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXAoc3Bhbikge1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHNwYW5bMF0gJSBib2FyZExlbiA9PT0gc3BhblsxXSAlIGJvYXJkTGVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Mke3NwYW5baV19YCk7XG4gICAgY2VsbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgY29uc3Qgc3RhcnRUaXAgPSBpID09PSAwO1xuICAgIGNvbnN0IGVuZFRpcCA9IGkgPT09IHNwYW4ubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBpbWcgPSBzaGlwSWNvbihzdGFydFRpcCB8IGVuZFRpcCwgZW5kVGlwLCBvcmllbnRhdGlvbik7XG4gICAgaW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBpbWcuc3R5bGUuekluZGV4ID0gJzUnO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVNoaXApO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwKGUpIHtcbiAgY29uc3QgY2VsbElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZC5zbGljZSgxKTtcbiAgY29uc3Qgc2hpcCA9IHNoaXBCdWNrZXRbY2VsbElkXTtcbiAgdXBkYXRlQW1vdW50KHNoaXAubGVuZ3RoLCB0cnVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1RvQmVzaGlwcGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNoaXBzVG9CZXNoaXBwZWRbaV1bMF0gPT09IHNoaXBbMF0pIHtcbiAgICAgIHNoaXBzVG9CZXNoaXBwZWQuc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgcGFydCBvZiBzaGlwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Mke3BhcnR9YCkuaW5uZXJIVE1MID0gJyc7XG4gICAgZGVsZXRlIHNoaXBCdWNrZXRbcGFydF07XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVRvZ2dsZUJ1dHRvbigpIHtcbiAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtb3JpZW50YXRpb24nKTtcbiAgdG9nZ2xlLnZhbHVlID0gZmFsc2U7XG4gIHRvZ2dsZS50ZXh0Q29udGVudCA9ICdIb3InO1xuICB0b2dnbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3Zpb2xldCc7XG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IHRydWU7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdWZXInO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JlZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IGZhbHNlO1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnSG9yJztcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2aW9sZXQnO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b2dnbGU7XG59XG5cbmZ1bmN0aW9uIG1vY2tTaGlwKHNpemUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbW9jay1jZWxsJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VDb3VudGVyKHNpemUpIHtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3BpY2tlci1jb3VudGVyJyk7XG4gIGNvbnN0IGFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYW1vdW50LmlkID0gYGFtb3VudCR7c2l6ZX1gO1xuICBhbW91bnQudGV4dENvbnRlbnQgPSBwaWNrZXJTaXplW3NpemVdO1xuICBjb3VudGVyLmFwcGVuZENoaWxkKGFtb3VudCk7XG4gIHJldHVybiBjb3VudGVyO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBbW91bnQoc2l6ZSwgYWRkKSB7XG4gIHBpY2tlclNpemVbc2l6ZV0gKz0gMiAqIGFkZCAtIDE7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhbW91bnQke3NpemV9YCkudGV4dENvbnRlbnQgPSBwaWNrZXJTaXplW3NpemVdO1xufVxuXG5mdW5jdGlvbiBhbGxTaGlwc0RlcGxveWVkKCkge1xuICBsZXQgYWxsRGVwbG95ZWQgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gNTsgaSA+IDE7IGktLSkge1xuICAgIGFsbERlcGxveWVkICY9IHBpY2tlclNpemVbaV0gPT09IDA7XG4gIH1cbiAgcmV0dXJuIGFsbERlcGxveWVkO1xufVxuIiwiaW1wb3J0IGZhbmN5QnV0dG9uIGZyb20gJy4vZmFuY3lCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cFByb21wdChnYW1lKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaWQgPSAnc2V0dXAtcHJvbXB0JztcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBjb250YWluZXIuc3R5bGUucGFkZGluZ1RvcCA9ICc0MHZoJztcblxuICBjb25zdCBidG4gPSBmYW5jeUJ1dHRvbigpO1xuICBidG4udGV4dENvbnRlbnQgPSBgcGxheWVyICR7Z2FtZS5nZXRDdXJyZW50UGxheWVyKCkgKyAxfSB0byBkZXBsb3kgc2hpcHMuLmA7XG4gIGJ0bi5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICBidG4uc3R5bGUucGFkZGluZyA9ICcyMHB4JztcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGdhbWUucHVwcGV0ZWVyKCdzZXR1cC1ib2FyZCcpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBmYW5jeUJ1dHRvbiBmcm9tIFwiLi9mYW5jeUJ1dHRvblwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aXRsZVNjcmVlbihnYW1lKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaWQgPSAndGl0bGUtc2NyZWVuJztcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCB7XG4gICAgcGFkZGluZ1RvcDogJzM1dmgnLFxuICB9KTtcblxuICBjb25zdCBidG4gPSBmYW5jeUJ1dHRvbigpO1xuICBidG4udGV4dENvbnRlbnQgPSAnRmFuY3kgQmF0dGxlc2hpcC4nO1xuICBidG4uc3R5bGUuZm9udFdlaWdodCA9IDYwMDtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIGdhbWUucHVwcGV0ZWVyKCdwaWNrLXBsYXllcnMnKVxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImZ1bmN0aW9uIHJhbmdlKHN0YXJ0QXQgPSAwLCBzaXplLCBzdGVwKSB7XG4gIGlmICghc3RlcCkge1xuICAgIHN0ZXAgPSAgMTtcbiAgfTtcbiAgcmV0dXJuIFsuLi5BcnJheShzaXplKS5rZXlzKCldLm1hcCgoaSkgPT4gaSAqIHN0ZXAgKyBzdGFydEF0KTtcbn1cblxuZXhwb3J0IHsgcmFuZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXNoZWV0cy9pbmRleC5jc3MnO1xuaW1wb3J0IG5leHRQbGF5ZXIgZnJvbSAnLi91aS1tb2R1bGVzL25leHRQbGF5ZXInO1xuaW1wb3J0IHBpY2tQbGF5ZXJzU2NyZWVuIGZyb20gJy4vdWktbW9kdWxlcy9waWNrUGxheWVycyc7XG5pbXBvcnQgdGl0bGVTY3JlZW4gZnJvbSAnLi91aS1tb2R1bGVzL3RpdGxlU2NyZWVuJztcbmltcG9ydCBzZXR1cFByb21wdCBmcm9tICcuL3VpLW1vZHVsZXMvc2V0dXBQcm9tcHQnO1xuaW1wb3J0IGdhbWVWaWV3IGZyb20gJy4vdWktbW9kdWxlcy9nYW1lVmlldyc7XG5pbXBvcnQgc2V0dXBCb2FyZCBmcm9tICcuL3VpLW1vZHVsZXMvc2V0dXBCb2FyZCc7XG5pbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tICcuL2xvZ2ljLW1vZHVsZXMvcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgeyByZW5kZXJTaG90cywgcmVuZGVyU2hpcHMgfSBmcm9tICcuL3VpLW1vZHVsZXMvcmVuZGVyU3RhdGUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuXG5jb25zdCBnYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGxheWVycyA9IFtwbGF5ZXJGYWN0b3J5KDEwKSwgcGxheWVyRmFjdG9yeSgxMCldO1xuICBsZXQgY3VycmVudFBsYXllciA9IGZhbHNlOyAvLyBUaGVyZSB3aWxsIG9ubHkgYmUgMiBwbGF5ZXJzLCBzbyBib29sIHdvcmtzIGZpbmVcbiAgbGV0IHBsYXllcjJhaSA9IGZhbHNlO1xuXG4gIC8vIHBsYXllcnNbMF0uc2V0UmFuZG9tQm9hcmQoKTtcbiAgLy8gcGxheWVyc1sxXS5zZXRSYW5kb21Cb2FyZCgpO1xuICAvLyBzZXRBaVBsYXllcigpO1xuXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBwbGF5ZXJzLnNwbGljZSgwLCBwbGF5ZXJzLmxlbmd0aCk7XG4gICAgYS5wdXNoKHBsYXllckZhY3RvcnkoMTApLCBwbGF5ZXJGYWN0b3J5KDEwKSk7XG4gICAgY3VycmVudFBsYXllciA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBdHRhY2soaWR4KSB7XG4gICAgcGxheWVyc1shY3VycmVudFBsYXllciAqIDFdLnJlY2VpdmVBdHRhY2soaWR4KTtcbiAgICBjb25zdCB3aW5jb24gPVxuICAgICAgcGxheWVyc1shY3VycmVudFBsYXllciAqIDFdLmdldFN1bmtTaGlwcygpLmxlbmd0aCA9PT1cbiAgICAgIHBsYXllcnNbIWN1cnJlbnRQbGF5ZXIgKiAxXS5wZWVrQXRTaGlwcygpLmxlbmd0aDtcbiAgICByZXR1cm4gd2luY29uO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWlQbGF5ZXIoKSB7XG4gICAgcGxheWVyMmFpID0gdHJ1ZTtcbiAgICBwbGF5ZXJzWzFdLnNldFJhbmRvbUJvYXJkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FpUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWVyMmFpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVwcGV0ZWVyKHNjcmVlbikge1xuICAgIHN3aXRjaCAoc2NyZWVuKSB7XG4gICAgICBjYXNlICd0aXRsZS1zY3JlZW4nOlxuICAgICAgICByb290LmFwcGVuZENoaWxkKHRpdGxlU2NyZWVuKGdhbWUpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BpY2stcGxheWVycyc6XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQocGlja1BsYXllcnNTY3JlZW4oZ2FtZSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ2FtZS12aWV3JzpcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChnYW1lVmlldyhnYW1lKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICduZXh0LXBsYXllcic6XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQobmV4dFBsYXllcihnYW1lKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzZXR1cC1wcm9tcHQnOlxuICAgICAgICByb290LmFwcGVuZENoaWxkKHNldHVwUHJvbXB0KGdhbWUpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NldHVwLWJvYXJkJzpcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChzZXR1cEJvYXJkKGdhbWUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlUGxheWVyKCkge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSAhY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcGxveUFsbFNoaXBzKHNoaXBzVG9CZURlcGxveWVkKSB7XG4gICAgbGV0IHdlaXJkSW5kZXhGaXggPSBjdXJyZW50UGxheWVyICsgMSAtIDE7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzVG9CZURlcGxveWVkKSB7XG4gICAgICBwbGF5ZXJzW3dlaXJkSW5kZXhGaXhdLmRlcGxveVNoaXAoLi4uc2hpcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoaXBzOiBwbGF5ZXJzW2N1cnJlbnRQbGF5ZXIgKyAxIC0gMV0ucGVla0F0U2hpcHMoKSxcbiAgICAgIG1hcmtzOiBwbGF5ZXJzW2N1cnJlbnRQbGF5ZXIgKyAxIC0gMV0uZ2V0TWFya2VkQ2VsbHMoKSxcbiAgICAgIHN1bms6IHBsYXllcnNbY3VycmVudFBsYXllciArIDEgLSAxXS5nZXRTdW5rU2hpcHMoKSxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5lbXlEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaGlwczogcGxheWVyc1shY3VycmVudFBsYXllciArIDEgLSAxXS5wZWVrQXRTaGlwcygpLFxuICAgICAgbWFya3M6IHBsYXllcnNbIWN1cnJlbnRQbGF5ZXIgKyAxIC0gMV0uZ2V0TWFya2VkQ2VsbHMoKSxcbiAgICAgIHN1bms6IHBsYXllcnNbIWN1cnJlbnRQbGF5ZXIgKyAxIC0gMV0uZ2V0U3Vua1NoaXBzKCksXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQUltb3ZlKCkge1xuICAgIGNvbnN0IGdldFJhbmRvbUlkeCA9ICgpID0+IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgaWYgKGlzQWlQbGF5aW5nKCkpIHtcbiAgICAgIGxldCBtb3ZlID0gZ2V0UmFuZG9tSWR4KCk7XG4gICAgICB3aGlsZSAocGxheWVyc1swXS5wZWVrQXRTaGlwSW5kZXhlcygpLmluY2x1ZGVzKG1vdmUpKSB7XG4gICAgICAgIG1vdmUgPSBnZXRSYW5kb21JZHgoKTtcbiAgICAgIH1cbiAgICAgIHBsYXllcnNbMF0ucmVjZWl2ZUF0dGFjayhtb3ZlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2V0R2FtZSxcbiAgICByZWdpc3RlckF0dGFjayxcbiAgICBzZXRBaVBsYXllcixcbiAgICBwdXBwZXRlZXIsXG4gICAgZ2V0Q3VycmVudFBsYXllcixcbiAgICBkZXBsb3lBbGxTaGlwcyxcbiAgICBnZXRDdXJyZW50RGF0YSxcbiAgICBnZXRFbmVteURhdGEsXG4gICAgY3ljbGVQbGF5ZXIsXG4gICAgaXNBaVBsYXlpbmcsXG4gICAgcmVnaXN0ZXJBSW1vdmUsXG4gIH07XG59KSgpO1xuXG5nYW1lLnB1cHBldGVlcigndGl0bGUtc2NyZWVuJyk7XG5cbi8qKlxuICogZm9yIGV2ZXJ5IHNoaXBcbiAqICBjb25zb2xlLmxvZyhzaGlwLmdldFNlZ21lbnRzKCkpXG4gKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==