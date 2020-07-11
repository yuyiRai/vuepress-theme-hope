(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{514:function(a,t,e){"use strict";e.r(t);var v=e(3),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("除了查看本指南，你也可以直接查看源代码中的 "),e("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/theme/types/hopeConfig.d.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("types 文件"),e("OutboundLink")],1),a._v(" 或本文档的 "),e("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/docs/theme/src/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[a._v("配置文件"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("通过注入，vuepress-theme-hope 改变了默认主题一些配置的默认值。")]),a._v(" "),e("p",[a._v("虽然一般情况下，它们影响不大，但是还是需要着重提示这可能造成与默认文档预期不符的结果。")]),a._v(" "),e("p",[a._v("文档下方仔细的列出了所有配置项的改变。")])]),a._v(" "),e("p",[e("code",[a._v(".vuepress/config.js")]),a._v(" 中的 themeConfig 字段(主题字段)新增以下配置：")]),a._v(" "),e("h2",{attrs:{id:"基本选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本选项"}},[a._v("#")]),a._v(" 基本选项")]),a._v(" "),e("p",[a._v("这些选项需要你正确配置。")]),a._v(" "),e("h3",{attrs:{id:"baselang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baselang"}},[a._v("#")]),a._v(" baseLang")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'zh-CN'")])])]),a._v(" "),e("p",[a._v("主目录所对应的语言。")]),a._v(" "),e("p",[a._v("这个选项会保证主目录页面中主题文字使用正确的语言显示。你可以根据自己的需要将其改为其他语言。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("目前多语言仅适配了 "),e("strong",[a._v("简体中文")]),a._v(" (zh-CN) 与 "),e("strong",[a._v("英文(美国)")]),a._v(" (en-US)。")]),a._v(" "),e("p",[a._v("如果你需要其它语言的多语言支持，你可以 "),e("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/shared-utils/src/i18n/config.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("向此文件提交一个 PR"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[a._v("#")]),a._v(" author")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("文章显示的默认作者")]),a._v(" "),e("h3",{attrs:{id:"nav"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nav"}},[a._v("#")]),a._v(" nav "),e("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),a._v(" "),e("p",[a._v("NavBarItem 新增")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("icon")]),a._v(" 字段来支持图标显示。")]),a._v(" "),e("li",[e("code",[a._v("prefix")]),a._v(" 字段来自动添加分组前缀")])]),a._v(" "),e("p",[a._v("具体配置，请见 "),e("RouterLink",{attrs:{to:"/guide/layout/navbar.html"}},[a._v("布局 → 导航栏")])],1),a._v(" "),e("h3",{attrs:{id:"sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[a._v("#")]),a._v(" sidebar "),e("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),a._v(" "),e("p",[a._v("SideBarItem 新增")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("icon")]),a._v(" 字段来支持图标显示。")]),a._v(" "),e("li",[e("code",[a._v("prefix")]),a._v(" 字段来自动添加分组前缀")])]),a._v(" "),e("p",[a._v("具体配置，请见 "),e("RouterLink",{attrs:{to:"/guide/layout/sidebar.html"}},[a._v("布局 → 侧边栏")])],1),a._v(" "),e("h3",{attrs:{id:"locales"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locales"}},[a._v("#")]),a._v(" locales")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("Record<string, HopeLangI18nConfigItem>")])])]),a._v(" "),e("p",[a._v("主题的多语言配置，主要需要配置各语言的 "),e("code",[a._v("nav")]),a._v(" 与 "),e("code",[a._v("sidebar")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"默认主题配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认主题配置"}},[a._v("#")]),a._v(" 默认主题配置")]),a._v(" "),e("p",[a._v("以下这些配置沿用了 "),e("code",[a._v("@vuepress/theme-default")]),a._v(" 的配置项，你无需进行改动:")]),a._v(" "),e("h3",{attrs:{id:"logo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logo"}},[a._v("#")]),a._v(" logo "),e("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("导航栏的 logo 图片，需填入绝对路径并放入 "),e("code",[a._v(".vuepress/public")]),a._v(" 文件夹。")]),a._v(" "),e("p",[a._v("如果你希望在深色模式下显示另一个 logo，请配置 "),e("code",[a._v("themeConfig.darkLogo")]),a._v(" 选项。")]),a._v(" "),e("h3",{attrs:{id:"sidebardepth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebardepth"}},[a._v("#")]),a._v(" sidebarDepth")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("number")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("2")])])]),a._v(" "),e("p",[a._v("侧边栏嵌套的标题深度")]),a._v(" "),e("h3",{attrs:{id:"displayallheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#displayallheaders"}},[a._v("#")]),a._v(" displayAllHeaders")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否显示所有页面的标题链接")]),a._v(" "),e("h3",{attrs:{id:"activeheaderlinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activeheaderlinks"}},[a._v("#")]),a._v(" activeHeaderLinks")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否自动更新嵌套的标题链接和 URL 中的 Hash 值")]),a._v(" "),e("h3",{attrs:{id:"search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[a._v("#")]),a._v(" search")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否启用默认的搜索框")]),a._v(" "),e("h3",{attrs:{id:"searchplaceholder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searchplaceholder"}},[a._v("#")]),a._v(" searchPlaceholder")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("搜索框的占位符文字")]),a._v(" "),e("h3",{attrs:{id:"searchmaxsuggestions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searchmaxsuggestions"}},[a._v("#")]),a._v(" searchMaxSuggestions")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("number")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("10")])])]),a._v(" "),e("p",[a._v("默认搜索框显示的搜索结果数量")]),a._v(" "),e("h3",{attrs:{id:"algolia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#algolia"}},[a._v("#")]),a._v(" algolia")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("AlgoliaOption")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("Algolia 搜索配置，你需要至少提供 "),e("code",[a._v("apiKey")]),a._v(" 和 "),e("code",[a._v("indexName")]),a._v("。具体详见 "),e("a",{attrs:{href:"https://github.com/algolia/docsearch#docsearch-options",target:"_blank",rel:"noopener noreferrer"}},[a._v("Doc Search 文档"),e("OutboundLink")],1),a._v("。你也可以为每个语言配置 algolia。")]),a._v(" "),e("h3",{attrs:{id:"nextlinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextlinks"}},[a._v("#")]),a._v(" nextLinks")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("所有页面的 下一篇 链接")]),a._v(" "),e("h3",{attrs:{id:"prevlinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prevlinks"}},[a._v("#")]),a._v(" prevLinks")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("所有页面的 上一篇 链接")]),a._v(" "),e("h3",{attrs:{id:"repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repo"}},[a._v("#")]),a._v(" repo")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("项目仓库地址")]),a._v(" "),e("h3",{attrs:{id:"repolabel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repolabel"}},[a._v("#")]),a._v(" repoLabel")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("仓库标签文字，会自动解析 "),e("code",[a._v("repo")]),a._v(" 选项，尝试推导出 "),e("code",[a._v("'GitHub'")]),a._v(" "),e("code",[a._v("'GitLab'")]),a._v(" "),e("code",[a._v("'Bitbucket'")]),a._v("，如果未能识别，显示为 "),e("code",[a._v("'Source'")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"docsrepo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docsrepo"}},[a._v("#")]),a._v(" docsRepo")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("文档所属仓库，默认同 "),e("code",[a._v("repo")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"docsdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docsdir"}},[a._v("#")]),a._v(" docsDir")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("文档所属文件夹，默认为仓库根目录。")]),a._v(" "),e("h3",{attrs:{id:"docsbranch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docsbranch"}},[a._v("#")]),a._v(" docsBranch")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'master'")])])]),a._v(" "),e("p",[a._v("文档所属分支")]),a._v(" "),e("h3",{attrs:{id:"editlinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editlinks"}},[a._v("#")]),a._v(" editLinks "),e("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("显示编辑本页链接")]),a._v(" "),e("h2",{attrs:{id:"主题色与深色模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题色与深色模式"}},[a._v("#")]),a._v(" 主题色与深色模式 "),e("MyBadge",{attrs:{text:"默认启用"}})],1),a._v(" "),e("p",[a._v("主题色和深色模式设置选项配置。")]),a._v(" "),e("h3",{attrs:{id:"darkmode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#darkmode"}},[a._v("#")]),a._v(" darkmode")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("'auto-switch' | 'switch' | 'auto' | 'disable'")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'auto-switch'")])])]),a._v(" "),e("p",[a._v("深色模式支持选项:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("'auto-switch'")]),a._v(': "关闭 | 自动 | 打开" 的三段式开关')]),a._v(" "),e("li",[e("code",[a._v("'switch'")]),a._v(': "关闭 | 打开" 的切换式开关')]),a._v(" "),e("li",[e("code",[a._v("'auto'")]),a._v(": 自动根据用户设备主题或当前时间决定是否应用深色模式")]),a._v(" "),e("li",[e("code",[a._v("'disable'")]),a._v(": 禁用深色模式")])]),a._v(" "),e("blockquote",[e("p",[a._v("如果你不需要这项功能，请设置 "),e("code",[a._v('darkmode: "disable"')]),a._v(" 将其禁用。")])]),a._v(" "),e("h3",{attrs:{id:"themecolor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themecolor"}},[a._v("#")]),a._v(" themeColor")]),a._v(" "),e("p",[a._v("主题色选项配置。")]),a._v(" "),e("blockquote",[e("p",[a._v("如果你不需要这项功能，请设置 "),e("code",[a._v("themeColor: false")]),a._v(" 将其禁用。")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("类型: "),e("code",[a._v("Record<string, string>")])])]),a._v(" "),e("li",[e("p",[a._v("默认值:")]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  blue"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#2196f3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  red"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#f26d6d'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  green"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#3eaf7c'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  orange"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'#fb9b5f'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])])])]),a._v(" "),e("h2",{attrs:{id:"博客配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客配置"}},[a._v("#")]),a._v(" 博客配置 "),e("MyBadge",{attrs:{text:"默认启用"}})],1),a._v(" "),e("p",[a._v("博客配置。")]),a._v(" "),e("blockquote",[e("p",[a._v("如果您不需要博客相关功能，为了加快构建速度，请设置 "),e("code",[a._v("blog: false")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"blog-blogger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-blogger"}},[a._v("#")]),a._v(" blog.blogger")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("博主姓名，默认为 "),e("code",[a._v("themeConfig.author")])]),a._v(" "),e("h3",{attrs:{id:"blog-avatar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-avatar"}},[a._v("#")]),a._v(" blog.avatar")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("博主头像，默认为 "),e("code",[a._v("themeConfig.logo")])]),a._v(" "),e("h3",{attrs:{id:"blog-sidebardisplay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-sidebardisplay"}},[a._v("#")]),a._v(" blog.sidebarDisplay")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("'mobile' | 'none' | 'always'")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'none'")])])]),a._v(" "),e("p",[a._v("是否在侧边栏展示博主信息")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("mobile")]),a._v(": 在移动视图中显示在侧边栏中")]),a._v(" "),e("li",[e("code",[a._v("'always'")]),a._v(": 总是展示在侧边栏中")]),a._v(" "),e("li",[e("code",[a._v("'none'")]),a._v(": 永远不在侧边栏展示")])]),a._v(" "),e("h3",{attrs:{id:"blog-intro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-intro"}},[a._v("#")]),a._v(" blog.intro")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("博主的个人介绍地址。")]),a._v(" "),e("p",[a._v("填写后将允许点击“博主信息”中的头像或姓名进入个人介绍页。")]),a._v(" "),e("h3",{attrs:{id:"blog-timeline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-timeline"}},[a._v("#")]),a._v(" blog.timeline")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'昨日不在'")])])]),a._v(" "),e("p",[a._v("时间轴的顶部文字。")]),a._v(" "),e("h2",{attrs:{id:"pwa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwa"}},[a._v("#")]),a._v(" pwa "),e("MyBadge",{attrs:{text:"默认启用"}})],1),a._v(" "),e("p",[a._v("PWA 设置选项。")]),a._v(" "),e("blockquote",[e("p",[a._v("如果您不需要这个功能，请设置为 "),e("code",[a._v("false")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"pwa-popupcomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwa-popupcomponent"}},[a._v("#")]),a._v(" pwa.popupComponent")]),a._v(" "),e("ul",[e("li",[a._v("Type: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("Required: No")])]),a._v(" "),e("p",[a._v("用于替换默认弹出组件的自定义组件。")]),a._v(" "),e("h3",{attrs:{id:"pwa-gerateswconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwa-gerateswconfig"}},[a._v("#")]),a._v(" pwa.gerateSWConfig")]),a._v(" "),e("p",[a._v("workbox-build 的 "),e("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config",target:"_blank",rel:"noopener noreferrer"}},[a._v("generateSW 配置"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"pageinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pageinfo"}},[a._v("#")]),a._v(" pageInfo")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string[] | false")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("['Author', 'Visitor', 'Time', 'Category', 'Tag', 'ReadTime']")])])]),a._v(" "),e("p",[a._v("文章信息，可以填入数组，数组的顺序是各条目显示的顺序。填入 "),e("code",[a._v("false")]),a._v(" 使其被禁用。")]),a._v(" "),e("p",[a._v("可以填入的条目如下：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("'Author'")]),a._v(": 作者")]),a._v(" "),e("li",[e("code",[a._v("'Time'")]),a._v(": 写作日期")]),a._v(" "),e("li",[e("code",[a._v("'Category'")]),a._v(": 分类")]),a._v(" "),e("li",[e("code",[a._v("'Tag'")]),a._v(": 标签")]),a._v(" "),e("li",[e("code",[a._v("'ReadTime'")]),a._v(": 预计阅读时间")]),a._v(" "),e("li",[e("code",[a._v("'Word'")]),a._v(": 字数")]),a._v(" "),e("li",[e("code",[a._v("'Visitor'")]),a._v(": 访问量")])]),a._v(" "),e("h2",{attrs:{id:"seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[a._v("#")]),a._v(" SEO "),e("MyBadge",{attrs:{text:"默认启用"}})],1),a._v(" "),e("blockquote",[e("p",[a._v("如果您不需要这个功能，请设置为 "),e("code",[a._v("false")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"seo-twitterid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo-twitterid"}},[a._v("#")]),a._v(" seo.twitterID")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("填入你的 twitter 用户名")]),a._v(" "),e("h3",{attrs:{id:"seo-restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo-restrictions"}},[a._v("#")]),a._v(" seo.restrictions")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("内容的年龄分级，格式为 "),e("code",[a._v("[int]+")]),a._v("，如 "),e("code",[a._v("'13+'")])]),a._v(" "),e("h3",{attrs:{id:"seo-seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo-seo"}},[a._v("#")]),a._v(" seo.seo")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("(info: PageSeoInfo) => Record<string, string>")])])]),a._v(" "),e("p",[a._v("你可以使用此选项来注入新的或覆盖掉默认生成的 SEO，详情请见 "),e("RouterLink",{attrs:{to:"/config/plugin/seo.html#seo"}},[a._v("插件配置")]),a._v("。")],1),a._v(" "),e("h3",{attrs:{id:"seo-custommeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo-custommeta"}},[a._v("#")]),a._v(" seo.customMeta")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("(meta: Meta, info: PageSeoInfo) => void")])])]),a._v(" "),e("p",[a._v("你可以使用此选项来直接向 Meta 中注入内容。详情请见 "),e("RouterLink",{attrs:{to:"/config/plugin/seo.html#customMeta"}},[a._v("插件配置")]),a._v("。")],1),a._v(" "),e("h2",{attrs:{id:"sitemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap"}},[a._v("#")]),a._v(" Sitemap "),e("MyBadge",{attrs:{text:"默认启用"}})],1),a._v(" "),e("blockquote",[e("p",[a._v("如果您不需要这个功能，请设置为 "),e("code",[a._v("false")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"sitemap-hostname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-hostname"}},[a._v("#")]),a._v(" sitemap.hostname")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 是")])]),a._v(" "),e("p",[a._v("当前网站部署到的域名，请至少将其传入或设置 "),e("code",[a._v("themeConfig.hostname")]),a._v("，否则插件将无法工作。")]),a._v(" "),e("h3",{attrs:{id:"sitemap-urls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-urls"}},[a._v("#")]),a._v(" sitemap.urls")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string[]")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("需要额外包含的网址")]),a._v(" "),e("h3",{attrs:{id:"sitemap-exclude"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-exclude"}},[a._v("#")]),a._v(" sitemap.exclude")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string[]")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("不被收录的页面")]),a._v(" "),e("h3",{attrs:{id:"sitemap-outfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-outfile"}},[a._v("#")]),a._v(" sitemap.outFile")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v('"sitemap.xml"')])])]),a._v(" "),e("p",[a._v("输出的文件名")]),a._v(" "),e("h3",{attrs:{id:"sitemap-changefreq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-changefreq"}},[a._v("#")]),a._v(" sitemap.changefreq")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v('"always"|"hourly"|"daily"|"weekly"|"monthly"|"yearly"|"never"')])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v('"daily"')])])]),a._v(" "),e("p",[a._v("页面默认更新频率")]),a._v(" "),e("h3",{attrs:{id:"sitemap-dateformatter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-dateformatter"}},[a._v("#")]),a._v(" sitemap.dateFormatter")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("($page: PageComputed) => string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("时间格式化器。默认会自动生成时间戳，如果你遇到了时区问题，请设置这个选项。")]),a._v(" "),e("h3",{attrs:{id:"sitemap-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sitemap-2"}},[a._v("#")]),a._v(" sitemap")]),a._v(" "),e("h2",{attrs:{id:"markdown-增强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-增强"}},[a._v("#")]),a._v(" Markdown 增强")]),a._v(" "),e("h3",{attrs:{id:"markdown-enableall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-enableall"}},[a._v("#")]),a._v(" markdown.enableAll")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用全部功能")]),a._v(" "),e("h3",{attrs:{id:"markdown-linenumbers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers"}},[a._v("#")]),a._v(" markdown.lineNumbers "),e("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否在每个代码块的左侧显示行号")]),a._v(" "),e("h3",{attrs:{id:"markdown-align"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-align"}},[a._v("#")]),a._v(" markdown.align")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用自定义对齐支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-sup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sup"}},[a._v("#")]),a._v(" markdown.sup")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用上角标格式支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-sub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sub"}},[a._v("#")]),a._v(" markdown.sub")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用下角标格式支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-footnote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-footnote"}},[a._v("#")]),a._v(" markdown.footnote")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用脚注格式支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-mark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-mark"}},[a._v("#")]),a._v(" markdown.mark")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用标记格式支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-tex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-tex"}},[a._v("#")]),a._v(" markdown.tex")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用 TeX 语法支持")]),a._v(" "),e("h3",{attrs:{id:"markdown-flowchart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-flowchart"}},[a._v("#")]),a._v(" markdown.flowchart")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否启用 流程图 语法支持")]),a._v(" "),e("h2",{attrs:{id:"评论设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评论设置"}},[a._v("#")]),a._v(" 评论设置")]),a._v(" "),e("p",[a._v("具体配配置请见　"),e("a",{attrs:{href:"http://comment.mrhope.site/config/",target:"_blank",rel:"noopener noreferrer"}},[a._v("@mr-hope/vuepress-plugin-comment 文档"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("可以直接设置为 "),e("code",[a._v("false")]),a._v(" 来禁用评论功能")]),a._v(" "),e("h2",{attrs:{id:"页脚设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页脚设置"}},[a._v("#")]),a._v(" 页脚设置")]),a._v(" "),e("h3",{attrs:{id:"footer-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer-content"}},[a._v("#")]),a._v(" footer.content")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("页脚的默认内容，可输入 HTMLString。")]),a._v(" "),e("h3",{attrs:{id:"footer-copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer-copyright"}},[a._v("#")]),a._v(" footer.copyright")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string | boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'Copyright © <作者>'")])])]),a._v(" "),e("p",[a._v("默认的版权信息，设置为 "),e("code",[a._v("false")]),a._v(" 来默认禁用它。")]),a._v(" "),e("h3",{attrs:{id:"footer-display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#footer-display"}},[a._v("#")]),a._v(" footer.display")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否默认显示页脚")]),a._v(" "),e("h2",{attrs:{id:"版权设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版权设置"}},[a._v("#")]),a._v(" 版权设置")]),a._v(" "),e("h3",{attrs:{id:"copyright-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright-status"}},[a._v("#")]),a._v(" copyright.status")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v('"global" | "local"')])]),a._v(" "),e("li",[a._v("必填: 是")])]),a._v(" "),e("p",[a._v("是否全局启用该功能。")]),a._v(" "),e("h3",{attrs:{id:"copyright-minlength"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright-minlength"}},[a._v("#")]),a._v(" copyright.minLength")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("number")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("100")])])]),a._v(" "),e("p",[a._v("触发版权信息或禁止复制动作的最少字符数。")]),a._v(" "),e("h3",{attrs:{id:"copyright-nocopy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright-nocopy"}},[a._v("#")]),a._v(" copyright.noCopy")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否禁止复制")]),a._v(" "),e("h3",{attrs:{id:"copyright-noselect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright-noselect"}},[a._v("#")]),a._v(" copyright.noSelect")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("false")])])]),a._v(" "),e("p",[a._v("是否禁止选中文字")]),a._v(" "),e("h2",{attrs:{id:"加密设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加密设置"}},[a._v("#")]),a._v(" 加密设置")]),a._v(" "),e("p",[a._v("加密设置选项。")]),a._v(" "),e("h3",{attrs:{id:"encrypt-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-status"}},[a._v("#")]),a._v(" encrypt.status")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v('"global" | "local"')])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v('"local"')])])]),a._v(" "),e("p",[a._v("是否全局加密")]),a._v(" "),e("h3",{attrs:{id:"encrypt-global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-global"}},[a._v("#")]),a._v(" encrypt.global")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string | string[]")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("最高权限密码，可以以数组的形式设置多个")]),a._v(" "),e("h3",{attrs:{id:"encrypt-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-config"}},[a._v("#")]),a._v(" encrypt.config")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("Record<string, string | string[]>")])]),a._v(" "),e("li",[a._v("必填: 否")])]),a._v(" "),e("p",[a._v("加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("例子")]),a._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这会加密整个 guide 目录，并且两个密码都是可用的")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/guide/"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5678"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这只会加密 config/page.html")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/config/page.html"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1234"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])])]),a._v(" "),e("h2",{attrs:{id:"其他配置选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他配置选项"}},[a._v("#")]),a._v(" 其他配置选项")]),a._v(" "),e("p",[a._v("以下是主题提供的其他配置选项，一般情况下你无需改动他们，但是主题也向你提供了更多有关主题的配置项。")]),a._v(" "),e("h3",{attrs:{id:"iconprefix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iconprefix"}},[a._v("#")]),a._v(" iconPrefix")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("string")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("'icon-'")])])]),a._v(" "),e("p",[a._v("设置 iconfont 的图标前缀")]),a._v(" "),e("h3",{attrs:{id:"sidebaricon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebaricon"}},[a._v("#")]),a._v(" sidebarIcon")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否在侧边栏显示图标")]),a._v(" "),e("h3",{attrs:{id:"breadcrumb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb"}},[a._v("#")]),a._v(" breadcrumb")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否全局启用路径导航")]),a._v(" "),e("h3",{attrs:{id:"breadcrumbicon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbicon"}},[a._v("#")]),a._v(" breadcrumbIcon")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否在路径导航显示图标")]),a._v(" "),e("h3",{attrs:{id:"wordperminute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wordperminute"}},[a._v("#")]),a._v(" wordPerminute")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("number")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("300")])])]),a._v(" "),e("p",[a._v("每分钟的阅读字数")]),a._v(" "),e("h3",{attrs:{id:"smoothscroll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smoothscroll"}},[a._v("#")]),a._v(" smoothScroll "),e("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否启用平滑滚动功能")]),a._v(" "),e("h3",{attrs:{id:"photoswipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#photoswipe"}},[a._v("#")]),a._v(" photoSwipe")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否启用图片预览功能")]),a._v(" "),e("h3",{attrs:{id:"backtotop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backtotop"}},[a._v("#")]),a._v(" backToTop")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean | Number")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("返回顶部按钮的配置。默认的触发距离为 300px，填入数字时可改变这一触发距离。填入 "),e("code",[a._v("false")]),a._v(" 会禁用返回顶部按钮。")]),a._v(" "),e("h3",{attrs:{id:"repodisplay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repodisplay"}},[a._v("#")]),a._v(" repoDisplay")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否在导航栏显示仓库链接")]),a._v(" "),e("h3",{attrs:{id:"fullscreen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen"}},[a._v("#")]),a._v(" fullscreen")]),a._v(" "),e("ul",[e("li",[a._v("类型: "),e("code",[a._v("boolean")])]),a._v(" "),e("li",[a._v("默认值: "),e("code",[a._v("true")])])]),a._v(" "),e("p",[a._v("是否显示 ”全屏“ 按钮")])])}),[],!1,null,null,null);t.default=_.exports}}]);