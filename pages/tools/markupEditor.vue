<template>
	<div ref="ToolBar" class="markup-editor toolbar">
		<div class="wordcount-hint"><span>字数：</span><span class="count"></span></div>
	</div>
	<div class="markup-editor container">
		<div class="scroller editorContainer">
			<div ref="Editor" class="inputter" contenteditable="true"></div>
		</div>
		<div class="sepBar"></div>
		<div class="scroller previewContainer">
			<div ref="Previewer" class="previewer"></div>
		</div>
	</div>
	<input ref="FileLoader" type="file" />
</template>

<script>
var MarkUpEditorInitialed = false;
(async () => {
	await Promise.all([
		loadCSS('/css/editor.css'),
		loadJS('/js/editor.js')
	]);
	MarkUpEditorInitialed = true;
	for (let res of WaitForMarkUpEditorResList) {
		res();
	}
}) ();
const WaitForMarkUpEditorResList = new Set();
const WaitForMarkUpEditorInit = () => new Promise(res => {
	if (MarkUpEditorInitialed) return res();
	WaitForMarkUpEditorResList.add(res);
});

(new BroadcastChannel('route-updated')).addEventListener('message', ({data}) => {
	if (location.hash.indexOf('tools/markupEditor') > 0) {
		document.body.setAttribute('mode', 'editor');
	}
	else {
		document.body.removeAttribute('mode');
	}
});

export default {
	name: "MarkupEditor",
	data () {
		return {
		}
	},
	components: {},
	async mounted () {
		await WaitForMarkUpEditorInit();
		initMarkUpEditor(this, this.$refs.ToolBar, this.$refs.Editor, this.$refs.Previewer, this.$refs.FileLoader);

		callPageLoaded();
	},
	methods: {
	}
}
</script>