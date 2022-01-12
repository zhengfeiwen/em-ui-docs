export const upload = (file: any, callback: Function, progress: Function) => {
  const formdata = new FormData()
  formdata.append('file', file)
  // 创建xhr，使用ajax进行文件上传
  const xhr = new XMLHttpRequest()
  xhr.open('post', 'http://192.168.0.123:3000/upload')
  // 回调
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback && callback(xhr.responseText)
    }
  }
  // 获取上传的进度
  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percent = event.loaded / event.total * 100
      progress && progress(percent)
    }
  }
  // 将formdata上传
  xhr.send(formdata)
}
