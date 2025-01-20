"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=g(function(E,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,P=require('@stdlib/assert-is-writable-property/dist'),c=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),l=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function y(i,r){var n,s,e,u,o,v,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(w('1Ut45',r));o=r}else o=h;if(i==null)return[];for(e=m(i),n=[],s={},v=1;e&&v<=o;){for(u=c(e),a=0;a<u.length;a++)t=u[a],l(s,t)===!1&&P(e,t)&&n.push(t),s[t]=!0;e=m(e),v+=1}return n}p.exports=y
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
