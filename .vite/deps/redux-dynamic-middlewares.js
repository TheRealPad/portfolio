import {
  init_redux,
  redux_exports
} from "./chunk-GDBFQKJW.js";
import "./chunk-TVXNE7JQ.js";
import "./chunk-SR3OVNSJ.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/redux-dynamic-middlewares/lib/index.js
var require_lib = __commonJS({
  "node_modules/redux-dynamic-middlewares/lib/index.js"(exports) {
    exports.__esModule = true;
    exports.createDynamicMiddlewares = exports.resetMiddlewares = exports.removeMiddleware = exports.addMiddleware = void 0;
    var _redux = (init_redux(), __toCommonJS(redux_exports));
    var createDynamicMiddlewares = function createDynamicMiddlewares2() {
      var allDynamicMiddlewares = [];
      var allApplyedDynamicMiddlewares = [];
      var store = void 0;
      var enhancer = function enhancer2(_store) {
        store = _store;
        return function(next) {
          return function(action) {
            return _redux.compose.apply(void 0, allApplyedDynamicMiddlewares)(next)(action);
          };
        };
      };
      var addMiddleware2 = function addMiddleware3() {
        var _allApplyedDynamicMid, _allDynamicMiddleware;
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        (_allApplyedDynamicMid = allApplyedDynamicMiddlewares).push.apply(_allApplyedDynamicMid, middlewares.map(function(middleware) {
          return middleware(store);
        }));
        (_allDynamicMiddleware = allDynamicMiddlewares).push.apply(_allDynamicMiddleware, middlewares);
      };
      var removeMiddleware2 = function removeMiddleware3(middleware) {
        var index = allDynamicMiddlewares.findIndex(function(d) {
          return d === middleware;
        });
        if (index === -1) {
          console.error("Middleware does not exist!", middleware);
          return;
        }
        allDynamicMiddlewares = allDynamicMiddlewares.filter(function(_, mdwIndex) {
          return mdwIndex !== index;
        });
        allApplyedDynamicMiddlewares = allApplyedDynamicMiddlewares.filter(function(_, mdwIndex) {
          return mdwIndex !== index;
        });
      };
      var resetMiddlewares2 = function resetMiddlewares3() {
        allApplyedDynamicMiddlewares = [];
        allDynamicMiddlewares = [];
      };
      return {
        enhancer,
        addMiddleware: addMiddleware2,
        removeMiddleware: removeMiddleware2,
        resetMiddlewares: resetMiddlewares2
      };
    };
    var dynamicMiddlewaresInstance = createDynamicMiddlewares();
    exports.default = dynamicMiddlewaresInstance.enhancer;
    var addMiddleware = dynamicMiddlewaresInstance.addMiddleware;
    var removeMiddleware = dynamicMiddlewaresInstance.removeMiddleware;
    var resetMiddlewares = dynamicMiddlewaresInstance.resetMiddlewares;
    exports.addMiddleware = addMiddleware;
    exports.removeMiddleware = removeMiddleware;
    exports.resetMiddlewares = resetMiddlewares;
    exports.createDynamicMiddlewares = createDynamicMiddlewares;
  }
});
export default require_lib();
//# sourceMappingURL=redux-dynamic-middlewares.js.map
