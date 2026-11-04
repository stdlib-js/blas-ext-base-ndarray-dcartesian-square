"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=n(function(x,s){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-strides/dist'),o=require('@stdlib/ndarray-base-stride/dist'),i=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/blas-ext-base-dcartesian-square/dist').ndarray;function f(a){var r,e,t;return t=a[0],r=a[1],e=d(r,!1),c(q(t,0),u(t),o(t,0),i(t),u(r),e[0],e[1],i(r)),r}s.exports=f
});var g=v();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
