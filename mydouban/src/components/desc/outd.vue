<template>
  <div>
    <div class="boxa">
      <div class="listdiv">
        <ind v-for="(v,i) in outarr[0].casts" :key="i" :imgurl="v.avatars.small" :title="v.name"></ind>
      </div>
    </div>
  </div>
</template>
<script>
import ind from "./ind";
export default {
  components: {
    ind
  },
  props: {
    outarr: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.boxa {
  width: 100%;
}
p {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0.15rem auto 0.12rem;
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
  width: 96%;
  margin: 0 auto;
  overflow: auto;
}
</style>