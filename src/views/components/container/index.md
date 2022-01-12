#HsContainer
用于布局的容器组件，方便快速搭建页面的基本结构：

`<hs-container>`：外层容器。当子元素中包含 `<hs-header>` 或 `<hs-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<hs-header>`：顶栏容器。

`<hs-aside>`：侧边栏容器。

`<hs-main>`：主要区域容器。

`<hs-footer>`：底栏容器。

>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<hs-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<hs-container>`。

###常见页面布局
<slot name="default"></slot>

##综合应用
<slot name="demo1"></slot>