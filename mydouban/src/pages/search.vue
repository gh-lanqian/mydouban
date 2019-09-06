<template>
  <div>
    <top></top>
    <div>
      <input type="text" v-model="data" placeholder="搜索 书 / 影 / 音 / 标签" />
      <span>搜索</span>
    </div>
    <div v-if="data==''"></div>
    <div class="z" v-else>
      <div class="res">
        <p class="qp">影视</p>
        <p class="wp">查看更多影视结果</p>
      </div>
      <div class="res">
        <p class="qp">图书</p>
        <p class="wp">查看更多图书结果</p>
      </div>
      <div class="res">
        <p class="qp">音乐</p>
        <p class="wp">查看更多音乐结果</p>
      </div>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";

export default {
  components: {
    top
  },
  data() {
    return {
      data: ""
    };
  }
};
</script>

<style scoped>
.z {
  width: 90%;
  margin: 0 auto;
}
input {
  margin: 0.08rem 0 0 0.2rem;
  border: none;
  width: 2.4rem;
  height: 0.3rem;
  background: #f3f3f3;
  outline: none;
}
span {
  font-size: 0.12rem;
  margin-left: 0.2rem;
}
.res .qp {
  margin: 0.2rem 0 0.1rem 0;
  font-size: 0.14rem;
}
.res .wp {
  font-size: 0.14rem;
  color: #42bd56;
  text-align: center;
}
</style>