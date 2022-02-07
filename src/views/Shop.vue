<template>
  <fragment>
    <header-bar />
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
    return {};
  },
  created() {
    if (localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(json));
    }
  },
};
</script>
