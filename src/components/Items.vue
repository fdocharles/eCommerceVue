<template>
  <div class="row mb-5">
    <ItemCard
      v-for="product in products" 
      v-bind:key="product.id"
      v-bind:id="product.id"
      v-bind:name="product.title"
      v-bind:image="product.image"
      v-bind:category="product.category"
      v-bind:rating="product.rating"
      v-bind:description="product.description"
      v-bind:price="product.price"
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
  // data: () => {
  //   return {
  //     // products: [
  //     //   {
  //     //     id: 1,
  //     //     name: "AAA",
  //     //     description: "aaaa",
  //     //     category: "111",
  //     //     price: 23,
  //     //     rating: 3,
  //     //     comments: [
  //     //       {
  //     //         id: 1,
  //     //         name: "John",
  //     //         image: "",
  //     //         rating: 4,
  //     //         comment: "nice product",
  //     //       },
  //     //       {
  //     //         id: 2,
  //     //         name: "Alex",
  //     //         image: "",
  //     //         rating: 1,
  //     //         comment: "bad product",
  //     //       },
  //     //     ],
  //     //   },
  //     //   {
  //     //     id: 2,
  //     //     name: "BBB",
  //     //     description: "bbbb",
  //     //     category: "222",
  //     //     price: 12,
  //     //     rating: 5,
  //     //     comments: [
  //     //       {
  //     //         id: 1,
  //     //         name: "Charles",
  //     //         image: "",
  //     //         rating: 2,
  //     //         comment: "OK",
  //     //       },
  //     //     ],
  //     //   },
  //     // ],
  //   };
  // },
  // mounted: () => {
  //   console.log("mounted");
  // },
  data() {
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
