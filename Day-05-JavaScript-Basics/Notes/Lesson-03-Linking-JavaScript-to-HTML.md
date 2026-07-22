# Linking JavaScript to HTML

## Introduction

Before JavaScript can interact with a webpage, it must first be connected to the HTML document. This process is known as **linking JavaScript to HTML**.

There are multiple ways to add JavaScript code to a webpage, and each method has its own use cases and advantages.

In this document, we'll cover:

- Internal JavaScript
- External JavaScript
- Script Placement (Head vs Body)
- Best Practices

---

# Why Do We Need to Link JavaScript?

JavaScript is responsible for adding behavior and interactivity to web pages.

Without linking JavaScript, a webpage would only contain:

- Structure (HTML)
- Styling (CSS)

JavaScript allows developers to:

- Handle user interactions.
- Validate forms.
- Create animations.
- Update content dynamically.
- Communicate with servers.

---

# Method 1: Internal JavaScript

Internal JavaScript is written directly inside the HTML document using the `<script>` tag.

---

## Syntax

```html
<script>
    // JavaScript Code Here
</script>
```

---

## Example

```html
<!DOCTYPE html>
<html>

<head>
    <title>Internal JavaScript</title>
</head>

<body>

    <h1>Welcome</h1>

    <script>
        alert("Hello from JavaScript!");
    </script>

</body>

</html>
```

---

## Advantages

- Easy for small examples.
- Useful for testing code quickly.
- No additional files required.

---

## Disadvantages

- Makes HTML files larger.
- Difficult to maintain in large projects.
- Cannot reuse code across multiple pages.

---

# Method 2: External JavaScript

External JavaScript is written in a separate `.js` file and linked to the HTML document.

This is the most common and recommended approach.

---

## Step 1: Create a JavaScript File

### script.js

```javascript
alert("Hello from External JavaScript!");
```

---

## Step 2: Link the File to HTML

```html
<script src="script.js"></script>
```

---

## Complete Example

### index.html

```html
<!DOCTYPE html>
<html>

<head>
    <title>External JavaScript</title>
</head>

<body>

    <h1>Welcome</h1>

    <script src="script.js"></script>

</body>

</html>
```

---

### script.js

```javascript
alert("Hello from External JavaScript!");
```

---

## Advantages

- Keeps HTML clean.
- Improves maintainability.
- Encourages code reuse.
- Easier collaboration among developers.
- Best practice for real-world projects.

---

## Disadvantages

- Requires an additional file.
- Browser must load the JavaScript file separately.

---

# Script Placement in HTML

The `<script>` tag can be placed in different parts of the HTML document.

---

## Placing JavaScript in the Head Section

### Example

```html
<head>

    <script>
        console.log("JavaScript Loaded");
    </script>

</head>
```

---

### Advantages

- Scripts load before the page content.

### Disadvantages

- May slow down page rendering.
- HTML elements may not be available yet.

Example problem:

```javascript
document.getElementById("title");
```

The element may not exist yet because the page has not finished loading.

---

# Placing JavaScript Before the Closing Body Tag

### Example

```html
<body>

    <h1 id="title">
        Welcome
    </h1>

    <script src="script.js"></script>

</body>
```

---

## Advantages

- HTML loads first.
- Faster page rendering.
- JavaScript can access page elements immediately.
- Most commonly used approach.

---

## Recommended Practice

Place JavaScript files just before:

```html
</body>
```

This improves performance and avoids DOM-related issues.

---

# Using Multiple JavaScript Files

A webpage can load multiple JavaScript files.

### Example

```html
<script src="main.js"></script>

<script src="validation.js"></script>

<script src="app.js"></script>
```

The browser loads files from top to bottom.

---

# The defer Attribute

The `defer` attribute tells the browser to download the script while parsing HTML and execute it after the page has finished loading.

### Example

```html
<script src="script.js" defer></script>
```

---

## Benefits of defer

- Improves page performance.
- Prevents blocking page rendering.
- Ensures HTML elements are loaded first.

---

# The async Attribute

The `async` attribute allows the browser to download and execute the script independently.

### Example

```html
<script src="script.js" async></script>
```

---

## Characteristics

- Executes as soon as the file finishes downloading.
- May execute before HTML finishes loading.
- Execution order is not guaranteed.

---

## When to Use async

Suitable for:

- Analytics scripts.
- Advertisement scripts.
- Third-party integrations.

---

# Internal vs External JavaScript

| Feature | Internal JavaScript | External JavaScript |
|----------|----------|----------|
| Location | Inside HTML file | Separate `.js` file |
| Reusability | Low | High |
| Maintainability | Difficult | Easy |
| Best for | Small examples | Real projects |
| Performance | Lower | Better |

---

# Common Mistakes

### Forgetting the Script Tag

Wrong:

```html
src="script.js"
```

Correct:

```html
<script src="script.js"></script>
```

---

### Wrong File Path

Wrong:

```html
<script src="scripts.js"></script>
```

If the file name is:

```text
script.js
```

The browser will not find it.

---

### Loading JavaScript Too Early

Placing scripts in the head without considering DOM loading may cause errors.

---

# Best Practices

- Use external JavaScript files whenever possible.
- Place scripts before the closing `</body>` tag.
- Use meaningful file names.
- Keep JavaScript code organized.
- Use `defer` when appropriate.
- Avoid writing large amounts of JavaScript inside HTML files.

---

# Key Takeaways

- JavaScript must be linked to an HTML document before it can run.
- Internal JavaScript is written directly inside the HTML file.
- External JavaScript is stored in separate `.js` files and is the preferred approach.
- Scripts can be placed in the `<head>` or `<body>` section.
- Using external files improves maintainability and scalability.
- Placing scripts before the closing `</body>` tag is a common best practice.
