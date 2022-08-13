// apply接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入
// call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）
function f1() {
  console.log(1);
}

function f2() {
  console.log(2);
}

Function.prototype.call = function (context) {
  // 如果 context 存在，使用 context，如果 context 不存在，使用 window；如果 context 是普通类型，转成对象。
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for(let i = 1; i < arguments.length; i++) {
    args.push('arguments['+i+']');
  }

  let r = eval('context.fn('+args+')');
  delete context.fn;
  return r;
}

Function.prototype.apply = function (context, args) {
  // 如果 context 存在，使用 context，如果 context 不存在，使用 window；如果 context 是普通类型，转成对象。
  context = context ? Object(context) : window;
  context.fn = this;

  if(!args){
    return context.fn();
  }

  let r = eval('context.fn('+args+')');
  delete context.fn;
  return r;
}

// 让 f1 的 this 指向 f2，并且让 f1 执行
f1.call(f2);  // 1

// 如果多个 call，会让 call 方法执行，并把 call 中的 this 指向改变成 fn2
// f1.call.call(f2);