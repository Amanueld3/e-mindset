(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_4__);
var _window$document$getE;



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





var appName = ((_window$document$getE = window.document.getElementsByTagName("title")[0]) === null || _window$document$getE === void 0 ? void 0 : _window$document$getE.innerText) || "E-Mindset";
(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(appName, " - ").concat(_title, " ");
  },
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var _page$layout;

      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = Layout;
              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        app = _ref.app,
        props = _ref.props,
        plugin = _ref.plugin;
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(app, props);
      }
    }).use(plugin).use((_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_4___default())).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__.InertiaProgress.init({
  color: "#94cb00",
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Admin/Dashboard": [
		"./resources/js/Pages/Admin/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_vue"
	],
	"./Admin/Dashboard.vue": [
		"./resources/js/Pages/Admin/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_vue"
	],
	"./Admin/Users": [
		"./resources/js/Pages/Admin/Users.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_vue"
	],
	"./Admin/Users.vue": [
		"./resources/js/Pages/Admin/Users.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_vue"
	],
	"./Admin/courses/AddCourse": [
		"./resources/js/Pages/Admin/courses/AddCourse.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_courses_AddCourse_vue"
	],
	"./Admin/courses/AddCourse.vue": [
		"./resources/js/Pages/Admin/courses/AddCourse.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_courses_AddCourse_vue"
	],
	"./Admin/courses/Courses": [
		"./resources/js/Pages/Admin/courses/Courses.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_courses_Courses_vue"
	],
	"./Admin/courses/Courses.vue": [
		"./resources/js/Pages/Admin/courses/Courses.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_courses_Courses_vue"
	],
	"./Auth/ConfirmPassword": [
		"./resources/js/Pages/Auth/ConfirmPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ConfirmPassword_vue"
	],
	"./Auth/ConfirmPassword.vue": [
		"./resources/js/Pages/Auth/ConfirmPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ConfirmPassword_vue"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/ForgotPassword.vue": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/ResetPassword.vue": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/VerifyEmail": [
		"./resources/js/Pages/Auth/VerifyEmail.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_VerifyEmail_vue"
	],
	"./Auth/VerifyEmail.vue": [
		"./resources/js/Pages/Auth/VerifyEmail.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_VerifyEmail_vue"
	],
	"./Contact": [
		"./resources/js/Pages/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Contact_vue"
	],
	"./Contact.vue": [
		"./resources/js/Pages/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Contact_vue"
	],
	"./Courses": [
		"./resources/js/Pages/Courses.vue",
		"/js/vendor",
		"resources_js_Pages_Courses_vue"
	],
	"./Courses.vue": [
		"./resources/js/Pages/Courses.vue",
		"/js/vendor",
		"resources_js_Pages_Courses_vue"
	],
	"./Gallery": [
		"./resources/js/Pages/Gallery.vue",
		"/js/vendor",
		"resources_js_Pages_Gallery_vue"
	],
	"./Gallery.vue": [
		"./resources/js/Pages/Gallery.vue",
		"/js/vendor",
		"resources_js_Pages_Gallery_vue"
	],
	"./Welcome": [
		"./resources/js/Pages/Welcome.vue",
		"/js/vendor",
		"resources_js_Pages_Welcome_vue"
	],
	"./Welcome.vue": [
		"./resources/js/Pages/Welcome.vue",
		"/js/vendor",
		"resources_js_Pages_Welcome_vue"
	],
	"./shared/AdminNav": [
		"./resources/js/Pages/shared/AdminNav.vue",
		"/js/vendor",
		"resources_js_Pages_shared_AdminNav_vue"
	],
	"./shared/AdminNav.vue": [
		"./resources/js/Pages/shared/AdminNav.vue",
		"/js/vendor",
		"resources_js_Pages_shared_AdminNav_vue"
	],
	"./shared/Footer": [
		"./resources/js/Pages/shared/Footer.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Footer_vue"
	],
	"./shared/Footer.vue": [
		"./resources/js/Pages/shared/Footer.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Footer_vue"
	],
	"./shared/Layout": [
		"./resources/js/Pages/shared/Layout.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Layout_vue"
	],
	"./shared/Layout.vue": [
		"./resources/js/Pages/shared/Layout.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Layout_vue"
	],
	"./shared/Nav": [
		"./resources/js/Pages/shared/Nav.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Nav_vue"
	],
	"./shared/Nav.vue": [
		"./resources/js/Pages/shared/Nav.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Nav_vue"
	],
	"./shared/NavLink": [
		"./resources/js/Pages/shared/NavLink.vue",
		"/js/vendor",
		"resources_js_Pages_shared_NavLink_vue"
	],
	"./shared/NavLink.vue": [
		"./resources/js/Pages/shared/NavLink.vue",
		"/js/vendor",
		"resources_js_Pages_shared_NavLink_vue"
	],
	"./shared/Pagination": [
		"./resources/js/Pages/shared/Pagination.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Pagination_vue"
	],
	"./shared/Pagination.vue": [
		"./resources/js/Pages/shared/Pagination.vue",
		"/js/vendor",
		"resources_js_Pages_shared_Pagination_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);