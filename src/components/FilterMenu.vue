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
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Filter by Price
              </h3>
              <div id="slider-range" class="border-primary"></div>
              <input
                type="text"
                name="text"
                id="amount"
                class="form-control border-0 pl-0 bg-white"
                disabled=""
              />
            </div>

            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Category</h3>
              <label for="s_dr" class="d-flex">
                <input type="checkbox" id="s_dr" class="mr-2 mt-1" />
                <span class="text-black">Dresses</span>
              </label>
              <label for="s_de" class="d-flex">
                <input type="checkbox" id="s_de" class="mr-2 mt-1" />
                <span class="text-black">Denims</span>
              </label>
              <label for="s_to" class="d-flex">
                <input type="checkbox" id="s_to" class="mr-2 mt-1" />
                <span class="text-black">Tops</span>
              </label>
            </div>

            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Size</h3>
              <label for="s_sm" class="d-flex">
                <input type="checkbox" id="s_sm" class="mr-2 mt-1" />
                <span class="text-black">Small</span>
              </label>
              <label for="s_md" class="d-flex">
                <input type="checkbox" id="s_md" class="mr-2 mt-1" />
                <span class="text-black">Medium</span>
              </label>
              <label for="s_lg" class="d-flex">
                <input type="checkbox" id="s_lg" class="mr-2 mt-1" />
                <span class="text-black">Large</span>
              </label>
              <label for="s_xl" class="d-flex">
                <input type="checkbox" id="s_xl" class="mr-2 mt-1" />
                <span class="text-black">Extra Large</span>
              </label>
            </div>

            <div class="mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Color</h3>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-danger color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Red</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-success color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Green</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-info color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Blue</span>
              </a>
              <a href="#" class="d-flex color-item align-items-center">
                <span
                  class="bg-primary color d-inline-block rounded-circle mr-2"
                ></span>
                <span class="text-black">Purple</span>
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
