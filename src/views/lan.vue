<template>
	<section class="module-item-wrapper lan-setting-module-wrapper" data-module="route-lan">
		<div class="model-title">LAN口设置</div>

		<el-form :model="lanFormData" label-width="84px">
			<el-form-item label="LAN口模式">
				<el-select v-model="lanModelType">
					<el-option label="自动（推荐）" value="0"></el-option>
					<el-option label="手动" value="1"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="IP地址">
				<el-input></el-input>
			</el-form-item>

			<el-form-item label="子网掩码">
				<el-input></el-input>
			</el-form-item>

			<div class="model-title">局域网DHCP设置</div>

			<el-form-item label="DHCP">
				<el-switch inactive-value="0" active-value="1" v-model="lanFormData.type"></el-switch>
			</el-form-item>

			<el-form-item label="IP分配范围">
				<el-input class="ip-scope-input"></el-input>
				-
				<el-input class="ip-scope-input"></el-input>
			</el-form-item>
		</el-form>

		<el-table :data="dhcpTableData" class="dhcp-list-table-wrapper">
			<el-table-column type="index" label="序号"></el-table-column>
			<el-table-column property="name2" label="主机"></el-table-column>
			<el-table-column property="name3" label="MAC地址"></el-table-column>
			<el-table-column property="name4" label="IP地址"></el-table-column>
		</el-table>

		<div class="lan-setting-submit-wrapper">
			<div class="lan-setting-submit-inner">
				<el-button type="primary">更新</el-button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'lan',
	data() {
		return {
			lanModelType: '0',
			lanFormData: {
				type: '0',
			},
			dhcpTableData: [
				{
					name1: '1',
					name2: '1',
					name3: '1',
					name4: '1',
				},
			],
		};
	},
};
</script>

<style>
.ip-scope-input {
	width: 180px;
}

.dhcp-list-table-wrapper th {
	background-color: #f5f7fa;
}

.lan-setting-submit-wrapper {
	width: 100%;
	position: fixed;
	padding-left: 160px;
	box-sizing: border-box;
	bottom: 0;
	left: 0;
	z-index: 100;
}
</style>