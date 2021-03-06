import Vue from 'vue'
import App from './app.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/example-less/index.less'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
