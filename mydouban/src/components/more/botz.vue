<template>
  <div class="botz">
    <p>分类浏览</p>
    <div>
      <botlist v-for="(v,i) in bta" :key="i" :ahref="v.href" :title="v.title"></botlist>
    </div>
  </div>
</template>
<script>
import botlist from "./botlist";
export default {
  components: {
    botlist
  },
  props: {
    bta: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
p {
  font-size: 0.14rem;
  color: #111111;
  margin: 0.2rem 0 0.12rem;
}
.botz {
  width: 90%;
  margin: 0 auto;
}
.botz > div {
  display: flex;
  flex-wrap: wrap;
}
</style>