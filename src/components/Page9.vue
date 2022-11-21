<template>
  <div class="page9">
    
    <section class="nine">
      <div class="top">
        <div class="arrow2">
          <h2>Collections you love</h2>
          <img class="arrow" v-bind:src="collections4" />
        </div>

        <div class="trend">
          <div class="trends"><img class="" v-bind:src="collections1" /></div>
          <div class="trends"><img class="" v-bind:src="collections2" /></div>
          <div class="trends"><img class="" v-bind:src="collections3" /></div>
        </div>
      </div>

      <div class="bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15232.180224874981!2d78.46873512860189!3d17.361564822218156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1661415156773!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
data() {
    return {
      
      collections1:require("../assets/images/9.1.png"),
      collections2:require("../assets/images/9.2.png"),
      collections3:require("../assets/images/9.3.png"),
      collections4:require("../assets/images/right-arrow.png"),
      
    };
  },
}
</script>

<style scoped >

  .nine {
    height: 100vh;
  }

  .nine .top .arrow {
    height: 40px;
    margin-left: 8rem;
    margin-top: -5rem;
    cursor: pointer;
  }
  .nine .top img {
    height: 10rem;
  }
  .nine .top {
    height: 40vh;
    display: flex;
    background-color: #ffcc80;
  }

  .nine .top h2 {
    width: 100%;
    margin: 5rem;
    color: azure;
  }

  .nine .top .trend {
    display: flex;
  }

  .nine .top .trend .trends {
    height: 70%;
    background-color: white;
    border-radius: 30px;
    margin: 3rem;
  }

  .nine .bottom {
    height: 60vh;
    display: flex;
    justify-content: center;
  }

  .nine .bottom iframe {
    margin-top: 2rem;
    /* margin-bottom: 6rem; */
    width: 80%;
    box-shadow: 2px 2px 2px 2px gray;
  }

  .nine .bottom img {
    height: 18rem;
    margin: 11rem;
    box-shadow: 2px 2px 2px 2px gray;
    cursor: grabbing;
  }
</style>