<template>
  <div class="container login-container" style="margin-top: 10%">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 login-form-1">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="site-logo-login">
              <a href="index.html" class="js-logo-clone">Shoppers</a>
            </div>
          </div>
        </div>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email *"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Your Password *"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <p v-if="isInvalidLogin" style="color: red">Invalid credentials</p>
          </div>
          <div class="form-group">
            <input
              type="button"
              class="btnSubmit"
              style="background-color: #fdb819; color: Black"
              value="Login"
              @click="login"
            />
          </div>
        </form>
      </div>

      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      isInvalidLogin: false,
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        this.isInvalidLogin = true;
      } else {
        this.isInvalidLogin = false;
        this.$router.push("Shop");
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: this.email.split("@")[0],
          })
        );
      }
    },
    created() {
      localStorage.removeItem("user");
    },
  },
};
</script>

<style scoped>
body {
  background-color: #8c92a0;
}
</style>
