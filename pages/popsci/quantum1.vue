<template>
	<div class="container">
		<!-- Background -->
		<div class="background-slider hidden">
			<img data-src="/image/back1.jpg" class="bg">
			<img data-src="/image/back2.jpg" class="bg">
			<img data-src="/image/back3.jpg" class="bg">
			<img data-src="/image/back4.jpg" class="bg">
			<img data-src="/image/back5.jpg" class="bg">
			<img data-src="/image/back6.jpg" class="bg">
		</div>

		<Crumb target="science/physics" />

		<!-- Swiper Container -->
		<div class="swiper-container hidden">
			<!-- Swpier -->
			<div class="swiper-wrapper">
				<!-- Pages -->
				<div class="swiper-slide" slide-hash="home" slide-hint="首页">
					<div class="ppt-page middle">
						<h1 class="center">量子理论基础科普</h1>
						<div class="center subtitle">不完全中二向科普</div>
						<hr>
						<h2 class="center top-margin" margin="50">主讲人：LostAbaddon</h2>
						<div class="mention top-margin box-center" margin="150">主办：量子与生命读书会<br>协办：奇迹号、集智俱乐部<br>支持：小有文化</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page middle">
						<h1>什么是量子力学？</h1>
						<hr>
						<div class="content">
							我们所生活的，是这么一个世界：<br>
							在这里，人要么在这，要么在那，不可能同时既在这里又在那里；<br>
							在这里，你一次只能吃一个煎饼果子，不能同时既吃煎饼果子有吃杂粮煎饼；<br>
							在这里，一切都几乎是确定的，只不过我们几乎不可能知道一切的初始状态；<br>
							在这里，牛顿住在一切。
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page middle">
						<h1>什么是量子力学？</h1>
						<hr>
						<div class="content large box-center">
							但在量子的世界中，上述一切，<br>都变得不一样了……
						</div>
						<div step=2>
							<hr>
							<h2 class="center top-margin" margin="50">严正声明</h2>
							<div class="content center">
								<b>本次演讲将基本不沿着正规教材上的套路进行，<br>而是以个人理解整理为线索~~</b>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="content-table" slide-hint="目录" prevent-next>
					<div class="ppt-page middle">
						<h1 class="center">目录</h1>
						<hr>
						<ol class="content-table box-center">
							<li class="swiper-slide-jumper" target="experiment-cate">神奇的实验</li>
							<li class="swiper-slide-jumper" target="description-cate">三种描述</li>
							<li class="swiper-slide-jumper" target="explain-cate">不尽的诠释</li>
							<li class="swiper-slide-jumper" target="difference-cate">与经典的差异</li>
							<li class="swiper-slide-jumper" target="sum-cate">总结</li>
						</ol>
						<div class="blank" height="100"></div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="experiment-cate" slide-hint="神奇的实验" prevent-next>
					<div class="ppt-page">
						<h1>神奇的实验</h1>
						<hr>
						<div class="content-table">
							量子理论中，有这么两个实验是非常重要的，也是大家最耳熟能详的：
							<ul class="top-margin" margin="20">
								<li class="swiper-slide-jumper" target="double-split">杨氏双缝干涉实验</li>
								<li class="swiper-slide-jumper" target="bell-inequation">贝尔不等式破缺</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="double-split">
					<div class="ppt-page">
						<h2>杨氏双缝干涉实验</h2>
						<hr>
						<div class="float-container">
							<img src="/image/double-split.jpg" class="float block" step=1 leave-step>
							<div step=2>
								<h3>双缝实验的精髓，在于两点：</h3>
								<ol>
									<li>粒子的位置不是确定的，而是有一个分布</li>
									<li>这个分布不是经典分布，而是复数性质的量子分布</li>
								</ol>
								<div class="blank" height="150"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>杨氏双缝干涉实验</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=4>
								<h3>如果粒子位置确定</h3>
								<p step=2>那么我们看到的应该是两条明亮的细条纹，因为粒子只能走从源到缝的直线，从而只有两条笔直的路径，最多加上空气中的散射。</p>
								<h3>如果是经典分布</h3>
								<p step=3>那么我们看到的应该是有两个较亮区而一些较暗区的连续分布，关键是，不应该出现明显的暗条纹。</p>
							</div>
							<div class="float" step=4 leave-step>
								<h3>微观粒子运动所遵循的基本规律：</h3>
								<ol>
									<li>运动具有扩散性</li>
									<li>扩散满足复数性</li>
								</ol>
							</div>
							<div step=5>
								<h3>微观粒子运动所遵循的基本规律：</h3>
								<ol>
									<li>系统可以同时存在于多个状态</li>
									<li>系统在多个状态上的分布具有复数性</li>
								</ol>
								<div class="blank" height="80"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>杨氏双缝干涉实验</h2>
						<hr>
						<div class="float-container">
							<div>
								<h3>用数学的语言来描述（薛定谔方程）：</h3>
								<img src="/image/equ-1.jpg" class="block">
							</div>
							<div step=2>
								<h3>波函数所要满足的性质：</h3>
								<ul>
									<li>波函数及其一阶导连续</li>
									<li>波函数在全空间归一化</li>
									<li>波函数在某一状态的模平方为量子体系处于该状态的概率</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>杨氏双缝干涉实验</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<h3>数学公式的意义</h3>
								<p>量子理论的数学部分，是高度算符化的（除去波函数不算）：</p>
								<p>等式的左面，是能量算符；等式的右面，整体就是哈密顿算法。</p>
								<p>哈密顿算符可以分解为左边的动能算符和右边的势能算符。</p>
								<p>这一套方案的基本思路与分析力学是完全相同的，只不过是算符化了。</p>
							</div>
							<div class="float" step=2 leave-step=5>
								<h3>第三点特性带来的启示：</h3>
								<p>粒子可以“同时”处于多个状态</p>
								<p step=3>更准确地说，<br>是粒子可以“同时”在多个状态上具有非零的概率：<span step=4><b>薛定谔的猫</b></span></p>
							</div>
							<div class="float" step=5 leave-step=7>
								<h3>第一点特性带来的启示：</h3>
								<p>由数学公式结合第一点的连续性可知：<br>如果一个量子系统的动能部分比一个势垒要低，那么在经典情况下这个鸿沟无法逾越，在量子系统中波函数却可以“渗透”进这个势垒，甚至穿越它。</p>
								<p step=6>这就是<b>量子隧穿效应</b>。</p>
							</div>
							<div class="float" step=7 leave-step>
								<h3>重要的提醒：</h3>
								<p>值得注意的是，上述猫效应和隧穿效应从根本上说，并不是量子系统所独有的。<br>一个经典系统在数学上一样可以具有这些特性，只要要求经典分布的分布函数也是连续与一阶导连续的，且粒子的运动满足这种经典分布。</p>
								<p>量子的独特本质：<b>复几率分布</b></p>
							</div>
							<div step=8>
								<h3>复几率分布的两大特点</h3>
								<ol class="close">
									<li>分布函数取值为复数域<span step=9>（经典下是[0,1]这个实数子域）</span></li>
									<li>几率为分布函数值的模平方<span step=9>（经典下是分布函数值）</span></li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="bell-inequation">
					<div class="ppt-page">
						<h2>贝尔不等式破缺</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<p>严格说来，这不是一个真实的实验，而只是一个思想实验。</p>
								<p>贝尔不等式的本质，是使用<b>经典几率统计</b>的手段给出了在满足<b>定域性</b>和<b>实在性</b>这两个条件的情况下，这么一个经典分布系统中两个处于纠缠状态的粒子在实验中所应该遵守的不等式关系。</p>
							</div>
							<div step=2>
								<p>贝尔不等式破缺的核心关键，在于人们普遍认为物理系统必然是满足定域性与实在性的，而量子理论打破了这一常规。</p>
								<p>这里关键点有四个：</p>
								<ol step=3>
									<li>定域性</li>
									<li>实在性</li>
									<li>实体性</li>
									<li>量子纠缠</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>贝尔不等式破缺</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=4>
								<h3>定域性</h3>
								<p step=2>所有相互作用必须在同一个时空点上完成</p>
								<h3>实在性</h3>
								<p step=3>必须存在一个实体来传递物理影响</p>
							</div>
							<div class="float" step=4 leave-step=7>
								<h3>量子的反常</h3>
								<p step=5>量子纠缠系统中的波函数塌缩<b>看起来</b>就是瞬间不通过任何媒介地从A点传递到了B点。</p>
								<h3 step=6>贝尔的逆袭</h3>
								<p step=6>假定存在一个目前无法观测到但本质上可观测的物理实体，连接着AB两地的物理对象。</p>
							</div>
							<div class="float" step=7 leave-step=11>
								<h3>实体性</h3>
								<p step=8>物理实体的物理量至少必须为实数<span step=9>，从而几率分布必须是<b>经典几率分布</b>。</span></p>
								<h3>量子纠缠</h3>
								<p step=10>多个量子系统的特征量子数满足一个确定的约束条件，从而当其中一部分的状态确定后剩下的状态同时也被确定而无需任何外界操作。</p>
							</div>
							<div class="float" step=11>
								<h3>贝尔不等式</h3>
								<p>实体性要求复数性质的量子几率波解释不能成立，因此量子纠缠就要求了定域实在的隐变量在一开始就参与了整个物理过程，我们的观测并不引起量子系统的塌缩，而是“恰好”观测到了隐变量在此时所给出的测量值。</p>
								<p>这样的测量值与承认复值的几率分布的结果不同。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>贝尔不等式破缺</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<h3>实验过程</h3>
								<p>假定A与B两个光子处于量子纠缠中，相隔遥远，然后同时测量偏振性。</p>
								<p>A处与B处的检偏器夹角θ；检偏器发现光子通过成为测得光子。</p>
							</div>
							<div class="float" step=2 leave-step=6>
								<p>按照隐变量的逻辑，A处测得光子与B处测得光子的相关度是：</p>
								<img src="/image/equ-2.jpg" class="block" step=3>
								<p step=4>而根据量子的复几率幅所得到的相关度是：</p>
								<img src="/image/equ-3.jpg" class="block" step=5>
							</div>
							<div class="float" step=6 leave-step=8>
								<h3>不等式的由来</h3>
								<p>上面的几率分布已经存在了极大的不同，但在实际测量的时候，AB两处检偏器的夹角θ是不确定的，所以需要引入一些统计的手段。</p>
								<p>利用上述几率分布，在经典情况下我们有贝尔不等式(CHSH不等式)：</p>
								<img src="/image/equ-4.jpg" class="block" step=7>
								<p step=7>式子中的ρ函数代表了在a地的测量结果与b地的测量结果之间的相关度（可正可负）。</p>
							</div>
							<div step=8>
								<h3>不等式的破缺</h3>
								<p>而在正统的量子诠释下，采用的是余弦函数形的几率分布，从而不等式可以有破缺的情况——</p>
								<p step=9>在量子理论下，上述不等式的左面可以达到的最大值是2√2，从而是大于右面的2的，因此不等式被打破。</p>
								<p step=10>而这2√2的出现，就是因为量子的几率分布是余弦函数式的，从而在一些特定的夹角位置上可以出现比经典几率分布更大的几率值。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>贝尔不等式破缺</h2>
						<hr>
						<div class="float-container">
							<h3>贝尔不等式被打破的意义</h3>
							<ol class="close">
								<li step=2>量子纠缠是真实存在的</li>
								<li step=3>定域性与实在性，两者必须放弃一个<br><span step=4><b>放弃实在性意味着放弃隐变量</b></span>
								<br><span step=5><b>目前大家基本认为定域性不能放弃</b></span></li>
								<li step=6>实体性所要求的实值物理量依然被认为是牢不可破的</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>贝尔不等式破缺</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>定域性？</h3>
								<p>物理过程的定域性是否必然不可打破？</p>
								<p step=2>在广义相对论的引力场能量的计算中，我们发现目前最合适的一种定义下，<b>引力场的能量是非定域的</b>。</p>
							</div>
							<div class="float" step=3 leave-step=5>
								<h3>实体性？</h3>
								<p>实体性要求物理量必须是实值的，至少可观测物理量必须是实值的。</p>
								<p step=4>但我们也知道，在AB与AC效应中，原本被认为不具有实体性的波函数的相位却发挥了实实在在的作用，而<b>波函数是复值的</b>。</p>
							</div>
							<div step=5>
								<h3>实在性？</h3>
								<p>贝尔不等式的破缺基本宣布了隐变量理论的破产。</p>
								<p>但非定域隐变量理论是否可以幸存下来？</p>
								<p step=6>Kochen-Specker定理告诉我们：上下文无关的实在性理论与量子理论不相容。</p>
								<p step=6>要么放弃实在性，要么认为存在隐变量，但其具体性质依赖于如何测量。</p>
								<p step=7>基于KS定理的Conway-Kochen定理则更进一步论证了机械决定论必然是错的。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>小结</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>量子与经典的核心差异：</h3>
								<ul class="close" step=2>
									<li>量子系统满足复值分布，且分布值模平方为几率，单粒子也满足量子分布。</li>
									<li>经典系统满足实值分布，且分布值本身就是几率，单粒子不使用统计分布。</li>
								</ul>
							</div>
							<div step=3>
								<h3>量子与经典的差异：</h3>
								<p>上述特点体现在演化规律上，最核心的体现就是虽然分布同样都满足扩散方程，但量子系统的薛定谔方程带有虚数单位i，这使得量子分布本身除了波幅外，还多了相位这一重要信息。</p>
								<h4 step=4>脑洞一下：</h4>
								<p step=4>如果波函数的取值范围可以是四元数体呢？</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="description-cate" slide-hint="三种描述" prevent-next>
					<div class="ppt-page">
						<h1>量子理论的三种描述方法</h1>
						<hr>
						<div class="content">
							<p>量子理论本身可以有三种不同的描述方法</p>
							<p>（同时则可以有理论上无穷种诠释）</p>
							<ul class="top-margin" margin="20">
								<li class="swiper-slide-jumper" target="quantum-wave">波动力学</li>
								<li class="swiper-slide-jumper" target="quantum-matrix">矩阵力学</li>
								<li class="swiper-slide-jumper" target="quantum-path">路径积分</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="quantum-wave">
					<div class="ppt-page">
						<h2>量子理论的波动力学</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<p>这种描述方法，就是经典的薛定谔方程，计算系统的波函数，再通过波函数给出系统处于不同量子态上的几率。</p>
								<p step=2>它还可以分成三种绘景：<br>算符不随时间改变的<b>薛定谔绘景</b><br>波函数不随时而变的<b>海森堡绘景</b><br>算符与波函数都随时间改变的<b>相互作用绘景</b></p>
							</div>
							<div step=3>
								<p>波动力学的表示方式适合于连续系统，尤其适合用于理解量子隧穿效应。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="quantum-matrix">
					<div class="ppt-page">
						<h2>量子理论的矩阵力学</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<p>矩阵力学和波动力学原则上是等价的——算符所得到的值以矩阵本征值的形式存在</p>
								<p>对有限状态或可数无限个状态的情况可以有较直观的视野</p>
							</div>
							<div class="float" step=2 leave-step>
								<p>在矩阵力学中使用薛定谔绘景的话，我们可以认为矩阵同样给出了此刻与下一刻的态矢之间的演化关系。</p>
								<p>同样的矩阵表达方法我们也可以用在复杂网络上的扩散与传播问题中，比如<a href="http://www.jianshu.com/p/3546fe9aaf17" target="_blank">这篇文章</a>。</p>
							</div>
							<div step=3>
								<p>也就是说，如果我们构造一个有限节点的复杂网络，其上传播的属性可以在复数域上取值，那么这个复杂网络上的扩散方程在形式上就和矩阵力学的演化方程相同。</p>
								<p>而复杂网络上的扩散与传播，说到底就是两个节点之间的属性传递，从而是一种连接或者说传播子的概念。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="quantum-path">
					<div class="ppt-page">
						<h2>量子理论的路径积分</h2>
						<hr>
						<div class="float-container">
							<p>路径积分的概念与波动力学关系比较密切</p>
							<p step=2>它可以看做是量子版的惠更斯原理</p>
							<p step=3><b>其核心思想就是：</b></p>
							<p step=3>粒子当前状态是由从初态到当前状态的所有可能路径的总贡献来决定的。</p>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page">
						<h2>三种描述的异同</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>首先，上述三种描述的理论描述能力是完全相同的，三者相互等价。</h3>
								<h3>但它们的侧重点有所不同：</h3>
								<ul class="close" step=2>
									<li>波动力学侧重于时空中的分布</li>
									<li>矩阵力学侧重于不同离散状态间的分布</li>
									<li>路径积分则更主要是一种概念与想法的突破</li>
								</ul>
							</div>
							<div step=3>
								<p>路径积分（以及更加宽泛的构型积分）那种对所有可能的路径求和的思路，已经作为一种特殊的工具在很多领域得到了推广。</p>
								<p>比如金融领域有一门课就叫“金融市场的路径积分”。</p>
								<p step=4>一个有趣的启示：一个粒子其实不是一个粒子，而是这个粒子所有可能的状态构成的一个系宗。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="explain-cate" slide-hint="不尽的诠释">
					<div class="ppt-page">
						<h2>不尽的诠释</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=4>
								<h3>所谓诠释，就是对物理理论的解释或者理解的范式</h3>
								<p>量子理论的诠释有很多很多，而且，事实上只要你愿意，就可以有无穷多种诠释。</p>
								<p step=2>究其根本是因为量子理论涉及到一些无法直接观测到的物理实体，比如波函数。</p>
								<p step=3>而另一方面则是因为量子理论与我们日常生活的世界的行为差距太大。</p>
							</div>
							<div step=4>
								<h1>至今还有人以量子理论所描述的行为与日常生活经验不符来否定量子理论！</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" prevent-next>
					<div class="ppt-page">
						<h2>不尽的诠释</h2>
						<hr>
						<div class="float-container">
							<h3>最常见的诠释（流派代表）</h3>
							<ul>
								<li class="swiper-slide-jumper" target="copenhagen">哥本哈根诠释</li>
								<li class="swiper-slide-jumper" target="decoherence">退相干诠释</li>
								<li class="swiper-slide-jumper" target="multiverse">多重宇宙诠释</li>
								<li class="swiper-slide-jumper" target="hiden-reality">隐变量诠释</li>
								<li class="swiper-slide-jumper" target="other-explains">其它</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="copenhagen">
					<div class="ppt-page">
						<h2>哥本哈根诠释</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<h3>哥本哈根诠释的基本思想，可以归纳为以下这几点：</h3>
								<ol class="close">
									<li>物理对象由波函数描述</li>
									<li>任何物理量都可以从波函数上通过相应的算符获得</li>
									<li>波函数的演化满足薛定谔方程</li>
									<li>观测会导致波函数的塌缩</li>
								</ol>
							</div>
							<div class="float" step=2 leave-step=4>
								<h3>意识与哥本哈根</h3>
								<p>很多人会认为物理理论中承认了人的意识的重要性，这种普遍的都市传说一般的大众误解的起源，就是哥本哈根诠释中的那一条：<b>观测会导致波函数的塌缩</b>。</p>
								<p step=3>意识成了“凌驾于物理规律之上”的“能决定物理结果”的特殊的存在。</p>
							</div>
							<div step=4>
								<h3>意识与哥本哈根</h3>
								<p>人成为了有物理理论支持的世界核心</p>
								<p step=5><b>薛定谔的猫</b>中猫不但处于生死叠加态，也被剥夺了观测自己的权力。</p>
								<h3 step=6>个人看法：</h3>
								<p step=6>就让尘归尘土归土，上帝的归上帝，物理的归物理。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="decoherence">
					<div class="ppt-page">
						<h2>退相干诠释</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>与哥本哈根的不同</h3>
								<p>退相干诠释的绝大部分内容与思想，都与哥本哈根诠释相同，只差了一点：</p>
								<p step=2>测量的过程是一个包含大量粒子的系统与单个被测粒子发生大量频繁相互作用的过程，从而并不是观测导致塌缩，而是观测过程中那些数量巨大且频繁的相互作用造成了被测粒子发生了退相干。</p>
							</div>
							<div step=3>
								<h3>量子退相干</h3>
								<p>量子退相干本身不是一种诠释，而是一类标准的量子力学过程——含有量子叠加项的结果在一段时间内的平均会因为其中一个叠加项的波函数周期太短而被抵消为零。</p>
								<p>而在观测或者说实验环境下，测量的时间相对于微观过程来说总是足够长的，而测量系统对被测对象的作用所带来的周期又总是足够短的。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="multiverse">
					<div class="ppt-page">
						<h2>多重宇宙诠释</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>多重宇宙的多种解释</h3>
								<p>首先要说明的，就是量子理论的多重宇宙诠释，与宇宙学上的多重宇宙或者膜宇宙学上的多重宇宙，是一点关系都没有的。</p>
								<h3 step=2>更别提什么漫威宇宙了！！！</h3>
							</div>
							<div class="float" step=3 leave-step>
								<h3>多重宇宙诠释</h3>
								<p>多重宇宙诠释认为当哥本哈根诠释所认为的“测量”发生的时候，系统并没有简单地塌缩到某个确定的状态，而是将整个宇宙彻底分裂成了若干个宇宙——有多少可能的状态就分裂出多少个宇宙。</p>
							</div>
							<div class="float" step=4>
								<h3>多重宇宙诠释</h3>
								<p>而观测者则以波函数所给出的几率“随机”地“掉落”到了所有这些宇宙中的某一个中。</p>
								<p><b>经典的电子双缝干涉问题中，宇宙发生分裂的时间点并不是电子“究竟通过哪条缝”的时候，而是电子终于落到屏幕上的时候。</b></p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="hiden-reality">
					<div class="ppt-page">
						<h2>隐变量诠释</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<h3>隐变量诠释并没有死绝</h3>
								<p>虽然贝尔不等式的破缺表明了定域实在的隐变量理论肯定是没希望了，甚至KS定理进一步表明上下文无关的实在性隐变量理论也没戏，但原则上说，隐变量理论这个流派并没有死绝。</p>
							</div>
							<div step=2>
								<p>原则上说，凡是不承认波函数的实在性而只认为它描述了行为但背后的物理实体是某种至少目前无法被观测到对象的理论，都是隐变量理论。</p>
								<p step=3>不知道大家注意到没有，这个“至少目前无法被观测到的对象”的提法本身显得非常地不具有“可证伪性”，但却堂而皇之地自称为物理理论而非形而上学或者伪科学……</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="other-explains">
					<div class="ppt-page">
						<h2>其它诠释</h2>
						<hr>
						<div class="float-container">
							<h3>这里只列一些有趣的出来，不做解释：</h3>
							<ul class="close">
								<li>关系性量子力学</li>
								<li>基本环量子力学</li>
								<li>交易诠释</li>
								<li>客观塌缩 / 主观塌缩</li>
								<li>量子逻辑 / 量子信息论</li>
								<li>多心灵诠释</li>
								<li>各种神秘学与伪科学</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="difference-cate" slide-hint="与经典的差异">
					<div class="ppt-page">
						<h2>与经典的差异</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step=3>
								<h3>量子效应——不确定原理</h3>
								<p>前面已经提过，量子理论的关键就在于即便只有单个粒子，其行为也满足波函数所描述的几率分布。</p>
								<p>同时，我们可以从波函数中“提取”出系统的物理属性。</p>
								<p step=2>此时我们发现，同一个对象的某些物理量之间，存在经典物理中所没有的特性：对一个的测量，会影响到对另一个的测量。</p>
							</div>
							<div class="float" step=3 leave-step=5>
								<h3>量子效应——不确定原理</h3>
								<p>比如，当我们可以以毋庸置疑的精度测量粒子的位置时，它的动量的不确定度此时就会是无穷大。</p>
								<p>这就构成了一组著名的不确定原理：</p>
								<p step=4>　　位置-动量不确定性</p>
								<p step=4>　　时间-能量不确定性</p>
							</div>
							<div class="float" step=5 leave-step=7>
								<h3>量子效应——不确定原理</h3>
								<p>由于历史原因与翻译问题，我国曾一度将不确定关系翻译为“测不准原理”</p>
								<p step=6>不确定原理的本质是波函数上的算符之间的非对易性，从而这些算符对应的物理量无法同时获得，与测量没有丝毫关系——当然测量的确带来更多的误差与不确定。</p>
							</div>
							<div class="float" step=7 leave-step=10>
								<h3>量子效应——混合态与量子计算</h3>
								<p>量子系统允许同时在多个状态上存在，比如既是活的又是死的。</p>
								<p step=8>但当测量发生的时候，则必须塌缩到测量相关的某一个基态上。</p>
								<p step=9>量子超高速计算依赖于混合态：对一个量子态的处理等于同时对若干个基态做相同的处理。</p>
							</div>
							<div class="float" step=10 leave-step=14>
								<h3>量子效应——量子纠缠与量子信息</h3>
								<p step=11>量子塌缩过程是一个真随机过程</p>
								<p step=12>量子纠缠使得相隔遥远的两地可以获得同一组随机生成的物理量</p>
								<p step=13>量子态不可克隆原理确保了上述过程得到的物理量是绝对安全的</p>
							</div>
							<div class="float" step=14>
								<h3>量子效应——量子逻辑与量子决策</h3>
								<p>基本思路就是使用量子理论的复值几率分布来替代经典逻辑与经典统计手段。</p>
								<p step=15>想得很有趣，但事实上都不如金融市场的路径积分来得靠谱。</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="life-game" slide-hint="生命游戏">
					<div class="ppt-page">
						<h2>与经典的差异</h2>
						<hr>
						<div class="float-container">
							<h3>高级算法</h3>
							<p>模拟退火算法与量子退火算法</p>
							<p>经典随机行走与量子随机行走</p>
							<h3>生命游戏</h3>
							<p class="swiper-slide-jumper" target="life-game" data-widget-toggle-target=".classic-life" data-widget-toggle-method="show">
								<b>经典生命游戏</b>
							</p>
							<p class="swiper-slide-jumper" target="life-game" data-widget-toggle-target=".quantum-life" data-widget-toggle-method="show">
								<b>量子生命游戏</b>
							</p>
						</div>
					</div>
				</div>
				<div class="swiper-slide" slide-hash="sum-cate" slide-hint="总结">
					<div class="ppt-page">
						<h2>总结</h2>
						<hr>
						<div class="float-container">
							<div class="float" step=1 leave-step>
								<h3>量子与经典最大的不同：</h3>
								<ul>
									<li>量子系统满足复值分布，且分布值模平方为几率，单粒子也满足量子分布。</li>
									<li>经典系统满足实值分布，且分布值本身就是几率，单粒子不使用统计分布。</li>
								</ul>
							</div>
							<div class="float" step=2>
								<p>量子体系衍生而来了不确定原理、量子纠缠、隧穿效应、量子态不可克隆、量子计算与量子逻辑。</p>
								<div class="blank" height="20"></div>
								<p>但量子体系的理论诠释也始终没有一个定论——这或许已经是形而上层面的战争了吧……</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="ppt-page middle center">
						<h1>漫长而无聊的演讲终于结束了……</h1>
						<div class="blank" height="20"></div>
						<h2>谢谢大家收看收听！</h2>
					</div>
				</div>
			</div>

			<!-- Pagination -->
			<div class="swiper-pagination">
				<div class="swiper-pagination-inner"></div>
			</div>

			<!-- Arrows -->
			<div class="swiper-button swiper-button-prev">
			</div>
			<div class="swiper-button swiper-button-next">
			</div>
		</div>
	</div>
</template>

<style scoped>
.crumb {
	position: absolute;
	z-index: 10;
}
.mobile .crumb {
	top: 10px;
	left: 10px;
}
</style>

<script>
import "/public/vendor/swiper/swiper.js"
import "/public/vendor/swiper/extension.js"
import "/public/vendor/swiper/swiper.css"
import "/public/vendor/swiper/extension.css"

var swiper;

PageBroadcast.on('change-loading-hint', msg => {
	if (!msg.data || msg.data.action !== 'show') return;
	if (!swiper) return;
	swiper.destroy();
	swiper = null;
});

export default {
	name: "quantum1",
	async mounted () {
		PageBroadcast.emit('change-loading-hint', {action: 'show'});

		var bgc = this.$el.querySelector('div.background-slider');

		if (Devices.isMobile) {
			bgc.setAttribute('direction', 'vertical');
		}
		else {
			bgc.setAttribute('direction', 'horizontal');
		}

		// Swiper Object
		swiper = new Swiper('.swiper-container', {
			initialSlide: 0,
			speed: 400,
			spaceBetween: 10,
			direction: Devices.isMobile ? 'vertical' : 'horizontal',
			keyboardControl: true,
			mousewheelControl: true,
			pagination: '.swiper-pagination-inner',
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoBackground: '.background-slider',
		});
		await swiper.initBackground();
		swiper.initHintBullet();

		await wait();
		bgc.classList.remove('hidden');
		swiper.container.removeClass('hidden');

		await wait(5000);
		callPageLoaded();
	},
	unmounted () {
		swiper.destroy();
		swiper = null;
	},
	methods: {
	}
}
</script>