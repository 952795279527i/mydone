import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import "./assets/index.css";
import axios from "axios";
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
