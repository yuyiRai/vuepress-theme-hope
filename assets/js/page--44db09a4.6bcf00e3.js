(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{638:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mr-hope-seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mr-hope-seo"}},[t._v("#")]),t._v(" @mr-hope/seo")]),t._v(" "),e("p",[t._v("The plugin will inject "),e("code",[t._v("<meta>")]),t._v(" into your webpage to enhance the SEO of your webpage.")]),t._v(" "),e("h2",{attrs:{id:"plugin-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin-options"}},[t._v("#")]),t._v(" Plugin options")]),t._v(" "),e("h3",{attrs:{id:"twitterid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twitterid"}},[t._v("#")]),t._v(" twitterID")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: No")])]),t._v(" "),e("p",[t._v("Fill in your twitter username")]),t._v(" "),e("h3",{attrs:{id:"restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restrictions"}},[t._v("#")]),t._v(" restrictions")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: No")])]),t._v(" "),e("p",[t._v("The age rating of the content, the format is "),e("code",[t._v("[int]+")]),t._v(", such as "),e("code",[t._v("'13+'")])]),t._v(" "),e("h3",{attrs:{id:"seo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" seo")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("(info: PageSeoInfo) => Record<string, string>")])])]),t._v(" "),e("p",[t._v("The interface types of "),e("code",[t._v("PageSeoInfo")]),t._v(" are as follows:")]),t._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageSeoInfo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $page"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Page"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  $site"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SiteConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ThemeConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** supported languages */")]),t._v("\n  locales"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("You can use this option to inject new or overwrite the default generated SEO, you need to return an object in the format of "),e("code",[t._v("<property>: <conent>")]),t._v(".")]),t._v(" "),e("p",[t._v("For example, if you return "),e("code",[t._v("{ 'og:url': 'google.com', 'og:image': 'google.com/logo.jpg' }")]),t._v(", the plugin will inject the following into "),e("code",[t._v("<head>")]),t._v(" :")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("og:image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("google.com/logo.jpg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h4",{attrs:{id:"defaults"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defaults"}},[t._v("#")]),t._v(" Defaults")]),t._v(" "),e("p",[t._v("The following are the "),e("code",[t._v("<meta>")]),t._v(" tags and their values ​​that will be injected into "),e("code",[t._v("<head>")]),t._v(" by default:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Property Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:url")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("themeConfig.hostname + path")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:site_name")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$site.title")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:title")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.title")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:description")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.description")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:type")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("'article'")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:image")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("themeConfig.hostname + $page.frontmatter.image")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:updated_time")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.lastUpdatedTime")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:locale")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",[t._v("p")]),e("mi",[t._v("a")]),e("mi",[t._v("g")]),e("mi",[t._v("e")]),e("msub",[e("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),e("mi",[t._v("c")])],1),e("mi",[t._v("o")]),e("mi",[t._v("m")]),e("mi",[t._v("p")]),e("mi",[t._v("u")]),e("mi",[t._v("t")]),e("mi",[t._v("e")]),e("mi",[t._v("d")]),e("mi",{attrs:{mathvariant:"normal"}},[t._v(".")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("page._computed.")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"mord mathdefault"},[t._v("p")]),e("span",{staticClass:"mord mathdefault"},[t._v("a")]),e("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),e("span",{staticClass:"mord mathdefault"},[t._v("e")]),e("span",{staticClass:"mord"},[e("span",{staticClass:"mord"},[t._v(".")]),e("span",{staticClass:"msupsub"},[e("span",{staticClass:"vlist-t vlist-t2"},[e("span",{staticClass:"vlist-r"},[e("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[e("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),e("span",{staticClass:"sizing reset-size6 size3 mtight"},[e("span",{staticClass:"mord mathdefault mtight"},[t._v("c")])])])]),e("span",{staticClass:"vlist-s"},[t._v("​")])]),e("span",{staticClass:"vlist-r"},[e("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[e("span")])])])])]),e("span",{staticClass:"mord mathdefault"},[t._v("o")]),e("span",{staticClass:"mord mathdefault"},[t._v("m")]),e("span",{staticClass:"mord mathdefault"},[t._v("p")]),e("span",{staticClass:"mord mathdefault"},[t._v("u")]),e("span",{staticClass:"mord mathdefault"},[t._v("t")]),e("span",{staticClass:"mord mathdefault"},[t._v("e")]),e("span",{staticClass:"mord mathdefault"},[t._v("d")]),e("span",{staticClass:"mord"},[t._v(".")])])])]),t._v("lang")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("og:locale:alternate")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("other languages included in $themeConfig.locales")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("twitter:card")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("'summary_large_image'")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("twitter:image:alt")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$site.title")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("article:author")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.author || themeConfig.author")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("article:tag")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.tags || $page.frontmatter.tag")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("article:published_time")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.frontmatter.time || $page.frontmatter.date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("article:modified_time")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("$page.lastUpdatedTime")])])])]),t._v(" "),e("h3",{attrs:{id:"custommeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custommeta"}},[t._v("#")]),t._v(" customMeta")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("(meta: Meta, info: PageSeoInfo) => void")])])]),t._v(" "),e("p",[t._v("You can use this option to inject content directly into Meta. For the format of "),e("code",[t._v("Meta")]),t._v(", please see "),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#meta",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter → Meta"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("For example:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("meta"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageSeoInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Will inject into the current page's "),e("code",[t._v("<head>")]),t._v(" with:")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);