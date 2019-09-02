<template>
  <div>
    <p>
      <span>影院热映</span>
      <a href="#">更多</a>
    </p>
    <slot></slot>
    <div class="listdiv">
      <insilder></insilder>
    </div>
  </div>
</template>
<script>
import insilder from "./insilder";
export default {
  components: {
    insilder
  }
};
</script>
<style scoped>
p {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0.15rem auto 0.35rem;
}
span {
  font-size: 0.14rem;
  color: #111111;
}
a {
  font-size: 0.12rem;
  color: #42bd56;
}
.listdiv {
  display: flex;
  flex-wrap: nowrap;
}
</style>