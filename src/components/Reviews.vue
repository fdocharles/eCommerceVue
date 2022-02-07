<template></template>
<script>
export default {
  name: "Reviews",
  props: ["id"],
  data() {
    return {
      reviews: [],
    };
  },
  create() {
    var products = JSON.parse(localStorage.getItem("products"));

    if (products && products.length > 0) {
      console.log(products.filter((x) => x.id == this.props.id));
    }

    this.reviews = [1, 2, 3, 4];
  },
};
</script>
