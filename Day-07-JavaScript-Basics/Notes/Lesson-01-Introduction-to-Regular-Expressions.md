# Lesson 01: Introduction to Regular Expressions (RegEx)

## Introduction

Regular Expressions, commonly known as **RegEx**, are patterns used to search, match, validate, and manipulate text.

They are widely used in web development for:

- Form validation
- Email validation
- Password validation
- Searching text
- Replacing text
- Extracting specific information from strings

Regular Expressions provide a powerful way to work with text efficiently.

---

# What is a Regular Expression?

A Regular Expression is a sequence of characters that defines a search pattern.

### Example

```javascript
let pattern = /hello/;
```

This pattern searches for the word:

```text
hello
```

inside a string.

---

# Why Do We Need Regular Expressions?

Without RegEx:

```javascript
let email = "ahmed@gmail.com";

if (
    email.includes("@") &&
    email.includes(".com")
) {
    console.log("Valid Email");
}
```

This works only for simple cases.

With RegEx:

```javascript
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

We can perform professional validation with a single pattern.

---

# Creating a Regular Expression

There are two ways to create a Regular Expression.

---

## 1. Regular Expression Literal

```javascript
let pattern = /hello/;
```

This is the most common method.

---

## 2. RegExp Constructor

```javascript
let pattern = new RegExp("hello");
```

Both methods create the same Regular Expression.

---

# Basic Matching Example

```javascript
let text = "Hello Ahmed";

let pattern = /Ahmed/;

console.log(pattern.test(text));
```

Output:

```text
true
```

Because the word:

```text
Ahmed
```

exists in the string.

---

# Case Sensitivity

By default, RegEx is case-sensitive.

### Example

```javascript
let pattern = /hello/;

console.log(
    pattern.test("Hello")
);
```

Output:

```text
false
```

Because:

```text
hello ≠ Hello
```

---

# Using Flags

Flags modify the behavior of Regular Expressions.

### Syntax

```javascript
/pattern/flag
```

---

## The i Flag (Ignore Case)

```javascript
let pattern = /hello/i;

console.log(
    pattern.test("Hello")
);
```

Output:

```text
true
```

Now the match ignores letter casing.

---

## The g Flag (Global Search)

Searches for all matches instead of stopping at the first match.

```javascript
let text = "cat cat cat";

let pattern = /cat/g;
```

---

# Common Uses of Regular Expressions

---

## Email Validation

```javascript
let email = "user@gmail.com";

let pattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(
    pattern.test(email)
);
```

Output:

```text
true
```

---

## Phone Number Validation

```javascript
let phone = "01234567890";

let pattern = /^\d+$/;

console.log(
    pattern.test(phone)
);
```

Output:

```text
true
```

---

## Username Validation

```javascript
let username = "Ahmed123";

let pattern = /^[a-zA-Z0-9]+$/;

console.log(
    pattern.test(username)
);
```

Output:

```text
true
```

---

# How Regular Expressions Work

A RegEx engine scans the text and checks whether the text matches the specified pattern.

### Example

```javascript
let text = "JavaScript";

let pattern = /Script/;
```

Process:

```text
Scan Text
     ↓
Find Pattern
     ↓
Match Found
     ↓
Return True
```

---

# Real-World Example

### Login Form Validation

```javascript
let username =
prompt("Enter Username");

let pattern =
/^[a-zA-Z0-9]{4,10}$/;

if (pattern.test(username)) {

    console.log(
        "Valid Username"
    );

}
else {

    console.log(
        "Invalid Username"
    );

}
```

This ensures:

- Only letters and numbers.
- Length between 4 and 10 characters.

---

# Advantages of Regular Expressions

- Powerful text searching.
- Fast validation.
- Reduces code complexity.
- Works with strings efficiently.
- Supported by most programming languages.

---

# Common Mistakes

## Forgetting Case Sensitivity

Wrong:

```javascript
let pattern = /hello/;

pattern.test("Hello");
```

Output:

```text
false
```

---

Correct:

```javascript
let pattern = /hello/i;
```

Output:

```text
true
```

---

## Using RegEx for Simple Tasks

Sometimes simple string methods are easier.

Example:

```javascript
text.includes("Ahmed");
```

Instead of:

```javascript
/Ahmed/.test(text);
```

Choose the simplest solution when possible.

---

# Best Practices

- Use meaningful pattern names.
- Test patterns thoroughly.
- Keep expressions simple and readable.
- Use flags only when needed.
- Document complex Regular Expressions.

---

# Summary

Regular Expressions (RegEx) are patterns used to search, validate, and manipulate text.

Common applications include:

- Email Validation
- Phone Number Validation
- Username Validation
- Search Operations
- Text Processing

Regular Expressions can be created using:

- Literal Syntax
- RegExp Constructor

Flags such as:

- `i`
- `g`

help modify matching behavior.

---

# Key Takeaways

- RegEx is a pattern used for matching text.
- Regular Expressions are commonly used for validation.
- They can be created using `/pattern/` or `new RegExp()`.
- The `test()` method checks whether a match exists.
- Flags such as `i` and `g` modify matching behavior.
- RegEx is an essential skill for modern JavaScript development.
