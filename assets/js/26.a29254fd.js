(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{451:function(t,a,e){"use strict";e.r(a);var l=e(44),s=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),e("h2",{attrs:{id:"_1-需求演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-需求演示"}},[t._v("#")]),t._v(" 1.需求演示")]),t._v(" "),e("ul",[e("li",[t._v("布局一")])]),t._v(" "),e("ClientOnly",[e("layout-demo1")],1),t._v(" "),e("ul",[e("li",[t._v("布局二")])]),t._v(" "),e("ClientOnly",[e("layout-demo2")],1),t._v(" "),e("ul",[e("li",[t._v("布局三")])]),t._v(" "),e("ClientOnly",[e("layout-demo3")],1),t._v(" "),e("h2",{attrs:{id:"_2-实现逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现逻辑"}},[t._v("#")]),t._v(" 2.实现逻辑")]),t._v(" "),e("ul",[e("li",[t._v("在layout组件中检测子组件是否含有sider组件")]),t._v(" "),e("li",[t._v("如果为true 那么flex-direction：row")]),t._v(" "),e("li",[t._v("如果为false那么为column方式排列")])]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("mounted () {\n    this.$children.forEach((vm) => {\n        if (vm.$options.name === 'YSider') {\n            this.layoutClass.hasSider = true\n        }\n    })\n}\n")])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);