<template>
  <div>
    <x-row>
      <x-col class="col" span="12">12</x-col>
      <x-col class="col" span="12">12</x-col>
    </x-row>

    <x-row>
      <x-col class="col" span="8">8</x-col>
      <x-col class="col" span="8">8</x-col>
      <x-col class="col" span="8">8</x-col>
    </x-row>

    <x-row>
      <x-col class="col" span="6">6</x-col>
      <x-col class="col" span="6">6</x-col>
      <x-col class="col" span="6">6</x-col>
      <x-col class="col" span="6">6</x-col>
    </x-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  export default {
    name: "grid-demo1",
    data(){
      return{
        content:`
 <x-row>
    <x-col class="col" span="12">12</x-col>
    <x-col class="col" span="12">12</x-col>
</x-row>

<x-row>
    <x-col class="col" span="8">8</x-col>
    <x-col class="col" span="8">8</x-col>
    <x-col class="col" span="8">8</x-col>
</x-row>

<x-row>
    <x-col class="col" span="6">6</x-col>
    <x-col class="col" span="6">6</x-col>
    <x-col class="col" span="6">6</x-col>
    <x-col class="col" span="6">6</x-col>
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