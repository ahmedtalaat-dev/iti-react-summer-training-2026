# Lesson 03: Functions and Interfaces

## Introduction

Functions and Interfaces are two of the most important features in TypeScript. Functions allow you to write reusable blocks of code with type safety, while interfaces define the structure of objects, making your code more consistent and easier to maintain.

TypeScript extends JavaScript functions by allowing developers to specify parameter types and return types, reducing runtime errors.

---

# Typed Functions

A typed function specifies the types of its parameters and its return value.

## Syntax

```typescript
function functionName(parameter: type): returnType {

    // code

}
```

Example:

```typescript
function add(a: number, b: number): number {

    return a + b;

}

console.log(add(5, 3));
```

Output:

```text
8
```

---

# Function Return Types

You can explicitly define the return type of a function.

Example:

```typescript
function greet(name: string): string {

    return `Hello ${name}`;

}
```

If the returned value doesn't match the declared type, TypeScript reports an error.

Example:

```typescript
function getAge(): number {

    return "22";

}
```

Compilation Error:

```text
Type 'string' is not assignable to type 'number'.
```

---

# Void Functions

Functions that do not return a value use the `void` return type.

Example:

```typescript
function printMessage(message: string): void {

    console.log(message);

}
```

---

# Optional Parameters

Optional parameters are marked using the `?` symbol.

Example:

```typescript
function greet(name: string, title?: string): string {

    if (title) {

        return `${title} ${name}`;

    }

    return name;

}

console.log(greet("Ahmed"));
console.log(greet("Ahmed", "Mr."));
```

Output:

```text
Ahmed
Mr. Ahmed
```

---

# Default Parameters

Default parameters provide a value if no argument is passed.

Example:

```typescript
function greet(name: string = "Guest"): string {

    return `Hello ${name}`;

}
```

Usage:

```typescript
console.log(greet());

console.log(greet("Ahmed"));
```

Output:

```text
Hello Guest
Hello Ahmed
```

---

# Rest Parameters

Rest parameters allow a function to accept multiple arguments.

Example:

```typescript
function sum(...numbers: number[]): number {

    return numbers.reduce(
        (total, num) => total + num,
        0
    );

}

console.log(sum(10, 20, 30));
```

Output:

```text
60
```

---

# Arrow Functions

Arrow functions also support TypeScript type annotations.

Example:

```typescript
const multiply = (
    a: number,
    b: number
): number => {

    return a * b;

};

console.log(multiply(4, 5));
```

Output:

```text
20
```

---

# Function Types

You can define the type of a function.

Example:

```typescript
let calculate:
(a: number, b: number) => number;

calculate = function(a, b) {

    return a + b;

};
```

---

# What is an Interface?

An interface defines the shape of an object.

It specifies which properties and methods an object must contain.

Example:

```typescript
interface Person {

    name: string;

    age: number;

}
```

---

# Using an Interface

Example:

```typescript
interface Person {

    name: string;

    age: number;

}

const user: Person = {

    name: "Ahmed",

    age: 22

};

console.log(user);
```

---

# Optional Properties

Properties can be optional.

Example:

```typescript
interface Employee {

    name: string;

    department?: string;

}

const employee: Employee = {

    name: "Ali"

};
```

---

# Readonly Properties

Use `readonly` to prevent modification.

Example:

```typescript
interface Student {

    readonly id: number;

    name: string;

}

const student: Student = {

    id: 1,

    name: "Ahmed"

};
```

Attempting to change `id` results in a compilation error.

---

# Interface Methods

Interfaces can define methods.

Example:

```typescript
interface Calculator {

    add(
        a: number,
        b: number
    ): number;

}
```

Implementation:

```typescript
const calculator: Calculator = {

    add(a, b) {

        return a + b;

    }

};
```

---

# Interface Inheritance

Interfaces can extend other interfaces.

Example:

```typescript
interface Person {

    name: string;

}

interface Student extends Person {

    grade: number;

}

const std: Student = {

    name: "Ahmed",

    grade: 95

};
```

---

# Interfaces with Functions

Interfaces can describe function signatures.

Example:

```typescript
interface MathOperation {

    (
        a: number,
        b: number
    ): number;

}

const subtract: MathOperation =

function(a, b) {

    return a - b;

};
```

---

# Interface vs Type Alias

| Interface | Type Alias |
|-----------|------------|
| Defines object structures | Defines any type |
| Can be extended | Uses intersections for extension |
| Best for object-oriented design | More flexible for unions and primitives |

---

# Best Practices

- Always define parameter and return types.
- Use interfaces to describe object structures.
- Use optional properties only when necessary.
- Use `readonly` for values that should not change.
- Keep functions focused on a single responsibility.
- Use meaningful interface and function names.

---

# Summary

Functions and interfaces make TypeScript applications safer and easier to maintain.

Main concepts covered:

```text
- Typed Functions
- Return Types
- Void Functions
- Optional Parameters
- Default Parameters
- Rest Parameters
- Arrow Functions
- Function Types
- Interfaces
- Optional Properties
- Readonly Properties
- Interface Methods
- Interface Inheritance
```

Using typed functions and interfaces helps catch errors early and improves code readability.

---

# Key Takeaways

- Functions can have typed parameters and return values.
- Optional and default parameters provide flexibility.
- Rest parameters allow multiple arguments.
- Arrow functions support type annotations.
- Interfaces define the structure of objects.
- Interfaces can include properties and methods.
- `readonly` prevents accidental property changes.
- Interfaces can extend other interfaces for better code reuse.
