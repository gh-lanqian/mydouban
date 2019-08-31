<template>
  <div class="home">
    <top></top>
    <div>
      <nava></nava>
      <nava></nava>
      <nava></nava>
      <nava></nava>
    </div>
    <div>
      <hmlist>
        <cont slot="slota"></cont>
      </hmlist>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import nava from "../components/nav/nava";
import hmlist from "../components/homelist/hmlist";
import cont from "../components/homelist/cont";
export default {
  components: {
    top,
    nava,
    hmlist,
    cont
  }
};
</script>
<style scoped>
.home > div {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>