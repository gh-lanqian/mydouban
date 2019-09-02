<template>
  <div class="biggp">
    <p>租房找室友</p>
    <listgp
      v-for="(v,i) in bigarr"
      :key="i"
      :title="v.title"
      :group_member="v.group_member"
      :time="v.group_topic.time"
      :cont="v.group_topic.title"
      :small="v.images.small"
    ></listgp>
    <p>更多相关小组</p>
  </div>
</template>
<script>
import listgp from "./listgp";
export default {
  components: {
    listgp
  },
  props: {
    bigarr: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.biggp {
  width: 90%;
  margin: 0.3rem auto 0.5rem;
}
.biggp > p:nth-of-type(1) {
  font-size: 0.14rem;
  color: #111111;
}
.biggp > p:nth-of-type(2) {
  font-size: 0.14rem;
  color: #42bd56;
  text-align: center;
  margin-top: 0.1rem;
}
</style>