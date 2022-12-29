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
		PageBroadcast.emit('change-loading-hint', {
			name: '加载中……',
			action: 'show'
		});
		await wait();

		var content = await Granary.getContent('data/latex.md');
		var html = await MarkUp.parse(content, {
			toc: true,
			glossary: false,
			resources: false,
			showtitle: true,
			showauthor: false,
			classname: 'markup-content',
		});
		this.$el.querySelector('.container').innerHTML = html;
		await this.afterMarkUp();

		PageBroadcast.emit('change-loading-hint', {action: 'hide'});
	},
	methods: {
		onClick (evt) {
			onVueHyperLinkTriggered(this, evt);
		}
	}
}
</script>