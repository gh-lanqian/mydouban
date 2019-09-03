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
    <p>{{arr.subtitle}}</p>
    <span>{{arr.publisher}}</span>
    <div class="imgs">
      <img src="https://img3.doubanio.com\/view\/subject\/s\/public\/s28364301.jpg" alt />
    </div>
    <p class="author">
      作者：{{arr.author[0]}}
      <br />
      {{arr.author[1]}}
    </p>
    <p class="fanyi">翻译：{{arr.translator[0]}}</p>
    <p class="author_intro">
      作者简介：
      <span v-html="arr.author_intro"></span>
    </p>
    <p class="jianjie">
      <span>简介：{{arr.summary}}</span>
    </p>
    <p v-html="arr.catalog" class="p2"></p>
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
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.axios({
      url: "/book",
      method: "get"
    }).then(ok => {
      this.arr = ok.data[0];
      console.log(this.arr);
    });
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
.p2 {
  white-space: pre;
  font-size: 0.12rem;
}
.jianjie {
  font-size: 0.12rem;
  margin: 0.2rem 0;
}
.author {
  font-size: 0.12rem;
  margin: 0.2rem 0;
}
.fanyi {
  font-size: 0.12rem;
  margin: 0.2rem 0;
}
.author_intro {
  font-size: 0.12rem;
  margin: 0.2rem 0;
  /* white-space: pre; */
}
</style>