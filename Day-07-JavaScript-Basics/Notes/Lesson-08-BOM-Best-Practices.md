# Lesson 08: BOM Best Practices

## Introduction

The Browser Object Model (BOM) provides powerful features that allow JavaScript to interact with the browser environment.

While BOM is extremely useful, improper usage can lead to:

- Poor user experience.
- Security concerns.
- Performance issues.
- Difficult-to-maintain code.

This lesson covers the best practices developers should follow when working with BOM objects and methods.

---

# What Are BOM Best Practices?

BOM Best Practices are guidelines that help developers:

- Write cleaner code.
- Improve application performance.
- Create a better user experience.
- Avoid common browser-related issues.

Following these practices makes applications more professional and reliable.

---

# Use Alerts Sparingly

The `alert()` method blocks user interaction until the alert is closed.

### Bad Example

```javascript
alert("Welcome");
alert("Please Login");
alert("Have a Nice Day");
```

Result:

```text
Multiple annoying popup windows.
```

---

### Better Approach

Use:

```javascript
console.log()
```

or custom UI elements.

```javascript
console.log("Welcome");
```

---

# Avoid Excessive Prompts

Using too many prompts creates a poor user experience.

### Bad Example

```javascript
let name =
prompt("Enter Name");

let age =
prompt("Enter Age");

let city =
prompt("Enter City");
```

---

### Better Approach

Use HTML forms:

```html
<input type="text">
<input type="number">
```

Forms provide a much better user experience.

---

# Validate User Input

Never assume the user enters valid data.

### Bad Example

```javascript
let age =
prompt("Enter Age");

console.log(age);
```

---

### Better Example

```javascript
let age =
prompt("Enter Age");

if (!isNaN(age)) {

    console.log(age);

}
else {

    console.log(
        "Invalid Input"
    );

}
```

Always validate user input before processing it.

---

# Use confirm() Only When Necessary

Confirmation dialogs should only be used for important actions.

### Good Example

```javascript
confirm(
    "Are you sure you want to delete?"
);
```

---

### Bad Example

```javascript
confirm(
    "Do you want to continue reading?"
);
```

Unnecessary confirmations frustrate users.

---

# Avoid Unnecessary Window Opening

Opening multiple browser windows or tabs can annoy users.

### Bad Example

```javascript
window.open("page1.html");
window.open("page2.html");
window.open("page3.html");
```

---

### Better Example

Open new windows only when absolutely necessary.

```javascript
window.open(
    "documentation.html"
);
```

---

# Be Careful with window.close()

Modern browsers restrict closing windows that were not opened by JavaScript.

### Example

```javascript
window.close();
```

May not work if the page was opened manually.

Always understand browser limitations before using it.

---

# Use Timers Responsibly

Timers are useful but can cause performance issues when overused.

---

## Bad Example

```javascript
setInterval(
    function () {

        console.log("Running");

    },
    1
);
```

Result:

```text
High CPU usage.
```

---

## Better Example

```javascript
setInterval(
    function () {

        console.log("Running");

    },
    1000
);
```

Result:

```text
Runs every second.
```

---

# Clear Unused Timers

Always stop timers when they are no longer needed.

### Example

```javascript
let timer =
setInterval(
    function () {

        console.log("Running");

    },
    1000
);

clearInterval(timer);
```

This prevents unnecessary resource consumption.

---

# Avoid Infinite Reload Loops

### Bad Example

```javascript
location.reload();
```

inside code that executes automatically when the page loads.

Result:

```text
Page refreshes forever.
```

---

### Better Practice

Reload only after a specific user action.

```javascript
button.onclick =
function () {

    location.reload();

};
```

---

# Use location.replace() Carefully

### Example

```javascript
location.replace(
    "home.html"
);
```

Remember:

```text
The user cannot return using the Back button.
```

Use it only when that behavior is intended.

---

# Check Internet Connectivity

Before performing network-related actions, verify internet availability.

### Example

```javascript
if (navigator.onLine) {

    console.log(
        "Connected"
    );

}
else {

    console.log(
        "No Internet"
    );

}
```

This improves user experience.

---

# Avoid Browser-Specific Code

### Bad Example

```javascript
if (
    navigator.userAgent
    === "Chrome"
)
{

}
```

Different browsers return different values.

---

### Better Approach

Use feature detection.

```javascript
if (window.localStorage) {

    console.log(
        "Supported"
    );

}
```

Feature detection is more reliable.

---

# Use Browser Information Responsibly

The Navigator Object provides information about the user.

Examples:

```javascript
navigator.userAgent
navigator.language
navigator.platform
```

Only collect information when necessary.

Avoid storing unnecessary user data.

---

# Keep Navigation Predictable

Users should always understand where navigation actions will take them.

### Good Example

```javascript
location.href =
"profile.html";
```

The navigation is clear and expected.

---

### Bad Example

Unexpected redirects:

```javascript
setTimeout(
    function () {

        location.href =
        "another-page.html";

    },
    1000
);
```

Users may find this confusing.

---

# Real-World Example

## Logout Feature

```javascript
function logout() {

    let result =
    confirm(
        "Are you sure you want to logout?"
    );

    if (result) {

        location.href =
        "login.html";

    }

}
```

Good practices used:

- Confirmation before action.
- Clear navigation.
- No unnecessary popups.

---

# Common Mistakes

## Too Many Alerts

```javascript
alert("1");
alert("2");
alert("3");
```

Creates a poor user experience.

---

## Unstopped Intervals

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

the interval runs forever.

---

## Reloading Without Reason

```javascript
location.reload();
```

can disrupt user activity and cause frustration.

---

# Best Practices Checklist

Before using BOM features, ask yourself:

- Is this popup necessary?
- Can this action be done with HTML instead?
- Have I validated user input?
- Am I opening unnecessary windows?
- Have I stopped unused timers?
- Will this redirect confuse the user?
- Is browser information really needed?

If the answer is no, consider a better approach.

---

# Summary

BOM provides powerful browser interaction features, but they should be used carefully.

Important recommendations:

- Minimize alerts and prompts.
- Validate user input.
- Use confirmations only for important actions.
- Avoid unnecessary window operations.
- Manage timers properly.
- Avoid infinite reload loops.
- Use browser information responsibly.
- Keep navigation clear and predictable.

Following these practices results in cleaner code, better performance, and a more professional user experience.

---

# Key Takeaways

- Use BOM features only when necessary.
- Avoid excessive alerts, prompts, and popups.
- Always validate user input.
- Clear timers when no longer needed.
- Use redirects carefully.
- Avoid browser-specific assumptions.
- Respect user experience and browser limitations.
- Good BOM practices lead to more maintainable and user-friendly applications.
