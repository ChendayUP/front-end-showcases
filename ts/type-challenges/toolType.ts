// ts中常用的工具类型使用说明


// Omit<T, K> 的作用是忽略T中的某些属性。
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
// 移除其中一个类型
type TodoPreview1 = Omit<Todo, "description">
// 移除多个类型
type TodoPreview2 = Omit<Todo, "description" | "completed">

// Exclude<T, U> 从 T 中排除出可分配给 U的元素。
type MyType = "A" | "B" | "C";
type Excluded = Exclude<MyType, "A" | "B">; // 排除 "A" 和 "B"

// handbook utility-types 有详细的介绍
// https://www.typescriptlang.org/docs/handbook/utility-types.html