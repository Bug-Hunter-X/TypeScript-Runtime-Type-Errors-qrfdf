# TypeScript Runtime Type Errors

This repository demonstrates a common issue in TypeScript where type safety doesn't always prevent runtime errors. While TypeScript's type system catches many errors during compilation, it doesn't guarantee complete protection against runtime type mismatches.

The example shows how passing a string to a function expecting a number leads to a runtime error. This is because TypeScript's type checking happens at compile time, not runtime.  While the compiler will flag errors for *obvious* type mismatches during compilation, it may not catch more subtle ones that could cause runtime issues. 

This highlights a key aspect of using TypeScript: it improves type safety during development, but thorough testing is still essential to cover edge cases and potential runtime errors.