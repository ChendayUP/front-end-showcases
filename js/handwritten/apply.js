// apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入
// call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）
let window = {window: true}
Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          args.push('arr[' + i + ']');
      }
      let evalString = 'context.fn(' + args +')'
      console.log('evalString ', evalString)
      var result = eval(evalString);
  }

  delete context.fn
  return result;
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
      value: this.value,
      name: name,
      age: age
  }
}

console.log(bar.apply(null)) // 2

console.log(bar.apply(obj, ['kevin', 18]));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
