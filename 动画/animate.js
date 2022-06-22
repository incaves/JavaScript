function animate(obj, target, time, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(() => {
    // 计算步长
    var step = Math.ceil((target - obj.offsetLeft) / 10)
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      // 回调函数
      if (callback) {
        callback()
      }
    }
    obj.style.left = obj.offsetLeft + step + 'px'
  }, time)
}
