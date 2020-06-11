module.exports = {
  title: 'XssUI 组件库',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children:[
          '/install/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      },
    ]
  }
}