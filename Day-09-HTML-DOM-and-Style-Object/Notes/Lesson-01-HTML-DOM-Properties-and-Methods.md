# Lesson 01: HTML DOM Properties and Methods

## Introduction

The **HTML DOM (Document Object Model)** is a programming interface that represents an HTML document as a tree of objects. It allows JavaScript to access, read, modify, add, and remove elements from a web page dynamically.

Using the DOM, JavaScript can:

- Access HTML elements.
- Modify content.
- Change styles.
- Handle events.
- Create interactive web pages.

---

# What is the DOM?

When a browser loads an HTML page, it converts the document into a tree-like structure called the **DOM Tree**.

Example HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome to DOM</p>
</body>
</html>
```

DOM Tree:

```text
Document
│
└── html
    │
    ├── head
    │   └── title
    │
    └── body
        │
        ├── h1
        └── p
```

Each HTML element becomes a JavaScript object that can be manipulated.

---

# DOM Properties

Properties are values associated with DOM elements.

Example:

```html
<h1 id="title">Welcome</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");

console.log(heading.innerText);
```

Output:

```text
Welcome
```

Here:

```javascript
innerText
```

is a DOM property.

---

# Common DOM Properties

| Property | Description |
|-----------|-------------|
| innerHTML | Gets or sets HTML content |
| innerText | Gets or sets visible text |
| textContent | Gets or sets all text |
| id | Element ID |
| className | Element class |
| style | Access CSS styles |
| value | Form input value |

---

## innerHTML

Returns or changes HTML content.

Example:

```javascript
element.innerHTML =
"<h2>Hello DOM</h2>";
```

Result:

```html
<h2>Hello DOM</h2>
```

---

## innerText

Returns visible text only.

Example:

```javascript
element.innerText =
"Ahmed Talaat";
```

---

## textContent

Returns all text content.

Example:

```javascript
element.textContent =
"Front-End Developer";
```

---

# DOM Methods

Methods are functions used to perform actions on DOM elements.

Example:

```javascript
document.getElementById("title");
```

Here:

```javascript
getElementById()
```

is a DOM method.

---

# Accessing Elements

Before manipulating an element, JavaScript must select it.

---

## getElementById()

Selects an element by its ID.

HTML:

```html
<h1 id="title">
    Welcome
</h1>
```

JavaScript:

```javascript
let title =
document.getElementById("title");
```

---

## getElementsByClassName()

Selects all elements with a specific class.

HTML:

```html
<p class="text">One</p>
<p class="text">Two</p>
```

JavaScript:

```javascript
let paragraphs =
document.getElementsByClassName(
    "text"
);
```

---

## getElementsByTagName()

Selects elements by tag name.

Example:

```javascript
let paragraphs =
document.getElementsByTagName("p");
```

---

## querySelector()

Returns the first matching element.

Example:

```javascript
let heading =
document.querySelector("h1");
```

---

## querySelectorAll()

Returns all matching elements.

Example:

```javascript
let items =
document.querySelectorAll(".item");
```

---

# Reading Element Information

---

## Getting Text

HTML:

```html
<h1 id="title">
    Hello
</h1>
```

JavaScript:

```javascript
let title =
document.getElementById("title");

console.log(
    title.innerText
);
```

Output:

```text
Hello
```

---

## Getting HTML Content

```javascript
console.log(
    title.innerHTML
);
```

---

## Getting Attributes

HTML:

```html
<img
    id="logo"
    src="logo.png"
>
```

JavaScript:

```javascript
let image =
document.getElementById("logo");

console.log(
    image.src
);
```

---

# Modifying Content

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
.innerText =
"Hello Ahmed";
```

Result:

```html
<h1>Hello Ahmed</h1>
```

---

# Modifying HTML

```javascript
document
.getElementById("content")
.innerHTML =
"<b>DOM Example</b>";
```

Result:

```html
<b>DOM Example</b>
```

---

# Accessing Form Values

HTML:

```html
<input
    type="text"
    id="username"
>
```

JavaScript:

```javascript
let username =
document
.getElementById("username")
.value;

console.log(username);
```

---

# Real-World Example

HTML:

```html
<h1 id="welcome">
    Welcome
</h1>

<button id="btn">
    Change Text
</button>
```

JavaScript:

```javascript
let button =
document.getElementById("btn");

button.onclick =
function () {

    document
    .getElementById("welcome")
    .innerText =
    "Welcome Ahmed";

};
```

Result:

```text
Text changes when button is clicked.
```

---

# Common Mistakes

## Forgetting to Select the Element

Wrong:

```javascript
title.innerText =
"Hello";
```

Correct:

```javascript
let title =
document.getElementById("title");

title.innerText =
"Hello";
```

---

## Using Wrong Selector

Wrong:

```javascript
document.getElementById(".title");
```

Correct:

```javascript
document.getElementById("title");
```

`getElementById()` takes the ID name only.

---

## Using innerHTML for Plain Text

Wrong:

```javascript
element.innerHTML =
"Ahmed";
```

Better:

```javascript
element.innerText =
"Ahmed";
```

---

# Best Practices

- Use `querySelector()` for flexible selection.
- Use `textContent` or `innerText` for text updates.
- Use `innerHTML` only when necessary.
- Store selected elements in variables.
- Use meaningful variable names.
- Avoid repeated DOM queries.

---

# Summary

The HTML DOM allows JavaScript to interact with web pages dynamically.

Important DOM Properties:

```javascript
innerHTML
innerText
textContent
value
style
className
```

Important DOM Methods:

```javascript
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()
```

Understanding DOM properties and methods is the foundation of dynamic web development and interactive user interfaces.

---

# Key Takeaways

- The DOM represents an HTML document as objects.
- Properties store information about elements.
- Methods perform actions on elements.
- Elements must be selected before manipulation.
- JavaScript can read and modify page content dynamically.
- DOM manipulation is a fundamental Front-End Development skill.
