<template>
  <div class="home">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Blogs />
    <Page9 />
  </div>
</template>

<script>
import Blogs from "../components/Blogs.vue";
import Page1 from "../components/Page1.vue";
import Page2 from "../components/Page2.vue";
import Page3 from "../components/Page3.vue";
import Page4 from "../components/Page4.vue";
import Page5 from "../components/Page5.vue";
import Page6 from "../components/Page6.vue";
import Page7 from "../components/Page7.vue";
import Page9 from "../components/Page9.vue";

export default {
  name: "",
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Blogs,
    Page9,
  },
};
</script>


<style>
</style>