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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("fiber",[],t):"object"==typeof exports?exports.fiber=t():e.fiber=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=e.split("/").slice(1),n="data",r=d,o=!0,i=!1,a=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;if(n+="/"+c,!r.children[c]){var f=new h(c,n);r.children[c]=f,r.element.appendChild(f.element)}r=r.children[c]}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}return r}function u(e){var t=e.split("/").slice(1),n=d,r=t.pop(),o=!0,i=!1,a=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;if(!n.children[c])return!1;n=n.children[c]}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}return n.children[r]&&delete n.children[r],!0}Object.defineProperty(t,"__esModule",{value:!0}),t.DataEventPool=t.EventPool=t.DefinedEvent=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.getOrCreateEventPool=a,t.detachEventPool=u;var c=n(4),f=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(f),v=t.DefinedEvent=(0,c.basicEvent)("Fiber:NameSpace:Defined"),p=t.EventPool=function(){function e(){i(this,e)}return l(e,[{key:"trigger",value:function(e){e.originalEvent=e.event(),this.element.dispatchEvent(e.originalEvent)}},{key:"listen",value:function(){for(var e=0;e<arguments.length;e+=2)this.addEventListener(arguments.length<=e?void 0:arguments[e],arguments.length<=e+1?void 0:arguments[e+1])}},{key:"addEventListener",value:function(e,t){var n=this,r=void 0,o=[];return"string"==typeof e?(r=t,e.trim().split(/\s/).forEach(function(e){o.push(e),n.element.addEventListener(e,r)})):(r=function(e){return t(e.detail)},this.element.addEventListener(e.EventName,r),o.push(e.EventName)),{callback:r,events:o}}},{key:"defineState",value:function(e){var t=this;this.__state||(this.__state={}),this.state||(this.state={}),Object.getOwnPropertyNames(e).forEach(function(n){t.__state[n]=null,Object.defineProperty(t.state,n,{get:function(){return(0,s.default)(t.__state[n])},enumerable:!0});for(var r=e[n](t.__state),o=0;o<r.length;o+=2)t.addEventListener(r[o],r[o+1])}),this.trigger(new v)}}],[{key:"forElement",value:function(e,t){var n=new this;return n.name=t&&t.constructor.name,n.element=e,n}},{key:"forComponent",value:function(e){var t=new this;return t.name=e.constructor.name,t.element=e.view,t}}]),e}(),h=t.DataEventPool=function(e){function t(e,n){i(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.name=e,o.path=n,o.element=o.createElement(e),o.children={},o}return o(t,e),l(t,[{key:"detach",value:function(){delete this.element,u(this.path)}},{key:"createElement",value:function(e){var t=document.createElement(function(e){return"#"==e[0]?"item":e.toLowerCase().replace(/[^a-z0-9]/g,"")}(e));return t.id=function(e){return e.replace(/[^A-Za-z0-9\/]/g,"").replace(/[\/]/g,"-")}(e),t}}]),t}(p),d=new h("data")},function(e,t,n){"use strict";function r(e){return"string"==typeof e?e:e.EventName}function o(){return(++a).toString()}Object.defineProperty(t,"__esModule",{value:!0});var i={components:new Map,listeners:new Map,observers:new Map,elementAttribute:"fiber-component-id"};i.init=function(){this.observe(document.body),this.init=!1},i.observe=function(e){var t=this,n=(this.observers.size+1).toString();if(!e._GC_observerId){e._GC_observerId=n;var r=new MutationObserver(function(e){e.forEach(function(e){e.removedNodes&&e.removedNodes.forEach(function(e){t.removeNode(e)})})});r.observe(e,{childList:!0,subtree:!0}),this.observers.set(n,{element:e,observer:r})}},i.removeNode=function(e){var t=this;if(e.querySelectorAll&&!e._GC_observerId){var n=function(e){var n=e.attributes[t.elementAttribute].value,r=t.components.get(n);r&&t.destroy(r)};e.querySelectorAll("["+this.elementAttribute+"]").forEach(n),e.attributes[this.elementAttribute]&&n(e)}},i.registerComponent=function(e){e.componentId=o(),this.components.set(e.componentId,e),this.listeners.set(e.componentId,[]),e.view.setAttribute(this.elementAttribute,e.componentId),i.init&&i.init()},i.registerListener=function(e,t,n,o){this.listeners.has(e.componentId)&&this.listeners.get(e.componentId).push({element:t,eventName:r(n),callback:o})},i.destroy=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=this.listeners.get(e.componentId)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.element.removeEventListener(a.eventName,a.callback)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}e.view=null,this.components.delete(e.componentId),this.listeners.delete(e.componentId)},t.default=i;var a=0},function(e,t,n){"use strict";function r(e){if(!(e instanceof Object)||e instanceof Function)return e;if(e instanceof Array)return e.map(function(e){return r(e)});if(e instanceof Number||e instanceof String||e instanceof Date||e instanceof RegExp||e instanceof Boolean)return new e.constructor(e);if(e.clone instanceof Function)return e.clone();var t={},n=!0,o=!1,i=void 0;try{for(var a,u=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var l=a.value;t[l]=r(e[l])}}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=function(){function e(){r(this,e);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.init.apply(this,n)}return o(e,[{key:"init",value:function(){}},{key:"listen",value:function(){}},{key:"on",value:function(e){return e instanceof i.EventPool?e:(0,i.getOrCreateEventPool)(e)}}],[{key:"attachTo",value:function(e){var t=new this;return t.eventPool=e instanceof i.EventPool?e:(0,i.getOrCreateEventPool)(e),t.listen(),t}}]),e}();t.default=a},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=Object.getOwnPropertyNames(e);return function(n){function a(){i(this,a);for(var n=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this)),o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];for(var c=0;c<u.length;c++){var s=t[c];if(void 0===s||void 0===e[s])throw new m(n,s,u[c]);var v=h.Optional.from(e[s]),d=f(v,2),y=d[0],b=d[1];if(y&&void 0===u[c]);else if(b==Number||b==String||b==Boolean)n[s]=new b(u[c]).valueOf();else{if(b instanceof Object&&!(u[c]instanceof b))throw new m(n,s,u[c],b);n[s]=(0,p.default)(u[c])}}return n}return o(a,n),a}(y)}function u(e){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(e).alias("Event"+ ++d)}function l(e){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(y).alias(e||"Event"+ ++d)}function c(e,t){return u(e).alias(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;var f=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.defineEventType=a,t.eventOfType=u,t.basicEvent=l,t.defineEvent=c;var v=n(2),p=function(e){return e&&e.__esModule?e:{default:e}}(v),h=n(8),d=0,y=function(){function e(){i(this,e),this.name=this.constructor.EventName}return s(e,[{key:"event",value:function(){return new CustomEvent(this.name,{detail:this,bubbles:!this.constructor._cancelBubble,cancelable:!0})}},{key:"stopPropagation",value:function(){this.originalEvent&&this.originalEvent.stopPropagation()}},{key:"preventDefault",value:function(){this.originalEvent&&this.originalEvent.preventDefault()}}],[{key:"bubbles",value:function(e){return this._cancelBubble=!e,this}},{key:"alias",value:function(e){return this.EventName=e,this}}]),e}();t.Event=y;var m=function(e){function t(e,n,o,a){if(i(this,t),a)var u=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Type mismatch for Event '"+e.name+"' for attribute '"+n+"'"));else var u=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Unexpected parameter for Event '"+e.name+"'"));return u.event=e,u.name=n,u.value=o,u.type=a,r(u)}return o(t,e),t}(Error)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=n(6),f=r(c),s=n(1),v=r(s),p=function(){function e(){a(this,e);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];this.init.apply(this,n)}return u(e,[{key:"init",value:function(){}},{key:"listen",value:function(){}},{key:"render",value:function(){return this.constructor.template&&(this.view=f.default.render(this.constructor.template)),this.listen(),this.view}},{key:"getOrCreateEventPool",value:function(){return this.eventPool||(this.eventPool=l.EventPool.forComponent(this))}},{key:"on",value:function(e){return e instanceof l.EventPool?new h(this,e):new h(this,(0,l.getOrCreateEventPool)(e))}},{key:"ui",value:function(e){var t=f.default.getElement(e||this.view,this.view);return t?new h(this,l.EventPool.forElement(t,this)):null}},{key:"view",get:function(){return this._view},set:function(e){this._view=e,this.getOrCreateEventPool().element=e,e&&v.default.registerComponent(this)}}],[{key:"elementName",value:function(){return this.name.replace("Component","").replace(/[A-Z]/g,"-$&").toLowerCase().substr(1)}},{key:"withTemplate",value:function(e){return function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,null,[{key:"__setTemplate",value:function(e){return this.template=e,this}}]),t}(this).__setTemplate(e)}},{key:"attachTo",value:function(e){e=f.default.getElement(e);for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=new(Function.prototype.bind.apply(this,[null].concat(n)));o._attached=!0;var i=this.template?f.default.render(this.template):null;return i?i.tagName==e.tagName?(e.replaceWith(i),o.view=i):(o.view=e,o.view.append(i)):o.view=e,o.listen(),o}},{key:"populate",value:function(e){var t=this;if(!e instanceof Element)return!1;var n=e.querySelectorAll(this.elementName());return e.tagName.toLowerCase()==this.elementName()&&(n=[e]),n.forEach(function(e){t.attachTo(e)}),n}}]),e}(),h=function(){function e(t,n){a(this,e),this.component=t,this.eventPool=n}return u(e,[{key:"listen",value:function(){for(var e=this,t=arguments,n=0;n<arguments.length;n+=2)!function(n){var r=e.eventPool.addEventListener(t.length<=n?void 0:t[n],t.length<=n+1?void 0:t[n+1]);r.events.forEach(function(t){return v.default.registerListener(e.component,e.eventPool.element,t,r.callback)})}(n)}},{key:"trigger",value:function(e){return this.eventPool.trigger(e)}}]),e}();t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i={};i.getElement=function(e,t){return"string"==typeof e?(t||document).querySelector(e):e},i.render=function(e,t){if(e instanceof Element)return e;var n=document.createElement(t||"div");return n.innerHTML=e,t||1!=n.childElementCount?n:n.firstElementChild},i.renderWithComponents=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e=i.render(e);var o=!0,a=!1,u=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.populate(e)}}catch(e){a=!0,u=e}finally{try{!o&&c.return&&c.return()}finally{if(a)throw u}}return e},i.detach=function(e){o.default.observe(e),e.remove()},t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(3),u=r(a),l=n(5),c=r(l),f=n(0),s=n(4),v=n(2),p=r(v),h=n(6),d=r(h),y=n(9),m=r(y),b={};b.GC=i.default,b.DataComponent=u.default,b.UIComponent=c.default,b.namespace=f.getOrCreateEventPool,b.NameSpace={create:f.getOrCreateEventPool,Defined:f.DefinedEvent},b.Event=s.Event,b.defineEvent=s.defineEvent,b.defineEventType=s.defineEventType,b.basicEvent=s.basicEvent,b.clone=p.default,b.DOM=d.default,b.Debugger=m.default,b.System=(0,f.getOrCreateEventPool)("data/system"),b.System.Ready=(0,s.basicEvent)("System:Ready");var g=b.DataComponent.attachTo(b.System);b.app=function(e){e(),g.on(b.System).trigger(new b.System.Ready)},t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(t.Optional=function(e){return{$isOptional:!0,value:e}}).from=function(e){return e.$isOptional?[!0,e.value]:[!1,e]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e.name)return e.name;try{return e.toString().match(/_this[0-9][.]([^(]*)[(]/).pop()}catch(e){return"Unknown"}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),u=n(5),l=r(u),c=n(0),f={},s=null;f.init=function(){l.default.prototype.$$on=l.default.prototype.on,l.default.prototype.on=function(e){return s=this,this.$$on(e)},l.default.prototype.$$ui=l.default.prototype.ui,l.default.prototype.ui=function(e){return s=this,this.$$ui(e)},a.default.prototype.$$on=a.default.prototype.on,a.default.prototype.on=function(e){return s=this,this.$$on(e)},c.EventPool.prototype.$$trigger=c.EventPool.prototype.trigger,c.EventPool.prototype.trigger=function(e){return console.log(e.name+" triggered by "+s.constructor.name),f.showEvents&&console.log(e),this.$$trigger(e)},c.EventPool.prototype.$$addEventListener=c.EventPool.prototype.addEventListener,c.EventPool.prototype.addEventListener=function(e,t){var n="string"==typeof e,r=n?e:e.EventName,i=s.constructor.name,a=s.view,u=function(e){return n?console.log(r+" was triggered on "+i):a&&f.showView?console.log("    "+i+" listening for "+r,a):console.log("    "+i+" listening for "+r),console.log("    calling "+i+"."+o(t)),t(e)};return this.$$addEventListener(e,u)}},t.default=f}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameSpace = {
    Cards: _fiber2.default.namespace('data/cards'),
    Game: _game2.default
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

var _eventTypes = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = {};

Events.Card = {};
Events.Card.Request = _fiber2.default.defineEvent(_eventTypes.CardRequestEvent, 'Card:Request');
Events.Card.ServedFor = function (recipient) {
  return _fiber2.default.defineEvent(_eventTypes.CardEvent, 'Card:ServedFor:' + recipient);
};

Events.Game = {};
Events.Game.Reset = _fiber2.default.basicEvent('Game:Reset');
Events.Game.ScoreUpdated = _fiber2.default.defineEvent(_eventTypes.ScoreEvent, 'Game:ScoreUpdated');

Events.Player = {};
Events.Player.Joined = _fiber2.default.defineEvent(_eventTypes.PlayerEvent, 'Player:Joined');
Events.Player.Left = _fiber2.default.defineEvent(_eventTypes.PlayerEvent, 'Player:Left');

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


var _fiberFramework = __webpack_require__(0);

var _fiberFramework2 = _interopRequireDefault(_fiberFramework);

var _deck = __webpack_require__(5);

var _deck2 = _interopRequireDefault(_deck);

var _game = __webpack_require__(9);

var _game2 = _interopRequireDefault(_game);

var _dealer = __webpack_require__(10);

var _dealer2 = _interopRequireDefault(_dealer);

var _player = __webpack_require__(22);

var _player2 = _interopRequireDefault(_player);

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(20);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameSpace = _fiber2.default.NameSpace.create('data/game');

GameSpace.defineState({
    players: function players(state) {
        return [_fiber2.default.NameSpace.Defined, function (event) {
            return state.players = [];
        }, _events2.default.Player.Joined, function (event) {
            return playerJoined(event.player, state);
        }, _events2.default.Player.Left, function (event) {
            return playerLeft(event.player, state);
        }];
    },
    scores: function scores(state) {
        return [_fiber2.default.NameSpace.Defined, function (event) {
            return state.scores = {};
        }, _events2.default.Game.ScoreUpdated, function (event) {
            return updateScore(event, state);
        }];
    }
});

function playerJoined(player, state) {
    state.players.push(player);
}

function playerLeft(player, state) {
    state.players = state.players.filter(function (p) {
        return !p.equal(player);
    });
}

function updateScore(scoreEvent, state) {
    state.scores[scoreEvent.recipient] = scoreEvent.score;
}

exports.default = GameSpace;

/***/ }),
/* 7 */
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
  return { $isOptional: true, value: value };
};
Optional.from = function (obj) {
  return obj.$isOptional ? [true, obj.value] : [false, obj];
};

/***/ })
/******/ ]);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(player) {
        _classCallCheck(this, Player);

        this.type = player.type;
        this.name = player.name || 'player-' + (1 + _namespace2.default.Game.state.players.length);
    }

    _createClass(Player, [{
        key: 'equal',
        value: function equal(player) {
            return this.type === player.type && this.name === player.name;
        }
    }]);

    return Player;
}();

Player.Types = {
    Player: 'Player',
    Dealer: 'Dealer'
};

exports.default = Player;

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
            }, _events2.default.Game.ScoreUpdated, function (event) {
                return _this2.checkScores();
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
    }, {
        key: 'checkScores',
        value: function checkScores() {
            console.log(_namespace2.default.Game.state.scores);
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

var _cardHand = __webpack_require__(11);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _dealer = __webpack_require__(18);

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

var _namespace = __webpack_require__(1);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(2);

var _events2 = _interopRequireDefault(_events);

var _cardHolder = __webpack_require__(12);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _card = __webpack_require__(13);

var _card2 = _interopRequireDefault(_card);

var _cardHand = __webpack_require__(17);

var _cardHand2 = _interopRequireDefault(_cardHand);

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
/* 12 */
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
        }
    }, {
        key: 'updateScore',
        value: function updateScore() {
            var possibleScores = [0];
            this.cards.forEach(function (card) {
                var score = getScore(card);
                if (score.length) {
                    possibleScores = splitScores(possibleScores, score);
                } else {
                    possibleScores = addScore(possibleScores, score);
                }
            });
            this.score = bestScoreFrom(possibleScores);
        }
    }]);

    return CardHolderBaseComponent;
}(_fiber2.default.UIComponent);

function getScore(card) {
    return isFinite(card.rank) ? parseInt(card.rank) : card.rank === 'a' ? [1, 11] : 10;
}

function splitScores(possibleScores, scores) {
    return addScore(possibleScores, scores[0]).concat(addScore(possibleScores, scores[1])).sort(function (a, b) {
        return a - b;
    }).filter(function (score, i, allScores) {
        return i < 1 || score != allScores[i - 1];
    });
}

function addScore(possibleScores, score) {
    return possibleScores.map(function (possibleScore) {
        return possibleScore + score;
    });
}

function bestScoreFrom(possibleScores) {
    if (possibleScores[0] >= 21) {
        return possibleScores[0];
    }
    var best = possibleScores.pop();
    while (best > 21) {
        best = possibleScores.pop();
    }
    return best;
}

exports.default = CardHolderBaseComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _card = __webpack_require__(14);

var _card2 = _interopRequireDefault(_card);

var _card3 = __webpack_require__(15);

var _card4 = _interopRequireDefault(_card3);

var _PatchIt = __webpack_require__(16);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = "<card var=\"card\" class=\"card\">\n    <span class=\"rank\" var=\"rank\"></span>\n    <span class=\"suit\" var=\"suit\"></span>\n</card>\n";

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<h2>Dealer</h2>\n<cards></cards>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
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

var _cardHolder = __webpack_require__(12);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _cardHand = __webpack_require__(11);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _player = __webpack_require__(23);

var _player2 = _interopRequireDefault(_player);

var _player3 = __webpack_require__(19);

var _player4 = _interopRequireDefault(_player3);

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
                return _this2.update(event.card);
            });

            this.ui('.hit').listen('click', function (event) {
                return _this2.hit();
            });
            this.ui('.stick').listen('click', function (event) {
                return _this2.stick();
            });

            _cardHand2.default.attachTo(this.view.querySelector('cards'), 'player');
        }
    }, {
        key: 'update',
        value: function update(card) {
            this.addCard(card);
            this.view.querySelector('.score').innerHTML = this.score;
            this.on(_namespace2.default.Game).trigger(new _events2.default.Game.ScoreUpdated('player', this.score));
        }
    }, {
        key: 'hit',
        value: function hit() {
            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Request('player'));
        }
    }, {
        key: 'stick',
        value: function stick() {}
    }]);

    return PlayerComponent;
}(_cardHolder2.default.withTemplate(_player2.default));

exports.default = PlayerComponent;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<h2>Playa : <span class=\"score\"></span></h2>\n<cards></cards>\n<controls>\n    <button class=\"hit\">Hit</button>\n    <button class=\"stick\">Stick</button>\n</controls>\n";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScoreEvent = exports.PlayerEvent = exports.CardRequestEvent = exports.CardEvent = undefined;

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _domain = __webpack_require__(7);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardEvent = exports.CardEvent = _fiber2.default.defineEventType({
    card: _card2.default
});

var CardRequestEvent = exports.CardRequestEvent = _fiber2.default.defineEventType({
    recipient: String,
    face: (0, _domain.Optional)(String)
});

var PlayerEvent = exports.PlayerEvent = _fiber2.default.defineEventType({
    player: _player2.default
});

var ScoreEvent = exports.ScoreEvent = _fiber2.default.defineEventType({
    recipient: String,
    score: Number
});

/***/ })
/******/ ]);