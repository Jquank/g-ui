import Vue from 'vue'
import Router from 'vue-router'
import Button from 'ex/views/button.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'button',
      component: Button
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
