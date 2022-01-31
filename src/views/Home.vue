<template>
  <fragment>
    <banner />
    <FeaturedProducts />
  </fragment>
</template>

<script>
import Banner from "../components/Banner.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";

export default {
  name: "Home",
  components: {
    Banner,
    FeaturedProducts,
  },
};
</script>
