// Exclude 是 TypeScript 的一种类型操作符，用于从类型 T 中排除掉指定的类型 K

type exclude<T, K> = T extends K ? never: T

interface user {
  name: string,
  age: number,
  address: string,
  phone: string
}

type person = exclude<keyof user, 'address' | 'phone'>
//  ^?
const persionValue : person = 'name'

type A = "a" | "b" | "c" | "d";
type B = "b" | "d" | "e" | "f";
type test = exclude<A, B>

const testValue: test = 'a'