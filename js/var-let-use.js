// function main() {
//   // console.log(a)
//   var a = 'log a'
//   let b = 'log b'
// }

// main()
// console.log(a)
// console.log(b)

var x = 1;
 
function foo() {
    x = 10;
    return; // 新加的代码
    var x = 2;
}
foo();
console.log(x); // => 1