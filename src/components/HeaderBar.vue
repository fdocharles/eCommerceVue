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
                <a href="index.html" class="js-logo-clone">E-Shopper</a>
              </div>
            </div>

            <div class="col-6 col-md-4 order-3 order-md-3 text-right">
              <div class="site-top-icons">
                <ul>
                  <li @click="showLogin">
                    <a href="#"
                      ><span class="icon icon-person icon-color"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/cart" class="site-cart">
                      <span class="icon icon-shopping_cart icon-color"></span>
                      <span class="count">2</span>
                    </a>
                  </li>
                  <li class="d-inline-block d-md-none ml-md-0">
                    <a href="#" class="site-menu-toggle js-menu-toggle"
                      ><span class="icon-menu"></span
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <menu-bar />
    </header>
    <Login :isLoginVisible="isLoginVisible" />
  </fragment>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import Login from "./Login.vue";
export default {
  name: "HeaderBar",
  components: {
    MenuBar,
    Login,
  },
  data() {
    return {
      isLoginVisible: false,
    };
  },
  methods: {
    showLogin() {
      console.log("sssss");
      this.isLoginVisible = true;
    },
  },
};
</script>
