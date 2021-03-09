<template>
	<div class="middle-menu">
		<el-submenu v-if='model.children && model.children.length' :index="`${index}`">
			<template slot='title'>
				<i class="menu-icon" v-if="model.icon" :class="model.icon"></i>
				<span>{{model.title}}</span>
			</template>

			<template v-for="(item,index) in model.children">
				<middle-menu :model='item' :key="index" :index="index" />
			</template>
		</el-submenu>

		<el-menu-item v-else :index="model.module" @click="changeMenu(model.module)">
			<i class="menu-icon" v-if="model.icon" :class="model.icon"></i>
			<span slot="title">{{model.title}}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'middle-menu',
	props: {
		model: { type: Object, required: true },
		index: { type: [Number, String], default: 0 },
	},
	methods: {
		changeMenu(data) {
			this.$bus.$emit('update-menu', data);
		},
	},
};
</script>

<style>
.el-menu-item {
	height: 48px;
	line-height: 48px;
}
.el-menu-item > .menu-icon {
	margin-right: 12px;
	display: inline-block;
	width: 24px;
	text-align: center;
}
.el-menu-item.is-active {
	background-color: var(--default-color) !important;
}
</style>