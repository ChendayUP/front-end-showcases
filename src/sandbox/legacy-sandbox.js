let window = {}
/**
 * 记录当前添加和修改的变化
 * 切换时,添加的进行删除,修改的替换成原始值
 */
class LegacySandBox {
  addedPropsMapInSandbox = new Map()
  modifiedPropsOriginalValueMapInSandbox = new Map()
  currentUpdatedPropsValueMap = new Map()
  proxyWindowx
  setWindowProp(prop, value, toDelete = false) {
    if (value === undefined && toDelete) {
      delete window[prop]
    } else {
      window[prop] = value
    }
  }
  active() {
    this.currentUpdatedPropsValueMap.forEach((value, prop) =>
      this.setWindowProp(prop, value)
    )
  }
  inactive() {
    // 保存的原始值, 使用原始值进行替换修改后的值
    this.modifiedPropsOriginalValueMapInSandbox.forEach((value, prop) => {
      console.log("modifiedPropsOriginalValueMapInSandbox", value, prop)
      this.setWindowProp(prop, value)
    })
    this.addedPropsMapInSandbox.forEach((_, prop) => {
      console.log("addedPropsMapInSandbox", prop)
      this.setWindowProp(prop, undefined, true)
    })
  }
  constructor() {
    const fakeWindow = Object.create(null)
    this.proxyWindow = new Proxy(fakeWindow, {
      set: (target, prop, value, receiver) => {
        console.log("set", prop)
        console.log("set", target, value)
        console.log("set", receiver)

        // 原始值
        const originalVal = window[prop]

        if (!window.hasOwnProperty(prop)) {
          // 没有当前属性
          this.addedPropsMapInSandbox.set(prop, value)
        } else if (!this.modifiedPropsOriginalValueMapInSandbox.has(prop)) {
          // 有当前属性, 修改属性里面没有
          this.modifiedPropsOriginalValueMapInSandbox.set(prop, originalVal)
          // this.modifiedPropsOriginalValueMapInSandbox[prop] = originalVal;
        }
        this.currentUpdatedPropsValueMap.set(prop, value)
        window[prop] = value
      },
      get: (target, prop, receiver) => {
        console.log("get", target, prop)
        return target[prop]
      },
    })
  }
}
// 验证：
let legacySandBox = new LegacySandBox()
legacySandBox.active()
legacySandBox.proxyWindow.city = "Beijing"
console.log("window.city-01:", window.city)

legacySandBox.inactive()
console.log("window.city-02:", window.city)

legacySandBox.active()
console.log("window.city-03:", window.city)
legacySandBox.inactive()
console.log("window.city-04:", window.city)
legacySandBox.active()
console.log("window.city-05:", window.city)
// 输出：
// window.city-01: Beijing
// window.city-02: undefined
// window.city-03: Beijing
