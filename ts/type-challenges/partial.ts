// Partial 是 TypeScript 内置的一个类型操作符，它用于将某个类型中每个属性设置为可选属性，这表示这些属性的值可以是 undefined 或者省略。
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type puser = {
  name: string,
  age: string
}

type optionUser = MyPartial<puser>