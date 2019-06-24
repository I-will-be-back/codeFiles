import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // 一级页面路由配置
    {
      path: '/',
      name: 'find',
      component: () => import('@/pages/Find.vue'),
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('@/pages/Study.vue'),
    },
    {
      path: '/lectureHall',
      name: 'lectureHall',
      component: () => import('@/pages/LectureHall.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/pages/Mine.vue'),
    },
  ],
});
