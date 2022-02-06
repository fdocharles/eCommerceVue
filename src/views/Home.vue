<template>
  <fragment>
    <banner />
    <FeaturedProducts />
  </fragment>
</template>

<script>
import Banner from "../components/Banner.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";

console.log(localStorage.getItem("products"));

export default {
  name: "Home",
  components: {
    Banner,
    FeaturedProducts,
  },
};
</script>
