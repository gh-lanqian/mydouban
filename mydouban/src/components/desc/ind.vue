<template>
  <div>
    <router-link to="/movedescription">
      <div class="aaa">
        <img :src="imgurl" :alt="title" />
      </div>
      <div class="bbb">
        <p class="tit">{{title}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    imgurl: {
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
div {
  margin: 0 0.01rem;
}
img {
  width: 1rem;
  height: 1.2rem;
  border-radius: 0.05rem;
}
.aaa {
  width: 1rem;
  height: 1.2rem;
}
.tit {
  font-size: 0.13rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: #111111;
}
.bbb {
  width: 1rem;
  height: 0.15rem;
}
</style>