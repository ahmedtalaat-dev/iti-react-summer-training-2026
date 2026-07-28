# Lesson 04: ClassList and CSS Manipulation

## Introduction

While the Style Object allows JavaScript to change individual CSS properties, modern web development often prefers working with **CSS classes**.

Using CSS classes provides:

- Cleaner code.
- Better maintainability.
- Separation of HTML, CSS, and JavaScript.
- Easier styling management.

JavaScript can add, remove, toggle, and check CSS classes using the **classList** property.

---

# What is classList?

Every HTML element contains a:

```javascript
classList
```

property.

It provides methods for working with CSS classes dynamically.

Example:

```html
<div id="box" class="card"></div>
```

JavaScript:

```javascript
let box =
document.getElementById("box");

console.log(
    box.classList
);
```

Output:

```text
DOMTokenList
```

---

# Why Use classList?

Instead of writing multiple inline styles:

```javascript
box.style.backgroundColor =
"blue";

box.style.color =
"white";

box.style.padding =
"20px";
```

We can define a CSS class:

```css
.active {

    background-color: blue;
    color: white;
    padding: 20px;

}
```

And apply it:

```javascript
box.classList.add(
    "active"
);
```

Benefits:

- Cleaner code.
- Easier maintenance.
- Better performance.
- Reusable styles.

---

# className

The simplest way to read or change a class.

HTML:

```html
<div id="box" class="card"></div>
```

JavaScript:

```javascript
let box =
document.getElementById("box");

console.log(
    box.className
);
```

Output:

```text
card
```

---

## Changing className

```javascript
box.className =
"active";
```

Result:

```html
<div class="active"></div>
```

---

### Important Note

Using:

```javascript
className =
```

replaces all existing classes.

Example:

```html
<div class="card shadow"></div>
```

JavaScript:

```javascript
box.className =
"active";
```

Result:

```html
<div class="active"></div>
```

The previous classes are removed.

---

# classList.add()

Adds one or more classes.

### Syntax

```javascript
element.classList.add(
    "className"
);
```

### Example

```javascript
box.classList.add(
    "active"
);
```

Result:

```html
<div class="card active"></div>
```

---

## Adding Multiple Classes

```javascript
box.classList.add(
    "active",
    "shadow"
);
```

Result:

```html
<div class="card active shadow"></div>
```

---

# classList.remove()

Removes a class.

### Syntax

```javascript
element.classList.remove(
    "className"
);
```

### Example

```javascript
box.classList.remove(
    "active"
);
```

Result:

```html
<div class="card"></div>
```

---

# classList.toggle()

Adds a class if it does not exist.

Removes it if it already exists.

### Example

```javascript
box.classList.toggle(
    "active"
);
```

Result:

```text
First click → Add class
Second click → Remove class
```

---

# Dark Mode Example

CSS:

```css
.dark-mode {

    background-color: black;
    color: white;

}
```

JavaScript:

```javascript
document.body.classList.toggle(
    "dark-mode"
);
```

Result:

```text
Dark mode switches on and off.
```

---

# classList.contains()

Checks whether a class exists.

### Syntax

```javascript
element.classList.contains(
    "className"
);
```

### Example

```javascript
if (
    box.classList.contains(
        "active"
    )
) {

    console.log(
        "Class Exists"
    );

}
```

Output:

```text
Class Exists
```

---

# classList.replace()

Replaces one class with another.

### Syntax

```javascript
element.classList.replace(
    "oldClass",
    "newClass"
);
```

### Example

```javascript
box.classList.replace(
    "inactive",
    "active"
);
```

Result:

```html
<div class="active"></div>
```

---

# Dynamic CSS Manipulation

JavaScript can apply CSS classes based on user actions.

---

## Button Click Example

HTML:

```html
<button id="btn">
    Activate
</button>

<div id="box"></div>
```

CSS:

```css
.active {

    background-color: green;

}
```

JavaScript:

```javascript
btn.addEventListener(
    "click",
    function () {

        box.classList.add(
            "active"
        );

    }
);
```

Result:

```text
Box turns green when button is clicked.
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

CSS:

```css
.error {

    border: 2px solid red;

}
```

JavaScript:

```javascript
if (
    username.value === ""
) {

    username.classList.add(
        "error"
    );

}
```

Result:

```text
Invalid input gets a red border.
```

---

# Hover Effect Example

CSS:

```css
.highlight {

    background-color: yellow;

}
```

JavaScript:

```javascript
box.addEventListener(
    "mouseover",
    function () {

        box.classList.add(
            "highlight"
        );

    }
);

box.addEventListener(
    "mouseout",
    function () {

        box.classList.remove(
            "highlight"
        );

    }
);
```

Result:

```text
Element highlights when hovered.
```

---

# Real-World Example

## Theme Switcher

HTML:

```html
<button id="themeBtn">
    Toggle Theme
</button>
```

CSS:

```css
.dark {

    background-color: black;
    color: white;

}
```

JavaScript:

```javascript
themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );

    }
);
```

Result:

```text
The website theme changes dynamically.
```

---

# Common Mistakes

## Using className When You Need classList

Wrong:

```javascript
element.className =
"active";
```

This removes existing classes.

---

Better:

```javascript
element.classList.add(
    "active"
);
```

---

## Removing Non-Existing Classes

```javascript
element.classList.remove(
    "unknown"
);
```

No error occurs, but the operation has no effect.

---

## Misspelling Class Names

Wrong:

```javascript
element.classList.add(
    "actve"
);
```

Correct:

```javascript
element.classList.add(
    "active"
);
```

Always verify class names.

---

# classList Methods Summary

| Method | Description |
|----------|-------------|
| add() | Adds a class |
| remove() | Removes a class |
| toggle() | Adds or removes a class |
| contains() | Checks if a class exists |
| replace() | Replaces a class |
| className | Gets or sets all classes |

---

# Best Practices

- Prefer `classList` over inline styling.
- Use meaningful class names.
- Keep styling inside CSS files.
- Use `toggle()` for switches and themes.
- Use `contains()` before applying logic when needed.
- Avoid replacing classes unnecessarily with `className`.

---

# Summary

The `classList` property provides powerful methods for managing CSS classes dynamically.

Important methods:

```javascript
classList.add()
classList.remove()
classList.toggle()
classList.contains()
classList.replace()
```

Using CSS classes instead of inline styles leads to cleaner, more maintainable, and more scalable applications.

---

# Key Takeaways

- `classList` is used to manage CSS classes dynamically.
- `add()` adds classes.
- `remove()` removes classes.
- `toggle()` switches classes on and off.
- `contains()` checks if a class exists.
- `replace()` swaps classes.
- Using CSS classes is preferred over excessive inline styling.
- Class manipulation is widely used in modern Front-End Development.
