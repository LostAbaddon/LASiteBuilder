<template>
	<div class="container" @click="onClick"></div>
</template>

<script>
export default {
	name: 'AboutMe',
	async mounted () {
		PageBroadcast.emit('change-loading-hint', {
			name: '加载中……',
			action: 'show'
		});
		await wait();

		var [content, todo, update] = await Promise.all([
			Granary.getContent('api/aboutme.md'),
			Granary.getContent('api/todo.md'),
			Granary.getContent('api/updatelog.md')
		]);
		if (!!todo) {
			content = content + '\n\n\n+++\n\n\n' + todo;
		}
		if (!!update) {
			content = content + '\n\n\n+++\n\n\n' + update;
		}
		var html = await MarkUp.parse(content, {
			toc: false,
			glossary: false,
			resources: false,
			showtitle: false,
			showauthor: false,
			classname: 'markup-content',
		});
		this.$el.innerHTML = html;
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

<style scoped>
.container {
	margin-bottom: 100px;
}
</style>