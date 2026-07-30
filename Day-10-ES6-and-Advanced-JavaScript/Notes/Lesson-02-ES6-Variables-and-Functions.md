# Lesson 02: ES6 Variables and Functions

## Introduction

ES6 (ECMAScript 2015) introduced several features that made JavaScript code cleaner, more readable, and easier to maintain.

Some of the most important ES6 improvements include:

- `let`
- `const`
- Template Literals
- Arrow Functions
- Default Parameters
- Rest Parameters
- Spread Operator

These features are widely used in modern JavaScript development.

---

# Variable Declarations in ES6

Before ES6, variables were usually declared using:

```javascript
var
```

ES6 introduced:

```javascript
let
const
```

which provide better control over variable scope.

---

# let

The `let` keyword creates a variable that can be reassigned.

### Syntax

```javascript
let variableName = value;
```

### Example

```javascript
let age = 25;

age = 26;

console.log(age);
```

Output:

```text
26
```

---

## Block Scope

Unlike `var`, `let` is block-scoped.

Example:

```javascript
if (true) {

    let message =
    "Hello";

    console.log(message);

}
```

Output:

```text
Hello
```

Outside the block:

```javascript
console.log(message);
```

Output:

```text
ReferenceError
```

---

# const

The `const` keyword creates a constant variable.

Its value cannot be reassigned.

### Syntax

```javascript
const variableName = value;
```

### Example

```javascript
const pi = 3.14;

console.log(pi);
```

Output:

```text
3.14
```

---

## Reassignment Error

```javascript
const pi = 3.14;

pi = 5;
```

Output:

```text
TypeError
```

---

## Objects and Arrays with const

The variable reference cannot change, but its contents can.

Example:

```javascript
const user = {

    name: "Ahmed"

};

user.name =
"Ali";

console.log(user.name);
```

Output:

```text
Ali
```

---

# let vs const

| Feature | let | const |
|----------|------|--------|
| Reassignment | Yes | No |
| Block Scope | Yes | Yes |
| Hoisting | Yes | Yes |
| Must Be Initialized | No | Yes |

---

# Template Literals

Template literals provide an easier way to create strings.

They use backticks:

```javascript
`
```

instead of quotes.

---

## Traditional String Concatenation

```javascript
let name = "Ahmed";

console.log(
    "Hello " + name
);
```

Output:

```text
Hello Ahmed
```

---

## Using Template Literals

```javascript
let name = "Ahmed";

console.log(
    `Hello ${name}`
);
```

Output:

```text
Hello Ahmed
```

---

# Multi-Line Strings

Before ES6:

```javascript
let text =
"Line 1\n" +
"Line 2";
```

ES6:

```javascript
let text =
`
Line 1
Line 2
`;
```

---

# Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

---

## Traditional Function

```javascript
function greet(name) {

    return "Hello " + name;

}
```

---

## Arrow Function

```javascript
const greet =
(name) => {

    return "Hello " + name;

};
```

---

## Short Form

If there is only one statement:

```javascript
const greet =
name => "Hello " + name;
```

---

### Example

```javascript
const square =
number => number * number;

console.log(
    square(5)
);
```

Output:

```text
25
```

---

# Arrow Functions and this

Arrow functions do not create their own:

```javascript
this
```

They inherit it from the surrounding scope.

Example:

```javascript
const person = {

    name: "Ahmed",

    showName() {

        setTimeout(() => {

            console.log(
                this.name
            );

        }, 1000);

    }

};

person.showName();
```

Output:

```text
Ahmed
```

---

# Default Parameters

ES6 allows functions to have default values for parameters.

### Example

```javascript
function greet(
    name = "Guest"
) {

    console.log(
        `Hello ${name}`
    );

}
```

---

### Usage

```javascript
greet();
```

Output:

```text
Hello Guest
```

---

```javascript
greet("Ahmed");
```

Output:

```text
Hello Ahmed
```

---

# Rest Parameters

Rest parameters collect multiple arguments into an array.

Syntax:

```javascript
...parameterName
```

---

### Example

```javascript
function sum(
    ...numbers
) {

    let total = 0;

    for (
        let number
        of numbers
    ) {

        total += number;

    }

    return total;

}
```

---

### Usage

```javascript
console.log(
    sum(1, 2, 3, 4)
);
```

Output:

```text
10
```

---

# Spread Operator

The spread operator expands arrays or objects.

Syntax:

```javascript
...
```

---

## Spread with Arrays

Example:

```javascript
const numbers =
[1, 2, 3];

const newNumbers =
[
    ...numbers,
    4,
    5
];
```

Result:

```javascript
[1, 2, 3, 4, 5]
```

---

## Copying Arrays

```javascript
const original =
[1, 2, 3];

const copy =
[
    ...original
];
```

---

## Merging Arrays

```javascript
const first =
[1, 2];

const second =
[3, 4];

const result =
[
    ...first,
    ...second
];
```

Output:

```javascript
[1, 2, 3, 4]
```

---

# Rest vs Spread

| Feature | Rest | Spread |
|----------|--------|---------|
| Collects Values | Yes | No |
| Expands Values | No | Yes |
| Used in Parameters | Yes | No |
| Used in Arrays/Objects | No | Yes |

---

# Practical Example

```javascript
const calculateTotal =
(
    discount = 0,
    ...prices
) => {

    let total = 0;

    for (
        let price
        of prices
    ) {

        total += price;

    }

    return total - discount;

};

console.log(
    calculateTotal(
        10,
        100,
        50,
        40
    )
);
```

Output:

```text
180
```

---

# Advantages of ES6 Features

- Cleaner syntax.
- Better readability.
- Less code.
- Easier maintenance.
- Improved performance in many scenarios.
- Widely supported in modern browsers.

---

# Best Practices

- Use `const` by default.
- Use `let` only when reassignment is needed.
- Prefer template literals over string concatenation.
- Use arrow functions for short callbacks.
- Use default parameters when appropriate.
- Use rest parameters instead of the `arguments` object.
- Use spread operators for copying and merging arrays.

---

# Summary

ES6 introduced powerful improvements to variables and functions.

Main features:

```javascript
let
const
Template Literals
Arrow Functions
Default Parameters
Rest Parameters
Spread Operator
```

These features simplify JavaScript development and are essential for writing modern, maintainable code.

---

# Key Takeaways

- `let` and `const` provide block-scoped variables.
- `const` prevents reassignment.
- Template literals simplify string creation.
- Arrow functions provide concise syntax.
- Default parameters supply fallback values.
- Rest parameters collect multiple arguments.
- Spread operators expand arrays and objects.
- ES6 features are fundamental in modern JavaScript development.
