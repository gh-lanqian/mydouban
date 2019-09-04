<template>
  <div>
    <top></top>
    <div class="upm">
      <p class="p1">
        <span>每天看点好内容</span>
        <span>极速下载</span>
        <span>打开</span>
      </p>
    </div>
    <div class="shouYe">
      <h5>
        {{arr[0].title}}
        <span>{{arr[0].loc_name}}</span>
      </h5>
      <div class="imgs">
        <img :src="arr[0].image" alt />
      </div>
      <p class="ww">
        时间：
        <span>{{arr[0].begin_time}}</span>
        <br />&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <span>{{arr[0].end_time}}</span>
      </p>
      <p class="ww">
        <b>地点：</b>
        <i>{{arr[0].address}}</i>
      </p>
      <p class="ww">
        费用：
        <span>{{arr[0].price_range}}</span>
      </p>
      <p class="ww">
        类型：
        <span>{{arr[0].category_name}}</span>
      </p>
      <p class="ww">
        主题：
        <span>{{arr[0].tags}}</span>
      </p>
      <p class="acti">活动详情</p>
      <p class="author_intro">
        <span v-html="arr[0].content"></span>
      </p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import top from "../components/header/top";
import foot from "../components/foot";
export default {
  components: {
    top,
    foot
  },
  computed: {
    arr() {
      var id = this.$route.params.id;
      var arr1 = this.$store.state.arra.filter((v, i) => {
        if (id == v.id) {
          return v;
        }
      });
      return arr1;
    }
  }
};
</script>
<style scoped>
.shouYe {
  width: 90%;
  margin: 0 auto;
}
.upm {
  margin-bottom: 0.1rem;
  position: relative;
  height: 0.65rem;
  width: 100%;
  background: url(../../static/img/promotion_bg.b7abee9.jpg) no-repeat;
  background-size: 100% 0.65rem;
}
.p1 {
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
.imgs {
  text-align: center;
}

.author_intro {
  font-size: 0.12rem;
  margin: 0.2rem 0;
  /* white-space: pre; */
}
h5 span {
  display: inline-block;
  width: 0.3rem;
  height: 0.18rem;
  color: white;
  text-align: center;
  font-size: 0.1rem;
  line-height: 0.18rem;
  border-radius: 0.05rem;
  background-color: #ff8263;
}
.ww {
  font-size: 0.12rem;
  color: #aaaaaa;
  margin: 0.1rem 0;
  clear: both;
}
.ww span {
  color: #111111;
}
.ww b {
  float: left;
  font-weight: 300;
}
.ww i {
  float: right;
  color: #111111;
  width: 85%;
  font-style: normal;
}
.acti {
  font-size: 0.14rem;
  color: #007722;
  font-weight: 900;
}
</style>