<template>
  <div>
    <top></top>
    <qingDen></qingDen>
    <biggp :bigarr="arr1"></biggp>
    <biggp :bigarr="arr2"></biggp>
    <biggp :bigarr="arr3"></biggp>
    <foot></foot>
  </div>
</template>
<script>
import top from "../components/header/top";
import qingDen from "../components/qingDen";
import biggp from "../components/group/biggp";
import foot from "../components/foot";
export default {
  components: {
    top,
    qingDen,
    biggp,
    foot
  },
  data() {
    return {
      arr1: [],
      arr2: [],
      arr3: []
    };
  },
  created() {
    this.axios({
      url: "/xiaozua",
      method: "get"
    }).then(ok => {
      this.arr1 = ok.data;
    });
    this.axios({
      url: "/xiaozub",
      method: "get"
    }).then(ok => {
      this.arr2 = ok.data;
    });
    this.axios({
      url: "/xiaozuc",
      method: "get"
    }).then(ok => {
      this.arr3 = ok.data;
    });
  }
};
</script>
<style scoped>
</style>