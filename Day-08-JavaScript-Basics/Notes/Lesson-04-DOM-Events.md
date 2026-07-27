# Lesson 04: DOM Events

## Introduction

Web pages become interactive through **Events**.

An event is an action that occurs in the browser, usually triggered by the user or the browser itself.

Examples:

- Clicking a button
- Typing in an input field
- Moving the mouse
- Submitting a form
- Loading a page

JavaScript can listen for these events and execute code when they occur.

---

# What is an Event?

An event is a signal that something has happened on a webpage.

### Example

When a user clicks a button:

```html
<button>Click Me</button>
```

The click action generates a:

```text
Click Event
```

JavaScript can respond to that event.

---

# Why Are Events Important?

Events allow web pages to:

- Respond to user actions.
- Validate forms.
- Show or hide content.
- Update data dynamically.
- Create interactive user experiences.

Without events, web pages would be static.

---

# Event Handling

Event handling means executing JavaScript code when an event occurs.

Example:

```javascript
button.onclick =
function () {

    console.log("Button Clicked");

};
```

When the button is clicked:

```text
Button Clicked
```

appears in the console.

---

# Common DOM Events

| Event | Description |
|---------|-------------|
| click | User clicks an element |
| dblclick | User double-clicks an element |
| mouseover | Mouse enters an element |
| mouseout | Mouse leaves an element |
| keydown | Key is pressed |
| keyup | Key is released |
| input | Input value changes |
| change | Input loses focus after change |
| submit | Form is submitted |
| load | Page finishes loading |

---

# Inline Event Handling

Events can be written directly inside HTML.

### Example

```html
<button onclick="alert('Hello')">
    Click Me
</button>
```

Result:

```text
Alert appears when clicked.
```

---

# Using onclick Property

HTML:

```html
<button id="btn">
    Click Me
</button>
```

JavaScript:

```javascript
let button =
document.getElementById("btn");

button.onclick =
function () {

    alert("Button Clicked");

};
```

---

# addEventListener()

The preferred way to handle events.

### Syntax

```javascript
element.addEventListener(
    event,
    function
);
```

### Example

```javascript
button.addEventListener(
    "click",
    function () {

        alert("Clicked");

    }
);
```

---

# Why Use addEventListener()?

Advantages:

- Multiple events can be attached.
- Cleaner code.
- Better organization.
- More flexible.

---

### Example

```javascript
button.addEventListener(
    "click",
    function () {

        console.log("First Event");

    }
);

button.addEventListener(
    "click",
    function () {

        console.log("Second Event");

    }
);
```

Output:

```text
First Event
Second Event
```

---

# Click Event

Triggered when the user clicks an element.

### Example

```javascript
button.addEventListener(
    "click",
    function () {

        console.log("Clicked");

    }
);
```

---

# Double Click Event

Triggered when the user double-clicks.

### Example

```javascript
button.addEventListener(
    "dblclick",
    function () {

        console.log("Double Click");

    }
);
```

---

# Mouse Events

---

## mouseover

Occurs when the mouse enters an element.

### Example

```javascript
box.addEventListener(
    "mouseover",
    function () {

        box.style.backgroundColor =
        "yellow";

    }
);
```

---

## mouseout

Occurs when the mouse leaves an element.

### Example

```javascript
box.addEventListener(
    "mouseout",
    function () {

        box.style.backgroundColor =
        "white";

    }
);
```

---

# Keyboard Events

---

## keydown

Occurs when a key is pressed.

### Example

```javascript
document.addEventListener(
    "keydown",
    function () {

        console.log("Key Pressed");

    }
);
```

---

## keyup

Occurs when a key is released.

### Example

```javascript
document.addEventListener(
    "keyup",
    function () {

        console.log("Key Released");

    }
);
```

---

# Input Events

HTML:

```html
<input
    type="text"
    id="username"
>
```

---

## input Event

Triggered whenever the input value changes.

### Example

```javascript
let input =
document.getElementById("username");

input.addEventListener(
    "input",
    function () {

        console.log(input.value);

    }
);
```

---

## change Event

Triggered when the input loses focus after modification.

### Example

```javascript
input.addEventListener(
    "change",
    function () {

        console.log("Changed");

    }
);
```

---

# Form Submit Event

HTML:

```html
<form id="myForm">

    <button>
        Submit
    </button>

</form>
```

JavaScript:

```javascript
let form =
document.getElementById("myForm");

form.addEventListener(
    "submit",
    function () {

        console.log(
            "Form Submitted"
        );

    }
);
```

---

# Preventing Default Behavior

Many elements have default browser behavior.

Example:

- Forms refresh the page after submission.

Use:

```javascript
event.preventDefault();
```

### Example

```javascript
form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        console.log(
            "Form Submitted"
        );

    }
);
```

Result:

```text
Page does not reload.
```

---

# Event Object

Every event provides an event object.

### Example

```javascript
button.addEventListener(
    "click",
    function (event) {

        console.log(event);

    }
);
```

The event object contains:

- Event type
- Target element
- Mouse position
- Keyboard key

---

# event.target

Returns the element that triggered the event.

### Example

```javascript
button.addEventListener(
    "click",
    function (event) {

        console.log(
            event.target
        );

    }
);
```

Output:

```html
<button>
```

---

# Real-World Example

## Button Counter

HTML:

```html
<button id="btn">
    Click
</button>
```

JavaScript:

```javascript
let count = 0;

btn.addEventListener(
    "click",
    function () {

        count++;

        console.log(count);

    }
);
```

Result:

```text
Counter increases with each click.
```

---

# Real-World Example

## Live Input Preview

HTML:

```html
<input id="name">

<h2 id="preview"></h2>
```

JavaScript:

```javascript
name.addEventListener(
    "input",
    function () {

        preview.innerText =
        name.value;

    }
);
```

Result:

```text
Text updates while typing.
```

---

# Common Mistakes

## Calling Function Immediately

Wrong:

```javascript
button.addEventListener(
    "click",
    showMessage()
);
```

This executes immediately.

---

Correct:

```javascript
button.addEventListener(
    "click",
    showMessage
);
```

---

## Forgetting preventDefault()

Wrong:

```javascript
form.addEventListener(
    "submit",
    function () {

        console.log("Submitted");

    }
);
```

Result:

```text
Page reloads.
```

---

Correct:

```javascript
event.preventDefault();
```

---

# Best Practices

- Prefer `addEventListener()` over inline events.
- Use meaningful function names.
- Avoid writing large event handlers.
- Use `preventDefault()` when needed.
- Remove unused event listeners.
- Keep JavaScript separate from HTML.

---

# Summary

DOM Events allow JavaScript to respond to user actions and browser events.

Common events include:

- click
- dblclick
- mouseover
- mouseout
- keydown
- keyup
- input
- change
- submit

Important concepts:

- Event Handling
- addEventListener()
- Event Object
- event.target
- preventDefault()

Events are the foundation of interactive web applications and are used extensively in modern Front-End Development.

---

# Key Takeaways

- Events make web pages interactive.
- JavaScript can listen and respond to events.
- `addEventListener()` is the preferred method for handling events.
- Mouse, keyboard, input, and form events are commonly used.
- `event.preventDefault()` prevents default browser behavior.
- The event object provides detailed information about the triggered event.
- Events are essential for building dynamic user interfaces.
