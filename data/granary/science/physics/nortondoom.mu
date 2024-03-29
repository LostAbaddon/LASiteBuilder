标题：诺顿穹顶：经典物理世界的警钟，还是哗众取宠的游戏？
关键词：物理
更新：2022/08/17 10:50:39

经典物理的基石之一，便是著名的牛顿运动三定律：

1.	若物体受到的合外力为0，则物体保持运动状态不变；
2.	物体的加速度，乘以物体的质量，等于物体受到的合外力；
3.	相互作用的两个物质之间的力彼此大小相等方向相反。

也就是说，物体受到的外力可以决定物体的加速度，进而影响物体的速度，以及物体的位置。

所以，就有了这么一个问题：**物体加速度的变化率，由什么来决定？**

或者，可以这么问：**牛顿第一定律中的“运动状态”，是否包含物体位置变化率的三阶及更高阶导？**

我们可以想象这么一个情况：一个物体所处的状态，使得只能决定到它所受的合外力，而对位置的三阶甚至更高阶导不构成任何限制的话，那么它会如何运动？毕竟，此时物体的加速度虽然在系统开始的时候是确定的，但此后如何变化是受三阶与更高阶导控制的，而后者是不确定的。

因此，如果真的存在这样的系统的话，它似乎便体现了一种随机性，且这种随机性和我们平时所说的混沌还不同——混沌是对初值的敏感，而这里的随机性则体现出初值对后续系统演化完全不具有决定权。

这样的系统是否存在？

当然存在，比如匹斯堡大学John Norton于2003年提出的诺顿穹顶，就是一个经典案例。

----

让我们想象一个轴对称的穹顶，穹顶上任意一点到穹顶中心点的水平位移与垂直位移分别是 x 和 h（往下为正），所以穹顶曲面可以写为 $h(x)$。

我们取 r 为曲面上连接中心点与给定点的弧长，所以有：

$$
r(x) = \int_0^x \sqrt{1 + \left[ \frac{d h}{d x}(x') \right]^2} dx'
$$

也即：

$$
\frac{d r}{d x} = \sqrt{1 + \left( \frac{d h}{d x} \right)^2}
$$

而另一方面，对于这个穹顶上的质点，其运动方程可以写为：

$$
\frac{d^2 r (x)}{d t^2} = g \frac{\frac{d h(x)}{d x}}{\sqrt{1 + \left[ \frac{d h(x)}{d x} \right]^2}} = g \frac{d h}{d r}
$$

所以，我们可以将运动方程写为如下形式：

$$
\begin{cases}
\frac{d^2 r}{d t^2} = f (r)\\
h(r) = h_0 + \frac{1}{g} \int_0^r f (z) dz
\end{cases}
$$

接下来，我们要求辅助函数（其实也可以理解为外力函数） $f(r)$ 满足 $f(0) = 0$，那么显然常值函数 $r = 0$ 也即 $x = 0$、$h = h_0$ 显然是满足这个运动方程的，而此时其实我们只是知道了质点一直停留在穹顶的中心顶点位置，我们并没将穹顶曲面（轴对称下其实讨论的就是穹顶的剖面曲线）的形状确定下来，因此显然这里运动方程肯定还存在第二个解（或者说解族）。

我们可以任意选择辅助函数 $f(r)$，比如：$f(r) = A r^n$，从而可以得到如下非静止解：

$$
r(t) = \left[ \frac{2 (n + 1)}{A (n - 1)^2 (t - t_0)^2} \right]^{\frac{1}{n - 1}}
$$

显然，为了保证 $f(r)$ 和 $r(t)$ 不发散，我们只需要取 $n \in (0, 1)$ 即可。这么一来，我们事实上就有了两类完全不同的解：

$$
\begin{align}
r_1(t) &= 0\\
r_2(t) &= \left[ \frac{A (n - 1)^2}{2 (n + 1)} (t - t_0)^2 \right]^{\frac{1}{1 - n}}
\end{align}
$$

这个函数显然满足前两阶导都为0这个要求，所以在 $t = t_0$ 这个时间点上，这两个解会恰好在穹顶的中心顶点重合，且速度也保持一致，并都处于不受外力的状态，并且我们可以构造如下拼接函数：

$$
r(t) = \begin{cases}
0 & t \le t_0\\
\left[ \frac{A (n - 1)^2}{2 (n + 1)} (t - t_0)^2 \right]^{\frac{1}{1 - n}} & t > t_0
\end{cases}
$$

这个函数完全满足上述运动方程，但却存在一个无法被确认的任意常数 $t_0$，它表示停在穹顶中心顶点的质点在任意时刻都有可能从静止状态一下子“跳”到运动状态，且这种跳变是满足牛顿定律的，但却没有任何物理上说得过去的合理理由来告诉我们质点为什么会发生跳变。

事实上，这样的“任意跳变”可以有很多种不同的形式，诺顿穹顶可以有很多种不同的形状，比如下面这样：

$$
f(r) = n \omega^2 \left[ (n - 1) A^{\frac{2}{n}} r^{1 - \frac{2}{n}} - n r \right]
$$

当 $n > 2$ 时也可以构造出这样的自由跳变解来：$r(t) = A \left\{ \sin [ \omega (t - t_0) ] \right\}^n$，它对应的穹顶曲面（剖面曲线）的表达式很复杂，但可以看出是一个类似墨西哥帽的形状，质点可以停留在中央非常微小的平顶区，也会在有极微小扰动的情况下落下，然后在墨西哥帽的凹槽区域来回做周期摆动。质点会周期性地回到穹顶的中心顶点，所以它可以和静止解不断做随机拼接，也就是静止的质点可以在任意随机时刻突然跳变开始运动，然后过一个周期回来后再随机跳变为继续周期运动或保持静止，并一直重复这个随机过程。

这样的质点看上去是不是很任性和魔性？它比简单的诺顿穹顶看上去要复杂得多，关键是随机性更加显著。

这就是诺顿穹顶所展现出的一种远较混沌那种初值敏感更奇特的经典物理范畴内的随机性，但这种随机性到底是一种真实存在的随机性还是理论遇到的缺陷呢？这还需要我们进一步分析。

要构造出诺顿穹顶这样的理论上看似成立的经典随机性，我们其实是需要构造这样一个动力学系统，其中存在两族解 $r = A(a; t)$ 和 $r = B(b; t)$，它们满足相同的动力学方程，但却具有不同的函数形式。如果存在两族各自的参数 a 和 b 使得下面这组等式成立，那么就可能发生上述随机跳变：

$$
\begin{align}
A(a; t) &= B(b; t)\\
\frac{d}{dt} A(a; t) &= \frac{d}{dt} B(b; t)\\
\frac{d^2}{dt^2} A(a; t) &= \frac{d^2}{dt^2} B(b; t)\\
\end{align}
$$

其中第三组等式可以通过运动方程得到，所以实际上的约束条件就是前两条。也就是说，当这两根轨道在相空间中相切时，虽然它们遵守的是相同的运动方程，但却只是相切而并不重合，此时系统就可以在切点上发生跳变。

要发生这样的情况，就必须要求运动方程在切点位置存在奇异性：

$$
\begin{align}
\frac{d^2 r}{dt^2} &= f(r)\\
\frac{d^3 r}{dt^3} &= f' v\\
\frac{d^4 r}{dt^4} &= f'' v^2 + f f'
\end{align}
$$

显然，如果不存在奇异性，即 $f(r)$ 的任意阶导都有限且连续，那么这两个轨迹族显然就应该是重叠的而不只是相切，因为两条轨迹的任意阶导都相等。而只有在存在奇异性时，虽然两组轨迹在切点处的 v 相等且都为0，但由于可以具有不同阶的零点，所以可以给出不同的轨迹。

因此，我们基本也就明白了跳变发生的条件：外力 $f(r)$ 的一阶及以上导在跳变点发散，且在跳变点两条轨迹的速度都为0，并是不同阶零点，那么在这个位置就可以出现跳变——当然，可以出现不表示真的会出现。

这便是一种非常神奇的经典物理领域的随机性。

但，它真的是物理的么？

----

在很多人的讨论文章，比如 Gareth Davies 的文章 [Newtonian physics IS deterministic \(sorry Norton\)](https://blog.gruffdavies.com/2017/12/24/newtonian-physics-is-deterministic-sorry-norton/) 中，人们提出这么一个观点，即数学上合理的解并不表示物理上合理。

或者，更准确地说，为了恢复物理的决定性，这类拥有非决定性的随机性的过程都是非物理的。

比如 Gareth Davies 认为非静止的跳变后的运动解是非物理的，因为：

>	clearly since it moves despite the absence of a force there

但这一说法其实暗含了牛顿第一定理中的运动状态包含了三阶及更高阶导这一前提，这样不存在力才能作为排除这一解的合理要求。

另一个认为这个解非物理的理由可能更加有道理：

>	In this case, it happens to describe a*trajectory*passing through the apex. This is the first clue that this is a non-Newtonian solution: it describes the particle sliding off the apex despite it having zero velocity and zero acceleration there!

即，非静止解描述的是一个越过诺顿穹顶中心顶点的质点的轨迹，但这根轨迹在中心顶点出的速度和加速度都是0，那它怎么可能“越过”中心顶点呢？

这个说法本身很不科学，颇有一点用芝诺悖论来解释运动合理性的味道，因为如果我们计算一个向上滚动的质点越过中心顶点到达另一侧或者同一侧指定位置所需的时间的话，我们会发现这个时间是有限值，也就是说，在不考虑跳变的情况下，质点是可以在有限时间内到达和经过中心顶点的，速度与加速度都为0并不能阻止质点到达和经过该位置，毕竟，四阶导不是0嘛。

事实上，Davies 的核心论点，就是文章中段在应用牛顿第一定律后所指出的：**按照__他所理解的牛顿第一定律__，位置的任意阶导都包含在了__运动状态__一词中，所以在不受外力的情况下，三阶与更高阶导也应该保持为0，所以“物理上不允许跳变”。**

但这其实才是最关键的问题：**部分物理学家的物理理论或许要求了运动状态必须包含三阶与更高阶导，但这是物理学家的认为，物理本身怎么认为？**

用 Davies 在文中所说的来回答的话，就是：

>	**Physicists cares about physics, physics really doesn’t care about physicists.**

物理本身真的不怎么在乎物理学家的信仰是什么。

所以，我们到底有没有什么确切的证据来说明上述跳变真的是非物理的呢？

这个还真的很难，因为我们几乎不可能用实验来验证它，因为扰动总是存在的，而只要存在扰动，那么跳变处的物理环境就被改变了，我们就无法验证是否真的存在跳变了。

因此，这个问题似乎真的成了一个纯粹的信仰问题。

那么，让我们来从另一个角度考虑这么一个问题：**我们的物理学家们到底已经做了多少这种认为选择数学解的事了？**

答案是：很多哦。

----

让我们来看一个非常有名，同时也是非常有趣的，拼接把戏——

在广义相对论中，当我们讨论克尔-纽曼度规（描述的有自转与电荷的黑洞的时空）的“最大解析延拓”时，彭罗斯的钻石图会被延拓为无穷个钻石图的拼接，里面还会出现正宇宙、反宇宙等等，从而一个质点的“自由落体”之旅可以通过穿过黑洞-白洞的视界的方式在无数个宇宙中穿越。

这个图景为无数科幻小说提供了数之不尽的脑洞源泉。

但，即便不考虑诺顿穹顶所带来的对数学解的物理性的质疑，我们也能发现这么延拓出来的时空似乎并不都是物理的，尤其是图中“反宇宙”的部分（当然，质点的自由落体是无法进入反宇宙的黑洞外区域的，最多只能到达反宇宙的内视界以内）。

同样的拼接还在我们研究爱因斯坦-罗森桥（漫威的《雷神》系列电影中简·福斯特研究的就是这东西）中出现过：原本史瓦西度规的视界内部分是有解的，但我们原则上可以将另一个黑洞的世界外部分拼接上去，而且这种拼接在数学上没有任何问题，于是两个黑洞的视界面通过一种被称为爱因斯坦-罗森桥的数学结构衔接在了一起，为我们穿梭星空提供了无尽的想象空间。

这两个是我们在广义相对论中最常遇到的拼接结束。

事实上，我们可以在更加复杂的度规的奇异性区域采用拼接技术来达成时空研究者们所要求的“时空最大解析延拓”。

但，让我们重新考虑一下诺顿穹顶问题中所出现的那个问题：物理问题中的数学解，真的物理么？

如果我们得到 $m^2 = 4$，那么显然 $m = -2$ 这种“负质量”解显然会被大多数人认为是非物理的。但在上述广义相对论的最大解析延拓中，我们真的构造出了物理上的时空么？还是仅仅一场数学游戏？

尤其，当我们发现同样是满足牛顿定律的两个解的拼接被人质疑为非物理的时候，又是通过什么样的理由来认为同样属于经典物理范畴的广义相对论中的拼接技术就是物理的呢？

>	甚至于，并不是所有解析延拓的拼接处理在拼接处的连续性比诺顿穹顶中跳变的连续性好的，毕竟后者直到三阶都是连续的，但某些解析延拓的连续性只到二阶，三阶就不行了。

因此，如果没有更加一般性的指导原则来告诉我们哪些数学上合理的解在物理上是不合理的的话，那么我们将陷入一种非常值得警惕与深思的困境中：

> [info]	**相比经典物理中出现了非决定论的随机性所带来的反拉普拉斯式的惊慌失措，更重要的问题是物理理论所采用的语言现在具有了一种很难被即便最饱受训练的专业人士所剔除的欺骗性。相比这种我们不知道什么可以相信什么不值得相信的无助窘境，经典物理确定性与完备性的丧失已经完全是一个小到可以忽略的不值一提的问题了。**

这大概才是藏在诺顿穹顶之下的最值得深思的警示与提问了吧。

---

当然，往好的方面想，反正经典物理并不是真正的物理，量子世界中的随机跳变本身就家常便饭，更重要的是量子诠释中的人为任意性更是一种大家现在都懒得提的习以为常，所以到底应该相信什么不相信什么这个问题并不是很重要。

用 David Mermin 的话来说就是：

>	Shut up and calculate!



>	PS: 除了上面提到的几乎可以算是哲学信仰的解释诺顿穹顶问题的方案之外，我们还可以从一个至少看上去更数学的角度来解释该问题的方案，可以[点这里](/article/science/physics/nortonsolution.mu)。