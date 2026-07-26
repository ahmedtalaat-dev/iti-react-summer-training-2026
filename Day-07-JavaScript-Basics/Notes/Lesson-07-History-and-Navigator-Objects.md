# Lesson 07: History and Navigator Objects in JavaScript

## Introduction

The **History Object** and **Navigator Object** are part of the Browser Object Model (BOM).

They allow JavaScript to:

- Interact with the browser's history.
- Navigate between previously visited pages.
- Access information about the user's browser and device.

These objects are commonly used in web applications to improve user experience and gather browser-related information.

---

# History Object

## What is the History Object?

The `history` object contains information about the user's browsing history within the current browser tab.

It allows JavaScript to:

- Move backward.
- Move forward.
- Navigate through previously visited pages.

The History Object is accessed through:

```javascript
window.history
```

or simply:

```javascript
history
```

---

# history.length

Returns the number of pages in the browser history list.

### Example

```javascript
console.log(history.length);
```

Output:

```text
5
```

(The actual number depends on the user's browsing history.)

---

# history.back()

Moves the browser to the previous page.

### Syntax

```javascript
history.back();
```

### Example

```javascript
history.back();
```

Result:

```text
Equivalent to clicking the browser Back button.
```

---

# history.forward()

Moves the browser to the next page.

### Syntax

```javascript
history.forward();
```

### Example

```javascript
history.forward();
```

Result:

```text
Equivalent to clicking the browser Forward button.
```

---

# history.go()

Navigates to a specific page in the history list.

### Syntax

```javascript
history.go(number);
```

---

## Move Back One Page

```javascript
history.go(-1);
```

Same as:

```javascript
history.back();
```

---

## Move Forward One Page

```javascript
history.go(1);
```

Same as:

```javascript
history.forward();
```

---

## Reload Current Page

```javascript
history.go(0);
```

Result:

```text
Reloads the current page.
```

---

# Real-World Example

## Custom Back Button

```javascript
function goBack() {

    history.back();

}
```

HTML:

```html
<button onclick="goBack()">
    Back
</button>
```

Result:

```text
Navigates to the previous page.
```

---

# Navigator Object

## What is the Navigator Object?

The `navigator` object provides information about the user's browser and device.

It helps developers:

- Detect browser information.
- Detect operating systems.
- Check internet status.
- Access language settings.

The Navigator Object is accessed through:

```javascript
window.navigator
```

or:

```javascript
navigator
```

---

# navigator.userAgent

Returns information about the browser and operating system.

### Example

```javascript
console.log(
    navigator.userAgent
);
```

Output:

```text
Mozilla/5.0 ...
```

The exact output varies depending on the browser.

---

# navigator.appName

Returns the browser name.

### Example

```javascript
console.log(
    navigator.appName
);
```

Output:

```text
Netscape
```

Modern browsers often return:

```text
Netscape
```

for compatibility reasons.

---

# navigator.appVersion

Returns browser version information.

### Example

```javascript
console.log(
    navigator.appVersion
);
```

Output:

```text
Browser Version Information
```

---

# navigator.language

Returns the user's preferred language.

### Example

```javascript
console.log(
    navigator.language
);
```

Output:

```text
en-US
```

---

# navigator.platform

Returns information about the operating system.

### Example

```javascript
console.log(
    navigator.platform
);
```

Output:

```text
Win32
```

or

```text
MacIntel
```

depending on the device.

---

# navigator.onLine

Checks whether the browser is connected to the internet.

### Example

```javascript
console.log(
    navigator.onLine
);
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

# Real-World Example

## Check Internet Connection

```javascript
if (navigator.onLine) {

    console.log(
        "Internet Connected"
    );

}
else {

    console.log(
        "No Internet Connection"
    );

}
```

Output:

```text
Internet Connected
```

or

```text
No Internet Connection
```

---

# Real-World Example

## Display Browser Language

```javascript
console.log(
    "Language: " +
    navigator.language
);
```

Output:

```text
Language: en-US
```

---

# History Object vs Navigator Object

| History Object | Navigator Object |
|---------------|------------------|
| Controls browser history | Provides browser information |
| back() | userAgent |
| forward() | language |
| go() | platform |
| length | onLine |

---

# Common Mistakes

## Assuming History Exists

Wrong:

```javascript
history.back();
```

when there is no previous page.

Result:

```text
Nothing happens.
```

---

## Depending on Browser Detection

Wrong:

```javascript
if (
    navigator.userAgent
    === "Chrome"
)
```

Different browsers may return different formats.

Use feature detection whenever possible.

---

# Best Practices

- Use History methods only when necessary.
- Do not rely heavily on browser detection.
- Use `navigator.onLine` to improve user experience.
- Avoid making browser-specific assumptions.
- Test browser-related features across multiple browsers.

---

# Summary

The History Object allows JavaScript to navigate through the browser history.

Important methods:

- `history.back()`
- `history.forward()`
- `history.go()`

Important property:

- `history.length`

---

The Navigator Object provides information about the browser and device.

Important properties:

- `navigator.userAgent`
- `navigator.appName`
- `navigator.appVersion`
- `navigator.language`
- `navigator.platform`
- `navigator.onLine`

These objects are useful for navigation, browser detection, and improving user experience in web applications.

---

# Key Takeaways

- The History Object manages browser navigation history.
- `history.back()` moves to the previous page.
- `history.forward()` moves to the next page.
- `history.go()` navigates through history entries.
- The Navigator Object provides browser and device information.
- `navigator.language` returns the user's preferred language.
- `navigator.platform` returns operating system information.
- `navigator.onLine` checks internet connectivity.
- Both objects are important parts of the Browser Object Model (BOM).
