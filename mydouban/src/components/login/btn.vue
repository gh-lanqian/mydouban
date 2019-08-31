<template>
  <div>
    <input type="button" :value="text.title" :class="bg?'gray':'btn'" />
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: Object,
      required: true
    },
    bg: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    fun() {}
  }
};
</script>
<style scoped>
.gray {
  width: 2.9rem;
  height: 0.44rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: #aaaaaa;
  color: white;
  font-size: 0.15rem;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
.btn {
  width: 2.9rem;
  height: 0.44rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: #42bd56;
  color: white;
  font-size: 0.15rem;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
</style>