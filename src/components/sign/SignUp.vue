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
		<div class="si">
			<p class="p">
				<i class="icon-asterisk"></i>
				确认密码:
			</p>
			<input v-model="password2" placeholder="	再次输入密码" class="a" />
		</div>
		<div class="xia">
			<button type="button" @click="commit" class="g"><h3>注册</h3></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SignUp',
	data() {
		return {
			name: '',
			password1: '',
			password2: '',
		}
		
	},
	methods: {
		commit: function() {
			var name = this.name;
			var password2 = this.password2;
			var password1 = this.password1;
			if (name == '') {
				alert("请输入账号");
			} else if (password1 !== password2) {
				alert("两次输入的密码不一致");
			} else if (name == '' || password1 == '' || password2 == '') {
				alert("账号或密码为空！");
			} else {
				alert("注册成功！");
			}
	
		}
	}
	
};
</script>

<style>
.content {
	width: 90%;
	height: 90%;
	margin: 0 auto;
	margin-top: 30px;
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
	background-color: rgb(169, 89, , 228);
	color: #eeeeee;
}
</style>