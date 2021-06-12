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
	<input ref="FileLoader" type="file" @change="readFile()" />
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

PageBroadcast.on('route-updated', ({data}) => {
	if (location.hash.indexOf('tools/markupEditor') > 0) {
		document.body.setAttribute('mode', 'editor');
	}
	else {
		document.body.removeAttribute('mode');
	}
});

var current = null;

export default {
	name: "MarkupEditor",
	data () {
		return {
		}
	},
	components: {},
	async mounted () {
		current = this;

		await WaitForMarkUpEditorInit();

		var editor = initMarkUpEditor(
			this.$refs.Editor,
			this.$refs.ToolBar,
			this.$refs.Previewer,
			this.$refs.ToolBar.querySelector('div.wordcount-hint span.count'),
			{
				close: () => {
					this.$router.push({path: '/'});
					return true;
				},
				help: () => {
					var win = window.open('/#/markup');
					win.focus();
					return true;
				},
				'download-file': (editor) => {
					var content = editor.getContent();
					var filename = editor.filename;
					if (!filename) {
						if (!!editor.title) filename = editor.title + '.mu';
						else filename = "untitled.mu";
					}
					this.download(filename, content);
					return true;
				},
				'upload-file': (editor) => {
					this.$refs.FileLoader.accept = '.mu';
					this.$refs.FileLoader.click();
					return true;
				},
			},
		);
		current.markupEditor = editor;

		callPageLoaded();
	},
	unmounted () {
		current = null;
	},
	methods: {
		download: (filename, content) => {
			var blob = new Blob([content], { type: 'text/plain' });
			var link = URL.createObjectURL(blob);
			var downloader = newEle('a');
			downloader.setAttribute('href', link);
			if (!!filename) downloader.setAttribute('download', filename);
			else downloader.setAttribute('download', 'untitled.mu');
			downloader.click();
		},
		readFile: () => {
			var file = current.$refs.FileLoader.files[0];
			if (!file) return;
			var reader = new FileReader();
			reader.onload = () => {
				current.markupEditor.read(file.name, reader.result);
			};
			reader.readAsText(file);
			current.$refs.FileLoader.value = '';
		},
	}
}
</script>