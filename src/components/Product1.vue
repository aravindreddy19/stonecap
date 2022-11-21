<template>
  <div class="product1">
    <section class="onee">
      <div class="left">
        <div class="ones">
          <div class="items"><img class="" v-bind:src="item1" /></div>
          <div class="items"><img class="" v-bind:src="item2" /></div>
          <div class="items"><img class="" v-bind:src="item3" /></div>
          <div class="items"><img class="" v-bind:src="item4" /></div>
        </div>

        <div class="twos">
          <div><img class="" v-bind:src="item5" /></div>
        </div>
      </div>

      <aside class="right">
        <div class="ph">
          <ProductHeader />
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
import ProductHeader from "../views/ProductHeader.vue";

export default {
  data() {
    return {
      brandName: "FurniFuture",
      item1: require("../assets/images/s1.png"),
      item2: require("../assets/images/s2.png"),
      item3: require("../assets/images/s3.png"),
      item4: require("../assets/images/s4.png"),
      item5: require("../assets/images/sm.png"),
      returnd: require("../assets/images/product-return.png"),
      check: require("../assets/images/checked.png"),
      mask: require("../assets/images/mask.png"),
    };
  },
  components: {
    ProductHeader,
  },
};
</script>

<style scoped>
@media screen and (max-device-width: 450px) {
}

.onee {
  display: flex;
}

.onee .left {
  width: 50%;
  display: flex;
}

.onee .left .ones {
  width: 20%;
  margin-right: -6rem;
}

.onee .left .items {
  height: 7rem;
  width: 6rem;
  margin-top: 1rem;
  margin-left: 3rem;
  background-color: #ffcc80;
  border-radius: 10px;
}
.onee .left .ones img {
  height: 5rem;
  margin-left: -1.5rem;
  margin-top: 1rem;
}

.onee .right {
  width: 50%;
}

.onee .left .twos {
  height: 70%;
  width: 60%;
  background-color: rgb(235, 192, 112);
  margin-left: 10rem;
  margin-top: 5rem;
  border-radius: 50%;
}

.onee .left .twos img {
  margin-left: -9rem;
  margin-top: -2rem;
}
</style>