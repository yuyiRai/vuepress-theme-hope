(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{591:function(e,a,t){"use strict";t.r(a);var s=t(1),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"markdown-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-介绍"}},[e._v("#")]),e._v(" Markdown 介绍")]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("h3",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[e._v("#")]),e._v(" 目的")]),e._v(" "),t("p",[e._v("Markdown 的目标是实现「易读易写」。")]),e._v(" "),t("p",[e._v("Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。")]),e._v(" "),t("p",[e._v("不过最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发佈，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括 "),t("a",{attrs:{href:"http://docutils.sourceforge.net/mirror/setext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setext"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"http://www.aaronsw.com/2002/atx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("atx"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"http://textism.com/tools/textile/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Textile"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"http://docutils.sourceforge.net/rst.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("reStructuredText"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"http://www.triptico.com/software/grutatxt.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grutatext"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"http://ettext.taint.org/doc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EtText"),t("OutboundLink")],1),e._v("，然而最大灵感来源其实是纯文字的电子邮件格式。")]),e._v(" "),t("p",[e._v("因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。假如你有使用过电子邮件，引言写法看起来就真的像是引用一段文字。")]),e._v(" "),t("p",[e._v("Markdown 具有一系列衍生版本，用于扩展 Markdown 的功能（如表格、脚注、内嵌 HTML 等等），这些功能原初的 Markdown 尚不具备，它们能让 Markdown 转换成更多的格式，例如 LaTeX，Docbook。Markdown 增强版中比较有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。这些衍生版本要么基于工具，如 Pandoc；要么基于网站，如 GitHub 和 Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。")]),e._v(" "),t("h2",{attrs:{id:"用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[e._v("#")]),e._v(" 用途")]),e._v(" "),t("p",[e._v("Markdown 的语法有个主要的目的：用来作为一种网络内容的"),t("em",[e._v("写作")]),e._v("用语言。Markdown 的重点在于，它能让文件更容易阅读、编写。因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。")]),e._v(" "),t("p",[e._v("Markdown 的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台 WordPress 能很好的支持 Markdown。")]),e._v(" "),t("p",[e._v("用于编写说明文档，并且以 “README.md” 的文件名保存在软件的目录下面。")]),e._v(" "),t("p",[e._v("除此之外，我们还可以快速将 Markdown 转化为演讲 PPT、Word 产品文档、LaTex 论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown 已经广泛使用，极大地推进了动态可重复性研究的历史进程。")]),e._v(" "),t("h3",{attrs:{id:"行内-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行内-html"}},[e._v("#")]),e._v(" 行内 HTML")]),e._v(" "),t("p",[e._v("不在 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。")]),e._v(" "),t("p",[e._v("只有块元素 ── 比如 "),t("code",[e._v("<div>")]),e._v("、"),t("code",[e._v("<table>")]),e._v("、"),t("code",[e._v("<pre>")]),e._v("、"),t("code",[e._v("<p>")]),e._v(" 等标签，必须在前后加上空行，以利与内容区隔。而且这些（元素）的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 的解析器有智慧型判断，可以避免在块标签前后加上没有必要的 "),t("code",[e._v("<p>")]),e._v(" 标签。")]),e._v(" "),t("p",[e._v("举例来说，在 Markdown 文件裡加上一段 HTML 表格：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("This is a regular paragraph.\n\n<table>\n    <tr>\n        <td>Foo</td>\n    </tr>\n</table>\n\nThis is another regular paragraph.\n")])])]),t("p",[e._v("请注意，Markdown 语法在 HTML 块标签中将不会被进行处理。例如，你无法在 HTML 块内使用 Markdown 形式的"),t("code",[e._v("*强调*")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"特殊字元自动转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊字元自动转换"}},[e._v("#")]),e._v(" 特殊字元自动转换")]),e._v(" "),t("p",[e._v("在 HTML 文件中，有两个字元需要特殊处理： "),t("code",[e._v("<")]),e._v(" 和 "),t("code",[e._v("&")]),e._v(" 。 "),t("code",[e._v("<")]),e._v(" 符号用于起始标签，"),t("code",[e._v("&")]),e._v(" 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 "),t("code",[e._v("&lt;")]),e._v(" 和 "),t("code",[e._v("&amp;")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("&")]),e._v(" 符号其实很容易让写作网络文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「"),t("code",[e._v("AT&amp;T")]),e._v("」 ，还得转换网址内的 "),t("code",[e._v("&")]),e._v(" 符号，如果你要链接到：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("http://images.google.com/images?num=30&q=larry+bird\n")])])]),t("p",[e._v("你必须要把网址转成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("http://images.google.com/images?num=30&amp;q=larry+bird\n")])])]),t("p",[e._v("才能放到链接标签的 "),t("code",[e._v("href")]),e._v(" 属性裡。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。")]),e._v(" "),t("p",[e._v("Markdown 允许你直接使用这些符号，但是你要小心跳脱字元的使用，如果你是在 HTML 实体中使用 "),t("code",[e._v("&")]),e._v(" 符号的话，它不会被转换，而在其它情形下，它则会被转换成 "),t("code",[e._v("&amp;")]),e._v("。所以你如果要在文件中插入一个著作权的符号，你可以这样写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("&copy;\n")])])]),t("p",[e._v("Markdown 将不会对这段文字做修改，但是如果你这样写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("AT&T\n")])])]),t("p",[e._v("Markdown 就会将它转为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("AT&amp;T\n")])])]),t("p",[e._v("类似的状况也会发生在 "),t("code",[e._v("<")]),e._v(" 符号上，因为 Markdown 支持 "),t("a",{attrs:{href:"#html"}},[e._v("行内 HTML")]),e._v(" ，如果你是使用 "),t("code",[e._v("<")]),e._v(" 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果你是写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("4 < 5\n")])])]),t("p",[e._v("Markdown 将会把它转换为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("4 &lt; 5\n")])])]),t("p",[e._v("不过需要注意的是，code 范围内，不论是行内还是块， "),t("code",[e._v("<")]),e._v(" 和 "),t("code",[e._v("&")]),e._v(" 两个符号都"),t("em",[e._v("一定")]),e._v("会被转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML code （和 HTML 相对而言， HTML 语法中，你要把所有的 "),t("code",[e._v("<")]),e._v(" 和 "),t("code",[e._v("&")]),e._v(" 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。）")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"块元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块元素"}},[e._v("#")]),e._v(" 块元素")]),e._v(" "),t("h3",{attrs:{id:"段落和换行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段落和换行"}},[e._v("#")]),e._v(" 段落和换行")]),e._v(" "),t("p",[e._v("一个段落是由一个以上相连接的行句组成，而一个以上的空行则会切分出不同的段落（空行的定义是显示上看起来像是空行，便会被视为空行。比方说，若某一行只包含空白和 tab，则该行也会被视为空行），一般的段落不需要用空白或断行缩进。")]),e._v(" "),t("p",[e._v("「一个以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，这个特性和其他大部分的 text-to-HTML 格式不一样（包括 MovableType 的「Convert Line Breaks」选项），其它的格式会把每个断行都转成 "),t("code",[e._v("<br />")]),e._v(" 标签。")]),e._v(" "),t("p",[e._v("如果你"),t("em",[e._v("真的")]),e._v("想要插入 "),t("code",[e._v("<br />")]),e._v(" 标签的话，在行尾加上两个以上的空白，然后按 enter。")]),e._v(" "),t("p",[e._v("是的，这确实需要花比较多功夫来插入 "),t("code",[e._v("<br />")]),e._v(" ，但是「每个换行都转换为 "),t("code",[e._v("<br />")]),e._v("」的方法在 Markdown 中并不适合， Markdown 中 email 式的 "),t("a",{attrs:{href:"#blockquote"}},[e._v("块引言")]),e._v(" 和多段落的 "),t("a",{attrs:{href:"#list"}},[e._v("列表")]),e._v(" 在使用换行来排版的时候，不但更好用，还更好阅读。")]),e._v(" "),t("h3",{attrs:{id:"标题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标题"}},[e._v("#")]),e._v(" 标题")]),e._v(" "),t("p",[e._v("标题能显示出文章的结构。")]),e._v(" "),t("p",[e._v("Markdown 支持两种标题的语法，"),t("a",{attrs:{href:"http://docutils.sourceforge.net/mirror/setext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setext"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"http://www.aaronsw.com/2002/atx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("atx"),t("OutboundLink")],1),e._v(" 形式。")]),e._v(" "),t("p",[e._v("Setext 形式是用底线的形式，利用 "),t("code",[e._v("=")]),e._v(" （最高阶标题）和 "),t("code",[e._v("-")]),e._v(" （第二阶标题），例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("This is an H1\n=============\n\nThis is an H2\n-------------\n")])])]),t("p",[e._v("任何数量的 "),t("code",[e._v("=")]),e._v(" 和 "),t("code",[e._v("-")]),e._v(" 都可以有效果。")]),e._v(" "),t("p",[e._v("Atx (推荐)形式则是在行首插入 1 到 6 个 "),t("code",[e._v("#")]),e._v(" ，对应到标题 1 到 6 阶，例如：")]),e._v(" "),t("ul",[t("li",[e._v("H1 :"),t("code",[e._v("# Header 1")])]),e._v(" "),t("li",[e._v("H2 :"),t("code",[e._v("## Header 2")])]),e._v(" "),t("li",[e._v("H3 :"),t("code",[e._v("### Header 3")])]),e._v(" "),t("li",[e._v("H4 :"),t("code",[e._v("#### Header 4")])]),e._v(" "),t("li",[e._v("H5 :"),t("code",[e._v("##### Header 5")])]),e._v(" "),t("li",[e._v("H6 :"),t("code",[e._v("###### Header 6")])])]),e._v(" "),t("h3",{attrs:{id:"blockquotes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockquotes"}},[e._v("#")]),e._v(" Blockquotes")]),e._v(" "),t("p",[e._v("Markdown 使用 email 形式的块引言，如果你很熟悉如何在 email 信件中引言，你就知道怎麽在 Markdown 文件中建立一个块引言，那会看起来像是你强迫断行，然后在每行的最前面加上 "),t("code",[e._v(">")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n>\n> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n> id sem consectetuer libero luctus adipiscing.\n")])])]),t("p",[e._v("Markdown 也允许你只在整个段落的第一行最前面加上 "),t("code",[e._v(">")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n\n> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\nid sem consectetuer libero luctus adipiscing.\n")])])]),t("p",[e._v("块引言可以有阶层（例如：引言内的引言），只要根据层数加上不同数量的 "),t("code",[e._v(">")]),e._v(" ：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("> This is the first level of quoting.\n>\n> > This is nested blockquote.\n>\n> Back to the first level.\n")])])]),t("p",[e._v("引言的块内也可以使用其他的 Markdown 语法，包括标题、列表、代码块等：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('> ## This is a header.\n>\n> 1.   This is the first list item.\n> 2.   This is the second list item.\n>\n> Here\'s some example code:\n>\n>     return shell_exec("echo $input | $markdown_script");\n')])])]),t("p",[e._v("任何标准的文字编辑器都能简单地建立 email 样式的引言，例如 BBEdit ，你可以选取文字后然后从选单中选择"),t("em",[e._v("增加引言阶层")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[e._v("#")]),e._v(" 列表")]),e._v(" "),t("p",[e._v("Markdown 支持有序列表和无序列表。")]),e._v(" "),t("p",[e._v("无序列表使用减号作为列表标记(也可使用星号、加号)：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("-   Red\n-   Green\n-   Blue\n")])])]),t("p",[e._v("也可以(不建议)：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("*   Red\n*   Green\n*   Blue\n\n+   Red\n+   Green\n+   Blue\n")])])]),t("p",[e._v("有序列表则使用数字接著一个英文句点：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.  Bird\n2.  McHale\n3.  Parish\n")])])]),t("p",[e._v("很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果，上面的列表所产生的 HTML 标记为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<ol>\n<li>Bird</li>\n<li>McHale</li>\n<li>Parish</li>\n</ol>\n")])])]),t("p",[e._v("如果你的列表标记写成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.  Bird\n1.  McHale\n1.  Parish\n")])])]),t("p",[e._v("你都会得到完全相同的 HTML 输出。重点在于，你可以让 Markdown 文件的列表数字和输出的结果相同，或是你懒一点都写作"),t("code",[e._v("1")]),e._v("你可以完全不用在意数字的正确性。")]),e._v(" "),t("p",[e._v("列表项目标记通常是放在最左边，但是其实也可以缩进，最多三个空白，项目标记后面则一定要接著至少一个空白或 tab。")]),e._v(" "),t("p",[e._v("要让列表看起来更漂亮，你可以把内容用固定的缩进整理好：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\n  viverra nec, fringilla in, laoreet vitae, risus.\n- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\n  Suspendisse id sem consectetuer libero luctus adipiscing.\n")])])]),t("p",[e._v("但是如果你很懒，那也不一定需要：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\nviverra nec, fringilla in, laoreet vitae, risus.\n- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\nSuspendisse id sem consectetuer libero luctus adipiscing.\n")])])]),t("p",[e._v("如果列表项目间用空行分开， Markdown 会把项目的内容在输出时用 "),t("code",[e._v("<p>")]),e._v(" 标签包起来，举例来说：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- Bird\n- Magic\n")])])]),t("p",[e._v("会被转换为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<ul>\n  <li>Bird</li>\n  <li>Magic</li>\n</ul>\n")])])]),t("p",[e._v("但是这个：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- Bird\n\n- Magic\n")])])]),t("p",[e._v("会被转换为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<ul>\n  <li><p>Bird</p></li>\n  <li><p>Magic</p></li>\n</ul>\n")])])]),t("p",[e._v("列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空白或是一个 tab ：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.  This is a list item with two paragraphs. Lorem ipsum dolor\n    sit amet, consectetuer adipiscing elit. Aliquam hendrerit\n    mi posuere lectus.\n\n    Vestibulum enim wisi, viverra nec, fringilla in, laoreet\n    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum\n    sit amet velit.\n\n2.  Suspendisse id sem consectetuer libero luctus adipiscing.\n")])])]),t("p",[e._v("如果你每行都有缩进，看起来会看好很多，当然，再次地，如果你很懒惰，Markdown 也允许：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- This is a list item with two paragraphs.\n\n  This is the second paragraph in the list item. You're\nonly required to indent the first line. Lorem ipsum dolor\nsit amet, consectetuer adipiscing elit.\n\n-   Another item in the same list.\n")])])]),t("p",[e._v("如果要在列表项目内放进引言，那 "),t("code",[e._v(">")]),e._v(" 就需要缩进：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("-   A list item with a blockquote:\n\n    > This is a blockquote\n    > inside a list item.\n")])])]),t("p",[e._v("如果要放代码标签的话，该块就需要缩进"),t("em",[e._v("两次")]),e._v("，也就是 8 个空白或是两个 tab：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("-   A list item with a code block:\n\n        <code goes here>\n")])])]),t("p",[e._v("当然，项目列表很可能会不小心产生，像是下面这样的写法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1986. What a great season.\n")])])]),t("p",[e._v("换句话说，也就是在行首出现"),t("em",[e._v("数字-句点-空白")]),e._v("，要避免这样的状况，你可以在句点前面加上反斜线。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1986\\. What a great season.\n")])])]),t("h3",{attrs:{id:"代码块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码块"}},[e._v("#")]),e._v(" 代码块")]),e._v(" "),t("p",[e._v("和代码相关的写作或是标签语言原始码通常会有已经排版好的代码块，通常这些块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 "),t("code",[e._v("<pre>")]),e._v(" 和 "),t("code",[e._v("<code>")]),e._v(" 标签来把代码块包起来。")]),e._v(" "),t("p",[e._v("要在 Markdown 中建立代码块很简单，只要简单地缩进 4 个空白或是 1 个 tab 就可以，例如，下面的输入：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("This is a normal paragraph:\n\n    This is a code block.\n")])])]),t("p",[e._v("Markdown 会转换成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p>This is a normal paragraph:</p>\n\n<pre><code>This is a code block.\n</code></pre>\n")])])]),t("p",[e._v("这里的缩进（4 个空白或是 1 个 tab），都会被移除，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Here is an example of AppleScript:\n\n    tell application "Foo"\n        beep\n    end tell\n')])])]),t("p",[e._v("会被转换为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<p>Here is an example of AppleScript:</p>\n\n<pre><code>tell application "Foo"\n    beep\nend tell\n</code></pre>\n')])])]),t("p",[e._v("一个代码块会一直持续到没有缩进的那一行（或是文件结尾）。")]),e._v(" "),t("p",[e._v("在代码块里面， "),t("code",[e._v("&")]),e._v(" 、 "),t("code",[e._v("<")]),e._v(" 和 "),t("code",[e._v(">")]),e._v(" 会自动转成 HTML 实体，这样的方式让你非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制粘贴，再加上缩进就可以了，剩下的 Markdown 都会帮你处理，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('    <div class="footer">\n        &copy; 2004 Foo Corporation\n    </div>\n')])])]),t("p",[e._v("会被转换为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<pre><code>&lt;div class="footer"&gt;\n    &amp;copy; 2004 Foo Corporation\n&lt;/div&gt;\n</code></pre>\n')])])]),t("p",[e._v("代码块中，一般的 Markdown 语法不会被转换，像是星号便只是星号，这表示你可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。")]),e._v(" "),t("h3",{attrs:{id:"分隔线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分隔线"}},[e._v("#")]),e._v(" 分隔线")]),e._v(" "),t("p",[e._v("你可以在一行中用三个或以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号中间插入空白。下面每种写法都可以建立分隔线：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("---(建议)\n\n* * *\n***\n*****\n- - -\n---------------------------------------\n")])])]),t("h2",{attrs:{id:"行内元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行内元素"}},[e._v("#")]),e._v(" 行内元素")]),e._v(" "),t("h3",{attrs:{id:"链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[e._v("#")]),e._v(" 链接")]),e._v(" "),t("p",[e._v("Markdown 支持两种形式的链接语法： "),t("em",[e._v("行内")]),e._v("和"),t("em",[e._v("参考")]),e._v("两种形式。")]),e._v(" "),t("p",[e._v("不管是哪一种，链接的文字都是用 "),t("code",[e._v("[方括号]")]),e._v(" 来标记。")]),e._v(" "),t("p",[e._v("要建立一个行内形式的链接，只要在方块括号后面马上接著括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('This is [an example](http://example.com/ "Title") inline link.\n\n[This link](http://example.net/) has no title attribute.\n')])])]),t("p",[e._v("会产生：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<p>This is <a href="http://example.com/" title="Title">\nan example</a> inline link.</p>\n\n<p><a href="http://example.net/">This link</a> has no\ntitle attribute.</p>\n')])])]),t("p",[e._v("如果你是要链接到同样主机的资源，你可以使用相对路径：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("See my [About](/about/) page for details.\n")])])]),t("p",[e._v("参考形式的链接使用另外一个方括号接在链接文字的括号后面，而在第二个方括号里面要填入用以辨识链接的标签：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("This is [an example][id] reference-style link.\n")])])]),t("p",[e._v("接著，在文件的任意处，你可以把这个标签的链接内容定义出来：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('[id]: http://example.com/  "Optional Title Here"\n')])])]),t("p",[e._v("链接定义的形式为：")]),e._v(" "),t("ul",[t("li",[e._v("方括号，里面输入链接的辨识用标签")]),e._v(" "),t("li",[e._v("接著一个冒号")]),e._v(" "),t("li",[e._v("接著一个以上的空白或 tab")]),e._v(" "),t("li",[e._v("接著链接的网址")]),e._v(" "),t("li",[e._v("选择性地接著 title 内容，可以用单引号、双引号或是括弧包著")])]),e._v(" "),t("p",[e._v("下面这三种链接的定义都是相同：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[foo]: http://example.com/  \"Optional Title Here\"\n[foo]: http://example.com/  'Optional Title Here'\n[foo]: http://example.com/  (Optional Title Here)\n")])])]),t("p",[e._v("**请注意：**有一个已知的问题是 Markdown.pl 1.0.1 会忽略单引号包起来的链接 title。")]),e._v(" "),t("p",[e._v("链接网址也可以用方括号包起来：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('[id]: <http://example.com/>  "Optional Title Here"\n')])])]),t("p",[e._v("你也可以把 title 属性放到下一行，也可以加一些缩进，网址太长的话，这样会比较好看：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('[id]: http://example.com/longish/path/to/resource/here\n    "Optional Title Here"\n')])])]),t("p",[e._v("网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。")]),e._v(" "),t("p",[e._v("链接辨识标签可以有字母、数字、空白和标点符号，但是并"),t("em",[e._v("不")]),e._v("区分大小写，因此下面两个链接是一样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[link text][a]\n[link text][A]\n")])])]),t("p",[t("em",[e._v("预设的链接标签")]),e._v('功能让你可以省略指定链接标签，这种情形下，链接标签和链接文字会视为相同，要用预设链接标签只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[Google][]\n")])])]),t("p",[e._v("然后定义链接内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[Google]: http://google.com/\n")])])]),t("p",[e._v("由于链接文字可能包含空白，所以这种简化的标签内也可以包含多个文字：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Visit [Daring Fireball][] for more information.\n")])])]),t("p",[e._v("然后接著定义链接：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("[Daring Fireball]: http://daringfireball.net/\n")])])]),t("p",[e._v("链接的定义可以放在文件中的任何一个地方，我比较偏好直接放在链接出现段落的后面，你也可以把它放在文件最后面，就像是注解一样。")]),e._v(" "),t("p",[e._v("下面是一个参考式链接的范例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('I get 10 times more traffic from [Google][1] than from\n[Yahoo][2] or [MSN][3].\n\n  [1]: http://google.com/        "Google"\n  [2]: http://search.yahoo.com/  "Yahoo Search"\n  [3]: http://search.msn.com/    "MSN Search"\n')])])]),t("p",[e._v("如果改成用链接名称的方式写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('I get 10 times more traffic from [Google][] than from\n[Yahoo][] or [MSN][].\n\n  [google]: http://google.com/        "Google"\n  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"\n  [msn]:    http://search.msn.com/    "MSN Search"\n')])])]),t("p",[e._v("上面两种写法都会产生下面的 HTML。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<p>I get 10 times more traffic from <a href="http://google.com/"\ntitle="Google">Google</a> than from\n<a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>\nor <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>\n')])])]),t("p",[e._v("下面是用行内形式写的同样一段内容的 Markdown 文件，提供作为比较之用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('I get 10 times more traffic from [Google](http://google.com/ "Google")\nthan from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or\n[MSN](http://search.msn.com/ "MSN Search").\n')])])]),t("p",[e._v("参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字元，但是用行内形式的链接却会增加到 176 个字元，如果是用纯 HTML 格式来写，会有 234 个字元，在 HTML 格式中，标签比文字还要多。")]),e._v(" "),t("p",[e._v("使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让你可以把一些标记相关的资讯移到段落文字之外，你就可以增加链接而不让文章的阅读感觉被打断。")]),e._v(" "),t("h3",{attrs:{id:"强调"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强调"}},[e._v("#")]),e._v(" 强调")]),e._v(" "),t("p",[e._v("Markdown 使用星号（"),t("code",[e._v("*")]),e._v("）和底线（"),t("code",[e._v("_")]),e._v("）作为标记强调字词的符号，被 "),t("code",[e._v("*")]),e._v(" 或 "),t("code",[e._v("_")]),e._v(" 包围的字词会被转成用 "),t("code",[e._v("<em>")]),e._v(" 标签包围，用两个 "),t("code",[e._v("*")]),e._v(" 或 "),t("code",[e._v("_")]),e._v(" 包起来的话，则会被转成 "),t("code",[e._v("<strong>")]),e._v("，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("**double asterisks** (建议)\n\n__double underscores__ (建议)\n\n*single asterisks*\n\n_single underscores_\n")])])]),t("p",[e._v("会转成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<em>single asterisks</em>\n\n<em>single underscores</em>\n\n<strong>double asterisks</strong>\n\n<strong>double underscores</strong>\n")])])]),t("p",[e._v("你可以随便用你喜欢的样式，唯一的限制是，你用什么符号开启标签，就要用什么符号结束。")]),e._v(" "),t("p",[e._v("强调也可以直接插在文字中间：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("un*frigging*believable\n")])])]),t("p",[e._v("但是如果你的 "),t("code",[e._v("*")]),e._v(" 和 "),t("code",[e._v("_")]),e._v(" 两边都有空白的话，它们就只会被当成普通的符号。")]),e._v(" "),t("p",[e._v("如果要在文字前后直接插入普通的星号或底线，你可以用反斜线：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("\\*this text is surrounded by literal asterisks\\*\n")])])]),t("h3",{attrs:{id:"代码码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码码"}},[e._v("#")]),e._v(" 代码码")]),e._v(" "),t("p",[e._v("如果要标记一小段行内代码码，你可以用反引号把它包起来（"),t("code",[e._v("`")]),e._v("），例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Use the `printf()` function.\n")])])]),t("p",[e._v("会产生：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p>Use the <code>printf()</code> function.</p>\n")])])]),t("p",[e._v("如果要在代码码区段内插入反引号，你可以用多个反引号来开启和结束代码码区段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("``There is a literal backtick (`) here.``\n")])])]),t("p",[e._v("这段语法会产生：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p><code>There is a literal backtick (`) here.</code></p>\n")])])]),t("p",[e._v("代码码区段的起始和结束端都可以放入一个空白，起始端后面一个，结束端前面一个，这样你就可以在区段的一开始就插入反引号：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("A single backtick in a code span: `` ` ``\n\nA backtick-delimited string in a code span: `` `foo` ``\n")])])]),t("p",[e._v("会产生：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p>A single backtick in a code span: <code>`</code></p>\n\n<p>A backtick-delimited string in a code span: <code>`foo`</code></p>\n")])])]),t("p",[e._v("在代码码区段内，"),t("code",[e._v("&")]),e._v(" 和方括号都会被转成 HTML 实体，这样会比较容易插入 HTML 原始码，Markdown 会把下面这段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Please don't use any `<blink>` tags.\n")])])]),t("p",[e._v("转为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>\n")])])]),t("p",[e._v("你也可以这样写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("`&#8212;` is the decimal-encoded equivalent of `&mdash;`.\n")])])]),t("p",[e._v("以产生：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<p><code>&amp;#8212;</code> is the decimal-encoded\nequivalent of <code>&amp;mdash;</code>.</p>\n")])])]),t("h3",{attrs:{id:"图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[e._v("#")]),e._v(" 图片")]),e._v(" "),t("p",[e._v("很明显地，要在纯文字应用中设计一个 「自然」的语法来插入图片是有一定难度的。")]),e._v(" "),t("p",[e._v("Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： "),t("em",[e._v("行内")]),e._v("和"),t("em",[e._v("参考")]),e._v("。")]),e._v(" "),t("p",[e._v("行内图片的语法看起来像是：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('![Alt text](/path/to/img.jpg)\n\n![Alt text](/path/to/img.jpg "Optional title")\n')])])]),t("p",[e._v("详细叙述如下：")]),e._v(" "),t("ul",[t("li",[e._v("一个惊叹号 "),t("code",[e._v("!")])]),e._v(" "),t("li",[e._v("接著一个方括号，里面放上图片的替代文字")]),e._v(" "),t("li",[e._v("接著一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上\n选择性的 'title' 文字。")])]),e._v(" "),t("p",[e._v("参考式的图片语法则长得像这样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("![Alt text][id]\n")])])]),t("p",[e._v("「id」是图片参考的名称，图片参考的定义方式则和链接参考一样：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('[id]: url/to/image  "Optional title attribute"\n')])])]),t("p",[e._v("到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的 "),t("code",[e._v("<img>")]),e._v(" 标签。")]),e._v(" "),t("h3",{attrs:{id:"其他文本样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他文本样式"}},[e._v("#")]),e._v(" 其他文本样式")]),e._v(" "),t("ul",[t("li",[e._v("删除:"),t("code",[e._v("~~delete~~")])]),e._v(" "),t("li",[e._v("段落 : 段落之间空一行")]),e._v(" "),t("li",[e._v("换行符 : 一行结束时输入两个空格")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),t("h3",{attrs:{id:"自动链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动链接"}},[e._v("#")]),e._v(" 自动链接")]),e._v(" "),t("p",[e._v("Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用方括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<http://example.com/>\n")])])]),t("p",[e._v("Markdown 会转为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<a href="http://example.com/">http://example.com/</a>\n')])])]),t("p",[e._v("自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字元转成 16 进位码的 HTML 实体，这样的格式可以混淆一些不好的信箱地址收集机器人，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<address@example.com>\n")])])]),t("p",[e._v("Markdown 会转成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<a href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;\n&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;\n&#109;">&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;\n&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a>\n')])])]),t("p",[e._v("在浏览器里面，这段字串会变成一个可以点击的「address@example.com」链接。")]),e._v(" "),t("p",[e._v("（这种作法虽然可以混淆不少的机器人，但并无法全部挡下来，不过这样也比什么都不做好些。无论如何，公开你的信箱终究会引来广告信件的。）")]),e._v(" "),t("h3",{attrs:{id:"转义字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[e._v("#")]),e._v(" 转义字符")]),e._v(" "),t("p",[e._v("Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用 "),t("code",[e._v("<em>")]),e._v(" 标签），你可以在星号的前面加上反斜线：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("\\*literal asterisks\\*\n")])])]),t("p",[e._v("Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("\\   反斜线\n`   反引号\n*   星号\n_   底线\n{}  大括号\n[]  方括号\n()  括号\n#   井字号\n+   加号\n-   减号\n.   英文句点\n!   惊叹号\n")])])]),t("h2",{attrs:{id:"快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[e._v("#")]),e._v(" 快捷键")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("输出后的效果")]),e._v(" "),t("th",[e._v("Markdown")]),e._v(" "),t("th",[e._v("快捷键")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("Bold")])]),e._v(" "),t("td",[t("code",[e._v("**text**")])]),e._v(" "),t("td",[e._v("Ctrl/⌘ + B")])]),e._v(" "),t("tr",[t("td",[t("em",[e._v("Emphasize")])]),e._v(" "),t("td",[t("code",[e._v("*text*")])]),e._v(" "),t("td",[e._v("Ctrl/⌘ + I")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("Inline Code")])]),e._v(" "),t("td",[e._v("`code`")]),e._v(" "),t("td",[e._v('选中后"`"')])])])]),e._v(" "),t("h2",{attrs:{id:"表格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[e._v("#")]),e._v(" 表格")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("居中")]),e._v(" "),t("th",{staticStyle:{"text-align":"right"}},[e._v("右对齐")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("左对齐")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("居中使用"),t("code",[e._v(":-:")])]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("右对齐使用"),t("code",[e._v("-:")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("左对齐使用"),t("code",[e._v(":-")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("b")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("aaaaaaaaa")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("aaaa")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("c")]),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e._v("aaaa")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("a")])])])]),e._v(" "),t("h2",{attrs:{id:"emoji"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[e._v("#")]),e._v(" Emoji")]),e._v(" "),t("p",[t("code",[e._v(":emoji名称:")])]),e._v(" "),t("p",[e._v("eg:"),t("code",[e._v(":smile:")]),e._v(" 😄")]),e._v(" "),t("h2",{attrs:{id:"markdown-效果演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-效果演示"}},[e._v("#")]),e._v(" Markdown 效果演示")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/basic/markdown/demo.html"}},[e._v("查看详情")])],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);