<template>
	<div class="viewer ballcrush">
		<div class="container ballcrush">
			<div class="controller">
				<div class="line">
					<div class="info">总分： <span class="total"></span>当前： <span class="current"></span>关卡： <span class="level"></span></div>
					<div class="info">弹数： <span class="count"></span>威力： <span class="power"></span></div>
				</div>
			</div>
			<div class="area">
				<canvas></canvas>
				<div class="infoPad" name="GameEnd">
					<div class="title">胜败乃兵家常事，<br>大侠请重来一次！</div>
				</div>
				<div class="infoPad shown" name="ModeSelector">
					<div class="modeList">
						<div class="mode" mode="normal">普通模式</div>
						<div class="mode" mode="hell">地狱模式</div>
						<div class="mode" mode="normalZen">普通禅修</div>
						<div class="mode" mode="hellZen">地狱禅修</div>
						<div class="mode" mode="back">返回</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
var needLoad = true;
const chChangeLoadingHint = new BroadcastChannel('change-loading-hint');
chChangeLoadingHint.addEventListener('message', msg => {
	BallCrush.onLeave();
});

export default {
	name: "BunceBall",
	async mounted () {
		if (needLoad) {
			await Promise.all([
				loadJS('/js/ballcrush.js'),
				loadCSS('/css/ballcrush.css')
			]);
			needLoad = true;
		}
		BallCrush.init();

		await wait();
		callPageLoaded();
	},
}
</script>