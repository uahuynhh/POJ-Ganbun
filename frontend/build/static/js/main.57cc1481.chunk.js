(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(19),r=a.n(o),i=(a(24),a(3)),s=(a(25),a(4)),l=a.n(s),u=a(7),d=a(9),b=a.n(d),j=(a(45),a(0)),g=window.location.protocol+"//"+window.location.host+"/api/v1/chhoe";function p(e){var t=Object(n.useState)("\uac04\u3099\u2087\ubd84\u3099\u2085"),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)("Gan7 bun5"),s=Object(i.a)(r,2),d=s[0],p=s[1];return Object(n.useEffect)(Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.strip(d.split(" ").join("-")),a=g+"?bun=".concat(d),t.next=4,b.a.get(a);case 4:n=t.sent,o(null===n||void 0===n?void 0:n.data);case 6:case"end":return t.stop()}}),t)}))),[d]),Object(j.jsxs)("div",{className:"search_container",children:[Object(j.jsx)("input",{className:"dark:bg-gray-800 dark:text-white search_taigi_input w-48 md:w-48 lg:w-64",value:d,onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(j.jsx)("span",{className:"search_query text-3xl",children:c||"\u96a8\u62cd\u5b57\u96a8\u6709\u901a\u5beb\u8afa\u6587!"})]})}var h=a(5);a(47);function f(e){return Object(j.jsxs)("div",{className:"relative flex-auto m-4 p-4 bg-white dark:bg-gray-800 dark:text-white text-black rounded shadow-lg",children:[Object(j.jsx)("h1",{className:"text-xl w-full block text-left",children:e.ganbunMode?e.GANBUN:e.POJ}),Object(j.jsx)("h2",{className:"text-lg w-full block text-left text-gray-400",children:e.HANLO}),Object(j.jsxs)("h2",{className:"text-base w-full block text-left mb-2",children:[e.KAISOEH?e.KAISOEH:"",Object(j.jsx)("a",{className:"text-blue-500",href:e.URL,children:e.URL?"\uc7c8":""})]}),Object(j.jsx)("span",{className:"text-base w-full block text-left",children:e.HOA?"\u83ef\u8a9e:".concat(e.HOA):""}),Object(j.jsx)("a",{className:"text-right flex justify-end w-full block",href:"https://suisiann.ithuan.tw/%E8%AC%9B/".concat(e.POJ),target:"_blank",children:Object(j.jsx)("div",{className:"px-1 py-1 w-10 h-10 relative rounded m-4 flex-none border-gray-300 border-2 border-solid text-right",children:Object(j.jsx)("div",{className:"w-full relative",children:Object(j.jsx)("div",{className:"play absolute rounded"})})})})]})}var O=window.location.protocol+"//"+window.location.host+"/api/v1/dict";window.location.protocol,window.location.host;function x(e){var t,a,n,c=20*((null===(t=e.page)||void 0===t?void 0:t.page)-1),o=e.result;(null===(a=e.result)||void 0===a?void 0:a.length)>=20&&(o=c+20>=(null===(n=e.result)||void 0===n?void 0:n.length)?e.result.slice(c,e.result.length-1):e.result.slice(c,c+20));return o.map((function(t){var a,n,c,o,r=null!==(a=t.hoabun)&&void 0!==a?a:t.english,i=null!==(n=null!==(c=t.hanlo_taibun_poj)&&void 0!==c?c:t.hanlo_taibun)&&void 0!==n?n:t.hanji_taibun,s=null!==(o=t.hanlo_taibun_kaisoeh_poj)&&void 0!==o?o:t.descriptions_poj,l=t.ganbun;t.url;return Object(j.jsx)(f,{ganbunMode:e.ganbun,GANBUN:l,URL:t.url,POJ:t.poj_unicode,KAISOEH:s,HANLO:i,HOA:r},"".concat(t.poj_input).concat(t.id))}))}function v(e){var t,a,c=Object(n.useState)(null===(t=e.current)||void 0===t?void 0:t.page),o=Object(i.a)(c,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){var t;s(null===(t=e.current)||void 0===t?void 0:t.page)}),[null===(a=e.current)||void 0===a?void 0:a.page]),e.maxpage>0?Object(j.jsxs)("div",{className:"flex justify-center m-4",children:[Object(j.jsx)("button",{className:"m-4 p-2 dark:bg-gray-800 dark:text-white bg-white text-black rounded focus:ring-4 focus:ring-white-500 focus:ring-opacity-50",onClick:function(){return e.pageDispatch({type:"previous"})},children:e.ganbun?"\ub529\u2082":"t\xe9ng"}),Object(j.jsxs)("div",{className:"m-4",children:[Object(j.jsx)("input",{className:"dark:hover:bg-gray-800 dark:hover:text-white inline-block bg-transparent hover:text-black transition hover:bg-white w-9 text-right",value:r,onChange:function(e){var t;s(null===(t=e.target)||void 0===t?void 0:t.value)},onBlur:function(){e.pageDispatch({type:"jump",page:r})},onKeyDown:function(t){"Enter"===t.key&&e.pageDispatch({type:"jump",page:r})}}),Object(j.jsxs)("span",{className:"inline-block w-9",children:["/",e.maxpage]})]}),Object(j.jsx)("button",{className:"dark:bg-gray-800 dark:text-white m-4 p-2 bg-white text-black rounded focus:ring-4 focus:ring-white-500 focus:ring-opacity-50",onClick:function(){return e.pageDispatch({type:"next"})},children:e.ganbun?"\uc54c\u2087":"\u0101u"})]}):Object(j.jsx)("div",{})}function w(e){var t=Object(n.useState)(e.keyword),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)([{id:1,poj_input:"Gan-bun",poj_unicode:"G\u0101n-b\xfbn",ganbun:"\uac04\u3099\u2087\ubd84\u3099\u2085",descriptions_poj:"\u4e00\u7a2e\u7528\uac04\u3099\u2087\ubd84\u3099\u2085\u4f86\u5beb\u53f0\u8a9e\uc5d0\u2085\u66f8\u5beb\u65b9\u5f0f\uff0c\u8a73\u7d30\u66f8\u5beb\u898f\u5247\u8acb\u53c3\u8003",url:"https://drive.google.com/drive/folders/1Pov4YMnAdZ9t_cq8QO_Ji7jAyP0ENK9Q",hoabun:"\u8afa\u6587"}]),s=Object(i.a)(r,2),d=s[0],g=s[1],p=Object(n.useState)(0),f=Object(i.a)(p,2),w=f[0],m=f[1],k=Object(n.useState)(!0),y=Object(i.a)(k,2),N=y[0],_=y[1],A=Object(n.useReducer)((function(e,t){switch(t.type){case"previous":return e.page-1>0?{page:e.page-1}:{page:e.page};case"next":return e.page+1<=w?{page:e.page+1}:{page:e.page};case"jump":try{var a=parseInt(t.page);if(0===a||void 0===a||a>w)return console.log("page error."),{page:e.page};if(a<=w)return{page:a}}catch(n){return console.log("page error."),{page:t.page}}case"clear":return{page:1}}}),{page:1}),S=Object(i.a)(A,2),C=S[0],E=S[1];return Object(n.useEffect)((function(){o(e.keyword)}),[e.keyword]),Object(n.useEffect)((function(){e.setIsLoading(!1)}),[d]),Object(j.jsxs)("div",{className:"m-4",children:[Object(j.jsx)(v,{ganbun:N,pageDispatch:E,maxpage:w,current:C}),Object(j.jsx)("button",{className:"m-4 p-4 dark:bg-yellow-800 bg-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 rounded",onClick:function(){_(!N)},children:N?"\ucc67\u2084\uc640\u309a\u2087POJ":"chhiat-\u014da\u207f g\u0101n-b\xfbn"}),Object(j.jsx)("button",{className:"m-4 p-4 dark:bg-yellow-800 bg-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 rounded",onClick:Object(u.a)(l.a.mark((function t(){var a,n,o,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setIsLoading(!0),n=O+"?keyword=".concat(c),t.next=4,b.a.get(n);case 4:o=t.sent,r=[],i=[],null===o||void 0===o||null===(a=o.data)||void 0===a||a.forEach((function(e){var t;void 0===(null!==(t=e.hanlo_taibun_kaisoeh_poj)&&void 0!==t?t:e.descriptions_poj)?i=[].concat(Object(h.a)(i),[e]):r=[].concat(Object(h.a)(r),[e])})),g([].concat(Object(h.a)(r),Object(h.a)(i))),m(Math.ceil([].concat(Object(h.a)(r),Object(h.a)(i)).length/20)),E({type:"clear"});case 11:case"end":return t.stop()}}),t)}))),children:N?"\ucc28\u2085\ub9ac\u2087\ub320\u2082":"Chh\xe2 l\u012b-ti\xe1n"}),Object(j.jsx)("ul",{className:"flex flex-wrap",children:Object(j.jsx)(x,{ganbun:N,page:C,result:d})}),Object(j.jsx)(v,{ganbun:N,className:"hidden md:block",pageDispatch:E,maxpage:w,current:C})]})}function m(e){return!0===e.loading?Object(j.jsx)("div",{className:"w-full z-50 h-full absolute bg-opacity-50 bg-black",children:Object(j.jsx)("div",{className:"absolute loader-container p-4 rounded w-20 h-20 left-1/2 top-1/2 bg-white shadow-lg",children:Object(j.jsx)("div",{className:"loader"})})}):Object(j.jsx)("div",{className:"hidden w-full h-full absolute bg-opacity-50 bg-black",children:Object(j.jsx)("div",{className:"absolute loader-container p-4 rounded w-20 h-20 left-1/2 top-1/2 bg-white",children:Object(j.jsx)("div",{className:"loader"})})})}var k=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("this is a test"),r=Object(i.a)(o,2),s=r[0],l=r[1];return Object(n.useEffect)((function(){console.log("".concat(a," Loading"))}),[a]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{loading:a}),Object(j.jsx)("h1",{className:"text-xl",children:"\u767d\u8a71\u5b57\uc890\u2082\ud0a4\u2083\u8afa\u6587 Conveter"}),Object(j.jsx)(p,{strip:l}),Object(j.jsx)("span",{children:"by \ud1a0\u2085\ub2ec\u2087(\u5857\u8c46)"}),Object(j.jsx)(w,{setIsLoading:c,isLoading:a,keyword:s})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};document.title="\u767d\u8a71\u5b57\uc890\u2082\ud0a4\u2083\u8afa\u6587 Conveter",document.body.classList.add("dark:bg-gray-900"),r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.57cc1481.chunk.js.map