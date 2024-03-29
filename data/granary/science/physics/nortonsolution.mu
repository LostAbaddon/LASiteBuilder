标题：诺顿穹顶的一个解决方案
关键词：物理
更新：2022/08/18 17:29:00

在[《诺顿穹顶：经典物理世界的警钟，还是哗众取宠的游戏？》](/article/science/physics/nortondoom.mu)一文中，介绍了一个很有趣的名为“诺顿穹顶”的思想实验，并对其做了一般化，比如给出了更有趣的墨西哥帽形的诺顿穹顶，它非但允许质点从静止跳变到下落状态，甚至还允许下落后的质点重新回到静止位置，然后“随机选择”到底是继续落下，还是停在中心顶点不再运动，直到下一次随机落下。

诺顿穹顶的根本问题在于，它指出如果势能对应的运动在相空间中存在非光滑的高阶奇点，比如原始诺顿穹顶中位置对时间的四阶导发散，而三阶与更小的导都为0，而在更加一般化的情况中可以存在奇葩的情况，那么当多条相空间的轨迹线在这个位置上达到速度为0的相切状态时，物理定律似乎允许系统从一个相轨迹跳变到另一个相轨迹上。

对此，很多人的反驳理由是牛顿第一定律中的“运动状态”理应包含三阶及更高阶导，所以不受外力时的运动状态保持不变要求了速度（一阶导）、加速度（二阶导）以及更高阶导都保持不变，而不允许突然的跳变。

这个反驳理由其实颇为牵强，且不说牛顿最早提出第一定律时的原意，关键是即便有人，而且是有著名物理学家说了这样的话，那难道就真的是事实了么？毕竟，__Physicists care about physics, but physics really don't care about physcists.__ 所以即便物理学家们言之凿凿，也不表示这就是事实。

而这事的诡异之处在于，我们几乎不可能做实验来验证它，因为我们要排除所有可能的扰动才能验证质点是否跳变，但要排除所有扰动是不可能的，量子物理中的随机性已经足以让我们无法进行实验了。

因此，在实验无法进行，而理论只能停留在思辨与前人言的情况下，有没有什么办法来解决这个问题呢？

今天我们就来看一个尝试的思路。

---

我们先来看运动方程：

$$
\frac{d^2}{dt^2} r(t) = f(r)
$$

我们对它的左右两侧做对时间的导可得：

$$
\begin{align}
\frac{d r}{dt} &= v\\
\frac{d^2 r}{dt^2} &= f\\
\frac{d^3 r}{dt^3} &= f' v\\
\frac{d^4 r}{dt^4} &= f'' v^2 + f f'
\end{align}
$$

由此可见，两根不同的相空间轨迹之间如果只是相切于可数个点而不是完全重合的话，那就要求上述三阶、四阶或者更高阶导必须发散。

在原始的诺顿穹顶问题中，三阶导依然为0，等价于 $f'(t_0) = 0$，但四阶导不为0，事实上是一个发散。在控制四阶导运动的方程中，这个发散会“恰好”遇到零点速度的平方项，发散的无穷乘上零，可以得到的东西很丰富，主要取决于曲线在该位置的零点阶数，如果是足够高阶的零点，那么乘上发散项后得到的结果依然是0；而如果阶不够高，那就可能发生跳变，这也分为四阶直接发散而三阶在下一瞬间直接变为一个非零有限值；还可能零点阶数恰当的时候，四阶得到一个有限值，三阶从0开始慢慢发生变化。

好了，这里的关键来了：静止对应的相空间轨迹在该奇异点位置上是无穷阶零点，因为它恒等于0；而下落轨迹在这里却是一个有限阶零点，它在三阶上给出0，而四阶上遇到发散而变为有限值，所以质点会开始运动。

但，这里就有一个很tricky的问题了：在这个运动方程中，由于发散的存在，所以在奇点上可能会出现系统运动项的前导与后导不同，或者说不同方向上的导可能是不同的，那么在这个奇点位置上，我们到底应该用哪一个导？

比如，质点原本是静止的，所以在跳变发生的时间点，它的“前导数”为0，而且是无穷阶零点；但在这里的“后导数”却可以不是无穷阶零点，比如如果真的发生跳变的话，那么在这个位置相轨迹对时间的后导数是有限阶零点，从而可以出现跳变。

所以，有趣的问题来了：这里到底应该取对时间的前导还是后导？

没有任何物理理论回答过这个问题，因为，在诺顿穹顶出现之前，人们普遍认为经典物理系统最多出现混沌，不可能出现真随机，所以也就不存在这种问题了。

从数学上导数的定义来看，我们似乎有理由认为，前导数是对“过去”的求导，而后导数是对“未来”的求导。也就是说，前导数可以利用系统的历史来获得，而后导数却必须用到“未来的信息”。

更准确地说，在上述运动方程中，方程左侧的是对时间的后导数，而右侧是对时间的前导数，因此整个运动方程所说的，便是__**系统的历史与现状，决定了系统的未来**__。

如果我们相信这种__“未来由历史与现状决定”的信仰__，而不考虑__“未来的信息能回到现在来参与决定未来”这种信仰__的话，那么诺顿穹顶问题就很容易解释了：无论是三阶还是四阶，甚至更高阶，我们在描述运动环境时所用的必须是前导数，而描述运动状态改变时必须使用后导数，因此如果质点原本处于静止状态的话，那么在讨论四阶运动时我们必须使用无穷阶零点，那么四阶就不允许跳变，从而质点应该继续呆在静止状态而不允许跳变。

从这个角度来看，认为牛顿第一定律中保持不变的运动状态包含了任意阶导这种信仰，本质上是未来有历史与现在决定这种信仰在分析力学框架下的自然结论。

但，回到一开始的问题，这个信仰真的对么？

在量子理论的诸多诠释中，有一系列很有趣的诠释，比如“交易诠释”，便认为未来的信息是可以通过波函数中的“超前波”的形式从未来传递到过去的。如果我们赞同这种诠释的话，那么经典物理中认为未来只能由历史和现状决定的信仰就毫无道理了，因为经典物理是量子物理的低能近似，而后者已经不坚持这种信仰了，我们又怎么能认为前者还坚持这一信仰呢？

所以，诺顿穹顶问题就这样和量子诠释挂上了钩——在我们找到实验来筛选量子诠释之前，这便是一个纯粹的信仰问题。