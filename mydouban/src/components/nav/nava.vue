<template>
  <div class="nava">
    <router-link :to="tourl">{{title}}</router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tourl: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
a {
  display: inline-block;
  text-align: center;
  font-size: 0.13rem;
  color: #464646;
  width: 1.4rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background-color: #f6f6f6;
  margin-bottom: 0.05rem;
}
</style>