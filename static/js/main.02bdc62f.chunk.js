(this["webpackJsonpusername-verifier"]=this["webpackJsonpusername-verifier"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var i,r=t(1),a=t.n(r),c=t(3),u=t.n(c),s=(t(9),t(4)),d=(t(10),t(0));!function(e){e.invalid="invalid",e.verified="verified",e.unverified="unverified"}(i||(i={}));var l=function(){var e,n=Object(r.useState)(""),t=Object(s.a)(n,2),a=t[0],c=t[1],u=function(){if(a.length>25)return i.invalid;var e=["a","e","i","o","u"],n=a.split("").filter((function(n){return e.includes(n)})).length;return n*(a.length-n)%2?i.verified:i.unverified};switch(u()){case i.invalid:e="red";break;case i.verified:e="blue";break;case i.unverified:e="gray"}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("input",{className:"username-textbox ".concat(e),placeholder:"Enter username here",value:a,onChange:function(e){return c(e.target.value)}}),a&&Object(d.jsx)("div",{className:"status",children:u()})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};u.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),f()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.02bdc62f.chunk.js.map