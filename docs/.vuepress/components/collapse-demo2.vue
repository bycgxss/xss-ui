<template>
  <div>
    <x-collapse :selected.sync="tabs" single >
      <x-collapse-item title="标题1" name="one">这是内容</x-collapse-item>
      <x-collapse-item title="标题2" name="two">这是内容</x-collapse-item>
      <x-collapse-item title="标题3"  name="three">这是内容</x-collapse-item>
    </x-collapse>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import collapseItem from '../../../src/collapse-item'

  export default {
    name: "collapse-demo2",
    data(){
      return{
        tabs:['one'],
        content:`
 tabs:['one']

<x-collapse :selected.sync="tabs" single >
    <x-collapse-item title="标题1" name="one">这是内容</x-collapse-item>
    <x-collapse-item title="标题2" name="two">这是内容</x-collapse-item>
    <x-collapse-item title="标题3"  name="three">这是内容</x-collapse-item>
</x-collapse>
                `.trim()
      }
    },
    components:{
      'x-collapse':Collapse,
      'x-collapse-item':collapseItem
    }
  }
</script>

<style scoped lang="scss">

</style>