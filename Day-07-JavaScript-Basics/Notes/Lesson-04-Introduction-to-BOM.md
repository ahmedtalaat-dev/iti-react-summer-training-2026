# Lesson 04: Introduction to BOM (Browser Object Model)

## Introduction

When a web page is loaded in the browser, JavaScript can interact not only with the HTML document but also with the browser itself.

The **Browser Object Model (BOM)** provides JavaScript with objects that allow it to communicate with and control various browser features.

Using BOM, developers can:

- Open new browser windows.
- Display alerts and prompts.
- Navigate between pages.
- Access browser information.
- Control page location.
- Manage browser history.

The BOM is one of the core concepts in JavaScript and is widely used in web applications.

---

# What is BOM?

**BOM (Browser Object Model)** is a collection of objects provided by the browser that allows JavaScript to interact with the browser environment.

Unlike the DOM, which focuses on the HTML document, BOM focuses on the browser itself.

---

# BOM vs DOM

| BOM | DOM |
|-------|-------|
| Represents the browser | Represents the web page |
| Browser-related objects | HTML-related objects |
| window, location, history, navigator | document, elements, attributes |
| Controls browser behavior | Controls page content |

---

# The Window Object

The **window object** is the top-level object in the Browser Object Model.

All BOM objects are children of the `window` object.

### Example

```javascript
window.alert("Hello");
```

This can also be written as:

```javascript
alert("Hello");
```

Because JavaScript automatically references the window object.

---

# BOM Hierarchy

```text
window
│
├── document
├── location
├── history
├── navigator
├── screen
└── console
```

The `window` object contains all other BOM objects.

---

# Common BOM Objects

### Window

Used to control browser windows.

```javascript
window.open();
window.close();
```

---

### Location

Used to work with URLs.

```javascript
window.location
```

---

### History

Used to navigate through browser history.

```javascript
window.history
```

---

### Navigator

Provides information about the browser.

```javascript
window.navigator
```

---

### Screen

Provides information about the user's screen.

```javascript
window.screen
```

---

# Alert Dialog

Displays a message box.

### Example

```javascript
alert("Welcome to my website");
```

Output:

```text
Popup Message
```

---

# Prompt Dialog

Requests input from the user.

### Example

```javascript
let name =
prompt("Enter your name");

console.log(name);
```

If the user enters:

```text
Ahmed
```

Output:

```text
Ahmed
```

---

# Confirm Dialog

Displays a confirmation message.

### Example

```javascript
let result =
confirm("Are you sure?");
```

If user clicks:

```text
OK
```

Output:

```javascript
true
```

If user clicks:

```text
Cancel
```

Output:

```javascript
false
```

---

# Open New Browser Window

The `window.open()` method opens a new browser window or tab.

### Syntax

```javascript
window.open(url);
```

### Example

```javascript
window.open(
    "https://google.com"
);
```

Result:

```text
Opens Google in a new tab
```

---

# Close Browser Window

### Example

```javascript
window.close();
```

Closes the current window if it was opened by JavaScript.

---

# Set Timeout

The `setTimeout()` function executes code once after a specified delay.

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
Alert appears after 3 seconds
```

---

# Set Interval

The `setInterval()` function repeatedly executes code.

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

# Clear Interval

Stops a running interval.

### Example

```javascript
let timer =
setInterval(
    function () {
        console.log("Hello");
    },
    1000
);

clearInterval(timer);
```

---

# Real-World Example

### Welcome Message After Delay

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

Result:

```text
Alert appears after 2 seconds
```

---

# Why Is BOM Important?

BOM allows developers to:

- Create interactive applications.
- Navigate users between pages.
- Access browser information.
- Implement timers and delays.
- Control browser behavior.

Many real-world applications rely heavily on BOM functionality.

---

# Common Mistakes

## Forgetting That BOM Depends on the Browser

BOM objects exist only inside browsers.

Wrong:

```javascript
window.alert("Hello");
```

in environments like Node.js.

This will generate an error because Node.js has no browser window.

---

## Creating Too Many Popups

Bad Practice:

```javascript
alert("Hello");
alert("Welcome");
alert("Goodbye");
```

Too many alerts create a poor user experience.

---

# Best Practices

- Use alerts sparingly.
- Prefer custom UI over excessive popups.
- Use timers carefully.
- Avoid opening unnecessary browser windows.
- Keep browser interactions user-friendly.

---

# Summary

The Browser Object Model (BOM) allows JavaScript to interact with the browser environment.

Important BOM objects include:

- window
- location
- history
- navigator
- screen

Common BOM methods:

- alert()
- prompt()
- confirm()
- open()
- close()
- setTimeout()
- setInterval()

BOM is essential for creating interactive web applications and controlling browser behavior.

---

# Key Takeaways

- BOM stands for Browser Object Model.
- BOM allows JavaScript to interact with the browser.
- The `window` object is the root object of BOM.
- Common BOM objects include location, history, navigator, and screen.
- Methods such as `alert()`, `prompt()`, and `confirm()` are part of BOM.
- Timers can be created using `setTimeout()` and `setInterval()`.
- BOM is widely used in modern web development.
