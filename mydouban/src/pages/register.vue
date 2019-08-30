<template>
  <div class="bgbox">
    <p class="wellcom">欢迎加入豆瓣</p>
    <div class="regbox">
      <input type="email" name class="inpa" placeholder="邮箱" />
      <br />
      <input type="password" name placeholder="密码" class="inpm" />
      <span></span>
      <br />
      <input type="text" name class="inpa" placeholder="用户名" />
      <br />
      <input type="button" value="立即注册" class="btn" />
    </div>
    <p class="regXieYi">点击「注册」代表你已阅读并同意用户使用协议</p>
    <router-link to="/home">下载豆瓣App</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wellcom{
  color: #42bd56;
  font-size: 0.34rem;
  margin: 0.3rem 0 0.46rem;
  text-align: center;
}
.regbox {
  padding: 0 0.14rem;
}
input::placeholder{
  color:rgb(202, 206, 206);
  font-size:.13rem;
}
.inpa {
  width: 2.9rem;
  height: 0.45rem;
  outline: none;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  padding: 0 0.08rem;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
}
.inpm {
  width: 2.5rem;
  height: 0.45rem;
  border: none;
  outline: none;
  border-left: 1px solid #cccccc;
  box-sizing: border-box;
  padding: 0 0.08rem;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
  color: #aaaaaa;
}
span {
  display: inline-block;
  box-sizing: border-box;
  border-right: 1px solid #cccccc;
  width: 0.35rem;
  height: 0.45rem;
  vertical-align: middle;
}
.btn {
  width: 2.9rem;
  height: 0.44rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: #42bd56;
  color: white;
  font-size: 0.15rem;
  margin-top: 0.1rem;
  border-radius: .04rem;
}
.regXieYi{
    font-size: .12rem;
    color: #aaaaaa;
    margin: .18rem .3rem .35rem;
}
a{
    font-size: .13rem;
    color:#42bd56;
    margin: 0 1.15rem;
}
</style>