// Omit 是 TypeScript 的一种类型操作符，用于从类型 T 中删去指定的属性 K。其定义为：

type MyOmit<T,K> = Pick<T, Exclude<keyof T, K>>
interface OPerson {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
}

type PersonNameAndAge = MyOmit<OPerson, "address">;

const operson: PersonNameAndAge = { name: "Alice", age: 30 };
person.name = "Bob"; // 可以修改
person.address = { city: "Shanghai", street: "Nanjing Road" }; // 报错，address 属性不存在