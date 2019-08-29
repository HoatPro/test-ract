module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_Common_redirectTo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Common/redirectTo.js */ "./src/components/Common/redirectTo.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/utils/config */ "./src/utils/config.js");
/* harmony import */ var _src_utils_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_utils_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_12__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var config = _src_utils_config__WEBPACK_IMPORTED_MODULE_11___default.a[_src_utils_config__WEBPACK_IMPORTED_MODULE_11___default.a.environment];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(_src_redux_store__WEBPACK_IMPORTED_MODULE_6__["initStore"])(
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      // console.log('router ... ',Router);
      // if(!_.isUndefined(Router.router) && !_.isNull(Router.router) && Router.router.asPath !== '/login'){
      //   Router.push('/login');
      // }
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Raca")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
        autoClose: 2000
      }));
    }
  }], [{
    key: "resetCookies",
    value: function resetCookies(ctx) {
      Object(nookies__WEBPACK_IMPORTED_MODULE_12__["destroyCookie"])(ctx, 'authtoken');
      Object(nookies__WEBPACK_IMPORTED_MODULE_12__["destroyCookie"])(ctx, 'user');
    }
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var _this = this;

        var Component, router, ctx, pageProps, coo, query, authtoken, redirect, url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.prev = 1;
                pageProps = {};
                coo = Object(nookies__WEBPACK_IMPORTED_MODULE_12__["parseCookies"])(ctx);

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return Component.getInitialProps(ctx);

              case 7:
                pageProps = _context.sent;

              case 8:
                // console.log(ctx);
                // return  pageProps;
                //if the authtoken is not found
                // console.log(coo.authtoken, ctx.pathname);
                query = ctx.query || {};
                authtoken = coo.authtoken || query.token;
                console.log(1, authtoken);

                if (authtoken) {
                  _context.next = 27;
                  break;
                }

                _context.prev = 12;
                this.resetCookies(ctx); //don't do anything if we are on a page that doesn't require credentials

                if (!(ctx.pathname === "/login" || ctx.pathname === "/forgot-password")) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 18:
                redirect = config.originRoot + '/openid?redirect=' + config.originFrontend;
                return _context.abrupt("return", Object(_src_components_Common_redirectTo_js__WEBPACK_IMPORTED_MODULE_9__["default"])(redirect, {
                  res: ctx.res,
                  status: 301
                }));

              case 20:
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](12);
                console.log('error 1', _context.t0);

              case 25:
                _context.next = 33;
                break;

              case 27:
                // console.log(3);
                //
                // console.log('access_token', authtoken, config.environment);
                // Cookies.set('authtoken', authtoken);
                Object(nookies__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(ctx, 'authtoken', authtoken, {
                  maxAge: 24 * 60 * 60,
                  path: '/'
                }); // if(ctx.res) ctx.res.cookie('authtoken', authtoken);

                url = '';

                if (_src_utils_config__WEBPACK_IMPORTED_MODULE_11___default.a.environment === "production") {
                  if (ctx.res) {
                    url = 'http://172.27.219.41:3001';
                  } else {
                    url = config.originBackend;
                  }
                } else {
                  url = config.originBackend;
                }

                _context.next = 32;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat(url, "/raca-api/auth-user"), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    'access_token': authtoken
                  })
                }).then(function (r) {
                  return r.json();
                }).then(function (resp) {
                  if (ctx.pathname === "/login") {
                    try {
                      // console.log('login local', resp.data);
                      //shouldn't show the login page is we are already logged in
                      if (resp.status === 200) {
                        _this.resetCookies(ctx);

                        Object(_src_components_Common_redirectTo_js__WEBPACK_IMPORTED_MODULE_9__["default"])('/', {
                          res: ctx.res,
                          status: 301
                        });
                      } //if it wasn't successful, stay where we are
                      else {
                          _this.resetCookies(ctx);

                          return _objectSpread({}, pageProps, {
                            query: ctx.query,
                            authtoken: authtoken
                          });
                        }
                    } catch (e) {
                      console.log('error 2', e);
                    }
                  } //any other page that requires a login
                  else {
                      try {
                        // console.log('login SSO', resp.data);
                        //if auth check was successful, stay where we are
                        if (resp.status === 200) {
                          var data = resp.data;
                          Object(nookies__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(ctx, 'authtoken', authtoken, {
                            maxAge: 24 * 60 * 60,
                            path: '/'
                          });
                          Object(nookies__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(ctx, 'user', JSON.stringify(data.user), {
                            maxAge: 24 * 60 * 60,
                            path: '/'
                          });
                          return _objectSpread({}, pageProps, {
                            query: ctx.query,
                            authtoken: authtoken
                          });
                        } //if it wasn't successful, clear the authtoken since it must be expired or invalid and redirect to login
                        else {
                            _this.resetCookies(ctx.res); // redirectTo(config.prevURL + '/login', { res: ctx.res, status: 301 });


                            var _redirect = config.originRoot + '/openid'; // const buff = Buffer.from(config.originFrontend, 'utf8').toString('hex');
                            // // ctx.res.cookie('redirect', buff);


                            Object(_src_components_Common_redirectTo_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_redirect, {
                              res: ctx.res,
                              status: 301
                            });
                          }
                      } catch (e) {
                        console.log('error 3', e);
                      }
                    }
                }).catch(function (err) {
                  console.log('err', err);
                  return {
                    pageProps: pageProps
                  };
                });

              case 32:
                response = _context.sent;

              case 33:
                if (!(response !== null)) {
                  _context.next = 38;
                  break;
                }

                // return {response};
                pageProps = response;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 38:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 39:
                _context.next = 44;
                break;

              case 41:
                _context.prev = 41;
                _context.t1 = _context["catch"](1);
                console.log('error', _context.t1);

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 41], [12, 22]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a)));

/***/ }),

/***/ "./src/components/Common/redirectTo.js":
/*!*********************************************!*\
  !*** ./src/components/Common/redirectTo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return redirectTo; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function redirectTo(destination) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      res = _ref.res,
      status = _ref.status;

  if (res) {
    res.writeHead(status || 302, {
      Location: destination
    });
    res.end();
  } else {
    // console.log('client side');
    if (destination[0] === '/' && destination[1] !== '/') {
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(destination);
    } else {
      window.location = destination;
    }
  }
}

/***/ }),

/***/ "./src/redux/_constants/actionTypes.js":
/*!*********************************************!*\
  !*** ./src/redux/_constants/actionTypes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actionTypes = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  ACTIVE_ITEM: 'ACTIVE_ITEM',
  ACTIVE_INDEX_SIDEBAR: 'ACTIVE_INDEX_SIDEBAR',
  //------------ alerts ------------//
  ALERT_SUCCESS: 'ALERT_SUCCESS',
  ALERT_WARNING: 'ALERT_WARNING',
  ALERT_ERROR: 'ALERT_ERROR',
  ALERT_CLEAR: 'ALERT_CLEAR',
  //------------ routes ------------//
  GET_ROUTES_SUCCESS: 'GET_ROUTES_SUCCESS',
  GET_ROUTES_FAILURE: 'GET_ROUTES_FAILURE',
  GET_ALL_ACTION_ROUTE_SUCCESS: 'GET_ALL_ACTION_ROUTE_SUCCESS',
  GET_ALL_ACTION_ROUTE_FAILURE: 'GET_ALL_ACTION_ROUTE_FAILURE',
  GET_ROUTES_BY_ID_SUCCESS: 'GET_ROUTES_BY_ID_SUCCESS',
  GET_ROUTES_BY_ID_FAILURE: 'GET_ROUTES_BY_ID_FAILURE',
  PAGINATION_ROUTES: "PAGINATION_ROUTES",
  PAGINATION_ROUTES_CLEAR: "PAGINATION_ROUTES_CLEAR",
  ON_PAGE_CHANGE_ROUTES: "ON_PAGE_CHANGE_ROUTES",
  GET_ROUTE_PARENTS_SUCCESS: 'GET_ROUTE_PARENTS_SUCCESS',
  GET_ROUTE_PARENTS_FAILURE: 'GET_ROUTE_PARENTS_FAILURE',
  INSERT_ROUTE_REQUEST: 'INSERT_ROUTE_REQUEST',
  INSERT_ROUTE_SUCCESS: 'INSERT_ROUTE_SUCCESS',
  INSERT_ROUTE_FAILURE: 'INSERT_ROUTE_FAILURE',
  UPDATE_ROUTE_REQUEST: 'UPDATE_ROUTE_REQUEST',
  UPDATE_ROUTE_SUCCESS: 'UPDATE_ROUTE_SUCCESS',
  UPDATE_ROUTE_FAILURE: 'UPDATE_ROUTE_FAILURE',
  DELETE_ROUTE_REQUEST: 'DELETE_ROUTE_REQUEST',
  DELETE_ROUTE_SUCCESS: 'DELETE_ROUTE_SUCCESS',
  DELETE_ROUTE_FAILURE: 'DELETE_ROUTE_FAILURE',
  UPDATE_CURRENT_ROUTE: 'UPDATE_CURRENT_ROUTE',
  VALIDATE_ROUTE: 'VALIDATE_ROUTE',
  MODAL_ROUTE: 'MODAL_ROUTE',
  HANDLE_DELETE_ROUTE: 'HANDLE_DELETE_ROUTE',
  HANDLE_UPDATE_ROUTE: 'HANDLE_UPDATE_ROUTE',
  INIT_UPDATE_ROUTE: 'INIT_UPDATE_ROUTE',
  SEARCH_ROUTE: 'SEARCH_ROUTE',
  CHECK_ALL_ACTION_ROUTE: 'CHECK_ALL_ACTION_ROUTE',
  //------------ end routes ------------//
  //------------ groups ------------//
  GET_GROUPS_SUCCESS: 'GET_GROUPS_SUCCESS',
  GET_GROUPS_FAILURE: 'GET_GROUPS_FAILURE',
  GET_GROUPS_BY_ID_SUCCESS: 'GET_GROUPS_BY_ID_SUCCESS',
  GET_GROUPS_BY_ID_FAILURE: 'GET_GROUPS_BY_ID_FAILURE',
  PAGINATION_GROUPS: "PAGINATION_GROUPS",
  PAGINATION_GROUPS_CLEAR: "PAGINATION_GROUPS_CLEAR",
  ON_PAGE_CHANGE_GROUPS: "ON_PAGE_CHANGE_GROUPS",
  INSERT_GROUP_REQUEST: 'INSERT_GROUP_REQUEST',
  INSERT_GROUP_SUCCESS: 'INSERT_GROUP_SUCCESS',
  INSERT_GROUP_FAILURE: 'INSERT_GROUP_FAILURE',
  UPDATE_GROUP_REQUEST: 'UPDATE_GROUP_REQUEST',
  UPDATE_GROUP_SUCCESS: 'UPDATE_GROUP_SUCCESS',
  UPDATE_GROUP_FAILURE: 'UPDATE_GROUP_FAILURE',
  DELETE_GROUP_REQUEST: 'DELETE_GROUP_REQUEST',
  DELETE_GROUP_SUCCESS: 'DELETE_GROUP_SUCCESS',
  DELETE_GROUP_FAILURE: 'DELETE_GROUP_FAILURE',
  UPDATE_CURRENT_GROUP: 'UPDATE_CURRENT_GROUP',
  VALIDATE_GROUP: 'VALIDATE_GROUP',
  MODAL_GROUP: 'MODAL_GROUP',
  HANDLE_DELETE_GROUP: 'HANDLE_DELETE_GROUP',
  HANDLE_UPDATE_GROUP: 'HANDLE_UPDATE_GROUP',
  INIT_UPDATE_GROUP: 'INIT_UPDATE_GROUP',
  SEARCH_GROUP: 'SEARCH_GROUP',
  //------------ end groups ------------//
  //------------ actions ------------//
  GET_ACTIONS_SUCCESS: 'GET_ACTIONS_SUCCESS',
  GET_ACTIONS_FAILURE: 'GET_ACTIONS_FAILURE',
  GET_ACTIONS_BY_ID_SUCCESS: 'GET_ACTIONS_BY_ID_SUCCESS',
  GET_ACTIONS_BY_ID_FAILURE: 'GET_ACTIONS_BY_ID_FAILURE',
  PAGINATION_ACTIONS: "PAGINATION_ACTIONS",
  PAGINATION_ACTIONS_CLEAR: "PAGINATION_ACTIONS_CLEAR",
  ON_PAGE_CHANGE_ACTIONS: "ON_PAGE_CHANGE_ACTIONS",
  INSERT_ACTION_REQUEST: 'INSERT_ACTION_REQUEST',
  INSERT_ACTION_SUCCESS: 'INSERT_ACTION_SUCCESS',
  INSERT_ACTION_FAILURE: 'INSERT_ACTION_FAILURE',
  UPDATE_ACTION_REQUEST: 'UPDATE_ACTION_REQUEST',
  UPDATE_ACTION_SUCCESS: 'UPDATE_ACTION_SUCCESS',
  UPDATE_ACTION_FAILURE: 'UPDATE_ACTION_FAILURE',
  DELETE_ACTION_REQUEST: 'DELETE_ACTION_REQUEST',
  DELETE_ACTION_SUCCESS: 'DELETE_ACTION_SUCCESS',
  DELETE_ACTION_FAILURE: 'DELETE_ACTION_FAILURE',
  UPDATE_CURRENT_ACTION: 'UPDATE_CURRENT_ACTION',
  VALIDATE_ACTION: 'VALIDATE_ACTION',
  MODAL_ACTION: 'MODAL_ACTION',
  HANDLE_DELETE_ACTION: 'HANDLE_DELETE_ACTION',
  HANDLE_UPDATE_ACTION: 'HANDLE_UPDATE_ACTION',
  INIT_UPDATE_ACTION: 'INIT_UPDATE_ACTION',
  SEARCH_ACTION: 'SEARCH_ACTION',
  //------------ end actions ------------//
  //------------ users ------------//
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  GET_USERS_BY_ID_SUCCESS: 'GET_USERS_BY_ID_SUCCESS',
  GET_USERS_BY_ID_FAILURE: 'GET_USERS_BY_ID_FAILURE',
  PAGINATION_USERS: "PAGINATION_USERS",
  PAGINATION_USERS_CLEAR: "PAGINATION_USERS_CLEAR",
  ON_PAGE_CHANGE_USERS: "ON_PAGE_CHANGE_USERS",
  INSERT_USER_REQUEST: 'INSERT_USER_REQUEST',
  INSERT_USER_SUCCESS: 'INSERT_USER_SUCCESS',
  INSERT_USER_FAILURE: 'INSERT_USER_FAILURE',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
  UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
  VALIDATE_USER: 'VALIDATE_USER',
  MODAL_USER: 'MODAL_USER',
  HANDLE_DELETE_USER: 'HANDLE_DELETE_USER',
  HANDLE_UPDATE_USER: 'HANDLE_UPDATE_USER',
  INIT_UPDATE_USER: 'INIT_UPDATE_USER',
  SEARCH_USER: 'SEARCH_USER',
  GET_USER_OTHER_SUCCESS: 'GET_USER_OTHER_SUCCESS',
  GET_USER_OTHER_FAILURE: 'GET_USER_OTHER_FAILURE',
  //------------ end users ------------//
  //------------ permissions ------------//
  GET_PERMISSION_OTHER: 'GET_PERMISSION_OTHER',
  HANDLE_UPDATE_PERMISSION: 'HANDLE_UPDATE_PERMISSION',
  HANDLE_CANCEL_PERMISSION: 'HANDLE_CANCEL_PERMISSION',
  HANDLE_SAVE_PERMISSION_SUCCESS: 'HANDLE_SAVE_PERMISSION_SUCCESS',
  HANDLE_GET_PERMISSION_SUCCESS: 'HANDLE_GET_PERMISSION_SUCCESS',
  UPDATE_CURRENT_PERMISSION: 'UPDATE_CURRENT_PERMISSION',
  //------------ end permissions ------------//
  //------------ locations ------------//
  GET_LOCATIONS_SUCCESS: 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_FAILURE: 'GET_LOCATIONS_FAILURE',
  GET_LOCATIONS_BY_ID_SUCCESS: 'GET_LOCATIONS_BY_ID_SUCCESS',
  GET_LOCATIONS_BY_ID_FAILURE: 'GET_LOCATIONS_BY_ID_FAILURE',
  PAGINATION_LOCATIONS: "PAGINATION_LOCATIONS",
  PAGINATION_LOCATIONS_CLEAR: "PAGINATION_LOCATIONS_CLEAR",
  ON_PAGE_CHANGE_LOCATIONS: "ON_PAGE_CHANGE_LOCATIONS",
  GET_LOCATION_PARENTS_SUCCESS: 'GET_LOCATION_PARENTS_SUCCESS',
  GET_LOCATION_PARENTS_FAILURE: 'GET_LOCATION_PARENTS_FAILURE',
  INSERT_LOCATION_REQUEST: 'INSERT_LOCATION_REQUEST',
  INSERT_LOCATION_SUCCESS: 'INSERT_LOCATION_SUCCESS',
  INSERT_LOCATION_FAILURE: 'INSERT_LOCATION_FAILURE',
  UPDATE_LOCATION_REQUEST: 'UPDATE_LOCATION_REQUEST',
  UPDATE_LOCATION_SUCCESS: 'UPDATE_LOCATION_SUCCESS',
  UPDATE_LOCATION_FAILURE: 'UPDATE_LOCATION_FAILURE',
  DELETE_LOCATION_REQUEST: 'DELETE_LOCATION_REQUEST',
  DELETE_LOCATION_SUCCESS: 'DELETE_LOCATION_SUCCESS',
  DELETE_LOCATION_FAILURE: 'DELETE_LOCATION_FAILURE',
  UPDATE_CURRENT_LOCATION: 'UPDATE_CURRENT_LOCATION',
  VALIDATE_LOCATION: 'VALIDATE_LOCATION',
  MODAL_LOCATION: 'MODAL_LOCATION',
  HANDLE_DELETE_LOCATION: 'HANDLE_DELETE_LOCATION',
  HANDLE_UPDATE_LOCATION: 'HANDLE_UPDATE_LOCATION',
  INIT_UPDATE_LOCATION: 'INIT_UPDATE_LOCATION',
  SEARCH_LOCATION: 'SEARCH_LOCATION',
  //------------ end locations ------------//
  //------------ datacenters ------------//
  GET_DATACENTERS_SUCCESS: 'GET_DATACENTERS_SUCCESS',
  GET_DATACENTERS_FAILURE: 'GET_DATACENTERS_FAILURE',
  GET_DATACENTER_OTHER_SUCCESS: 'GET_DATACENTER_OTHER_SUCCESS',
  GET_DATACENTER_OTHER_FAILURE: 'GET_DATACENTER_OTHER_FAILURE',
  GET_DATACENTERS_BY_ID_SUCCESS: 'GET_DATACENTERS_BY_ID_SUCCESS',
  GET_DATACENTERS_BY_ID_FAILURE: 'GET_DATACENTERS_BY_ID_FAILURE',
  PAGINATION_DATACENTERS: "PAGINATION_DATACENTERS",
  PAGINATION_DATACENTERS_CLEAR: "PAGINATION_DATACENTERS_CLEAR",
  ON_PAGE_CHANGE_DATACENTERS: "ON_PAGE_CHANGE_DATACENTERS",
  GET_DATACENTER_PARENTS_SUCCESS: 'GET_DATACENTER_PARENTS_SUCCESS',
  GET_DATACENTER_PARENTS_FAILURE: 'GET_DATACENTER_PARENTS_FAILURE',
  INSERT_DATACENTER_REQUEST: 'INSERT_DATACENTER_REQUEST',
  INSERT_DATACENTER_SUCCESS: 'INSERT_DATACENTER_SUCCESS',
  INSERT_DATACENTER_FAILURE: 'INSERT_DATACENTER_FAILURE',
  UPDATE_DATACENTER_REQUEST: 'UPDATE_DATACENTER_REQUEST',
  UPDATE_DATACENTER_SUCCESS: 'UPDATE_DATACENTER_SUCCESS',
  UPDATE_DATACENTER_FAILURE: 'UPDATE_DATACENTER_FAILURE',
  DELETE_DATACENTER_REQUEST: 'DELETE_DATACENTER_REQUEST',
  DELETE_DATACENTER_SUCCESS: 'DELETE_DATACENTER_SUCCESS',
  DELETE_DATACENTER_FAILURE: 'DELETE_DATACENTER_FAILURE',
  UPDATE_CURRENT_DATACENTER: 'UPDATE_CURRENT_DATACENTER',
  VALIDATE_DATACENTER: 'VALIDATE_DATACENTER',
  MODAL_DATACENTER: 'MODAL_DATACENTER',
  HANDLE_DELETE_DATACENTER: 'HANDLE_DELETE_DATACENTER',
  HANDLE_UPDATE_DATACENTER: 'HANDLE_UPDATE_DATACENTER',
  INIT_UPDATE_DATACENTER: 'INIT_UPDATE_DATACENTER',
  SEARCH_DATACENTER: 'SEARCH_DATACENTER',
  //------------ end datacenters ------------//
  //------------ rooms ------------//
  GET_ROOMS_SUCCESS: 'GET_ROOMS_SUCCESS',
  GET_ROOMS_FAILURE: 'GET_ROOMS_FAILURE',
  GET_ROOM_OTHER_SUCCESS: 'GET_ROOM_OTHER_SUCCESS',
  GET_ROOM_OTHER_FAILURE: 'GET_ROOM_OTHER_FAILURE',
  GET_ROOMS_BY_ID_SUCCESS: 'GET_ROOMS_BY_ID_SUCCESS',
  GET_ROOMS_BY_ID_FAILURE: 'GET_ROOMS_BY_ID_FAILURE',
  PAGINATION_ROOMS: "PAGINATION_ROOMS",
  PAGINATION_ROOMS_CLEAR: "PAGINATION_ROOMS_CLEAR",
  ON_PAGE_CHANGE_ROOMS: "ON_PAGE_CHANGE_ROOMS",
  GET_ROOM_PARENTS_SUCCESS: 'GET_ROOM_PARENTS_SUCCESS',
  GET_ROOM_PARENTS_FAILURE: 'GET_ROOM_PARENTS_FAILURE',
  INSERT_ROOM_REQUEST: 'INSERT_ROOM_REQUEST',
  INSERT_ROOM_SUCCESS: 'INSERT_ROOM_SUCCESS',
  INSERT_ROOM_FAILURE: 'INSERT_ROOM_FAILURE',
  UPDATE_ROOM_REQUEST: 'UPDATE_ROOM_REQUEST',
  UPDATE_ROOM_SUCCESS: 'UPDATE_ROOM_SUCCESS',
  UPDATE_ROOM_FAILURE: 'UPDATE_ROOM_FAILURE',
  DELETE_ROOM_REQUEST: 'DELETE_ROOM_REQUEST',
  DELETE_ROOM_SUCCESS: 'DELETE_ROOM_SUCCESS',
  DELETE_ROOM_FAILURE: 'DELETE_ROOM_FAILURE',
  UPDATE_CURRENT_ROOM: 'UPDATE_CURRENT_ROOM',
  VALIDATE_ROOM: 'VALIDATE_ROOM',
  MODAL_ROOM: 'MODAL_ROOM',
  HANDLE_DELETE_ROOM: 'HANDLE_DELETE_ROOM',
  HANDLE_UPDATE_ROOM: 'HANDLE_UPDATE_ROOM',
  INIT_UPDATE_ROOM: 'INIT_UPDATE_ROOM',
  SEARCH_ROOM: 'SEARCH_ROOM',
  ONCHANGE_LOCATION_ROOM: 'ONCHANGE_LOCATION_ROOM',
  //------------ end rooms ------------//
  //------------ zones ------------//
  GET_ZONES_SUCCESS: 'GET_ZONES_SUCCESS',
  GET_ZONES_FAILURE: 'GET_ZONES_FAILURE',
  GET_ZONE_OTHER_SUCCESS: 'GET_ZONE_OTHER_SUCCESS',
  GET_ZONE_OTHER_FAILURE: 'GET_ZONE_OTHER_FAILURE',
  GET_ZONES_BY_ID_SUCCESS: 'GET_ZONES_BY_ID_SUCCESS',
  GET_ZONES_BY_ID_FAILURE: 'GET_ZONES_BY_ID_FAILURE',
  PAGINATION_ZONES: "PAGINATION_ZONES",
  PAGINATION_ZONES_CLEAR: "PAGINATION_ZONES_CLEAR",
  ON_PAGE_CHANGE_ZONES: "ON_PAGE_CHANGE_ZONES",
  GET_ZONE_PARENTS_SUCCESS: 'GET_ZONE_PARENTS_SUCCESS',
  GET_ZONE_PARENTS_FAILURE: 'GET_ZONE_PARENTS_FAILURE',
  INSERT_ZONE_REQUEST: 'INSERT_ZONE_REQUEST',
  INSERT_ZONE_SUCCESS: 'INSERT_ZONE_SUCCESS',
  INSERT_ZONE_FAILURE: 'INSERT_ZONE_FAILURE',
  UPDATE_ZONE_REQUEST: 'UPDATE_ZONE_REQUEST',
  UPDATE_ZONE_SUCCESS: 'UPDATE_ZONE_SUCCESS',
  UPDATE_ZONE_FAILURE: 'UPDATE_ZONE_FAILURE',
  DELETE_ZONE_REQUEST: 'DELETE_ZONE_REQUEST',
  DELETE_ZONE_SUCCESS: 'DELETE_ZONE_SUCCESS',
  DELETE_ZONE_FAILURE: 'DELETE_ZONE_FAILURE',
  UPDATE_CURRENT_ZONE: 'UPDATE_CURRENT_ZONE',
  VALIDATE_ZONE: 'VALIDATE_ZONE',
  MODAL_ZONE: 'MODAL_ZONE',
  HANDLE_DELETE_ZONE: 'HANDLE_DELETE_ZONE',
  HANDLE_UPDATE_ZONE: 'HANDLE_UPDATE_ZONE',
  INIT_UPDATE_ZONE: 'INIT_UPDATE_ZONE',
  SEARCH_ZONE: 'SEARCH_ZONE',
  ONCHANGE_LOCATION_ZONE: 'ONCHANGE_LOCATION_ZONE',
  ONCHANGE_DATACENTER_ZONE: 'ONCHANGE_DATACENTER_ZONE',
  ONCHANGE_ROOM_ZONE: 'ONCHANGE_ROOM_ZONE',
  HANDLE_VIEW_IMAGE_ZONE: 'HANDLE_VIEW_IMAGE_ZONE',
  HANDLE_CLOSE_VIEW_IMAGE_ZONE: 'HANDLE_CLOSE_VIEW_IMAGE_ZONE',
  //------------ end zones ------------//
  //------------ customers ------------//
  GET_CUSTOMERS_SUCCESS: 'GET_CUSTOMERS_SUCCESS',
  GET_CUSTOMERS_FAILURE: 'GET_CUSTOMERS_FAILURE',
  GET_CUSTOMER_OTHER_SUCCESS: 'GET_CUSTOMER_OTHER_SUCCESS',
  GET_CUSTOMER_OTHER_FAILURE: 'GET_CUSTOMER_OTHER_FAILURE',
  GET_CUSTOMERS_BY_ID_SUCCESS: 'GET_CUSTOMERS_BY_ID_SUCCESS',
  GET_CUSTOMERS_BY_ID_FAILURE: 'GET_CUSTOMERS_BY_ID_FAILURE',
  PAGINATION_CUSTOMERS: "PAGINATION_CUSTOMERS",
  PAGINATION_CUSTOMERS_CLEAR: "PAGINATION_CUSTOMERS_CLEAR",
  ON_PAGE_CHANGE_CUSTOMERS: "ON_PAGE_CHANGE_CUSTOMERS",
  GET_CUSTOMER_PARENTS_SUCCESS: 'GET_CUSTOMER_PARENTS_SUCCESS',
  GET_CUSTOMER_PARENTS_FAILURE: 'GET_CUSTOMER_PARENTS_FAILURE',
  INSERT_CUSTOMER_REQUEST: 'INSERT_CUSTOMER_REQUEST',
  INSERT_CUSTOMER_SUCCESS: 'INSERT_CUSTOMER_SUCCESS',
  INSERT_CUSTOMER_FAILURE: 'INSERT_CUSTOMER_FAILURE',
  UPDATE_CUSTOMER_REQUEST: 'UPDATE_CUSTOMER_REQUEST',
  UPDATE_CUSTOMER_SUCCESS: 'UPDATE_CUSTOMER_SUCCESS',
  UPDATE_CUSTOMER_FAILURE: 'UPDATE_CUSTOMER_FAILURE',
  DELETE_CUSTOMER_REQUEST: 'DELETE_CUSTOMER_REQUEST',
  DELETE_CUSTOMER_SUCCESS: 'DELETE_CUSTOMER_SUCCESS',
  DELETE_CUSTOMER_FAILURE: 'DELETE_CUSTOMER_FAILURE',
  UPDATE_CURRENT_CUSTOMER: 'UPDATE_CURRENT_CUSTOMER',
  VALIDATE_CUSTOMER: 'VALIDATE_CUSTOMER',
  MODAL_CUSTOMER: 'MODAL_CUSTOMER',
  HANDLE_DELETE_CUSTOMER: 'HANDLE_DELETE_CUSTOMER',
  HANDLE_UPDATE_CUSTOMER: 'HANDLE_UPDATE_CUSTOMER',
  INIT_UPDATE_CUSTOMER: 'INIT_UPDATE_CUSTOMER',
  SEARCH_CUSTOMER: 'SEARCH_CUSTOMER',
  //------------ end customers ------------//
  //------------ departments ------------//
  GET_DEPARTMENTS_SUCCESS: 'GET_DEPARTMENTS_SUCCESS',
  GET_DEPARTMENTS_FAILURE: 'GET_DEPARTMENTS_FAILURE',
  GET_DEPARTMENT_OTHER_SUCCESS: 'GET_DEPARTMENT_OTHER_SUCCESS',
  GET_DEPARTMENT_OTHER_FAILURE: 'GET_DEPARTMENT_OTHER_FAILURE',
  GET_DEPARTMENTS_BY_ID_SUCCESS: 'GET_DEPARTMENTS_BY_ID_SUCCESS',
  GET_DEPARTMENTS_BY_ID_FAILURE: 'GET_DEPARTMENTS_BY_ID_FAILURE',
  PAGINATION_DEPARTMENTS: "PAGINATION_DEPARTMENTS",
  PAGINATION_DEPARTMENTS_CLEAR: "PAGINATION_DEPARTMENTS_CLEAR",
  ON_PAGE_CHANGE_DEPARTMENTS: "ON_PAGE_CHANGE_DEPARTMENTS",
  GET_DEPARTMENT_PARENTS_SUCCESS: 'GET_DEPARTMENT_PARENTS_SUCCESS',
  GET_DEPARTMENT_PARENTS_FAILURE: 'GET_DEPARTMENT_PARENTS_FAILURE',
  INSERT_DEPARTMENT_REQUEST: 'INSERT_DEPARTMENT_REQUEST',
  INSERT_DEPARTMENT_SUCCESS: 'INSERT_DEPARTMENT_SUCCESS',
  INSERT_DEPARTMENT_FAILURE: 'INSERT_DEPARTMENT_FAILURE',
  UPDATE_DEPARTMENT_REQUEST: 'UPDATE_DEPARTMENT_REQUEST',
  UPDATE_DEPARTMENT_SUCCESS: 'UPDATE_DEPARTMENT_SUCCESS',
  UPDATE_DEPARTMENT_FAILURE: 'UPDATE_DEPARTMENT_FAILURE',
  DELETE_DEPARTMENT_REQUEST: 'DELETE_DEPARTMENT_REQUEST',
  DELETE_DEPARTMENT_SUCCESS: 'DELETE_DEPARTMENT_SUCCESS',
  DELETE_DEPARTMENT_FAILURE: 'DELETE_DEPARTMENT_FAILURE',
  UPDATE_CURRENT_DEPARTMENT: 'UPDATE_CURRENT_DEPARTMENT',
  VALIDATE_DEPARTMENT: 'VALIDATE_DEPARTMENT',
  MODAL_DEPARTMENT: 'MODAL_DEPARTMENT',
  HANDLE_DELETE_DEPARTMENT: 'HANDLE_DELETE_DEPARTMENT',
  HANDLE_UPDATE_DEPARTMENT: 'HANDLE_UPDATE_DEPARTMENT',
  INIT_UPDATE_DEPARTMENT: 'INIT_UPDATE_DEPARTMENT',
  SEARCH_DEPARTMENT: 'SEARCH_DEPARTMENT',
  //------------ end departments ------------//
  //------------ regions ------------//
  GET_REGIONS_SUCCESS: 'GET_REGIONS_SUCCESS',
  GET_REGIONS_FAILURE: 'GET_REGIONS_FAILURE',
  GET_REGION_OTHER_SUCCESS: 'GET_REGION_OTHER_SUCCESS',
  GET_REGION_OTHER_FAILURE: 'GET_REGION_OTHER_FAILURE',
  GET_REGIONS_BY_ID_SUCCESS: 'GET_REGIONS_BY_ID_SUCCESS',
  GET_REGIONS_BY_ID_FAILURE: 'GET_REGIONS_BY_ID_FAILURE',
  PAGINATION_REGIONS: "PAGINATION_REGIONS",
  PAGINATION_REGIONS_CLEAR: "PAGINATION_REGIONS_CLEAR",
  ON_PAGE_CHANGE_REGIONS: "ON_PAGE_CHANGE_REGIONS",
  GET_REGION_PARENTS_SUCCESS: 'GET_REGION_PARENTS_SUCCESS',
  GET_REGION_PARENTS_FAILURE: 'GET_REGION_PARENTS_FAILURE',
  INSERT_REGION_REQUEST: 'INSERT_REGION_REQUEST',
  INSERT_REGION_SUCCESS: 'INSERT_REGION_SUCCESS',
  INSERT_REGION_FAILURE: 'INSERT_REGION_FAILURE',
  UPDATE_REGION_REQUEST: 'UPDATE_REGION_REQUEST',
  UPDATE_REGION_SUCCESS: 'UPDATE_REGION_SUCCESS',
  UPDATE_REGION_FAILURE: 'UPDATE_REGION_FAILURE',
  DELETE_REGION_REQUEST: 'DELETE_REGION_REQUEST',
  DELETE_REGION_SUCCESS: 'DELETE_REGION_SUCCESS',
  DELETE_REGION_FAILURE: 'DELETE_REGION_FAILURE',
  UPDATE_CURRENT_REGION: 'UPDATE_CURRENT_REGION',
  VALIDATE_REGION: 'VALIDATE_REGION',
  MODAL_REGION: 'MODAL_REGION',
  HANDLE_DELETE_REGION: 'HANDLE_DELETE_REGION',
  HANDLE_UPDATE_REGION: 'HANDLE_UPDATE_REGION',
  INIT_UPDATE_REGION: 'INIT_UPDATE_REGION',
  SEARCH_REGION: 'SEARCH_REGION',
  //------------ end regions ------------//
  //------------ device types ------------//
  GET_DEVICE_TYPES_SUCCESS: 'GET_DEVICE_TYPES_SUCCESS',
  GET_DEVICE_TYPES_FAILURE: 'GET_DEVICE_TYPES_FAILURE',
  GET_DEVICE_TYPE_OTHER_SUCCESS: 'GET_DEVICE_TYPE_OTHER_SUCCESS',
  GET_DEVICE_TYPE_OTHER_FAILURE: 'GET_DEVICE_TYPE_OTHER_FAILURE',
  GET_DEVICE_TYPES_BY_ID_SUCCESS: 'GET_DEVICE_TYPES_BY_ID_SUCCESS',
  GET_DEVICE_TYPES_BY_ID_FAILURE: 'GET_DEVICE_TYPES_BY_ID_FAILURE',
  PAGINATION_DEVICE_TYPES: "PAGINATION_DEVICE_TYPES",
  PAGINATION_DEVICE_TYPES_CLEAR: "PAGINATION_DEVICE_TYPES_CLEAR",
  ON_PAGE_CHANGE_DEVICE_TYPES: "ON_PAGE_CHANGE_DEVICE_TYPES",
  GET_DEVICE_TYPE_PARENTS_SUCCESS: 'GET_DEVICE_TYPE_PARENTS_SUCCESS',
  GET_DEVICE_TYPE_PARENTS_FAILURE: 'GET_DEVICE_TYPE_PARENTS_FAILURE',
  INSERT_DEVICE_TYPE_REQUEST: 'INSERT_DEVICE_TYPE_REQUEST',
  INSERT_DEVICE_TYPE_SUCCESS: 'INSERT_DEVICE_TYPE_SUCCESS',
  INSERT_DEVICE_TYPE_FAILURE: 'INSERT_DEVICE_TYPE_FAILURE',
  IMPORT_DEVICE_TYPE_SUCCESS: 'IMPORT_DEVICE_TYPE_SUCCESS',
  IMPORT_DEVICE_TYPE_FAILURE: 'IMPORT_DEVICE_TYPE_FAILURE',
  UPDATE_DEVICE_TYPE_REQUEST: 'UPDATE_DEVICE_TYPE_REQUEST',
  UPDATE_DEVICE_TYPE_SUCCESS: 'UPDATE_DEVICE_TYPE_SUCCESS',
  UPDATE_DEVICE_TYPE_FAILURE: 'UPDATE_DEVICE_TYPE_FAILURE',
  DELETE_DEVICE_TYPE_REQUEST: 'DELETE_DEVICE_TYPE_REQUEST',
  DELETE_DEVICE_TYPE_SUCCESS: 'DELETE_DEVICE_TYPE_SUCCESS',
  DELETE_DEVICE_TYPE_FAILURE: 'DELETE_DEVICE_TYPE_FAILURE',
  UPDATE_CURRENT_DEVICE_TYPE: 'UPDATE_CURRENT_DEVICE_TYPE',
  VALIDATE_DEVICE_TYPE: 'VALIDATE_DEVICE_TYPE',
  MODAL_DEVICE_TYPE: 'MODAL_DEVICE_TYPE',
  HANDLE_DELETE_DEVICE_TYPE: 'HANDLE_DELETE_DEVICE_TYPE',
  HANDLE_UPDATE_DEVICE_TYPE: 'HANDLE_UPDATE_DEVICE_TYPE',
  INIT_UPDATE_DEVICE_TYPE: 'INIT_UPDATE_DEVICE_TYPE',
  SEARCH_DEVICE_TYPE: 'SEARCH_DEVICE_TYPE',
  //------------ end device types ------------//
  //------------ device templates ------------//
  GET_DEVICE_TEMPLATES_SUCCESS: 'GET_DEVICE_TEMPLATES_SUCCESS',
  GET_DEVICE_TEMPLATES_FAILURE: 'GET_DEVICE_TEMPLATES_FAILURE',
  GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS: 'GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS',
  GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE: 'GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE',
  GET_DEVICE_TEMPLATE_OTHER_SUCCESS: 'GET_DEVICE_TEMPLATE_OTHER_SUCCESS',
  GET_DEVICE_TEMPLATE_OTHER_FAILURE: 'GET_DEVICE_TEMPLATE_OTHER_FAILURE',
  GET_DEVICE_TEMPLATES_BY_ID_SUCCESS: 'GET_DEVICE_TEMPLATES_BY_ID_SUCCESS',
  GET_DEVICE_TEMPLATES_BY_ID_FAILURE: 'GET_DEVICE_TEMPLATES_BY_ID_FAILURE',
  PAGINATION_DEVICE_TEMPLATES: "PAGINATION_DEVICE_TEMPLATES",
  PAGINATION_DEVICE_TEMPLATES_CLEAR: "PAGINATION_DEVICE_TEMPLATES_CLEAR",
  ON_PAGE_CHANGE_DEVICE_TEMPLATES: "ON_PAGE_CHANGE_DEVICE_TEMPLATES",
  GET_DEVICE_TEMPLATE_PARENTS_SUCCESS: 'GET_DEVICE_TEMPLATE_PARENTS_SUCCESS',
  GET_DEVICE_TEMPLATE_PARENTS_FAILURE: 'GET_DEVICE_TEMPLATE_PARENTS_FAILURE',
  INSERT_DEVICE_TEMPLATE_REQUEST: 'INSERT_DEVICE_TEMPLATE_REQUEST',
  INSERT_DEVICE_TEMPLATE_SUCCESS: 'INSERT_DEVICE_TEMPLATE_SUCCESS',
  INSERT_DEVICE_TEMPLATE_FAILURE: 'INSERT_DEVICE_TEMPLATE_FAILURE',
  IMPORT_DEVICE_TEMPLATE_SUCCESS: 'IMPORT_DEVICE_TEMPLATE_SUCCESS',
  IMPORT_DEVICE_TEMPLATE_FAILURE: 'IMPORT_DEVICE_TEMPLATE_FAILURE',
  UPDATE_DEVICE_TEMPLATE_REQUEST: 'UPDATE_DEVICE_TEMPLATE_REQUEST',
  UPDATE_DEVICE_TEMPLATE_SUCCESS: 'UPDATE_DEVICE_TEMPLATE_SUCCESS',
  UPDATE_DEVICE_TEMPLATE_FAILURE: 'UPDATE_DEVICE_TEMPLATE_FAILURE',
  DELETE_DEVICE_TEMPLATE_REQUEST: 'DELETE_DEVICE_TEMPLATE_REQUEST',
  DELETE_DEVICE_TEMPLATE_SUCCESS: 'DELETE_DEVICE_TEMPLATE_SUCCESS',
  DELETE_DEVICE_TEMPLATE_FAILURE: 'DELETE_DEVICE_TEMPLATE_FAILURE',
  UPDATE_CURRENT_DEVICE_TEMPLATE: 'UPDATE_CURRENT_DEVICE_TEMPLATE',
  VALIDATE_DEVICE_TEMPLATE: 'VALIDATE_DEVICE_TEMPLATE',
  MODAL_DEVICE_TEMPLATE: 'MODAL_DEVICE_TEMPLATE',
  HANDLE_DELETE_DEVICE_TEMPLATE: 'HANDLE_DELETE_DEVICE_TEMPLATE',
  HANDLE_UPDATE_DEVICE_TEMPLATE: 'HANDLE_UPDATE_DEVICE_TEMPLATE',
  INIT_UPDATE_DEVICE_TEMPLATE: 'INIT_UPDATE_DEVICE_TEMPLATE',
  SEARCH_DEVICE_TEMPLATE: 'SEARCH_DEVICE_TEMPLATE',
  //------------ end device templates ------------//
  //------------ racks ------------//
  GET_RACKS_SUCCESS: 'GET_RACKS_SUCCESS',
  GET_RACKS_FAILURE: 'GET_RACKS_FAILURE',
  GET_RACK_OTHER_SUCCESS: 'GET_RACK_OTHER_SUCCESS',
  GET_RACK_OTHER_FAILURE: 'GET_RACK_OTHER_FAILURE',
  GET_RACK_OTHER_PLUS_SUCCESS: 'GET_RACK_OTHER_PLUS_SUCCESS',
  GET_RACK_OTHER_PLUS_FAILURE: 'GET_RACK_OTHER_PLUS_FAILURE',
  GET_RACK_BY_ID_SUCCESS: 'GET_RACK_BY_ID_SUCCESS',
  GET_RACK_BY_ID_FAILURE: 'GET_RACK_BY_ID_FAILURE',
  GET_RACKS_BY_ZONE_REQUEST: 'GET_RACKS_BY_ZONE_REQUEST',
  GET_RACKS_BY_ZONE_SUCCESS: 'GET_RACKS_BY_ZONE_SUCCESS',
  GET_RACKS_BY_ZONE_FAILURE: 'GET_RACKS_BY_ZONE_FAILURE',
  GET_RACKS_BY_ZONES_REQUEST: 'GET_RACKS_BY_ZONES_REQUEST',
  GET_RACKS_BY_ZONES_SUCCESS: 'GET_RACKS_BY_ZONES_SUCCESS',
  GET_RACKS_BY_ZONES_FAILURE: 'GET_RACKS_BY_ZONES_FAILURE',
  GET_RACKS_BY_ROOM_REQUEST: 'GET_RACKS_BY_ROOM_REQUEST',
  GET_RACKS_BY_ROOM_SUCCESS: 'GET_RACKS_BY_ROOM_SUCCESS',
  GET_RACKS_BY_ROOM_FAILURE: 'GET_RACKS_BY_ROOM_FAILURE',
  GET_DEVICE_BY_ID_SUCCESS: 'GET_DEVICE_BY_ID_SUCCESS',
  GET_BOOKING_U_ID_SUCCESS: 'GET_BOOKING_U_ID_SUCCESS',
  PAGINATION_RACKS: "PAGINATION_RACKS",
  PAGINATION_RACKS_CLEAR: "PAGINATION_RACKS_CLEAR",
  ON_PAGE_CHANGE_RACKS: "ON_PAGE_CHANGE_RACKS",
  GET_RACK_PARENTS_SUCCESS: 'GET_RACK_PARENTS_SUCCESS',
  GET_RACK_PARENTS_FAILURE: 'GET_RACK_PARENTS_FAILURE',
  INSERT_RACK_REQUEST: 'INSERT_RACK_REQUEST',
  INSERT_RACK_SUCCESS: 'INSERT_RACK_SUCCESS',
  INSERT_RACK_FAILURE: 'INSERT_RACK_FAILURE',
  UPDATE_RACK_REQUEST: 'UPDATE_RACK_REQUEST',
  UPDATE_RACK_SUCCESS: 'UPDATE_RACK_SUCCESS',
  UPDATE_RACK_FAILURE: 'UPDATE_RACK_FAILURE',
  DELETE_RACK_REQUEST: 'DELETE_RACK_REQUEST',
  DELETE_RACK_SUCCESS: 'DELETE_RACK_SUCCESS',
  DELETE_RACK_FAILURE: 'DELETE_RACK_FAILURE',
  UPDATE_CURRENT_RACK: 'UPDATE_CURRENT_RACK',
  BOOKING_U_RACK_REQUEST: 'BOOKING_U_RACK_REQUEST',
  BOOKING_U_RACK_SUCCESS: 'BOOKING_U_RACK_SUCCESS',
  BOOKING_U_RACK_FAILURE: 'BOOKING_U_RACK_FAILURE',
  VALIDATE_RACK: 'VALIDATE_RACK',
  MODAL_RACK: 'MODAL_RACK',
  HANDLE_DELETE_RACK: 'HANDLE_DELETE_RACK',
  HANDLE_UPDATE_RACK: 'HANDLE_UPDATE_RACK',
  INIT_UPDATE_RACK: 'INIT_UPDATE_RACK',
  SEARCH_RACK: 'SEARCH_RACK',
  ONCHANGE_LOCATION_RACK: 'ONCHANGE_LOCATION_RACK',
  ONCHANGE_DATACENTER_RACK: 'ONCHANGE_DATACENTER_RACK',
  ONCHANGE_ROOM_RACK: 'ONCHANGE_ROOM_RACK',
  ONCHANGE_ZONE_RACK: 'ONCHANGE_ZONE_RACK',
  HANDLE_BOOKING_U_RACK: 'HANDLE_BOOKING_U_RACK',
  HANDLE_ADD_DEVICE: 'HANDLE_ADD_DEVICE',
  ADD_DEVICE_RACK_SUCCESS: 'ADD_DEVICE_RACK_SUCCESS',
  ADD_DEVICE_RACK_FAILURE: 'ADD_DEVICE_RACK_FAILURE',
  DELETE_BOOKING_RACK_SUCCESS: 'DELETE_BOOKING_RACK_SUCCESS',
  DELETE_BOOKING_RACK_FAILURE: 'DELETE_BOOKING_RACK_FAILURE',
  DELETE_DEVICE_RACK_SUCCESS: 'DELETE_DEVICE_RACK_SUCCESS',
  DELETE_DEVICE_RACK_FAILURE: 'DELETE_DEVICE_RACK_FAILURE',
  HANDLE_MOVE_U: 'HANDLE_MOVE_U',
  SAVE_MOVE_U_SUCCESS: 'SAVE_MOVE_U_SUCCESS',
  SAVE_MOVE_U_FAILURE: 'SAVE_MOVE_U_FAILURE',
  GET_RACK_BY_ID2_SUCCESS: 'GET_RACK_BY_ID2_SUCCESS',
  GET_RACK_BY_ID2_FAILURE: 'GET_RACK_BY_ID2_FAILURE',
  IMPORT_DEVICE_TO_RACK: 'IMPORT_DEVICE_TO_RACK',
  //------------ end racks ------------//
  //------------ layouts ------------//
  GET_LAYOUTS_SUCCESS: 'GET_LAYOUTS_SUCCESS',
  GET_LAYOUTS_FAILURE: 'GET_LAYOUTS_FAILURE',
  GET_LAYOUT_OTHER_SUCCESS: 'GET_LAYOUT_OTHER_SUCCESS',
  GET_LAYOUT_OTHER_FAILURE: 'GET_LAYOUT_OTHER_FAILURE',
  GET_LAYOUTS_BY_ID_SUCCESS: 'GET_LAYOUTS_BY_ID_SUCCESS',
  GET_LAYOUTS_BY_ID_FAILURE: 'GET_LAYOUTS_BY_ID_FAILURE',
  PAGINATION_LAYOUTS: "PAGINATION_LAYOUTS",
  PAGINATION_LAYOUTS_CLEAR: "PAGINATION_LAYOUTS_CLEAR",
  ON_PAGE_CHANGE_LAYOUTS: "ON_PAGE_CHANGE_LAYOUTS",
  GET_LAYOUT_PARENTS_SUCCESS: 'GET_LAYOUT_PARENTS_SUCCESS',
  GET_LAYOUT_PARENTS_FAILURE: 'GET_LAYOUT_PARENTS_FAILURE',
  INSERT_RACK_LAYOUT_REQUEST: 'INSERT_RACK_LAYOUT_REQUEST',
  INSERT_RACK_LAYOUT_SUCCESS: 'INSERT_RACK_LAYOUT_SUCCESS',
  INSERT_RACK_LAYOUT_FAILURE: 'INSERT_RACK_LAYOUT_FAILURE',
  UPDATE_RACK_LAYOUT_REQUEST: 'UPDATE_RACK_LAYOUT_REQUEST',
  UPDATE_RACK_LAYOUT_SUCCESS: 'UPDATE_RACK_LAYOUT_SUCCESS',
  UPDATE_RACK_LAYOUT_FAILURE: 'UPDATE_RACK_LAYOUT_FAILURE',
  DELETE_RACK_LAYOUT_REQUEST: 'DELETE_RACK_LAYOUT_REQUEST',
  DELETE_RACK_LAYOUT_SUCCESS: 'DELETE_RACK_LAYOUT_SUCCESS',
  DELETE_RACK_LAYOUT_FAILURE: 'DELETE_RACK_LAYOUT_FAILURE',
  UPDATE_CURRENT_LAYOUT: 'UPDATE_CURRENT_LAYOUT',
  UPDATE_LOADING_LAYOUT: 'UPDATE_LOADING_LAYOUT',
  VALIDATE_LAYOUT: 'VALIDATE_LAYOUT',
  MODAL_LAYOUT: 'MODAL_LAYOUT',
  HANDLE_DELETE_RACK_LAYOUT: 'HANDLE_DELETE_RACK_LAYOUT',
  HANDLE_UPDATE_LAYOUT: 'HANDLE_UPDATE_LAYOUT',
  INIT_UPDATE_LAYOUT: 'INIT_UPDATE_LAYOUT',
  SEARCH_LAYOUT: 'SEARCH_LAYOUT',
  ONCHANGE_LOCATION_LAYOUT: 'ONCHANGE_LOCATION_LAYOUT',
  ONCHANGE_DATACENTER_LAYOUT: 'ONCHANGE_DATACENTER_LAYOUT',
  ONCHANGE_ROOM_LAYOUT: 'ONCHANGE_ROOM_LAYOUT',
  ONCHANGE_ZONE_LAYOUT: 'ONCHANGE_ZONE_LAYOUT',
  //------------ end layouts ------------//
  //------------ contracts ------------//
  GET_CONTRACTS_SUCCESS: 'GET_CONTRACTS_SUCCESS',
  GET_CONTRACTS_FAILURE: 'GET_CONTRACTS_FAILURE',
  GET_CONTRACTS_BY_ID_SUCCESS: 'GET_CONTRACTS_BY_ID_SUCCESS',
  GET_CONTRACTS_BY_ID_FAILURE: 'GET_CONTRACTS_BY_ID_FAILURE',
  PAGINATION_CONTRACTS: "PAGINATION_CONTRACTS",
  PAGINATION_CONTRACTS_CLEAR: "PAGINATION_CONTRACTS_CLEAR",
  ON_PAGE_CHANGE_CONTRACTS: "ON_PAGE_CHANGE_CONTRACTS",
  GET_CONTRACT_PARENTS_SUCCESS: 'GET_CONTRACT_PARENTS_SUCCESS',
  GET_CONTRACT_PARENTS_FAILURE: 'GET_CONTRACT_PARENTS_FAILURE',
  INSERT_CONTRACT_REQUEST: 'INSERT_CONTRACT_REQUEST',
  INSERT_CONTRACT_SUCCESS: 'INSERT_CONTRACT_SUCCESS',
  INSERT_CONTRACT_FAILURE: 'INSERT_CONTRACT_FAILURE',
  UPDATE_CONTRACT_REQUEST: 'UPDATE_CONTRACT_REQUEST',
  UPDATE_CONTRACT_SUCCESS: 'UPDATE_CONTRACT_SUCCESS',
  UPDATE_CONTRACT_FAILURE: 'UPDATE_CONTRACT_FAILURE',
  DELETE_CONTRACT_REQUEST: 'DELETE_CONTRACT_REQUEST',
  DELETE_CONTRACT_SUCCESS: 'DELETE_CONTRACT_SUCCESS',
  DELETE_CONTRACT_FAILURE: 'DELETE_CONTRACT_FAILURE',
  UPDATE_CURRENT_CONTRACT: 'UPDATE_CURRENT_CONTRACT',
  VALIDATE_CONTRACT: 'VALIDATE_CONTRACT',
  MODAL_CONTRACT: 'MODAL_CONTRACT',
  HANDLE_DELETE_CONTRACT: 'HANDLE_DELETE_CONTRACT',
  HANDLE_UPDATE_CONTRACT: 'HANDLE_UPDATE_CONTRACT',
  INIT_UPDATE_CONTRACT: 'INIT_UPDATE_CONTRACT',
  SEARCH_CONTRACT: 'SEARCH_CONTRACT',
  //------------ end contracts ------------//
  //------------ loading ------------//
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP' //------------ end loading ------------//

};
/* harmony default export */ __webpack_exports__["default"] = (actionTypes);

/***/ }),

/***/ "./src/redux/_reducers/admin/actionR.js":
/*!**********************************************!*\
  !*** ./src/redux/_reducers/admin/actionR.js ***!
  \**********************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var actions = function actions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, current, validate, error, temp;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_ACTION:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ACTIONS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ACTIONS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0,
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_ACTION:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_ACTION:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ACTION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ACTION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          actionId: value.data.actionId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ACTION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ACTION:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_ACTION:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_ACTION:
      value = action.value;
      return _objectSpread({}, state, {
        current: _objectSpread({}, value),
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ACTION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ACTION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ACTION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ACTIONS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      data = data[0] || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, data)
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ACTIONS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ACTION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ACTION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ACTION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_ACTION:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_ACTIONS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/admin/groupR.js":
/*!*********************************************!*\
  !*** ./src/redux/_reducers/admin/groupR.js ***!
  \*********************************************/
/*! exports provided: groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var groups = function groups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, current, validate, error, list, roles, temp;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_GROUP:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUPS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        // current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUPS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0,
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_GROUP:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_GROUP:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_GROUP_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_GROUP_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          groupId: value.data.groupId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_GROUP_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_GROUP:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_GROUP:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_GROUP:
      value = action.value;
      roles = value.roles || [];
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(roles, function (o) {
        return o.roleId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, value, {
          checked: temp
        }),
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_GROUP_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_GROUP_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_GROUP_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUPS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      data = data[0] || {};
      roles = data.roles || [];
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(roles, function (o) {
        return o.roleId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, data, {
          checked: temp
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUPS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_GROUP_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_GROUP_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_GROUP_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_GROUP:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_GROUPS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUP_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_GROUP_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/admin/permissionR.js":
/*!**************************************************!*\
  !*** ./src/redux/_reducers/admin/permissionR.js ***!
  \**************************************************/
/*! exports provided: permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissions", function() { return permissions; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var permissions = function permissions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var pagination, value, data, name, current, validate, error, list, _auth, temp;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PERMISSION_OTHER:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_PERMISSION:
      value = action.value;
      current = state.current;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          update: !current.update
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_CANCEL_PERMISSION:
      value = action.value;
      current = state.current || {};
      _auth = current._auth || [];
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(_auth, function (item) {
        return {
          routeActionId: item.routeActionId,
          routeId: item.routeId,
          actionId: item.actionId
        };
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          update: !current.update,
          auth: temp
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_SAVE_PERMISSION_SUCCESS:
      value = action.value;
      current = state.current;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          update: !current.update
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_PERMISSION:
      current = state.current || {};
      name = action.name;
      value = action.value;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_GET_PERMISSION_SUCCESS:
      value = action.value;
      current = state.current;
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(value, function (item) {
        return {
          routeActionId: item.routeActionId,
          routeId: item.routeId,
          actionId: item.actionId
        };
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          _auth: value,
          auth: temp
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/admin/routeR.js":
/*!*********************************************!*\
  !*** ./src/redux/_reducers/admin/routeR.js ***!
  \*********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var routes = function routes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, actions, actionList;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_ROUTE:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTES_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {
          actions: []
        },
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTES_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTE_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTE_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_ROUTE:
      current = state.current || {
        actions: []
      };
      validate = state.validate || {};
      actions = current.actions || [];
      actionList = state.actions || [];
      name = action.name;
      value = action.value;
      error = action.error;
      validate[name] = error;

      if (name === 'actions') {
        // neu ton tai va !checked => unchecked
        if (actions.indexOf(value.value) > -1 && !value.checked) {
          lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(actions, function (a) {
            return a === value.value;
          });

          if (actions.length === 1 && actions.indexOf('view') > -1) {
            current.viewReadOnly = false;
          }
        } else if (actions.indexOf(value.value) === -1 && value.checked) {
          // check bat ky role nao khac view => check view va view readonly
          if (actions.indexOf('view') === -1 && value.value !== 'view') {
            actions.push('view');
          }

          current.viewReadOnly = true;
          actions.push(value.value);
        }

        if (actions.length < actionList.length) {
          current.indeterminate = true;
        } else if (actions.length === actionList.length) {
          current.indeterminate = false;
        }

        current.actions = actions;
      } else {
        if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isObject(value)) {
          current = _objectSpread({}, current, value);
        } else {
          current[name] = value;
        }
      }

      return _objectSpread({}, state, {
        current: _objectSpread({}, current),
        validate: _objectSpread({}, validate)
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_ROUTE:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROUTE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROUTE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          routeId: value.data.routeId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROUTE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ROUTE:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_ROUTE:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_ROUTE:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROUTE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROUTE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROUTE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTES_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      actions = state.actions || [];
      parents = state.parents || [];
      current = data[0] || {};
      current.actions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(current._actions, function (a) {
        return a.actionKey;
      });
      current.indeterminate = current.actions.length > 0 && current.actions.length < actions.length;
      var code = current.code;

      if (code.length === 3) {
        current.isParent = true;
      } else {
        var parentCode = code.slice(0, 3);

        var parent = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(parents, {
          code: parentCode
        });

        if (parent) current.parentId = parent.routeId;
        current.isParent = false;
      }

      return _objectSpread({}, state, {
        current: current
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROUTES_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROUTE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROUTE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROUTE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_ROUTE:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_ROUTES:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_ACTION_ROUTE_SUCCESS:
      value = action.value || {}; // actions = value.data ||[];

      return _objectSpread({}, state, {
        actions: value.data || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_ACTION_ROUTE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CHECK_ALL_ACTION_ROUTE:
      value = action.value;
      current = state.current || {};
      actions = current.actions || [];

      if (value) {
        var _actions = state.actions;
        actions = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(_actions, function (a) {
          return a.actionKey;
        });
      } else {
        actions = [];
      }

      current.indeterminate = false;
      current.actions = actions;
      return _objectSpread({}, state, {
        current: current
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/admin/userR.js":
/*!********************************************!*\
  !*** ./src/redux/_reducers/admin/userR.js ***!
  \********************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, current, validate, error, list, groups, temp;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_USER:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USERS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USERS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0,
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_USER:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_USER:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_USER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_USER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          userId: value.data.userId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_USER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_USER:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_USER:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_USER:
      value = action.value;
      groups = value.groups || [];
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(groups, function (o) {
        return o.roleId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, value, {
          checked: temp
        }),
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USERS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      data = data[0] || {};
      groups = data.groups || [];
      temp = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(groups, function (o) {
        return o.groupId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, data, {
          checked: temp
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USERS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_USER:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_USERS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USER_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USER_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/alertR.js":
/*!***************************************!*\
  !*** ./src/redux/_reducers/alertR.js ***!
  \***************************************/
/*! exports provided: alerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alerts", function() { return alerts; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");

var alerts = function alerts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_SUCCESS:
      return {
        type: 'success',
        message: action.message
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_WARNING:
      return {
        type: 'warn',
        message: action.message
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_ERROR:
      return {
        type: 'error',
        message: action.message
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ALERT_CLEAR:
      return {};

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/contractR.js":
/*!*****************************************************!*\
  !*** ./src/redux/_reducers/categories/contractR.js ***!
  \*****************************************************/
/*! exports provided: contracts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contracts", function() { return contracts; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var contracts = function contracts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_CONTRACT:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACTS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACT_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACT_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_CONTRACT:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_CONTRACT:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CONTRACT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CONTRACT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          contractId: value.data.contractId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CONTRACT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CONTRACT:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_CONTRACT:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_CONTRACT:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CONTRACT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CONTRACT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CONTRACT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACTS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CONTRACTS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CONTRACT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CONTRACT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CONTRACT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_CONTRACT:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_CONTRACTS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/customerR.js":
/*!*****************************************************!*\
  !*** ./src/redux/_reducers/categories/customerR.js ***!
  \*****************************************************/
/*! exports provided: customers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customers", function() { return customers; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var customers = function customers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_CUSTOMER:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMERS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMERS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMER_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMER_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_CUSTOMER:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_CUSTOMER:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CUSTOMER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CUSTOMER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          customerId: value.data.customerId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CUSTOMER:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_CUSTOMER:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_CUSTOMER:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CUSTOMER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CUSTOMER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMERS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMERS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CUSTOMER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CUSTOMER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_CUSTOMER:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_CUSTOMERS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMER_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CUSTOMER_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/datacenterR.js":
/*!*******************************************************!*\
  !*** ./src/redux/_reducers/categories/datacenterR.js ***!
  \*******************************************************/
/*! exports provided: datacenters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datacenters", function() { return datacenters; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var datacenters = function datacenters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_DATACENTER:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTERS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTERS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTER_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTER_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_DATACENTER:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_DATACENTER:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DATACENTER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DATACENTER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          dataCenterId: value.data.dataCenterId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DATACENTER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_DATACENTER:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_DATACENTER:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_DATACENTER:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DATACENTER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DATACENTER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DATACENTER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTERS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTERS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DATACENTER_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DATACENTER_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DATACENTER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_DATACENTER:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_DATACENTERS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTER_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DATACENTER_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/departmentR.js":
/*!*******************************************************!*\
  !*** ./src/redux/_reducers/categories/departmentR.js ***!
  \*******************************************************/
/*! exports provided: departments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departments", function() { return departments; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var departments = function departments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_DEPARTMENT:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENTS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENT_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENT_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_DEPARTMENT:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_DEPARTMENT:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEPARTMENT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEPARTMENT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          departmentId: value.data.departmentId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEPARTMENT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_DEPARTMENT:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_DEPARTMENT:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_DEPARTMENT:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEPARTMENT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEPARTMENT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEPARTMENT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENTS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENTS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEPARTMENT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEPARTMENT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEPARTMENT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_DEPARTMENT:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_DEPARTMENTS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENT_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEPARTMENT_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/deviceTemplateR.js":
/*!***********************************************************!*\
  !*** ./src/redux/_reducers/categories/deviceTemplateR.js ***!
  \***********************************************************/
/*! exports provided: deviceTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceTemplates", function() { return deviceTemplates; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var deviceTemplates = function deviceTemplates() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_DEVICE_TEMPLATE:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_DEVICE_TEMPLATES_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        deviceTypes: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_DEVICE_TEMPLATES_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_DEVICE_TEMPLATE:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_DEVICE_TEMPLATE:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          deviceTemplateId: value.data.deviceTemplateId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TEMPLATE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TEMPLATE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TEMPLATE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_DEVICE_TEMPLATE:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_DEVICE_TEMPLATE:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_DEVICE_TEMPLATE:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TEMPLATE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      current = data[0] || {};
      return _objectSpread({}, state, {
        current: current
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATES_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TEMPLATE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_DEVICE_TEMPLATE:
      name = action.name;
      value = action.value;
      return _objectSpread({}, state, {
        search: _defineProperty({}, name, value),
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_DEVICE_TEMPLATES:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TEMPLATE_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/deviceTypeR.js":
/*!*******************************************************!*\
  !*** ./src/redux/_reducers/categories/deviceTypeR.js ***!
  \*******************************************************/
/*! exports provided: deviceTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceTypes", function() { return deviceTypes; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var deviceTypes = function deviceTypes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_DEVICE_TYPE:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPES_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPES_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_DEVICE_TYPE:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_DEVICE_TYPE:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TYPE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TYPE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          deviceTypeId: value.data.deviceTypeId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_DEVICE_TYPE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TYPE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].IMPORT_DEVICE_TYPE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_DEVICE_TYPE:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_DEVICE_TYPE:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_DEVICE_TYPE:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TYPE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TYPE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEVICE_TYPE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPES_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPES_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TYPE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TYPE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_DEVICE_TYPE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_DEVICE_TYPE:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_DEVICE_TYPES:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_TYPE_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/locationR.js":
/*!*****************************************************!*\
  !*** ./src/redux/_reducers/categories/locationR.js ***!
  \*****************************************************/
/*! exports provided: locations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var locations = function locations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_LOCATION:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATIONS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATIONS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATION_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATION_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_LOCATION:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_LOCATION:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_LOCATION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_LOCATION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          locationId: value.data.locationId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_LOCATION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_LOCATION:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_LOCATION:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_LOCATION:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_LOCATION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_LOCATION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_LOCATION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATIONS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LOCATIONS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_LOCATION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_LOCATION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_LOCATION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_LOCATION:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_LOCATIONS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/rackR.js":
/*!*************************************************!*\
  !*** ./src/redux/_reducers/categories/rackR.js ***!
  \*************************************************/
/*! exports provided: racks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "racks", function() { return racks; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var racks = function racks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, image, locations, dataCenters, rooms, bookingU, bookingUs, devices, addDevice, moveU;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_RACK:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACKS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        // current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACKS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_RACK:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      error = action.error;

      if (['crop', 'current'].indexOf(name) > -1) {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, value)
        });
      } else {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, _defineProperty({}, name, value)),
          validate: _objectSpread({}, validate, _defineProperty({}, name, error))
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_RACK:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          rackId: value.data.rackId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_RACK:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_RACK:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_RACK:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_BY_ID_SUCCESS:
      value = action.value;
      current = value.data || {};
      return _objectSpread({}, state, {
        current: current
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_RACK:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_RACKS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_OTHER_PLUS_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_OTHER_PLUS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_LOCATION_RACK:
      dataCenters = state.dataCenters || [];
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(dataCenters, function (item) {
        return value === item.locationId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          dataCenterId: ''
        }),
        _dataCenters: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_DATACENTER_RACK:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(rooms, function (item) {
        return value === item.roomId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          roomId: ''
        }),
        _rooms: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_ROOM_RACK:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = null;
      image = '';
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(rooms, {
        roomId: value
      });

      if (data) {
        image = data.image;
      }

      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          image: image
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_BOOKING_U_RACK:
      bookingU = state.bookingU || {};
      value = action.value;
      bookingU = value;
      return _objectSpread({}, state, {
        bookingU: bookingU,
        validate: {}
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING_U_RACK_SUCCESS:
      bookingU = _objectSpread({}, state.bookingU, {
        saveSuccess: true
      }); // console.log('bU', bookingU);

      return _objectSpread({}, state, {
        bookingU: bookingU
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_ADD_DEVICE:
      addDevice = action.value;
      return _objectSpread({}, state, {
        addDevice: addDevice,
        validate: {}
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_DEVICE_RACK_SUCCESS:
      addDevice = _objectSpread({}, state.addDevice, {
        saveSuccess: true
      });
      return _objectSpread({}, state, {
        addDevice: addDevice
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_MOVE_U:
      moveU = action.value;
      return _objectSpread({}, state, {
        moveU: moveU,
        validate: {}
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SAVE_MOVE_U_SUCCESS:
      moveU = _objectSpread({}, state.moveU, {
        saveSuccess: true
      });
      return _objectSpread({}, state, {
        moveU: moveU
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_DEVICE_BY_ID_SUCCESS:
      value = action.value;
      current = action.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value)
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/regionR.js":
/*!***************************************************!*\
  !*** ./src/redux/_reducers/categories/regionR.js ***!
  \***************************************************/
/*! exports provided: regions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regions", function() { return regions; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var regions = function regions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_REGION:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGIONS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGIONS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGION_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGION_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_REGION:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_REGION:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_REGION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_REGION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          regionId: value.data.regionId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_REGION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_REGION:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_REGION:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_REGION:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_REGION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_REGION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_REGION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGIONS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      return _objectSpread({}, state, {
        current: data[0] || []
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGIONS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_REGION_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_REGION_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_REGION_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_REGION:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_REGIONS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGION_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGION_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/roomR.js":
/*!*************************************************!*\
  !*** ./src/redux/_reducers/categories/roomR.js ***!
  \*************************************************/
/*! exports provided: rooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rooms", function() { return rooms; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rooms = function rooms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, list, locations, dataCenters;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_ROOM:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOMS_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOMS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOM_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOM_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_ROOM:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      value = action.value;
      error = action.error;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _defineProperty({}, name, value)),
        validate: _objectSpread({}, validate, _defineProperty({}, name, error))
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_ROOM:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROOM_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROOM_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          roomId: value.data.roomId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ROOM_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ROOM:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_ROOM:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_ROOM:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROOM_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROOM_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ROOM_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOMS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      current = data[0] || {};
      return _objectSpread({}, state, {
        current: current
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOMS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROOM_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROOM_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ROOM_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_ROOM:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_ROOMS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOM_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ROOM_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_LOCATION_ROOM:
      dataCenters = state.dataCenters || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(dataCenters, function (item) {
        return value === item.locationId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          dataCenterId: ''
        }),
        _dataCenters: data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/categories/zoneR.js":
/*!*************************************************!*\
  !*** ./src/redux/_reducers/categories/zoneR.js ***!
  \*************************************************/
/*! exports provided: zones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zones", function() { return zones; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var zones = function zones() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, name, parents, current, validate, error, image, locations, dataCenters, rooms;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_ZONE:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONES_SUCCESS:
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: {},
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONES_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONE_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONE_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_ZONE:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      error = action.error;

      if (['crop', 'current'].indexOf(name) > -1) {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, value)
        });
      } else {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, _defineProperty({}, name, value)),
          validate: _objectSpread({}, validate, _defineProperty({}, name, error))
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_ZONE:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ZONE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ZONE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          zoneId: value.data.zoneId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_ZONE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ZONE:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_DELETE_ZONE:
      return _objectSpread({}, state, {
        current: action.value,
        open: true,
        action: 'delete'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_ZONE:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ZONE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ZONE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: {},
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_ZONE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONES_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      current = data[0] || {};
      return _objectSpread({}, state, {
        current: current
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONES_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ZONE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ZONE_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_ZONE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_ZONE:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_ZONES:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONE_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ZONE_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_LOCATION_ZONE:
      dataCenters = state.dataCenters || [];
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(dataCenters, function (item) {
        return value === item.locationId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          dataCenterId: ''
        }),
        _dataCenters: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_DATACENTER_ZONE:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(rooms, function (item) {
        return value === item.dataCenterId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          roomId: ''
        }),
        _rooms: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_ROOM_ZONE:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = null;
      image = '';
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(rooms, {
        roomId: value
      });

      if (data) {
        image = data.image;
      }

      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          image: image
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_VIEW_IMAGE_ZONE:
      value = action.value;
      current = state.current;
      return _objectSpread({}, state, {
        openImage: true,
        current: _objectSpread({}, current, value.current)
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_CLOSE_VIEW_IMAGE_ZONE:
      return _objectSpread({}, state, {
        openImage: false,
        current: {}
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/index.js":
/*!**************************************!*\
  !*** ./src/redux/_reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sideMenuR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideMenuR */ "./src/redux/_reducers/sideMenuR.js");
/* harmony import */ var _admin_routeR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/routeR */ "./src/redux/_reducers/admin/routeR.js");
/* harmony import */ var _admin_actionR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/actionR */ "./src/redux/_reducers/admin/actionR.js");
/* harmony import */ var _admin_groupR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/groupR */ "./src/redux/_reducers/admin/groupR.js");
/* harmony import */ var _admin_userR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/userR */ "./src/redux/_reducers/admin/userR.js");
/* harmony import */ var _admin_permissionR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/permissionR */ "./src/redux/_reducers/admin/permissionR.js");
/* harmony import */ var _categories_locationR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/locationR */ "./src/redux/_reducers/categories/locationR.js");
/* harmony import */ var _categories_datacenterR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/datacenterR */ "./src/redux/_reducers/categories/datacenterR.js");
/* harmony import */ var _categories_roomR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/roomR */ "./src/redux/_reducers/categories/roomR.js");
/* harmony import */ var _categories_zoneR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/zoneR */ "./src/redux/_reducers/categories/zoneR.js");
/* harmony import */ var _categories_customerR__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories/customerR */ "./src/redux/_reducers/categories/customerR.js");
/* harmony import */ var _categories_departmentR__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/departmentR */ "./src/redux/_reducers/categories/departmentR.js");
/* harmony import */ var _categories_deviceTypeR__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories/deviceTypeR */ "./src/redux/_reducers/categories/deviceTypeR.js");
/* harmony import */ var _categories_regionR__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./categories/regionR */ "./src/redux/_reducers/categories/regionR.js");
/* harmony import */ var _categories_deviceTemplateR__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories/deviceTemplateR */ "./src/redux/_reducers/categories/deviceTemplateR.js");
/* harmony import */ var _categories_rackR__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/rackR */ "./src/redux/_reducers/categories/rackR.js");
/* harmony import */ var _layoutR__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layoutR */ "./src/redux/_reducers/layoutR.js");
/* harmony import */ var _alertR__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alertR */ "./src/redux/_reducers/alertR.js");
/* harmony import */ var _loadingR__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loadingR */ "./src/redux/_reducers/loadingR.js");
/* harmony import */ var _categories_contractR__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories/contractR */ "./src/redux/_reducers/categories/contractR.js");





















var appReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  sideMenuR: _sideMenuR__WEBPACK_IMPORTED_MODULE_1__["sideMenuR"],
  routes: _admin_routeR__WEBPACK_IMPORTED_MODULE_2__["routes"],
  actions: _admin_actionR__WEBPACK_IMPORTED_MODULE_3__["actions"],
  groups: _admin_groupR__WEBPACK_IMPORTED_MODULE_4__["groups"],
  users: _admin_userR__WEBPACK_IMPORTED_MODULE_5__["users"],
  permissions: _admin_permissionR__WEBPACK_IMPORTED_MODULE_6__["permissions"],
  alerts: _alertR__WEBPACK_IMPORTED_MODULE_18__["alerts"],
  locations: _categories_locationR__WEBPACK_IMPORTED_MODULE_7__["locations"],
  datacenters: _categories_datacenterR__WEBPACK_IMPORTED_MODULE_8__["datacenters"],
  rooms: _categories_roomR__WEBPACK_IMPORTED_MODULE_9__["rooms"],
  zones: _categories_zoneR__WEBPACK_IMPORTED_MODULE_10__["zones"],
  customers: _categories_customerR__WEBPACK_IMPORTED_MODULE_11__["customers"],
  departments: _categories_departmentR__WEBPACK_IMPORTED_MODULE_12__["departments"],
  regions: _categories_regionR__WEBPACK_IMPORTED_MODULE_14__["regions"],
  deviceTypes: _categories_deviceTypeR__WEBPACK_IMPORTED_MODULE_13__["deviceTypes"],
  deviceTemplates: _categories_deviceTemplateR__WEBPACK_IMPORTED_MODULE_15__["deviceTemplates"],
  layouts: _layoutR__WEBPACK_IMPORTED_MODULE_17__["layouts"],
  racks: _categories_rackR__WEBPACK_IMPORTED_MODULE_16__["racks"],
  contracts: _categories_contractR__WEBPACK_IMPORTED_MODULE_20__["contracts"],
  loading: _loadingR__WEBPACK_IMPORTED_MODULE_19__["loading"]
});
/* harmony default export */ __webpack_exports__["default"] = (appReducers);

/***/ }),

/***/ "./src/redux/_reducers/layoutR.js":
/*!****************************************!*\
  !*** ./src/redux/_reducers/layoutR.js ***!
  \****************************************/
/*! exports provided: layouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return layouts; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var layouts = function layouts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var pagination, value, data, draw, shapes, parents, current, validate, error, image, racks, dataCenters, rooms, find;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INIT_UPDATE_LAYOUT:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUTS_SUCCESS:
      current = state.current || {};
      value = action.value;
      pagination = value.pagination;
      data = value.data;
      return _objectSpread({}, state, {
        pagination: pagination,
        list: data,
        current: _objectSpread({}, current),
        loading: 0,
        action: '',
        open: false,
        searchLoading: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        searchLoading: false,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUT_PARENTS_SUCCESS:
      value = action.value || {};
      parents = value.data || [];
      return _objectSpread({}, state, {
        parents: parents
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUT_PARENTS_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CURRENT_LAYOUT:
      current = state.current || {};
      validate = state.validate || {};
      name = action.name;
      error = action.error;

      if (['crop', 'current'].indexOf(name) > -1) {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, value)
        });
      }

      if (name === 'new') {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, value)
        });
      } else if (name === 'current') {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, value)
        });
      } else {
        value = action.value;
        return _objectSpread({}, state, {
          current: _objectSpread({}, current, _defineProperty({}, name, value)),
          validate: _objectSpread({}, validate, _defineProperty({}, name, error))
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].VALIDATE_LAYOUT:
      validate = state.validate || {};
      value = action.value;
      return _objectSpread({}, state, {
        validate: value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_LAYOUT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'insert'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_LAYOUT_SUCCESS:
      value = action.value;
      data = value.data;
      current = state.current || {};
      draw = current.draw || {};
      shapes = draw.shapes || [];
      racks = state.racks || [];
      find = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(racks, {
        rackId: data.rackId
      });
      if (find === -1) racks.push(data);
      find = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(shapes, {
        name: data.name
      });
      if (find) find.id = data.rackId;
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          rackId: data.rackId
        }),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].INSERT_RACK_LAYOUT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_LAYOUT:
      return _objectSpread({}, state, {
        open: action.value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLE_UPDATE_LAYOUT:
      return _objectSpread({}, state, {
        current: action.value,
        open: false,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_LAYOUT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'delete',
        open: false
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_LAYOUT_SUCCESS:
      value = action.value;
      current = state.current || {};
      draw = current.draw || {};
      racks = state.racks || [];
      shapes = draw.shapes || [];
      find = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(shapes, {
        id: parseInt(value.data.rackId)
      });

      if (find > -1) {
        shapes.splice(find, 1);
      }

      find = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(racks, {
        rackId: parseInt(value.data.rackId)
      });

      if (find > -1) {
        racks.splice(find, 1);
      }

      return _objectSpread({}, state, {
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_RACK_LAYOUT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUTS_BY_ID_SUCCESS:
      value = action.value;
      data = value.data;
      current = action.current;

      var _current = data[0] || {};

      return _objectSpread({}, state, {
        current: _objectSpread({}, current, _current)
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUTS_BY_ID_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_LAYOUT_REQUEST:
      return _objectSpread({}, state, {
        loading: 1,
        action: 'update'
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_LAYOUT_SUCCESS:
      value = action.value;
      current = state.current || {};
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RACK_LAYOUT_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_LAYOUT:
      return _objectSpread({}, state, {
        search: {
          str: action.value
        },
        searchLoading: true
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ON_PAGE_CHANGE_LAYOUTS:
      value = action.value;
      pagination = state.pagination || {};
      return _objectSpread({}, state, {
        pagination: _objectSpread({}, pagination, {
          currentPage: value
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUT_OTHER_SUCCESS:
      value = action.value;
      return _objectSpread({}, state, value);

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_LAYOUT_OTHER_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_LOCATION_LAYOUT:
      dataCenters = state.dataCenters || [];
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(dataCenters, function (item) {
        return value === item.locationId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          dataCenterId: ''
        }),
        _dataCenters: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_DATACENTER_LAYOUT:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(rooms, function (item) {
        return value === item.roomId;
      });
      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          roomId: ''
        }),
        _rooms: data
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONCHANGE_ROOM_LAYOUT:
      rooms = state.rooms || [];
      current = state.current || {};
      value = action.value;
      data = null;
      image = '';
      data = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(rooms, {
        roomId: value
      });

      if (data) {
        image = data.image;
      }

      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          image: image
        })
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACKS_BY_ZONE_REQUEST:
      return _objectSpread({}, state, {
        loading: 1
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACKS_BY_ZONE_SUCCESS:
      value = action.value;
      data = value.data;
      current = state.current || {};
      draw = current.draw || {};
      shapes = draw.shapes || [];
      racks = current.racks || [];
      var name = '';
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
        name += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(data, function (r) {
        shapes.push({
          x: r.x,
          y: r.y,
          id: r.rackId,
          width: r.width,
          height: r.height,
          draggable: true,
          name: name
        });
      }); // if(_.size(shapes) > 0) {
      // }


      return _objectSpread({}, state, {
        current: _objectSpread({}, current, {
          draw: _objectSpread({}, draw, {
            shapes: shapes
          })
        }),
        racks: [].concat(_toConsumableArray(racks), _toConsumableArray(data)),
        loading: 2
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACKS_BY_ZONE_FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        loading: 0
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_BY_ID2_SUCCESS:
      value = action.value;
      current = state.current || {}; // current = value.data || {};

      return _objectSpread({}, state, {
        current: _objectSpread({}, current, value.data || {})
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RACK_BY_ID2_FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_LOADING_LAYOUT:
      value = action.value;
      return _objectSpread({}, state, {
        loading: value
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/loadingR.js":
/*!*****************************************!*\
  !*** ./src/redux/_reducers/loadingR.js ***!
  \*****************************************/
/*! exports provided: loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return loading; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");

var loading = function loading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_START:
      return {
        status: true,
        message: action.message
      };

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_STOP:
      return {
        status: false,
        message: action.message
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/_reducers/sideMenuR.js":
/*!******************************************!*\
  !*** ./src/redux/_reducers/sideMenuR.js ***!
  \******************************************/
/*! exports provided: sideMenuR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideMenuR", function() { return sideMenuR; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants/actionTypes */ "./src/redux/_constants/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  smallMenu: false,
  activeItem: '/',
  activeIndex: -1
};
var sideMenuR = function sideMenuR() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_MENU:
      var value = action.value;
      return _objectSpread({}, state, {
        smallMenu: typeof value === 'undefined' ? !state.smallMenu : value
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ACTIVE_ITEM:
      return _objectSpread({}, state, {
        activeItem: action.name
      });

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ACTIVE_INDEX_SIDEBAR:
      return _objectSpread({}, state, {
        activeIndex: action.index
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_reducers/index */ "./src/redux/_reducers/index.js");




var initStore = function initStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const dotenv = require('dotenv');
// dotenv.config();
var node_env = "development";
var config = {};
config.production = {
  originBackend: 'https://raca.ast.fpt.net',
  originFrontend: 'https://raca.ast.fpt.net',
  originRoot: 'https://ast.fpt.net',
  prevOrigin: '/raca-api',
  prevURL: '' // originBackend: 'http://172.27.229.69:4000'

};
config.development = {
  // originBackend: `${protocol}//${hostname}:4000`
  originBackend: "http://localhost:3001",
  originFrontend: 'http://localhost:3000',
  // originRoot: 'https://ast.fpt.net',
  originRoot: 'https://localhost:4000',
  // originRoot: 'https://172.27.137.72:4000',
  // originRoot: 'http://172.27.137.72:4000',
  prevOrigin: '/raca-api',
  prevURL: ''
};
config.environment = 'development';

if (~['production'].indexOf(node_env)) {
  config.environment = 'production';
} // console.log('ENV: ', config.environment ,config);


module.exports = config;

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map