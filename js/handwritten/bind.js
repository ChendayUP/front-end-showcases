// bind() 方法创建一个新的函数，在 bind() 被调用时，
// 这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用

// 绑定函数也可以使用 new 运算符构造，它会表现为目标函数已经被构建完毕了似的。
// 提供的 this 值会被忽略，但前置参数仍会提供给模拟函数。
// https://www.cnblogs.com/echolun/p/12178655.html
let window = {window: true}
Function.prototype.bind_ = function (obj) {
  if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  };
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  //创建中介函数
  var fn_ = function () {};
  var bound = function () {
      var params = Array.prototype.slice.call(arguments);
      //通过constructor判断调用方式，为true this指向实例，否则为obj
      fn.apply(this.constructor === fn ? this : obj, args.concat(params));
      console.log(this);
  };
  fn_.prototype = fn.prototype;
  bound.prototype = new fn_();
  return bound;
};

var z = 0;
var obj = {
  z: 1
};

function fn(x, y) {
  this.name = '听风是风';
  console.log(this.z);
  console.log(x);
  console.log(y);
};
fn.prototype.age = 26;

var bound = fn.bind_(obj, 2);
var person = new bound(3); //undefined 2 3

console.log(person.name); //听风是风
console.log(person.age); //26
person.__proto__.age = 18;
var person = new fn();
console.log(person.age); //26

bound(3); //1
