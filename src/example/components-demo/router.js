import Vue from 'vue'
import Router from 'vue-router'
import Intro from './views/intro.vue'
import Button from './views/button.vue'
import Link from './views/link.vue'
import Input from './views/input.vue'
import DragTable from './views/drag-table.vue'
import Upload from './views/upload.vue'
import CheckBox from './views/checkbox.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/intro'
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro,
            meta: { name: '安装说明' }
        },
        {
            path: '/button',
            name: 'button',
            component: Button,
            meta: { name: 'button按钮' }
        },
        {
            path: '/link',
            name: 'link',
            component: Link,
            meta: { name: 'link连接' }
        },
        {
            path: '/input',
            name: 'input',
            component: Input,
            meta: { name: 'input输入框' }
        },
        {
            path: '/dragTable',
            name: 'dragTable',
            component: DragTable,
            meta: { name: 'dragTable示例' }
        },
        {
            path: '/upload',
            name: 'upload',
            component: Upload,
            meta: { name: 'upload上传' }
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: CheckBox,
            meta: { name: 'checkbox多选框' }
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
