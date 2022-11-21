<template>
  <div class="header">
    <nav>
      <div class="brand">
        <p><img class="logo" v-bind:src="logo" /></p>
        <h1 class="h1">FurniFuture</h1>
      </div>
      <div class="search">
        <input type="text" />
        <img class="loupe" v-bind:src="loupe" />
      </div>
      <router-link class="router-link" to="/">Home</router-link>
      <router-link class="router-link" to="/Product">Sale</router-link>
      <router-link class="router-link" to="/about">About Us</router-link>
      <router-link class="router-link" to="/ContactUs"
        >Log-In/Register</router-link
      >
      <img class="cart" v-bind:src="cart" />
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandName: "FurniFuture",
      logo: require("../assets/images/logo.png"),
      loupe: require("../assets/images/loupe.png"),
      cart: require("../assets/images/shopping-cart.png"),
      // :require("../assets/images/.png"),
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #fdfdfd;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 10vh;
}
* {
  padding: 0%;
  margin: 0%;
}
.router-link {
  text-decoration: none;
  margin-top: 0.2rem;
}

.header nav {
  display: flex;
  justify-content: space-around;
  margin-left: -1.7rem;
}

.h1 h1 {
  margin-top: 0.2rem;
  color: blue;
}
.logo {
  height: 1.5rem;
}
.loupe {
  height: 20px;
  margin-left: rem;
  margin-top: 0.5rem;
  cursor: pointer;
}
.brand {
  display: flex;
}

.search input {
  outline: none;
  border: none;
  background-color: #dda95c;
  margin-top: rem;
}

.search {
  display: initial;
  border: 2px solid #dda95c;
  border-radius: 30px;
  height: 35px;
  width: 25%;
  /* padding: 0.1rem; */
  background-color: #dda95c;
  /* margin-top: 0.1rem; */
}
.cart {
  height: 25px;
  cursor: pointer;
}
</style>