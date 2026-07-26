# Lesson 05: Window Object in JavaScript

## Introduction

The **Window Object** is the most important object in the Browser Object Model (BOM).

It represents the browser window and acts as the global object for JavaScript running inside a browser.

All global variables, functions, and BOM objects are members of the `window` object.

### Example

```javascript
window.alert("Hello");
```

Can also be written as:

```javascript
alert("Hello");
```

because JavaScript automatically refers to the `window` object.

---

# What is the Window Object?

The `window` object represents the browser window where the web page is displayed.

It provides methods and properties that allow JavaScript to:

- Display dialogs.
- Open and close windows.
- Manage timers.
- Access browser information.
- Control navigation.

---

# Window Object Hierarchy

```text
window
│
├── document
├── location
├── history
├── navigator
├── screen
├── console
└── localStorage
```

The `window` object is the parent of all BOM objects.

---

# Accessing the Window Object

### Example

```javascript
console.log(window);
```

Output:

```text
Displays the entire window object
```

---

# Global Variables and Window

Variables declared using `var` become properties of the window object.

### Example

```javascript
var username = "Ahmed";

console.log(window.username);
```

Output:

```text
Ahmed
```

---

### Example with let

```javascript
let age = 22;

console.log(window.age);
```

Output:

```text
undefined
```

Because `let` and `const` do not become properties of `window`.

---

# Window Methods

The window object provides many useful methods.

---

## alert()

Displays a message box.

### Example

```javascript
window.alert("Welcome");
```

Output:

```text
Popup Alert
```

---

## prompt()

Requests input from the user.

### Example

```javascript
let name =
prompt("Enter your name");

console.log(name);
```

Output:

```text
User Input
```

---

## confirm()

Displays a confirmation dialog.

### Example

```javascript
let result =
confirm("Delete item?");
```

Output:

```javascript
true
```

or

```javascript
false
```

---

# open()

Opens a new browser tab or window.

### Syntax

```javascript
window.open(url);
```

### Example

```javascript
window.open(
    "https://www.google.com"
);
```

Result:

```text
Opens Google in a new tab
```

---

# close()

Closes the current browser window.

### Example

```javascript
window.close();
```

Note:

```text
Only works for windows opened by JavaScript.
```

---

# print()

Opens the browser print dialog.

### Example

```javascript
window.print();
```

Result:

```text
Print Window Opens
```

---

# Window Properties

Properties provide information about the browser window.

---

## innerWidth

Returns the width of the browser window.

### Example

```javascript
console.log(
    window.innerWidth
);
```

Output:

```text
Browser Width
```

---

## innerHeight

Returns the height of the browser window.

### Example

```javascript
console.log(
    window.innerHeight
);
```

Output:

```text
Browser Height
```

---

# Timers in Window Object

---

## setTimeout()

Executes code once after a delay.

### Syntax

```javascript
setTimeout(
    function,
    milliseconds
);
```

### Example

```javascript
setTimeout(
    function () {
        alert("Hello");
    },
    3000
);
```

Output:

```text
Alert after 3 seconds
```

---

## clearTimeout()

Stops a timeout before execution.

### Example

```javascript
let timer =
setTimeout(
    function () {
        alert("Hello");
    },
    3000
);

clearTimeout(timer);
```

Result:

```text
Alert will not appear
```

---

## setInterval()

Executes code repeatedly.

### Example

```javascript
setInterval(
    function () {
        console.log("Running");
    },
    1000
);
```

Output:

```text
Running every second
```

---

## clearInterval()

Stops a running interval.

### Example

```javascript
let interval =
setInterval(
    function () {
        console.log("Hello");
    },
    1000
);

clearInterval(interval);
```

Result:

```text
Interval Stops
```

---

# Real-World Example

## Automatic Welcome Message

```javascript
setTimeout(
    function () {
        alert(
            "Welcome Ahmed"
        );
    },
    2000
);
```

Output:

```text
Alert appears after 2 seconds
```

---

# Real-World Example

## Display Window Size

```javascript
console.log(
    "Width: " +
    window.innerWidth
);

console.log(
    "Height: " +
    window.innerHeight
);
```

Output:

```text
Width: 1366
Height: 768
```

(Values vary depending on screen size.)

---

# Common Mistakes

## Using close() on a Manually Opened Tab

Wrong:

```javascript
window.close();
```

on a browser tab opened manually by the user.

Result:

```text
The browser prevents closing it.
```

---

## Creating Infinite Intervals

Bad Example:

```javascript
setInterval(
    function () {
        console.log("Hello");
    },
    1000
);
```

Without:

```javascript
clearInterval()
```

the interval will continue forever.

---

# Best Practices

- Use alerts only when necessary.
- Clear intervals when no longer needed.
- Avoid opening unnecessary windows.
- Use timers responsibly.
- Prefer modern UI components instead of excessive browser dialogs.

---

# Summary

The `window` object is the root object of the Browser Object Model (BOM).

It provides methods for:

- Alerts
- Prompts
- Confirmation dialogs
- Opening windows
- Closing windows
- Printing pages
- Managing timers

Important methods:

- `alert()`
- `prompt()`
- `confirm()`
- `open()`
- `close()`
- `print()`
- `setTimeout()`
- `setInterval()`

Important properties:

- `innerWidth`
- `innerHeight`

Understanding the Window Object is essential because all browser-related JavaScript functionality starts from it.

---

# Key Takeaways

- The `window` object represents the browser window.
- It is the top-level object in the BOM.
- All BOM objects are children of `window`.
- Global variables declared with `var` become properties of `window`.
- The window object provides dialogs, timers, and browser control methods.
- `setTimeout()` runs code once after a delay.
- `setInterval()` runs code repeatedly until stopped.
- The Window Object is the foundation of browser-based JavaScript.
