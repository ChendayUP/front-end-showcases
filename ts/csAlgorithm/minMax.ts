function solve(arr: number[], queries: number[]): number[] {
  // Write your code here
  const res: number[] = []
  queries.forEach(q => {
      let max = Math.max(...arr.slice(0, q))
      let min = max
      for (let i = q; i < arr.length; ++i) {
          if (arr[i] > max) 
              max = arr[i]
          else if (arr[i-q] === max)
              console.log(q)
              max = Math.max(...arr.slice(i-q+1, i+1))
          min = Math.min(min, max)
      }
      res.push(min)
  })
  return res
}

console.log(solve([33,11,44,11,55], [1,2,3,4,5]))