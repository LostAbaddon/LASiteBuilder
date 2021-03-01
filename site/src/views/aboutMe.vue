<template>
	<div class="container" @click="onClick"></div>
</template>

<script>
export default {
	name: 'AboutMe',
	async mounted () {
		var chChangeLoadingHint = new BroadcastChannel('change-loading-hint');
		chChangeLoadingHint.postMessage({
			name: '加载中……',
			action: 'show'
		});
		await wait();

		var [content, update] = await Promise.all([Granary.getContent('api/aboutme.md'), Granary.getContent('api/updatelog.md')]);
		if (!!update) {
			content = content + '\n\n\n+++\n\n\n' + update;
		}
		var html = MarkUp.parse(content, {
			toc: false,
			glossary: false,
			resources: false,
			showtitle: false,
			showauthor: false,
			classname: 'markup-content',
		});
		this.$el.innerHTML = html;
		await this.afterMarkUp();

		chChangeLoadingHint.postMessage({action: 'hide'});
	},
	methods: {
		onClick (evt) {
			var ele = evt.target;
			if (!ele) return;
			var target = ele.getAttribute('href');
			if (!target) return;
			if (target.indexOf('#') !== 0) return;
			target = target.replace(/#+/, '/');
			this.$router.push({path: target});
			evt.preventDefault();
		}
	}
}
</script>

<style scoped>
.container {
	margin-bottom: 100px;
}
</style>