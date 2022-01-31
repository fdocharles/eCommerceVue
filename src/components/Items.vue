<template>
  <div class="row mb-5">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";

var tools = [
  {
    name: "ALL WEATHER TERRAIN BRAKER AS/PRO",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    rating: 4.5,
    comments: [
      {
        avatar: "",
        date: "",
        name: "",
        review: "",
        rating: "",
      },
    ],
    Price: "",
    Rating: 3,
  },
];

export default {
  name: "Items",
  components: { ItemCard },
};
</script>
