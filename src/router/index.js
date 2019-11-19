import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'
import MyHome from '@/views/home/MyHome'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyHome',
            component: MyHome,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
