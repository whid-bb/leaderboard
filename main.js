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
        return _this.getScores();
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
        return console.log(json);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWU3QyxjQUFmOzs7Ozs7Ozs7OztBQ2pGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kb2xpc3QvLi9zcmMvanMvYXBpLmpzIiwid2VicGFjazovL3RvLWRvbGlzdC8uL3NyYy9zY3NzL2Jhc2Uuc2Nzcz85YzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZWFkZXJib2FyZEFwaSBmcm9tICcuL2pzL2FwaS5qcyc7XG5cbmNvbnN0IGFwaSA9IG5ldyBMZWFkZXJib2FyZEFwaSh7XG4gIHJlZnJlc2hCdG46ICdyZWZyZXNoLXNjb3JlcycsXG4gIHN1Ym1pdEJ0bjogJ3NhdmUtc2NvcmUnLFxuICBib2FyZDogJyNzY29yZXMtY29udGVudCB1bCcsXG59KTtcbmFwaS5pbml0KCk7IiwiY2xhc3MgTGVhZGVyYm9hcmRBcGkge1xuICBhcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWUdVSkVsVXdNaWh5bmV1S3l6M24vc2NvcmVzJztcblxuICBjb25zdHJ1Y3Rvcih7IHJlZnJlc2hCdG4sIHN1Ym1pdEJ0biwgYm9hcmQgfSkge1xuICAgIHRoaXMucmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlZnJlc2hCdG4pO1xuICAgIHRoaXMuc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3VibWl0QnRuKTtcbiAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZCk7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2V0U2NvcmVzKCkpO1xuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc3VibWl0Rm9ybShlKSk7XG4gICAgdGhpcy5nZXRTY29yZXMoKTtcbiAgfTtcblxuICBuZXdHYW1lID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiAnV2hpZEJCIEdhbWVPbmUnLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiBjb25zb2xlLmxvZyhqc29uKSk7XG4gIH07XG5cbiAgc3VibWl0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLnN1Ym1pdEJ0bi5jbG9zZXN0KCdmb3JtJyk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdXNlciA9IGZvcm1EYXRhLmdldCgndXNlcicpO1xuICAgIGNvbnN0IHNjb3JlID0gZm9ybURhdGEuZ2V0KCdzY29yZS1udW0nKTtcblxuICAgIHRoaXMuc2F2ZURhdGEoeyB1c2VyLCBzY29yZSB9KTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cblxuICBhc3luYyBnZXRVc2VyU2NvcmVzUHJvbWlzZSgpIHtcbiAgICByZXR1cm4gKGF3YWl0IGZldGNoKHRoaXMuYXBpVXJsKSkuanNvbigpO1xuICB9XG5cbiAgcmVuZGVyVGVtcGxhdGUgPSAoZWwpID0+IGA8bGk+JHtlbC51c2VyfSAtICR7ZWwuc2NvcmV9PC9saT5gO1xuXG4gIHJlbmRlckxpc3QgPSAoc2NvcmVzKSA9PiB7XG4gICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICBbLi4uc2NvcmVzXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMucmVuZGVyVGVtcGxhdGUoZWwpKTtcbiAgICB9KTtcbiAgfTtcblxuICBhc3luYyBnZXRTY29yZXMoKSB7XG4gICAgbGV0IHNjb3JlcztcblxuICAgIHRyeSB7XG4gICAgICBzY29yZXMgPSBhd2FpdCB0aGlzLmdldFVzZXJTY29yZXNQcm9taXNlKCk7XG4gICAgICB0aGlzLnJlbmRlckxpc3Qoc2NvcmVzLnJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzYXZlRGF0YSh7IHVzZXIsIHNjb3JlIH0pIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmV0Y2godGhpcy5hcGlVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VyLCBzY29yZSxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZX1gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyYm9hcmRBcGk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkxlYWRlcmJvYXJkQXBpIiwiYXBpIiwicmVmcmVzaEJ0biIsInN1Ym1pdEJ0biIsImJvYXJkIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRTY29yZXMiLCJlIiwic3VibWl0Rm9ybSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZWwiLCJ1c2VyIiwic2NvcmUiLCJzY29yZXMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicmVuZGVyVGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsb3Nlc3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0Iiwic2F2ZURhdGEiLCJyZXNldCIsImFwaVVybCIsImdldFVzZXJTY29yZXNQcm9taXNlIiwicmVuZGVyTGlzdCIsInJlc3VsdCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==