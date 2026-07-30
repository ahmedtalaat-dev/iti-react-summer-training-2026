# Day 10 Tasks - ES6 and Advanced JavaScript

## Overview

This folder contains the practical assignments completed during **Day 10 - ES6 and Advanced JavaScript**.

The assignments focus on applying modern JavaScript concepts such as arrow functions, classes, inheritance, mixins, Sets, Maps, template literals, loops, and the spread operator.

---

## Folder Structure

```text
Tasks
│
├── README.md
│
└── Output
    │
    ├── index.html
    └── script.js
```

---

# Task 01 - Arrow Functions

## Objectives

Practice using arrow functions with array methods.

### Requirements

#### A. Filter Odd Numbers

Use:

```javascript
Array.filter()
```

to return only odd numbers from an array.

#### B. Print Even Numbers

Use:

```javascript
Array.forEach()
```

to display only even numbers.

#### C. Square Array Elements

Use:

```javascript
Array.map()
```

to create a new array containing the square of each element.

#### D. Arrow Function vs Normal Function

Demonstrate that:

```text
Arrow functions do not create their own this context.
```

Compare:

- Normal Function
- Arrow Function

using practical examples.

---

# Task 02 - for...in, for...of and forEach()

## Objectives

Understand different ways of looping through arrays.

### Requirements

Use:

```javascript
for...in
```

```javascript
for...of
```

```javascript
forEach()
```

with the same array.

### Compare

- What does each loop return?
- When should each one be used?
- Advantages and disadvantages of each approach.

---

# Task 03 - Spread Operator

## Objectives

Practice using the ES6 Spread Operator.

### Requirements

Use:

```javascript
...
```

with arrays to:

- Copy arrays.
- Merge arrays.
- Add new elements.

---

# Task 04 - Person Class

## Objectives

Practice creating ES6 classes.

### Requirements

Create a class:

```javascript
Person
```

with:

- name
- age

properties.

### Methods

Create:

```javascript
show()
```

that prints:

```text
Name and Age
```

### Static Method

Create:

```javascript
whoAmI()
```

that prints:

```text
I am a person
```

---

# Task 05 - Student Class

## Objectives

Practice inheritance in ES6.

### Requirements

Create:

```javascript
Student
```

that inherits from:

```javascript
Person
```

### Additional Properties

- university
- faculty
- finalGrade

### Output Format

```text
Ahmed is a student in faculty of Computer Science
in university Cairo University

And his final grade is A
```

Use:

```javascript
Template Literals
```

for displaying the data.

### Static Method

Create:

```javascript
whoAmI()
```

that prints:

```text
I am a student
```

---

# Task 06 - Mixins and Object.assign()

## Objectives

Practice reusable functionality with Mixins.

### Requirements

Create a mixin containing:

```javascript
printName()
```

```javascript
printAge()
```

functions.

### Apply Mixin

Use:

```javascript
Object.assign()
```

to add the mixin methods to the Student class.

---

# Task 07 - Sets

## Objectives

Practice working with ES6 Sets.

### Requirements

Create a Set that stores student names.

### Test Duplicate Values

Add repeated names and observe the result.

### Display Values

Print values using:

```javascript
Spread Operator
```

and:

```javascript
for...of
```

### Expected Observation

Sets store only unique values.

---

# Task 08 - Maps

## Objectives

Practice working with ES6 Maps.

### Requirements

Create a Map where:

Key:

```javascript
Student Name
```

Value:

```javascript
{
    Grades: [
        {
            CourseName: "",
            Grade: ""
        }
    ]
}
```

### Example

```javascript
{
    Grades: [
        {
            CourseName: "JavaScript",
            Grade: "Excellent"
        },
        {
            CourseName: "CSS",
            Grade: "V.Good"
        }
    ]
}
```

---

## Part A

Loop through the Map and display:

- Student Name
- Course Names
- Course Grades

---

## Part B

Create a dropdown list.

### Requirements

- Fill the dropdown from the Map keys.
- When a student is selected:
  - Display all courses.
  - Display all grades.

---

# Skills Practiced

Throughout these assignments, the following concepts were applied:

- Arrow Functions
- Array Methods
- for...in Loop
- for...of Loop
- forEach()
- Spread Operator
- Classes
- Inheritance
- Static Methods
- Mixins
- Object.assign()
- Sets
- Maps
- Template Literals
- DOM Manipulation

---

# Output

The implementation files are stored inside:

```text
Tasks/Output
```

and contain the completed solutions for all assignments.
