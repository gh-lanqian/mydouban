<template>
  <div>
    <top></top>
    <div class="upm">
      <p class="top">
        <span>聊聊你的观影感受</span>
        <span>极速下载</span>
        <span>打开</span>
      </p>
    </div>
    <div class="middlecon">
      <h4>{{arr[0].title}}</h4>
      <div>
        <div class="lt">
          <p>
            <el-rate v-model="value" disabled text-color="#aaaaaa" score-template="{value}"></el-rate>
            <span>{{arr[0].rating.average}}</span>
            <i>{{arr[0].collect_count}}人评价</i>
          </p>
          <p
            class="lei"
          >{{arr[0].year}} / {{arr[0].genres[0]}} / {{arr[0].genres[1]}} / {{arr[0].genres[2]}} / {{arr[0].casts[0].name}} / {{arr[0].casts[1].name}} / {{arr[0].casts[2].name}} /</p>
        </div>
        <div class="rt">
          <img :src="arr[0].images.small" alt />
        </div>
      </div>
      <div class="kan">
        <i>想看</i>
        <i>看过</i>
      </div>
      <h5>{{arr[0].title}}的简介</h5>
      <p class="jianjie">
        20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），
        <span
          class="gengDuo"
          v-if="bool"
          @click="fun()"
        >&lt;展开&gt;</span>
        <span
          v-else
        >请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……</span>
      </p>
      <h5>查看更多相关分类</h5>
      <p class="more">
        <span v-for="(v,i) in arr[0].genres" :key="i">{{v}}</span>
      </p>
      <h5>{{arr[0].title}}的演员</h5>
      <div class="faz">
        <div class="fa">
          <outd :outarr="arr"></outd>
        </div>
      </div>
      <h5>{{arr[0].title}}的短评</h5>
    </div>
    <div class="duanPing">
      <radiolist v-for="count in 3" :key="count"></radiolist>
    </div>
    <p class="ping">显示更多评论</p>
    <div class="imgss">
      <img src="../../static/img/2.png" alt />
    </div>
    <div class="middlecon">
      <h5>{{arr[0].title}}的问答</h5>
      <wenda v-for="(v,i) in titarr" :key="i" :tit="v.title" :num="v.num"></wenda>
      <p class="ping">显示更多问答</p>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import top from "../components/header/top";
import radiolist from "../components/radio/radiolist";
import outd from "../components/desc/outd";
import foot from "../components/foot";
import wenda from "../components/wenda";

export default {
  components: {
    top,
    radiolist,
    outd,
    foot,
    wenda
  },
  data() {
    return {
      bool: true,
      titarr: [
        { title: "大家为什么对国产片这么苛刻?", num: 35 },
        { title: "有没有人喜欢凯凯王版的汤川学?", num: 15 },
        { title: "真的有饭店的打包袋和优衣库一样吗?", num: 11 },
        {
          title: "最后结尾 石洪文：“这道题难吗”，唐川说：“很难”，什么意思 ?",
          num: 7
        }
      ]
    };
  },
  methods: {
    fun() {
      this.bool = !this.bool;
    }
  },
  computed: {
    arr() {
      var id = this.$route.params.id;
      var arr1 = this.$store.state.arr.filter((v, i) => {
        if (id == v.id) {
          return v;
        }
      });
      return arr1;
    },
    value() {
      return this.arr[0].rating.average / 2;
    }
  }
};
</script>
<style scoped>
.upm {
  margin-bottom: 0.1rem;
  position: relative;
  height: 0.65rem;
  width: 100%;
  background: url(../../static/img/promotion_bg.b7abee9.jpg) no-repeat;
  background-size: 100% 0.65rem;
}
.top {
  position: absolute;
  top: 0.25rem;
  left: 0.4rem;
}
.upm > p > span:nth-of-type(1) {
  font-size: 0.12rem;
  color: #2ca532;
}
.upm > p > span:nth-of-type(2) {
  margin-left: 0.35rem;
  display: inline-block;
  width: 0.7rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  background-color: #17aa52;
  border-radius: 0.04rem;
  font-size: 0.11rem;
  color: white;
}
.upm > p > span:nth-of-type(3) {
  display: inline-block;
  width: 0.5rem;
  height: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  border: 1px solid #42bd56;
  border-radius: 0.04rem;
  font-size: 0.11rem;
  color: #42bd56;
}
.middlecon {
  width: 90%;
  margin: 0 auto;
}
.middlecon > div {
  overflow: hidden;
}
.lt {
  float: left;
  width: 58%;
}

.lt span {
  font-size: 0.12rem;
  color: #aaaaaa;
}
.lt i {
  font-style: normal;
  font-size: 0.12rem;
  color: #aaaaaa;
}
.rt {
  float: right;
}
.rt img {
  width: 1rem;
}
.lei {
  font-size: 0.12rem;
  color: #111111;
}
.kan {
  margin-top: 0.3rem;
}
.kan i {
  display: inline-block;
  font-style: normal;
  width: 1.39rem;
  height: 0.25rem;
  border: 1px solid orange;
  color: orange;
  line-height: 0.25rem;
  text-align: center;
  font-size: 0.1rem;
  border-radius: 0.04rem;
}
h5 {
  font-size: 0.14rem;
  color: #aaaaaa;
  font-weight: 300;
  margin: 0.15rem 0;
}
.jianjie {
  font-size: 0.12rem;
  color: #666;
  letter-spacing: 0.01rem;
}
.gengDuo {
  color: #42bd56;
}
.more span {
  display: inline-block;
  width: 0.4rem;
  height: 0.25rem;
  line-height: 0.25rem;
  text-align: center;
  color: #111111;
  font-size: 0.12rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  margin: 0 0.1rem;
}
.faz {
  width: 100%;
}
.fa {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.ping {
  text-align: center;
  font-size: 0.13rem;
  color: #42bd56;
  margin: 0.2rem 0;
}
.imgss {
  text-align: center;
}
.imgss img {
  width: 85%;
}
</style>