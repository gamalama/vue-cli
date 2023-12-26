import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import VueRouter from "vue-router";
import ProductsComponent from "@/components/ProductsComponent.vue";
import CheckoutComponent from "@/components/CheckoutComponent.vue";

library.add(faShoppingCart, faDollarSign);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: ProductsComponent,
    },
    {
      path: "/checkout",
      component: CheckoutComponent,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
