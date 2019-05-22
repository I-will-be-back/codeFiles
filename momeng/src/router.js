import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import(/* webpackChunkName: "about" */ './views/mainPage.vue'),
      children:[
        {
          path: '/',
          name: 'homePage',
          component: () => import(/* webpackChunkName: "about" */ './components/homePage.vue')
        },
        {
          path: '/postList',
          name: 'postList',
          component: () => import(/* webpackChunkName: "about" */ './views/postList.vue')
        },
        {
          path: '/forum',
          name: 'forum',
          component: () => import(/* webpackChunkName: "about" */ './views/forum.vue')
        },
        {
          path: '/news',
          name: 'news',
          component: () => import(/* webpackChunkName: "about" */ './views/news.vue')
        },
      ]
    },
    {
      path: '/management',
      name: 'management',
      component: () => import(/* webpackChunkName: "about" */ './views/management.vue'),
      children: [
        {
          path: '/management',
          name: 'postArticle',
          component: () => import(/* webpackChunkName: "about" */ './components/postArticle.vue')
        }
      ]
    }
  ]
})
