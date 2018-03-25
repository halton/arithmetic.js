import Vue from 'vue';
import Router from 'vue-router';
import DivisionWithRemain from '@/components/DivisionWithRemain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DivisionWithRemain',
      component: DivisionWithRemain,
    },
  ],
});
