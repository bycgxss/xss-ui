<template>
  <div class="wrapper">
    <div class="block">
      <x-popover trigger="click" position="left" class="popover">
        <x-button>左</x-button>
        <div slot="content">你好</div>
      </x-popover>
      <x-popover trigger="click" position="top" class="popover">
        <x-button>上</x-button>
        <div slot="content">你好</div>
      </x-popover>
      <x-popover trigger="click" position="bottom" class="popover">
        <x-button>下</x-button>
        <div slot="content">你好</div>
      </x-popover>
      <x-popover trigger="click" position="right" class="popover">
        <x-button>右</x-button>
        <div slot="content">你好</div>
      </x-popover>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'
  export default {
    components: {
      'x-popover': Popover,
      'x-button': Button
    },
    data(){
      return{
        content: `
<x-popover trigger="click" position="left" class="popover">
    <x-button>左</x-button>
    <div slot="content">你好</div>
</x-popover>
<x-popover trigger="click" position="top" class="popover">
    <x-button>上</x-button>
    <div slot="content">你好</div>
</x-popover>
<x-popover trigger="click" position="bottom" class="popover">
    <x-button>下</x-button>
    <div slot="content">你好</div>
</x-popover>
<x-popover trigger="click" position="right" class="popover">
    <x-button>右</x-button>
    <div slot="content">你好</div>
</x-popover>
      `.trim()
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper{
    .popover{
      margin-left:20px;
    }
  }
</style>