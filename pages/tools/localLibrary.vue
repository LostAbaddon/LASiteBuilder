<template>
	<section class="infoPad">
		<span class="hint">文档数：</span><span ref="count" class="info">0</span>
		<span class="sep"></span>
		<span class="hint right clickable" @click="newArticle">添加文档</span>
	</section>
	<section class="cateSelector">
		<span class="cateItem clickable" v-for="cate in cateList" @click="chooseCate(cate.cate)">{{cate.name}}<span class="hint">{{cate.count}}</span></span>
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
.cateSelector {
	margin-top: 20px;
	margin-bottom: 25px;
}
.cateSelector .cateItem {
	margin: 5px 10px;
	padding: 3px 10px;
	height: 25px;
	border-radius: 12px;
	border: 1px solid rgb(125, 125, 135);
	background-color: rgb(25, 25, 36);
	color: rgb(205, 205, 225);
}
.cateSelector .cateItem .hint {
	display: inline-block;
	width: 16px;
	height: 16px;
	margin-left: 5px;
	border-radius: 8px;
	background-color: rgb(50, 50, 75);
	box-shadow: inset 0px 0px 2px rgba(255, 255, 245, 0.6);
	line-height: 16px;
	text-align: center;
	font-size: 12px;
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
			list: [],
			cateList: []
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
		async updateList (cate) {
			var all = await BookShelf.getAllArticles();
			var cateList = {}, selAll = !cate;
			this.$refs.count.innerText = all.length;
			all.reverse()
			all = all.filter(art => {
				if (art.author !== this.SiteOwner) art.name = art.title + ' (' + art.author + ')';
				else art.name = art.title;
				var sel = selAll;
				if (art.category.length > 0) {
					art.category.forEach(c => {
						sel = sel || c === cate;
						if (!selAll) return;
						var item = cateList[c];
						if (!item) {
							item = {
								cate: c,
								name: CatePathMap[c] || c,
								count: 0
							};
							cateList[c] = item;
						}
						item.count ++;
					});
					art.category = art.category.map(cate => CatePathMap[cate] || cate).join('; ');
				}
				else {
					art.category = '未分类';
					sel = cate === art.category;
				}
				return sel;
			});
			cateList = Object.keys(cateList).map(cate => cateList[cate]);
			cateList.sort((a, b) => b.count - a.count);
			if (selAll) this.cateList.splice(0, this.cateList.length, ...cateList);
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
		chooseCate (cate) {
			console.log('>>>> ' + cate);
			this.updateList(cate);
		},
	}
}
</script>