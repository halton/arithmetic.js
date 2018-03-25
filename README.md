# Arithmetic.js

这是一个基于[Vue.js](https://vuejs.org/)的项目，用来自动小学生用来练习的口算习题，用户可以试用[在线版本](http://tiny.cc/y023ry), 感谢[Red Hat® OpenShift](https://www.openshift.com/)提供的免费服务器。

中国的小学生教育很重口算教育，本人孩子从一年级10以内的加减法开始就要开始练习，并要计算时间。随着年级的增加，题目也越来越复杂，但互联网上能搜到的不太符合老师的要求，书店的书还有成本，并且变化性不强。笨一点的办法是家长往往要自己靠脑子想出来，这样重复性太强。

这个项目就是要自动随机生成相应的题目，并支持打印。这个项目将以开源免费方式存在，欢迎大家提需求已丰富题库。

This is a simple [Vue.js](https://vuejs.org/) based project to auto-gen elementary arithmetic exercises, and support print. It is very useful for entry level elementary students. You could try the [live version](http://tiny.cc/y023ry). Thanks for the free service supporting of [Red Hat® OpenShift](https://www.openshift.com/).

# Features (特性)
* No app install required. (基于浏览器，无需安装任何软件)
* Cross-platform, supports Windows/Linux/MacOS, mobile to-be-decided. (跨平台，支持Windows，Linux和MacOS，移动端待考虑)
* Fully free. (完全免费)

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

# Issues reporting（报告问题）
Use [[issues]] of Github to report issues, feature requests, etc.
使用Github自带 [issues](https://github.com/halton/arithmetic.js/issues) 来报告问题，特性申请等

# Contribution (贡献)
Welcome all kinds of contirbution via Github [pull request](https://help.github.com/articles/about-pull-requests/).
## Coding style
Follow the [Google JavaScript style guide](https://google.github.io/styleguide/javascriptguide.xml). You could use the `tools/linter.js` before submit any pull request.
## Commit message guideline

We use same Chromium commit log guideline and Github closing isses via commit messages. Use the following form:

Summary of change.

Longer description of change addressing as appropriate: why the change is made,
context if it is part of many changes, description of previous behavior and
newly introduced differences, etc.

Long lines should be wrapped to 80 columns for easier log message viewing in
terminals.

Fixes #123456

# License (代码许可)
Apache License Version 2.0, check [LICENSE](./LICENSE).
