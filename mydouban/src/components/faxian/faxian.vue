<template>
  <div class="faxian">
    <a :href="ahref" :style="{color:yanse,borderColor:yanse}">{{title}}</a>
  </div>
</template>
<script>
export default {
  props: ["ahref", "title", "yanse"],
  created() {}
};
</script>
<style scoped>
.faxian > a {
  display: table;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.05rem;
  border: 1px solid #ffac2d;
  color: #ffac2d;
  font-size: 0.14rem;
  letter-spacing: 0.02rem;
  padding: 0 0.2rem;
  margin-left: 0.2rem;
}
.faxian {
  display: inline-block;
}
</style>