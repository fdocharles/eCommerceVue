<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9 order-2">
          <Items :items="items" />
        </div>

        <div class="col-md-3 order-1 mb-5 mb-md-0">
          <div class="border p-4 rounded mb-4">
            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Size</h3>
              <label for="s_sm" class="d-flex">
                <input type="checkbox" id="s_sm" class="mr-2 mt-1" />
                <span class="text-black">Small (2,319)</span>
              </label>
              <label for="s_md" class="d-flex">
                <input type="checkbox" id="s_md" class="mr-2 mt-1" />
                <span class="text-black">Medium (1,282)</span>
              </label>
              <label for="s_lg" class="d-flex">
                <input type="checkbox" id="s_lg" class="mr-2 mt-1" />
                <span class="text-black">Large (1,392)</span>
              </label>
            </div>

            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Color</h3>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-danger color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Red (2,429)</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-success color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Green (2,298)</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-info color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Blue (1,075)</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-primary color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Purple (1,075)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Items from "./Items.vue";

//var products = localStorage.getItem("products");

export default {
  components: { Items },
  name: "FilterMenu",
  data() {
    return {
      items: products,
    };
  },
};
</script>
