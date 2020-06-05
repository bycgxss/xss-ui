# Xss-UI - 一个 Vue UI 组件库

[![Build Status](https://travis-ci.org/bycgxss/xss-ui.svg?branch=master)](https://travis-ci.org/bycgxss/xss-ui)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望能够对你有用。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 `border-box` 

```css
*, *::before, *::after {box-sizing: border-box}
```
    
IE8 及以上版本浏览器支持此样式。
    
你还需要设置默认颜色等变量（后续会改成 SCSS 变量）
    
```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
    
IE15 及以上版本浏览器支持此样式

2. 安装组件库

```shell script
npm install --save xss-ui
```

3. App.vue 中引入组件库
```javascript
import {Button, ButtonGroup, Icon} from 'xss-ui'
import 'xss-ui/dist/index.css'
export default {
  name: 'App',
  components: {
    'g-button': Button
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码