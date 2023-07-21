/********************** 方案二 **********************/
// apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入
// call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）
let window = { window: true }
Function.prototype.call2 = function (context) {
  var context = context || window
  context.fn = this

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]")
  }
  let evalString = "context.fn(" + args + ")"
  console.log("evalString ", evalString)
  var result = eval(evalString)

  delete context.fn
  return result
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

console.log(bar.call2(null)) // 2

console.log(bar.call2(obj, "kevin", 18))
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }