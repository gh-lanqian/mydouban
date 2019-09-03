<template>
  <div>
    <router-link to="/movedescription">
      <div class="aaa">
        <img :src="imgurl" :alt="title" />
      </div>
      <div class="bbb">
        <p class="tit">{{title}}</p>
      </div>
      <p class="good">
        <i>☆☆☆☆☆</i>
        <span>{{average}}</span>
      </p>
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
    },
    average: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped>
i {
  font-style: normal;
  color: yellow;
}
span {
  font-size: 0.1rem;
  color: #aaaaaa;
}
div {
  margin: 0 0.01rem;
}
img {
  width: 0.95rem;
  height: 1.3rem;
  border-radius: 0.05rem;
}

.aaa {
  width: 1rem;
  height: 1.4rem;
}
.tit {
  font-size: 0.15rem;
  width: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: #111111;
}
.good {
  padding-left: 0.06rem;
}
.bbb {
  width: 1rem;
  height: 0.15rem;
}
</style>