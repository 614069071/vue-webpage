<template>
	<section class="login-wrapper wrapper" id="login_wrapper">
		<div class="login-inner">
			<div class="login-logo">
				<img src="../assets/images/banner.png" alt="">
			</div>

			<div class="login-main">
				<el-form ref="loginForm" :model="loginFormData" :rules="rules">
					<el-form-item class="input-item" prop="password">
						<el-input type="password" maxlength="15" autocomplete="off" v-model.trim="loginFormData.password"></el-input>
					</el-form-item>

					<el-form-item class="submit-item">
						<el-button type="primary" class="login-submit" @click="loginSubmit">登录</el-button>
					</el-form-item>

					<div class="forgot-password-wrapper">
						<el-popover placement="bottom-end" width="318" trigger="click">
							<div class="forgot-password-tips">
								若忘记密码，请长按<span>Reset</span>键3S后松开，恢复出厂<br />设置。
							</div>
							<span slot="reference" class="forgot-password-btn">忘记密码？</span>
						</el-popover>
					</div>
				</el-form>
			</div>
		</div>

		<div class="copyright-info">版权所有©2021 西迪特科技有限公司保留所有权利</div>
	</section>
</template>

<script>
import * as utils from '../utils';

export default {
	name: 'login',
	data() {
		return {
			loginFormData: {},
			rules: {
				password: [
					{
						validator(rule, value, callback) {
							if (!value) {
								callback(new Error('请输入密码'));
							} else if (!utils._validePassword(value)) {
								callback(new Error('请输入正确的密码'));
							} else {
								callback();
							}
						},
					},
				],
			},
		};
	},
	methods: {
		loginSubmit() {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					console.log('111');
				}
			});
		},
	},
};
</script>

<style>
/* 登录模块 */
.login-wrapper {
	background-color: #252e37;
	color: #fff;
	position: relative;
}

.login-inner {
	width: 1200px;
	height: 437px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -600px;
	margin-top: -218px;
	display: flex;
	box-sizing: border-box;
	padding: 0 90px 0 40px;
	justify-content: space-between;
}

.login-logo {
	width: 440px;
	height: 321px;
	margin-top: 73px;
}

.login-main {
	width: 323px;
	height: 241px;
	padding: 50px 32px 0;
	background-color: #313b48;
	margin-top: 113px;
	border-radius: 9px;
	box-sizing: border-box;
}

.login-submit {
	width: 100%;
}

.forgot-password-wrapper {
	text-align: right;
}

.forgot-password-tips span {
	color: var(--default-color);
}

.forgot-password-btn {
	height: 17px;
	line-height: 17px;
	color: #fff;
	opacity: 0.65;
	font-size: 12px;
	cursor: pointer;
}

.input-item {
	margin-bottom: 30px;
}

.input-item .el-input {
	width: 100%;
}

.submit-item {
	margin-bottom: 14px;
}

.copyright-info {
	padding-bottom: 50px;
	width: 1200px;
	text-align: center;
	position: absolute;
	color: rgba(255, 255, 255, 0.35);
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>