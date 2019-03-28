<template>
	<div class="container">
		<div class="item-logo">
			<router-link to="/index"><img src="../../assets/sign-bg.svg" class="logo" /></router-link>
		</div>
		
		<div class="item">
			<div class="item-sign">
				<div class="signin">
					<router-link to="/sign_in" class="signin2">登录</router-link>
				</div>
				<div class="signup">
					<router-link to="/sign_up" class="signup2">注册</router-link>
				</div>
			</div>
			<div class="item-content">
				<router-view/>
			</div>
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
	.container{
		background-color: #FFFFFF;
		margin: 0 auto;
	}
	
	.item-logo{
		margin-top: 50px;
	}
	
	.item{
		width: 400px;
		height: 400px;
		margin-top: 200px;
		margin-left: 1300px;
		background-color: aqua; 
	}
	
	.item-sign{
		display: flex;
		height: 10%;
		width: 100%;
		background-color: #42B983; 
		
		align-items: center;
		/* 前提是flex布局 垂直方向居中 */
		justify-content: center;
		/* 水平方向居	中 */
	}
	
	.item-content{
		width: 100%;
		height: 90%;
		margin: 0 auto;
	}
	
	.signin{
		width: 50%;
	}
	
	.signup{
		width: 50%;
	}
	
	.signin2{
		/* color: #FFFFFF; */
		text-decoration: none;
	}
	
	.signup2{
		/* color: #FFFFFF; */
		text-decoration: none;
	}
</style>
