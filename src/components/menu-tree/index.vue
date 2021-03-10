<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoute" :default-openeds="defaultOpenedsArray" background-color="#001529" text-color="rgba(255, 255, 255, 0.65)" active-text-color="#fff" unique-opened :collapse="collapse">
			<middle-menu v-for='item in mapMenuTree' :model='item' :key='item.meta.index' />
		</el-menu>
	</div>
</template>

<script>
import MiddleMenu from './middle-menu';
// import { mapState } from 'vuex';
// import { dynamicRouter } from '@router';

export default {
	name: 'side-bar',
	props: {
		collapse: { type: Boolean },
		onRoute: { type: String, default: '' },
	},
	components: { MiddleMenu },
	data() {
		return {
			defaultOpenedsArray: [],
		};
	},
	computed: {
		mapMenuTree() {
			const menuBarArray = [
				{
					title: '首页',
					module: 'home',
					icon: 'iconfont icon-cloud',
					checked: true,
					// callback: function () {
					// 	getNetworkState();
					// 	loadNetworkState();
					// },
				},
				{
					title: 'WAN口设置',
					module: 'wan',
					icon: 'iconfont icon-WANkou',
				},
				{
					title: 'LAN口设置',
					module: 'lan',
					icon: 'iconfont icon-LANkou',
					// callback: function () {
					// 	onlineDHCPlist();
					// 	initLanSetting();
					// },
				},
				{
					title: '修改密码',
					module: 'modify',
					icon: 'iconfont icon-edit',
				},
				{
					title: '软件升级',
					module: 'upgrade',
					icon: 'iconfont icon-rocket',
					// callback: function () {
					// 	// 版本号
					// 	if (Cache_version) {
					// 		$('.current-version').text(Cache_version);
					// 	} else {
					// 		fetch
					// 			._getDeviceInfo()
					// 			.then(function (res) {
					// 				Cache_version = res.version;
					// 				$('.current-version').text(res.version || '');
					// 			})
					// 			.catch(function (err) {
					// 				console.log(err);
					// 			});
					// 	}
					// },
				},
				{
					title: '关于我们',
					module: 'about',
					icon: 'iconfont icon-question',
				},
			];

			function deal(arr, pre) {
				arr.forEach((e, i) => {
					if (!e.meta) e.meta = {};
					e.meta.index = pre ? `${pre}-${i}` : `${i}`;
					if (e.children && e.children.length) {
						deal(e.children, e.meta.index);
					}
				});
			}

			deal(menuBarArray);
			return menuBarArray;
		},
	},
};
</script>

<style lang="scss">
.sidebar {
	overflow-x: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 0;
	}

	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 160px;
		// min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
	}

	.el-menu {
		border-right: 0;
	}

	ul {
		height: 100%;
	}

	.el-menu--collapse > .middle-menu > .el-submenu > .el-submenu__title {
		span {
			height: 0;
			width: 0;
			overflow: hidden;
			visibility: hidden;
			display: inline-block;
		}
		.el-submenu__icon-arrow {
			display: none;
		}
	}
}

.el-menu-item .menu-icon {
	margin-right: 12px;
	display: inline-block;
	width: 24px;
	text-align: center;
}

.el-menu-item.is-active {
	background-color: var(--default-color) !important;
}
</style>

