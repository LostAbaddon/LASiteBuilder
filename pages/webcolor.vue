<template>
	<div class="viewer">
		<Crumb target="library" />
		<div class="container">
			<div class="colorItem" v-for="item in colorList" :style="{'background-color': item.color}" @click="onClick">
				<div class="name">{{item.name}}</div>
				<div class="color">{{item.color.toUpperCase()}}</div>
			</div>
		</div>
		<div class="tail">本站内容整理自<a href="https://zh.wikipedia.org/wiki/%E9%A2%9C%E8%89%B2%E5%88%97%E8%A1%A8">维基百科</a>。</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-flow: wrap;
	justify-content: space-around;
	transition: background-color 300ms ease-in-out;
}
.container .colorItem {
	box-sizing: border-box;
	flex: 0.1 0.1 180px;
	height: 80px;
	margin: 20px;
	padding: 10px;
	border: 1px solid rgb(48, 47, 75);
	border-radius: 5px;
	text-align: center;
	user-select: none;
	cursor: pointer;
}
.container .colorItem .name,
.container .colorItem .color {
	color: white;
	text-shadow: 0px 0px 1px black, 1px 1px 3px rgba(23, 23, 23, 0.6);
	pointer-events: none;
}

.container .colorItem .name {
	margin-bottom: 5px;
	font-size: 22px;
	font-weight: bolder;
}
.container .colorItem .color {
	font-size: 18px;
}
.tail {
	margin-top: 15px;
	text-align: center;
	font-size: 12px;
	color: rgb(225, 225, 225);
	font-style: italic;
}
</style>

<script>
export default {
	name: "chinesecolor",
	data () {
		return {
			colorList: [
				{
					"name": "黑色",
					"color": "rgb(0, 0, 0)"
				},
				{
					"name": "昏灰",
					"color": "rgb(105, 105, 105)"
				},
				{
					"name": "灰色",
					"color": "rgb(128, 128, 128)"
				},
				{
					"name": "暗灰",
					"color": "rgb(169, 169, 169)"
				},
				{
					"name": "银色",
					"color": "rgb(192, 192, 192)"
				},
				{
					"name": "亮灰色",
					"color": "rgb(211, 211, 211)"
				},
				{
					"name": "庚斯博罗灰",
					"color": "rgb(220, 220, 220)"
				},
				{
					"name": "白烟色",
					"color": "rgb(245, 245, 245)"
				},
				{
					"name": "白色",
					"color": "rgb(255, 255, 255)"
				},
				{
					"name": "雪色",
					"color": "rgb(255, 250, 250)"
				},
				{
					"name": "铁灰色",
					"color": "rgb(98, 91, 87)"
				},
				{
					"name": "沙棕",
					"color": "rgb(230, 195, 195)"
				},
				{
					"name": "玫瑰褐",
					"color": "rgb(188, 143, 143)"
				},
				{
					"name": "亮珊瑚色",
					"color": "rgb(240, 128, 128)"
				},
				{
					"name": "印度红",
					"color": "rgb(205, 92, 92)"
				},
				{
					"name": "褐色",
					"color": "rgb(165, 42, 42)"
				},
				{
					"name": "砖红色",
					"color": "rgb(178, 34, 34)"
				},
				{
					"name": "栗色",
					"color": "rgb(128, 0, 0)"
				},
				{
					"name": "暗红",
					"color": "rgb(139, 0, 0)"
				},
				{
					"name": "鲜红",
					"color": "rgb(230, 0, 0)"
				},
				{
					"name": "红色",
					"color": "rgb(255, 0, 0)"
				},
				{
					"name": "柿子橙",
					"color": "rgb(255, 77, 64)"
				},
				{
					"name": "雾玫瑰色",
					"color": "rgb(255, 228, 225)"
				},
				{
					"name": "鲑红",
					"color": "rgb(250, 128, 114)"
				},
				{
					"name": "腥红",
					"color": "rgb(255, 34, 0)"
				},
				{
					"name": "蕃茄红",
					"color": "rgb(255, 99, 71)"
				},
				{
					"name": "暗鲑红",
					"color": "rgb(233, 150, 122)"
				},
				{
					"name": "珊瑚红",
					"color": "rgb(255, 127, 80)"
				},
				{
					"name": "橙红",
					"color": "rgb(255, 69, 0)"
				},
				{
					"name": "亮鲑红",
					"color": "rgb(255, 160, 122)"
				},
				{
					"name": "朱红",
					"color": "rgb(255, 77, 0)"
				},
				{
					"name": "赭黄",
					"color": "rgb(160, 82, 45)"
				},
				{
					"name": "热带橙",
					"color": "rgb(255, 128, 51)"
				},
				{
					"name": "驼色",
					"color": "rgb(161, 107, 71)"
				},
				{
					"name": "杏黄",
					"color": "rgb(230, 153, 102)"
				},
				{
					"name": "椰褐",
					"color": "rgb(77, 31, 0)"
				},
				{
					"name": "海贝色",
					"color": "rgb(255, 245, 238)"
				},
				{
					"name": "鞍褐",
					"color": "rgb(139, 69, 19)"
				},
				{
					"name": "巧克力色",
					"color": "rgb(210, 105, 30)"
				},
				{
					"name": "燃橙",
					"color": "rgb(204, 85, 0)"
				},
				{
					"name": "阳橙",
					"color": "rgb(255, 115, 0)"
				},
				{
					"name": "粉扑桃色",
					"color": "rgb(255, 218, 185)"
				},
				{
					"name": "沙褐",
					"color": "rgb(244, 164, 96)"
				},
				{
					"name": "铜色",
					"color": "rgb(184, 115, 51)"
				},
				{
					"name": "亚麻色",
					"color": "rgb(250, 240, 230)"
				},
				{
					"name": "蜜橙",
					"color": "rgb(255, 179, 102)"
				},
				{
					"name": "秘鲁色",
					"color": "rgb(205, 133, 63)"
				},
				{
					"name": "乌贼墨色",
					"color": "rgb(112, 66, 20)"
				},
				{
					"name": "赭色",
					"color": "rgb(204, 119, 34)"
				},
				{
					"name": "陶坯黄",
					"color": "rgb(255, 228, 196)"
				},
				{
					"name": "橘色",
					"color": "rgb(242, 133, 0)"
				},
				{
					"name": "暗橙",
					"color": "rgb(255, 140, 0)"
				},
				{
					"name": "古董白",
					"color": "rgb(250, 235, 215)"
				},
				{
					"name": "日晒色",
					"color": "rgb(210, 180, 140)"
				},
				{
					"name": "硬木色",
					"color": "rgb(222, 184, 135)"
				},
				{
					"name": "杏仁白",
					"color": "rgb(255, 235, 205)"
				},
				{
					"name": "那瓦霍白",
					"color": "rgb(255, 222, 173)"
				},
				{
					"name": "万寿菊黄",
					"color": "rgb(255, 153, 0)"
				},
				{
					"name": "蕃木瓜色",
					"color": "rgb(255, 239, 213)"
				},
				{
					"name": "灰土色",
					"color": "rgb(204, 179, 140)"
				},
				{
					"name": "卡其色",
					"color": "rgb(153, 107, 31)"
				},
				{
					"name": "鹿皮鞋色",
					"color": "rgb(255, 228, 181)"
				},
				{
					"name": "旧蕾丝色",
					"color": "rgb(253, 245, 230)"
				},
				{
					"name": "小麦色",
					"color": "rgb(245, 222, 179)"
				},
				{
					"name": "桃色",
					"color": "rgb(255, 229, 180)"
				},
				{
					"name": "橙色",
					"color": "rgb(255, 128, 0)"
				},
				{
					"name": "花卉白",
					"color": "rgb(255, 250, 240)"
				},
				{
					"name": "金菊色",
					"color": "rgb(218, 165, 32)"
				},
				{
					"name": "暗金菊色",
					"color": "rgb(184, 134, 11)"
				},
				{
					"name": "咖啡色",
					"color": "rgb(77, 57, 0)"
				},
				{
					"name": "茉莉黄",
					"color": "rgb(230, 195, 92)"
				},
				{
					"name": "琥珀色",
					"color": "rgb(255, 191, 0)"
				},
				{
					"name": "玉米丝色",
					"color": "rgb(255, 248, 220)"
				},
				{
					"name": "铬黄",
					"color": "rgb(230, 184, 0)"
				},
				{
					"name": "金色",
					"color": "rgb(255, 215, 0)"
				},
				{
					"name": "柠檬绸色",
					"color": "rgb(255, 250, 205)"
				},
				{
					"name": "亮卡其色",
					"color": "rgb(240, 230, 140)"
				},
				{
					"name": "灰金菊色",
					"color": "rgb(238, 232, 170)"
				},
				{
					"name": "暗卡其色",
					"color": "rgb(189, 183, 107)"
				},
				{
					"name": "含羞草黄",
					"color": "rgb(230, 217, 51)"
				},
				{
					"name": "奶油色",
					"color": "rgb(255, 253, 208)"
				},
				{
					"name": "象牙色",
					"color": "rgb(255, 255, 240)"
				},
				{
					"name": "米色",
					"color": "rgb(245, 245, 220)"
				},
				{
					"name": "亮黄",
					"color": "rgb(255, 255, 224)"
				},
				{
					"name": "亮金菊黄",
					"color": "rgb(250, 250, 210)"
				},
				{
					"name": "香槟黄",
					"color": "rgb(255, 255, 153)"
				},
				{
					"name": "芥末黄",
					"color": "rgb(204, 204, 77)"
				},
				{
					"name": "月黄",
					"color": "rgb(255, 255, 77)"
				},
				{
					"name": "橄榄色",
					"color": "rgb(128, 128, 0)"
				},
				{
					"name": "鲜黄",
					"color": "rgb(255, 239, 0)"
				},
				{
					"name": "黄色",
					"color": "rgb(255, 255, 0)"
				},
				{
					"name": "苔藓绿",
					"color": "rgb(105, 119, 35)"
				},
				{
					"name": "亮柠檬绿",
					"color": "rgb(204, 255, 0)"
				},
				{
					"name": "橄榄军服绿",
					"color": "rgb(107, 142, 35)"
				},
				{
					"name": "黄绿",
					"color": "rgb(154, 205, 50)"
				},
				{
					"name": "暗橄榄绿",
					"color": "rgb(85, 107, 47)"
				},
				{
					"name": "苹果绿",
					"color": "rgb(140, 230, 0)"
				},
				{
					"name": "绿黄",
					"color": "rgb(173, 255, 47)"
				},
				{
					"name": "草绿",
					"color": "rgb(153, 230, 77)"
				},
				{
					"name": "草坪绿",
					"color": "rgb(124, 252, 0)"
				},
				{
					"name": "查特酒绿",
					"color": "rgb(127, 255, 0)"
				},
				{
					"name": "叶绿",
					"color": "rgb(115, 184, 57)"
				},
				{
					"name": "嫩绿",
					"color": "rgb(153, 255, 77)"
				},
				{
					"name": "明绿",
					"color": "rgb(102, 255, 0)"
				},
				{
					"name": "钴绿",
					"color": "rgb(102, 255, 89)"
				},
				{
					"name": "蜜瓜绿",
					"color": "rgb(240, 255, 240)"
				},
				{
					"name": "暗海绿",
					"color": "rgb(143, 188, 143)"
				},
				{
					"name": "亮绿",
					"color": "rgb(144, 238, 144)"
				},
				{
					"name": "灰绿",
					"color": "rgb(152, 251, 152)"
				},
				{
					"name": "常春藤绿",
					"color": "rgb(54, 191, 54)"
				},
				{
					"name": "森林绿",
					"color": "rgb(34, 139, 34)"
				},
				{
					"name": "柠檬绿",
					"color": "rgb(50, 205, 50)"
				},
				{
					"name": "暗绿",
					"color": "rgb(0, 100, 0)"
				},
				{
					"name": "绿色",
					"color": "rgb(0, 128, 0)"
				},
				{
					"name": "鲜绿色",
					"color": "rgb(0, 255, 0)"
				},
				{
					"name": "孔雀石绿",
					"color": "rgb(34, 195, 46)"
				},
				{
					"name": "薄荷绿",
					"color": "rgb(22, 152, 43)"
				},
				{
					"name": "青瓷绿",
					"color": "rgb(172, 225, 175)"
				},
				{
					"name": "孔雀石绿",
					"color": "rgb(115, 230, 140)"
				},
				{
					"name": "绿松石绿",
					"color": "rgb(77, 230, 128)"
				},
				{
					"name": "铬绿",
					"color": "rgb(18, 116, 54)"
				},
				{
					"name": "苍色",
					"color": "rgb(184, 221, 200)"
				},
				{
					"name": "海绿",
					"color": "rgb(46, 139, 87)"
				},
				{
					"name": "中海绿",
					"color": "rgb(60, 179, 113)"
				},
				{
					"name": "薄荷奶油色",
					"color": "rgb(245, 255, 250)"
				},
				{
					"name": "春绿",
					"color": "rgb(0, 255, 128)"
				},
				{
					"name": "孔雀绿",
					"color": "rgb(0, 161, 92)"
				},
				{
					"name": "中春绿色",
					"color": "rgb(0, 250, 154)"
				},
				{
					"name": "中碧蓝色",
					"color": "rgb(102, 205, 170)"
				},
				{
					"name": "碧蓝色",
					"color": "rgb(127, 255, 212)"
				},
				{
					"name": "青蓝",
					"color": "rgb(13, 191, 140)"
				},
				{
					"name": "水蓝",
					"color": "rgb(102, 255, 230)"
				},
				{
					"name": "土耳其蓝",
					"color": "rgb(0, 255, 239)"
				},
				{
					"name": "绿松石色",
					"color": "rgb(68, 224, 208)"
				},
				{
					"name": "亮海绿",
					"color": "rgb(32, 178, 170)"
				},
				{
					"name": "中绿松石色",
					"color": "rgb(72, 209, 204)"
				},
				{
					"name": "亮青",
					"color": "rgb(224, 255, 255)"
				},
				{
					"name": "浅蓝",
					"color": "rgb(137, 207, 240)"
				},
				{
					"name": "灰绿松石色",
					"color": "rgb(175, 238, 238)"
				},
				{
					"name": "暗岩灰",
					"color": "rgb(47, 79, 79)"
				},
				{
					"name": "凫绿",
					"color": "rgb(0, 128, 128)"
				},
				{
					"name": "暗青",
					"color": "rgb(0, 139, 139)"
				},
				{
					"name": "青色",
					"color": "rgb(0, 255, 255)"
				},
				{
					"name": "水色",
					"color": "rgb(175, 223, 228)"
				},
				{
					"name": "暗绿松石色",
					"color": "rgb(0, 206, 209)"
				},
				{
					"name": "军服蓝",
					"color": "rgb(95, 158, 160)"
				},
				{
					"name": "孔雀蓝",
					"color": "rgb(0, 128, 140)"
				},
				{
					"name": "粉蓝",
					"color": "rgb(176, 224, 230)"
				},
				{
					"name": "浓蓝",
					"color": "rgb(0, 99, 116)"
				},
				{
					"name": "亮蓝",
					"color": "rgb(173, 216, 230)"
				},
				{
					"name": "灰蓝",
					"color": "rgb(209, 237, 242)"
				},
				{
					"name": "萨克斯蓝",
					"color": "rgb(71, 152, 179)"
				},
				{
					"name": "深天蓝",
					"color": "rgb(0, 191, 255)"
				},
				{
					"name": "水手蓝",
					"color": "rgb(0, 71, 125)"
				},
				{
					"name": "普鲁士蓝",
					"color": "rgb(0, 49, 83)"
				},
				{
					"name": "爱丽丝蓝",
					"color": "rgb(240, 248, 255)"
				},
				{
					"name": "道奇蓝",
					"color": "rgb(30, 144, 255)"
				},
				{
					"name": "矿蓝",
					"color": "rgb(0, 77, 153)"
				},
				{
					"name": "湛蓝",
					"color": "rgb(0, 127, 255)"
				},
				{
					"name": "韦奇伍德瓷蓝",
					"color": "rgb(86, 134, 191)"
				},
				{
					"name": "亮钢蓝",
					"color": "rgb(176, 196, 222)"
				},
				{
					"name": "钴蓝",
					"color": "rgb(0, 71, 171)"
				},
				{
					"name": "灰丁宁蓝",
					"color": "rgb(94, 134, 193)"
				},
				{
					"name": "鼠尾草蓝",
					"color": "rgb(77, 128, 230)"
				},
				{
					"name": "暗粉蓝",
					"color": "rgb(0, 51, 153)"
				},
				{
					"name": "蓝宝石色",
					"color": "rgb(8, 37, 103)"
				},
				{
					"name": "国际奇连蓝",
					"color": "rgb(0, 47, 167)"
				},
				{
					"name": "蔚蓝",
					"color": "rgb(42, 82, 190)"
				},
				{
					"name": "品蓝",
					"color": "rgb(65, 105, 225)"
				},
				{
					"name": "暗矿蓝",
					"color": "rgb(36, 54, 125)"
				},
				{
					"name": "极浓海蓝",
					"color": "rgb(0, 51, 255)"
				},
				{
					"name": "天青石蓝",
					"color": "rgb(38, 97, 156)"
				},
				{
					"name": "幽灵白",
					"color": "rgb(248, 248, 255)"
				},
				{
					"name": "薰衣草紫",
					"color": "rgb(230, 230, 250)"
				},
				{
					"name": "长春花色",
					"color": "rgb(204, 204, 255)"
				},
				{
					"name": "长春花色",
					"color": "rgb(195, 205, 230)"
				},
				{
					"name": "午夜蓝",
					"color": "rgb(25, 25, 112)"
				},
				{
					"name": "藏青",
					"color": "rgb(0, 0, 128)"
				},
				{
					"name": "暗蓝",
					"color": "rgb(0, 0, 139)"
				},
				{
					"name": "中蓝",
					"color": "rgb(0, 0, 205)"
				},
				{
					"name": "蓝色",
					"color": "rgb(0, 0, 255)"
				},
				{
					"name": "浅灰紫红",
					"color": "rgb(134, 116, 161)"
				},
				{
					"name": "靛色",
					"color": "rgb(75, 0, 128)"
				},
				{
					"name": "暗岩蓝",
					"color": "rgb(72, 61, 139)"
				},
				{
					"name": "钢青色",
					"color": "rgb(70, 130, 180)"
				},
				{
					"name": "碧绿",
					"color": "rgb(80, 200, 120)"
				},
				{
					"name": "紫色",
					"color": "rgb(106, 13, 173)"
				},
				{
					"name": "岩蓝",
					"color": "rgb(106, 90, 205)"
				},
				{
					"name": "矢车菊蓝",
					"color": "rgb(100, 149, 237)"
				},
				{
					"name": "中岩蓝",
					"color": "rgb(123, 104, 238)"
				},
				{
					"name": "紫罗兰色",
					"color": "rgb(127, 0, 255)"
				},
				{
					"name": "岩灰",
					"color": "rgb(112, 128, 144)"
				},
				{
					"name": "亮岩灰",
					"color": "rgb(119, 136, 153)"
				},
				{
					"name": "蓝紫",
					"color": "rgb(138, 43, 226)"
				},
				{
					"name": "暗洋红",
					"color": "rgb(139, 0, 139)"
				},
				{
					"name": "梅红色",
					"color": "rgb(142, 69, 133)"
				},
				{
					"name": "天空蓝",
					"color": "rgb(135, 206, 235)"
				},
				{
					"name": "浅天蓝",
					"color": "rgb(135, 206, 250)"
				},
				{
					"name": "勃艮第酒红",
					"color": "rgb(128, 0, 32)"
				},
				{
					"name": "宗主教",
					"color": "rgb(128, 0, 128)"
				},
				{
					"name": "中紫红",
					"color": "rgb(147, 112, 219)"
				},
				{
					"name": "暗紫",
					"color": "rgb(148, 0, 211)"
				},
				{
					"name": "暗兰紫",
					"color": "rgb(153, 50, 204)"
				},
				{
					"name": "紫水晶色",
					"color": "rgb(153, 102, 204)"
				},
				{
					"name": "中兰紫",
					"color": "rgb(186, 85, 211)"
				},
				{
					"name": "薰衣草紫",
					"color": "rgb(181, 126, 220)"
				},
				{
					"name": "三色堇紫",
					"color": "rgb(116, 0, 161)"
				},
				{
					"name": "锦葵紫",
					"color": "rgb(217, 77, 255)"
				},
				{
					"name": "优品紫红",
					"color": "rgb(183, 132, 167)"
				},
				{
					"name": "淡紫丁香色",
					"color": "rgb(230, 207, 230)"
				},
				{
					"name": "矿紫",
					"color": "rgb(163, 157, 174)"
				},
				{
					"name": "亮紫",
					"color": "rgb(176, 157, 185)"
				},
				{
					"name": "紫藤色",
					"color": "rgb(201, 160, 220)"
				},
				{
					"name": "紫丁香色",
					"color": "rgb(200, 162, 200)"
				},
				{
					"name": "梅红色",
					"color": "rgb(221, 160, 221)"
				},
				{
					"name": "亮紫",
					"color": "rgb(238, 130, 238)"
				},
				{
					"name": "缬草紫",
					"color": "rgb(223, 115, 255)"
				},
				{
					"name": "木槿紫",
					"color": "rgb(224, 176, 255)"
				},
				{
					"name": "蓟紫",
					"color": "rgb(216, 191, 216)"
				},
				{
					"name": "铁线莲紫",
					"color": "rgb(204, 163, 204)"
				},
				{
					"name": "洋红",
					"color": "rgb(255, 0, 255)"
				},
				{
					"name": "品红",
					"color": "rgb(244, 0, 161)"
				},
				{
					"name": "兰紫",
					"color": "rgb(218, 112, 214)"
				},
				{
					"name": "浅珍珠红",
					"color": "rgb(255, 179, 230)"
				},
				{
					"name": "陈玫红",
					"color": "rgb(192, 128, 129)"
				},
				{
					"name": "浅玫瑰红",
					"color": "rgb(255, 102, 204)"
				},
				{
					"name": "中青紫红",
					"color": "rgb(199, 21, 133)"
				},
				{
					"name": "洋玫瑰红",
					"color": "rgb(255, 13, 166)"
				},
				{
					"name": "玫瑰红",
					"color": "rgb(255, 0, 127)"
				},
				{
					"name": "红宝石色",
					"color": "rgb(204, 0, 128)"
				},
				{
					"name": "山茶红",
					"color": "rgb(230, 57, 149)"
				},
				{
					"name": "深粉红",
					"color": "rgb(255, 20, 147)"
				},
				{
					"name": "火鹤红",
					"color": "rgb(230, 138, 184)"
				},
				{
					"name": "浅珊瑚红",
					"color": "rgb(255, 128, 191)"
				},
				{
					"name": "暖粉红",
					"color": "rgb(255, 105, 180)"
				},
				{
					"name": "尖晶石红",
					"color": "rgb(255, 115, 179)"
				},
				{
					"name": "胭脂红",
					"color": "rgb(230, 0, 92)"
				},
				{
					"name": "浅粉红",
					"color": "rgb(255, 217, 230)"
				},
				{
					"name": "枢机红",
					"color": "rgb(153, 0, 54)"
				},
				{
					"name": "薰衣草紫红",
					"color": "rgb(255, 240, 245)"
				},
				{
					"name": "灰紫红",
					"color": "rgb(219, 112, 147)"
				},
				{
					"name": "樱桃红",
					"color": "rgb(222, 49, 99)"
				},
				{
					"name": "浅鲑红",
					"color": "rgb(255, 128, 153)"
				},
				{
					"name": "绯红",
					"color": "rgb(220, 20, 60)"
				},
				{
					"name": "粉红",
					"color": "rgb(255, 192, 203)"
				},
				{
					"name": "亮粉红",
					"color": "rgb(255, 182, 193)"
				},
				{
					"name": "壳黄红",
					"color": "rgb(255, 179, 191)"
				},
				{
					"name": "茜红",
					"color": "rgb(227, 38, 54)"
				},
				{
					"name": "猩红色",
					"color": "rgb(255, 36, 0)"
				},
				{
					"name": "橙色",
					"color": "rgb(255, 165, 0)"
				},
				{
					"name": "爱丽丝蓝",
					"color": "rgb(240, 248, 245)"
				},
				{
					"name": "绿松色",
					"color": "rgb(48, 213, 200)"
				},
				{
					"name": "午夜蓝",
					"color": "rgb(0, 51, 102)"
				},
				{
					"name": "橙黄色",
					"color": "rgb(255, 204, 0)"
				},
				{
					"name": "鲑肉色",
					"color": "rgb(255, 140, 105)"
				},
				{
					"name": "珍珠桃色",
					"color": "rgb(251, 190, 161)"
				},
				{
					"name": "米色",
					"color": "rgb(245, 245, 210)"
				},
				{
					"name": "暗灰色",
					"color": "rgb(64, 64, 64)"
				}
			]
		}
	},
	mounted () {
		callPageLoaded();
	},
	methods: {
		onClick (evt) {
			var ele = evt.target;
			this.$el.querySelector('.container').style.backgroundColor = ele.style.backgroundColor;
			var color = ele.style.backgroundColor;
			color = color.replace('rgb(', 'rgba(').replace(')', ', 1.0)');
			navigator.clipboard.writeText(color).then(() => {
				notify({
					title: "RGB值已复制到剪切板",
					duration: 3000,
					type: 'success'
				});
			});
		}
	}
}
</script>