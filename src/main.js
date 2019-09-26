import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
// import G from '@jquank/g-ui'
// import '@jquank/g-ui/dist/g-ui.css'
// Vue.use(G)
import './assets/common-less/index.less'
import 'components/demo/index.js'
Vue.config.productionTip = false
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
