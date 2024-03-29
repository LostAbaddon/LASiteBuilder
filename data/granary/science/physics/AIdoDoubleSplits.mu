标题：如果GPT去做双缝干涉实验……
作者：LostAbaddon
关键词：科普 哲学 人工智能 意识 物理 量子诠释
更新：2023/03/21 08:30:00

这个题目源自群里的一次聊天。

我先发了[一篇文章，是讨论图灵测试和哲学僵尸的](/article/science/turingandzombie.mu)，而后就有朋友想到，那以后随着AI越来越发达，是不是就没办法区分一个对象到底是人还是AI了？接着一位网友开脑洞：**可以让它去做双缝干涉实验啊。**

于是，脑洞就打开了：如果真的让AI去做双缝干涉实验，结果会是什么？

要明白这个问题，我们就需要先对量子理论的诠释有个了解。

#	量子诠释

量子理论最神秘的地方就在于，它和我们的日常生活相去甚远，而人理解自然基本都是建立在与自身经验的类比之上的，当然，越是往上就越是抽象，离经验与类比也就越远，最后成了纯理性的思辨之旅。

而对于量子理论来说，物理学家们当然可以通过数学与理性来感知它，但真到了要表达它的时候却还是会遇到一些问题，尤其是对于那些还存在一些迷雾的灰色地带，要如何用同行乃至外行能理解的人类语言来表达数学公式背后的意义，就会存在一些分歧。__将这些分歧与迷雾用逻辑上自洽的方式表达出来的理论，就是诠释。__

其中最大的“迷雾”就在于，量子系统到底是如何“坍缩”的？或者说，**一个量子系统是怎么会在人们进行测量的时候从量子态变成经典态的？**

这个问题困扰了量子理论的创造者们，以及现代量子理论研究者们很久很久——当然，现代量子理论研究者中的绝大多数信奉的是David Mermin的名言“Shut up and calculte”，他们可能并不真的非常在乎这朵迷雾背后到底发生了什么，选择一个诠释相信就完了，重要的是计算结果能不能和实验对上。

>[info]	这里有一件非常有趣的轶事：由于种种以讹传讹的历史原因，这句话在很长一段时间里都被认为是费曼所说的，或许是因为这句话的确很具费曼气质吧。

为了解释这个问题，海森堡与玻尔最早提出了后来被称之为哥本哈根诠释的量子诠释，并在很长一段时间里是量子理论中的金科玉律，虽然被玻尔等哥本哈根学派戏称为“国王”的爱因斯坦对这一诠释非常不屑，但奈何无论如何都无法撼动其统治地位。

当然，时至今日，哥本哈根诠释已经不是物理学家们的唯一选择，多宇宙诠释与退相干诠释更为人所偏爱，当然这里也分美国学派与欧陆学派，两边的选择并不完全一样。

而在所有诠释中，最有趣同时影响力也最大的莫过于冯·诺依曼提出、维格纳发扬光大的冯·诺依曼-维格纳诠释，或者更常用的是它的简称：维格纳诠释。之所以说它的影响力最大，是因为大众传媒其实总是喜欢说这个诠释，但冠上的名字却是“哥本哈根诠释”，这种张冠李戴在大众媒体中也是情有可原，可“意识影响物理”这个名头还是要归还给维格纳才行。

好了，废话了这么多，下面就系统而简略地说一下各种主要的或者非主流的量子诠释吧。

首先就是最大名鼎鼎的**哥本哈根诠释**了，它的核心观点是：一个量子系统在测量的时候会坍缩到与测量方式相关的一个本征态上。

比如说，双缝干涉实验中，由于我们测量的是位置，所以本征态有两个：电子通过缝1与电子通过缝2。如果我们没有测量电子到底通过哪个缝，那么得到的是这两个本征态的量子叠加：$a \left| 1 \right> + b \left| 2 \right>$，其中$|a|^2 + |b|^2 = 1$。但如果我们测量了，那么电子要么处于$\left| 1 \right>$态，要么处于$\left| 2 \right>$态，总之就是这两个本征态中的一个。

是否可能有别的本征态？

当然可以啦，比如我们不测量位置（也就是通过哪条缝）而测动量，这是我们在晶体衍射中会测量的，得到的结果也的确就是动量本征态（一次当然只能一个动量本征态了）。

哥本哈根诠释并不告诉我们坍缩是如何发生的，也不告诉我们它所谓的“测量”到底是什么，只告诉我们一个结论：量子态在测量时会坍缩到本征态。

虽然这个诠释提供的信息非常有限，有很严重的不清楚的地方，但它却非常有效，和实验吻合得非常好——只要我们不纠结那两个说不清的迷雾，那么它和实验的吻合度就是完美的。

但，显然这是无法让人们满意的。

薛定谔方程的发现者薛定谔对此就很不满意，为此他找到了物理学四大神兽之一的薛定谔猫，但奈何即便有此神兽，哥本哈根诠释的地位依然无可撼动。

而爱因斯坦对这个诠释最大的不满则在于量子坍缩的时候怎么看都是超光速的，事实上是__瞬时相互作用__，速度可以说是无穷大，这点和爱因斯坦钟爱的狭义相对论直接矛盾。爱因斯坦对此的批评直接导致了后来非常重要的量子纠缠与EPR，后者在全息原理下似乎可以和爱因斯坦-罗森桥对应起来，即时下非常热火的__EPR=ER猜想__。无论如何，和薛定谔一样，爱因斯坦一样没能撼动哥本哈根诠释。

下一个登场的就是**隐变量理论**，它其实不是一种诠释，而是一种替代理论。

最初的隐变量理论是定域隐变量理论，它认为存在一个我们无法直接观测到的物理实体，它还满足狭义相对论，不会超光速运动。

但隐变量理论命途多舛。

先是贝尔发现了贝尔不等式，结果实验违反了该不等式，从而证明定域隐变量理论是靠不住的。

而后莱格特发现了莱格特不等式，结果实验再次违反了这个不等式，这表示一大类非定域隐变量理论也靠不住。

至此，几乎所有定域与一大类非定域的隐变量理论都被证伪，故隐变量理论基本算是没戏了。

这大概是所有量子理论的替代理论中最著名的失败案例了吧……

>[info]	PS：隐变量理论其实是一大类理论，其中包括玻姆的导波理论等。而，并不是所有隐变量理论都被郑重其事地宣判了死刑，比如导波理论，原则上来说，还没完全死透，因为它可以给出与莱格特不等式相容的结论（如果我没记错的话）。但，主流基本上已经不考虑隐变量理论了。

有一个量子诠释是非常容易和哥本哈根诠释混淆的，就是前面提到过的**冯·诺依曼-维格纳诠释**。

这个诠释主要是为了解释到底是什么引起了哥本哈根诠释中所提到的量子坍缩这个问题而诞生的，而它给出的答案是：意识。

在维格纳诠释中，只有意识才能引起一个量子系统的坍缩，所以如果我们真的弄来一只薛定谔的猫，那么猫是无法通过看自己一眼来确定自己死没死的，因为猫并不具备人这样的意识。

事实上，面对这样一只猫，即便我们让一台波士顿动力的机器人去打开盒子看一样，猫和机器人都无法确定机器人盯着的猫到底死没死，因为猫和机器人都没有意识。

将这点推而广之的话，我们可以设想一个完全由AI建立的庞大银河帝国，但整个帝国中没有一个人类，或者与人类一样的自然生命，于是整个银河帝国是没有意识的，这个帝国对于薛定谔猫这样的神兽将完全不具备判断力——不愧是神兽，难倒了整个机器人银河帝国。

这事想来可真有点扯淡……

因此，维格纳晚年事实上自己都放弃了这个维格纳诠释，冯·诺依曼对此也不再热衷。但架不住大众媒体对这个问题中“意识”与“量子”这两个神秘词汇的热爱，因此即便是现在，依然有大量人宣扬着“意识能改变物理”这种莫名其妙的观点。

同样对到底什么是量子坍缩这个问题非常关注的还有**退相干诠释**。

当然，严格说来它不是一种诠释，它是一类诠释，因为它并不回答别的问题，只关注量子态是如何坍缩为经典本征态的这一个问题，从而独自并不能给出完整的诠释来。

在退相干看来，通俗来说，只要能频繁地发生足够强度的相互作用，系统就自然会朝着一个随机决定但确定的方向演化，最终稳定下来的态就是本征态。

这个诠释方法其实颇有点Mermin那句名言的味道：别瞎BB了，反正能算出来就行，算不出来的话那就是相互作用太频繁太高能了，留着以后算吧。

当然，现代量子诠释中最出名的大概要数**多宇宙诠释**了吧，它的思路就和退相干截然不同——它并不关心量子态是如何坍缩的，它关注的是坍缩之后的本征态到底是一个什么样的状态，我们看到的本征态和没看到的本征态之间的关系是什么。

这里背后的一个问题其实在于：如果那些我们没看到的本征态就这么消失了，那么其实量子坍缩的时候无论发生了什么，都面临一个信息丢失的问题，而我们一般相信信息是不会丢失的。

>[info]	这里插一个嘴：上面提到的相信信息不会丢失其实更多的是一种信仰，并没有根据。毕竟，我们可以从诺特定理和时间平移不变导出能量守恒，但目前还看不到什么能给出信息守恒。另一方面，最简单的加法运算就是会丢失信息的：两个加数的顺序信息丢失了。事实上，所有阿贝尔运算都会丢失顺序信息。当然了，目前人们普遍相信这种信仰应该是真实的，就如我们相信全息原理和超对称都应该是真实的一样——虽然没有证据。

而如果我们假定那些没看到的本征态其实没有丢失的话，情况就不同了，信息可以没有丢失。而要满足这点，一个很直观的推论就是：那些本征态之所以还存在但我们看不到，仅仅是因为它们在别的宇宙中。

由此就得到了多宇宙诠释：每次量子坍缩发生时宇宙都会分裂，分裂出去的宇宙都对应一个本征态。

事实上，德威特等人将二次量子化进一步推广到三次量子化后，发现宇宙整个都被一个波函数所描绘了，而这个波函数给出的宇宙本征态其实就是艾弗雷特的多宇宙诠释中的一个个宇宙。

因此，多宇宙诠释是目前理论体系看起来最完整的，虽然并不是所有人都相信，但至少大众传媒难得地比维格纳诠释更甚地热爱着多宇宙——这个看看DC和漫威的漫画就知道了。

>[info]	这里再插一个嘴：艾弗雷特的多宇宙诠释一开始广受诟病，因此他最后黯然退出了物理学界，后来一度去了五角大楼。可惜了一代脑洞大神啊。

由于多宇宙诠释实际上解释的是量子坍缩后的各本征态的状态而不涉及量子坍缩如何发生，而退相干诠释解释的是量子坍缩到底是什么，因此这两个诠释可以同时发挥作用，毕竟各自处理的是不同问题嘛。

当然，要说怪异和脑洞，多宇宙诠释或许还不是最离谱的。约翰·克莱默在惠勒-费曼吸收子理论的基础上所提出的**交易诠释**大概是脑洞最大的一种量子诠释了。

在这个诠释理论中，一个粒子会朝着未来发出一个量子波，名为“请求波/滞后波”，这点是很自然也很正常的；但粒子还会朝着过去发出一个名为“确认波/超前波”的量子波，这就有点不可思议了。这里“滞后”与“超前”是吸收子理论的说法，“请求”与“确认”是交易诠释的说法，而之所以这么改，是因为在克莱默的理论中，一个粒子可以和未来的自己以及过去的自己讨价还价，最终达成一致，而这个一致的“定价”因为有过去与未来的共同商量，因此就会呈现出自己与自己的干涉状态——在双缝实验中，这个干涉状态就包含了未来到底有没有人观测电子到底通过哪条缝这个信息。

这便是交易诠释最吸引人的点：时间旅行可以说是天然就有的，而且事实上都不用实体真的在时间的洪流中旅行，实体自己就可以和过去与未来的自己完成交流，这点真的是太适合开脑洞了。

上面只是举了一些最有名的量子诠释，事实上每一种都可以有很多变体，而且还有更多没那么有名的量子诠释，所以人们对于量子理论到底是怎么样的，其实有着很多很多种描述。

现代研究量子理论基础的那一小撮非主流物理学家们对于上面这些关于量子坍缩的解释都不怎么满意，当然也没人能提出一个能获得主流都满意的新方案。

个人比较感兴趣的是Tim Anderson的一个想法，他利用五维时空中的随机运动给出了一个量子态到底是怎么坍缩到经典态的方案，有兴趣的朋友可以在ARXIV上搜索“Chaotic deterministic quantization in a 5D general relativity”，非常有意思。当然，目前这还是一个非主流的理论。

#	AI看双缝

现在，我们可以回到AI做双缝干涉实验能得到什么结果这个问题上来了。

按照维格纳诠释的话，AI是做不了这个实验的，因为量子态没法坍缩。如果没有一个哪怕只是智障的人类来看一眼AI的话，即便AI建立了银河帝国，它也没有能力确定量子态到底坍缩到了哪个本征态。

一个银河帝国被一只猫和一个智障给掣肘住了，实在是听者伤心闻者流泪啊。

但按照退相干诠释的话，无论与之配套的是多宇宙还是交易诠释，一个AI都足够完成双缝干涉实验而不需要智障人类的参与了。

可如果是按照哥本哈根诠释的话——不知道，因为哥本哈根诠释没告诉我们量子坍缩和测量到底是什么，所以答案只能是：去做实验然后看结果吧，别的别说了，也别问。

>[info]	当然，做实验的话其实我们最需要小心的就是量子理论特有的延迟选择现象。这里，系统未来的选择是可以影响到过去的路径选择的——这就颇有点交易诠释的味道了。

>	对此，在一些情况下是可以通过技术手段（实验手段与理论分析）来去除其干扰的，所以对此细节我们就表过不提了。

因此，原则上说，我们如果真的让一台AI控制的机器人，在人类完全不掺和的情况下进行一次双缝干涉实验，那么我们就可以通过实验结果来判断到底哪一大类量子诠释更靠谱了。

当然喽，维格纳诠释的支持者可以坚持AI已经拥有了人类的意识——哪怕只是现在的ChatGPT。

如果是这样的话，那维格纳诠释的拥趸和哲学僵尸的拥趸或许就可以打一仗了吧，哈哈哈哈。

无论如何，如果真的AI控制机器人做了这类量子实验的话，物理哲学与意识哲学方面都可以水很多篇论文了吧，想想也是很令人激动啊！