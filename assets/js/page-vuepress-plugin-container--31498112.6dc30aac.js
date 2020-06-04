(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{609:function(e,t,r){"use strict";r.r(t);var a=r(1),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vuepress-plugin-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[e._v("#")]),e._v(" vuepress-plugin-container")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("请注意，markdown 增强中的自适应对齐应用了该插件，因此如果你禁用本插件，你将无法使用自定义对齐与提示框。")])]),e._v(" "),r("h2",{attrs:{id:"配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[e._v("#")]),e._v(" 配置项")]),e._v(" "),r("h3",{attrs:{id:"type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string")])]),e._v(" "),r("li",[e._v("必填: 是")])]),e._v(" "),r("p",[e._v("容器的类型。举个例子，如果 "),r("code",[e._v("type")]),e._v(" 被设置为 "),r("code",[e._v("foo")]),e._v("，则仅有下面的语法会被解析为 markdown 容器：")]),e._v(" "),r("div",{staticClass:"language-md line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-md"}},[r("code",[e._v("::: foo bar\n随便写点啥 ~\n:::\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h3",{attrs:{id:"defaulttitle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string | Record<string, string>")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("type")]),e._v(" 的大写形式")])]),e._v(" "),r("p",[e._v("容器的默认标题。如果没有提供标题，则会使用 "),r("code",[e._v("defaultTitle")]),e._v(" 作为容器的标题。")]),e._v(" "),r("p",[e._v("提供一个对象作为多语言配置，则默认标题将会基于当前 "),r("code",[e._v("locale")]),e._v(" 选取。")]),e._v(" "),r("h3",{attrs:{id:"before"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[e._v("#")]),e._v(" before")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("undefined")])])]),e._v(" "),r("p",[e._v("要插入在容器前的 HTML。")]),e._v(" "),r("p",[e._v("如果设置为一个函数，将传入当前的 "),r("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),r("code",[e._v("info")]),e._v(" 的值为 "),r("code",[e._v("bar")]),e._v("。）")]),e._v(" "),r("p",[e._v("如果设置了 "),r("code",[e._v("before")]),e._v(" 的值， "),r("code",[e._v("defaultTitle")]),e._v(" 将会被忽略。")]),e._v(" "),r("h3",{attrs:{id:"after"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" after")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("undefined")])])]),e._v(" "),r("p",[e._v("要插入在容器后的 HTML。")]),e._v(" "),r("p",[e._v("如果设置为一个函数，将传入当前的 "),r("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),r("code",[e._v("info")]),e._v(" 的值为 "),r("code",[e._v("bar")]),e._v("。）")]),e._v(" "),r("h3",{attrs:{id:"validate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" validate")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("((params: string) => boolean)")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("undefined")])])]),e._v(" "),r("p",[e._v("一个用于判定容器是否结束的函数。当认定容器范围结束时应返回一个 "),r("code",[e._v("true")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[e._v("参考 "),r("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" render")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("Function")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("undefined")])])]),e._v(" "),r("p",[e._v("容器开头和结束 token 的渲染函数。如果设置了这个值， "),r("code",[e._v("before")]),e._v(", "),r("code",[e._v("after")]),e._v(" 和 "),r("code",[e._v("defaultTitle")]),e._v(" 都将被忽略。")]),e._v(" "),r("blockquote",[r("p",[e._v("参考 "),r("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"marker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#marker"}},[e._v("#")]),e._v(" marker")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("string")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("':'")])])]),e._v(" "),r("p",[e._v("用于分隔符的字符。")]),e._v(" "),r("blockquote",[r("p",[e._v("参考 "),r("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);