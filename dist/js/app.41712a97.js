(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ab0":function(e,t,n){"use strict";n("c432")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{searchedText:e.get}}),n("Main",{attrs:{searchedText:e.searchedText}})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("Search",{on:{searchedText:e.emit}})],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchedText,expression:"searchedText"}],attrs:{type:"text",placeholder:"Cerca..."},domProps:{value:e.searchedText},on:{input:function(t){t.target.composing||(e.searchedText=t.target.value)}}}),n("button",{on:{click:function(t){return e.research(e.searchedText)}}},[e._v("Search")])])},s=[],l={name:"Search",data:function(){return{searchedText:""}},methods:{research:function(e){this.$emit("searchedText",e)}}},p=l,d=n("2877"),f=Object(d["a"])(p,u,s,!1,null,null,null),h=f.exports,m={name:"Header",components:{Search:h},methods:{emit:function(e){this.$emit("searchedText",e)}}},v=m,b=Object(d["a"])(v,c,i,!1,null,null,null),_=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",e._l(e.elementList,(function(e,t){return n("Card",{key:t,attrs:{element:e}})})),1)},g=[],y=n("1da1"),T=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("ul",[n("li",[n("span",[e._v("Titolo:")]),e._v(" "+e._s(e.element.title)+" ")]),n("li",[n("span",[e._v("Titolo originale:")]),e._v(" "+e._s(e.element.original_title)+" ")]),n("li",[n("span",[e._v("Lingua:")]),e._v(" "+e._s(e.element.original_language)+" ")]),n("li",[n("span",[e._v("Voto:")]),e._v(" "+e._s(e.element.vote_average)+" ")])])])}),O=[],j={name:"Card",props:["element"]},w=j,S=(n("0ab0"),Object(d["a"])(w,T,O,!1,null,null,null)),k=S.exports,P=n("bc3a"),$=n.n(P),C=n("3003");r["a"].use(C["a"]);var M={name:"Main",props:["searchedText"],components:{Card:k},data:function(){return{BaseUri:"https://api.themoviedb.org/3",ApiKey:"api_key=53daa74f0d09de5eebf1b3c546d9edc6"}},asyncComputed:{elementList:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],0==e.searchedText){t.next=4;break}return t.next=4,$.a.get(e.BaseUri+"/search/movie?"+e.ApiKey+"&query="+e.searchedText).then((function(e){n=e.data.results}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}}},E=M,A=Object(d["a"])(E,x,g,!1,null,null,null),H=A.exports,L={name:"App",components:{Header:_,Main:H},data:function(){return{searchedText:""}},methods:{get:function(e){this.searchedText=e}}},B=L,J=Object(d["a"])(B,a,o,!1,null,null,null),K=J.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(K)}}).$mount("#app")},c432:function(e,t,n){}});
//# sourceMappingURL=app.41712a97.js.map