标题：评分与热度算法
作者：LostAbaddon
更新：2018.07.23 21:11:15

> 不知道简书现在的LaTeX解析用的是什么工具。
在CMD和Yu中没问题的LaTeX语句在简书这里渲染出错，显示“公式输入有误”，有点神奇。。。
PS：已发现的一点是，简书LaTeX不支持用“\\\\”进行换行，不知道是不是和Markdown的语法冲突了？那应该解决一些Markdown解释器的处理优先级逻辑啊。但在cases块内的\\\\换行倒是可以的。。。

# 各式评分与热度算法

推荐算法与评分算法，就是根据用户对某一目标内容的特定交互行为，为目标进行评分，并根据评分内容进行排序和推荐。

评分算法的种类有很多，下面就简单介绍一些。

## 静态评分

所谓静态评分，就是评分结果不考虑时间的因素，而只考虑用户交互的情况。

### 总赞数

总赞数是最简单直白的，就是将所有用户点赞的次数累加起来，不做任何修正。

在交互上，内容只有赞这一个交互方式，用户要么赞，要么不做任何操作。每次赞都以完全相同的权重计入总数，得到一个总分。

在总赞数下，可以有一些分类：

#### 赞踩差

内容有赞和踩两种交互，总分为总赞减总踩：

$$
\mathrm{Score} = \mathrm{TotalLike} - \mathrm{TotalUnlike}
$$

也是一种很直白的方式。

#### 多分求和

在赞踩二元交互之上，引入更多元的交互，比如有 1 到 5 颗星，一星算 1 分，5 星算 5 分，最后的总分就是平均值：

$$
\mathrm{Score} = \frac{\sum_{i=1}^N i \times \mathrm{ActionCount}_i}{\mathrm{TotalActionCount}}
$$

这也是一种很好理解的评分方法。

#### 带权重的总分制

在一人一票的基础上，还能引入权重。

比如一名用户的社区声望高，那么它的投票权重也高。

引入权重后，就有了带权重的总赞、带权重的赞踩差和带权重的多分求和：

$$
\begin{cases}
\mathrm{Score}_{1,w} = \sum_i w_i\\
\mathrm{Score}_{2,w} = \sum_{i \in \mathrm{Likers}} w_i - \sum_{i \in \mathrm{Unlikers}} w_i\\
\mathrm{Score}_{3,w} = \frac{\sum_i s_i w_i}{\sum_i w_i}
\end{cases}
$$

### 去除随机偏差

在评分的时候，经常会出现到底要打什么分并不清楚，或者由于某些场外因素的影响导致打分结果与自己实际所想的不一致的情况。

对于这种情况，可以采用一定的统计手段进行抵消。

以不带权重的总赞制来说，如果总共有 N 名用户浏览过内容，其中有 n 名用户点了赞，那就是说点赞的比例为 $p=\frac{n}{N}$，我们可以使用 $\beta$ 分布模型建立一个分布，取分布的 $\frac{1}{e}$ 高的分布区间的下边界为扣除随机偏差后的可信值，该结果成为 Wilson 下限，那么此时结果为：

$$
p_{LB} = \frac{q - 1 + 2 p - \sqrt{(q - 1 + 2 p)^2 - 4 q p^2}}{2 q}
$$

其中$q = 1 + \frac{2}{N}$。

由此得到的结果就是 $\mathrm{Score} = N \times p_{\mathrm{LB}}$，它比 n 要小。

使用 Wilson 下限，我们可以重新改写总赞制、赞踩差和多分求和的结果，不同的投票结果都取对应的 Wilsone 下限再累积在一起即可。

这里要注意的是，Wilson 下限的特点，是参与交互的人数越少，则被扣除的比例越大，反之如果参与交互的人数多，则被扣除的比例则小。因此 Wilson 下限会将分布变得更尖锐，从而最后的结果将更趋向于参与交互的用户数多的交互项——当然对于只有赞的情况来说，这个影响不存在。

对于带权重的情况，可以取所有浏览内容的用户的总权重为 N，进行交互的用户的总权重为 n，再取其 Wilson 下限进行操作。

### 去除跟风因素

如果用户在给内容打分前，已经看到了评分结果，那么很可能出现跟风。而即便没有在系统内看到内容打分，在系统之外依然有可能提前知道评分，因此跟风的情况很可能依然会出现。

去除跟风的方式要看具体系统设计，一般而言可以采用对数的方式：

$$
\tilde n = n_0 \times \ln \left( 1 + \frac{n}{n_0} \right)
$$

其中 n 是某一分数项的参与用户数，$n_0$ 是一系数。

这个算法在 n 小于 $n_0$ 时，对 n 的修正不大，而当 n 大于 $n_0$ 时，修正则会很明显，因此 $n_0$ 的选择很重要。

对于只有赞这一种行为的，我们可以取为内容总阅读用户数的一半，或者系统上所有内容的总点赞比率（每份内容的点赞与阅读用户数的比的平均值）乘该内容的阅读用户总数。而对于有多交互选项（如赞和踩，多分值，等等），则也可以取为平均每个交互项的用户参与数。

### 去除跟风与随机偏差

我们可以先对每一个交互项取 Wilson 上限或下限，然后再做去跟风处理。

由于 Wilson 下限会拉大不同交互项之间的交互数差异，所以这在客观上加剧了跟风作用。对于有超过一个交互选项的情况，我们可以反过来取 Wilson 上限，然后在用去跟风处理。

通过对 Wilson 上限的数学表达的分析，我们可以知道当 N 对各项交互都是相同的情况下，大 p 的 Wilson 上限不会被小 p 的 Wilson 上限反超，所以可以放心使用 Wilson 上限。

因此，对只有赞的情况，取 Wilson 下限，而对有多种交互的情况则取 Wilson 上限，避免分布变得集中。

这里，取 Wilson 上限的意义在于，原本有部分人想要选某一项，但在跟风作用下会想要选别的项，从而出现偏差。

### 进一步去除排序带来的选择偏差

如果存在排序帮当，那么打分低的内容排名靠后，参与打分的人就会少，从而评分就越可能存在偏差。此时可以采用一定的手段来调整排序用的分值：

$$
\mathrm{Index} = \frac{v \times \mathrm{Score} + m \times \mathrm{Aerage}}{v+m}
$$

其中 m 是一个参数，可以设置为每篇内容的平均参与互动人数的一半，或者一个固定的常值（如 IMDB 采用 1250），v 是参与内容的互动人数，Score 是由互动决定的分值，Average 则是当前所有内容的 Score 平均值。这样最后得到的就是排序用的分值 Index。

这个算法中，当参与交互的人数不多时，内容的排序基本就是当前全网平均分，处于中游；而当参与交互的人数足够多时，则以用户打分结果为准。

它可以被推广到更加一般的形式：

$$
\mathrm{Index} = f(v) \times \mathrm{Score} + [1 - f(v)] \times \mathrm{Aerage}
$$

通过调节函数 f 的具体形式，来决定在参与互动的人数少和多时如何贴近平均评分与内容自身评分。

### 更多交互

前面的交互项，主要是和打分相关，包括只有赞，有赞和踩，有更加细分的打分项。这些反应的是用户对文章内容的主观评价。

当内容本身可以有更多的交互项，比如评论、分享、打赏、甚至仅仅是浏览，等等。

此时，综合各类交互而来的文章评分，可以根据不用交互项，选择上述评分算法后，进行加权求和。

## 引入时间

在考虑时间效应后，情况又会变得不同。

静态评分反应了内容的“质量”，而引入时间以后，则综合考虑了内容本身的质量与推荐，可以认为是内容的“热度”。

### 引力下降

一份刚发出来的内容，因为存在的时间短，所以积累到的用户交互自然比已经存在很长时间的内容要少，因此将两者放在一起排序是很不公平的。

一个最简单的处理方式，是做时间的平均：

$$
\mathrm{Score}(t) = \frac{S}{t}
$$

其中 S 是评分总值，具体采用上面的哪一种算法视情况而定；t 是发布到现在的时间，一般以天为单位。

这个算法当时是很粗糙的，尤其当 t 很小的时候，很容易出现大幅度的起伏变化。

所以一个更加有效的形式是：

$$
\mathrm{Score}(t) = \frac{S}{t + t_0}
$$

这里 $t_0$ 是一个系数，作用就是为了避免 t 过小时的分值大幅改变。

我们还可以对这个结果做进一步的优化。取微分函数为：

$$
\frac{dS}{dt} = - G S_0^{- \frac{1}{G}} S^{1 + \frac{1}{G}}
$$

该微分方程的解为：

$$
S = \frac{S_0}{(t + t_0)^G}
$$

显然取 G=1 时得到的就是上面的结果，且我们可以通过调节 G 来获得更多的函数。

该微分方程源自二次常微分方程：$y'' = Cy^n$，我们取 $g = \frac{n+1}{2}$、$M = - \sqrt\frac{2 C}{n + 1}$，则该二次常微分方程便可化为一次常微分方程 $y' = M y^g$，而这就是我们所用的方程。因此，从方程的含义上来说，$S_0$ 相当于引力源的质量，G 相当于引力与距离的幂次关系，被称为该排名算法中的“引力系数”。

其中一个最特殊的形式，就是当 G 取正无穷时，我们实际上得到的是指数下降的函数 $S = S_0 e^{-\frac{t}{t_0}}$。

通过该算法，不同时间产生的文章将以不同的速度下降，且在 $S_0$ 相同的情况下，越是新的文章排序热度越高。

实际使用的时候，需要根据系统的具体情况来调节参数 $t_0$ 和 G，一般取 $G \in [1.5, 2]$。

### 更一般的下降法

引力下降法是基于微分方程，但通过参数选择后，其实最原始的微分方程的含义已经不再有效，更多地是从经验与唯像的角度进行参数选择。

因此，在更一般的情况下，我们可以直接将时间因素作为一个函数写入：

$$
\mathrm{Score}(t) = S_0 f(t,t_0) + h(t,t_0)
$$

其中 t 是当前时间，$t_0$ 是内容发布的时间。函数中还可以有别的参数。

比如 Reddit 所用的是 $f(t,t_0) = 1$、$h(t,t_0) = \frac{(t_0 - t_c) \times \mathrm{sign}(L-U)}{45000}$。

### 时段权重

时段权重可以做到比下降法更加精细地计算热度，因为下降法并不考虑不同时间段内的交互情况，而是只考虑一个总效应。

我们可以根据到当下的历史记录根据固定或者不固定的时间段划分划分为若干个时间段 $T_i$，每个时间段计算评分得 $S_i$，然后进行汇总：

$$
\mathrm{Score}(t) = f(t,t_0) + \sum_i \omega_i S_i
$$

其中 $\omega_i$ 是衰减系数。比如说，我们采用引力下降式的衰减系数：$\omega_i = \frac{1}{(i + c)^G}$，这样就有：

$$
\mathrm{Score}(t) = \sum_i \frac{S_i}{(i + c)^G}
$$

这样如果一篇内容昨天有交互，另一个篇文章今天有交互，两个交互得到的评分是相同的，那么今天有交互的排名自然更高。

## 总结

上面介绍了各种静态内容评分值与引入时间后的热度值的计算方式和相关的设计思路。

作为一个例子，我们可以为一篇内容的各种交互行为设定不同的静态评分函数，然后用时段衰减权重累积在一起，构成一篇内容的（超夸张的）排序热度值：

$$
\begin{cases}
p_{\mathrm{UB},i,t} = \frac{q - 1 + 2 p_{i,t} + \sqrt{(q - 1 + 2 p_{i,t})^2 - 4 q p_{i,t}^2}}{2 q}\\
q_t = 1 + \frac{2}{N_t};\ p_{i,t} = \frac{n_{i,t}}{N_t}\\
\hat n_{i,t} = n_0 \ln \left( 1 + \frac{N_t}{n_0} p_{\mathrm{UB},i} \right)\\
\hat s_t = \frac{\sum_i \hat s_i p_{i,t}}{\sum_i \hat n_{i,t}} + \frac{4}{5} c_t + \frac{2}{3} h_t\\
\mathrm{Ave}_t = Ave(\hat s_t)\\
S_t = \frac{(v_t + t) t \hat s_t + 2000 \mathrm{Ave}_t}{(v_t + t) t + 2000}\\
S(t) = \sum_t \frac{S_t}{2^t}
\end{cases}
$$

其中 $N_t$ 是 t 时间段内内容的总阅读人数，$c_t$ 是该时间段内的评论数，$h_t$ 是该时间段内的分享/转发量，$n_{i,t}$ 是该时间段内第 i 个交互项的参与人数，时间段内的总交互量为 $v_t = \sum_i n_{i,t}$，$p_{i,t}$ 是相应的参与人数比，$p_{\mathrm{UB},i,t}$ 是相应的 Wilson 上限，$\hat n_{i,t}$ 是去跟风后的交互量，$\hat s_t$ 是考虑上评论与转发后的时间段内的总评分，$\mathrm{Ave}_t$ 是这段时间内所有内容的平均评分，$S_t$ 便是该时间段内的排序热度值，最后得到的 $S(t)$ 就是最终的排序热度值。

看着是不是很蛋疼？