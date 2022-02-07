<template>
  <div class="site-section block-3 site-blocks-2 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 site-section-heading text-center pt-4">
          <h2>Featured Products</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="nonloop-block-3 owl-carousel owl-loaded owl-drag">
            <div
              v-for="item in featuredProducts"
              class="item"
              v-bind:key="item.id"
            >
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <a v-bind:href="redirect(item.id)"
                    ><img
                      v-bind:src="item.image"
                      alt="Image placeholder"
                      class="img-fluid"
                  /></a>
                </figure>
                <div>
                  <p class="mb-0 item-card-category-text">
                    {{ item.category }}
                  </p>
                  <p class="item-card-header">
                    <a v-bind:href="redirect(item.id)">{{ item.name }}</a>
                  </p>
                  <p class="item-card-rating-wrapper">
                    <span
                      v-for="index in 5"
                      :key="index"
                      class="fa fa-star"
                      v-bind:class="[
                        index <= item.rating ? 'rating-star-checked' : '',
                      ]"
                    ></span>
                  </p>
                  <p class="font-weight-bold item-card-price">
                    $ {{ item.price }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedItemCard from "./FeaturedItemCard.vue";
import json from "./../data/data.json";

var fProducts = [
  {
    Category: "Angle Grinders",
    Title: "SPORT BODY PARTS FO SHEVROLET 2015-2017",
    Price: "$ 45",
    Rating: 5,
    Image:
      "https://chromium.themes.zone/toolshop/wp-content/uploads/sites/14/2017/06/prod_3-300x300.jpg",
  },
];

export default {
  components: { FeaturedItemCard },
  name: "FeaturedProduct",
  data() {
    return {
      featuredProducts: json.filter((x) => x.featured),
    };
  },
  methods: {
    redirect(id) {
      return "/shop/" + id;
    },
  },
};
</script>
