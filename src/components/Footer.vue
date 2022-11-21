<template>
  <div class="footer">
    <section class="ten">
      <div class="one">
        <div class="brand">
          <p><img class="logo" v-bind:src="logo" /></p>
          <h1>{{ brandName }}</h1>
        </div>

        <p>
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis
          est doloremque natus officia soluta eos maiores. -->
        </p>

        <div class="search">
          <input type="text" />
          <img class="loupe" v-bind:src="loupe" />
        </div>
      </div>

      <div class="two">
        <ul>
          <li class="bold">Categories</li>
          <li>Chairs</li>
          <li>Tables</li>
          <li>Bed Lamps</li>
          <li>Study Desks</li>
        </ul>
      </div>

      <div class="threeee">
        <ul>
          <li class="bold">Navigation</li>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Shipping</li>
        </ul>
      </div>

      <div class="four">
        <ul>
          <li class="bold">Other Links</li>
          <li>Partner with us</li>
          <li>Offline stores</li>
          <li>Payments</li>
          <li>Blogs</li>
        </ul>
      </div>
    </section>
    <!-- <div class="foot"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandName: "FurniFuture",
      logo: require("../assets/images/logo.png"),
      loupe: require("../assets/images/loupe.png"),
    };
  },
};
</script>

<style scoped >
.footer{
  background-color: #9f7777;
}
.ten {
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  margin-left: 3rem;
}

.ten .brand {
  display: flex;
  /* line-height: 0px; */
  margin-left: 0.5rem;
  color: blue;
  margin-top: 2rem;
}

.ten .search img {
  height: 20px;
  margin-top: 0.5rem;
  cursor: pointer;
}

.ten .search input {
  outline: none;
  border: none;
  background-color: #dda95c;
  width: 70%;
  margin: 0.4rem;
}

.ten .search {
  border: 2px solid #dda95c;
  border-radius: 30px;
  height: 35px;
  width: 75%;
  padding: 0rem;
  background-color: #dda95c;
  margin-top: -1rem;
}

.ten .one {
  display: flex;
  flex-direction: column;
  /* margin: 2.5rem; */
  height: 40vh;
}

.ten ul {
  margin: 3rem;
  list-style: none;
}

.bold {
  font-size: large;
  font-weight: bold;
  margin-bottom: 1rem;
  pointer-events: none;
}

.ten ul li {
  margin: 1rem;
  cursor: pointer;
}

.ten .two {
  height: 40vh;
}

.ten .threeee {
  height: 40vh;
  background-color: transparent;
  margin-top: -0.5rem;
}

.ten .four {
  margin-top: -0.5rem;
  height: 40vh;
  background-color: transparent;
}
footer {
  height: 10vh;
  width: 100%;
  background-color: #ad9e87;
}

.ten li:hover {
  color: rgb(255, 255, 255);
}
/* .foot{
  margin-top: -3rem;
 width: 100%;
 background: #ad9e87;
} */
</style>