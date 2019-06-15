import Vue from 'vue' // mvvm
import App from './App.vue' // 根组件
import store from './store' // 统一管理应状态
// SPA
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
