(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{674:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"use-themes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-themes"}},[s._v("#")]),s._v(" Use themes")]),s._v(" "),e("p",[s._v("You can use "),e("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope-template",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-hope template"),e("OutboundLink")],1),s._v(" directly to start your vuepress journey.")]),s._v(" "),e("h3",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D vuepress-theme-hope\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" resolve "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-theme-hope/resolve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your config here")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("The purpose of introducing the resolve function is to give you full hints through TS's Interface and JSDoc when you edit the configuration.")]),s._v(" "),e("p",[s._v("At the same time, the resolve function will also complete some default configurations for your current configuration which will pass directly to vuepress.")])]),s._v(" "),e("h3",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[s._v("#")]),s._v(" FAQ")]),s._v(" "),e("p",[s._v("If you do not have typescript package in your project, you may also need to install it:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D typescript\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("And then create a "),e("code",[s._v("tsconfig.json")]),s._v(" file in your root directory:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// Any target which is not less than 'ES5'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowSyntheticDefaultImports"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Avoiding some issues related to vuepress-types")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimentalDecorators"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Typescript files for '.vue' needs this option")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Avoiding some issues related to vuepress-types")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// type definition files of vuepress and this theme")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@mr-hope/vuepress-theme-types"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/.vuepress/enhanceApp.ts"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// replace `src` with your doc folder")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("If Typescript related errors appears in the conosle, that means Typescript is not correctly configured in your project.")]),s._v(" "),e("p",[s._v("For more details, please see "),e("RouterLink",{attrs:{to:"/en/FAQ/"}},[s._v("FAQ")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);