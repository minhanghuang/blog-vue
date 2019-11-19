import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
