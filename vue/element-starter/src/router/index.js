import Vue from 'vue'
import Router from 'vue-router'
import {login} from 'pages/'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

export default new Router({
  routes
})