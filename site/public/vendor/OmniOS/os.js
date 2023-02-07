(() => {
	const OmniOS = {};

	OmniOS.info = {
		name: "OmniOS",
		version: "0.0.1",
		author: "LostAbaddon"
	};

	const Handlers = new Map();
	const Variables = new Map();
	const Functions = new Map();
	const History = [];
	History._index = 0;
	History._available = true;
	var consoleHistory = [];

	const initUI = panel => {
		panel._input = newEle('div', 'inputbox');

		panel._input._hint = prepareHint(true);

		panel._input._input = newEle('span', 'inputter');
		panel._input._input.contentEditable = true;
		panel._input._input.addEventListener('keydown', async evt => {
			if (evt.key === 'Enter' && !evt.shiftKey) {
				let command = panel._input._input.innerText;
				command = command.replace(/(^[ 　\t\r\n\u00A0]+|[ 　\t\r\n\u00A0]+$)/gi, '');
				OmniOS.run(command);
				panel._input._input.innerHTML = '';
				panel._input._input.focus();
				evt.preventDefault();
			}
			else if (evt.key === 'ArrowUp') {
				let len = History.length;
				History._index ++;
				if (len >= History._index) {
					let cmd = History[len - History._index];
					panel._input._input.innerText = cmd;
					let sel = document.getSelection();
					let range = sel.getRangeAt(0);
					let node = panel._input._input.childNodes[0];
					range.setStart(node, node.textContent.length);
					range.setEnd(node, node.textContent.length);
					sel.addRange(range);
				}
				else {
					History._index = len;
				}
				evt.preventDefault();
			}
			else if (evt.key === 'ArrowDown') {
				let len = History.length;
				History._index --;
				if (History._index > 0) {
					let cmd = History[len - History._index];
					panel._input._input.innerText = cmd;
					let sel = document.getSelection();
					let range = sel.getRangeAt(0);
					let node = panel._input._input.childNodes[0];
					range.setStart(node, node.textContent.length);
					range.setEnd(node, node.textContent.length);
					sel.addRange(range);
				}
				else {
					History._index = 0;
					panel._input._input.innerText = '';
				}
				evt.preventDefault();
			}
			else if (evt.key === 'Tab') {
				evt.preventDefault();

				let callback = Handlers.get('ontab');
				let sel = document.getSelection();
				let range = sel.getRangeAt(0);
				if (!!callback) {
					let command = panel._input._input.innerText;
					let bra = command.substring(0, range.endOffset);
					let ket = command.substring(range.endOffset);
					let param = bra.split(/[ 　\t]+/);
					let cmd = param[0];
					param = param[param.length - 1]
					let replace = await callback(cmd, param);
					if (!!replace) {
						bra = bra.substring(0, bra.length - param.length) + replace;
						param = ket.match(/[ 　\t]+/);
						if (!!param && !!param[0]) {
							param = ket.substring(0, param.index);
							ket = ket.replace(param, '');
						}
						panel._input._input.innerText = bra + ket;
						let node = panel._input._input.childNodes[0];
						range.setStart(node, bra.length);
						range.setEnd(node, bra.length);
					}
				}
				sel.addRange(range);
			}
		});

		panel._input.appendChild(panel._input._hint);
		panel._input.appendChild(panel._input._input);
		panel.appendChild(panel._input);

		panel.addEventListener('mouseup', ({target}) => {
			if (target === panel) {
				panel._input._input.focus();
			}
		});
	};
	const prepareHint = (isCmd) => {
		var hint = newEle('span', 'hint');
		var postfix = ':>';
		if (isCmd) {
			postfix = '>:';
			if (OmniOS.status.length > 0) {
				let text = document.createTextNode(OmniOS.location);
				hint.appendChild(text);
				text = newEle('span', 'status');
				text.innerText = ' (' + OmniOS.status.join('/') + ') ';
				hint.appendChild(text);
				text = document.createTextNode(postfix);
				hint.appendChild(text);
			}
			else {
				hint.innerText = OmniOS.location + ' ' + postfix;
			}
		}
		else {
			hint.innerText = '--' + postfix;
		}

		return hint;
	};
	const showMessage = (msg, type="text") => {
		if (History._available) consoleHistory.push([msg, type, OmniOS.location, [...OmniOS.status]]);

		var line = newEle('div', ['message', type]);
		var hint = prepareHint(type === 'command');
		line._hint = hint;
		line.appendChild(hint);

		var content = newEle('span', 'content');
		if (msg.indexOf('<') === 0) {
			content.innerHTML = msg;
		}
		else {
			content.innerText = msg;
		}
		line._content = content;
		line.appendChild(content);

		OmniOS.ui.insertBefore(line, OmniOS.ui._input);
		OmniOS.ui._input.scrollIntoViewIfNeeded();

		return line;
	};
	const analyzeParams = param => {
		if (param.match(/^"(.|[\r\n])*"$/)) {
			let value;
			try {
				value = JSON.parse(param);
			}
			catch (err) {
				console.error(err);
				return null;
			}

			let d = new Date(value);
			if (d.toString() !== 'Invalid Date') return d;
			return value;
		}

		var value = param * 1;
		if (value + '' === param) return value;

		value = param.toLowerCase();
		if (['true', 'ok'].includes(value)) return true;
		if (['false', 'cancel'].includes(value)) return false;

		value = new Date(param);
		if (value.toString() !== 'Invalid Date') return value;

		return param;
	};
	const decomposeCmd = cmd => {
		var last = 0, inside = false;
		var params = {}, index = 1, line = '';
		cmd.replace(/(\\*)"/g, (match, prefix, pos) => {
			var len = prefix.length;
			if (len >> 1 << 1 !== len) return;
			pos += len;
			var content = cmd.substring(last, pos + (inside ? 1 : 0));
			last = pos + (inside ? 1 : 0);
			inside = !inside;

			if (!content) return;
			if (inside) {
				line = line + content
			}
			else {
				let placeholder = '%' + index + '%';
				while (cmd.indexOf(placeholder) >= 0) {
					index ++;
					placeholder = '%' + index + '%';
				}
				index ++;
				params[placeholder] = content;
				line = line + placeholder;
			}
		});
		if (last < cmd.length) {
			line += cmd.substring(last);
		}
		line = line.split(/[ 　\u00A0\t=]+/);
		line = line.map(m => params[m] || m);

		params = [];
		var options = {}, current = null;
		cmd = line.shift();
		line.forEach(p => {
			var q = p.replace(/^\-+/, '');
			if (p === q) {
				let target = !!current ? options[current] : params;
				let value = analyzeParams(p);
				if (value !== null) target.push(value);
			}
			else {
				current = q;
				options[q] = [];
			}
		});
		for (let key in options) {
			let opts = options[key];
			if (opts.length === 0) options[key] = true;
			else if (opts.length === 1) options[key] = opts[0];
		}

		return {
			command: cmd,
			params, options
		};
	};
	const runCommand = async cmd => {
		History._index = 0;
		if (!cmd) return;
		History.push(cmd);
		showMessage(cmd, 'command');

		var raw = cmd;
		cmd = decomposeCmd(cmd);
		var handler;
		OmniOS.status.forEach(status => {
			var hs = Handlers.get(status);
			if (!hs) return;
			var h = hs.get(cmd.command);
			if (!h) return;
			handler = h;
		});
		if (!handler) {
			showMessage('无效指令: ' + cmd.command, 'error');
			return;
		}
		await handler(cmd.params, cmd.options, raw);

		var hint = prepareHint(true);
		OmniOS.ui._input._hint.innerHTML = hint.innerHTML;
	};
	const mountOS = async () => {
		OmniOS.onCommand('omni', 'enter', params => {
			if (params.length === 0) {
				showMessage('未指定目标路径', 'error');
				return;
			}
			params = params[0];
			if (params.substring(0, 1) === '/') {
				OmniOS.location = '';
			}
			params = params.split(/[\/\\]+/);
			params = params.filter(p => !!p);
			if (params.length === 0) return;

			var path = OmniOS.location.replace(/^\/+|\/+$/g, '').split('/').filter(p => !!p);
			params.forEach(param => {
				if (param === '..') {
					path.pop();
				}
				else if (param !== '.') {
					path.push(param)
				}
			});
			if (path.length === 0) OmniOS.location = '/';
			else OmniOS.location = '/' + path.join('/') + '/';
		});
		OmniOS.onCommand('omni', 'set', async (params, options, raw) => {
			var name = params.shift();
			if (!name) {
				showMessage('变量名为空', 'error');
				return;
			}
			var action = params.shift();
			raw = raw.replace('set ', '');
			raw = raw.replace(name + ' ', '');
			raw = raw.replace(action + ' ', '');
			if (action === 'is') {
				let cmd = params.shift();
				if (!name) {
					showMessage('指令名为空', 'error');
					return;
				}
				let handler = Handlers.get(cmd);
				if (!handler) {
					showMessage('无效指令: ' + cmd, 'error');
					return;
				}
				let value = await handler(params, options, raw);
				Variables.set(name, value);
			}
			else if (action === 'as') {
				let cmd = params.shift();
				if (!name) {
					showMessage('指令名为空', 'error');
					return;
				}
				Functions.set(name, [cmd, params, options, raw]);
			}
			else {
				showMessage('指令错误', 'error');
				return;
			}
		});
		OmniOS.onCommand('omni', 'echo', params => {
			var name = params.shift();
			if (!name) {
				showMessage('变量名为空', 'error');
				return;
			}
			if (!Variables.has(name)) {
				showMessage('EMPTY', 'error');
				return 'EMPTY';
			}
			var value = Variables.get(name);
			showMessage(JSON.stringify(value));
			return value;
		});
		OmniOS.onCommand('omni', 'exec', async params => {
			var name = params.shift();
			if (!name) {
				showMessage('变量名为空', 'error');
				return;
			}
			if (!Functions.has(name)) {
				showMessage('EMPTY', 'error');
				return 'EMPTY';
			}
			var [cmd, params, options, raw] = Functions.get(name);
			var handler = Handlers.get(cmd);
			if (!handler) {
				showMessage('无效指令: ' + cmd, 'error');
				return;
			}
			var value = await handler(params, options, raw);
			return value;
		});
		OmniOS.onCommand('omni', 'eval', async (params, options, raw) => {
			raw = raw.replace(/eval[ 　\t\u00A0]*/, '');
			try {
				for (let [name, value] of Variables) {
					let reg = new RegExp('\\$(' + name + ')(\\b|$)', 'g');
					raw = raw.replace(reg, (match, name, post) => {
						if (!Variables.has(name)) return match;
						var value = Variables.get(name);
						return JSON.stringify(value);
					});
				}
				let result = eval(raw);
				if (result === undefined) {
					showMessage('EMPTY');
					return result;
				}
				else {
					showMessage(JSON.stringify(result));
					return result;
				}
			}
			catch (err) {
				console.error(err);
				showMessage('输入式有错', 'error');
			}
		});
		OmniOS.onCommand('omni', 'clear', async () => {
			consoleHistory.splice(0, consoleHistory.length);
			[].forEach.call(OmniOS.ui.querySelectorAll('div.message'), msg => {
				OmniOS.ui.removeChild(msg);
			});
		});
		OmniOS.onCommand('omni', 'commands', async () => {
			var content = ['<div class="caption">可用命令列表</div>'];

			OmniOS.status.forEach(key => {
				var handlers = Handlers.get(key);
				if (!handlers) return;
				content.push('<div class="caption">' + key + '</div>');
				content.push('<div class="content">');
				for (let [cmd, _] of handlers) {
					content.push('<span class="item">' + cmd + '</span>');
				}
				content.push('</div>');
			});

			OmniOS.show(content.join('\n'));
		});
	};
	const restoreHistory = () => {
		History._available = false;
		var status = OmniOS.status;
		var location = OmniOS.location;
		consoleHistory.forEach(([msg, type, location, status]) => {
			OmniOS.location = location;
			OmniOS.status = status;
			showMessage(msg, type);
		});
		OmniOS.status = status;
		OmniOS.location = location;
		History._available = true;
	};

	OmniOS.init = (panel, location, statuses) => {
		OmniOS.location = location || '/';
		OmniOS.status = statuses || ['omni'];

		OmniOS.ui = panel;
		initUI(panel);
		mountOS();

		restoreHistory();
		History._available = false;
		showMessage('Welcome To Omniverse!', 'welcome');
		History._available = true;

		panel._input._input.focus();
	};
	OmniOS.run = cmd => {
		runCommand(cmd);
	};
	OmniOS.show = (msg, type) => {
		showMessage(msg, type);
	};
	OmniOS.onTab = callback => {
		Handlers.set('ontab', callback);
	};
	OmniOS.onCommand = (status, command, callback, overwrite=true) => {
		var handlers = Handlers.get(status);
		if (!handlers) {
			handlers = new Map();
			Handlers.set(status, handlers);
		}
		var handler = handlers.get(command);
		if (!handler || overwrite) {
			handlers.set(command, callback);
		}
	};
	OmniOS.offCommand = (status, command) => {
		if (!!command) {
			let handlers = Handlers.get(status);
			if (!handlers) return;
			handlers.delete(command);
		}
		else {
			for (let handlers of Handlers) {
				handlers[1].delete(status);
			}
		}
	};
	OmniOS.turnOn = (...status) => {
		status.forEach(s => {
			if (!s) return;
			s = s.replace(/^[ 　\t]+|[ 　\t]+$/g, '');
			if (!s) return;
			if (OmniOS.status.includes(s)) return;
			OmniOS.status.push(s);
		});

		var hint = prepareHint(true);
		OmniOS.ui._input._hint.innerHTML = hint.innerHTML;
	};
	OmniOS.turnOff = (...status) => {
		status.forEach(s => {
			if (!s) return;
			s = s.replace(/^[ 　\t]+|[ 　\t]+$/g, '');
			if (!s) return;
			var pos = OmniOS.status.indexOf(s);
			if (pos < 0) return;
			OmniOS.status.splice(pos, 1);
		});

		var hint = prepareHint(true);
		OmniOS.ui._input._hint.innerHTML = hint.innerHTML;
	};

	window.OmniOS = OmniOS;
}) ();