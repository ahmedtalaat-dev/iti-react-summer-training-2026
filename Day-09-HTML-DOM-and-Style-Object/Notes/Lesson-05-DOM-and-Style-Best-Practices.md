# Lesson 05: DOM and Style Best Practices

## Introduction

As web applications grow larger, proper DOM manipulation and styling techniques become essential for maintaining:

- Performance
- Readability
- Scalability
- Maintainability

Following best practices helps developers write cleaner code, reduce bugs, and create better user experiences.

---

# Why Best Practices Matter

Poor DOM manipulation can lead to:

- Slow page performance
- Difficult debugging
- Repetitive code
- Unnecessary memory usage

Good practices help create:

- Faster applications
- Cleaner code structure
- Easier maintenance
- Better collaboration between developers

---

# Minimize DOM Queries

Accessing the DOM is more expensive than working with normal JavaScript variables.

### Bad Example

```javascript
document.getElementById("title").innerText = "Welcome";
document.getElementById("title").style.color = "blue";
document.getElementById("title").style.fontSize = "30px";
```

---

### Better Example

```javascript
let title =
document.getElementById("title");

title.innerText = "Welcome";
title.style.color = "blue";
title.style.fontSize = "30px";
```

Benefits:

- Better performance
- Cleaner code
- Easier maintenance

---

# Cache Frequently Used Elements

Store frequently used elements in variables.

### Example

```javascript
let submitButton =
document.getElementById(
    "submitBtn"
);

let userInput =
document.getElementById(
    "username"
);
```

This avoids repeated DOM lookups.

---

# Prefer CSS Classes Over Inline Styles

### Bad Example

```javascript
box.style.backgroundColor =
"blue";

box.style.color =
"white";

box.style.padding =
"20px";
```

---

### Better Example

CSS:

```css
.active {

    background-color: blue;
    color: white;
    padding: 20px;

}
```

JavaScript:

```javascript
box.classList.add(
    "active"
);
```

Benefits:

- Separation of concerns
- Reusable styles
- Cleaner JavaScript

---

# Keep CSS in CSS Files

Avoid writing large amounts of styling inside JavaScript.

### Bad Example

```javascript
element.style.width = "200px";
element.style.height = "200px";
element.style.backgroundColor = "red";
element.style.borderRadius = "10px";
```

---

### Better Example

CSS:

```css
.card {

    width: 200px;
    height: 200px;
    background-color: red;
    border-radius: 10px;

}
```

JavaScript:

```javascript
element.classList.add(
    "card"
);
```

---

# Use addEventListener()

Avoid inline event handlers whenever possible.

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

- Cleaner HTML
- Better organization
- Multiple event support

---

# Avoid Excessive innerHTML

### Bad Example

```javascript
container.innerHTML +=
"<p>New Item</p>";
```

Repeated use may:

- Reduce performance
- Remove existing event listeners
- Increase security risks

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

---

# Use textContent for Plain Text

### Example

```javascript
element.textContent =
"Ahmed Talaat";
```

Advantages:

- Faster than innerHTML
- More secure
- Avoids unnecessary HTML parsing

---

# Check Element Existence

Always verify that an element exists before manipulating it.

### Example

```javascript
let box =
document.getElementById(
    "box"
);

if (box) {

    box.style.color =
    "red";

}
```

This prevents runtime errors.

---

# Use Meaningful Variable Names

### Bad Example

```javascript
let x =
document.getElementById(
    "title"
);
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

- Easier reading
- Easier debugging
- Better collaboration

---

# Avoid Global Variables

### Bad Example

```javascript
let counter = 0;
let username = "";
let total = 0;
```

Global variables can create conflicts.

---

### Better Example

```javascript
function initializeApp() {

    let counter = 0;

}
```

Keep variables inside functions when possible.

---

# Group Related Logic Together

### Example

```javascript
function validateForm() {

    let username =
    document.getElementById(
        "username"
    );

    if (username.value === "") {

        alert("Required");

    }

}
```

Organizing code into functions improves readability.

---

# Reduce Unnecessary DOM Updates

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
let result = "";

for (let i = 0; i < 100; i++) {

    result += i;

}

element.innerText =
result;
```

Only one DOM update occurs.

---

# Use Event Delegation

Instead of attaching many listeners to similar elements, attach one listener to the parent.

### Example

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

- Better performance
- Less memory usage
- Easier management

---

# Separate HTML, CSS, and JavaScript

Good Project Structure:

```text
project
│
├── index.html
├── css
│   └── style.css
│
└── js
    └── script.js
```

Benefits:

- Easier maintenance
- Better organization
- Cleaner codebase

---

# Performance Tips

### Do

✅ Cache DOM elements.

✅ Use CSS classes.

✅ Minimize DOM updates.

✅ Use Event Delegation.

✅ Organize code into functions.

---

### Don't

❌ Repeatedly query the DOM.

❌ Use excessive inline styles.

❌ Overuse innerHTML.

❌ Create unnecessary global variables.

❌ Mix HTML, CSS, and JavaScript together.

---

# Common Mistakes

## Repeated Element Selection

Wrong:

```javascript
document.getElementById("title");
document.getElementById("title");
document.getElementById("title");
```

---

## Inline Styling Everywhere

Wrong:

```javascript
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "30px";
```

Prefer CSS classes.

---

## Large Blocks of HTML in JavaScript

Wrong:

```javascript
container.innerHTML =
`
<div>
    <h1>Hello</h1>
</div>
`;
```

Use DOM methods when possible.

---

# Real-World Example

## Theme Toggle

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

        document.body.classList.toggle(
            "dark-mode"
        );

    }
);
```

Best practices used:

- addEventListener()
- classList.toggle()
- CSS classes
- Separation of concerns

---

# Best Practices Checklist

Before writing DOM code, ask yourself:

- Am I querying the DOM unnecessarily?
- Can I cache this element?
- Should I use a CSS class instead?
- Can I organize this into a function?
- Am I updating the DOM too often?
- Is my code readable and maintainable?

---

# Summary

DOM and Style Best Practices help developers create efficient, maintainable, and scalable web applications.

Important recommendations:

- Cache DOM elements.
- Minimize DOM access.
- Use CSS classes.
- Prefer addEventListener().
- Avoid excessive innerHTML.
- Keep styling inside CSS files.
- Use meaningful variable names.
- Organize code into reusable functions.

Following these practices will improve both performance and code quality.

---

# Key Takeaways

- DOM operations should be optimized whenever possible.
- Use CSS classes instead of excessive inline styles.
- Cache frequently used elements.
- Prefer addEventListener() over inline events.
- Keep HTML, CSS, and JavaScript separated.
- Use meaningful variable names and reusable functions.
- Well-structured DOM code is easier to maintain and scale.
