<template>
  <div>
    <img src="https://i.loli.net/2018/10/27/5bd3dbfc6bc92.png" alt="">
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  export default {

    data(){
      return{
        content:`
<x-layout class="layout">
    <x-header class="header">header</x-header>
    <x-content class="content">content</x-content>
    <x-footer class="footer">footer</x-footer>
</x-layout>`.trim()
      }
    },
    components:{
      'x-layout':Layout,
      'x-header':Header,
      'x-content':Content,
      'x-footer':Footer,
    }
  }
</script>

<style scoped lang="scss">
  .layout{color: white; width:100%;}
  .header{height: 40px; background:#40a9ff;text-align: center;line-height: 40px; }
  .content{height: 80px; background:#096dd9;text-align: center;line-height: 80px; margin:0;}
  .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px; }
</style>