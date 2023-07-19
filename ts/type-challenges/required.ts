// Required 是 TypeScript 内置的一个类型操作符，它用于将某个类型的所有可选属性都转换为必选属性。
type myRequired<T> = {
  [P in keyof T]-?: T[P]
}

type NotUser = {
  name?: string,
  age?: number
}

type RequireUser = myRequired<NotUser>

const requireUser: RequireUser = {
  name: 'user',
  age: 100
}