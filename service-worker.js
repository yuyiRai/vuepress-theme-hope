if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"da2b7360ab4def6ebf4f7d2abf9867cf"},{url:"article/index.html",revision:"94fa57e39b16f67f7ded5bea9ae5ce9e"},{url:"assets/css/0.styles.957c2b57.css",revision:"4f83aa8533f6417bb2ec4dacf8478e1e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.b78c0da1.js",revision:"d5929daf5a673211ad2b39a18abc62e8"},{url:"assets/js/app.5fac58d2.js",revision:"9c47f2e20967684e458d9bf7c8b10f3b"},{url:"assets/js/layout-Blog.bfa1ce72.js",revision:"07712f8259e3978e8dc3e28ba97d02d3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.1b9a3241.js",revision:"85a1d7a5005e2204c369113791e82079"},{url:"assets/js/layout-Layout.84adcc15.js",revision:"56824b9af3248bcd8005c1f5b3f01d1a"},{url:"assets/js/layout-NotFound.b939f0f0.js",revision:"37ad1149bfd7e2006a40e2182df73396"},{url:"assets/js/page-@mr-hopelast-update--1104de32.7e412730.js",revision:"05099c4a89e5100e8d926520b43a547a"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.8f88b2ff.js",revision:"d435b5a136dcbe2879b9d32f45468a81"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.930aacc8.js",revision:"1d580bf86b363d550932761d32fc3fd1"},{url:"assets/js/page-@mr-hopepwa--051692f2.ffbc4942.js",revision:"11f1767f9c7dd35df28a5e80d6e69244"},{url:"assets/js/page-@mr-hopereading-time--36317372.7984279e.js",revision:"374ccfa2e4cb6a1e3e0ab6e5d397faea"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.9a1714e8.js",revision:"71f0244d684b10d4e9034c0f29cdd617"},{url:"assets/js/page-@mr-hopeseo--44db09a4.39fa7ef8.js",revision:"3c47b93c61d06cae09ae6e4aa251ef07"},{url:"assets/js/page-@mr-hopeseo--4c19db12.4a22f3f7.js",revision:"67da3f4345d224b7a0a6ff33f927ba2c"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.8ae2b2df.js",revision:"69a9265c019f1e9094cb020cb53867ee"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.c4ae9b7f.js",revision:"a799e9e8f94af65277d5b4928c8ac09d"},{url:"assets/js/page-AboutVuepress--5d12de02.d0e5ecac.js",revision:"d17e64957e1ec33745f37f8230440ee8"},{url:"assets/js/page-Basic--29b12659.fb79ad94.js",revision:"f6cde2d901dcc833c62740a95c3d4759"},{url:"assets/js/page-Bloghomepage--d988383c.d6478996.js",revision:"8771b3962b2bd5d6a521fc5c0ba22dd6"},{url:"assets/js/page-Blogrelated--7c1e4552.e1d622d5.js",revision:"1d47bf6024ccee5a14fa027bd82f24c6"},{url:"assets/js/page-CommentFunction--6884a164.98ec5a9a.js",revision:"c9fd48bf1a2dd25944bcc4e7ab7f69bc"},{url:"assets/js/page-Commonproblems--87e54bce.0c6d6d41.js",revision:"14519ebbca1cb30bdf04ffb14c9fcf72"},{url:"assets/js/page-ConfigDocs--2082c612.2cf3a987.js",revision:"1d58c59ecae1dee0628f42db3f336371"},{url:"assets/js/page-Customalignment--df6a559c.1fd15674.js",revision:"5993f191e8d07232ef469882cf5daf8e"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.808bcbed.js",revision:"c0700bc73f093c0c7275cabc8582cf07"},{url:"assets/js/page-Demos--cac80116.78b9021f.js",revision:"666fd16075d48d33533c838aead64ee6"},{url:"assets/js/page-EmojiList--b946d226.1da255ae.js",revision:"dcdd4d39066f849c21490015372f6a96"},{url:"assets/js/page-Emoji列表--41bb29b9.09ce2d7a.js",revision:"244dee2d71b36f217432042617ac7c58"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.b8a40984.js",revision:"1949eabbd1a48d579aa0af8a13617999"},{url:"assets/js/page-FileStructure--5dff5230.f05f2989.js",revision:"1100188fd3b2d88210b2d1cac57051f1"},{url:"assets/js/page-Flowchart--6426e412.46b7bd47.js",revision:"8163f4f28ec6d190fa93008f0d1cadf1"},{url:"assets/js/page-Footnote--3a89d162.465934f3.js",revision:"7acd927c7f119875462041d2ac17c9c3"},{url:"assets/js/page-HomePage--37b81ca8.c5ff7460.js",revision:"3efbe8c0720b7bd7040de82b1ad349db"},{url:"assets/js/page-InstallUsage--5dafe67a.22b78dc3.js",revision:"12c9d29de20b993f3ef0fe069b658931"},{url:"assets/js/page-Introduction--0b048d19.4895a66b.js",revision:"ca6231c972e8b141a78006b664492427"},{url:"assets/js/page-Layout--655201fe.986c4ffa.js",revision:"565390ae0b0907666afddcbf8e937ad4"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.39041736.js",revision:"f5a1f06ed9c55025e0b803c4f1c9abb4"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.9fae7947.js",revision:"8f6ec13cb1ff9fe7127aab7dd55560a8"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.557544f3.js",revision:"68adf180ea36108dec026285b3775477"},{url:"assets/js/page-Markdown介绍--270989ce.68dbd2eb.js",revision:"4306914d4ed441f297e2f304b611536b"},{url:"assets/js/page-Markdown增强--ad9dba8e.d7727896.js",revision:"4f8a1158277e50d2cb4705d605fdf657"},{url:"assets/js/page-Markdown示例--c3e1bfdc.5becb375.js",revision:"a678bd1a1db6c7837450fed62a751933"},{url:"assets/js/page-Markup--4f1121f0.4fc92b5d.js",revision:"f478124fdc23267033b443ab6bf2ef35"},{url:"assets/js/page-Nature--5c9d3e6c.26eee3bb.js",revision:"b55d64b1b87a8c0747493da88de2f597"},{url:"assets/js/page-NavBar--262632f4.09cd2696.js",revision:"1bd90cf7301d174dc5a12dbbd5a566b6"},{url:"assets/js/page-NewComponent--2edd3b68.4752aad7.js",revision:"57f9e2492c2aef14a500c935b060460e"},{url:"assets/js/page-Newfeature--3e66b879.7e89bf00.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.ce63f3dd.js",revision:"ceabde276a74bb59a3a304056fdab228"},{url:"assets/js/page-Page--26692570.1ec38e61.js",revision:"2d033d4321b222d97ca0d0ff06f70021"},{url:"assets/js/page-PageConfiguration--493c56dc.feb77cb3.js",revision:"c46c62a93f088455dfef6b1b8dec8c90"},{url:"assets/js/page-Pageinformation--6abfca0a.71ab564d.js",revision:"ebbda26d941510e81786e3ba4d135dab"},{url:"assets/js/page-People--f94822c8.eb9f98a7.js",revision:"bdbb70c2a77dc0579ffc40c31364089e"},{url:"assets/js/page-photo-swipe--34ea45d2.8e4c178f.js",revision:"95646513c5794bd8f9e3ecba702cb72d"},{url:"assets/js/page-photo-swipe--7be1a0aa.dc4f1c91.js",revision:"8aa733d50f30b62bb261f59f8733ae50"},{url:"assets/js/page-Place--32291f32.459bc475.js",revision:"b7785b68a97bf3f0c30b37cf8c1853f1"},{url:"assets/js/page-PluginDescription--b08a3ace.cc083780.js",revision:"22c4961d2a2f44d031870adad5311974"},{url:"assets/js/page-Plugins--1a5ef242.a64c1d18.js",revision:"f07ededf55ed4837782c060c23c8425a"},{url:"assets/js/page-SEOandSitemap--13a48dac.dcddefbb.js",revision:"d3ac3d3578f521ceb128e213905d4cd7"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.e04e7d01.js",revision:"0a51dc2275069f418548af7d6974a5f5"},{url:"assets/js/page-Sidebar--12800fd2.15b3c88f.js",revision:"817c608a8215396116803334c7e5eae0"},{url:"assets/js/page-stylusconfiguration--189ec968.5eefb9a4.js",revision:"5631c6a2f75b8f705392cb3e657bb479"},{url:"assets/js/page-stylus配置--6796cdf2.2c90257d.js",revision:"867b26fff10896ae2268de23b00eeb2d"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.e81ed48a.js",revision:"b4faa5ae190bba660f15d7dfcffd0988"},{url:"assets/js/page-Symbol--0b92fe0a.4f510cf7.js",revision:"9eb0140689a3ead1bd8dce1f77f04b9f"},{url:"assets/js/page-TexSupport--f897e69c.a54d73ae.js",revision:"9435cf9a47502f940b11ddc08d6f8174"},{url:"assets/js/page-Tex语法支持--64cb5e50.8ec58d2f.js",revision:"fcb07d2aa626c2e2399e17052db90e9b"},{url:"assets/js/page-ThemeConfig--085c2edc.97115767.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.3565512c.js",revision:"c29eae6d0734b35e16dde068cf440bd4"},{url:"assets/js/page-TSsupport--165630b2.73796e82.js",revision:"977c1bc178d5af5a6047cbbf2ab05074"},{url:"assets/js/page-TS支持--09728ac8.6a5ecbdc.js",revision:"dbe3431ff3d87825f82212942440bd71"},{url:"assets/js/page-Vuepress--4a71114e.2a523f2b.js",revision:"33e675b2a4b09f7be429d894d150c3bb"},{url:"assets/js/page-vuepress-plugin-container--31498112.ada85c26.js",revision:"340787e80076ece2f502fdeebf99fbc2"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.94384900.js",revision:"69e201350d637af11a005fec341d8598"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.9298bb96.js",revision:"35ab2547ddad1f6375476f81a88f440a"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.6feef59a.js",revision:"e29853ff6d521bb0933b7c8d7a286775"},{url:"assets/js/page-vuepress-theme-hope--776d8369.4fdddaa4.js",revision:"431f3181be2e7ffb5576c53536b732e4"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.55e34de5.js",revision:"3be9f6f51a28c5aab2b16933025521ea"},{url:"assets/js/page-VuepressCases--27d200c8.e9e81f74.js",revision:"7a9b4b574bd4f5c650668800be4c2bda"},{url:"assets/js/page-Vuepresscommands--7e89705c.cf232fd8.js",revision:"65f6f7226e5e8bd5316cc25de3a4a96c"},{url:"assets/js/page-Vuepress案例--082972f2.b5cece46.js",revision:"8f6f810ee5d8f1d6719176a2e12787bc"},{url:"assets/js/page-上下角标--895c91b8.b6c75d3b.js",revision:"cf82336ba42f9744b91400addc55cf98"},{url:"assets/js/page-主题配置--1120a0ce.611cd02f.js",revision:"ae2fe990c368f25a2585db01319f1dab"},{url:"assets/js/page-主题配置--1a859dfc.0c933a42.js",revision:"d7fb915e2a712a46659e1795684c180f"},{url:"assets/js/page-人物--2182769c.ecc11cf4.js",revision:"ac9cb0d985175674dbbb5ea7470fbc19"},{url:"assets/js/page-介绍--d4910962.8f3a2b86.js",revision:"737d97f82088ea7c671fb870dfb208ff"},{url:"assets/js/page-侧边栏--2fa1ea2c.5f05e6c9.js",revision:"de534d1190cd5a9fc79ea0d5b3e7aa76"},{url:"assets/js/page-加密功能--181bdc9c.1db77922.js",revision:"37274367b72a91a076bb14c09314d851"},{url:"assets/js/page-博客相关--17c260a2.3672f350.js",revision:"b665c63a11d0369e8fb8589eb1f26a60"},{url:"assets/js/page-博客首页--64265752.f5a1997d.js",revision:"8808813d76add9296a50ffe4668114c9"},{url:"assets/js/page-地点--951cdc00.b2b1655b.js",revision:"e8c203d43df920c10c71325a93ff1f54"},{url:"assets/js/page-基础知识--770cb96b.ba6b2979.js",revision:"e9fe235249269eeb26063bf4f837478e"},{url:"assets/js/page-安装使用--0ab466d2.bd1aa73b.js",revision:"5f260c50467e0df9872e586ba11d3336"},{url:"assets/js/page-对象--16031ab2.807358d2.js",revision:"2881655a810f4af795d599c1846af793"},{url:"assets/js/page-导航栏--c7bf87dc.41daef68.js",revision:"dce0b1880b0c814db30182af39ecc02f"},{url:"assets/js/page-布局--12bd4f0e.3218eda7.js",revision:"e2a608e5b08f059cc5d5e58d25301fdb"},{url:"assets/js/page-常见问题--2b571e9b.962ee231.js",revision:"03b06fb46153b48103a5fd475d6a0731"},{url:"assets/js/page-插件--adbf415c.c8c50a8d.js",revision:"9a67f53c4469a578211f45837eb2d354"},{url:"assets/js/page-插件说明--137c6c07.3f22d4ac.js",revision:"1b28c77bba7fcded97f806ae871688f2"},{url:"assets/js/page-文件结构介绍--665a4f1c.83d8d40b.js",revision:"f83a5d723b6cd781b4f4d6ebc14d9110"},{url:"assets/js/page-新增特性--5136c541.78dbdd71.js",revision:"0bf66c8f1b6b9075d58fbbd7216fe882"},{url:"assets/js/page-新增组件--1d138c72.ce922c9c.js",revision:"79b62e99d1c199fe4196772eb46ffc2b"},{url:"assets/js/page-标记--6b1f341c.8bba20e5.js",revision:"661b285e09ef6b349432378bacaa9f7c"},{url:"assets/js/page-流程图支持--7ce6d974.360f681a.js",revision:"653c26f1d0dca74de910097919ccd0cf"},{url:"assets/js/page-深色模式与主题色--e23e731c.d1a06d09.js",revision:"69b36521edf5c3d18cdb80ef7d411b8e"},{url:"assets/js/page-符号--a9259c5c.ee6e5927.js",revision:"dbe6efe7a92e03ceedc46a64e9abd351"},{url:"assets/js/page-脚注--0c733e52.651c51ea.js",revision:"5089ee4d4c549279ed860e7cf82e24e3"},{url:"assets/js/page-自定义对齐--4f21aa5c.a30c0ca0.js",revision:"3896dd0379ea12a558d2368bfc69d06a"},{url:"assets/js/page-自然--749fb09c.253fd65a.js",revision:"c390f9214147d8661935688e60173b0b"},{url:"assets/js/page-评论功能--5bb6671c.94f3a906.js",revision:"73e76bfb320268954ec56ba97a6febda"},{url:"assets/js/page-配置文档--35a0a7d9.d5e48476.js",revision:"424b71188d38b298909e96313e59338c"},{url:"assets/js/page-页面--af17b59c.8188c909.js",revision:"80f2acc1571825c0ac4274caaf0726b1"},{url:"assets/js/page-页面信息--71efd5d2.f2d75156.js",revision:"8846726c74ca402822e13f0e569e247f"},{url:"assets/js/page-页面配置--0aacc152.1f3169fe.js",revision:"2b8bb8f25ec04f773f7faed26156c9e5"},{url:"assets/js/page-项目指令--9f3f316c.7e454087.js",revision:"f55ebf6a80a9b07201b4f756e1ba53ba"},{url:"assets/js/page-项目案例--f328658e.6386495f.js",revision:"c9485b82ebb4e1f796e3c0577344f7e4"},{url:"assets/js/page-首页--5834599c.7e555821.js",revision:"ed1bd436205ca10fff85b8eb12d670f4"},{url:"assets/js/vendors~docsearch.5cc40e63.js",revision:"fe7d6bec811dd438c0e65e9970096127"},{url:"assets/js/vendors~flowchart.3ccab522.js",revision:"c0118085537f1dca4a2561b4d20f1bf9"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b275efbb.js",revision:"d90e76415c2772cf0fc880e6f59a64cf"},{url:"assets/js/vendors~layout-Layout.a2a37a56.js",revision:"363b182feb6039771aa7e0d96eb8bcef"},{url:"basic/index.html",revision:"25fa7b51585f7b1b152630ef17fd3579"},{url:"basic/markdown/demo/index.html",revision:"57bd4e47de1f47a85c9bcc319c6a9f56"},{url:"basic/markdown/emoji/index.html",revision:"8c48ba8642740b9506331b674289f642"},{url:"basic/markdown/emoji/nature/index.html",revision:"1693963b402d86887214ba865580d440"},{url:"basic/markdown/emoji/object/index.html",revision:"1143cb862f37114da02b04edda830169"},{url:"basic/markdown/emoji/people/index.html",revision:"1945fa87caab1f118f498ebe1b86d020"},{url:"basic/markdown/emoji/place/index.html",revision:"f0ad3e34e8425d7cd6046a94f36bac32"},{url:"basic/markdown/emoji/symbol/index.html",revision:"7d0fd76302d0de969265479fbe42ad43"},{url:"basic/markdown/index.html",revision:"69c8f4fb7e081974d8570989bdbf3db6"},{url:"basic/vuepress/case/index.html",revision:"2bde7ad91a84f6c866d0c5ab9c85eaf3"},{url:"basic/vuepress/command/index.html",revision:"951ce7ba384cc8d3423ff9ef440a17db"},{url:"basic/vuepress/file/index.html",revision:"513479f28c3678ef44c66ca9072d0b26"},{url:"basic/vuepress/index.html",revision:"54da435afa6016857802f95eede59d36"},{url:"basic/vuepress/plugin/index.html",revision:"a7e10e2b395e54f056ea47aebea2705b"},{url:"basic/vuepress/theme/index.html",revision:"77456077686ef0a253e713021b2891ed"},{url:"category/basic/index.html",revision:"31955ff2779ca0f8cfc62189927f8f24"},{url:"category/basic/page/2/index.html",revision:"7c9ac84b536e9ba742b8c5151b07c1b9"},{url:"category/basic/page/3/index.html",revision:"fcee6e6d9f9bffdc313d14d89cd94043"},{url:"category/config/index.html",revision:"1711cb78e519f8a2b788bc422fdbf3a5"},{url:"category/config/page/2/index.html",revision:"4738add8fe15745af335b03408c7fb8d"},{url:"category/config/page/3/index.html",revision:"34e1656bd38f4282d62f579cda7bf388"},{url:"category/demo/index.html",revision:"ca0ff4456e8c20472895857c88bd8539"},{url:"category/FAQ/index.html",revision:"0a3f1b088e597efacca8d1981260f12b"},{url:"category/feature/index.html",revision:"1629f76b5488a399872325803e88cdc9"},{url:"category/feature/page/2/index.html",revision:"4fa631f808edf7965b2c3df2837556b3"},{url:"category/index.html",revision:"aa78357211df4b42de7b1b223b3644e0"},{url:"category/instruction/index.html",revision:"6f77fac514bd26aea1e9ffd2850867b6"},{url:"category/layout/index.html",revision:"e9637b4a6c54c1e611b76e038700008f"},{url:"category/layout/page/2/index.html",revision:"769c8ebdf81f99f712048ace5b9e03c0"},{url:"category/markdown/index.html",revision:"9c35b53e843760ae6c209c83679508ce"},{url:"config/index.html",revision:"8dab41866f13d84d344d52ba13b41eb0"},{url:"config/page/index.html",revision:"18fa3f8da63f4ad25cdccf6abee40e9f"},{url:"config/plugin/container/index.html",revision:"cda0b5de823490f49016cb8a4cfe1947"},{url:"config/plugin/copyright/index.html",revision:"35ba27358362457593d9c8920c07fdcd"},{url:"config/plugin/index.html",revision:"623528d6d8bb8c0bacbc6d677b3c1f4b"},{url:"config/plugin/last-update/index.html",revision:"8a1974a101aacd451bd69f6b84d51b3a"},{url:"config/plugin/photo-swipe/index.html",revision:"7225de02c88d99295c32990b71a55fe8"},{url:"config/plugin/pwa/index.html",revision:"f9a47757953db2aea28c1a47cf4a8651"},{url:"config/plugin/reading-time/index.html",revision:"57647f0e9d126e3ae388f06852ae40c3"},{url:"config/plugin/seo/index.html",revision:"53118f4c48b82954f5584c2919453ac6"},{url:"config/plugin/sitemap/index.html",revision:"f38c94297bcc4b9e0fdd24f4ee90960c"},{url:"config/stylus/index.html",revision:"781358caffac55e47f9250dd23fde7a0"},{url:"config/themeConfig/index.html",revision:"d6d05c36e62faa54953a66feb1ac1441"},{url:"demo/index.html",revision:"62ce01521758428d9a544c2d86ff0837"},{url:"en/basic/index.html",revision:"a221004a34e13634d7c668bb2f8c54d6"},{url:"en/basic/markdown/demo/index.html",revision:"3915e4005b4e79c4db4dd447bfde3b3e"},{url:"en/basic/markdown/emoji/index.html",revision:"49dff7ae5eedc856478687d45ee51242"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"832675c960bcecc1e79d4168b12e1142"},{url:"en/basic/markdown/emoji/object/index.html",revision:"f86294774f91198b5c735539186be157"},{url:"en/basic/markdown/emoji/people/index.html",revision:"85a2f3a6e0a78e74258c6ab61ccdd709"},{url:"en/basic/markdown/emoji/place/index.html",revision:"f5f8b9c8c66efbf88555dc2b1f8bd505"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"38705adf7954e9fd6c4ded7b604237ef"},{url:"en/basic/markdown/index.html",revision:"34da6cd108ee961f59366dac9aa79689"},{url:"en/basic/vuepress/case/index.html",revision:"7598319c12ed8271545e984c25d740e6"},{url:"en/basic/vuepress/command/index.html",revision:"a9c670b21363b5c35dad0a66f19c96b9"},{url:"en/basic/vuepress/file/index.html",revision:"06d9ff604cfb6f5ee83d273e74a4c460"},{url:"en/basic/vuepress/index.html",revision:"1a9b1d3c414d68fb35bcfca9128e5742"},{url:"en/basic/vuepress/plugin/index.html",revision:"3299f7feaa6d7376a13116821e539187"},{url:"en/basic/vuepress/theme/index.html",revision:"f519769ce99797c9cf745eb9c8ff0bfe"},{url:"en/config/index.html",revision:"c3530d0a59ee1bd4904012111cbe7763"},{url:"en/config/page/index.html",revision:"65a4d072b9273116c5a3784967f75d9d"},{url:"en/config/plugin/container/index.html",revision:"82852ea6e6efb9a33d66240c4e1fdebb"},{url:"en/config/plugin/copyright/index.html",revision:"a71b598286eee6156d4a58870796e123"},{url:"en/config/plugin/index.html",revision:"c079992c1e67eaed423a6b410cd63b93"},{url:"en/config/plugin/last-update/index.html",revision:"59b3e11c23fa7119556d4e4ddc5f1e67"},{url:"en/config/plugin/photo-swipe/index.html",revision:"aaea641a662e8fff57822b15e9450510"},{url:"en/config/plugin/pwa/index.html",revision:"c3a005128e677a91fa01cbe6bfad7c85"},{url:"en/config/plugin/reading-time/index.html",revision:"0a37baa8fe935ad994e895e5435d6ddb"},{url:"en/config/plugin/seo/index.html",revision:"0ae6c2a43a75647677871cde34ce04e1"},{url:"en/config/plugin/sitemap/index.html",revision:"0431b51e64bc01b6f24203af2c264c43"},{url:"en/config/stylus/index.html",revision:"de3fa05eb91bddea40d62c6de1321dab"},{url:"en/config/themeConfig/index.html",revision:"ddd0fc3a748976db7fda16c262930ce5"},{url:"en/demo/index.html",revision:"ce571a8571a2eb1a1f600fc6d0966278"},{url:"en/FAQ/index.html",revision:"f2341d5fbd86daab8ece6e0892a89c2e"},{url:"en/guide/feature/blog/index.html",revision:"58c75ae37616960828569c5e23b92cc9"},{url:"en/guide/feature/comment/index.html",revision:"dcb28bc09c4171c21a58ee5a6a41944b"},{url:"en/guide/feature/component/index.html",revision:"a950641274cda98e3660617c5ceafa74"},{url:"en/guide/feature/encrypt/index.html",revision:"a6fddc59c2952134ecb8c4de1146d373"},{url:"en/guide/feature/index.html",revision:"a8d615d032bd07890605eae68b27a7e7"},{url:"en/guide/feature/markdown/align/index.html",revision:"9a61444009e1863720f003bd5d881c13"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"6d019e74701fa1505b2861883fab2599"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"f72acf4ed812826f4e725399557d9dec"},{url:"en/guide/feature/markdown/index.html",revision:"fd99dca573da18a364079f7be8c10304"},{url:"en/guide/feature/markdown/mark/index.html",revision:"eccf107decca250ed30d64b6e2619c73"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"dfbc5d9109c0d07bb5ee326dda0f1454"},{url:"en/guide/feature/markdown/tex/index.html",revision:"1d5bdc8675b8e63913c9c4fdf8e11b52"},{url:"en/guide/feature/page-info/index.html",revision:"4ac954e5c42c76aa32e9a468ab2a88b0"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"da92e8ea3a101f085fcc2aa1b816243b"},{url:"en/guide/feature/theme/index.html",revision:"04d1b666e491612c1812f89f7d885ac4"},{url:"en/guide/feature/typescript/index.html",revision:"bdd025dc87f215c49c5a13ee8cd54cbf"},{url:"en/guide/index.html",revision:"9ed17eb5b4ae79fbc09d83765ce8bf5e"},{url:"en/guide/install/index.html",revision:"f84c3dcae9b3ebe582a571b0589e4c6c"},{url:"en/guide/layout/blog/index.html",revision:"9c003c53f61f6e1d2eb1f2c37a713b1b"},{url:"en/guide/layout/home/index.html",revision:"935e14b657523f550d93311fd11b1f91"},{url:"en/guide/layout/index.html",revision:"c79fab41452fe05e731b0bc21cdf5dbd"},{url:"en/guide/layout/navbar/index.html",revision:"c79f2ffe4d5f6963314573a60d3db8ef"},{url:"en/guide/layout/page/index.html",revision:"9484a829a5f06e8cf6b2fd6899d78c55"},{url:"en/guide/layout/sidebar/index.html",revision:"4f04542db67551b0988ae9207e26786c"},{url:"en/index.html",revision:"91193b39b942ca942c06e91e5b4a077c"},{url:"FAQ/index.html",revision:"62f712b2ca25cb202b94becb1583b0d8"},{url:"guide/feature/blog/index.html",revision:"2cf372322e76ac48e6e3c243b644ac06"},{url:"guide/feature/comment/index.html",revision:"438dceef79ead0a0ac0eb8d6b2fc2c60"},{url:"guide/feature/component/index.html",revision:"76eaa23c77a88dc19329b4bf6c8f4b09"},{url:"guide/feature/encrypt/index.html",revision:"3bbc16cafcb7c640b3b08b9ad0e7dea8"},{url:"guide/feature/index.html",revision:"f867e603b8a3c38073f6ddef06a7e8e4"},{url:"guide/feature/markdown/align/index.html",revision:"3a713375311e48371823157abef27b91"},{url:"guide/feature/markdown/flowchart/index.html",revision:"5b214bc839dff9eb40cd2a4066265dcd"},{url:"guide/feature/markdown/footnote/index.html",revision:"297f0c279dafe25f9e3ca704e91178a5"},{url:"guide/feature/markdown/index.html",revision:"39802aa459b6084d6c553ccc89404a1f"},{url:"guide/feature/markdown/mark/index.html",revision:"a9cababf9c5552177416fe5e02600d96"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"a3aa41ad30959341c5b04dd1def03c2a"},{url:"guide/feature/markdown/tex/index.html",revision:"2bb85843452b68d8a6e27fe81e623ee3"},{url:"guide/feature/page-info/index.html",revision:"fdd54c4a57664da908204a3cea7da479"},{url:"guide/feature/seoAndSitemap/index.html",revision:"1102d8a6279ff5560fac82e8d4eee31a"},{url:"guide/feature/theme/index.html",revision:"38d36009b983e673b98af51ac79b3b94"},{url:"guide/feature/typescript/index.html",revision:"8ae85f25da591d4bcf2c1cbb8d18ec18"},{url:"guide/index.html",revision:"32e0ccb287f7a892a5a01a84493ff05d"},{url:"guide/install/index.html",revision:"855430df6dac790a00234d440deb663d"},{url:"guide/layout/blog/index.html",revision:"152c060492b4fe3ddf1546b48fd5bfd3"},{url:"guide/layout/home/index.html",revision:"5d0f8df71e44997de25ae0f4388b8dd4"},{url:"guide/layout/index.html",revision:"e3d587a9830299a79b65ff7244634829"},{url:"guide/layout/navbar/index.html",revision:"27eb8ae80555a2a029384f6750d5a3ea"},{url:"guide/layout/page/index.html",revision:"caf11dd4f22b8ce79663f0a41a8889cb"},{url:"guide/layout/sidebar/index.html",revision:"c98fbd4916e09fa4aafdfb840d1541f6"},{url:"index.html",revision:"8163edf221144715e8023b4a7d2d81aa"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"194540e79b0a182b4cbe9b7159180bd1"},{url:"tag/comment/index.html",revision:"9071d15a16a728774e69168703d49cb9"},{url:"tag/components/index.html",revision:"32e8e55e0d85c9fa891ab95890bcdcca"},{url:"tag/config/index.html",revision:"c1d70bf2626c2ab911e3dc16008f8934"},{url:"tag/config/page/2/index.html",revision:"20912774bc805e94b0763d2c8bc6a7e6"},{url:"tag/config/page/3/index.html",revision:"425d8d89c969053b6521fc5f5446fb7a"},{url:"tag/emoji/index.html",revision:"c4b65c4624e1ee2d18ef16163c5d1cf8"},{url:"tag/emoji/page/2/index.html",revision:"3f14acb1c34b376887fad12dfa91f353"},{url:"tag/encrypt/index.html",revision:"ce501c1045c1b2750179e251ec6471b6"},{url:"tag/feature/index.html",revision:"dff16eb1524e919965debf6130e5b04a"},{url:"tag/feature/page/2/index.html",revision:"8cdc48c9c20b9e4c788f8fa99fb67256"},{url:"tag/frontmatter/index.html",revision:"58f012e1b15aa98cae602330c134426c"},{url:"tag/function/index.html",revision:"e514d558b663d005ac7b0ffb410e8aa6"},{url:"tag/function/page/2/index.html",revision:"0f3751e2d7ff3690f98ac471d1652ed0"},{url:"tag/home/index.html",revision:"3cae882153f5cbed623d7822bb2780a3"},{url:"tag/index.html",revision:"3834c10c42fa0ebae081c63d8352b98d"},{url:"tag/intro/index.html",revision:"56462d0963b4113e3b383c117829d568"},{url:"tag/layout/index.html",revision:"114705a015c3e5100270c5400a934f7a"},{url:"tag/layout/page/2/index.html",revision:"27a185c2ad38c2375f3c914b49bae099"},{url:"tag/markdown/index.html",revision:"b5bc78cf2d6d57bc0aa0033aa374a92b"},{url:"tag/markdown/page/2/index.html",revision:"3350ab64e602417ba8c40f6d06d9cc9c"},{url:"tag/markdown/page/3/index.html",revision:"54e3c7984c759edc8560a6540c022263"},{url:"tag/navbar/index.html",revision:"a14cc8bdb1fab1343a790c7fa403c232"},{url:"tag/page-info/index.html",revision:"a8593ddc616f83608a41018de1090921"},{url:"tag/plugin/index.html",revision:"19ced5812f8fbdd292e8b8cd10a8b8a1"},{url:"tag/plugin/page/2/index.html",revision:"2f5be84db6102a397e454faef5fa8749"},{url:"tag/seo/index.html",revision:"3d6b2f2e8f183f764bc4addef20ea865"},{url:"tag/sidebar/index.html",revision:"cf5351ee18d58ac3d61f76c6dfc59556"},{url:"tag/sitemap/index.html",revision:"74a032a45cfc5e81a646ab4bdfbbef5d"},{url:"tag/style/index.html",revision:"4fa55adc2c0ab3f93f4d630d59e65c1e"},{url:"tag/themeConfig/index.html",revision:"bfcd1a81e6692711841a7237aa778a88"},{url:"tag/typescript/index.html",revision:"123de78fdda12de717b84dc4c1ed1be9"},{url:"tag/vuepress/index.html",revision:"19696beecd9f07ddd90db7715cd1b5dc"},{url:"tag/vuepress/page/2/index.html",revision:"0f4e82b9eeb30f3ae7231ad961cea6d6"},{url:"timeline/index.html",revision:"adaacb10ba0c0b491d46cb169a95ed65"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
