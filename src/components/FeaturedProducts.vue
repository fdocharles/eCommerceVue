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
            <template v-for="product in featuredProducts">
              <featured-item-card
                :category="product.Category"
                :title="product.Title"
                :price="product.Price"
                :rating="product.Rating"
                :image="product.Image"
                v-bind:key="product.Title"
              />
            </template>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img
                    src="images/cloth_1.jpg"
                    alt="Image placeholder"
                    class="img-fluid"
                  />
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Tank Top</a></h3>
                  <p class="mb-0">Finding perfect t-shirt</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img
                    src="images/shoe_1.jpg"
                    alt="Image placeholder"
                    class="img-fluid"
                  />
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Corater</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img
                    src="images/cloth_2.jpg"
                    alt="Image placeholder"
                    class="img-fluid"
                  />
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Polo Shirt</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img
                    src="images/cloth_3.jpg"
                    alt="Image placeholder"
                    class="img-fluid"
                  />
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">T-Shirt Mockup</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img
                    src="images/shoe_1.jpg"
                    alt="Image placeholder"
                    class="img-fluid"
                  />
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Corater</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
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
      featuredProducts: fProducts,
    };
  },
};
</script>
