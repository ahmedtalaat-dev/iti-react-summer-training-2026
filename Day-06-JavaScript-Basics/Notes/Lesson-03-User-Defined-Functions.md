# Lesson 03: User Defined Functions in JavaScript

## Introduction

While JavaScript provides many built-in functions such as `alert()`, `prompt()`, and `console.log()`, developers often need to create their own functions to perform specific tasks.

These custom functions are called **User Defined Functions**.

User defined functions help:

- Organize code.
- Reduce repetition.
- Improve readability.
- Make applications easier to maintain.

---

# What is a Function?

A function is a reusable block of code designed to perform a specific task.

Instead of writing the same code multiple times, we can place it inside a function and call it whenever needed.

### Example

```javascript
function greet() {
    console.log("Hello Ahmed");
}
```

The function will not run until it is called.

---

# Function Declaration

The most common way to create a function is using the `function` keyword.

### Syntax

```javascript
function functionName() {

    // Code to execute

}
```

---

## Example

```javascript
function welcome() {

    console.log("Welcome to JavaScript");

}
```

Calling the function:

```javascript
welcome();
```

Output:

```text
Welcome to JavaScript
```

---

# Calling a Function

Creating a function does not execute it.

To execute a function, we must call it.

### Example

```javascript
function sayHello() {

    console.log("Hello");

}

sayHello();
```

Output:

```text
Hello
```

---

# Why Use Functions?

Without functions:

```javascript
console.log("Welcome Ahmed");
console.log("Welcome Ahmed");
console.log("Welcome Ahmed");
```

With functions:

```javascript
function welcome() {

    console.log("Welcome Ahmed");

}

welcome();
welcome();
welcome();
```

Output:

```text
Welcome Ahmed
Welcome Ahmed
Welcome Ahmed
```

Functions reduce code duplication.

---

# Function Parameters

Parameters allow functions to receive data.

### Syntax

```javascript
function functionName(parameter) {

}
```

---

## Example

```javascript
function greet(name) {

    console.log("Hello " + name);

}
```

Calling the function:

```javascript
greet("Ahmed");
```

Output:

```text
Hello Ahmed
```

---

# Multiple Parameters

A function can receive more than one parameter.

### Example

```javascript
function introduce(name, age) {

    console.log(
        "My name is " + name +
        " and I am " + age + " years old."
    );

}
```

Calling:

```javascript
introduce("Ahmed", 21);
```

Output:

```text
My name is Ahmed and I am 21 years old.
```

---

# Arguments vs Parameters

Many beginners confuse these two terms.

### Parameters

Variables defined in the function declaration.

```javascript
function greet(name) {

}
```

Here:

```javascript
name
```

is a parameter.

---

### Arguments

Values passed when calling the function.

```javascript
greet("Ahmed");
```

Here:

```javascript
"Ahmed"
```

is an argument.

---

# Return Statement

Functions can send a value back using the `return` statement.

### Example

```javascript
function add(num1, num2) {

    return num1 + num2;

}
```

Calling:

```javascript
let result = add(5, 3);

console.log(result);
```

Output:

```text
8
```

---

# Functions Without Return

A function can perform an action without returning a value.

### Example

```javascript
function showMessage() {

    console.log("Welcome");

}
```

Calling:

```javascript
showMessage();
```

Output:

```text
Welcome
```

---

# Function Scope

Variables declared inside a function are only accessible within that function.

### Example

```javascript
function test() {

    let name = "Ahmed";

    console.log(name);

}
```

Valid:

```javascript
test();
```

Output:

```text
Ahmed
```

---

Invalid:

```javascript
console.log(name);
```

Output:

```text
ReferenceError
```

Because `name` exists only inside the function.

---

# Local Variables

Variables declared inside a function are called local variables.

### Example

```javascript
function calculate() {

    let result = 10 + 5;

    console.log(result);

}
```

The variable:

```javascript
result
```

cannot be accessed outside the function.

---

# Global Variables

Variables declared outside functions are called global variables.

### Example

```javascript
let username = "Ahmed";

function displayName() {

    console.log(username);

}
```

Output:

```text
Ahmed
```

Global variables can be accessed throughout the program.

---

# Function Hoisting

Function declarations are hoisted.

This means they can be called before they are declared.

### Example

```javascript
sayHello();

function sayHello() {

    console.log("Hello");

}
```

Output:

```text
Hello
```

JavaScript moves the function declaration to the top during execution.

---

# Real-World Example

### Age Checker

```javascript
function checkAge(age) {

    if (age >= 18) {

        console.log("Eligible to Vote");

    }
    else {

        console.log("Not Eligible");

    }

}

checkAge(21);
```

Output:

```text
Eligible to Vote
```

---

# Benefits of Functions

Functions help developers:

- Write reusable code.
- Improve maintainability.
- Organize logic.
- Reduce duplication.
- Simplify debugging.

---

# Common Mistakes

## Forgetting Parentheses When Calling

Wrong:

```javascript
sayHello;
```

Correct:

```javascript
sayHello();
```

---

## Missing Arguments

```javascript
function greet(name) {

    console.log(name);

}

greet();
```

Output:

```text
undefined
```

Because no argument was passed.

---

## Writing Everything Inside One Function

Bad Practice:

```javascript
function app() {

    // Hundreds of lines

}
```

Large functions become difficult to maintain.

---

# Best Practices

- Use meaningful function names.
- Keep functions focused on one task.
- Reuse functions whenever possible.
- Avoid creating overly large functions.
- Use parameters instead of hard-coded values.
- Return values when appropriate.

---

# Summary

User Defined Functions are functions created by developers to perform custom tasks.

Main concepts:

- Function Declaration
- Function Call
- Parameters
- Arguments
- Return Statement
- Local Scope
- Global Scope
- Function Hoisting

Functions are one of the most important building blocks of JavaScript and are heavily used in modern frameworks such as React.

---

# Key Takeaways

- Functions are reusable blocks of code.
- Functions are declared using the `function` keyword.
- Parameters receive values from function calls.
- Arguments are the actual values passed to functions.
- The `return` statement sends values back to the caller.
- Variables inside functions have local scope.
- Function declarations are hoisted.
- Functions help create clean, reusable, and maintainable code.
