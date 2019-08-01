// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 本地跑，测试插件可用性
import myPlugin from './lib/keyboard'
Vue.use(myPlugin);

// npm包 keyboard 文件夹放在 node_modules 中测试包可用性
// import keyboard from 'zxd-pay-keyboard'
// Vue.use(keyboard);

Vue.config.productionTip = false

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})