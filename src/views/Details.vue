<template>
  <fragment>
    <header-bar v-if="isLoggedIn" />
    <BreadCrumb :currentPage="currentPage" previousPage="Shop"></BreadCrumb>
    <div class="site-section">
      <div v-if="product" class="container">
        <div class="row">
          <div class="col-md-6">
            <img v-bind:src="product.image" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{ product.name }}</h2>
            <p>
              {{ product.description }}
            </p>
            <p>
              <strong class="text-primary h4">$ {{ product.price }}</strong>
            </p>
            <div class="mb-1 d-flex">
              <label for="option-sm" class="d-flex mr-3 mb-3">
                <span
                  class="d-inline-block mr-2"
                  style="top: -2px; position: relative"
                  ><input
                    type="radio"
                    id="option-sm"
                    name="shop-sizes"
                    value="small"
                    v-model="size"
                /></span>
                <span class="d-inline-block text-black">Small</span>
              </label>
              <label for="option-md" class="d-flex mr-3 mb-3">
                <span
                  class="d-inline-block mr-2"
                  style="top: -2px; position: relative"
                  ><input
                    type="radio"
                    id="option-md"
                    name="shop-sizes"
                    value="medium"
                    v-model="size"
                /></span>
                <span class="d-inline-block text-black">Medium</span>
              </label>
              <label for="option-lg" class="d-flex mr-3 mb-3">
                <span
                  class="d-inline-block mr-2"
                  style="top: -2px; position: relative"
                  ><input
                    type="radio"
                    id="option-lg"
                    name="shop-sizes"
                    value="large"
                    v-model="size"
                /></span>
                <span class="d-inline-block text-black">Large</span>
              </label>
              <label for="option-xl" class="d-flex mr-3 mb-3">
                <span
                  class="d-inline-block mr-2"
                  style="top: -2px; position: relative"
                  ><input
                    type="radio"
                    id="option-xl"
                    name="shop-sizes"
                    value="extraLarge"
                    v-model="size"
                /></span>
                <span class="d-inline-block text-black"> Extra Large</span>
              </label>
            </div>
            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="minusQty"
                  >
                    &minus;
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control text-center"
                  value="1"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  v-model="qty"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    @click="plusQty"
                  >
                    &plus;
                  </button>
                </div>
              </div>
            </div>
            <p>
              <button
                @click="AddProduct"
                class="[buy-now btn btn-sm customize-btn"
                :class="{ disabled: isAddToCartDisabled }"
              >
                Add To Cart
              </button>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <reviews />
      </div>
    </div>
  </fragment>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb.vue";
import HeaderBar from "../components/HeaderBar.vue";
import Reviews from "../components/Reviews.vue";
import json from "../data/data.json";

var currentProduct = null;

export default {
  name: "Details",
  components: { BreadCrumb, Reviews, HeaderBar },
  data() {
    return {
      currentPage: this.$route.params.id,
      product: json.filter((x) => x.id == this.$route.params.id)[0],
      size: "",
      qty: 0,
      isAddToCartDisabled: true,
      isLoggedIn: false,
    };
  },
  methods: {
    minusQty() {
      if (this.qty > 0) this.qty -= 1;

      this.udapteAddToCartBtn();
    },
    plusQty() {
      this.qty += 1;
      this.udapteAddToCartBtn();
    },
    AddProduct() {
      var cart = localStorage.getItem("cart");
      var currProduct = {
        id: this.$route.params.id,
        size: this.size,
        qty: this.qty,
        image: this.product.image,
        name: this.product.name,
        price: this.product.price,
        total: this.product.price * this.qty,
      };

      if (cart) {
        cart = JSON.parse(cart);

        cart = [
          ...cart.filter((x) => {
            return x.id != currProduct.id;
          }),
          currProduct,
        ];
      } else {
        cart = [currProduct];
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      this.$.emit("updateCartCount");
    },
    udapteAddToCartBtn() {
      this.isAddToCartDisabled = this.qty > 0 && this.size ? false : true;
    },
  },
  created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
};
</script>
