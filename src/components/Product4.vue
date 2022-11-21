<template>
  <div class="product4">
     <section class="four4">
      <table>
        <tr>
          <th>Customer Rating</th>
          <th><img class="table" v-bind:src="table1" /></th>
          <th><img class="table" v-bind:src="table2" /></th>
          <th><img class="table" v-bind:src="table1" /></th>
          <th><img class="table" v-bind:src="table3" /></th>
     
        </tr>

        <tr>
          <th>Price</th>
          <th>₹19,199/-</th>
          <th>₹24,889/-</th>
          <th>₹18,345/-</th>
          <th>₹10,999/-</th>
        </tr>
        <tr>
          <th>Sold by</th>
          <th>Future Wave</th>
          <th>FurnEasy</th>
          <th>Selffurn</th>
          <th>Kikea</th>
        </tr>
        <tr>
          <th>Included</th>
          <th>only Chair</th>
          <th>chair + legs</th>
          <th>chair + 1 Swing</th>
          <th>chair + cushions</th>
        </tr>
        <tr>
          <th>Dimensions</th>
          <th>92 x 89 x 90</th>
          <th>92 x 89 x 90</th>
          <th>92 x 89 x 90</th>
          <th>92 x 89 x 90</th>
        </tr>
        <tr>
          <th>Material</th>
          <th>Wood</th>
          <th>Fabric</th>
          <th>Neem Wood</th>
          <th>Sheesham wood</th>
        </tr>
        <tr>
          <th>Model Number</th>
          <th>SC12807</th>
          <th>YU89695</th>
          <th>MI27897</th>
          <th>FU58789</th>
        </tr>
        <tr>
          <th>Style</th>
          <th>Modern</th>
          <th>Classic</th>
          <th>Victorian</th>
          <th>Greek</th>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {
data() {
    return {
      
      table1:require("../assets/images/5star.png"),
      table2:require("../assets/images/4star.png"),
      table3:require("../assets/images/4.5star.png"),
      
    };
  },
}
</script>

<style>
.four4{
  height: 100vh;
  width: 90%;
}

.four4 table{ 
  font-family: arial, sans-serif;
  border-collapse: collapse;
  height: 90%;
  width: 100%;
  margin: 4rem;
 }
 
 .four4 td,
 th {
   border: 2px solid #544e4e;
   text-align: left;
   padding: 20px;
 }
 
 .four4 img{
  height: 1rem;
 }
</style>