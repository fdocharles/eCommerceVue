<template>
  <fragment>
    <header-bar v-if="isLoggedIn" />
    <banner />
    <FeaturedProducts />
  </fragment>
</template>

<script>
import Banner from "../components/Banner.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";
import HeaderBar from "../components/HeaderBar.vue";

console.log(localStorage.getItem("products"));

export default {
  name: "Home",
  components: {
    Banner,
    FeaturedProducts,
    HeaderBar,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
};
</script>
