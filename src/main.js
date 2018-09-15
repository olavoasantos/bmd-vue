import Vue from 'vue';
import BMD from '../index';
import App from './App.vue';

Vue.use(BMD);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
