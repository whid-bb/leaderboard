"use strict";
(self["webpackChunkto_dolist"] = self["webpackChunkto_dolist"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api.js */ "./src/js/api.js");

var api = new _js_api_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  refreshBtn: 'refresh-scores',
  submitBtn: 'save-score',
  board: '#scores-content ul'
});
api.init();

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LeaderboardApi = /*#__PURE__*/function () {
  function LeaderboardApi(_ref) {
    var _this = this;

    var refreshBtn = _ref.refreshBtn,
        submitBtn = _ref.submitBtn,
        board = _ref.board;

    _classCallCheck(this, LeaderboardApi);

    _defineProperty(this, "apiUrl", 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YGUJElUwMihyneuKyz3n/scores');

    _defineProperty(this, "init", function () {
      _this.refreshBtn.addEventListener('click', function () {
        return _this.getScores(_this.board);
      });

      _this.submitBtn.addEventListener('click', function (e) {
        return _this.submitForm(e);
      });

      _this.getScores();
    });

    _defineProperty(this, "newGame", function () {
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        body: JSON.stringify({
          name: 'WhidBB GameOne'
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return json;
      });
    });

    _defineProperty(this, "loadingGfx", function (el) {
      el.insertAdjacentHTML('beforeend', "<p class='load-spinner'>Loading!</p>");
    });

    _defineProperty(this, "removeLoadGfx", function (el) {
      el.closest('.load-spinner').remove();
    });

    _defineProperty(this, "renderTemplate", function (el) {
      return "<li>".concat(el.user, " - ").concat(el.score, "</li>");
    });

    _defineProperty(this, "renderList", function (scores) {
      _this.board.innerHTML = '';

      _toConsumableArray(scores).forEach(function (el) {
        _this.board.insertAdjacentHTML('beforeend', _this.renderTemplate(el));
      });
    });

    this.refreshBtn = document.getElementById(refreshBtn);
    this.submitBtn = document.getElementById(submitBtn);
    this.board = document.querySelector(board);
  }

  _createClass(LeaderboardApi, [{
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
      var form = this.submitBtn.closest('form');
      var formData = new FormData(form);
      var user = formData.get('user');
      var score = formData.get('score-num');
      this.saveData({
        user: user,
        score: score
      });
      form.reset();
    }
  }, {
    key: "getUserScoresPromise",
    value: function () {
      var _getUserScoresPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.apiUrl);

              case 2:
                return _context.abrupt("return", _context.sent.json());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserScoresPromise() {
        return _getUserScoresPromise.apply(this, arguments);
      }

      return getUserScoresPromise;
    }()
  }, {
    key: "getScores",
    value: function () {
      var _getScores = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var scores;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getUserScoresPromise();

              case 3:
                scores = _context2.sent;
                this.renderList(scores.result);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error("Error: ".concat(_context2.t0));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getScores() {
        return _getScores.apply(this, arguments);
      }

      return getScores;
    }()
  }, {
    key: "saveData",
    value: function () {
      var _saveData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref2) {
        var user, score;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                user = _ref2.user, score = _ref2.score;
                _context3.prev = 1;
                _context3.next = 4;
                return fetch(this.apiUrl, {
                  method: 'POST',
                  body: JSON.stringify({
                    user: user,
                    score: score
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                  }
                });

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                console.error("Error: ".concat(_context3.t0));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 6]]);
      }));

      function saveData(_x) {
        return _saveData.apply(this, arguments);
      }

      return saveData;
    }()
  }]);

  return LeaderboardApi;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderboardApi);

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"), __webpack_exec__("./src/scss/base.scss"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtrQkFLdkJULE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7a0JBRFQ7Z0JBTGMsQ0FBZCxDQUZmOztjQUFBO2dCQUFBO2dCQUFBOztjQUFBO2dCQUFBO2dCQUFBO2dCQVlJNEIsT0FBTyxDQUFDQyxLQUFSOztjQVpKO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTs7Ozs7Ozs7Ozs7OztBQWlCRixpRUFBZTdDLGNBQWY7Ozs7Ozs7Ozs7O0FDeEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG9saXN0Ly4vc3JjL3Njc3MvYmFzZS5zY3NzPzljMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExlYWRlcmJvYXJkQXBpIGZyb20gJy4vanMvYXBpLmpzJztcblxuY29uc3QgYXBpID0gbmV3IExlYWRlcmJvYXJkQXBpKHtcbiAgcmVmcmVzaEJ0bjogJ3JlZnJlc2gtc2NvcmVzJyxcbiAgc3VibWl0QnRuOiAnc2F2ZS1zY29yZScsXG4gIGJvYXJkOiAnI3Njb3Jlcy1jb250ZW50IHVsJyxcbn0pO1xuYXBpLmluaXQoKTsiLCJjbGFzcyBMZWFkZXJib2FyZEFwaSB7XG4gIGFwaVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9ZR1VKRWxVd01paHluZXVLeXozbi9zY29yZXMnO1xuXG4gIGNvbnN0cnVjdG9yKHsgcmVmcmVzaEJ0biwgc3VibWl0QnRuLCBib2FyZCB9KSB7XG4gICAgdGhpcy5yZWZyZXNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVmcmVzaEJ0bik7XG4gICAgdGhpcy5zdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdWJtaXRCdG4pO1xuICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkKTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5yZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nZXRTY29yZXModGhpcy5ib2FyZCkpO1xuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc3VibWl0Rm9ybShlKSk7XG4gICAgdGhpcy5nZXRTY29yZXMoKTtcbiAgfTtcblxuICBuZXdHYW1lID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiAnV2hpZEJCIEdhbWVPbmUnLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiBqc29uKTtcbiAgfTtcblxuICBsb2FkaW5nR2Z4ID0gKGVsKSA9PiB7XG4gICAgZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBcIjxwIGNsYXNzPSdsb2FkLXNwaW5uZXInPkxvYWRpbmchPC9wPlwiKTtcbiAgfTtcblxuICByZW1vdmVMb2FkR2Z4ID0gKGVsKSA9PiB7XG4gICAgZWwuY2xvc2VzdCgnLmxvYWQtc3Bpbm5lcicpLnJlbW92ZSgpO1xuICB9O1xuXG4gIHN1Ym1pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gdGhpcy5zdWJtaXRCdG4uY2xvc2VzdCgnZm9ybScpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHVzZXIgPSBmb3JtRGF0YS5nZXQoJ3VzZXInKTtcbiAgICBjb25zdCBzY29yZSA9IGZvcm1EYXRhLmdldCgnc2NvcmUtbnVtJyk7XG4gICAgdGhpcy5zYXZlRGF0YSh7IHVzZXIsIHNjb3JlIH0pO1xuXG4gICAgZm9ybS5yZXNldCgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0VXNlclNjb3Jlc1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIChhd2FpdCBmZXRjaCh0aGlzLmFwaVVybCkpLmpzb24oKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlID0gKGVsKSA9PiBgPGxpPiR7ZWwudXNlcn0gLSAke2VsLnNjb3JlfTwvbGk+YDtcblxuICByZW5kZXJMaXN0ID0gKHNjb3JlcykgPT4ge1xuICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgWy4uLnNjb3Jlc10uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRoaXMuYm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnJlbmRlclRlbXBsYXRlKGVsKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgYXN5bmMgZ2V0U2NvcmVzKCkge1xuICAgIGxldCBzY29yZXM7XG4gICAgdHJ5IHtcbiAgICAgIHNjb3JlcyA9IGF3YWl0IHRoaXMuZ2V0VXNlclNjb3Jlc1Byb21pc2UoKTtcbiAgICAgIHRoaXMucmVuZGVyTGlzdChzY29yZXMucmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogJHtlfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNhdmVEYXRhKHsgdXNlciwgc2NvcmUgfSkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmZXRjaCh0aGlzLmFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXIsIHNjb3JlLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogJHtlfWApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZEFwaTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiTGVhZGVyYm9hcmRBcGkiLCJhcGkiLCJyZWZyZXNoQnRuIiwic3VibWl0QnRuIiwiYm9hcmQiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNjb3JlcyIsImUiLCJzdWJtaXRGb3JtIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVsIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xvc2VzdCIsInJlbW92ZSIsInVzZXIiLCJzY29yZSIsInNjb3JlcyIsImlubmVySFRNTCIsImZvckVhY2giLCJyZW5kZXJUZW1wbGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImdldCIsInNhdmVEYXRhIiwicmVzZXQiLCJhcGlVcmwiLCJnZXRVc2VyU2NvcmVzUHJvbWlzZSIsInJlbmRlckxpc3QiLCJyZXN1bHQiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9