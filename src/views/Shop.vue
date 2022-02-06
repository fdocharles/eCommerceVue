<template>
  <fragment>
    <BreadCrumb previousPage="Home" currentPage="Shop" />
    <FilterMenu />
  </fragment>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb.vue";
import FilterMenu from "../components/FilterMenu.vue";

var products = localStorage.getItem("products");

export default {
  name: "Shop",
  components: {
    BreadCrumb,
    FilterMenu,
  },
};
</script>
