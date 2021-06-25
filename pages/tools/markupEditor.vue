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
		var doc = {
			id: '',
			title: '',
			category: [],
			author: '',
			description: '',
			content: '',
			publish: 0
		};

		await WaitForMarkUpEditorInit();

		var editor = initMarkUpEditor(
			this.$refs.Editor,
			this.$refs.ToolBar,
			this.$refs.Previewer,
			this.$refs.ToolBar.querySelector('div.wordcount-hint span.count'),
			{
				init: (editor) => {
					var action = this.$route.query;
					if (!!action) action = action.action;
					if (!action) action = 'newfile';
					if (action === 'newfile') {
						doc.id = BookShelf.newLongID();
						editor.newFile(this.SiteOwner);
					}
					else {
						BookShelf.getArticle(action).then(data => {
							doc.id = data.id;
							editor.read((data.title || 'untitled') + '.mu', data.content);
						});
					}
					return true;
				},
				close: () => {
					this.$router.push({path: '/tools/localLibrary'});
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
				'save-article': async (editor) => {
					var content = editor.getContent();
					var markup = await MarkUp.fullParse(content);
					doc.title = markup.title || '无标题文章';
					doc.author = markup.meta.author || this.SiteOwner;
					doc.description = markup.meta.description || this.generateDesc(markup.content);
					doc.content = content;
					doc.category = this.generateCate(markup.meta.keywords);
					doc.publish = Date.now();
					BookShelf.saveArticle(doc);
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
		download (filename, content) {
			var blob = new Blob([content], { type: 'text/plain' });
			var link = URL.createObjectURL(blob);
			var downloader = newEle('a');
			downloader.setAttribute('href', link);
			if (!!filename) downloader.setAttribute('download', filename);
			else downloader.setAttribute('download', 'untitled.mu');
			downloader.click();
		},
		readFile () {
			var file = current.$refs.FileLoader.files[0];
			if (!file) return;
			var reader = new FileReader();
			reader.onload = () => {
				current.markupEditor.read(file.name, reader.result);
			};
			reader.readAsText(file);
			current.$refs.FileLoader.value = '';
		},
		generateDesc (content) {
			content = content.replace(/<.*?>/gi, '');
			if (content.length > 150) content = content.substring(0, 148) + "……";
			return content;
		},
		generateCate (category) {
			category = category.filter(k => !!k && !['unsorted', '未分类'].includes(k));
			if (category.length === 0) return [];
			return category.map(c => CateNameMap[c] || c);
		},
	}
}
</script>