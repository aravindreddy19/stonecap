<template>
  <div class="page5">
    <section class="five">
      <div class="top">
        <h1><span>Highest</span> Rated Products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          cupiditate, cumque laboriosam temporibus modi quis iusto nobis
          provident sed necessitatibus. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div class="bottom">
        <div class="items">
          <div class="item">
            <h4>Tables</h4>
            <div class="itemimg"><img class="highest" v-bind:src="highest1" /></div>

            <h5>Norwegian Wood</h5>

            <img class="highestr" v-bind:src="highest5" />
            <p><span>₹9,299/-</span> (10%off)</p>
          </div>

          <div class="item">
            <h4>Chairs</h4>
            <div class="itemimg"><img class="highest" v-bind:src="highest2" /></div>

            <h5>Flexible</h5>
            <img class="highestr" v-bind:src="highest5" />
            <p><span>₹5,299/-</span> (15%off)</p>
          </div>

          <div class="item">
            <h4>Lamps</h4>
            <div class="itemimg"><img class="highest" v-bind:src="highest3" /></div>

            <h5>Fine quality</h5>
            <img class="highestr" v-bind:src="highest5" />
            <p><span>₹1,299/-</span> (5%off)</p>
          </div>

          <div class="item">
            <h4>Cupboards</h4>
            <div class="itemimg"><img class="highest" v-bind:src="highest4" /></div>

            <h5>Regular/Classic</h5>
            <img class="highestr" v-bind:src="highest5" />
            <p><span>₹7,299/-</span> (17%off)</p>
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
      
      highest1:require("../assets/images/5.1.png"),
      highest2:require("../assets/images/5.2.png"),
      highest3:require("../assets/images/5.3.png"),
      highest4:require("../assets/images/5.4.png"),
      highest5:require("../assets/images/five-stars.png"),
      
    };
  },
}
</script>

<style scoped >
.five {
    height: 100vh;
  }
  .five .top {
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .five .top h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  .five .top h1 span {
    color: #ecbc74;
  }
  .five .top p {
    width: 50%;
  }

  /* .five .bottom {
  background-color: ;
} */
  .five .bottom .items .item img {
    height: 7rem;
    margin-top: 1.5rem;
    margin-right: 2rem;
    margin-left: -1rem;
  }

  .five .bottom .items .item .itemimg {
    height: 50%;
    border-radius: 20px;
    background-color: #d7cdbd;
    width: 70%;
  }

  .five .bottom .items .item .highestr {
    height: 3rem;
    border: none;
    width: auto;
    background-color: transparent;
    margin-left: 1.5rem;
    /* margin-top: -1rem; */
  }

  .five .bottom .items {
    display: grid;
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
    margin-left: -5rem;
    margin-top: 2rem;
  }

  .five .bottom .items .item {
    width: 15rem;
    height: 23rem;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .five .bottom .items .item h4 {
    font-weight: bolder;
    cursor: pointer;
    color: crimson;
    margin-bottom: 0.5rem;
    
  }

  .five .bottom .items .item h5 {
    color: brown;
    margin-top: 0.5rem;
  }

  .five .bottom .items .item p {
    font-size: small;
  }

  .five .bottom .items .item p span {
    color: blue;
    font-size: medium;
  }

</style>