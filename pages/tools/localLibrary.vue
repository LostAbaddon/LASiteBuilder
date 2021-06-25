<template>
	<section class="infoPad">
		<span class="hint">文档数：</span><span ref="count" class="info">0</span>
		<span class="sep"></span>
		<span class="hint right clickable" @click="newArticle">添加文档</span>
	</section>
	<section class="articleList">
		<div class="article" v-for="item in list">
			<span class="title" @click="openArticle(item.id)">{{item.name}}</span>
			<span class="controller right">
				<span class="category">{{item.category}}</span>
				<span class="button" @click="modifyArticle(item.id)">编辑</span>
				<span class="button" @click="removeArticle(item.id, item.title)">删除</span>
			</span>
		</div>
	</section>
</template>

<style scoped>
.infoPad {
	margin-top: 10px;
	margin-bottom: 10px;
}
.infoPad .hint {
	font-weight: bolder;
}
.infoPad .info {
	margin-left:  5px;
}
.right {
	float: right;
}
.clickable {
	cursor: pointer;
}
.articleList {
	min-height: 300px;
}
.articleList .article {
	margin: 3px 0px;
	padding: 2px 5px 7px 5px;
	border-bottom: 1px dashed rgb(225, 225, 225);
	cursor: pointer;
	transition: all 300ms ease-in-out;
}
.articleList .article:last-child {
	border-bottom: none;
}
.articleList .article:hover {
	font-weight: bolder;
	padding: 2px 0px 7px 0px;
}
.articleList .article .controller .button {
	display: none;
	margin-right:  10px;
}
.articleList .article .controller:hover .button {
	display: inline-block;
}
.articleList .article .controller:hover .category {
	display: none;
}
</style>

<script>
export default {
	name: "LocalLibrary",
	data () {
		return {
			list: []
		}
	},
	components: {},
	async mounted () {
		await this.updateList();
		callPageLoaded();
	},
	unmounted () {
	},
	methods: {
		async updateList () {
			var all = await BookShelf.getAllArticles();
			this.$refs.count.innerText = all.length;
			all.reverse().forEach(art => {
				if (art.author !== this.SiteOwner) art.name = art.title + ' (' + art.author + ')';
				else art.name = art.title;
				if (art.category.length > 0) art.category = art.category.map(cate => CatePathMap[cate] || cate).join('; ');
				else art.category = '未分类';
			});
			this.list.splice(0, this.list.length, ...all);
		},
		newArticle () {
			this.$router.push({path: '/tools/markupEditor', query: {action: 'newfile'}});
		},
		openArticle (id) {
			this.$router.push({path: '/view', query: {l: id}});
		},
		modifyArticle (id) {
			this.$router.push({path: '/tools/markupEditor', query: {action: id}});
		},
		removeArticle (id, title) {
			showInfobox({
				title: "确认删除文章《" + title + '》么？',
				action: 'yn',
				callback: async (result, value, infoBox) => {
					if (result !== 'yes') return;
					await BookShelf.removeArticle(id);
					await this.updateList();
				}
			});
		},
	}
}
</script>