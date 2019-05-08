import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/homePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/technology',
      name: 'technology',
       // route level code-splitting
      // this generates a separate chunk (main.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "main" */ './views/technology.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "main" */ './views/article.vue')
    },
    {
      path: '/otherProject',
      name: 'otherProject',
      component: () => import(/* webpackChunkName: "main" */ './views/otherProject.vue')
    }
  ]
})
