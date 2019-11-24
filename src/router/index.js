import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'
import MyHome from '@/views/myhome/MyHome'
import MyCatalog from "@/views/mycatalog/MyCatalog"
import MyMain from "@/views/mymain/MyArticle"
import about from "@/views/mymain/about"
import detail from "@/views/mymain/content"
import timeline from "@/views/mymain/timeline"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyHome',
            component: MyHome,
        },
        {
            path: '/catalog',
            name: 'MyCatalog',
            component: MyCatalog,
        },
        {
            path: '/main',
            name: 'MyMain',
            component: MyMain,
            redirect:"/catalog",
            children:[
                {
                    path: "/main/detail",
                    component: detail,
                },
                {
                    path: "/main/about",
                    component: about,
                },
                {
                    path: "/main/timeline",
                    component: timeline,
                },
            ]
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
