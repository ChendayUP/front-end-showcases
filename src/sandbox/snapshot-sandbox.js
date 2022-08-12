let window = {}
/**
 * 切换时将当前window的值复制到一个对象中保持
 */
class SnapshotSandBox {
  windowSnapshot = {}
  modifyPropsMap = {}
  active() {
    // 保存之前的window值
    for (const prop in window) {
      this.windowSnapshot[prop] = window[prop]
    }
    //
    Object.keys(this.modifyPropsMap).forEach((prop) => {
      window[prop] = this.modifyPropsMap[prop]
    })
  }
  inactive() {
    for (const prop in window) {
      if (window[prop] !== this.windowSnapshot[prop]) {
        this.modifyPropsMap[prop] = window[prop]
        window[prop] = this.windowSnapshot[prop]
      }
    }
  }
}
// 验证:
let snapshotSandBox = new SnapshotSandBox()
snapshotSandBox.active()
window.city = "1"
console.log("window.city-active:", window.city)
snapshotSandBox.inactive()
window.city = "2"
console.log("window.city-inactive:", window.city)
snapshotSandBox.active()
// window.city = "Beijing"
console.log("window.city-active:", window.city)
snapshotSandBox.inactive()
window.city = "1"
console.log("window.city-inactive:", window.city)
snapshotSandBox.active()
console.log("window.city-active:", window.city)
// snapshotSandBox.active()
// window.city = "Beijing"
// console.log("window.city-active:", window.city)
snapshotSandBox.inactive()
console.log("window.city-inactive:", window.city)

//输出：
//window.city-01: Beijing
//window.city-02: undefined
//window.city-03: Beijing
