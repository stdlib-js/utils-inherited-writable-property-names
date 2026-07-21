"use strict";var g=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=g(function(E,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,P=require('@stdlib/assert-is-writable-property/dist'),c=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),l=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function y(i,r){var t,s,e,u,o,v,a,n;if(arguments.length>1){if(!q(r))throw new TypeError(w('1Ut45',r));o=r}else o=h;if(i==null)return[];for(e=m(i),t=[],s={},v=1;e&&v<=o;){for(u=c(e),n=0;n<u.length;n++)a=u[n],l(s,a)===!1&&P(e,a)&&t.push(a),s[a]=!0;e=m(e),v+=1}return t}p.exports=y
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
