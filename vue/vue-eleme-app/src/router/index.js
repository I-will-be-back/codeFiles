import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/Ratings'
import seller from '@/components/seller/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
  ]
})
