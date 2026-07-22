# JavaScript If Conditions

## Introduction

Conditional statements allow JavaScript programs to make decisions based on specific conditions.

Instead of executing every line of code, a program can choose different actions depending on whether a condition is true or false.

Conditional statements are a fundamental part of programming and are used in almost every real-world application.

Examples include:

- Checking login credentials.
- Validating form inputs.
- Determining user permissions.
- Displaying different content based on user actions.

---

# What is an If Statement?

The `if` statement executes a block of code only when a specified condition evaluates to `true`.

### Syntax

```javascript
if (condition) {
    // Code to execute
}
```

---

## Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

### Output

```text
You are an adult.
```

Because:

```javascript
20 >= 18
```

evaluates to:

```text
true
```

---

# If Statement Flow

### Example

```javascript
let score = 90;

if (score >= 50) {
    console.log("Passed");
}
```

Flow:

```text
Check Condition
      ↓
 score >= 50 ?
      ↓
    True
      ↓
 Execute Code
```

---

# if...else Statement

The `else` block executes when the condition is false.

### Syntax

```javascript
if (condition) {

    // True block

} else {

    // False block

}
```

---

## Example

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Output

```text
Minor
```

---

# if...else if...else Statement

Used when multiple conditions need to be checked.

### Syntax

```javascript
if (condition1) {

}
else if (condition2) {

}
else {

}
```

---

## Example

```javascript
let grade = 85;

if (grade >= 90) {

    console.log("A");

}
else if (grade >= 80) {

    console.log("B");

}
else if (grade >= 70) {

    console.log("C");

}
else {

    console.log("Failed");

}
```

### Output

```text
B
```

---

# Multiple Conditions Using AND (&&)

The `&&` operator returns true only when all conditions are true.

### Example

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {

    console.log("Can Drive");

}
```

### Output

```text
Can Drive
```

---

# Multiple Conditions Using OR (||)

The `||` operator returns true if at least one condition is true.

### Example

```javascript
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {

    console.log("Access Granted");

}
```

### Output

```text
Access Granted
```

---

# Using NOT (!)

The `!` operator reverses a boolean value.

### Example

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {

    console.log("Please Login");

}
```

### Output

```text
Please Login
```

---

# Nested If Statements

An `if` statement can exist inside another `if` statement.

### Example

```javascript
let age = 22;
let hasID = true;

if (age >= 18) {

    if (hasID) {

        console.log("Entry Allowed");

    }

}
```

### Output

```text
Entry Allowed
```

---

# Truthy and Falsy Values

JavaScript automatically converts values to either true or false when evaluating conditions.

---

## Falsy Values

These values are treated as false:

```javascript
false
0
""
null
undefined
NaN
```

### Example

```javascript
let username = "";

if (username) {

    console.log("Welcome");

}
else {

    console.log("Please Enter Username");

}
```

### Output

```text
Please Enter Username
```

---

## Truthy Values

Almost everything else is considered true.

Examples:

```javascript
"Ahmed"
100
[]
{}
true
```

---

# Comparison Operators in Conditions

Common comparison operators:

| Operator | Description |
|-----------|------------|
| == | Equal Value |
| === | Equal Value and Type |
| != | Not Equal |
| !== | Not Equal Value or Type |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal |
| <= | Less Than or Equal |

---

## Example

```javascript
let number = 10;

if (number === 10) {

    console.log("Correct");

}
```

### Output

```text
Correct
```

---

# Real-World Example

### Login Validation

```javascript
let username = "Ahmed";
let password = "123456";

if (username === "Ahmed" && password === "123456") {

    console.log("Login Successful");

}
else {

    console.log("Invalid Credentials");

}
```

---

# Common Mistakes

## Using = Instead of == or ===

Wrong:

```javascript
if (age = 18) {

}
```

Correct:

```javascript
if (age === 18) {

}
```

---

## Forgetting Curly Braces

Bad Practice:

```javascript
if (age >= 18)
    console.log("Adult");
```

Recommended:

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

## Using == Instead of ===

Bad Practice:

```javascript
if (5 == "5") {

}
```

Recommended:

```javascript
if (5 === "5") {

}
```

Because strict equality checks both value and type.

---

# Best Practices

- Prefer `===` and `!==`.
- Keep conditions simple and readable.
- Use meaningful variable names.
- Avoid deeply nested conditions when possible.
- Always use curly braces for clarity.
- Test both true and false scenarios.

---

# Key Takeaways

- `if` statements execute code only when a condition is true.
- `else` executes when the condition is false.
- `else if` allows multiple conditions to be checked.
- Logical operators (`&&`, `||`, `!`) help create complex conditions.
- JavaScript uses truthy and falsy values when evaluating conditions.
- Prefer strict equality (`===`) over loose equality (`==`).
- Conditional statements are essential for decision-making in JavaScript programs.
