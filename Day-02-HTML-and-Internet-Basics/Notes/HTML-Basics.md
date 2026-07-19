# HTML Basics

## What is HTML?

HTML stands for:

> HyperText Markup Language

HTML is the standard language used to create the structure of web pages.

HTML is responsible for:

- Headings
- Paragraphs
- Images
- Lists
- Links
- Forms
- Tables

---

## Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>

<body>
    <h1>Hello World</h1>
</body>
</html>
```

---

## HTML Tags

HTML uses tags to define elements.

Examples:

```html
<h1>Heading</h1>

<p>This is a paragraph.</p>

<button>Click Me</button>
```

Some common tags:

| Tag | Description |
|-----|------------|
| h1 | Heading |
| p | Paragraph |
| img | Image |
| ul | Unordered List |
| ol | Ordered List |
| li | List Item |
| meta | Metadata |
| title | Page Title |
| body | Webpage Content |

---

## Images in HTML

The `<img>` tag is used to display images.

Syntax:

```html
<img src="image.jpg" alt="My Image">
```

Example:

```html
<img
    src="./images/logo.png"
    alt="ITI Logo"
>
```

Important attributes:

- src
- alt
- width
- height

Example:

```html
<img
    src="photo.jpg"
    alt="Profile Picture"
    width="300"
    height="200"
>
```

---

## Meta Tags

Meta tags provide information about the webpage.

Example:

```html
<meta charset="UTF-8">
```

Sets the character encoding.

---

### Responsive Design

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Allows webpages to display properly on different screen sizes.

---

## Meta Refresh

The meta refresh tag can automatically refresh or redirect a page.

Refresh the page every 5 seconds:

```html
<meta http-equiv="refresh" content="5">
```

Redirect to another page after 5 seconds:

```html
<meta
    http-equiv="refresh"
    content="5; url=https://google.com"
>
```

---

## Lists in HTML

### Unordered List

Displays bullet points.

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Output:

```text
• HTML
• CSS
• JavaScript
```

---

### Ordered List

Displays numbered items.

```html
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>
```

Output:

```text
1. Learn HTML
2. Learn CSS
3. Learn JavaScript
```

---

### Nested Lists

```html
<ul>
    <li>
        Front-End
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>
```

---

## Example HTML Page

```html
<!DOCTYPE html>
<html>

<head>
    <title>Day 02</title>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
</head>

<body>

    <h1>Day 02 - HTML Basics</h1>

    <img
        src="html-logo.png"
        alt="HTML Logo"
        width="200"
    >

    <h2>Topics Learned</h2>

    <ul>
        <li>HTML</li>
        <li>Images</li>
        <li>Meta Tags</li>
        <li>Meta Refresh</li>
        <li>Lists</li>
    </ul>

</body>

</html>
```

---

## Summary

Today, I learned:

- What HTML is.
- The basic HTML document structure.
- HTML tags.
- Images in HTML.
- Meta tags.
- Meta refresh.
- Ordered and unordered lists.
- Writing simple HTML pages.
