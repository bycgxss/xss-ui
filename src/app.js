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

Vue.use(Plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    msg: 'hi'
  },
  created() {
    this.$toast('你的智商需要充值！', {
      position: 'middle',
      enableHtml: false,
      closeButton: {
        text: '已充值',
        callback () {
          console.log('他说已经充值智商了')
        }
      },
      autoClose: true,
      autoCloseDelay: 2
    })
  },
  methods: {
    showToast() {
    }
  }
})