import Vue from 'vue';
import Router from 'vue-router';
import DivisionWithRemain from '@/components/grade2/DivisionWithRemain';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/components/grade2/DivisionWithRemain',
      name: 'DivisionWithRemain',
      component: DivisionWithRemain,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
