import { __esm } from "./chunk-AC2VUBZ6.js";

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj2) {
            return typeof obj2;
          }
        : function (obj2) {
            return obj2 &&
              "function" == typeof Symbol &&
              obj2.constructor === Symbol &&
              obj2 !== Symbol.prototype
              ? "symbol"
              : typeof obj2;
          }),
    _typeof(obj)
  );
}
var init_typeof = __esm({
  "node_modules/@babel/runtime/helpers/esm/typeof.js"() {},
});

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var init_toPrimitive = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
    init_typeof();
  },
});

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
var init_toPropertyKey = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
    init_typeof();
    init_toPrimitive();
  },
});

export { _typeof, init_typeof, _toPropertyKey, init_toPropertyKey };
//# sourceMappingURL=chunk-SR3OVNSJ.js.map
