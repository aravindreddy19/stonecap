<template>
  <div class="home">
    <section class="one">
      <div class="left">
        <h4>30% OFF on ALL Products</h4>
        <h2>Furniture == Future</h2>
        <h1>FurniFuture</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <ul>
          <li><img class="" v-bind:src="deltruck" /></li>
          <li>100% Free Shipping</li>
          <li><img class="" v-bind:src="location" /></li>
          <li>All across the world</li>
          <li><img class="" v-bind:src="calender" /></li>
          <li>2 years Warranty</li>
        </ul>

        <button><a href="./subcap/subcap.html">Explore Now</a></button>
      </div>

      <div class="rightt">
        <img class="main1" v-bind:src="home1" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      brandName: "FurniFuture",
      deltruck: require("../assets/images/delivery-truck.png"),
      location: require("../assets/images/location.png"),
      calender: require("../assets/images/calendar.png"),
      home1: require("../assets/images/1.1.png"),
    };
  },
};
</script>


<style>
.one {
  /* height: 80vh; */
  display: flex;
}

.one .left {
  width: 50%;
  margin-top: 3rem;
  margin-left: 2.5rem;
}
.one .left h4 {
  width: 50%;
  background-color: #ffcc80;
}

.one .left h2 {
  color: blue;
  font-weight: bolder;
  margin: 1rem;
  margin-left: -60%;

}
.one .left h1 {
  font-size: 2.5rem;
  font-weight: bolder;
  color: orange;
  margin: 1rem;
  margin-left: -60%;

}
.one .left p {
  width: 75%;
  font-weight: 600;
  /* margin-left:1rem; */
  margin-top: 3rem;
}

.one .left img {
  height: 2.5rem;
}

.one .left ul {
  width: 100%;
  display: flex;
  list-style: none;
  line-height: 30px;
  /* margin-left: %; */
  margin-top: 13%;
}

.one .left ul li {
  margin-left: 1rem;
}

.one .left button {
  padding: 0.7rem;
  width: 30%;
  border-radius: 20px;
  border: none;
  background-color: #ecbc74;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  cursor: pointer;
  margin-top: 2rem;
}

.one .rightt {
  /* width: 35%; */
  height: 60%;
  margin-left: 6%;
  margin-top: 5%;
  border-radius: 50%;
  background-color: #ecbc74;
}
.main1{
  height: 9;
  margin: -2rem;
}

/* .rightt img{ */
  /* height: 9; */
  /* margin: 2rem; */
/* } */
</style>