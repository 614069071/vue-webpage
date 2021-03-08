<template>
	<section class="module-item-wrapper" data-module="route-update">
		<div class="model-title">在线升级</div>
		<p class="update-paragraph">当前软件版本：<span class="current-version">V1.0.0</span></p>

		<el-button type="primary">检查新版本</el-button>

		<div class="model-title upgrade">本地升级</div>

		<div>
			<p class="update-paragraph">当前硬件版本：NSS-H-101J</p>
			<p class="update-paragraph">请通过浏览按键选择升级软件，然后点击软件升级按钮进行升级</p>

			<input type="file" id="update_file" accept=".bin,.binary" hidden />

			<div class="display-file-label">
				<div class="display-file-name">请点击浏览</div>

				<el-button type="primary" class="display-file-look">
					<label for="update_file">浏览</label>
				</el-button>

				<div class="label-item-tip"></div>
			</div>

			<el-button type="primary">软件升级</el-button>
		</div>

		<div class="upgrade-popup-warpper">
			<div class="upgrade-popup-inner">
				<div class="upgrade-progress-wrapper"></div>
				<p>百盒开始升级，整个升级过程约持续2-3分钟，请耐心等待。升级过程中百盒不能断电，否则会导致百盒损坏,升级完成后设备会自动重启。</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'upgrade',
};
</script>

<style>
.progress-bar-wrapper {
	margin-top: 10px;
	height: 10px;
	margin-left: 35px;
}

.update-paragraph {
	color: #606266;
}

.update-paragraph span {
	color: var(--default-color);
}

.display-file-label {
	display: flex;
	margin-bottom: 20px;
	position: relative;
}

.display-file-name {
	width: 212px;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 38px;
	line-height: 38px;
	width: 240px;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	margin-right: 10px;
	padding: 0 14px;
	color: #c0c4cc;
}

.display-file-name.active {
	color: var(--default-color);
}

.display-file-look {
	padding: 0;
}

.display-file-look span,
.display-file-look span label {
	width: 100%;
	height: 100%;
	line-height: 38px;
	display: block;
}

.label-item-tip {
	position: absolute;
	left: 0;
	top: 100%;
	font-size: 12px;
	padding-top: 4px;
	color: #f56c6c;
	display: none;
}

.upgrade-progress-wrapper {
	width: 140px;
}

.upgrade-popup-warpper {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	left: 0;
	top: 0;
	display: none;
}

.upgrade-popup-inner {
	position: absolute;
	width: 600px;
	padding: 20px;
	background-color: #fff;
	left: 50%;
	top: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: translate(-50%);
}

.upgrade-popup-inner p {
	text-align: center;
	color: #606266;
	line-height: 22px;
	padding: 0 44px;
}

.upgrade-popup-progress-wrapper {
	height: 10px;
}

.upgrade {
	margin-top: 30px;
}
</style>