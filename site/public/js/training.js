(() => {
	const Operators = ['+', '-', '+', '-', '×', '/'];

	var ModuleActived = false;
	var Container, Pages = [], ScorePad;
	var scoreList = [], pageIndex = 0, level = 0, timer, countdown = 0, next = 0, mode = 0, answerList = [];

	const getTypedScore = id => {
		if (!scoreList[id] || scoreList[id].length === 0) return -1;

		var total = 0, weight = 0;
		scoreList[id].forEach((s, i) => {
			var w = 1 - ((i / scoreList[id].length) ** 2);
			total += s * w;
			weight += w;
		});
		total /= weight;
		return total;
	};
	const getTotalScore = () => {
		var score = [];
		for (let i = 0; i < scoreList.length; i ++) {
			let s = getTypedScore(i);
			if (s > 0) score.push(s);
		}
		if (score.length === 0) return 0;

		score.sort((a, b) => a - b);
		var total = 0, weight = 0;
		score.forEach((s, i) => {
			var w = i + score.length;
			weight += w;
			total += s * w;
		});
		return Math.round(total / weight);
	};

	const newCalQuest = (index, len) => {
		var ele = newEle('div', 'questItem calculate');
		var items = [];
		for (let i = 0; i < len; i ++) {
			items[i * 2] = Math.ceil(Math.range(100));
		}
		for (let i = 1; i < len; i ++) {
			let j = Math.floor(Math.range(6));
			items[i * 2 - 1] = Operators[j];
			if (j >= 4) items[i * 2] = Math.ceil(Math.range(10));
		}
		items = items.join(' ');
		var answer = Math.round(eval(items.replace(/×/g, '*')));
		items = '<span class="question">' + items + ' = </span>';
		ele.innerHTML = items + '<input index="' + index + '">';
		return [ele, answer];
	};
	const submitCalQuest = () => {
		if (!!timer) {
			clearTimeout(timer);
			timer = null;
		}
		var answers = [], score = 0, count = 0;
		[].forEach.call(Pages[1 - pageIndex].querySelectorAll('input[index]'), ele => {
			var index = ele.getAttribute('index') * 1;
			if (isNaN(index)) return;
			var answer = !!ele.value ? ele.value * 1 : undefined;
			if (isNaN(answer)) return;
			answers[index] = answer;
			count ++;
		});
		if (count === 0) {
			NewQuest();
			return;
		}

		answerList.forEach((ans, i) => {
			if (ans === answers[i]) {
				score += 1;
			}
		});
		score = Math.ceil(score / answerList.length * 100 + countdown * ((count / answerList.length) ** 2));
		scoreList[0] = scoreList[0] || [];
		scoreList[0].unshift(score);
		ScorePad._score.innerText = getTotalScore() + ' / ' + score + ' [' + level + ']';

		if (score > 60) level ++;
		NewQuest();
	};
	const timerCalQuest = () => {
		if (!ModuleActived) return;
		countdown --;
		ScorePad._countdown.innerText = '倒计时：' + countdown;
		timer = null;
		if (countdown > 0) {
			timer = setTimeout(timerCalQuest, 1000);
		}
		else {
			submitCalQuest();
		}
	};

	const newMemQuest = (index) => {
		var ele = newEle('div', 'questItem memory');
		ele.setAttribute('index', index);
		var value = Math.ceil(Math.range(100));
		ele.innerText = value;
		return [ele, value];
	};
	const refreshMemQuest = () => {
		[].forEach.call(Pages[1 - pageIndex].querySelectorAll('div.questItem.memory[index]'), ele => {
			var index = ele.getAttribute('index') * 1;
			if (isNaN(index)) return;
			ele.innerHTML = '<input>';
		});

		countdown = next;
		next = -1;
		timer = setTimeout(timerMemQuest, 1000);
	};
	const submitMemQuest = () => {
		if (!!timer) {
			clearTimeout(timer);
			timer = null;
		}
		var answers = [], score = 0, count = 0;
		[].forEach.call(Pages[1 - pageIndex].querySelectorAll('div.questItem.memory[index]'), ele => {
			var index = ele.getAttribute('index') * 1;
			if (isNaN(index)) return;
			var answer = ele.querySelector('input');
			if (!answer) return;
			answer = !!answer.value ? answer.value * 1 : undefined;
			if (isNaN(answer)) return;
			answers[index] = answer;
			count ++;
		});
		if (count === 0) {
			NewQuest();
			return;
		}

		answerList.forEach((ans, i) => {
			if (ans === answers[i]) {
				score += 1;
			}
		});
		score = Math.ceil(score / answerList.length * 100 + countdown * ((count / answerList.length) ** 2));
		scoreList[1] = scoreList[1] || [];
		scoreList[1].unshift(score);
		ScorePad._score.innerText = getTotalScore() + ' / ' + score + ' [' + level + ']';

		if (score > 60) level ++;
		NewQuest();
	};
	const timerMemQuest = () => {
		if (!ModuleActived) return;
		countdown --;
		ScorePad._countdown.innerText = '倒计时：' + countdown;
		timer = null;
		if (countdown > 0) {
			timer = setTimeout(timerMemQuest, 1000);
		}
		else if (next > 0) {
			refreshMemQuest();
		}
		else {
			submitMemQuest();
		}
	};

	const newCAMQuest = (index, len) => {
		var ele = newEle('div', 'questItem calandmem');
		ele.setAttribute('index', index);
		var items = [];
		for (let i = 0; i < len; i ++) {
			items[i * 2] = Math.ceil(Math.range(100));
		}
		for (let i = 1; i < len; i ++) {
			let j = Math.floor(Math.range(6));
			items[i * 2 - 1] = Operators[j];
			if (j >= 4) items[i * 2] = Math.ceil(Math.range(10));
		}
		items = items.join(' ');
		var answer = Math.round(eval(items.replace(/×/g, '*')));
		items += ' =';
		ele.innerHTML = items;
		return [ele, answer];
	};
	const refreshCAMQuest = () => {
		[].forEach.call(Pages[1 - pageIndex].querySelectorAll('div.questItem.calandmem[index]'), ele => {
			var index = ele.getAttribute('index') * 1;
			if (isNaN(index)) return;
			ele.innerHTML = '<input>';
		});

		countdown = next;
		next = -1;
		timer = setTimeout(timerCAMQuest, 1000);
	};
	const submitCAMQuest = () => {
		if (!!timer) {
			clearTimeout(timer);
			timer = null;
		}
		var answers = [], score = 0, count = 0;
		[].forEach.call(Pages[1 - pageIndex].querySelectorAll('div.questItem.calandmem[index]'), ele => {
			var index = ele.getAttribute('index') * 1;
			if (isNaN(index)) return;
			var answer = ele.querySelector('input');
			if (!answer) return;
			answer = !!answer.value ? answer.value * 1 : undefined;
			if (isNaN(answer)) return;
			answers[index] = answer;
			count ++;
		});
		if (count === 0) {
			NewQuest();
			return;
		}

		answerList.forEach((ans, i) => {
			if (ans === answers[i]) {
				score += 1;
			}
		});
		score = Math.ceil(score / answerList.length * 100 + countdown * ((count / answerList.length) ** 2));
		scoreList[1] = scoreList[1] || [];
		scoreList[1].unshift(score);
		ScorePad._score.innerText = getTotalScore() + ' / ' + score + ' [' + level + ']';

		if (score > 60) level ++;
		NewQuest();
	};
	const timerCAMQuest = () => {
		if (!ModuleActived) return;
		countdown --;
		ScorePad._countdown.innerText = '倒计时：' + countdown;
		timer = null;
		if (countdown > 0) {
			timer = setTimeout(timerCAMQuest, 1000);
		}
		else if (next > 0) {
			refreshCAMQuest();
		}
		else {
			submitCAMQuest();
		}
	};

	const NewCalculateQuest = (count, len, duration) => {
		var page = Pages[pageIndex];
		var quests = Array.generate(count, i => newCalQuest(i, len));
		answerList.clear();
		quests.forEach(([ele, answer], i) => {
			page.appendChild(ele);
			answerList[i] = answer;
		});
		countdown = duration;
		ScorePad._countdown.innerText = '倒计时：' + duration;
		timer = setTimeout(timerCalQuest, 1000);
	};
	const NewMemoryQuest = (count, delay, duration) => {
		var page = Pages[pageIndex];
		var quests = Array.generate(count, i => newMemQuest(i));
		answerList.clear();
		quests.forEach(([ele, answer], i) => {
			page.appendChild(ele);
			answerList[i] = answer;
		});
		countdown = delay;
		next = duration;
		ScorePad._countdown.innerText = '倒计时：' + delay;
		timer = setTimeout(timerMemQuest, 1000);
	};
	const NewCalMemQuest = (count, len, delay, duration) => {
		var page = Pages[pageIndex];
		var quests = Array.generate(count, i => newCAMQuest(i, len));
		answerList.clear();
		quests.forEach(([ele, answer], i) => {
			page.appendChild(ele);
			answerList[i] = answer;
		});
		countdown = delay;
		next = duration;
		ScorePad._countdown.innerText = '倒计时：' + delay;
		timer = setTimeout(timerCAMQuest, 1000);
	};
	const NewQuest = () => {
		if (!ModuleActived) return;

		Pages[pageIndex].innerHTML = '';

		var quest = Math.floor(Math.range(3));
		if (quest === 0) {
			let count = 10 + Math.floor((level ** 0.9) / 1.9);
			let len = 3 + Math.floor((level ** 0.6) / 1.8);
			let duration = Math.floor(((count / 10) ** 0.95) * 50);
			NewCalculateQuest(count, len, duration);
		}
		else if (quest === 1) {
			let count = 10 + Math.floor((level ** 0.9) / 1.9);
			let delay = Math.floor(((count / 10) ** 0.95) * 30);
			let duration = Math.ceil((delay ** 1.05) / 1.5);
			NewMemoryQuest(count, delay, duration);
		}
		else if (quest === 2) {
			let count = 5 + Math.floor((level ** 0.9) / 2.9);
			let len = 2 + Math.floor((level ** 0.5) / 2.0);
			let delay = Math.floor(((count / 5) ** 0.95) * 50);
			let duration = Math.ceil((delay ** 1.05) / 1.5);
			NewCalMemQuest(count, len, delay, duration);
		}
		else {
			return;
		}
		mode = quest;

		Pages[pageIndex].setAttribute('show', 'true');
		Pages[1 - pageIndex].setAttribute('show', 'false');
		pageIndex = 1 - pageIndex;
	};
	const onClick = ({target}) => {
		if (!target.classList.contains('submitter')) return;
		if (mode === 0) submitCalQuest();
		else if (mode === 1) {
			if (next > 0) countdown = 0;
			else submitMemQuest();
		}
		else if (mode === 2) {
			if (next > 0) countdown = 0;
			else submitCAMQuest();
		}
	};

	window.TrainingQuest = {
		onLoad (container, scorePad, page1, page2) {
			if (ModuleActived) return;

			if (!!timer) clearTimeout(timer);
			Container = container;
			Container.addEventListener('click', onClick);
			Pages[0] = page1;
			Pages[1] = page2;
			ScorePad = scorePad;
			pageIndex = 0;
			level = 0;

			ScorePad.innerHTML = '<span class="hint">当前脑力值：</span><span class="score">0 / 0 [0]</span><span class="countdown">0</span>';
			ScorePad._score = ScorePad.querySelector('span.score');
			ScorePad._countdown = ScorePad.querySelector('span.countdown');

			ModuleActived = true;

			NewQuest();
		},
		onLeave () {
			if (!ModuleActived) return;
			if (location.hash === '#/entertain/training') return;

			// 清除内容
			Container.removeEventListener('click', onClick);
			Container = null;
			Pages[0].innerHTML = '';
			Pages[1].innerHTML = '';
			ScorePad.innerHTML = '';
			Pages.clear();
			ScorePad = null;
			delete ScorePad._hint;
			delete ScorePad._countdown;

			ModuleActived = false;
		},
	};
}) ();