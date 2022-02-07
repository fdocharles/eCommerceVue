<template>
  <div class="row mb-5">
    <ItemCard
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:id="product.id"
      v-bind:name="product.name"
      v-bind:category="product.category"
      v-bind:price="product.price"
      v-bind:rating="product.rating"
      v-bind:image="product.image"
    />
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import json from "./../data/data.json";

export default {
  name: "Items",
  components: { ItemCard },
  props: ["items"],
  data: () => {
    return {
      products: json,
    };
  },
  mounted: () => {
    console.log("mounted");

    console.log(json);
  },
};
</script>
