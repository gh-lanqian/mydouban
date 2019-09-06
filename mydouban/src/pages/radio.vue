<template>
  <div>
    <top></top>
    <div class="upm">
      <p>
        <span>打开App, 浏览更多</span>
        <span>极速下载</span>
        <span>打开</span>
      </p>
    </div>
    <qingDen></qingDen>
    <div>
      <radiolist v-for="count in 5" :key="count"></radiolist>
    </div>
    <h4 @click="fun()" v-if="!bool">显示更多广播</h4>
    <div v-else>
      <radiolist v-for="count in 4" :key="count"></radiolist>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import top from "../components/header/top";
import qingDen from "../components/qingDen";
import radiolist from "../components/radio/radiolist";
import foot from "../components/foot";
export default {
  components: {
    top,
    qingDen,
    radiolist,
    foot
  },
  data() {
    return {
      bool: false
    };
  },
  methods: {
    fun() {
      this.bool = !this.bool;
    }
  }
};
</script>
<style scoped>
.upm {
  margin-bottom: 0.1rem;
  position: relative;
  height: 0.65rem;
  width: 100%;
  background: url(../../static/img/promotion_bg.b7abee9.jpg) no-repeat;
  background-size: 100% 0.65rem;
}
p {
  position: absolute;
  top: 0.25rem;
  left: 0.4rem;
}
.upm > p > span:nth-of-type(1) {
  font-size: 0.12rem;
  color: #2ca532;
}
.upm > p > span:nth-of-type(2) {
  margin-left: 0.35rem;
  display: inline-block;
  width: 0.7rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  background-color: #17aa52;
  border-radius: 0.04rem;
  font-size: 0.11rem;
  color: white;
}
.upm > p > span:nth-of-type(3) {
  display: inline-block;
  width: 0.5rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  border: 1px solid #42bd56;
  border-radius: 0.04rem;
  font-size: 0.11rem;
  color: #42bd56;
}
h4 {
  font-size: 0.14rem;
  color: #42bd56;
  text-align: center;
  margin-top: 0.35rem;
}
</style>