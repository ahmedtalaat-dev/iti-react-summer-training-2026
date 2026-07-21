# CSS Introduction

## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML documents. It allows developers to separate the presentation layer from the structure of a webpage, making websites more maintainable and visually appealing.

While HTML is responsible for creating the structure and content of a webpage, CSS is responsible for styling that content.

Without CSS, websites would only display plain text and unstyled elements.

---

## Why Do We Use CSS?

CSS is used to:

- Improve the visual appearance of web pages.
- Separate content from presentation.
- Make websites easier to maintain and update.
- Create responsive and user-friendly interfaces.
- Reuse styles across multiple pages.
- Improve the overall user experience.

---

## Advantages of CSS

Some of the major advantages of CSS include:

- Cleaner and more organized code.
- Better maintainability.
- Faster development process.
- Improved website consistency.
- Reduced code duplication.
- Easier website scalability.
- Better performance by using external stylesheets.

---

## Types of CSS

There are three ways to apply CSS to an HTML document:

### 1. Inline CSS

Inline CSS is applied directly to an HTML element using the `style` attribute.

#### Example

```html
<h1 style="color: blue;">Hello World!</h1>
```

#### Advantages

- Easy to use for quick styling.
- Useful for testing small style changes.

#### Disadvantages

- Difficult to maintain.
- Not reusable.
- Makes HTML code less readable.

---

### 2. Internal CSS

Internal CSS is written inside the `<style>` tag within the `<head>` section of an HTML document.

#### Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>

    <h1>Hello World!</h1>

</body>
</html>
```

#### Advantages

- Keeps styles separate from HTML elements.
- Useful for single-page websites.

#### Disadvantages

- Cannot be reused across multiple pages.
- Not ideal for large projects.

---

### 3. External CSS

External CSS is written in a separate `.css` file and linked to the HTML document.

#### Example

##### HTML File

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

##### CSS File

```css
h1 {
    color: blue;
}
```

#### Advantages

- Reusable across multiple pages.
- Easy to maintain.
- Keeps HTML clean and organized.
- Best practice for real-world projects.

#### Disadvantages

- Requires an additional HTTP request.

---

## CSS Syntax

CSS follows a simple syntax consisting of a selector and a declaration block.

### Syntax

```css
selector {
    property: value;
}
```

### Example

```css
h1 {
    color: blue;
    font-size: 32px;
}
```

---

## Understanding CSS Rules

A CSS rule consists of three parts:

| Part | Description |
|------|------|
| Selector | Specifies the HTML element to style |
| Property | Defines what style will be applied |
| Value | Specifies the value of the property |

### Example

```css
p {
    color: red;
}
```

In this example:

- `p` is the selector.
- `color` is the property.
- `red` is the value.

---

## How CSS Works

When the browser loads a webpage, it:

1. Parses the HTML document.
2. Reads the CSS rules.
3. Matches selectors with HTML elements.
4. Applies the corresponding styles.
5. Renders the final styled webpage.

---

## CSS File Naming Convention

The most common naming convention for CSS files is:

```text
style.css
```

Other examples include:

```text
main.css
layout.css
responsive.css
components.css
```

For small projects, using a single `style.css` file is usually sufficient.

---

## Best Practices

- Prefer using external CSS files.
- Keep your CSS organized and readable.
- Use meaningful class names.
- Avoid using inline styles whenever possible.
- Group related styles together.
- Follow consistent naming conventions.

---

## Key Takeaways

- CSS is responsible for styling and designing web pages.
- CSS separates presentation from content.
- There are three ways to use CSS: Inline, Internal, and External.
- External CSS is the preferred approach for most projects.
- Understanding CSS syntax is essential before learning selectors and layout techniques.
