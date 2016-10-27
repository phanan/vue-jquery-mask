<template>
  <div id="app">
    <input type="text" v-mask="'00:00:0000'">
    <input type="text" v-mask="mask">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mask: '00:00:0000'
    }
  }
}
</script>

<style>
</style>
