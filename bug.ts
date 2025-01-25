function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Type safety
let result2 = subtract(10, 4); // Type safety

// This will throw a runtime error because it is not handled during compile time
let result3 = add(5, "hello");