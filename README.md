
# 宏业找房 H5

# 需求文档
......
#### 特技
1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

* * *
语雀：https://www.yuque.com/heinan/luckbody/fggqro
#### GIT
![5252cabe36c402414b3f660cde38bbd5.png](en-resource://database/511:1)
![b6f53e4ea7ea7bec7f070ea32a3c9a98.png](en-resource://database/513:1)
![87bbe5c1acf10f0ee7483d73bf593684.png](en-resource://database/515:1)

* * *

#### [打包部署/负载均衡的实现](https://blog.csdn.net/qq_41153478/article/details/83116642)
Vite，WebPack
##### 打包部署
wscp用于本机和虚拟机传递文件

 

cd 到项目根目录,执行npm run build

在项目里会生成dist目录,把这个目录里的文件上传到Nginx中运行.

第一步docker search nginx

第二步 ]# docker pull nginx

第三步修改镜像的名字  ]# docker tag docker.io/nginx nginx

第四步创建容器 fn1]# docker run -it -d --name fn1 -v /home/fn1/nginx.conf:/etc/nginx/nginx.conf -v /home/fn1/renren-vue:/home/fn1/renren-vue --privileged  --net=host nginx
f81f147522814d360eaf43c29f551d07f15ba364c894900c3f797a47c3277f73

第五步 修改nginx.conf配置文件 [root@main fn1]# vi nginx.conf

##### 负载均衡的实现
[root@main home]# cd ff1
[root@main ff1]# ls
keepalived.conf  nginx.conf
[root@main ff1]# vi nginx.conf
第一步修改配置文件

第二步创建ff1容器

[root@main /]# docker run -it -d --name ff1 -v /home/ff1/nginx.conf:/etc/nginx/nginx.conf  --privileged --net=host nginx
同理创建ff2容器

[root@main ff2]# docker run -it -d --name ff2 -v /home/ff2/nginx.conf:/etc/nginx/nginx.conf  --privileged --net=host nginx
 

此时当我挂掉fn1节点

[root@main /]# docker stop fn1
fn1
网站让然可以正常访问




### 测试
#### 功能测试
：小组互测、bug 清单、交付确认单
#### 性能测试
*采用Apifox进行jmeter脚本、报告、以及一些postman测试
：jmeter 脚本、报告、postman 测试
#### 单体测试
：前端忽略
### 优化
#### 性能优化


* * *
##### [<u>**读写分离**</u>](https://www.jianshu.com/p/70d94a8f6491)

把读操作分散到从服务器中，并且对多个从服务器能实现负载均衡。读写分离和负载均衡是 Mysql 集群的基础需求，MaxScale 就可以帮着我们方便的实现这些功能。

MaxScale
是插件式结构，允许用户开发适合自己的插件。

1认证插件
提供了登录认证功能，MaxScale会读取并缓存数据库中 user 表中的信息，当有连接进来时，先从缓存信息中进行验证，如果没有此用户，会从后端数据库中更新信息，再次进行验证.
2协议插件
包括客户端连接协议，和连接数据库的协议。.
3路由插件
决定如何把客户端的请求转发给后端数据库服务器，读写分离和负载均衡的功能就是由这个模块实现的。
4监控插件
对各个数据库服务器进行监控，例如发现某个数据库服务器响应很慢，那么就不向其转发请求了。.
5日志和过滤插件
提供简单的数据库防火墙功能，可以对SQL进行过滤和容错。

* * *

##### [<u>**慢查询**</u>](https://blog.csdn.net/m0_71777195/article/details/128249423?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169098127916800180617376%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=169098127916800180617376&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-2-128249423-null-null.142^v92^controlT0_2&utm_term=%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96%E6%85%A2%E6%9F%A5%E8%AF%A2&spm=1018.2226.3001.4187)

在日常开发中，我们往往会给表加各种索引，来提高 MySQL 的检索效率。但我们有时会遇到明明给字段加了索引，并没有走索引的Case。 进而导致 MySQL 产生慢查询。严重场景下，甚至出现主从延迟、数据库拖垮的极端事故。

非主键列，尽量不要用 order by。实在要用，需要先用 explain 分析是否可以走索引。如果条件允许，可以用 ES 代替。

* * *
##### [<u>**队列**</u>](https://blog.51cto.com/u_16131764/6394783)
、缓存、索引优化代码及配置文件

* * *

#### 部署优化
[拆包](http://www.dtmao.cc/NodeJs/113155.html)
提升速度
[cdn](https://blog.csdn.net/weixin_40381947/article/details/131448708)
[懒加载](https://www.ngui.cc/el/1443890.html?action=onClick)

[OSS](https://blog.csdn.net/m0_49151953/article/details/130085341)
#### 安全优化
[鉴权](https://blog.csdn.net/jiangshen_a/article/details/127402899)
、防伪、防注入
[防注入](https://blog.csdn.net/weixin_44823875/article/details/106226235)
[接口限流防刷](https://blog.csdn.net/weixin_38035852/article/details/81192580)
日志
### 交付
#### 接口文档(swagger、showdoc）

[接口文档](https://www.showdoc.com.cn/hongyesizu/10393888415537077)


#### 验收汇报材料（部署文档、架构图、工作清单、bug 调试记录、交付确认单）
：

![e275ef0ebd9c1f695ccf333f8cd9f374.png](en-resource://database/507:1)

![ab975a80a7a2c0e6301db16855b77ac8.png](en-resource://database/509:1)
