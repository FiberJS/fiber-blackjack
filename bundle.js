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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fiber", [], factory);
	else if(typeof exports === 'object')
		exports["fiber"] = factory();
	else
		root["fiber"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getOrCreateEventPool = getOrCreateEventPool;
exports.detachEventPool = detachEventPool;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventPool = exports.EventPool = function () {
    function EventPool() {
        _classCallCheck(this, EventPool);
    }

    _createClass(EventPool, [{
        key: 'trigger',
        value: function trigger(fiberEvent) {
            fiberEvent.originalEvent = fiberEvent.event();
            this.element.dispatchEvent(fiberEvent.originalEvent);
        }
    }, {
        key: 'listen',
        value: function listen() {
            for (var i = 0; i < arguments.length; i += 2) {
                this.addEventListener(arguments.length <= i ? undefined : arguments[i], arguments.length <= i + 1 ? undefined : arguments[i + 1]);
            }
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(fiberEvent, eventHandler) {
            var _this = this;

            var realHandler = void 0;
            var events = [];
            if (typeof fiberEvent == 'string') {
                realHandler = eventHandler;
                fiberEvent.trim().split(/\s/).forEach(function (strEvent) {
                    events.push(strEvent);
                    _this.element.addEventListener(strEvent, realHandler);
                });
            } else {
                realHandler = function realHandler(event) {
                    return eventHandler(event.detail);
                };
                this.element.addEventListener(fiberEvent.EventName, realHandler);
                events.push(fiberEvent.EventName);
            }
            return {
                callback: realHandler,
                events: events
            };
        }
    }, {
        key: 'defineState',
        value: function defineState(stateDefinition) {
            var _this2 = this;

            this.__state || (this.__state = {});
            this.state || (this.state = {});
            Object.getOwnPropertyNames(stateDefinition).forEach(function (property) {
                _this2.__state[property] = null;
                Object.defineProperty(_this2.state, property, {
                    get: function get() {
                        return _this2.__state[property];
                    },
                    enumerable: true
                });
                var setters = stateDefinition[property](_this2.__state);
                for (var i = 0; i < setters.length; i += 2) {
                    _this2.addEventListener(setters[i], setters[i + 1]);
                }
            });
        }
    }], [{
        key: 'forElement',
        value: function forElement(element, component) {
            var instance = new this();

            instance.name = component && component.constructor.name;
            instance.element = element;

            return instance;
        }
    }, {
        key: 'forComponent',
        value: function forComponent(component) {
            var instance = new this();

            instance.name = component.constructor.name;
            instance.element = component.view;

            return instance;
        }
    }]);

    return EventPool;
}();

var DataEventPool = exports.DataEventPool = function (_EventPool) {
    _inherits(DataEventPool, _EventPool);

    function DataEventPool(name, path) {
        _classCallCheck(this, DataEventPool);

        var _this3 = _possibleConstructorReturn(this, (DataEventPool.__proto__ || Object.getPrototypeOf(DataEventPool)).call(this));

        _this3.name = name;
        _this3.path = path;
        _this3.element = _this3.createElement(name);
        _this3.children = {};
        return _this3;
    }

    _createClass(DataEventPool, [{
        key: 'detach',
        value: function detach() {
            delete this.element;
            detachEventPool(this.path);
        }
    }, {
        key: 'createElement',
        value: function createElement(name) {
            var idFromName = function idFromName(name) {
                return name.replace(/[^A-Za-z0-9/]/g, '').replace(/[/]/g, '-');
            };
            var elementFromName = function elementFromName(name) {
                return name[0] == '#' ? 'item' : name.toLowerCase().replace(/[^a-z0-9]/g, '');
            };

            var element = document.createElement(elementFromName(name));
            element.id = idFromName(name);

            return element;
        }
    }]);

    return DataEventPool;
}(EventPool);

;

var dataEventPoolRoot = new DataEventPool('data');

function getOrCreateEventPool(path) {
    var poolPath = path.split('/').slice(1);
    var currentPath = 'data';
    var eventPool = dataEventPoolRoot;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = poolPath[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var poolName = _step.value;

            currentPath += '/' + poolName;
            if (!eventPool.children[poolName]) {
                var newPool = new DataEventPool(poolName, currentPath);
                eventPool.children[poolName] = newPool;
                eventPool.element.appendChild(newPool.element);
            }
            eventPool = eventPool.children[poolName];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return eventPool;
};

function detachEventPool(path) {
    var poolPath = path.split('/').slice(1);
    var eventPool = dataEventPoolRoot;
    var poolToDelete = poolPath.pop();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = poolPath[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var poolName = _step2.value;

            if (!eventPool.children[poolName]) {
                return false;
            }
            eventPool = eventPool.children[poolName];
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    if (eventPool.children[poolToDelete]) {
        delete eventPool.children[poolToDelete];
    }

    return true;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GC = {
    components: new Map(),
    listeners: new Map(),
    observers: new Map(),
    elementAttribute: 'fiber-component-id'
};

GC.init = function () {
    this.observe(document.body);
    this.init = false;
};

GC.observe = function (element) {
    var _this = this;

    var observerId = (this.observers.size + 1).toString();

    if (element._GC_observerId) {
        return;
    }

    element._GC_observerId = observerId;

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.removedNodes) {
                mutation.removedNodes.forEach(function (node) {
                    _this.removeNode(node);
                });
            }
        });
    });

    observer.observe(element, { childList: true, subtree: true });

    this.observers.set(observerId, {
        element: element,
        observer: observer
    });
};

GC.removeNode = function (element) {
    var _this2 = this;

    if (!element.querySelectorAll) return;

    if (element._GC_observerId) {
        return;
    }

    var processNode = function processNode(view) {
        var componentId = view.attributes[_this2.elementAttribute].value;
        var component = _this2.components.get(componentId);

        component && _this2.destroy(component);
    };

    element.querySelectorAll('[' + this.elementAttribute + ']').forEach(processNode);
    if (element.attributes[this.elementAttribute]) {
        processNode(element);
    }
};

GC.registerComponent = function (component) {
    component.componentId = generateComponentId();
    this.components.set(component.componentId, component);
    this.listeners.set(component.componentId, []);

    component.view.setAttribute(this.elementAttribute, component.componentId);
    GC.init && GC.init();
};

GC.registerListener = function (component, element, event, callback) {
    if (!this.listeners.has(component.componentId)) return;

    this.listeners.get(component.componentId).push({
        element: element,
        eventName: extractEventName(event),
        callback: callback
    });
};

GC.destroy = function (component) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = this.listeners.get(component.componentId)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;

            listener.element.removeEventListener(listener.eventName, listener.callback);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    component.view = null;
    this.components.delete(component.componentId);
    this.listeners.delete(component.componentId);
};

exports.default = GC;


function extractEventName(event) {
    return typeof event == 'string' ? event : event.EventName;
}

var __id = 0;
// let __fullId = '';
function generateComponentId() {
    return (++__id).toString();
    // if(__id > 122) {
    //     __fullId = incrementStr(__fullId);
    //     __id = 97;
    // }
    // return __fullId + String.fromCharCode(__id);
}

function incrementStr(str) {
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] != 'z') {
            return str.substr(0, i) + String.fromCharCode(str.charCodeAt(i) + 1) + 'a'.repeat(str.length - i - 1);
        }
    }
    return 'a'.repeat(str.length + 1);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventPool = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataComponent = function () {
    function DataComponent() {
        _classCallCheck(this, DataComponent);

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        this.init.apply(this, params);
    }

    _createClass(DataComponent, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'on',
        value: function on(path) {
            return path instanceof _eventPool.EventPool ? path : (0, _eventPool.getOrCreateEventPool)(path);
        }
    }], [{
        key: 'attachTo',
        value: function attachTo(eventPool) {
            var instance = new this();

            instance.eventPool = eventPool instanceof _eventPool.EventPool ? eventPool : (0, _eventPool.getOrCreateEventPool)(eventPool);

            instance.listen();

            return instance;
        }
    }]);

    return DataComponent;
}();

exports.default = DataComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventPool = __webpack_require__(0);

var _DOM = __webpack_require__(4);

var _DOM2 = _interopRequireDefault(_DOM);

var _gc = __webpack_require__(1);

var _gc2 = _interopRequireDefault(_gc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIComponent = function () {
    function UIComponent() {
        _classCallCheck(this, UIComponent);

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
            params[_key] = arguments[_key];
        }

        this.init.apply(this, params);
    }

    _createClass(UIComponent, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'listen',
        value: function listen() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.constructor.template) {
                this.view = _DOM2.default.render(this.constructor.template);
            }

            this.listen();

            return this.view;
        }
    }, {
        key: 'getOrCreateEventPool',
        value: function getOrCreateEventPool() {
            return this.eventPool || (this.eventPool = _eventPool.EventPool.forComponent(this));
        }
    }, {
        key: 'on',
        value: function on(path) {
            return path instanceof _eventPool.EventPool ? new EventPoolAccessor(this, path) : new EventPoolAccessor(this, (0, _eventPool.getOrCreateEventPool)(path));
        }
    }, {
        key: 'ui',
        value: function ui(query) {
            var element = _DOM2.default.getElement(query || this.view, this.view);
            return element ? new EventPoolAccessor(this, _eventPool.EventPool.forElement(element, this)) : null;
        }
    }, {
        key: 'view',
        get: function get() {
            return this._view;
        },
        set: function set(element) {
            this._view = element;
            this.getOrCreateEventPool().element = element;
            if (element) {
                _gc2.default.registerComponent(this);
            }
        }
    }], [{
        key: 'elementName',
        value: function elementName() {
            return this.name.replace('Component', '').replace(/[A-Z]/g, '-$&').toLowerCase().substr(1);
        }
    }, {
        key: 'withTemplate',
        value: function withTemplate(template) {
            return function (_ref) {
                _inherits(_class, _ref);

                function _class() {
                    _classCallCheck(this, _class);

                    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
                }

                _createClass(_class, null, [{
                    key: '__setTemplate',
                    value: function __setTemplate(template) {
                        this.template = template;
                        return this;
                    }
                }]);

                return _class;
            }(this).__setTemplate(template);
        }
    }, {
        key: 'attachTo',
        value: function attachTo(element) {
            element = _DOM2.default.getElement(element);

            for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                params[_key2 - 1] = arguments[_key2];
            }

            var instance = new (Function.prototype.bind.apply(this, [null].concat(params)))();
            instance._attached = true;

            var renderedTemplate = this.template ? _DOM2.default.render(this.template) : null;

            if (!renderedTemplate) {
                instance.view = element;
            } else if (renderedTemplate.tagName == element.tagName) {
                element.replaceWith(renderedTemplate);
                instance.view = renderedTemplate;
            } else {
                instance.view = element;
                instance.view.append(renderedTemplate);
            }
            instance.listen();

            return instance;
        }
    }, {
        key: 'populate',
        value: function populate(parentElement) {
            var _this2 = this;

            if (!parentElement instanceof Element) {
                return false;
            }

            var elements = parentElement.querySelectorAll(this.elementName());
            if (parentElement.tagName.toLowerCase() == this.elementName()) {
                elements = [parentElement];
            }
            elements.forEach(function (element) {
                _this2.attachTo(element);
            });

            return elements;
        }
    }]);

    return UIComponent;
}();

var EventPoolAccessor = function () {
    function EventPoolAccessor(component, pool) {
        _classCallCheck(this, EventPoolAccessor);

        this.component = component;
        this.eventPool = pool;
    }

    _createClass(EventPoolAccessor, [{
        key: 'listen',
        value: function listen() {
            var _this3 = this,
                _arguments = arguments;

            var _loop = function _loop(i) {
                var listener = _this3.eventPool.addEventListener(_arguments.length <= i ? undefined : _arguments[i], _arguments.length <= i + 1 ? undefined : _arguments[i + 1]);
                listener.events.forEach(function (event) {
                    return _gc2.default.registerListener(_this3.component, _this3.eventPool.element, event, listener.callback);
                });
            };

            for (var i = 0; i < arguments.length; i += 2) {
                _loop(i);
            }
        }
    }, {
        key: 'trigger',
        value: function trigger(event) {
            return this.eventPool.trigger(event);
        }
    }]);

    return EventPoolAccessor;
}();

exports.default = UIComponent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gc = __webpack_require__(1);

var _gc2 = _interopRequireDefault(_gc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOM = {};

DOM.getElement = function (element, root) {
    return typeof element == 'string' ? (root || document).querySelector(element) : element;
};

DOM.render = function (template, wrapper) {
    if (template instanceof Element) {
        return template;
    }
    var parent = document.createElement(wrapper || 'div');
    parent.innerHTML = template;
    if (!wrapper && parent.childElementCount == 1) {
        return parent.firstElementChild;
    }

    return parent;
};

DOM.renderWithComponents = function (template) {
    for (var _len = arguments.length, components = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        components[_key - 1] = arguments[_key];
    }

    template = DOM.render(template);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var component = _step.value;

            component.populate(template);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return template;
};

DOM.detach = function (element) {
    _gc2.default.observe(element);
    element.remove();
};

exports.default = DOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gc = __webpack_require__(1);

var _gc2 = _interopRequireDefault(_gc);

var _dataComponent = __webpack_require__(2);

var _dataComponent2 = _interopRequireDefault(_dataComponent);

var _uiComponent = __webpack_require__(3);

var _uiComponent2 = _interopRequireDefault(_uiComponent);

var _eventPool = __webpack_require__(0);

var _event = __webpack_require__(6);

var _clone = __webpack_require__(7);

var _clone2 = _interopRequireDefault(_clone);

var _DOM = __webpack_require__(4);

var _DOM2 = _interopRequireDefault(_DOM);

var _debugger = __webpack_require__(8);

var _debugger2 = _interopRequireDefault(_debugger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fiber = {};

// garbage Collector

Fiber.GC = _gc2.default;

// DataComponent

Fiber.DataComponent = _dataComponent2.default;

// UIComponent

Fiber.UIComponent = _uiComponent2.default;

// eventPool

Fiber.namespace = _eventPool.getOrCreateEventPool;

// events

Fiber.Event = _event.Event;
Fiber.defineEvent = _event.defineEvent;
Fiber.defineEventType = _event.defineEventType;
Fiber.basicEvent = _event.basicEvent;

// clone

Fiber.clone = _clone2.default;

// DOM

Fiber.DOM = _DOM2.default;

// Debugger

Fiber.Debugger = _debugger2.default;

// System events

var System = function (_DataComponent) {
    _inherits(System, _DataComponent);

    function System() {
        _classCallCheck(this, System);

        return _possibleConstructorReturn(this, (System.__proto__ || Object.getPrototypeOf(System)).apply(this, arguments));
    }

    return System;
}(_dataComponent2.default);

;
var _system = new System();
Fiber.System = (0, _eventPool.getOrCreateEventPool)('data/system');
Fiber.System.Ready = (0, _event.basicEvent)().alias('System:Ready');

Fiber.app = function (startupScript) {
    startupScript();
    _system.on(Fiber.System).trigger(new Fiber.System.Ready());
};

exports.default = Fiber;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.defineEventType = defineEventType;
exports.eventOfType = eventOfType;
exports.basicEvent = basicEvent;
exports.defineEvent = defineEvent;

var _clone = __webpack_require__(7);

var _clone2 = _interopRequireDefault(_clone);

var _domain = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventId = 0;

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);

        this.name = this.constructor.EventName;
    }

    _createClass(Event, [{
        key: 'event',
        value: function event() {
            return new CustomEvent(this.name, {
                detail: this,
                bubbles: !this.constructor._cancelBubble,
                cancelable: true
            });
        }
    }, {
        key: 'stopPropagation',
        value: function stopPropagation() {
            this.originalEvent && this.originalEvent.stopPropagation();
        }
    }, {
        key: 'preventDefault',
        value: function preventDefault() {
            this.originalEvent && this.originalEvent.preventDefault();
        }
    }], [{
        key: 'bubbles',
        value: function bubbles(_bubbles) {
            this._cancelBubble = !_bubbles;
            return this;
        }
    }, {
        key: 'alias',
        value: function alias(name) {
            this.EventName = name;
            return this;
        }
    }]);

    return Event;
}();

exports.Event = Event;

var EventAttributeError = function (_Error) {
    _inherits(EventAttributeError, _Error);

    function EventAttributeError(event, name, value, ParamType) {
        _classCallCheck(this, EventAttributeError);

        if (ParamType) {
            var _this = _possibleConstructorReturn(this, (EventAttributeError.__proto__ || Object.getPrototypeOf(EventAttributeError)).call(this, 'Type mismatch for Event \'' + event.name + '\' for attribute \'' + name + '\''));
        } else {
            var _this = _possibleConstructorReturn(this, (EventAttributeError.__proto__ || Object.getPrototypeOf(EventAttributeError)).call(this, 'Unexpected parameter for Event \'' + event.name + '\''));
        }
        _this.event = event;
        _this.name = name;
        _this.value = value;
        _this.type = ParamType;
        return _possibleConstructorReturn(_this);
    }

    return EventAttributeError;
}(Error);

function defineEventType(descriptor) {
    var propNames = Object.getOwnPropertyNames(descriptor);
    var DefinedEventClass = function (_Event) {
        _inherits(DefinedEventClass, _Event);

        function DefinedEventClass() {
            _classCallCheck(this, DefinedEventClass);

            var _this2 = _possibleConstructorReturn(this, (DefinedEventClass.__proto__ || Object.getPrototypeOf(DefinedEventClass)).call(this));

            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }

            for (var i = 0; i < params.length; i++) {
                var paramName = propNames[i];
                if (paramName === undefined || descriptor[paramName] === undefined) {
                    throw new EventAttributeError(_this2, paramName, params[i]);
                }

                var _ref = _domain.Optional.isOptional(descriptor[paramName]) ? [true, descriptor[paramName].value] : [false, descriptor[paramName]],
                    _ref2 = _slicedToArray(_ref, 2),
                    optional = _ref2[0],
                    ParamType = _ref2[1];

                if (optional && !params[i]) {
                    // (this)[paramName] = null;
                } else if (ParamType == Number || ParamType == String || ParamType == Boolean) {
                    _this2[paramName] = new ParamType(params[i]).valueOf();
                } else if (ParamType instanceof Object && !(params[i] instanceof ParamType)) {
                    throw new EventAttributeError(_this2, paramName, params[i], ParamType);
                } else {
                    _this2[paramName] = (0, _clone2.default)(params[i]);
                }
            }
            return _this2;
        }

        return DefinedEventClass;
    }(Event);
    return DefinedEventClass;
};

function eventOfType(EventType) {
    return function (_EventType) {
        _inherits(_class, _EventType);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        return _class;
    }(EventType).alias('Event' + ++eventId);
};

function basicEvent() {
    return function (_Event2) {
        _inherits(_class2, _Event2);

        function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
        }

        return _class2;
    }(Event).alias('Event' + ++eventId);
};

function defineEvent(EventType, alias) {
    return eventOfType(EventType).alias(alias);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clone;
function clone(obj) {
    if (!(obj instanceof Object) || obj instanceof Function) {
        return obj;
    }
    if (obj instanceof Array) {
        return obj.map(function (item) {
            return clone(item);
        });
    }
    if (obj instanceof Number || obj instanceof String || obj instanceof Date || obj instanceof RegExp || obj instanceof Boolean) {
        return new obj.constructor(obj);
    }
    if (obj.clone instanceof Function) {
        return obj.clone();
    }

    var copied = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.getOwnPropertyNames(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            copied[key] = clone(obj[key]);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return copied;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dataComponent = __webpack_require__(2);

var _dataComponent2 = _interopRequireDefault(_dataComponent);

var _uiComponent = __webpack_require__(3);

var _uiComponent2 = _interopRequireDefault(_uiComponent);

var _eventPool = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Debugger = {};
var actor = null;

Debugger.init = function () {

    // .on() and .ui()
    _uiComponent2.default.prototype.$$on = _uiComponent2.default.prototype.on;
    _uiComponent2.default.prototype.on = function (path) {
        actor = this;
        return this.$$on(path);
    };
    _uiComponent2.default.prototype.$$ui = _uiComponent2.default.prototype.ui;
    _uiComponent2.default.prototype.ui = function (path) {
        actor = this;
        return this.$$ui(path);
    };
    _dataComponent2.default.prototype.$$on = _dataComponent2.default.prototype.on;
    _dataComponent2.default.prototype.on = function (path) {
        actor = this;
        return this.$$on(path);
    };

    // EventPool
    _eventPool.EventPool.prototype.$$trigger = _eventPool.EventPool.prototype.trigger;
    _eventPool.EventPool.prototype.trigger = function (fiberEvent) {
        console.log(fiberEvent.name + ' triggered by ' + actor.constructor.name);
        if (Debugger.showEvents) {
            console.log(fiberEvent);
        }
        return this.$$trigger(fiberEvent);
    };

    _eventPool.EventPool.prototype.$$addEventListener = _eventPool.EventPool.prototype.addEventListener;
    _eventPool.EventPool.prototype.addEventListener = function (fiberEvent, handler) {
        var nativeEvent = typeof fiberEvent == 'string';
        var eventName = nativeEvent ? fiberEvent : fiberEvent.EventName;
        var boundActor = actor.constructor.name;
        var boundView = actor.view;

        var debugHandler = function debugHandler(event) {
            if (nativeEvent) {
                console.log(eventName + ' was triggered on ' + boundActor);
            } else {
                boundView && Debugger.showView ? console.log('    ' + boundActor + ' listening for ' + eventName, boundView) : console.log('    ' + boundActor + ' listening for ' + eventName);
            }
            console.log('    calling ' + boundActor + '.' + handlerToString(handler));
            return handler(event);
        };
        return this.$$addEventListener(fiberEvent, debugHandler);
    };
};

function handlerToString(handler) {
    if (handler.name) {
        return handler.name;
    }
    try {
        return handler.toString().match(/_this[0-9][.]([^(]*)[(]/).pop();
    } catch (e) {
        return 'Unknown';
    }
}

exports.default = Debugger;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Optional = exports.Optional = function Optional(value) {
  return { isOptional: true, value: value };
};
Optional.isOptional = function (obj) {
  return obj.isOptional;
};

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameSpace = {
    Cards: _fiber2.default.namespace('data/cards'),
    Game: _fiber2.default.namespace('data/game')
};

exports.default = NameSpace;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _domain = __webpack_require__(8);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardEvent = _fiber2.default.defineEventType({
    card: _card2.default
});

var CardRequestEvent = _fiber2.default.defineEventType({
    recipient: String,
    face: (0, _domain.Optional)(String)
});

var Events = {};

Events.Card = {};
Events.Card.Request = _fiber2.default.defineEvent(CardRequestEvent, 'Card:Request');
Events.Card.ServedFor = function (recipient) {
    return _fiber2.default.defineEvent(CardEvent, 'Card:ServedFor:' + recipient);
};

Events.Game = {};
Events.Game.Reset = _fiber2.default.defineEvent(_fiber2.default.basicEvent(), 'Game:Reset');

exports.default = Events;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
    function Card(card) {
        _classCallCheck(this, Card);

        this.reversed = !!card.reversed;
        this.suit = card.suit;
        this.rank = card.rank;
        this.symbol = symbols[card.suit];
        this.value = isFinite(this.rank) ? parseInt(this.rank) : 10;
    }

    _createClass(Card, [{
        key: 'clone',
        value: function clone() {
            return new Card(this);
        }
    }, {
        key: 'flip',
        value: function flip() {
            this.reversed = !this.reversed;
            return this;
        }
    }]);

    return Card;
}();

Card.Reversed = 'reversed';

exports.default = Card;


var symbols = {
    diams: '♦',
    hearts: '♥',
    spades: '♠',
    clubs: '♣'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _cardHolder = __webpack_require__(5);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _card = __webpack_require__(11);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardHandComponent = function (_Fiber$UIComponent) {
    _inherits(CardHandComponent, _Fiber$UIComponent);

    function CardHandComponent() {
        _classCallCheck(this, CardHandComponent);

        return _possibleConstructorReturn(this, (CardHandComponent.__proto__ || Object.getPrototypeOf(CardHandComponent)).apply(this, arguments));
    }

    _createClass(CardHandComponent, [{
        key: 'init',
        value: function init(name) {
            this.name = name;
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Cards).listen(_events2.default.Card.ServedFor(this.name), function (event) {
                return _this2.addCard(event.card);
            });

            this.view.className = 'playingCards';
        }
    }, {
        key: 'addCard',
        value: function addCard(card) {
            this.view.appendChild(_card2.default.renderCard(card));
        }
    }]);

    return CardHandComponent;
}(_fiber2.default.UIComponent);

exports.default = CardHandComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardHolderBaseComponent = function (_Fiber$UIComponent) {
    _inherits(CardHolderBaseComponent, _Fiber$UIComponent);

    function CardHolderBaseComponent() {
        _classCallCheck(this, CardHolderBaseComponent);

        return _possibleConstructorReturn(this, (CardHolderBaseComponent.__proto__ || Object.getPrototypeOf(CardHolderBaseComponent)).apply(this, arguments));
    }

    _createClass(CardHolderBaseComponent, [{
        key: 'init',
        value: function init() {
            this.cards = [];
            this.score = 0;
        }
    }, {
        key: 'addCard',
        value: function addCard(card) {
            this.cards.push(card);
            this.updateScore();
            // console.log(card);
        }
    }, {
        key: 'updateScore',
        value: function updateScore() {
            var score = 0;
            this.cards.forEach(function (card) {
                score += card.value;
            });
        }
    }]);

    return CardHolderBaseComponent;
}(_fiber2.default.UIComponent);

exports.default = CardHolderBaseComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fiberFramework = __webpack_require__(0);

var _fiberFramework2 = _interopRequireDefault(_fiberFramework);

var _deck = __webpack_require__(7);

var _deck2 = _interopRequireDefault(_deck);

var _game = __webpack_require__(9);

var _game2 = _interopRequireDefault(_game);

var _dealer = __webpack_require__(10);

var _dealer2 = _interopRequireDefault(_dealer);

var _player = __webpack_require__(16);

var _player2 = _interopRequireDefault(_player);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(18);

// Debugger
_fiberFramework2.default.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
_fiberFramework2.default.Debugger.init();

_fiberFramework2.default.app(function () {
    // data components
    _deck2.default.attachTo(_namespace2.default.Cards);
    _game2.default.attachTo(_namespace2.default.Game);

    // ui components
    _dealer2.default.attachTo('dealer');
    _player2.default.attachTo('player');
});

window.Fiber = _fiberFramework2.default;

window.deal = function (recipient, reversed) {
    // const card = new Card({ suit, rank });
    _fiberFramework2.default.namespace('data/cards').trigger(new _events2.default.Card.Request(recipient, reversed));
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SUITS = ['diams', 'hearts', 'spades', 'clubs'];
var RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

var DeckComponent = function (_Fiber$DataComponent) {
    _inherits(DeckComponent, _Fiber$DataComponent);

    function DeckComponent() {
        _classCallCheck(this, DeckComponent);

        return _possibleConstructorReturn(this, (DeckComponent.__proto__ || Object.getPrototypeOf(DeckComponent)).apply(this, arguments));
    }

    _createClass(DeckComponent, [{
        key: 'init',
        value: function init() {
            this.cardSet = [];
            this.fillCards();
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Cards).listen(_events2.default.Card.Request, function (event) {
                return _this2.serveCard(event.recipient, event.face);
            });
        }
    }, {
        key: 'serveCard',
        value: function serveCard(recipient, face) {
            var CardServedEvent = _events2.default.Card.ServedFor(recipient);
            this.on(_namespace2.default.Cards).trigger(new CardServedEvent(this.pullCard(face === _card2.default.Reversed)));
        }
    }, {
        key: 'fillCards',
        value: function fillCards() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = SUITS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var suit = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = RANKS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var rank = _step2.value;

                            this.cardSet.push(new _card2.default({ suit: suit, rank: rank }));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'pullCard',
        value: function pullCard(reversed) {
            if (!this.cardSet.length) {
                this.fillCards();
            }
            var pos = Math.floor(Math.random() * this.cardSet.length);
            var card = this.cardSet[pos];

            this.cardSet = this.cardSet.slice(0, pos).concat(this.cardSet.slice(pos + 1));
            return reversed ? card.flip() : card;
        }
    }]);

    return DeckComponent;
}(_fiber2.default.DataComponent);

exports.default = DeckComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fiber", [], factory);
	else if(typeof exports === 'object')
		exports["fiber"] = factory();
	else
		root["fiber"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Optional = exports.Optional = function Optional(value) {
  return { isOptional: true, value: value };
};
Optional.isOptional = function (obj) {
  return obj.isOptional;
};

/***/ })
/******/ ]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameComponent = function (_Fiber$DataComponent) {
    _inherits(GameComponent, _Fiber$DataComponent);

    function GameComponent() {
        _classCallCheck(this, GameComponent);

        return _possibleConstructorReturn(this, (GameComponent.__proto__ || Object.getPrototypeOf(GameComponent)).apply(this, arguments));
    }

    _createClass(GameComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_fiber2.default.System).listen(_fiber2.default.System.Ready, function (event) {
                return _this2.initGame();
            });
            this.on(_namespace2.default.Game).listen(_events2.default.Game.Reset, function (event) {
                return _this2.initGame();
            });
        }
    }, {
        key: 'initGame',
        value: function initGame() {
            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Request('dealer', _card2.default.Reversed));
            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Request('dealer'));

            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Request('player'));
            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Request('player'));
        }
    }]);

    return GameComponent;
}(_fiber2.default.DataComponent);

exports.default = GameComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _cardHand = __webpack_require__(4);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _dealer = __webpack_require__(15);

var _dealer2 = _interopRequireDefault(_dealer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealerComponent = function (_Fiber$UIComponent$wi) {
    _inherits(DealerComponent, _Fiber$UIComponent$wi);

    function DealerComponent() {
        _classCallCheck(this, DealerComponent);

        return _possibleConstructorReturn(this, (DealerComponent.__proto__ || Object.getPrototypeOf(DealerComponent)).apply(this, arguments));
    }

    _createClass(DealerComponent, [{
        key: 'listen',
        value: function listen() {
            _cardHand2.default.attachTo(this.view.querySelector('cards'), 'dealer');
        }
    }]);

    return DealerComponent;
}(_fiber2.default.UIComponent.withTemplate(_dealer2.default));

exports.default = DealerComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _card = __webpack_require__(12);

var _card2 = _interopRequireDefault(_card);

var _card3 = __webpack_require__(13);

var _card4 = _interopRequireDefault(_card3);

var _PatchIt = __webpack_require__(14);

var _PatchIt2 = _interopRequireDefault(_PatchIt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardTemplate = _PatchIt2.default.template(_card2.default, _card4.default);

var CardGeneratorComponent = function (_Fiber$UIComponent$wi) {
    _inherits(CardGeneratorComponent, _Fiber$UIComponent$wi);

    function CardGeneratorComponent() {
        _classCallCheck(this, CardGeneratorComponent);

        return _possibleConstructorReturn(this, (CardGeneratorComponent.__proto__ || Object.getPrototypeOf(CardGeneratorComponent)).apply(this, arguments));
    }

    _createClass(CardGeneratorComponent, null, [{
        key: 'renderCard',
        value: function renderCard(card) {
            return cardTemplate.render(card);
        }
    }]);

    return CardGeneratorComponent;
}(_fiber2.default.UIComponent.withTemplate(cardTemplate));

exports.default = CardGeneratorComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<card var=\"card\" class=\"card\">\n    <span class=\"rank\" var=\"rank\"></span>\n    <span class=\"suit\" var=\"suit\"></span>\n</card>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cardPatch = function cardPatch(view) {
    return {
        rank: function rank(_rank) {
            view.$.rank.innerHTML = _rank.toString().toUpperCase();
            view.$.card.className += ' rank-' + _rank.toString().toLowerCase();
        },
        suit: function suit(_suit, card) {
            view.$.card.className += ' ' + (card.reversed ? 'back-' : '') + _suit;
        },
        symbol: function symbol(_symbol) {
            view.$.suit.innerHTML = _symbol;
        },
        reversed: function reversed(_reversed) {
            _reversed && (view.$.card.className += ' back');
        }
    };
};
exports.default = cardPatch;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const PatchIt = {};

PatchIt.template = function(html, patch) {
    return new PatchTemplate(html, patch);
};

class PatchTemplate {
    constructor(html, patch) {
        this.html = this.processTemplate(html);
        this.patch = patch;
    }

    render(state) {
        const view = this.html.cloneNode(true);
        PatchIt.assignVariables(view);

        const viewPatch = new ViewPatch(view, this.patch);
        view.apply = (state) => viewPatch.apply(state);

        state && viewPatch.apply(state);
        return view;
    }

    processTemplate(html) {
        return typeof html == 'string'
            ? generateDOM(html)
            : html;
    }
}


class ViewPatch {
    constructor(view, patch) {
        this.view = view;
        this.patch = patch(view);
        this.state = {};

        this.methodify();
    }

    apply(state) {
        let changes = this.process(state);

        for(let key in changes) {
            if(!this.patch[key]) continue;

            let change = changes[key];
            this.patch[key](change, state);
        }
    }

    process(newState) {
        const changes = {};
        const allKeys = new Set();
        Object.getOwnPropertyNames(this.state)
            .concat(Object.getOwnPropertyNames(newState))
            .forEach((key)=>{
                allKeys.add(key);
            });

        for(let key of allKeys) {
            if(this.state[key] != newState[key]) {
                changes[key] = newState[key];
            }
        }
        this.state = clone(newState);
        return changes;
    }

    methodify() {
        for(let key of Object.getOwnPropertyNames(this.patch)) {
            if(this.patch[key] instanceof Array) {
                const elements = this.patch[key];
                this.patch[key] = (value) => {
                    for(let element of elements) {
                        updateElement(element, value);
                    }
                };
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (PatchIt);

function updateElement(element, value) {
    const setProperty = (prop) => {
        return typeof element[prop] == 'undefined'
            ? false
            : (element[prop] = value)
            ;
    };

    setProperty('value') || setProperty('textContent');
}

PatchIt.assignVariables =  parentElement => {
    parentElement.$ || (parentElement.$ = {});
    if(parentElement.attributes['var']) {
        parentElement.$[parentElement.attributes['var'].value] = parentElement;
    }
    parentElement.querySelectorAll('[var]').forEach((element) => {
        parentElement.$[element.attributes['var'].value] = element;
    });

    return parentElement;
};

function generateDOM(html) {
    var parent = document.createElement('div');
    parent.innerHTML = html;

    if(parent.childElementCount == 1) {
        return parent.firstElementChild;
    }

    return parent;
}

function clone(obj) {
    if(obj instanceof Array) return obj.slice();

    const copied = {};

    for(let key of Object.getOwnPropertyNames(obj)) {
        copied[key] = (typeof obj[key] == 'object') ? clone(obj[key]) : obj[key];
    }

    return copied;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<h2>Dealer</h2>\n<cards></cards>\n";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _cardHolder = __webpack_require__(5);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _cardHand = __webpack_require__(4);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _player = __webpack_require__(17);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerComponent = function (_CardHolderBaseCompon) {
    _inherits(PlayerComponent, _CardHolderBaseCompon);

    function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);

        return _possibleConstructorReturn(this, (PlayerComponent.__proto__ || Object.getPrototypeOf(PlayerComponent)).apply(this, arguments));
    }

    _createClass(PlayerComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Cards).listen(_events2.default.Card.ServedFor('player'), function (event) {
                return _this2.addCard(event.card);
            });

            _cardHand2.default.attachTo(this.view.querySelector('cards'), 'player');
        }
    }]);

    return PlayerComponent;
}(_cardHolder2.default.withTemplate(_player2.default));

exports.default = PlayerComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<h2>Playa</h2>\n<cards></cards>\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);