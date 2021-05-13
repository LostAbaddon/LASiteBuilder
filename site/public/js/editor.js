(() => {
	class MenuItem {
		name = '';
		icon = '';
		key = '';
		shortcut = '';
		ui;
		container;
		constructor (name, icon, key, shortcut) {
			shortcut = !!shortcut ? shortcut.trim() : '';
			if (!!shortcut) name = name + '（' + shortcut + '）'

			this.key = key || icon;
			this.name = name;
			this.icon = icon;
			this.shortcut = shortcut;
			this.ui = newEle('div', 'menu-item');
			this.ui.innerHTML = '<i class="fa fas far fab fa-' + icon + '"></i><span class="menu-item-hint">' + name + '</span>';
			this.ui.addEventListener('click', () => {
				if (!this.container) return;
				this.container.onClick(this.key, this);
			});
		}
		update (name, icon, key) {
			var btn = this.ui.querySelector('i.fa');
			btn.className = 'fa fas far fab fa-' + icon;
			this.ui.querySelector('span.menu-item-hint').innerHTML = name;
			this.key = key;
			this.name = name;
			this.icon = icon;
		}
		getShortcuts () {
			var sc = {};
			if (!!this.shortcut) sc[this.shortcut] = this.key;
			return sc;
		}
	}
	class MenuLine extends MenuItem {
		constructor () {
			super();
			this.ui = newEle('div', 'menu-break-line');
		}
	}
	class MenuGroup {
		items = [];
		name = '';
		icon = '';
		key = '';
		btn;
		group;
		ui;
		container;
		constructor () {
			this.btn = new MenuItem('', '', '');
			this.btn.container = this;
			this.group = newEle('div', 'menu-group-area');
			this.ui = newEle('div', 'menu-group');
			this.ui.appendChild(this.btn.ui);
			this.ui.appendChild(this.group);
		}
		add (name, icon, key, shortcut) {
			if (name instanceof MenuItem) {
				name.container = this;
				this.items.push(name);
				this.group.appendChild(name.ui);
			}
			else if (name instanceof MenuGroup) {
				name.ui.classList.add('menu-subgroup');
				name.container = this;
				this.items.push(name);
				this.group.appendChild(name.ui);
			}
			else {
				let btn = new MenuItem(name, icon, key, shortcut);
				btn.container = this;
				this.items.push(btn);
				this.group.appendChild(btn.ui);
			}

			if (this.items.length === 1) {
				let btn = this.items[0];
				this.btn.update(btn.name, btn.icon, btn.key);
				this.name = btn.name;
				this.icon = btn.icon;
				this.key = btn.key;
			}
		}
		onClick (key, btn) {
			this.btn.update(btn.name, btn.icon, btn.key);
			this.name = btn.name;
			this.icon = btn.icon;
			this.key = btn.key;
			if (!this.container) return;
			this.container.onClick(key, btn);
		}
		getShortcuts () {
			var list = {};
			this.items.forEach(item => {
				item = item.getShortcuts();
				Object.keys(item).forEach(key => {
					if (!!key) list[key] = item[key]
				});
			});
			return list;
		}
	}
	class MenuBar {
		items = [];
		ui;
		hooker;
		constructor (hooker) {
			this.ui = newEle('div', 'menu-bar');
			this.hooker = hooker;
		}
		add (name, icon, key, shortcut) {
			if (name instanceof MenuItem) {
				name.ui.classList.add('top-level');
				this.items.push(name);
				this.ui.appendChild(name.ui);
				name.container = this;
			}
			else if (name instanceof MenuGroup) {
				this.items.push(name);
				this.ui.appendChild(name.ui);
				name.container = this;
			}
			else {
				let btn = new MenuItem(name, icon, key, shortcut);
				btn.ui.classList.add('top-level');
				this.items.push(btn);
				this.ui.appendChild(btn.ui);
				btn.container = this;
			}
		}
		onClick (key, btn) {
			if (!this.hooker) return;
			this.hooker(key);
		}
		getShortcuts () {
			var list = {};
			this.items.forEach(item => {
				item = item.getShortcuts();
				Object.keys(item).forEach(key => {
					if (!!key) list[key] = item[key]
				});
			});
			return list;
		}
	}

	class HistoryItem {
		content = '';
		startNode = 0;
		startOffset = 0;
		endNode = 0;
		endOffset = 0;
	}
	const HistoryManager = {
		history: [],
		index: -1,
		editor: null,
		append (content, startNode, startOffset, endNode, endOffset) {
			var history = new HistoryItem();
			history.content = content;
			history.startNode = startNode;
			history.startOffset = startOffset;
			history.endNode = endNode;
			history.endOffset = endOffset;

			HistoryManager.index ++;
			HistoryManager.history.splice(HistoryManager.index, HistoryManager.history.length);
			HistoryManager.history.push(history);
		},
		restore () {
			if (HistoryManager.index <= 0) return;
			HistoryManager.index --;
			HistoryManager.recall();
		},
		redo () {
			if (HistoryManager.index === HistoryManager.history.length - 1) return;
			HistoryManager.index ++;
			HistoryManager.recall();
		},
		recall (history) {
			var history = HistoryManager.history[HistoryManager.index];
			if (!history) return;

			HistoryManager.editor.innerText = history.content;
			var all = [].map.call(HistoryManager.editor.childNodes, n => n);
			var startNode = all[history.startNode < 0 ? 0 : history.startNode];
			var endNode = all[history.endNode >= all.length ? all.length - 1 : history.endNode];
			var selection = document.getSelection();
			var range = selection.getRangeAt(0);
			range.setStart(startNode, history.startOffset);
			range.setEnd(endNode, history.endOffset);
			selection.removeAllRanges();
			selection.addRange(range);
			if (startNode.tagName === 'BR') {
				startNode.scrollIntoViewIfNeeded();
			}
			else if (!!startNode.nextElementSibling) {
				startNode.nextElementSibling.scrollIntoViewIfNeeded();
			}
			else if (!!startNode.previousElementSibling) {
				startNode.previousElementSibling.scrollIntoViewIfNeeded();
			}
		},
		clear () {
			HistoryManager.index = -1;
			HistoryManager.history.splice(0, HistoryManager.history.length);
		},
	};

	const ScrollSpeed = 50, ScrollRate = 0.15;
	const DefaultFontAwesomeIcons = ["glass", "music", "search", "envelope", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "pencil", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "plus", "minus", "asterisk", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "bar-chart", "twitter-sign", "facebook-sign", "camera-retro", "key", "cogs", "comments", "thumbs-up", "thumbs-down", "star-half", "heart-empty", "signout", "linkedin-sign", "pushpin", "external-link", "signin", "trophy", "github-sign", "upload-alt", "lemon", "phone", "check-empty", "bookmark-empty", "phone-sign", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd", "bullhorn", "bell", "certificate", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-left", "circle-arrow-right", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "group", "link", "cloud", "beaker", "cut", "copy", "paper-clip", "save", "sign-blank", "reorder", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-sign", "google-plus-sign", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "sort", "sort-down", "sort-up", "envelope-alt", "linkedin", "undo", "legal", "dashboard", "comment-alt", "comments-alt", "bolt", "sitemap", "umbrella", "paste", "lightbulb", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-alt", "coffee", "food", "file-alt", "building", "hospital", "ambulance", "medkit", "fighter-jet", "beer", "h-sign", "plus-sign-alt", "double-angle-left", "double-angle-right", "double-angle-up", "double-angle-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "circle-blank", "quote-left", "quote-right", "spinner", "circle", "reply"];
	const ShortcutsMap = {};

	ShortcutsMap['Tab'] = 'TabIndent';
	ShortcutsMap['shift+Tab'] = 'TabOutdent';
	ShortcutsMap['ctrl+Tab'] = 'TabOutdent';
	ShortcutsMap['ctrl+alt+Up'] = 'blockUp';
	ShortcutsMap['ctrl+alt+Down'] = 'blockDown';
	ShortcutsMap['ctrl+shift+Up'] = 'blockUp';
	ShortcutsMap['ctrl+shift+Down'] = 'blockDown';
	ShortcutsMap['ctrl+D'] = 'deleteLine';
	ShortcutsMap['ctrl+Z'] = 'restoreManipulation';
	ShortcutsMap['ctrl+Y'] = 'redoManipulation';

	var FileName = '', FileTitle = '';

	if (!window.initMarkUpEditor) {
		window.initMarkUpEditor = (vue, MUToolbar, MUEditor, MUPreview, FileLoader) => {
			var lastContent = '', saveHistory = false;

			const ContentController = {
				selection: null,
				range: null,
				content: '',
				texts: [],
				nodes: [],
				startNode: null,
				startOffset: 0,
				endNode: null,
				endOffset: 0,

				saveRange () {
					ContentController.selection = document.getSelection();
					ContentController.range = ContentController.selection.getRangeAt(0);
				},
				restoreRange () {
					if (!ContentController.range) return;
					ContentController.selection = document.getSelection();
					ContentController.selection.removeAllRanges();
					ContentController.selection.addRange(ContentController.range);
				},
				update () {
					ContentController.content = MUEditor.innerText;
					ContentController.nodes = [].map.call(MUEditor.childNodes, n => n);
					ContentController.texts = ContentController.nodes.filter(n => n.nodeName === '#text');

					var selection = document.getSelection(), range;
					if (MUEditor !== selection.focusNode && !ContentController.nodes.includes(selection.focusNode)) {
						ContentController.restoreRange();
						range = ContentController.range;
					}
					else {
						ContentController.selection = selection;
						range = selection.getRangeAt(0);
						ContentController.range = range;
					}

					if (!range) return;

					if (range.startContainer === MUEditor) {
						let node = ContentController.nodes[range.startOffset];
						if (!node) return;
						let nodeName = node.nodeName;
						if (nodeName === '#text') {
							ContentController.startNode = ContentController.nodes[range.startOffset];
							ContentController.startOffset = 0;
						}
						else if (nodeName === 'BR') {
							let node = ContentController.nodes[range.startOffset + 1];
							if (!node) {
								node = ContentController.nodes[range.startOffset - 1];
								if (!node) return;
								ContentController.startOffset = node.textContent.length;
							}
							else {
								ContentController.startOffset = 0;
							}
							ContentController.startNode = node;
						}
					}
					else {
						ContentController.startNode = range.startContainer;
						ContentController.startOffset = range.startOffset;
					}

					if (range.endContainer === MUEditor) {
						let node = ContentController.nodes[range.endOffset];
						if (!node) return;
						let nodeName = node.nodeName;
						if (nodeName === '#text') {
							ContentController.endNode = node;
							ContentController.endOffset = node.textContent.length;
						}
						else if (nodeName === 'BR') {
							let node = ContentController.nodes[range.endOffset - 1];
							if (!node) {
								node = ContentController.nodes[range.endOffset + 1];
								if (!node) return;
								ContentController.endOffset = 0;
							}
							else {
								ContentController.endOffset = node.textContent.length;
							}
							ContentController.endNode = node;
						}
					}
					else {
						ContentController.endNode = range.endContainer;
						ContentController.endOffset = range.endOffset;
					}
				},
				getSurrounding (prefix='', pstfix='') {
					pstfix = pstfix || prefix;

					var text = ContentController.startNode.textContent;
					text = text.substring(0, ContentController.startOffset + prefix.length);
					var startOffset = text.lastIndexOf(prefix);
					if (startOffset >= 0) {
						if (startOffset < ContentController.startOffset - prefix.length) startOffset = -1;
					}
					if (startOffset < 0) return [false, ContentController.startOffset, ContentController.endOffset];

					text = ContentController.endNode.textContent;
					var offset = Math.max(0, ContentController.endOffset - pstfix.length);
					text = text.substring(offset, text.length);
					var endOffset = text.indexOf(pstfix);
					if (endOffset >= 0) {
						if (endOffset > pstfix.length) endOffset = -1;
					}
					if (endOffset < 0) return [false, ContentController.startOffset, ContentController.endOffset];

					return [true, startOffset, offset + endOffset + pstfix.length];
				},
				addPair (prefix, pstfix, start, end) {
					var r = document.createRange();
					r.setStart(ContentController.endNode, end);
					r.setEnd(ContentController.endNode, end);
					ContentController.selection.removeAllRanges();
					ContentController.selection.addRange(r);
					document.execCommand('insertHTML', false, pstfix);

					r = document.createRange();
					r.setStart(ContentController.startNode, start);
					r.setEnd(ContentController.startNode, start);
					ContentController.selection.removeAllRanges();
					ContentController.selection.addRange(r);
					document.execCommand('insertHTML', false, prefix);

					r = document.createRange();
					r.setStart(ContentController.startNode, start);
					if (ContentController.startNode === ContentController.endNode) {
						r.setEnd(ContentController.endNode, end + prefix.length + pstfix.length);
					}
					else {
						r.setEnd(ContentController.endNode, end + pstfix.length);
					}
					ContentController.selection.removeAllRanges();
					ContentController.selection.addRange(r);
				},
				removePair (prefix, pstfix, start, end) {
					var content = ContentController.endNode.textContent;
					var bra = content.substring(0, end - pstfix.length), ket = content.substring(end, content.length);
					ContentController.endNode.textContent = bra + ket;

					content = ContentController.startNode.textContent;
					bra = content.substring(0, start), ket = content.substring(start + prefix.length, content.length);
					ContentController.startNode.textContent = bra + ket;

					var r = document.createRange();
					r.setStart(ContentController.startNode, start);
					if (ContentController.startNode === ContentController.endNode) {
						r.setEnd(ContentController.endNode, end - prefix.length - pstfix.length);
					}
					else {
						r.setEnd(ContentController.endNode, end - pstfix.length);
					}
					ContentController.selection.removeAllRanges();
					ContentController.selection.addRange(r);
				},
				getSelStruction () {
					var all = [].map.call(MUEditor.childNodes, n => n);
					var startNode = all.indexOf(ContentController.startNode);
					var endNode = all.indexOf(ContentController.endNode);
					var startPos = startNode, endPos = endNode;
					var startOffset = ContentController.startOffset;
					var endOffset = ContentController.endNode.textContent.length - ContentController.endOffset;

					for (let i = startNode; i >= 0; i --) {
						let n = all[i];
						if (n.tagName === 'BR') {
							break;
						}
						startNode = i;
					}
					for (let i = endNode; i < all.length; i ++) {
						let n = all[i];
						if (n.tagName === 'BR') {
							break;
						}
						endNode = i;
					}
					for (let i = startNode; i < startPos; i ++) {
						let n = all[i];
						n = n.textContent;
						startOffset += n.length;
					}
					for (let i = endPos + 1; i <= endNode; i ++) {
						let n = all[i];
						n = n.textContent;
						endOffset += n.length;
					}

					// 整理内容
					var lines = [], line = [];
					for (let i = startNode; i <= endNode; i ++) {
						let n = all[i];
						if (n.tagName === 'BR') {
							lines.unshift(line);
							line = [];
						}
						else {
							line.push([n, i]);
						}
					}
					lines.unshift(line);
					lines.forEach(line => {
						if (line.length < 2) return;
						var ctx = '';
						line.forEach(node => {
							ctx += node[0].textContent;
						});
						line[0][0].textContent = ctx;
						for (let i = line.length - 1; i > 0; i --) {
							MUEditor.removeChild(line[i][0]);
						}
						all.splice(line[0][1] + 1, line.length - 1);
					});
					lines = lines.filter(line => line.length > 0);
					lines = lines.map(line => line[0][0]);
					lines.reverse();
					endOffset = lines.last.textContent.length - endOffset;

					return {
						nodes: all,
						selection: {
							lines: lines,
							start: {
								node: startNode,
								offset: startOffset
							},
							end: {
								node: endNode,
								offset: endOffset
							}
						}
					};
				},
				rearrangeAll () {
					// 整理所有内容
					var all = [].map.call(MUEditor.childNodes, n => n);
					var selection = document.getSelection();
					var range = selection.getRangeAt(0);
					var startNode = range.startContainer, endNode = range.endContainer;
					var startOffset = range.startOffset, endOffset = range.endOffset;
					if (startNode === MUEditor) {
						startNode = all[startOffset];
						if (!startNode) return;
						startOffset = 0;
					}
					if (endNode === MUEditor) {
						endNode = all[endOffset];
						if (!endNode) return;
						endOffset = 0;
					}
					var lines = [], line = [];
					for (let i = 0; i < all.length; i ++) {
						let n = all[i];
						if (n.tagName === 'BR') {
							lines.push(line);
							line = [];
						}
						else {
							line.push(n);
						}
					}
					if (line.length > 0) lines.push(line);
					lines = lines.filter(line => line.length > 0);
					var changed = false;
					lines.forEach(line => {
						if (line.length === 1) return;
						changed = true;
						var n = line[0];
						var isStart = false;
						var isEnd = false;
						var ind = -1;
						ind = line.indexOf(startNode);
						if (ind >= 0) {
							isStart = true;
							startNode = n;
							for (let i = 0; i < ind; i ++) {
								startOffset += line[i].textContent?.length || 0;
							}
						}
						ind = line.indexOf(endNode);
						if (ind >= 0) {
							isEnd = true;
							endNode = n;
							for (let i = 0; i < ind; i ++) {
								endOffset += line[i].textContent?.length || 0;
							}
						}
						n.textContent = n.wholeText;
						for (let i = 1; i < line.length; i ++) {
							MUEditor.removeChild(line[i]);
						}
					});
					if (!all.last.tagName) {
						let n = document.createElement('br');
						MUEditor.appendChild(n);
						changed = true;
					}
					if (changed) all = [].map.call(MUEditor.childNodes, n => n);

					// 获取整行
					var startIndex = all.indexOf(startNode), endIndex = all.indexOf(endNode);
					if (startIndex > endIndex) {
						[startIndex, endIndex] = [endIndex, startIndex];
						[startNode, endNode] = [endNode, startNode];
						[startOffset, endOffset] = [endOffset, startOffset];
					}
					if (startNode.tagName === 'BR') {
						let n = all[startIndex - 1];
						if (!!n && !n.tagName) {
							startNode = n;
							startIndex --;
						}
					}
					if (endNode.tagName !== 'BR') {
						let n = all[endIndex + 1];
						if (!!n && n.tagName === 'BR') {
							endNode = n;
							endIndex ++;
						}
					}

					return {all, startNode, startIndex, startOffset, endNode, endIndex, endOffset};
				},
			};

			const togglePair = (prefix='', pstfix) => {
				pstfix = pstfix || prefix;

				if (!ContentController.texts.includes(ContentController.startNode)) return false;
				if (!ContentController.texts.includes(ContentController.endNode)) return false;

				var info = ContentController.getSurrounding(prefix, pstfix);
				if (!info) return false;
				var [found, start, end] = info;

				if (found) {
					ContentController.removePair(prefix, pstfix, start, end);
				}
				else {
					ContentController.addPair(prefix, pstfix, start, end);
				}
				return true;
			};
			const sizeUp = () => {
				if (ContentController.selection.isCollapsed) return false;
				if (!ContentController.texts.includes(ContentController.startNode)) return false;
				if (!ContentController.texts.includes(ContentController.endNode)) return false;

				var len = 5;
				for (let len = 5; len >= 2; len --) {
					let tag = String.blank(len, '^');

					let info = ContentController.getSurrounding(tag);
					if (!info) continue;

					let [found, start, end] = info;
					if (!found) continue;

					if (len === 5) return false; // 如果已经是顶级了，就不操作了
					ContentController.addPair('^', '^', start, end);
					return true;
				}

				ContentController.addPair('^^', '^^', ContentController.startOffset, ContentController.endOffset);
				return true;
			};
			const sizeDown = () => {
				if (ContentController.selection.isCollapsed) return false;
				if (!ContentController.texts.includes(ContentController.startNode)) return false;
				if (!ContentController.texts.includes(ContentController.endNode)) return false;

				var len = 5;
				for (let len = 5; len >= 2; len --) {
					let tag = String.blank(len, '^');

					let info = ContentController.getSurrounding(tag);
					if (!info) continue;

					let [found, start, end] = info;
					if (!found) continue;

					if (len > 2) ContentController.removePair('^', '^', start, end);
					else ContentController.removePair('^^', '^^', start, end);
					return true;
				}
				return false; // 如果已经是底级了，就不操作了
			};
			const headerUp = (level, target, all) => {
				var content = all[target].textContent;
				content = String.blank(level, '#') + ' ' + content;
				all[target].textContent = content;
			};
			const headerDown = (isUnder, target, all) => {
				if (isUnder) {
					MUEditor.removeChild(all[target + 1]);
					MUEditor.removeChild(all[target + 2]);
					all.splice(target + 1, 2);
				}
				else {
					let content = all[target].textContent;
					content = content.replace(/^\#+[ 　\t]*/, '');
					all[target].textContent = content;
				}
			};
			const toggleHeader = (target, fromKB=false) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var startNode = info.selection.start.node;
				var endNode = info.selection.end.node;
				if (startNode !== endNode) return false;

				var level = all[startNode].textContent.match(/[ 　]*(#+)/), isUnder = false; // 检查是否是行内标记
				if (!level) {
					level = 0;
				}
				else {
					level = level[1].length || 0;
				}

				// 检查是否是行下标记
				if (level === 0) {
					let nextStart = startNode + 2, nextEnd = nextStart;
					let ctx = '';
					for (let i = nextStart; i < all.length; i ++) {
						let n = all[i];
						if (n.tagName === 'BR') break;
						nextEnd = i;
						ctx = ctx + n.textContent;
					}

					if (nextEnd > nextStart) {
						all[nextStart].textContent = ctx;
						for (let i = nextStart + 1; i <= nextEnd; i ++) {
							MUEditor.removeChild(all[i]);
						}
						all.splice(nextStart + 1, nextEnd - nextStart);
					}

					if (ctx.match(/^={3,}$/)) {
						level = 2;
						isUnder = true;
					}
					else if (ctx.match(/^\-{3,}$/)) {
						level = 1;
						isUnder = true;
					}
					else {
						level = 0;
					}
				}

				if (level === 0) {
					headerUp(target, startNode, all);
				}
				else if (level === target) {
					headerDown(isUnder, startNode, all);
				}
				else {
					headerDown(isUnder, startNode, all);
					headerUp(target, startNode, all);
				}

				var content = all[startNode];
				var selection = document.getSelection(), range = document.createRange();
				range.setStart(content, 0);
				range.setEnd(content, content.textContent.length);
				selection.removeAllRanges();
				selection.addRange(range);

				return true;
			};
			const moveLevel = (isLevIn, fromKB=false) => {
				var info = ContentController.getSelStruction();
				var lines = info.selection.lines;
				var startOffset = info.selection.start.offset;
				var endOffset = info.selection.end.offset;

				var startNode = lines.first;
				var endNode = lines.last;
				var selection = document.getSelection(), range = document.createRange();

				// 如果是缩进
				if (isLevIn) {
					// 键盘触发且在同一行同一位置
					if (startNode === endNode && startOffset === endOffset && fromKB) {
						range.setStart(startNode, startOffset);
						range.setEnd(startNode, startOffset);
						selection.removeAllRanges();
						selection.addRange(range);
						document.execCommand('insertHTML', false, '\t');
					}
					else {
						lines.forEach(line => {
							line.textContent = '\t' + line.textContent;
						});
						range.setStart(startNode, 0);
						range.setEnd(endNode, endNode.textContent.length);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				}
				// 缩出
				else {
					lines.forEach(line => {
						line.textContent = line.textContent.replace(/^\t/, '');
					});
					range.setStart(startNode, 0);
					range.setEnd(endNode, endNode.textContent.length);
					selection.removeAllRanges();
					selection.addRange(range);
				}
				return true;
			};
			const moveBlock = (isUp=true) => {
				// 整理所有内容
				var {all, startNode, startIndex, startOffset, endNode, endIndex, endOffset} = ContentController.rearrangeAll();

				// 移动
				if (isUp) {
					if (startIndex === 0) return changed;
					let isBR = false, target = -1;
					for (let i = startIndex - 1; i >= 0; i --) {
						let n = all[i];
						if (n.tagName === 'BR') {
							if (isBR) {
								target = i + 1;
								break;
							}
							else {
								isBR = true;
							}
						}
					}
					let next = all[endIndex + 1];
					for (let i = startIndex - 1; i >= target; i --) {
						let n = all[i];
						MUEditor.insertBefore(n, next);
						next = n;
					}
					changed = true;
				}
				else {
					if (endIndex === all.length - 1) return changed;
					let target = -1;
					for (let i = endIndex + 1; i < all.length; i ++) {
						let n = all[i];
						if (n.tagName === 'BR') {
							target = i;
							break;
						}
					}
					let prev = all[startIndex];
					for (let i = endIndex + 1; i <= target; i ++) {
						let n = all[i];
						MUEditor.insertBefore(n, prev);
					}
					changed = true;
				}

				return changed;
			};
			const togglePara = (tag, param) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var lines = info.selection.lines;

				var prefix = tag + '\t', firstPrefix = prefix;
				if (!!param) firstPrefix = firstPrefix + '[' + param + '] ';

				for (let i = 0; i < lines.length; i ++) {
					let p = i === 0 ? firstPrefix : prefix;
					lines[i].textContent = p + lines[i].textContent;
				}

				var startNode = lines.first;
				var endNode = lines.last;
				var selection = document.getSelection(), range = document.createRange();
				range.setStart(startNode, 0);
				range.setEnd(endNode, endNode.textContent.length);
				selection.removeAllRanges();
				selection.addRange(range);

				return true;
			};
			const deleteLine = () => {
				// 整理所有内容
				var {all, startNode, startIndex, startOffset, endNode, endIndex, endOffset} = ContentController.rearrangeAll();

				for (let i = startIndex; i <= endIndex; i ++) {
					let n = all[i];
					MUEditor.removeChild(n);
				}

				return true;
			};
			const generateTable = () => {
				var inner = '<div class="table-generator" style="text-align:center;">';
				inner += '<div class="table-line">行：<input class="number-inputter row-count" type="number" value=2></div>';
				inner += '<div class="table-line">列：<input class="number-inputter col-count" type="number" value=2></div>';
				inner += '</div>';

				showInfobox({
					title: "插入表格",
					mode: 'html',
					content: inner,
					input: false,
					action: 'oc',
					callback: (result, value, infoBox) => {
						ContentController.restoreRange();

						if (result !== 'ok') return;

						var el = infoBox.$refs.content;
						var row = el.querySelector('input.row-count');
						var col = el.querySelector('input.col-count');
						createTable(row.value || 2, col.value || 2);
					}
				});

				return false;
			};
			const createTable = (row, col) => {
				if (row <= 0 || col <= 0) return;

				var table = [];
				var line = [];
				for (let i = 1; i <= col; i ++) {
					line.push('标题' + i);
				}
				table.push('|' + line.join('|') + '|');
				line = [];
				for (let i = 0; i < col; i ++) {
					line.push('-');
				}
				table.push('|' + line.join('|') + '|');
				for (let r = 0; r < row; r ++) {
					line = [];
					for (let i = 0; i < col; i ++) {
						line.push('    ');
					}
					table.push('|' + line.join('|') + '|');
				}
				table = '<br>' + table.join('<br>') + '<br>';
				document.execCommand('insertHTML', false, table);

				onEdited(true);
			};
			const generateMark = (title, key) => {
				if (ContentController.startNode !== ContentController.endNode) {
					ContentController.endNode = ContentController.startNode;
					ContentController.endOffset = ContentController.startNode.textContent.length;
				}

				showInfobox({
					title: "插入" + title,
					input: true,
					action: 'oc',
					callback: (result, value, infoBox) => {
						ContentController.restoreRange();
						if (result === 'cancel' || !value) return;
						createMark(key, value);
					}
				});
			};
			const createMark = (key, mark) => {
				if (!mark) return;
				var title = ContentController.startNode.textContent.substring(ContentController.startOffset, ContentController.endOffset);

				var content = '';
				if (!!title && title.length > 0) {
					content = '[' + title + ']';
				}
				if (key === 'footnote') {
					content += '[:' + mark + ']';
				}
				else if (key === 'endnote') {
					content += '[^' + mark + ']';
				}
				else {
					content += '{' + mark + '}';
				}
				document.execCommand('insertHTML', false, content);

				if (key === 'anchor') return onEdited(true);

				var pos = '[' + mark + ']: ';
				var br = newEle('br'), node = document.createTextNode(pos);
				pos = pos.length;

				if (!!ContentController.startNode.nextSibling) {
					MUEditor.insertBefore(node, ContentController.startNode.nextSibling);
				}
				else {
					MUEditor.appendChild(node);
				}
				MUEditor.insertBefore(br, node);

				var range = document.createRange();
				range.setStart(node, pos);
				range.setEnd(node, pos);
				ContentController.selection.removeAllRanges();
				ContentController.selection.addRange(range);

				onEdited(true);
			};
			const generateIcon = () => {
				if (ContentController.startNode !== ContentController.endNode) {
					ContentController.endNode = ContentController.startNode;
					ContentController.endOffset = ContentController.startNode.textContent.length;
				}

				showInfobox({
					title: "插入 FontAwesome 图标",
					input: true,
					action: 'oc',
					callback: (result, value, infoBox) => {
						ContentController.restoreRange();
						if (result === 'cancel' || !value) return;
						document.execCommand('insertHTML', false, ' :' + value + ': ');
						onEdited(true);
					}
				});
			};
			const generateLink = (title, type) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var lines = info.selection.lines;
				var startNode = info.selection.start.node;
				var endNode = info.selection.end.node;
				var startOffset = info.selection.start.offset;
				var endOffset = info.selection.end.offset;
				if (endNode !== startNode) {
					endNode = startNode;
					endOffset = lines.first.textContent.length;
					info.selection.end.node = endNode;
					info.selection.end.offset = endOffset;
				}

				var text = lines.first.textContent.substring(startOffset, endOffset);
				var inner = '<div class="link-generator" style="text-align:center;">';
				inner += '<div class="link-line">标题：<input class="number-inputter link-title" value="' + text + '"></div>';
				inner += '<div class="link-line">地址：<input class="number-inputter link-address" value=""></div>';
				if (type !== 'link') {
					inner += '<div class="link-line button-line" style="margin-top:10px;font-size:14px;">';
					inner += '<input type="radio" name="position" value="nextline" checked><span class="name">独立一行</span><br>';
					inner += '<input type="radio" name="position" value="floatleft"><span class="name">左侧混排</span><br>';
					inner += '<input type="radio" name="position" value="floatright"><span class="name">右侧混排</span>';
					inner += '</div>';
				}
				inner += '</div>';

				showInfobox({
					title: "插入" + title,
					mode: 'html',
					content: inner,
					input: false,
					action: 'oc',
					callback: (result, value, infoBox) => {
						ContentController.restoreRange();

						if (result !== 'ok') return;

						var el = infoBox.$refs.content;
						var title = el.querySelector('input.link-title').value;
						var url = el.querySelector('input.link-address').value;
						var position = 'nextline';
						el.querySelectorAll('input[type="radio"][name="position"]').forEach(item => {
							if (item.checked) position = item.value;
						});
						createLink(type, title, url, position);
					}
				});

				return false;
			};
			const createLink = (type, title, link, location) => {
				if (!link || link.length === 0) return;

				var inner, isSpecial = false;
				if (type === 'image') {
					inner = '<br>![';
					isSpecial = true;
				}
				else if (type === 'video') {
					inner = '<br>@[';
					isSpecial = true;
				}
				else if (type === 'audio') {
					inner = '<br>#[';
					isSpecial = true;
				}
				else inner = '[';
				inner += title + '](' + link;
				if (location === 'floatleft') inner += ' "left")';
				else if (location === 'floatright') inner += ' "right")';
				else inner += ')';
				if (isSpecial) inner = inner + '<br>';

				var selection = document.getSelection(), range = selection.getRangeAt(0);
				var start = range.startContainer, offset = range.startOffset;
				document.execCommand('insertHTML', false, inner);

				var all = [].map.call(MUEditor.childNodes, n => n);
				if (isSpecial) {
					let n = start.previousSibling?.previousSibling;
					if (!!n && !n.tagName) {
						range.setStart(n, 0);
						range.setEnd(n, n.textContent.length);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				}
				else {
					range.setStart(start, offset);
					range.setEnd(start, offset + inner.length);
					selection.removeAllRanges();
					selection.addRange(range);
				}

				onEdited(true);
			};
			const generateRefBlock = () => {
				var inner = '<div class="table-generator" style="text-align:center;">';
				inner += '<div class="table-line">名称：<input class="number-inputter block-name" value=""></div>';
				inner += '</div>';

				showInfobox({
					title: "插入引用块",
					mode: 'html',
					content: inner,
					input: false,
					action: 'oc',
					callback: (result, value, infoBox) => {
						ContentController.restoreRange();

						if (result !== 'ok') return;

						var el = infoBox.$refs.content;
						var name = el.querySelector('input.block-name').value;
						createRefBlock(name);
					}
				});

				return false;
			};
			const createRefBlock = (name) => {
				if (!name || name.length === 0) return;

				var hint = '[' + name + ']';
				document.execCommand('insertHTML', false, hint);

				var selection = document.getSelection(), range = selection.getRangeAt(0);
				var start = range.startContainer, pos = start.textContent.length;
				range.setStart(start, pos);
				range.setEnd(start, pos);
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand('insertHTML', false, '<br>[:' + name + ':]ref(' + name + ')[:' + name + ':]');

				start = start.nextSibling?.nextSibling;
				if (!!start && !start.tagName) {
					pos = 4 + name.length;
					range.setStart(start, pos);
					range.setEnd(start, pos + 5 + name.length);
					selection.removeAllRanges();
					selection.addRange(range);
				}

				onEdited(true);
			};
			const generateBlock = (tag) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var lines = info.selection.lines;
				var startNode = lines.first;
				var endNode = lines.last;

				var selection = document.getSelection(), range = document.createRange(), pos = endNode.textContent.length;
				range.setStart(endNode, pos);
				range.setEnd(endNode, pos);
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand('insertHTML', false, '<br>' + tag);
				range = document.createRange();
				range.setStart(startNode, 0);
				range.setEnd(startNode, 0);
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand('insertHTML', false, tag + '<br>');
				range.setStart(startNode.previousSibling?.previousSibling, 0);
				range.setEnd(endNode.nextSibling?.nextSibling, tag.length);
				selection.removeAllRanges();
				selection.addRange(range);

				return true;
			};
			const blockIndent = (isIn) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var lines = info.selection.lines;
				var startNode = info.selection.start.node;
				var endNode = info.selection.end.node;
				var blocks = [];

				var brLev = 0, block = [];
				for (let i = startNode; i <= endNode; i ++) {
					let n = all[i];
					if (n.tagName === 'BR') {
						brLev ++;
					}
					else if (n.textContent.length > 0) {
						if (brLev > 1) {
							blocks.push(block);
							block = [];
						}
						brLev = 0;
						block.push(n);
					}
				}
				if (block.length > 0) blocks.push(block);

				blocks.forEach(block => {
					var line = block.first;
					line.textContent = line.textContent.replace(/^(( |　|\t|\-|\+|>|\*|~|\d+\.)*(\{[<\|>]\}([ 　\t]*))*)(:*)/, (match, prefix, u1, u2, u3, mark) => {
						var lev = mark.length;
						if (isIn) mark += ':';
						else if (lev > 0) mark = mark.substring(1, mark.length);
						return prefix + mark;
					});
				});

				startNode = lines.first;
				endNode = lines.last;
				var selection = document.getSelection(), range = document.createRange();
				range.setStart(startNode, 0);
				range.setEnd(endNode, endNode.textContent.length);
				selection.removeAllRanges();
				selection.addRange(range);

				return false;
			};
			const blockAlign = (dir) => {
				var info = ContentController.getSelStruction();
				var all = info.nodes;
				var lines = info.selection.lines;
				var startNode = info.selection.start.node;
				var endNode = info.selection.end.node;
				var blocks = [];

				var brLev = 0, block = [];
				for (let i = startNode; i <= endNode; i ++) {
					let n = all[i];
					if (n.tagName === 'BR') {
						brLev ++;
					}
					else if (n.textContent.length > 0) {
						if (brLev > 1) {
							blocks.push(block);
							block = [];
						}
						brLev = 0;
						block.push(n);
					}
				}
				if (block.length > 0) blocks.push(block);

				blocks.forEach(block => {
					var line = block.first;
					line.textContent = line.textContent.replace(/^(( |　|\t|\-|\+|>|\*|:|~|\d+\.)*)(\{[<\|>]\}([ 　\t]*))+/, (match, prefix) => prefix);
					line = block.last;
					var tag = '';
					if (dir === 0) tag = ' {<}';
					else if (dir === 1) tag = ' {|}';
					else if (dir === 2) tag = ' {>}';
					line.textContent = line.textContent.replace(/([ 　\t]*)(\{[<\|>]\}([ 　\t]*))+$/, '') + tag;
				});

				startNode = lines.first;
				endNode = lines.last;
				var selection = document.getSelection(), range = document.createRange();
				range.setStart(startNode, 0);
				range.setEnd(endNode, endNode.textContent.length);
				selection.removeAllRanges();
				selection.addRange(range);

				return false;
			};
			const insertLine = (tag) => {
				var selection = document.getSelection(), range = selection.getRangeAt(0);
				var start = range.startContainer, offset = range.startOffset;
				document.execCommand('insertHTML', false, '<br><br>' + tag + '<br><br>');

				var node = start.previousSibling?.previousSibling?.previousSibling;
				if (!!node && !node.tagName) {
					range.setStart(node, 0);
					range.setEnd(node, node.textContent.length);
					selection.removeAllRanges();
					selection.addRange(range);
				}
				return true;
			};
			const download = (filename, content) => {
				var blob = new Blob([content], { type: 'text/plain' });
				var link = URL.createObjectURL(blob);
				var downloader = document.createElement('a');
				downloader.setAttribute('href', link);
				if (!!filename) downloader.setAttribute('download', filename);
				else downloader.setAttribute('download', 'untitled');
				downloader.click();
			};
			const downloadMU = () => {
				var content = ContentController.content;
				var filename = FileName;
				if (!filename) {
					if (!!FileTitle) filename = FileTitle + '.mu';
					else filename = "untitled.mu";
				}
				download(filename, content);
			};
			const openLocalFile = file => {
				FileName = file.name;
				var reader = new FileReader();
				reader.onload = () => {
					MUEditor.innerText = reader.result;
					HistoryManager.clear();
					lastContent = '';
					articleConfig = {
						title: file.name,
						update: file.lastModifiedDate.getTime(),
						content: reader.result,
						usage: []
					};
					onEdited(true);
					return;
				};
				reader.readAsText(file);
			};
			const readFile = () => {
				var file = FileLoader.files[0];
				if (!file) return;
				openLocalFile(file);
			};

			const controlHandler = (key, fromKB=false) => {
				var result = false;
				ContentController.update();

				var content = MUEditor.value;
				if (lastContent !== content) {
					saveHistory = true;
				}

				if (key === 'restoreManipulation') {
					saveHistory = false;
					HistoryManager.restore();
					return true;
				}
				else if (key === 'redoManipulation') {
					saveHistory = false;
					HistoryManager.redo();
					return true;
				}

				else if (key === 'TabIndent') {
					result = moveLevel(true, fromKB);
				}
				else if (key === 'TabOutdent') {
					result = moveLevel(false, fromKB);
				}

				else if (key === 'bold') {
					result = togglePair('**');
				}
				else if (key === 'italic') {
					result = togglePair('*');
				}
				else if (key === 'underline') {
					result = togglePair('__');
				}
				else if (key === 'wavy') {
					result = togglePair('~');
				}
				else if (key === 'delete') {
					result = togglePair('~~');
				}
				else if (key === 'sup') {
					result = togglePair('^');
				}
				else if (key === 'sub') {
					result = togglePair('_');
				}
				else if (key === 'sizeUp') {
					result = sizeUp();
				}
				else if (key === 'sizeDown') {
					result = sizeDown();
				}

				else if (key === 'red') {
					result = togglePair('[red]', '[/]');
				}
				else if (key === 'green') {
					result = togglePair('[green]', '[/]');
				}
				else if (key === 'blue') {
					result = togglePair('[blue]', '[/]');
				}
				else if (key === 'yellow') {
					result = togglePair('[yellow]', '[/]');
				}
				else if (key === 'gold') {
					result = togglePair('[gold]', '[/]');
				}
				else if (key === 'white') {
					result = togglePair('[white]', '[/]');
				}
				else if (key === 'silver') {
					result = togglePair('[silver]', '[/]');
				}
				else if (key === 'gray') {
					result = togglePair('[gray]', '[/]');
				}
				else if (key === 'dark') {
					result = togglePair('[dark]', '[/]');
				}
				else if (key === 'black') {
					result = togglePair('[black]', '[/]');
				}

				else if (key === 'insert-icon') {
					generateIcon();
					return false;
				}

				else if (key === 'heading-1') {
					result = toggleHeader(1, fromKB);
				}
				else if (key === 'heading-2') {
					result = toggleHeader(2, fromKB);
				}
				else if (key === 'heading-3') {
					result = toggleHeader(3, fromKB);
				}
				else if (key === 'heading-4') {
					result = toggleHeader(4, fromKB);
				}
				else if (key === 'heading-5') {
					result = toggleHeader(5, fromKB);
				}
				else if (key === 'heading-6') {
					result = toggleHeader(6, fromKB);
				}

				else if (key === 'quote-quote') {
					result = togglePara('>');
				}
				else if (key === 'quote-info') {
					result = togglePara('>', 'info');
				}
				else if (key === 'quote-success') {
					result = togglePara('>', 'success');
				}
				else if (key === 'quote-warning') {
					result = togglePara('>', 'warning');
				}
				else if (key === 'quote-danger') {
					result = togglePara('>', 'danger');
				}

				else if (key === 'list-ol') {
					result = togglePara('1.');
				}
				else if (key === 'list-ul') {
					result = togglePara('-');
				}

				else if (key === 'insert-table') {
					generateTable();
					result = false;
				}
				else if (key === 'insert-code') {
					result = generateBlock('```');
				}
				else if (key === 'insert-latex') {
					result = generateBlock('$$');
				}

				else if (key === 'convert-code') {
					result = togglePair('`');
				}
				else if (key === 'convert-latex') {
					result = togglePair('$');
				}
				else if (key === 'footnote') {
					generateMark('脚注', 'footnote');
					result = false;
				}
				else if (key === 'endnote') {
					generateMark('尾注', 'endnote');
					result = false;
				}
				else if (key === 'term') {
					generateMark('术语', 'term');
					result = false;
				}
				else if (key === 'anchor') {
					generateMark('锚点', 'anchor');
					result = false;
				}

				else if (key === 'levelOut') {
					result = moveLevel(false, fromKB);
				}
				else if (key === 'levelIn') {
					result = moveLevel(true, fromKB);
				}
				else if (key === 'blockUp') {
					result = moveBlock(true);
				}
				else if (key === 'blockDown') {
					result = moveBlock(false);
				}
				else if (key === 'indent') {
					result = blockIndent(true);
				}
				else if (key === 'outdent') {
					result = blockIndent(false);
				}
				else if (key === 'align-left') {
					result = blockAlign(0);
				}
				else if (key === 'align-center') {
					result = blockAlign(1);
				}
				else if (key === 'align-right') {
					result = blockAlign(2);
				}

				else if (key === 'insert-link') {
					generateLink('超链接', 'link');
					result = false;
				}
				else if (key === 'insert-image') {
					generateLink('图片', 'image');
					result = false;
				}
				else if (key === 'insert-video') {
					generateLink('视频', 'video');
					result = false;
				}
				else if (key === 'insert-audio') {
					generateLink('音频', 'audio');
					result = false;
				}

				else if (key === 'headline-normal') {
					result = insertLine('---');
				}
				else if (key === 'headline-double') {
					result = insertLine('===');
				}
				else if (key === 'headline-dotted') {
					result = insertLine('...');
				}
				else if (key === 'headline-dashed') {
					result = insertLine('___');
				}
				else if (key === 'headline-gradient') {
					result = insertLine('+++');
				}
				else if (key === 'headline-wavy') {
					result = insertLine('~~~');
				}
				else if (key === 'headline-star') {
					result = insertLine('***');
				}

				else if (key === 'insert-block') {
					generateRefBlock();
					result = false;
				}

				else if (key === 'help') {
					let win = window.open('/#/markup');
					win.focus();
					return true;
				}
				else if (key === 'close') {
					vue.$router.push({path: '/'});
					return true;
				}
				else if (key === 'save-article') {
					downloadMU();
					return true;
				}
				else if (key === 'open-local-article') {
					FileLoader.accept = '.mu';
					FileLoader.click();
					return true;
				}
				else if (key === 'new-article') {
					FileName = '';
					FileTitle = '';
					MUEditor.innerText = '';
					MUPreview.innerHTML = '';
					MUEditor.focus();
					HistoryManager.clear();
					HistoryManager.append('', 0, 0, 0, 0);
					return true;
				}

				else if (key === 'deleteLine') {
					result = deleteLine();
				}

				if (result) onEdited(saveHistory);

				return result;
			};

			// 初始化工具栏
			const menuBar = new MenuBar(controlHandler);
			const buildToolBar = () => {
				var group, subgroup;

				group = new MenuGroup();
				group.add('保存', 'save', 'save-article', 'ctrl+S');
				group.add('打开本地文档', 'file-word', 'open-local-article', 'ctrl+O');
				group.add('新建空文档', 'file', 'new-article', 'ctrl+N');
				menuBar.add(group);

				menuBar.add(new MenuLine());

				group = new MenuGroup();
				group.add('加粗', 'bold', 'bold', 'ctrl+B');
				group.add('斜体', 'italic', 'italic', 'ctrl+I');
				group.add('下划线', 'underline', 'underline', 'alt+U');
				group.add('波浪线', 'water', 'wavy', 'alt+W');
				group.add('删除线', 'strikethrough', 'delete', 'alt+D');
				group.add(new MenuLine());
				subgroup = new MenuGroup();
				subgroup.add('红色', 'color red', 'red');
				subgroup.add('绿色', 'color green', 'green');
				subgroup.add('蓝色', 'color blue', 'blue');
				subgroup.add('黄色', 'color yellow', 'yellow');
				subgroup.add('金色', 'color gold', 'gold');
				subgroup.add('白色', 'color white', 'white');
				subgroup.add('银色', 'color silver', 'silver');
				subgroup.add('灰色', 'color gray', 'gray');
				subgroup.add('深色', 'color dark', 'dark');
				subgroup.add('黑色', 'color black', 'black');
				group.add(subgroup);
				group.add(new MenuLine());
				group.add('上标', 'superscript', 'sup', 'alt+P');
				group.add('下标', 'subscript', 'sub', 'alt+B');
				group.add(new MenuLine());
				group.add('大一号', 'sort-amount-up', 'sizeUp', 'ctrl+Up');
				group.add('小一号', 'sort-amount-down', 'sizeDown', 'ctrl+Down');
				menuBar.add(group);

				group = new MenuGroup();
				group.add('脚注', 'paragraph', 'footnote', 'alt+F');
				group.add('尾注', 'scroll', 'endnote', 'alt+E');
				group.add('术语', 'pen-nib', 'term', 'alt+T');
				group.add('锚点', 'map-pin', 'anchor', 'alt+A');
				group.add(new MenuLine());
				group.add('代码', 'code', 'convert-code', 'alt+C');
				group.add('公式', 'square-root-alt', 'convert-latex', 'alt+L');
				group.add(new MenuLine());
				group.add('插入图标', 'flag', 'insert-icon');
				menuBar.add(group);

				menuBar.add(new MenuLine());

				group = new MenuGroup();
				subgroup = new MenuGroup();
				subgroup.add('一级标题', 'heading one', 'heading-1', 'alt+H');
				subgroup.add('二级标题', 'heading two', 'heading-2');
				subgroup.add('三级标题', 'heading three', 'heading-3');
				subgroup.add('四级标题', 'heading four', 'heading-4');
				subgroup.add('五级标题', 'heading five', 'heading-5');
				subgroup.add('六级标题', 'heading six', 'heading-6');
				group.add(subgroup);
				group.add(new MenuLine());
				subgroup = new MenuGroup();
				subgroup.add('普通引用', 'quote-right', 'quote-quote');
				subgroup.add('信息引用', 'quote-left', 'quote-info');
				subgroup.add('提醒引用', 'angle-double-right font green', 'quote-success');
				subgroup.add('警告引用', 'angle-right', 'quote-warning');
				subgroup.add('报错引用', 'angle-double-right font red', 'quote-danger');
				group.add(subgroup);
				subgroup = new MenuGroup();
				subgroup.add('无序列表', 'list-ul');
				subgroup.add('有序列表', 'list-ol');
				group.add(subgroup);
				group.add('表格', 'table', 'insert-table');
				group.add(new MenuLine());
				group.add('代码', 'code', 'insert-code');
				group.add('公式', 'square-root-alt', 'insert-latex');
				menuBar.add(group);

				group = new MenuGroup();
				group.add('层进', 'indent', 'levelIn', 'ctrl+alt+Right');
				group.add('层出', 'outdent', 'levelOut', 'ctrl+alt+Left');
				group.add(new MenuLine());
				group.add('左对齐', 'align-left');
				group.add('居中', 'align-center');
				group.add('右对齐', 'align-right');
				group.add(new MenuLine());
				group.add('缩进', 'indent font blue', 'indent');
				group.add('退出', 'outdent font blue', 'outdent');
				menuBar.add(group);

				menuBar.add(new MenuLine());

				group = new MenuGroup();
				group.add('插入超链接', 'link', 'insert-link', 'alt+K');
				group.add('插入图片', 'image', 'insert-image');
				group.add('插入视频', 'video', 'insert-video');
				group.add('插入音频', 'music', 'insert-audio');
				menuBar.add(group);

				group = new MenuGroup();
				group.add('普通分隔线', 'minus', 'headline-normal');
				group.add('双层分隔线', 'grip-lines', 'headline-double');
				group.add('虚线', 'ellipsis-h', 'headline-dotted');
				group.add('点划线', 'window-minimize', 'headline-dashed');
				group.add('渐变线', 'icicles', 'headline-gradient');
				group.add('交叉线', 'grip-horizontal', 'headline-wavy');
				group.add('圈隔线', 'genderless', 'headline-star');
				menuBar.add(group);

				menuBar.add(new MenuLine());

				menuBar.add('插入引用块', 'vector-square', 'insert-block');

				menuBar.add(new MenuLine());

				menuBar.add('帮助文档', 'info-circle', 'help', 'ctrl+H');

				menuBar.add(new MenuLine());

				menuBar.add('关闭本文档', 'times-circle', 'close');

				var sc = menuBar.getShortcuts();
				Object.keys(sc).forEach(key => ShortcutsMap[key] = sc[key]);

				MUToolbar.appendChild(menuBar.ui);
			};
			buildToolBar();

			// 其它相关事件
			var mover, changer, lineMap = [];
			const notTextLine = (line, isSpecial=false, blockMark='') => {
				// 先处理标记
				if (line.length === 0 || !!line.match(/^ *$/)) return [true, false, blockMark];
				if (isSpecial) return [true, true, blockMark];
				if (!!line.match(/^\[.+\][:：][ 　\t]*/)) return [true, true, blockMark];

				// 代码与公式
				if (!blockMark) {
					if (!!line.match(/^\$\$/)) return [true, isSpecial, '$'];
					if (!!line.match(/^```/)) return [true, isSpecial, '`'];
					if (!!line.match(/^(~~~$|~~~[ 　\t\w]+)/)) return [true, isSpecial, '~'];
				}
				else if (blockMark === '$') {
					if (!!line.match(/^\$\$/)) blockMark = '';
					return [true, isSpecial, blockMark];
				}
				else if (blockMark === '`') {
					if (!!line.match(/^```/)) blockMark = '';
					return [true, isSpecial, blockMark];
				}
				else if (blockMark === '~') {
					if (!!line.match(/^~~~/)) blockMark = '';
					return [true, isSpecial, blockMark];
				}

				if (!!line.match(/^(标题|作者|简介|关键词|更新|GOD|THEONE|TITLE|AUTHOR|EMAIL|DESCRIPTION|STYLE|SCRIPT|DATE|KEYWORD|GLOSSARY|TOC|REF|LINK|IMAGES|VIDEOS|AUDIOS|ARCHOR|SHOWTITLE|SHOWAUTHOR|RESOURCES)[:：]/i)) return [true, isSpecial, blockMark];
				if (!line.match(/[ 　\t\w\u4e00-\u9fa5]/)) return [true, isSpecial, blockMark];
				if (!!line.match(/[!@#]\[.*\]\(.+\)/)) return [true, isSpecial, blockMark];
				if (!!line.match(/^[ 　\t]*\[.+\][ 　\t]*$/)) return [true, isSpecial, blockMark];
				if (!!line.match(/^\|>.*<\|$/)) return [true, isSpecial, blockMark];

				return [false, isSpecial, blockMark];
			};
			const getTargetNode = (linenum) => {
				if (!(linenum >= 0)) return null;
				var targets = MUPreview.querySelectorAll('span.linenumbermarker[linenumber="' + linenum + '"]');
				targets = [].map.call(targets, n => n);
				targets = targets.filter(n => {
					return !n.parentElement.classList.contains('content-link');
				});
				if (targets.length === 0) return null;
				var previewer = MUPreview.parentElement;
				var originTop = previewer.getBoundingClientRect().top;
				targets = targets.map(n => {
					return [Math.abs(n.getBoundingClientRect().top - originTop), n];
				});
				targets.sort((a, b) => a[0] - b[0]);
				return targets[0][1];
			};
			const onKey = evt => {
				if (evt.which === 13) {
					// 插入新行
					let selection = document.getSelection(), range = selection.getRangeAt(0);
					let insert = '<br>';
					let emptyLast = true;
					if (range.collapsed) {
						let content = range.startContainer.wholeText;
						if (!!content) {
							let header = content.match(/^([ 　\t>\+\-\*]|\d+\.)*/) || [];
							header = header[0] || '';
							if (header.length > 0) emptyLast = false;
							insert += header;
						}
					}
					insert = insert + '<span class="placeholder"></span>';
					document.execCommand('insertHTML', false, insert);

					// 定位光标
					let placeholder = MUEditor.querySelector('span.placeholder');
					placeholder.scrollIntoViewIfNeeded();
					let node = document.createTextNode('test');
					MUEditor.insertBefore(node, placeholder);
					MUEditor.removeChild(placeholder);

					// 整理尾部内容
					let all = [].map.call(MUEditor.childNodes, n => n);
					all.reverse();
					let removeList = [];
					all.some((node, i) => {
						if (!!node.tagName) return true;
						if (node.textContent.length === 0) {
							MUEditor.removeChild(node);
							removeList.push(i);
							return;
						}
						return true;
					});
					removeList.reverse().forEach(i => all.splice(i, 1));
					all.reverse();

					range = selection.getRangeAt(0);
					selection.removeAllRanges();
					range = document.createRange();
					range.selectNode(node);
					selection.addRange(range);
					node.textContent = '';
					range.collapse();

					// 末尾处理
					if (all.last === node && emptyLast) {
						document.execCommand('insertHTML', false, '<br><br>');
					}

					evt.preventDefault();
					return false;
				}

				if (![16, 17, 18, 91].includes(evt.which)) {
					saveHistory = true;

					let keyPair = [];
					if (evt.ctrlKey) keyPair.push('ctrl');
					if (evt.altKey) keyPair.push('alt');
					if (evt.shiftKey) keyPair.push('shift');
					if (evt.winKey) keyPair.push('win');
					if (evt.metaKey) keyPair.push('meta');
					let keyName = evt.key;
					if (keyName.indexOf('Arrow') >= 0) keyName = keyName.replace('Arrow', '');
					else if (evt.which === 27) keyName = 'Esc';
					else if (evt.which === 8) keyName = 'Back';
					else if (evt.which === 9) keyName = 'Tab';
					else keyName = keyName.toUpperCase();
					keyPair.push(keyName);
					keyPair = keyPair.join('+');
					var shortcut = ShortcutsMap[keyPair];
					if (!shortcut) return;
					if (controlHandler(shortcut, true)) evt.preventDefault();
				}
			};
			const onDrop = evt => {
				var file = evt.dataTransfer;
				if (!file) return;
				file = file.files;
				if (!file) return;
				file = file[0];
				if (!file) return;
				openLocalFile(file);
				evt.preventDefault();
			};
			const onPaste = evt => {
				var content = evt.clipboardData.getData('text/html');
				var files = evt.clipboardData.files;
				if (content.length === 0 && files.length === 0) return;

				if (files.length > 0 && !!Socket) {
					[].forEach.call(files, file => {
						if (file.type.indexOf('image') < 0) return;

						var fid = generateRandomKey(16);
						var content = MUEditor.value;
						var start = MUEditor.selectionStart;
						var end = MUEditor.selectionEnd;
						var bra = content.substr(0, start);
						var ket = content.substr(end, content.length);
						var placeholder = '[图片(' + fid + ')上传中……]';
						content = bra + '\n' + placeholder + '\n' + ket;
						start ++;
						end = placeholder.length;
						MUEditor.value = content;
						MUEditor.selectionStart = start;
						MUEditor.selectionEnd = start + end;

						var reader = new FileReader();
						reader.onload = event => {
							var data = event.target.result;
							sendToServer('saveResource', {
								data,
								id: fid,
								name: file.name,
								type: file.type
							});
						};
						reader.readAsArrayBuffer(file);
					});

					evt.preventDefault();
					return;
				}

				var ele = newEle('div');
				ele.innerHTML = content;
				var result = MarkUp.reverse(ele);
				ele.innerHTML = '';
				ele = null;

				var content = MUEditor.value;
				var start = MUEditor.selectionStart;
				var end = MUEditor.selectionEnd;
				if (result.indexOf('\n') >= 0) {
					result = result.replace(/^\n+|\n+$/g, '');
					if (start > 0) result = '\n\n' + result;
					if (end < content.length) result = result + '\n\n';
				}

				var bra = content.substr(0, start);
				var ket = content.substr(end, content.length);
				content = bra + result + ket;
				start += result.length;
				MUEditor.value = content;
				MUEditor.selectionStart = start;
				MUEditor.selectionEnd = start;
				evt.preventDefault();
			};
			const onEdited = (saveHistory=false) => {
				if (!!changer) {
					clearTimeout(changer);
					changer = null;
				}

				var content = MUEditor.innerText;
				content = content.replace(/\n*$/gi, '');
				if (lastContent === content) return;
				lastContent = content;
				var origin = content;

				content = content.split('\n');
				var isMark = false, isBlock = '';
				lineMap.splice(0, lineMap.length);
				content = content.map((line, i) => {
					var notLine = false;
					[notLine, isMark, isBlock] = notTextLine(line, isMark, isBlock);
					if (notLine) return line;
					var prefix = line.match(/^([ 　`~!@#%^&\*\-_\+=\\\|:;\/\?\.,<>\d\r\t]|(\[\w*\][ 　\t]*(\(.*\))*)|\{[\|<>]*\})*/);
					if (!prefix) prefix = '';
					else prefix = prefix[0];
					var bra = line.substring(0, prefix.length), ket = line.substring(prefix.length, line.length);
					prefix = "%LINENUMBER-" + i + '%';
					lineMap.push(i);
					return bra + prefix + ket;
				});
				content = content.join('\n')
				markupDoc(content);

				if (!saveHistory) return;
				var selection = document.getSelection();
				var range = selection.getRangeAt(0);
				var {all, startNode, startIndex, startOffset, endNode, endIndex, endOffset} = ContentController.rearrangeAll();
				HistoryManager.append(origin, startIndex, startOffset, endIndex - 1, endOffset);
				if (endNode.tagName === 'BR') endNode = endNode.previousSibling;
				if (!startNode || !endNode) return;
				range.setStart(startNode, startOffset);
				range.setEnd(endNode, endOffset);
				selection.removeAllRanges();
				selection.addRange(range);
			};
			const onBlur = () => {
				ContentController.saveRange();
				onChange();
			};
			const onChange = () => {
				var content = MUEditor.innerText;
				if (content.length === 0) {
					MUEditor.innerHTML = '<br/>';
					MUEditor.focus();
				}
				if (!!changer) {
					clearTimeout(changer);
					changer = null;
				}
				changer = setTimeout(() => onEdited(saveHistory), 1000);
			};
			const onMoved = () => {
				if (!!mover) {
					clearTimeout(mover);
					mover = null;
				}

				if (MUEditor.parentNode.scrollHeight <= MUEditor.parentNode.offsetHeight) return;
				var percent = MUEditor.parentNode.scrollTop / (MUEditor.parentNode.scrollHeight - MUEditor.parentNode.offsetHeight);
				var pos = MUEditor.parentNode.getBoundingClientRect();
				pos = pos.top + pos.height * percent;

				var nodes = [].map.call(MUEditor.childNodes, n => n);
				var linenum = -1, isBR = true, endAsText = false;
				nodes.some((node, i) => {
					// 如果是textNode
					if (!node.getBoundingClientRect) {
						if (isBR) linenum ++;
						isBR = false;
						endAsText = true;
						return false;
					}
					// 如果前一行不是br
					if (!isBR) {
						isBR = true;
					}
					else {
						linenum ++;
					}
					endAsText = false;
					var rect = node.getBoundingClientRect();
					return rect.top >= pos;
				});
				if (!endAsText) linenum --;

				var prev, curr, next;
				lineMap.some((num) => {
					if (num < linenum) prev = num;
					if (num === linenum) curr = num;
					if (num > linenum) {
						next = num;
						return true;
					}
				});

				if (curr >= 0) {
					curr = getTargetNode(curr);
					if (!curr) return;
					curr = curr.getBoundingClientRect();
					let top = curr.top - MUPreview.getBoundingClientRect().top;
					let editor = MUEditor.parentElement;
					if (editor.scrollHeight > editor.offsetHeight) {
						let percent = editor.scrollTop / (editor.scrollHeight - editor.offsetHeight);
						top -= (editor.getBoundingClientRect().height - curr.height) * percent;
					}
					MUPreview.parentElement.scrollTo({ top, left: 0, behavior: 'smooth' });
				}
				else if (!(prev >= 0) || !(next >= 0)) {
					return;
				}
				else {
					let rate = (linenum - prev) / (next - prev);
					prev = getTargetNode(prev);
					if (!prev) return;
					next = getTargetNode(next);
					if (!next) return;

					prev = prev.getBoundingClientRect();
					next = next.getBoundingClientRect();

					let max = next.top + next.height - prev.top;
					let top = prev.top + max * rate - MUPreview.getBoundingClientRect().top;

					let editor = MUEditor.parentElement;
					let percent = editor.scrollHeight > editor.offsetHeight ? editor.scrollTop / (editor.scrollHeight - editor.offsetHeight) : 0;
					top -= editor.getBoundingClientRect().height * percent;
					MUPreview.parentElement.scrollTo({ top, left: 0, behavior: 'smooth' });
				}
			};
			const onWheel = () => {
				if (!!mover) {
					clearTimeout(mover);
					mover = null;
				}
				mover = setTimeout(onMoved, 100);
			};
			const markupDoc = async (content) => {
				var markup = await MarkUp.fullParse(content, {
					showtitle: true,
					classname: 'markup-content',
				});
				MUPreview.innerHTML = markup.content;
				MUToolbar.uiWordCount.innerText = markup.wordCount;
				FileTitle = markup.title;
				await afterMarkUp();
			};

			HistoryManager.editor = MUEditor;
			MUEditor.addEventListener('keydown', onKey);
			MUEditor.addEventListener('keyup', onChange);
			MUEditor.addEventListener('paste', onPaste);
			MUEditor.addEventListener('blur', onBlur);
			MUEditor.parentNode.addEventListener('mousewheel', onWheel);
			MUEditor.parentNode.addEventListener('scroll', onWheel);
			MUEditor.addEventListener('drop', onDrop);
			MUPreview.addEventListener('drop', onDrop);
			FileLoader.addEventListener('change', readFile);
			document.execCommand("defaultParagraphSeparator", false, "br");
			document.execCommand("insertbronreturn", false, true);
			MUToolbar.uiWordCount = MUToolbar.querySelector('div.wordcount-hint span.count');
		};
	}
}) ();