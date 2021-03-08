<template>
	<section class="module-item-wrapper home-module-item-wrapper" data-module="route-status">
		<div class="home-item-inner">

			<div class="home-item-inner--wrapper big-item-inner--wrapper">
				<div class="home-item-inner--title">
					<div class="title-left">设备信息</div>
				</div>
				<div class="home-item-info--main">
					<div class="home-item-inner--main-item">产品型号：<span class="device-item">XXX</span></div>
					<div class="home-item-inner--main-item">SN地址：<span class="device-item">XX-XX-XX-XX-XX-XX-XX</span></div>
					<div class="home-item-inner--main-item">MAC地址：<span class="device-item">XX-XX-XX-XX-XX-XX</span></div>
					<div class="home-item-inner--main-item">版本信息：<span class="device-item">V1.0.0</span></div>
					<div class="home-item-inner--main-item">运行状态：<span class="device-item">已稳定运行 <i>8</i> 天
							<i>12</i> 小时</span>
					</div>
				</div>
			</div>

			<div class="small-item-wrapper">
				<div class="home-item-inner--wrapper small-item-inner--wrapper">
					<div class="item-inner-main">
						<div class="home-item-inner--title">
							<div class="title-left">网络状态<span class="newrork-state">在线</span></div>
						</div>
						<div class="device-state-item">
							<div class="device-state-item-img network-state-wrapper">
								<div class="network-item">
									<div class="notwork-pointer" id="netword_up_pointer">
										<img src="../assets/images/pointer.png" alt="">
									</div>
									<span class="notwork-speed" id="netword_up_speed">0.00K/S</span>
									<div class="notwork-title">WAN口上行速率</div>
								</div>

								<div class="network-item">
									<div class="notwork-pointer" id="netword_dw_pointer">
										<img src="../assets/images/pointer.png" alt="">
									</div>
									<span class="notwork-speed" id="netword_dw_speed">0.00K/S</span>
									<div class="notwork-title">WAN口下行速率</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="home-item-inner--wrapper small-item-inner--wrapper">
					<div class="item-inner-main">
						<div class="home-item-inner--title">
							<div class="title-left">内置硬盘<span class="dev_total_type">EXT4</span></div>
							<div class="title-right">
								<span>总容量 <i class="dev_total_cap">0</i></span>
								<span>使用容量 <i class="dev_use_cap">0</i></span>
							</div>
						</div>

						<div class="device-state-item">
							<div class="device-state-item-img">
								<svg viewBox="0 0 100 100">
									<path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#F0F2F5" stroke-width="4.8" fill="none" style="stroke-dasharray: 295.31px, 295.31px;"></path>
									<path class="dev-svg-path" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#34C9C9" stroke-linecap="round" stroke-width="4.8" fill="none" style="stroke-dasharray: 0px, 295.31px;">
									</path>
								</svg>
								<div class="device-state-item-wrapper">
									<span>剩余容量</span>
									<span class="dev_remain_cap">0</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="home-item-inner--wrapper small-item-inner--wrapper">
					<div class="item-inner-main">
						<div class="home-item-inner--title">LAN口连接终端数量</div>

						<div class="device-state-item">
							<div class="device-state-item-img">
								<svg viewBox="0 0 100 100">
									<path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#F0F2F5" stroke-width="4.8" fill="none" style="stroke-dasharray: 295.31px, 295.31px;"></path>
									<path class="client-svg-path" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#20a0ff" stroke-linecap="round" stroke-width="4.8" fill="none" style="stroke-dasharray: 0px, 295.31px;">
									</path>
								</svg>
								<div class="device-state-item-wrapper">
									<span>LAN口连接终端数量</span>
									<span class="device-state-item-text client-connect-state">0个</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="home-item-inner--wrapper small-item-inner--wrapper">
					<div class="item-inner-main">

						<div class="home-item-inner--title">
							<div class="title-left">USB外接设备</div>
							<div class="title-right">
								<span>总容量 <i class="usb-total-cap">0</i></span>
								<span>使用容量 <i class="usb-use-cap">0</i></span>
							</div>
						</div>

						<div class="device-state-item">
							<div class="device-state-item-img">
								<div class="usb-state-wrapper">
									<div class="usb-state-inner item1"></div>
									<div class="usb-state-inner item2"></div>
									<div class="usb-state-inner item3"></div>
								</div>

								<div class="device-state-item-wrapper">
									<span>USB剩余容量</span>
									<span class="device-state-item-text usb-remain-cap">0</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'home',
};
</script>

<style>
.home-module-item-wrapper {
	background-color: #f5f7fa !important;
	padding: 20px 27px !important;
	min-height: 100%;
}

.home-item-inner--wrapper {
	background-color: #fff;
	/* padding: 0 24px; */
	box-sizing: border-box;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
}

.home-item-inner--title {
	height: 65px;
	line-height: 65px;
	border-bottom: 1px solid #dfe4ed;
	font-size: 18px;
	display: flex;
	justify-content: space-between;
}

.title-left span {
	margin-left: 10px;
	color: var(--default-color);
}

.title-left span.offline {
	color: #dcdfe6;
}

.title-right span {
	color: #606266;
}

.title-right span i {
	color: #000;
}

.title-right span + span {
	margin-left: 30px;
}

.home-item-info--main {
	display: flex;
	flex-wrap: wrap;
	padding: 12px 0 30px 0;
}

.home-item-inner--main-item {
	width: 33%;
	height: 18px;
	line-height: 18px;
	margin-top: 18px;
	color: rgba(0, 0, 0, 0.85);
}

.home-item-inner--main-item > span {
	color: #606266;
}

.home-item-inner--main-item span > i {
	color: var(--default-color);
}

.big-item-inner--wrapper {
	margin-top: 0;
	padding: 0 24px;
}

.small-item-wrapper {
	display: flex;
	flex-wrap: wrap;
	flex: 1;
}

.small-item-blank {
	width: 20px;
	background-color: #f5f7fa;
}

.small-item-inner--wrapper {
	width: 50%;
	box-sizing: border-box;
	background-color: #f5f7fa;
}

.small-item-inner--wrapper:nth-child(odd) {
	padding-right: 10px;
}

.small-item-inner--wrapper:nth-child(even) {
	padding-left: 10px;
}

.item-inner-main {
	background-color: #fff;
	padding: 0 24px;
}

.device-state-wrapper {
	display: flex;
}

.device-state-item {
	display: flex;
	height: 318px;
	justify-content: center;
	align-items: center;
}

.device-state-item .device-state-item-img {
	height: 230px;
	width: 230px;
	position: relative;
}

.device-state-item .device-state-item-img.network-state-wrapper {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.device-state-item-img .device-state-item-wrapper {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.device-state-item-wrapper span {
	white-space: nowrap;
}

.device-state-item-wrapper span:first-child {
	color: rgba(0, 0, 0, 0.45);
}

.device-state-item-wrapper span:last-child {
	color: rgba(0, 0, 0, 0.85);
	font-size: 24px;
	margin-top: 17px;
}

.network-item {
	width: 260px;
	min-width: 260px;
	height: 195px;
	padding-bottom: 58px;
	background-image: url(../assets/images/network.png);
	background-size: contain;
	background-repeat: no-repeat;
	/* border: 1px solid red; */
	position: relative;
}

.device-state-item .device-state-item-img.network-state-wrapper {
	width: 100%;
	min-width: 530px;
}

.network-item .notwork-pointer {
	width: 12px;
	height: 66px;
	position: absolute;
	left: 124px;
	top: 70px;
	transform: rotate(-120deg);
	transform-origin: center 60px;
	/* transition: all 0.2s; */
}

.network-item .notwork-speed,
.network-item .notwork-title {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.network-item .notwork-speed {
	font-size: 24px;
	color: #30bf78;
	bottom: 40px;
}

.notwork-speed.offline {
	color: #dcdfe6;
}

.network-item .notwork-title {
	color: rgba(0, 0, 0, 0.45);
	bottom: 10px;
}

.usb-state-wrapper {
	height: 100%;
	height: 230px;
	border-radius: 50%;
	border: 2px solid #5b8ff9;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
}

.usb-canvas {
	height: 230px;
	width: 230px;
	border: 1px solid red;
}

.usb-state-inner {
	position: absolute;
	height: 230px;
	width: 100%;
	border-radius: 50%;
	background-repeat: repeat no-repeat;
	background-size: 221px 120px;
	background-position: 0px 140px;
}

.usb-state-inner.item1 {
	background-image: url(../assets/images/ripple1.png);
	animation: waves 3s linear infinite;
}

.usb-state-inner.item2 {
	background-image: url(../assets/images/ripple2.png);
	animation: waves 4s linear infinite;
}

.usb-state-inner.item3 {
	background-image: url(../assets/images/ripple3.png);
	animation: waves 5s linear infinite;
}

@keyframes waves {
	0% {
		background-position: 0 160px;
	}

	100% {
		background-position: 221px 160px;
	}
}
</style>