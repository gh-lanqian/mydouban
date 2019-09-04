<template>
  <div>
    <router-link class="listz" :to="{name:'shouYeDes',params:{id:id}}">
      <div class="div1">
        <div>
          <p class="pp1">{{title}}</p>
          <p class="ppa">{{cont}}</p>
        </div>
        <img :src="imgurl" />
      </div>
      <p class="pp2">
        <span class="spana">{{lf}}</span>
        <span class="spanb">{{rt}}</span>
      </p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cont: {
      type: String,
      required: true
    },
    imgurl: {
      type: String,
      required: true
    },
    lf: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    rt: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.ppa {
  width: 1.8rem;
  font-size: 0.1rem;
  margin-top: 0.12rem;
  color: #aaaaaa;
}
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
.spana {
  font-size: 0.1rem;
  color: #cccccc;
  flex: 1;
}
.spanb {
  font-size: 0.11rem;
  color: #cccccc;
}
.pp2 {
  margin: 0.24rem 0;
  display: flex;
  justify-content: space-between;
}
</style>