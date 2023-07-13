// 给这个 zip 函数定义 ts 类型（两种写法）
// 函数声明, 函数声明类型
function zip(target:unknown[], source:unknown[]): unknown[] {
  if (!target.length || !source.length) return []
  const [one, ...rest1] = target
  const [two, ...rest2] = source
  return [[one, two], ...zip(rest1, rest2)]
}

console.log(JSON.stringify(zip([1, 2, 3], ['a', 'b', 'c']))) // [[1, 'a'], [2, 'b'], [3, 'c']]

// 声明匿名类型函数
// unknown[] 代表数组中的元素类型未知
// any 代表数组中的元素类型可以是任意类型
// unkwon 与 any 的区别是 unknown 不能赋值给其他类型
interface IZip {
  (target:unknown[], source:unknown[]): unknown[]
}

const zip2: IZip = (target, source) => {
  if (!target.length || !source.length) return []
  const [one, ...rest1] = target
  const [two, ...rest2] = source
  return [[one, two], ...zip2(rest1, rest2)]
}

console.log(JSON.stringify(zip2([1, 2, 3], ['a', 'b', 'c']))) // [[1, 'a'], [2, 'b'], [3, 'c']]