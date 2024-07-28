// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedWritablePropertyNames=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=Array.isArray;function S(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,o,a,c,l,f,s,p,g,b,d;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,b=n.padRight,d=void 0,(d=g-p.length)<0?p:p=b?p+m(d):m(d)+p)),c+=n.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var P,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var B=P;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return W&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof M?M.toStringTag:"";var D=G()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},H=Number,z=H.prototype.toString;var q=G();function J(r){return"object"==typeof r&&(r instanceof H||(q?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function K(r){return R(r)||J(r)}L(K,"isPrimitive",R),L(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=H.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function ir(r){return R(r)&&nr(r)}function or(r){return J(r)&&nr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>0}function cr(r){return or(r)&&r.valueOf()>0}function lr(r){return ur(r)||cr(r)}L(ar,"isPrimitive",ir),L(ar,"isObject",or),L(lr,"isPrimitive",ur),L(lr,"isObject",cr);var fr,sr=void 0!==Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptor;fr=sr?function(r,e){var t;return null==r||void 0===(t=pr(r,e))?null:t}:function(r,e){return Z(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var gr=fr;function br(r,e){var t=gr(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}var dr=void 0!==Object.getOwnPropertyNames,yr=Object,hr=yr.getOwnPropertyNames;function vr(r){return Object.keys(Object(r))}var wr,mr=void 0!==Object.keys;function jr(r){return"[object Arguments]"===D(r)}wr=function(){return jr(arguments)}();var Or=wr;function Sr(r){return"string"==typeof r}var _r=String.prototype.valueOf;var Er=G();function Tr(r){return"object"==typeof r&&(r instanceof String||(Er?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function kr(r){return Sr(r)||Tr(r)}function xr(r){return r!=r}function Ir(r){return R(r)&&xr(r)}function Pr(r){return J(r)&&xr(r.valueOf())}function Ar(r){return Ir(r)||Pr(r)}L(kr,"isPrimitive",Sr),L(kr,"isObject",Tr),L(Ar,"isPrimitive",Ir),L(Ar,"isObject",Pr);var Vr=Object.prototype.propertyIsEnumerable;var Fr,Nr=!Vr.call("beep","0");function Cr(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&Nr&&kr(r)?!Ir(e=+e)&&ir(e)&&e>=0&&e<r.length:t)}Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var $r,Br=Fr;$r=Or?jr:function(r){return null!==r&&"object"==typeof r&&!Br(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&Z(r,"callee")&&!Cr(r,"callee")};var Lr=$r,Rr=Array.prototype.slice;function Wr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Wr);L(Wr,"isObjectLikeArray",Gr);var Ur=Cr((function(){}),"prototype"),Xr=!Cr({toString:null},"toString"),Zr=9007199254740991;function Mr(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&tr(o.length)&&o.length>=0&&o.length<=Zr||Sr(r)))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ir(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ar(e)){for(;i<n;i++)if(Ar(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Yr=/./;function Dr(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString;var qr=G();function Jr(r){return"object"==typeof r&&(r instanceof Hr||(qr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function Kr(r){return Dr(r)||Jr(r)}L(Kr,"isPrimitive",Dr),L(Kr,"isObject",Jr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="object"==typeof global?global:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(te)return te;if(Qr)return Qr;if(re)return re;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ce(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Wr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(ae,"REGEXP",ue);var le="function"==typeof Yr||"object"==typeof oe||"function"==typeof ie?function(r){return ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===le(pe))return!1;for(r in pe)try{-1===Mr(se,r)&&Z(pe,r)&&null!==pe[r]&&"object"===le(pe[r])&&fe(pe[r])}catch(r){return!0}return!1}(),be="undefined"!=typeof window;var de,ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=mr?function(){return 2!==(vr(arguments)||"").length}(1,2)?function(r){return Lr(r)?vr(Rr.call(r)):vr(r)}:vr:function(r){var e,t,n,i,o,a,u;if(i=[],Lr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!Z(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Wr(r))return i;t=Ur&&n}for(o in r)t&&"prototype"===o||!Z(r,o)||i.push(String(o));if(Xr)for(e=function(r){if(!1===be&&!ge)return fe(r);try{return fe(r)}catch(r){return!1}}(r),u=0;u<ye.length;u++)a=ye[u],e&&"constructor"===a||!Z(r,a)||i.push(String(a));return i};var he,ve=de;he=dr?function(r){return hr(yr(r))}:function(r){return ve(yr(r))};var we=he;var me,je,Oe=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===le(je)?Oe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=me;function _e(r){return null==r?null:(r=yr(r),Se(r))}return function(r,e){var t,n,i,o,a,u,c,l;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Ut45",e));a=e}else a=9007199254740991;if(null==r)return[];for(i=_e(r),t=[],n={},u=1;i&&u<=a;){for(o=we(i),l=0;l<o.length;l++)!1===Z(n,c=o[l])&&br(i,c)&&t.push(c),n[c]=!0;i=_e(i),u+=1}return t}}));
//# sourceMappingURL=index.js.map
