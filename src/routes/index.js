import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyIntro from '@/views/CompanyIntro.vue';
import HaveTechnology from '@/views/HaveTechnology.vue';
import FactoryIntro from '@/views/FactoryIntro.vue';
import ProductHistory from '@/views/ProductHistory.vue';
import ContectPage from '@/views/ContectPage.vue';
import MainPage from '@/views/MainPage.vue';
import LoginPage from '@/views/LoginPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/mainPage', component: MainPage },
    { path: '/companyIntro', component: CompanyIntro },
    { path: '/haveTechnology', component: HaveTechnology },
    { path: '/factoryIntro', component: FactoryIntro },
    { path: '/productHistory', component: ProductHistory },
    { path: '/contectPage', component: ContectPage },
    { path: '/loginPage', component: LoginPage },
  ],
});
