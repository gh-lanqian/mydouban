<template>
  <div class="toggle">
    <p class="top">
      <span class="b" @click="go()">关闭</span>
      <input type="text" @focus="fun()" :class="bool?'inpa':'inpb'" @blur="fun1()" />
    </p>
    <div>
      <tglist
        v-for="(v,i) in arr"
        :key="i"
        :tit="v.tit"
        :jieshi="v.jieshi"
        :col="v.col"
        :ahref="v.href"
      ></tglist>
    </div>
    <div class="bto">
      <p>
        <router-link to="/register">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
      </p>
      <p>
        <router-link to="/home">使用桌面版</router-link>
        <router-link to="/home">使用豆瓣App</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import tglist from "../components/toggle/tglist";
export default {
  components: {
    tglist
  },
  data() {
    return {
      bool: false,
      arr: []
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    fun() {
      this.bool = true;
    },
    fun1() {
      this.bool = false;
    }
  },
  created() {
    this.axios({
      url: "/toggle",
      method: "get"
    }).then(ok => {
      this.arr = ok.data;
    });
  }
};
</script>
<style scoped>
.toggle > div:nth-of-type(1) {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.top {
  width: 100%;
  height: 0.48rem;
  position: relative;
  border-bottom: 1px solid #eeeeee;
}
.b {
  font-size: 0.13rem;
  color: #42db65;
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}
input {
  margin: 0.08rem 0 0 0.6rem;
  border: none;
  width: 2.4rem;
  height: 0.3rem;
}
.inpb {
  background: #f3f3f3
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==)
    no-repeat 50%;
  background-size: 0.2rem;
}
.inpa {
  background: #f3f3f3;
}
a {
  font-size: 0.14rem;
  color: #42bd65;
  padding: 0 0.38rem;
}
.bto > p:nth-of-type(2) a {
  padding: 0 0.25rem;
}
.bto {
  margin-top: 0.3rem;
}
.bto > p {
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
}
</style>