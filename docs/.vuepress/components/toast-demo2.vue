<template>
  <div>

    <x-button class="toast" @click="showToast">Toast</x-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .toast{
    border:1px solid #666;
    background:white;
    padding:5px;
    border-radius:3px;
    cursor:pointer;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin);

  export default {
    components: {
      'x-button':Button
    },
    data () {
      return {
        content:`

<x-button class="toast" @click="showToast2">Toast</x-button>

showToast(){
    this.$toast('这是消息体B',{
        position:'middle',
        autoClose:false,
        closeButton:{
            text:'关闭',
            callback:(toast)=>{
                this.log(); //组件外部函数
                toast.log() //组件内部函数
            },
        }
    })
}`.trim()

      }
    },
    methods:{
      showToast(){
        this.$toast('这是消息体B',{
          position:'middle',
          autoClose:false,
          closeButton:{
            text:'关闭',
            callback:(toast)=>{
              this.log(); //组件外部函数
              //toast.log() //组件内部函数
            },
          }
        })
      },
      log(){
        alert('调用了组件外部的函数')
      }
    }
  }
</script>