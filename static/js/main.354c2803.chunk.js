(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s,i=n(7),l=n.n(i),a=n(6),o=n(8),r=n(1),u=(n(13),n(14),n(4)),b=n.n(u),h=n(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Default="",t.Alphabetically="alphabetically",t.ByLength="length"}(c||(c={})),function(t){t[t.Default=0]="Default",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"}(s||(s={}));var g=function(){var t=Object(r.useState)(c.Default),e=Object(a.a)(t,2),n=e[0],i=e[1],l=Object(r.useState)(s.Default),u=Object(a.a)(l,2),g=u[0],j=u[1],f=n||g===s.Ascending,p=function(t,e,n){var i=Object(o.a)(t);return e!==c.Default&&i.sort((function(t,n){return e===c.Alphabetically?t.localeCompare(n):e===c.ByLength?t.length-n.length:0})),n===s.Ascending&&i.reverse(),i}(d,n,g);return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":n!==c.Alphabetically}),onClick:function(){return i(c.Alphabetically)},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":n!==c.ByLength}),onClick:function(){return i(c.ByLength)},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":g!==s.Ascending}),onClick:function(){return j(g===s.Ascending?s.Descending:s.Ascending)},children:"Reverse"}),f&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return i(c.Default),void j(s.Default)},children:"Reset"})]}),Object(h.jsx)("ul",{children:Object(h.jsx)("ul",{children:p.map((function(t){return Object(h.jsx)("li",{className:"li","data-cy":"Good",children:t},"".concat(t,"_item"))}))})})]})};l.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.354c2803.chunk.js.map