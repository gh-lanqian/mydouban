<template>
  <div class="listgp">
    <div>
      <img :src="small" alt="jpg" />
      <span>{{title}}</span>
      <span>{{group_member}}人</span>
    </div>
    <p>
      <span>{{time}}</span>
      <span>{{cont}}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    group_member: {
      type: Number,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    cont: {
      type: String,
      required: true
    },
    small: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.listgp {
  padding: 0.15rem 0;
  border-bottom: 1px solid #f2f2f2;
}
.listgp > div {
  display: flex;
  line-height: 0.38rem;
}
.listgp > img {
  vertical-align: middle;
}
.listgp > div span:nth-of-type(1) {
  font-size: 0.15rem;
  color: #111111;
  display: inline-block;
  margin-left: 0.1rem;
  width: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.listgp > div span:nth-of-type(2) {
  font-size: 0.13rem;
  float: right;
  color: #cccccc;
  margin-left: 0.26rem;
}
p > span {
  font-size: 0.13rem;
  color: #aaaaaa;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
img {
  width: 0.33rem;
  height: 0.33rem;
}
</style>