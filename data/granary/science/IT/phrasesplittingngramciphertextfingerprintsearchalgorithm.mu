标题：一种优化的密文搜索算法
关键词：算法
更新：2021/10/18 18:24:39

为了应对拖库，我们必须在数据库中保存密文而非明文。

在这一前提下，如何对加密后的数据进行模糊搜索？

假定要进行全字段内容的精确搜索，那我们可以对搜索内容采用相同加密算法后对密文进行全文匹配搜索，这样不是问题。但对于模糊搜索，加密后做全文搜索的方法显然不可取。

我们下面考虑一个最简单的模糊搜索：**字段中包含搜索关键字**。

常见的一种处理方法是__N-Gram密文搜索算法__，其大致流程为：

1.	将明文从第一个字符开始取长度为N的子串（称为“滑动窗口”），从而K个字符长的原文可以拆分出K-N+1个子串；
2.	对这K-N+1个子串加密，并将加密后的密文串联起来，保存在特定的搜索字段中；
3.	对搜索关键字也做上述N拆分、加密并串联，得到搜索密文；
4.	对搜索字段进行模糊搜索，搜索目标为上述搜索密文。

显然，只要原文中包含搜索字段，那搜索字段对应的搜索密文肯定包含在原文的搜索字段中，所以模糊搜索成立。而之所以要使用N-Gram滑动窗口，是为了降低密文长度，但带来的代价是搜索关键字的长度不能小于滑动窗口的长度N。

但这一做法存在很大的问题，即数据库空间消耗极大。K个字符的原文对应的搜索字段将包含(K - N + 1) P个字符，这里P是加密算法生成的密文长度，比如AES算法的密文长度为128、192或256，视选择的加密强度而定。

基于N-Gram密文搜索算法，我们可以得到一个改进的密文搜索算法：

1.	对原文进行标点符号拆分，得到正文字符串序列；
2.	对每一个正文字符串进行分词拆分，将分词器筛选出来的字符串称为“词组”，其它连续字符串构成“散组”，显然一个正文字符串组可以拆分为由一系列词组与散组构成的序列；
3.	对散组做N-Gram密文搜索，得密文串；
4.	对词组做外N-Gram加密（即包含词组的N字滑动窗），得密文串；
5.	将正文字符串中的词组与散组得到的密文串串联起来得到正文字符串密文序列；
6.	将上述密文序列用分隔符连接，得到正文对应的搜索密文，保存在数据库中作为搜索字段；
7.	对搜索关键词，同样进行上述1到5步，然后进行模糊搜索。

可以证明，这样模糊搜索的结果一样可以得到想要的内容。

其管家你在与，将一个大K拆分为若干较小的散组$k_i$与词组$e_i$，从而最终搜索密文长度为：

$$
L = \left( \sum_i (k_i - N + 1) + \sum_i (N - e_i + 1) \right) P
$$

显然，拆得越细，最终长度越小；词组越多，最终长度越小。

当然，采用分词的缺点，是对于非常不正规的文本可能存在分词反而带来错误的情况。这种情况使用外N-Gram在一定程度上是可以解决的，但依然可能会带来问题。所以对于分词库的选择很重要。

我们将这种算法称为__拆词N-Gram密文搜索算法__。

但，这样的长度依然会远大于原文长度，所以数据库的空间负载其实依然很大。

这里，我们可以考虑一下是使用加密算法还是摘要算法比如SHA256这个问题。如果数据库中真的存了大量数据的话，N-Gram拆词与分词结果很容易被撞出来，即便加盐了也没用。所以这里还是要采用加密算法，那最多能知道那几个词是相同的，但不知道内容是什么。

所以，我们可以在上述算法基础上再做一个优化——虽然我们不能使用摘要算法，但同样的，我们也不需要使用词组与散组的密文全文，只要能提取出“特征”即可。

我们将上述过程的第3、4步中使用的加密过程给替换为提取一个较短特征值的算法，比如AES后截取末尾p位。

通过这个操作，从密文要逆向出明文是不可能的（AES本来很难破解，何况还只保留了末尾p位），而发生碰撞的概率为$2^-p$，当大量操作的时候的确是一个较大的概率，但我们考虑到词组的情况，碰撞发生的概率会极速下降。

因此，采用这种__拆词N-Gram密文指纹搜索算法__后，我们可以将搜索指纹的长度缩小为前述密文搜索算法的$\frac{p}{P}$，但存在一定的概率会检索到不合要求的内容，此时可以对搜索结果做解密后的二次过滤，由于已经进行了一次搜索，所以需要做解密的数据量会小很多。

当然，我们也可以考虑选择两种不同的特征算法（比如换一个秘钥的AES，或者内容加盐），保存两个搜索指纹字段，对第一次搜索筛选出来的做第二指纹字段的匹配，从而极大地减小误中概率。

甚至于，第一次搜索所用的指纹长度p可以取1或2，第二次和第三次搜索的指纹长度用较长的p，三次使用不同的加密算法或秘钥或者盐，这样用短指纹做快速筛选，两次长指纹做较精确的模糊匹配，效果会比较好。

最后，还在研究如何利用同态加密的优势来更快地实现模糊搜索，但目前还没结果。