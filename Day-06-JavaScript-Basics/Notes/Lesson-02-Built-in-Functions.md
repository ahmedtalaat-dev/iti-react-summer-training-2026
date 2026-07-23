# Lesson 02: Built-in Functions in JavaScript

## Introduction

JavaScript provides many ready-made functions that developers can use without writing them from scratch. These functions are known as **Built-in Functions**.

Built-in functions help developers perform common tasks quickly and efficiently, such as:

- Displaying messages.
- Receiving user input.
- Converting data types.
- Performing mathematical operations.
- Working with strings and numbers.

Instead of creating these functionalities manually, JavaScript already provides them.

---

# What is a Function?

A function is a block of code designed to perform a specific task.

### Example

```javascript
alert("Hello Ahmed");
```

Here:

- `alert()` is a built-in function.
- `"Hello Ahmed"` is the argument passed to the function.

---

# Why Use Built-in Functions?

Built-in functions help developers:

- Save time.
- Reduce code complexity.
- Improve productivity.
- Avoid rewriting common functionality.

---

# Common JavaScript Built-in Functions

## 1. alert()

The `alert()` function displays a popup message to the user.

### Syntax

```javascript
alert(message);
```

### Example

```javascript
alert("Welcome to JavaScript");
```

### Output

A popup window appears containing:

```text
Welcome to JavaScript
```

---

## 2. prompt()

The `prompt()` function asks the user to enter a value.

### Syntax

```javascript
prompt("Message");
```

### Example

```javascript
let name = prompt("Enter your name");
```

### Result

A popup input box appears allowing the user to enter data.

---

### Displaying User Input

```javascript
let name = prompt("Enter your name");

console.log(name);
```

If the user enters:

```text
Ahmed
```

Output:

```text
Ahmed
```

---

## 3. confirm()

The `confirm()` function displays a confirmation dialog with:

- OK
- Cancel

### Syntax

```javascript
confirm("Message");
```

### Example

```javascript
let result = confirm("Are you sure?");
```

### Output

If the user clicks:

```text
OK
```

Output:

```javascript
true
```

If the user clicks:

```text
Cancel
```

Output:

```javascript
false
```

---

# Type Conversion Functions

JavaScript provides built-in functions for converting data types.

---

## Number()

Converts a value into a number.

### Example

```javascript
let age = Number("21");

console.log(age);
```

Output:

```text
21
```

Type:

```javascript
number
```

---

## String()

Converts a value into a string.

### Example

```javascript
let score = String(100);

console.log(score);
```

Output:

```text
"100"
```

Type:

```javascript
string
```

---

## Boolean()

Converts a value into a boolean.

### Example

```javascript
let result = Boolean(1);

console.log(result);
```

Output:

```text
true
```

---

# Parsing Functions

These functions convert strings into numbers.

---

## parseInt()

Converts a string into an integer.

### Example

```javascript
let age = parseInt("25");

console.log(age);
```

Output:

```text
25
```

---

### Example with Text

```javascript
let value = parseInt("25 years");

console.log(value);
```

Output:

```text
25
```

---

## parseFloat()

Converts a string into a decimal number.

### Example

```javascript
let price = parseFloat("99.99");

console.log(price);
```

Output:

```text
99.99
```

---

# Number Validation Functions

---

## isNaN()

Checks whether a value is "Not a Number".

### Example

```javascript
console.log(isNaN("Ahmed"));
```

Output:

```text
true
```

---

### Example

```javascript
console.log(isNaN(100));
```

Output:

```text
false
```

---

# Math Functions

JavaScript provides the built-in `Math` object for mathematical operations.

---

## Math.random()

Generates a random number between:

```text
0 and 1
```

### Example

```javascript
console.log(Math.random());
```

Output:

```text
0.7354
```

(Random value)

---

## Math.round()

Rounds a number to the nearest integer.

### Example

```javascript
console.log(Math.round(4.6));
```

Output:

```text
5
```

---

## Math.floor()

Rounds down.

### Example

```javascript
console.log(Math.floor(4.9));
```

Output:

```text
4
```

---

## Math.ceil()

Rounds up.

### Example

```javascript
console.log(Math.ceil(4.1));
```

Output:

```text
5
```

---

## Math.max()

Returns the largest value.

### Example

```javascript
console.log(Math.max(10, 20, 30));
```

Output:

```text
30
```

---

## Math.min()

Returns the smallest value.

### Example

```javascript
console.log(Math.min(10, 20, 30));
```

Output:

```text
10
```

---

# String Functions

Strings provide several useful built-in methods.

---

## toUpperCase()

Converts text to uppercase.

### Example

```javascript
let name = "ahmed";

console.log(name.toUpperCase());
```

Output:

```text
AHMED
```

---

## toLowerCase()

Converts text to lowercase.

### Example

```javascript
let name = "AHMED";

console.log(name.toLowerCase());
```

Output:

```text
ahmed
```

---

## length

Returns the number of characters.

### Example

```javascript
let name = "Ahmed";

console.log(name.length);
```

Output:

```text
5
```

---

# Real-World Example

```javascript
let age = prompt("Enter your age");

age = Number(age);

if (age >= 18) {

    alert("Eligible to Vote");

}
else {

    alert("Not Eligible");

}
```

Built-in functions used:

- prompt()
- Number()
- alert()

---

# Common Mistakes

## Forgetting Number Conversion

Wrong:

```javascript
let num1 = prompt("Enter Number");
let num2 = prompt("Enter Number");

console.log(num1 + num2);
```

Input:

```text
5
5
```

Output:

```text
55
```

Because prompt returns strings.

---

Correct:

```javascript
let num1 = Number(prompt("Enter Number"));
let num2 = Number(prompt("Enter Number"));

console.log(num1 + num2);
```

Output:

```text
10
```

---

## Confusing parseInt and Number

```javascript
parseInt("10px");
```

Output:

```text
10
```

But:

```javascript
Number("10px");
```

Output:

```text
NaN
```

---

# Best Practices

- Use built-in functions whenever possible.
- Convert user input to the correct data type.
- Validate input using `isNaN()`.
- Use Math functions for calculations.
- Learn common string methods for text manipulation.

---

# Summary

Built-in functions are pre-defined functions provided by JavaScript.

Common examples include:

- alert()
- prompt()
- confirm()
- Number()
- String()
- Boolean()
- parseInt()
- parseFloat()
- isNaN()

Math functions:

- Math.random()
- Math.round()
- Math.floor()
- Math.ceil()
- Math.max()
- Math.min()

String methods:

- toUpperCase()
- toLowerCase()
- length

These functions simplify development and are used in almost every JavaScript application.

---

# Key Takeaways

- Built-in functions are provided by JavaScript.
- They help perform common tasks quickly.
- User input is commonly handled with `prompt()`.
- Messages are displayed using `alert()`.
- Data conversion is performed using `Number()`, `String()`, and `Boolean()`.
- Mathematical operations can be performed using the `Math` object.
- String methods help manipulate text efficiently.
