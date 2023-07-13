function outerFunc(obj) {
  return toName(obj)

  function toName(params) {
    return 'name is ' + params.name
  }
}

console.log(outerFunc({name: 'good'}))