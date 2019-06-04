import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Look/:id',
      name: 'Look',
      component: Look,
      children: [
        {
          path: 'look-one',
          name: 'LookOne',
          component: () => import('../components/LookOne.vue')
        },
        {
          path: 'look-two',
          name: 'LookTwo',
          component: () => import('../components/LookTwo.vue')
        }
      ]
    },
    {
      path: '/detail',
      redirect: '/'
    }
  ]
})
