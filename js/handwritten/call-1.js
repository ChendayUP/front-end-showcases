/********************** 方案一 **********************/
/**
 *@desc 描述
 *@param object [Object] 需要指向的对象
 */
let window = { window: true }
Function.prototype.myCall = function (object) {
  let obj = object || window // 如果没有传this参数，this将指向window
  var fn = Symbol() //  Symbol属性来确定fn唯一
  obj[fn] = this // 这里的this指向调用myCall的函数（代指a函数），同时将a函数的引用赋值给obj的fn属性。此时，当a函数调用的时候就是指向obj的了
  // (obj, "kevin", 18) arguments为 [obj, "kevin", 18]
  // [...arguments].slice(1) 就是 ["kevin", 18]

  // (obj, ["kevin", 18]) arguments为 [obj, ["kevin", 18]]
  // [...arguments].slice(1) 就是 [["kevin", 18]]
  let arg = [...arguments].slice(1) // 获取第二个及后面的所有参数(arg是一个数组)
  let result = obj[fn](...arg) // a函数的引用调用，指向obj，也就是传入的对象
  delete obj[fn] // 不能增加obj的属性，所以要删除
  return result // 如果a函数有返回值这里就有返回值，如果a函数没有返回值，同样的这里也没有
}

// 测试一下
var value = 2

var obj = {
  value: 1,
}

function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age,
  }
}

console.log(bar.myCall(null)) // 2

console.log(bar.myCall(obj, "kevin", 18)) // 
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }