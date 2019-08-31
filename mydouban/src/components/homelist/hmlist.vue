<template>
  <div>
    <div>
      <div class="div1">
        <div>
          <p>宠魅·北京 配音沙龙来啦！零基础可参与！【可团体定制】</p>
          <slot name="slota"></slot>
        </div>
        <img src="https://img1.doubanio.com/pview/event_poster/hlarge/public/2de96f7de8cce08.jpg" />
      </div>
      <p>
        <span>展览</span>
        <slot name="slotb"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.div1 {
  display: flex;
}
div {
  width: 100%;
}
p {
  width: 1.8rem;
  font-size: 0.14rem;
}
img {
  width: 0.7rem;
  height: 0.9rem;
}
span {
  font-size: 0.11rem;
  color: #cccccc;
}
</style>