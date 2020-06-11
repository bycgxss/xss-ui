<template>
  <div>
    <x-input value="这是输入框" class="one input"></x-input>
    <x-input value="这是输入框" disabled class="two input"></x-input>
    <x-input value="这是输入框" readonly class="three input"></x-input>
    <x-input value="123" error="请重新输入手机号码" class="four input"></x-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Input from '../../../src/input'
  export default {
    name: "input-demo",
    data(){
      return{
        content:`
<y-input value="这是输入框"></y-input>
<y-input value="这是输入框" disabled></y-input>
<y-input value="这是输入框" readonly></y-input>
<y-input value="123" error="请重新输入手机号码"></y-input>
                `.trim()
      }
    },
    components:{
      'x-input':Input,
    }
  }
</script>