<template>
	<div class="viewer">
		<Crumb target="library" />
		<div class="container" @click="onClick"></div>
	</div>
</template>

<script>
export default {
	name: "latex",
	async mounted () {
		var chChangeLoadingHint = new BroadcastChannel('change-loading-hint');
		chChangeLoadingHint.postMessage({
			name: '加载中……',
			action: 'show'
		});
		await wait();

		var content = await Granary.getContent('api/latex.md');
		var html = MarkUp.parse(content, {
			toc: true,
			glossary: false,
			resources: false,
			showtitle: true,
			showauthor: false,
			classname: 'markup-content',
		});
		this.$el.querySelector('.container').innerHTML = html;
		await this.afterMarkUp();

		chChangeLoadingHint.postMessage({action: 'hide'});
	},
	methods: {
		onClick (evt) {
			onVueHyperLinkTriggered(this, evt);
		}
	}
}
</script>