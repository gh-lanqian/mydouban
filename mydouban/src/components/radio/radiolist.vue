<template>
  <div class="radlist">
    <div>
      <img src="../../../static/img/1.png" alt />
    </div>
    <div>
      <p class="p1">
        <span>豆瓣</span>写了日记
      </p>
      <p class="p2">{{time}}</p>
      <div class="ppti">
        <h5>豆瓣App 4.12.0 主要更新</h5>
        <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
      </div>
      <p class="pb">
        <label>
          <span>
            <img
              src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg"
              alt
            />
          </span>
          <i>4</i>
        </label>
        <label>
          <span>
            <img
              src="https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg"
              alt
            />
          </span>
          <i>0</i>
        </label>
        <label>
          <span>
            <img
              src="https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg"
              alt
            />
          </span>
          <i>1</i>
        </label>
        <span>
          <img
            src="https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg"
            alt
          />
        </span>
      </p>
    </div>
  </div>
</template>
<script>
var date = new Date();
var date_value =
  date.getFullYear() +
  "-" +
  (date.getMonth() + 1) +
  "-" +
  date.getDate() +
  " " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds();
export default {
  data() {
    return {
      time: date_value
    };
  }
};
</script>
<style scoped>
.radlist {
  padding-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  margin: 0 auto;
  width: 90%;
}
img {
  border-radius: 50%;
  width: 0.4rem;
}

.p1 {
  font-size: 0.14rem;
  color: #aaaaaa;
}
.p1 span {
  color: #494949;
  font-weight: 900;
}
.p2 {
  font-size: 0.12rem;
  color: #aaaaaa;
}
.ppti {
  width: 2rem;
  height: 0.8rem;
  border: 1px solid #d8d8d8;
  padding: 0.1rem 0.2rem 0.15rem;
  margin-top: 0.1rem;
}
.ppti h5 {
  font-size: 0.14rem;
  color: #494949;
  font-weight: 300;
  line-height: 0.3rem;
}
.ppti p {
  font-size: 0.1rem;
  color: #aaaaaa;
  line-height: 0.16rem;
}
i {
  font-style: normal;
  font-size: 0.12rem;
  color: #cccccc;
}
span img {
  width: 0.2rem;
  vertical-align: middle;
}
label {
  margin-right: 0.2rem;
}
label:nth-of-type(3) {
  margin-right: 0.72rem;
}
.pb {
  margin: 0.2rem 0;
}
</style>