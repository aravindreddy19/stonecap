<template>
  <div class="product">
    <Product1/>
    <br>
    <Product2/>
    <Product3/>
    <Product4/>
    <Product5/>
    
    
  </div>
</template>

<script>
import Product1 from '../components/Product1.vue'
import Product2 from '../components/Product2.vue'
import Product3 from '../components/Product3.vue'
import Product4 from '../components/Product4.vue'
import Product5 from '../components/Product5.vue'
export default {
components:{
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
}
}
</script>

<style scoped >

</style>