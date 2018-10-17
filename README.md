
本项目使用腾讯wepy作为小程序开发基础框架, 并基于此框架进行了业务的深度定制

本项目代码将同步生成一个h5版本

# 开发概述

## 项目目录结构

```
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules           
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```

## 项目启动(小程序)

```
npm run dev
// 或者
yarn dev
```

## 项目打包

```
npm run build
// 或者
yarn build
```

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

### 代码规范

1. 开发严格遵循`airbnb`编码规范, 未遵循将在控制台中报错

2. 变量与方法尽量使用驼峰式命名，并且注意避免使用$开头。 以$开头的标识符为WePY框架的内建属性和方法，可在JavaScript脚本中以this.的方式直接使用。

3. 小程序入口、页面、组件文件名的后缀为`.wpy`；

4. 使用`Promise`。 框架默认对小程序提供的API全都进行了`Promise`处理，甚至可以直接使用`async`/`await`等新特性进行开发。

5. 事件绑定语法使用优化语法代替。

- 原`bindtap="click"`替换为`@tap="click"`，原`catchtap="click"`替换为`@tap.stop="click"`。
- 原`capture-bind:tap="click"`替换为`@tap.capture="click"`，原`capture-catch:tap="click"`替换为`@tap.capture.stop="click"`。
- 事件传参使用优化后语法代替。 原`bindtap="click" data-index={{index}}`替换为`@tap="click({{index}})"`。
- 自定义组件命名应避开微信原生组件名称以及功能标签`<repeat>`。 不可以使用`input`、`button`、`view`、`repeat`等微信小程序原生组件名称命名自定义组件；另外也不要使用`WePY`框架定义的辅助标签`repeat`命名。
