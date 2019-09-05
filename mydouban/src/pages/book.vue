<template>
  <div>
    <top></top>
    <img src="../../static/img/1.gif" v-if="qarr.length<=0" class="xiaoLan" />
    <div v-else>
      <outsilder :outarr="arra"></outsilder>
      <outsilder :outarr="arrb"></outsilder>
      <outsilder :outarr="arrc">
        <div class="slota">
          <img :src="qarr[0].images.small" :alt="qarr[0].subtitle" />
          <div>
            <p>
              <span>{{qarr[0].subtitle}}</span>
              <span>￥{{qarr[0].ebook_price}}</span>
            </p>
            <p>{{qarr[0].title}}</p>
          </div>
        </div>
      </outsilder>
      <p>
        <span>发现好书</span>
        <a href="#">更多</a>
      </p>
      <img src="../../static/img/1.gif" v-if="farr.length<=0" />
      <div class="faz" v-else>
        <div class="fa">
          <faxian
            v-for="(v,i) in farr"
            :key="i"
            :ahref="v.href"
            :title="v.title"
            :yanse="v.color"
            v-if="!v.line"
          ></faxian>
          <br v-else />
        </div>
      </div>
      <botz :bta="botarr"></botz>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import foot from "../components/foot";
import outsilder from "../components/booksilder/outsilder";
import botz from "../components/more/botz";
import faxian from "../components/faxian/faxian";

export default {
  components: {
    top,
    foot,
    outsilder,
    botz,
    faxian
  },
  data() {
    return {
      farr: [],
      botarr: []
    };
  },
  created() {
    this.$store.dispatch("actionfun1"); //使用vuex two
    this.axios({
      url: "/goodBook",
      method: "get"
    }).then(ok => {
      this.farr = ok.data;
    });
    this.axios({
      url: "/bot",
      method: "get"
    }).then(ok => {
      this.botarr = ok.data;
    });
  },
  computed: {
    qarr() {
      return this.$store.state.qarr;
    }, //使用vuex  one
    arra() {
      var arr1 = this.qarr.filter((v, i) => {
        if (i < 11) {
          return this.qarr[i];
        }
      });
      arr1.unshift({ a: "最受关注图书 | 虚构类" });
      return arr1;
    },
    arrb() {
      var arr1 = this.qarr.filter((v, i) => {
        if (i > 10 && i < 21) {
          return this.qarr[i];
        }
      });
      arr1.unshift({ a: "最受关注图书 | 非虚构类" });
      return arr1;
    },
    arrc() {
      var arr1 = this.qarr.filter((v, i) => {
        if (i < 40 && i > 20) {
          return this.qarr[i];
        }
      });
      arr1.unshift({ a: "豆瓣纸书" });
      return arr1;
    }
  }
};
</script>
<style scoped>
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
.slota img {
  width: 1rem;
  height: 1.4rem;
}
.slota {
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.15rem;
}
span:nth-of-type(1) {
  font-size: 0.15rem;
  color: #111111;
  width: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
span:nth-of-type(2) {
  font-size: 0.12rem;
  color: #e76648;
  margin-left: 0.3rem;
}
p:nth-of-type(2) {
  font-size: 0.12rem;
  color: #aaaaaa;
  width: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.1rem;
}
.faz {
  width: 100%;
}
.fa {
  white-space: nowrap;
  overflow-x: auto;
}
</style>