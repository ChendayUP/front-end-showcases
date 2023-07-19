// Pick<T, K> ==> 从类型 T 中选出属性 K，构造成一个新的类型。
// 前置知识：type 的作用就是给类型起一个新名字，支持基本类型、联合类型、元组及其他任何你需要的手写类型，常用于联合类型，与接口一样，用来描述对象或函数的类型。
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface User {
  name: string,
  age: number,
  address: string,
  phone: string
}


type personType = MyPick<User, 'name' | 'age'>

const person: personType = {
  name: 'username',
  age: 20,
}