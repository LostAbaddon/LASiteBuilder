标题：自然数的最廉价可分解表达
作者：LostAbaddon
更新：2019.04.03 11:02:29

这个问题源自最近在设计的一套协议，用在一个分布式系统中。

----

首先，我们将有序数列$\{b_i\}$（有限或无限都可以）称为是一个“表达基”，只要求对任意$b_i$都满足$b_i>0$。

接着，我们将一个有序数列$\{a_i\}$称为是数N的一个“表达”，如果满足$N = \sum_i a_i b_i$。

进一步，我们可以称一个表达是“自然表达”，如果对其中的任意$b_i$都是自然数。

如果一个自然表达$\{a_i\}$与另一个自然表达$\{b_i\}$（两个表达可以不是同一个数的表达）满足$\forall i : a_i \le b_i$，则称前者是后者的一个子自然表达。

接着，我们可以定义一个表达$\{a_i\}$的权重为$w = \sum_i |a_i|$。

好了，下面就是问题了：

选定表达基为$b_i = p^{i-1}$，其中p是素数。则，任意自然数N都有一组自然表达X，使得任意小于N的自然数都存在至少一个自然表达Y，且Y是X的子自然表达。现在，请给出这样的表达集$\{X\}$中权重最小的那个表达。

上述集合被称为N的“可分解表达”，而权重最小的那个就是N的“最廉价可分解表达”。

----

首先，上面提到的表达集肯定是存在的，因为必然存在一个“平庸的”满足条件的表达：$\{a_i|a_1=N,a_{>1}=0\}$。

这个表达显然地满足条件，但显然地权重太大。

为了找到足够廉价的表达，一个可行的方案是这样的：

首先，找到比N小的最大的可以表达为$m p^n-1,m<p$形式的数，记为n，称为N的“表达主部”，而N-n就是N的“表达余部”。

接着，将主部和余部都用p进制表示（不是现代数学中的p进数），接着把这两个表示直接当做表达，再加在一起，就构成了一个“足够廉价”的表达了。

这样的表达被称为N的“足够廉价可分解表达”。

比如说，我们取p=2，那么8的足够廉价可分解表达就是{211}，很显然，1到7都可以用这个表达的子表达来表达，比如7={111}，6={011}，等等。

要证明足够廉价可分解表达满足要求是很简单的，因为很容易证明以下两点：

1. 假定m是比N小的自然数，m的一个表达是N的可分解表达的子表达，将两个表达的对应元素相减，得到的还是这个可分解表达的子表达，且表达了自然数N-m。
2. N的表达主部的p进制表示对应的表达，其中总存在至少一个子表达可以表达任意一个小于主部的自然数。

第二点表明了，所有小于主部的数都存在一个表达是主部表达的子表达。而第一点则表明，只要1到N的一半的自然数可以用N的表达的子表达表达，那么剩下的一半也可以。

所以，足够廉价可分解表达肯定是满足题意要求的表达。

下面的问题只有一个：足够廉价可分解表达是不是最廉价可分解表达呢？

个人认为应该是的，但还没法证明。

主要是，主部的部分当然是没问题的，余部用p进制表示来表达后，当然也是权重最小的，但两个加起来后是不是最廉价，还真不好说。

---

这个问题可以用在什么地方？

地方很多啊，比如还是现金时代，金额怎么用钞票来表达，就会遇到这个问题：在不找零的情况下，掏出多少纸币给对方能让对方用起来最方便？

当然，估计也没多少人会在意这个细节问题吧。。。

在分布式系统中，这个问题就有了很多可以发挥作用的地方，这里就不细说了。