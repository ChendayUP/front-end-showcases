function logged(constructor: Function) {
  console.log(constructor.name);
}

@logged
class Person {
  name: string;
  constructor(name: string) {
      this.name = name;
  }
}

// 输出: Person

type PersonType = string | number

interface PersonInterface {
  name: string
}

class newType implements PersonInterface {
  name = "2"; 
}

let res: PersonInterface = {
  name: "1"
}
