<template>
	<div id="app" v-cloak>
		<!-- 登录模块 -->
		<login v-if="isLogin"></login>

		<!-- 主体模块 -->
		<template v-else>
			<main class="content-wrapper">
				<!-- NavMenuBar -->
				<nav class="nav-menu-wrapper custom-scroll-bars">
					<div class="nav-menu-logo">
						<div class="logo-wrapper">
							<img src="./assets/images/logo.png" alt="">
						</div>
					</div>

					<menu-tree :onRoute="currentView"></menu-tree>
				</nav>
				<!-- 主体 -->
				<div class="content-main-wrapper">
					<header class="main-header-wrapper">
						<div></div>
						<div class="header-right-wrapper">
							<!-- 重启 -->
							<span title="重启" id="restart_btn"><i class="iconfont icon-reloadtime"></i></span>
							<!-- 重置 恢复出厂设置-->
							<span title="重置" id="reset_btn"><i class="iconfont icon-sync"></i></span>
							<!-- 退出 -->
							<span title="退出" @click="logoutHandle"><i class="iconfont icon-logout"></i></span>
						</div>
					</header>
					<!-- Main -->
					<main class="main-content-wrapper">
						<component :is="currentView"></component>
					</main>
				</div>
			</main>
		</template>
	</div>
</template>

<script>
import MenuTree from './components/menu-tree';
import Login from './views/login';
import Home from './views/home';
import Wan from './views/wan';
import Lan from './views/lan';
import Modify from './views/modify';
import Upgrade from './views/upgrade';
import About from './views/about';
import * as utils from './utils';

export default {
	name: 'App',
	components: { MenuTree, Login, Home, Wan, Lan, Modify, Upgrade, About },
	data() {
		return {
			isLogin: 1,
			currentView: 'home',
		};
	},
	created() {
		const route = utils._storages.get('CacheRoute');
		const isLogin = utils._storages.get('CacheLogin') || 0;
		this.isLogin = parseInt(isLogin);
		this.currentView = route;
	},
	mounted() {
		this.$bus.$on('update-menu', (data) => {
			this.currentView = data;
			utils._storages.set('CacheRoute', data);
		});

		this.$bus.$on('login', () => {
			this.isLogin = 0;
			utils._storages.set('CacheLogin', 0);
		});
	},
	methods: {
		logoutHandle() {
			utils._storages.set('CacheLogin', 1);
			this.isLogin = 1;
		},
	},
};
</script>

<style>
#app {
	height: 100%;
}

/* 主体布局 start */
.wrapper {
	width: 100%;
	height: 100%;
	min-height: 600px;
}

/* 主体内容 */
.content-wrapper {
	height: 100%;
	width: 100%;
	display: flex;
	overflow: hidden;
}

.nav-menu-wrapper {
	width: 160px;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #001529;
}

.nav-menu-logo {
	height: 116px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.nav-menu-logo .logo-wrapper {
	height: 56px;
	width: 56px;
	line-height: 56px;
	color: #fff;
	text-align: center;
	border-radius: 50%;
	overflow: hidden;
	background-color: var(--default-color);
}

.content-main-wrapper {
	flex: 1;
}

.content-main-wrapper {
	display: flex;
	flex-direction: column;
}

.main-header-wrapper {
	height: 48px;
	padding: 0 50px;
	border-bottom: 1px solid #dfe4ed;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-right-wrapper span {
	margin-left: 14px;
	padding: 5px;
	cursor: pointer;
}

.header-right-wrapper span i {
	font-size: 18px;
	transition: all 0.2s;
}

.header-right-wrapper span:hover i {
	color: var(--default-color);
}

.main-content-wrapper {
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
}

/* 主体模块 */
.module-item-wrapper {
	padding: 20px 50px;
	box-sizing: border-box;
	background-color: #fff;
}
</style>
