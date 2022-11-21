<template>
  <div class="blogs">
    <section class="eight">
      <h1>Checkout our Blogs</h1>

      <div class="blogs">
        <div class="blog">
          <img class="logo" v-bind:src="b1" />
          <p>101 Ways to decorate your interiors, making sure,...</p>
        </div>

        <div class="blog">
        <img class="logo" v-bind:src="b2" />
          <p>Blog two, matching colors with furniture and carpets...</p>
        </div>

        <div class="blog">
          <img class="logo" v-bind:src="b3" />
          <p>How antique furniture can bring character to your home....</p>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
 data() {
    return {
      b1: require("../assets/images/8.1.jpg"),
      b2: require("../assets/images/8.2.jpg"),
      b3:require("../assets/images/8.3.jpg"),
    };
  },
}
</script>

<style >



.eight{
  /* background-color: cadetblue; */
  height: 100vh;
}

  .eight h1 {
    /* margin-top: 6rem; */
    margin-left: 1rem;
    font-size: xx-large;
    color: rgb(114, 35, 35);
  }
  .eight img {
    height: 15rem;
    width: 15rem;
    margin: 1rem;
    border-radius: 10px;
  }

  .eight .blogs {
    display: flex;
    width: 70%;
    margin-left: 10rem;
    margin-top: 8rem;
  }

  .eight .blogs .blog {
    border: 3px solid bisque;
    border-radius: 15px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 50vh;
    background-color: rgba(255, 228, 196, 0.669);
  }
  .eight .blogs .blog p {
    margin: 1rem;
    color: grey;
  }
.bottom {
  
    /* height: 60vh; */
    display: flex;
    justify-content: center;
  }

  .bottom iframe {
    /* margin-top: 3rem; */
    /* margin-bottom: 3rem; */
    width: 80%;
    box-shadow: 2px 2px 2px 2px gray;
  }




</style>>