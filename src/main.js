import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "vue-easytable/libs/theme-default/index.css";
import { VeTable, VePagination, VeIcon } from "vue-easytable";

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
