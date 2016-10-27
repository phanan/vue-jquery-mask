import Vue from 'vue'
import $ from 'jquery'
import 'jquery-mask-plugin'
import App from './App.vue'

Vue.directive('mask', {
  inserted: function (el) {
    el.focus()
  },
  bind: function(el, binding) {
    $(el).mask(binding.value)
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
