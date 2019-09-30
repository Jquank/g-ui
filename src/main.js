import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/example-less/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/common-less/index.less'

import G from '@jquank/g-ui'
import '@jquank/g-ui/dist/g-ui.css'

Vue.use(G)
Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
