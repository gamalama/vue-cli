<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <product-list :products="products" :maximum="maximum"></product-list>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 20,
      products: [],
    };
  },
  components: {
    ProductList,
    // FontAwesomeIcon,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>
