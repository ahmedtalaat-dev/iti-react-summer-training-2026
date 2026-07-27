# Lesson 03: DOM Manipulation

## Introduction

DOM Manipulation refers to modifying HTML elements dynamically using JavaScript.

Using DOM Manipulation, we can:

- Change text content.
- Change HTML content.
- Modify attributes.
- Update styles.
- Show or hide elements.
- Create interactive web pages.

DOM Manipulation is one of the most common tasks in Front-End Development.

---

# What is DOM Manipulation?

DOM Manipulation means changing the structure, content, or appearance of an HTML document using JavaScript.

Example:

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

```html
<h1>Hello Ahmed</h1>
```

---

# Changing Element Content

There are several ways to change content inside an element.

---

## innerHTML

The `innerHTML` property gets or sets the HTML content of an element.

### Example

HTML:

```html
<div id="content"></div>
```

JavaScript:

```javascript
document
.getElementById("content")
.innerHTML =
"<h2>Hello DOM</h2>";
```

Result:

```html
<div>
    <h2>Hello DOM</h2>
</div>
```

---

## innerText

The `innerText` property gets or sets only visible text.

### Example

```javascript
document
.getElementById("content")
.innerText =
"Hello Ahmed";
```

Result:

```text
Hello Ahmed
```

---

## textContent

The `textContent` property gets or sets all text content.

### Example

```javascript
document
.getElementById("content")
.textContent =
"Front-End Developer";
```

Result:

```text
Front-End Developer
```

---

# Difference Between innerHTML, innerText, and textContent

| Property | Supports HTML | Returns Text |
|-----------|--------------|-------------|
| innerHTML | Yes | Yes |
| innerText | No | Visible Text Only |
| textContent | No | All Text |

---

### Example

```javascript
element.innerHTML =
"<b>Ahmed</b>";
```

Output:

```text
Ahmed
```

(Bold formatting applied)

---

### Example

```javascript
element.innerText =
"<b>Ahmed</b>";
```

Output:

```text
<b>Ahmed</b>
```

(Text only)

---

# Changing Attributes

Attributes can be modified dynamically.

HTML:

```html
<img id="logo">
```

JavaScript:

```javascript
document
.getElementById("logo")
.src =
"logo.png";
```

---

# Using setAttribute()

### Syntax

```javascript
element.setAttribute(
    name,
    value
);
```

### Example

```javascript
document
.getElementById("logo")
.setAttribute(
    "src",
    "logo.png"
);
```

Result:

```html
<img src="logo.png">
```

---

# Getting Attributes

### Syntax

```javascript
element.getAttribute(
    attribute
);
```

### Example

```javascript
let imageSource =
document
.getElementById("logo")
.getAttribute("src");

console.log(imageSource);
```

Output:

```text
logo.png
```

---

# Removing Attributes

### Syntax

```javascript
element.removeAttribute(
    attribute
);
```

### Example

```javascript
document
.getElementById("logo")
.removeAttribute("src");
```

Result:

```html
<img>
```

---

# Changing Styles

JavaScript can modify CSS styles directly.

### Syntax

```javascript
element.style.property =
value;
```

---

### Example

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
.style.color =
"blue";
```

Result:

```text
Text becomes blue.
```

---

### Example

```javascript
document
.getElementById("title")
.style.backgroundColor =
"yellow";
```

---

# Multiple Style Changes

```javascript
let title =
document
.getElementById("title");

title.style.color =
"white";

title.style.backgroundColor =
"black";

title.style.padding =
"10px";
```

---

# Working with Classes

Classes can be manipulated dynamically.

---

## className

### Example

```javascript
element.className =
"active";
```

---

## classList.add()

Adds a class.

### Example

```javascript
element.classList.add(
    "active"
);
```

---

## classList.remove()

Removes a class.

### Example

```javascript
element.classList.remove(
    "active"
);
```

---

## classList.toggle()

Adds or removes a class automatically.

### Example

```javascript
element.classList.toggle(
    "dark-mode"
);
```

---

# Showing and Hiding Elements

---

## Hide Element

```javascript
element.style.display =
"none";
```

---

## Show Element

```javascript
element.style.display =
"block";
```

---

### Example

```javascript
document
.getElementById("message")
.style.display =
"none";
```

Result:

```text
Element becomes hidden.
```

---

# Changing Input Values

HTML:

```html
<input
    type="text"
    id="username"
>
```

JavaScript:

```javascript
document
.getElementById("username")
.value =
"Ahmed";
```

Result:

```text
Input contains Ahmed
```

---

# Real-World Example

## Change Page Theme

HTML:

```html
<button id="themeBtn">
    Dark Mode
</button>
```

JavaScript:

```javascript
document.body
.classList.toggle(
    "dark-mode"
);
```

Result:

```text
Switch between light and dark mode.
```

---

# Real-World Example

## Update Greeting

HTML:

```html
<h1 id="welcome">
    Welcome
</h1>
```

JavaScript:

```javascript
document
.getElementById("welcome")
.innerText =
"Welcome Ahmed";
```

Result:

```text
Welcome Ahmed
```

---

# Common Mistakes

## Using innerHTML for Plain Text

Wrong:

```javascript
element.innerHTML =
"Ahmed";
```

Use:

```javascript
element.innerText
```

for simple text updates.

---

## Forgetting CSS Property Naming

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

JavaScript uses camelCase.

---

## Manipulating Non-Existing Elements

Wrong:

```javascript
document
.getElementById("box")
.innerHTML =
"Hello";
```

when the element does not exist.

Result:

```text
Cannot read properties of null
```

---

# Best Practices

- Use `textContent` for text-only updates.
- Use `innerHTML` only when HTML content is needed.
- Prefer `classList` over inline styles.
- Keep styling inside CSS whenever possible.
- Avoid excessive DOM updates for better performance.
- Check element existence before manipulating it.

---

# Summary

DOM Manipulation allows JavaScript to dynamically modify web pages.

Common operations include:

- Changing content.
- Updating attributes.
- Modifying styles.
- Working with classes.
- Showing and hiding elements.
- Updating form values.

Important properties and methods:

- `innerHTML`
- `innerText`
- `textContent`
- `setAttribute()`
- `getAttribute()`
- `removeAttribute()`
- `classList`
- `style`

DOM Manipulation is a fundamental skill required for building modern interactive web applications.

---

# Key Takeaways

- DOM Manipulation changes page content dynamically.
- `innerHTML` supports HTML content.
- `innerText` and `textContent` work with text.
- Attributes can be modified using `setAttribute()`.
- Styles can be changed using the `style` property.
- Classes can be managed with `classList`.
- DOM Manipulation is essential for interactive user interfaces.
