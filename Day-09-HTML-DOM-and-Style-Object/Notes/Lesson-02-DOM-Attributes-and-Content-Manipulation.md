# Lesson 02: DOM Attributes and Content Manipulation

## Introduction

HTML elements contain **attributes** and **content**.

JavaScript allows us to:

- Read attributes.
- Modify attributes.
- Add new attributes.
- Remove attributes.
- Change element text.
- Change HTML content dynamically.

These operations are essential for creating interactive and dynamic web applications.

---

# What Are Attributes?

Attributes provide additional information about HTML elements.

Example:

```html
<a href="https://google.com">
    Google
</a>
```

In this example:

```html
href
```

is an attribute.

---

## Common HTML Attributes

| Attribute | Description |
|------------|-------------|
| id | Unique identifier |
| class | CSS class name |
| href | Hyperlink destination |
| src | Image source |
| alt | Alternative image text |
| value | Input value |
| placeholder | Placeholder text |
| disabled | Disables an element |

---

# Getting Attributes

Use:

```javascript
getAttribute()
```

### Syntax

```javascript
element.getAttribute(
    "attributeName"
);
```

### Example

HTML:

```html
<a
    id="link"
    href="https://google.com"
>
    Google
</a>
```

JavaScript:

```javascript
let link =
document.getElementById(
    "link"
);

console.log(
    link.getAttribute("href")
);
```

Output:

```text
https://google.com
```

---

# Setting Attributes

Use:

```javascript
setAttribute()
```

### Syntax

```javascript
element.setAttribute(
    "attributeName",
    "value"
);
```

### Example

```javascript
let image =
document.getElementById(
    "logo"
);

image.setAttribute(
    "src",
    "new-logo.png"
);
```

Result:

```html
<img src="new-logo.png">
```

---

# Removing Attributes

Use:

```javascript
removeAttribute()
```

### Syntax

```javascript
element.removeAttribute(
    "attributeName"
);
```

### Example

```javascript
let input =
document.getElementById(
    "username"
);

input.removeAttribute(
    "placeholder"
);
```

Result:

```text
Placeholder removed.
```

---

# Checking Attributes

Use:

```javascript
hasAttribute()
```

### Example

```javascript
let button =
document.getElementById(
    "btn"
);

console.log(
    button.hasAttribute(
        "disabled"
    )
);
```

Output:

```text
true
```

or

```text
false
```

---

# Reading Content

The DOM provides several ways to read content.

---

## innerHTML

Returns HTML content inside an element.

HTML:

```html
<div id="content">

    <h2>Welcome</h2>

</div>
```

JavaScript:

```javascript
let content =
document.getElementById(
    "content"
);

console.log(
    content.innerHTML
);
```

Output:

```html
<h2>Welcome</h2>
```

---

## innerText

Returns only visible text.

HTML:

```html
<h1 id="title">
    Welcome Ahmed
</h1>
```

JavaScript:

```javascript
console.log(
    title.innerText
);
```

Output:

```text
Welcome Ahmed
```

---

## textContent

Returns all text inside an element.

### Example

```javascript
console.log(
    title.textContent
);
```

Output:

```text
Welcome Ahmed
```

---

# Difference Between innerHTML, innerText, and textContent

| Property | Returns HTML | Returns Visible Text |
|-----------|-------------|----------------------|
| innerHTML | Yes | No |
| innerText | No | Yes |
| textContent | No | All Text |

---

# Changing Content

---

## Changing Text

HTML:

```html
<h1 id="title">
    Welcome
</h1>
```

JavaScript:

```javascript
document
.getElementById("title")
.innerText =
"Hello Ahmed";
```

Result:

```html
<h1>Hello Ahmed</h1>
```

---

## Changing HTML

```javascript
document
.getElementById("content")
.innerHTML =
"<h2>DOM Lesson</h2>";
```

Result:

```html
<h2>DOM Lesson</h2>
```

---

# Working with Input Values

HTML:

```html
<input
    type="text"
    id="username"
>
```

### Reading Value

```javascript
let username =
document
.getElementById("username")
.value;

console.log(username);
```

---

### Updating Value

```javascript
document
.getElementById("username")
.value =
"Ahmed";
```

---

# Changing Images Dynamically

HTML:

```html
<img
    id="photo"
    src="image1.jpg"
>
```

JavaScript:

```javascript
document
.getElementById("photo")
.setAttribute(
    "src",
    "image2.jpg"
);
```

Result:

```text
Image changes dynamically.
```

---

# Changing Links Dynamically

HTML:

```html
<a
    id="website"
    href="#"
>
    Visit
</a>
```

JavaScript:

```javascript
document
.getElementById("website")
.setAttribute(
    "href",
    "https://github.com"
);
```

Result:

```text
Link destination changes.
```

---

# Real-World Example

## Change User Profile

HTML:

```html
<h2 id="name">
    Guest
</h2>

<img
    id="avatar"
    src="default.jpg"
>
```

JavaScript:

```javascript
document
.getElementById("name")
.innerText =
"Ahmed Talaat";

document
.getElementById("avatar")
.setAttribute(
    "src",
    "ahmed.jpg"
);
```

Result:

```text
User information updates dynamically.
```

---

# Real-World Example

## Toggle Button State

HTML:

```html
<button id="btn">
    Submit
</button>
```

JavaScript:

```javascript
let button =
document.getElementById(
    "btn"
);

button.setAttribute(
    "disabled",
    true
);
```

Result:

```text
Button becomes disabled.
```

---

# Common Mistakes

## Using innerHTML for Plain Text

Wrong:

```javascript
element.innerHTML =
"Ahmed";
```

Better:

```javascript
element.innerText =
"Ahmed";
```

---

## Forgetting Attribute Names Are Strings

Wrong:

```javascript
element.setAttribute(
    href,
    "google.com"
);
```

Correct:

```javascript
element.setAttribute(
    "href",
    "google.com"
);
```

---

## Manipulating Non-Existing Elements

Wrong:

```javascript
document
.getElementById("box")
.innerText =
"Hello";
```

If the element doesn't exist:

```text
Error
```

Always verify the element exists first.

---

# Best Practices

- Use `getAttribute()` to read attributes.
- Use `setAttribute()` to update attributes.
- Use `removeAttribute()` when attributes are no longer needed.
- Prefer `innerText` or `textContent` for plain text.
- Use `innerHTML` only when inserting HTML content.
- Validate elements before manipulating them.
- Keep content updates organized and readable.

---

# Summary

DOM Attributes and Content Manipulation allow JavaScript to dynamically update web pages.

Important Attribute Methods:

```javascript
getAttribute()
setAttribute()
removeAttribute()
hasAttribute()
```

Important Content Properties:

```javascript
innerHTML
innerText
textContent
value
```

These concepts are fundamental for creating dynamic and interactive web applications.

---

# Key Takeaways

- Attributes store additional information about HTML elements.
- JavaScript can read, modify, add, and remove attributes.
- `getAttribute()` reads attribute values.
- `setAttribute()` updates attribute values.
- `removeAttribute()` removes attributes.
- `innerHTML` works with HTML content.
- `innerText` and `textContent` work with text content.
- Content manipulation is one of the most common DOM operations in Front-End Development.
