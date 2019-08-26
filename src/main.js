import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import G from '@jquank/g-ui'
// import '@jquank/g-ui/dist/g-ui.css'
// Vue.use(G)
import './assets/common-less/index.less'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
