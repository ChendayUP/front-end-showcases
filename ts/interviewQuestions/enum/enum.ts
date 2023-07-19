enum Team {
  Alpha,
  Beta,
  Gamma =100,
  Delta,
}
let t: Team = Team.Alpha;
// 枚举默认第一个从0开始,  每一个值是前面的值 + 1, 可以显式给成员赋值

console.log(Team.Alpha); // 0
console.log(Team.Beta); // 1
console.log(Team.Gamma); // 100
console.log(Team.Delta); // 101

// 也可以使用字符串值创建枚举
enum Author {
  arry = "arry老师",
  andy = "andy老师"
};

console.log(Author.arry);
console.log(Author.andy);