# Lesson 01: Introduction to DOM

## Introduction

When a web page is loaded in the browser, the browser creates a structured representation of the page that JavaScript can interact with.

This representation is called the **Document Object Model (DOM)**.

The DOM allows JavaScript to:

- Access HTML elements.
- Modify content dynamically.
- Change styles.
- Handle user interactions.
- Create and remove elements.
- Build interactive web applications.

The DOM is one of the most important concepts in modern web development because it serves as the bridge between JavaScript and HTML.

---

# What is DOM?

**DOM** stands for:

```text
Document Object Model
```

It is a programming interface provided by the browser that represents an HTML document as a tree of objects.

Each HTML element becomes an object that JavaScript can access and manipulate.

---

# Why Do We Need DOM?

HTML alone creates static web pages.

JavaScript uses the DOM to make web pages dynamic.

Without the DOM, JavaScript would not be able to:

- Change page content.
- Respond to user actions.
- Update elements dynamically.
- Create interactive user interfaces.

---

# How DOM Works

Consider the following HTML document:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>

    <h1>Hello DOM</h1>

    <p>Welcome to JavaScript.</p>

</body>
</html>
```

The browser converts it into a DOM tree.

---

# DOM Tree Structure

```text
Document
│
└── html
    │
    ├── head
    │   │
    │   └── title
    │
    └── body
        │
        ├── h1
        │
        └── p
```

Every HTML element becomes a node inside the DOM tree.

---

# What is a Node?

A node is any object inside the DOM tree.

Examples:

```html
<h1>Hello</h1>
```

```html
<p>Welcome</p>
```

```html
<div></div>
```

All of these are nodes.

---

# Types of DOM Nodes

### Document Node

Represents the entire HTML document.

```javascript
document
```

---

### Element Node

Represents HTML elements.

Examples:

```html
<h1>
<p>
<div>
<button>
```

---

### Text Node

Represents text inside elements.

Example:

```html
<h1>Hello DOM</h1>
```

Text node:

```text
Hello DOM
```

---

### Attribute Node

Represents element attributes.

Example:

```html
<input type="text">
```

Attribute:

```text
type="text"
```

---

# DOM and JavaScript

JavaScript interacts with the DOM through the `document` object.

Example:

```javascript
console.log(document);
```

Output:

```text
Entire HTML Document
```

The document object is the entry point for DOM manipulation.

---

# Accessing the DOM

The browser automatically creates:

```javascript
document
```

which represents the current page.

Example:

```javascript
document.body
```

Output:

```html
<body>
```

---

# DOM vs HTML Source Code

HTML Source:

```html
<h1>Hello</h1>
```

DOM Representation:

```javascript
{
    tagName: "H1",
    innerText: "Hello"
}
```

The browser converts HTML into objects that JavaScript can work with.

---

# DOM vs BOM

Many beginners confuse DOM and BOM.

| DOM | BOM |
|------|------|
| Document Object Model | Browser Object Model |
| Represents the webpage | Represents the browser |
| document object | window object |
| Manipulates HTML elements | Controls browser features |
| Content focused | Browser focused |

---

### DOM Example

```javascript
document.body.style.background =
"lightblue";
```

Changes page content.

---

### BOM Example

```javascript
alert("Welcome");
```

Interacts with the browser.

---

# Real-World Example

HTML:

```html
<h1 id="title">
    Welcome
</h1>
```

JavaScript:

```javascript
document
.getElementById("title")
.innerHTML =
"Hello Ahmed";
```

Result:

```text
Welcome
```

becomes:

```text
Hello Ahmed
```

The page changes without reloading.

---

# Advantages of DOM

### Dynamic Content

Content can be updated instantly.

---

### User Interaction

Pages can react to user actions.

---

### Better User Experience

No need to reload pages frequently.

---

### Interactive Applications

Allows building:

- Dashboards
- Games
- Forms
- Single Page Applications (SPA)

---

# Common DOM Operations

Developers frequently use the DOM to:

### Select Elements

```javascript
document.getElementById()
```

---

### Change Content

```javascript
element.innerHTML
```

---

### Change Styles

```javascript
element.style.color
```

---

### Handle Events

```javascript
button.onclick
```

---

### Create Elements

```javascript
document.createElement()
```

---

### Remove Elements

```javascript
element.remove()
```

---

# Common Mistakes

## Accessing Elements Before Loading

Wrong:

```javascript
document
.getElementById("title")
.innerHTML =
"Hello";
```

before the element exists.

Result:

```text
null error
```

---

## Confusing DOM with HTML

HTML:

```html
<h1>Hello</h1>
```

DOM:

```javascript
Object Representation
```

They are not the same thing.

---

# Best Practices

- Understand the DOM tree structure.
- Use meaningful IDs and classes.
- Minimize unnecessary DOM updates.
- Keep JavaScript separated from HTML when possible.
- Manipulate the DOM efficiently for better performance.

---

# Summary

The Document Object Model (DOM) is a browser-provided interface that represents an HTML document as a tree of objects.

It allows JavaScript to:

- Access elements.
- Modify content.
- Change styles.
- Handle events.
- Create dynamic web applications.

The `document` object is the starting point for all DOM operations.

Understanding the DOM is essential because almost every JavaScript web application relies on it.

---

# Key Takeaways

- DOM stands for Document Object Model.
- The browser converts HTML into a DOM tree.
- Every HTML element becomes an object.
- JavaScript interacts with the page through the `document` object.
- DOM enables dynamic and interactive web pages.
- DOM is different from BOM.
- Mastering DOM is a fundamental skill for every Front-End Developer.
