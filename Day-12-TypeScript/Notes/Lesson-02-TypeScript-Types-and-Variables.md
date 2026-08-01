# Lesson 02: TypeScript Types and Variables

## Introduction

One of the biggest advantages of TypeScript is its **static type system**. By specifying data types for variables, TypeScript can detect type-related errors during development instead of at runtime.

Type annotations make code easier to understand, improve maintainability, and provide better support from code editors.

---

# Declaring Variables

TypeScript supports the same variable declarations as JavaScript.

## Using `let`

```typescript
let username: string = "Ahmed";
```

---

## Using `const`

```typescript
const pi: number = 3.14;
```

`const` variables cannot be reassigned.

---

## Using `var`

```typescript
var age: number = 22;
```

Although supported, `var` is generally avoided because of its function scope. Prefer `let` and `const`.

---

# Type Annotations

A type annotation explicitly defines the type of a variable.

Syntax:

```typescript
let variableName: type = value;
```

Example:

```typescript
let country: string = "Egypt";
```

---

# Primitive Types

## String

Stores textual data.

```typescript
let firstName: string = "Ahmed";
```

---

## Number

Stores integers and floating-point numbers.

```typescript
let age: number = 22;

let price: number = 99.99;
```

---

## Boolean

Stores `true` or `false`.

```typescript
let isStudent: boolean = true;
```

---

# Type Inference

TypeScript can automatically determine the type based on the assigned value.

Example:

```typescript
let city = "Cairo";
```

TypeScript infers:

```typescript
string
```

Another example:

```typescript
let score = 100;
```

TypeScript infers:

```typescript
number
```

---

# Arrays

Arrays can contain values of the same type.

Syntax:

```typescript
let numbers: number[] = [10, 20, 30];
```

or

```typescript
let numbers: Array<number> = [10, 20, 30];
```

String array:

```typescript
let colors: string[] = ["Red", "Green", "Blue"];
```

---

# Tuples

A tuple stores a fixed number of values with different types.

Example:

```typescript
let student: [string, number];

student = ["Ahmed", 22];
```

---

# Enums

Enums define a collection of named constants.

Example:

```typescript
enum Direction {

    Up,
    Down,
    Left,
    Right

}
```

Usage:

```typescript
let move: Direction = Direction.Left;
```

---

# The `any` Type

The `any` type disables type checking.

Example:

```typescript
let value: any = 100;

value = "Hello";

value = true;
```

Use `any` sparingly because it removes TypeScript's safety benefits.

---

# The `unknown` Type

The `unknown` type is safer than `any`.

Example:

```typescript
let data: unknown = "Hello";
```

Before using an `unknown` value, you must check its type.

```typescript
if (typeof data === "string") {

    console.log(data.toUpperCase());

}
```

---

# The `void` Type

`void` is commonly used as the return type for functions that do not return a value.

Example:

```typescript
function greet(): void {

    console.log("Hello");

}
```

---

# The `never` Type

The `never` type represents values that never occur.

Example:

```typescript
function throwError(): never {

    throw new Error("Something went wrong");

}
```

---

# Union Types

A variable can accept more than one type.

Example:

```typescript
let id: string | number;

id = 100;

id = "A100";
```

---

# Literal Types

Literal types restrict a variable to specific values.

Example:

```typescript
let status: "success" | "error";

status = "success";
```

Invalid:

```typescript
status = "loading";
```

---

# Type Aliases

Type aliases create reusable custom types.

Example:

```typescript
type UserID = number;

let id: UserID = 1;
```

---

# Variable Scope

Variables declared with `let` and `const` are block-scoped.

Example:

```typescript
if (true) {

    let message = "Hello";

    console.log(message);

}
```

Outside the block:

```typescript
console.log(message);
```

Results in an error because `message` is out of scope.

---

# Type Checking

Correct:

```typescript
let age: number = 25;
```

Incorrect:

```typescript
age = "Twenty Five";
```

Compilation Error:

```text
Type 'string' is not assignable to type 'number'.
```

---

# Best Practices

- Use `let` and `const` instead of `var`.
- Prefer explicit type annotations when they improve readability.
- Avoid using `any` unless necessary.
- Use `unknown` when the type is uncertain.
- Use enums for predefined constant values.
- Keep variable names meaningful and descriptive.

---

# Summary

TypeScript variables can have explicit types, allowing errors to be detected during development.

Main concepts covered:

```text
- Variable Declarations
- Type Annotations
- Primitive Types
- Type Inference
- Arrays
- Tuples
- Enums
- any
- unknown
- void
- never
- Union Types
- Literal Types
- Type Aliases
```

Using TypeScript's type system leads to safer, more reliable, and easier-to-maintain code.

---

# Key Takeaways

- Type annotations define the expected type of a variable.
- TypeScript supports primitive types such as `string`, `number`, and `boolean`.
- Arrays and tuples help organize collections of data.
- Enums define named constant values.
- `any` disables type checking, while `unknown` provides safer flexibility.
- `void` is used for functions that do not return a value.
- `never` represents functions that never complete normally.
- Union types allow variables to hold multiple possible types.
