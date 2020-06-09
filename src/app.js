import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)

Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab: 'sports'
  },
  created() {

  },
  methods: {
    yyy() {console.log('yyy')},
    showToast1() {this.showToast('top')},
    showToast2() {this.showToast('middle')},
    showToast3() {this.showToast('bottom')},
    showToast(position) {
      this.$toast(`你的智商目前为：${parseInt(Math.random() * 100)}。需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '充值',
          callback() {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 3,
      })
    }
  }
})