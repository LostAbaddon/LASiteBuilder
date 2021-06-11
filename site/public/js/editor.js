const BlockLevelTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'blockquote', 'ul', 'ol', 'li', 'article', 'section', 'dl', 'table', 'tbody', 'thead', 'tr', 'form', 'caption', 'legend', 'main', 'aside', 'nav', 'footer', 'header'].map(s => s.toUpperCase());
const DefaultFontAwesomeIcons = ["glass", "music", "search", "envelope", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "pencil", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "plus", "minus", "asterisk", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "bar-chart", "twitter-sign", "facebook-sign", "camera-retro", "key", "cogs", "comments", "thumbs-up", "thumbs-down", "star-half", "heart-empty", "signout", "linkedin-sign", "pushpin", "external-link", "signin", "trophy", "github-sign", "upload-alt", "lemon", "phone", "check-empty", "bookmark-empty", "phone-sign", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd", "bullhorn", "bell", "certificate", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-left", "circle-arrow-right", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "group", "link", "cloud", "beaker", "cut", "copy", "paper-clip", "save", "sign-blank", "reorder", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-sign", "google-plus-sign", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "sort", "sort-down", "sort-up", "envelope-alt", "linkedin", "undo", "legal", "dashboard", "comment-alt", "comments-alt", "bolt", "sitemap", "umbrella", "paste", "lightbulb", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-alt", "coffee", "food", "file-alt", "building", "hospital", "ambulance", "medkit", "fighter-jet", "beer", "h-sign", "plus-sign-alt", "double-angle-left", "double-angle-right", "double-angle-up", "double-angle-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "circle-blank", "quote-left", "quote-right", "spinner", "circle", "reply"];
const AvailableColors = ['red', 'green', 'blue', 'yellow', 'gold', 'white', 'silver', 'gray', 'dark', 'black'];
const ColorHeadMarkReg = new RegExp('\\[(' + AvailableColors.join('|') + ')\\]');
const ColorTailMark = '[/]';
const QuoteTypes = ['quote', 'info', 'success', 'warning', 'danger'];
const HeaderLevel = { '=': 6, '-': 5, '+': 4, '_': 4, '*': 3, '#': 2, '.': 1 };

const MenuConfig = [
	[
		{
			name: '保存',
			icon: 'save',
			action: 'save-article',
			shortcut: 'ctrl+S'
		},
		{
			name: '打开本地文档',
			icon: 'file',
			action: 'open-article',
			shortcut: 'ctrl+O'
		},
		"line",
		{
			name: '下载',
			icon: 'download',
			action: 'download-file',
			shortcut: 'ctrl+alt+S'
		},
		{
			name: '打开本地文档',
			icon: 'upload',
			action: 'upload-file',
			shortcut: 'ctrl+alt+O'
		},
		"line",
		{
			name: '新建空文档',
			icon: 'file',
			action: 'NewFile',
			shortcut: 'ctrl+N'
		},
	],
	"line",
	[
		{
			name: '加粗',
			icon: 'bold',
			action: 'bold',
			shortcut: 'ctrl+B'
		},
		{
			name: '斜体',
			icon: 'italic',
			action: 'italic',
			shortcut: 'ctrl+I'
		},
		{
			name: '下划线',
			icon: 'underline',
			action: 'underline',
			shortcut: 'alt+U'
		},
		{
			name: '波浪线',
			icon: 'water',
			action: 'wavy',
			shortcut: 'alt+W'
		},
		{
			name: '删除线',
			icon: 'strikethrough',
			action: 'throughLine',
			shortcut: 'alt+D'
		},
		"line",
		[
			{
				name: '红色',
				icon: 'color red',
				action: 'red'
			},
			{
				name: '绿色',
				icon: 'color green',
				action: 'green'
			},
			{
				name: '蓝色',
				icon: 'color blue',
				action: 'blue'
			},
			{
				name: '黄色',
				icon: 'color yellow',
				action: 'yellow'
			},
			{
				name: '金色',
				icon: 'color gold',
				action: 'gold'
			},
			{
				name: '白色',
				icon: 'color white',
				action: 'white'
			},
			{
				name: '银色',
				icon: 'color silver',
				action: 'silver'
			},
			{
				name: '灰色',
				icon: 'color gray',
				action: 'gray'
			},
			{
				name: '深色',
				icon: 'color dark',
				action: 'dark'
			},
			{
				name: '黑色',
				icon: 'color black',
				action: 'black'
			},
		],
		"line",
		{
			name: '上标',
			icon: 'superscript',
			action: 'sup',
			shortcut: 'alt+P'
		},
		{
			name: '下标',
			icon: 'subscript',
			action: 'sub',
			shortcut: 'alt+B'
		},
		"line",
		{
			name: '大一号',
			icon: 'sort-amount-up',
			action: 'sizeUp',
			shortcut: 'ctrl+Up'
		},
		{
			name: '小一号',
			icon: 'sort-amount-down',
			action: 'sizeDown',
			shortcut: 'ctrl+Down'
		},
	],
	[
		{
			name: '脚注',
			icon: 'paragraph',
			action: 'footnote',
			shortcut: 'alt+F'
		},
		{
			name: '尾注',
			icon: 'scroll',
			action: 'endnote',
			shortcut: 'alt+E'
		},
		{
			name: '术语',
			icon: 'pen-nib',
			action: 'term',
			shortcut: 'alt+T'
		},
		{
			name: '锚点',
			icon: 'map-pin',
			action: 'anchor',
			shortcut: 'alt+A'
		},
		"line",
		{
			name: '行内代码',
			icon: 'code',
			action: 'convert-code',
			shortcut: 'alt+C'
		},
		{
			name: '行内公式',
			icon: 'square-root-alt',
			action: 'convert-latex',
			shortcut: 'alt+L'
		},
		"line",
		{
			name: '插入图标',
			icon: 'flag',
			action: 'insert-icon'
		},
	],
	"line",
	[
		[
			{
				name: '一级标题',
				icon: 'heading one',
				action: 'heading-1',
				shortcut: 'alt+H'
			},
			{
				name: '二级标题',
				icon: 'heading two',
				action: 'heading-2'
			},
			{
				name: '三级标题',
				icon: 'heading three',
				action: 'heading-3'
			},
			{
				name: '四级标题',
				icon: 'heading four',
				action: 'heading-4'
			},
			{
				name: '五级标题',
				icon: 'heading five',
				action: 'heading-5'
			},
			{
				name: '六级标题',
				icon: 'heading six',
				action: 'heading-6'
			},
		],
		"line",
		[
			{
				name: '普通引用',
				icon: 'quote-right',
				action: 'quote-quote'
			},
			{
				name: '信息引用',
				icon: 'quote-left',
				action: 'quote-info'
			},
			{
				name: '提醒引用',
				icon: 'angle-double-right font green',
				action: 'quote-success'
			},
			{
				name: '警告引用',
				icon: 'angle-right',
				action: 'quote-warning'
			},
			{
				name: '报错引用',
				icon: 'angle-double-right font red',
				action: 'quote-danger'
			},
		],
		[
			{
				name: '无序列表',
				icon: 'list-ul',
				action: "list-ul"
			},
			{
				name: '有序列表',
				icon: 'list-ol',
				action: 'list-ol'
			},
		],
		{
			name: '表格',
			icon: 'table',
			action: 'insert-table'
		},
		"line",
		{
			name: '代码',
			icon: 'code',
			action: 'insert-code',
			shortcut: 'ctrl+alt+C'
		},
		{
			name: '公式',
			icon: 'square-root-alt',
			action: 'insert-latex',
			shortcut: 'ctrl+alt+L'
		},
	],
	[
		{
			name: '层进',
			icon: 'indent',
			action: 'TabIndent'
		},
		{
			name: '层出',
			icon: 'outdent',
			action: 'TabOutdent'
		},
		"line",
		{
			name: '左对齐',
			icon: 'align-left',
			action: 'align-left'
		},
		{
			name: '居中',
			icon: 'align-center',
			action: 'align-center'
		},
		{
			name: '右对齐',
			icon: 'align-right',
			action: 'align-right'
		},
		"line",
		{
			name: '缩进',
			icon: 'indent font blue',
			action: 'indent',
			shortcut: 'ctrl+alt+Right'
		},
		{
			name: '退出',
			icon: 'outdent font blue',
			action: 'outdent',
			shortcut: 'ctrl+alt+Left'
		},
	],
	"line",
	[
		{
			name: '插入超链接',
			icon: 'link',
			action: 'insert-link',
			shortcut: 'alt+K'
		},
		{
			name: '插入图片',
			icon: 'image',
			action: 'insert-image'
		},
		{
			name: '插入视频',
			icon: 'video',
			action: 'insert-video'
		},
		{
			name: '插入音频',
			icon: 'music',
			action: 'insert-audio'
		},
	],
	[
		{
			name: '普通分隔线',
			icon: 'minus',
			action: 'headline-normal'
		},
		{
			name: '双层分隔线',
			icon: 'grip-lines',
			action: 'headline-double'
		},
		{
			name: '虚线',
			icon: 'ellipsis-h',
			action: 'headline-dotted'
		},
		{
			name: '点划线',
			icon: 'window-minimize',
			action: 'headline-dashed'
		},
		{
			name: '渐变线',
			icon: 'icicles',
			action: 'headline-gradient'
		},
		{
			name: '交叉线',
			icon: 'grip-horizontal',
			action: 'headline-wavy'
		},
		{
			name: '圈隔线',
			icon: 'genderless',
			action: 'headline-star'
		},
	],
	"line",
	{
		name: '插入引用块',
		icon: 'vector-square',
		action: 'insert-block'
	},
	"line",
	{
		name: '预览',
		icon: 'eye',
		action: 'preview',
	},
	"line",
	{
		name: '帮助文档',
		icon: 'info-circle',
		action: 'help',
		shortcut: 'ctrl+H'
	},
	"line",
	{
		name: '关闭本文档',
		icon: 'times-circle',
		action: 'close'
	}
];
const Shortcuts = {
	"Enter": "Enter",
	"Tab": "TabIndent",
	"shift+Tab": "TabOutdent",
	"ctrl+Tab": "TabOutdent",
	"ctrl+alt+Up": "BlockUp",
	"ctrl+alt+Down": "BlockDown",
	"ctrl+shift+Up": "BlockUp",
	"ctrl+shift+Down": "BlockDown",
	// "ctrl+D": "deleteLine",
	"ctrl+Z": "Undo",
	"ctrl+Y": "Redo",
};

const newID = (len=32) => {
	var result = [];
	for (let i = 0; i < len; i ++) {
		result.push(Math.floor(Math.random() * 36).toString(36));
	}
	return result.join('');
};

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
	constructor (menus) {
		this.btn = new MenuItem('', '', '');
		this.btn.container = this;
		this.group = newEle('div', 'menu-group-area');
		this.ui = newEle('div', 'menu-group');
		this.ui.appendChild(this.btn.ui);
		this.ui.appendChild(this.group);
		menus.forEach(menu => {
			if (menu === 'line') {
				this.add(new MenuLine());
			}
			else if (Array.is(menu)) {
				this.add(new MenuGroup(menu));
			}
			else if (!!menu.name && !!menu.action) {
				let para = [menu.name, menu.icon || menu.action, menu.action];
				if (!!menu.shortcut) para.push(menu.shortcut);
				this.add(...para);
			}
		});
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
	constructor (menus, hooker) {
		this.ui = newEle('div', 'menu-bar');
		this.hooker = hooker;
		menus.forEach(menu => {
			if (menu === 'line') {
				this.add(new MenuLine());
			}
			else if (Array.is(menu)) {
				this.add(new MenuGroup(menu));
			}
			else if (!!menu.name && !!menu.action) {
				let para = [menu.name, menu.icon || menu.action, menu.action];
				if (!!menu.shortcut) para.push(menu.shortcut);
				this.add(...para);
			}
		});
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

class HistoryManager {
	index = -1;
	memory = [];
	reset (content=null) {
		this.memory.splice(0, this.memory.length);
		if (content === null) {
			this.index = -1;
		}
		else {
			this.index = 0;
			this.memory[0] = [content, 0, 0, 0, 0];
		}
	}
	add (content, startLine, startPos, endLine, endPos) {
		this.index ++;
		this.memory.splice(this.index, this.memory.length);
		this.memory[this.index] = [content, startLine, startPos, endLine, endPos];
	}
	undo () {
		if (this.index <= 0) return;
		this.index --;
		return this.memory[this.index];
	}
	redo () {
		if (this.index >= this.memory.length - 1) return;
		this.index ++;
		return this.memory[this.index];
	}
}

class Editor extends EventEmitter {
	Editor = null;
	Toolbar = null;
	Shortcuts = new Map();
	WordCountHint = null;
	MenuBar = null;
	ActionHandlers = new Map();
	Memory = new HistoryManager();
	LineHeadPrefix = /^[ 　\t]+/;

	imeOn = false;
	lastContent = '';
	contentChanged = false;
	tmrChanger = null;
	lastRange = null;

	constructor (config) {
		super();

		if (!config.ui?.editor) return;

		// 初始化编辑器UI
		this.Editor = String.is(config.ui.editor) ? document.querySelector(config.ui.editor) : config.ui.editor;
		document.execCommand("defaultParagraphSeparator", false, "p");
		document.execCommand("insertbronreturn", false, false);
		this.Editor.addEventListener('keydown', evt => this.onKeyDown(evt));
		this.Editor.addEventListener('keyup', evt => this.onKeyUp(evt));
		this.Editor.addEventListener('compositionstart', evt => this.onIMEStart(evt));
		this.Editor.addEventListener('compositionend', evt => this.onIMEEnd(evt));
		this.Editor.addEventListener('drop', evt => this.onDrop(evt));
		this.Editor.addEventListener('copy', evt => this.onCopy(evt));
		this.Editor.addEventListener('cut', evt => this.onCut(evt));
		this.Editor.addEventListener('paste', evt => this.onPaste(evt));
		this.Editor.addEventListener('blur', evt => this.onBlur(evt));
		this.Editor.parentElement.addEventListener('mousewheel', evt => this.onWheel(evt));
		this.Editor.parentElement.addEventListener('scroll', evt => this.onWheel(evt));
		if (this.Editor.innerText === '') this.clear();

		this.WordCountHint = String.is(config.ui.wordcount) ? document.querySelector(config.ui.wordcount) : config.ui.wordcount;
		this.WordCountHint.innerText = 0;

		// 初始化工具栏菜单
		if (!!config.ui?.toolbar) {
			this.Toolbar = String.is(config.ui.toolbar) ? document.querySelector(config.ui.toolbar) : config.ui.toolbar;
			this.MenuBar = new MenuBar(config.toolbar, (...args) => this.actionHandler(...args));
			this.Toolbar.appendChild(this.MenuBar.ui);
			let shorts = this.MenuBar.getShortcuts();
			Object.keys(shorts).forEach(key => this.addShortcut(key, shorts[key]));
		}

		// 初始化快捷键，会覆盖菜单快捷键
		if (!!config.shortcuts) {
			for (let key in config.shortcuts) {
				this.addShortcut(key, config.shortcuts[key]);
			}
		}

		// 注册基础任务
		this.addHandler('TabIndent', (editor, fromKB, data) => {
			return this.blockIndent(editor, true);
		});
		this.addHandler('TabOutdent', (editor, fromKB, data) => {
			return this.blockIndent(editor, false);
		});
		this.addHandler('BlockUp', (editor, fromKB, data) => {
			return this.moveBlock(editor, true);
		});
		this.addHandler('BlockDown', (editor, fromKB, data) => {
			return this.moveBlock(editor, false);
		});
		this.addHandler('Enter', (editor, fromKB, data) => {
			return this.insertNewLine();
		});
		this.addHandler('Undo', (editor, fromKB, data) => {
			return this.recallMemory(true);
		});
		this.addHandler('Redo', (editor, fromKB, data) => {
			return this.recallMemory(false);
		});
		this.addHandler('NewFile', (editor, fromKB, data) => {
			this.newFile();
			return true;
		});

		// 处理参数中的任务
		for (let action in config.callback) {
			this.addHandler(action, config.callback[action]);
		}
	}
	clear () {
		this.Memory.reset('');
		this.lastContent = '';
		this.contentChanged = false;
		this.initialBlankContent(true);
	}
	read (content) {
		this.Memory.reset(content);
		this.lastContent = content;
		this.contentChanged = false;

		var fragment = document.createDocumentFragment();
		fragment.appendChild(newEle('div'));
		var root = fragment.firstChild;
		content.split('\n').forEach((line, i) => {
			var p = newEle('p');
			if (line.length === 0) {
				p.innerHTML = '<br>';
			}
			else {
				p.innerText = line;
			}
			root.appendChild(p);
		});
		this.Editor.innerHTML = root.innerHTML;

		this.requestContentUpdate(true, false);
		this.actionHandler('ContentUpdated', false, content);
	}
	newFile () {
		this.clear();
		this.actionHandler('ContentUpdated', false, '');
	}
	addShortcut (key, action) {
		this.Shortcuts.set(key, action);
	}
	addHandler (action, handler) {
		this.ActionHandlers.set(action, handler);
	}
	actionHandler (action, fromKB=false, ...data) {
		if (!fromKB) this.restoreRange();
		var handler = this.ActionHandlers.get(action);
		if (!handler) return;
		return handler(this, fromKB, ...data);
	}
	initialBlankContent (focus=false) {
		this.Editor.innerHTML = '<p><br/></p>';
		if (focus) this.Editor.querySelector('p').focus();
	}
	getLines () {
		return [].filter.call(this.Editor.children, n => {
			if (n.tagName === 'P') return true;
		});
	}
	getContent () {
		var content = [];
		for (let node of this.Editor.childNodes) {
			if (!node.tagName && node.nodeName !== '#text') continue;
			var ctx = '';
			if (node.tagName !== "BR") ctx = node.textContent || node.innerText;
			if (ctx !== undefined && ctx !== null) content.push(ctx.replace(/\n+/, ''));
		}
		content = content.join('\n');
		return content;
	}
	optimizeContent () {
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);
		if (!range) return [null, 0, null, 0, 0, 0];

		// 标记位置
		var selStart, selEnd;
		if (range.collapsed) {
			selStart = '[[' + newID() + '|OMNI]]';
			selEnd = null;
			Editor.insertHTML(selStart);
		}
		else {
			selStart = '[[' + newID() + '|START]]';
			selEnd = '[[' + newID() + '|END]]';
			let r = document.createRange();
			r.setStart(range.endContainer, range.endOffset);
			r.setEnd(range.endContainer, range.endOffset);
			selection.removeAllRanges();
			selection.addRange(r);
			Editor.insertHTML(selEnd);
			r.setStart(range.startContainer, range.startOffset);
			r.setEnd(range.startContainer, range.startOffset);
			selection.removeAllRanges();
			selection.addRange(r);
			Editor.insertHTML(selStart);
		}

		// 重新整理内容
		var fragment = document.createDocumentFragment();
		fragment.appendChild(newEle('div'));
		var root = fragment.firstChild;
		var startIndex = -1, endIndex = -1, startPos = -1, endPos = -1;
		var content = [];
		for (let node of this.Editor.childNodes) {
			if (!node.tagName && node.nodeName !== '#text') continue;
			var ctx = '';
			if (node.tagName !== "BR") ctx = node.textContent || node.innerText;
			if (ctx !== undefined && ctx !== null) content.push(ctx.replace(/\n+/, ''));
		}
		content.forEach((line, i) => {
			var p = newEle('p');
			if (line.length === 0) {
				p.innerHTML = '<br>';
			}
			else {
				p.innerText = line;
				let pos = line.indexOf(selStart);
				if (pos >= 0) {
					startIndex = i;
					startPos = pos;
				}
				if (!!selEnd) {
					pos = line.indexOf(selEnd);
					if (pos >= 0) {
						endIndex = i;
						endPos = pos;
					}
				}
			}
			root.appendChild(p);
		});

		// 如果存在改变
		if (this.Editor.innerHTML !== root.innerHTML) {
			this.Editor.innerHTML = root.innerHTML;
		}

		// 恢复选区
		var startLine = null, endLine = null;
		var lines = this.Editor.children;
		if (!selEnd) {
			if (startIndex >= 0) {
				startLine = lines.item(startIndex);
				startLine.innerText = startLine.textContent.replace(selStart, '');
				if (startLine.innerText === "") startLine.innerHTML = '<br>';
				endLine = startLine;
				endPos = startPos;
			}
			else {
				return [null, 0, null, 0, 0, 0];
			}
		}
		else {
			if (startIndex >= 0 && endIndex >= startIndex) {
				startLine = lines.item(startIndex);
				endLine = lines.item(endIndex);
				startLine.innerText = startLine.textContent.replace(selStart, '');
				if (startLine.innerText === "") startLine.innerHTML = '<br>';
				endLine.innerText = endLine.innerText.replace(selEnd, '');
				if (endLine.innerText === "") endLine.innerHTML = '<br>';
				if (startIndex === endIndex) endPos -= selStart.length;
			}
			else {
				return [null, 0, null, 0, 0, 0];
			}
		}

		var startNode = startLine.childNodes.item(0);
		var endNode = endLine.childNodes.item(0);
		try {
			range.setStart(startNode, startPos);
			range.setEnd(endNode, endPos);
			selection.removeAllRanges();
			selection.addRange(range);
		}
		catch {
			return [startLine, 0, endLine, 0, startIndex, endIndex];
		}
		return [startLine, startPos, endLine, endPos, startIndex, endIndex];
	}
	onKeyDown (evt) {
		if (this.imeOn) return; // 如果是在输入法中进行的输入，则一律不做理会

		// 不处理功能键
		if ([16, 17, 18, 91].includes(evt.which)) {
			return;
		}

		if (this.Editor.children.length === 0) {
			this.initialBlankContent(true);
		}

		if (evt.which === 13) {
			this.onEnter(evt);
			return;
		}

		// 如果是快捷键，则终止默认浏览器行为
		var keyPair = Editor.getKeyPair(evt);
		if (this.Shortcuts.has(keyPair)) evt.preventDefault();
	}
	onKeyUp (evt) {
		if (this.imeOn) return; // 如果是在输入法中进行的输入，则一律不做理会

		// 不处理功能键
		if ([16, 17, 18, 91].includes(evt.which)) {
			return;
		}

		// 快捷键处理
		var keyPair = Editor.getKeyPair(evt);
		var action = this.Shortcuts.get(keyPair);
		if (!!action) {
			if (!!this.actionHandler(action, true)) {
				evt.preventDefault();
				return;
			}
		}
		if (['ESC', 'Up', 'Down', 'Left', 'Right'].indexOf(keyPair) < 0) {
			this.contentChanged = true;
			// 延时触发内容改变事件
			this.requestContentUpdate();
		}
	}
	onIMEStart (evt) {
		this.imeOn = true;
	}
	onIMEEnd (evt) {
		this.imeOn = false;
	}
	onDrop (evt) {
		if (!!this.actionHandler('Drop', true, evt)) {
			this.contentChanged = true;
			// 延时触发内容改变事件
			this.requestContentUpdate();
			evt.preventDefault();
		}
	}
	onCopy (evt) {
		var selection = document.getSelection(), range = selection.getRangeAt(0);
		if (!range.collapsed) {
			if (!!evt.clipboardData && !!evt.clipboardData.setData) {
				let lines = [];
				for (let node of range.cloneContents().childNodes) {
					lines.push(node.textContent.replace(/\n/gi, ''));
				}
				lines = lines.join('<br>');
				evt.clipboardData.setData('text/html', lines);
				evt.preventDefault();
			}
			return;
		}

		var line = Editor.getLineOfNode(range.startContainer);
		if (!!evt.clipboardData && !!evt.clipboardData.setData) {
			let content = '<p class="newline">' + line.innerText + '</p>';
			evt.clipboardData.setData('text/html', content);
		}
		else {
			let rng = document.createRange();
			rng.selectNode(line);
			document.execCommand('copy');
		}
		evt.preventDefault();
	}
	onCut (evt) {
		var selection = document.getSelection(), range = selection.getRangeAt(0);
		if (!range.collapsed) {
			if (!!evt.clipboardData && !!evt.clipboardData.setData) {
				let lines = [];
				for (let node of range.cloneContents().childNodes) {
					lines.push(node.textContent.replace(/\n/gi, ''));
				}
				lines = lines.join('<br>');
				evt.clipboardData.setData('text/html', lines);
				Editor.insertHTML('');
				this.contentChanged = true;
				this.requestContentUpdate(true);
				evt.preventDefault();
			}
			return;
		}

		var line = Editor.getLineOfNode(range.startContainer);
		if (!!evt.clipboardData && !!evt.clipboardData.setData) {
			let content = '<p class="newline">' + line.innerText + '</p>';
			evt.clipboardData.setData('text/html', content);
			this.Editor.removeChild(line);
		}
		else {
			let rng = document.createRange();
			rng.selectNode(line);
			document.execCommand('cut');
		}

		this.contentChanged = true;
		this.requestContentUpdate(true);

		evt.preventDefault();
	}
	onPaste (evt) {
		var done = !!this.actionHandler('Paste', true, evt);
		if (!!done) {
			evt.preventDefault();
			return;
		}

		var isBlock = false, lines = [];
		var paste = evt.clipboardData.getData('text/html') || evt.clipboardData.getData('text/plain') || evt.clipboardData.getData('text');
		if (paste.substr(0, 1) === '<') {
			let frag = new DocumentFragment();
			frag.appendChild(newEle('div'));
			frag.firstChild.innerHTML = paste.replace(/\n+/g, '');
			[isBlock, lines] = Editor.getFragmentLines(frag.firstChild);
		}
		else {
			lines = paste.split('\n');
		}

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var rest = endLine.innerText.substring(endOffset), next = endLine.nextSibling;
		var lastLine = startLine;

		var all = this.getLines(), sIdx = all.indexOf(startLine), eIdx = all.indexOf(endLine);
		for (let i = sIdx + 1; i <= eIdx; i ++) {
			this.Editor.removeChild(all[i]);
		}

		startLine.innerText = startLine.innerText.substring(0, startOffset);
		if (isBlock) {
			let p = newEle('p');
			let line = lines.shift();
			if (line.length > 0) p.innerText = line;
			else p.innerHTML = '<br>';
			if (!!next) {
				this.Editor.insertBefore(p, next);
			}
			else {
				this.Editor.appendChild(p);
			}
			startLine = p;
			startOffset = 0
			lastLine = p;
		}
		else {
			let line = lines.shift();
			startLine.innerText = startLine.innerText + line;
		}
		lines.forEach(line => {
			line = line || '';
			var p = newEle('p');
			if (line.length > 0) p.innerText = line;
			else p.innerHTML = '<br>';
			if (!!next) {
				this.Editor.insertBefore(p, next);
			}
			else {
				this.Editor.appendChild(p);
			}
			lastLine = p;
		});
		if (rest.length > 0) {
			if (isBlock) {
				let p = newEle('p');
				p.innerText = rest;
				endOffset = 0;
				if (!!next) {
					this.Editor.insertBefore(p, next);
				}
				else {
					this.Editor.appendChild(p);
				}
				lastLine = p;
			}
			else {
				let text = lastLine.innerText;
				if (text === '\n') text = '';
				endOffset = text.length;
				lastLine.innerText = text + rest;
			}
		}
		else {
			endOffset = lastLine.innerText.replace(/^\n+|\n+$/g, '').length;
		}
		endLine = lastLine;

		startLine = startLine.childNodes.item(0);
		endLine = endLine.childNodes.item(0);
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, startOffset);
		range.setEnd(endLine, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		// 延时触发内容改变事件
		this.requestContentUpdate();

		evt.preventDefault();
	}
	onEnter (evt) {
		if (evt.ctrlKey || evt.altKey || evt.shiftKey || evt.metaKey) {
			evt.preventDefault();
			return;
		}
	}
	onEdited (saveHistory=true) {
		if (this.imeOn) return; // 如果是在输入法中进行的输入，则一律不做理会

		// 取消可能存在的下一个timer
		if (!!this.tmrChanger) clearTimeout(this.tmrChanger);
		this.tmrChanger = null;

		if (!this.contentChanged) return;

		// 调整内容，去除不要的标签等。
		var [sLine, sPos, eLine, ePos] = this.optimizeContent();

		// 检查内容是否发生改变
		var content = this.getContent();
		if (content === this.lastContent) return;
		this.lastContent = content;
		this.contentChanged = false;

		this.actionHandler('ContentUpdated', false, content);
		if (!saveHistory) return;

		// 历史记录
		var lines = this.getLines();
		sLine = lines.indexOf(sLine);
		eLine = lines.indexOf(eLine);
		this.Memory.add(content, sLine, sPos, eLine, ePos);
	}
	onBlur (evt) {
		var selection = document.getSelection();
		this.lastRange = selection.getRangeAt(0);
	}
	onWheel (evt) {
		this.actionHandler('Scroll', true, evt)
	}
	recallMemory (undo=true) {
		this.requestContentUpdate(true, true);
		var memory = undo ? this.Memory.undo() : this.Memory.redo();
		if (!memory) return true;
		var [content, sLine, sPos, eLine, ePos] = memory

		// 恢复内容
		var fragment = document.createDocumentFragment();
		fragment.appendChild(newEle('div'));
		var root = fragment.firstChild;
		content.split('\n').forEach((line, i) => {
			var p = newEle('p');
			if (line.length === 0) {
				p.innerHTML = '<br>';
			}
			else {
				p.innerText = line;
			}
			root.appendChild(p);
		});
		this.Editor.innerHTML = root.innerHTML;

		// 恢复恢复选区
		sLine = this.Editor.children.item(sLine);
		if (!sLine) return true;
		sLine = sLine.childNodes.item(0);
		if (!sLine) return true;
		eLine = this.Editor.children.item(eLine);
		if (!eLine) return true;
		eLine = eLine.childNodes.item(0);
		if (!eLine) return true;
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(sLine, sPos);
		range.setEnd(eLine, ePos);
		selection.removeAllRanges();
		selection.addRange(range);

		this.requestContentUpdate(true, false);
		return true;
	}
	requestContentUpdate (immediately=false, saveHistory=true) {
		if (!!this.tmrChanger) clearTimeout(this.tmrChanger);
		if (immediately) {
			this.tmrChanger = null;
			this.onEdited(saveHistory);
		}
		else {
			this.tmrChanger = setTimeout(() => this.onEdited(saveHistory), 1000);
		}
	}
	blockIndent (editor, isIndent=true) {
		// 调整内容，去除不要的标签等。
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();

		var rangeCollapsed = startLine === endLine && startOffset === endOffset;
		if (rangeCollapsed) {
			if (isIndent) {
				Editor.insertHTML('\t');
			}
			else {
				let content = startLine.innerText;
				let bra = content.substring(0, startOffset);
				let ket = content.substring(startOffset, content.length);
				let last = bra.substring(bra.length - 1, bra.length);
				if (last === '\t') {
					bra = bra.substring(0, bra.length - 1);
					content = bra + ket;
					startLine.innerText = content;
					let selection = document.getSelection();
					let range = document.createRange();
					startLine = startLine.childNodes.item(0);
					range.setStart(startLine, startOffset - 1);
					range.setEnd(startLine, startOffset - 1);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
		}
		else {
			let working = false;
			this.getLines().forEach(line => {
				if (line === startLine) working = true;
				if (!working) return;
				let node = line.childNodes.item(0);
				if (!!node && node.tagName !== 'BR') {
					let content = line.innerText;
					if (isIndent) {
						content = '\t' + content;
					}
					else {
						content = content.replace(/^\t/, '');
					}
					line.innerText = content;
				}
				if (line === endLine) working = false;
			});
			startLine = startLine.childNodes.item(0);
			endLine = endLine.childNodes.item(0);
			let selection = document.getSelection();
			let range = document.createRange();
			range.setStart(startLine, 0);
			range.setEnd(endLine, (endLine.textContent || '').length);
			selection.removeAllRanges();
			selection.addRange(range);
		}
		this.requestContentUpdate(true, true);
		return true;
	}
	moveBlock (editor, isUp=true) {
		// 调整内容，去除不要的标签等。
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var lines = this.getLines()
		var startIndex = lines.indexOf(startLine), endIndex = lines.indexOf(endLine);
		if (startIndex < 0 || endIndex < 0) return false;
		if (startIndex === 0 && isUp) return false;
		if (endIndex === lines.length - 1 && !isUp) return false;
		var target, next;
		if (isUp) {
			target = lines[startIndex - 1];
			if (!target) return false;
			next = lines[endIndex + 1];
			if (!next) {
				this.Editor.appendChild(target);
			}
			else {
				this.Editor.insertBefore(target, next);
			}
		}
		else {
			target = lines[endIndex + 1];
			if (!target) return false;
			next = lines[startIndex];
			this.Editor.insertBefore(target, next);

		}

		startLine = startLine.childNodes.item(0);
		endLine = endLine.childNodes.item(0);
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, 0);
		range.setEnd(endLine, (endLine.textContent || '').length);
		selection.removeAllRanges();
		selection.addRange(range);
		this.requestContentUpdate(true, true);
		return true;
	}
	insertNewLine () {
		// 调整内容，去除不要的标签等。
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (!startLine || !endLine) return;
		var selection = document.getSelection(), range = selection.getRangeAt(0);
		var lastLine = startLine.previousSibling;
		if (!lastLine) return;
		var content = lastLine.textContent.replace(/^\n+|\n+$/g, '');
		var head = content.match(this.LineHeadPrefix);
		if (!head || head[0].length === 0) return;
		head = head[0];
		if (content === head) {
			this.Editor.removeChild(lastLine);
			range.setStart(startLine, 0);
			range.setEnd(startLine, 0);
		}
		else {
			let current = startLine.textContent.replace(/^\n+|\n+$/g, '');
			startLine.innerText = head + current;
			startLine = startLine.childNodes.item(0);
			range.setStart(startLine, head.length);
			range.setEnd(startLine, head.length);
		}
		selection.removeAllRanges();
		selection.addRange(range);
		this.requestContentUpdate(true, true);
		return true;
	}
	insertBlock (blocks, needUpdate, startLine, startOffset, endLine, endOffset) {
		if (!startLine) {
			[startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		}

		var left = endLine.textContent;
		left = left.substring(endOffset);
		var content = startLine.textContent.substring(0, startOffset);
		if (content.length === 0) {
			startLine.innerHTML = '<br>';
		}
		else {
			startLine.innerText = content;
		}

		var lines = this.getLines();
		var startIndex = lines.indexOf(startLine);
		var endIndex = lines.indexOf(endLine);
		for (let i = startIndex + 1; i <= endIndex; i ++) {
			this.Editor.removeChild(lines[i]);
		}

		var next = endLine.nextElementSibling;
		if (!next) {
			next = newEle('p');
			if (left.length === 0) {
				next.innerHTML = '<br>';
			}
			else {
				next.innerText = left;
			}
			this.Editor.appendChild(next);
		}
		else {
			let n = newEle('p');
			if (left.length === 0) {
				n.innerHTML = '<br>';
			}
			else {
				n.innerText = left;
			}
			this.Editor.insertBefore(n, next);
			next = n;
		}

		left = newEle('p');
		left.innerHTLM = '<br>';
		this.Editor.insertBefore(left, next);

		if (String.is(blocks)) blocks = [blocks];
		blocks.forEach((line, i) => {
			var p = newEle('p');
			if (line.length === 0) p.innerHTML = '<br>';
			else p.innerText = line;
			this.Editor.insertBefore(p, next);
			if (i === 0) startLine = p;
			endLine = p;
		});

		left = newEle('p');
		left.innerHTLM = '<br>';
		this.Editor.insertBefore(left, next);

		var selection = document.getSelection();
		var range = document.createRange();
		startLine = startLine.childNodes.item(0);
		endLine = endLine.childNodes.item(0);
		range.setStart(startLine, 0);
		range.setEnd(endLine, endLine.textContent.length);
		selection.removeAllRanges();
		selection.addRange(range);

		if (!needUpdate) return true;

		this.contentChanged = true;
		this.requestContentUpdate(true);
		return true;
	}
	restoreRange () {
		if (!this.lastRange) return;
		var selection = document.getSelection();
		try {
			selection.removeAllRanges();
			selection.addRange(this.lastRange);
		}
		catch {}
		this.lastRange = null;
	}
	static insertHTML (html) {
		document.execCommand('insertHTML', false, html);
	}
	static getLineOfNode (node) {
		if (node.tagName === 'P') return node;
		var body = document.body;
		node = node.parentElement;
		while (!!node) {
			if (node.tagName === 'P') break;
			if (node === body) {
				node = null;
				break;
			}
			node = node.parentElement;
		}
		return node;
	}
	static getLinePosition (line, text, offset=0) {
		if (!line.childNodes) return offset;
		var position = 0;
		for (let node of line.childNodes) {
			if (node === text) {
				position += offset;
				return [true, position];
			}
			else if (node.nodeName === '#text') {
				position += node.textContent.length;
			}
			else {
				let [found, pos] = Editor.getLinePosition(node, text, offset);
				position += pos;
				if (found) return [true, position];
			}
		}
		return [false, position];
	}
	static getKeyPair (evt) {
		var keyPair = [];
		if (evt.ctrlKey) keyPair.push('ctrl');
		if (evt.altKey) keyPair.push('alt');
		if (evt.shiftKey) keyPair.push('shift');
		if (evt.winKey) keyPair.push('win');
		if (evt.metaKey) keyPair.push('meta');
		var keyName = evt.key;
		if (keyName.indexOf('Arrow') >= 0) keyName = keyName.replace('Arrow', '');
		else if (evt.which === 27) keyName = 'Esc';
		else if (evt.which === 8) keyName = 'Back';
		else if (evt.which === 9) keyName = 'Tab';
		else if (evt.which === 13) keyName = 'Enter';
		else keyName = keyName.toUpperCase();
		keyPair.push(keyName);
		keyPair = keyPair.join('+');
		return keyPair;
	}
	static getFragmentLines (fragment) {
		var lines = [];
		var line = [];
		var isBlock = false;
		for (let node of fragment.childNodes) {
			let nodeName = node.nodeName;
			if (nodeName === '#text') {
				let content = node.textContent;
				content = content.replace(/^\n+|\n+$/g, '');
				if (content.length === 0) continue;
				content = content.split('\n');
				content.forEach((ctx, i) => {
					line.push(ctx);
					if (i < content.length - 1) {
						if (line.length > 0) {
							lines.push(line);
							line = [];
						}
					}
				});
			}
			else if (nodeName.indexOf('#') >= 0) {
				continue;
			}
			else if (nodeName === 'STYLE' || nodeName === 'SCRIPT') {
				continue;
			}
			else if (nodeName === 'BR') {
				lines.push(line);
				line = [];
			}
			else if (BlockLevelTags.indexOf(nodeName) >= 0) {
				isBlock = true;
				if (line.length > 0) lines.push(line);
				let newLine = !node.classList.contains('newline');
				if (newLine) lines.push([]);
				line = [];
				Editor.getFragmentLines(node)[1].forEach(line => lines.push(line));
				if (newLine) lines.push([]);
			}
			else {
				line.push(node.innerText);
			}
		}
		if (line.length > 0) lines.push(line);
		lines = lines.map(line => Array.is(line) ? line.join('') : line);
		var blankLine = false;
		lines = lines.filter(line => {
			line = line || '';
			if (line.length > 0) {
				blankLine = false;
				return true;
			}
			if (blankLine) return false;
			blankLine = true;
			return true;
		});
		return [isBlock, lines];
	}
}
class MarkupEditor extends Editor {
	Preview = null;
	LineHeadPrefix = /^([ 　\t>\+\*~]|\d+\.[ 　\t]+|\-[ 　\t]+)+/;

	title = 'untitled';
	filename = '';
	lineMap = [];
	tmrScroll = null;
	notAutoUpdateContent = false;

	constructor (config) {
		super(config);

		this.Preview = String.is(config.ui.preview) ? document.querySelector(config.ui.preview) : config.ui.preview;

		this.addHandler('ContentUpdated', (editor, fromKB, content) => {
			if (this.notAutoUpdateContent) return true;

			// 添加行号信息
			content = content.split('\n');
			var isMark = false, isBlock = '';
			this.lineMap.splice(0, this.lineMap.length);
			content = content.map((line, i) => {
				var notLine = false;
				[notLine, isMark, isBlock] = MarkupEditor.notTextLine(line, isMark, isBlock);
				if (notLine) return line;
				var prefix = line.match(/^([ 　`~!@#%^&\*\-_\+=\\\|:;\/\?\.,<>\d\r\t]|(\[\w*\][ 　\t]*(\(.*\))*)|\{[\|<>]*\})*/);
				if (!prefix) prefix = '';
				else prefix = prefix[0];
				var bra = line.substring(0, prefix.length), ket = line.substring(prefix.length, line.length);
				prefix = "%LINENUMBER-" + i + '%';
				this.lineMap.push(i);
				return bra + prefix + ket;
			});
			content = content.join('\n')
			this.markupDoc(content);

			return true;
		});
		this.addHandler('Scroll', editor => {
			if (!!this.tmrScroll) clearTimeout(this.tmrScroll);
			this.tmrScroll = setTimeout(() => this.onScrolled(), 100);
		});

		this.addHandler('bold', editor => {
			return this.togglePair('**');
		});
		this.addHandler('italic', editor => {
			return this.togglePair('*');
		});
		this.addHandler('underline', editor => {
			return this.togglePair('__');
		});
		this.addHandler('wavy', editor => {
			return this.togglePair('~');
		});
		this.addHandler('throughLine', editor => {
			return this.togglePair('~~');
		});
		this.addHandler('sub', editor => {
			return this.togglePair('_');
		});
		this.addHandler('sup', editor => {
			return this.togglePair('^');
		});
		this.addHandler('red', editor => {
			return this.changeColor('red');
		});
		this.addHandler('green', editor => {
			return this.changeColor('green');
		});
		this.addHandler('blue', editor => {
			return this.changeColor('blue');
		});
		this.addHandler('yellow', editor => {
			return this.changeColor('yellow');
		});
		this.addHandler('gold', editor => {
			return this.changeColor('gold');
		});
		this.addHandler('white', editor => {
			return this.changeColor('white');
		});
		this.addHandler('silver', editor => {
			return this.changeColor('silver');
		});
		this.addHandler('gray', editor => {
			return this.changeColor('gray');
		});
		this.addHandler('dark', editor => {
			return this.changeColor('dark');
		});
		this.addHandler('black', editor => {
			return this.changeColor('black');
		});
		this.addHandler('sizeUp', editor => {
			return this.changeSize(true);
		});
		this.addHandler('sizeDown', editor => {
			return this.changeSize(false);
		});

		this.addHandler('footnote', editor => {
			return this.generateMark('脚注', 'footnote');
		});
		this.addHandler('endnote', editor => {
			return this.generateMark('尾注', 'endnote');
		});
		this.addHandler('term', editor => {
			return this.generateMark('术语', 'term');
		});
		this.addHandler('anchor', editor => {
			return this.generateMark('锚点', 'anchor');
		});
		this.addHandler('convert-code', editor => {
			return this.togglePair('`');
		});
		this.addHandler('convert-latex', editor => {
			return this.togglePair('$');
		});
		this.addHandler('insert-icon', editor => {
			return this.generateIcon();
		});

		for (let i = 1; i <= 6; i ++) {
			this.addHandler('heading-' + i, editor => {
				return this.toggleHeader(i);
			});
		}
		QuoteTypes.forEach(type => {
			this.addHandler('quote-' + type, editor => {
				return this.toggleQuote(type);
			});
		});
		['ol', 'ul'].forEach(type => {
			this.addHandler('list-' + type, editor => {
				return this.toggleList(type);
			});
		});
		this.addHandler('insert-table', editor => {
			return this.generateTable();
		});
		this.addHandler('insert-code', editor => {
			return this.insertCodeBlock();
		});
		this.addHandler('insert-latex', editor => {
			return this.insertLaTeX();
		});

		['left', 'center', 'right'].forEach(type => {
			this.addHandler('align-' + type, editor => {
				return this.toggleAlign(type);
			});
		});
		['indent', 'outdent'].forEach(type => {
			this.addHandler(type, editor => {
				return this.toggleIndent(type);
			});
		});

		['link', 'image', 'video', 'audio'].forEach(type => {
			this.addHandler('insert-' + type, editor => {
				return this.generateLink(type);
			});
		});
		['normal', 'double', 'dotted', 'dashed', 'gradient', 'wavy', 'star'].forEach(type => {
			this.addHandler('headline-' + type, editor => {
				return this.insertHeadLine(type);
			});
		});

		this.addHandler('insert-block', editor => {
			return this.generateRefBlock();
		});

		this.addHandler('Paste', (editor, fromKB, event) => {
			var content = event.clipboardData.getData('text/html');
			if (!content) return false;
			MarkUp.reverse(content).then(result => {
				editor.insertBlock(result.split('\n'), true);
			});
			return true;
		});
	}
	clear () {
		this.title = 'untitled';
		this.filename = '';
		super.clear();
	}
	read (content) {
		this.Memory.reset(content);
		this.lastContent = content;
		this.contentChanged = false;

		var fragment = document.createDocumentFragment();
		fragment.appendChild(newEle('div'));
		var root = fragment.firstChild;
		content.split('\n').forEach((line, i) => {
			var p = newEle('p');
			if (line.length === 0) {
				p.innerHTML = '<br>';
			}
			else {
				p.innerText = line;
			}
			root.appendChild(p);
		});
		this.Editor.innerHTML = root.innerHTML;

		this.requestContentUpdate(true, false);
		this.actionHandler('ContentUpdated', false, content);
	}
	newFile () {
		this.clear();
		var content = ['标题：新文档'];
		content.push('更新：' + timeNormalize(new Date()));
		content.push('关键词：未分类');
		content.push('');
		content.push('');
		var text = content.join('\n');
		var html = '<p>' + content.map(l => !!l ? l : '<br>').join('</p><p>') + '</p>';

		this.Editor.innerHTML = html;
		this.Memory.reset(text);
		this.lastContent = text;
		this.contentChanged = false;
		this.actionHandler('ContentUpdated', false, text);
	}
	read (filename, content) {
		this.filename = filename;
		this.title = filename.replace(/\.m[ud]$/i, '');
		super.read(content);
	}
	getBlocks (startLine, endLine) {
		var lines = this.getLines();
		var startIndex = lines.indexOf(startLine), endIndex = lines.indexOf(endLine);

		// 找出段落的首尾位置
		var content = startLine.textContent;
		if (!content) {
			let ok = false;
			for (let i = startIndex + 1; i <= endIndex; i ++) {
				let line = lines[i];
				if (!!line.textContent) {
					ok = true;
					startIndex = i;
					break;
				}
			}
			if (!ok) return [[], 0, 0];
		}
		else {
			for (let i = startIndex - 1; i >= 0; i --) {
				let line = lines[i];
				if (!line.textContent) {
					startIndex = i + 1;
					break;
				}
			}
		}
		content = endLine.textContent;
		if (!content) {
			let ok = false;
			for (let i = endIndex - 1; i >= startIndex; i --) {
				let line = lines[i];
				if (!!line.textContent) {
					ok = true;
					endIndex = i;
					break;
				}
			}
			if (!ok) return [[], 0, 0];
		}
		else {
			for (let i = endIndex + 1; i < lines.length; i ++) {
				let line = lines[i];
				if (!line.textContent) {
					endIndex = i - 1;
					break;
				}
			}
		}

		// 分区
		var blocks = [], block = [];
		for (let i = startIndex; i <= endIndex; i ++) {
			let line = lines[i];
			let ctx = line.textContent;
			if (!!ctx) {
				block.push(line);
			}
			else {
				if (block.length > 0) {
					blocks.push(block);
					block = [];
				}
			}
		}
		if (block.length > 0) {
			blocks.push(block);
		}

		return [blocks, startIndex, endIndex];
	}
	insertNewLine () {
		// 调整内容，去除不要的标签等。
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (!startLine || !endLine) return;
		var selection = document.getSelection(), range = selection.getRangeAt(0);
		var lastLine = startLine.previousSibling;
		if (!lastLine) return;
		var content = lastLine.textContent.replace(/^\n+|\n+$/g, '');
		var head = content.match(this.LineHeadPrefix);
		if (!head || head[0].length === 0) return;
		head = head[0];
		if (content === head) {
			this.Editor.removeChild(lastLine);
			range.setStart(startLine, 0);
			range.setEnd(startLine, 0);
		}
		else {
			head = head.replace(/(\d+)\.([ 　\t]+)$/, (match, num, span) => {
				return (num * 1 + 1) + '.' + span;
			});
			let current = startLine.textContent.replace(/^\n+|\n+$/g, '');
			startLine.innerText = head + current;
			startLine = startLine.childNodes.item(0);
			range.setStart(startLine, head.length);
			range.setEnd(startLine, head.length);
		}
		selection.removeAllRanges();
		selection.addRange(range);
		this.requestContentUpdate(true, true);
		return true;
	}
	togglePair (prefix, pstfix) {
		if (!prefix) return false;
		pstfix = pstfix || prefix;

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 判断是否已经有指定标记
		var content = startLine.textContent;
		var part = content.substring(0, startOffset + prefix.length);
		var has = false;
		var sPos = -1, ePos = -1;

		// 寻找上一个未闭合的起始标记
		if (prefix === pstfix) {
			let poses = MarkupEditor.getAllPartsInLine(prefix, part);
			if (poses.length > (poses.length >> 1) << 1) {
				sPos = poses[poses.length - 1][0];
			}
		}
		else {
			let braes = MarkupEditor.getAllPartsInLine(prefix, part);
			part = content.substring(0, startOffset);
			let ketes = MarkupEditor.getAllPartsInLine(pstfix, part);
			if (braes.length > ketes.length) {
				sPos = braes[braes.length - 1][0];
			}
		}

		// 寻找下一个未闭合的末尾标记
		if (sPos >= 0) {
			part = content.substring(sPos + prefix.length);
			ePos = part.indexOf(pstfix);
			if (ePos >= 0) {
				let sPos2 = part.indexOf(prefix);
				if (sPos2 < 0 || sPos2 >= ePos) {
					has = true;
					ePos += sPos + prefix.length;
				}
				else {
					sPos = -1;
					ePos = -1;
				}
			}
			else {
				sPos = -1;
			}
		}

		// 如果存在闭合对
		if (has) {
			let bra = content.substring(0, sPos);
			let sel = content.substring(sPos + prefix.length, ePos);
			let ket = content.substring(ePos + pstfix.length);
			content = bra + sel + ket;
			startOffset = sPos;
			endOffset = ePos - prefix.length;
		}
		// 如果不存在闭合对
		else {
			let bra = content.substring(0, startOffset);
			let sel = content.substring(startOffset, endOffset);
			let ket = content.substring(endOffset);
			content = bra + prefix + sel + pstfix + ket;
			endOffset += prefix.length + pstfix.length;
		}
		startLine.innerText = content;

		// 活肤选区
		content = startLine.childNodes.item(0);
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(content, startOffset);
		range.setEnd(content, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);
		return true;
	}
	changeColor (color) {
		if (!color) return;
		color = color.toLowerCase();
		if (!AvailableColors.includes(color)) return;

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 判断是否已经有指定标记
		var content = startLine.textContent;
		var has = false;
		var sPos = -1, ePos = -1, lastMark = null;
		color = '[' + color + ']';

		// 寻找上一个未闭合的起始标记
		var part = content.substring(0, endOffset + ColorTailMark.length);
		var braes = MarkupEditor.getAllPartsInLine(ColorHeadMarkReg, part);
		part = content.substring(0, startOffset);
		var ketes = MarkupEditor.getAllPartsInLine(ColorTailMark, part);
		if (braes.length > ketes.length) {
			sPos = braes[braes.length - 1];
			lastMark = sPos[1];
			sPos = sPos[0]
		}

		// 寻找下一个未闭合的末尾标记
		if (sPos >= 0) {
			part = content.substring(sPos + lastMark.length);
			ePos = part.indexOf(ColorTailMark);
			if (ePos >= 0) {
				let sPos2 = part.match(ColorHeadMarkReg);
				if (!sPos2 || sPos2.index >= ePos) {
					has = true;
					ePos += sPos + lastMark.length;
				}
				else {
					sPos = -1;
					ePos = -1;
				}
			}
			else {
				sPos = -1;
			}
		}

		// 如果存在闭合对
		if (has) {
			if (lastMark === color) {
				let bra = content.substring(0, sPos);
				let sel = content.substring(sPos + lastMark.length, ePos);
				let ket = content.substring(ePos + ColorTailMark.length);
				content = bra + sel + ket;
				startOffset = sPos;
				endOffset = ePos - lastMark.length;
			}
			else {
				let bra = content.substring(0, sPos);
				let sel = content.substring(sPos + lastMark.length, ePos);
				let ket = content.substring(ePos + ColorTailMark.length);
				content = bra + color + sel + ColorTailMark + ket;
				startOffset = sPos;
				endOffset = ePos - lastMark.length + color.length + ColorTailMark.length;
			}
		}
		// 如果不存在闭合对
		else {
			let bra = content.substring(0, startOffset);
			let sel = content.substring(startOffset, endOffset);
			let ket = content.substring(endOffset);
			content = bra + color + sel + ColorTailMark + ket;
			endOffset += color.length + ColorTailMark.length;
		}
		startLine.innerText = content;

		// 活肤选区
		content = startLine.childNodes.item(0);
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(content, startOffset);
		range.setEnd(content, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);
		return true;
	}
	changeSize (up=true) {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 判断是否已经有指定标记
		var content = startLine.textContent;
		var level = 0;
		var sPos = -1, ePos = -1, sLev = 0, eLev = 0;

		// 寻找上一个未闭合的起始标记
		var offset = content.substring(startOffset).match(/[^\^]/);
		if (!offset) offset = 0;
		else offset = offset.index;
		var part = content.substring(0, startOffset + offset);
		var poses = MarkupEditor.getAllPartsInLine(/\^{2,}/g, part);
		if ((poses.length >> 1) << 1 !== poses.length) {
			sPos = poses.last;
			sLev = sPos[1].length;
			sPos = sPos[0]
		}

		// 寻找下一个未闭合的末尾标记
		if (sPos >= 0) {
			part = content.substring(sPos + sLev);
			ePos = part.match(/\^{2,}/);
			if (!!ePos) {
				eLev = ePos[0].length;
				ePos = ePos.index + sPos + sLev;
			}
			else {
				sPos = -1;
				sLev = 0;
			}
		}
		level = Math.min(sLev, eLev);
		if (level === 0 && !up) return true;
		if (level >= 5 && up) return true;
		if (level > 5) level = 5;

		if (sPos < 0 || ePos < 0) {
			sPos = startOffset;
			ePos = endOffset;
		}

		if (up) {
			level ++;
			if (level > 5) level = 5;
			if (level < 2) level = 2;
		}
		else {
			level --;
			if (level > 5) level = 5;
			if (level < 2) level = 0;
		}
		var mark = String.blank(level, '^');
		var bra = content.substring(0, sPos);
		var sel = content.substring(sPos + sLev, ePos);
		var ket = content.substring(ePos + eLev);
		content = bra + mark + sel + mark + ket;
		startOffset = sPos;
		endOffset = sPos + sel.length + 2 * level;
		startLine.innerText = content;

		// 活肤选区
		content = startLine.childNodes.item(0);
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(content, startOffset);
		range.setEnd(content, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);
		return true;
	}
	generateMark (title, key) {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 保存选区
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);

		showInfobox({
			title: "插入" + title,
			input: true,
			action: 'oc',
			callback: (result, value, infoBox) => {
				this.lastRange = null;
				selection.removeAllRanges();
				selection.addRange(range);
				range = null;
				if (result === 'cancel' || !value) return;
				this.insertMark(key, value, startLine, startOffset, endLine, endOffset);
			}
		});
		return true;
	}
	insertMark (key, mark, startLine, startOffset, endLine, endOffset) {
		if (!mark) return;

		if (!startLine) {
			[startLine, startOffset, endLine, endOffset] = this.optimizeContent();
			if (startLine !== endLine) return false;
		}

		var content = startLine.textContent;
		var bra = content.substring(0, startOffset);
		var sel = content.substring(startOffset, endOffset);
		var ket = content.substring(endOffset);

		var tag1 = '', tag2 = '', pre = 0, pst = 0;
		if (!!sel && sel.length > 0) {
			tag1 = '[' + sel + ']';
		}

		if (key === 'footnote') {
			tag2 = '[:' + mark + ']';
			pre = 2;
			pst = 1;
		}
		else if (key === 'endnote') {
			tag2 = '[^' + mark + ']';
			pre = 2;
			pst = 1;
		}
		else {
			tag2 = '{' + mark + '}';
			pre = 1;
			pst = 1;
		}
		content = bra + tag1 + tag2 + ket;
		startLine.innerText = content;

		if (key === 'anchor') {
			startOffset = bra.length + tag1.length + pre;
			endOffset = startOffset + mark.length;
		}
		else {
			let p = newEle('p');
			let blank = newEle('p');
			let hint = '[' + mark + ']: '
			p.innerHTML = hint;
			blank.innerHTML = '<br>';
			let next = startLine.nextSibling;
			if (!!next) {
				this.Editor.insertBefore(blank, next);
			}
			else {
				this.Editor.appendChild(blank);
			}
			this.Editor.insertBefore(p, blank);
			startLine = p;
			startOffset = hint.length;
			endOffset = startOffset;
		}

		var selection = document.getSelection();
		var range = document.createRange();
		startLine = startLine.childNodes.item(0);
		range.setStart(startLine, startOffset);
		range.setEnd(startLine, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);
	}
	generateIcon () {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 保存选区
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);

		showInfobox({
			title: "插入 FontAwesome 图标",
			input: true,
			action: 'oc',
			callback: (result, value, infoBox) => {
				this.lastRange = null;
				selection.removeAllRanges();
				selection.addRange(range);
				range = null;
				if (result === 'cancel' || !value) return;
				this.insertIcon(value, startLine, startOffset, endLine, endOffset);
			}
		});
		return true;
	}
	insertIcon (icon, startLine, startOffset, endLine, endOffset) {
		if (!icon) return;

		if (!startLine) {
			[startLine, startOffset, endLine, endOffset] = this.optimizeContent();
			if (startLine !== endLine) return false;
		}

		var content = startLine.textContent;
		var bra = content.substring(0, startOffset);
		var ket = content.substring(endOffset);
		var sel = ' :' + icon + ': ';
		startLine.innerText = bra + sel + ket;

		var selection = document.getSelection();
		var range = document.createRange();
		startLine = startLine.childNodes.item(0);
		range.setStart(startLine, bra.length);
		range.setEnd(startLine, bra.length + sel.length);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);
	}
	generateTable () {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();

		// 保存选区
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);

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
				this.lastRange = null;
				selection.removeAllRanges();
				selection.addRange(range);
				range = null;
				if (result === 'cancel') return;

				var el = infoBox.$refs.content;
				var row = el.querySelector('input.row-count');
				var col = el.querySelector('input.col-count');
				this.insertTable(row.value || 2, col.value || 2, startLine, startOffset, endLine, endOffset);
			}
		});
		return true;
	}
	insertTable (row, col, startLine, startOffset, endLine, endOffset) {
		if (!(row > 0) || !(col > 0)) return;

		var table = [];
		var line = [];
		for (let i = 1; i <= col; i ++) {
			line.push('标题' + i);
		}
		table.push(line.join('|'));
		line = [];
		for (let i = 0; i < col; i ++) {
			line.push('-');
		}
		table.push(line.join('|'));
		for (let r = 0; r < row; r ++) {
			line = [];
			for (let i = 0; i < col; i ++) {
				line.push('  ');
			}
			table.push(line.join('|'));
		}
		this.insertBlock(table, true, startLine, startOffset, endLine, endOffset);
	}
	toggleHeader (level) {
		if (!(level >= 0 && level <= 6)) return false;

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		var multi = false, current = 0;
		var content = startLine.textContent;
		if (!content) return false;

		// 如果疑似下划线标记
		if (content.match(/^(\-{3,}|={3,}|\+{3,}|_{3,}|\*{3,}|#{3,}|\.{3,})$/)) {
			let char = content.substring(0, 1);
			let curr = HeaderLevel[char] || 0;
			startLine = startLine.previousSibling;
			if (!startLine) return false;
			content = startLine.textContent;
			if (!content || content.match(/^[ 　\t\-=\+\*>`\$#]*$/)) return false;
			let c = content.match(/^#+/);
			if (!!c && !!c[0] && c[0].length > 0) c = 7 - c[0].length;
			else c = 0;
			current = Math.max(curr, c);
			multi = true;
		}
		// 如果疑似行首标记
		else {
			let c = content.match(/^#+/);
			if (!!c && !!c[0] && c[0].length > 0) c = 7 - c[0].length;
			else c = 0;
			let next = startLine.nextSibling;
			if (!!next) {
				let ctx = next.textContent;
				if (ctx.match(/^(\-{3,}|={3,}|\+{3,}|_{3,}|\*{3,}|#{3,}|\.{3,})$/)) {
					multi = true;
					let char = content.substring(0, 1);
					let curr = HeaderLevel[char] || 0;
					current = Math.max(c, curr);
					endLine = next;
				}
				else {
					current = c;
				}
			}
			else {
				current = c;
			}
		}
		if (current > 0) current = 7 - current;

		if (current === level) {
			if (level === 0) return false;
			level = 0;
		}

		if (multi) this.Editor.removeChild(endLine);
		content = startLine.textContent.replace(/^#+[ 　\t]*/, '');
		startLine.innerText = String.blank(level, '#') + (level > 0 ? ' ' : '') + content;
		startOffset = level;
		if (level > 0) startOffset++;
		endOffset = startOffset + content.length;

		var selection = document.getSelection();
		var range = document.createRange();
		startLine = startLine.childNodes.item(0);
		range.setStart(startLine, startOffset);
		range.setEnd(startLine, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);

		return true;
	}
	toggleQuote (type) {
		if (!type) type = 'quote';
		else if (!QuoteTypes.includes(type)) type = 'quote';

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var [blocks, startIndex, endIndex] = this.getBlocks(startLine, endLine);

		var currTypes = [], allSame = true;
		blocks.forEach(block => {
			var first = block[0].textContent;
			var type = '';
			var match = first.match(/^( |　|\t)+/);
			if (!!match) {
				type = 'quote';
			}
			else {
				match = first.match(/^([ 　\t\-\/\*>]|\d+\.)*>[ 　\t]*(\[(\w+)\])*[ 　\t]*/);
				if (!!match) {
					type = match[3];
					if (!type) {
						type = 'quote';
					}
					else {
						type = type.toLowerCase();
						if (!QuoteTypes.includes(type)) type = 'quote';
					}
				}
			}
			currTypes.push(type);
		});
		currTypes.some(type => {
			if (type !== currTypes[0]) {
				allSame = false;
				return true;
			}
		});

		// 取消当前所用引用
		if (allSame && currTypes[0] === type) {
			blocks.forEach(block => {
				block.forEach(line => {
					var ctx = line.textContent;
					var done = false;
					ctx = ctx.replace(/^( |　|\t)+/, () => {
						done = true;
						return '';
					});
					if (!done) {
						ctx = ctx.replace(/^(([ 　\t\-\/\*>]|\d+\.)*)>[ 　\t]*(\[(\w+)\])*[ 　\t]*/, (match, prefix) => prefix);
					}
					line.innerText = ctx;
				});
			});
		}
		// 添加或更改为当前引用样式
		else {
			let mark = '>\t';
			if (type !== 'quote') {
				mark += '[' + type + ']\t';
			}
			blocks.forEach(block => {
				block.forEach((line, i) => {
					var ctx = line.textContent;
					var done = false;
					if (i === 0) {
						ctx = ctx.replace(/^( |　|\t)+/, () => {
							done = true;
							return mark;
						});
						if (!done) {
							ctx = ctx.replace(/^(([ 　\t\-\/\*>]|\d+\.)*)>[ 　\t]*(\[(\w+)\])*[ 　\t]*/, (match, prefix) => {
								done = true;
								return (prefix || '') + mark;
							});
						}
						if (!done) {
							ctx = mark + ctx;
						}
					}
					else {
						ctx = ctx.replace(/^( |　|\t)+/, () => {
							done = true;
							return '';
						});
						if (!done) {
							ctx = ctx.replace(/^(([ 　\t\-\/\*>]|\d+\.)*)>[ 　\t]*(\[(\w+)\])*[ 　\t]*/, (match, prefix) => prefix || '');
						}
					}
					line.innerText = ctx;
				});
			});
		}

		startLine = blocks.first.first.childNodes.item(0);
		endLine = blocks.last.last.childNodes.item(0);
		var content = endLine.textContent;
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, 0);
		range.setEnd(endLine, content.length);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);

		return true;
	}
	toggleList (type) {
		if (type !== 'ul' && type !== 'ol') return false;

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var [blocks, startIndex, endIndex] = this.getBlocks(startLine, endLine);
		const reg1 = /^(([ 　\t>]|\d+\.[ 　\t]|[\-\+\*][ 　\t])*)(([\-\+\*]|\d+\.)[ 　\t])/;
		const reg2 = /^(([ 　\t>]|\d+\.[ 　\t]|[\-\+\*][ 　\t])*)(([\-\+\*]|\d+\.)[ 　\t])*/;

		var currTypes = [], allSame = true;
		blocks.forEach(block => {
			var last = '';
			block.forEach(line => {
				var first = line.textContent;
				var type = '';
				var match = first.match(reg1);
				if (!!match && !!match[3]) {
					let head = match[3];
					if (head.match(/^[\-\+\*]/)) {
						type = 'ul';
					}
					else {
						type = 'ol';
					}
					last = type;
				}
				else {
					type = last;
				}
				currTypes.push(type);
			});
		});
		currTypes.some(type => {
			if (type !== currTypes[0]) {
				allSame = false;
				return true;
			}
		});

		// 取消当前所用引用
		if (allSame && currTypes[0] === type) {
			blocks.forEach(block => {
				block.forEach(line => {
					var ctx = line.textContent;
					ctx = ctx.replace(reg1, (match, head) => head || '');
					line.innerText = ctx;
				});
			});
		}
		// 添加或更改为当前引用样式
		else {
			blocks.forEach(block => {
				block.forEach((line, i) => {
					var ctx = line.textContent;
					var changed = false;
					var mark = type === 'ol' ? (i  + 1) + '.\t' : '-\t';
					ctx = ctx.replace(reg2, (match, head) => {
						changed = true;
						return (head || '') + mark;
					});
					if (!changed) ctx = mark + ctx;
					line.innerText = ctx;
				});
			});
		}

		startLine = blocks.first.first.childNodes.item(0);
		endLine = blocks.last.last.childNodes.item(0);
		var content = endLine.textContent;
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, 0);
		range.setEnd(endLine, content.length);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);

		return true;
	}
	insertCodeBlock () {
		var code = [];
		code.push('``` javascript');
		code.push('codes here...');
		code.push('```');
		return this.insertBlock(code, true);
	}
	insertLaTeX () {
		var code = [];
		code.push('$$');
		code.push('latex equation here...');
		code.push('$$');
		return this.insertBlock(code, true);
	}
	toggleAlign (align) {
		if (align !== 'center' && align !== 'right') align = 'left'

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var [blocks, startIndex, endIndex] = this.getBlocks(startLine, endLine);

		var currTypes = [], allSame = true;
		blocks.forEach(block => {
			var first = block.first.textContent;
			var type = '';
			var match = first.match(/^( |　|\t|>|\-|\+|\*|~|\d+\.)*\{([<\|>])\}/);
			if (!!match && !!match[2]) {
				let head = match[2];
				if (head === '<') {
					type = 'left';
				}
				else if (head === '|') {
					type = 'center';
				}
				else if (head === '>') {
					type = 'right';
				}
				else {
					type === 'left';
				}
			}
			else {
				type = "left";
			}
			currTypes.push(type);
		});
		currTypes.some(type => {
			if (type !== currTypes[0]) {
				allSame = false;
				return true;
			}
		});

		// 取消当前所用引用
		if (allSame && currTypes[0] === align) {
			blocks.forEach(block => {
				var line = block.first;
				var ctx = line.textContent;
				ctx = ctx.replace(/^(( |　|\t|>|\-|\+|\*|~|\d+\.)*)\{[<\|>]\}[ 　\t]*/, (match, head) => head || '');
				line.innerText = ctx;
			});
		}
		// 添加或更改为当前引用样式
		else {
			let mark = '';
			if (align === 'center') mark = '{|}\t';
			else if (align === 'right') mark = '{>}\t';
			blocks.forEach(block => {
				var line = block.first;
				var ctx = line.textContent;
				ctx = ctx.replace(/^(( |　|\t|>|\-|\+|\*|~|\d+\.)*)(\{[<\|>]\}[ 　\t]*)*/, (match, head) => (head || '') + mark);
				line.innerText = ctx;
			});
		}

		startLine = blocks.first.first.childNodes.item(0);
		endLine = blocks.last.last.childNodes.item(0);
		var content = endLine.textContent;
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, 0);
		range.setEnd(endLine, content.length);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);

		return true;
	}
	toggleIndent (dir) {
		if (dir !== 'indent' && dir !== 'outdent') return false;

		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var [blocks, startIndex, endIndex] = this.getBlocks(startLine, endLine);

		blocks.forEach(block => {
			var content = block.first.textContent;
			var type = '';
			content = content.replace(/^(( |　|\t|>|\-|\+|\*|~|\d+\.|\{[<\|>]\})*)(:*)([ 　\t]*)/, (match, prefix, useless, level, span) => {
				prefix = prefix || '';
				level = level || '';
				span = span || '';
				if (dir === 'outdent') {
					if (level.length > 0) {
						level = level.substring(1);
					}
					else {
						level = '';
						span = '';
					}
				}
				else {
					level = level + ':';
					span = span || ' ';
				}
				return prefix + level + span;
			});
			block.first.innerText = content;
		});

		startLine = blocks.first.first.childNodes.item(0);
		endLine = blocks.last.last.childNodes.item(0);
		var content = endLine.textContent;
		var selection = document.getSelection();
		var range = document.createRange();
		range.setStart(startLine, 0);
		range.setEnd(endLine, content.length);
		selection.removeAllRanges();
		selection.addRange(range);

		this.contentChanged = true;
		this.requestContentUpdate(true);

		return true;
	}
	generateLink (type) {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 保存选区
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);

		// 判断是否已经有指定标记
		var content = startLine.textContent || '';
		var text = content.substring(startOffset, endOffset);
		var inner = '<div class="link-generator" style="text-align:center;">';
		inner += '<div class="link-line">标题：<input class="number-inputter link-title" value="' + text + '"></div>';
		inner += '<div class="link-line">地址：<input class="number-inputter link-address" value=""></div>';
		var title = '超链接';
		var extra = '<div class="link-line button-line" style="margin-top:10px;font-size:14px;">';
		extra += '<input type="radio" name="position" value="nextline" checked><span class="name">独立一行</span><br>';
		extra += '<input type="radio" name="position" value="floatleft"><span class="name">左侧混排</span><br>';
		extra += '<input type="radio" name="position" value="floatright"><span class="name">右侧混排</span>';
		extra += '</div>';
		if (type === 'image') {
			title = '图片';
			inner += extra;
		}
		else if (type === 'video') {
			title = '视频';
			inner += extra;
		}
		else if (type === 'audio') {
			title = '音频';
			inner += extra;
		}
		inner += '</div>';

		showInfobox({
			title: "插入" + title,
			mode: 'html',
			content: inner,
			input: false,
			action: 'oc',
			callback: (result, value, infoBox) => {
				this.lastRange = null;
				selection.removeAllRanges();
				selection.addRange(range);
				range = null;
				if (result === 'cancel') return;

				var el = infoBox.$refs.content;
				var url = el.querySelector('input.link-address').value;
				if (!url) return;
				var title = el.querySelector('input.link-title').value;
				var position = 'nextline';
				el.querySelectorAll('input[type="radio"][name="position"]').forEach(item => {
					if (item.checked) position = item.value;
				});
				this.insertLink(type, title, url, position, startLine, startOffset, endLine, endOffset);
			}
		});

		return false;
	}
	insertLink (type, title, url, position, startLine, startOffset, endLine, endOffset) {
		if (!startLine) {
			[startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		}

		var content = startLine.textContent;
		var bra = content.substring(0, startOffset);
		var text = content.substring(startOffset, endOffset);
		var ket = content.substring(endOffset);
		var part = '[' + title + '](' + url, notLink = false;
		if (type === 'image') {
			part = '!' + part;
			notLink = true;
		}
		else if (type === 'image') {
			part = '@' + part;
			notLink = true;
		}
		else if (type === 'image') {
			part = '#' + part;
			notLink = true;
		}
		if (notLink) {
			if (position === 'floatleft') part += ' "left")';
			else if (position === 'floatright') part += ' "right")';
			else part += ')';
		}
		else {
			part += ')'
		}

		var selection = document.getSelection();
		var range = document.createRange();
		startLine.innerText = bra + part + ket;
		startOffset = bra.length;
		endOffset = startOffset + part.length;
		startLine = startLine.childNodes.item(0);
		range.setStart(startLine, startOffset);
		range.setEnd(startLine, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	insertHeadLine (type) {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		var line = '---';
		if (type === 'double') line = '===';
		else if (type === 'dotted') line = '...';
		else if (type === 'dashed') line = '___';
		else if (type === 'gradient') line = '+++';
		else if (type === 'wavy') line = '~~~';
		else if (type === 'star') line = '***';
		this.insertBlock(line, true, startLine, startOffset, endLine, endOffset);
		return true;
	}
	generateRefBlock () {
		var [startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		if (startLine !== endLine) return false;

		// 保存选区
		var selection = document.getSelection();
		var range = selection.getRangeAt(0);

		// 判断是否已经有指定标记
		var content = startLine.textContent || '';
		content = content.substring(startOffset, endOffset);

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
				this.lastRange = null;
				selection.removeAllRanges();
				selection.addRange(range);
				range = null;
				if (result === 'cancel') return;

				var el = infoBox.$refs.content;
				var name = el.querySelector('input.block-name').value;
				if (!name) return;
				this.insertRefBlock(name, content, startLine, startOffset, endLine, endOffset);
			}
		});

		return false;
	}
	insertRefBlock (name, ctx, startLine, startOffset, endLine, endOffset) {
		if (!startLine) {
			[startLine, startOffset, endLine, endOffset] = this.optimizeContent();
		}

		var content = startLine.textContent;
		var bra = content.substring(0, startOffset);
		ctx = ctx || content.substring(startOffset, endOffset);
		var ket = content.substring(endOffset);
		var part = '[' + name + ']';
		startLine.innerText = bra + part + ket;

		var block = this.getBlocks(startLine, startLine)[0][0];
		startLine = block.last;
		endLine = startLine.nextElementSibling;
		part = '[:' + name + ':]';
		if (!endLine) {
			let blank = newEle('p');
			blank.innerHTML = '<br>';
			this.Editor.appendChild(blank);
			startLine = newEle('p');
			startLine.innerText = part + ctx + part;
			this.Editor.appendChild(startLine);
		}
		else {
			let blank = newEle('p');
			blank.innerHTML = '<br>';
			this.Editor.insertBefore(blank, endLine);
			startLine = newEle('p');
			startLine.innerText = part + ctx + part;
			this.Editor.insertBefore(startLine, endLine);
		}

		var selection = document.getSelection();
		var range = document.createRange();
		startOffset = part.length;
		endOffset = startOffset + ctx.length;
		startLine = startLine.childNodes.item(0);
		range.setStart(startLine, startOffset);
		range.setEnd(startLine, endOffset);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	onScrolled () {
		if (!!this.tmrScroll) {
			clearTimeout(this.tmrScroll);
			this.tmrScroll = null;
		}

		if (this.Editor.parentNode.scrollHeight <= this.Editor.parentNode.offsetHeight) return;
		var percent = this.Editor.parentNode.scrollTop / (this.Editor.parentNode.scrollHeight - this.Editor.parentNode.offsetHeight);
		var pos = this.Editor.parentNode.getBoundingClientRect();
		pos = pos.top + pos.height * percent;

		var nodes = [].map.call(this.Editor.childNodes, n => n);
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
		this.lineMap.some((num) => {
			if (num < linenum) prev = num;
			if (num === linenum) curr = num;
			if (num > linenum) {
				next = num;
				return true;
			}
		});

		if (curr >= 0) {
			curr = this.getTargetNode(curr);
			if (!curr) return;
			curr = curr.getBoundingClientRect();
			let top = curr.top - this.Preview.getBoundingClientRect().top;
			let editor = this.Editor.parentElement;
			if (editor.scrollHeight > editor.offsetHeight) {
				let percent = editor.scrollTop / (editor.scrollHeight - editor.offsetHeight);
				top -= (editor.getBoundingClientRect().height - curr.height) * percent;
			}
			this.Preview.parentElement.scrollTo({ top, left: 0, behavior: 'smooth' });
		}
		else if (!(prev >= 0) || !(next >= 0)) {
			return;
		}
		else {
			let rate = (linenum - prev) / (next - prev);
			prev = this.getTargetNode(prev);
			if (!prev) return;
			next = this.getTargetNode(next);
			if (!next) return;

			prev = prev.getBoundingClientRect();
			next = next.getBoundingClientRect();

			let max = next.top + next.height - prev.top;
			let top = prev.top + max * rate - this.Preview.getBoundingClientRect().top;

			let editor = this.Editor.parentElement;
			let percent = editor.scrollHeight > editor.offsetHeight ? editor.scrollTop / (editor.scrollHeight - editor.offsetHeight) : 0;
			top -= editor.getBoundingClientRect().height * percent;
			this.Preview.parentElement.scrollTo({ top, left: 0, behavior: 'smooth' });
		}
	}
	getTargetNode (linenum) {
		if (!(linenum >= 0)) return null;
		var targets = this.Preview.querySelectorAll('span.linenumbermarker[linenumber="' + linenum + '"]');
		targets = [].map.call(targets, n => n);
		targets = targets.filter(n => {
			return !n.parentElement.classList.contains('content-link');
		});
		if (targets.length === 0) return null;
		var previewer = this.Preview.parentElement;
		var originTop = previewer.getBoundingClientRect().top;
		targets = targets.map(n => {
			return [Math.abs(n.getBoundingClientRect().top - originTop), n];
		});
		targets.sort((a, b) => a[0] - b[0]);
		return targets[0][1];
	};
	async markupDoc (content) {
		var markup = await MarkUp.fullParse(content, {
			showtitle: true,
			classname: 'markup-content',
		});
		this.Preview.innerHTML = markup.content;
		this.WordCountHint.innerText = markup.wordCount;
		this.title = markup.title;
		this.actionHandler('markupUpdated');
	};
	static notTextLine (line, isSpecial=false, blockMark='') {
		// 先处理标记
		if (line.length === 0 || !!line.match(/^ *$/)) return [true, false, blockMark];
		if (isSpecial) return [true, true, blockMark];
		if (!!line.match(/^\[.+\][:：][ 　\t]*/)) return [true, true, blockMark];

		// 代码与公式
		if (!blockMark) {
			if (!!line.match(/^((>|\-|\+|\*|\d+)[ 　\t]*)*\$\$/)) return [true, isSpecial, '$'];
			if (!!line.match(/^((>|\-|\+|\*|\d+)[ 　\t]*)*```/)) return [true, isSpecial, '`'];
			if (!!line.match(/^((>|\-|\+|\*|\d+)[ 　\t]*)*(~~~$|~~~[ 　\t\w]+)/)) return [true, isSpecial, '~'];
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
	static getAllPartsInLine (part, line) {
		var poses = [];
		if (part instanceof RegExp) {
			if (part.global) {
				let ps = line.match(part);
				if (!!ps) {
					ps.reverse().forEach(m => {
						var i = line.lastIndexOf(m);
						if (i < 0) return;
						poses.unshift([i, m]);
						line = line.substring(0, i);
					});
				}
			}
			else {
				let last = 0;
				while (true) {
					let i = line.match(part);
					if (!i) break;
					let p = i[0];
					i = i.index;
					last += i;
					poses.push([last, p]);
					last += p.length;
					i += p.length;
					line = line.substring(i);
				}
			}
		}
		else {
			while (true) {
				let i = line.lastIndexOf(part);
				if (i < 0) break;
				poses.unshift([i, part]);
				line = line.substring(0, i);
			}
		}
		return poses;
	}
}

const resizeEditor = (editor, MUEditor, MUPreview, WordCountHint) => {
	var width = document.body.getBoundingClientRect().width, fullSize = true;
	if (width < 1000) {
		fullSize = false;
		editor.notAutoUpdateContent = true;
		MUEditor.parentElement.parentElement.classList.add('no_preview');
		WordCountHint.parentElement.classList.add('no_preview');
		console.log(editor, MUEditor, MUPreview, WordCountHint);
	}
	if (width <= 690) {
		let len = editor.MenuBar.items.length;
		let item = editor.MenuBar.items[len - 3];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 4];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 7];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 8];
		item.ui.style.display = 'none';
	}
	if (width <= 580) {
		let len = editor.MenuBar.items.length;
		let item = editor.MenuBar.items[len - 10];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 12];
		item.ui.style.display = 'none';
	}
	if (width <= 440) {
		let len = editor.MenuBar.items.length;
		let item = editor.MenuBar.items[len - 15];
		item.ui.style.display = 'none';
	}
	if (width <= 380) {
		let len = editor.MenuBar.items.length;
		let item = editor.MenuBar.items[len - 6];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 9];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 11];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 13];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 14];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 16];
		item.ui.style.display = 'none';
	}

	if (fullSize) {
		let len = editor.MenuBar.items.length;
		let item = editor.MenuBar.items[len - 5];
		item.ui.style.display = 'none';
		item = editor.MenuBar.items[len - 6];
		item.ui.style.display = 'none';
		MUEditor.parentElement.parentElement.classList.remove('no_preview');
		WordCountHint.parentElement.classList.remove('no_preview');
	}
};

window.initMarkUpEditor = (MUEditor, MUToolbar, MUPreview, WordCountHint, callbacks) => {
	var editor = new MarkupEditor({
		ui: {
			editor: MUEditor,
			toolbar: MUToolbar,
			preview: MUPreview,
			wordcount: WordCountHint,
		},
		callback: callbacks,
		shortcuts: Shortcuts,
		toolbar: MenuConfig
	});
	resizeEditor(editor, MUEditor, MUPreview, WordCountHint);
	editor.addHandler('markupUpdated', () => {
		var latexList = MUPreview.querySelectorAll('.latex');
		for (let latex of latexList) {
			let math = 'MATHJAX::' + latex.innerText;
			latex._origin = math;
			let output = sessionStorage.getItem(math);
			if (!!output) {
				latex.classList.add('rendered');
				latex.innerHTML = output;
			}
			else {
				MathJax.Hub.Queue(["Typeset", MathJax.Hub, latex]);
			}
		}
	});
	editor.addHandler('preview', async () => {
		var app = MUEditor.parentElement.parentElement;
		if (app.classList.contains('show_preview')) {
			app.classList.remove('show_preview');
		}
		else {
			app.classList.add('show_preview');
			let content = editor.getContent();
			let markup = await MarkUp.fullParse(content, {
				showtitle: true,
				classname: 'markup-content',
			});
			MUPreview.innerHTML = markup.content;
			editor.title = markup.title;
			editor.actionHandler('markupUpdated');
		}
	});
	MUPreview.addEventListener('click', evt => {
		evt.preventDefault();
	});
	if (!initMathJax.initialized) {
		initMathJax();
		MathJax.Hub.Register.MessageHook('End Process', (quests) => {
			var [event, target] = quests;
			if (event !== 'End Process') return;
			if (target === document.body) return;
			var math = (target.innerText || '').toLowerCase();
			if (math.length === 0 || math.indexOf('error') >= 0) return;
			sessionStorage.setItem(target._origin, target.innerHTML);
		});
	}
	editor.newFile();

	var selection = document.getSelection(), range = document.createRange();
	var node = editor.Editor.lastChild;
	range.setStart(node, 0);
	range.setEnd(node, 0);
	selection.removeAllRanges();
	selection.addRange(range);

	return editor;
};