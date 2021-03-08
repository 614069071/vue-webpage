<template>
	<section class="about-module-wrapper" data-module="cloud-about">
		<div class="about-main-wrapper">
			<div class="img">
				<img src="../assets/images/logo.png" alt="">
			</div>
			<div class="about-subtitle">百盒</div>
			<div class="about-copyright">版权所有©2021 西迪特科技有限公司保留所有权利</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'about',
};
</script>

<style>
.about-main-wrapper {
	padding-top: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.about-main-wrapper .img {
	width: 120px;
	height: 120px;
	border-radius: 6px;
	overflow: hidden;
}

.about-main-wrapper .about-subtitle {
	font-size: 20px;
	height: 28px;
	line-height: 28px;
	margin-top: 30px;
}

.about-main-wrapper .about-copyright {
	font-size: 16px;
	height: 22px;
	line-height: 22px;
	color: #909399;
	margin-top: 6px;
}
</style>