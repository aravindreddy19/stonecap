<template>
  <div class="headd">
    <div class="listt">
      <h4 @mouseover="info()">Information</h4>
      <h4 @mouseover="colo()">Colors</h4>
      <h4 @mouseover="more()">More</h4>
    </div>
    <div class="productHeader">
      <Information v-if="showInformation" />
      <Colors v-if="showColors" />
      <More v-if="showMore" />
    </div>
  </div>
</template>

<script>
import Information from "../components/Information.vue";
import Colors from "../components/Colors.vue";
import More from "../components/More.vue";
export default {
  components: {
    Information,
    Colors,
    More,
  },
  data() {
    return {
      showInformation: true,
      showColors: false,
      showMore: false,
    };
  },
  methods: {
    info() {
      (this.showColors = false), 
      (this.showMore = false),
      this.showInformation = true;
    },
    colo() {
      (this.showInformation = false),
        (this.showMore = false),
        (this.showColors = true);
    },
    more() {
      (this.showMore = true),
        (this.showColors = false),
        (this.showInformation = false);
    },
  },
};
</script>

<style scoped >
.productHeader {
  display: flex;
  justify-content: space-evenly;
}
h4 {
  color: brown;

  cursor: pointer;
}

.listt {
  display: flex;
  justify-content: space-evenly;
}
</style>