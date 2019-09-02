<template>
  <div class="home">
    <top></top>
    <div class="hmone">
      <nava v-for="(v,i) in arr" :key="i" :title="v.title" :tourl="v.tourl"></nava>
    </div>
    <div class="hmtwo">
      <hmlist
        v-for="(v,i) in arra"
        :key="i"
        :title="v.title"
        :imgurl="v.image"
        :lf="v.category_name"
        :rt="v.tags"
        :cont="conts[i]"
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
      arra: []
    };
  },
  computed: {
    conts() {
      var data = [];
      for (var i in this.arra) {
        data.push(this.arra[i].content.split("<")[0].slice(0, 50));
      }
      return data;
    }
  },
  created() {
    this.axios({
      url: "/nava",
      method: "get"
    }).then(ok => {
      this.arr = ok.data;
    });
    this.axios({
      url: "/shouye",
      method: "get"
    }).then(ok => {
      this.arra = ok.data;
    });
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