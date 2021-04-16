import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About.vue';
import MyHome from '@/components/MyHome.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    redirect: '/myhome',
  },
  {
    path: '/myhome',
    component: MyHome,
  },
  {
    path: '/about',
    component: About,
  },
  ],
});
