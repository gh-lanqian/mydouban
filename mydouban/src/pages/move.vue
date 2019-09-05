<template>
  <div>
    <top></top>
    <img src="../../static/img/1.gif" v-if="arra.length<=0" class="xiaoLan" />

    <div v-else>
      <div>
        <outsilder :outarr="arra"></outsilder>
        <outsilder :outarr="arrb"></outsilder>
        <outsilder :outarr="arrc"></outsilder>
      </div>
      <p>
        <span>发现好电影</span>
        <a href="#">更多</a>
      </p>
      <div class="faz">
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
import outsilder from "../components/silder/outsilder";
import faxian from "../components/faxian/faxian";
import botz from "../components/more/botz";
export default {
  components: {
    top,
    foot,
    outsilder,
    faxian,
    botz
  },
  data() {
    return {
      farr: [],
      botarr: []
    };
  },
  created() {
    this.$store.dispatch("actionfun"); //使用vuex two
    this.axios({
      url: "/faxianhaodianying",
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
    arr() {
      return this.$store.state.arr;
    }, //使用vuex  one
    arra() {
      var arr1 = this.arr.filter((v, i) => {
        if (i < 11) {
          return this.arr[i];
        }
      });
      arr1.unshift({ a: "影院热映" });
      return arr1;
    },
    arrb() {
      var arr1 = this.arr.filter((v, i) => {
        if (i > 10 && i < 21) {
          return this.arr[i];
        }
      });
      arr1.unshift({ a: "免费在线观影" });
      return arr1;
    },
    arrc() {
      var arr1 = this.arr.filter((v, i) => {
        if (i < 31 && i > 20) {
          return this.arr[i];
        }
      });
      arr1.unshift({ a: "新片速递" });
      return arr1;
    }
    // farr1() {
    //   var ifarr = this.farr.slice(0, 3);

    //   return ifarr;
    // }
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
.faz {
  width: 100%;
}
.fa {
  white-space: nowrap;
  overflow-x: auto;
}
</style>