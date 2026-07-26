# Lesson 03: Regular Expression Methods

## Introduction

After creating Regular Expression patterns, we need methods to use them for searching, validating, extracting, and replacing text.

JavaScript provides several built-in methods for working with Regular Expressions.

The most commonly used methods are:

- `test()`
- `exec()`
- `match()`
- `matchAll()`
- `search()`
- `replace()`
- `replaceAll()`
- `split()`

Understanding these methods is essential for effective text processing and validation.

---

# The test() Method

The `test()` method checks whether a pattern exists in a string.

### Syntax

```javascript
regex.test(string);
```

### Example

```javascript
let pattern = /Ahmed/;

console.log(
    pattern.test("Ahmed Talaat")
);
```

Output:

```text
true
```

---

### Example

```javascript
let pattern = /Ali/;

console.log(
    pattern.test("Ahmed Talaat")
);
```

Output:

```text
false
```

---

## When to Use test()

Use `test()` when:

- Validating user input.
- Checking if text contains a pattern.
- Returning true or false.

---

# The exec() Method

The `exec()` method searches for a match and returns detailed information.

### Syntax

```javascript
regex.exec(string);
```

### Example

```javascript
let pattern = /Ahmed/;

console.log(
    pattern.exec("Ahmed Talaat")
);
```

Output:

```javascript
[
  "Ahmed",
  index: 0,
  input: "Ahmed Talaat"
]
```

---

## When to Use exec()

Use `exec()` when you need:

- Match details.
- Match position.
- Extracted text.

---

# The match() Method

The `match()` method searches a string and returns matching results.

### Syntax

```javascript
string.match(regex);
```

### Example

```javascript
let text = "JavaScript is awesome";

console.log(
    text.match(/awesome/)
);
```

Output:

```javascript
["awesome"]
```

---

## Using Global Search

```javascript
let text = "cat cat cat";

console.log(
    text.match(/cat/g)
);
```

Output:

```javascript
["cat", "cat", "cat"]
```

---

# The matchAll() Method

Returns all matches along with detailed information.

### Example

```javascript
let text = "cat cat cat";

let matches =
text.matchAll(/cat/g);

console.log([...matches]);
```

Output:

```javascript
[
  ["cat"],
  ["cat"],
  ["cat"]
]
```

---

# The search() Method

Returns the index of the first match.

### Syntax

```javascript
string.search(regex);
```

### Example

```javascript
let text =
"Ahmed Talaat";

console.log(
    text.search(/Talaat/)
);
```

Output:

```text
6
```

---

### No Match

```javascript
console.log(
    text.search(/Ali/)
);
```

Output:

```text
-1
```

---

# The replace() Method

Replaces the first matching value.

### Syntax

```javascript
string.replace(regex, replacement);
```

### Example

```javascript
let text =
"Hello Ahmed";

let result =
text.replace(
    /Ahmed/,
    "Ali"
);

console.log(result);
```

Output:

```text
Hello Ali
```

---

# Using Global Replace

```javascript
let text =
"cat cat cat";

let result =
text.replace(
    /cat/g,
    "dog"
);

console.log(result);
```

Output:

```text
dog dog dog
```

---

# The replaceAll() Method

Replaces all matching occurrences.

### Example

```javascript
let text =
"cat cat cat";

let result =
text.replaceAll(
    "cat",
    "dog"
);

console.log(result);
```

Output:

```text
dog dog dog
```

---

# The split() Method

Splits a string using a Regular Expression.

### Syntax

```javascript
string.split(regex);
```

### Example

```javascript
let text =
"Ahmed,Talaat,Frontend";

let result =
text.split(",");

console.log(result);
```

Output:

```javascript
[
  "Ahmed",
  "Talaat",
  "Frontend"
]
```

---

### Example with RegEx

```javascript
let text =
"Ahmed-Talaat|Frontend";

let result =
text.split(/[-|]/);

console.log(result);
```

Output:

```javascript
[
  "Ahmed",
  "Talaat",
  "Frontend"
]
```

---

# Real-World Example

## Email Validation

```javascript
let email =
prompt("Enter Email");

let pattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (pattern.test(email)) {

    console.log(
        "Valid Email"
    );

}
else {

    console.log(
        "Invalid Email"
    );

}
```

Method used:

```javascript
test()
```

---

# Real-World Example

## Replace Bad Words

```javascript
let comment =
"This movie is bad";

let result =
comment.replace(
    /bad/,
    "***"
);

console.log(result);
```

Output:

```text
This movie is ***
```

---

# Comparison Between Methods

| Method | Return Value |
|----------|-------------|
| test() | true / false |
| exec() | Match details |
| match() | Matches array |
| matchAll() | Iterator of matches |
| search() | Match index |
| replace() | Modified string |
| replaceAll() | Modified string |
| split() | Array |

---

# Common Mistakes

## Forgetting Global Flag

Wrong:

```javascript
let text =
"cat cat cat";

console.log(
    text.replace(
        /cat/,
        "dog"
    )
);
```

Output:

```text
dog cat cat
```

Only first match replaced.

---

Correct:

```javascript
text.replace(
    /cat/g,
    "dog"
);
```

Output:

```text
dog dog dog
```

---

## Using test() When Match Data Is Needed

Wrong:

```javascript
pattern.test(text);
```

Returns only:

```text
true
```

Use:

```javascript
exec()
```

or

```javascript
match()
```

when detailed information is required.

---

# Best Practices

- Use `test()` for validation.
- Use `match()` for extraction.
- Use `replace()` for text modification.
- Use `search()` when only the position is needed.
- Use global flags when searching multiple matches.
- Test Regular Expressions carefully.

---

# Summary

JavaScript provides several methods for working with Regular Expressions.

Most important methods:

- `test()`
- `exec()`
- `match()`
- `matchAll()`
- `search()`
- `replace()`
- `replaceAll()`
- `split()`

Each method serves a different purpose depending on whether you need:

- Validation
- Searching
- Extraction
- Replacement
- Splitting

Mastering these methods is essential for form validation and text processing in modern JavaScript applications.

---

# Key Takeaways

- `test()` returns true or false.
- `exec()` returns detailed match information.
- `match()` returns matched text.
- `search()` returns the position of a match.
- `replace()` modifies text.
- `split()` converts text into arrays.
- Regular Expression methods are heavily used in form validation and data processing.
