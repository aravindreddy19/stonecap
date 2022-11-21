<template>
  <div class="product3">
    <section class="threee">
      <div class="top">
        <h1>More Products similar to this :</h1>
      </div>
      <div class="bottom">
        <div class="items">
          <div class="item">
            <div class="sf"><img class="similar" v-bind:src="similar1" /></div>
            <h4>Gray Leather</h4>
            <button>Add to cart</button>
          </div>

          <div class="item">
            <div class="sf"><img class="similar" v-bind:src="similar2" /></div>
            <h4>Premium Cushion</h4>
            <button>Add to cart</button>
          </div>

          <div class="item">
            <div class="sf"><img class="similar" v-bind:src="similar3" /></div>
            <h4>Rustic Cushion</h4>
            <button>Add to cart</button>
          </div>

          <div class="item">
            <div class="sf"><img class="similar" v-bind:src="similar4" /></div>
            <h4>Classic cushions</h4>
            <button>Add to cart</button>
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
      
      similar1:require("../assets/images/sf1.png"),
      similar2:require("../assets/images/sf2.png"),
      similar3:require("../assets/images/sf3.png"),
      similar4:require("../assets/images/sf4.png"),
      
    };
  },
}
</script>

<style scoped >
.threee {
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.threee .top {
  height: 15vh;
  font-size: 1.4rem;
  color: rgb(174, 145, 90);
}

.threee .bottom .items .item img {
  height: 10rem;

  margin-top: 1rem;
  margin-left: -3.5rem;
}

.threee .bottom .items {
  display: grid;
  /* width: 70%; */
  grid-template-columns: repeat(4, 1fr);
  margin-top: 5rem;
}

.threee .bottom .items .item {
  width: 15rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
}

.threee .bottom .items .item h4 {
  font-size: larger;
  font-weight: bolder;
  cursor: pointer;
  color: crimson;
}

.threee .bottom .items .item .sf {
  background-color: #ffcc80;
  width: 11rem;
  height: 12rem;
  border-radius: 10px;
}

.threee button{
    padding: 0.5rem;
    border-radius: 20px;
    border: none;
    background-color: #ecbc74;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    width: 50%;
    cursor: pointer;
    margin-top: 1rem;
}

</style>