import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue'),
      children:[
        {
          path: '/main',
          name: 'main',
          component: () => import(/* webpackChunkName: "about" */ './views/main.vue')
        },
        {
          path: '/view',
          name: 'view',
          component: () => import(/* webpackChunkName: "about" */ './views/view.vue')
        },
        {
          path: '/postList',
          name: 'postList',
          component: () => import(/* webpackChunkName: "about" */ './components/postList.vue')
        },
        {
          path:'/forum',
          name:'forum',
          component: () => import(/* webpackChunkName: "about" */ './components/forum.vue'),
        }
      ]
    },
    {
      path:'/management',
      name:'management',
      component: () => import(/* webpackChunkName: "about" */ './views/management.vue'),
      children:[
        {
          path:'/postArticle',
          name:'postArticle',
          component: () => import(/* webpackChunkName: "about" */ './components/postArticle.vue'),
        },
      ]
    }
  ]
})
