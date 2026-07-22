# JavaScript Operators

## Introduction

Operators are special symbols used to perform operations on values and variables. They are one of the fundamental building blocks of JavaScript and are used in almost every program.

Operators can be used to:

- Perform calculations.
- Compare values.
- Assign values.
- Combine conditions.
- Make decisions.

---

# What is an Operator?

An operator is a symbol that tells JavaScript to perform a specific action.

### Example

```javascript
let result = 10 + 5;
```

In this example:

- `10` and `5` are operands.
- `+` is the operator.

Output:

```text
15
```

---

# Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Description | Example |
|-----------|------------|-----------|
| + | Addition | 10 + 5 |
| - | Subtraction | 10 - 5 |
| * | Multiplication | 10 * 5 |
| / | Division | 10 / 5 |
| % | Modulus (Remainder) | 10 % 3 |
| ** | Exponentiation | 2 ** 3 |

---

## Addition (+)

```javascript
let result = 10 + 5;

console.log(result);
```

Output:

```text
15
```

---

## Subtraction (-)

```javascript
let result = 10 - 5;

console.log(result);
```

Output:

```text
5
```

---

## Multiplication (*)

```javascript
let result = 10 * 5;

console.log(result);
```

Output:

```text
50
```

---

## Division (/)

```javascript
let result = 10 / 2;

console.log(result);
```

Output:

```text
5
```

---

## Modulus (%)

Returns the remainder after division.

```javascript
let result = 10 % 3;

console.log(result);
```

Output:

```text
1
```

---

## Exponentiation (**)

```javascript
let result = 2 ** 3;

console.log(result);
```

Output:

```text
8
```

---

# Assignment Operators

Assignment operators assign values to variables.

---

## Basic Assignment (=)

```javascript
let age = 21;
```

---

## Addition Assignment (+=)

```javascript
let x = 10;

x += 5;

console.log(x);
```

Output:

```text
15
```

Equivalent to:

```javascript
x = x + 5;
```

---

## Subtraction Assignment (-=)

```javascript
let x = 10;

x -= 3;

console.log(x);
```

Output:

```text
7
```

---

## Multiplication Assignment (*=)

```javascript
let x = 10;

x *= 2;

console.log(x);
```

Output:

```text
20
```

---

## Division Assignment (/=)

```javascript
let x = 10;

x /= 2;

console.log(x);
```

Output:

```text
5
```

---

# Comparison Operators

Comparison operators compare two values and return:

```text
true
```

or

```text
false
```

---

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

## Equal (==)

Checks value only.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

---

## Strict Equal (===)

Checks value and data type.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Because:

```text
Number !== String
```

---

## Not Equal (!=)

```javascript
console.log(5 != 10);
```

Output:

```text
true
```

---

## Strict Not Equal (!==)

```javascript
console.log(5 !== "5");
```

Output:

```text
true
```

---

## Greater Than (>)

```javascript
console.log(10 > 5);
```

Output:

```text
true
```

---

## Less Than (<)

```javascript
console.log(3 < 10);
```

Output:

```text
true
```

---

# Logical Operators

Logical operators combine multiple conditions.

---

| Operator | Description |
|-----------|------------|
| && | AND |
| \|\| | OR |
| ! | NOT |

---

## Logical AND (&&)

Returns true only if both conditions are true.

```javascript
let age = 21;

console.log(age > 18 && age < 30);
```

Output:

```text
true
```

---

## Logical OR (||)

Returns true if at least one condition is true.

```javascript
let age = 15;

console.log(age < 18 || age > 60);
```

Output:

```text
true
```

---

## Logical NOT (!)

Reverses a boolean value.

```javascript
console.log(!true);
```

Output:

```text
false
```

---

# Increment and Decrement Operators

Used to increase or decrease values by one.

---

## Increment (++)

```javascript
let count = 5;

count++;

console.log(count);
```

Output:

```text
6
```

---

## Decrement (--)

```javascript
let count = 5;

count--;

console.log(count);
```

Output:

```text
4
```

---

# String Operators

The `+` operator can concatenate strings.

### Example

```javascript
let firstName = "Ahmed";
let lastName = "Talaat";

console.log(firstName + " " + lastName);
```

Output:

```text
Ahmed Talaat
```

---

# Type Operators

## typeof

Returns the data type of a value.

### Example

```javascript
let name = "Ahmed";

console.log(typeof name);
```

Output:

```text
string
```

---

More examples:

```javascript
typeof 100;
```

Output:

```text
number
```

```javascript
typeof true;
```

Output:

```text
boolean
```

---

# Operator Precedence

JavaScript follows mathematical order when evaluating expressions.

### Example

```javascript
let result = 10 + 5 * 2;
```

Output:

```text
20
```

Because:

```javascript
5 * 2 = 10

10 + 10 = 20
```

---

## Using Parentheses

Parentheses have higher priority.

```javascript
let result = (10 + 5) * 2;
```

Output:

```text
30
```

---

# Common Mistakes

## Using == Instead of ===

Bad Practice:

```javascript
5 == "5";
```

Output:

```text
true
```

Recommended:

```javascript
5 === "5";
```

Output:

```text
false
```

Always prefer strict equality (`===`) in modern JavaScript.

---

## Forgetting Operator Precedence

```javascript
let result = 10 + 2 * 3;
```

Output:

```text
16
```

Not:

```text
36
```

---

# Best Practices

- Use `===` instead of `==`.
- Use meaningful variable names.
- Use parentheses to improve readability.
- Keep conditions simple and readable.
- Understand operator precedence before writing complex expressions.

---

# Key Takeaways

- Operators perform actions on values and variables.
- Arithmetic operators handle calculations.
- Assignment operators assign and update values.
- Comparison operators return true or false.
- Logical operators combine conditions.
- Increment and decrement operators modify values by one.
- The `typeof` operator returns a value's data type.
- Prefer `===` and `!==` over `==` and `!=` in modern JavaScript.
