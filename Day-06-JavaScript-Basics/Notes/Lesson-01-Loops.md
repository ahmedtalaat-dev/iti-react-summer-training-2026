# Lesson 01: Loops in JavaScript

## Introduction

Loops are one of the most powerful features in programming. They allow us to execute a block of code multiple times without writing the same code repeatedly.

Imagine you want to print a message 100 times. Instead of writing 100 `console.log()` statements, you can use a loop to automate the process.

Loops help developers:

- Reduce code duplication.
- Improve code readability.
- Process large amounts of data efficiently.
- Iterate through arrays and objects.

---

# Why Do We Need Loops?

Without loops:

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

With loops:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}
```

Output:

```text
Hello
Hello
Hello
Hello
Hello
```

The loop produces the same result using much less code.

---

# What is a Loop?

A loop is a programming structure that repeatedly executes a block of code as long as a specified condition remains true.

### General Flow

```text
Start
  ↓
Check Condition
  ↓
True → Execute Code
  ↓
Repeat
  ↓
False → Stop
```

---

# Types of Loops in JavaScript

JavaScript provides several looping statements:

1. `for` Loop
2. `while` Loop
3. `do...while` Loop

Each loop serves a different purpose and will be discussed in separate lessons.

---

# Basic Example of a Loop

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
```

Explanation:

- Start with `i = 1`
- Check if `i <= 3`
- Execute the code
- Increase `i` by 1
- Repeat until the condition becomes false

---

# Loop Components

Most loops consist of three main parts:

### Initialization

Starting value.

```javascript
let i = 1;
```

---

### Condition

Determines whether the loop should continue.

```javascript
i <= 5
```

---

### Update

Changes the loop variable after each iteration.

```javascript
i++
```

---

# Real-World Uses of Loops

Loops are commonly used for:

### Displaying Data

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

### Processing Arrays

```javascript
let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

---

### Generating Multiplication Tables

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}
```

---

### Repeating Tasks

```javascript
for (let i = 1; i <= 3; i++) {
    alert("Welcome");
}
```

---

# Infinite Loops

An infinite loop occurs when the loop condition never becomes false.

### Example

```javascript
while (true) {
    console.log("Running...");
}
```

This loop never stops.

---

## Why Are Infinite Loops Dangerous?

They can:

- Freeze the browser.
- Consume system resources.
- Crash the application.

Always ensure your loop has a valid stopping condition.

---

# Loop Iteration

Each execution of a loop is called an **iteration**.

### Example

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Iterations:

| Iteration | Value of i |
|------------|------------|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |

---

# Common Mistakes

## Forgetting the Update Step

Wrong:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

This creates an infinite loop because `i` never changes.

---

## Wrong Condition

Wrong:

```javascript
for (let i = 1; i >= 5; i++) {
    console.log(i);
}
```

The condition is false from the start, so the loop never runs.

---

## Off-by-One Errors

Wrong:

```javascript
for (let i = 1; i < 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
```

If you wanted to include 5, use:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

# Best Practices

- Use meaningful variable names.
- Always define a stopping condition.
- Avoid infinite loops.
- Keep loop bodies simple and readable.
- Use loops to eliminate repetitive code.
- Test boundary conditions carefully.

---

# Summary

Loops allow JavaScript to execute a block of code repeatedly.

Benefits:

- Reduce repetition.
- Improve efficiency.
- Simplify complex tasks.
- Process collections of data.

JavaScript provides:

- `for` loops
- `while` loops
- `do...while` loops

Understanding loops is essential before learning arrays, objects, and advanced JavaScript concepts.

---

# Key Takeaways

- Loops repeat code automatically.
- A loop continues while its condition is true.
- Each repetition is called an iteration.
- Loops help reduce duplicated code.
- Infinite loops occur when conditions never become false.
- JavaScript provides multiple types of loops for different scenarios.
