import Vue from 'vue'
import App from './App.vue'
import store from './store'
import g from '@jquank/g-ui'
import './assets/common-less/index.less'
Vue.use(g)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
