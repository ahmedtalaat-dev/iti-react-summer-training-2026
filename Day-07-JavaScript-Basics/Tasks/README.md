# JavaScript Lab Assignments

## Overview

This lab was completed as part of **Day 07 - JavaScript Basics** during the ITI React Summer Training 2026.

The assignments focused on practicing:

- Arrays
- Array Methods
- Objects
- Date Object
- String Methods
- Regular Expressions
- BOM (Browser Object Model)

---

## Task Structure

```text
Task
│
├── README.md
│
└── Output
```

---

## Task 01 - JavaScript Tip of the Day

### Requirements

- Create an array containing **10 JavaScript tips**.
- Display a random tip whenever the page is opened.

### Example

```text
Tip of the Day:

Always use === instead of == when possible.
```

---

## Task 02 - Display Current Date and Time

### Requirements

- Create a button.
- When clicked:
  - Display the current date.
  - Display the current time.
  - Use the local date and time format.

### Example

```text
7/31/2026, 10:30:15 AM
```

---

## Task 03 - Email Validation Using String Functions

### Requirements

- Ask the user to enter an email.
- Validate the email using string methods only.
- Do NOT use Regular Expressions.

### Validation Rules

- Must contain:

```text
@
```

- @ must not be:
  - First character
  - Last character

### Valid Example

```text
ahmed@gmail.com
```

### Invalid Examples

```text
@gmail.com
```

```text
ahmedgmail.com
```

```text
ahmed@
```

---

## Task 04 - Full Name and Email Validation Using Regular Expressions

### Requirements

Prompt the user until valid data is entered.

---

### Full Name Validation

Rules:

- Alphabetic characters only.
- No numbers.
- No special characters.
- Each name part must contain at least 3 letters.
- Names are separated by one space.
- No leading spaces.
- No trailing spaces.

### Valid Examples

```text
Ahmed Talaat
```

```text
Mohamed Ahmed Ali
```

### Invalid Examples

```text
Ah Talaat
```

```text
Ahmed123 Talaat
```

```text
 Ahmed Talaat
```

---

### Email Validation

Rules:

Email must end with:

```text
.com.eg
```

or

```text
.net.eg
```

or

```text
.org.eg
```

or

```text
.edu.eg
```

### Valid Examples

```text
name@domain.com.eg
```

```text
student@university.edu.eg
```

### Invalid Examples

```text
name@gmail.com
```

```text
name@yahoo.net
```

---

## Task 05 - HTML Pattern Validation

### Requirements

- Create an HTML input field.
- Use the `pattern` attribute only.
- Use the same Full Name Regular Expression from Task 04.
- Do not use JavaScript validation.

### Example

```html
<input
    type="text"
    pattern="..."
>
```

---

## Task 06 - Array Grades Operations

### Initial Array

```javascript
[60, 100, 10, 15, 85]
```

---

### Required Operations

#### A. Sort Descending

Expected:

```javascript
[100, 85, 60, 15, 10]
```

---

#### B. Find Highest Grade

Use:

```javascript
find()
```

---

#### C. Display Grades Below 60

Use:

```javascript
filter()
```

Expected:

```javascript
[15, 10]
```

---

## Task 07 - Students Objects Operations

### Create Array of Objects

Each object contains:

```javascript
{
    name: "",
    degree: 0
}
```

Example:

```javascript
[
    {
        name: "Ahmed",
        degree: 95
    },
    {
        name: "Ali",
        degree: 50
    }
]
```

---

### Required Operations

#### A. Find Student With Degree Between 90 and 100

Use:

```javascript
find()
```

---

#### B. Print Students With Degree Less Than 60

Use:

```javascript
filter()
```

---

#### C. Add New Student

Use:

```javascript
push()
```

Then print all students using:

```javascript
for...in
```

---

#### D. Remove Last Student

Use:

```javascript
pop()
```

Then print all students using:

```javascript
for...of
```

---

#### E. Sort Alphabetically By Name

Use:

```javascript
sort()
```

---

#### F. Bonus

Add two new students after the second element using:

```javascript
splice()
```

---

#### G. Bonus

Remove one student after the third element using:

```javascript
splice()
```

---

## Task 08 - Birth Date Validation

### Requirements

Ask the user to enter a date in the following format:

```text
DD-MM-YYYY
```

Example:

```text
22-01-1999
```

### Validation Rules

Do NOT use Regular Expressions.

Use String Functions only.

Ensure:

- Length = 10
- First dash at index 2
- Second dash at index 5

---

### If Valid

- Create a Date object.

Example:

```javascript
new Date(year, month, day)
```

- Display the date using:

```javascript
alert()
```

and show:

```javascript
date.toDateString()
```

---

### If Invalid

Display:

```text
Wrong Date Format
```

---

### Additional Requirement

Create a button:

```text
Show Date
```

that executes the validation function.

---

## Technologies Used

- HTML5
- JavaScript (ES6)
- Browser Object Model (BOM)
- Regular Expressions
