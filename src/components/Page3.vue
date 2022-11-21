<template>
  <div class="page3">
    <section class="three">
      <div class="one">
        <div class="left">
          <h4>10% OFF</h4>
          <h3>Study Chairs</h3>
          <button>shop now</button>
        </div>

        <div class="righth"><img class="" v-bind:src="chair" /></div>
      </div>

      <div class="two">
        <div class="left">
          <h4>20% OFF</h4>
          <h3>Study lamps</h3>
          <button>shop now</button>
        </div>

        <div class="righth"><img class="logo" v-bind:src="lamp" /></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chair: require("../assets/images/3.1.png"),
      lamp: require("../assets/images/3.2.png"),
    };
  },
};
</script>

<style scoped >
.three {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(197, 162, 117);
}

.three .one img {
  height: 20rem;
  width: 20rem;
  margin-top: -3rem;
  /* background: url(); */
}

.three .one {
  height: 20rem;
  width: 30rem;
  margin-top: 8rem;
  background-color: bisque;
  margin-right: 3rem;
  border-radius: 20px;
}

.three .one .left {
  width: 60%;
}
.three .one .left h4 {
  width: 70%;
  background-color: transparent;
  color: blueviolet;
}
.three .one .left h2 {
  width: 100%;
  color: black;
  margin-top: 2rem;
}

.three .one .left button {
  width: 60%;
  cursor: pointer;
  margin-top: 3rem;
  margin-left: -0.5rem;
}

.righth {
  width: 55%;
  height: 17rem;
  background-color: rgb(164, 79, 79);
  border-radius: 50%;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
}

.three .two {
  height: 20rem;
  width: 30rem;
  margin-top: 8rem;
  background-color: bisque;
  margin-left: 3rem;
  display: flex;
  border-radius: 20px;
}

.three .two img {
  height: 15rem;
}

.three .two .left {
  width: 40%;
  margin-left: 2rem;
}
.three .two .left h4 {
  width: 70%;
  background-color: transparent;
  color: blueviolet;
  margin-top: 3.5rem;
}
.three .two .left h2 {
  width: 100%;
  color: black;
  margin-top: 2rem;
}

.three .two .left button {
  padding: 0.7rem;
  width: 10%;
  border-radius: 20px;
  border: none;
  background-color: #ecbc74;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  width: 50%;
  cursor: pointer;
  margin-top: 3rem;
  /* margin-left: -0.5rem; */
}


</style>