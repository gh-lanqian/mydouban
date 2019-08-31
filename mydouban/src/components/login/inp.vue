<template>
  <div>
    <input :type="txt.type" :name="txt.names" class="inpa" :placeholder="txt.title" v-model="text1" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    txt: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      text1: ""
    };
  },
  watch: {
    text1(n, b) {
      this.$emit("mite", this.text1);
    }
  }
};
</script>
<style scoped>
.inpa {
  width: 2.9rem;
  height: 0.45rem;
  outline: none;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  padding: 0 0.08rem;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
}
input::placeholder {
  color: rgb(202, 206, 206);
  font-size: 0.13rem;
}
</style>