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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("fiber",[],t):"object"==typeof exports?exports.fiber=t():e.fiber=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.EventGateway=function(){function e(){r(this,e)}return o(e,[{key:"trigger",value:function(e){var t=this;return new Promise(function(n){return n(t.triggerSync(e))})}},{key:"triggerSync",value:function(e){return this.element.dispatchEvent(e.event())}},{key:"listen",value:function(){for(var e=0;e<arguments.length;e+=2)this.addEventListener(arguments.length<=e?void 0:arguments[e],arguments.length<=e+1?void 0:arguments[e+1])}},{key:"addEventListener",value:function(t,n){var r=this,o=void 0,i=[];if("string"==typeof t)o=n,t.trim().split(/\s+/).forEach(function(e){i.push(e),r.element.addEventListener(e,o)});else{if(!(t instanceof Event)&&t.namespace instanceof e)return t.namespace.addEventListener(t.event,n);o=function(e){return n(e.detail)},this.element.addEventListener(t.EventName,o),i.push(t.EventName)}return{callback:o,events:i,element:this.element}}}],[{key:"forElement",value:function(e,t){var n=new this;return n.name=t&&t.constructor.name,n.element=e,n}},{key:"forComponent",value:function(e){var t=new this;return t.name=e.constructor.name,t.element=e.view,t}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.NameSpace=t.DefinedEvent=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(4),c=n(0),s=n(13),l=n(5),f=function(e){return e&&e.__esModule?e:{default:e}}(l),v=t.DefinedEvent=(0,u.basicEvent)("Fiber:NameSpace:Defined");t.NameSpace=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name=e,n.eventPool=new s.EventPool,n}return i(t,e),a(t,[{key:"defineState",value:function(e){var t=this;this.__state||(this.__state=new f.default),this.state=this.__state.reader,Object.getOwnPropertyNames(e).forEach(function(n){t.__state.addProperty(n);for(var r=e[n](t.__state.modifier),o=0;o<r.length;o+=2)t.addEventListener(r[o],r[o+1])}),this.trigger(new v)}},{key:"addEventListener",value:function(e,t){var n=[];return!(e instanceof u.Event)&&e.namespace instanceof c.EventGateway?e.namespace.addEventListener(e.event,t):(this.eventPool.addEventListener(e.EventName,t),n.push(e.EventName),{callback:t,events:n,element:this.eventPool})}},{key:"triggerSync",value:function(e){return this.eventPool.dispatchEvent(e)}}],[{key:"get",value:function(e){this.namespaces||(this.namespaces=new Map);var n=this.namespaces.get(e);return n||(n=new t(e),this.namespaces.set(e,n)),n}}]),t}(c.EventGateway)},function(e,t,n){"use strict";function r(e){return"string"==typeof e?e:e.EventName}function o(){return(++a).toString()}Object.defineProperty(t,"__esModule",{value:!0});var i={components:new Map,listeners:new Map,observers:new Map,elementAttribute:"fiber-component-id"};i.init=function(){this.observe(document.body),this.init=!1},i.observe=function(e){var t=this,n=(this.observers.size+1).toString();if(!e._GC_observerId){e._GC_observerId=n;var r=new MutationObserver(function(e){e.forEach(function(e){e.removedNodes&&e.removedNodes.forEach(function(e){t.removeNode(e)})})});r.observe(e,{childList:!0,subtree:!0}),this.observers.set(n,{element:e,observer:r})}},i.removeNode=function(e){var t=this;if(e.querySelectorAll&&!e._GC_observerId){var n=function(e){var n=e.attributes[t.elementAttribute].value,r=t.components.get(n);r&&t.destroy(r)};e.querySelectorAll("["+this.elementAttribute+"]").forEach(n),e.attributes[this.elementAttribute]&&n(e)}},i.registerComponent=function(e){e.componentId=o(),this.components.set(e.componentId,e),this.listeners.set(e.componentId,[]),e.view.setAttribute(this.elementAttribute,e.componentId),i.init&&i.init()},i.registerListener=function(e,t,n,o){this.listeners.has(e.componentId)&&this.listeners.get(e.componentId).push({element:t,eventName:r(n),callback:o})},i.destroy=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=this.listeners.get(e.componentId)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.element.removeEventListener(a.eventName,a.callback)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}e.view=null,this.components.delete(e.componentId),this.listeners.delete(e.componentId)},t.default=i;var a=0},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1),u=n(7),c=function(){function e(){r(this,e);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.init.apply(this,n)}return o(e,[{key:"init",value:function(){}},{key:"listen",value:function(){}},{key:"on",value:function(e){return e instanceof u.EventFlowType?this.flow(e):e instanceof i.EventGateway||e instanceof u.EventFlow?e:(0,a.getNameSpaceByPath)(e)}},{key:"flow",value:function(e){return new u.EventFlow(e)}}]),e}();t.default=c},function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=Object.getOwnPropertyNames(e);return function(n){function a(){i(this,a);for(var n=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this)),o=new p.default(n),u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];for(var f=0;f<c.length;f++){var v=t[f];if(void 0===v||void 0===e[v])throw new m(n,v,c[f]);var h=y.Optional.from(e[v]),d=l(h,2),b=d[0],w=d[1];if(!b||void 0!==c[f]&&null!==c[f])if("Mixed"===w.name)o.addProperty(v,c[f]);else if(w==Number||w==String||w==Boolean)o.addProperty(v,new w(c[f]).valueOf());else{if(w instanceof Object&&!(c[f]instanceof w))throw new m(n,v,c[f],w);o.addProperty(v,c[f])}else o.addProperty(v,c[f])}return n}return o(a,n),a}(d)}function u(e){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(e).alias("Event"+ ++h)}function c(e){return function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(d).alias(e||"Event"+ ++h)}function s(e,t){return u(e).alias(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;var l=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.defineEventType=a,t.eventOfType=u,t.basicEvent=c,t.defineEvent=s;var v=n(5),p=function(e){return e&&e.__esModule?e:{default:e}}(v),y=n(12),h=0,d=function(){function e(){i(this,e),this.name=this.constructor.EventName}return f(e,[{key:"event",value:function(){return this.originalEvent||(this.originalEvent=new CustomEvent(this.name,{detail:this,bubbles:!this.constructor._cancelBubble,cancelable:!0})),this.originalEvent}},{key:"stopPropagation",value:function(){this.originalEvent&&this.originalEvent.stopPropagation()}},{key:"preventDefault",value:function(){this.originalEvent&&this.originalEvent.preventDefault()}}],[{key:"bubbles",value:function(e){return this._cancelBubble=!e,this}},{key:"alias",value:function(e){return this.EventName=e,this}},{key:"on",value:function(e){return{namespace:e,event:this}}}]),e}();t.Event=d;var m=function(e){function t(e,n,o,a){if(i(this,t),a)var u=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Type mismatch for Event '"+e.name+"' for attribute '"+n+"'"));else var u=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Unexpected parameter for Event '"+e.name+"'"));return u.event=e,u.name=n,u.value=o,u.type=a,r(u)}return o(t,e),t}(Error)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){return e instanceof Object?new Proxy(e,{get:function(e,t){return o(e[t])},set:function(){return!0}}):e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.readOnly=o;var a=n(6),u=function(){function e(t){r(this,e),this.reader=t||{},this.modifier={}}return i(e,[{key:"addProperty",value:function(e,t){var n=this;this.modifier[e]=(0,a.coldClone)(t),Object.defineProperty(this.reader,e,{get:function(){return n.modifier[e]},enumerable:!0})}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){if(!(e instanceof Object)||e instanceof Function)return e;if(e instanceof Array)return e.map(function(e){return r(e)});if(e instanceof Number||e instanceof String||e instanceof Date||e instanceof RegExp||e instanceof Boolean)return new e.constructor(e);if(e.clone instanceof Function)return e.clone();var t={},n=!0,o=!1,i=void 0;try{for(var a,u=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value;t[c]=r(e[c])}}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}function o(e){return e===r(e)?e:Object.freeze(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,t.coldClone=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.EventFlow=t.EventFlowType=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(n(4),n(0));t.EventFlowType=function e(){r(this,e);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];this.steps=n,n.forEach(function(e){if(!(e.namespace instanceof i.EventGateway&&e.event.EventName))throw new Error("wrong argument for Flow step!")})},t.EventFlow=function(){function e(t){var n=this;r(this,e),this.steps=t.steps.slice(),this.currentEvent=null,this.currentNameSpace=null,this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t}),this.history=[]}return o(e,[{key:"trigger",value:function(e){var t=this.steps.shift();return t||this.reject(e),!e instanceof t.event&&this.reject(e),this.history.push(e),this.currentEvent=e,this.currentNameSpace=t.namespace,e.flow=this,this.currentNameSpace.trigger(e),this.steps.length||this.resolve(this),this.promise}},{key:"listen",value:function(){throw new Error("You can't set listeners on an EventFlow! (yet?)")}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},s=n(3),l=r(s),f=n(0),v=(n(1),n(9)),p=r(v),y=n(2),h=r(y),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return this.constructor.template&&(this.view=p.default.render(this.constructor.template)),this.listen(),this.view}},{key:"getNameSpaceByPath",value:function(){return this.EventGateway||(this.EventGateway=f.EventGateway.forComponent(this))}},{key:"on",value:function(e){return e=c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"on",this).call(this,e),e instanceof f.EventGateway?new m(this,e):e}},{key:"ui",value:function(e){var t=p.default.getElement(e||this.view,this.view);return t?new m(this,f.EventGateway.forElement(t,this)):null}},{key:"view",get:function(){return this._view},set:function(e){this._view=e,this.getNameSpaceByPath().element=e,e&&h.default.registerComponent(this)}},{key:"namespace",get:function(){return this.getNameSpaceByPath()}}],[{key:"elementName",value:function(){return this.name.replace("Component","").replace(/[A-Z]/g,"-$&").toLowerCase().substr(1)}},{key:"withTemplate",value:function(e){return function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,null,[{key:"__setTemplate",value:function(e){return this.template=e,this}}]),t}(this).__setTemplate(e)}},{key:"attachTo",value:function(e){e=p.default.getElement(e);for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=new(Function.prototype.bind.apply(this,[null].concat(n)));o._attached=!0;var i=this.template?p.default.render(this.template):null;return i?i.tagName==e.tagName?(e.replaceWith(i),o.view=i):(o.view=e,o.view.append(i)):o.view=e,o.listen(),o}},{key:"populate",value:function(e){var t=this;if(!e instanceof Element)return!1;var n=e.querySelectorAll(this.elementName());return e.tagName.toLowerCase()==this.elementName()&&(n=[e]),n.forEach(function(e){t.attachTo(e)}),n}}]),t}(l.default),m=function(){function e(t,n){o(this,e),this.component=t,this.EventGateway=n}return u(e,[{key:"listen",value:function(){var e,t=this,n=arguments;(e=console).log.apply(e,arguments);for(var r=0;r<arguments.length;r+=2)!function(e){var r=t.EventGateway.addEventListener(n.length<=e?void 0:n[e],n.length<=e+1?void 0:n[e+1]);r.events.forEach(function(e){return h.default.registerListener(t.component,r.element,e,r.callback)})}(r)}},{key:"trigger",value:function(e){return this.EventGateway.trigger(e)}},{key:"triggerSync",value:function(e){return this.EventGateway.triggerSync(e)}}]),e}();t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i={};i.getElement=function(e,t){return"string"==typeof e?(t||document).querySelector(e):e},i.render=function(e,t){if(e instanceof Element)return e;var n=document.createElement(t||"div");return n.innerHTML=e,t||1!=n.childElementCount?n:n.firstElementChild},i.renderWithComponents=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e=i.render(e);var o=!0,a=!1,u=void 0;try{for(var c,s=n[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){c.value.populate(e)}}catch(e){a=!0,u=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw u}}return e},i.detach=function(e){o.default.observe(e),e.remove()},t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o),a=n(11),u=r(a),c=n(8),s=r(c),l=n(1),f=n(4),v=n(7),p=n(6),y=r(p),h=n(9),d=r(h),m=n(14),b=r(m),w=n(0),g=n(15),E={};E.GC=i.default,E.DataComponent=u.default,E.UIComponent=s.default,E.namespace=function(e){return l.NameSpace.get(e)},E.NameSpace={create:function(e){return l.NameSpace.get(e)},Defined:l.DefinedEvent},E.Event=f.Event,E.defineEvent=f.defineEvent,E.defineEventType=f.defineEventType,E.basicEvent=f.basicEvent,E.EventFlow={define:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(v.EventFlowType,[null].concat(t)))}},E.clone=y.default,E.DOM=d.default,E.Debugger=b.default,E.System=l.NameSpace.get("data/system"),E.System.Ready=(0,f.basicEvent)("System:Ready");var _=E.DataComponent.attachTo(E.System);E.app=function(e){e(),_.on(E.System).trigger(new E.System.Ready)},(0,g.registerSystemLoaded)({Fiber:E,NameSpace:l.NameSpace,EventGateway:w.EventGateway}),t.default=E},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=n(0),l=n(1),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"namespace",get:function(){return this.EventGateway}}],[{key:"attachTo",value:function(e){var t=new this;return t.EventGateway=e instanceof s.EventGateway?e:(0,l.getNameSpaceByPath)(e),t.listen(),t}}]),t}(c.default);t.default=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),(t.Optional=function(e){return{$isOptional:!0,value:e}}).from=function(e){return e.$isOptional?[!0,e.value]:[!1,e]};t.Mixed=function e(){r(this,e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,e),this.listener=t,this.next=n}return o(e,[{key:"execute",value:function(e){this.listener(e),this.next&&this.next.execute(e)}},{key:"add",value:function(t){for(var n=this;n.next;)n=n.next;n.next=new e(t)}},{key:"without",value:function(e){for(var t=this,n=t,r=null;n;){if(n.listener==e)return null==r?t=n.next:r.next=n.next,t;r=n,n=n.next}return t}}],[{key:"with",value:function(t){return new e(t)}}]),e}();t.EventPool=function(){function e(){r(this,e),this.eventPool=new Map}return o(e,[{key:"addEventListener",value:function(e,t){this.eventPool.has(e)?this.eventPool.get(e).add(t):this.eventPool.set(e,i.with(t))}},{key:"removeEventListener",value:function(e,t){var n=this.eventPool.get(e);if(n){var r=n.without(t);r?this.eventPool.set(e,r):this.eventPool.delete(e)}}},{key:"dispatchEvent",value:function(e){var t=this.eventPool.get(e.name);t&&t.execute(e)}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e.name)return e.name;try{return e.toString().match(/_this[0-9][.]([^(]*)[(]/).pop()}catch(e){return"[inline method]"}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),u=n(8),c=r(u),s=n(0),l=n(1),f={},v=null,p="font-weight: bold; color: black;",y="font-weight: normal; color: red;",h="font-weight: normal;";f.init=function(){a.default.prototype.$$on=a.default.prototype.on,a.default.prototype.on=function(e){return v=this,this.$$on(e)},c.default.prototype.$$ui=c.default.prototype.ui,c.default.prototype.ui=function(e){return v=this,this.$$ui(e)},a.default.prototype.$$flow=a.default.prototype.flow,a.default.prototype.flow=function(e){return v=this,this.$$flow(e)};var e=function(e){var t=this.name||"DOM",n=v.displayName||v.constructor.name;return 1==n.length&&(n="FiberJS"),console.log(" %c"+e.name+" %ctriggered on %c"+t+"%c by %c"+n,"font-weight: bold; color: navy;",h,p,h,p),f.showEvents&&console.log(e),this.$$triggerSync(e)};s.EventGateway.prototype.$$triggerSync=s.EventGateway.prototype.triggerSync,s.EventGateway.prototype.triggerSync=e,l.NameSpace.prototype.$$triggerSync=l.NameSpace.prototype.triggerSync,l.NameSpace.prototype.triggerSync=e,s.EventGateway.prototype.$$addEventListener=s.EventGateway.prototype.addEventListener,s.EventGateway.prototype.addEventListener=function(e,t){var n="string"==typeof e,r=n?e:e.EventName,i=v.constructor.name,a=v.view,u=function(e){return n?console.log(" %c"+r.replace(" ","/")+"%c was triggered on "+i,"font-weight: bold; color: navy;",h):a&&f.showView?console.log(" "+i+" listening for %c"+r,a,y):console.log(" %c"+i+"%c listening for %c"+r,"font-weight: bold; color: #2D602D;",h,y),console.log(" %c"+o(t)+"%c is called by "+i,"font-weight: bold; color: #d9534f;",h),t(e)};return this.$$addEventListener(e,u)}},t.default=f},function(e,t,n){"use strict";(function(e){function n(){return e.__Fiber||(e.__Fiber={})}function r(e){n().system?e(n().system):(n().afterSystemLoaded||(n().afterSystemLoaded=[]),n().afterSystemLoaded.push(e))}function o(e){n().system=e,n().afterSystemLoaded&&n().afterSystemLoaded.forEach(function(t){t(e)}),n().afterSystemLoaded=[]}Object.defineProperty(t,"__esModule",{value:!0}),t.afterSystemLoaded=r,t.registerSystemLoaded=o}).call(t,n(16))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _eventTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = {};

Events.Card = {};
Events.Card.Request = _fiber2.default.defineEvent(_eventTypes.CardRequestEvent, 'Card:Request');
Events.Card.ServedFor = function (recipient) {
  return _fiber2.default.defineEvent(_eventTypes.CardEvent, 'Card:ServedFor:' + recipient);
};
Events.Card.Cleanup = _fiber2.default.basicEvent('Card:Cleanup');

Events.Game = {};
Events.Game.Reset = _fiber2.default.basicEvent('Game:Reset');
Events.Game.Initialized = _fiber2.default.basicEvent('Game:Initialized');
Events.Game.ScoreUpdated = _fiber2.default.defineEvent(_eventTypes.ScoreEvent, 'Game:ScoreUpdated');
Events.Game.RiskUpdated = _fiber2.default.defineEvent(_eventTypes.RiskEvent, 'Game:RiskUpdated');
Events.Game.EndOfRound = _fiber2.default.basicEvent('Game:EndOfRound');
Events.Game.Over = _fiber2.default.defineEvent(_eventTypes.GameOverEvent, 'Game:Over');

Events.Player = {};
Events.Player.Joined = _fiber2.default.defineEvent(_eventTypes.PlayerEvent, 'Player:Joined');
Events.Player.Left = _fiber2.default.defineEvent(_eventTypes.PlayerEvent, 'Player:Left');

Events.Speech = {};
Events.Speech.Listening = _fiber2.default.basicEvent('Speech:Listening');
Events.Speech.Speaking = _fiber2.default.basicEvent('Speech:Speaking');
Events.Speech.Say = _fiber2.default.defineEvent(_eventTypes.SpeechEvent, 'Speech:Say');
Events.Speech.TellScore = _fiber2.default.basicEvent('Speech:TellScore');

exports.default = Events;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _game = __webpack_require__(10);

var _game2 = _interopRequireDefault(_game);

var _cards = __webpack_require__(14);

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NameSpace = {
    Cards: _cards2.default,
    Game: _game2.default,
    Speech: _fiber2.default.NameSpace.create('data/speech')
};

exports.default = NameSpace;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var symbols = {
    diams: '♦',
    hearts: '♥',
    spades: '♠',
    clubs: '♣'
};

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flows = {};

var $CardFor = {};

Flows.CardFor = function (recipient) {
    return $CardFor[recipient] || ($CardFor[recipient] = _fiber2.default.EventFlow.define(_events2.default.Card.Request.on(_namespace2.default.Cards), _events2.default.Card.ServedFor(recipient).on(_namespace2.default.Cards), _events2.default.Game.ScoreUpdated.on(_namespace2.default.Game)));
};

Flows.Confirm = function (Action) {
    return _fiber2.default.EventFlow.define(_events2.default.Speech.Say.on(_namespace2.default.Speech), Action);
};
// Flows.Playoff = Fiber.EventFlow.define(
//     Events.Game.EndOfRound.on(NameSpace.Game),
//     Optional(
//         LoopOf(
//             Flows.CardFor('dealer')
//         )
//     ),
//     Events.Game.Over(NameSpace.Game),
// );
//
// // EFDL
//     `{
//         ?({Cards:Request, Cards:ServedFor('dealer')}*),
//         Game:Over
//     }`


exports.default = Flows;

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

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

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
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Cards).listen(_events2.default.Card.Cleanup, function (event) {
                return _this2.init();
            });
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _cardHolder = __webpack_require__(5);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _card = __webpack_require__(17);

var _card2 = _interopRequireDefault(_card);

var _cardHand = __webpack_require__(21);

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
            }, _events2.default.Card.Cleanup, function (event) {
                return _this2.cleanup();
            });
        }
    }, {
        key: 'addCard',
        value: function addCard(card) {
            this.view.appendChild(_card2.default.renderCard(card));
        }
    }, {
        key: 'cleanup',
        value: function cleanup() {
            this.view.innerHTML = '';
        }
    }]);

    return CardHandComponent;
}(_fiber2.default.UIComponent);

exports.default = CardHandComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function reset(str) {
    return str.toLowerCase().replace(/\s+/, ' ').trim();
}

var VoicePattern = function () {
    function VoicePattern() {
        _classCallCheck(this, VoicePattern);
    }

    _createClass(VoicePattern, [{
        key: 'match',
        value: function match(text) {
            return false;
        }
    }, {
        key: 'signiture',
        value: function signiture() {
            return this.signiture;
        }
    }]);

    return VoicePattern;
}();

var $AllOf = function (_VoicePattern) {
    _inherits($AllOf, _VoicePattern);

    function $AllOf() {
        _classCallCheck(this, $AllOf);

        var _this = _possibleConstructorReturn(this, ($AllOf.__proto__ || Object.getPrototypeOf($AllOf)).call(this));

        for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
            words[_key] = arguments[_key];
        }

        _this.words = words.map(function (str) {
            return reset(str);
        }).sort();

        _this.signiture = "All:" + _this.words.join('+');
        return _this;
    }

    _createClass($AllOf, [{
        key: 'match',
        value: function match(text) {
            text = reset(text).split(/\s+/);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var word = _step.value;

                    if (text.indexOf(word) < 0) {
                        return false;
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

            return true;
        }
    }]);

    return $AllOf;
}(VoicePattern);

var AllOf = exports.AllOf = function AllOf() {
    for (var _len2 = arguments.length, words = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        words[_key2] = arguments[_key2];
    }

    return new (Function.prototype.bind.apply($AllOf, [null].concat(words)))();
};

var $AnyOf = function (_VoicePattern2) {
    _inherits($AnyOf, _VoicePattern2);

    function $AnyOf() {
        _classCallCheck(this, $AnyOf);

        var _this2 = _possibleConstructorReturn(this, ($AnyOf.__proto__ || Object.getPrototypeOf($AnyOf)).call(this));

        for (var _len3 = arguments.length, words = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            words[_key3] = arguments[_key3];
        }

        _this2.words = words.map(function (str) {
            return reset(str);
        }).sort();

        _this2.signiture = "Any:" + _this2.words.join('+');
        return _this2;
    }

    _createClass($AnyOf, [{
        key: 'match',
        value: function match(text) {
            text = reset(text).split(/\s+/);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.words[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var word = _step2.value;

                    if (text.indexOf(word) >= 0) {
                        return true;
                    }
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

            return false;
        }
    }]);

    return $AnyOf;
}(VoicePattern);

var AnyOf = exports.AnyOf = function AnyOf() {
    for (var _len4 = arguments.length, words = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        words[_key4] = arguments[_key4];
    }

    return new (Function.prototype.bind.apply($AnyOf, [null].concat(words)))();
};

var FullSentence = exports.FullSentence = function (_VoicePattern3) {
    _inherits(FullSentence, _VoicePattern3);

    function FullSentence(sentence) {
        _classCallCheck(this, FullSentence);

        var _this3 = _possibleConstructorReturn(this, (FullSentence.__proto__ || Object.getPrototypeOf(FullSentence)).call(this));

        _this3.sentence = reset(sentence);

        _this3.signiture = "F:" + sentence;
        return _this3;
    }

    _createClass(FullSentence, [{
        key: 'match',
        value: function match(text) {
            return reset(text) == this.sentence;
        }
    }]);

    return FullSentence;
}(VoicePattern);

var Command = function () {
    function Command(action, patterns) {
        _classCallCheck(this, Command);

        this.patterns = patterns.slice() || [];

        this.action = action;
    }

    _createClass(Command, [{
        key: 'addAlternatives',
        value: function addAlternatives(input) {
            var _this4 = this;

            (input instanceof Array ? input : [input]).forEach(function (alternative) {
                _this4.patterns.push(alternative instanceof VoicePattern ? alternative : new FullSentence(alternative));
            });
        }
    }, {
        key: 'match',
        value: function match(text) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.patterns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var pattern = _step3.value;

                    if (pattern.match(text)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return false;
        }
    }]);

    return Command;
}();

var CommandListener = exports.CommandListener = function () {
    function CommandListener() {
        _classCallCheck(this, CommandListener);

        this.commands = [];
        this.onActions = {};

        this.fuzzy = [];
        // window.setInterval(()=>this.fuzzy.length && console.log(this.fuzzy.shift()), 10000);

        var alternatives = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = this.constructor.commandParams[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var param = _step4.value;

                if (param instanceof VoicePattern) {
                    alternatives.push(param);
                } else {
                    this.commands.push(new Command(param, alternatives));
                }
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        for (var _len5 = arguments.length, instanceParams = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            instanceParams[_key5] = arguments[_key5];
        }

        for (var i = 0; i < instanceParams.length; i += 2) {
            this.onActions[instanceParams[i]] = instanceParams[i + 1];
        }
    }

    _createClass(CommandListener, [{
        key: 'input',
        value: function input(speechEvent) {
            var results = speechEvent.results,
                resultIndex = speechEvent.resultIndex;

            var voiceCommand = results[resultIndex][0].transcript.toLowerCase();

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.commands[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var cmd = _step5.value;

                    if (cmd.match(voiceCommand)) {

                        if (this.onActions[cmd.action]) {
                            this.onActions[cmd.action]();
                        }

                        if (this.fuzzy.length) {
                            console.log('adding alternatives', this.fuzzy, cmd.action);

                            cmd.addAlternatives(this.fuzzy);
                            this.fuzzy.splice(0, this.fuzzy.length);
                        }

                        return cmd.action;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            this.fuzzy.push(voiceCommand);
            console.log(this.fuzzy);

            return false;
        }
    }, {
        key: 'reset',
        value: function reset() {
            while (this.fuzzy.length) {
                this.fuzzy.pop();
            }
        }
    }], [{
        key: 'withCommands',
        value: function withCommands() {
            var Listener = function (_CommandListener) {
                _inherits(Listener, _CommandListener);

                function Listener() {
                    _classCallCheck(this, Listener);

                    return _possibleConstructorReturn(this, (Listener.__proto__ || Object.getPrototypeOf(Listener)).apply(this, arguments));
                }

                return Listener;
            }(CommandListener);

            for (var _len6 = arguments.length, commands = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                commands[_key6] = arguments[_key6];
            }

            Listener.commandParams = commands;

            return Listener;
        }
    }]);

    return CommandListener;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fiberFramework = __webpack_require__(0);

var _fiberFramework2 = _interopRequireDefault(_fiberFramework);

var _deck = __webpack_require__(9);

var _deck2 = _interopRequireDefault(_deck);

var _game = __webpack_require__(15);

var _game2 = _interopRequireDefault(_game);

var _dealer = __webpack_require__(16);

var _dealer2 = _interopRequireDefault(_dealer);

var _player = __webpack_require__(23);

var _player2 = _interopRequireDefault(_player);

var _gameConsole = __webpack_require__(26);

var _gameConsole2 = _interopRequireDefault(_gameConsole);

var _commentator = __webpack_require__(29);

var _commentator2 = _interopRequireDefault(_commentator);

var _speech = __webpack_require__(31);

var _speech2 = _interopRequireDefault(_speech);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(34);

// Debugger
// Fiber.Debugger.showEvents = true;
_fiberFramework2.default.Debugger.init();

_fiberFramework2.default.app(function () {
    // data components
    _deck2.default.attachTo(_namespace2.default.Cards);
    _game2.default.attachTo(_namespace2.default.Game);
    _commentator2.default.attachTo(_namespace2.default.Game);
    _speech2.default.attachTo(_namespace2.default.Game);

    // ui components
    _dealer2.default.attachTo('dealer');
    _player2.default.attachTo('player');
    _gameConsole2.default.attachTo('game-console');
});

window.Fiber = _fiberFramework2.default;

window.deal = function (recipient, reversed) {
    // const card = new Card({ suit, rank });
    _fiberFramework2.default.namespace('data/cards').trigger(new _events2.default.Card.Request(recipient, reversed));
};

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

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

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
                return _this2.serveCard(event.recipient, event.face, event);
            });
        }
    }, {
        key: 'serveCard',
        value: function serveCard(recipient, face, event) {
            var CardServedEvent = _events2.default.Card.ServedFor(recipient);
            this.on(event.flow || _namespace2.default.Cards).trigger(new CardServedEvent(this.pullCard(face === _card2.default.Reversed)));
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _events = __webpack_require__(1);

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
        }, _events2.default.Game.Reset, function (event) {
            return state.scores = {};
        }, _events2.default.Game.ScoreUpdated, function (event) {
            return updateScore(event, state);
        }];
    },
    risk: function risk(state) {
        return [_fiber2.default.NameSpace.Defined, function (event) {
            return state.risk = 16;
        }, _events2.default.Game.RiskUpdated, function (event) {
            return state.risk = event.risk;
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpeechEvent = exports.RiskEvent = exports.GameOverEvent = exports.ScoreEvent = exports.PlayerEvent = exports.CardRequestEvent = exports.CardEvent = undefined;

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _domain = __webpack_require__(12);

var _card = __webpack_require__(3);

var _card2 = _interopRequireDefault(_card);

var _player = __webpack_require__(13);

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

var GameOverEvent = exports.GameOverEvent = _fiber2.default.defineEventType({
    winner: String,
    message: String
});

var RiskEvent = exports.RiskEvent = _fiber2.default.defineEventType({
    risk: Number
});

var SpeechEvent = exports.SpeechEvent = _fiber2.default.defineEventType({
    transcript: String
});

/***/ }),
/* 12 */
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Optional = exports.Optional = function Optional(value) {
  return { $isOptional: true, value: value };
};
Optional.from = function (obj) {
  return obj.$isOptional ? [true, obj.value] : [false, obj];
};

var Mixed = exports.Mixed = function Mixed() {
  _classCallCheck(this, Mixed);
};

/***/ })
/******/ ]);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _namespace = __webpack_require__(2);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardSpace = _fiber2.default.NameSpace.create('data/cards');

CardSpace.defineState({
    cards: function cards(state) {
        return [_fiber2.default.NameSpace.Defined, function (event) {
            return state.cards = {};
        }, _events2.default.Card.Cleanup, function (event) {
            return state.cards = {};
        }, _events2.default.Card.ServedFor('player'), function (_ref) {
            var card = _ref.card;
            return updateCards('player', card, state);
        }, _events2.default.Card.ServedFor('dealer'), function (_ref2) {
            var card = _ref2.card;
            return updateCards('dealer', card, state);
        }];
    }
});

function updateCards(recipient, card, state) {
    (state.cards[recipient] || (state.cards[recipient] = [])).push(card);
}

exports.default = CardSpace;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _flows = __webpack_require__(4);

var _flows2 = _interopRequireDefault(_flows);

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
            }, _events2.default.Game.EndOfRound, function (event) {
                return _this2.endOfRound();
            });
        }
    }, {
        key: 'initGame',
        value: function initGame() {
            this.on(_namespace2.default.Cards).trigger(new _events2.default.Card.Cleanup());

            this.on(_flows2.default.CardFor('dealer')).trigger(new _events2.default.Card.Request('dealer', _card2.default.Reversed));
            this.on(_flows2.default.CardFor('dealer')).trigger(new _events2.default.Card.Request('dealer'));

            this.on(_flows2.default.CardFor('player')).trigger(new _events2.default.Card.Request('player'));
            this.on(_flows2.default.CardFor('player')).trigger(new _events2.default.Card.Request('player'));
        }
    }, {
        key: 'checkScores',
        value: function checkScores() {
            var scores = _namespace2.default.Game.state.scores;
            var cards = _namespace2.default.Cards.state.cards;

            if (scores.player == 21 && cards.player.length == 2) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("player", "BlackJack!!!!"));
            } else if (scores.player > 21) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("dealer", "Better luck next time!"));
            }
        }
    }, {
        key: 'callDealerCard',
        value: function callDealerCard() {
            var _this3 = this;

            setTimeout(function () {
                _this3.on(_flows2.default.CardFor('dealer')).trigger(new _events2.default.Card.Request('dealer')).then(function (afterScoreUpdated) {
                    _this3.on(_namespace2.default.Game).trigger(new _events2.default.Game.EndOfRound());
                });
            }, 500);
        }
    }, {
        key: 'endOfRound',
        value: function endOfRound() {
            var scores = _namespace2.default.Game.state.scores;
            var cards = _namespace2.default.Cards.state.cards;

            if (scores.dealer < _namespace2.default.Game.state.risk) {
                return this.callDealerCard();
            }
            if (scores.dealer == 21 && cards.dealer.length == 2) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("dealer", "Oops..."));
            } else if (scores.dealer > 21) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("player", "Dealer was unlucky."));
            } else if (scores.player > 21) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("dealer", "Better luck next time!"));
            } else if (scores.player >= scores.dealer) {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("player", "Good game!"));
            } else {
                this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Over("dealer", "Bad luck..."));
            }
        }
    }]);

    return GameComponent;
}(_fiber2.default.DataComponent);

exports.default = GameComponent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _cardHolder = __webpack_require__(5);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _cardHand = __webpack_require__(6);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _dealer = __webpack_require__(22);

var _dealer2 = _interopRequireDefault(_dealer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealerComponent = function (_CardHolderBaseCompon) {
    _inherits(DealerComponent, _CardHolderBaseCompon);

    function DealerComponent() {
        _classCallCheck(this, DealerComponent);

        return _possibleConstructorReturn(this, (DealerComponent.__proto__ || Object.getPrototypeOf(DealerComponent)).apply(this, arguments));
    }

    _createClass(DealerComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            _get(DealerComponent.prototype.__proto__ || Object.getPrototypeOf(DealerComponent.prototype), 'listen', this).call(this);
            this.on(_namespace2.default.Cards).listen(_events2.default.Card.ServedFor('dealer'), function (event) {
                return _this2.update(event);
            });
            this.on(_namespace2.default.Game).listen(_events2.default.Game.EndOfRound, function (event) {
                return _this2.flipCard();
            });

            this.ui('[type=range]').listen('change', function (event) {
                return _this2.changeRisk(event.target);
            });

            _cardHand2.default.attachTo(this.view.querySelector('cards'), 'dealer');
        }
    }, {
        key: 'update',
        value: function update(_ref) {
            var card = _ref.card,
                flow = _ref.flow;

            this.addCard(card);
            this.on(flow || _namespace2.default.Game).trigger(new _events2.default.Game.ScoreUpdated('dealer', this.score));
        }
    }, {
        key: 'flipCard',
        value: function flipCard() {
            var card = this.view.querySelector('cards .back');
            card && (card.className = card.className.replace(/(back-|back)/g, ''));
        }
    }, {
        key: 'changeRisk',
        value: function changeRisk(_ref2) {
            var value = _ref2.value;

            this.on(_namespace2.default.Game).trigger(new _events2.default.Game.RiskUpdated(value));
        }
    }]);

    return DealerComponent;
}(_cardHolder2.default.withTemplate(_dealer2.default));

exports.default = DealerComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _card = __webpack_require__(18);

var _card2 = _interopRequireDefault(_card);

var _card3 = __webpack_require__(19);

var _card4 = _interopRequireDefault(_card3);

var _PatchIt = __webpack_require__(20);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = "<card var=\"card\" class=\"card\">\n    <span class=\"rank\" var=\"rank\"></span>\n    <span class=\"suit\" var=\"suit\"></span>\n</card>\n";

/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<h2>Dealer <input type=\"range\" min=\"10\" max=\"20\" list=\"tickmarks\" value=\"16\" title=\"risk\"> </h2>\n<cards></cards>\n<datalist id=\"tickmarks\">\n    <option value=\"10\" label=\"10\">\n    <option value=\"11\">\n    <option value=\"12\">\n    <option value=\"13\">\n    <option value=\"14\">\n    <option value=\"15\">\n    <option value=\"16\">\n    <option value=\"17\">\n    <option value=\"18\">\n    <option value=\"19\">\n    <option value=\"20\" label=\"20\">\n</datalist>\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _flows = __webpack_require__(4);

var _flows2 = _interopRequireDefault(_flows);

var _cardHolder = __webpack_require__(5);

var _cardHolder2 = _interopRequireDefault(_cardHolder);

var _cardHand = __webpack_require__(6);

var _cardHand2 = _interopRequireDefault(_cardHand);

var _player = __webpack_require__(24);

var _player2 = _interopRequireDefault(_player);

var _player3 = __webpack_require__(25);

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

            _get(PlayerComponent.prototype.__proto__ || Object.getPrototypeOf(PlayerComponent.prototype), 'listen', this).call(this);
            this.on(_namespace2.default.Cards).listen(_events2.default.Card.ServedFor('player'), function (event) {
                return _this2.update(event);
            });
            this.on(_namespace2.default.Game).listen(_events2.default.Game.Reset, function (event) {
                return _this2.enableControls();
            }, _events2.default.Game.Over, function (event) {
                return _this2.disableControls();
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
        value: function update(_ref) {
            var card = _ref.card,
                flow = _ref.flow;

            this.addCard(card);
            this.view.querySelector('.score').innerHTML = this.score;
            this.on(flow || _namespace2.default.Game).trigger(new _events2.default.Game.ScoreUpdated('player', this.score));
        }
    }, {
        key: 'hit',
        value: function hit() {
            this.on(_flows2.default.CardFor('player')).trigger(new _events2.default.Card.Request('player'));
        }
    }, {
        key: 'stick',
        value: function stick() {
            this.disableControls();
            this.on(_namespace2.default.Game).trigger(new _events2.default.Game.EndOfRound());
        }
    }, {
        key: 'enableControls',
        value: function enableControls() {
            this.view.querySelectorAll('button').forEach(function (btn) {
                btn.disabled = false;
            });
        }
    }, {
        key: 'disableControls',
        value: function disableControls() {
            this.view.querySelectorAll('button').forEach(function (btn) {
                btn.disabled = true;
            });
        }
    }]);

    return PlayerComponent;
}(_cardHolder2.default.withTemplate(_player2.default));

exports.default = PlayerComponent;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<h2>Playa : <span class=\"score\"></span></h2>\n<cards></cards>\n<controls>\n    <button class=\"hit\">Hit</button>\n    <button class=\"stick\">Stick</button>\n</controls>\n";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _gameConsole = __webpack_require__(27);

var _gameConsole2 = _interopRequireDefault(_gameConsole);

var _gameConsole3 = __webpack_require__(28);

var _gameConsole4 = _interopRequireDefault(_gameConsole3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameConsoleComponent = function (_Fiber$UIComponent$wi) {
    _inherits(GameConsoleComponent, _Fiber$UIComponent$wi);

    function GameConsoleComponent() {
        _classCallCheck(this, GameConsoleComponent);

        return _possibleConstructorReturn(this, (GameConsoleComponent.__proto__ || Object.getPrototypeOf(GameConsoleComponent)).apply(this, arguments));
    }

    _createClass(GameConsoleComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Game).listen(_events2.default.Game.Reset, function (event) {
                return _this2.show('');
            }, _events2.default.Game.Over, function (event) {
                return _this2.show(event.message);
            });

            this.ui('.reset').listen('click', function (event) {
                return _this2.newGame();
            });
        }
    }, {
        key: 'newGame',
        value: function newGame() {
            this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Reset());
        }
    }, {
        key: 'show',
        value: function show(message) {
            this.view.querySelector('message').innerHTML = message;
        }
    }]);

    return GameConsoleComponent;
}(_fiber2.default.UIComponent.withTemplate(_gameConsole2.default));

exports.default = GameConsoleComponent;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<game-console>\n  <button class=\"reset\">New Game</button>\n  <button onclick=\"speechSynthesis.speak(new SpeechSynthesisUtterance('hello world'))\">speak</button>\n  <message></message>\n</game-console>\n";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentatorComponent = function (_Fiber$DataComponent) {
    _inherits(CommentatorComponent, _Fiber$DataComponent);

    function CommentatorComponent() {
        _classCallCheck(this, CommentatorComponent);

        var _this = _possibleConstructorReturn(this, (CommentatorComponent.__proto__ || Object.getPrototypeOf(CommentatorComponent)).call(this));

        _this.synth = window.speechSynthesis;
        _this.reversed = null;
        _this.roundsCompleted = 0;
        _this.gameOver = false;
        return _this;
    }

    _createClass(CommentatorComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Cards).listen(_events2.default.Card.Cleanup, function (event) {
                return _this2.clearCards();
            },
            // Events.Card.ServedFor('player'), event => this.addCard('player', event.card),
            _events2.default.Card.ServedFor('dealer'), function (event) {
                return _this2.addCard('dealer', event.card);
            });

            this.on(_namespace2.default.Game).listen(_events2.default.Game.ScoreUpdated, function (event) {
                return _this2.tellScore(event);
            }, _events2.default.Game.Over, function (event) {
                return _this2.sayOver(event);
            }, _events2.default.Game.EndOfRound, function (event) {
                return _this2.endOfRound();
            });

            this.on(_namespace2.default.Speech).listen(_events2.default.Speech.Say, function (event) {
                return _this2.say(event.transcript);
            }, _events2.default.Speech.TellScore, function (event) {
                return _this2.tellScore({});
            });

            this.speaking = false;
            global.setInterval(function () {
                if (_this2.synth.speaking && !_this2.speaking) {
                    _this2.speaking = true;
                    _this2.on(_namespace2.default.Speech).trigger(new _events2.default.Speech.Speaking());
                } else if (!_this2.synth.speaking && _this2.speaking) {
                    _this2.speaking = false;
                    _this2.on(_namespace2.default.Speech).trigger(new _events2.default.Speech.Listening());
                }
            }, 100);
        }
    }, {
        key: 'clearCards',
        value: function clearCards() {
            this.synth.cancel();
            this.gameOver = false;
        }
    }, {
        key: 'endOfRound',
        value: function endOfRound() {
            if (this.reversed) {
                this.addCard('dealer', this.reversed.flip());
                this.reversed = null;
            }
        }
    }, {
        key: 'sayOver',
        value: function sayOver(_ref) {
            var winner = _ref.winner,
                message = _ref.message;

            this.gameOver = true;

            if (winner == 'player') {
                this.say('You won with ' + _namespace2.default.Game.state.scores['player'] + ' points against ' + _namespace2.default.Game.state.scores['dealer'], 1, 1.3);
            } else if (this.reversed && _namespace2.default.Game.state.scores['player'] > 21) {
                this.say('');
                this.say('');
            } else {
                this.say('Dealer wins this round with ' + _namespace2.default.Game.state.scores['dealer'] + ' points against your ' + _namespace2.default.Game.state.scores['player']);
            }
            this.say(message);
        }
    }, {
        key: 'addCard',
        value: function addCard(name, card) {
            if (this.gameOver) return;

            if (card.reversed) {
                this.reversed = card;
                return;
            }

            if (name == 'player' && _namespace2.default.Cards.state.cards[name] && _namespace2.default.Cards.state.cards[name].length > 2) {
                this.shout(this.describeCard(card));
            } else if (name == 'dealer' && _namespace2.default.Cards.state.cards[name].length > 2) {
                this.shout(this.describeCard(card));
            }
        }
    }, {
        key: 'tellScore',
        value: function tellScore(_ref2) {
            var recipient = _ref2.recipient,
                score = _ref2.score,
                flow = _ref2.flow;

            if (recipient && recipient != 'player') return;

            if (flow) {
                this.addCard('player', flow.history[1].card);
            }

            if (_namespace2.default.Cards.state.cards.player.length == 2) {
                this.sayCards();
            }

            if (_namespace2.default.Cards.state.cards.player.length > 1 && score <= 21) {
                this.say('You have ' + _namespace2.default.Game.state.scores['player'] + ' points');
            }
        }
    }, {
        key: 'sayCards',
        value: function sayCards() {
            this.say('Dealer has ' + this.describeCard(_namespace2.default.Cards.state.cards.dealer[1]));
            this.say('And You have ' + this.describeCard(_namespace2.default.Cards.state.cards.player[0]) + ' and ' + this.describeCard(_namespace2.default.Cards.state.cards.player[1]));

            // if(!this.roundsCompleted++) {
            //     this.say('Say "hit" to get a new card or  "stick" to end the round');
            // }
        }
    }, {
        key: 'describeCard',
        value: function describeCard(card) {
            if (card.reversed) {
                return 'a card face down';
            }

            var rankNames = {
                j: 'jack', q: 'queen', k: 'king', a: 'ace'
            };

            var suit = card.suit === 'diams' ? 'diamonds' : card.suit;

            return (rankNames[card.rank] || card.rank) + ' of ' + suit;
        }
    }, {
        key: 'say',
        value: function say(txt) {
            var _this3 = this;

            var rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.2;
            var volume = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            return new Promise(function (resolve, reject) {
                var sense = new SpeechSynthesisUtterance(txt);
                sense.rate = rate;
                sense.volume = volume;
                sense.onend = resolve();
                _this3.synth.speak(sense);
            });
        }
    }, {
        key: 'shout',
        value: function shout(txt) {
            return this.say(txt, 1.5, 1.3);
        }
    }]);

    return CommentatorComponent;
}(_fiber2.default.DataComponent);

exports.default = CommentatorComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fiber = __webpack_require__(0);

var _fiber2 = _interopRequireDefault(_fiber);

var _namespace = __webpack_require__(2);

var _namespace2 = _interopRequireDefault(_namespace);

var _events = __webpack_require__(1);

var _events2 = _interopRequireDefault(_events);

var _flows = __webpack_require__(4);

var _flows2 = _interopRequireDefault(_flows);

var _inGame = __webpack_require__(32);

var _outGame = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpeechComponent = function (_Fiber$DataComponent) {
    _inherits(SpeechComponent, _Fiber$DataComponent);

    function SpeechComponent() {
        _classCallCheck(this, SpeechComponent);

        var _this = _possibleConstructorReturn(this, (SpeechComponent.__proto__ || Object.getPrototypeOf(SpeechComponent)).call(this));

        _this.recognition = new (webkitSpeechRecognition || SpeechRecognition)();

        _this.recognition.continuous = true;
        _this.recognition.interimResults = false;

        _this.recognition.onresult = function (event) {
            return _this.onCommand(event);
        };

        _this.listening = false;
        _this.recognition.onend = function () {
            if (_this.listening) {
                _this.start();
            }
        };

        _this.question = null;

        _this.inGame = new _inGame.InGame(_inGame.HIT, function () {
            return _this.on(_flows2.default.CardFor('player')).trigger(new _events2.default.Card.Request('player'));
        }, _inGame.STICK, function () {
            return _this.on(_namespace2.default.Game).trigger(new _events2.default.Game.EndOfRound());
        }, _inGame.SCORE, function () {
            return _this.on(_namespace2.default.Speech).trigger(new _events2.default.Speech.TellScore());
        }, _inGame.NEW_GAME, function () {
            return _this.newGame();
        }, _inGame.YES, function () {
            return _this.confirm(_inGame.YES);
        }, _inGame.NO, function () {
            return _this.confirm(_inGame.NO);
        }, _inGame.NEVERMIND, function () {
            return _this.inGame.reset();
        });

        _this.outGame = new _outGame.OutGame(_outGame.NEW_GAME, function () {
            return _this.on(_namespace2.default.Game).trigger(new _events2.default.Game.Reset());
        });

        _this.activeListener = _this.inGame;
        return _this;
    }

    _createClass(SpeechComponent, [{
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            this.on(_namespace2.default.Speech).listen(_events2.default.Speech.Listening, function (event) {
                return _this2.start();
            }, _events2.default.Speech.Speaking, function (event) {
                return _this2.stop();
            });
            this.on(_namespace2.default.Game).listen(_events2.default.Game.Reset, function (event) {
                _this2.activeListener = _this2.inGame;console.log('in');
            }, _events2.default.Game.Over, function (event) {
                _this2.activeListener = _this2.outGame;console.log('out');
            });
        }
    }, {
        key: 'newGame',
        value: function newGame() {
            this.question = new _events2.default.Speech.Say('are you sure?');
            this.on(_flows2.default.Confirm(_events2.default.Game.Reset.on(_namespace2.default.Game))).trigger(this.question);
        }
    }, {
        key: 'confirm',
        value: function confirm(answer) {
            if (this.question && answer === _inGame.YES) {
                var _question$flow$steps$ = this.question.flow.steps.pop(),
                    event = _question$flow$steps$.event,
                    namespace = _question$flow$steps$.namespace;

                this.question = null;

                this.on(namespace).trigger(new event());
            } else {
                this.question = null;
            }
        }
    }, {
        key: 'start',
        value: function start() {
            console.log('♪ listening');
            this.listening = true;
            this.recognition.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            console.log('♪ speaking');
            this.listening = false;
            this.recognition.stop();
        }
    }, {
        key: 'onCommand',
        value: function onCommand(speechEvent) {
            if (!this.activeListener.input(speechEvent)) {
                this.on(_namespace2.default.Speech).trigger(new _events2.default.Speech.Say("didn't catch that"));
            }
        }
    }]);

    return SpeechComponent;
}(_fiber2.default.DataComponent);

exports.default = SpeechComponent;


var commands = [{
    regex: /new.+(game|one|round)/,
    namespace: _flows2.default.Confirm(_events2.default.Game.Reset.on(_namespace2.default.Game)),
    event: function event() {
        Question = new _events2.default.Speech.Say('are you sure?');
        return Question;
    }
}, {
    regex: /yes|yep|yeah/,
    namespace: _namespace2.default.Game,
    event: function event() {
        if (Question) {
            var ActionEvent = Question.flow.steps.pop().event;
            Question = null;

            return new ActionEvent();
        } else {
            return false;
        }
    }
}, {
    regex: /no|nope|nah/,
    namespace: _namespace2.default.Speech,
    event: function event() {
        Question = null;

        return new _events2.default.Speech.Say('Ok.');
    }
}];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InGame = exports.NEVERMIND = exports.NO = exports.YES = exports.SCORE = exports.STICK = exports.HIT = exports.NEW_GAME = undefined;

var _commandListener = __webpack_require__(7);

var NEW_GAME = exports.NEW_GAME = 'NEW_GAME';
var HIT = exports.HIT = 'HIT';
var STICK = exports.STICK = 'STICK';
var SCORE = exports.SCORE = 'SCORE';
var YES = exports.YES = 'YES';
var NO = exports.NO = 'NO';
var NEVERMIND = exports.NEVERMIND = 'NEVERMIND';

var InGame = exports.InGame = _commandListener.CommandListener.withCommands((0, _commandListener.AllOf)('new', 'game'), NEW_GAME, (0, _commandListener.AllOf)('new', 'one'), (0, _commandListener.AllOf)('new', 'card'), (0, _commandListener.AllOf)('hit'), HIT, (0, _commandListener.AllOf)('stay'), (0, _commandListener.AllOf)('stick'), STICK, (0, _commandListener.AllOf)('my', 'score'), SCORE, (0, _commandListener.AnyOf)('yes', 'yeah', 'yup'), YES, (0, _commandListener.AnyOf)('no', 'nope'), NO, (0, _commandListener.AllOf)('forget', 'it'), (0, _commandListener.AllOf)('never', 'mind'), (0, _commandListener.AnyOf)('whatever'), NEVERMIND);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutGame = exports.NEW_GAME = undefined;

var _commandListener = __webpack_require__(7);

var NEW_GAME = exports.NEW_GAME = 'NEW_GAME';

var OutGame = exports.OutGame = _commandListener.CommandListener.withCommands((0, _commandListener.AllOf)('new', 'game'), (0, _commandListener.AllOf)('again'), NEW_GAME);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);