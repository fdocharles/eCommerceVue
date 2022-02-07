<template>
  <fragment>
    <header-bar v-if="isLoggedIn" :user="accountName" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <h1 class="success-order-no-title">Order Placed Successfully !</h1>
          <h5 style="margin-top: 10px">Your Order No : {{ orderNo }}</h5>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";

export default {
  components: { HeaderBar },
  name: "Success",
  data() {
    return {
      accountName: "",
      orderNo: 0,
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.isLoggedIn = true;
      this.accountName = user.name;
    } else {
      this.isLoggedIn = false;
      this.accountName = "";
    }

    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.orderNo = localStorage.getItem("lastOrderNumber");
  },
};
</script>
