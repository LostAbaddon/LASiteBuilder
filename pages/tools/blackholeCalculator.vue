<template>
	<Crumb target="tools" />
	<div class="infomation markup">
		<p>本工具迁徙自 Viktor T. Toth 做的[霍金辐射计算器](https://www.vttoth.com/CMS/physics-notes/311-hawking-radiation-calculator)，主要功能是计算和黑洞相关的数据。</p>
		<p>>	另：本工具最好在PC浏览器上看，不然恐怕会看起来很糟糕……</p>
		<p>这里的大部分物理量都是从无穷远观测者看来的，且“表面引力”指的是对应的牛顿引力大小，因为在广义相对论中任意黑洞的表面引力都是无穷大。同理，“等效密度”值得也是牛顿值。而“落入奇点所用时间”是从无穷远下落者的随动坐标系测量而得，并不是无穷远观测者的观测值，在无穷远观测者看来落入黑洞所用时间为无限长。</p>
	</div>
	<div ref="CalTable" class="table">
		<div class="header">
			<span class="name">物理量</span>
			<span class="value">取值</span>
			<span class="unity">单位</span>
			<span class="express">表达式</span>
		</div>
		<div class="line">
			<span class="name">质量</span>
			<span class="value"><input type="number" v-model="mass.value" @keyup.enter="calculate('mass')" /></span>
			<span class="unity"><select v-model="mass.unity">
				<option value=0>太阳质量</option>
				<option value=1>地球质量</option>
				<option value=2>吨</option>
				<option value=3>千克</option>
				<option value=4>克</option>
				<option value=5>电子伏</option>
				<option value=6>电子质量</option>
				<option value=7>普朗克质量</option>
			</select></span>
			<span class="express">$M$</span>
		</div>
		<div class="line">
			<span class="name">视界半径</span>
			<span class="value"><input type="number" v-model="radius.value" @keyup.enter="calculate('radius')" /></span>
			<span class="unity"><select v-model="radius.unity">
				<option value=0>秒差距</option>
				<option value=1>光年</option>
				<option value=2>天文单位</option>
				<option value=3>光秒</option>
				<option value=4>公里</option>
				<option value=5>米</option>
				<option value=6>厘米</option>
				<option value=7>纳米</option>
				<option value=8>飞米</option>
				<option value=9>普朗克长度</option>
			</select></span>
			<span class="express">$R = M \frac{2 G}{c^2}$</span>
		</div>
		<div class="line">
			<span class="name">视界面积</span>
			<span class="value"><input type="number" v-model="surface.value" @keyup.enter="calculate('surface')" /></span>
			<span class="unity"><select v-model="surface.unity">
				<option value=0>平方秒差距</option>
				<option value=1>平方光年</option>
				<option value=2>平方天文单位</option>
				<option value=3>平方光秒</option>
				<option value=4>平方公里</option>
				<option value=5>平方米</option>
				<option value=6>平方厘米</option>
				<option value=7>平方纳米</option>
				<option value=8>平方飞米</option>
				<option value=9>普朗克面积</option>
			</select></span>
			<span class="express">$A = M^2 \frac{16 \pi G^2}{c^4}$</span>
		</div>
		<div class="line">
			<span class="name">等效密度</span>
			<span class="value"><input type="number" v-model="density.value" @keyup.enter="calculate('density')" /></span>
			<span class="unity"><select v-model="density.unity">
				<option value=0>太阳密度</option>
				<option value=1>地球密度</option>
				<option value=2>千克/立方米</option>
				<option value=3>克/立方厘米</option>
				<option value=4>普朗克密度</option>
			</select></span>
			<span class="express">$\rho = \frac{1}{M^2} \frac{3 c^6}{32 \pi G^3}$</span>
		</div>
		<div class="line">
			<span class="name">表面引力</span>
			<span class="value"><input type="number" v-model="gravity.value" @keyup.enter="calculate('gravity')" /></span>
			<span class="unity"><select v-model="gravity.unity">
				<option value=0>平均地表引力</option>
				<option value=1>米/秒平方</option>
				<option value=2>普朗克加速度</option>
			</select></span>
			<span class="express">$\kappa = \frac{1}{M} \frac{c^4}{4 G}$</span>
		</div>
		<div class="line">
			<span class="name">表面潮汐力</span>
			<span class="value"><input type="number" v-model="tide.value" @keyup.enter="calculate('tide')" /></span>
			<span class="unity"><select v-model="tide.unity">
				<option value=0>平均地表潮汐力</option>
				<option value=1>米/秒平方/米</option>
				<option value=2>普朗克单位</option>
			</select></span>
			<span class="express">$d \kappa = \frac{1}{M^2} \frac{c^6}{4 G^2}$</span>
		</div>
		<div class="line">
			<span class="name">落到奇点所需时间</span>
			<span class="value"><input type="number" v-model="time.value" @keyup.enter="calculate('time')" /></span>
			<span class="unity"><select v-model="time.unity">
				<option value=0>亿年</option>
				<option value=1>百万年</option>
				<option value=2>万年</option>
				<option value=3>世纪</option>
				<option value=4>年</option>
				<option value=5>天</option>
				<option value=6>小时</option>
				<option value=7>分钟</option>
				<option value=8>秒</option>
				<option value=9>纳秒</option>
				<option value=10>飞秒</option>
				<option value=11>普朗克时间</option>
			</select></span>
			<span class="express">$t_S = M \frac{\pi G}{c^3}$</span>
		</div>
		<div class="line">
			<span class="name">熵</span>
			<span class="value"><input type="number" v-model="entropy.value" @keyup.enter="calculate('entropy')" /></span>
			<span class="unity">无量纲</span>
			<span class="express">$S = M^2 \frac{4 \pi G}{\hbar c}$</span>
		</div>
		<div class="line">
			<span class="name">温度</span>
			<span class="value"><input type="number" v-model="temperature.value" @keyup.enter="calculate('temperature')" /></span>
			<span class="unity"><select v-model="temperature.unity">
				<option value=0>开尔文</option>
				<option value=1>摄氏度</option>
				<option value=2>华氏度</option>
				<option value=3>普朗克温度</option>
			</select></span>
			<span class="express">$T = \frac{1}{M} \frac{\hbar c^3}{8 \pi k_B G}$</span>
		</div>
		<div class="line">
			<span class="name">光通量功率</span>
			<span class="value"><input type="number" v-model="luminousity.value" @keyup.enter="calculate('luminousity')" /></span>
			<span class="unity"><select v-model="luminousity.unity">
				<option value=0>瓦</option>
				<option value=1>千瓦（kW）</option>
				<option value=2>兆瓦（MW）</option>
				<option value=3>太阳功率</option>
			</select></span>
			<span class="express">$L = \frac{1}{M^2} \frac{\hbar c^6}{15360 \pi G^2}$</span>
		</div>
		<div class="line">
			<span class="name">寿命</span>
			<span class="value"><input type="number" v-model="lifetime.value" @keyup.enter="calculate('lifetime')" /></span>
			<span class="unity"><select v-model="lifetime.unity">
				<option value=0>亿年</option>
				<option value=1>百万年</option>
				<option value=2>万年</option>
				<option value=3>世纪</option>
				<option value=4>年</option>
				<option value=5>天</option>
				<option value=6>小时</option>
				<option value=7>分钟</option>
				<option value=8>秒</option>
				<option value=9>纳秒</option>
				<option value=10>飞秒</option>
				<option value=11>普朗克时间</option>
			</select></span>
			<span class="express">$t = M^3 \frac{5120 \pi G^2}{1.8083 \hbar c^4}$</span>
		</div>
	</div>
</template>

<style scoped>
.table {
	display: block;
	width: 800px;
}
.table > div {
	display: block;
	padding: 2px 5px;
	border-bottom-style: solid;
	border-bottom-color: rgba(62, 56, 65, 1.0);
}
body[theme="dark"] .table > div {
	border-bottom-color: rgba(252, 250, 242, 1.0);
}
.table .header {
	border-bottom-width: 2px;
	font-size: 18px;
	font-weight: bolder;
}
.table .line {
	border-bottom-width: 1px;
	font-size: 16px;
}
.table > div > span {
	display: inline-block;
	margin-right: 10px;
}
.table > div > span.name {
	width: 150px;
	text-align: right;
}
.table > div > span.value {
	width: 180px;
}
.table > div > span.unity {
	width: 120px;
}
.table > div > span > input,
.table > div > span > select {
	box-sizing: border-box;
	display: inline-block;
	width: 100%;
	padding: 2px;
	background-color: transparent;
	border: none;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(62, 56, 65, 1.0);
	outline: none;
	resize: none;
	color: inherit;
}
body[theme="dark"] .table > div > span > input,
body[theme="dark"] .table > div > span > select {
	border-bottom-color: rgba(252, 250, 242, 1.0);
}
.table > div > span > input {
}
.table > div > span > select {
	background: transparent;
}
.table > div > span > select > option {
	background: rgba(252, 250, 242, 1.0);
}
body[theme="dark"] .table > div > span > select > option {
	background-color: rgba(62, 56, 65, 1.0);
}
</style>

<script>
const Constants = {
	lightspeed:	299792458,
	gravity: 	6.6743e-11,
	planck: 	6.62607015e-34,
	planckbar: 	1.0545718e-34,
	boltzman: 	1.38064852e-23,
	e:			1.602176634e-19,
	eV:			1.602176634e-19,
	massE:		9.10938356e-31,
	AU:			149597870700,
};
Constants.planckLength = (Constants.planckbar * Constants.gravity / (Constants.lightspeed ** 3)) ** 0.5;
Constants.planckTime = Constants.planckLength / Constants.lightspeed;
Constants.planckArea = Constants.planckLength ** 2;
Constants.planckVolumn = Constants.planckLength ** 3;
Constants.planckMass = (Constants.planckbar * Constants.lightspeed / Constants.gravity) ** 0.5;
Constants.planckEnergy = Constants.planckMass / (Constants.lightspeed ** 2);
Constants.planckTemperature = (Constants.planckbar * (Constants.lightspeed ** 5) / Constants.gravity / (Constants.boltzman ** 2)) ** 0.5;
Constants.planckForce = (Constants.lightspeed ** 4) / Constants.gravity;
Constants.planckAccelation = Constants.lightspeed / Constants.planckTime;
Constants.planckPower = Constants.planckEnergy / Constants.planckTime;
Constants.planckDensity = Constants.planckMass / (Constants.planckLength ** 3);
Constants.parsecs = Constants.AU * 648000 / Math.PI;
Constants.secondsInYear = 3600 * 24 * 365;
Constants.lightyear = Constants.lightspeed * Constants.secondsInYear;
Constants.absoluteZero = -273.16;
Constants.C2F = [5 / 9, -32];

const Unities = {
	mass: [
		1.9891e30,
		5.97237e24,
		1000,
		1,
		1e-3,
		Constants.eV / Constants.lightspeed / Constants.lightspeed,
		Constants.massE,
		Constants.planckMass
	],
	radius: [
		Constants.parsecs,
		Constants.lightyear,
		Constants.AU,
		Constants.lightspeed,
		1000,
		1,
		1e-2,
		1e-9,
		1e-12,
		Constants.planckTime,
	],
	surface: [],
	density: [
		1.41e3,
		5.51e3,
		1,
		1e3,
		Constants.planckDensity,
	],
	gravity: [
		9.80665,
		1,
		Constants.planckAccelation,
	],
	tide: [
		0.0000030829012181674645,
		1,
		Constants.planckAccelation / Constants.planckLength
	],
	time: [
		Constants.secondsInYear * 1e8,
		Constants.secondsInYear * 1e6,
		Constants.secondsInYear * 1e4,
		Constants.secondsInYear * 1e2,
		Constants.secondsInYear,
		3600 * 24,
		3600,
		60,
		1,
		1e-9,
		1e-12,
		Constants.planckTime,
	],
	entropy: [1],
	temperature: [
		1,
		[1, 273.15],
		[5 / 9, 273.15 - 160 / 9],
		Constants.planckTemperature,
	],
	luminousity: [
		1,
		1e3,
		1e6,
		3.86e23 * 1e3,
	],
	lifetime: [],
};
for (let key of Unities.radius) {
	Unities.surface.push(key ** 2);
}
for (let key of Unities.time) {
	Unities.lifetime.push(key);
}

const Convert2Mass = {
	mass ({value, unity}) {
		return value * Unities.mass[unity];
	},
	radius ({value, unity}) {
		var radius = value * Unities.radius[unity];
		return radius * (Constants.lightspeed ** 2) / (Constants.gravity * 2);
	},
	surface ({value, unity}) {
		var surface = value * Unities.surface[unity];
		var mass2 = surface * (Constants.lightspeed ** 4) / ((Constants.gravity ** 2) * 16 * Math.PI);
		return mass2 ** 0.5;
	},
	density ({value, unity}) {
		var density = value * Unities.density[unity];
		var mass2 = (3 * Constants.lightspeed ** 6) / ((Constants.gravity ** 3) * 32 * Math.PI) / density;
		return mass2 ** 0.5;
	},
	gravity ({value, unity}) {
		var gravity = value * Unities.gravity[unity];
		return (Constants.lightspeed ** 4) / (Constants.gravity * 4) / gravity;
	},
	tide ({value, unity}) {
		var tide = value * Unities.tide[unity];
		var mass2 = (Constants.lightspeed ** 6) / ((Constants.gravity ** 2) * 4) / tide;
		return mass2 ** 0.5;
	},
	time ({value, unity}) {
		var time = value * Unities.time[unity];
		return time * (Constants.lightspeed ** 3) / (Constants.gravity * Math.PI);
	},
	entropy ({value, unity}) {
		var mass2 = entropy * (Constants.planckbar * Constants.lightspeed) / (Constants.gravity * 4 * Math.PI);
		return mass2 ** 0.5;
	},
	temperature ({value, unity}) {
		var temperature;
		if (unity === 3) {
			temperature = value * Unities.temperature[unity];
		}
		else if (unity > 0) {
			let p = Unities.temperature[unity];
			temperature = value * p[0] + p[1];
		}
		else {
			temperature = value;
		}

		return (Constants.planckbar * (Constants.lightspeed ** 3)) / (8 * Math.PI * Constants.boltzman * Constants.gravity) / temperature;
	},
	luminousity ({value, unity}) {
		var luminousity = value * Unities.luminousity[unity];
		var mass2 = (Constants.planckbar * (Constants.lightspeed ** 6)) / (15360 * Math.PI * (Constants.gravity ** 2)) / luminousity;
		return mass2 ** 0.5;
	},
	lifetime ({value, unity}) {
		var lifetime = value * Unities.lifetime[unity];
		var mass3 = lifetime * (1.8083 * Constants.planckbar * (Constants.lightspeed ** 4)) / (5120 * Math.PI * (Constants.gravity ** 2));
		return mass3 ** (1 / 3);
	},
};
const CalculateFromMass = {
	mass (mass, unity) {
		return mass / Unities.mass[unity];
	},
	radius (mass, unity) {
		var radius = mass * (2 * Constants.gravity) / (Constants.lightspeed ** 2);
		return radius / Unities.radius[unity];
	},
	surface (mass, unity) {
		var surface = (mass ** 2) * (16 * Math.PI * (Constants.gravity ** 2)) / (Constants.lightspeed ** 4);
		return surface / Unities.surface[unity];
	},
	density (mass, unity) {
		var density = (3 * (Constants.lightspeed ** 6)) / (32 * Math.PI * (Constants.gravity ** 3)) / (mass ** 2);
		return density / Unities.density[unity];
	},
	gravity (mass, unity) {
		var gravity = (Constants.lightspeed ** 4) / (4 * Constants.gravity) / mass;
		return gravity / Unities.gravity[unity];
	},
	tide (mass, unity) {
		var tide = (Constants.lightspeed ** 6) / (4 * (Constants.gravity ** 2)) / (mass ** 2);
		return tide / Unities.tide[unity];
	},
	time (mass, unity) {
		var time = mass * (Math.PI * Constants.gravity) / (Constants.lightspeed ** 3);
		return time / Unities.time[unity];
	},
	entropy (mass, unity) {
		return (mass ** 2) * (4 * Math.PI * Constants.gravity) / (Constants.planckbar * Constants.lightspeed);
	},
	temperature (mass, unity) {
		var temperature = (Constants.planckbar * (Constants.lightspeed ** 3)) / (8 * Math.PI * Constants.boltzman * Constants.gravity) / mass;
		if (unity === 0) return temperature;
		if (unity === 3) return temperature / Unities.temperature[3];
		var p = Unities.temperature[unity];
		return (temperature - p[1]) / p[0];
	},
	luminousity (mass, unity) {
		var luminousity = (Constants.planckbar * (Constants.lightspeed ** 6)) / (15360 * Math.PI * (Constants.gravity ** 2)) / (mass ** 2);
		return luminousity / Unities.luminousity[unity];
	},
	lifetime (mass, unity) {
		var lifetime = (mass ** 3) * (5120 * Math.PI * (Constants.gravity ** 2)) / (1.8083 * Constants.planckbar * (Constants.lightspeed ** 4));
		return lifetime / Unities.lifetime[unity];
	},
};

export default {
	name: "ParseMarkup",
	data () {
		return {
			mass: {
				value: 1,
				unity: 0,
			},
			radius: {
				value: 1,
				unity: 4,
			},
			surface: {
				value: 1,
				unity: 4,
			},
			density: {
				value: 1,
				unity: 0,
			},
			gravity: {
				value: 1,
				unity: 1,
			},
			tide: {
				value: 1,
				unity: 1,
			},
			time: {
				value: 1,
				unity: 8,
			},
			entropy: {
				value: 1,
				unity: 0,
			},
			temperature: {
				value: 1,
				unity: 0,
			},
			luminousity: {
				value: 1,
				unity: 0,
			},
			lifetime: {
				value: 1,
				unity: 4,
			},
		}
	},
	mounted () {
		var maths = this.$refs.CalTable.querySelectorAll('.line .express');
		[].forEach.call(maths, async ele => {
			MathJax.Hub.Queue(["Typeset", MathJax.Hub, ele]);
		});

		this.calculate('mass');

		callPageLoaded();
	},
	methods: {
		calculate (type) {
			var mass = Convert2Mass[type](this[type]);
			for (let key in CalculateFromMass) {
				if (key === type) continue;
				this[key].value = CalculateFromMass[key](mass, this[key].unity);
			}
		},
	}
}
</script>