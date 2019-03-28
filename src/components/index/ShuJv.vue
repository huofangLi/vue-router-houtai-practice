<template>
	<div class="container">
		<div class="top">数据展示：</div>
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<div class="kt">100</div>
					<div class="kt1">____</div>
					<div class="kt1">日活跃数</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<div class="kt">3000</div>
					<div class="kt1">____</div>
					<div class="kt1">月活跃数</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<div class="kt">10000</div>
					<div class="kt1">____</div>
					<div class="kt1">年活跃数</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<div class="kt">40000</div>
					<div class="kt1">____</div>
					<div class="kt1">周度跃数</div>
				</div>
			</el-col>
			
			<div class="top" style="margin-top: 30px;">盒子卡片展示：</div>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="left">
					<img src="/static/img1.png"/>
					<div class="left1">
						<div class="kk">13322</div>
						<div class="kk">错误日志</div>
					</div>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="left">
					<img src="/static/img2.png"/>
					<div class="left1">
					<div class="kk">32</div>
					<div class="kk">数据展示</div>
					</div>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="left">
					<img src="/static/img3.png"/>
					<div class="left1">
						<div class="kk">322</div>
						<div class="kk">权限管理</div>
					</div>
					</div>
				</div>
			</el-col>
			<div class="top" style="margin-top: 30px;">选项卡展示：</div>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="ik">
					<img src="/static/img4.png"/>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="ik">
					<img src="/static/img5.png"/>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<div class="ik">
					<img src="/static/img6.png" />
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<style>
	.container {
		background-color: whitesmoke;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.top {
		margin-top:1.25rem;
		background: white;
	}

	.grid-content {
		background: white;
		min-height: 160px;
		display: flex;
		flex-direction: column;
		font size: 80px;
	}
	.ik img{
		height: 100%;
		width: 100%;
	}
	.kt {
		text-align: center;
		vertical-align: middle;
		color: rgb(21, 160, 255);
		font-weight: bold;	
	}
	.kt1{
		text-align: center;
		vertical-align: middle;
		color: #000000;
	}
	.kk{
		text-align: center;
		vertical-align: middle;
	}
	.left{
		display: flex;
	}
	.left img{
		flex: 1 1 20%;
	}
	.left1{
		text-align: left;
		font-weight: 50;
		flex: 1 1 80%;
	}
</style>
