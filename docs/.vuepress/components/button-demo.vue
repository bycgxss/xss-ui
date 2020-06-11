<template>
  <div>
    <x-button>按钮</x-button>
    <x-button icon="settings" icon-position="right">按钮</x-button>
    <x-button :loading="isLoading" @click="isLoading=!isLoading">按钮</x-button>
    <x-button disabled>按钮</x-button>

    <x-button-group>
      <x-button icon="left">上一页</x-button>
      <x-button icon="right" icon-position="right">下一页</x-button>
    </x-button-group>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import buttonGroup from '../../../src/button-group'

  export default {
    components: {
      'x-button': Button,
      'x-button-group': buttonGroup
    },
    data() {
      return {
        isLoading: true,
        content: `
<x-button>按钮</x-button>
<x-button icon="settings" icon-position="right">按钮</x-button>
<x-button :loading="isLoading" @click="isLoading=!isLoading">按钮</x-button>
<x-button disabled>按钮</x-button>

<x-button-group>
  <x-button icon="left">上一页</x-button>
  <x-button icon="right" icon-position="right">下一页</x-button>
</x-button-group>`.trim()
      }
    }
  }
</script>