import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Hi from '@/components/Hi'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'main',
      component: main
    },
    {
      path: '/hi/params/:newAddress',
      name:'hi',
      component: Hi,
      alias:'/xiaochao/params/:newAddress',
    }
  ]
})
