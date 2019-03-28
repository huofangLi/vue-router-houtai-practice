<template>
	<div class="item">
		<div class="item-logo">
			<router-link to="/index">
				<img src="../../assets/sign-bg.svg" class="logo" />
			</router-link>
		</div>

		<div class="container"></div>
		<div class="sign-box">
			<router-link to="/sign_up" class="sign">注册</router-link>
			<router-link to="/sign_in" class="sign">登录</router-link>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sign',
	data() {
		return {};
	}
};
</script>

<style>
.item-logo {
	margin-top: 50px;
	width: 100%;
	height: 80px;
	background-color: #fff;
}
.logo {
	width: 200px;
	height: 50px;
	margin-left: 100px;
}
.container {
	width: 100%;
	height: 800px;
}
.sign-box {
	position: absolute;
	bottom: 120px;
	right: 200px;
	width: 500px;
	height: 400px;
}
a {
	margin-right: 200px;
	font-size: 16pt;
	color: black;
}
.sign{
	text-decoration: none;
}
</style>
