<template>
  <div>
    <p class="top">
      <span class="b" @click="go()">取消</span>
      <b>登录豆瓣</b>
    </p>
    <div class="outbox">
      <inp :txt="data[0]" @mite="mitea"></inp>
      <inp :txt="data[1]" v-model="bool" @mite="miteb">
        <span id="a">
          <img @click="fun()" src="../../static/img/m.png" v-if="!bool" />
          <img @click="fun()" src="../../static/img/n.png" v-else />
        </span>
      </inp>
      <div @click="ulogin()">
        <btn :text="data[2]" :bg="bg"></btn>
      </div>
    </div>
    <p class="regXieYi">使用其他方式登录 & 找回密码</p>
    <div class="linkdiv">
      <router-link to="/register">注册豆瓣账号</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/home">下载豆瓣App</router-link>
    </div>
  </div>
</template>
<script>
import inp from "../components/login/inp";
import btn from "../components/login/btn";
export default {
  components: {
    inp,
    btn
  },
  data() {
    return {
      bool: false,
      emails: "",
      pwds: "",
      bg: false,
      data: [
        { title: "邮箱", type: "email" },
        { title: "Token", type: "password" },
        { title: "登录" }
      ]
    };
  },
  methods: {
    fun() {
      this.bool = !this.bool;
      if (this.bool) {
        this.data[1].type = "text";
      } else {
        this.data[1].type = "password";
      }
    },
    go() {
      this.$router.go(-1);
    },
    mitea(val) {
      this.emails = val;
    },
    miteb(val) {
      this.pwds = val;
    },
    ulogin() {
      if (this.emails == "" || this.pwds == "") {
        alert("输入不能为空");
      } else {
        this.data[2].title = "正在登录...";
        this.bg = true;
        let param = new URLSearchParams();
        param.append("email", this.emails);
        param.append("pwd", this.pwds);
        this.axios({
          url: "/apis/login",
          method: "post",
          data: param
        }).then(
          ok => {
            if (ok.data.linkid == 5) {
              alert("登录成功");
              //储存后台返回的token
              window.localStorage.setItem("token", ok.data.token);
              this.$router.push("/home");
            } else if (ok.data.linkid == 4) {
              alert("登录失败");
            } else if (ok.data.linkid == 6) {
              alert("连接超时，请稍后再试");
            }
          },
          err => {}
        );
      }
    }
  },
  mounted() {
    document.getElementsByClassName("btn")[0].style.backgroundColor = "#17aa52";
    document.getElementsByClassName("inpa")[1].style.cssText = `
                border-top:none;
                border-right:none;
                 width: 2.5rem;
    `;
  }
};
</script>
<style scoped>
.red {
  color: #42bd56;
}
.top {
  width: 100%;
  height: 0.48rem;
  position: relative;
  border-bottom: 1px solid #eeeeee;
}
.b {
  font-size: 0.13rem;
  color: #42db56;
  position: absolute;
  left: 0.2rem;
  top: 0.15rem;
}
#a {
  display: inline-block;
  box-sizing: border-box;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  width: 0.35rem;
  height: 0.45rem;
  vertical-align: middle;
  line-height: 0.45rem;
}
b {
  font-size: 0.15rem;
  position: absolute;
  left: 1.3rem;
  top: 0.14rem;
}
.outbox {
  padding: 0.3rem 0.14rem 0.2rem;
}
.regXieYi {
  font-size: 0.13rem;
  color: #aaaaaa;
  margin: 0 0.7rem 0.35rem;
}
a {
  font-size: 0.13rem;
  color: #42bd56;
}
.linkdiv {
  margin-left: 0.7rem;
}
#a img {
  width: 0.3rem;
  height: 0.25rem;
  margin-top: 0.1rem;
}
</style>