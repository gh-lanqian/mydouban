<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,input,td,select,textarea{
	margin:0;
	padding: 0;
}
html{
	font-size: 31.25vw;
}
body{
  	font-size: .16rem;
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
}
</style>
