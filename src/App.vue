<template>
  <div id="app">
    <div class="header">
      <Header class="head" />
      <router-view />
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Page1 from "./components/Page1.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      brandName: "FurniFuture",
      logo: require("./assets/images/logo.png"),
    };
  },

  components: {
    Header,
    Page1,
    Footer,
  },
};
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  padding: 0%;
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #b9a742;
    }
  }
}
.logo {
  height: 2rem;
}
</style>
