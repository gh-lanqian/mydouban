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
    <div class="bookz">
      <h4>
        {{arr[0].subtitle}}
        <span>{{arr[0].binding}}</span>
      </h4>

      <div class="imgs">
        <img :src="arr[0].images.small" alt />
      </div>
      <p class="price">￥{{arr[0].price}}</p>

      <span class="pub">出版日期：{{arr[0].pubdate}}</span>&nbsp; &nbsp;&nbsp;&nbsp;
      <span class="pub">出版社：{{arr[0].publisher}}</span>
      <p class="author">
        作者：{{arr[0].author[0]}}
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        {{arr[0].author[1]}}
      </p>
      <p class="fanyi">翻译：{{arr[0].translator[0]}}</p>
      <p class="author_intro">
        作者简介：
        <span v-html="arr[0].author_intro"></span>
      </p>
      <p class="jianjie">
        <span>简介：{{arr[0].summary}}</span>
      </p>
      <p class="mulu">目录 共{{arr[0].pages}}页</p>
      <p v-html="arr[0].catalog" class="p2"></p>
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
      var arr1 = this.$store.state.qarr.filter((v, i) => {
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
.bookz {
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
.p2 {
  white-space: pre;
  font-size: 0.12rem;
}
.jianjie,
.author,
.pub,
.fanyi {
  font-size: 0.12rem;
  margin: 0.2rem 0;
}
h4 span {
  display: inline-block;
  width: 0.3rem;
  height: 0.2rem;
  color: white;
  text-align: center;
  font-size: 0.1rem;
  line-height: 0.2rem;
  border-radius: 0.05rem;
  background-color: #ff8263;
}
.author_intro {
  font-size: 0.12rem;
  margin: 0.2rem 0;
}
.mulu {
  font-size: 0.16rem;
  margin: 0.2rem 0;
}
.price {
  color: red;
  font-weight: 900;
}
</style>