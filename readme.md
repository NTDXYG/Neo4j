# 关于项目

## 项目功能

1. 电影介绍
2. 电影评分
3. 电影演员列表
4. 演员A和B合作过哪些电影
5. 某演员出演过那种类型的电影或演过某种类型的电影有哪些

## 项目介绍

参考：https://github.com/kobeyk/Spring-Boot-Neo4j-Movies

本项目基于知识图谱进行问答，因此使用图数据库neo4j。

（1）首先我们简单说一下什么是Neo4j？

Neo4j是一个NoSQL的图数据库管理系统，它存储的结构和redis、mongodb一样，都是key-value的形式，因此查询性能是非常棒的，同样是查询电影和电影类别之间的关系，mysql需要用到select连接查询，而neo4j只需要一条cypher语句既能搞定。

（2）什么是cypher呢？

Neo4j使用Cypher查询图形数据，Cypher是描述性的图形查询语言，语法简单，功能强大，由于Neo4j在图形数据库家族中处于绝对的领先地位，拥有众多的用户基数，使得Cypher成为图形查询语言事实上的标准。

（3）为什么不使用MySql数据库呢？

上面第一点已经说过了，不是mysql干不了neo4j的工作，而是neo4j在处理节点（对象）关系这方面性能比较棒，而且查询语句简单，更容易构建我们的电影知识图谱，我们也可以将二者结合起来用，比如，mysql存储对象的详细信息，而对象之间的关系，我们可以存储到neo4j中，二者配合起来使用也是很不错的。

neo4j数据效果截图如下

![img](\img\4.png)

## How to use

在idea中导入spring boot后台项目，然后pom文件会自己下载的，如果下载失败，建议翻。去下载。

需要用到：neo4j，spark。具体的安装包会放在下面。

### ***微信小程序在template目录下。**

在微信小程序中修改pages/chat/chat.js中send函数里的wx.request的url。

## 数据软件包

https://blog.csdn.net/appleyk/article/details/80331997

根据博客一步一步来就行

SQL文件：https://pan.baidu.com/s/1f0ytkiN7jkwcpbbOzId71Q

CSV文件：https://pan.baidu.com/s/1QJRS8eyZXQt44wBwNyZ6eQ

Spark文件：https://pan.baidu.com/s/10XUKpYBXqQ16UqDRTFerWg

neo4j：官网自行下载

HanLP：https://github.com/hankcs/HanLP/releases

样本数据集和贝叶斯分类器核心代码：https://pan.baidu.com/s/1APqPbehoSZHIsFgcswPygw

自定义词典：https://pan.baidu.com/s/1jayxGTyfP3PDrv21mA9o6g

## 项目截图

![img](\img\1.png)

![2](\img\2.png)

![3](\img\3.png)