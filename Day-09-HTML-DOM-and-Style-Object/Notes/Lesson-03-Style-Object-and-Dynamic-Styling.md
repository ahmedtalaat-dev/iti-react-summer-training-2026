# Lesson 03: Style Object and Dynamic Styling

## Introduction

The **Style Object** is a DOM property that allows JavaScript to access and modify an element's inline CSS styles dynamically.

Using the Style Object, we can:

- Change colors.
- Modify fonts.
- Adjust dimensions.
- Show or hide elements.
- Create interactive user interfaces.

Dynamic styling is widely used in modern web applications to improve user experience and provide visual feedback.

---

# What is the Style Object?

Every HTML element has a:

```javascript
style
```

property.

This property represents the element's inline CSS styles.

Example:

```html
<h1 id="title">
    Hello World
</h1>
```

JavaScript:

```javascript
let title =
document.getElementById("title");

console.log(title.style);
```

Output:

```text
CSSStyleDeclaration Object
```

---

# Accessing the Style Object

### Syntax

```javascript
element.style.propertyName
```

Example:

```javascript
title.style.color =
"blue";
```

Result:

```text
The text color becomes blue.
```

---

# Changing Text Color

HTML:

```html
<h1 id="heading">
    Welcome
</h1>
```

JavaScript:

```javascript
let heading =
document.getElementById(
    "heading"
);

heading.style.color =
"red";
```

Result:

```text
The heading text becomes red.
```

---

# Changing Background Color

Example:

```javascript
heading.style.backgroundColor =
"yellow";
```

Result:

```text
Background becomes yellow.
```

---

# Changing Font Size

Example:

```javascript
heading.style.fontSize =
"40px";
```

Result:

```text
Text size becomes 40px.
```

---

# Changing Font Family

Example:

```javascript
heading.style.fontFamily =
"Arial";
```

Result:

```text
Text font changes to Arial.
```

---

# Changing Width and Height

HTML:

```html
<div id="box"></div>
```

JavaScript:

```javascript
let box =
document.getElementById(
    "box"
);

box.style.width =
"300px";

box.style.height =
"200px";
```

Result:

```text
Box size becomes 300px × 200px.
```

---

# Adding Borders

Example:

```javascript
box.style.border =
"2px solid black";
```

Result:

```text
Border appears around the element.
```

---

# Changing Margin

Example:

```javascript
box.style.margin =
"20px";
```

---

# Changing Padding

Example:

```javascript
box.style.padding =
"15px";
```

---

# Showing and Hiding Elements

---

## Hide Element

```javascript
box.style.display =
"none";
```

Result:

```text
Element disappears from the page.
```

---

## Show Element

```javascript
box.style.display =
"block";
```

Result:

```text
Element becomes visible again.
```

---

# Changing Visibility

### Hide

```javascript
box.style.visibility =
"hidden";
```

Result:

```text
Element becomes invisible but still occupies space.
```

---

### Show

```javascript
box.style.visibility =
"visible";
```

---

# Changing Opacity

Example:

```javascript
box.style.opacity =
"0.5";
```

Result:

```text
Element becomes 50% transparent.
```

---

# Dynamic Styling with Events

HTML:

```html
<button id="btn">
    Click Me
</button>
```

JavaScript:

```javascript
let button =
document.getElementById(
    "btn"
);

button.onclick =
function () {

    document.body.style.backgroundColor =
    "lightblue";

};
```

Result:

```text
Background color changes when the button is clicked.
```

---

# Mouse Hover Example

HTML:

```html
<div id="card">
    Hover Me
</div>
```

JavaScript:

```javascript
let card =
document.getElementById(
    "card"
);

card.onmouseover =
function () {

    card.style.backgroundColor =
    "green";

};

card.onmouseout =
function () {

    card.style.backgroundColor =
    "white";

};
```

Result:

```text
Background changes when the mouse enters and leaves the element.
```

---

# Form Validation Example

HTML:

```html
<input
    type="text"
    id="username"
>
```

JavaScript:

```javascript
let input =
document.getElementById(
    "username"
);

input.onblur =
function () {

    if (input.value.length < 3) {

        input.style.backgroundColor =
        "gray";

    }

};
```

Result:

```text
Invalid input field becomes gray.
```

---

# Multiple Style Changes

Example:

```javascript
let box =
document.getElementById(
    "box"
);

box.style.width =
"200px";

box.style.height =
"200px";

box.style.backgroundColor =
"orange";

box.style.borderRadius =
"10px";
```

Result:

```text
Box changes size, color, and shape.
```

---

# CSS Property Naming in JavaScript

CSS properties that contain hyphens use camelCase in JavaScript.

| CSS Property | JavaScript Property |
|-------------|--------------------|
| background-color | backgroundColor |
| font-size | fontSize |
| border-radius | borderRadius |
| margin-top | marginTop |
| padding-left | paddingLeft |

---

# Real-World Example

## Dark Mode Toggle

HTML:

```html
<button id="themeBtn">
    Dark Mode
</button>
```

JavaScript:

```javascript
let themeBtn =
document.getElementById(
    "themeBtn"
);

themeBtn.onclick =
function () {

    document.body.style.backgroundColor =
    "black";

    document.body.style.color =
    "white";

};
```

Result:

```text
The website switches to dark mode.
```

---

# Common Mistakes

## Using CSS Syntax in JavaScript

Wrong:

```javascript
element.style.background-color =
"red";
```

Correct:

```javascript
element.style.backgroundColor =
"red";
```

---

## Forgetting Units

Wrong:

```javascript
element.style.width =
200;
```

Correct:

```javascript
element.style.width =
"200px";
```

---

## Styling Non-Existing Elements

Wrong:

```javascript
document
.getElementById("box")
.style.color =
"red";
```

If the element does not exist:

```text
Error occurs.
```

Always verify the element exists first.

---

# Best Practices

- Use the Style Object for dynamic styling.
- Use meaningful color and size values.
- Prefer CSS classes for large style changes.
- Keep styling logic organized.
- Avoid excessive inline styling.
- Use events to create interactive UI behavior.

---

# Summary

The Style Object allows JavaScript to modify an element's appearance dynamically.

Common Style Properties:

```javascript
color
backgroundColor
fontSize
fontFamily
width
height
margin
padding
border
opacity
display
visibility
```

Dynamic styling is essential for creating interactive and user-friendly web applications.

---

# Key Takeaways

- Every HTML element has a `style` object.
- The Style Object controls inline CSS styles.
- JavaScript can dynamically change colors, fonts, sizes, and visibility.
- CSS properties use camelCase in JavaScript.
- Dynamic styling is often combined with events.
- The Style Object is a fundamental part of DOM manipulation.
