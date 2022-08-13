type roles = 'tester' | 'developer' | 'manager'
const staffCount: Record<roles, number> = {
  tester: 10,
  developer: 20,
  manager: 1
}
type studentScore = {roles: number}
const staffCount2: studentScore = {
  roles: 10,
}

let obj: Obj = {
  name: '',
  age: ''
}
type Obj = {
  [key: string]: string
}
obj.name = ''

interface PropChangeHandler {
  [key: `${string}Changed`]: () => void;
}

let handlers: PropChangeHandler = {
  idChanged: () => {}, // Ok
  nameChanged: () => {}, // Ok
  // ageCha: () => {} // Error
};
