// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,b,"e-0$1"),r.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+O(n):O(n)+r}var _=String.fromCharCode,E=isNaN,P=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,u,l,s,p;if(!P(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,n;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N,C=Object.prototype,$=C.toString,B=C.__defineGetter__,L=C.__defineSetter__,R=C.__lookupGetter__,W=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var G=N;function U(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",J=M()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[q],e=H(r,q);try{r[q]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[q]=t:delete r[q],n}:function(r){return Y.call(r)},K=Number,Q=K.prototype.toString,rr=M();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function tr(r){return X(r)||er(r)}U(tr,"isPrimitive",X),U(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,ir=K.NEGATIVE_INFINITY,or=Math.floor;function ar(r){return or(r)===r}function ur(r){return r<nr&&r>ir&&ar(r)}function cr(r){return X(r)&&ur(r)}function fr(r){return er(r)&&ur(r.valueOf())}function lr(r){return cr(r)||fr(r)}function sr(r){return cr(r)&&r>0}function pr(r){return fr(r)&&r.valueOf()>0}function gr(r){return sr(r)||pr(r)}U(lr,"isPrimitive",cr),U(lr,"isObject",fr),U(gr,"isPrimitive",sr),U(gr,"isObject",pr);var yr,br=void 0!==Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyDescriptor;yr=br?function(r,e){var t;return null==r||void 0===(t=dr(r,e))?null:t}:function(r,e){return H(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var hr=yr;function vr(r,e){var t=hr(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}var wr=void 0!==Object.getOwnPropertyNames,mr=Object,jr=mr.getOwnPropertyNames;function Or(r){return Object.keys(Object(r))}var Sr,_r=void 0!==Object.keys;function Er(r){return"[object Arguments]"===J(r)}Sr=function(){return Er(arguments)}();var Pr=Sr;function Tr(r){return"string"==typeof r}var kr=String.prototype.valueOf,Ir=M();function xr(r){return"object"==typeof r&&(r instanceof String||(Ir?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function Ar(r){return Tr(r)||xr(r)}function Vr(r){return r!=r}function Fr(r){return X(r)&&Vr(r)}function Nr(r){return er(r)&&Vr(r.valueOf())}function Cr(r){return Fr(r)||Nr(r)}U(Ar,"isPrimitive",Tr),U(Ar,"isObject",xr),U(Cr,"isPrimitive",Fr),U(Cr,"isObject",Nr);var $r,Br=Object.prototype.propertyIsEnumerable,Lr=!Br.call("beep","0");function Rr(r,e){var t;return null!=r&&(!(t=Br.call(r,e))&&Lr&&Ar(r)?!Fr(e=+e)&&cr(e)&&e>=0&&e<r.length:t)}$r=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var Wr,Gr=$r;Wr=Pr?Er:function(r){return null!==r&&"object"==typeof r&&!Gr(r)&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=4294967295&&H(r,"callee")&&!Rr(r,"callee")};var Ur=Wr,Xr=Array.prototype.slice;function Zr(r){return null!==r&&"object"==typeof r}var Mr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Zr);U(Zr,"isObjectLikeArray",Mr);var Yr=Rr((function(){}),"prototype"),Dr=!Rr({toString:null},"toString");function Hr(r){return r!=r}function zr(r){return X(r)&&Hr(r)}function qr(r){return er(r)&&Hr(r.valueOf())}function Jr(r){return zr(r)||qr(r)}function Kr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=9007199254740991}function Qr(r){return"string"==typeof r}U(Jr,"isPrimitive",zr),U(Jr,"isObject",qr);var re=String.prototype.valueOf,ee=M();function te(r){return"object"==typeof r&&(r instanceof String||(ee?function(r){try{return re.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function ne(r){return Qr(r)||te(r)}function ie(r,e,t){var n,i;if(!Kr(r)&&!Qr(r))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!cr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Jr(e)){for(;i<n;i++)if(Jr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}U(ne,"isPrimitive",Qr),U(ne,"isObject",te);var oe=/./;function ae(r){return"boolean"==typeof r}var ue=Boolean,ce=Boolean.prototype.toString,fe=M();function le(r){return"object"==typeof r&&(r instanceof ue||(fe?function(r){try{return ce.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function se(r){return ae(r)||le(r)}function pe(){return new Function("return this;")()}U(se,"isPrimitive",ae),U(se,"isObject",le);var ge="object"==typeof self?self:null,ye="object"==typeof window?window:null,be="object"==typeof globalThis?globalThis:null,de=function(r){if(arguments.length){if(!ae(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pe()}if(be)return be;if(ge)return ge;if(ye)return ye;throw new Error("unexpected error. Unable to resolve global object.")}(),he=de.document&&de.document.childNodes,ve=Int8Array;function we(){return/^\s*function\s*([^(]*)/i}var me=/^\s*function\s*([^(]*)/i;function je(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=me.exec(n.toString()))return e[1]}return Zr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(we,"REGEXP",me);var Oe="function"==typeof oe||"object"==typeof ve||"function"==typeof he?function(r){return je(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?je(r).toLowerCase():e};function Se(r){return r.constructor&&r.constructor.prototype===r}var _e,Ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Pe="undefined"==typeof window?void 0:window,Te=function(){var r;if("undefined"===Oe(Pe))return!1;for(r in Pe)try{-1===ie(Ee,r)&&H(Pe,r)&&null!==Pe[r]&&"object"===Oe(Pe[r])&&Se(Pe[r])}catch(r){return!0}return!1}(),ke="undefined"!=typeof window,Ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_e=_r?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(r){return Ur(r)?Or(Xr.call(r)):Or(r)}:Or:function(r){var e,t,n,i,o,a,u;if(i=[],Ur(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!H(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof r)&&!Zr(r))return i;t=Yr&&n}for(o in r)t&&"prototype"===o||!H(r,o)||i.push(String(o));if(Dr)for(e=function(r){if(!1===ke&&!Te)return Se(r);try{return Se(r)}catch(r){return!1}}(r),u=0;u<Ie.length;u++)a=Ie[u],e&&"constructor"===a||!H(r,a)||i.push(String(a));return i};var xe,Ae=_e;xe=wr?function(r){return jr(mr(r))}:function(r){return Ae(mr(r))};var Ve,Fe,Ne=xe,Ce=Object.getPrototypeOf;Fe=Object.getPrototypeOf,Ve="function"===Oe(Fe)?Ce:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $e=Ve;function Be(r){return null==r?null:(r=mr(r),$e(r))}function Le(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function(e,t){var n,i,o,a,u,c,f,l;if(arguments.length>1){if(!sr(t))throw new TypeError(Le("1Ut45,IB",t));u=t}else u=r;if(null==e)return[];for(o=Be(e),n=[],i={},c=1;o&&c<=u;){for(a=Ne(o),l=0;l<a.length;l++)!1===H(i,f=a[l])&&vr(o,f)&&n.push(f),i[f]=!0;o=Be(o),c+=1}return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedWritablePropertyNames=e();
//# sourceMappingURL=browser.js.map
