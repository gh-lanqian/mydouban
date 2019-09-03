<template>
  <div class="tglist">
    <div>
      <router-link :to="ahref" :style="{color:col}">{{tit}}</router-link>
      <p>{{jieshi}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tit: {
      type: String,
      required: true
    },
    jieshi: {
      type: String,
      required: true
    },
    col: {
      type: String,
      required: true
    },
    ahref: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
a {
  font-size: 0.2rem;
  font-weight: 300;
  color: #2384e8;
}
p {
  font-size: 0.1rem;
  color: #999999;
}
.tglist > div {
  text-align: center;
  width: 1rem;
  margin-top: 0.28rem;
  flex: 1;
}
</style>