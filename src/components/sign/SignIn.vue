
<template>
	<div class="content">
		<div class="si">
			<p class="p">
				<i class="icon-asterisk"></i>
				用户名:
			</p>
			<input v-model="name" placeholder="	用户名" class="a" />
		</div>
		<div class="si">
			<p class="p">
				<i class="icon-asterisk"></i>
				密码:
			</p>
			<input v-model="password1" placeholder="	密码" class="a" />
		</div>
		<div class="xia">
			<button type="button" @click="commit" class="g"><h3>登录</h3></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SignIn',
	data() {
		return { name: '', password1: '' };
	},
	methods: {
		commit: function() {
			alert();
		}
	}
};
</script>

<style>
.content {
	width: 90%;
	height: 90%;
	margin: 0 auto;
	margin-top: 40px;
	align-items: center;
}
.p {
	flex: 1 1 30%;
}
.si {
	display: flex;
	width: 90%;
	height: 60px;
	border-radius: 10px;
	outline: none;
}
.a {
	flex: 1 1 70%;
	width: 200px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid #dddddd;
	outline: none;
}
.xia {
	padding-top: 40px;
	width: 200px;
	height: 50px;
	align-items: center;
	padding-left: 25%;
}
.g {
	width: 200px;
	height: 50px;
	border-radius: 10px;
	border: 1px solid #dddddd;
	outline: none;
	background-color: #42B983;
	color: #eeeeee;
}
</style>