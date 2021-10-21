var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
if (!requestAnimationFrame) requestAnimationFrame = cb => setTimeout(cb, 60);

const getNeighbors = (x, y, width, height, isCycled) => {
	var levs1 = [], levs2 = []
	if (x === 0) {
		if (y === 0) {
			levs1.push([0, 1]);
			levs1.push([1, 0]);
			levs2.push([1, 1]);
			if (isCycled) {
				levs1.push([0, height - 1]);
				levs1.push([width - 1, 0]);
				levs2.push([width - 1, height - 1]);
				levs2.push([1, height - 1]);
				levs2.push([width - 1, 1]);
			}
		}
		else if (y === height - 1) {
			levs1.push([0, height - 2]);
			levs1.push([1, height - 1]);
			levs2.push([1, height - 2]);
			if (isCycled) {
				levs1.push([0, 0]);
				levs1.push([width - 1, height - 1]);
				levs2.push([1, 0]);
				levs2.push([width - 1, height - 2]);
				levs2.push([width - 1, 0]);
			}
		}
		else {
			levs1.push([0, y - 1]);
			levs1.push([0, y + 1]);
			levs1.push([1, y]);
			levs2.push([1, y - 1]);
			levs2.push([1, y + 1]);
			if (isCycled) {
				levs1.push([width - 1, y]);
				levs2.push([width - 1, y - 1]);
				levs2.push([width - 1, y + 1]);
			}
		}
	}
	else if (x === width - 1) {
		if (y === 0) {
			levs1.push([width - 1, 1]);
			levs1.push([width - 2, 0]);
			levs2.push([width - 2, height - 1]);
			if (isCycled) {
				levs1.push([0, 0]);
				levs1.push([width - 1, height - 1]);
				levs2.push([0, 1]);
				levs2.push([width - 2, 1]);
				levs2.push([0, height - 1]);
			}
		}
		else if (y === height - 1) {
			levs1.push([width - 2, height - 1]);
			levs1.push([width - 1, height - 2]);
			levs2.push([width - 2, height - 2]);
			if (isCycled) {
				levs1.push([0, height - 1]);
				levs1.push([width - 1, 0]);
				levs2.push([0, 0]);
				levs2.push([0, height - 2]);
				levs2.push([width - 2, 0]);
			}
		}
		else {
			levs1.push([width - 1, y - 1]);
			levs1.push([width - 1, y + 1]);
			levs1.push([width - 2, y]);
			levs2.push([width - 2, y - 1]);
			levs2.push([width - 2, y + 1]);
			if (isCycled) {
				levs1.push([0, y]);
				levs2.push([0, y - 1]);
				levs2.push([0, y + 1]);
			}
		}
	}
	else {
		if (y === 0) {
			levs1.push([x - 1, 0]);
			levs1.push([x + 1, 0]);
			levs1.push([x, 1]);
			levs2.push([x - 1, 1]);
			levs2.push([x + 1, 1]);
			if (isCycled) {
				levs1.push([x, height - 1]);
				levs2.push([x - 1, height - 1]);
				levs2.push([x + 1, height - 1]);
			}
		}
		else if (y === height - 1) {
			levs1.push([x - 1, height - 1]);
			levs1.push([x + 1, height - 1]);
			levs1.push([x, height - 2]);
			levs2.push([x - 1, height - 2]);
			levs2.push([x + 1, height - 2]);
			if (isCycled) {
				levs1.push([x, 0]);
				levs2.push([x - 1, 0]);
				levs2.push([x + 1, 0]);
			}
		}
		else {
			levs1.push([x, y - 1]);
			levs1.push([x, y + 1]);
			levs1.push([x - 1, y]);
			levs1.push([x + 1, y]);
			levs2.push([x - 1, y - 1]);
			levs2.push([x - 1, y + 1]);
			levs2.push([x + 1, y - 1]);
			levs2.push([x + 1, y + 1]);
		}
	}
	return [levs1, levs2];
};

class Grass {
	constructor (width, height) {
		this.width = width;
		this.height = height;
		this.grasses = [];
		for (let i = 0; i < width; i ++) {
			let line = [];
			for (let j = 0; j < height; j ++) {
				line[j] = Grass.Max;
			}
			this.grasses[i] = line;
		}
	}
	_evolute (x, y) {
		var center = this.grasses[x][y];
		var [lev1g, lev2g] = getNeighbors(x, y, this.width, this.height, Grass.CycleBoard);
		var lev1v = 0, lev2v = 0;

		lev1g.forEach(([x, y]) => {
			lev1v += this.grasses[x][y];
		});
		lev1v /= lev1g.length;
		lev2g.forEach(([x, y]) => {
			lev2v += this.grasses[x][y];
		});
		lev2v /= lev2g.length;
		var value = (lev1v + lev2v / Grass.Coef) / (1 + 1 / Grass.Coef);
		value -= center;
		value *= Grass.Rate;
		return Math.round(value);
	}
	evolute () {
		var grasses = [];
		var total = 0;
		for (let i = 0; i < this.width; i ++) {
			let _line = [];
			let line = this.grasses[i];
			for (let j = 0; j < this.height; j ++) {
				let g = line[j];
				g += this._evolute(i, j);
				g += Grass.Grow;
				if (g >= Grass.Max) g = Grass.Max;
				else {
					total ++;
					if (g < 0) g = 0;
				}
				_line[j] = g;
			}
			grasses[i] = _line;
		}
		this.grasses = grasses;
		return total;
	}
	getColor (x, y) {
		var c = this.grasses[x][y] / Grass.Max;
		var color = [];
		color[0] = Math.round(Grass.Color[0] * c);
		color[1] = Math.round(Grass.Color[1] * c);
		color[2] = Math.round(Grass.Color[2] * c);
		return color;
	}
}
Grass.Max = 100;
Grass.Grow = 2;
Grass.Rate = 0.3;
Grass.Coef = Math.sqrt(2);
Grass.CycleBoard = true;
Grass.Color = [104, 184, 142];

class Gene {
	constructor (list) {
		this.code = [...list];
		this.birth = [];
		this.alive = [];
		this.code.forEach(code => {
			if (code > 0) {
				this.birth.push(code);
			}
			else {
				this.alive.push(0 - code);
			}
		});
		this.attack = 8 - this.alive.length;
		this.defence = this.birth.length;
		this.power = list.length;
	}
}
Gene.Cost = 3;
class DNA {
	constructor (color, genes) {
		this.color = 'rgb(' + color.join(',') + ')';
		this.power = 0;
		this.genes = genes.map(g => {
			g = new Gene(g);
			this.power += g.power;
			return g;
		});
	}
}
class Life {
	constructor (dna) {
		this.dna = dna;
		this.dnaLevel = dna.genes.length;
		this.step = 0;
		this.energy = 0;
	}
	getAttack () {
		return this.dna.genes[this.step % this.dnaLevel].attack;
	}
	getDefence () {
		return this.dna.genes[this.step % this.dnaLevel].defence;
	}
	getPower () {
		return this.dna.genes[this.step % this.dnaLevel].power * Gene.Cost;
	}
	getColor () {
		return this.dna.color;
	}
	canBirth (same) {
		var gene = this.dna.genes[this.step % this.dnaLevel];
		return gene.birth.includes(same);
	}
	canAlive (all) {
		var gene = this.dna.genes[this.step % this.dnaLevel];
		return gene.alive.includes(all);
	}
}
class Colony {
	constructor (width, height) {
		this.width = width;
		this.height = height;
		this.grid = [];
		for (let i = 0; i < width; i ++) {
			let line = [];
			for (let j = 0; j < height; j ++) {
				line[j] = null;
			}
			this.grid[i] = line;
		}
	}
	add (x, y, dna) {
		this.grid[x][y] = new Life(dna);
	}
	evolute (field) {
		var newColony = [];
		var total = 0;
		for (let i = 0; i < this.width; i ++) {
			let line = [];
			let cline = this.grid[i];
			let gline = field.grasses[i];
			for (let j = 0; j < this.height; j ++) {
				let life = cline[j];
				let [n1, n2] = getNeighbors(i, j, this.width, this.height, Grass.CycleBoard);
				let ns = [];
				n1.forEach(([x, y]) => {
					var life = this.grid[x][y];
					if (!life) return;
					ns.push(life);
				});
				n2.forEach(([x, y]) => {
					var life = this.grid[x][y];
					if (!life) return;
					ns.push(life);
				});
				let alls = ns.length;
				if (alls === 0 && !life) continue;
				let pool = new Map();
				ns.forEach(life => {
					var list = pool.get(life.dna);
					if (!list) {
						list = [];
						pool.set(life.dna, list);
					}
					list.push(life);
				});
				let array = [];
				for (let item of pool) {
					let [dna, lifes] = item;
					let attack = 0, defence = 0, same = lifes.length, lev = -1;
					if (!!life && life.dna === dna) {
						attack = life.getAttack();
						defence = life.getDefence();
					}
					lifes.forEach(ele => {
						if (!life) {
							if (!ele.canBirth(same)) return;
						}
						else {
							if (life.dna === dna) {
								if (!ele.canAlive(alls)) return;
							}
							else {
								if (!ele.canBirth(same)) return;
							}
						}
						attack += ele.getAttack();
						defence += ele.getDefence();
						if (ele.step > lev) lev = ele.step;
					});
					if (lev < 0) continue;
					array.push([attack, defence, lev, dna]);
				}
				if (!!life && !pool.get(life.dna)) {
					if (life.canAlive(alls)) {
						array.push([life.getAttack(), life.getDefence(), life.step, life.dna]);
					}
				}
				pool.clear();
				array.sort((l1, l2) => {
					if (l2[0] > l1[0]) return 1;
					if (l2[0] < l1[0]) return -1;
					if (l2[1] > l1[1]) return 1;
					if (l2[1] < l1[1]) return -1;
					if (l2[2] > l1[2]) return 1;
					if (l2[2] < l1[2]) return -1;
					if (l2[3].power > l1[3].power) return -1;
					if (l2[3].power < l1[3].power) return 1;
					return 0;
				});
				if (array.length === 0) continue;
				array = array[0];
				let energy = !!life ? life.energy + 1 : 1;
				life = new Life(array[3]);
				life.step = array[2];
				life.energy = energy;
				let next = (life.step + 1) % life.dnaLevel;
				let nextGene = life.dna.genes[next];
				if (life.energy >= nextGene.power) {
					life.step ++;
					life.energy = 0;
				}

				let grass = gline[j];
				let power = life.getPower();
				if (power > grass) {
					gline[j] = 0;
					continue;
				}
				gline[j] -= power;

				total ++;
				line[j] = life;
			}
			newColony[i] = line;
		}
		this.grid = newColony;
		return total;
	}
}

(root => {
	const MaxWidth = 1000;
	const HeightMargin = 200;

	var running = false;
	var canvas, context, trigger;
	var grass, lives;

	var gridWidth = 100, gridHeight = 100, gridSize = 10;

	const clearCanvas = () => {
		drawFrame(0, 0, gridWidth, gridHeight, 'black', true);
	};
	const drawFrame = (x1, y1, x2, y2, color='white', fill=false, width=2) => {
		x1 *= gridSize;
		y1 *= gridSize;
		x2 *= gridSize;
		y2 *= gridSize;

		if (fill) {
			context.fillStyle = color;
			context.fillRect(x1, y1, x2 - x1, y2 - y1);
		}
		else {
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineTo(x1, y2);
			context.lineTo(x2, y2);
			context.lineTo(x2, y1);
			context.lineTo(x1, y1);
			context.closePath();
			context.strokeStyle = color;
			context.lineWidth = width;
			context.stroke();
		}
	};
	const drawLine = (x1, y1, x2, y2, color='white', width=1) => {
		x1 *= gridSize;
		y1 *= gridSize;
		x2 *= gridSize;
		y2 *= gridSize;

		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.closePath();
		context.strokeStyle = color;
		context.lineWidth = width;
		context.stroke();
	};
	const drawCycle = (x, y, color='white') => {
		x = (x + 0.5) * gridSize;
		y = (y + 0.5) * gridSize;

		context.beginPath();
		context.arc(x, y, gridSize / 2, 0, 2 * Math.PI);
		context.fillStyle = color;
		context.fill();
	};

	const drawPad = () => {
		drawFrame(0, 0, gridWidth, gridHeight);
		for (let i = 0; i < gridWidth; i ++) {
			drawLine(i, 0, i, gridHeight, 'white', 0.2);
		}
		for (let i = 0; i < gridHeight; i ++) {
			drawLine(0, i, gridWidth, i, 'white', 0.2);
		}
	};
	const drawGrass = () => {
		for (let i = 0; i < gridWidth; i ++) {
			for (let j = 0; j < gridHeight; j ++) {
				let color = grass.getColor(i, j);
				drawFrame(i, j, i + 1, j + 1, 'rgb(' + color.join(',') + ')', true);
			}
		}
	};
	const drawLives = () => {
		for (let i = 0; i < gridWidth; i ++) {
			let line = lives.grid[i];
			for (let j = 0; j < gridHeight; j ++) {
				let life = line[j];
				if (!life) continue;
				let color = life.getColor();
				drawCycle(i, j, color);
			}
		}
	};

	const drawAll = () => {
		drawGrass();
		drawPad();
		drawLives();
	};

	const prepareCanvas = () => {
		var w = window.innerWidth, h = window.innerHeight - HeightMargin;
		if (w > MaxWidth) w = MaxWidth;
		var _h = w / gridWidth * gridHeight;
		if (h > _h) {
			h = _h;
		}
		else {
			w = h / gridHeight * gridWidth;
		}
		canvas.width = gridWidth * gridSize;
		canvas.height = gridHeight * gridSize;
		canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';
		canvas.w = w;
		canvas.h = h;
		context = canvas.getContext('2d', {alpha: false});

		drawAll();
	};
	const evoluteSystem = () => {
		if (!running) return;
		var count = lives.evolute(grass);
		count += grass.evolute();
		drawAll();

		if (count === 0) {
			console.log('Game Over!');
			running = false;
			trigger.innerHTML = '开始';
			return;
		}

		requestAnimationFrame(evoluteSystem);
	};

	const randomColor = () => {
		var color = [];
		color[0] = Math.floor(Math.random() * 256);
		color[1] = Math.floor(Math.random() * 256);
		color[2] = Math.floor(Math.random() * 256);
		return color;
	};
	const addGene = (container, gene, genePool) => {
		var line = newEle('div', 'line');
		line._index = genePool.length;
		var hint = newEle('span', 'hint');
		hint.innerText = '基因型';
		var inputter = newEle('span', 'inputter');
		inputter.setAttribute('contentEditable', true);
		inputter.innerText = JSON.stringify(gene);
		line.appendChild(hint);
		line.appendChild(inputter);
		container.appendChild(line);
		var color = randomColor();
		genePool.push([color, inputter, 'rgb(' + color.join(',') + ')']);
	};

	PageBroadcast.on('page-resize', (w, h) => {
		prepareCanvas();
	});

	const UltraLife = {};

	UltraLife.onLeave = () => {
		console.log('UltraLife : Leave');
		running = false;
	};
	UltraLife.init = (ui, btnStopper, btnAdder, container) => {
		canvas = ui.querySelector('canvas');
		grass = new Grass(gridWidth, gridHeight);
		lives = new Colony(gridWidth, gridHeight);
		trigger = btnStopper;
		var genePool = [], currGene = -1, geneField = {}, geneMap = {};

		trigger.addEventListener('click', () => {
			if (running) {
				running = false;
				trigger.innerHTML = '开始';
			}
			else {
				running = true;
				trigger.innerHTML = '暂停';
				let map = [];
				genePool.forEach((g, i) => {
					var gd = g[1].innerText;
					try {
						gd = JSON.parse(gd);
					}
					catch {
						return;
					}
					var name = JSON.stringify(gd);
					var dna = geneMap[name];
					if (!dna) {
						dna = new DNA(randomColor(), gd);
						geneMap[name] = dna;
					}
					map[i] = dna;
				});
				for (let g in geneField) {
					let [x, y, idx] = geneField[g];
					idx = map[idx];
					if (!idx) return;
					lives.add(x, y, idx);
				}
				geneField = {};
				requestAnimationFrame(evoluteSystem);
			}
		});
		container.addEventListener('click', evt => {
			var target = evt.target;
			if (target.tagName === 'SPAN') {
				target = target.parentNode;
			}
			else if (target.tagName !== 'DIV') {
				return;
			}

			[].forEach.call(container.querySelectorAll('div.line.selected'), line => {
				line.classList.remove('selected');
			});
			target.classList.add('selected');
			currGene = target._index;
		});
		canvas.addEventListener('mousedown', evt => {
			if (currGene < 0) return;
			var x = evt.offsetX, y = evt.offsetY;
			x = Math.floor(x / canvas.w * gridWidth);
			y = Math.floor(y / canvas.h * gridHeight);
			drawCycle(x, y, genePool[currGene][2]);
			geneField[x + '-' + y] = [x, y, currGene];
		});

		addGene(container, [[3, -2, -3]], genePool);
		addGene(container, [[3, -2, -3], [3, 4, -2, -3, -4], [3, -2, -3, -4], [3, 4, -2, -3]], genePool);

		prepareCanvas();
	};

	root.UltraLife = UltraLife;
}) (window);