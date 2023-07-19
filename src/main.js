import Vue from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import router from '@/routes/index';
import VueScrollTo from 'vue-scrollto';
import VueNaverMap from 'vue-naver-map';

Vue.use(VueScrollTo);
Vue.use(VueNaverMap, {
  key: 'xq30x63yvw',
  libraries: ['geocoder'] /* type: Array */,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  VueScrollTo,
}).$mount('#app');
