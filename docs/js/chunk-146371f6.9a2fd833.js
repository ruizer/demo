(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-146371f6"],{1947:function(t,l,o){"use strict";var e=o("5bf0"),s=o.n(e);s.a},"5bf0":function(t,l,o){},d90c:function(t,l,o){"use strict";o.r(l);var e=function(){var t=this,l=t.$createElement,o=t._self._c||l;return o("div",{staticClass:"table-drag"},[o("table",[o("thead",[o("tr",t._l(t.tableHeader,function(l,e){return o("th",{key:e,on:{mousedown:t.mouseDown,mouseup:t.mouseUp,mousemove:t.mouseMove}},[t._v(t._s(l))])}),0)]),o("tbody",t._l(t.tableBody,function(l,e){return o("tr",{key:e},t._l(l,function(l,e){return o("td",{key:e},[t._v(t._s(l))])}),0)}),0)])])},s=[],a={name:"table-drag",data:function(){return{tableHeader:["#","单号","客户编码","客户名称","总金额","创建时间"],tableBody:[["1","112","K1001","王小姐","674","2019-07-19"],["2","134","K1341","王小姐","1674","2019-07-19"],["3","154","K1111","王小姐","3674","2019-07-19"],["4","152","K2001","王小姐","5474","2019-07-19"],["5","122","K3001","王小姐","6234","2019-07-19"]],localTd:null}},methods:{mouseDown:function(t){t&&t.target&&(this.localTd=t.target,t.offsetX>this.localTd.offsetWidth-10&&(this.localTd.mouseDown=!0,this.localTd.oldX=t.x,this.localTd.oldWidth=this.localTd.offsetWidth))},mouseUp:function(t){t&&t.target&&(this.localTd||(this.localTd=t.target),this.localTd.mouseDown=!1,this.localTd.style.cursor="default")},mouseMove:function(t){if(t&&t.target){var l=t.target;if(t.offsetX>l.offsetWidth-10?l.style.cursor="col-resize":l.style.cursor="default",this.localTd||(this.localTd=l),null!==this.localTd.mouseDown&&!0===this.localTd.mouseDown){this.localTd.style.cursor="default",this.localTd.oldWidth+(t.x-this.localTd.oldX)>0&&(this.localTd.width=this.localTd.oldWidth+(t.x-this.localTd.oldX)),this.localTd.style.width=this.localTd.width,this.localTd.style.cursor="col-resize";var o=this.localTd;while("TABLE"!==o.tagName)o=o.parentElement;for(var e=0;e<o.rows.length;e++)o.rows[e].cells[this.localTd.cellIndex].width=this.localTd.width}}}}},d=a,i=(o("1947"),o("2877")),c=Object(i["a"])(d,e,s,!1,null,null,null),n=c.exports;l["default"]=n}}]);