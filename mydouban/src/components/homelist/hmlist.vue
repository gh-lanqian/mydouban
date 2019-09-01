<template>
  <div>
    <router-link class="listz" to="/bookdescription">
      <div class="div1">
        <div>
          <p class="pp1">宠魅·北京 配音沙龙来啦！零基础可参与！【可团体定制】</p>
          <slot name="slota"></slot>
        </div>
        <img src="https://img1.doubanio.com/pview/event_poster/hlarge/public/2de96f7de8cce08.jpg" />
      </div>
      <p class="pp2">
        <span>展览</span>
        <slot name="slotb"></slot>
      </p>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.listz {
  display: block;
  padding-top: 0.2rem;
  border-bottom: 1px solid #cccccc;
}
.div1 {
  display: flex;
}
div {
  width: 100%;
}
.pp1 {
  width: 1.8rem;
  font-size: 0.14rem;
  color: #494949;
  text-align: justify;
}
img {
  width: 0.75rem;
  height: 0.9rem;
}
span {
  font-size: 0.1rem;
  color: #cccccc;
  flex: 1;
}
.pp2 {
  margin: 0.24rem 0;
  display: flex;
  justify-content: space-between;
}
</style>