!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RxScriptLoader=e():t.RxScriptLoader=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function i(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function o(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout(function(){throw t})}var h={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},a=Array.isArray||function(t){return t&&"number"==typeof t.length};function f(t){return null!=t&&"object"==typeof t}var l,p={e:{}};function d(){try{return l.apply(this,arguments)}catch(t){return p.e=t,p}}function b(t){return l=t,d}function y(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}y.prototype=Object.create(Error.prototype);var v=y,_=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var r=this._parent,n=this._parents,i=this._unsubscribe,s=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var u=-1,c=n?n.length:0;r;)r.remove(this),r=++u<c&&n[u]||null;if(o(i))b(i).call(this)===p&&(e=!0,t=t||(p.e instanceof v?w(p.e.errors):[p.e]));if(a(s))for(u=-1,c=s.length;++u<c;){var h=s[u];if(f(h))if(b(h.unsubscribe).call(h)===p){e=!0,t=t||[];var l=p.e;l instanceof v?t=t.concat(w(l.errors)):t.push(l)}}if(e)throw new v(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var r=e;switch(typeof e){case"function":r=new t(e);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.prototype._addParent=function(t){var e=this._parent,r=this._parents;e&&e!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function w(t){return t.reduce(function(t,e){return t.concat(e instanceof v?e.errors:e)},[])}var m="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),x=function(t){function e(r,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,o._parentSubscription=null,arguments.length){case 0:o.destination=h;break;case 1:if(!r){o.destination=h;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new S(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new S(o,r,n,i)}return o}return i(e,t),e.prototype[m]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},e}(_),S=function(t){function e(e,r,n,i){var s,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return o(r)?s=r:r&&(s=r.next,n=r.error,i=r.complete,r!==h&&(o((c=Object.create(r)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=n,u._complete=i,u}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=u.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;c(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(c(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(x);var E="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(){}function T(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return I(t)}function I(t){return t?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:g}var N=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,i=function(t,e,r){if(t){if(t instanceof x)return t;if(t[m])return t[m]()}return t||e||r?new x(t,e,r):new x(h)}(t,e,r);if(n?n.call(i,this.source):i.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),u.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof x?n:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=O(e))(function(e,n){var i;i=r.subscribe(function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}},n,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[E]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:I(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=O(t))(function(t,r){var n;e.subscribe(function(t){return n=t},function(t){return r(t)},function(){return t(n)})})},t.create=function(e){return new t(e)},t}();function O(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function j(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}j.prototype=Object.create(Error.prototype);var P=j,A=function(t){function e(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return i(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(_),V=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return i(e,t),e}(x),k=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return i(e,t),e.prototype[m]=function(){return new V(this)},e.prototype.lift=function(t){var e=new Y(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new P;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].next(t)},e.prototype.error=function(t){if(this.closed)throw new P;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),i=0;i<r;i++)n[i].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new P;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new P;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new P;return this.hasError?(t.error(this.thrownError),_.EMPTY):this.isStopped?(t.complete(),_.EMPTY):(this.observers.push(t),new A(this,t))},e.prototype.asObservable=function(){var t=new N;return t.source=this,t},e.create=function(t,e){return new Y(t,e)},e}(N),Y=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return i(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):_.EMPTY},e}(k),M=function(t){function e(e){var r=t.call(this)||this;return r._value=e,r}return i(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return r&&!r.closed&&e.next(this._value),r},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new P;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(k);function C(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var D=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function H(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var F=H();var W=function(t){return function(e){for(var r=0,n=t.length;r<n&&!e.closed;r++)e.next(t[r]);e.closed||e.complete()}};function U(t,e){return new N(e?function(r){var n=new _,i=0;return n.add(e.schedule(function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()})),n}:W(t))}var q=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,c),e}};var z=function(t){return function(e){for(var r=t[F]();;){var n=r.next();if(n.done){e.complete();break}if(e.next(n.value),e.closed)break}return"function"==typeof r.return&&e.add(function(){r.return&&r.return()}),e}};var L=function(t){return function(e){var r=t[E]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(e)}};var R=function(t){if(t instanceof N)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[E])return L(t);if(D(t))return W(t);if(C(t))return q(t);if(t&&"function"==typeof t[F])return z(t);var e=f(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function B(t,e){if(!e)return t instanceof N?t:new N(R(t));if(null!=t){if(function(t){return t&&"function"==typeof t[E]}(t))return function(t,e){return new N(e?function(r){var n=new _;return n.add(e.schedule(function(){var i=t[E]();n.add(i.subscribe({next:function(t){n.add(e.schedule(function(){return r.next(t)}))},error:function(t){n.add(e.schedule(function(){return r.error(t)}))},complete:function(){n.add(e.schedule(function(){return r.complete()}))}}))})),n}:L(t))}(t,e);if(C(t))return function(t,e){return new N(e?function(r){var n=new _;return n.add(e.schedule(function(){return t.then(function(t){n.add(e.schedule(function(){r.next(t),n.add(e.schedule(function(){return r.complete()}))}))},function(t){n.add(e.schedule(function(){return r.error(t)}))})})),n}:q(t))}(t,e);if(D(t))return U(t,e);if(function(t){return t&&"function"==typeof t[F]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new N(e?function(r){var n,i=new _;return i.add(function(){n&&"function"==typeof n.return&&n.return()}),i.add(e.schedule(function(){n=t[F](),i.add(e.schedule(function(){if(!r.closed){var t,e;try{var i=n.next();t=i.value,e=i.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}}))})),i}:z(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var G=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(x),$=function(t){function e(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(x);function J(t,e,r,n,i){if(void 0===i&&(i=new $(t,r,n)),!i.closed)return R(e)(i)}function K(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new Q(t,e))}}var Q=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new X(t,this.project,this.thisArg))},t}(),X=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return i(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(x);var Z=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new tt(t,this.project))},t}(),tt=function(t){function e(e,r){var n=t.call(this,e)||this;return n.project=r,n.index=0,n}return i(e,t),e.prototype._next=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,r)},e.prototype._innerSub=function(t,e,r){var n=this.innerSubscription;n&&n.unsubscribe();var i=new $(this,void 0,void 0);this.destination.add(i),this.innerSubscription=J(this,t,e,r,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e}(G);var et=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new rt(t,this.predicate,this.thisArg))},t}(),rt=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.predicate=r,i.thisArg=n,i.count=0,i}return i(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},e}(x);var nt=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new it(t,this.project,this.concurrent))},t}(),it=function(t){function e(e,r,n){void 0===n&&(n=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=r,i.concurrent=n,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return i(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,r)},e.prototype._innerSub=function(t,e,r){var n=new $(this,void 0,void 0);this.destination.add(n),J(this,t,e,r,n)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(G);function ot(t){return t}function st(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,r,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof r?function(i){return i.pipe(t(function(t,n){return B(e(t,n)).pipe(K(function(e,i){return r(t,e,n,i)}))},n))}:("number"==typeof r&&(n=r),function(t){return t.lift(new nt(e,n))})}(ot,t)}function ut(t,e){var r=!1;return arguments.length>=2&&(r=!0),function(n){return n.lift(new ct(t,e,r))}}var ct=function(){function t(t,e,r){void 0===r&&(r=!1),this.accumulator=t,this.seed=e,this.hasSeed=r}return t.prototype.call=function(t,e){return e.subscribe(new ht(t,this.accumulator,this.seed,this.hasSeed))},t}(),ht=function(t){function e(e,r,n,i){var o=t.call(this,e)||this;return o.accumulator=r,o._seed=n,o.hasSeed=i,o.index=0,o}return i(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,r=this.index++;try{e=this.accumulator(this.seed,t,r)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(x);function at(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}at.prototype=Object.create(Error.prototype);var ft=at,lt=new N(function(t){return t.complete()});function pt(t){return t?function(t){return new N(function(e){return t.schedule(function(){return e.complete()})})}(t):lt}function dt(t){return function(e){return 0===t?pt():e.lift(new bt(t))}}var bt=function(){function t(t){if(this.total=t,this.total<0)throw new ft}return t.prototype.call=function(t,e){return e.subscribe(new yt(t,this.total))},t}(),yt=function(t){function e(e,r){var n=t.call(this,e)||this;return n.total=r,n.ring=new Array,n.count=0,n}return i(e,t),e.prototype._next=function(t){var e=this.ring,r=this.total,n=this.count++;e.length<r?e.push(t):e[n%r]=t},e.prototype._complete=function(){var t=this.destination,e=this.count;if(e>0)for(var r=this.count>=this.total?this.total:this.count,n=this.ring,i=0;i<r;i++){var o=e++%r;t.next(n[o])}t.complete()},e}(x);var vt=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new _t(t,this.defaultValue))},t}(),_t=function(t){function e(e,r){var n=t.call(this,e)||this;return n.defaultValue=r,n.isEmpty=!0,n}return i(e,t),e.prototype._next=function(t){this.isEmpty=!1,this.destination.next(t)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(x);function wt(t,e){return arguments.length>=2?function(r){return T(ut(t,e),dt(1),(void 0===(n=e)&&(n=null),function(t){return t.lift(new vt(n))}))(r);var n}:function(e){return T(ut(function(e,r,n){return t(e,r,n+1)}),dt(1))(e)}}var mt=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n}return i(e,t),e.prototype.schedule=function(e,r){return void 0===r&&(r=0),r>0?t.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,r){return r>0||this.closed?t.prototype.execute.call(this,e,r):this._execute(e,r)},e.prototype.requestAsyncId=function(e,r,n){return void 0===n&&(n=0),null!==n&&n>0||null===n&&this.delay>0?t.prototype.requestAsyncId.call(this,e,r,n):e.flush(this)},e}(function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return i(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},e.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,r){return t.call(this)||this}return i(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(_))),xt=function(){function t(e,r){void 0===r&&(r=t.now),this.SchedulerAction=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},t.now=function(){return Date.now()},t}(),St=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e}(function(t){function e(r,n){void 0===n&&(n=xt.now);var i=t.call(this,r,function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return i(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},e}(xt)))(mt);function Et(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r,n=t[t.length-1];switch((r=n)&&"function"==typeof r.schedule?t.pop():n=void 0,t.length){case 0:return pt(n);case 1:return n?U(t,n):function(t){var e=new N(function(e){e.next(t),e.complete()});return e._isScalar=!0,e.value=t,e}(t[0]);default:return U(t,n)}}function gt(t){var e=t.error;t.subscriber.error(e)}var Tt=function(){function t(t,e,r){this.kind=t,this.value=e,this.error=r,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,r){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return r&&r()}},t.prototype.accept=function(t,e,r){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,r)},t.prototype.toObservable=function(){var t,e;switch(this.kind){case"N":return Et(this.value);case"E":return t=this.error,new N(e?function(r){return e.schedule(gt,0,{error:t,subscriber:r})}:function(e){return e.error(t)});case"C":return pt()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();var It=function(t){function e(e,r,n){void 0===n&&(n=0);var i=t.call(this,e)||this;return i.scheduler=r,i.delay=n,i}return i(e,t),e.dispatch=function(t){var e=t.notification,r=t.destination;e.observe(r),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new Nt(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(Tt.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(Tt.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(Tt.createComplete()),this.unsubscribe()},e}(x),Nt=function(){return function(t,e){this.notification=t,this.destination=e}}(),Ot=function(t){function e(e,r,n){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this)||this;return i.scheduler=n,i._events=[],i._infiniteTimeWindow=!1,i._bufferSize=e<1?1:e,i._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(i._infiniteTimeWindow=!0,i.next=i.nextInfiniteTimeWindow):i.next=i.nextTimeWindow,i}return i(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var r=this._events;r.push(e),r.length>this._bufferSize&&r.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new jt(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,r=this._infiniteTimeWindow,n=r?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=n.length;if(this.closed)throw new P;if(this.isStopped||this.hasError?e=_.EMPTY:(this.observers.push(t),e=new A(this,t)),i&&t.add(t=new It(t,i)),r)for(var s=0;s<o&&!t.closed;s++)t.next(n[s]);else for(s=0;s<o&&!t.closed;s++)t.next(n[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||St).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,r=this._windowTime,n=this._events,i=n.length,o=0;o<i&&!(t-n[o].time<r);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&n.splice(0,o),n},e}(k),jt=function(){return function(t,e){this.time=t,this.value=e}}();function Pt(t,e,r){return void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===e&&(e=Number.POSITIVE_INFINITY),function(n){return n.lift(function(t,e,r){var n,i,o=0,s=!1,u=!1;return function(c){o++,n&&!s||(s=!1,n=new Ot(t,e,r),i=c.subscribe({next:function(t){n.next(t)},error:function(t){s=!0,n.error(t)},complete:function(){u=!0,n.complete()}}));var h=n.subscribe(this);return function(){o--,h.unsubscribe(),i&&0===o&&u&&i.unsubscribe()}}}(t,e,r))}}class At{constructor(t){this._loadStatus=new M(!1),this._loadScripts$=null,this._loadScripts$=Vt(t)}load(){this._loadScripts$.subscribe(t=>void 0,t=>{this._loadStatus.next(!0)},()=>{this._loadStatus.next(!0)})}isLoaded(){return this._loadStatus.value}loadStatus(){return this._loadStatus.asObservable()}}const Vt=t=>{return kt().pipe(function t(e,r){return"function"==typeof r?function(n){return n.pipe(t(function(t,n){return B(e(t,n)).pipe(K(function(e,i){return r(t,e,n,i)}))}))}:function(t){return t.lift(new Z(e))}}(e=>B(t).pipe(function(t,e){return function(r){return r.lift(new et(t,e))}}(t=>-1==e.indexOf(t.src)),K(t=>Yt(t)))),st(),wt((t,e)=>[...t,e],[]),Pt(1))},kt=()=>B(document.querySelectorAll("script")).pipe(K(t=>t.src),wt((t,e)=>(t.push(e),t),[])),Yt=t=>N.create(e=>{const r=document.createElement("script");return document.head.appendChild(r),r.onload=(()=>{e.next({src:t.src,success:!0}),e.complete()}),r.onerror=(()=>{e.next({src:t.src,success:!1}),e.complete()}),r.src=t.src,r.async=void 0!==t.async&&t.async,r.defer=void 0!==t.defer&&t.defer,()=>{delete r.onload,delete r.onerror}});r.d(e,"loadScripts",function(){return Vt}),r.d(e,"getDocumentScripts",function(){return kt}),r.d(e,"ScriptLoader",function(){return At})}])});
//# sourceMappingURL=rx-script-loader.js.map