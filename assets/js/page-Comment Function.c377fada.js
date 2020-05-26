(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{644:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"comment-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comment-function"}},[s._v("#")]),s._v(" Comment Function")]),s._v(" "),e("p",[s._v("vuepress-theme-hope implements the comment feature with built-in "),e("code",[s._v("@mr-hope/vuepress-plugin-comment")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    comment"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"valine"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use Valine")]),s._v("\n      appId"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appId")]),s._v("\n      appKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appKey")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Comment function "),e("MyBadge",{attrs:{text:"Support page config"}}),s._v(" enabled globally by default, the configuration key is "),e("code",[s._v("comment")]),s._v(".")],1),s._v(" "),e("p",[s._v("You can choose between Valine and Vssue.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("You can visit "),e("a",{attrs:{href:"https://vuepress-comment.mrhope.site/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("@mr-hope/vuepress-plugin-comment plugin documentation"),e("OutboundLink")],1),s._v(" for more details")])]),s._v(" "),e("h2",{attrs:{id:"valine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[s._v("#")]),s._v(" Valine")]),s._v(" "),e("h3",{attrs:{id:"get-app-id-and-app-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-app-id-and-app-key"}},[s._v("#")]),s._v(" Get APP_ID and APP_Key")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://leancloud.cn/dashboard/login.html#/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("Click here"),e("OutboundLink")],1),s._v(" to register or login in leancloud.")]),s._v(" "),e("p",[s._v("Create new application in Leancloud, and you will get APP ID / APP Key.")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'valine'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appId")]),s._v("\n  appKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appKey")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("Config will be listed on "),e("a",{attrs:{href:"http://vuepress-comment.mrhope.site/en/api/valine.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Config"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("p",[s._v("Fill in the corresponding APP ID and APP Key, then Valine will be well configured.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("For Valine config and usage, please see "),e("a",{attrs:{href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Valine Docs"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("h2",{attrs:{id:"vssue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vssue"}},[s._v("#")]),s._v(" Vssue")]),s._v(" "),e("h3",{attrs:{id:"choose-a-platform-to-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#choose-a-platform-to-use"}},[s._v("#")]),s._v(" Choose a platform to use")]),s._v(" "),e("p",[s._v("Vssue can enable comments for your static pages via the "),e("code",[s._v("Issue System")]),s._v(" of "),e("code",[s._v("Github")]),s._v(", "),e("code",[s._v("Gitlab")]),s._v(", "),e("code",[s._v("Bitbucket")]),s._v(" or "),e("code",[s._v("Gitee")]),s._v(", and you can choose one of those platforms.")]),s._v(" "),e("p",[s._v("Go to "),e("a",{attrs:{href:"http://comment.mrhope.site/en/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Supported Platforms - Set up OAuth App"),e("OutboundLink")],1),s._v(" for detailed instructions.")]),s._v(" "),e("p",[s._v("After this step, you will get "),e("code",[s._v("client id")]),s._v(" and "),e("code",[s._v("client secret")]),s._v(" of your OAuth App, which will be used for Vssue options:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("owner")]),s._v(": the account / group that owns the repository")]),s._v(" "),e("li",[e("code",[s._v("repo")]),s._v(": the name of the repository to store comments")]),s._v(" "),e("li",[e("code",[s._v("clientId")]),s._v(": the "),e("code",[s._v("client id")]),s._v(" of your oauth app")]),s._v(" "),e("li",[e("code",[s._v("clientSecret")]),s._v(": the "),e("code",[s._v("client secret")]),s._v(" of your oauth app (only required for some of the platforms)")])]),s._v(" "),e("h3",{attrs:{id:"use-the-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-the-plugin"}},[s._v("#")]),s._v(" Use the plugin")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@mr-hope/comment"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vssue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// set `platform` rather than `api`")]),s._v("\n      platform"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// all other options of Vssue are allowed")]),s._v("\n      owner"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OWNER_OF_REPO"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      repo"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NAME_OF_REPO"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      clientId"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YOUR_CLIENT_ID"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      clientSecret"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YOUR_CLIENT_SECRET"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("The only difference is that, you should set "),e("code",[s._v("platform")]),s._v(" rather than the "),e("code",[s._v("api")]),s._v(" package itself.")]),s._v(" "),e("p",[e("code",[s._v("@vssue/vuepress-plugin-vssue")]),s._v(" will auto resolve the corresponding api package according to the value of "),e("code",[s._v("platform")]),s._v(":")]),s._v(" "),e("ul",[e("li",[s._v("platform "),e("code",[s._v("github")]),s._v(" - "),e("code",[s._v("@vssue/api-github-v3")]),s._v(" api package")]),s._v(" "),e("li",[s._v("platform "),e("code",[s._v("github-v4")]),s._v(" - "),e("code",[s._v("@vssue/api-github-v4")]),s._v(" api package")]),s._v(" "),e("li",[s._v("platform "),e("code",[s._v("gitlab")]),s._v(" - "),e("code",[s._v("@vssue/api-gitlab-v4")]),s._v(" api package")]),s._v(" "),e("li",[s._v("platform "),e("code",[s._v("bitbucket")]),s._v(" - "),e("code",[s._v("@vssue/api-bitbucket-v2")]),s._v(" api package")]),s._v(" "),e("li",[s._v("platform "),e("code",[s._v("gitee")]),s._v(" - "),e("code",[s._v("@vssue/api-gitee-v5")]),s._v(" api package")]),s._v(" "),e("li",[s._v("platform "),e("code",[s._v("gitea")]),s._v(" - "),e("code",[s._v("@vssue/api-gitea-v1")]),s._v(" api package")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),e("p",[s._v("You can go to the repo "),e("a",{attrs:{href:"https://github.com/meteorlxy/vssue-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("meteorlxy/vssue-demo"),e("OutboundLink")],1),s._v(" to get the demo code.")])]),s._v(" "),e("h3",{attrs:{id:"custom-style-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-style-variables"}},[s._v("#")]),s._v(" Custom Style Variables")]),s._v(" "),e("p",[s._v("With the power of "),e("a",{attrs:{href:"https://vuepress.vuejs.org/config/#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[s._v("palette.styl"),e("OutboundLink")],1),s._v(" of VuePress, you can set the "),e("RouterLink",{attrs:{to:"/en/guide/feature/styles.html#use-variables-to-customize-vssue"}},[s._v("Variables of Vssue Style")]),s._v(" easily.")],1),s._v(" "),e("p",[s._v("There are some pre-defined "),e("a",{attrs:{href:"http://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("stylus variables"),e("OutboundLink")],1),s._v(" of Vssue, and you can check them in "),e("code",[s._v("vssue/src/styles/_variables.styl")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-stylus line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the main color")]),s._v("\n$vssue-theme-color\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the text color (used for common text)")]),s._v("\n$vssue-text-color\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the text light color (used for muted text, disabled text, etc)")]),s._v("\n$vssue-text-light-color\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the border color")]),s._v("\n$vssue-border-color\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the progress color")]),s._v("\n$vssue-progress-color\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the font size")]),s._v("\n$vssue-font-size\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the font family")]),s._v("\n$vssue-font-family\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the mobile breakpoint")]),s._v("\n$vssue-breakpoint-mobile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the text direction (ltr / rtl) (used for RTL languages, e.g. Hebrew)")]),s._v("\n$vssue-direction\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v('For example, Vssue use a "Vue green" ('),e("code",[s._v("#3eaf7c")]),s._v(") as the theme color, which is defined as the default value of variable "),e("code",[s._v("$vssue-theme-color")]),s._v(". You can change the theme color by setting "),e("code",[s._v("$vssue-theme-color")]),s._v(" before import "),e("code",[s._v("vssue/src/styles/index.styl")]),s._v(".")]),s._v(" "),e("p",[s._v("By default, those Vssue variables are set to VuePress variables:")]),s._v(" "),e("div",{staticClass:"language-stylus line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @vssue/vuepress-plugin-vssue/styles/index.styl")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-theme-color")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $accentColor")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-text-color")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $textColor")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-border-color")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $borderColor")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-breakpoint-mobile")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $MQMobile")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("If you want to override them, just set them in your "),e("code",[s._v("palette.styl")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-stylus line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/styles/palette.styl")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token variable-declaration"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-theme-color")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" red")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);