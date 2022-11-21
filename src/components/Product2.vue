<template>
  <div class="product2">
    
    <section class="twoo">
      <div class="left">
        <table>
          <tr>
            <th>Name</th>
            <th>Information</th>
          </tr>
          <tr>
            <th>color</th>
            <th>Gray</th>
          </tr>

          <tr>
            <th>Brand</th>
            <th>New Wave</th>
          </tr>

          <tr>
            <th>Material</th>
            <th>Wood</th>
          </tr>

          <tr>
            <th>Weigth</th>
            <th>38Kgs</th>
          </tr>
        </table>
      </div>

      <div class="right">
        <table>
          <tr>
            <th>Name</th>
            <th>Information</th>
          </tr>
          <tr>
            <th>Country Of manufacturer</th>
            <th>India</th>
          </tr>

          <tr>
            <th>Dimensions</th>
            <th>92 x 81 x 104 cm</th>
          </tr>

          <tr>
            <th>Included components</th>
            <th>Chair</th>
          </tr>

          <tr>
            <th>Frame Material</th>
            <th>Norwegian Wood</th>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
 data() {
    return {
     
      // :require("../assets/images/.png"),
      
    };
  },
}
</script>

<style>
.twoo {
  height: 100vh;
  display: flex;
  /* justify-content:center; */
  background-color: rgb(228, 208, 171);
}

 .twoo table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  height: 50%;
  width: 250%;
  margin-top: 10rem;
}

.twoo td,
th {
  border: 2px solid #544e4e;
  text-align: left;
  padding: 20px;
}

.twoo .left {
  width: 18%;
  margin-left: 2rem;
}

.twoo .right {
  width: 18%;
  margin-left: 25rem;
}

</style>