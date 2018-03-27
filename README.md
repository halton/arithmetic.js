![QRCode of arichmetic.js](/src/assets/qrcode_arichmetic_js.png)

# Arithmetic.js

这是一个基于[Vue.js](https://vuejs.org/)的项目，用来自动小学生用来练习的口算习题，用户可以试用[在线版本](https://tinyurl.com/arithmetic-js), 感谢[Red Hat® OpenShift](https://www.openshift.com/)提供的免费服务器。

This is a simple [Vue.js](https://vuejs.org/) based project to auto-gen elementary arithmetic exercises, and support print. It is very useful for entry level elementary students. You could try the [live version](https://tinyurl.com/arithmetic-js). Thanks for the free service supporting of [Red Hat® OpenShift](https://www.openshift.com/).

## Why (为什么有这样一个网站)
* 背景：中国的小学生教育很重口算教育，孩子从一年级（甚至幼儿园）开始就要进行口算练习。
* 现状：
  *  校内：老师会在课堂上做一些小测试，题型一致，会按照**准确率**和**完成时间**进行评估，比如优秀，合格，有待提高；老师会督促家长回家继续练习。
  * 校外：家长需要自己出题，判题，计算时间。笨一点的办法是家长自己在纸上出题，考虑到每天都需要，工作量大，题目重复性强，判题也花时间。
  * 随着年级的增加，题目也越来越复杂，但互联网上能搜到的题目不能符合老师多变的要求；书店有些练习册也同样，并且买书成本也不低。

这个项目就是要自动随机生成相应的题目，并支持打印。这个网站的

## Features (特性)
* 基于浏览器，无需安装任何软件
* 跨平台，支持移动端（iOS和Android）和PC端（Windows/Linux/MacOS)
* 开源且免费：
  * 源代码将以开源免费方式存在，题库、用户数据和记录将妥善保存在服务器上。也就是说，有兴趣的人可以自己建立自己的网站
* 强大的配置功能
  * 题库根据用户提交和配置动态变化
  * 评价标准可定制

# Issues reporting（报告问题）
使用Github自带 [issues](https://github.com/halton/arithmetic.js/issues) 来报告问题，新功能等

Use [issues](https://github.com/halton/arithmetic.js/issues) of Github to report issues, feature requests, etc.

# Contribution (贡献)
Welcome all kinds of contirbution via Github [pull request](https://help.github.com/articles/about-pull-requests/).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Commit message guideline
```
Summary of change.

Longer description of change addressing as appropriate: why the change is made,
context if it is part of many changes, description of previous behavior and
newly introduced differences, etc.

Long lines should be wrapped to 80 columns for easier log message viewing in
terminals.

Fixes #123456
```

# Icons
我们用的图标都是来源于[Material Icons](https://material.io/icons/)的网站，采用Apache 2.0的许可，可以放心使用。

The icons we used are from [Material Icons](https://material.io/icons/), licensed under Apache 2.0, so free to use.

# License (代码许可)
Apache License Version 2.0, check [LICENSE](./LICENSE).
