<template>
	<section class="module-item-wrapper modify-view-wrapper">
		<el-form :model="modifyFormData" label-width="82px">
			<el-form-item label="原密码">
				<el-input v-model="modifyFormData.name1" placeholder="请输入原密码"></el-input>
			</el-form-item>

			<el-form-item label="新密码">
				<el-input v-model="modifyFormData.name2" placeholder="请输入新密码"></el-input>

				<el-popover class="label-popur-wrapper" placement="right" width="260" trigger="click">
					<div class="label-popur-main-title">温馨提示</div>
					<div class="label-popur-main-context">密码必须由字母和数字组成，6位-15位</div>

					<span slot="reference" class="label-popur-icon"><i class="iconfont icon-warning"></i></span>
				</el-popover>
			</el-form-item>

			<el-form-item label="确认新密码">
				<el-input v-model="modifyFormData.name3" placeholder="请输入新密码"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary">确认</el-button>
			</el-form-item>
		</el-form>
	</section>
</template>

<script>
export default {
	name: 'modify',
	data() {
		return {
			modifyFormData: {},
		};
	},
};
</script>

<style>
.label-popur-main-title {
	font-size: 16px;
	color: #303133;
	height: 22px;
	line-height: 22px;
}

.label-popur-main-context {
	color: #606266;
	height: 20px;
	line-height: 20px;
	margin-top: 6px;
}

.label-popur-icon {
	font-size: 14px;
	padding: 10px 18px 10px 10px;
	color: #c0c4cc;
	cursor: pointer;
}
</style>