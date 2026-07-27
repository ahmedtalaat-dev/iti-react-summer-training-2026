# Lesson 06: DOM Traversing

## Introduction

DOM Traversing is the process of navigating through the DOM tree to access parent, child, and sibling elements.

Since every HTML document is represented as a tree structure, JavaScript can move between elements and retrieve related nodes.

DOM Traversing is useful for:

- Finding related elements.
- Manipulating groups of elements.
- Building dynamic user interfaces.
- Navigating complex HTML structures.

---

# What is DOM Traversing?

DOM Traversing means moving through the DOM tree using JavaScript.

Consider the following HTML:

```html
<body>

    <div id="container">

        <h1>Title</h1>

        <p>Paragraph</p>

        <button>Click</button>

    </div>

</body>
```

DOM Tree:

```text
body
│
└── div
    │
    ├── h1
    ├── p
    └── button
```

Using DOM Traversing, JavaScript can move between these elements.

---

# Parent Elements

A parent element contains one or more child elements.

Example:

```html
<div id="container">

    <h1>Title</h1>

</div>
```

The parent of:

```html
<h1>
```

is:

```html
<div>
```

---

## parentElement

Returns the parent HTML element.

### Example

```javascript
let heading =
document.querySelector("h1");

console.log(
    heading.parentElement
);
```

Output:

```html
<div id="container">
```

---

# Child Elements

Child elements are elements inside another element.

Example:

```html
<div>

    <h1>Title</h1>

    <p>Text</p>

</div>
```

Both:

```html
<h1>
```

and

```html
<p>
```

are children of:

```html
<div>
```

---

## children

Returns all child elements.

### Example

```javascript
let container =
document.getElementById(
    "container"
);

console.log(
    container.children
);
```

Output:

```text
HTMLCollection(3)
```

Contains:

```text
h1
p
button
```

---

## childElementCount

Returns the number of child elements.

### Example

```javascript
console.log(
    container.childElementCount
);
```

Output:

```text
3
```

---

# First Child Element

## firstElementChild

Returns the first child element.

### Example

```javascript
console.log(
    container.firstElementChild
);
```

Output:

```html
<h1>
```

---

# Last Child Element

## lastElementChild

Returns the last child element.

### Example

```javascript
console.log(
    container.lastElementChild
);
```

Output:

```html
<button>
```

---

# Sibling Elements

Sibling elements share the same parent.

Example:

```html
<div>

    <h1></h1>

    <p></p>

    <button></button>

</div>
```

The:

```html
h1
```

and

```html
p
```

elements are siblings.

---

# nextElementSibling

Returns the next sibling element.

### Example

```javascript
let heading =
document.querySelector("h1");

console.log(
    heading.nextElementSibling
);
```

Output:

```html
<p>
```

---

# previousElementSibling

Returns the previous sibling element.

### Example

```javascript
let paragraph =
document.querySelector("p");

console.log(
    paragraph.previousElementSibling
);
```

Output:

```html
<h1>
```

---

# Traversing Up the DOM Tree

Sometimes we need to move from a child element to its parent.

### Example

HTML:

```html
<div id="card">

    <button id="deleteBtn">
        Delete
    </button>

</div>
```

JavaScript:

```javascript
let button =
document.getElementById(
    "deleteBtn"
);

console.log(
    button.parentElement
);
```

Output:

```html
<div id="card">
```

---

# Traversing Down the DOM Tree

Move from parent to child.

### Example

```javascript
let card =
document.getElementById(
    "card"
);

console.log(
    card.firstElementChild
);
```

Output:

```html
<button>
```

---

# Accessing Specific Children

Children can be accessed by index.

### Example

```javascript
let container =
document.getElementById(
    "container"
);

console.log(
    container.children[0]
);
```

Output:

```html
<h1>
```

---

### Example

```javascript
console.log(
    container.children[1]
);
```

Output:

```html
<p>
```

---

# Looping Through Children

### Example

```javascript
let container =
document.getElementById(
    "container"
);

for (let child of container.children) {

    console.log(child);

}
```

Output:

```text
h1
p
button
```

---

# Real-World Example

## Highlight All Menu Items

HTML:

```html
<ul id="menu">

    <li>Home</li>

    <li>About</li>

    <li>Contact</li>

</ul>
```

JavaScript:

```javascript
let menu =
document.getElementById(
    "menu"
);

for (let item of menu.children) {

    item.style.color =
    "blue";

}
```

Result:

```text
All menu items become blue.
```

---

# Real-World Example

## Remove Last Item

HTML:

```html
<ul id="tasks">

    <li>Task 1</li>

    <li>Task 2</li>

    <li>Task 3</li>

</ul>
```

JavaScript:

```javascript
let tasks =
document.getElementById(
    "tasks"
);

tasks.lastElementChild.remove();
```

Result:

```text
Task 3 is removed.
```

---

# Common Mistakes

## Using childNodes Instead of children

Wrong:

```javascript
container.childNodes
```

This returns:

```text
Elements
Text Nodes
Comments
```

which may cause confusion.

---

Correct:

```javascript
container.children
```

Returns only HTML elements.

---

## Accessing Non-Existing Siblings

Wrong:

```javascript
element.nextElementSibling
```

when there is no next sibling.

Result:

```text
null
```

Always check before using it.

---

## Forgetting That HTMLCollection Is Not an Array

Wrong:

```javascript
container.children.map()
```

Result:

```text
Error
```

Convert it to an array first if needed.

---

# DOM Traversing Methods Summary

| Method | Description |
|----------|-------------|
| parentElement | Returns parent element |
| children | Returns child elements |
| childElementCount | Number of children |
| firstElementChild | First child |
| lastElementChild | Last child |
| nextElementSibling | Next sibling |
| previousElementSibling | Previous sibling |

---

# Best Practices

- Use `children` when working with HTML elements only.
- Check for `null` before accessing siblings.
- Keep DOM traversing simple and readable.
- Avoid unnecessary traversal when a direct selector can be used.
- Use loops to work with multiple child elements efficiently.

---

# Summary

DOM Traversing allows JavaScript to navigate through the DOM tree and access related elements.

Important methods include:

### Parent Navigation

```javascript
parentElement
```

### Child Navigation

```javascript
children
firstElementChild
lastElementChild
childElementCount
```

### Sibling Navigation

```javascript
nextElementSibling
previousElementSibling
```

DOM Traversing is essential for efficiently interacting with structured HTML documents and building dynamic user interfaces.

---

# Key Takeaways

- DOM Traversing means navigating the DOM tree.
- Elements can have parents, children, and siblings.
- `parentElement` accesses the parent.
- `children` accesses all child elements.
- `firstElementChild` and `lastElementChild` access specific children.
- `nextElementSibling` and `previousElementSibling` navigate between siblings.
- DOM Traversing is widely used in modern web development.
