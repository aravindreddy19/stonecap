<template>
  <div class="one">
      <div class="right">
        <h3>Colors :</h3>
        <img class="" v-bind:src="pannel" />

        <p><span>Model Name</span> : sofa Chair</p>
        <p><span>Item Dimensions LxwxH</span> : 181 x 90 x 19 centimeters</p>
        <p><span>Item weight</span> : 38 Kilograms</p>
        <p><span>Seating capacity</span> : 1.00</p>
        <p><span>Unit</span> : 1</p>
        <p><span>Included Components</span> : Other</p>
        <p><span>Assembly Required</span> : No</p>
        
        <!-- <div class="back"><a href="./subcap.html">Go back </a></div> -->
      </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      
      pannel:require("../assets/images/colors pannel.png"),
      
    };
  },
}
</script>

<style>
.one{
  height: 72vh;
}
.one .right {
    width: 50%;
    /* margin: 4rem; */
    /* margin-right:-10rem; */
  }

  .one .right img {
    height: 4rem;
    margin-left: -1rem;
  }

  .one .right p span {
    font-weight: bold;
  }
.one .right {
    width: 50%;
  }
</style>