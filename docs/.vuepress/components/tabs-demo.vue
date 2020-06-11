<template>
  <div>
    <x-tabs :selected.sync="tabs">
      <x-tabs-head>
        <x-tabs-item name="one">one</x-tabs-item>
        <x-tabs-item name="two" disabled >
          two
        </x-tabs-item>
        <x-tabs-item name="three">
          three
        </x-tabs-item>
      </x-tabs-head>
      <x-tabs-body>
        <x-tabs-pane name="one">内容 1</x-tabs-pane>
        <x-tabs-pane name="two">内容 2</x-tabs-pane>
        <x-tabs-pane name="three">内容 3</x-tabs-pane>
      </x-tabs-body>
    </x-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs'
  import tabsHead from '../../../src/tabs-head'
  import tabsBody from '../../../src/tabs-body'
  import tabsItem from '../../../src/tabs-item'
  import tabsPane from '../../../src/tabs-pane'
  export default {
    name: "tabs-demo",
    data(){
      return {
        tabs:'one',
        content:`
 <x-tabs :selected.sync="tabs">
    <x-tabs-head>
        <x-tabs-item name="one">
        one
        </x-tabs-item>
        <x-tabs-item name="two" disabled>
            two
        </x-tabs-item>
        <x-tabs-item name="three">
            three
        </x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
        <x-tabs-pane name="one">内容 1</x-tabs-pane>
        <x-tabs-pane name="two">内容 2</x-tabs-pane>
        <x-tabs-pane name="three">内容 3</x-tabs-pane>
    </x-tabs-body>
</x-tabs>`.trim()
      }
    },
    components:{
      'x-tabs':Tabs,
      'x-tabs-head':tabsHead,
      'x-tabs-body':tabsBody,
      'x-tabs-item':tabsItem,
      'x-tabs-pane':tabsPane
    },
  }
</script>