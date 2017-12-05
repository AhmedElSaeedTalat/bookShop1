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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(27);
var _Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(11);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var core = __webpack_require__(3);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(44);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(5);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(11).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(4);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(7);
var $iterCreate = __webpack_require__(47);
var setToStringTag = __webpack_require__(19);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(2);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(9);
var invoke = __webpack_require__(67);
var html = __webpack_require__(29);
var cel = __webpack_require__(16);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(2);
var isObject = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(20);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Fuse"] = factory();else root["Fuse"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 8);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var bitapRegexSearch = __webpack_require__(5);
      var bitapSearch = __webpack_require__(7);
      var patternAlphabet = __webpack_require__(4);

      var Bitap = function () {
        function Bitap(pattern, _ref) {
          var _ref$location = _ref.location,
              location = _ref$location === undefined ? 0 : _ref$location,
              _ref$distance = _ref.distance,
              distance = _ref$distance === undefined ? 100 : _ref$distance,
              _ref$threshold = _ref.threshold,
              threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
              _ref$maxPatternLength = _ref.maxPatternLength,
              maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
              _ref$isCaseSensitive = _ref.isCaseSensitive,
              isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
              _ref$tokenSeparator = _ref.tokenSeparator,
              tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
              _ref$findAllMatches = _ref.findAllMatches,
              findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
              _ref$minMatchCharLeng = _ref.minMatchCharLength,
              minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

          _classCallCheck(this, Bitap);

          this.options = {
            location: location,
            distance: distance,
            threshold: threshold,
            maxPatternLength: maxPatternLength,
            isCaseSensitive: isCaseSensitive,
            tokenSeparator: tokenSeparator,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength
          };

          this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

          if (this.pattern.length <= maxPatternLength) {
            this.patternAlphabet = patternAlphabet(this.pattern);
          }
        }

        _createClass(Bitap, [{
          key: 'search',
          value: function search(text) {
            if (!this.options.isCaseSensitive) {
              text = text.toLowerCase();
            }

            // Exact match
            if (this.pattern === text) {
              return {
                isMatch: true,
                score: 0,
                matchedIndices: [[0, text.length - 1]]
              };
            }

            // When pattern length is greater than the machine word length, just do a a regex comparison
            var _options = this.options,
                maxPatternLength = _options.maxPatternLength,
                tokenSeparator = _options.tokenSeparator;

            if (this.pattern.length > maxPatternLength) {
              return bitapRegexSearch(text, this.pattern, tokenSeparator);
            }

            // Otherwise, use Bitap algorithm
            var _options2 = this.options,
                location = _options2.location,
                distance = _options2.distance,
                threshold = _options2.threshold,
                findAllMatches = _options2.findAllMatches,
                minMatchCharLength = _options2.minMatchCharLength;

            return bitapSearch(text, this.pattern, this.patternAlphabet, {
              location: location,
              distance: distance,
              threshold: threshold,
              findAllMatches: findAllMatches,
              minMatchCharLength: minMatchCharLength
            });
          }
        }]);

        return Bitap;
      }();

      // let x = new Bitap("od mn war", {})
      // let result = x.search("Old Man's War")
      // console.log(result)

      module.exports = Bitap;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var isArray = __webpack_require__(0);

      var deepValue = function deepValue(obj, path, list) {
        if (!path) {
          // If there's no path left, we've gotten to the object we care about.
          list.push(obj);
        } else {
          var dotIndex = path.indexOf('.');
          var firstSegment = path;
          var remaining = null;

          if (dotIndex !== -1) {
            firstSegment = path.slice(0, dotIndex);
            remaining = path.slice(dotIndex + 1);
          }

          var value = obj[firstSegment];

          if (value !== null && value !== undefined) {
            if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
              list.push(value.toString());
            } else if (isArray(value)) {
              // Search each item in the array.
              for (var i = 0, len = value.length; i < len; i += 1) {
                deepValue(value[i], remaining, list);
              }
            } else if (remaining) {
              // An object. Recurse further.
              deepValue(value, remaining, list);
            }
          }
        }

        return list;
      };

      module.exports = function (obj, path) {
        return deepValue(obj, path, []);
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function () {
        var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var matchedIndices = [];
        var start = -1;
        var end = -1;
        var i = 0;

        for (var len = matchmask.length; i < len; i += 1) {
          var match = matchmask[i];
          if (match && start === -1) {
            start = i;
          } else if (!match && start !== -1) {
            end = i - 1;
            if (end - start + 1 >= minMatchCharLength) {
              matchedIndices.push([start, end]);
            }
            start = -1;
          }
        }

        // (i-1 - start) + 1 => i - start
        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
          matchedIndices.push([start, i - 1]);
        }

        return matchedIndices;
      };

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function (pattern) {
        var mask = {};
        var len = pattern.length;

        for (var i = 0; i < len; i += 1) {
          mask[pattern.charAt(i)] = 0;
        }

        for (var _i = 0; _i < len; _i += 1) {
          mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
        }

        return mask;
      };

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

      module.exports = function (text, pattern) {
        var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

        var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
        var matches = text.match(regex);
        var isMatch = !!matches;
        var matchedIndices = [];

        if (isMatch) {
          for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
            var match = matches[i];
            matchedIndices.push([text.indexOf(match), match.length - 1]);
          }
        }

        return {
          // TODO: revisit this score
          score: isMatch ? 0.5 : 1,
          isMatch: isMatch,
          matchedIndices: matchedIndices
        };
      };

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function (pattern, _ref) {
        var _ref$errors = _ref.errors,
            errors = _ref$errors === undefined ? 0 : _ref$errors,
            _ref$currentLocation = _ref.currentLocation,
            currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
            _ref$expectedLocation = _ref.expectedLocation,
            expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
            _ref$distance = _ref.distance,
            distance = _ref$distance === undefined ? 100 : _ref$distance;

        var accuracy = errors / pattern.length;
        var proximity = Math.abs(expectedLocation - currentLocation);

        if (!distance) {
          // Dodge divide by zero error.
          return proximity ? 1.0 : accuracy;
        }

        return accuracy + proximity / distance;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var bitapScore = __webpack_require__(6);
      var matchedIndices = __webpack_require__(3);

      module.exports = function (text, pattern, patternAlphabet, _ref) {
        var _ref$location = _ref.location,
            location = _ref$location === undefined ? 0 : _ref$location,
            _ref$distance = _ref.distance,
            distance = _ref$distance === undefined ? 100 : _ref$distance,
            _ref$threshold = _ref.threshold,
            threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
            _ref$findAllMatches = _ref.findAllMatches,
            findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
            _ref$minMatchCharLeng = _ref.minMatchCharLength,
            minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

        var expectedLocation = location;
        // Set starting location at beginning text and initialize the alphabet.
        var textLen = text.length;
        // Highest score beyond which we give up.
        var currentThreshold = threshold;
        // Is there a nearby exact match? (speedup)
        var bestLocation = text.indexOf(pattern, expectedLocation);

        var patternLen = pattern.length;

        // a mask of the matches
        var matchMask = [];
        for (var i = 0; i < textLen; i += 1) {
          matchMask[i] = 0;
        }

        if (bestLocation !== -1) {
          var score = bitapScore(pattern, {
            errors: 0,
            currentLocation: bestLocation,
            expectedLocation: expectedLocation,
            distance: distance
          });
          currentThreshold = Math.min(score, currentThreshold);

          // What about in the other direction? (speed up)
          bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

          if (bestLocation !== -1) {
            var _score = bitapScore(pattern, {
              errors: 0,
              currentLocation: bestLocation,
              expectedLocation: expectedLocation,
              distance: distance
            });
            currentThreshold = Math.min(_score, currentThreshold);
          }
        }

        // Reset the best location
        bestLocation = -1;

        var lastBitArr = [];
        var finalScore = 1;
        var binMax = patternLen + textLen;

        var mask = 1 << patternLen - 1;

        for (var _i = 0; _i < patternLen; _i += 1) {
          // Scan for the best match; each iteration allows for one more error.
          // Run a binary search to determine how far from the match location we can stray
          // at this error level.
          var binMin = 0;
          var binMid = binMax;

          while (binMin < binMid) {
            var _score3 = bitapScore(pattern, {
              errors: _i,
              currentLocation: expectedLocation + binMid,
              expectedLocation: expectedLocation,
              distance: distance
            });

            if (_score3 <= currentThreshold) {
              binMin = binMid;
            } else {
              binMax = binMid;
            }

            binMid = Math.floor((binMax - binMin) / 2 + binMin);
          }

          // Use the result from this iteration as the maximum for the next.
          binMax = binMid;

          var start = Math.max(1, expectedLocation - binMid + 1);
          var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

          // Initialize the bit array
          var bitArr = Array(finish + 2);

          bitArr[finish + 1] = (1 << _i) - 1;

          for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];

            if (charMatch) {
              matchMask[currentLocation] = 1;
            }

            // First pass: exact match
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

            // Subsequent passes: fuzzy match
            if (_i !== 0) {
              bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            }

            if (bitArr[j] & mask) {
              finalScore = bitapScore(pattern, {
                errors: _i,
                currentLocation: currentLocation,
                expectedLocation: expectedLocation,
                distance: distance
              });

              // This match will almost certainly be better than any existing match.
              // But check anyway.
              if (finalScore <= currentThreshold) {
                // Indeed it is
                currentThreshold = finalScore;
                bestLocation = currentLocation;

                // Already passed `loc`, downhill from here on in.
                if (bestLocation <= expectedLocation) {
                  break;
                }

                // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                start = Math.max(1, 2 * expectedLocation - bestLocation);
              }
            }
          }

          // No hope for a (better) match at greater error levels.
          var _score2 = bitapScore(pattern, {
            errors: _i + 1,
            currentLocation: expectedLocation,
            expectedLocation: expectedLocation,
            distance: distance
          });

          if (_score2 > currentThreshold) {
            break;
          }

          lastBitArr = bitArr;
        }

        // Count exact matches (those with a score of 0) to be "almost" exact
        return {
          isMatch: bestLocation >= 0,
          score: finalScore === 0 ? 0.001 : finalScore,
          matchedIndices: matchedIndices(matchMask, minMatchCharLength)
        };
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Bitap = __webpack_require__(1);
      var deepValue = __webpack_require__(2);
      var isArray = __webpack_require__(0);

      var Fuse = function () {
        function Fuse(list, _ref) {
          var _ref$location = _ref.location,
              location = _ref$location === undefined ? 0 : _ref$location,
              _ref$distance = _ref.distance,
              distance = _ref$distance === undefined ? 100 : _ref$distance,
              _ref$threshold = _ref.threshold,
              threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
              _ref$maxPatternLength = _ref.maxPatternLength,
              maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
              _ref$caseSensitive = _ref.caseSensitive,
              caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
              _ref$tokenSeparator = _ref.tokenSeparator,
              tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
              _ref$findAllMatches = _ref.findAllMatches,
              findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
              _ref$minMatchCharLeng = _ref.minMatchCharLength,
              minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
              _ref$id = _ref.id,
              id = _ref$id === undefined ? null : _ref$id,
              _ref$keys = _ref.keys,
              keys = _ref$keys === undefined ? [] : _ref$keys,
              _ref$shouldSort = _ref.shouldSort,
              shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
              _ref$getFn = _ref.getFn,
              getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
              _ref$sortFn = _ref.sortFn,
              sortFn = _ref$sortFn === undefined ? function (a, b) {
            return a.score - b.score;
          } : _ref$sortFn,
              _ref$tokenize = _ref.tokenize,
              tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
              _ref$matchAllTokens = _ref.matchAllTokens,
              matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
              _ref$includeMatches = _ref.includeMatches,
              includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
              _ref$includeScore = _ref.includeScore,
              includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
              _ref$verbose = _ref.verbose,
              verbose = _ref$verbose === undefined ? false : _ref$verbose;

          _classCallCheck(this, Fuse);

          this.options = {
            location: location,
            distance: distance,
            threshold: threshold,
            maxPatternLength: maxPatternLength,
            isCaseSensitive: caseSensitive,
            tokenSeparator: tokenSeparator,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            id: id,
            keys: keys,
            includeMatches: includeMatches,
            includeScore: includeScore,
            shouldSort: shouldSort,
            getFn: getFn,
            sortFn: sortFn,
            verbose: verbose,
            tokenize: tokenize,
            matchAllTokens: matchAllTokens
          };

          this.setCollection(list);
        }

        _createClass(Fuse, [{
          key: 'setCollection',
          value: function setCollection(list) {
            this.list = list;
            return list;
          }
        }, {
          key: 'search',
          value: function search(pattern) {
            this._log('---------\nSearch pattern: "' + pattern + '"');

            var _prepareSearchers2 = this._prepareSearchers(pattern),
                tokenSearchers = _prepareSearchers2.tokenSearchers,
                fullSearcher = _prepareSearchers2.fullSearcher;

            var _search2 = this._search(tokenSearchers, fullSearcher),
                weights = _search2.weights,
                results = _search2.results;

            this._computeScore(weights, results);

            if (this.options.shouldSort) {
              this._sort(results);
            }

            return this._format(results);
          }
        }, {
          key: '_prepareSearchers',
          value: function _prepareSearchers() {
            var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var tokenSearchers = [];

            if (this.options.tokenize) {
              // Tokenize on the separator
              var tokens = pattern.split(this.options.tokenSeparator);
              for (var i = 0, len = tokens.length; i < len; i += 1) {
                tokenSearchers.push(new Bitap(tokens[i], this.options));
              }
            }

            var fullSearcher = new Bitap(pattern, this.options);

            return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
          }
        }, {
          key: '_search',
          value: function _search() {
            var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var fullSearcher = arguments[1];

            var list = this.list;
            var resultMap = {};
            var results = [];

            // Check the first item in the list, if it's a string, then we assume
            // that every item in the list is also a string, and thus it's a flattened array.
            if (typeof list[0] === 'string') {
              // Iterate over every item
              for (var i = 0, len = list.length; i < len; i += 1) {
                this._analyze({
                  key: '',
                  value: list[i],
                  record: i,
                  index: i
                }, {
                  resultMap: resultMap,
                  results: results,
                  tokenSearchers: tokenSearchers,
                  fullSearcher: fullSearcher
                });
              }

              return { weights: null, results: results };
            }

            // Otherwise, the first item is an Object (hopefully), and thus the searching
            // is done on the values of the keys of each item.
            var weights = {};
            for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
              var item = list[_i];
              // Iterate over every key
              for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
                var key = this.options.keys[j];
                if (typeof key !== 'string') {
                  weights[key.name] = {
                    weight: 1 - key.weight || 1
                  };
                  if (key.weight <= 0 || key.weight > 1) {
                    throw new Error('Key weight has to be > 0 and <= 1');
                  }
                  key = key.name;
                } else {
                  weights[key] = {
                    weight: 1
                  };
                }

                this._analyze({
                  key: key,
                  value: this.options.getFn(item, key),
                  record: item,
                  index: _i
                }, {
                  resultMap: resultMap,
                  results: results,
                  tokenSearchers: tokenSearchers,
                  fullSearcher: fullSearcher
                });
              }
            }

            return { weights: weights, results: results };
          }
        }, {
          key: '_analyze',
          value: function _analyze(_ref2, _ref3) {
            var key = _ref2.key,
                _ref2$arrayIndex = _ref2.arrayIndex,
                arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
                value = _ref2.value,
                record = _ref2.record,
                index = _ref2.index;
            var _ref3$tokenSearchers = _ref3.tokenSearchers,
                tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
                _ref3$fullSearcher = _ref3.fullSearcher,
                fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
                _ref3$resultMap = _ref3.resultMap,
                resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
                _ref3$results = _ref3.results,
                results = _ref3$results === undefined ? [] : _ref3$results;

            // Check if the texvaluet can be searched
            if (value === undefined || value === null) {
              return;
            }

            var exists = false;
            var averageScore = -1;
            var numTextMatches = 0;

            if (typeof value === 'string') {
              this._log('\nKey: ' + (key === '' ? '-' : key));

              var mainSearchResult = fullSearcher.search(value);
              this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

              if (this.options.tokenize) {
                var words = value.split(this.options.tokenSeparator);
                var scores = [];

                for (var i = 0; i < tokenSearchers.length; i += 1) {
                  var tokenSearcher = tokenSearchers[i];

                  this._log('\nPattern: "' + tokenSearcher.pattern + '"');

                  // let tokenScores = []
                  var hasMatchInText = false;

                  for (var j = 0; j < words.length; j += 1) {
                    var word = words[j];
                    var tokenSearchResult = tokenSearcher.search(word);
                    var obj = {};
                    if (tokenSearchResult.isMatch) {
                      obj[word] = tokenSearchResult.score;
                      exists = true;
                      hasMatchInText = true;
                      scores.push(tokenSearchResult.score);
                    } else {
                      obj[word] = 1;
                      if (!this.options.matchAllTokens) {
                        scores.push(1);
                      }
                    }
                    this._log('Token: "' + word + '", score: ' + obj[word]);
                    // tokenScores.push(obj)
                  }

                  if (hasMatchInText) {
                    numTextMatches += 1;
                  }
                }

                averageScore = scores[0];
                var scoresLen = scores.length;
                for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
                  averageScore += scores[_i2];
                }
                averageScore = averageScore / scoresLen;

                this._log('Token score average:', averageScore);
              }

              var finalScore = mainSearchResult.score;
              if (averageScore > -1) {
                finalScore = (finalScore + averageScore) / 2;
              }

              this._log('Score average:', finalScore);

              var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

              this._log('\nCheck Matches: ' + checkTextMatches);

              // If a match is found, add the item to <rawResults>, including its score
              if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
                // Check if the item already exists in our results
                var existingResult = resultMap[index];
                if (existingResult) {
                  // Use the lowest score
                  // existingResult.score, bitapResult.score
                  existingResult.output.push({
                    key: key,
                    arrayIndex: arrayIndex,
                    value: value,
                    score: finalScore,
                    matchedIndices: mainSearchResult.matchedIndices
                  });
                } else {
                  // Add it to the raw result list
                  resultMap[index] = {
                    item: record,
                    output: [{
                      key: key,
                      arrayIndex: arrayIndex,
                      value: value,
                      score: finalScore,
                      matchedIndices: mainSearchResult.matchedIndices
                    }]
                  };

                  results.push(resultMap[index]);
                }
              }
            } else if (isArray(value)) {
              for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
                this._analyze({
                  key: key,
                  arrayIndex: _i3,
                  value: value[_i3],
                  record: record,
                  index: index
                }, {
                  resultMap: resultMap,
                  results: results,
                  tokenSearchers: tokenSearchers,
                  fullSearcher: fullSearcher
                });
              }
            }
          }
        }, {
          key: '_computeScore',
          value: function _computeScore(weights, results) {
            this._log('\n\nComputing score:\n');

            for (var i = 0, len = results.length; i < len; i += 1) {
              var output = results[i].output;
              var scoreLen = output.length;

              var totalScore = 0;
              var bestScore = 1;

              for (var j = 0; j < scoreLen; j += 1) {
                var weight = weights ? weights[output[j].key].weight : 1;
                var score = weight === 1 ? output[j].score : output[j].score || 0.001;
                var nScore = score * weight;

                if (weight !== 1) {
                  bestScore = Math.min(bestScore, nScore);
                } else {
                  output[j].nScore = nScore;
                  totalScore += nScore;
                }
              }

              results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

              this._log(results[i]);
            }
          }
        }, {
          key: '_sort',
          value: function _sort(results) {
            this._log('\n\nSorting....');
            results.sort(this.options.sortFn);
          }
        }, {
          key: '_format',
          value: function _format(results) {
            var finalOutput = [];

            this._log('\n\nOutput:\n\n', JSON.stringify(results));

            var transformers = [];

            if (this.options.includeMatches) {
              transformers.push(function (result, data) {
                var output = result.output;
                data.matches = [];

                for (var i = 0, len = output.length; i < len; i += 1) {
                  var item = output[i];

                  if (item.matchedIndices.length === 0) {
                    continue;
                  }

                  var obj = {
                    indices: item.matchedIndices,
                    value: item.value
                  };
                  if (item.key) {
                    obj.key = item.key;
                  }
                  if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
                    obj.arrayIndex = item.arrayIndex;
                  }
                  data.matches.push(obj);
                }
              });
            }

            if (this.options.includeScore) {
              transformers.push(function (result, data) {
                data.score = result.score;
              });
            }

            for (var i = 0, len = results.length; i < len; i += 1) {
              var result = results[i];

              if (this.options.id) {
                result.item = this.options.getFn(result.item, this.options.id)[0];
              }

              if (!transformers.length) {
                finalOutput.push(result.item);
                continue;
              }

              var data = {
                item: result.item
              };

              for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
                transformers[j](result, data);
              }

              finalOutput.push(data);
            }

            return finalOutput;
          }
        }, {
          key: '_log',
          value: function _log() {
            if (this.options.verbose) {
              var _console;

              (_console = console).log.apply(_console, arguments);
            }
          }
        }]);

        return Fuse;
      }();

      module.exports = Fuse;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=fuse.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueFuse = __webpack_require__(38);

var _vueFuse2 = _interopRequireDefault(_vueFuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueFuse2.default);

new Vue({
  el: '#app',
  data: {
    cart: 0,
    id: "",
    values: "",
    availability: false,
    copyType: "",
    notAvailable: false,
    number: "",
    error: "",
    rowId: 0,
    featuredBooks: [],
    authId: "",
    location: "",
    url: "",
    rating: 0,
    review: "",
    name_review: "",
    review_email: "",
    reviewContent: [],
    ratingCommented: [],
    day: moment(),
    date: "",
    bookName: "",
    percentage: "",
    decoded: "",
    valuesXZ: [],
    eventChecker: false,
    event: "Attend Event",
    userEvents: [],
    joinedEvents: [],
    event1: false,
    event2: "Attend Event",
    eventInfo: [],
    theUnjoin: "",
    active1: "titles active",
    active2: "titles",
    dateInfo: moment(new Date()).format("YY-MM-DD")
  },
  mounted: function mounted() {
    var _this = this;

    console.log(_vueFuse2.default);
    axios.post("/mylibrary/recentbooks", {
      id: +this.rowId
    }).then(function (response) {
      return _this.featuredBooks = response.data;
    });
    if (window.location.href.indexOf("login") > -1 || window.location.href.indexOf("profile") > -1) {
      this.location = "home";
      this.url = "/mylibrary";
    } else {
      this.location = "my account";
      this.url = "/mylibrary/profile";
    }
    var x = window.location.href.split("&");
    this.bookName = x[1];
    this.decoded = decodeURIComponent(this.bookName);

    //get info drama and romance percentage 

    axios.post("/mylibrary/getpercentage", {
      author: this.bookName
    }).then(function (response) {

      $("#extendedColor").animate({ "width": response.data[0][0].Drama + "%" }, "slow");
      $("#extendedColor1").animate({ "width": response.data[0][0].Romance + "%" }, "slow");
      $("#extendedColor2").animate({ "width": response.data[0][0].Comedy + "%" }, "slow");
      $("#dramaNumber").animateNumber({ "number": response.data[0][0].Drama });
      $("#romanceNumber").animateNumber({ "number": response.data[0][0].Romance });
      $("#comedyNumber").animateNumber({ "number": response.data[0][0].Comedy });
    });

    axios.get("/mylibrary/storedlikes").then(function (response) {
      _this.storedLikes = response.data;
      for (var _x = 0; _x < _this.storedLikes[0].length; _x++) {
        _this.valuesXZ.push(_this.storedLikes[0][_x].bookId);
      }
    });

    //events button sequence

    $(".exist").next().css("display", "none");
    $("#exists").next().css("display", "none");

    if ($("#exists").length > 0) {
      this.event1 = true;
    }
    // get the events the user will attend

    axios.get("/mylibrary/profile/usersevents").then(function (response) {
      _this.userEvents = response.data;
      response.data[0].map(function (event) {
        _this.joinedEvents.push(+event.id);
      });
    });

    // get the information of our events 

    axios.get("/mylibrary/passEventInfoJs").then(function (response) {
      return _this.eventInfo = response.data;
    });
  },

  computed: {
    showActivities: function showActivities() {
      if (this.active1 == "titles active") {
        return true;
      } else {
        return false;
      }
    },
    showEvents: function showEvents() {
      if (this.active2 == "titles active") {
        return true;
      } else {
        return false;
      }
    },
    reviewCheck: function reviewCheck() {
      if (this.review == "" || this.name_review == "" || this.review_email == "") {
        return true;
      } else {
        return false;
      }
    },
    stars: function stars() {
      for (var x = 0; x < this.reviewContent[0].rating; x++) {
        this.ratingCommented.push(x);
      }
      return this.ratingCommented;
    }
  },
  methods: {
    addCart: function addCart(id) {
      var _this2 = this;

      this.cart += 1;
      this.id = id;
      axios.post("/mylibrary/valueFeautured", {
        id: id
      }).then(function (response) {
        return _this2.values = response.data;
      });
    },
    checkQuantity: function checkQuantity() {
      var _this3 = this;

      axios.post("/mylibrary/availability", {
        id: this.id,
        copyType: this.copyType
      }).then(function (response) {
        if (response.data == 1) {
          _this3.availability = true;
          _this3.notAvailable = false;
        } else {
          _this3.availability = false;
          _this3.notAvailable = true;
        }
      });
    },
    toCart: function toCart(id) {
      var _this4 = this;

      this.cart += 1;
      axios.post("/mylibrary/insertrequest", {
        id: this.id,
        quantity: this.number,
        user: +id,
        request: this.copyType
      }).then(function (response) {
        if (response.status !== 200) {
          _this4.error = "something went wrong";
        }
      });
    },
    showMessage: function showMessage() {
      alert("you must be registered to add to cart");
    },
    showMessage2: function showMessage2() {
      alert("you must be registered to like");
    },
    slider: function slider() {
      $(".out").slideToggle();
    },
    flag: function flag() {
      $(".flag").slideToggle();
    },
    cancelTransaction: function cancelTransaction() {
      this.cart -= 1;
      axios.post("/mylibrary/newreq", {
        id: +this.id
      }).then(function (response) {
        console.log(response.data);
      });
    },
    nextBooks: function nextBooks() {
      this.rowId += 74;
      $(".image99").animate({ "right": this.rowId + "rem" });
    },
    previousBooks: function previousBooks() {
      if (this.rowId >= 74) {
        this.rowId -= 74;
        $(".image99").animate({ "right": this.rowId + "rem" });
      }
    },
    classX: function classX() {
      if ($(".star").hasClass("fa-star-o")) {
        $(".star").removeClass("fa-star-o");
        $(".star").addClass("fa-star");
        if (this.reviewContent.length == 0) {
          this.rating += 1;
        }
      } else {
        $(".star").removeClass("fa-star");
        $(".star").addClass("fa-star-o");
        if (this.reviewContent.length == 0) {
          this.rating -= 1;
        }
      }
    },
    classXX: function classXX() {
      if ($(".star1").hasClass("fa-star-o")) {
        $(".star1").removeClass("fa-star-o");
        $(".star1").addClass("fa-star");
        if (this.reviewContent.length == 0) {
          this.rating += 1;
        }
      } else {
        $(".star1").removeClass("fa-star");
        $(".star1").addClass("fa-star-o");
        if (this.reviewContent.length == 0) {
          this.rating -= 1;
        }
      }
    },
    classXXX: function classXXX() {
      if ($(".star2").hasClass("fa-star-o")) {
        $(".star2").removeClass("fa-star-o");
        $(".star2").addClass("fa-star");
        if (this.reviewContent.length == 0) {
          this.rating += 1;
        }
      } else {
        $(".star2").removeClass("fa-star");
        $(".star2").addClass("fa-star-o");
        if (this.reviewContent.length == 0) {
          this.rating -= 1;
        }
      }
    },
    classXXXX: function classXXXX() {
      if ($(".star3").hasClass("fa-star-o")) {
        $(".star3").removeClass("fa-star-o");
        $(".star3").addClass("fa-star");
        if (this.reviewContent.length == 0) {
          this.rating += 1;
        }
      } else {
        $(".star3").removeClass("fa-star");
        $(".star3").addClass("fa-star-o");
        if (this.reviewContent.length == 0) {
          this.rating -= 1;
        }
      }
    },
    classXXXXX: function classXXXXX() {
      if ($(".star4").hasClass("fa-star-o")) {
        $(".star4").removeClass("fa-star-o");
        $(".star4").addClass("fa-star");
        if (this.reviewContent.length == 0) {
          this.rating += 1;
        }
      } else {
        $(".star4").removeClass("fa-star");
        $(".star4").addClass("fa-star-o");
        if (this.reviewContent.length == 0) {
          this.rating -= 1;
        }
      }
    },
    submitReview: function submitReview() {
      this.date = moment(new Date()).format("YY-MM-DD");
      this.reviewContent.push({
        review: this.review,
        email: this.review_email,
        name: this.name_review,
        rating: this.rating,
        date: moment(new Date()).format("YY-MM-DD")
      });
      axios.post("/mylibrary/submitreviews", {
        review: this.review,
        email: this.review_email,
        user: this.name_review,
        rating: this.rating,
        userId: this.authId,
        date: this.date,
        bookName: this.bookName
      });
      this.review = "";
      this.review_email = "";
      this.name_review = "";
      this.rating = "";
    },
    addLike: function addLike(userId, bookId, index) {
      if ($(".like .fa").eq(index).css('color') == 'rgb(255, 0, 0)') {

        $(".like .fa").eq(index).css("color", "white");

        axios.post("/mylibrary/likes", {

          userId: +userId,
          bookId: +bookId,
          like: 0
        }).then(function (response) {
          return console.log("done");
        });
      } else {

        $(".like .fa").eq(index).css("color", "red");
        axios.post("/mylibrary/likes", {
          userId: +userId,
          bookId: +bookId,
          like: 1
        }).then(function (response) {
          return console.log(response.data);
        });
      }
    },
    relod: function relod() {
      setTimeout(function () {
        window.location.reload();
      }, 10);
    },
    eventAttendance1: function eventAttendance1(eventId, userId) {
      this.eventChecker = true;
      this.event = "joined";
      this.event1 = true;
      alert("thanks for deciding to join our event");
      axios.post("/mylibrary/profile/joinedevents", {
        eventId: eventId,
        userId: userId
      });
    },
    eventAttendance: function eventAttendance(e, index, eventId, userId) {
      alert("thanks for deciding to join our event");
      axios.post("/mylibrary/profile/joinedevents", {
        eventId: eventId,
        userId: userId
      });
      $(e.target).prop("disabled", true);
      $(e.target).html("joined");
      $(e.target).siblings(".theUnjoin").css("display", "block");
    },
    unjoin: function unjoin(e, id, counter) {
      axios.post("/mylibrary/changeattendance", {
        eventId: +id
      });
      $(e.target).siblings(".uniqueAdd").prop("disabled", false);
      $(e.target).siblings(".uniqueAdd").html("Attend Event");
      $(e.target).css("display", "none");
    },
    unjoin1: function unjoin1(id) {
      axios.post("/mylibrary/changeattendance", {
        eventId: +id
      });
      this.eventChecker = false;
      this.event = "Attend Event";
      this.event1 = false;
      $("#exists").html("Attend Event");
      $("#exists").prop("disabled", false);
    },
    unjoin3: function unjoin3(e, id, counter) {
      axios.post("/mylibrary/changeattendance", {
        eventId: +id
      });
      $(e.target).siblings(".uniqueAdd").prop("disabled", false);
      $(e.target).siblings(".uniqueAdd").html("Attend Event");
      $(e.target).css("display", "none");
      $(e.target).css("display", "none");
    },
    imTheActiveClass: function imTheActiveClass() {
      this.active1 = "titles active";
      this.active2 = "titles";
    },
    beActive: function beActive() {
      this.active2 = "titles active";
      this.active1 = "titles";
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(39);

var _promise2 = _interopRequireDefault(_promise);

var _VueFuse = __webpack_require__(74);

var _VueFuse2 = _interopRequireDefault(_VueFuse);

var _fuse = __webpack_require__(35);

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_VueFuse2.default.install = function (Vue) {
  Vue.component('vue-fuse', _VueFuse2.default);

  Vue.prototype.$search = function (term, list, options) {
    return new _promise2.default(function (resolve, reject) {
      var run = new _fuse2.default(list, options);
      var results = run.search(term);
      resolve(results);
    });
  };
};

exports.default = _VueFuse2.default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(57);
__webpack_require__(61);
__webpack_require__(72);
__webpack_require__(73);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(43)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(21)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(14);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(6) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(48);
var descriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(19);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(29).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(11);
var anObject = __webpack_require__(2);
var getKeys = __webpack_require__(50);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(12);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(56);
var IE_PROTO = __webpack_require__(18)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(58);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(7);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(59);
var step = __webpack_require__(60);
var Iterators = __webpack_require__(7);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(21)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(0);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(30);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(5);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(62);
var forOf = __webpack_require__(63);
var speciesConstructor = __webpack_require__(31);
var task = __webpack_require__(32).set;
var microtask = __webpack_require__(68)();
var newPromiseCapabilityModule = __webpack_require__(20);
var perform = __webpack_require__(33);
var promiseResolve = __webpack_require__(34);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  }return true;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = __webpack_require__(69)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(19)($Promise, PROMISE);
__webpack_require__(70)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(9);
var call = __webpack_require__(64);
var isArrayIter = __webpack_require__(65);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(25);
var getIterFn = __webpack_require__(66);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// check on default Array iterator
var Iterators = __webpack_require__(7);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(30);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(7);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var macrotask = __webpack_require__(32).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(4);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
  }return target;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(0);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(8);
var core = __webpack_require__(3);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(31);
var promiseResolve = __webpack_require__(34);

$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try

var $export = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(20);
var perform = __webpack_require__(33);

$export($export.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bustCache_VueFuse_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0da684e2_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_bustCache_VueFuse_vue__ = __webpack_require__(78);
var disposed = false
var normalizeComponent = __webpack_require__(75)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_bustCache_VueFuse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_0da684e2_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_bustCache_VueFuse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-fuse\\src\\VueFuse.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0da684e2", Component.options)
  } else {
    hotAPI.reload("data-v-0da684e2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuse_js__);



window.Fuse = __WEBPACK_IMPORTED_MODULE_0_fuse_js___default.a;

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      fuse: null,
      search: '',
      result: []
    };
  },

  props: {
    eventName: {
      type: String,
      default: 'fuseResultsUpdated'
    },
    defaultAll: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array
    },
    caseSensitive: {
      type: Boolean,
      default: false
    },
    includeScore: {
      type: Boolean,
      default: false
    },
    includeMatches: {
      type: Boolean,
      default: false
    },
    tokenize: {
      type: Boolean,
      default: false
    },
    matchAllTokens: {
      type: Boolean,
      default: false
    },
    findAllMatches: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    shouldSort: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.6
    },
    location: {
      type: Number,
      default: 0
    },
    distance: {
      type: Number,
      default: 100
    },
    maxPatternLength: {
      type: Number,
      default: 32
    },
    minMatchCharLength: {
      type: Number,
      default: 1
    },
    keys: {
      type: Array
    }
  },
  computed: {
    options: function options() {
      var options = {
        caseSensitive: this.caseSensitive,
        includeScore: this.includeScore,
        includeMatches: this.includeMatches,
        tokenize: this.tokenize,
        matchAllTokens: this.matchAllTokens,
        findAllMatches: this.findAllMatches,
        shouldSort: this.shouldSort,
        threshold: this.threshold,
        location: this.location,
        distance: this.distance,
        maxPatternLength: this.maxPatternLength,
        minMatchCharLength: this.minMatchCharLength,
        keys: this.keys
      };
      if (this.id !== '') {
        options.id = this.id;
      }
      return options;
    }
  },
  watch: {
    search: function search() {
      if (this.search.trim() === '') {
        if (this.defaultAll) {
          this.result = this.list;
        } else {
          this.result = [];
        }
      } else this.result = this.fuse.search(this.search.trim());
    },
    result: function result() {
      this.$parent.$emit(this.eventName, this.result);
    }
  },
  methods: {
    initFuse: function initFuse() {
      this.fuse = new window.Fuse(this.list, this.options);
      if (this.defaultAll) {
        this.result = this.list;
      }
    }
  },
  ready: function ready() {
    this.initFuse();
  },
  mounted: function mounted() {
    this.initFuse();
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.search,
        expression: "search"
      }
    ],
    attrs: { type: "search" },
    domProps: { value: _vm.search },
    on: {
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.search = $event.target.value
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0da684e2", esExports)
  }
}

/***/ })
/******/ ]);