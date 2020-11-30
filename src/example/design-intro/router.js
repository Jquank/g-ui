import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/deepCopy'
        },
        {
            path: '/deepCopy',
            name: 'deepCopy',
            meta: { name: 'deepCopy' },
            component: () => import('./views/deep-copy/deep-copy')
        },
        {
            path: '/promise',
            name: 'promise',
            meta: { name: 'promise' },
            component: () => import('./views/promise/promise')
        },
        {
            path: '/pubSub',
            name: 'pubSub',
            meta: { name: 'pubSub' },
            component: () => import('./views/pub-sub-model/index.vue')
        },
        {
            path: '/jsonForm',
            name: 'jsonForm',
            meta: { name: 'jsonForm' },
            component: () => import('./views/json-form/index.vue')
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
