# Lesson 02: DOM Selectors

## Introduction

DOM Selectors are methods used to access and select HTML elements from a webpage using JavaScript.

Before JavaScript can modify, style, or interact with an element, it must first locate that element inside the Document Object Model (DOM).

Selectors allow developers to:

- Access HTML elements.
- Modify content.
- Change styles.
- Handle events.
- Create interactive web applications.

---

# What Are DOM Selectors?

DOM Selectors are JavaScript methods used to find HTML elements within a webpage.

Example HTML:

```html
<h1 id="title">Welcome</h1>
```

JavaScript:

```javascript
let heading =
document.getElementById("title");

console.log(heading);
```

Output:

```html
<h1 id="title">Welcome</h1>
```

---

# getElementById()

Selects an element using its unique ID.

## Syntax

```javascript
document.getElementById("id");
```

## Example

HTML:

```html
<h1 id="title">Hello DOM</h1>
```

JavaScript:

```javascript
let title =
document.getElementById("title");

console.log(title);
```

Output:

```html
<h1 id="title">Hello DOM</h1>
```

---

## Why Use IDs?

Because IDs are unique.

Example:

```html
<h1 id="mainTitle">Welcome</h1>
```

Only one element should have:

```text
mainTitle
```

---

# getElementsByClassName()

Selects all elements with a specific class.

## Syntax

```javascript
document.getElementsByClassName("className");
```

## Example

HTML:

```html
<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>
```

JavaScript:

```javascript
let paragraphs =
document.getElementsByClassName("info");

console.log(paragraphs);
```

Output:

```javascript
HTMLCollection(2)
```

---

## Accessing Elements

```javascript
console.log(
    paragraphs[0]
);
```

Output:

```html
<p class="info">Paragraph 1</p>
```

---

# getElementsByTagName()

Selects elements by tag name.

## Syntax

```javascript
document.getElementsByTagName("tag");
```

## Example

HTML:

```html
<h1>Title</h1>
<h1>Welcome</h1>
```

JavaScript:

```javascript
let headings =
document.getElementsByTagName("h1");

console.log(headings);
```

Output:

```javascript
HTMLCollection(2)
```

---

# querySelector()

Selects the first element matching a CSS selector.

## Syntax

```javascript
document.querySelector("selector");
```

---

## Select by ID

HTML:

```html
<h1 id="title">Welcome</h1>
```

JavaScript:

```javascript
let title =
document.querySelector("#title");
```

---

## Select by Class

HTML:

```html
<p class="info">Hello</p>
```

JavaScript:

```javascript
let paragraph =
document.querySelector(".info");
```

---

## Select by Tag

HTML:

```html
<h1>Welcome</h1>
```

JavaScript:

```javascript
let heading =
document.querySelector("h1");
```

---

# querySelectorAll()

Selects all elements matching a CSS selector.

## Syntax

```javascript
document.querySelectorAll("selector");
```

## Example

HTML:

```html
<p class="info">One</p>
<p class="info">Two</p>
<p class="info">Three</p>
```

JavaScript:

```javascript
let paragraphs =
document.querySelectorAll(".info");

console.log(paragraphs);
```

Output:

```javascript
NodeList(3)
```

---

# HTMLCollection vs NodeList

Some selectors return:

```javascript
HTMLCollection
```

Others return:

```javascript
NodeList
```

---

## HTMLCollection

Returned by:

```javascript
getElementsByClassName()
getElementsByTagName()
```

Example:

```javascript
let items =
document.getElementsByTagName("li");
```

---

## NodeList

Returned by:

```javascript
querySelectorAll()
```

Example:

```javascript
let items =
document.querySelectorAll("li");
```

---

# Looping Through Selected Elements

## Using for Loop

```javascript
let items =
document.querySelectorAll("li");

for (
    let i = 0;
    i < items.length;
    i++
) {

    console.log(items[i]);

}
```

---

## Using forEach()

```javascript
let items =
document.querySelectorAll("li");

items.forEach(function(item) {

    console.log(item);

});
```

---

# Selecting Nested Elements

HTML:

```html
<div id="container">

    <p>Hello</p>

</div>
```

JavaScript:

```javascript
let paragraph =
document.querySelector(
    "#container p"
);

console.log(paragraph);
```

Output:

```html
<p>Hello</p>
```

---

# Real-World Example

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

console.log(button);
```

Output:

```html
<button id="btn">
    Click Me
</button>
```

---

# Real-World Example

Select all list items.

HTML:

```html
<ul>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>
```

JavaScript:

```javascript
let items =
document.querySelectorAll("li");

items.forEach(function(item) {

    console.log(
        item.textContent
    );

});
```

Output:

```text
HTML
CSS
JavaScript
```

---

# Common Mistakes

## Forgetting # for IDs

Wrong:

```javascript
document.querySelector("title");
```

Correct:

```javascript
document.querySelector("#title");
```

---

## Forgetting . for Classes

Wrong:

```javascript
document.querySelector("info");
```

Correct:

```javascript
document.querySelector(".info");
```

---

## Accessing Non-Existing Elements

Wrong:

```javascript
let element =
document.getElementById("test");

console.log(
    element.innerHTML
);
```

If the element doesn't exist:

```javascript
null
```

Error occurs.

---

Correct:

```javascript
if (element) {

    console.log(
        element.innerHTML
    );

}
```

---

# Best Practices

- Use IDs for unique elements.
- Use classes for multiple elements.
- Prefer `querySelector()` for flexibility.
- Use `querySelectorAll()` when selecting multiple elements.
- Always check if an element exists before using it.
- Use meaningful IDs and class names.

---

# Summary

DOM Selectors allow JavaScript to locate and access HTML elements.

Common selectors include:

| Selector | Description |
|-----------|-------------|
| getElementById() | Select by ID |
| getElementsByClassName() | Select by Class |
| getElementsByTagName() | Select by Tag |
| querySelector() | First matching element |
| querySelectorAll() | All matching elements |

DOM Selectors are the foundation of DOM Manipulation because every interaction with an HTML element starts by selecting it.

---

# Key Takeaways

- DOM Selectors are used to access HTML elements.
- `getElementById()` selects one element by ID.
- `getElementsByClassName()` selects multiple elements by class.
- `getElementsByTagName()` selects elements by tag.
- `querySelector()` returns the first matching element.
- `querySelectorAll()` returns all matching elements.
- Always ensure elements exist before manipulating them.
- Mastering selectors is essential for effective DOM programming.
