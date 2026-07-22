# JavaScript Switch Statement

## Introduction

The `switch` statement is a conditional statement used to execute different blocks of code based on different values.

It provides an alternative to writing multiple `if...else if...else` statements and is often cleaner and easier to read when checking the same variable against many possible values.

---

# Why Use Switch?

Consider the following example using `if...else if`:

```javascript
let day = 3;

if (day === 1) {
    console.log("Sunday");
}
else if (day === 2) {
    console.log("Monday");
}
else if (day === 3) {
    console.log("Tuesday");
}
else {
    console.log("Invalid Day");
}
```

While this works, it becomes difficult to read when many conditions exist.

The `switch` statement provides a cleaner solution.

---

# Syntax

```javascript
switch (expression) {

    case value1:
        // Code block
        break;

    case value2:
        // Code block
        break;

    default:
        // Default code block

}
```

---

# How Switch Works

1. JavaScript evaluates the expression.
2. It compares the result with each case value.
3. If a match is found, the corresponding code executes.
4. The `break` statement stops the switch.
5. If no match exists, the `default` block executes.

---

# Basic Example

```javascript
let day = 2;

switch (day) {

    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");

}
```

### Output

```text
Monday
```

---

# Understanding break

The `break` statement stops the execution of the switch statement after a match is found.

### Example

```javascript
let color = "red";

switch (color) {

    case "red":
        console.log("Red Selected");
        break;

    case "blue":
        console.log("Blue Selected");
        break;

}
```

### Output

```text
Red Selected
```

---

# What Happens Without break?

If `break` is omitted, JavaScript continues executing the following cases.

This behavior is called **Fall Through**.

### Example

```javascript
let day = 1;

switch (day) {

    case 1:
        console.log("Sunday");

    case 2:
        console.log("Monday");

    case 3:
        console.log("Tuesday");

}
```

### Output

```text
Sunday
Monday
Tuesday
```

Because there are no `break` statements.

---

# Default Case

The `default` block runs when no case matches the expression.

### Example

```javascript
let month = 15;

switch (month) {

    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    default:
        console.log("Invalid Month");

}
```

### Output

```text
Invalid Month
```

---

# Multiple Cases with Same Output

Sometimes multiple values should execute the same code.

### Example

```javascript
let day = 6;

switch (day) {

    case 6:
    case 7:
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");

}
```

### Output

```text
Weekend
```

---

# Switch with Strings

The switch statement works with strings as well.

### Example

```javascript
let role = "admin";

switch (role) {

    case "admin":
        console.log("Full Access");
        break;

    case "user":
        console.log("Limited Access");
        break;

    case "guest":
        console.log("View Only");
        break;

    default:
        console.log("Unknown Role");

}
```

### Output

```text
Full Access
```

---

# Real-World Example

### Language Selection

```javascript
let language = "en";

switch (language) {

    case "en":
        console.log("English");
        break;

    case "ar":
        console.log("Arabic");
        break;

    case "fr":
        console.log("French");
        break;

    default:
        console.log("Language Not Supported");

}
```

### Output

```text
English
```

---

# Switch vs If Else

## Using if...else

```javascript
if (day === 1) {

    console.log("Sunday");

}
else if (day === 2) {

    console.log("Monday");

}
else {

    console.log("Invalid Day");

}
```

---

## Using switch

```javascript
switch (day) {

    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    default:
        console.log("Invalid Day");

}
```

---

# When to Use Switch

Use `switch` when:

- Checking one variable against multiple values.
- Working with menus.
- Handling user roles.
- Processing commands.
- Managing application states.

---

# When Not to Use Switch

Avoid `switch` when:

- Conditions involve ranges.

Example:

```javascript
if (score >= 90) {

}
```

- Conditions use complex logic.
- Multiple variables are involved.

In such cases, `if...else` is usually better.

---

# Common Mistakes

## Forgetting break

Wrong:

```javascript
case 1:
    console.log("Sunday");
```

Without `break`, execution continues into the next case.

---

## Using Expressions in Cases

Wrong:

```javascript
case score > 90:
```

`switch` compares exact values and does not evaluate conditions like `if`.

---

## Missing Default Case

Always include a `default` block to handle unexpected values.

---

# Best Practices

- Always use `break` unless fall-through is intended.
- Include a `default` case.
- Use switch when checking many values of the same variable.
- Keep case blocks short and readable.
- Use meaningful variable names.

---

# Key Takeaways

- The `switch` statement is an alternative to multiple `if...else if` statements.
- It compares one expression against multiple possible values.
- The `break` statement prevents fall-through behavior.
- The `default` block executes when no match is found.
- Switch statements improve readability when checking many possible values.
- Use `switch` for exact value comparisons and `if...else` for complex conditions.
