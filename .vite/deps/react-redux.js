import { _objectWithoutPropertiesLoose } from "./chunk-HTHQKSPX.js";
import { require_react_dom } from "./chunk-QJV3R4PZ.js";
import { require_react } from "./chunk-JFTBQ7A7.js";
import { __commonJS, __toESM } from "./chunk-AC2VUBZ6.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function () {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for("react.element")
          : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for("react.fragment")
          : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.strict_mode")
          : 60108;
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for("react.profiler")
          : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for("react.provider")
          : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for("react.context")
          : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for("react.async_mode")
          : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.concurrent_mode")
          : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for("react.forward_ref")
          : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for("react.suspense")
          : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for("react.suspense_list")
          : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for("react.fundamental")
          : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for("react.responder")
          : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return (
            typeof type === "string" ||
            typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === "object" &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          );
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"](
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              );
            }
          }
          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          );
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  },
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  },
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        });
        if (
          Object.keys(Object.assign({}, test3)).join("") !==
          "abcdefghijklmnopqrst"
        ) {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;
          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }
          return to;
        };
  },
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  },
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  },
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function () {};
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function (text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(
      typeSpecs,
      values,
      location,
      componentName,
      getStack
    ) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") +
                    ": " +
                    location +
                    " type `" +
                    typeSpecName +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof typeSpecs[typeSpecName] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](
                values,
                typeSpecName,
                componentName,
                location,
                null,
                ReactPropTypesSecret
              );
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") +
                  ": type specification of " +
                  location +
                  " `" +
                  typeSpecName +
                  "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                  typeof error +
                  ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (
              error instanceof Error &&
              !(error.message in loggedTypeFailures)
            ) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " +
                  location +
                  " type: " +
                  error.message +
                  (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function () {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  },
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function () {};
    if (true) {
      printWarning = function (text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn =
          maybeIterable &&
          ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is2(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(
          isRequired,
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (
                !manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    propFullName +
                    "` prop on `" +
                    componentName +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError(
                  "The " +
                    location +
                    " `" +
                    propFullName +
                    "` is marked as required " +
                    ("in `" + componentName + "`, but its value is `null`.")
                );
              }
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required in " +
                  ("`" + componentName + "`, but its value is `undefined`.")
              );
            }
            return null;
          } else {
            return validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            );
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  preciseType +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside arrayOf."
            );
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an array.")
            );
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(
              propValue,
              i,
              componentName,
              location,
              propFullName + "[" + i + "]",
              ReactPropTypesSecret
            );
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected a single ReactElement type.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  actualClassName +
                  "` supplied to `" +
                  componentName +
                  "`, expected ") +
                ("instance of `" + expectedClassName + "`.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " +
                  arguments.length +
                  " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning(
                "Invalid argument supplied to oneOf, expected an array."
              );
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is2(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(
            expectedValues,
            function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            }
          );
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of value `" +
              String(propValue) +
              "` " +
              ("supplied to `" +
                componentName +
                "`, expected one of " +
                valuesString +
                ".")
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError(
              "Property `" +
                propFullName +
                "` of component `" +
                componentName +
                "` has invalid PropType notation inside objectOf."
            );
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type " +
                ("`" +
                  propType +
                  "` supplied to `" +
                  componentName +
                  "`, expected an object.")
            );
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(
                propValue,
                key,
                componentName,
                location,
                propFullName + "." + key,
                ReactPropTypesSecret
              );
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true
            ? printWarning(
                "Invalid argument supplied to oneOfType, expected an instance of array."
              )
            : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                getPostfixForTypeWarning(checker) +
                " at index " +
                i +
                "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret
            );
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage =
            expectedTypes.length > 0
              ? ", expected one of type [" + expectedTypes.join(", ") + "]"
              : "";
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`" + expectedTypesMessage + ".")
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!isNode(props[propName])) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` supplied to " +
                ("`" + componentName + "`, expected a ReactNode.")
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(
        componentName,
        location,
        propFullName,
        key,
        type
      ) {
        return new PropTypeError(
          (componentName || "React class") +
            ": " +
            location +
            " type `" +
            propFullName +
            "." +
            key +
            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
            type +
            "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`.")
            );
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker)
              );
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` of type `" +
                propType +
                "` " +
                ("supplied to `" + componentName + "`, expected `object`.")
            );
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(
                componentName,
                location,
                propFullName,
                key,
                getPreciseType(checker)
              );
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " +
                  location +
                  " `" +
                  propFullName +
                  "` key `" +
                  key +
                  "` supplied to `" +
                  componentName +
                  "`.\nBad object: " +
                  JSON.stringify(props[propName], null, "  ") +
                  "\nValid keys: " +
                  JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  },
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess
      );
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  },
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
    exports,
    module
  ) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true,
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true,
    };
    var FORWARD_REF_STATICS = {
      $$typeof: true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
    };
    var MEMO_STATICS = {
      $$typeof: true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true,
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(
              targetComponent,
              inheritedComponent,
              blacklist
            );
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (
            !KNOWN_STATICS[key] &&
            !(blacklist && blacklist[key]) &&
            !(sourceStatics && sourceStatics[key]) &&
            !(targetStatics && targetStatics[key])
          ) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  },
});

// node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js"(
    exports
  ) {
    "use strict";
    if (true) {
      (function () {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType2(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_DEBUG_TRACING_MODE_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            type === REACT_LEGACY_HIDDEN_TYPE ||
            enableScopeAPI
          ) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE ||
              type[0] === REACT_SERVER_BLOCK_TYPE
            ) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"](
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+."
              );
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"](
                "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+."
              );
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  },
});

// node_modules/react-redux/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/react-redux/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  },
});

// node_modules/react-redux/es/components/Provider.js
var import_react3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/react-redux/es/components/Context.js
var import_react = __toESM(require_react());
var ReactReduxContext = import_react.default.createContext(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// node_modules/react-redux/es/utils/batch.js
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return (batch = newBatch);
};
var getBatch = function getBatch2() {
  return batch;
};

// node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function () {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = (last = {
        callback,
        next: null,
        prev: last,
      });
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    },
  };
}
var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  },
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub
        ? parentSub.addNestedSub(handleChangeWrapper)
        : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    },
  };
  return subscription;
}

// node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
var import_react2 = __toESM(require_react());
var useIsomorphicLayoutEffect =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
    ? import_react2.useLayoutEffect
    : import_react2.useEffect;

// node_modules/react-redux/es/components/Provider.js
function Provider(_ref) {
  var store = _ref.store,
    context = _ref.context,
    children = _ref.children;
  var contextValue = (0, import_react3.useMemo)(
    function () {
      var subscription = createSubscription(store);
      return {
        store,
        subscription,
      };
    },
    [store]
  );
  var previousState = (0, import_react3.useMemo)(
    function () {
      return store.getState();
    },
    [store]
  );
  useIsomorphicLayoutEffect(
    function () {
      var subscription = contextValue.subscription;
      subscription.onStateChange = subscription.notifyNestedSubs;
      subscription.trySubscribe();
      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }
      return function () {
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
      };
    },
    [contextValue, previousState]
  );
  var Context = context || ReactReduxContext;
  return import_react3.default.createElement(
    Context.Provider,
    {
      value: contextValue,
    },
    children
  );
}
if (true) {
  Provider.propTypes = {
    store: import_prop_types.default.shape({
      subscribe: import_prop_types.default.func.isRequired,
      dispatch: import_prop_types.default.func.isRequired,
      getState: import_prop_types.default.func.isRequired,
    }),
    context: import_prop_types.default.object,
    children: import_prop_types.default.any,
  };
}
var Provider_default = Provider;

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}

// node_modules/react-redux/es/components/connectAdvanced.js
var import_hoist_non_react_statics = __toESM(
  require_hoist_non_react_statics_cjs()
);
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is2());
var _excluded = [
  "getDisplayName",
  "methodName",
  "renderCountProp",
  "shouldHandleStateChanges",
  "storeKey",
  "withRef",
  "forwardRef",
  "context",
];
var _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = function stringifyComponent2(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(
  effectFunc,
  effectArgs,
  dependencies
) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(
  lastWrapperProps,
  lastChildProps,
  renderIsScheduled,
  wrapperProps,
  actualChildProps,
  childPropsFromStoreUpdate,
  notifyNestedSubs
) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(
  shouldHandleStateChanges,
  store,
  subscription,
  childPropsSelector,
  lastWrapperProps,
  lastChildProps,
  renderIsScheduled,
  childPropsFromStoreUpdate,
  notifyNestedSubs,
  forceComponentUpdateDispatch
) {
  if (!shouldHandleStateChanges) return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error,
        },
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref,
    _ref2$getDisplayName = _ref2.getDisplayName,
    getDisplayName =
      _ref2$getDisplayName === void 0
        ? function (name) {
            return "ConnectAdvanced(" + name + ")";
          }
        : _ref2$getDisplayName,
    _ref2$methodName = _ref2.methodName,
    methodName =
      _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName,
    _ref2$renderCountProp = _ref2.renderCountProp,
    renderCountProp =
      _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp,
    _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
    shouldHandleStateChanges =
      _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
    _ref2$storeKey = _ref2.storeKey,
    storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey,
    _ref2$withRef = _ref2.withRef,
    withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
    _ref2$forwardRef = _ref2.forwardRef,
    forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
    _ref2$context = _ref2.context,
    context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
    connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded);
  if (true) {
    if (renderCountProp !== void 0) {
      throw new Error(
        "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"
      );
    }
    if (withRef) {
      throw new Error(
        "withRef is removed. To access the wrapped instance, use a ref on the connected component"
      );
    }
    var customStoreWarningMessage =
      "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (storeKey !== "store") {
      throw new Error(
        "storeKey has been removed and does not do anything. " +
          customStoreWarningMessage
      );
    }
  }
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (!(0, import_react_is.isValidElementType)(WrappedComponent)) {
      throw new Error(
        "You must pass a component to the function returned by " +
          (methodName +
            ". Instead received " +
            stringifyComponent(WrappedComponent))
      );
    }
    var wrappedComponentName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent,
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure
      ? import_react4.useMemo
      : function (callback) {
          return callback();
        };
    function ConnectFunction(props) {
      var _useMemo = (0, import_react4.useMemo)(
          function () {
            var reactReduxForwardedRef2 = props.reactReduxForwardedRef,
              wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded2);
            return [props.context, reactReduxForwardedRef2, wrapperProps2];
          },
          [props]
        ),
        propsContext = _useMemo[0],
        reactReduxForwardedRef = _useMemo[1],
        wrapperProps = _useMemo[2];
      var ContextToUse = (0, import_react4.useMemo)(
        function () {
          return propsContext &&
            propsContext.Consumer &&
            (0, import_react_is.isContextConsumer)(
              import_react4.default.createElement(propsContext.Consumer, null)
            )
            ? propsContext
            : Context;
        },
        [propsContext, Context]
      );
      var contextValue = (0, import_react4.useContext)(ContextToUse);
      var didStoreComeFromProps =
        Boolean(props.store) &&
        Boolean(props.store.getState) &&
        Boolean(props.store.dispatch);
      var didStoreComeFromContext =
        Boolean(contextValue) && Boolean(contextValue.store);
      if (!didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(
          'Could not find "store" in the context of ' +
            ('"' +
              displayName +
              '". Either wrap the root component in a <Provider>, ') +
            "or pass a custom React context provider to <Provider> and the corresponding " +
            ("React context consumer to " +
              displayName +
              " in connect options.")
        );
      }
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0, import_react4.useMemo)(
        function () {
          return createChildSelector(store);
        },
        [store]
      );
      var _useMemo2 = (0, import_react4.useMemo)(
          function () {
            if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
            var subscription2 = createSubscription(
              store,
              didStoreComeFromProps ? null : contextValue.subscription
            );
            var notifyNestedSubs2 =
              subscription2.notifyNestedSubs.bind(subscription2);
            return [subscription2, notifyNestedSubs2];
          },
          [store, didStoreComeFromProps, contextValue]
        ),
        subscription = _useMemo2[0],
        notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = (0, import_react4.useMemo)(
        function () {
          if (didStoreComeFromProps) {
            return contextValue;
          }
          return _extends({}, contextValue, {
            subscription,
          });
        },
        [didStoreComeFromProps, contextValue, subscription]
      );
      var _useReducer = (0, import_react4.useReducer)(
          storeStateUpdatesReducer,
          EMPTY_ARRAY,
          initStateUpdates
        ),
        _useReducer$ = _useReducer[0],
        previousStateUpdateResult = _useReducer$[0],
        forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = (0, import_react4.useRef)();
      var lastWrapperProps = (0, import_react4.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0, import_react4.useRef)();
      var renderIsScheduled = (0, import_react4.useRef)(false);
      var actualChildProps = usePureOnlyMemo(
        function () {
          if (
            childPropsFromStoreUpdate.current &&
            wrapperProps === lastWrapperProps.current
          ) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        },
        [store, previousStateUpdateResult, wrapperProps]
      );
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        actualChildProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs,
      ]);
      useIsomorphicLayoutEffectWithArgs(
        subscribeUpdates,
        [
          shouldHandleStateChanges,
          store,
          subscription,
          childPropsSelector,
          lastWrapperProps,
          lastChildProps,
          renderIsScheduled,
          childPropsFromStoreUpdate,
          notifyNestedSubs,
          forceComponentUpdateDispatch,
        ],
        [store, subscription, childPropsSelector]
      );
      var renderedWrappedComponent = (0, import_react4.useMemo)(
        function () {
          return import_react4.default.createElement(
            WrappedComponent,
            _extends({}, actualChildProps, {
              ref: reactReduxForwardedRef,
            })
          );
        },
        [reactReduxForwardedRef, WrappedComponent, actualChildProps]
      );
      var renderedChild = (0, import_react4.useMemo)(
        function () {
          if (shouldHandleStateChanges) {
            return import_react4.default.createElement(
              ContextToUse.Provider,
              {
                value: overriddenContextValue,
              },
              renderedWrappedComponent
            );
          }
          return renderedWrappedComponent;
        },
        [ContextToUse, renderedWrappedComponent, overriddenContextValue]
      );
      return renderedChild;
    }
    var Connect = pure
      ? import_react4.default.memo(ConnectFunction)
      : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      var forwarded = import_react4.default.forwardRef(
        function forwardConnectRef(props, ref) {
          return import_react4.default.createElement(
            Connect,
            _extends({}, props, {
              reactReduxForwardedRef: ref,
            })
          );
        }
      );
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return (0, import_hoist_non_react_statics.default)(
        forwarded,
        WrappedComponent
      );
    }
    return (0, import_hoist_non_react_statics.default)(
      Connect,
      WrappedComponent
    );
  };
}

// node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (var i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }
  return true;
}

// node_modules/react-redux/es/utils/bindActionCreators.js
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function () {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}

// node_modules/react-redux/es/utils/isPlainObject.js
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// node_modules/react-redux/es/utils/warning.js
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {}
}

// node_modules/react-redux/es/utils/verifyPlainObject.js
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(
      methodName +
        "() in " +
        displayName +
        " must return a plain object. Instead received " +
        value +
        "."
    );
  }
}

// node_modules/react-redux/es/connect/wrapMapToProps.js
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null &&
    mapToProps.dependsOnOwnProps !== void 0
    ? Boolean(mapToProps.dependsOnOwnProps)
    : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps
        ? proxy.mapToProps(stateOrDispatch, ownProps)
        : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(
      stateOrDispatch,
      ownProps
    ) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true) verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// node_modules/react-redux/es/connect/mapDispatchToProps.js
function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === "function"
    ? wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
    : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps
    ? wrapMapToPropsConstant(function (dispatch) {
        return {
          dispatch,
        };
      })
    : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object"
    ? wrapMapToPropsConstant(function (dispatch) {
        return bindActionCreators(mapDispatchToProps, dispatch);
      })
    : void 0;
}
var mapDispatchToProps_default = [
  whenMapDispatchToPropsIsFunction,
  whenMapDispatchToPropsIsMissing,
  whenMapDispatchToPropsIsObject,
];

// node_modules/react-redux/es/connect/mapStateToProps.js
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function"
    ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
    : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps
    ? wrapMapToPropsConstant(function () {
        return {};
      })
    : void 0;
}
var mapStateToProps_default = [
  whenMapStateToPropsIsFunction,
  whenMapStateToPropsIsMissing,
];

// node_modules/react-redux/es/connect/mergeProps.js
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
      pure = _ref.pure,
      areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function"
    ? wrapMergePropsFunc(mergeProps)
    : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps
    ? function () {
        return defaultMergeProps;
      }
    : void 0;
}
var mergeProps_default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

// node_modules/react-redux/es/connect/verifySubselectors.js
function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error(
      "Unexpected value for " + methodName + " in " + displayName + "."
    );
  } else if (
    methodName === "mapStateToProps" ||
    methodName === "mapDispatchToProps"
  ) {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning(
        "The selector for " +
          methodName +
          " of " +
          displayName +
          " did not specify a value for dependsOnOwnProps."
      );
    }
  }
}
function verifySubselectors(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  displayName
) {
  verify(mapStateToProps, "mapStateToProps", displayName);
  verify(mapDispatchToProps, "mapDispatchToProps", displayName);
  verify(mergeProps, "mergeProps", displayName);
}

// node_modules/react-redux/es/connect/selectorFactory.js
var _excluded3 = [
  "initMapStateToProps",
  "initMapDispatchToProps",
  "initMergeProps",
];
function impureFinalPropsSelectorFactory(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  dispatch
) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(
      mapStateToProps(state, ownProps),
      mapDispatchToProps(dispatch, ownProps),
      ownProps
    );
  };
}
function pureFinalPropsSelectorFactory(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  dispatch,
  _ref
) {
  var areStatesEqual = _ref.areStatesEqual,
    areOwnPropsEqual = _ref.areOwnPropsEqual,
    areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce
      ? handleSubsequentCalls(nextState, nextOwnProps)
      : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
    initMapDispatchToProps = _ref2.initMapDispatchToProps,
    initMergeProps = _ref2.initMergeProps,
    options = _objectWithoutPropertiesLoose(_ref2, _excluded3);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  if (true) {
    verifySubselectors(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps,
      options.displayName
    );
  }
  var selectorFactory = options.pure
    ? pureFinalPropsSelectorFactory
    : impureFinalPropsSelectorFactory;
  return selectorFactory(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    dispatch,
    options
  );
}

// node_modules/react-redux/es/connect/connect.js
var _excluded4 = [
  "pure",
  "areStatesEqual",
  "areOwnPropsEqual",
  "areStatePropsEqual",
  "areMergedPropsEqual",
];
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }
  return function (dispatch, options) {
    throw new Error(
      "Invalid value of type " +
        typeof arg +
        " for " +
        name +
        " argument when connecting component " +
        options.wrappedComponentName +
        "."
    );
  };
}
function strictEqual(a, b) {
  return a === b;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$connectHOC = _ref.connectHOC,
    connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
    _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
    mapStateToPropsFactories =
      _ref$mapStateToPropsF === void 0
        ? mapStateToProps_default
        : _ref$mapStateToPropsF,
    _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
    mapDispatchToPropsFactories =
      _ref$mapDispatchToPro === void 0
        ? mapDispatchToProps_default
        : _ref$mapDispatchToPro,
    _ref$mergePropsFactor = _ref.mergePropsFactories,
    mergePropsFactories =
      _ref$mergePropsFactor === void 0
        ? mergeProps_default
        : _ref$mergePropsFactor,
    _ref$selectorFactory = _ref.selectorFactory,
    selectorFactory =
      _ref$selectorFactory === void 0
        ? finalPropsSelectorFactory
        : _ref$selectorFactory;
  return function connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    _ref2
  ) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2,
      _ref3$pure = _ref3.pure,
      pure = _ref3$pure === void 0 ? true : _ref3$pure,
      _ref3$areStatesEqual = _ref3.areStatesEqual,
      areStatesEqual =
        _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
      _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
      areOwnPropsEqual =
        _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
      _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
      areStatePropsEqual =
        _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
      _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
      areMergedPropsEqual =
        _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
      extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded4);
    var initMapStateToProps = match(
      mapStateToProps,
      mapStateToPropsFactories,
      "mapStateToProps"
    );
    var initMapDispatchToProps = match(
      mapDispatchToProps,
      mapDispatchToPropsFactories,
      "mapDispatchToProps"
    );
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(
      selectorFactory,
      _extends(
        {
          // used in error messages
          methodName: "connect",
          // used to compute Connect's displayName from the wrapped component's displayName.
          getDisplayName: function getDisplayName(name) {
            return "Connect(" + name + ")";
          },
          // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
          shouldHandleStateChanges: Boolean(mapStateToProps),
          // passed through to selectorFactory
          initMapStateToProps,
          initMapDispatchToProps,
          initMergeProps,
          pure,
          areStatesEqual,
          areOwnPropsEqual,
          areStatePropsEqual,
          areMergedPropsEqual,
        },
        extraOptions
      )
    );
  };
}
var connect_default = createConnect();

// node_modules/react-redux/es/hooks/useStore.js
var import_react6 = __toESM(require_react());

// node_modules/react-redux/es/hooks/useReduxContext.js
var import_react5 = __toESM(require_react());
function useReduxContext() {
  var contextValue = (0, import_react5.useContext)(ReactReduxContext);
  if (!contextValue) {
    throw new Error(
      "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
    );
  }
  return contextValue;
}

// node_modules/react-redux/es/hooks/useStore.js
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 =
    context === ReactReduxContext
      ? useReduxContext
      : function () {
          return (0, import_react6.useContext)(context);
        };
  return function useStore2() {
    var _useReduxContext = useReduxContext2(),
      store = _useReduxContext.store;
    return store;
  };
}
var useStore = createStoreHook();

// node_modules/react-redux/es/hooks/useDispatch.js
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore2 =
    context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store = useStore2();
    return store.dispatch;
  };
}
var useDispatch = createDispatchHook();

// node_modules/react-redux/es/hooks/useSelector.js
var import_react7 = __toESM(require_react());
var refEquality = function refEquality2(a, b) {
  return a === b;
};
function useSelectorWithStoreAndSubscription(
  selector,
  equalityFn,
  store,
  contextSub
) {
  var _useReducer = (0, import_react7.useReducer)(function (s) {
      return s + 1;
    }, 0),
    forceRender = _useReducer[1];
  var subscription = (0, import_react7.useMemo)(
    function () {
      return createSubscription(store, contextSub);
    },
    [store, contextSub]
  );
  var latestSubscriptionCallbackError = (0, import_react7.useRef)();
  var latestSelector = (0, import_react7.useRef)();
  var latestStoreState = (0, import_react7.useRef)();
  var latestSelectedState = (0, import_react7.useRef)();
  var storeState = store.getState();
  var selectedState;
  try {
    if (
      selector !== latestSelector.current ||
      storeState !== latestStoreState.current ||
      latestSubscriptionCallbackError.current
    ) {
      var newSelectedState = selector(storeState);
      if (
        latestSelectedState.current === void 0 ||
        !equalityFn(newSelectedState, latestSelectedState.current)
      ) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message +=
        "\nThe error may be correlated with this previous error:\n" +
        latestSubscriptionCallbackError.current.stack +
        "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(
    function () {
      function checkForUpdates() {
        try {
          var newStoreState = store.getState();
          if (newStoreState === latestStoreState.current) {
            return;
          }
          var _newSelectedState = latestSelector.current(newStoreState);
          if (equalityFn(_newSelectedState, latestSelectedState.current)) {
            return;
          }
          latestSelectedState.current = _newSelectedState;
          latestStoreState.current = newStoreState;
        } catch (err) {
          latestSubscriptionCallbackError.current = err;
        }
        forceRender();
      }
      subscription.onStateChange = checkForUpdates;
      subscription.trySubscribe();
      checkForUpdates();
      return function () {
        return subscription.tryUnsubscribe();
      };
    },
    [store, subscription]
  );
  return selectedState;
}
function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 =
    context === ReactReduxContext
      ? useReduxContext
      : function () {
          return (0, import_react7.useContext)(context);
        };
  return function useSelector2(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    if (true) {
      if (!selector) {
        throw new Error("You must pass a selector to useSelector");
      }
      if (typeof selector !== "function") {
        throw new Error(
          "You must pass a function as a selector to useSelector"
        );
      }
      if (typeof equalityFn !== "function") {
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
      }
    }
    var _useReduxContext = useReduxContext2(),
      store = _useReduxContext.store,
      contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(
      selector,
      equalityFn,
      store,
      contextSub
    );
    (0, import_react7.useDebugValue)(selectedState);
    return selectedState;
  };
}
var useSelector = createSelectorHook();

// node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-redux/es/index.js
setBatch(import_react_dom.unstable_batchedUpdates);
var export_batch = import_react_dom.unstable_batchedUpdates;
export {
  Provider_default as Provider,
  ReactReduxContext,
  export_batch as batch,
  connect_default as connect,
  connectAdvanced,
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  shallowEqual,
  useDispatch,
  useSelector,
  useStore,
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-redux.js.map
