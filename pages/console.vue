<template>
	<div class="console-panel" ref="console">
	</div>
</template>

<style>
.console-panel {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	max-width: 100% !important;
	z-index: 1000;
	background-color: black;
	color: rgba(241, 240, 237, 1.0);
	font-size: 14px;
}
.console-panel .message .content div.caption {
	font-weight: bolder;
}
.console-panel .message .content div.content {
	padding-left: 30px;
}
.console-panel .message .content div.hint {
	padding-left: 30px;
	font-style: italic;
	font-weight: lighter;
	color: rgba(167, 168, 189, 1.0);
}
.console-panel .message .content div span {
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-top;
}
.console-panel .message .content div span:last-child {
	margin-right: 0px;
}
.console-panel .message .content div span.url {
	min-width: 200px;
	white-space: nowrap;
}
.console-panel .message .content div span.filename {
	width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.console-panel .message .content div span.filetitle {
	width: 250px;
}
.console-panel .message .content div span.author {
	width: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.console-panel .message .content div span.date {
	width: 150px;
}
.console-panel .message .content div span.status {
	width: 50px;
	color: rgba(167, 168, 189, 1.0);
}
.console-panel .message .content div span.status.local {
	color: rgba(26, 148, 188, 1.0);
}
.console-panel .message .content div span.status.cached {
	color: rgba(69, 183, 135, 1.0);
}
.console-panel .message .content div span.status.nocache {
	color: rgba(167, 168, 189, 1.0);
}
.console-panel .message .content div span.foldername {
	width: 300px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.console-panel .message .content div span.filecount {
	width: 100px;
}
</style>

<script>
import "/public/vendor/OmniOS/os.js";
import "/public/vendor/OmniOS/style.css";

const findCommonPrefix = (list, start) => {
	if (list.length === 0) return start;
	if (list.length === 1) return list[0];

	var len = Infinity, count = list.length;;
	list.forEach(path => {
		var l = path.length;
		if (l < len) len = l;
	});
	var prefix = start;
	for (let i = start.length; i <= len; i ++) {
		let next = list[0].substring(0, i);
		let ok = true;
		for (let j = 1; j < count; j ++) {
			if (list[j].indexOf(next) !== 0) {
				ok = false;
				break;
			}
		}
		if (ok) {
			prefix = next;
		}
		else {
			break;
		}
	}
	return prefix;
};
const getCombinedPathAndParam = (path, param) => {
	if (param.substring(0, 1) === '/') {
		path = '';
	}

	param = param.split(/[\\\/]+/);
	var p = param.pop();
	if (p === '.' || p === '..') {
		p = '';
	}
	param = param.filter(p => !!p);

	path = path.split(/[\\\/]+/);
	path = path.filter(p => !!p);

	param.forEach(p => {
		if (p === '.') return;
		if (p === '..') {
			path.pop();
		}
		else {
			path.push(p);
		}
	});

	if (path.length === 0) return ['/', p];
	return ['/' + path.join('/') + '/', p];
};
const replaceLastParam = (param, last) => {
	var start = param.substring(0, 1) === '/';
	param = param.split(/[\\\/]+/);
	param.pop();
	param = param.filter(p => !!p);
	param.push(last);
	param = param.join('/');
	if (start) return '/' + param;
	return param;
};

var current;
const OmniOSCore = {
	omni: {
		exit: () => {
			if (!current) {
				OmniOS.show('系统加载失败！', 'error');
				return;
			}
			current.leave();
		},
		quit: () => {
			OmniOSCore.omni.exit();
		},
		leave: () => {
			OmniOSCore.omni.exit();
		},
		list: async () => {
			var list = await Barn.getList(OmniOS.location);
			if (!list) {
				OmniOS.show('EMPTY', 'warning');
				return;
			}

			var content = ['<div class="caption">目录：</div>', '<div class="hint"><span class="foldername">文件夹名</span><span class="filecount">文件数</span></div>'];
			if (list.folders.length > 0) {
				list.folders.forEach(sub => {
					content.push(`<div class="content"><span class="foldername">${sub[0]}</span><span class="filecount">${sub[1]}</span></div>`);
				});
			}
			else {
				content.push('<div class="content">(无)</div>');
			}

			content.push('<div class="caption">文件：</div>');
			content.push('<div class="hint"><span class="filename">文件名</span><span class="filetitle">标题</span><span class="author">作者</span><span class="date">更新日期</span><span class="status">状态</span></div>');
			if (list.files.length > 0) {
				for (let item of list.files) {
					var date = timeNormalize(new Date(item.publish));
					var status, code;
					if (item.isLocal) {
						status = '本地';
						code = 'local'
					}
					else {
						let cached = await Barn.hasCache(Barn.DataGranary + '/' + item.sort + '/' + item.filename);
						if (cached) {
							status = '已缓存';
							code = 'cached'
						}
						else {
							status = '未缓存';
							code = 'nocache'
						}
					}
					content.push(`<div class="content"><span class="filename">${item.filename}</span><span class="filetitle">${item.title}</span><span class="author">${item.author}</span><span class="date">${date}</span><span class="status ${code}">${status}</span></div>`);
				}
			}
			else {
				content.push('<div class="content">(无)</div>');
			}

			OmniOS.show(content.join('\n'));
		},
		open: async (params) => {
			var target = params[0];
			var [path, par] = getCombinedPathAndParam(OmniOS.location, target);
			var list = await Barn.getList(path);
			if (!list) {
				OmniOS.show('EMPTY', 'warning');
				return;
			}
			var isFile = true, isLocal = false;
			target = null;
			if (list.files.length > 0) {
				list.files.some(file => {
					if (file.filename === par) {
						if (file.isLocal) {
							isLocal = true;
							target = par;
						}
						else {
							target = path + par;
							target = target.replace(/^[\/\\]+/, '');
						}
						return true;
					}
				});
			}
			if (!target && list.folders.length > 0) {
				list.folders.some(folder => {
					if (folder[0] === par) {
						target = path + par;
						isFile = false;
						return true;
					}
				});
			}
			if (!target) {
				OmniOS.show('路径指向对象为空', 'warning');
				return;
			}
			if (isFile) {
				OmniOS.show('正在打开文件……', 'welcome');
				await wait(300);
				if (!current) {
					OmniOS.show('文件系统出错！', 'error');
				}
				else {
					current.saveOmni();
					let url = {
						path: '/view',
						query: {}
					};
					if (isLocal) {
						url.query.l = target;
					}
					else {
						url.query.f = target;
					}
					console.log(url);
					current.$router.push(url);
				}
			}
			else {
				OmniOS.show('正在打开文件夹……', 'welcome');
				await wait(300);
				if (!current) {
					OmniOS.show('文件系统出错！', 'error');
				}
				else {
					current.saveOmni();
					current.$router.push({
						path: '/category',
						query: { c: target }
					});
				}
			}
		},
		find: async (params, option, raw) => {
			raw = raw.replace(/^find /, '');

			if (!!window.gtag) {
				gtag('event', 'search', {
					'send_to': gaid,
					'search_term': raw
				});
			}

			var list = await DataCenter.searchArticle(raw);
			if (list instanceof Error) {
				console.error(list);
				OmniOS.show(list.message, 'error');
				return;
			}
			if (!list || !list.match) {
				OmniOS.show("无符合条件内容", 'warning');
				return;
			}
			if (!list.match.length) {
				OmniOS.show("【用时" + (list.timeused || 0) + "ms】无符合条件内容", 'warning');
				return;
			}

			var content = ['<div class="caption">搜索完成【用时' + (list.timeused || 0) + 'ms】：</div>'];
			list.match.forEach(item => {
				console.log(item);
				content.push('<div class="content">');
				content.push('<span class="filetitle">' + item.title + '</span>');
				content.push('<span class="url">' + item.url + '</span>');
				content.push('<span class="date">' + item.score + '</span>');
				content.push('</div>');
			});
			OmniOS.show(content.join('\n'));
		},
	},
};

export default {
	name: "OmniOS",
	data () {
		return {
		}
	},
	mounted () {
		current = this;
		callPageLoaded();
		document.title = OmniOS.info.name + ' (' + OmniOS.info.version + ')';

		OmniOS.onTab(async (command, param) => {
			if (command === 'enter') {
				let [path, par] = getCombinedPathAndParam(OmniOS.location, param);
				let list = await Barn.getList(path);
				if (!list) return null;
				list = list.folders;
				if (!list) return null;

				let options = list.filter(p => p[0].indexOf(par) === 0);
				options = findCommonPrefix(options.map(p => p[0]), par);
				return replaceLastParam(param, options);
			}
			else if (['open', 'view'].includes(command)) {
				let [path, par] = getCombinedPathAndParam(OmniOS.location, param);
				let list = await Barn.getList(path);
				if (!list) return null;
				let folders = list.folders;
				list = list.files;

				let options;
				if (!!list) {
					options = list.filter(p => p.filename.indexOf(par) === 0);
					options = findCommonPrefix(options.map(item => item.filename), par);
					if (options !== par) return replaceLastParam(param, options);
				}

				options = folders.filter(p => p[0].indexOf(par) === 0);
				options = findCommonPrefix(options.map(p => p[0]), par);
				return replaceLastParam(param, options);
			}
			return param;
		});
		for (let status in OmniOSCore) {
			let cmds = OmniOSCore[status];
			for (let cmd in cmds) {
				OmniOS.onCommand(status, cmd, cmds[cmd]);
			}
		}

		OmniOS.init(
			this.$refs.console,
			sessionStorage.get('omniLocation', null),
			sessionStorage.get('omniStatus', null)
		);
	},
	unmounted () {
		current = null;
	},
	methods: {
		saveOmni: () => {
			sessionStorage.set('omniLocation', OmniOS.location);
			sessionStorage.set('omniStatus', OmniOS.status);
		},
		leave: async function () {
			this.saveOmni();
			OmniOS.show('后会有期');
			await wait(300);
			this.$router.push({path: '/'});
		},
	}
}
</script>