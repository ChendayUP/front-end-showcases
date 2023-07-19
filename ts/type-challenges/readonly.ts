// Readonly 是 TypeScript 内置的一个类型操作符，它用于将某个类型中每个属性设置为只读属性，这表示这些属性的值不能被修改。
type myReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type RUser ={
  name: string, 
  age: number
}

type RUserType = myReadonly<RUser>

const ruser: RUserType = {
  name: 'sss',
  age: 100
}
ruser.name = '23423'
ruser.age = 23423