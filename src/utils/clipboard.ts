import Vue from 'vue'
import Clipboard from 'clipboard'

export const clipboardSuccess = () =>
  Vue.prototype.$message({
    message: '复制成功！！！',
    type: 'success',
    duration: 1500
  })

export const clipboardError = (message: string) =>
  Vue.prototype.$message({
    message: `复制失败:${message}`,
    type: 'error'
  })

export const handleClipboard = (text: string, event: MouseEvent) => {
  const clipboard = new Clipboard(event.target as Element, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError('复制失败')
    clipboard.destroy()
  });
  (clipboard as any).onClick(event)
}
