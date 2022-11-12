let array = ["2022-9-6 12:12:12", "2022-9-7 12:12:12", "2022-9-8 12:12:12"]

let newArray = array.sort((before, after) => {
  console.log(before, after)
  let beforeDate = new Date(before)
  let afterDate = new Date(after)
  console.log(beforeDate, afterDate)
  // console.log(new Date(before) < new Date(after))
  // console.log(new Date(before) > new Date(after))
  console.log(beforeDate - afterDate)
  console.log(afterDate - beforeDate)

  return afterDate - beforeDate
})
console.log(array)
console.log(newArray)

