# Lesson 04: Arrays in JavaScript

## Introduction

Arrays are one of the most important data structures in JavaScript. They allow us to store multiple values inside a single variable instead of creating separate variables for each value.

Without arrays:

```javascript
let student1 = "Ahmed";
let student2 = "Ali";
let student3 = "Omar";
let student4 = "Sara";
```

With arrays:

```javascript
let students = ["Ahmed", "Ali", "Omar", "Sara"];
```

Arrays make code cleaner, more organized, and easier to manage.

---

# What is an Array?

An array is a special JavaScript object used to store multiple values in a single variable.

### Example

```javascript
let colors = ["Red", "Green", "Blue"];
```

In this example:

- `colors` is the array name.
- `"Red"`, `"Green"`, and `"Blue"` are array elements.

---

# Why Use Arrays?

Arrays help developers:

- Store collections of data.
- Organize related information.
- Process multiple values efficiently.
- Work with loops more easily.

### Example

Without Array:

```javascript
let product1 = "Laptop";
let product2 = "Phone";
let product3 = "Tablet";
```

With Array:

```javascript
let products = ["Laptop", "Phone", "Tablet"];
```

---

# Creating Arrays

## Using Array Literals

The most common way.

```javascript
let fruits = ["Apple", "Banana", "Orange"];
```

---

## Using the Array Constructor

```javascript
let fruits = new Array(
    "Apple",
    "Banana",
    "Orange"
);
```

Although valid, array literals are preferred.

---

# Accessing Array Elements

Each element has an index.

Array indexes start from:

```text
0
```

Example:

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];
```

| Index | Value |
|---------|---------|
| 0 | Apple |
| 1 | Banana |
| 2 | Orange |

---

### Access First Element

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

### Access Second Element

```javascript
console.log(fruits[1]);
```

Output:

```text
Banana
```

---

# Modifying Array Elements

Array values can be changed.

### Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

fruits[1] = "Mango";

console.log(fruits);
```

Output:

```javascript
["Apple", "Mango", "Orange"]
```

---

# Array Length

The `length` property returns the number of elements in an array.

### Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(fruits.length);
```

Output:

```text
3
```

---

# Arrays Can Store Different Data Types

### Example

```javascript
let data = [
    "Ahmed",
    21,
    true
];
```

Output:

```javascript
["Ahmed", 21, true]
```

Although possible, it is usually better to keep similar data together.

---

# Common Array Methods

## push()

Adds an element to the end of the array.

### Example

```javascript
let colors = ["Red", "Green"];

colors.push("Blue");

console.log(colors);
```

Output:

```javascript
["Red", "Green", "Blue"]
```

---

## pop()

Removes the last element.

### Example

```javascript
let colors = [
    "Red",
    "Green",
    "Blue"
];

colors.pop();

console.log(colors);
```

Output:

```javascript
["Red", "Green"]
```

---

## unshift()

Adds an element to the beginning.

### Example

```javascript
let colors = ["Green"];

colors.unshift("Red");

console.log(colors);
```

Output:

```javascript
["Red", "Green"]
```

---

## shift()

Removes the first element.

### Example

```javascript
let colors = [
    "Red",
    "Green"
];

colors.shift();

console.log(colors);
```

Output:

```javascript
["Green"]
```

---

# Looping Through Arrays

Arrays are often used with loops.

### Example

```javascript
let students = [
    "Ahmed",
    "Ali",
    "Sara"
];

for (let i = 0; i < students.length; i++) {

    console.log(students[i]);

}
```

Output:

```text
Ahmed
Ali
Sara
```

---

# Searching in Arrays

## includes()

Checks whether a value exists.

### Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(
    fruits.includes("Banana")
);
```

Output:

```text
true
```

---

## indexOf()

Returns the index of an element.

### Example

```javascript
let fruits = [
    "Apple",
    "Banana",
    "Orange"
];

console.log(
    fruits.indexOf("Banana")
);
```

Output:

```text
1
```

---

# Real-World Example

### Student Grades

```javascript
let grades = [
    90,
    85,
    75,
    100
];

for (let i = 0; i < grades.length; i++) {

    console.log(grades[i]);

}
```

Output:

```text
90
85
75
100
```

---

# Common Mistakes

## Forgetting That Arrays Start at Zero

Wrong:

```javascript
console.log(fruits[1]);
```

Expecting:

```text
Apple
```

Actual Output:

```text
Banana
```

Because indexes start from 0.

---

## Accessing Non-Existing Elements

```javascript
let fruits = [
    "Apple",
    "Banana"
];

console.log(fruits[5]);
```

Output:

```text
undefined
```

---

## Using Wrong Length Condition

Wrong:

```javascript
for (
    let i = 0;
    i <= fruits.length;
    i++
) {

}
```

This causes one extra iteration.

Correct:

```javascript
for (
    let i = 0;
    i < fruits.length;
    i++
) {

}
```

---

# Best Practices

- Use meaningful array names.
- Store related data together.
- Use loops to process arrays.
- Use built-in methods when possible.
- Avoid hardcoding indexes.
- Check array length before accessing elements.

---

# Summary

Arrays are used to store multiple values in a single variable.

Important concepts:

- Creating Arrays
- Accessing Elements
- Modifying Elements
- Array Length
- Array Methods
- Looping Through Arrays
- Searching Arrays

Common methods:

- push()
- pop()
- shift()
- unshift()
- includes()
- indexOf()

Arrays are one of the most frequently used data structures in JavaScript and are heavily used in modern frameworks such as React.

---

# Key Takeaways

- Arrays store multiple values in one variable.
- Array indexes start from 0.
- Elements are accessed using square brackets `[]`.
- The `length` property returns the number of elements.
- Arrays can be modified after creation.
- Built-in methods simplify array operations.
- Arrays work perfectly with loops.
- Arrays are essential for modern JavaScript development.
