<template>
  <div>
    <p>
      <span>{{outarr[0].a}}</span>
      <a href="#">更多</a>
    </p>
    <slot></slot>
    <div class="boxa">
      <div class="listdiv">
        <insilder
          v-for="(v,i) in outarr1"
          :key="i"
          :imgurl="v.images.small"
          :title="v.subtitle"
          :average="v.rating.average"
        ></insilder>
      </div>
    </div>
  </div>
</template>
<script>
import insilder from "./insilder";
export default {
  components: {
    insilder
  },
  props: {
    outarr: {
      type: Array,
      required: true
    }
  },
  computed: {
    outarr1() {
      return this.outarr.splice(1);
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
  width: 92%;
  margin: 0 auto;
  overflow: auto;
}
</style>