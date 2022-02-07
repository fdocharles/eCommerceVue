<template>
  <fragment>
    <header-bar v-if="isLoggedIn" />
    <BreadCrumb previousPage="Home" currentPage="Shop" />
    <FilterMenu />
  </fragment>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb.vue";
import FilterMenu from "../components/FilterMenu.vue";
import HeaderBar from "../components/HeaderBar.vue";

export default {
  name: "Shop",
  components: {
    BreadCrumb,
    FilterMenu,
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
