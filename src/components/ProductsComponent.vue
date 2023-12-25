<template>
  <div>
    <h1>IDShop</h1>
    <navbar-component
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"
    ></navbar-component>
    <price-slider
      :slider-status="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <product-list
      :products="products"
      :maximum="maximum"
      @add-item="addItem"
    ></product-list>
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
  methods: {
    toggleSlider: function () {
      this.$emit("toggle");
    },
    addItem: function (item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<style></style>
