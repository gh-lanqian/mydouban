<template>
  <div class="more">
    <top></top>
    <div>
      <insilder
        v-for="(v,i) in arr1"
        :key="i"
        :imgurl="v.images.small"
        :title="v.title"
        :average="v.rating.average"
        :id="v.id"
      ></insilder>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import insilder from "../components/silder/insilder";

export default {
  components: {
    top,
    insilder
  },
  data() {
    return {
      arr1: []
    };
  },
  created() {
    this.arr1 = this.$store.state.arr;
  }
};
</script>
<style scoped>
.more > div {
  display: flex;
  flex-wrap: wrap;
  width: 97.5%;
  margin: 0 auto;
}
</style>