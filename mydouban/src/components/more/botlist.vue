<template>
  <div>
    <a :href="ahref">{{title}}</a>
    <span>></span>
  </div>
</template>
<script>
export default {
  props: {
    ahref: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
a {
  margin-left: 0.05rem;
  font-size: 0.13rem;
  color: #42bd56;
  float: left;
}
span {
  font-size: 0.2rem;
  color: #eeeeee;
  float: right;
  margin-right: 0.1rem;
}
div {
  width: 1.42rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 1px solid #eeeeee;
  border-left: 0;
}
</style>