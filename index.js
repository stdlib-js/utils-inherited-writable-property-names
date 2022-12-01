// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedWritablePropertyNames=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[h],r=d(t,h);try{t[h]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[h]=e:delete t[h],n}:function(t){return v.call(t)},m=Number,O=m.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof m||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var L,C=void 0!==Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyDescriptor;L=C?function(t,r){var e;return null==t||void 0===(e=G(t,r))?null:e}:function(t,r){return d(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var Y=L;function D(t,r){var e=Y(t,r);return null!==e&&(!0===e.writable||"function"==typeof e.set)}var M=void 0!==Object.getOwnPropertyNames,W=Object.getOwnPropertyNames;function X(t){return Object.keys(Object(t))}var H,R=void 0!==Object.keys;function U(t){return"[object Arguments]"===j(t)}H=function(){return U(arguments)}();var q=H;function z(t){return"string"==typeof t}var J=String.prototype.valueOf;var K=b();function Q(t){return"object"==typeof t&&(t instanceof String||(K?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function Z(t){return z(t)||Q(t)}function $(t){return t!=t}function tt(t){return s(t)&&$(t)}function rt(t){return _(t)&&$(t.valueOf())}function et(t){return tt(t)||rt(t)}p(Z,"isPrimitive",z),p(Z,"isObject",Q),p(et,"isPrimitive",tt),p(et,"isObject",rt);var nt=Object.prototype.propertyIsEnumerable;var ot,ut=!nt.call("beep","0");function it(t,r){var e;return null!=t&&(!(e=nt.call(t,r))&&ut&&Z(t)?!tt(r=+r)&&N(r)&&r>=0&&r<t.length:e)}ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var ct,ft=ot;ct=q?U:function(t){return null!==t&&"object"==typeof t&&!ft(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!it(t,"callee")};var lt=ct,at=Array.prototype.slice;function pt(t){return null!==t&&"object"==typeof t}var st=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ft(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(pt);p(pt,"isObjectLikeArray",st);var yt=it((function(){}),"prototype"),bt=!it({toString:null},"toString");function vt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function gt(t,r,e){var n,o;if(!vt(t)&&!z(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(et(r)){for(;o<n;o++)if(et(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var dt=/./;function ht(t){return"boolean"==typeof t}var jt=Boolean.prototype.toString;var mt=b();function Ot(t){return"object"==typeof t&&(t instanceof Boolean||(mt?function(t){try{return jt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function wt(t){return ht(t)||Ot(t)}function _t(){return new Function("return this;")()}p(wt,"isPrimitive",ht),p(wt,"isObject",Ot);var St="object"==typeof self?self:null,Pt="object"==typeof window?window:null,Et="object"==typeof global?global:null;var It=function(t){if(arguments.length){if(!ht(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return _t()}if(St)return St;if(Pt)return Pt;if(Et)return Et;throw new Error("unexpected error. Unable to resolve global object.")}(),Tt=It.document&&It.document.childNodes,At=Int8Array;function Nt(){return/^\s*function\s*([^(]*)/i}var kt=/^\s*function\s*([^(]*)/i;function xt(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=kt.exec(n.toString()))return r[1]}return pt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(Nt,"REGEXP",kt);var Bt="function"==typeof dt||"object"==typeof At||"function"==typeof Tt?function(t){return xt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?xt(t).toLowerCase():r};function Vt(t){return t.constructor&&t.constructor.prototype===t}var Ft=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Lt="undefined"==typeof window?void 0:window;var Ct=function(){var t;if("undefined"===Bt(Lt))return!1;for(t in Lt)try{-1===gt(Ft,t)&&d(Lt,t)&&null!==Lt[t]&&"object"===Bt(Lt[t])&&Vt(Lt[t])}catch(t){return!0}return!1}(),Gt="undefined"!=typeof window;var Yt,Dt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Yt=R?function(){return 2!==(X(arguments)||"").length}(1,2)?function(t){return lt(t)?X(at.call(t)):X(t)}:X:function(t){var r,e,n,o,u,i,c;if(o=[],lt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!pt(t))return o;e=yt&&n}for(u in t)e&&"prototype"===u||!d(t,u)||o.push(String(u));if(bt)for(r=function(t){if(!1===Gt&&!Ct)return Vt(t);try{return Vt(t)}catch(t){return!1}}(t),c=0;c<Dt.length;c++)i=Dt[c],r&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Mt,Wt=Yt;Mt=M?function(t){return W(Object(t))}:function(t){return Wt(Object(t))};var Xt=Mt;var Ht,Rt,Ut=Object.getPrototypeOf;Rt=Object.getPrototypeOf,Ht="function"===Bt(Rt)?Ut:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var qt=Ht;function zt(t){return null==t?null:(t=Object(t),qt(t))}function Jt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e){var n,o,u,i,c,f,l,a;if(arguments.length>1){if(!B(e))throw new TypeError(Jt("0kI4I",e));c=e}else c=t;if(null==r)return[];for(u=zt(r),n=[],o={},f=1;u&&f<=c;){for(i=Xt(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&D(u,l)&&n.push(l),o[l]=!0;u=zt(u),f+=1}return n}}));
//# sourceMappingURL=index.js.map
