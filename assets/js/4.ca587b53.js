(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,n,e){var s=e(24),r="["+e(302)+"]",i=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(n){var e=String(s(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},304:function(t,n,e){"use strict";var s=e(1),r=e(303).trim;s({target:"String",proto:!0,forced:e(305)("trim")},{trim:function(){return r(this)}})},305:function(t,n,e){var s=e(2),r=e(302);t.exports=function(t){return s((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},312:function(t,n,e){},313:function(t,n,e){},314:function(t,n,e){},315:function(t,n,e){},325:function(t,n,e){},329:function(t,n,e){"use strict";var s=e(312);e.n(s).a},330:function(t,n,e){"use strict";var s=e(313);e.n(s).a},331:function(t,n,e){"use strict";var s=e(314);e.n(s).a},332:function(t,n,e){"use strict";var s=e(315);e.n(s).a},335:function(t,n,e){"use strict";e(93),e(66),e(94);var s={name:"XssLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"XssSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},r=(e(329),e(44)),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"34d3ec74",null);n.a=i.exports},336:function(t,n,e){"use strict";e(330);var s=e(44),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"32933274",null);n.a=r.exports},337:function(t,n,e){"use strict";e(331);var s=e(44),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"2e3767b3",null);n.a=r.exports},338:function(t,n,e){"use strict";e(332);var s=e(44),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"eb3f2234",null);n.a=r.exports},362:function(t,n,e){"use strict";var s=e(325);e.n(s).a},363:function(t,n,e){},381:function(t,n,e){"use strict";var s={name:"XssSider",data:function(){return{visible:!0}}},r=(e(362),e(44)),i=Object(r.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"7768c3d5",null);n.a=i.exports},416:function(t,n,e){"use strict";var s=e(363);e.n(s).a},442:function(t,n,e){"use strict";e.r(n);e(304);var s=e(335),r=e(336),i=e(337),a=e(338),c=e(381),u={data:function(){return{content:'\n<x-layout class="layout">\n    <x-header class="header">header</x-header>\n    <x-layout>\n        <x-sider class="sider">sider</x-sider>\n        <x-content class="content">content</x-content>\n    </x-layout>\n    <x-footer class="footer">footer</x-footer>\n</x-layout>\n\n                '.trim()}},components:{"x-layout":s.a,"x-header":r.a,"x-content":i.a,"x-footer":a.a,"x-sider":c.a}},o=(e(416),e(44)),l=Object(o.a)(u,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("img",{attrs:{src:"https://i.loli.net/2018/10/26/5bd2d58ea4a00.png"}}),this._v(" "),n("pre",[n("code",[this._v(this._s(this.content))])])])}),[],!1,null,"80d4b30c",null);n.default=l.exports}}]);