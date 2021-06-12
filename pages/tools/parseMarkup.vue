<template>
	<Crumb target="tools" />
	<Tabs :tabs="pages" :showNewTab="true" :selected="currentTab" @select="onSelect" @newTab="newPage" @close="closeTab" />
	<Uploader ref="uploader" type=".mu,.md" @parse="parseFile" />
	<div ref="articleArea" class="content-container" @click="onClick"></div>
</template>

<style scoped>
.content-container {
	box-sizing: border-box;
	min-height: 500px;
	padding-bottom: 0px;
}
.content-container:empty {
	min-height: 200px;
	max-height: 500px;
	padding-bottom: 50%;
}
</style>

<script>
import Tabs from '@/components/tabs.vue';
import Uploader from '@/components/uploader.vue';

export default {
	name: "ParseMarkup",
	data () {
		return {
			pages: [],
			currentTab: ''
		}
	},
	components: { Tabs, Uploader },
	mounted () {
		callPageLoaded();
		this.newPage();
	},
	methods: {
		async onSelect (data) {
			this.currentTab = data.key;
			await this.parseMarkUp(data.markup);
			callPageLoaded();
		},
		readLocalFile: (file) => new Promise(res => {
			var reader = new FileReader();
			reader.onload = () => {
				res(reader.result);
			};
			reader.onerror = () => {
				res(null);
			};
			reader.readAsText(file);
		}),
		async parseMarkUp (markup) {
			PageBroadcast.emit('change-loading-hint', {
				name: '解析中……',
				action: 'show'
			});

			var html = await MarkUp.fullParse(markup, {
				toc: true,
				glossary: true,
				resources: true,
				showtitle: true,
				showauthor: true,
				classname: 'markup-content',
			});
			this.$refs.articleArea.innerHTML = html.content;
			await this.afterMarkUp();

			return html.title;
		},
		async parseFile (file) {
			this.$refs.uploader.deactive();
			if (!file) return;
			if (String.is(file)) return this.parseUrl(file);

			PageBroadcast.emit('change-loading-hint', {
				name: '读取中……',
				action: 'show'
			});
			await wait();

			var content = await this.readLocalFile(file);
			var title = await this.parseMarkUp(content);
			await wait();

			var tab = {
				name: title,
				key: file.name,
				markup: content
			};
			this.pages.push(tab);
			this.currentTab = tab.key;
			await wait();

			callPageLoaded();
		},
		async parseUrl (url) {
			PageBroadcast.emit('change-loading-hint', {
				name: '读取中……',
				action: 'show'
			});
			await wait();

			var content = await axios.get(url);
			content = content.data;
			var title = await this.parseMarkUp(content);
			await wait();

			var tab = {
				name: title,
				key: file.name,
				markup: content
			};
			this.pages.push(tab);
			this.currentTab = tab.key;
			await wait();

			callPageLoaded();
		},
		newPage () {
			this.$refs.uploader.active();
		},
		onClick (evt) {
			onVueHyperLinkTriggered(this, evt);
		},
		async closeTab (tab) {
			var index = -1;
			this.pages.some((info, i) => {
				if (tab.key === info.key) {
					index = i;
					return true;
				}
			});
			if (index < 0) return;
			this.pages.splice(index, 1);

			if (this.pages.length === 0) {
				this.$refs.articleArea.innerHTML = '';
				await wait();
				this.newPage();
			}
			else {
				let page;
				if (index === 0) {
					page = this.pages[0];
				}
				else {
					page = this.pages[index - 1];
				}
				await this.parseMarkUp(page.markup);
				this.currentTab = page.key;
				callPageLoaded();
			}
		}
	}
}
</script>