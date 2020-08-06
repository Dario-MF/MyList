(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-library"] = factory();
	else
		root["my-library"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/postcss-loader/src??ref--4-3!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--4-5!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/firebase/config */ "./src/scripts/firebase/config.js");
/* harmony import */ var _scripts_firebase_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_firebase_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/firebase/auth */ "./src/scripts/firebase/auth.js");
/* harmony import */ var _scripts_moduls_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/moduls/events */ "./src/scripts/moduls/events.js");
/* harmony import */ var _scripts_moduls_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_moduls_events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_moduls_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/moduls/menus */ "./src/scripts/moduls/menus.js");
/* harmony import */ var _scripts_firebase_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/firebase/controller */ "./src/scripts/firebase/controller.js");
/* harmony import */ var _scripts_users_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/users/list */ "./src/scripts/users/list.js");
/* harmony import */ var _scripts_users_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/users/task */ "./src/scripts/users/task.js");
/* harmony import */ var _scripts_users_list_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/users/list-controller */ "./src/scripts/users/list-controller.js");










/***/ }),

/***/ "./src/img/avatarLogin.png":
/*!*********************************!*\
  !*** ./src/img/avatarLogin.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/avatarLogin.png");

/***/ }),

/***/ "./src/img/avatarLogout.png":
/*!**********************************!*\
  !*** ./src/img/avatarLogout.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/avatarLogout.png");

/***/ }),

/***/ "./src/scripts/firebase/auth.js":
/*!**************************************!*\
  !*** ./src/scripts/firebase/auth.js ***!
  \**************************************/
/*! exports provided: Autenticacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autenticacion", function() { return Autenticacion; });
/* harmony import */ var _moduls_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moduls/menus */ "./src/scripts/moduls/menus.js");
/* harmony import */ var _img_avatarLogin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/avatarLogin.png */ "./src/img/avatarLogin.png");
/* harmony import */ var _users_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/list */ "./src/scripts/users/list.js");
/* harmony import */ var _users_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/task */ "./src/scripts/users/task.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Autenticacion = /*#__PURE__*/function () {
  function Autenticacion() {
    _classCallCheck(this, Autenticacion);
  }

  _createClass(Autenticacion, [{
    key: "autEmailPass",
    value: function autEmailPass(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
        if (result.user.emailVerified) {
          document.getElementById('imgUser').src = _img_avatarLogin_png__WEBPACK_IMPORTED_MODULE_1__["default"];
          var list = new _users_list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
          var task = new _users_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
          list.consultarLists();
          task.consultarTask();
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Bienvenido ".concat(result.user.displayName), 5000);
        } else {
          firebase.auth().signOut();
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Por favor verifique su cuenta con el email", 5000);
        }

        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalLogin"]);
      });
    }
  }, {
    key: "crearCuentaEmail",
    value: function crearCuentaEmail(nombre, email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
        result.user.updateProfile({
          displayName: nombre
        });
        var configuracion = {
          url: 'http://localhost:8080/#' //Url hosting.

        };
        result.user.sendEmailVerification(configuracion).catch(function (error) {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C error: ".concat(error.message), 5000);
        });
        firebase.auth().signOut();
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u2705 ".concat(nombre, " Registro correcto!! recuerde verificarse con el email"), 5000);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalRegistro"]);
        var list = new _users_list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
        var task = new _users_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        list.consultarLists();
        task.consultarTask();
      }).catch(function (error) {
        console.error(error);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C error: ".concat(error), 5000);
      });
    }
  }, {
    key: "authWithGoogle",
    value: function authWithGoogle() {
      var provGoogle = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provGoogle).then(function (result) {
        document.getElementById('imgUser').url = result.user.photoURL;
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalRegistro"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalLogin"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Bienvenido ".concat(result.user.displayName, " !!"), 5000);
        var list = new _users_list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
        var task = new _users_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        list.consultarLists();
        task.consultarTask();
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/account-exists-with-different-credential') {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Ya estas registrado en otro proveedor con este email", 5000);
        } else {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Error al autenticarse con Github: ".concat(errorMessage), 5000);
        }
      });
    }
  }, {
    key: "authWithFacebook",
    value: function authWithFacebook() {
      var provFacebook = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provFacebook).then(function (result) {
        document.getElementById('imgUser').url = result.user.photoURL;
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalRegistro"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalLogin"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Bienvenido ".concat(result.user.displayName, " !!"), 5000);
        var list = new _users_list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
        var task = new _users_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        list.consultarLists();
        task.consultarTask();
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/account-exists-with-different-credential') {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Ya estas registrado en otro proveedor con este email", 5000);
        } else {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Error al autenticarse con Github: ".concat(errorMessage), 5000);
        }
      });
    }
  }, {
    key: "authWithGitHub",
    value: function authWithGitHub() {
      var provGithub = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provGithub).then(function (result) {
        document.getElementById('imgUser').url = result.user.photoURL;
        console.log(result.user);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalRegistro"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["modalLogin"]);
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Bienvenido!!", 5000);
        var list = new _users_list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
        var task = new _users_task__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        list.consultarLists();
        task.consultarTask();
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/account-exists-with-different-credential') {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Ya estas registrado en otro proveedor con este email", 5000);
        } else {
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("\u274C Error al autenticarse con Github: ".concat(errorMessage), 5000);
        }
      });
    }
  }]);

  return Autenticacion;
}();



/***/ }),

/***/ "./src/scripts/firebase/config.js":
/*!****************************************!*\
  !*** ./src/scripts/firebase/config.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var config = {
  apiKey: "AIzaSyCFVjxpKcUbbutN2kc8FYjrmqSLvxBXe-g",
  authDomain: "to-do-list-84ef2.firebaseapp.com",
  databaseURL: "https://to-do-list-84ef2.firebaseio.com",
  projectId: "to-do-list-84ef2",
  storageBucket: "to-do-list-84ef2.appspot.com",
  messagingSenderId: "910841674524",
  appId: "1:910841674524:web:3afecdcdea7160132918d9",
  measurementId: "G-Q9X2VGK61H"
};
firebase.initializeApp(config);

/***/ }),

/***/ "./src/scripts/firebase/controller.js":
/*!********************************************!*\
  !*** ./src/scripts/firebase/controller.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/scripts/firebase/auth.js");
/* harmony import */ var _moduls_menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moduls/menus */ "./src/scripts/moduls/menus.js");
/* harmony import */ var _img_avatarLogout_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/avatarLogout.png */ "./src/img/avatarLogout.png");
/* harmony import */ var _img_avatarLogin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/avatarLogin.png */ "./src/img/avatarLogin.png");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





;

(function (d) {
  var auth = new _auth__WEBPACK_IMPORTED_MODULE_0__["Autenticacion"]();
  /* form registro */

  d.getElementById("registroBtnSubmit").addEventListener("click", function () {
    var regName = d.getElementById("regName").value;
    var regEmail = d.getElementById("regEmail").value;
    var regPassword = d.getElementById("regPassword").value;
    auth.crearCuentaEmail(regName, regEmail, regPassword);
  });
  /* form login */

  d.getElementById("loginBtnSubmit").addEventListener("click", function () {
    var loginEmail = d.getElementById("loginEmail").value;
    var loginPassword = d.getElementById("loginPassword").value;
    auth.autEmailPass(loginEmail, loginPassword);
  });
  /* Login google */

  var authGoogle = d.getElementsByClassName("auth-social-google");

  var _iterator = _createForOfIteratorHelper(authGoogle),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      element.addEventListener("click", function () {
        auth.authWithGoogle();
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
  /* login facebook */

  var authFacebook = d.getElementsByClassName("auth-social-facebook");

  var _iterator2 = _createForOfIteratorHelper(authFacebook),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _element = _step2.value;

      _element.addEventListener("click", function () {
        auth.authWithFacebook();
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ;
  /* login Github */

  var authGithub = d.getElementsByClassName("auth-social-github");

  var _iterator3 = _createForOfIteratorHelper(authGithub),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _element2 = _step3.value;

      _element2.addEventListener("click", function () {
        auth.authWithGitHub();
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  ;
  /* menu item auth-change */

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      d.getElementById("linkIdentificarse").style.display = "none";
      d.getElementById("linkRegistrarse").style.display = "none";
      d.getElementById("linkLogOut").style.display = "block";
      d.getElementById("workStage").style.display = "flex";
      d.getElementById("eslogan").style.display = "none";

      if (user.photoURL) {
        d.getElementById('imgUser').src = user.photoURL;
      } else {
        d.getElementById('imgUser').src = _img_avatarLogin_png__WEBPACK_IMPORTED_MODULE_3__["default"];
      }
    }
  });
  /* logOut user */

  var linkLogOut = d.getElementById("linkLogOut");
  linkLogOut.addEventListener("click", function () {
    var user = firebase.auth().currentUser;

    if (user) {
      return firebase.auth().signOut().then(function () {
        linkLogOut.style.display = "none";
        d.getElementById("linkIdentificarse").style.display = "block";
        d.getElementById("linkRegistrarse").style.display = "block";
        d.getElementById("workStage").style.display = "none";
        d.getElementById("eslogan").style.display = "block";
        d.getElementById('imgUser').src = _img_avatarLogout_png__WEBPACK_IMPORTED_MODULE_2__["default"];
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_1__["showInfo"])('Se desconecto correctamente', 5000);
      }).catch(function (error) {
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_1__["showInfo"])("Error en la desconexion: ".concat(error));
      });
    }
  });
})(document);

/***/ }),

/***/ "./src/scripts/moduls/events.js":
/*!**************************************!*\
  !*** ./src/scripts/moduls/events.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/scripts/moduls/menus.js":
/*!*************************************!*\
  !*** ./src/scripts/moduls/menus.js ***!
  \*************************************/
/*! exports provided: showModal, closeModal, showInfo, eventNewTask, activeMenu, separadorOrden, tasksInFocus, modalLogin, modalRegistro, idListTarget, ordenarTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfo", function() { return showInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventNewTask", function() { return eventNewTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeMenu", function() { return activeMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separadorOrden", function() { return separadorOrden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksInFocus", function() { return tasksInFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalLogin", function() { return modalLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalRegistro", function() { return modalRegistro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idListTarget", function() { return idListTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordenarTask", function() { return ordenarTask; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

;

var showModal = function showModal(modal) {
  modal.classList.add("is-active");
};

var closeModal = function closeModal(modal) {
  modal.classList.remove("is-active");
};

var activeMenu = function activeMenu(button, modal) {
  button.classList.toggle("is-active");
  modal.classList.toggle("is-active");
};

var showInfo = function showInfo(mensaje, tiempo) {
  var infoText = document.getElementById("infoText");
  var infoBox = document.getElementById("infoBox");
  infoText.innerText = mensaje;
  infoBox.style.marginRight = '0';
  window.setTimeout(function () {
    infoBox.style.marginRight = '-50rem';
    infoText.innerText = '';
  }, tiempo);
};
/* menu ppal */


var hamburger = document.querySelector(".hamburger");
var header = document.querySelector(".header");
hamburger.addEventListener("click", function () {
  activeMenu(hamburger, header);
});
/* modal registro */

var btnRegistro = document.getElementById("linkRegistrarse");
var modalRegistro = document.getElementById("modalRegistro");
var registroBtnClose = document.getElementById("registroBtnClose");
btnRegistro.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal(modalLogin);
  showModal(modalRegistro);
  activeMenu(hamburger, header);
});
registroBtnClose.addEventListener("click", function () {
  closeModal(modalRegistro);
});
/* Modal Login */

var btnLogin = document.getElementById("linkIdentificarse");
var modalLogin = document.getElementById("modalLogin");
var loginBtnClose = document.getElementById("loginBtnClose");
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal(modalRegistro);
  showModal(modalLogin);
  activeMenu(hamburger, header);
});
loginBtnClose.addEventListener("click", function () {
  closeModal(modalLogin);
});
/* Modal new list */

var btnNewList = document.getElementById("btnNewList");
var modalNewList = document.getElementById("modalNewList");
var newListBtnClose = document.getElementById("newListBtnClose");
btnNewList.addEventListener("click", function () {
  showModal(modalNewList);
});
newListBtnClose.addEventListener("click", function () {
  closeModal(modalNewList);
});
/* Modal new task */

var eventNewTask = function eventNewTask(listId) {
  var btnOpenNewTask = document.querySelector("#id".concat(listId, " .new-task"));
  var modalNewTask = document.getElementById("modalNewTask");
  btnOpenNewTask.addEventListener("click", function () {
    activeMenu(btnOpenNewTask, modalNewTask);
    document.getElementById("newTaskName").value = '';
  });
};
/* Obtener id List en target */


var idListTarget = function idListTarget() {
  var lists = document.querySelectorAll(".lists-pendings li");

  var _iterator = _createForOfIteratorHelper(lists),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var list = _step.value;

      if (list.style.zIndex == 50) {
        return list.id;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/* Vistas de tareas */


var tasksInFocus = function tasksInFocus() {
  var tasksOpen = document.querySelectorAll(".".concat(idListTarget()));
  var tasksPending = document.querySelectorAll(".list-pending li");
  var tasksDone = document.querySelectorAll(".done-list li");

  var _iterator2 = _createForOfIteratorHelper(tasksPending),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var task = _step2.value;
      task.style.display = 'none';
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(tasksDone),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _task = _step3.value;
      _task.style.display = 'none';
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = _createForOfIteratorHelper(tasksOpen),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _task2 = _step4.value;
      _task2.style.display = 'block';
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
/* ordenar separadores */


var separadorOrden = function separadorOrden() {
  var separadores = document.querySelectorAll(".btn-separador");

  var _iterator5 = _createForOfIteratorHelper(separadores),
      _step5;

  try {
    var _loop = function _loop() {
      var separador = _step5.value;
      var indexMarcador = 49;
      separador.addEventListener("click", function (e) {
        var listTarget = e.target.parentNode.parentNode;
        var lists = document.querySelectorAll(".lists-pendings li");

        var _iterator6 = _createForOfIteratorHelper(lists),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var list = _step6.value;

            if (list == listTarget) {
              list.style.zIndex = '50';
              tasksInFocus();
            } else {
              list.style.zIndex = "".concat(indexMarcador);
              indexMarcador -= 1;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      });
    };

    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
/* ordenar por status */


var ordenarStatus = function ordenarStatus(status) {
  var listBox = document.querySelector("#listPending");
  var tasks = document.querySelectorAll("#listPending li");
  var arrayTask = Array.from(tasks);
  arrayTask.sort(function (a, b) {
    if (a.classList.contains(status)) {
      return -1;
    } else {
      return 1;
    }
  }).forEach(function (task) {
    listBox.appendChild(task);
  });
};
/* Evento ordenar tareas */


var ordenarTask = function ordenarTask() {
  var btnsOrden = document.querySelectorAll(".button-task");

  var _iterator7 = _createForOfIteratorHelper(btnsOrden),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var btn = _step7.value;
      btn.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-urgente")) {
          ordenarStatus("urgente");
        } else if (e.target.classList.contains("btn-importante")) {
          ordenarStatus("importante");
        } else if (e.target.classList.contains("btn-no-importante")) {
          ordenarStatus("no-importante");
        }
      });
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
};



/***/ }),

/***/ "./src/scripts/users/list-controller.js":
/*!**********************************************!*\
  !*** ./src/scripts/users/list-controller.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moduls/menus */ "./src/scripts/moduls/menus.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/scripts/users/task.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/scripts/users/list.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var list = new _list__WEBPACK_IMPORTED_MODULE_2__["Lista"]();
var task = new _task__WEBPACK_IMPORTED_MODULE_1__["Task"]();
/* Crear nueva lista */

document.getElementById("listBtnSubmit").addEventListener("click", function () {
  var user = firebase.auth().currentUser;
  var lists = document.querySelectorAll(".lists-pendings li");
  var color = document.getElementById("selectColorList").value;

  if (user == null) {
    Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])('Para crear una lista debe estar registrado', 5000);
    return;
  } else if (lists.length >= 10) {
    Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])('No se pueden crear mas listas', 5000);
  } else {
    list.crearList(user.uid, user.email, color);
  }

  var modalNewList = document.getElementById("modalNewList");
  Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modalNewList);
});
/* Crear nueva tarea*/

document.getElementById("btnCreateTask").addEventListener("click", function () {
  var user = firebase.auth().currentUser;
  var newTaskName = document.getElementById("newTaskName").value;
  var statusTask = document.getElementById("statusTask").value;
  var idList = Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["idListTarget"])();

  if (user == null) {
    Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])('Para crear una tarea debe estar registrado', 5000);
    return;
  } else {
    task.crearTask(user.uid, idList, newTaskName, statusTask);
  }

  var btnCloseNewTask = document.querySelector("#".concat(idList, " .new-task"));
  var modalNewTask = document.getElementById("modalNewTask");
  Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["activeMenu"])(btnCloseNewTask, modalNewTask);
});
/* Eliminar Lista */

var btnDeleteList = document.getElementById("btnDeleteList");
btnDeleteList.addEventListener("click", function () {
  list.deleteList(Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["idListTarget"])());
  var tasksOfLista = document.querySelectorAll(".".concat(Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["idListTarget"])()));

  var _iterator = _createForOfIteratorHelper(tasksOfLista),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      task.deleteTask(item.id);
      console.log(item.id);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ }),

/***/ "./src/scripts/users/list.js":
/*!***********************************!*\
  !*** ./src/scripts/users/list.js ***!
  \***********************************/
/*! exports provided: Lista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lista", function() { return Lista; });
/* harmony import */ var _moduls_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moduls/menus */ "./src/scripts/moduls/menus.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Lista = /*#__PURE__*/function () {
  function Lista() {
    _classCallCheck(this, Lista);

    this.db = firebase.firestore();
  }

  _createClass(Lista, [{
    key: "crearList",
    value: function crearList(uid, emailUser, color) {
      return this.db.collection('listas').add({
        uid: uid,
        autor: emailUser,
        color: color
      }).then(function (refDoc) {
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Lista creada correctamente", 5000);
      }).catch(function (error) {
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Error en la creacion de la lista: ".concat(error), 5000);
      });
    }
  }, {
    key: "consultarLists",
    value: function consultarLists() {
      var _this = this;

      var user = firebase.auth().currentUser;
      this.db.collection('listas').where("autor", "==", user.email).onSnapshot(function (querySnapshot) {
        var lists = document.getElementById("listPendings");
        lists.innerHTML = '';
        var widthMarcador = 90.1;
        var indexMarcador = 50;
        querySnapshot.forEach(function (list) {
          var listHtml = _this.listTemplate(list.data().color, list.id);

          lists.insertAdjacentHTML('afterbegin', listHtml);
          var marcador = document.querySelector("#id".concat(list.id, " .btn-separador"));
          marcador.style.right = "".concat(widthMarcador, "%");
          document.querySelector("#id".concat(list.id)).style.zIndex = "".concat(indexMarcador);
          widthMarcador -= 10;
          indexMarcador -= 1;
          Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["eventNewTask"])(list.id);
        });
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["separadorOrden"])();
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["ordenarTask"])();
      });
    }
  }, {
    key: "deleteList",
    value: function deleteList(listId) {
      this.db.collection('listas').doc(listId.substring(2)).delete();
      Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Lista borrada correctamente", 5000);
    }
  }, {
    key: "listTemplate",
    value: function listTemplate(color, listaId) {
      return "<li id=\"id".concat(listaId, "\">\n                <div class=\"list-user\" style=\"background-color:").concat(color, "\">\n                    <div class=\"btn-separador\"></div>\n                    <div class=\"box-btn-task\">\n                        <div class=\"new-task\" title=\"A\xF1adir nueva tarea\"></div>\n                    </div>\n                    <div class=\"button-task btn-urgente\" title=\"Ordenar uregentes\"></div>\n                    <div class=\"button-task btn-importante\" title=\"Ordenar importantes\"></div>\n                    <div class=\"button-task btn-no-importante\" title=\"Ordenar no importantes\"></div>\n                </div>\n            </li >");
    }
  }]);

  return Lista;
}();



/***/ }),

/***/ "./src/scripts/users/task.js":
/*!***********************************!*\
  !*** ./src/scripts/users/task.js ***!
  \***********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var _moduls_menus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moduls/menus */ "./src/scripts/moduls/menus.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Task = /*#__PURE__*/function () {
  function Task() {
    _classCallCheck(this, Task);

    this.db = firebase.firestore();
  }

  _createClass(Task, [{
    key: "crearTask",
    value: function crearTask(uid, idList, titleTask, status) {
      return this.db.collection('tasks').add({
        uid: uid,
        idList: idList,
        titleTask: titleTask,
        status: status,
        finalizado: false
      }).then(function (refDoc) {
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Tarea creada correctamente", 5000);
      }).catch(function (error) {
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["showInfo"])("Error en la creacion de la tarea: ".concat(error), 5000);
      });
    }
  }, {
    key: "consultarTask",
    value: function consultarTask() {
      var _this = this;

      var user = firebase.auth().currentUser;
      this.db.collection('tasks').where("uid", "==", user.uid).onSnapshot(function (querySnapshot) {
        var listPending = document.getElementById("listPending");
        var listDone = document.getElementById("doneList");
        listPending.innerHTML = '';
        listDone.innerHTML = '';
        querySnapshot.forEach(function (task) {
          var taskHtml = _this.taskTemplate(task.data().titleTask, task.data().idList, task.data().status, task.id);

          var taskHtmlChecked = _this.taskTemplateCheked(task.data().titleTask, task.data().idList, task.data().status, task.id);

          if (task.data().finalizado) {
            listDone.insertAdjacentHTML('beforeend', taskHtmlChecked);
          } else {
            listPending.insertAdjacentHTML('beforeend', taskHtml);
          }

          _this.deleteTaskEvent();

          _this.finalizarTaskEvent();
        });
        Object(_moduls_menus__WEBPACK_IMPORTED_MODULE_0__["tasksInFocus"])();
      });
    }
  }, {
    key: "updateTask",
    value: function updateTask(final, taskId) {
      var refUser = this.db.collection('tasks').doc(taskId.substring(2));
      refUser.update({
        finalizado: final
      });
    }
  }, {
    key: "finalizarTaskEvent",
    value: function finalizarTaskEvent() {
      var _this2 = this;

      var checkItems = document.querySelectorAll(".list-item-check");

      var _iterator = _createForOfIteratorHelper(checkItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.addEventListener("click", function (e) {
            if (e.target.checked == true) {
              _this2.updateTask(true, e.target.parentNode.parentNode.id);
            } else {
              _this2.updateTask(false, e.target.parentNode.parentNode.id);
            }
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(taskId) {
      this.db.collection('tasks').doc(taskId.substring(2)).delete();
    }
  }, {
    key: "deleteTaskEvent",
    value: function deleteTaskEvent() {
      var _this3 = this;

      var btnsDeleteTask = document.querySelectorAll(".delete-task");

      var _iterator2 = _createForOfIteratorHelper(btnsDeleteTask),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var btn = _step2.value;
          btn.addEventListener("click", function (e) {
            var taskId = e.target.parentNode.parentNode.id;

            _this3.deleteTask(taskId);
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "taskTemplate",
    value: function taskTemplate(titleTask, listaId, status, taskId) {
      return "<li class=\"".concat(listaId, " ").concat(status, "\" id=\"id").concat(taskId, "\">\n                    <div class=\"list-item ").concat(status, "\">\n                        <h3 class=\"list-item-title\">").concat(titleTask, "</h3>\n                        <input class=\"list-item-check\" type=\"checkbox\" title=\"Finalizar\">\n                        <div class=\"delete-task\" id=\"deleteTask\" title=\"Eliminar\"></div>\n                    </div>\n                </li>");
    }
  }, {
    key: "taskTemplateCheked",
    value: function taskTemplateCheked(titleTask, listaId, status, taskId) {
      return "<li class=\"".concat(listaId, " ").concat(status, "\" id=\"id").concat(taskId, "\">\n                    <div class=\"list-item ").concat(status, " finalizado\">\n                        <h3 class=\"list-item-title\">").concat(titleTask, "</h3>\n                        <input class=\"list-item-check\" type=\"checkbox\" checked title=\"Finalizar\">\n                        <div class=\"delete-task\" id=\"deleteTask\" title=\"Eliminar\"></div>\n                    </div>\n                </li>");
    }
  }]);

  return Task;
}();



/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/postcss-loader/src??ref--4-3!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js??ref--4-5!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
});
//# sourceMappingURL=main.26b43898a2db66272736.js.map