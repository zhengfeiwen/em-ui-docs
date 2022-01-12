<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>当<code>el-table</code>元素中注入<code>data</code>对象数组后，在<code>el-table-column</code>中用<code>prop</code>属性来对应对象中的键名即可填入数据，用<code>label</code>属性来定义表格的列名。可以使用<code>width</code>属性来定义列宽</p>
        <template v-slot:source>
          <demo-default></demo-default>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        <p><code>stripe</code>属性可以创建带斑马纹的表格。它接受一个<code>Boolean</code>，默认为<code>false</code>，设置为<code>true</code>即为启用。</p>
        <template v-slot:source>
          <demo1></demo1>
        </template>
        <template v-slot:highlight>
          <demo1-md></demo1-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo2>
      <demo-block>
        <p>默认情况下，<code>Table</code> 组件是不具有竖直方向的边框的，如果需要，可以使用<code>border</code>属性，它接受一个<code>Boolean</code>，设置为<code>true</code>即可启用。</p>
        <template v-slot:source>
          <demo2></demo2>
        </template>
        <template v-slot:highlight>
          <demo2-md></demo2-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo3>
      <demo-block>
        <p>可以通过指定 <code>Table</code> 组件的 <code>row-class-name</code> 属性来为 <code>Table</code> 中的某一行添加 <code>class</code>，表明该行处于某种状态。</p>
        <template v-slot:source>
          <demo3></demo3>
        </template>
        <template v-slot:highlight>
          <demo3-md></demo3-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo4>
      <demo-block>
        <p>只要在<code>el-table</code>元素中定义了<code>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
        <template v-slot:source>
          <demo4></demo4>
        </template>
        <template v-slot:highlight>
          <demo4-md></demo4-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo5>
      <demo-block>
        <p>固定列需要使用<code>fixed</code>属性，它接受 <code>Boolean</code> 值或者<code>leftright</code>，表示左边固定还是右边固定。</p>
        <template v-slot:source>
          <demo5></demo5>
        </template>
        <template v-slot:highlight>
          <demo5-md></demo5-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo6>
        <demo-block>
          <p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
          <template v-slot:source>
            <demo6></demo6>
          </template>
          <template v-slot:highlight>
            <demo6-md></demo6-md>
          </template>
        </demo-block>
      </template>
    <template v-slot:demo7>
      <demo-block>
        <p>通过设置<code>max-height</code>属性为 <code>Table</code> 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p>
        <template v-slot:source>
          <demo7></demo7>
        </template>
        <template v-slot:highlight>
          <demo7-md></demo7-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo8>
      <demo-block>
        <p>只需要在 <code>el-table-column</code> 里面嵌套 <code>el-table-column</code>，就可以实现多级表头。</p>
        <template v-slot:source>
          <demo8></demo8>
        </template>
        <template v-slot:highlight>
          <demo8-md></demo8-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo9>
      <demo-block>
        <p><code>Table</code> 组件提供了单选的支持，只需要配置<code>highlight-current-row</code>属性即可实现单选。之后由<code>current-change</code>事件来管理选中时触发的事件，它会传入<code>currentRow</code>，<code>oldCurrentRow</code>。如果需要显示索引，可以增加一列<code>el-table-column</code>，设置<code>type</code>属性为<code>index</code>即可显示从 <code>1</code> 开始的索引号。</p>
        <template v-slot:source>
          <demo9></demo9>
        </template>
        <template v-slot:highlight>
          <demo9-md></demo9-md>
        </template>
      </demo-block>
    </template>
   <template v-slot:demo10>
      <demo-block>
        <p>实现多选非常简单: 手动添加一个<code>el-table-column</code>，设<code>type</code>属性为<code>selection</code>即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用<code>show-overflow-tooltip</code>属性，它接受一个<code>Boolean</code>，为<code>true</code>时多余的内容会在 <code>hover</code> 时以 <code>tooltip</code> 的形式显示出来。</p>
        <template v-slot:source>
          <demo10></demo10>
        </template>
        <template v-slot:highlight>
          <demo10-md></demo10-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo11>
      <demo-block>
        <p>在列中设置<code>sortable</code>属性即可实现以该列为基准的排序，接受一个<code>Boolean</code>，默认为<code>false</code>。可以通过 <code>Table</code> 的<code>default-sort</code>属性设置默认的排序列和排序顺序。可以使用<code>sort-method</code>或者<code>sort-by</code>使用自定义的排序规则。如果需要后端排序，需将<code>sortable</code>设置为<code>custom</code>，同时在 <code>Table</code> 上监听<code>sort-change</code>事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了<code>formatter</code>属性，它用于格式化指定列的值，接受一个<code>Function</code>，会传入两个参数：<code>row</code>和<code>column</code>，可以根据自己的需求进行处理。</p>
        <template v-slot:source>
          <demo11></demo11>
        </template>
        <template v-slot:highlight>
          <demo11-md></demo11-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo12>
      <demo-block>
        <p>在列中设置<code>filtersfilter-method</code>属性即可开启该列的筛选，<code>filters</code> 是一个数组，<code>filter-method</code>是一个方法，它用于决定某些数据是否显示，会传入三个参数：<code>value</code>, <code>row</code> 和 <code>column</code>。</p>
        <template v-slot:source>
          <demo12></demo12>
        </template>
        <template v-slot:highlight>
          <demo12-md></demo12-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo13>
      <demo-block>
        <p>通过 <code>Scoped</code> <code>slot</code> 可以获取到 <code>row</code>, <code>column</code>, <code>$index</code> 和 <code>store</code>（<code>table</code> 内部的状态管理）的数据，用法参考 <code>demo</code>。</p>
        <template v-slot:source>
          <demo13></demo13>
        </template>
        <template v-slot:highlight>
          <demo13-md></demo13-md>
        </template>
      </demo-block>
    </template>
   <template v-slot:demo14>
      <demo-block>
        <p>通过设置 <code>type="expand"</code> 和 <code>Scoped</code> <code>slot</code> 可以开启展开行功能 <code>el-table-column</code> 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 <code>Scoped</code> <code>slot</code> 相同。</p>
        <template v-slot:source>
          <demo14></demo14>
        </template>
        <template v-slot:highlight>
          <demo14-md></demo14-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo15>
      <demo-block>
        <p>支持树类型的数据的显示。当 <code>row</code> 中包含 <code>children</code> 字段时，被视为树形数据。渲染树形数据时，必须要指定<code>row-key</code>。支持子节点数据异步加载。设置<code>Table</code> 的<code>lazy</code> 属性为<code>true</code> 与加载函数 <code>load</code> 。通过指定 <code>row</code> 中的 <code>hasChildren</code> 字段来指定哪些行是包含子节点。<code>children</code> 与<code>hasChildren</code> 都可以通过 <code>tree-props</code> 配置。</p>
        <template v-slot:source>
          <demo15></demo15>
        </template>
        <template v-slot:highlight>
          <demo15-md></demo15-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo16>
      <demo-block>
        <p>通过设置 <code>Scoped slot</code> 来自定义表头。</p>
        <template v-slot:source>
          <demo16></demo16>
        </template>
        <template v-slot:highlight>
          <demo16-md></demo16-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo17>
      <demo-block>
        <p>将 <code>show-summary</code> 设置为 <code>true</code> 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过<code>sum-text</code>配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 <code>summary-method</code> 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
        <template v-slot:source>
          <demo17></demo17>
        </template>
        <template v-slot:highlight>
          <demo17-md></demo17-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo18>
      <demo-block>
        <p>通过给 <code>table</code> 传入 <code>span-method</code> 方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行 <code>row</code> 、当前列 <code>column</code> 、当前行号 <code>rowIndex</code> 、当前列号 <code>columnIndex</code> 四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表 <code>rowspan</code>，第二个元素代表 <code>colspan</code>。 也可以返回一个键名为 <code>rowspan</code> 和 <code>colspan</code> 的对象。</p>
        <template v-slot:source>
          <demo18></demo18>
        </template>
        <template v-slot:highlight>
          <demo18-md></demo18-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo19>
      <demo-block>
        <p>通过给 <code>type=index</code> 的列传入 <code>index</code> 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 <code>0</code> 开始）作为参数，返回值将作为索引展示。</p>
        <template v-slot:source>
          <demo19></demo19>
        </template>
        <template v-slot:highlight>
          <demo19-md></demo19-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo20>
      <demo-block>
        <p>结合使用列合并，懒加载，树形等综合应用</p>
        <template v-slot:source>
          <demo20></demo20>
        </template>
        <template v-slot:highlight>
          <demo20-md></demo20-md>
        </template>
      </demo-block>
    </template>
  </index-md>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import demoDefault from './default.vue'
import defaultMd from './default.md'
import demo1Md from './demo1.md'
import demo1 from './demo1.vue'
import demo2Md from './demo2.md'
import demo2 from './demo2.vue'
import demo3Md from './demo3.md'
import demo3 from './demo3.vue'
import demo4Md from './demo4.md'
import demo4 from './demo4.vue'
import demo5Md from './demo5.md'
import demo5 from './demo5.vue'
import demo6Md from './demo6.md'
import demo6 from './demo6.vue'
import demo7Md from './demo7.md'
import demo7 from './demo7.vue'
import demo8Md from './demo8.md'
import demo8 from './demo8.vue'
import demo9Md from './demo9.md'
import demo9 from './demo9.vue'
import demo10Md from './demo10.md'
import demo10 from './demo10.vue'
import demo11Md from './demo11.md'
import demo11 from './demo11.vue'
import demo12Md from './demo12.md'
import demo12 from './demo12.vue'
import demo13Md from './demo13.md'
import demo13 from './demo13.vue'
import demo14Md from './demo14.md'
import demo14 from './demo14.vue'
import demo15Md from './demo15.md'
import demo15 from './demo15.vue'
import demo16Md from './demo16.md'
import demo16 from './demo16.vue'
import demo17Md from './demo17.md'
import demo17 from './demo17.vue'
import demo18Md from './demo18.md'
import demo18 from './demo18.vue'
import demo19Md from './demo19.md'
import demo19 from './demo19.vue'
import demo20Md from './demo20.md'
import demo20 from './demo20.vue'
@Component({
  name: 'hs-table',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md,
    demo2,
    demo2Md,
    demo3,
    demo3Md,
    demo4,
    demo4Md,
    demo5,
    demo5Md,
    demo6,
    demo6Md,
    demo7,
    demo7Md,
    demo8,
    demo8Md,
    demo9,
    demo9Md,
    demo10,
    demo10Md,
    demo11,
    demo11Md,
    demo12,
    demo12Md,
    demo13,
    demo13Md,
    demo14,
    demo14Md,
    demo15,
    demo15Md,
    demo16,
    demo16Md,
    demo17,
    demo17Md,
    demo18,
    demo18Md,
    demo19,
    demo19Md,
    demo20,
    demo20Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>
