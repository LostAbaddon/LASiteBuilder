<template>
	<div ref="ultralife" class="viewer ultralife">
		<canvas></canvas>
	</div>
	<div class="ultralife controlbox">
		<div class="line button"><button ref="stopper">开始</button><button ref="adder">添加</button></div>
	</div>
	<div ref="genePool" class="ultralife controlbox">
	</div>
</template>

<script>
var needLoad = true;
PageBroadcast.on('change-loading-hint', msg => {
	if (location.href.indexOf('ultralife') === -1) UltraLife.onLeave();
});

export default {
	name: "UltraLife",
	async mounted () {
		if (!window.UltraLife) {
			await Promise.all([
				loadJS('/js/ultralife.js'),
				loadCSS('/css/ultralife.css')
			]);
		}
		UltraLife.init(this.$refs.ultralife, this.$refs.stopper, this.$refs.adder, this.$refs.genePool);

		await wait();
		callPageLoaded();
	},
}
</script>