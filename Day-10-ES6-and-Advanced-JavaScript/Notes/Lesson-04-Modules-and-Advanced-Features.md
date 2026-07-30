# Lesson 04: Modules and Advanced Features

## Introduction

Modern JavaScript applications can become large and difficult to maintain if all code is written in a single file.

ES6 introduced **Modules** to help organize code into separate files and improve maintainability.

In addition, ES6 introduced advanced features such as:

- Generators
- Iterators
- export
- import
- Modular Programming

These features help developers write cleaner, more scalable applications.

---

# What Are Modules?

A module is a JavaScript file that contains reusable code.

Modules allow developers to:

- Split code into multiple files.
- Reuse code across projects.
- Improve maintainability.
- Avoid global variable conflicts.

---

# Why Use Modules?

Without modules:

```text
All code is placed in one file.
```

Problems:

- Difficult maintenance.
- Code duplication.
- Naming conflicts.
- Poor scalability.

With modules:

```text
Each feature can be stored in its own file.
```

Benefits:

- Better organization.
- Easier debugging.
- Improved reusability.

---

# Exporting from a Module

To make variables, functions, or classes available outside a file, use:

```javascript
export
```

---

## Exporting Variables

File:

```javascript
// config.js

export const siteName =
"Ahmed Portfolio";
```

---

## Exporting Functions

File:

```javascript
// math.js

export function add(a, b) {

    return a + b;

}
```

---

## Exporting Classes

File:

```javascript
// person.js

export class Person {

    constructor(name) {

        this.name = name;

    }

}
```

---

# Importing from a Module

To use exported items, use:

```javascript
import
```

---

## Importing Variables

```javascript
import {
    siteName
}
from "./config.js";

console.log(siteName);
```

---

## Importing Functions

```javascript
import {
    add
}
from "./math.js";

console.log(
    add(5, 3)
);
```

Output:

```text
8
```

---

## Importing Classes

```javascript
import {
    Person
}
from "./person.js";

const user =
new Person("Ahmed");
```

---

# Exporting Multiple Items

Example:

```javascript
export const name =
"Ahmed";

export const age =
22;

export function greet() {

    console.log("Hello");

}
```

---

## Importing Multiple Items

```javascript
import {

    name,
    age,
    greet

}
from "./user.js";
```

---

# Exporting Everything at Once

Example:

```javascript
const name =
"Ahmed";

const age =
22;

function greet() {

    console.log("Hello");

}

export {

    name,
    age,
    greet

};
```

---

# Default Export

A file can have one default export.

Example:

```javascript
export default function greet() {

    console.log("Hello");

}
```

---

## Importing Default Export

```javascript
import greet
from "./greet.js";

greet();
```

---

# Module Script

To use modules in HTML:

```html
<script
    type="module"
    src="script.js">
</script>
```

Without:

```html
type="module"
```

modules will not work correctly.

---

# What Are Iterators?

An iterator is an object that allows sequential access to data.

Many JavaScript structures are iterable:

- Arrays
- Strings
- Sets
- Maps

Example:

```javascript
const numbers =
[1, 2, 3];

const iterator =
numbers[Symbol.iterator]();

console.log(
    iterator.next()
);
```

Output:

```javascript
{ value: 1, done: false }
```

---

# Iterator Structure

Each call to:

```javascript
next()
```

returns:

```javascript
{
    value: currentValue,
    done: boolean
}
```

Example:

```javascript
iterator.next();
iterator.next();
iterator.next();
iterator.next();
```

Output:

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
```

---

# What Are Generators?

Generators are special functions that can pause and resume execution.

They use:

```javascript
function*
```

and:

```javascript
yield
```

---

# Creating a Generator

Example:

```javascript
function* generateNumbers() {

    yield 1;
    yield 2;
    yield 3;

}
```

---

# Using a Generator

```javascript
const generator =
generateNumbers();

console.log(
    generator.next()
);

console.log(
    generator.next()
);

console.log(
    generator.next()
);
```

Output:

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
```

---

# Generator Execution

Unlike normal functions:

```javascript
function test() {

    console.log("A");
    console.log("B");

}
```

Everything runs immediately.

Generators pause at each:

```javascript
yield
```

and continue when:

```javascript
next()
```

is called.

---

# Generator Example

```javascript
function* counter() {

    let count = 1;

    while (true) {

        yield count++;

    }

}
```

Usage:

```javascript
const numbers =
counter();

console.log(
    numbers.next().value
);

console.log(
    numbers.next().value
);

console.log(
    numbers.next().value
);
```

Output:

```text
1
2
3
```

---

# for...of with Generators

Generators are iterable.

Example:

```javascript
function* colors() {

    yield "Red";
    yield "Green";
    yield "Blue";

}

for (
    let color
    of colors()
) {

    console.log(color);

}
```

Output:

```text
Red
Green
Blue
```

---

# Real-World Example

## User Module

File:

```javascript
// user.js

export class User {

    constructor(name) {

        this.name = name;

    }

}
```

Main File:

```javascript
import {
    User
}
from "./user.js";

const user =
new User("Ahmed");

console.log(
    user.name
);
```

Output:

```text
Ahmed
```

---

# Advantages of Modules

- Better code organization.
- Reusable code.
- Easier maintenance.
- Reduced global variables.
- Improved scalability.

---

# Advantages of Generators

- Pause execution.
- Produce values on demand.
- Memory efficient.
- Useful for large datasets.
- Useful for custom iterators.

---

# Common Mistakes

## Forgetting Module Type

Wrong:

```html
<script src="app.js"></script>
```

Correct:

```html
<script
    type="module"
    src="app.js">
</script>
```

---

## Using Multiple Default Exports

Wrong:

```javascript
export default name;

export default age;
```

Only one default export is allowed.

---

## Forgetting yield

Wrong:

```javascript
function* numbers() {

    return 1;

}
```

A generator becomes useful when using:

```javascript
yield
```

---

# Best Practices

- Organize related code into modules.
- Use named exports for multiple items.
- Use default exports for primary functionality.
- Keep modules focused on a single responsibility.
- Use generators when values should be produced gradually.
- Use meaningful file names for modules.

---

# Summary

ES6 Modules and Advanced Features help developers build scalable and maintainable applications.

Main concepts:

```javascript
Modules
Export
Import
Default Export
Iterators
Generators
Yield
```

These features are widely used in modern JavaScript applications and frameworks.

---

# Key Takeaways

- Modules allow code to be separated into reusable files.
- `export` shares functionality between files.
- `import` uses functionality from other files.
- Generators pause and resume execution using `yield`.
- Iterators provide sequential access to data.
- Modules improve maintainability and scalability.
- Generators are useful for producing values on demand.
- These features are important in modern JavaScript development.
