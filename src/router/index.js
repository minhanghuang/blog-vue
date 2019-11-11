import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/myhome/myhome'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect:"/home",
            children:[
                {
                    path: "/home",
                    component: () => import("@/views/mymain/mymain")
                },
            ]
        },
    ]
})
