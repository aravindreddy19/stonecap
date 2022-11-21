<template>
  <div class="page7">
    <section class="seven">
      <div class="top">
        <h1><span>Customers</span> Looove Us</h1>
        <p>Here are few of the glowing reviews from our customers</p>
      </div>

      <div class="bottom">
        <div class="one">
          <div class="item">
            <img class="" v-bind:src="pp1" />
            <div class="information">
              <p>Incredible, Highes quality wood,& impecable designs</p>
               <img class="rating" v-bind:src="rating" />
            </div>
          </div>

          <div class="item">
             <img class="" v-bind:src="pp2" />
            <div class="information">
              <p>Amazing collection of chairs & arm rests, loved it.</p>
              <img class="rating" v-bind:src="rating" />
            </div>
          </div>

          <div class="item">
             <img class="" v-bind:src="pp3" />
            <div class="information">
              <p>Incredibly fast shipping, premium quality experience.</p>
              <img class="rating" v-bind:src="rating" />
            </div>
          </div>
        </div>
<!-- <br> -->
        <div class="two">
          <div class="item">
             <img class="" v-bind:src="pp4" />
            <div class="information">
              <p>Best furniture i have bought, hands down the best.</p>
              <img class="rating" v-bind:src="rating" />
            </div>
          </div>

          <div class="item">
            <img class="" v-bind:src="pp5" />
            <div class="information">
              <p>Amazing support, 24/7. Highest quality materials.</p>
              <img class="rating" v-bind:src="rating" />
            </div>
          </div>
        </div>
        <!-- <br> -->
        <div class="three">
          <div class="item">
            <img class="" v-bind:src="pp6" />
            <div class="information">
              <p>Most reputed company in furniture, im a life long customer.</p>
              <img class="rating" v-bind:src="rating" />
            </div>
          </div>

          <div class="item">
            <img class="" v-bind:src="pp7" />
            <div class="information">
              <p>
                My clients love this furniture, changes the look of interiors.
              </p>

              <img class="rating rat" v-bind:src="rating" />
            </div>
          </div>

          <div class="item">
             <img class="" v-bind:src="pp8" />
            <div class="information">
              <p>Great discounts, great prices, amazing products.</p>
              <img class="rating" v-bind:src="rating" />
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
      
      pp1:require("../assets/images/pp1.jpg"),
      pp2:require("../assets/images/pp2.jpg"),
      pp3:require("../assets/images/pp3.jpg"),
      pp4:require("../assets/images/pp4.jpg"),
      pp5:require("../assets/images/pp5.jpg"),
      pp6:require("../assets/images/pp6.jpg"),
      pp7:require("../assets/images/pp7.jpg"),
      pp8:require("../assets/images/pp8.jpg"),
      rating:require("../assets/images/five-stars.png"),
      
    };
  },
}
</script>

<style  scoped>

.seven {
    height: 100vh;
    background-color: #f3ede3;
  }
.seven .one{
    display: flex;
    /* flex-direction: column; */
}


  .seven .top {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seven .top h1 {
    font-size: xx-large;
    margin-bottom: 0.5rem;
  }
  .seven .top h1 span {
    color: #e38c0a;
  }
  .seven .top p {
    color: black;
    font-weight: bold;
  }

  .seven .bottom {
    display: flex;
    flex-direction: column;
    height: 80vh;
  }

  .seven .bottom img {
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
  }

  .seven .bottom .rating {
    height: 50px;
    margin-top: -0.5rem;
    margin-left: 4rem;
  }

  .seven .bottom .one {
    display: flex;
    width: 90%;
    height: 25vh;
    margin-left: 4rem;
  }

  .seven .bottom .item {
    display: flex;
    margin: 1rem;
    border-radius: 10px;
    background-color: white;
  }
  .seven .bottom .two {
    height: 25vh;
    display: flex;
    width: 60%;
    margin-left: 15rem;
  }

  .seven .bottom .three {
    height: 25vh;
    display: flex;
    width: 90%;
    margin-left: 4rem;
    background-color: transparent;
  }
</style>