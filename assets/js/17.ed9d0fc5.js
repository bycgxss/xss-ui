(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(t,o,s){},375:function(t,o,s){},426:function(t,o,s){"use strict";var n=s(374);s.n(n).a},427:function(t,o,s){"use strict";var n=s(375);s.n(n).a},446:function(t,o,s){"use strict";s.r(o);s(304);var n=s(387),a=s(321);s(0).a.use(n.a);var i={components:{"y-button":a.a},data:function(){return{content:"\n<y-button class=\"toast\"  @click=\"showToast1\">Toast-top</y-button>\n<y-button class=\"toast\" @click=\"showToast2\">Toast-middle</y-button>\n<y-button class=\"toast\" @click=\"showToast3\">Toast-bottom</y-button>\nshowToast1(){ this.$toast('这是消息体A',{ position:'top' }) },\nshowToast2(){ this.$toast('这是消息体B',{ position:'middle' }) },\nshowToast3(){\n    //$toast第一个参数可以是字符串也可以是html\n    this.$toast('这是消息体C',{\n        position:'bottom',\n        enableHtml:true,\n        autoClose:2,\n    })\n}".trim()}},methods:{showToast1:function(){this.$toast("这是消息体A",{position:"top"})},showToast2:function(){this.$toast("这是消息体B",{position:"middle"})},showToast3:function(){this.$toast("这是消息体C",{position:"bottom",enableHtml:!0,autoClose:3})}}},c=(s(426),s(427),s(44)),e=Object(c.a)(i,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("y-button",{staticClass:"toast",on:{click:t.showToast1}},[t._v("Toast-top")]),t._v(" "),s("y-button",{staticClass:"toast",on:{click:t.showToast2}},[t._v("Toast-middle")]),t._v(" "),s("y-button",{staticClass:"toast",on:{click:t.showToast3}},[t._v("Toast-bottom")]),t._v(" "),s("pre",[s("code",[t._v(t._s(t.content))])])],1)}),[],!1,null,"24d5980d",null);o.default=e.exports}}]);