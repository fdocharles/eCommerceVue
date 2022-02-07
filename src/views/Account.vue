<template>
  <fragment>
    <header-bar v-if="isLoggedIn" />
    <bread-crumb currentPage="Account" previousPage="Shop"></bread-crumb>
    <div class="container">
      <h1 class="mb-2 account-user">
        Hi, {{ accountUser }} &nbsp;&nbsp;&nbsp;({{
          orders ? orders.length : 0
        }}
        orders )
      </h1>
      <br />
      <br />
      <div id="accordion">
        <div class="card" v-for="order in orders" v-bind:key="order.orderNo">
          <div class="card-header" id="headingOne">
            <div class="row">
              <div class="col-md-10">
                <h5 class="mb-0" style="color: black">
                  {{ "#" + order.orderNo }} &nbsp; &nbsp;&nbsp;
                  {{ order.orderDate }}
                </h5>
              </div>
              <div class="col-md-2">
                <h5 class="mb-0" style="color: black; float: right">
                  ${{ order.total }}
                </h5>
              </div>
            </div>
          </div>

          <div
            :id="order.orderNo"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div
                class="row"
                style="margin-top: 10px"
                v-for="item in order.cart"
                v-bind:key="item.id"
              >
                <div class="col-md-1">
                  <img
                    v-bind:src="item.image"
                    alt="Image"
                    class="img-fluid"
                    style="height: 80px"
                  />
                </div>
                <div class="col-md-9">
                  <h6 class="mb-0 text-black">Product : {{ item.name }}</h6>
                  <p class="text-black" style="margin: 0px">
                    Size : {{ item.size }}
                  </p>
                  <p class="text-black" style="margin: 0px">
                    Quantity : {{ item.qty }}
                  </p>
                </div>
                <div class="col-md-2">
                  <button
                    class="btn customize-btn btn-sm btn-block"
                    style="
                      width: unset;
                      margin-left: 30%;
                      width: 100px;
                      height: 40px;
                    "
                    @click="toggle(item)"
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="modalClasses"
      class="fade"
      id="reject"
      role="dialog"
      style="margin-top: 15%"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Review</h4>
            <button type="button" class="close" @click="toggle()">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="row" style="margin-top: 10px">
              <div class="col-md-1">
                <img
                  v-bind:src="reviewItem.image"
                  alt="Image"
                  class="img-fluid"
                  style="height: 80px"
                />
              </div>
              <div class="col-md-9">
                <h6 class="mb-0 text-black">Product : {{ reviewItem.name }}</h6>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="toggle()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb.vue";
import HeaderBar from "../components/HeaderBar.vue";
export default {
  name: "Account",
  components: { HeaderBar, BreadCrumb },
  data() {
    return {
      isLoggedIn: false,
      accountUser: "",
      orders: [],
      showModal: false,
      modalClasses: ["modal", "fade"],
      reviewItem: {},
    };
  },
  methods: {
    orderNumRef(no) {
      return "#" + no;
    },
    closeReview() {
      this.showModal = false;
    },
    showReview() {
      console.log(this.showModal);
      this.showModal = true;
    },
    toggle(item) {
      var products = JSON.parse(localStorage.getItem("products"));
      if (products) {
        this.reviewItem = products.filter((x) => x.id == item.id)[0];
      } else {
        this.reviewItem = {};
      }

      console.log(this.reviewItem);

      document.body.className += " modal-open";
      let modalClasses = this.modalClasses;

      if (modalClasses.indexOf("d-block") > -1) {
        modalClasses.pop();
        modalClasses.pop();

        //hide backdrop
        let backdrop = document.querySelector(".modal-backdrop");
        document.body.removeChild(backdrop);
      } else {
        modalClasses.push("d-block");
        modalClasses.push("show");

        //show backdrop
        let backdrop = document.createElement("div");
        backdrop.classList = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    },
  },
  created() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.isLoggedIn = true;
      this.accountUser = user.name;
    } else {
      this.isLoggedIn = false;
    }

    this.orders = JSON.parse(localStorage.getItem("orders"));
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
