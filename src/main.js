import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "vue-easytable/libs/theme-default/index.css";
import { VeTable, VePagination, VeIcon } from "vue-easytable";
import axios from "axios";
import vmodal from 'vue-js-modal';
import router from './router';


    
Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(vmodal)

Vue.config.productionTip = false;
Vue.prototype.$http = axios;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#VUEJSContainer");
