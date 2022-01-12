<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <el-tooltip content="复制代码" placement="top" class="copy-btn">
          <transition name="text-slide">
            <el-button
              size="small"
              circle
              type="primary"
              icon="el-icon-document-copy"
              class="control-button"
              @click.stop.prevent="handleCopy($event)">
            </el-button>
          </transition>
        </el-tooltip>
        <slot name="highlight" ref="highlight"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
import { stripScript, stripStyle, stripTemplate } from '@/utils/index'
import { handleClipboard, clipboardSuccess, clipboardError } from '@/utils/clipboard'
import './index.scss'

export default {
  name: 'DemoBlock',
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    }
  },
  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl = bottom > document.documentElement.clientHeight &&
         top + 44 <= document.documentElement.clientHeight
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
    },
    removeScrollHandler() {
      this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    },
    handleCopy(event) {
      try {
        const code = this.$slots.highlight[0].context.$children[0].$children[0].$children[2].$el.outerText
        if (!code) {
          clipboardError()
          return
        }
        handleClipboard(code, event)
        clipboardSuccess()
      } catch (e) {
        clipboardError(e)
      }
    },
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  },
  computed: {
    lang() {
      return 'zh-CN'
    },
    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path.split('/').pop()}`
    },
    iconClass() {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
        this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    }
  },
  created() {
    const highlight = this.$slots.highlight
    if (highlight && highlight[0]) {
      let code = ''
      let cur = highlight[0]
      if (cur.tag === 'pre' && (cur.children && cur.children[0])) {
        cur = cur.children[0]
        if (cur.tag === 'code') {
          code = cur.children[0].text
        }
      }
      if (code) {
        this.codepen.html = stripTemplate(code)
        this.codepen.script = stripScript(code)
        this.codepen.style = stripStyle(code)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const highlight = this.$el.getElementsByClassName('highlight')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%'
        highlight.borderRight = 'none'
      }
    })
  },
  beforeDestroy() {
    this.removeScrollHandler()
  }
}
</script>
