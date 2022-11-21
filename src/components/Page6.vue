<template>
  <div class="page6">
    <section class="six">
      <div class="top">
        <h1>Furniture</h1>
        <h2>Available in many Variations</h2>
        <button>Shop Now</button>
      </div>

      <div class="bottom">
        <div class="items">
          <div class="item">
            <img class="" v-bind:src="classic1" />
            <h3>Classic</h3>
          </div>

          <div class="item">
            <img class="" v-bind:src="classic2" />
            <h3>Unique</h3>
          </div>

          <div class="item">
           <img class="" v-bind:src="classic3" />
            <h3>Adjustable</h3>
          </div>

          <div class="item">
           <img class="" v-bind:src="classic4" />
            <h3>Vintage</h3>
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
      classic1:require("../assets/images/6.1.png"),
      classic2:require("../assets/images/6.2.png"),
      classic3:require("../assets/images/6.3.png"),
      classic4:require("../assets/images/6.4.png"),
      
    };
  },
}
</script>

<style scoped>


.six {
    height: 100vh;
  }

  .six .top {
    height: 30vh;
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ad9e87;
  }

  .six .top h1 {
    font-size: 2rem;
    margin-bottom: 0rem;
    color: blue;
    /* display: none; */
  }
  .six .top h2 {
    color: rgb(239, 239, 239);
  }
  .six .top button {
    padding: 0.7rem;
    width: 15%;
    border-radius: 20px;
    border: none;
    background-color: #ecbc74;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    cursor: pointer;
  }

  .six .bottom {
    height: 70vh;
    background-color: bisque;
  }

  .six .bottom .items {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    /* margin-left: 19rem; */
  }
  .six img {
    height: 10rem;
    margin-bottom: -2rem;
    margin-top: -2rem;
  }

  .six .bottom .items .item {
    background-color: #d3b3b3;
    margin: 2rem;
    height: 10rem;
    width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
  }

  .six .bottom .items .item h3 {
    color: rgb(249, 249, 249);
    font-size: x-large;
  }
</style>