import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'
import MyHome from '@/views/myhome/MyHome'
import MyMain from "@/views/mymain/MyMain"
import MyArticle from "@/views/myarticle/MyArticle"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyHome',
            component: MyHome,
            // redirect:"/",
            // children:[
            //     {
            //         path: "/main",
            //         component: () => import("@/views/mymain/MyMain")
            //     },
            // ]
        },
        {
            path: '/main',
            name: 'MyMain',
            component: MyMain,
        },
        {
            path: '/article',
            name: 'MyArticle',
            component: MyArticle,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
