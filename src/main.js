import Vue from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import router from '@/routes/index';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  VueScrollTo,
}).$mount('#app');
