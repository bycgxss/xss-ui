<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: 'XssTabsHead'
  }
</script>

<style scoped>
  .tabs-head {

  }
</style>