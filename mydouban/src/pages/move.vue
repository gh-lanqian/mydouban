<template>
  <div>
    <top></top>
    <div>
      <outsilder></outsilder>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import foot from "../components/foot";
import outsilder from "../components/silder/outsilder";
export default {
  components: {
    top,
    foot,
    outsilder
  }
};
</script>
<style scoped>
</style>