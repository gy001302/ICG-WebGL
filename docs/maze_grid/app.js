!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=79)}({15:function(t,r,n){"use strict";n.d(r,"a",function(){return f});var e=n(9),o=n.n(e);function u(t){return t[Math.floor(Math.random()*t.length)]}function a(t,r,n){var e=o()(t,2),u=e[0],a=e[1],i=[];return u-1>=0&&i.push([u-1,a]),u+1<r&&i.push([u+1,a]),a-1>=0&&i.push([u,a-1]),a+1<n&&i.push([u,a+1]),i}function i(t,r,n){var e=o()(n,2),u=e[0],a=e[1],i=o()(r,2),f=i[0],c=i[1];u===f?a<c?(t[u][a]&=13,t[f][c]&=7):(t[u][a]&=7,t[f][c]&=13):a===c&&(u<f?(t[u][a]&=11,t[f][c]&=14):(t[u][a]&=14,t[f][c]&=11))}function f(t,r){for(var n=function(t,r){for(var n=[],e=0;e<t;e++){n[e]=[];for(var o=0;o<r;o++)n[e][o]=15}return n}(t,r),e={"0,0":[0,0]},o={"0,1":[0,1],"1,0":[1,0]},f=1;f<t*r;f++){var c=u(Object.values(o)),l=a(c,t,r);l.forEach(function(t){e[t]||o[t]||(o[t]=t)}),i(n,u(l.filter(function(t){return!!e[t]})),c),delete o[c],e[c]=c}var s=Math.floor(Math.random()*t),d=Math.floor(Math.random()*t);return n[s][0]&=7,n[d][r-1]&=13,n}},17:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},18:function(t,r){t.exports=function(t,r){var n=[],e=!0,o=!1,u=void 0;try{for(var a,i=t[Symbol.iterator]();!(e=(a=i.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(t){o=!0,u=t}finally{try{e||null==i.return||i.return()}finally{if(o)throw u}}return n}},19:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},79:function(t,r,n){"use strict";n.r(r);for(var e=n(15),o=Object(e.a)(10,10),u=document.getElementById("container"),a=0;a<10;a++)for(var i=0;i<10;i++){var f=document.createElement("div"),c=o[a][i];f.className="block",1&c&&(f.className+=" up"),2&c&&(f.className+=" right"),4&c&&(f.className+=" bottom"),8&c&&(f.className+=" left"),u.appendChild(f)}},9:function(t,r,n){var e=n(17),o=n(18),u=n(19);t.exports=function(t,r){return e(t)||o(t,r)||u()}}});