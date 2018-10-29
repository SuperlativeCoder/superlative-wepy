# 

本项目使用腾讯wepy作为小程序开发基础框架, 并基于此框架进行了业务的深度定制

本项目代码将同步生成一个h5版本

# 开发概述

## 项目目录结构

```
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules           
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── actions            页面/组件Action目录
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── ComponentA     可复用的WePY组件A
|   |   |   ├── index.js   WePY组件A的行为
|   |   |   ├── index.scss WePY组件A的样式
|   |   |   ├── index.wpy  整合其他三个文件内容至WePY组件A
|   |   |   └── index.wxml WePY组件A的页面结构
|   |   └── ComponentB     可复用的WePY组件A
|   ├── constants          WePY常量目录, 常量已全部同步至该目录下index文件, 可直接引入constants来取得
|   ├── middlewares        WePY的redux中间件目录
|   ├── mixins             WePY的mixin目录, 用于抽取公共的js内容
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── PageA          页面A
|   |   |   ├── index.js   页面A的行为
|   |   |   ├── index.scss 页面A的样式
|   |   |   ├── index.wpy  整合其他三个文件内容至页面A（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   |   └── index.wxml 页面A的页面结构
|   |   └── PageB          页面B
|   ├── public             WePY的静态资源目录
|   |   ├── images         所有的图片静态资源
|   |   └── styles         存储sass全局样式变量
|   ├── reducers           页面reducer目录
|   ├── store              页面redux初始化, 中间件配置
|   ├── utils              页面公共方法
|   ├── app.js             小程序配置项（行为）
|   ├── app.wxss           小程序配置项（全局样式）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
├── package.json           项目的package配置
└── wepy.config.js         项目的打包等配置, 类似于webpack配置
```

## 项目启动(小程序)

```
npm run dev
// 或者
yarn dev
```

注: 因当我们删除文件后, wepy不会删除掉之前编译的已删除文件, 因此每次项目启动前均会清除一次编译文件后, 再重新进行编译

## 项目打包

```
npm run build
// 或者
yarn build
```

注: 目前打包结果将输出于`dist_release`文件夹

## 项目启动(h5)

```
npm run dev:web
// 或者
yarn dev: web
```

注: 因wepy中没有直接安装h5的依赖, 所以我们首次运行时, wepy将会为我们自动安装web相关依赖, 但是首次运行会报错提示`找不到模块: redux`, 此时退出进程, 重新安装依赖即可.

## 编辑器设置

### Atom

1. 在Atom里先安装Vue的语法高亮 - language-vue，如果装过了就忽略这一步。

2. 打开Atom -> Config菜单。在core键下添加：

```
customFileTypes:
  "text.html.vue": [
    "wpy"
  ]
```

3. 对于页面中不识别的其他文件, 如`.wxml`后缀文件, 我们将页面自动识别的`plain text`, 改为`vue component`即可实现代码高亮

### VS Code

1. 在 Code 里先安装 Vue 的语法高亮插件 Vetur。

2. 打开任意 .wpy 文件。

3. 点击右下角的选择语言模式，默认为纯文本。

4. 在弹出的窗口中选择 .wpy 的配置文件关联...。

5. 在选择要与 .wpy 关联的语言模式 中选择 Vue。

6. 对于页面中不识别的其他文件, 如`.wxml`后缀文件, 我们将页面自动识别的`纯文本`, 改为`vue-html`即可实现代码高亮

### 微信开发者工具设置

1. 打开项目

2. 点击右上角详情按钮

3. 关闭`ES6转ES5` `上传代码时自动补全` `上传代码时自动压缩`功能

4. 开启`不校验合法域名`功能(小程序正式环境请求接口必须使用https)

### 代码规范

1. 开发严格遵循`airbnb`编码规范, 未遵循将在控制台中报错, 因此我们将结构/样式/行为, 拆分成了三个文件, 并由`.wpy`文件进行整合, 便于进行code maintenance

2. 变量与方法使用驼峰式命名，并且避免使用$开头。 以$开头的标识符为WePY框架的内建属性和方法，可在JavaScript脚本中以this.的方式直接使用。

3. 使用`Promise`。 框架默认对小程序提供的API全都进行了`Promise`处理，甚至可以直接使用`async`/`await`等新特性进行开发。代码开发可使用最新的ES语法进行开发, 并对原有的callback函数进行了`promisify`, 同样的, 我们可以直接使用`acync/await`等`ES7`特性进行开发

4. 事件绑定语法使用优化语法代替。

- 原`bindtap="click"`替换为`@tap="click"`，原`catchtap="click"`替换为`@tap.stop="click"`。
- 原`capture-bind:tap="click"`替换为`@tap.capture="click"`，原`capture-catch:tap="click"`替换为`@tap.capture.stop="click"`。
- 事件传参使用优化后语法代替。 原`bindtap="click" data-index={{index}}`替换为`@tap="click({{index}})"`。
- 自定义组件命名应避开微信原生组件名称以及功能标签`<repeat>`。 不可以使用`input`、`button`、`view`、`repeat`等微信小程序原生组件名称命名自定义组件；另外也不要使用`WePY`框架定义的辅助标签`repeat`命名。

5. 具体语法规则, 详见![wepy官方文档](https://tencent.github.io/wepy/document.html#/)

## Things Todo

1. 优化wepy打包, 开发环境的依赖包避免打包进正式环境
2. sass全局注入变量参数, 省去每个页面引入的步骤
3. 增加Navbar组件, 替代之前的小程序默认导航条
4. 项目工程增加处理多个小程序打包的支持(多入口打包)