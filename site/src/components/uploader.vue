<template>
	<div class="file_uploader" :show="show">
		<div class="frame">
			<div class="area" @click="onClick" @dragenter="checkDrop" @dragover="checkDrop" @drop="onDrop">
				<i class="fas fa-plus"></i>
			</div>
			<div class="hint">
				<input ref="hint" type="text" name="url_hint" @keyup="onEnter">
				<button ref="submitter" class="submit" @click="onSubmit">确认</button>
			</div>
		</div>
		<input ref="uploader" type="file" @change="onSelect">
	</div>
</template>

<style scoped>
.file_uploader {
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	z-index: 110;
	opacity: 0;
	background-color: rgba(38, 30, 71, 0.6);
	transform: translateX(-100%);
	pointer-events: none;
	transition: all 300ms ease-in-out
}
.file_uploader[show="true"] {
	opacity: 1;
	transform: translateX(0%);
	pointer-events: all;
}
.file_uploader .frame {
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 300px;
	max-width: 95%;
	transform: translate(-50%, -50%);
}
.file_uploader .frame .area {
	position: relative;
	top: -5px;
	left: -5px;
	width: 100%;
	height: 0px;
	padding-bottom: 100%;
	border-radius: 20px;
	border: 5px dashed rgb(47, 47, 53);
	font-size: 80px;
	cursor: pointer;
	transition: all 300ms ease-in-out;
}
[theme="dark"] .file_uploader .frame .area {
	border-color: rgb(204, 204, 214);
}
.file_uploader .frame .area i.fas {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.file_uploader .hint {
	position: relative;
	display: flex;
	width: 100%;
	margin-top: 10px;
	text-align: center;
}
.file_uploader .hint input {
	box-sizing: border-box;
	flex: 1 1 100%;
	height: 25px;
	margin-right: 10px;
	padding: 5px 10px;
	background-color: transparent;
	outline: none;
	border: none;
	border-bottom: 1px solid rgb(47, 47, 53);
	color: rgb(47, 47, 53);
}
[theme="dark"] .file_uploader .hint input {
	border-bottom: 1px solid rgb(204, 204, 214);
	color: rgb(204, 204, 214);
}
.file_uploader .hint button {
	box-sizing: border-box;
	flex: 1 1 80px;
	height: 25px;
	text-align: center;
	line-height: 22px;
	border-radius: 5px;
	border: 1px solid black;
	outline: none;
	cursor: pointer;
}
.file_uploader input[type="file"] {
	display: none;
}
</style>

<script>
export default {
	name: "Uploader",
	data () {
		return {
			show: false
		}
	},
	props: {
		type: String
	},
	methods: {
		onClick () {
			var inputter = this.$refs.uploader;
			inputter.accept = this.type;
			inputter.click();
		},
		onEnter (evt) {
			if (evt.keyCode === 13) this.onSubmit();
		},
		onSelect (evt) {
			var file = evt.target.files;
			if (!file) return;
			file = file.item(0);
			if (!file) return;
			var target = this.$refs.hint;
			target.file = file;
			target.value = 'file://' + file.name;
			target.focus();
		},
		onSubmit () {
			var target = this.$refs.hint;
			if (!!target.file && target.value === 'file://' + target.file.name) {
				this.$emit('parse', target.file);
			}
			else {
				this.$emit('parse', target.value);
			}
		},
		checkDrop (evt) {
			evt.preventDefault();
		},
		onDrop (evt) {
			evt.preventDefault();
			var file = evt.dataTransfer.files;
			if (!file) return;
			file = file[0];
			if (!file) return;

			var type = file.name;
			type = type.split('.').last;
			var availables = this.type.split(',').map(e => e.replace(/^\.+/, ''))
			if (!availables.includes(type)) return;

			var target = this.$refs.hint;
			target.file = file;
			target.value = 'file://' + file.name;
			target.focus();
		},
		active () {
			var target = this.$refs.hint;
			target.file = null;
			target.value = "";
			this.show = true;
		},
		deactive () {
			var target = this.$refs.hint;
			target.file = null;
			target.value = "";
			this.show = false;
		}
	}
}
</script>