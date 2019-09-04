<template>
  <div>
    <h4>{{tit}}</h4>
    <p>{{num}}条评论</p>
  </div>
</template>
<script>
export default {
  props: {
    tit: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped>
h4 {
  font-weight: 300;
  font-size: 0.14rem;
  color: #494949;
  margin: 0.15rem 0;
}
p {
  font-size: 0.13rem;
  color: #42bd56;
}
</style>