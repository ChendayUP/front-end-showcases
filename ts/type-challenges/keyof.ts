type ValueOf<T> = T[keyof T];
type S = {name: number, value: string}
type P = ValueOf<S>
let value: keyof S = 'name'
// ^? type keyof S = "name" | "value"
let value1: keyof S = 'value'
// let value3: keyof S = 'value1' error
let value2: P = 'name'

type U2O<U extends string> = {
  [key in U]: U2O<Exclude<U, key>>;
}

type O2T<O extends {}> = {} extends O ? [] : {
  [key in keyof O]: [key, ...O2T<O[key]>];
}[keyof O]

type InputUnion = keyof S
// ^? type InputUnion = "name" | "value"

type UnionOfPossibleTuples = O2T<U2O<InputUnion>>