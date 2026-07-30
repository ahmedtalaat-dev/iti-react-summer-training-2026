# Lesson 03: ES6 Objects and Collections

## Introduction

ES6 introduced several powerful features that improve how developers work with objects, collections, and data structures in JavaScript.

These features include:

- Classes
- Object Destructuring
- Array Destructuring
- Sets
- Maps
- for...of Loop

They help write cleaner, more readable, and more maintainable code.

---

# Classes

Before ES6, object creation was commonly done using constructor functions.

ES6 introduced:

```javascript
class
```

which provides a cleaner syntax for creating objects.

---

## Creating a Class

### Syntax

```javascript
class ClassName {

}
```

### Example

```javascript
class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}
```

---

# Creating Objects from a Class

Example:

```javascript
class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}

const user =
new Person(
    "Ahmed",
    22
);

console.log(user);
```

Output:

```text
Person { name: "Ahmed", age: 22 }
```

---

# Class Methods

Methods are functions inside a class.

Example:

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

    greet() {

        return `Hello ${this.name}`;

    }

}
```

Usage:

```javascript
const user =
new Person("Ahmed");

console.log(
    user.greet()
);
```

Output:

```text
Hello Ahmed
```

---

# Class Inheritance

Classes can inherit properties and methods from another class.

---

## Parent Class

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

}
```

---

## Child Class

```javascript
class Student
extends Person {

    constructor(
        name,
        grade
    ) {

        super(name);

        this.grade = grade;

    }

}
```

---

### Example

```javascript
const student =
new Student(
    "Ahmed",
    95
);

console.log(student);
```

Output:

```text
Student { name: "Ahmed", grade: 95 }
```

---

# Destructuring Assignment

Destructuring allows extracting values from objects and arrays into variables.

---

# Object Destructuring

Without Destructuring:

```javascript
const user = {

    name: "Ahmed",
    age: 22

};

let name =
user.name;

let age =
user.age;
```

---

With Destructuring:

```javascript
const user = {

    name: "Ahmed",
    age: 22

};

const {
    name,
    age
} = user;
```

---

### Output

```javascript
console.log(name);
console.log(age);
```

Output:

```text
Ahmed
22
```

---

# Renaming Variables

Example:

```javascript
const user = {

    name: "Ahmed"

};

const {

    name: userName

} = user;

console.log(
    userName
);
```

Output:

```text
Ahmed
```

---

# Array Destructuring

Without Destructuring:

```javascript
const colors =
[
    "Red",
    "Green",
    "Blue"
];

let first =
colors[0];

let second =
colors[1];
```

---

With Destructuring:

```javascript
const colors =
[
    "Red",
    "Green",
    "Blue"
];

const [
    first,
    second
] = colors;
```

Output:

```text
Red
Green
```

---

# Skipping Values

```javascript
const numbers =
[1, 2, 3, 4];

const [
    first,
    ,
    third
] = numbers;
```

Output:

```text
1
3
```

---

# Sets

A Set is a collection of unique values.

Duplicate values are automatically removed.

---

## Creating a Set

```javascript
const numbers =
new Set();
```

---

## Adding Values

```javascript
numbers.add(10);
numbers.add(20);
numbers.add(30);
```

---

## Duplicate Values

```javascript
numbers.add(10);
```

The value is ignored because it already exists.

---

### Example

```javascript
const numbers =
new Set([
    1,
    2,
    2,
    3,
    3,
    4
]);

console.log(numbers);
```

Output:

```text
Set(4) {1,2,3,4}
```

---

# Set Methods

### Add

```javascript
set.add(value);
```

### Delete

```javascript
set.delete(value);
```

### Check Existence

```javascript
set.has(value);
```

### Size

```javascript
set.size;
```

---

### Example

```javascript
const users =
new Set();

users.add("Ahmed");

console.log(
    users.has(
        "Ahmed"
    )
);
```

Output:

```text
true
```

---

# Maps

A Map stores key-value pairs.

Unlike objects, keys can be any data type.

---

## Creating a Map

```javascript
const userMap =
new Map();
```

---

## Adding Values

```javascript
userMap.set(
    "name",
    "Ahmed"
);
```

---

## Reading Values

```javascript
console.log(
    userMap.get(
        "name"
    )
);
```

Output:

```text
Ahmed
```

---

## Example

```javascript
const student =
new Map();

student.set(
    "name",
    "Ahmed"
);

student.set(
    "grade",
    95
);
```

---

# Map Methods

### Add

```javascript
map.set(key, value);
```

### Read

```javascript
map.get(key);
```

### Delete

```javascript
map.delete(key);
```

### Check

```javascript
map.has(key);
```

### Size

```javascript
map.size;
```

---

# Iterating Through Maps

Example:

```javascript
const student =
new Map();

student.set(
    "name",
    "Ahmed"
);

student.set(
    "grade",
    95
);

for (
    let [key, value]
    of student
) {

    console.log(
        key,
        value
    );

}
```

Output:

```text
name Ahmed
grade 95
```

---

# for...of Loop

The `for...of` loop is used to iterate through iterable objects.

Examples include:

- Arrays
- Strings
- Sets
- Maps

---

## Arrays

```javascript
const numbers =
[10, 20, 30];

for (
    let number
    of numbers
) {

    console.log(number);

}
```

Output:

```text
10
20
30
```

---

## Strings

```javascript
for (
    let letter
    of "JavaScript"
) {

    console.log(letter);

}
```

---

## Sets

```javascript
const numbers =
new Set([
    1,
    2,
    3
]);

for (
    let value
    of numbers
) {

    console.log(value);

}
```

---

# Real-World Example

## Student Management

```javascript
class Student {

    constructor(
        name,
        grade
    ) {

        this.name = name;
        this.grade = grade;

    }

}

const students =
new Set();

students.add(
    new Student(
        "Ahmed",
        95
    )
);

students.add(
    new Student(
        "Ali",
        88
    )
);

for (
    let student
    of students
) {

    console.log(
        student.name
    );

}
```

Output:

```text
Ahmed
Ali
```

---

# Advantages of ES6 Collections

## Sets

- Store unique values.
- Automatically remove duplicates.
- Fast lookup operations.

---

## Maps

- Keys can be any type.
- Better performance for frequent additions and deletions.
- Maintain insertion order.

---

# Best Practices

- Use classes for object-oriented programming.
- Use destructuring to simplify variable extraction.
- Use Sets when duplicates are not allowed.
- Use Maps when key-value relationships are required.
- Prefer `for...of` over traditional loops when working with iterable data.

---

# Summary

ES6 introduced powerful tools for working with objects and collections.

Main concepts:

```javascript
Classes
Inheritance
Object Destructuring
Array Destructuring
Sets
Maps
for...of
```

These features improve code readability, organization, and efficiency.

---

# Key Takeaways

- Classes provide a cleaner way to create objects.
- Inheritance allows code reuse between classes.
- Destructuring simplifies extracting values from objects and arrays.
- Sets store unique values only.
- Maps store key-value pairs with flexible key types.
- `for...of` provides a simple way to iterate through iterable data.
- These ES6 features are widely used in modern JavaScript applications.
