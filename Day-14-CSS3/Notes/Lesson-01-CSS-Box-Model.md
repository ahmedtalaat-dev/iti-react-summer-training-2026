# Lesson 01: CSS Box Model

## Introduction

Every HTML element is treated as a rectangular box by the browser. The **CSS Box Model** describes how the size of an element is calculated and how space is distributed around it.

Understanding the Box Model is essential for creating accurate layouts, controlling spacing, and designing responsive web pages.

---

# What is the CSS Box Model?

The CSS Box Model consists of four main parts:

1. Content
2. Padding
3. Border
4. Margin

```text
+---------------------------+
|         Margin            |
|  +---------------------+  |
|  |      Border         |  |
|  | +-----------------+ |  |
|  | |    Padding      | |  |
|  | | +-------------+ | |  |
|  | | |   Content   | | |  |
|  | | +-------------+ | |  |
|  | +-----------------+ |  |
|  +---------------------+  |
+---------------------------+
```

---

# Content

The **content** is the actual data displayed inside the element.

It may contain:

- Text
- Images
- Videos
- Other HTML elements

Example:

```html
<div class="box">
    Hello CSS
</div>
```

```css
.box{
    width: 200px;
    height: 100px;
}
```

---

# Padding

Padding is the space between the content and the border.

Example:

```css
.box{
    padding:20px;
}
```

Individual sides:

```css
padding-top:10px;
padding-right:20px;
padding-bottom:10px;
padding-left:20px;
```

Shortcut:

```css
padding:10px 20px;
```

---

# Border

The border surrounds the padding and content.

Example:

```css
.box{

    border:2px solid black;

}
```

Border properties:

```css
border-width:2px;

border-style:solid;

border-color:blue;
```

Common border styles:

- solid
- dashed
- dotted
- double
- groove
- ridge

---

# Margin

Margin creates space outside the border.

Example:

```css
.box{

    margin:20px;

}
```

Individual margins:

```css
margin-top:10px;

margin-right:20px;

margin-bottom:10px;

margin-left:20px;
```

Shortcut:

```css
margin:10px 20px;
```

---

# Width and Height

By default:

```css
width

height
```

apply only to the **content area**.

Example:

```css
.box{

    width:200px;

    height:100px;

}
```

The final size becomes larger after adding padding and border.

---

# Calculating Total Width

Example:

```css
width:200px;

padding:20px;

border:5px solid;
```

Total width:

```text
200
+20
+20
+5
+5
------
250px
```

---

# Calculating Total Height

Example:

```css
height:100px;

padding:15px;

border:3px solid;
```

Total height:

```text
100
+15
+15
+3
+3
------
136px
```

---

# box-sizing Property

The `box-sizing` property changes how width and height are calculated.

## content-box (Default)

```css
box-sizing:content-box;
```

Width and height include only the content.

Padding and borders increase the final size.

---

## border-box

```css
box-sizing:border-box;
```

Width and height include:

- Content
- Padding
- Border

This makes layout calculations much easier.

Example:

```css
*{

    box-sizing:border-box;

}
```

This is commonly applied to all elements.

---

# Margin Collapse

Vertical margins between adjacent elements may collapse into a single margin.

Example:

```css
.box1{

    margin-bottom:20px;

}

.box2{

    margin-top:30px;

}
```

The space between them becomes:

```text
30px
```

instead of:

```text
50px
```

---

# Centering an Element

A block element can be centered horizontally.

```css
.box{

    width:300px;

    margin:auto;

}
```

or

```css
margin:0 auto;
```

---

# Overflow

If content is larger than its container:

```css
overflow:hidden;
```

Other values:

```text
visible
hidden
scroll
auto
```

---

# Example

HTML

```html
<div class="card">

    CSS Box Model

</div>
```

CSS

```css
.card{

    width:250px;

    padding:20px;

    border:2px solid #333;

    margin:30px;

}
```

---

# Common Box Model Properties

| Property | Purpose |
|----------|---------|
| width | Content width |
| height | Content height |
| padding | Inner spacing |
| border | Surrounds padding |
| margin | Outer spacing |
| box-sizing | Controls size calculation |
| overflow | Handles extra content |

---

# Best Practices

- Use `box-sizing: border-box` for easier layouts.
- Use padding for internal spacing.
- Use margin for spacing between elements.
- Avoid excessive nested margins.
- Keep spacing consistent throughout the page.
- Use shorthand properties to write cleaner CSS.

---

# Summary

The CSS Box Model defines how every HTML element is displayed and sized on a web page.

Main concepts covered:

```text
- Content
- Padding
- Border
- Margin
- Width
- Height
- box-sizing
- content-box
- border-box
- Margin Collapse
- Overflow
```

Mastering the Box Model is fundamental for building clean, responsive, and well-structured web layouts.

---

# Key Takeaways

- Every HTML element is represented as a box.
- The Box Model consists of content, padding, border, and margin.
- Width and height apply to the content area by default.
- `box-sizing: border-box` simplifies layout calculations.
- Padding adds internal spacing, while margin creates external spacing.
- Understanding the Box Model is essential for effective CSS layout design.
