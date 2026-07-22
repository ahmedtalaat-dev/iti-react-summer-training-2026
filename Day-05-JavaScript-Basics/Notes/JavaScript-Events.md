# JavaScript Events

## Introduction

JavaScript Events allow web pages to respond to user interactions and browser actions. Events are one of the most important concepts in JavaScript because they make websites interactive and dynamic.

Without events, a webpage would simply display information without reacting to user actions.

Examples of user interactions include:

- Clicking a button
- Typing in an input field
- Submitting a form
- Moving the mouse
- Pressing a keyboard key

JavaScript listens for these actions and executes code when they occur.

---

# What is an Event?

An event is an action or occurrence detected by the browser.

When an event happens, JavaScript can execute a function known as an **Event Handler**.

### Example

```html
<button onclick="showMessage()">
    Click Me
</button>

<script>
function showMessage() {
    alert("Button Clicked");
}
</script>
```

### What Happens?

1. User clicks the button.
2. The `onclick` event occurs.
3. JavaScript executes the `showMessage()` function.
4. An alert message appears.

---

# Event Syntax

Events are usually attached to HTML elements.

### Example

```html
<button onclick="myFunction()">
    Click Me
</button>
```

```javascript
function myFunction() {
    alert("Hello");
}
```

---

# Common JavaScript Events

## 1. onclick

The `onclick` event occurs when the user clicks an element.

### Example

```html
<button onclick="showMessage()">
    Click Me
</button>

<script>
function showMessage() {
    alert("Button Clicked");
}
</script>
```

### Use Cases

- Opening menus
- Submitting actions
- Triggering animations

---

# 2. ondblclick

The `ondblclick` event occurs when the user double-clicks an element.

### Example

```html
<button ondblclick="showMessage()">
    Double Click Me
</button>

<script>
function showMessage() {
    alert("Double Click Detected");
}
</script>
```

### Use Cases

- Editing content
- Selecting items
- Special actions

---

# 3. onmouseover

The `onmouseover` event occurs when the mouse pointer enters an element.

### Example

```html
<div onmouseover="showMessage()">
    Hover Over Me
</div>

<script>
function showMessage() {
    console.log("Mouse Entered");
}
</script>
```

### Use Cases

- Tooltips
- Hover effects
- Image previews

---

# 4. onmouseout

The `onmouseout` event occurs when the mouse pointer leaves an element.

### Example

```html
<div onmouseout="showMessage()">
    Move Mouse Away
</div>

<script>
function showMessage() {
    console.log("Mouse Left");
}
</script>
```

### Use Cases

- Hiding tooltips
- Resetting styles
- Closing menus

---

# 5. onkeydown

The `onkeydown` event occurs when a keyboard key is pressed down.

### Example

```html
<input type="text" onkeydown="keyPressed()">

<script>
function keyPressed() {
    console.log("Key Pressed");
}
</script>
```

### Use Cases

- Keyboard shortcuts
- Game controls
- Input monitoring

---

# 6. onkeyup

The `onkeyup` event occurs when a keyboard key is released.

### Example

```html
<input type="text" onkeyup="showText()">

<script>
function showText() {
    console.log("Key Released");
}
</script>
```

### Use Cases

- Live search
- Form validation
- Character counters

---

# 7. onchange

The `onchange` event occurs when the value of an input element changes.

### Example

```html
<select onchange="showSelection()">

    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>

</select>

<script>
function showSelection() {
    alert("Selection Changed");
}
</script>
```

### Use Cases

- Dropdown menus
- Form fields
- Settings pages

---

# 8. onsubmit

The `onsubmit` event occurs when a form is submitted.

### Example

```html
<form onsubmit="validateForm()">

    <input type="text">

    <button type="submit">
        Submit
    </button>

</form>

<script>
function validateForm() {
    alert("Form Submitted");
}
</script>
```

### Use Cases

- Form validation
- Data processing
- Sending information to servers

---

# Other Common Events

## onload

Occurs when the page finishes loading.

### Example

```html
<body onload="pageLoaded()">

<script>
function pageLoaded() {
    alert("Page Loaded");
}
</script>
```

---

## onfocus

Occurs when an input receives focus.

### Example

```html
<input type="text" onfocus="focusInput()">
```

---

## onblur

Occurs when an input loses focus.

### Example

```html
<input type="text" onblur="blurInput()">
```

---

# Event Handlers

An Event Handler is a JavaScript function that executes when an event occurs.

### Example

```html
<button onclick="changeColor()">
    Change Color
</button>

<script>
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}
</script>
```

In this example:

- The event is `onclick`.
- The handler is `changeColor()`.

---

# Real-World Example

### HTML

```html
<h1 id="title">
    Welcome
</h1>

<button onclick="changeText()">
    Change Text
</button>
```

### JavaScript

```javascript
function changeText() {
    document.getElementById("title").innerHTML =
        "Hello JavaScript";
}
```

### Result

When the user clicks the button, the heading text changes.

---

# Why Are Events Important?

Events make websites interactive.

Without events:

- Buttons would not work.
- Forms could not be validated.
- Menus could not open.
- Games would not respond to users.
- Dynamic interfaces would not exist.

Events are the foundation of user interaction in web development.

---

# Best Practices

- Use meaningful function names.
- Keep event handlers simple and focused.
- Avoid placing large amounts of JavaScript directly inside HTML.
- Separate JavaScript into external files when possible.
- Test event behavior across browsers.

---

# Common Mistakes

### Misspelling Event Names

Wrong:

```html
<button onclik="showMessage()">
```

Correct:

```html
<button onclick="showMessage()">
```

---

### Forgetting Parentheses

Wrong:

```html
<button onclick="showMessage">
```

Correct:

```html
<button onclick="showMessage()">
```

---

### Missing Functions

Wrong:

```html
<button onclick="myFunction()">
```

Without defining:

```javascript
function myFunction() {

}
```

This causes an error.

---

# Key Takeaways

- Events allow JavaScript to respond to user actions.
- An event occurs when a user interacts with a webpage.
- Event handlers are functions that execute when events occur.
- Common events include:
  - onclick
  - ondblclick
  - onmouseover
  - onmouseout
  - onkeydown
  - onkeyup
  - onchange
  - onsubmit
- Events are essential for creating interactive web applications.
