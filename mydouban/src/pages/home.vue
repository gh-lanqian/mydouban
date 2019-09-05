<template>
  <div class="home">
    <top></top>
    <div class="hmone">
      <nava v-for="(v,i) in arr" :key="i" :title="v.title" :tourl="v.tourl"></nava>
    </div>
    <img src="../../static/img/1.gif" v-if="arra.length<=0" class="xiaoLan" />
    <div class="hmtwo" v-else>
      <hmlist
        v-for="(v,i) in arra"
        :key="i"
        :title="v.title"
        :imgurl="v.image"
        :lf="v.category_name"
        :rt="v.tags"
        :cont="conts[i]"
        :id="v.id"
      ></hmlist>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import nava from "../components/nav/nava";
import hmlist from "../components/homelist/hmlist";
export default {
  components: {
    top,
    nava,
    hmlist
  },
  data() {
    return {
      arr: [],
      name: ""
    };
  },
  computed: {
    arra() {
      return this.$store.state.arra;
    }, //使用vuex  one
    conts() {
      var data = [];
      for (var i in this.arra) {
        data.push(this.arra[i].content.split("<")[0].slice(0, 50));
      }
      return data;
    }
  },
  created() {
    this.$store.dispatch("actionfun2"); //使用vuex two

    this.axios({
      url: "/nava",
      method: "get"
    }).then(ok => {
      this.arr = ok.data;
    });
    var token = window.localStorage.getItem("token");
    if (token) {
      this.axios({
        url: "/apis/home",
        method: "get",
        params: { token }
      }).then(ok => {
        // console.log(ok);
        this.name = ok.data.uname;
      });
    } else {
      alert(请您登录后在访问);
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.hmone {
  padding-top: 0.2rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.hmtwo {
  width: 90%;
  margin: 0 auto;
}
</style>