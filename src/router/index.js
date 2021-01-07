import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddClient from "../views/AddClient"
import AddEmployee from "../views/AddEmployee"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addclient",
    name: "AddClient",
    component: AddClient
  },
  {
    path: "/addemployee",
    name: "AddEmployee",
    component: AddEmployee
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
