import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import BaseSelect from '@/components/ui/BaseSelect';
import BaseDatePicker from '@/components/ui/BaseDatePicker';
import BaseDownloadField from '@/components/ui/BaseDownloadField';

Vue.config.productionTip = false;

Vue.component('base-select', BaseSelect);
Vue.component('base-date-picker', BaseDatePicker);
Vue.component('base-download-field', BaseDownloadField);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
