<template>
  <div>
    <x-row>
      <x-col class="col" span="11" >11</x-col>
      <x-col class="col" span="11" offset="2">11</x-col>
    </x-row>

    <x-row>
      <x-col class="col" span="7" >7</x-col>
      <x-col class="col" span="7" offset="1">7</x-col>
      <x-col class="col" span="7" offset="2">7</x-col>
    </x-row>
    <x-row>
      <x-col class="col" span="8" >8</x-col>
      <x-col class="col" span="3" offset="2">3</x-col>
      <x-col class="col" span="3" offset="2">3</x-col>
      <x-col class="col" span="4" offset="2">3</x-col>
    </x-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  export default {
    name: "grid-demo3",
    data(){
      return{
        content:`
<x-row>
    <x-col class="col" span="11" >11</y-col>
    <x-col class="col" span="11" offset="2">11</y-col>
</x-row>

<x-row>
    <x-col class="col" span="7" >7</x-col>
    <x-col class="col" span="7" offset="1">7</x-col>
    <x-col class="col" span="7" offset="2">7</x-col>
</x-row>

<x-row>
    <x-col class="col" span="8" >8</x-col>
    <x-col class="col" span="3" offset="2">3</x-col>
    <x-col class="col" span="3" offset="2">3</x-col>
    <x-col class="col" span="4" offset="2">3</x-col>
</x-row>
                `.trim()
      }
    },
    components:{
      "x-col":Col,
      "x-row":Row
    }
  }
</script>

<style scoped lang="scss">
  .col{
    height:100px;
    background:#40a9ff;
    color:white;
    border:1px solid #1890ff;
    text-align: center;
    line-height:100px;
    font-size:20px;
  }
</style>