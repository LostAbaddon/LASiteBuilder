<template>
	<div class="viewer">
		<Crumb target="library" />
		<div class="container">
			<div class="controller" @click="togglePreview">预览：<i class="fas fa-toggle-off"></i></div>
			<div class="asimov">
				<div class="codePad"><pre></pre></div>
				<div class="previewPad" @click="onClick"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: block;
	box-sizing: border-box;
	position: relative;
	width: 100%;
	overflow-x: hidden;
}
.container .asimov {
	box-sizing: border-box;
	position: relative;
	width: 205%;
	transform: translateX(0%);
	transition: transform 300ms ease-in-out;
}
.container .asimov .codePad,
.container .asimov .previewPad {
	display: inline-block;
	box-sizing: border-box;
	width: 48.78%;
	vertical-align: top;
}
.container .asimov .codePad {
	margin-right: 1.21%;
}
.container .asimov .codePad pre {
	word-break: break-word;
	word-spacing: normal;
	white-space: break-spaces;
}
.container .controller {
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 1;
	user-select: none;
	cursor: pointer;
}
</style>

<script>
export default {
	name: "markup",
	data () {
		return {
			previewing: false
		}
	},
	async mounted () {
		var chChangeLoadingHint = new BroadcastChannel('change-loading-hint');
		chChangeLoadingHint.postMessage({
			name: '加载中……',
			action: 'show'
		});
		await wait();

		var content = await Granary.getContent('Asimov/demo.mu');
		content = content.replace(/https:\/\/upload-images\.jianshu\.io\/upload_images\//gi, '/image/');
		this.$el.querySelector('.asimov .codePad pre').innerText = content;
		var html = await MarkUp.parse(content, {
			toc: true,
			glossary: true,
			resources: true,
			showtitle: true,
			showauthor: true,
			classname: 'markup-content',
		});
		this.$el.querySelector('.asimov .previewPad').innerHTML = html;
		await this.afterMarkUp();

		chChangeLoadingHint.postMessage({action: 'hide'});
	},
	methods: {
		togglePreview () {
			this.previewing = !this.previewing;
			var toggler = this.$el.querySelector('.container .controller i');
			var pad = this.$el.querySelector('.container .asimov');
			if (this.previewing) {
				toggler.classList.remove('fa-toggle-off');
				toggler.classList.add('fa-toggle-on');
				pad.style.transform = 'translateX(-50%)';
			}
			else {
				toggler.classList.remove('fa-toggle-on');
				toggler.classList.add('fa-toggle-off');
				pad.style.transform = 'translateX(0%)';
			}
		},
		onClick (evt) {
			onVueHyperLinkTriggered(this, evt);
		}
	}
}
</script>