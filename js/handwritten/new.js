// new 的实现方式
function mockNew(context) {
  // Constructor => animal，剩余的 arguments 就是其他的参数
  let Constructor = [].shift.call(arguments)
  let obj = {} //返回的结果
  obj.__proto__ = Constructor.prototype
  let r = Constructor.apply(obj, arguments)
  return r instanceof Object ? r : obj
}

// 测试一下：
function Animal(type) {
  this.type = type;
}

Animal.prototype.say = function () {
  console.log('say');
}

let animal = mockNew(Animal, '哺乳类');

console.log(animal.type); // 哺乳类
animal.say(); // say