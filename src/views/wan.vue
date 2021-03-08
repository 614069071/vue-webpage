<template>
	<section class="module-item-wrapper lan-setting-module-wrapper" data-module="route-internet">
		<el-form label-width="86px">
			<el-form-item label="上网方式">
				<el-select v-model="internetType">
					<el-option value="0" label="DHCP（推荐）"></el-option>
					<el-option value="1" label="PPPoE"></el-option>
					<el-option value="2" label="静态IP"></el-option>
				</el-select>
			</el-form-item>
		</el-form>

		<!-- DHCP（推荐） -->
		<el-form v-if="internetType === '0'" label-width="86px">
			<el-form-item>
				<el-button type="primary">更新</el-button>
			</el-form-item>
		</el-form>

		<!-- 宽带拨号 -->
		<el-form v-else-if="internetType == '1'" :model="ppoeFormData" label-width="86px">
			<el-form-item label="宽带账号" required>
				<el-input v-model="ppoeFormData.name1" placeholder="请输入宽带账号"></el-input>
			</el-form-item>

			<el-form-item label="宽带密码" required>
				<el-input v-model="ppoeFormData.name2" placeholder="请输入宽带密码"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary">更新</el-button>
			</el-form-item>
		</el-form>

		<!-- 静态 -->
		<el-form v-else-if="internetType == '2'" :model="staticFormData" label-width="86px">
			<el-form-item label="IP地址" required>
				<el-input v-model="ppoeFormData.name2" placeholder="0.0.0.0"></el-input>
			</el-form-item>

			<el-form-item label="子网掩码" required>
				<el-input v-model="ppoeFormData.name2" placeholder="0.0.0.0"></el-input>
			</el-form-item>

			<el-form-item label="网关" required>
				<el-input v-model="ppoeFormData.name2" placeholder="0.0.0.0"></el-input>
			</el-form-item>

			<el-form-item label="DNS服务器">
				<el-input v-model="ppoeFormData.name2" placeholder="0.0.0.0"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary">更新</el-button>
			</el-form-item>
		</el-form>
	</section>
</template>

<script>
export default {
	name: 'wan',
	data() {
		return {
			internetType: '0',
			ppoeFormData: {},
			staticFormData: {},
		};
	},
};
</script>

<style>
.el-input {
	width: 240px;
}
.lan-setting-module-wrapper {
	padding-bottom: 106px;
}

.setting-lan-from p {
	height: 42px;
	display: flex;
	align-items: center;
}

.lan-dhcp-item-option-inner {
	display: flex;
	height: 42px;
	align-items: center;
}

.lan-dhcp-item-option-inner .label-item {
	margin: 0;
}

.lan-dhcp-item-option .dhcp-item {
	width: 150px;
}

.lan-dhcp-line {
	padding: 0 10px;
	color: var(--table-color);
}

.lan-dhcp-item-option-inner .label-item-tip {
	left: 0;
}

.hdcp-device-list-title {
	margin-top: 40px;
	font-size: 16px;
}

.lan-setting-submit-wrapper {
	width: 100%;
	position: fixed;
	padding-left: 160px;
	box-sizing: border-box;
	bottom: 0;
	left: 0;
}

.lan-setting-submit-inner {
	background-color: #fff;
	padding: 8px 0;
	text-align: center;
	box-shadow: 0px 0px 30px rgba(53, 53, 53, 0.05);
}

.dhcp-online-list-body-wrapper {
	max-height: 480px;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>