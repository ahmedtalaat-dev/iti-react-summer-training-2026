# Lesson 02: CSS Measurement Units

## Introduction

CSS measurement units determine the size of elements, text, spacing, and layouts. Choosing the appropriate unit is important for creating responsive and accessible web pages.

CSS units are divided into two main categories:

- Absolute units
- Relative units

---

# Absolute Units

Absolute units have fixed values and do not change based on screen size or parent elements.

Common absolute units include:

- `px` (pixels)
- `cm` (centimeters)
- `mm` (millimeters)
- `in` (inches)
- `pt` (points)
- `pc` (picas)

---

## Pixels (`px`)

Pixels are the most commonly used CSS unit.

Example:

```css
h1 {
    font-size: 32px;
}

.box {
    width: 300px;
    height: 200px;
}
```

### Advantages

- Precise sizing
- Consistent appearance

### Disadvantages

- Less flexible for responsive layouts

---

# Relative Units

Relative units change depending on another value such as the parent element, root element, or viewport size.

Common relative units include:

- `%`
- `em`
- `rem`
- `vw`
- `vh`
- `vmin`
- `vmax`

---

## Percentage (`%`)

A percentage is relative to the parent element.

Example:

```css
.container {
    width: 80%;
}

img {
    width: 100%;
}
```

Useful for responsive layouts.

---

## `em`

The `em` unit is relative to the font size of the parent element.

Example:

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em;
}
```

Result:

```text
2 × 20px = 40px
```

---

## `rem`

The `rem` (Root EM) unit is relative to the root (`html`) font size.

Example:

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem;
}
```

Result:

```text
2 × 16px = 32px
```

### Why use `rem`?

- Consistent sizing
- Easier maintenance
- Better accessibility

---

## Viewport Width (`vw`)

`1vw` equals 1% of the browser's viewport width.

Example:

```css
.hero-title {
    font-size: 5vw;
}
```

The text grows and shrinks with the browser width.

---

## Viewport Height (`vh`)

`1vh` equals 1% of the viewport height.

Example:

```css
.hero {
    height: 100vh;
}
```

This makes the section fill the entire browser height.

---

## `vmin`

Uses the smaller value between viewport width and height.

Example:

```css
.square {
    width: 40vmin;
    height: 40vmin;
}
```

---

## `vmax`

Uses the larger value between viewport width and height.

Example:

```css
.banner {
    font-size: 6vmax;
}
```

---

# Unit Comparison

| Unit | Relative To | Responsive |
|------|-------------|------------|
| `px` | Fixed size | ❌ |
| `%` | Parent element | ✅ |
| `em` | Parent font size | ✅ |
| `rem` | Root font size | ✅ |
| `vw` | Viewport width | ✅ |
| `vh` | Viewport height | ✅ |
| `vmin` | Smaller viewport dimension | ✅ |
| `vmax` | Larger viewport dimension | ✅ |

---

# When to Use Each Unit

### Use `px` for:

- Borders
- Icons
- Small fixed-size elements

### Use `%` for:

- Flexible widths
- Images
- Containers

### Use `em` for:

- Component-based font sizing
- Nested elements

### Use `rem` for:

- Global typography
- Consistent spacing

### Use `vw` and `vh` for:

- Full-screen sections
- Responsive typography
- Hero banners

---

# Practical Example

```html
<div class="container">
    <h1>Responsive Design</h1>
    <p>Learning CSS units.</p>
</div>
```

```css
html {
    font-size: 16px;
}

.container {
    width: 80%;
    padding: 2rem;
}

h1 {
    font-size: 2.5rem;
}

p {
    font-size: 1.2em;
}
```

---

# Best Practices

- Prefer `rem` for font sizes.
- Use `%` for flexible widths.
- Use `vh` and `vw` for full-screen layouts.
- Avoid excessive use of fixed `px` values.
- Keep spacing and typography consistent.
- Test layouts on different screen sizes.

---

# Summary

CSS measurement units allow developers to control element dimensions and create responsive layouts.

Main concepts covered:

```text
- Absolute Units
- Relative Units
- px
- %
- em
- rem
- vw
- vh
- vmin
- vmax
```

Selecting the right unit helps build flexible, responsive, and accessible web pages.

---

# Key Takeaways

- Absolute units have fixed sizes.
- Relative units adapt to their environment.
- `rem` is preferred for scalable typography.
- `%` creates flexible layouts.
- `vw` and `vh` respond to viewport dimensions.
- Choosing the correct measurement unit improves responsiveness and maintainability.
