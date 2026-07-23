# JavaScript Lab Assignments

## Task Structure

```text
Tasks
│
├── README.md
│
└── Output
```

---

## Assignment 01 - Welcome Page

### Requirements

- Display an alert saying:

```text
Welcome to my site
```

- Ask the user to enter their name using a prompt.
- Display:

```text
Welcome + User Name
```

Example:

```text
Welcome Ahmed
```

---

## Assignment 02 - Sum Function

### Requirements

- Create a function in an external JavaScript file.
- The function should:
  - Accept two parameters.
  - Return their sum.
  - Not print or alert inside the function.

- Create a button that:
  - Asks the user to enter two numbers.
  - Calls the sum function.
  - Displays the returned result in the console.

---

## Assignment 03 - Temperature Checker

### Requirements

Create a function that:

- Accepts today's temperature as a parameter.
- Displays:

```text
HOT
```

if temperature ≥ 30.

- Displays:

```text
Cold
```

if temperature < 30.

### Constraint

Use the **Ternary Operator**.

---

## Assignment 04 - Temperature & Actual Feel Checker

### Requirements

Create a function that accepts:

- Temperature
- Actual Feel Temperature

### Cases

#### Normal

```text
Temperature between 25 and 30
AND
Actual Feel between 25 and 30
```

Output:

```text
Normal
```

---

#### Cold

```text
Temperature less than 25
AND
Actual Feel less than 25
```

Output:

```text
Cold
```

---

#### Hot

```text
Temperature greater than 30
AND
Actual Feel greater than 30
```

Output:

```text
Hot
```

---

#### Otherwise

Output:

```text
Ambiguous, can't detect
```

---

## Assignment 05 - Faculty Track Recommender

### Requirements

Create a function that accepts a faculty name.

### FCI

```text
You're eligible to Programming tracks
```

### Engineering

```text
You're eligible to Network and Embedded tracks
```

### Commerce

```text
You're eligible to ERP and Social Media tracks
```

### Any Other Faculty

```text
You're eligible to SW Fundamentals track
```

### Constraint

Use:

```javascript
switch
```

---

## Assignment 06 - Odd Numbers Generator

### Requirements

Create a function that:

- Accepts:
  - Start Number
  - End Number

- Prints all odd numbers between them.

### Example

Input:

```text
1 , 10
```

Output:

```text
1
3
5
7
9
```

---

## Assignment 07 - Math Expression Calculator

### Requirements

Create a button that:

- Asks the user to enter a mathematical expression.

Example:

```text
3+4*5/10*8
```

- Passes the expression to a function.
- Executes the expression.
- Displays the result in an alert.

### Expected Output

```text
You entered: 3+4*5/10*8

The result is: 19
```
