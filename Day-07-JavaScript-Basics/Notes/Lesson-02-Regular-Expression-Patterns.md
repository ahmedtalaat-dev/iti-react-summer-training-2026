# Lesson 02: Regular Expression Patterns

## Introduction

A Regular Expression (RegEx) pattern is a sequence of characters used to define a search rule.

Patterns allow us to:

- Match specific characters.
- Validate user input.
- Search text efficiently.
- Extract information from strings.

Understanding patterns is the most important step in mastering Regular Expressions.

---

# Literal Characters

A literal character matches itself exactly.

### Example

```javascript
let pattern = /Ahmed/;

console.log(
    pattern.test("Ahmed")
);
```

Output:

```text
true
```

Because the exact word exists.

---

# Character Classes

Character classes allow matching a group of characters.

---

## Match Any Digit

```javascript
\d
```

Equivalent to:

```javascript
[0-9]
```

### Example

```javascript
let pattern = /\d/;

console.log(
    pattern.test("Ahmed123")
);
```

Output:

```text
true
```

---

## Match Any Non-Digit

```javascript
\D
```

### Example

```javascript
let pattern = /\D/;

console.log(
    pattern.test("123A")
);
```

Output:

```text
true
```

---

## Match Any Letter, Number, or Underscore

```javascript
\w
```

Equivalent to:

```javascript
[a-zA-Z0-9_]
```

### Example

```javascript
let pattern = /\w/;

console.log(
    pattern.test("@")
);
```

Output:

```text
false
```

---

## Match Any Non-Word Character

```javascript
\W
```

### Example

```javascript
let pattern = /\W/;

console.log(
    pattern.test("@")
);
```

Output:

```text
true
```

---

## Match Any Whitespace

```javascript
\s
```

Matches:

- Space
- Tab
- New Line

### Example

```javascript
let pattern = /\s/;

console.log(
    pattern.test("Ahmed Talaat")
);
```

Output:

```text
true
```

---

## Match Any Non-Whitespace

```javascript
\S
```

### Example

```javascript
let pattern = /\S/;

console.log(
    pattern.test("Ahmed")
);
```

Output:

```text
true
```

---

# Square Brackets []

Used to match one character from a group.

### Example

```javascript
/[abc]/
```

Matches:

```text
a
b
c
```

---

### Example

```javascript
let pattern = /[abc]/;

console.log(
    pattern.test("banana")
);
```

Output:

```text
true
```

Because the string contains:

```text
a
```

---

# Character Ranges

---

## Lowercase Letters

```javascript
[a-z]
```

Matches:

```text
a to z
```

---

## Uppercase Letters

```javascript
[A-Z]
```

Matches:

```text
A to Z
```

---

## Numbers

```javascript
[0-9]
```

Matches:

```text
0 to 9
```

---

## Letters and Numbers

```javascript
[a-zA-Z0-9]
```

---

### Example

```javascript
let pattern =
/^[a-zA-Z0-9]+$/;

console.log(
    pattern.test("Ahmed123")
);
```

Output:

```text
true
```

---

# Negated Character Classes

Use:

```javascript
^
```

inside square brackets.

### Example

```javascript
[^0-9]
```

Matches anything except digits.

---

### Example

```javascript
let pattern = /[^0-9]/;

console.log(
    pattern.test("Ahmed")
);
```

Output:

```text
true
```

---

# Quantifiers

Quantifiers define how many times a character should appear.

---

## Plus +

One or more occurrences.

### Example

```javascript
/a+/
```

Matches:

```text
a
aa
aaa
aaaa
```

---

### Example

```javascript
let pattern = /a+/;

console.log(
    pattern.test("Ahmed")
);
```

Output:

```text
true
```

---

## Asterisk *

Zero or more occurrences.

### Example

```javascript
/a*/
```

Matches:

```text
""
a
aa
aaa
```

---

## Question Mark ?

Zero or one occurrence.

### Example

```javascript
/colou?r/
```

Matches:

```text
color
colour
```

---

# Curly Braces {}

Specify an exact number of repetitions.

---

## Exact Count

```javascript
\d{5}
```

Matches exactly:

```text
12345
```

---

## Minimum Count

```javascript
\d{3,}
```

Matches:

```text
123
1234
12345
```

---

## Range

```javascript
\d{3,5}
```

Matches:

```text
123
1234
12345
```

---

# Anchors

Anchors define the beginning or end of a string.

---

## Beginning of String

```javascript
^
```

### Example

```javascript
/^Ahmed/
```

Matches strings starting with:

```text
Ahmed
```

---

## End of String

```javascript
$
```

### Example

```javascript
/Ahmed$/
```

Matches strings ending with:

```text
Ahmed
```

---

## Full String Match

```javascript
/^Ahmed$/
```

Matches only:

```text
Ahmed
```

---

# The Dot Character

The dot matches any single character.

```javascript
.
```

### Example

```javascript
/a.b/
```

Matches:

```text
acb
a1b
a@b
```

---

# Common Validation Patterns

---

## Username Validation

Only letters and numbers.

```javascript
/^[a-zA-Z0-9]+$/
```

Examples:

```text
Ahmed123
Ali22
```

---

## Phone Number Validation

Egyptian phone number example:

```javascript
/^01[0-9]{9}$/
```

Matches:

```text
01012345678
01198765432
```

---

## Email Validation

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Matches:

```text
user@gmail.com
```

---

## Password Validation

Minimum 8 characters.

```javascript
/^.{8,}$/
```

Examples:

```text
Ahmed123
Password1
```

---

# Real-World Example

### Username Validation

```javascript
let username =
prompt("Enter Username");

let pattern =
/^[a-zA-Z0-9]{4,12}$/;

if (pattern.test(username)) {

    console.log("Valid");

}
else {

    console.log("Invalid");

}
```

Rules:

- Only letters and numbers.
- Minimum 4 characters.
- Maximum 12 characters.

---

# Best Practices

- Keep patterns simple.
- Test patterns thoroughly.
- Use anchors when validating complete input.
- Use meaningful variable names.
- Comment complex patterns.

---

# Summary

Regular Expression patterns define rules for matching text.

Important pattern components:

- Character Classes
- Character Ranges
- Quantifiers
- Anchors
- Wildcards

Common symbols:

| Pattern | Meaning |
|----------|----------|
| `\d` | Digit |
| `\D` | Non-Digit |
| `\w` | Word Character |
| `\W` | Non-Word Character |
| `\s` | Whitespace |
| `\S` | Non-Whitespace |
| `+` | One or More |
| `*` | Zero or More |
| `?` | Optional |
| `^` | Start of String |
| `$` | End of String |
| `.` | Any Character |

---

# Key Takeaways

- Patterns define how text is matched.
- Character classes match groups of characters.
- Quantifiers control repetition.
- Anchors validate entire strings.
- Regular Expression patterns are essential for form validation and text processing.
