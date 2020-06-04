(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{639:function(e,t,a){"use strict";a.r(t);var r=a(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[e._v("#")]),e._v(" vuepress-plugin-container "),a("MyBadge",{attrs:{text:"improve"}})],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Please note that this plugin is applied to alignment in markdown enhancements, so if you disable this plugin, you will not be able to use custom alignment and the prompt boxes provided by the default theme.")])]),e._v(" "),a("h2",{attrs:{id:"configuration-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-item"}},[e._v("#")]),e._v(" Configuration Item")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("required: true")])]),e._v(" "),a("p",[e._v("The type for the container. For example, if type is set to foo, only the following syntax will be parsed as a container:")]),e._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[e._v("::: foo bar\nwrite something here ~\n:::\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | Record<string, string>")])]),e._v(" "),a("li",[e._v("default: the upper case of type")])]),e._v(" "),a("p",[e._v("The default title for the container. If no title is provided, "),a("code",[e._v("defaultTitle")]),e._v(" will be shown as the title of the container.")]),e._v(" "),a("p",[e._v("Provide an object as locale config, and the default title will depend on current "),a("code",[e._v("locale")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[e._v("#")]),e._v(" before")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed before the block.")]),e._v(" "),a("p",[e._v("If specified as a function, an argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".)")]),e._v(" "),a("p",[e._v("If specified value for "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("defaultTitle")]),e._v(" will be ignored.")]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" after")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed after the block.")]),e._v(" "),a("p",[e._v("If specified as a function, an argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".)")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" validate")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("((params: string) => boolean)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("A function to validate tail after opening marker, should return true on success.")]),e._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" render")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("The renderer function for opening/closing tokens. If specified, "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("after")]),e._v(" and "),a("code",[e._v("defaultTitle")]),e._v(" will be ignored.")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker"}},[e._v("#")]),e._v(" marker")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("':'")])])]),e._v(" "),a("p",[e._v("The character to use as a delimiter.")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);