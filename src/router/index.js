import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
			path: '/',
			redirect: 'sign',
		},
		{
			//主页
			path: '/index',
			component: resolve => require(['../components/index/Index.vue'], resolve),
			meta: {
				title: '主页'
			},
			children: [{
					path: '/index/yin_dao',
					component: resolve => require(['../components/index/YinDaoYe.vue'], resolve),
					meta: {
						title: '引导页'
					}
				},
				{
					path: '/quan_xian',
					component: resolve => require(['../components/index/QuanXian.vue'], resolve),
					meta: {
						title: '权限测试页',
					}
				},
				{
					path: '/shu_jv',
					component: resolve => require(['../components/index/ShuJv.vue'], resolve),
					meta: {
						title: '数据展示',
					}
				},
				{
					path: '/a_li',
					component: resolve => require(['../components/index/ALi.vue'], resolve),
					meta: {
						title: '阿里图标',
					}
				},
				{
					path: '/avue',
					component: resolve => require(['../components/index/Avue.vue'], resolve),
					meta: {
						title: 'Avue',
					}
				},
				{
					path: '/bai_du',
					component: resolve => require(['../components/index/BaiDu.vue'], resolve),
					meta: {
						title: '百度',
					}
				}

			]
		},
		{
			// 注册登录
			path: '/sign',
			component: resolve => require(['../components/sign/Sign.vue'], resolve),
			meta: {
				title: '注册登录'
			},
			children: [{
					path: '/sign_in',
					component: resolve => require(['../components/sign/SignIn.vue'], resolve),
					meta: {
						title: '登录'
					}
				},
				{
					path: '/sign_up',
					component: resolve => require(['../components/sign/SignUp.vue'], resolve),
					meta: {
						title: '注册'
					}
				}
			]
		}
	]
})
