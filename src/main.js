import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "practice"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
