# Lesson 05: Creating and Removing Elements

## Introduction

One of the most powerful features of the DOM is the ability to dynamically create, add, and remove HTML elements using JavaScript.

This allows developers to:

- Generate content dynamically.
- Build interactive interfaces.
- Add items to lists.
- Create notifications and alerts.
- Update the page without reloading.

Dynamic element creation is heavily used in modern web applications and frameworks such as React.

---

# Creating Elements

To create a new HTML element, use:

```javascript
document.createElement()
```

### Syntax

```javascript
document.createElement(tagName);
```

### Example

```javascript
let heading =
document.createElement("h1");
```

Result:

```html
<h1></h1>
```

The element is created in memory but is not yet displayed on the page.

---

# Adding Content to Elements

After creating an element, content can be added.

### Example

```javascript
let heading =
document.createElement("h1");

heading.innerText =
"Welcome Ahmed";
```

Result:

```html
<h1>Welcome Ahmed</h1>
```

---

# Appending Elements

To display an element on the page, it must be added to the DOM.

Use:

```javascript
appendChild()
```

### Syntax

```javascript
parent.appendChild(child);
```

### Example

```javascript
let heading =
document.createElement("h1");

heading.innerText =
"Hello DOM";

document.body.appendChild(
    heading
);
```

Result:

```html
<body>
    <h1>Hello DOM</h1>
</body>
```

---

# append()

The `append()` method can add one or more elements.

### Example

```javascript
let paragraph =
document.createElement("p");

paragraph.innerText =
"JavaScript DOM";

document.body.append(
    paragraph
);
```

---

# prepend()

Adds an element at the beginning of the parent.

### Example

```javascript
let title =
document.createElement("h1");

title.innerText =
"Website Title";

document.body.prepend(
    title
);
```

Result:

```text
Element appears before all existing content.
```

---

# Inserting Elements Before Another Element

Use:

```javascript
insertBefore()
```

### Syntax

```javascript
parent.insertBefore(
    newElement,
    existingElement
);
```

### Example

```javascript
let heading =
document.createElement("h2");

heading.innerText =
"New Heading";

let paragraph =
document.getElementById("para");

document.body.insertBefore(
    heading,
    paragraph
);
```

---

# Creating Lists Dynamically

### Example

```javascript
let ul =
document.createElement("ul");

let li =
document.createElement("li");

li.innerText =
"JavaScript";

ul.appendChild(li);

document.body.appendChild(ul);
```

Result:

```html
<ul>
    <li>JavaScript</li>
</ul>
```

---

# Creating Multiple Elements

### Example

```javascript
for (let i = 1; i <= 3; i++) {

    let item =
    document.createElement("p");

    item.innerText =
    "Item " + i;

    document.body.appendChild(
        item
    );

}
```

Result:

```text
Item 1
Item 2
Item 3
```

---

# Removing Elements

Elements can be removed dynamically from the page.

---

## remove()

Removes the selected element.

### Example

```javascript
let element =
document.getElementById("box");

element.remove();
```

Result:

```text
Element disappears from the page.
```

---

# removeChild()

Removes a child element from its parent.

### Syntax

```javascript
parent.removeChild(child);
```

### Example

```javascript
let list =
document.getElementById("list");

let firstItem =
list.firstElementChild;

list.removeChild(
    firstItem
);
```

Result:

```text
First list item removed.
```

---

# Replacing Elements

Use:

```javascript
replaceChild()
```

### Syntax

```javascript
parent.replaceChild(
    newElement,
    oldElement
);
```

### Example

```javascript
let newTitle =
document.createElement("h1");

newTitle.innerText =
"Updated Title";

let oldTitle =
document.getElementById("title");

document.body.replaceChild(
    newTitle,
    oldTitle
);
```

---

# Checking If Element Exists

Before removing an element, check if it exists.

### Example

```javascript
let box =
document.getElementById("box");

if (box) {

    box.remove();

}
```

This prevents runtime errors.

---

# Real-World Example

## Add New Task

HTML:

```html
<button id="addBtn">
    Add Task
</button>

<ul id="tasks"></ul>
```

JavaScript:

```javascript
addBtn.addEventListener(
    "click",
    function () {

        let li =
        document.createElement("li");

        li.innerText =
        "New Task";

        tasks.appendChild(li);

    }
);
```

Result:

```text
A new task is added every time the button is clicked.
```

---

# Real-World Example

## Remove Notification

HTML:

```html
<div id="notification">
    Welcome
</div>
```

JavaScript:

```javascript
notification.remove();
```

Result:

```text
Notification disappears.
```

---

# Common Mistakes

## Creating Elements Without Appending Them

Wrong:

```javascript
let p =
document.createElement("p");

p.innerText =
"Hello";
```

Result:

```text
Element is not visible.
```

Reason:

```text
Element was never added to the DOM.
```

---

## Removing Non-Existing Elements

Wrong:

```javascript
document
.getElementById("box")
.remove();
```

when the element does not exist.

Result:

```text
Error occurs.
```

---

## Using innerHTML Excessively

Wrong:

```javascript
container.innerHTML +=
"<p>New Item</p>";
```

Repeated use may reduce performance.

Prefer:

```javascript
createElement()
```

and

```javascript
appendChild()
```

---

# Best Practices

- Use `createElement()` for dynamic content.
- Use `appendChild()` or `append()` to add elements.
- Check element existence before removing.
- Prefer DOM methods over excessive `innerHTML`.
- Keep element creation organized and reusable.
- Remove unused elements to improve performance.

---

# Summary

JavaScript can dynamically create, insert, replace, and remove HTML elements using DOM methods.

Important methods include:

### Creation

```javascript
createElement()
```

### Insertion

```javascript
appendChild()
append()
prepend()
insertBefore()
```

### Removal

```javascript
remove()
removeChild()
```

### Replacement

```javascript
replaceChild()
```

These methods are essential for building dynamic and interactive web applications.

---

# Key Takeaways

- `createElement()` creates new HTML elements.
- Elements must be appended to appear on the page.
- `appendChild()` adds elements to the DOM.
- `prepend()` adds elements at the beginning.
- `remove()` deletes elements.
- `removeChild()` removes child nodes.
- `replaceChild()` replaces existing elements.
- Dynamic element creation is a core skill in Front-End Development.
