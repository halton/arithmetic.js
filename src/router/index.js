import Vue from 'vue';
import Router from 'vue-router';
import Addition from '@/components/grade1/Addition';
import Substraction from '@/components/grade1/Substraction';
import DivisionWithRemain from '@/components/grade2/DivisionWithRemain';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components/grade1/Addition',
      name: 'Addition',
      component: Addition,
    },
    {
      path: '/components/grade1/Substraction',
      name: 'Substraction',
      component: Substraction,
    },
    {
      path: '/components/grade2/DivisionWithRemain',
      name: 'DivisionWithRemain',
      component: DivisionWithRemain,
    },
  ],
});
