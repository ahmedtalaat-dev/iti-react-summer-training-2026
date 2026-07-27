# Lesson 07: DOM Best Practices

## Introduction

The DOM is one of the most powerful features in JavaScript, but improper DOM manipulation can lead to:

- Poor performance.
- Difficult-to-maintain code.
- Memory leaks.
- Bad user experience.

Following DOM Best Practices helps developers write cleaner, faster, and more maintainable applications.

---

# Why DOM Best Practices Matter

Every time JavaScript interacts with the DOM, the browser may need to:

- Recalculate styles.
- Repaint elements.
- Rebuild layouts.

Excessive DOM operations can slow down web applications.

Good practices help:

- Improve performance.
- Reduce bugs.
- Increase code readability.
- Enhance user experience.

---

# Cache DOM Elements

Avoid selecting the same element repeatedly.

### Bad Example

```javascript
document
.getElementById("title")
.style.color =
"red";

document
.getElementById("title")
.style.fontSize =
"30px";

document
.getElementById("title")
.style.fontWeight =
"bold";
```

---

### Better Example

```javascript
let title =
document.getElementById(
    "title"
);

title.style.color =
"red";

title.style.fontSize =
"30px";

title.style.fontWeight =
"bold";
```

Benefits:

- Faster execution.
- Cleaner code.
- Fewer DOM queries.

---

# Minimize DOM Access

DOM operations are slower than normal JavaScript operations.

### Bad Example

```javascript
for (let i = 0; i < 100; i++) {

    document
    .getElementById("counter")
    .innerText = i;

}
```

---

### Better Example

```javascript
let counter =
document.getElementById(
    "counter"
);

for (let i = 0; i < 100; i++) {

    counter.innerText = i;

}
```

---

# Use classList Instead of Inline Styles

### Bad Example

```javascript
element.style.backgroundColor =
"black";

element.style.color =
"white";
```

---

### Better Example

CSS:

```css
.dark-mode {

    background-color: black;
    color: white;

}
```

JavaScript:

```javascript
element.classList.add(
    "dark-mode"
);
```

Benefits:

- Easier maintenance.
- Better separation of concerns.
- Cleaner code.

---

# Prefer addEventListener()

Avoid inline event handlers.

### Bad Example

```html
<button onclick="showMessage()">
    Click
</button>
```

---

### Better Example

```javascript
button.addEventListener(
    "click",
    showMessage
);
```

Benefits:

- Better organization.
- Easier debugging.
- Supports multiple listeners.

---

# Avoid Excessive innerHTML

Using `innerHTML` repeatedly can reduce performance and create security risks.

### Bad Example

```javascript
container.innerHTML +=
"<p>New Item</p>";
```

---

### Better Example

```javascript
let paragraph =
document.createElement("p");

paragraph.innerText =
"New Item";

container.appendChild(
    paragraph
);
```

Benefits:

- Better performance.
- More secure.
- Easier to manage.

---

# Check Element Existence

Always ensure an element exists before manipulating it.

### Bad Example

```javascript
document
.getElementById("box")
.innerText =
"Hello";
```

If the element doesn't exist:

```text
Cannot read properties of null
```

---

### Better Example

```javascript
let box =
document.getElementById(
    "box"
);

if (box) {

    box.innerText =
    "Hello";

}
```

---

# Keep JavaScript Separate from HTML

### Bad Example

```html
<button onclick="changeColor()">
    Change Color
</button>
```

---

### Better Example

HTML:

```html
<button id="colorBtn">
    Change Color
</button>
```

JavaScript:

```javascript
let button =
document.getElementById(
    "colorBtn"
);

button.addEventListener(
    "click",
    changeColor
);
```

Benefits:

- Cleaner structure.
- Easier maintenance.
- Better scalability.

---

# Use Event Delegation

Instead of adding listeners to many elements, add one listener to their parent.

### Bad Example

```javascript
item1.addEventListener(
    "click",
    handler
);

item2.addEventListener(
    "click",
    handler
);

item3.addEventListener(
    "click",
    handler
);
```

---

### Better Example

```javascript
list.addEventListener(
    "click",
    function (event) {

        console.log(
            event.target
        );

    }
);
```

Benefits:

- Fewer event listeners.
- Better performance.
- Easier management.

---

# Avoid Global Variables

### Bad Example

```javascript
let count = 0;
let userName = "";
let total = 0;
```

Global variables can cause conflicts.

---

### Better Example

```javascript
function app() {

    let count = 0;

}
```

Keep variables inside functions whenever possible.

---

# Use Meaningful Variable Names

### Bad Example

```javascript
let x =
document.getElementById("title");
```

---

### Better Example

```javascript
let pageTitle =
document.getElementById(
    "title"
);
```

Benefits:

- Better readability.
- Easier maintenance.

---

# Avoid Unnecessary DOM Updates

### Bad Example

```javascript
for (let i = 0; i < 100; i++) {

    element.innerText =
    i;

}
```

This updates the DOM 100 times.

---

### Better Example

```javascript
let value = "";

for (let i = 0; i < 100; i++) {

    value += i;

}

element.innerText =
value;
```

Only one DOM update occurs.

---

# Remove Unused Elements

Unused elements consume memory.

### Example

```javascript
element.remove();
```

Remove elements that are no longer needed.

---

# Remove Unused Event Listeners

### Example

```javascript
button.removeEventListener(
    "click",
    showMessage
);
```

This helps prevent memory leaks.

---

# Use textContent for Plain Text

### Bad Example

```javascript
element.innerHTML =
"Ahmed";
```

---

### Better Example

```javascript
element.textContent =
"Ahmed";
```

Benefits:

- Faster.
- Safer.
- Avoids unnecessary HTML parsing.

---

# Real-World Example

## Dark Mode Toggle

CSS:

```css
.dark-mode {

    background-color: black;
    color: white;

}
```

JavaScript:

```javascript
let button =
document.getElementById(
    "themeBtn"
);

button.addEventListener(
    "click",
    function () {

        document.body
        .classList.toggle(
            "dark-mode"
        );

    }
);
```

Best practices used:

- Cached element.
- addEventListener().
- classList.
- Separation of CSS and JavaScript.

---

# Common Mistakes

## Repeated DOM Queries

Wrong:

```javascript
document.getElementById();
document.getElementById();
document.getElementById();
```

---

## Too Much innerHTML

Wrong:

```javascript
container.innerHTML +=
"<div></div>";
```

inside loops.

---

## Inline Event Handlers

Wrong:

```html
<button onclick="">
```

---

## Direct Style Manipulation Everywhere

Wrong:

```javascript
element.style.color =
"red";

element.style.fontSize =
"30px";

element.style.margin =
"20px";
```

Prefer CSS classes.

---

# DOM Performance Tips

- Cache frequently used elements.
- Minimize DOM queries.
- Use Event Delegation.
- Reduce unnecessary reflows.
- Avoid excessive `innerHTML`.
- Update the DOM only when necessary.
- Use CSS classes instead of inline styles.

---

# Best Practices Checklist

Before writing DOM code, ask yourself:

- Am I querying the DOM too often?
- Can I cache this element?
- Can I use a CSS class instead?
- Should I use event delegation?
- Am I updating the DOM unnecessarily?
- Have I checked if the element exists?
- Are my variable names clear?

If the answer is yes, your code is likely more maintainable and efficient.

---

# Summary

DOM Best Practices help developers write:

- Faster code.
- Cleaner code.
- More maintainable applications.

Key recommendations:

- Cache DOM elements.
- Minimize DOM access.
- Use `classList`.
- Prefer `addEventListener()`.
- Avoid excessive `innerHTML`.
- Validate element existence.
- Use event delegation.
- Remove unused elements and listeners.

Following these practices leads to better performance and a more professional development workflow.

---

# Key Takeaways

- DOM operations can be expensive.
- Cache elements whenever possible.
- Use CSS classes instead of excessive inline styles.
- Prefer `addEventListener()` over inline events.
- Avoid excessive `innerHTML`.
- Use event delegation for large groups of elements.
- Remove unused elements and event listeners.
- Write readable, maintainable DOM code.
