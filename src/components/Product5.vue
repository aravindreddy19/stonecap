<template>
  <div class="product5">
    <section class="five5">
      <div class="left">
        <h2>Customer Reviews</h2>
        <img class="" v-bind:src="rating1" />
        <p>2,20,926 global ratings.</p>
        <div class="bar">
          <ul>
            <li>5 Star</li>
            <li>4 Star</li>
            <li>3 Star</li>
            <li>2 Star</li>
            <li>1 Star</li>
          </ul>
          <ul>
            <li><img class="" v-bind:src="rating2" /></li>
            <li><img class="" v-bind:src="rating3" /></li>
            <li><img class="" v-bind:src="rating4" /></li>
            <li><img class="" v-bind:src="rating5" /></li>
            <li><img class="" v-bind:src="rating6" /></li>
          </ul>
        </div>
      </div>

      <div class="middle">
        <div class="items">
          <div class="item">
            <img class="" v-bind:src="bb1" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb3" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb3" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb4" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="items">
          <div class="item">
            <img class="" v-bind:src="bb5" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb6" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb7" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
          <div class="item">
            <img class="" v-bind:src="bb8" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
              <div class="rating"><img class="" v-bind:src="rating7" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating1: require("../assets/images/4.5star.png"),
      rating2: require("../assets/images/rb5.png"),
      rating3: require("../assets/images/rb4.png"),
      rating4: require("../assets/images/rb3.png"),
      rating5: require("../assets/images/rb2.png"),
      rating6: require("../assets/images/rb1.png"),
      rating7: require("../assets/images/5star.png"),
      bb1: require("../assets/images/bb1.jpg"),
      bb2: require("../assets/images/bb2.jpg"),
      bb3: require("../assets/images/bb3.jpg"),
      bb4: require("../assets/images/bb4.jpg"),
      bb5: require("../assets/images/bb5.jpg"),
      bb6: require("../assets/images/bb6.jpg"),
      bb7: require("../assets/images/bb7.jpg"),
      bb8: require("../assets/images/bb8.jpg"),
    };
  },
};
</script>

<style scoped >
.five5 {
  height: 100vh;
  display: flex;
}

.five5 .left {
  width: 30%;
  margin-left: 2rem;
  margin-top: 6rem;
}

.five5 .left img {
  height: 2rem;
}
.five5 .left p {
  font-weight: bold;
  margin-left: 0.5rem;
}
.five5 .left .bar {
  display: flex;
}
.five5 .left .bar img {
  height: 1rem;
  margin-left: 2rem;
}

.five5 .left ul {
  list-style: none;
  margin-left: -3rem;
}
.five5 .left ul li {
  margin: 1rem;
}

.five5 .item {
  display: flex;
  margin: 1rem;
  border-radius: 10px;
  background-color: rgb(243, 226, 226);
}

.five5 .middle img {
  height: 4rem;
  border-radius: 50px;
  margin: 2rem;
}

.five5 .right img {
  height: 4rem;
  border-radius: 50px;
  margin: 2rem;
}

.five5 .rating img {
  height: 1.5rem;
  margin: 0%;
  margin-left: 3rem;
}
</style>