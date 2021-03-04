<template>
	<div class="tab_container">
		<div v-for="tab in tabs" class="tab_item" :selected="tab.key===selected" @click="select(tab)" @dblclick="close(tab)">{{tab.name}}</div>
		<div v-if="showNewTab" class="tab_item tab_new_item" @click="newTab"><i class="fas fa-plus"></i></div>
	</div>
</template>

<script>
require('@/assets/tabs.css');
export default {
	name: "Tabs",
	props: {
		tabs: Array,
		showNewTab: Boolean,
		selected: String
	},
	methods: {
		select (info) {
			this.$emit('select', info);
		},
		newTab () {
			this.$emit('newTab');
		},
		close (info) {
			this.$emit('close', info);
		}
	}
}
</script>