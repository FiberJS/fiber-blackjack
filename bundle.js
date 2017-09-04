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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("fiber",[],t):"object"==typeof exports?exports.fiber=t():e.fiber=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){var t=e.split("/").slice(1),n="data",r=f,o=!0,i=!1,u=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){var c=a.value;if(n+="/"+c,!r.children[c]){var v=new s(c,n);r.children[c]=v,r.element.appendChild(v.element)}r=r.children[c]}}catch(e){i=!0,u=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw u}}return r}function a(e){var t=e.split("/").slice(1),n=f,r=t.pop(),o=!0,i=!1,u=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){var c=a.value;if(!n.children[c])return!1;n=n.children[c]}}catch(e){i=!0,u=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw u}}return n.children[r]&&delete n.children[r],!0}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.getOrCreateEventPool=u,t.detachEventPool=a;var c=t.EventPool=function(){function e(){i(this,e)}return l(e,[{key:"trigger",value:function(e){e.originalEvent=e.event(),this.element.dispatchEvent(e.originalEvent)}},{key:"listen",value:function(){for(var e=0;e<arguments.length;e+=2)this.addEventListener(arguments.length<=e?void 0:arguments[e],arguments.length<=e+1?void 0:arguments[e+1])}},{key:"addEventListener",value:function(e,t){var n=this,r=void 0,o=[];return"string"==typeof e?(r=t,e.trim().split(/\s/).forEach(function(e){o.push(e),n.element.addEventListener(e,r)})):(r=function(e){return t(e.detail)},this.element.addEventListener(e.EventName,r),o.push(e.EventName)),{callback:r,events:o}}},{key:"defineState",value:function(e){var t=this;this.__state||(this.__state={}),this.state||(this.state={}),Object.getOwnPropertyNames(e).forEach(function(n){t.__state[n]=null,Object.defineProperty(t.state,n,{get:function(){return t.__state[n]},enumerable:!0});for(var r=e[n](t.__state),o=0;o<r.length;o+=2)t.addEventListener(r[o],r[o+1])})}}],[{key:"forElement",value:function(e,t){var n=new this;return n.name=t&&t.constructor.name,n.element=e,n}},{key:"forComponent",value:function(e){var t=new this;return t.name=e.constructor.name,t.element=e.view,t}}]),e}(),s=t.DataEventPool=function(e){function t(e,n){i(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.name=e,o.path=n,o.element=o.createElement(e),o.children={},o}return o(t,e),l(t,[{key:"detach",value:function(){delete this.element,a(this.path)}},{key:"createElement",value:function(e){var t=document.createElement(function(e){return"#"==e[0]?"item":e.toLowerCase().replace(/[^a-z0-9]/g,"")}(e));return t.id=function(e){return e.replace(/[^A-Za-z0-9\/]/g,"").replace(/[\/]/g,"-")}(e),t}}]),t}(c),f=new s("data")},function(e,t,n){"use strict";function r(e){return"string"==typeof e?e:e.EventName}function o(){return(++u).toString()}Object.defineProperty(t,"__esModule",{value:!0});var i={components:new Map,listeners:new Map,observers:new Map,elementAttribute:"fiber-component-id"};i.init=function(){this.observe(document.body),this.init=!1},i.observe=function(e){var t=this,n=(this.observers.size+1).toString();if(!e._GC_observerId){e._GC_observerId=n;var r=new MutationObserver(function(e){e.forEach(function(e){e.removedNodes&&e.removedNodes.forEach(function(e){t.removeNode(e)})})});r.observe(e,{childList:!0,subtree:!0}),this.observers.set(n,{element:e,observer:r})}},i.removeNode=function(e){var t=this;if(e.querySelectorAll&&!e._GC_observerId){var n=function(e){var n=e.attributes[t.elementAttribute].value,r=t.components.get(n);r&&t.destroy(r)};e.querySelectorAll("["+this.elementAttribute+"]").forEach(n),e.attributes[this.elementAttribute]&&n(e)}},i.registerComponent=function(e){e.componentId=o(),this.components.set(e.componentId,e),this.listeners.set(e.componentId,[]),e.view.setAttribute(this.elementAttribute,e.componentId),i.init&&i.init()},i.registerListener=function(e,t,n,o){this.listeners.has(e.componentId)&&this.listeners.get(e.componentId).push({element:t,eventName:r(n),callback:o})},i.destroy=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=this.listeners.get(e.componentId)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var u=o.value;u.element.removeEventListener(u.eventName,u.callback)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}e.view=null,this.components.delete(e.componentId),this.listeners.delete(e.componentId)},t.default=i;var u=0},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=function(){function e(){r(this,e);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.init.apply(this,n)}return o(e,[{key:"init",value:function(){}},{key:"on",value:function(e){return e instanceof i.EventPool?e:(0,i.getOrCreateEventPool)(e)}}],[{key:"attachTo",value:function(e){var t=new this;return t.eventPool=e instanceof i.EventPool?e:(0,i.getOrCreateEventPool)(e),t.listen(),t}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=n(4),s=r(c),f=n(1),v=r(f),p=function(){function e(){u(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];this.init.apply(this,n)}return a(e,[{key:"init",value:function(){}},{key:"listen",value:function(){}},{key:"render",value:function(){return this.constructor.template&&(this.view=s.default.render(this.constructor.template)),this.listen(),this.view}},{key:"getOrCreateEventPool",value:function(){return this.eventPool||(this.eventPool=l.EventPool.forComponent(this))}},{key:"on",value:function(e){return e instanceof l.EventPool?new h(this,e):new h(this,(0,l.getOrCreateEventPool)(e))}},{key:"ui",value:function(e){var t=s.default.getElement(e||this.view,this.view);return t?new h(this,l.EventPool.forElement(t,this)):null}},{key:"view",get:function(){return this._view},set:function(e){this._view=e,this.getOrCreateEventPool().element=e,e&&v.default.registerComponent(this)}}],[{key:"elementName",value:function(){return this.name.replace("Component","").replace(/[A-Z]/g,"-$&").toLowerCase().substr(1)}},{key:"withTemplate",value:function(e){return function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,null,[{key:"__setTemplate",value:function(e){return this.template=e,this}}]),t}(this).__setTemplate(e)}},{key:"attachTo",value:function(e){e=s.default.getElement(e);for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=new(Function.prototype.bind.apply(this,[null].concat(n)));o._attached=!0;var i=this.template?s.default.render(this.template):null;return i?i.tagName==e.tagName?(e.replaceWith(i),o.view=i):(o.view=e,o.view.append(i)):o.view=e,o.listen(),o}},{key:"populate",value:function(e){var t=this;if(!e instanceof Element)return!1;var n=e.querySelectorAll(this.elementName());return e.tagName.toLowerCase()==this.elementName()&&(n=[e]),n.forEach(function(e){t.attachTo(e)}),n}}]),e}(),h=function(){function e(t,n){u(this,e),this.component=t,this.eventPool=n}return a(e,[{key:"listen",value:function(){for(var e=this,t=arguments,n=0;n<arguments.length;n+=2)!function(n){var r=e.eventPool.addEventListener(t.length<=n?void 0:t[n],t.length<=n+1?void 0:t[n+1]);r.events.forEach(function(t){return v.default.registerListener(e.component,e.eventPool.element,t,r.callback)})}(n)}},{key:"trigger",value:function(e){return this.eventPool.trigger(e)}}]),e}();t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i={};i.getElement=function(e,t){return"string"==typeof e?(t||document).querySelector(e):e},i.render=function(e,t){if(e instanceof Element)return e;var n=document.createElement(t||"div");return n.innerHTML=e,t||1!=n.childElementCount?n:n.firstElementChild},i.renderWithComponents=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e=i.render(e);var o=!0,u=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.populate(e)}}catch(e){u=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(u)throw a}}return e},i.detach=function(e){o.default.observe(e),e.remove()},t.default=i},function(e,t,n){"use strict";function r(e){if(!(e instanceof Object)||e instanceof Function)return e;if(e instanceof Array)return e.map(function(e){return r(e)});if(e instanceof Number||e instanceof String||e instanceof Date||e instanceof RegExp||e instanceof Boolean)return new e.constructor(e);if(e.clone instanceof Function)return e.clone();var t={},n=!0,o=!1,i=void 0;try{for(var u,a=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(n=(u=a.next()).done);n=!0){var l=u.value;t[l]=r(e[l])}}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=r(a),c=n(2),s=r(c),f=n(3),v=r(f),p=n(0),h=n(7),d=n(5),y=r(d),m=n(4),b=r(m),g=n(8),E=r(g),_={};_.GC=l.default,_.DataComponent=s.default,_.UIComponent=v.default,_.namespace=p.getOrCreateEventPool,_.Event=h.Event,_.defineEvent=h.defineEvent,_.defineEventType=h.defineEventType,_.basicEvent=h.basicEvent,_.clone=y.default,_.DOM=b.default,_.Debugger=E.default;var w=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}(s.default),O=new w;_.System=(0,p.getOrCreateEventPool)("data/system"),_.System.Ready=(0,h.basicEvent)().alias("System:Ready"),_.app=function(e){e(),O.on(_.System).trigger(new _.System.Ready)},t.default=_},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){var t=Object.getOwnPropertyNames(e);return function(n){function u(){i(this,u);for(var n=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this)),o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];for(var c=0;c<a.length;c++){var s=t[c],f=e[s];if(f==Number||f==String||f==Boolean)n[s]=new f(a[c]).valueOf();else{if(f instanceof Object&&!(a[c]instanceof f))throw new d(n,s,a[c],f);n[s]=(0,v.default)(a[c])}}return n}return o(u,n),u}(h)}function a(e){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(e).alias("Event"+ ++p)}function l(){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(h).alias("Event"+ ++p)}function c(e,t){return a(e).alias(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.defineEventType=u,t.eventOfType=a,t.basicEvent=l,t.defineEvent=c;var f=n(5),v=function(e){return e&&e.__esModule?e:{default:e}}(f),p=0,h=function(){function e(){i(this,e),this.name=this.constructor.EventName}return s(e,[{key:"event",value:function(){return new CustomEvent(this.name,{detail:this,bubbles:!this.constructor._cancelBubble,cancelable:!0})}},{key:"stopPropagation",value:function(){this.originalEvent&&this.originalEvent.stopPropagation()}},{key:"preventDefault",value:function(){this.originalEvent&&this.originalEvent.preventDefault()}}],[{key:"bubbles",value:function(e){return this._cancelBubble=!e,this}},{key:"alias",value:function(e){return this.EventName=e,this}}]),e}();t.Event=h;var d=function(e){function t(e,n,o,u){i(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Type mismatch for Event '"+e.name+"' for attribute '"+n+"'"));return a.event=e,a.name=n,a.value=o,a.type=u,a}return o(t,e),t}(Error)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e.name)return e.name;try{return e.toString().match(/_this[0-9][.]([^(]*)[(]/).pop()}catch(e){return"Unknown"}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=r(i),a=n(3),l=r(a),c=n(0),s={},f=null;s.init=function(){l.default.prototype.$$on=l.default.prototype.on,l.default.prototype.on=function(e){return f=this,this.$$on(e)},l.default.prototype.$$ui=l.default.prototype.ui,l.default.prototype.ui=function(e){return f=this,this.$$ui(e)},u.default.prototype.$$on=u.default.prototype.on,u.default.prototype.on=function(e){return f=this,this.$$on(e)},c.EventPool.prototype.$$trigger=c.EventPool.prototype.trigger,c.EventPool.prototype.trigger=function(e){return console.log(e.name+" triggered by "+f.constructor.name),s.showEvents&&console.log(e),this.$$trigger(e)},c.EventPool.prototype.$$addEventListener=c.EventPool.prototype.addEventListener,c.EventPool.prototype.addEventListener=function(e,t){var n="string"==typeof e,r=n?e:e.EventName,i=f.constructor.name,u=f.view,a=function(e){return n?console.log(r+" was triggered on "+i):u&&s.showView?console.log("    "+i+" listening for "+r,u):console.log("    "+i+" listening for "+r),console.log("    calling "+i+"."+o(t)),t(e)};return this.$$addEventListener(e,a)}},t.default=s}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fiberFramework = __webpack_require__(0);

var _fiberFramework2 = _interopRequireDefault(_fiberFramework);

var _dealer = __webpack_require__(2);

var _dealer2 = _interopRequireDefault(_dealer);

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import NameSpace from 'namespace';
// import Events from 'events';

__webpack_require__(6);

// Debugger
_fiberFramework2.default.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
_fiberFramework2.default.Debugger.init();

_fiberFramework2.default.app(function () {
    // data components

    // ui components
    _dealer2.default.attachTo('dealer');
    _player2.default.attachTo('player');
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _dealer = __webpack_require__(3);

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
        value: function listen() {}
    }]);

    return DealerComponent;
}(_fiber2.default.UIComponent.withTemplate(_dealer2.default));

exports.default = DealerComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<h2>Dealer</h2>\n";

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

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerComponent = function (_Fiber$UIComponent$wi) {
    _inherits(PlayerComponent, _Fiber$UIComponent$wi);

    function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);

        return _possibleConstructorReturn(this, (PlayerComponent.__proto__ || Object.getPrototypeOf(PlayerComponent)).apply(this, arguments));
    }

    _createClass(PlayerComponent, [{
        key: 'listen',
        value: function listen() {}
    }]);

    return PlayerComponent;
}(_fiber2.default.UIComponent.withTemplate(_player2.default));

exports.default = PlayerComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<h2>Playa</h2>\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);