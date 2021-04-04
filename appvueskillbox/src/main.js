import Vue from 'vue';
import App from './App.vue';

import { str1, str2 } from './first';
import alertStr from './second';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertStr(str1);
alertStr(str2);
