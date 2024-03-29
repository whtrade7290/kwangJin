import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyIntro from '@/views/CompanyIntro.vue';
import HaveTechnology from '@/views/HaveTechnology.vue';
import FactoryIntro from '@/views/FactoryIntro.vue';
import ProductHistory from '@/views/ProductHistory.vue';
import ContectPage from '@/views/ContectPage.vue';
import MainPage from '@/views/MainPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/mainPage', component: MainPage },
    { path: '/companyIntro', component: CompanyIntro },
    { path: '/haveTechnology', component: HaveTechnology },
    { path: '/factoryIntro', component: FactoryIntro },
    { path: '/productHistory', component: ProductHistory },
    { path: '/contectPage', component: ContectPage },
  ],

  // scrollBehavior(from, to, savedPosition) {
  //   console.log('from = ', from);
  //   console.log('to = ', to);
  //   console.log('savedPosition = ', savedPosition);
  // },
});
