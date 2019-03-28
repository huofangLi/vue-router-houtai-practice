<template>
	<div >
		<div class="qx">
			当前用户的权限值是有权限时(admin) 时，才可以看到下面的个别按钮。

			<el-switch
				style="display: block"
				v-model="value4"
				active-color="#13ce66"
				inactive-color="#ff4949"
				active-text="无权限(user)"
				inactive-text="有权限(admin)"
			></el-switch>
		</div>
		<div class="an">
			<el-row>
				<el-button round>默认按钮</el-button>
				<el-button type="primary" round>主要按钮</el-button>
				<el-button type="success" round>成功按钮</el-button>
				<el-button type="info" round>信息按钮</el-button>
				<el-button type="warning" round>警告按钮</el-button>
				<el-button type="danger" round>危险按钮</el-button>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuanXian',
	data() {
		return {
			value4: true
		};
	}
};
</script>

<style>
.qx {
	width: 90%;
	height: 80px;
}
.an {
	width: 90%;
	height: 80px;
}
</style>
