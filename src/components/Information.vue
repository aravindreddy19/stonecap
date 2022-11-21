<template>
  <div class="information">
     <h1>Premium Leather High Quality Cushion Sofa</h1>
        <p>
          Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Maxime, at! sit amet consectetur adipisicing elit. Ab, quod
          accusantium. Rerum quia aspernatur nulla?
        </p>
        <div class="prize">
          <h3><strike>₹24,999/-</strike></h3>
          <h3><span>₹19,999/-</span></h3>
        </div>

        <div class="rcd">
          <img class="" v-bind:src="ont1" />
          <p>7 Days Return.</p>
          <img class="" v-bind:src="ont2" />
          <p>Saftey Checks.</p>
          <img class="" v-bind:src="ont3" />
          <p>No contact delivery.</p>
        </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      
      ont1:require("../assets/images/product-return.png"),
      ont2:require("../assets/images/checked.png"),
      ont3:require("../assets/images/mask.png"),
      
    };
  },
}
</script>

<style scoped>
.information{
  height: 72vh;
  width: 70%;
}
.information .right {
  width: 100%;
  margin: 4rem;
}

.information .right h1 {
  margin: 1rem;
  font-size: 2rem;
  color: chocolate;
}

.information .right p {
  font-weight: bold;
  margin: 1rem;
}

.information .right .prize {
  display: flex;
  margin: 1rem;
}
.information .right .prize span {
  color: blue;
  margin-left: 3rem;
}

.information .right .rcd {
  display: flex;
  font-size: small;
}

.information .right img {
  height: 40px;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin: 1rem;
}

.information img{
  height: 20px;
}
</style>