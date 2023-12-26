<template>
  <div>
    <h1>IDShop</h1>
    <navbar-component
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
    ></navbar-component>
    <price-slider :slider-status="sliderStatus"></price-slider>
    <product-list :products="products" :maximum="maximum"></product-list>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import ProductList from "@/components/ProductList.vue";
import PriceSlider from "@/components/PriceSlider.vue";

export default {
  name: "products-component",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  components: {
    NavbarComponent,
    ProductList,
    PriceSlider,
  },
};
</script>

<style></style>
