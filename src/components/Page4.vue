<template>
  <div class="page4">
    <secion class="four">
      <div class="left">
        <div class="image image1">
          <img class="success" v-bind:src="explore1" />
        </div>
        <div class="image image2">
          <img class="success" v-bind:src="explore2" />
        </div>
        <div class="image image3">
          <img class="success" v-bind:src="explore3" />
        </div>
        <div class="image image4">
          <img class="success" v-bind:src="explore4" />
        </div>
      </div>

      <div class="right">
        <h2>Explore Advanced,</h2>
        <h1><span>Premium</span> Collection</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, itaque.
          Explicabo sit quae cum voluptates exercitationem laborum officiis
          fugit, esse sed blanditiis ullam a. Molestias!
        </p>

        <div class="tick">
          <ul>
            <li><img class="success" v-bind:src="success" /></li>
            <li><img class="success" v-bind:src="success" /></li>
            <li><img class="success" v-bind:src="success" /></li>
          </ul>

          <ul class="rte">
            <li>100% Recycled Wood</li>
            <li>Trendy Designs</li>
            <li>Eco Friendly Colors</li>
          </ul>
        </div>

        <button>Shop Now !</button>
      </div>
    </secion>
  </div>
</template>

<script>
export default {
data() {
    return {
      
      explore1:require("../assets/images/4.1.png"),
      explore2:require("../assets/images/4.2.png"),
      explore3:require("../assets/images/4.3.png"),
      explore4:require("../assets/images/4.4.png"),
      success:require("../assets/images/success.png"),
      
    };
  },
}
</script>

<style scoped >
.page4{
  height: 100vh;
}
.four {
    height: 100vh;
    display: flex;
    background-color: #ad9e87;
  }

  .four .left {
    width: 50%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* justify-content: center; */
    align-items: center;
    margin-left: 3rem;
    margin-right: 6rem;
  }

  .four .left img {
    height: 10rem;
  }

  .four .left .image {
    height: 10rem;
    width: 15rem;
    background-color: white;
    margin: 1rem;
    border: 1px solid black;
    border-radius: 20px;
  }

  .four .left .image1 {
    height: 12rem;
    width: 15rem;
    position: absolute;
    z-index: 1;
  }

  .four .left .image2 {
    position: absolute;
    z-index: +1;
    top: 5%;
    left: 50%;
  }

  .four .left .image3 {
    position: absolute;
    top: 63%;
    left: 50%;
  }

  .four .left .image4 {
    height: 11rem;
    position: absolute;
    /* z-index: +2; */
    top: 32.5%;
    left: 70%;
  }

  .four .right img {
    height: 30px;
  }

  .four .right {
    margin: 6rem;
    width: 50%;
  }

  .four h2 {
    font-weight: bolder;
  }

  .four h1 span {
    color: #ffffff;
  }
  .four p {
    width: 80%;
    font-weight: bold;
  }

  .four .right .tick {
    display: flex;
    margin-left: -2.5rem;
  }

  .four .right .tick ul {
    list-style: none;
    line-height: 50px;
    font-size: large;
    font-weight: bold;
  }

  .four .right .tick .rte li {
    margin-top: -0.3rem;
    margin-left: 0rem;
  }
  .four .right .tick .rte {
    margin-left: -2rem;
  }

  .four .right button {
    padding: 0.7rem;
    width: 30%;
    border-radius: 20px;
    border: none;
    background-color: #ecbc74;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    cursor: pointer;
  }

</style>