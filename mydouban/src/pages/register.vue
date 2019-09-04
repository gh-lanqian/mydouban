<template>
  <div class="bgbox">
    <p class="wellcom">欢迎加入豆瓣</p>
    <div class="regbox">
      <inp :txt="data[0]" @mite="mite1"></inp>
      <inp :txt="data[1]" @mite="mite2">
        <span @click="fun()" :class="bool?'red':''">eye</span>
      </inp>
      <inp :txt="data[2]" @mite="mite3"></inp>
      <div @click="sub()">
        <btn :text="data[3]" :bg="bg"></btn>
      </div>
    </div>
    <p class="regXieYi">点击「注册」代表你已阅读并同意用户使用协议</p>
    <router-link to="/home">下载豆瓣App</router-link>
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
      bg: false,
      email: "",
      pwd: "",
      uname: "",
      data: [
        { title: "邮箱", type: "email", names: "email" },
        { title: "密码", type: "password", names: "pwd" },
        { title: "用户名", type: "text", names: "uname" },
        { title: "立即注册" }
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
    mite1(val) {
      this.email = val;
    },
    mite2(val) {
      this.pwd = val;
    },
    mite3(val) {
      this.uname = val;
    },
    sub() {
      if (this.email == "" || this.pwd == "" || this.uname == "") {
        alert("输入不能为空");
      } else {
        this.data[3].title = "正在提交...";
        this.bg = true;
        let param = new URLSearchParams();
        param.append("email", this.email);
        param.append("pwd", this.pwd);
        param.append("uname", this.uname);
        this.axios({
          url: "/apis/post",
          method: "post",
          data: param
        }).then(
          ok => {
            if (ok.data.linkid == 1) {
              alert("注册成功");
              this.$router.push("/login");
            } else if (ok.data.linkid == 2) {
              alert("该邮箱已注册过");
            } else if (ok.data.linkid == 0) {
              alert("注册失败");
            } else if (ok.data.linkid == 3) {
              alert("连接超时，请稍后再试");
            }
          },
          err => {}
        );
      }
    }
  },
  mounted() {
    document.getElementsByClassName("inpa")[1].style.cssText = `
                border:none;
                border-left:1px solid #cccccc;
                 width: 2.5rem;
    `;
  }
};
</script>
<style scoped>
.red {
  color: #42bd56;
}
.wellcom {
  color: #42bd56;
  font-size: 0.34rem;
  margin: 0.3rem 0 0.46rem;
  text-align: center;
}
.regbox {
  padding: 0 0.14rem;
}
span {
  display: inline-block;
  box-sizing: border-box;
  border-right: 1px solid #cccccc;
  width: 0.35rem;
  height: 0.45rem;
  line-height: 0.45rem;
  vertical-align: middle;
}
.regXieYi {
  font-size: 0.12rem;
  color: #aaaaaa;
  margin: 0.18rem 0.3rem 0.35rem;
}
a {
  font-size: 0.13rem;
  color: #42bd56;
  margin: 0 1.15rem;
}
</style>