(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(a,v,e){"use strict";e.r(v);var _=e(42),t=Object(_.a)({},(function(){var a=this,v=a.$createElement,e=a._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h4",{attrs:{id:"css兼容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css兼容"}},[a._v("#")]),a._v(" css兼容")]),a._v(" "),e("h4",{attrs:{id:"问题一-不同浏览器的标签默认的外补丁和内补丁不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题一-不同浏览器的标签默认的外补丁和内补丁不同"}},[a._v("#")]),a._v(" 问题一：不同浏览器的标签默认的外补丁和内补丁不同")]),a._v(" "),e("p",[a._v("问题症状：随便写几个标签，不加样式控制的情况下，各自的"),e("code",[a._v("margin")]),a._v("和"),e("code",[a._v("padding")]),a._v("差异较大。"),e("br"),a._v("\n碰到频率: 100%"),e("br"),a._v("\n解决方案："),e("br"),a._v("\n1、css里 "),e("code",[a._v("*{margin:0;padding:0;}")]),a._v(" （性能不好，不推荐）"),e("br"),a._v("\n2、引入"),e("code",[a._v("reset.css")]),a._v("样式重置 （推荐使用）"),e("br"),a._v("\n备注：这个是最常见的也是最易解决的一个浏览器兼容性问题，所有的CSS文件开头都会用样式重置各个标签的内外补丁是0。")]),a._v(" "),e("h4",{attrs:{id:"问题二-css3新属性-加浏览器前缀兼容早期浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题二-css3新属性-加浏览器前缀兼容早期浏览器"}},[a._v("#")]),a._v(" 问题二：css3新属性，加浏览器前缀兼容早期浏览器")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-moz- // 火狐浏览器 \n-webkit- // Safari, 谷歌浏览器等使用Webkit引擎的浏览器 \n-o- // Opera浏览器(早期) \n-ms- // IE \n")])])]),e("h4",{attrs:{id:"问题三-块属性标签float后-又有横行的margin情况下-在ie6显示margin比设置的大"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题三-块属性标签float后-又有横行的margin情况下-在ie6显示margin比设置的大"}},[a._v("#")]),a._v(" 问题三：块属性标签"),e("code",[a._v("float")]),a._v("后，又有横行的"),e("code",[a._v("margin")]),a._v("情况下，在IE6显示"),e("code",[a._v("margin")]),a._v("比设置的大")]),a._v(" "),e("p",[a._v("问题症状:常见症状是IE6中后面的一块被顶到下一行"),e("br"),a._v("\n碰到频率：90%（稍微复杂点的页面都会碰到，"),e("code",[a._v("float")]),a._v("布局最常见的浏览器兼容问题）"),e("br"),a._v("\n解决方案：在"),e("code",[a._v("float")]),a._v("的标签样式控制中加入 "),e("code",[a._v("display:inline;")]),a._v("将其转化为行内属性"),e("br"),a._v("\n备注：我们最常用的就是"),e("code",[a._v("div+css")]),a._v("布局了，而div就是个典型的块属性标签，横向布局的时候我们通常都是用"),e("code",[a._v("div")]),a._v(" "),e("code",[a._v("float")]),a._v("实现的，横向的间距设置如果用"),e("code",[a._v("margin")]),a._v("实现，这是个必然会碰到的兼容性问题。")]),a._v(" "),e("h4",{attrs:{id:"问题四-设置较小高度标签-一般小于10px-在ie6-ie7-遨游中高度超出自己设置高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题四-设置较小高度标签-一般小于10px-在ie6-ie7-遨游中高度超出自己设置高度"}},[a._v("#")]),a._v(" 问题四：设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度")]),a._v(" "),e("p",[a._v("问题症状：IE6、IE7和遨游里这个标签的高度不受控制，超出自己设置的高度"),e("br"),a._v("\n碰到频率：60%"),e("br"),a._v("\n解决方案：给超出高度的标签设置"),e("code",[a._v("overflow:hidden;")]),a._v("或者设置行高"),e("code",[a._v("line-height")]),a._v(" 小于你设置的高度。\n备注：这一般出现在我们设置小圆角背景的标签里。出现这个问题的原因是IE8之前的浏览器都会给标签一个最小默认的行高的高度。即使你的标签是空的，这个标签的高度还是会达到默认的行高。")]),a._v(" "),e("h4",{attrs:{id:"问题五-行内属性标签-设置display-block后采用float布局-又有横行的margin的情况-ie6间距bug-类似第二种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题五-行内属性标签-设置display-block后采用float布局-又有横行的margin的情况-ie6间距bug-类似第二种"}},[a._v("#")]),a._v(" 问题五：行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug（类似第二种）")]),a._v(" "),e("p",[a._v("问题症状：IE6里的间距比超过设置的间距")]),a._v(" "),e("p",[a._v("碰到几率：20%")]),a._v(" "),e("p",[a._v("解决方案：在display:block;后面加入display:inline;display:table;")]),a._v(" "),e("p",[a._v("备注：行内属性标签，为设置宽高，我们需要设置display:block;(除input标签比较特殊)。在用float布局并有横向的margin后，在IE6下，他就具有了块属性float后的横向margin的bug。不过因它本身就是行内属性标签，所以我们再加上display:inline的话，它的高宽就不可设了。这时候我们还需要在display:inline后面加入display:talbe。")]),a._v(" "),e("h4",{attrs:{id:"问题六-图片默认有间距"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题六-图片默认有间距"}},[a._v("#")]),a._v(" 问题六：图片默认有间距")]),a._v(" "),e("p",[a._v("问题症状：几个"),e("code",[a._v("img")]),a._v("标签放在一起的时候，有些浏览器会有默认的间距，加上问题一中提到的通配符也不起作用。"),e("br"),a._v("\n碰到几率：20%"),e("br"),a._v("\n解决方案：使用"),e("code",[a._v("float")]),a._v("属性为"),e("code",[a._v("img")]),a._v("布局"),e("br"),a._v("\n备注：因"),e("code",[a._v("img")]),a._v("标签是行内属性标签，所以只要不超出容器宽度，"),e("code",[a._v("img")]),a._v("标签都会排在一行里，但是部分浏览器的"),e("code",[a._v("img")]),a._v("标签之间会有个间距。去掉这个间距使用"),e("code",[a._v("float")]),a._v("是王道")]),a._v(" "),e("h4",{attrs:{id:"问题七-标签最低高度设置min-height不兼容-ie6下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题七-标签最低高度设置min-height不兼容-ie6下"}},[a._v("#")]),a._v(" 问题七：标签最低高度设置"),e("code",[a._v("min-height")]),a._v("不兼容 （IE6下）")]),a._v(" "),e("p",[a._v("问题症状：因为"),e("code",[a._v("min-height")]),a._v("本身就是一个不兼容的"),e("code",[a._v("css")]),a._v("属性，所以设置"),e("code",[a._v("min-height")]),a._v("时不能很好的被各个浏览器兼容"),e("br"),a._v("\n碰到几率：5%"),e("br"),a._v("\n解决方案：如果我们要设置一个标签的最小高度200px，需要进行的设置为：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{min-height:200px; height:auto !important; height:200px; overflow:visible;}\n")])])]),e("p",[a._v("备注：在B/S系统前端开时，有很多情况下我们有这种需求。当内容小于一个值（如300px）时。容器高度为300px；当内容高度大于这个值时，容器高度被撑高，而不是出现滚动条。这时候我们就会面临这个兼容性问题。")]),a._v(" "),e("h4",{attrs:{id:"问题八-超链接访问过后hover样式就不出现的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题八-超链接访问过后hover样式就不出现的问题"}},[a._v("#")]),a._v(" 问题八： 超链接访问过后"),e("code",[a._v("hover")]),a._v("样式就不出现的问题")]),a._v(" "),e("p",[a._v("问题症状：被点击访问过的超链接样式不在具有"),e("code",[a._v("hover")]),a._v("和"),e("code",[a._v("active")]),a._v("了"),e("br"),a._v("\n解决方案：改变CSS属性的排列顺序: L-V-H-A")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<style type="text/css">\n    a:link {}\n    a:visited {}\n    a:hover {}\n    a:active {}\n</style>\n')])])]),e("h4",{attrs:{id:"问题九-css-hack解决浏览器兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题九-css-hack解决浏览器兼容性"}},[a._v("#")]),a._v(" 问题九："),e("code",[a._v("css")]),a._v(" "),e("code",[a._v("hack")]),a._v("解决浏览器兼容性")]),a._v(" "),e("p",[a._v("主要针对IE的不同版本，不同的浏览器的写法不同。 "),e("code",[a._v("css")]),a._v(" "),e("code",[a._v("hack")]),a._v("本身就是处理浏览器兼容的。")]),a._v(" "),e("p",[a._v("举例写法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("background-color:yellow0; 0 是留给ie8的\n+background-color:pink;   + ie7定了；\n_background-color:orange; _专门留给神奇的ie6；\n")])])]),e("p",[a._v("深入了解看css hack")])])}),[],!1,null,null,null);v.default=t.exports}}]);