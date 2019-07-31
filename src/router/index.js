import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global"
// console.log(global.getParam())
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示homepage页
      redirect: "homepage",
      children:[
        {
          path:"homepage",
          name: 'homepage',
          meta:{
            keepAlive:true
          },
          //keepAlive true 禁止重复加载  false不禁止
          component: resolve => require(['@/components/main/homepage'], resolve)
        },
        {
          path:"news",
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve),
        },
        {
          path:"test",
          name: 'test',
          component: resolve => require(['@/components/main/test'], resolve)
        },
        {
          path:"show",
          name: 'show',
          component: resolve => require(['@/components/main/details'], resolve)
        },
        {
          path:"edit",
          name: 'edit',
          component: resolve => require(['@/components/main/edit'], resolve)
        },
        {
          path:"login",
          name: 'login',
          component: resolve => require(['@/components/main/login'], resolve)
        },
        {
          path:"my",
          name: 'my',
          component: resolve => require(['@/components/main/my'], resolve)
        }
      ]
    }
  ]
})

export default routers
