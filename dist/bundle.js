(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("react/lib/ReactElement"), require("react-dom/lib/ReactUpdates"), require("react-dom/lib/ReactInstanceMap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "react/lib/ReactElement", "react-dom/lib/ReactUpdates", "react-dom/lib/ReactInstanceMap"], factory);
	else if(typeof exports === 'object')
		exports["react-redux-wire"] = factory(require("react"), require("react-redux"), require("react/lib/ReactElement"), require("react-dom/lib/ReactUpdates"), require("react-dom/lib/ReactInstanceMap"));
	else
		root["react-redux-wire"] = factory(root["react"], root["react-redux"], root["react/lib/ReactElement"], root["react-dom/lib/ReactUpdates"], root["react-dom/lib/ReactInstanceMap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createElement = __webpack_require__(1);
	
	Object.defineProperty(exports, 'createElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createElement).default;
	  }
	});
	
	var _wire = __webpack_require__(5);
	
	Object.defineProperty(exports, 'wire', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_wire).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createElement;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _symbols = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var store = void 0;
	
	function createElement(type, config, child) {
	  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    rest[_key - 3] = arguments[_key];
	  }
	
	  // store is passed as a prop in Provider, which gives us the opportunity to
	  // keep a reference here for later reuse.
	  if (type === _reactRedux.Provider) {
	    store = config.store;
	  } else if (type.mapStateToProps || type.mapDispatchToProps) {
	    var mapStateToProps = type.mapStateToProps,
	        mapDispatchToProps = type.mapDispatchToProps;
	
	    var children = rest !== undefined ? [child].concat(rest) : child;
	    var ownProps = _extends({}, config, { children: children });
	    var state = store.getState();
	    var dispatch = store.dispatch;
	    var stateProps = mapStateToProps ? mapStateToProps(state, ownProps) : undefined;
	    var dispatchProps = mapDispatchToProps ? mapDispatchToProps(dispatch, ownProps) : undefined;
	    var finalConfig = _extends({}, config, stateProps, dispatchProps);
	
	    return _react2.default.createElement.apply(_react2.default, [type[_symbols.COMPONENT] || type, finalConfig].concat(_toConsumableArray(children)));
	  }
	
	  return _react2.default.createElement.apply(_react2.default, [type, config, child].concat(rest));
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var supportsSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var HANDLE_CHANGE = exports.HANDLE_CHANGE = supportsSymbol && Symbol.for('wire.handleChange') || 'wire.handleChange';
	
	var UNSUBSCRIBE = exports.UNSUBSCRIBE = supportsSymbol && Symbol.for('wire.unsubscribe') || 'wire.unsubscribe';
	
	var COMPONENT = exports.COMPONENT = supportsSymbol && Symbol.for('wire.component') || 'wire.component';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = wire;
	
	var _react = __webpack_require__(2);
	
	var _setProps = __webpack_require__(6);
	
	var _setProps2 = _interopRequireDefault(_setProps);
	
	var _symbols = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function transform(type) {
	  var Type = type;
	  var WrappedComponent = void 0;
	
	  if (_react.Component.prototype.render) {
	    WrappedComponent = type;
	  }
	  // If it is a stateless component, we wrap it in a stateful component to be able to use lifecycle
	  // hooks.
	  else {
	      WrappedComponent = function (_Component) {
	        _inherits(WrappedComponent, _Component);
	
	        function WrappedComponent() {
	          _classCallCheck(this, WrappedComponent);
	
	          return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
	        }
	
	        _createClass(WrappedComponent, [{
	          key: 'render',
	          value: function render() {
	            return type(this.props);
	          }
	        }]);
	
	        return WrappedComponent;
	      }(_react.Component);
	    }
	
	  var FinalComponent = function (_WrappedComponent) {
	    _inherits(FinalComponent, _WrappedComponent);
	
	    function FinalComponent() {
	      var _ref;
	
	      var _temp, _this2, _ret;
	
	      _classCallCheck(this, FinalComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = FinalComponent.__proto__ || Object.getPrototypeOf(FinalComponent)).call.apply(_ref, [this].concat(args))), _this2), _this2[_symbols.HANDLE_CHANGE] = function () {
	        var mapStateToProps = type.mapStateToProps,
	            mapDispatchToProps = type.mapDispatchToProps;
	
	        var state = _this2.context.store.getState();
	        var stateProps = mapStateToProps ? mapStateToProps(state, _this2.props) : undefined;
	        var dispatchProps = mapDispatchToProps ? mapDispatchToProps(_this2.context.store.dispatch, _this2.props) : undefined;
	
	        (0, _setProps2.default)(_this2, _extends({}, stateProps, dispatchProps));
	      }, _temp), _possibleConstructorReturn(_this2, _ret);
	    }
	
	    _createClass(FinalComponent, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (WrappedComponent.prototype.componentDidMount) {
	          _get(FinalComponent.prototype.__proto__ || Object.getPrototypeOf(FinalComponent.prototype), 'componentDidMount', this).call(this);
	        }
	        this[_symbols.UNSUBSCRIBE] = this.context.store.subscribe(this[_symbols.HANDLE_CHANGE]);
	        this[_symbols.HANDLE_CHANGE]();
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (WrappedComponent.prototype.componentWillUnmount) {
	          _get(FinalComponent.prototype.__proto__ || Object.getPrototypeOf(FinalComponent.prototype), 'componentWillUnmount', this).call(this);
	        }
	        this[_symbols.UNSUBSCRIBE]();
	      }
	    }]);
	
	    return FinalComponent;
	  }(WrappedComponent);
	
	  FinalComponent.displayName = getDisplayName(type);
	
	  FinalComponent.contextTypes = {
	    store: _react.PropTypes.object
	  };
	
	  // Store a reference to the connected component so we can create an element of it instead of the
	  // original type in createElement().
	  Type[_symbols.COMPONENT] = FinalComponent;
	}
	
	function wire() {
	  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    types[_key2] = arguments[_key2];
	  }
	
	  types.forEach(transform);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setProps;
	
	var _ReactElement = __webpack_require__(7);
	
	var _ReactElement2 = _interopRequireDefault(_ReactElement);
	
	var _ReactUpdates = __webpack_require__(8);
	
	var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);
	
	var _ReactInstanceMap = __webpack_require__(9);
	
	var _ReactInstanceMap2 = _interopRequireDefault(_ReactInstanceMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setProps(publicInstance, partialProps) {
	  var internalInstance = _ReactInstanceMap2.default.get(publicInstance);
	  var element = internalInstance._pendingElement || internalInstance._currentElement;
	
	  internalInstance._pendingElement = _ReactElement2.default.cloneElement(element, partialProps);
	
	  _ReactUpdates2.default.enqueueUpdate(internalInstance);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bundle.js.map