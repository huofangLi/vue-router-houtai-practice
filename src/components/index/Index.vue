<template>
	<el-container style="height: 100%; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: #000000;">
			<el-menu :default-openeds="['']">
				<el-submenu index="1">
					<template slot="title">
						<router-link to="/index/yin_dao" class="logo">
							<i class="el-icon-message"></i>
							引导页
						</router-link>
					</template>
				</el-submenu>

				<el-submenu index="2">
					<template slot="title">
						<router-link to="/quan_xian" class="logo">
							<i class="el-icon-message"></i>
							权限测试页
						</router-link>
					</template>
				</el-submenu>

				<el-submenu index="3">
					<template slot="title">
						<router-link to="/shu_jv" class="logo">
							<i class="el-icon-message"></i>
							数据展示
						</router-link>
					</template>
				</el-submenu>

				<el-submenu index="4">
					<template slot="title">
						<router-link to="/a_li" class="logo">
							<i class="el-icon-message"></i>
							阿里图标
						</router-link>
					</template>
				</el-submenu>

				<el-submenu index="5">
					<template slot="title">
						<i class="el-icon-menu"></i>
						第三方网站
					</template>
					<el-menu-item-group>
						<el-menu-item index="5-1">
							<router-link to="/avue" class="logo">avue官网</router-link>
						</el-menu-item>
						<el-menu-item index="5-2">
							<router-link to="/bai_du" class="logo">百度</router-link>
						</el-menu-item>
						<el-menu-item index="5-3">搜狐</el-menu-item>
						<el-menu-item index="5-4">360</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

				<el-submenu index="6">
					<template slot="title">
						<i class="el-icon-setting"></i>
						CRUD表单
					</template>
					<el-menu-item-group>
						<el-menu-item index="6-1">表单</el-menu-item>
						<el-menu-item index="6-2">表单</el-menu-item>
						<el-menu-item index="6-3">表单</el-menu-item>
						<el-menu-item index="6-4">表单</el-menu-item>
						<el-menu-item index="6-5">表单</el-menu-item>
						<el-menu-item index="6-6">表单</el-menu-item>
						<el-menu-item index="6-7">表单</el-menu-item>
						<el-menu-item index="6-8">表单</el-menu-item>
						<el-menu-item index="6-9">表单</el-menu-item>
						<el-menu-item index="6-10">表单</el-menu-item>
					</el-menu-item-group>
				</el-submenu>

				<el-submenu index="7">
					<template slot="title">
						<i class="el-icon-setting"></i>
						CRUD表格
					</template>
					<el-menu-item-group>
						<el-menu-item index="7-1">表单</el-menu-item>
						<el-menu-item index="7-2">表单</el-menu-item>
						<el-menu-item index="7-3">表单</el-menu-item>
						<el-menu-item index="7-4">表单</el-menu-item>
						<el-menu-item index="7-5">表单</el-menu-item>
						<el-menu-item index="7-6">表单</el-menu-item>
						<el-menu-item index="7-7">表单</el-menu-item>
						<el-menu-item index="7-8">表单</el-menu-item>
						<el-menu-item index="7-9">表单</el-menu-item>
						<el-menu-item index="7-10">表单</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<el-dropdown>
					<i class="el-icon-setting" style="text-align: left;"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>查看</el-dropdown-item>
						<el-dropdown-item>新增</el-dropdown-item>
						<el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				
				
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>查看</el-dropdown-item>
						<el-dropdown-item>新增</el-dropdown-item>
						<el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span style="margin-right: 15px;">admin</span>
				<el-dropdown>
					<i class="el-icon-arrow-down" style="margin-right: 15px"></i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>首页</el-dropdown-item>
						<el-dropdown-item>个人信息</el-dropdown-item>
						<el-dropdown-item>avue官网</el-dropdown-item>
						<el-dropdown-item>码云地址</el-dropdown-item>
						<el-dropdown-item>github</el-dropdown-item>
						<el-dropdown-item>退出系统</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown><i class="el-icon-more" style="margin-right: 15px"></i></el-dropdown>
			</el-header>

			<el-main><router-view /></el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		const item = {
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		};
		return {
			tableData: Array(20).fill(item)
		};
	}
};
</script>

<style>
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}

.el-aside {
	color: #333;
}

.logo {
	text-decoration: none;
	color: black;
	font: 12px;
}
</style>
