interface Person {
  name: string;
  // sss
  age: number;
  [propName: string | number]: string | number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};
