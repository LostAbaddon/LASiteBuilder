<template>
	<div class="viewer">
		<Crumb target="library" />
		<div class="container">
			<div class="colorItem" v-for="item in colorList" :style="{'background-color': item.color}" @click="onClick">
				<div class="name">{{item.name}}</div>
				<div class="nick">{{item.nick}}</div>
				<div class="color">{{item.color.toUpperCase()}}</div>
			</div>
		</div>
		<div class="tail">本站内容整理自网上，主要参考<a href="http://nipponcolors.com/" target="_blank">《Nippon Colors》网站</a>、“日本の伝統色 The Traditional Colors of Japan”。</div>
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
	height: 100px;
	margin: 20px;
	padding: 10px;
	border: 1px solid rgb(48, 47, 75);
	border-radius: 5px;
	text-align: center;
	user-select: none;
	cursor: pointer;
}
.container .colorItem .name,
.container .colorItem .nick,
.container .colorItem .color {
	text-shadow: 0px 0px 1px black, 1px 1px 3px rgba(23, 23, 23, 0.6);
	pointer-events: none;
}
.container .colorItem .name {
	margin-bottom: 5px;
	font-size: 22px;
	font-weight: bolder;
}
.container .colorItem .nick {
	margin-bottom: 5px;
	font-size: 12px;
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
	name: "japanesecolor",
	data () {
		return {
			colorList: [
				{
					"name": "撫子",
					"nick": "NADESHIKO",
					"color": "rgb(220, 159, 180)"
				},
				{
					"name": "紅梅",
					"nick": "KOHBAI",
					"color": "rgb(225, 107, 140)"
				},
				{
					"name": "蘇芳",
					"nick": "SUOH",
					"color": "rgb(142, 53, 74)"
				},
				{
					"name": "退紅",
					"nick": "TAIKOH",
					"color": "rgb(248, 195, 205)"
				},
				{
					"name": "一斥染",
					"nick": "IKKONZOME",
					"color": "rgb(244, 167, 185)"
				},
				{
					"name": "桑染",
					"nick": "KUWAZOME",
					"color": "rgb(100, 54, 60)"
				},
				{
					"name": "桃",
					"nick": "MOMO",
					"color": "rgb(245, 150, 170)"
				},
				{
					"name": "苺",
					"nick": "ICHIGO",
					"color": "rgb(181, 73, 91)"
				},
				{
					"name": "薄紅",
					"nick": "USUBENI",
					"color": "rgb(232, 122, 144)"
				},
				{
					"name": "今様",
					"nick": "IMAYOH",
					"color": "rgb(208, 90, 110)"
				},
				{
					"name": "中紅",
					"nick": "NAKABENI",
					"color": "rgb(219, 77, 109)"
				},
				{
					"name": "桜",
					"nick": "SAKURA",
					"color": "rgb(254, 223, 225)"
				},
				{
					"name": "梅鼠",
					"nick": "UMENEZUMI",
					"color": "rgb(158, 122, 122)"
				},
				{
					"name": "韓紅花",
					"nick": "KARAKURENAI",
					"color": "rgb(208, 16, 76)"
				},
				{
					"name": "燕脂",
					"nick": "ENJI",
					"color": "rgb(159, 53, 58)"
				},
				{
					"name": "紅",
					"nick": "KURENAI",
					"color": "rgb(203, 27, 69)"
				},
				{
					"name": "鴇",
					"nick": "TOKI",
					"color": "rgb(238, 169, 169)"
				},
				{
					"name": "長春",
					"nick": "CYOHSYUN",
					"color": "rgb(191, 103, 102)"
				},
				{
					"name": "深緋",
					"nick": "KOKIAKE",
					"color": "rgb(134, 71, 63)"
				},
				{
					"name": "桜鼠",
					"nick": "SAKURANEZUMI",
					"color": "rgb(177, 150, 147)"
				},
				{
					"name": "甚三紅",
					"nick": "JINZAMOMI",
					"color": "rgb(235, 122, 119)"
				},
				{
					"name": "小豆",
					"nick": "AZUKI",
					"color": "rgb(149, 74, 69)"
				},
				{
					"name": "蘇芳香",
					"nick": "SUOHKOH",
					"color": "rgb(169, 99, 96)"
				},
				{
					"name": "赤紅",
					"nick": "AKABENI",
					"color": "rgb(203, 64, 66)"
				},
				{
					"name": "真朱",
					"nick": "SHINSYU",
					"color": "rgb(171, 59, 58)"
				},
				{
					"name": "灰桜",
					"nick": "HAIZAKURA",
					"color": "rgb(215, 196, 187)"
				},
				{
					"name": "栗梅",
					"nick": "KURIUME",
					"color": "rgb(144, 72, 64)"
				},
				{
					"name": "海老茶",
					"nick": "EBICHA",
					"color": "rgb(115, 67, 56)"
				},
				{
					"name": "銀朱",
					"nick": "GINSYU",
					"color": "rgb(199, 62, 58)"
				},
				{
					"name": "黒鳶",
					"nick": "KUROTOBI",
					"color": "rgb(85, 66, 54)"
				},
				{
					"name": "紅鳶",
					"nick": "BENITOBI",
					"color": "rgb(153, 70, 57)"
				},
				{
					"name": "曙",
					"nick": "AKEBONO",
					"color": "rgb(241, 148, 131)"
				},
				{
					"name": "紅樺",
					"nick": "BENIKABA",
					"color": "rgb(181, 68, 52)"
				},
				{
					"name": "水がき",
					"nick": "MIZUGAKI",
					"color": "rgb(185, 136, 125)"
				},
				{
					"name": "珊瑚朱",
					"nick": "SANGOSYU",
					"color": "rgb(241, 124, 103)"
				},
				{
					"name": "紅檜皮",
					"nick": "BENIHIWADA",
					"color": "rgb(136, 76, 58)"
				},
				{
					"name": "猩猩緋",
					"nick": "SYOJYOHI",
					"color": "rgb(232, 48, 21)"
				},
				{
					"name": "鉛丹",
					"nick": "ENTAN",
					"color": "rgb(215, 84, 85)"
				},
				{
					"name": "芝翫茶",
					"nick": "SHIKANCHA",
					"color": "rgb(181, 93, 76)"
				},
				{
					"name": "檜皮",
					"nick": "HIWADA",
					"color": "rgb(133, 72, 54)"
				},
				{
					"name": "柿渋",
					"nick": "KAKISHIBU",
					"color": "rgb(163, 94, 71)"
				},
				{
					"name": "緋",
					"nick": "AKE",
					"color": "rgb(204, 84, 58)"
				},
				{
					"name": "鳶",
					"nick": "TOBI",
					"color": "rgb(114, 72, 50)"
				},
				{
					"name": "紅緋",
					"nick": "BENIHI",
					"color": "rgb(247, 92, 47)"
				},
				{
					"name": "栗皮茶",
					"nick": "KURIKAWACHA",
					"color": "rgb(106, 64, 40)"
				},
				{
					"name": "弁柄",
					"nick": "BENGARA",
					"color": "rgb(154, 80, 52)"
				},
				{
					"name": "照柿",
					"nick": "TERIGAKI",
					"color": "rgb(196, 98, 67)"
				},
				{
					"name": "江戸茶",
					"nick": "EDOCHA",
					"color": "rgb(175, 95, 60)"
				},
				{
					"name": "洗朱",
					"nick": "ARAISYU",
					"color": "rgb(251, 150, 110)"
				},
				{
					"name": "百塩茶",
					"nick": "MOMOSHIOCHA",
					"color": "rgb(114, 73, 56)"
				},
				{
					"name": "唐茶",
					"nick": "KARACHA",
					"color": "rgb(180, 113, 87)"
				},
				{
					"name": "ときがら茶",
					"nick": "TOKIGARACHA",
					"color": "rgb(219, 142, 113)"
				},
				{
					"name": "黄丹",
					"nick": "OHNI",
					"color": "rgb(240, 94, 28)"
				},
				{
					"name": "纁",
					"nick": "SOHI",
					"color": "rgb(237, 120, 74)"
				},
				{
					"name": "遠州茶",
					"nick": "ENSYUCHA",
					"color": "rgb(202, 120, 83)"
				},
				{
					"name": "樺茶",
					"nick": "KABACHA",
					"color": "rgb(179, 92, 55)"
				},
				{
					"name": "焦茶",
					"nick": "KOGECHA",
					"color": "rgb(86, 63, 46)"
				},
				{
					"name": "赤香",
					"nick": "AKAKOH",
					"color": "rgb(227, 145, 110)"
				},
				{
					"name": "雀茶",
					"nick": "SUZUMECHA",
					"color": "rgb(143, 90, 60)"
				},
				{
					"name": "宍",
					"nick": "SHISHI",
					"color": "rgb(240, 169, 134)"
				},
				{
					"name": "宗伝唐茶",
					"nick": "SODENKARACHA",
					"color": "rgb(160, 103, 75)"
				},
				{
					"name": "樺",
					"nick": "KABA",
					"color": "rgb(193, 105, 60)"
				},
				{
					"name": "深支子",
					"nick": "KOKIKUCHINASHI",
					"color": "rgb(251, 153, 102)"
				},
				{
					"name": "胡桃",
					"nick": "KURUMI",
					"color": "rgb(148, 122, 109)"
				},
				{
					"name": "代赭",
					"nick": "TAISYA",
					"color": "rgb(163, 99, 54)"
				},
				{
					"name": "洗柿",
					"nick": "ARAIGAKI",
					"color": "rgb(231, 148, 96)"
				},
				{
					"name": "黄櫨染",
					"nick": "KOHROZEN",
					"color": "rgb(125, 83, 44)"
				},
				{
					"name": "赤朽葉",
					"nick": "AKAKUCHIBA",
					"color": "rgb(199, 133, 80)"
				},
				{
					"name": "礪茶",
					"nick": "TONOCHA",
					"color": "rgb(152, 95, 42)"
				},
				{
					"name": "赤白橡",
					"nick": "AKASHIROTSURUBAMI",
					"color": "rgb(225, 166, 121)"
				},
				{
					"name": "煎茶",
					"nick": "SENCHA",
					"color": "rgb(133, 91, 50)"
				},
				{
					"name": "萱草",
					"nick": "KANZO",
					"color": "rgb(252, 159, 77)"
				},
				{
					"name": "洒落柿",
					"nick": "SHAREGAKI",
					"color": "rgb(255, 186, 132)"
				},
				{
					"name": "紅鬱金",
					"nick": "BENIUKON",
					"color": "rgb(233, 139, 42)"
				},
				{
					"name": "梅染",
					"nick": "UMEZOME",
					"color": "rgb(233, 163, 104)"
				},
				{
					"name": "枇杷茶",
					"nick": "BIWACHA",
					"color": "rgb(177, 120, 68)"
				},
				{
					"name": "丁子茶",
					"nick": "CHOJICHA",
					"color": "rgb(150, 99, 46)"
				},
				{
					"name": "憲法染",
					"nick": "KENPOHZOME",
					"color": "rgb(67, 52, 27)"
				},
				{
					"name": "琥珀",
					"nick": "KOHAKU",
					"color": "rgb(202, 122, 44)"
				},
				{
					"name": "薄柿",
					"nick": "USUGAKI",
					"color": "rgb(236, 184, 138)"
				},
				{
					"name": "伽羅",
					"nick": "KYARA",
					"color": "rgb(120, 85, 43)"
				},
				{
					"name": "丁子染",
					"nick": "CHOJIZOME",
					"color": "rgb(176, 119, 54)"
				},
				{
					"name": "柴染",
					"nick": "FUSHIZOME",
					"color": "rgb(150, 114, 73)"
				},
				{
					"name": "朽葉",
					"nick": "KUCHIBA",
					"color": "rgb(226, 148, 59)"
				},
				{
					"name": "金茶",
					"nick": "KINCHA",
					"color": "rgb(199, 128, 45)"
				},
				{
					"name": "狐",
					"nick": "KITSUNE",
					"color": "rgb(155, 110, 35)"
				},
				{
					"name": "煤竹",
					"nick": "SUSUTAKE",
					"color": "rgb(110, 85, 47)"
				},
				{
					"name": "薄香",
					"nick": "USUKOH",
					"color": "rgb(235, 180, 113)"
				},
				{
					"name": "砥粉",
					"nick": "TONOKO",
					"color": "rgb(215, 185, 142)"
				},
				{
					"name": "銀煤竹",
					"nick": "GINSUSUTAKE",
					"color": "rgb(130, 102, 58)"
				},
				{
					"name": "黄土",
					"nick": "OHDO",
					"color": "rgb(182, 142, 85)"
				},
				{
					"name": "白茶",
					"nick": "SHIRACHA",
					"color": "rgb(188, 159, 119)"
				},
				{
					"name": "媚茶",
					"nick": "KOBICHA",
					"color": "rgb(135, 102, 51)"
				},
				{
					"name": "黄唐茶",
					"nick": "KIGARACHA",
					"color": "rgb(193, 138, 38)"
				},
				{
					"name": "山吹",
					"nick": "YAMABUKI",
					"color": "rgb(255, 177, 27)"
				},
				{
					"name": "山吹茶",
					"nick": "YAMABUKICHA",
					"color": "rgb(209, 152, 38)"
				},
				{
					"name": "櫨染",
					"nick": "HAJIZOME",
					"color": "rgb(221, 165, 45)"
				},
				{
					"name": "桑茶",
					"nick": "KUWACHA",
					"color": "rgb(201, 152, 51)"
				},
				{
					"name": "玉子",
					"nick": "TAMAGO",
					"color": "rgb(249, 191, 69)"
				},
				{
					"name": "白橡",
					"nick": "SHIROTSURUBAMI",
					"color": "rgb(220, 184, 121)"
				},
				{
					"name": "黄橡",
					"nick": "KITSURUBAMI",
					"color": "rgb(186, 145, 50)"
				},
				{
					"name": "玉蜀黍",
					"nick": "TAMAMOROKOSHI",
					"color": "rgb(232, 182, 71)"
				},
				{
					"name": "花葉",
					"nick": "HANABA",
					"color": "rgb(247, 194, 66)"
				},
				{
					"name": "生壁",
					"nick": "NAMAKABE",
					"color": "rgb(125, 108, 70)"
				},
				{
					"name": "鳥の子",
					"nick": "TORINOKO",
					"color": "rgb(218, 201, 166)"
				},
				{
					"name": "浅黄",
					"nick": "USUKI",
					"color": "rgb(250, 214, 137)"
				},
				{
					"name": "黄朽葉",
					"nick": "KIKUCHIBA",
					"color": "rgb(217, 171, 66)"
				},
				{
					"name": "梔子",
					"nick": "KUCHINASHI",
					"color": "rgb(246, 197, 85)"
				},
				{
					"name": "籐黄",
					"nick": "TOHOH",
					"color": "rgb(255, 196, 8)"
				},
				{
					"name": "鬱金",
					"nick": "UKON",
					"color": "rgb(239, 187, 36)"
				},
				{
					"name": "芥子",
					"nick": "KARASHI",
					"color": "rgb(202, 173, 95)"
				},
				{
					"name": "肥後煤竹",
					"nick": "HIGOSUSUTAKE",
					"color": "rgb(141, 116, 42)"
				},
				{
					"name": "利休白茶",
					"nick": "RIKYUSHIRACHA",
					"color": "rgb(180, 165, 130)"
				},
				{
					"name": "灰汁",
					"nick": "AKU",
					"color": "rgb(135, 127, 108)"
				},
				{
					"name": "利休茶",
					"nick": "RIKYUCHA",
					"color": "rgb(137, 125, 85)"
				},
				{
					"name": "路考茶",
					"nick": "ROKOHCHA",
					"color": "rgb(116, 103, 62)"
				},
				{
					"name": "菜種油",
					"nick": "NATANEYU",
					"color": "rgb(162, 140, 55)"
				},
				{
					"name": "鶯茶",
					"nick": "UGUISUCHA",
					"color": "rgb(108, 96, 36)"
				},
				{
					"name": "黄海松茶",
					"nick": "KIMIRUCHA",
					"color": "rgb(134, 120, 53)"
				},
				{
					"name": "海松茶",
					"nick": "MIRUCHA",
					"color": "rgb(98, 89, 44)"
				},
				{
					"name": "刈安",
					"nick": "KARIYASU",
					"color": "rgb(233, 205, 76)"
				},
				{
					"name": "菜の花",
					"nick": "NANOHANA",
					"color": "rgb(247, 217, 76)"
				},
				{
					"name": "黄蘗",
					"nick": "KIHADA",
					"color": "rgb(251, 226, 81)"
				},
				{
					"name": "蒸栗",
					"nick": "MUSHIKURI",
					"color": "rgb(217, 205, 144)"
				},
				{
					"name": "青朽葉",
					"nick": "AOKUCHIBA",
					"color": "rgb(173, 161, 66)"
				},
				{
					"name": "女郎花",
					"nick": "OMINAESHI",
					"color": "rgb(221, 210, 59)"
				},
				{
					"name": "鶸茶",
					"nick": "HIWACHA",
					"color": "rgb(165, 160, 81)"
				},
				{
					"name": "鶸",
					"nick": "HIWA",
					"color": "rgb(190, 194, 63)"
				},
				{
					"name": "鶯",
					"nick": "UGUISU",
					"color": "rgb(108, 106, 45)"
				},
				{
					"name": "柳茶",
					"nick": "YANAGICHA",
					"color": "rgb(147, 150, 80)"
				},
				{
					"name": "苔",
					"nick": "KOKE",
					"color": "rgb(131, 138, 45)"
				},
				{
					"name": "麹塵",
					"nick": "KIKUJIN",
					"color": "rgb(177, 180, 121)"
				},
				{
					"name": "璃寛茶",
					"nick": "RIKANCHA",
					"color": "rgb(97, 97, 56)"
				},
				{
					"name": "藍媚茶",
					"nick": "AIKOBICHA",
					"color": "rgb(75, 78, 42)"
				},
				{
					"name": "海松",
					"nick": "MIRU",
					"color": "rgb(91, 98, 46)"
				},
				{
					"name": "千歳茶",
					"nick": "SENSAICHA",
					"color": "rgb(77, 81, 57)"
				},
				{
					"name": "梅幸茶",
					"nick": "BAIKOCHA",
					"color": "rgb(137, 145, 107)"
				},
				{
					"name": "鶸萌黄",
					"nick": "HIWAMOEGI",
					"color": "rgb(144, 180, 75)"
				},
				{
					"name": "柳染",
					"nick": "YANAGIZOME",
					"color": "rgb(145, 173, 112)"
				},
				{
					"name": "裏柳",
					"nick": "URAYANAGI",
					"color": "rgb(181, 202, 160)"
				},
				{
					"name": "岩井茶",
					"nick": "IWAICHA",
					"color": "rgb(100, 106, 88)"
				},
				{
					"name": "萌黄",
					"nick": "MOEGI",
					"color": "rgb(123, 162, 63)"
				},
				{
					"name": "苗",
					"nick": "NAE",
					"color": "rgb(134, 193, 102)"
				},
				{
					"name": "柳煤竹",
					"nick": "YANAGISUSUTAKE",
					"color": "rgb(74, 89, 61)"
				},
				{
					"name": "松葉",
					"nick": "MATSUBA",
					"color": "rgb(66, 96, 45)"
				},
				{
					"name": "青丹",
					"nick": "AONI",
					"color": "rgb(81, 110, 65)"
				},
				{
					"name": "薄青",
					"nick": "USUAO",
					"color": "rgb(145, 180, 147)"
				},
				{
					"name": "柳鼠",
					"nick": "YANAGINEZUMI",
					"color": "rgb(128, 143, 124)"
				},
				{
					"name": "常磐",
					"nick": "TOKIWA",
					"color": "rgb(27, 129, 62)"
				},
				{
					"name": "若竹",
					"nick": "WAKATAKE",
					"color": "rgb(93, 172, 129)"
				},
				{
					"name": "千歳緑",
					"nick": "CHITOSEMIDORI",
					"color": "rgb(54, 86, 60)"
				},
				{
					"name": "緑",
					"nick": "MIDORI",
					"color": "rgb(34, 125, 81)"
				},
				{
					"name": "白緑",
					"nick": "BYAKUROKU",
					"color": "rgb(168, 216, 185)"
				},
				{
					"name": "老竹",
					"nick": "OITAKE",
					"color": "rgb(106, 131, 114)"
				},
				{
					"name": "木賊",
					"nick": "TOKUSA",
					"color": "rgb(45, 109, 75)"
				},
				{
					"name": "御納戸茶",
					"nick": "ONANDOCHA",
					"color": "rgb(70, 93, 76)"
				},
				{
					"name": "緑青",
					"nick": "ROKUSYOH",
					"color": "rgb(36, 147, 110)"
				},
				{
					"name": "錆青磁",
					"nick": "SABISEIJI",
					"color": "rgb(134, 166, 151)"
				},
				{
					"name": "青竹",
					"nick": "AOTAKE",
					"color": "rgb(0, 137, 108)"
				},
				{
					"name": "ビロード",
					"nick": "VELUDO",
					"color": "rgb(9, 97, 72)"
				},
				{
					"name": "虫襖",
					"nick": "MUSHIAO",
					"color": "rgb(32, 96, 79)"
				},
				{
					"name": "藍海松茶",
					"nick": "AIMIRUCHA",
					"color": "rgb(15, 76, 58)"
				},
				{
					"name": "沈香茶",
					"nick": "TONOCHA2",
					"color": "rgb(79, 114, 108)"
				},
				{
					"name": "青緑",
					"nick": "AOMIDORI",
					"color": "rgb(0, 170, 144)"
				},
				{
					"name": "青磁",
					"nick": "SEIJI",
					"color": "rgb(105, 176, 172)"
				},
				{
					"name": "鉄",
					"nick": "TETSU",
					"color": "rgb(38, 69, 61)"
				},
				{
					"name": "水浅葱",
					"nick": "MIZUASAGI",
					"color": "rgb(102, 186, 183)"
				},
				{
					"name": "青碧",
					"nick": "SEIHEKI",
					"color": "rgb(38, 135, 133)"
				},
				{
					"name": "錆鉄御納戸",
					"nick": "SABITETSUONANDO",
					"color": "rgb(64, 91, 85)"
				},
				{
					"name": "高麗納戸",
					"nick": "KORAINANDO",
					"color": "rgb(48, 90, 86)"
				},
				{
					"name": "白群",
					"nick": "BYAKUGUN",
					"color": "rgb(120, 194, 196)"
				},
				{
					"name": "御召茶",
					"nick": "OMESHICHA",
					"color": "rgb(55, 107, 109)"
				},
				{
					"name": "瓶覗",
					"nick": "KAMENOZOKI",
					"color": "rgb(165, 222, 228)"
				},
				{
					"name": "深川鼠",
					"nick": "FUKAGAWANEZUMI",
					"color": "rgb(119, 150, 154)"
				},
				{
					"name": "錆浅葱",
					"nick": "SABIASAGI",
					"color": "rgb(102, 153, 161)"
				},
				{
					"name": "水",
					"nick": "MIZU",
					"color": "rgb(129, 199, 212)"
				},
				{
					"name": "浅葱",
					"nick": "ASAGI",
					"color": "rgb(51, 166, 184)"
				},
				{
					"name": "御納戸",
					"nick": "ONANDO",
					"color": "rgb(12, 72, 66)"
				},
				{
					"name": "藍",
					"nick": "AI",
					"color": "rgb(13, 86, 97)"
				},
				{
					"name": "新橋",
					"nick": "SHINBASHI",
					"color": "rgb(0, 137, 167)"
				},
				{
					"name": "錆御納戸",
					"nick": "SABIONANDO",
					"color": "rgb(51, 103, 116)"
				},
				{
					"name": "鉄御納戸",
					"nick": "TETSUONANDO",
					"color": "rgb(37, 83, 89)"
				},
				{
					"name": "花浅葱",
					"nick": "HANAASAGI",
					"color": "rgb(30, 136, 168)"
				},
				{
					"name": "藍鼠",
					"nick": "AINEZUMI",
					"color": "rgb(86, 108, 115)"
				},
				{
					"name": "舛花",
					"nick": "MASUHANA",
					"color": "rgb(87, 124, 138)"
				},
				{
					"name": "空",
					"nick": "SORA",
					"color": "rgb(88, 178, 220)"
				},
				{
					"name": "熨斗目花",
					"nick": "NOSHIMEHANA",
					"color": "rgb(43, 95, 117)"
				},
				{
					"name": "千草",
					"nick": "CHIGUSA",
					"color": "rgb(58, 143, 183)"
				},
				{
					"name": "御召御納戸",
					"nick": "OMESHIONANDO",
					"color": "rgb(46, 92, 110)"
				},
				{
					"name": "縹",
					"nick": "HANADA",
					"color": "rgb(0, 98, 132)"
				},
				{
					"name": "勿忘草",
					"nick": "WASURENAGUSA",
					"color": "rgb(125, 185, 222)"
				},
				{
					"name": "群青",
					"nick": "GUNJYO",
					"color": "rgb(81, 168, 221)"
				},
				{
					"name": "露草",
					"nick": "TSUYUKUSA",
					"color": "rgb(46, 169, 223)"
				},
				{
					"name": "黒橡",
					"nick": "KUROTSURUBAMI",
					"color": "rgb(11, 16, 19)"
				},
				{
					"name": "紺",
					"nick": "KON",
					"color": "rgb(15, 37, 64)"
				},
				{
					"name": "褐",
					"nick": "KACHI",
					"color": "rgb(8, 25, 45)"
				},
				{
					"name": "瑠璃",
					"nick": "RURI",
					"color": "rgb(0, 92, 175)"
				},
				{
					"name": "瑠璃紺",
					"nick": "RURIKON",
					"color": "rgb(11, 52, 110)"
				},
				{
					"name": "紅碧",
					"nick": "BENIMIDORI",
					"color": "rgb(123, 144, 210)"
				},
				{
					"name": "藤鼠",
					"nick": "FUJINEZUMI",
					"color": "rgb(110, 117, 164)"
				},
				{
					"name": "鉄紺",
					"nick": "TETSUKON",
					"color": "rgb(38, 30, 71)"
				},
				{
					"name": "紺青",
					"nick": "KONJYO",
					"color": "rgb(17, 50, 133)"
				},
				{
					"name": "紅掛花",
					"nick": "BENIKAKEHANA",
					"color": "rgb(78, 79, 151)"
				},
				{
					"name": "紺桔梗",
					"nick": "KONKIKYO",
					"color": "rgb(33, 30, 85)"
				},
				{
					"name": "藤",
					"nick": "FUJI",
					"color": "rgb(139, 129, 195)"
				},
				{
					"name": "二藍",
					"nick": "FUTAAI",
					"color": "rgb(112, 100, 154)"
				},
				{
					"name": "楝",
					"nick": "OUCHI",
					"color": "rgb(155, 144, 194)"
				},
				{
					"name": "藤紫",
					"nick": "FUJIMURASAKI",
					"color": "rgb(138, 107, 190)"
				},
				{
					"name": "桔梗",
					"nick": "KIKYO",
					"color": "rgb(106, 76, 156)"
				},
				{
					"name": "紫苑",
					"nick": "SHION",
					"color": "rgb(143, 119, 181)"
				},
				{
					"name": "滅紫",
					"nick": "MESSHI",
					"color": "rgb(83, 61, 91)"
				},
				{
					"name": "薄",
					"nick": "USU",
					"color": "rgb(178, 143, 206)"
				},
				{
					"name": "半",
					"nick": "HASHITA",
					"color": "rgb(152, 109, 178)"
				},
				{
					"name": "江戸紫",
					"nick": "EDOMURASAKI",
					"color": "rgb(119, 66, 141)"
				},
				{
					"name": "紫紺",
					"nick": "SHIKON",
					"color": "rgb(60, 47, 65)"
				},
				{
					"name": "深紫",
					"nick": "KOKIMURASAKI",
					"color": "rgb(74, 34, 93)"
				},
				{
					"name": "菫",
					"nick": "SUMIRE",
					"color": "rgb(102, 50, 124)"
				},
				{
					"name": "紫",
					"nick": "MURASAKI",
					"color": "rgb(89, 44, 99)"
				},
				{
					"name": "菖蒲",
					"nick": "AYAME",
					"color": "rgb(111, 51, 129)"
				},
				{
					"name": "藤煤竹",
					"nick": "FUJISUSUTAKE",
					"color": "rgb(87, 76, 87)"
				},
				{
					"name": "紅藤",
					"nick": "BENIFUJI",
					"color": "rgb(180, 129, 187)"
				},
				{
					"name": "黒紅",
					"nick": "KUROBENI",
					"color": "rgb(63, 43, 54)"
				},
				{
					"name": "茄子紺",
					"nick": "NASUKON",
					"color": "rgb(87, 42, 63)"
				},
				{
					"name": "葡萄鼠",
					"nick": "BUDOHNEZUMI",
					"color": "rgb(94, 61, 80)"
				},
				{
					"name": "鳩羽鼠",
					"nick": "HATOBANEZUMI",
					"color": "rgb(114, 99, 110)"
				},
				{
					"name": "杜若",
					"nick": "KAKITSUBATA",
					"color": "rgb(98, 41, 84)"
				},
				{
					"name": "蒲葡",
					"nick": "EBIZOME",
					"color": "rgb(109, 46, 91)"
				},
				{
					"name": "牡丹",
					"nick": "BOTAN",
					"color": "rgb(193, 50, 142)"
				},
				{
					"name": "梅紫",
					"nick": "UMEMURASAKI",
					"color": "rgb(168, 73, 122)"
				},
				{
					"name": "似紫",
					"nick": "NISEMURASAKI",
					"color": "rgb(86, 46, 55)"
				},
				{
					"name": "躑躅",
					"nick": "TSUTSUJI",
					"color": "rgb(224, 60, 138)"
				},
				{
					"name": "紫鳶",
					"nick": "MURASAKITOBI",
					"color": "rgb(96, 55, 62)"
				},
				{
					"name": "白練",
					"nick": "SHIRONERI",
					"color": "rgb(252, 250, 242)"
				},
				{
					"name": "胡粉",
					"nick": "GOFUN",
					"color": "rgb(255, 255, 251)"
				},
				{
					"name": "白鼠",
					"nick": "SHIRONEZUMI",
					"color": "rgb(189, 192, 186)"
				},
				{
					"name": "銀鼠",
					"nick": "GINNEZUMI",
					"color": "rgb(145, 152, 159)"
				},
				{
					"name": "鉛",
					"nick": "NAMARI",
					"color": "rgb(120, 120, 120)"
				},
				{
					"name": "灰",
					"nick": "HAI",
					"color": "rgb(130, 130, 130)"
				},
				{
					"name": "素鼠",
					"nick": "SUNEZUMI",
					"color": "rgb(120, 125, 123)"
				},
				{
					"name": "利休鼠",
					"nick": "RIKYUNEZUMI",
					"color": "rgb(112, 124, 116)"
				},
				{
					"name": "鈍",
					"nick": "NIBI",
					"color": "rgb(101, 103, 101)"
				},
				{
					"name": "青鈍",
					"nick": "AONIBI",
					"color": "rgb(83, 89, 83)"
				},
				{
					"name": "溝鼠",
					"nick": "DOBUNEZUMI",
					"color": "rgb(79, 79, 72)"
				},
				{
					"name": "紅消鼠",
					"nick": "BENIKESHINEZUMI",
					"color": "rgb(82, 67, 61)"
				},
				{
					"name": "藍墨茶",
					"nick": "AISUMICHA",
					"color": "rgb(55, 60, 56)"
				},
				{
					"name": "檳榔子染",
					"nick": "BINROJIZOME",
					"color": "rgb(58, 50, 38)"
				},
				{
					"name": "消炭",
					"nick": "KESHIZUMI",
					"color": "rgb(67, 67, 67)"
				},
				{
					"name": "墨",
					"nick": "SUMI",
					"color": "rgb(28, 28, 28)"
				},
				{
					"name": "黒",
					"nick": "KURO",
					"color": "rgb(8, 8, 8)"
				},
				{
					"name": "呂",
					"nick": "RO",
					"color": "rgb(12, 12, 12)"
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