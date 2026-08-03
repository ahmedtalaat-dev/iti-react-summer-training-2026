# Lesson 03: Canvas API

## Introduction

The **Canvas API** is an HTML5 feature that allows developers to draw graphics dynamically using JavaScript. Unlike SVG, which is vector-based, Canvas is **pixel-based**, making it ideal for games, animations, image editing, and real-time visualizations.

A `<canvas>` element acts as a blank drawing surface, and all drawing operations are performed through JavaScript.

---

# What is Canvas?

The Canvas API provides a way to draw graphics directly inside a web page.

It supports:

- Shapes
- Lines
- Text
- Images
- Colors
- Animations
- Games
- Charts

Canvas itself does not draw anything until JavaScript is used.

---

# Creating a Canvas

Add a `<canvas>` element to your HTML page.

```html
<canvas
    id="myCanvas"
    width="500"
    height="300"
>
    Your browser does not support Canvas.
</canvas>
```

### Attributes

- `id` → Used to access the canvas with JavaScript.
- `width` → Width of the drawing area.
- `height` → Height of the drawing area.

---

# Accessing the Canvas

Use JavaScript to access the canvas.

```javascript
const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");
```

The `"2d"` context enables two-dimensional drawing.

---

# Drawing a Rectangle

Use the `fillRect()` method.

```javascript
ctx.fillStyle = "steelblue";

ctx.fillRect(50, 40, 150, 100);
```

Parameters:

```text
x, y, width, height
```

---

# Drawing an Outlined Rectangle

Use `strokeRect()`.

```javascript
ctx.strokeStyle = "black";

ctx.lineWidth = 3;

ctx.strokeRect(50, 40, 150, 100);
```

---

# Clearing an Area

Use `clearRect()`.

```javascript
ctx.clearRect(0, 0, 500, 300);
```

This removes everything from the specified area.

---

# Drawing a Line

```javascript
ctx.beginPath();

ctx.moveTo(20, 20);

ctx.lineTo(250, 150);

ctx.stroke();
```

---

# Drawing Multiple Lines

```javascript
ctx.beginPath();

ctx.moveTo(20, 20);

ctx.lineTo(150, 20);

ctx.lineTo(150, 120);

ctx.stroke();
```

---

# Drawing a Circle

Use the `arc()` method.

```javascript
ctx.beginPath();

ctx.arc(
    150,
    100,
    50,
    0,
    Math.PI * 2
);

ctx.fillStyle = "tomato";

ctx.fill();
```

Parameters:

```text
x
y
radius
startAngle
endAngle
```

---

# Drawing an Arc

```javascript
ctx.beginPath();

ctx.arc(
    150,
    100,
    60,
    0,
    Math.PI
);

ctx.stroke();
```

This draws a half-circle.

---

# Drawing Text

Filled text:

```javascript
ctx.font = "30px Arial";

ctx.fillStyle = "blue";

ctx.fillText(
    "Hello Canvas",
    50,
    60
);
```

---

# Outlined Text

```javascript
ctx.font = "30px Arial";

ctx.strokeText(
    "Canvas",
    50,
    120
);
```

---

# Colors

Fill color:

```javascript
ctx.fillStyle = "green";
```

Border color:

```javascript
ctx.strokeStyle = "red";
```

---

# Line Width

```javascript
ctx.lineWidth = 5;
```

---

# Drawing Images

Create an image object.

```javascript
const image = new Image();

image.src = "cat.jpg";
```

Draw it:

```javascript
image.onload = function () {

    ctx.drawImage(
        image,
        50,
        50
    );

};
```

---

# Drawing Gradients

Linear gradient:

```javascript
const gradient = ctx.createLinearGradient(
    0,
    0,
    200,
    0
);

gradient.addColorStop(0, "red");

gradient.addColorStop(1, "yellow");

ctx.fillStyle = gradient;

ctx.fillRect(20, 20, 200, 100);
```

---

# Canvas Paths

A path is a collection of drawing commands.

```javascript
ctx.beginPath();

ctx.moveTo(50, 50);

ctx.lineTo(150, 50);

ctx.lineTo(100, 120);

ctx.closePath();

ctx.fill();
```

---

# Saving and Restoring State

Save current settings:

```javascript
ctx.save();
```

Restore previous settings:

```javascript
ctx.restore();
```

Useful when changing colors, fonts, or transformations.

---

# Transformations

Move the drawing origin.

```javascript
ctx.translate(100, 50);
```

Rotate.

```javascript
ctx.rotate(Math.PI / 4);
```

Scale.

```javascript
ctx.scale(2, 2);
```

---

# Basic Animation

Use `requestAnimationFrame()`.

```javascript
let x = 0;

function animate() {

    ctx.clearRect(0, 0, 500, 300);

    ctx.fillRect(x, 100, 50, 50);

    x++;

    requestAnimationFrame(animate);

}

animate();
```

---

# Canvas vs SVG

| Canvas | SVG |
|---------|-----|
| Pixel-based | Vector-based |
| Controlled by JavaScript | Defined with HTML/XML |
| Better for games | Better for icons and logos |
| Faster for complex graphics | Easier to edit individual shapes |
| Not scalable | Scales without losing quality |

---

# Common Canvas Methods

| Method | Description |
|---------|-------------|
| `fillRect()` | Draw filled rectangle |
| `strokeRect()` | Draw outlined rectangle |
| `clearRect()` | Clear an area |
| `beginPath()` | Start a new path |
| `moveTo()` | Move drawing cursor |
| `lineTo()` | Draw a line |
| `arc()` | Draw circles and arcs |
| `fill()` | Fill current shape |
| `stroke()` | Draw outline |
| `fillText()` | Draw filled text |
| `strokeText()` | Draw outlined text |
| `drawImage()` | Draw an image |

---

# Best Practices

- Set the canvas width and height using HTML attributes.
- Always call `beginPath()` before drawing a new shape.
- Use `requestAnimationFrame()` for smooth animations.
- Clear the canvas before redrawing animations.
- Save and restore the drawing state when needed.
- Use Canvas for graphics that change frequently.

---

# Summary

The Canvas API enables developers to create dynamic graphics directly in the browser using JavaScript.

Main concepts covered:

```text
- Canvas Element
- 2D Context
- Rectangles
- Lines
- Circles
- Arcs
- Text
- Images
- Colors
- Gradients
- Paths
- Transformations
- Animations
```

Canvas is an excellent choice for building interactive graphics, games, visualizations, and animations where performance and real-time rendering are important.

---

# Key Takeaways

- Canvas is a pixel-based drawing surface.
- All drawing operations are performed with JavaScript.
- The `getContext("2d")` method provides access to the drawing API.
- Canvas supports shapes, text, images, and animations.
- `requestAnimationFrame()` is the preferred way to create smooth animations.
- Canvas is best suited for dynamic graphics, while SVG is better for scalable vector graphics.
