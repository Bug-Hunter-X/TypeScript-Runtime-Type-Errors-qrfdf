Several strategies can mitigate this issue:

1. **Input Validation:** Add runtime checks within your functions to validate the types of input parameters.

```typescript
function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
  return a + b;
}
```

2. **Type Guards:** Utilize type guards to refine types based on runtime checks.

```typescript
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function add(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Invalid input: Both parameters must be numbers.');
  }
}
```

3. **User-Defined Type Assertions:** With caution, you can use type assertions to tell the compiler that a value has a particular type (this should be done only if you are absolutely certain about the type).

```typescript
let value = "5" as number; //This needs to be used with caution
let result = add(5, value); //This may still throw an error.
```

These techniques help prevent or handle runtime errors that slip through TypeScript's compile-time type checking. Choosing the best approach depends on the specific context and how much control you want over runtime type handling.