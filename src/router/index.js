import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    beforeEnter: (to, from, next) => {
      axios
        .get("http://localhost:3000/cars")
        .then((response) => {
          to.meta.carData = response.data;
          console.log(response.data); // 打印接口响应数据
          next();
        })
        .catch((error) => {
          console.error(error);
          next();
        });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
