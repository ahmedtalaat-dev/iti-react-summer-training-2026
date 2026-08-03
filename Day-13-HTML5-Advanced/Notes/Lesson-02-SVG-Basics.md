# Lesson 02: SVG Basics

## Introduction

**SVG (Scalable Vector Graphics)** is an XML-based graphics format used to create two-dimensional vector graphics for the web. Unlike raster images (such as JPEG or PNG), SVG images can be scaled to any size without losing quality.

SVG is supported by all modern browsers and can be styled with CSS and manipulated using JavaScript.

---

# What is SVG?

SVG stands for:

```text
Scalable Vector Graphics
```

SVG uses mathematical equations to draw shapes instead of pixels.

Example:

```html
<svg width="200" height="200">

</svg>
```

Everything drawn inside the `<svg>` element is a vector graphic.

---

# Advantages of SVG

SVG offers several benefits:

- Scales without losing quality.
- Small file size for simple graphics.
- Editable with a text editor.
- Searchable and accessible.
- Can be styled using CSS.
- Can be animated with CSS and JavaScript.
- Supported by all modern browsers.

---

# SVG vs Raster Images

| SVG | PNG/JPG |
|-----|----------|
| Vector-based | Pixel-based |
| Scalable | Loses quality when enlarged |
| Smaller for simple graphics | Usually larger |
| Editable as text | Cannot be edited as text |
| Supports animation | Limited animation support |

---

# Creating an SVG

Basic syntax:

```html
<svg width="300" height="200">

</svg>
```

The `width` and `height` attributes define the drawing area.

---

# Drawing a Rectangle

Use the `<rect>` element.

Example:

```html
<svg width="250" height="150">

    <rect
        x="20"
        y="20"
        width="120"
        height="80"
        fill="steelblue"
    />

</svg>
```

### Attributes

- `x` → Horizontal position
- `y` → Vertical position
- `width` → Rectangle width
- `height` → Rectangle height
- `fill` → Fill color

---

# Drawing a Circle

Use the `<circle>` element.

Example:

```html
<svg width="200" height="200">

    <circle
        cx="100"
        cy="100"
        r="60"
        fill="tomato"
    />

</svg>
```

### Attributes

- `cx` → Center X
- `cy` → Center Y
- `r` → Radius

---

# Drawing an Ellipse

Example:

```html
<svg width="250" height="150">

    <ellipse
        cx="125"
        cy="75"
        rx="80"
        ry="40"
        fill="gold"
    />

</svg>
```

---

# Drawing a Line

Use the `<line>` element.

Example:

```html
<svg width="200" height="150">

    <line
        x1="20"
        y1="20"
        x2="180"
        y2="120"
        stroke="black"
        stroke-width="3"
    />

</svg>
```

---

# Drawing a Polyline

A polyline connects multiple points.

Example:

```html
<svg width="250" height="150">

    <polyline
        points="20,100 80,20 140,100 200,20"
        fill="none"
        stroke="blue"
        stroke-width="3"
    />

</svg>
```

---

# Drawing a Polygon

A polygon automatically closes the shape.

Example:

```html
<svg width="250" height="200">

    <polygon
        points="125,20 220,180 30,180"
        fill="green"
    />

</svg>
```

---

# Drawing Text

Use the `<text>` element.

Example:

```html
<svg width="300" height="100">

    <text
        x="20"
        y="60"
        font-size="30"
        fill="purple"
    >
        Hello SVG
    </text>

</svg>
```

---

# SVG Paths

The `<path>` element creates complex shapes.

Example:

```html
<svg width="300" height="200">

    <path
        d="M20 20 L150 20 L150 100 Z"
        fill="orange"
    />

</svg>
```

Common commands:

- `M` → Move
- `L` → Line
- `H` → Horizontal line
- `V` → Vertical line
- `C` → Curve
- `Z` → Close path

---

# Stroke and Fill

SVG elements can have borders and fill colors.

Example:

```html
<circle
    cx="80"
    cy="80"
    r="50"
    fill="yellow"
    stroke="black"
    stroke-width="4"
/>
```

---

# Grouping Elements

Use the `<g>` element to group SVG shapes.

Example:

```html
<svg width="250" height="200">

    <g fill="blue">

        <circle cx="60" cy="60" r="30"/>

        <circle cx="150" cy="60" r="30"/>

    </g>

</svg>
```

---

# SVG Gradients

SVG supports linear and radial gradients.

Example:

```html
<svg width="300" height="200">

<defs>

<linearGradient id="grad">

<stop offset="0%" stop-color="red"/>

<stop offset="100%" stop-color="yellow"/>

</linearGradient>

</defs>

<rect
    width="250"
    height="100"
    fill="url(#grad)"
/>

</svg>
```

---

# Styling SVG with CSS

SVG elements can be styled using CSS.

Example:

```html
<style>

circle{

    fill: royalblue;

    stroke: black;

    stroke-width:3;

}

</style>
```

---

# Using JavaScript with SVG

JavaScript can modify SVG elements dynamically.

Example:

```javascript
const circle = document.querySelector("circle");

circle.setAttribute("fill", "red");
```

---

# Common SVG Elements

| Element | Purpose |
|---------|----------|
| `<svg>` | SVG container |
| `<rect>` | Rectangle |
| `<circle>` | Circle |
| `<ellipse>` | Ellipse |
| `<line>` | Straight line |
| `<polyline>` | Connected lines |
| `<polygon>` | Closed shape |
| `<path>` | Complex shapes |
| `<text>` | Text |
| `<g>` | Group elements |

---

# Best Practices

- Use SVG for icons and logos.
- Keep SVG code clean and organized.
- Use CSS for styling whenever possible.
- Group related shapes using `<g>`.
- Use descriptive IDs for reusable elements.
- Optimize SVG files before deployment.

---

# Summary

SVG is a powerful HTML5 technology for creating scalable vector graphics directly in web pages.

Main concepts covered:

```text
- SVG Introduction
- Rectangle
- Circle
- Ellipse
- Line
- Polyline
- Polygon
- Path
- Text
- Stroke
- Fill
- Gradients
- CSS Styling
- JavaScript Manipulation
```

SVG is ideal for responsive graphics because it remains sharp at any size and integrates seamlessly with HTML, CSS, and JavaScript.

---

# Key Takeaways

- SVG stands for Scalable Vector Graphics.
- SVG uses vectors instead of pixels.
- Graphics remain sharp regardless of size.
- SVG elements are written in XML.
- CSS can style SVG graphics.
- JavaScript can manipulate SVG dynamically.
- SVG is commonly used for icons, charts, logos, and illustrations.
