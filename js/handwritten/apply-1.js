// apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入
// call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）
let window = {window: true}
Function.prototype.myApply = function (object, args) {
  let obj = object || window;	// 如果没有传this参数，this将指向window
  var fn = Symbol();       //  Symbol属性来确定fn唯一
  obj[fn] = this;				// 这里的this指向调用myCall的函数（代指a函数），同时将a函数的引用

  let result;
  if (Array.isArray(args)) {
    result = obj[fn](...args);  // a函数的引用调用，指向obj，也就是传入展开的对象
  } else {
    result = obj[fn](); // args不是数组, 不传入
  }

  delete obj[fn] // 不能增加obj的属性，所以要删除
  return result // 如果a函数有返回值这里就有返回值，如果a函数没有返回值，同样的这里也没有
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

console.log(bar.myApply(null)) // 2

console.log(bar.myApply(obj, ['kevin', 18]));
console.log(bar.myApply(obj));
// console.log(obj);

// console.log(bar.apply(obj, ['kevin', 18]))
// console.log(bar.myApply(obj, 'kevin', 18))
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
