<template>
	<div class="viewer">跳转中，请稍后……</div>
</template>

<style scoped>
.viewer {
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
}
</style>

<script>
export default {
	name: "CyberAvatorArena",
	async mounted () {
		location.href = '/games/cyberavatorarena/index.html';
	},
}
</script>