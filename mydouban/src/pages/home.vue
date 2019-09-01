<template>
  <div class="home">
    <top></top>
    <div class="hmone">
      <nava></nava>
      <nava></nava>
      <nava></nava>
      <nava></nava>
    </div>
    <div class="hmtwo">
      <hmlist>
        <cont slot="slota"></cont>
        <btcon slot="slotb"></btcon>
      </hmlist>
      <hmlist>
        <cont slot="slota"></cont>
        <btcon slot="slotb"></btcon>
      </hmlist>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import nava from "../components/nav/nava";
import hmlist from "../components/homelist/hmlist";
import cont from "../components/homelist/cont";
import btcon from "../components/homelist/btcon";
export default {
  components: {
    top,
    nava,
    hmlist,
    cont,
    btcon
  }
};
</script>
<style scoped>
.hmone {
  padding-top: 0.2rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.hmtwo {
  width: 90%;
  margin: 0 auto;
}
</style>