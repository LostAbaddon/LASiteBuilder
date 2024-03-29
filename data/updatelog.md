# 更新日志

-	2022/12/29
	-	更新缓存策略
	-	更改文档目录结构
-	2022/12/01
	-	将UA更新到GA-4
-	2022/10/20
	-	增加[黑洞计算器](/page/tools/blackholeCalculator)
-	2022/06/20
	-	数据库的[常用数据](/article/library/data.md)中增加天文相关数据
-	2021/10/20
	-	[终极生命游戏](/page/entertain/ultralife)
-	2021/10/18
	-	[Web常用颜色表](/page/webcolor)
-	2021/06/28
	-	完成本地内容搜索功能
		支持逻辑语法，支持对本地文库与缓存的云端内容进行全文搜索
-	2021/06/25
	-	升级Schwarschild系统，支持客户端的本地文库
	-	将云内容与边内容整合显示
-	2021/06/15
	-	调整代码以完成对低版本Safari的支持（在XCode的iOS 11.0 Simulator上测试通过）
-	2021/06/12
	-	优化MarkUp编辑器
	-	将Broadcast替换为EventEmitter
	-	解决Firefox下因为SharedWorker内环境不同而导致的MarkUp无法正常解析的Bug
-	2021/05/21
	-	更新[有趣网站集锦](/article/library/website.md)
-	2021/05/13
	-	基本完成MarkUp编辑器：[写字板](/page/tools/markupEditor)
-	2021/04/07
	-	增加文章Redirect功能
-	2021/03/31
	-	增加[自虐式脑力练习工具](/page/entertain/training)
-	2021/03/29
	-	增加收藏夹与历史记录功能
-	2021/03/28
	-	增加表格的排序功能
	-	增加表格的自动公式功能
	-	增加表格的图表功能
	-	更新播客
-	2021/03/27
	-	增加[常用数据表](/article/library/data.md)
-	2021/03/22
	+	增加引用与转载解析插件
		引用格式支持论文样式
-	2021/03/16
	+	实现加密阅读功能
		后台使用带encrypt参数的append命令添加文章，并将所用的AES-256-GCM的密钥与IV码告知读者，读者便可通过这两个码阅读文章。
-	2021/03/15
	+	CLI增加compress命令，且在publish时默认启用。
		可将public目录下的所有js都压缩。
-	2021/03/13
	+	更新Asimov组件，以更好地显示英文与中文
-	2021/03/06
	+	增加一键回顶功能
	+	增加文章页面目录功能
-	2021/03/05
	+	MarkUp解析的线程化改造
	+	增加打赏功能
	+	增加文章自定义知识共享（CC）协议功能
-	2021/03/04
	+	添加收藏页：电子书籍搜索与下载列表
	+	添加工具页：MarkUp文档在线解析
	+	添加tab组件和uploader组件
-	2021/03/03
	+	增加生命周期管理模块
	+	从Vue 2升级到Vue 3
	+	使用自制Notification组件以去除对vue-notification的依赖
-	2021/03/02
	+	迁徙游戏：[五子棋](/page/entertain/rushgo)
	+	迁徙游戏：[诡异哥布林与不靠谱守卫](/page/entertain/ballcrush)
-	2021/03/01
	+	添加收藏：开源许可
	+	优化缓存策略
	+	增加更新日志
	+	优化了多媒体与图片的展示样式
	+	图片墙功能
	+	增加博客内容
-	更早之前
	+	添加收藏：无版权音乐网站
	+	添加收藏：中国传统色、日本传统色
	+	实现基础功能，但没有写日志……