// (typeof array)[number] 获取数组的类型, 有没有内置函数可以使用??
function uniq1(array: Array<string | symbol | number>) {
  return array.filter(function filter(this: Record<(typeof array)[number], boolean> , element) {
    console.log(element, this)
    let result:boolean = element in this ? false : (this[element] = true);
    console.log('result', result)
    return result
  }, Object.create(null));
}
// this 类型有问题
function uniq2(array: Array<string | symbol | number>) {
  return array.filter(function filter(this: PropertyKey[], element) {
    return element in this ? false : ((this as any)[element] = true);
  }, Object.create(null));
}

let array1 = [1,2,33,55,444,55,66,66,] 
console.log(uniq1(array1))

let array2 = [1,2,33,55,444,55,66,66,] 
console.log(uniq2(array2))