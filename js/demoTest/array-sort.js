let array = [1, 2, 3]

let newArray = array.sort(function(before, after) {
  console.log(before - after)
  console.log(after - before)
  return after - before
})
console.log(array)
console.log(newArray)

