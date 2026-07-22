# JavaScript Variables

## Introduction

Variables are one of the most fundamental concepts in programming. They allow developers to store, update, and manipulate data throughout a program.

In JavaScript, variables can store different types of data such as:

- Numbers
- Strings
- Booleans
- Arrays
- Objects

Think of a variable as a labeled container that holds a value.

---

# What is a Variable?

A variable is a named storage location used to hold data that can be accessed and manipulated later in a program.

### Example

```javascript
let name = "Ahmed";
```

In this example:

- `let` is the keyword used to declare the variable.
- `name` is the variable name.
- `"Ahmed"` is the value stored in the variable.

---

# Why Do We Use Variables?

Variables help us:

- Store data.
- Reuse values.
- Perform calculations.
- Update information dynamically.
- Build interactive applications.

### Example

```javascript
let age = 21;

console.log(age);
```

Output:

```text
21
```

---

# Variable Declaration

JavaScript provides three ways to declare variables:

- var
- let
- const

---

# Using var

Before ES6 (ECMAScript 2015), `var` was the primary way to declare variables.

### Syntax

```javascript
var username = "Ahmed";
```

### Example

```javascript
var city = "Cairo";

console.log(city);
```

Output:

```text
Cairo
```

---

## Characteristics of var

- Function scoped.
- Can be redeclared.
- Can be reassigned.
- Subject to hoisting.

### Example

```javascript
var name = "Ahmed";

var name = "Ali";

console.log(name);
```

Output:

```text
Ali
```

---

# Using let

The `let` keyword was introduced in ES6 and is now the preferred way to declare variables that may change.

### Syntax

```javascript
let age = 21;
```

### Example

```javascript
let score = 100;

score = 150;

console.log(score);
```

Output:

```text
150
```

---

## Characteristics of let

- Block scoped.
- Cannot be redeclared in the same scope.
- Can be reassigned.
- Subject to hoisting but behaves differently than `var`.

### Example

```javascript
let age = 20;

age = 25;
```

Valid because reassignment is allowed.

---

# Using const

The `const` keyword is used for variables whose value should not be reassigned.

### Syntax

```javascript
const PI = 3.14;
```

### Example

```javascript
const country = "Egypt";

console.log(country);
```

Output:

```text
Egypt
```

---

## Characteristics of const

- Block scoped.
- Cannot be redeclared.
- Cannot be reassigned.
- Must be initialized during declaration.

### Example

```javascript
const PI = 3.14;
```

Valid.

---

### Invalid Example

```javascript
const PI;
```

This causes an error because a value must be assigned immediately.

---

### Reassignment Error

```javascript
const PI = 3.14;

PI = 3.14159;
```

This causes an error.

---

# Variable Naming Rules

JavaScript variable names must follow certain rules.

---

## Valid Variable Names

```javascript
let name;
let age;
let firstName;
let user123;
let _score;
let $price;
```

---

## Invalid Variable Names

```javascript
let 123name;
let first-name;
let user name;
```

These names cause syntax errors.

---

# Variable Naming Best Practices

Use meaningful and descriptive names.

### Good Examples

```javascript
let firstName;
let userAge;
let totalPrice;
let isLoggedIn;
```

---

### Bad Examples

```javascript
let x;
let a1;
let temp123;
```

Avoid vague names whenever possible.

---

# JavaScript Data Types

Variables can store different types of values.

---

## String

Used for text.

```javascript
let name = "Ahmed";
```

---

## Number

Used for numeric values.

```javascript
let age = 21;
```

---

## Boolean

Used for true/false values.

```javascript
let isStudent = true;
```

---

## Null

Represents an intentional empty value.

```javascript
let user = null;
```

---

## Undefined

Represents a variable without a value.

```javascript
let city;
```

---

# Variable Reassignment

Variables declared with `let` or `var` can be updated.

### Example

```javascript
let score = 50;

score = 100;

console.log(score);
```

Output:

```text
100
```

---

# Variable Scope

Scope determines where a variable can be accessed.

---

## Global Scope

Variables declared outside functions are globally accessible.

```javascript
let username = "Ahmed";

function greet() {
    console.log(username);
}
```

---

## Block Scope

Variables declared with `let` and `const` are only accessible inside their block.

### Example

```javascript
{
    let age = 21;
}

console.log(age);
```

Output:

```text
ReferenceError
```

---

# Hoisting in JavaScript

## What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compilation phase before code execution.

This means variables and functions can sometimes be used before they are declared.

---

# Hoisting with var

### Example

```javascript
console.log(name);

var name = "Ahmed";
```

JavaScript interprets it like:

```javascript
var name;

console.log(name);

name = "Ahmed";
```

Output:

```text
undefined
```

The variable exists because it was hoisted, but its value has not been assigned yet.

---

# Hoisting with let

### Example

```javascript
console.log(age);

let age = 21;
```

Output:

```text
ReferenceError
```

Unlike `var`, `let` is hoisted but remains in a phase called the **Temporal Dead Zone (TDZ)** until the declaration line is reached.

---

# Hoisting with const

### Example

```javascript
console.log(PI);

const PI = 3.14;
```

Output:

```text
ReferenceError
```

Like `let`, `const` is hoisted but stays in the Temporal Dead Zone until initialized.

---

# Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a scope and the point where a `let` or `const` variable is declared.

During this period, accessing the variable causes an error.

### Example

```javascript
{
    console.log(name);

    let name = "Ahmed";
}
```

Output:

```text
ReferenceError
```

---

# var vs let vs const

| Feature | var | let | const |
|----------|----------|----------|----------|
| Scope | Function | Block | Block |
| Reassignment | Yes | Yes | No |
| Redeclaration | Yes | No | No |
| Hoisted | Yes | Yes | Yes |
| Accessible Before Declaration | Returns undefined | Error (TDZ) | Error (TDZ) |
| Must Be Initialized | No | No | Yes |

---

# Which One Should You Use?

### Use const

When the value should not change.

```javascript
const API_URL = "https://example.com";
```

---

### Use let

When the value will change.

```javascript
let counter = 0;
```

---

### Avoid var

Modern JavaScript development rarely uses `var` because of its confusing scoping and hoisting behavior.

---

# Common Mistakes

### Using Variables Before Declaration

```javascript
console.log(name);

let name = "Ahmed";
```

---

### Using const for Changing Values

```javascript
const score = 100;

score = 200;
```

---

### Using Meaningless Names

```javascript
let x = 100;
```

Prefer:

```javascript
let totalPrice = 100;
```

---

# Best Practices

- Prefer `const` by default.
- Use `let` when reassignment is needed.
- Avoid `var` in modern projects.
- Use descriptive variable names.
- Understand scope and hoisting behavior.
- Declare variables before using them.

---

# Key Takeaways

- Variables store data used by JavaScript programs.
- JavaScript provides `var`, `let`, and `const` for variable declaration.
- `let` and `const` are block-scoped.
- `var` is function-scoped and can cause unexpected behavior.
- Hoisting moves declarations to the top of their scope.
- `let` and `const` are affected by the Temporal Dead Zone (TDZ).
- Modern JavaScript development primarily uses `let` and `const`.
