<template>
  <fragment>
    <header class="site-navbar" role="banner">
      <div class="site-navbar-top">
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left"
            ></div>

            <div
              class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center"
            >
              <div class="site-logo">
                <a href="index.html" class="js-logo-clone">Shoppers</a>
              </div>
            </div>

            <header-bar-controls
              v-on:updateCartCount="updateCartCount"
              :user="user"
            />
          </div>
        </div>
      </div>
      <menu-bar />
    </header>
  </fragment>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import Login from "./Login.vue";
import HeaderBarControls from "./HeaderBarControls.vue";

export default {
  name: "HeaderBar",
  props: ["user"],
  components: {
    MenuBar,
    Login,
    HeaderBarControls,
  },
  data() {
    return {
      cartCount: 0,
    };
  },
  methods: {
    updateCartCount() {
      var length = JSON.parse(localStorage.getItem("cart")).length;
      this.cartCount = length > 0 ? length : 0;
    },
  },
};
</script>
