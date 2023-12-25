<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animate__animated animate__fadeInRight">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illum
      modi optio placeat velit. Ad animi deleniti enim error fuga, maxime natus
      nemo obcaecati odit, placeat reiciendis repellat tenetur voluptatum!
    </p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price :value="4.23"></price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "@/components/PriceComponent.vue";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Price,
  },
};
</script>
