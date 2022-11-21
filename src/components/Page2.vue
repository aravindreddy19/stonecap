<template>
  <div class="page2">
    
    <section class="two">
      <div class="top">
        <div class="arrow2">
          <h2>21st Centuary Furniture Trends</h2>
           <img class="" v-bind:src="arrow" />
        </div>

        <div class="trend">
          <div class="trends"> <img class="logo" v-bind:src="trends1" /></div>
          <div class="trends"><img class="logo" v-bind:src="trends2" /></div>
          <div class="trends"><img class="logo" v-bind:src="trends3" /></div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottomed">
          <img class="logo" v-bind:src="trends4" />

          <h2>Furniture for Every family occasion. Get them now!</h2>
            <img class="logo" v-bind:src="trends5" />
        </div>

        <button>See collection !</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
data() {
    return {
      arrow :require("../assets/images/right-arrow.png"),
      trends1:require("../assets/images/2.1.png"),
      trends2:require("../assets/images/2.2.png"),
      trends3:require("../assets/images/2.3.png"),
      trends4:require("../assets/images/2.4.png"),
      trends5:require("../assets/images/9.3.png"),
      
    };
  },
}
</script>

<style scoped >

.page2{
  height: 100vh;
}
.two .top .arrow {
    height: 40px;
    margin-left: 8rem;
    margin-top: -5rem;
    cursor: pointer;
  }
  .two .top img {
    height: 10rem;
  }
  .two .top {
    height: 40vh;
    display: flex;
    /* justify-content: center; */

    background-color: #ffcc80;
  }

  .two .top h2 {
    width: 50%;
    margin: 5rem;
    color: azure;
  }

  .two .top .trend {
    display: flex;
  }

  .two .top .trend .trends {
    height: 70%;
    background-color: white;
    border-radius: 30px;
    margin: 3rem;
  }

  .two .bottom {
    height: 60vh;
    background-color: bisque;
    position: relative;
  }

  .two .bottom .bottomed {
    position: absolute;
    top: 20%;
    right: 10%;
    border-radius: 20px;
    background-color: #ad9e87;
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .two .bottom .bottomed h2 {
    font-size: 1.7rem;
    margin: 4rem;
    margin-top: 5rem;
    margin-right: -5rem;
    color: white;
  }
  .two .bottom img {
    height: 15rem;
  }

  .two .bottom button {
    width: 10%;
    position: absolute;
    bottom: 16%;
    right: 45%;
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: #ffcc80;
    font-weight: bold;
    cursor: pointer;
  }
</style>