(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-4bf85462":"ec3a3e05","chunk-59aaad8d":"330c53f0","chunk-ddd90550":"06fe46f0"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-4bf85462":1,"chunk-59aaad8d":1,"chunk-ddd90550":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-4bf85462":"7d6bfcee","chunk-59aaad8d":"310fdfb6","chunk-ddd90550":"35a3fe8a"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete o[t],h.parentNode.removeChild(h),n(i)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=l;i.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},2:function(t,e){},3:function(t,e){},"3a95":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.github?n("a",{staticClass:"icon-github",attrs:{target:"_blank",href:t.github}},[n("svg",{attrs:{viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]):t._e(),n("router-view")],1)},a=[],i={name:"app",computed:{github:function(){return this.$route&&this.$route.meta&&this.$route.meta.github}}},s=i,u=(n("7c55"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",[t._l(t.menus,function(e,r){return[n("li",{key:r,on:{click:function(n){return t.handle(e)}}},[t._v(t._s(e.title))])]})],2)])},d=[],p=(n("7f7f"),function(){var t=F.filter(function(t){return t.meta&&!t.meta.hideInMenu}).map(function(t){return{path:t.path,title:t.meta.title||t.name}});return t}),m={name:"home",computed:{menus:function(){return p()}},methods:{handle:function(t){this.$router.push(t.path)}}},b=m,v=(n("de16"),Object(u["a"])(b,h,d,!1,null,null,null)),g=v.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analyze-excel"},[n("h1",[t._v("在浏览器中使用 js-xlsx ，实现纯前端解析Excel文件，实现批量导入功能")]),n("div",{staticClass:"analyze-excel-input"},[n("input",{ref:"file",attrs:{type:"file",id:t.fileId},on:{change:t.changeFile}}),n("label",{attrs:{for:t.fileId}},[t._v("导入Excel")])]),t.workbook?[n("div",{staticClass:"excel-content"},[n("a",{attrs:{href:"javascript:;"},on:{click:t.buildCSV}},[t._v("生成CSV格式(处理过)")]),n("a",{attrs:{href:"javascript:;"},on:{click:t.buildHTML}},[t._v("生成HTML")]),n("a",{attrs:{href:"javascript:;"},on:{click:t.buildOBJ}},[t._v("生成一个对象数组")]),n("a",{attrs:{href:"javascript:;"},on:{click:t.buildUTF16}},[t._v("生成UTF16格式化文本")]),n("a",{attrs:{href:"javascript:;"},on:{click:t.buildList}},[t._v("生成公式列表")])]),n("div",{domProps:{innerHTML:t._s(t.content)}})]:t._e(),n("div",{ref:"jsoneditor"})],2)},y=[],C=(n("6b54"),n("28a5"),n("ac6a"),n("795b")),_=n.n(C),x=n("1146"),w=n.n(x),j=n("dcf5"),S=n.n(j),T=(n("6014"),{name:"analyze-excel",data:function(){return{fileId:"file-".concat(Math.floor(1e3*Math.random())),jsonTree:null,workbook:null,content:null}},mounted:function(){var t=this;this.$nextTick(function(){t.jsonTree&&t.jsonTree.destory();var e=t.$refs.jsoneditor,n={mode:"view"};t.jsonTree=new S.a(e,n)})},methods:{changeFile:function(t){var e=this;if(t.target.files){this.spinShow=!0;var n=t.target.files[0];this.readFileForWorkbook(n).then(function(t){e.workbook=t,e.jsonTree.set(t)})}},readFileForWorkbook:function(t){return new _.a(function(e,n){var r,o=new FileReader;o.onload=function(t){var n=t.target.result;r=w.a.read(n,{type:"binary"}),e(r)},o.onerror=function(t){n(t)},o.readAsBinaryString(t)})},analysisWorkbook:function(t){var e=this,n=[],r=null;switch(t){case"csv":r=w.a.utils.sheet_to_csv;break;case"txt":r=w.a.utils.sheet_to_txt;break;case"html":r=w.a.utils.sheet_to_html;break;case"formulae":r=w.a.utils.sheet_to_formulae;break;default:r=w.a.utils.sheet_to_json;break}return this.workbook.SheetNames.forEach(function(t){var o=e.workbook.Sheets[t]["!ref"];o&&(n=n.concat(r(e.workbook.Sheets[t])))}),n},buildCSV:function(){var t=this,e=this.analysisWorkbook("csv");this.content="",e.forEach(function(e){t.content=t.content+t.handleCSV(e)})},handleCSV:function(t){var e="<table>",n=t.split("\n").filter(function(t){return t&&/[^,]/.test(t)});return n.forEach(function(t,n){var r=t.split(",").filter(function(t){return t});if(r.unshift(n+1),0==n){e+="<tr>";for(var o=0;o<r.length;o++)e+="<th>"+(0==o?"":String.fromCharCode(65+o-1))+"</th>";e+="</tr>"}e+="<tr>",r.forEach(function(t){e+="<td>"+t+"</td>"}),e+="</tr>"}),e+="</table>",e},buildHTML:function(){this.content=this.analysisWorkbook("html").toString()},buildOBJ:function(){this.content=this.analysisWorkbook()},buildUTF16:function(){this.content=this.analysisWorkbook("txt").toString()},buildList:function(){this.content=this.analysisWorkbook("formulae")}}}),E=T,M=(n("b098"),Object(u["a"])(E,k,y,!1,null,"2f75f8f5",null)),L=M.exports,O=L,F=[{path:"/",name:"home",component:g,meta:{github:"https://github.com/ruizer/demo",hideInMenu:!0}},{path:"/xlsx",name:"xlsx",meta:{title:"使用 js-xlsx 库来解析 Excel 文件",github:"https://github.com/ruizer/demo/blob/master/src/views/xlsx/index.vue"},component:O},{path:"/post-message",name:"post-message",meta:{title:"跨源通信 postMessage 的骚操作",github:"https://github.com/ruizer/demo/blob/master/src/views/post-message/post-message.vue"},component:function(){return n.e("chunk-4bf85462").then(n.bind(null,"d6ce"))}},{path:"/post-message-test",name:"post-message-test",meta:{title:"跨源通信 postMessage 的骚操作",hideInMenu:!0},component:function(){return n.e("chunk-ddd90550").then(n.bind(null,"19ac"))}},{path:"/table-drag",name:"table-drag",meta:{title:"表格列宽拖拽功能",github:"https://github.com/ruizer/demo/blob/master/src/views/table-drag/table-drag.vue"},component:function(){return n.e("chunk-59aaad8d").then(n.bind(null,"d90c"))}}];r["a"].use(f["a"]);var P=new f["a"]({routes:F});P.afterEach(function(t){document.title=t.meta&&t.meta.title||"demo"});var $=P,W=n("2f62");r["a"].use(W["a"]);var z=new W["a"].Store({state:{},mutations:{},actions:{}});n("ca62");r["a"].config.productionTip=!1,new r["a"]({router:$,store:z,render:function(t){return t(l)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},b098:function(t,e,n){"use strict";var r=n("3a95"),o=n.n(r);o.a},ca62:function(t,e,n){},de16:function(t,e,n){"use strict";var r=n("f3e7"),o=n.n(r);o.a},f3e7:function(t,e,n){}});