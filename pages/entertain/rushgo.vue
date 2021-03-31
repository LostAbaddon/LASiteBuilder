<template>
	<div class="RushGo">
		<div class="actionPad">
			<div class="panel info">
				<div class="info info_header">
					<span class="name">选手</span>
					<span class="win">胜数</span>
					<!-- <span class="score">局势</span> -->
					<span class="time">用时</span>
					<span class="loop">手数：<span>120</span></span>
				</div>
				<div class="user info black selected"></div>
				<div class="user info white"></div>
			</div>
			<div class="panel control">
				<div class="subpanel review">
					<div class="btn prev">上一步</div>
					<div class="btn next">下一步</div>
				</div>
				<div class="subpanel action">
					<div class="btn restart">重新开局</div>
				</div>
			</div>
		</div>
		<div class="gameArea">
			<div class="boardPad">
				<canvas id="GoBoard"></canvas>
			</div>
			<div class="resultPad init show">
				<div class="info">点击选手名选择角色</div>
				<div class="restart">开战</div>
				<div class="chooseMode">选择模式</div>
				<div class="review">复盘</div>
			</div>
			<div class="roleSelector">
				<div class="title">请选择角色类型：</div>
				<div class="roleList"></div>
				<div class="btnArea">
					<div class="btn addNew">添加角色</div>
					<div class="btn cancel">取消</div>
				</div>
			</div>
			<div class="addRole">
				<div class="title">添加角色</div>
				<div class="type">
					<span class="label">类型：</span>
					<select name="RoleType"></select>
				</div>
				<div class="type">
					<span class="label">名字：</span>
					<input type="text" name="Name" value="神秘人">
				</div>
				<div class="prop">
					<span class="label">进攻性：</span>
					<input type="number" min=0 max=1 step=0.05 name="Attacktive" value="0.5">
					<span class="sep"></span>
					<span class="label">忍耐性：</span>
					<input type="number" min=-10 max=10 step=1 name="Attitude" value="0">
				</div>
				<div class="prop">
					<span class="label">预测深度：</span>
					<input type="number" min=0 max=100 step=1 name="Deepth" value="0">
					<span class="sep"></span>
					<span class="label">预测广度：</span>
					<input type="number" min=1 max=100 step=1 name="Range" value="1">
					<span class="sep"></span>
					<span class="label">换位思考：</span>
					<span class="radio"><input type="radio" name="ThinkAsEnemy" value="true">是</span>
					<span class="radio"><input type="radio" name="ThinkAsEnemy" value="false" checked>否</span>
				</div>
				<div class="prop aiThree">
					<span class="label">深思广度：</span>
					<input type="number" min=0 max=100 step=1 name="DeepRange" value="2">
					<span class="sep"></span>
					<span class="label">深思减速：</span>
					<input type="number" min=0 max=10 step=1 name="DecayPower" value="2">
					<span class="sep"></span>
					<span class="label">旁支权重：</span>
					<input type="number" min=0 max=1 step=0.05 name="DecayRate" value="0.5">
				</div>
				<div class="type">
					<span class="label">外势倾向：</span>
					<input type="number" min=0 max=1 step=0.05 name="Outsider" value="0">
				</div>
				<div class="controller">
					<span class="btn cancel">取消</span>
					<span class="btn ok">添加</span>
				</div>
			</div>
			<div class="gameMode">
				<div class="title">选择模式</div>
				<div class="subpanel">
					<span class="subtitle">是否有禁手：</span>
					<span class="radio"><input type="radio" name="ForbiddenHands" value="true">是</span>
					<span class="radio"><input type="radio" name="ForbiddenHands" value="false" checked>否</span>
				</div>
				<div class="subpanel">
					<span class="subtitle">　开局座子：</span>
					<span class="radio"><input type="radio" name="StartWithInits" value=0 checked>无</span>
					<span class="radio"><input type="radio" name="StartWithInits" value=3>三座子</span>
					<span class="radio"><input type="radio" name="StartWithInits" value=5>五座子</span>
				</div>
				<div class="center">
					<span class="btn start">确定</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
var needLoad = true;
const chChangeLoadingHint = new BroadcastChannel('change-loading-hint');
chChangeLoadingHint.addEventListener('message', msg => {
	RushGo.onLeave();
});

export default {
	name: "RushGo",
	async mounted () {
		if (needLoad) {
			await Promise.all([
				loadCSS('/css/rushgo.css'),
				loadJS('/js/rushgo.js'),
				loadJS('/js/rushgo/aimanager.js'),
			]);
			await Promise.all([
				loadJS('/js/rushgo/basic.js'),
			]);
			await Promise.all([
				loadJS('/js/rushgo/ai_one.js'),
			]);
			await Promise.all([
				loadJS('/js/rushgo/ai_two.js'),
				loadJS('/js/rushgo/ai_three.js'),
			]);
			await Promise.all([
				loadJS('/js/rushgo/ai_four.js'),
			]);
			needLoad = false;
		}
		RushGo.init();

		await wait();
		callPageLoaded();
	},
}
</script>