import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/test'
import MyHome from '@/views/myhome/MyHome'
import MyMain from "@/views/mymain/MyMain"
import MyArticle from "@/views/myarticle/MyArticle"
import about from "@/views/myarticle/about"
import detail from "@/views/myarticle/content"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MyHome',
            component: MyHome,
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
            redirect:"/detail",
            children:[
                {
                    path: "/detail",
                    component: detail,
                },
                {
                    path: "/about",
                    component: about,
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
