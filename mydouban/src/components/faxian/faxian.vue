<template>
  <div class="faxian">
    <a :href="ahref" :style="{color:yanse,borderColor:yanse}">{{title}}</a>
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
    },
    yanse: {
      type: String,
      required: true
    }
  },
  created() {}
};
</script>
<style scoped>
.faxian > a {
  display: table;
  white-space: nowrap;
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
</style>