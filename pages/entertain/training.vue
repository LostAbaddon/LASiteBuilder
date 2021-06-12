<template>
	<div class="TrainingQuests">
		<div ref="scorePad" class="scorePad"></div>
		<div class="questListPad">
			<div ref="page1" class="questPad">What?</div>
			<div ref="page2" class="questPad">Aloha<br>Kosmos!</div>
		</div>
		<div class="buttonPad">
			<button class="submitter">交卷</button>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
var needLoad = true;
PageBroadcast.on('change-loading-hint', msg => {
	TrainingQuest.onLeave();
});

export default {
	name: "Training",
	async mounted () {
		if (needLoad) {
			await Promise.all([
				loadJS('/js/training.js'),
				loadCSS('/css/training.css')
			]);
			needLoad = false;
		}
		TrainingQuest.onLoad(this.$el, this.$refs.scorePad, this.$refs.page1, this.$refs.page2);

		await wait();
		callPageLoaded();
	},
}
</script>