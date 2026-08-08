# Lesson 02: Bootstrap Grid System

## Introduction

The **Bootstrap Grid System** is a flexible layout system that helps developers create responsive web pages. It is based on a **12-column grid**, allowing content to resize and rearrange automatically across different screen sizes.

The grid system uses three main elements:

- Containers
- Rows
- Columns

---

# How the Grid System Works

Bootstrap divides each row into **12 equal columns**.

Example:

```text
+------------------------------------------------+
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |
+------------------------------------------------+
```

You can combine columns in any way, as long as the total equals **12**.

Examples:

- 12
- 6 + 6
- 4 + 4 + 4
- 3 + 3 + 3 + 3
- 8 + 4
- 9 + 3

---

# Containers

Every Bootstrap grid starts with a container.

## Fixed Container

```html
<div class="container">

</div>
```

The width changes according to the screen size.

---

## Fluid Container

```html
<div class="container-fluid">

</div>
```

Takes **100%** of the viewport width.

---

# Rows

Rows organize columns horizontally.

```html
<div class="container">

    <div class="row">

    </div>

</div>
```

Rows must always be placed inside containers.

---

# Columns

Columns hold the page content.

Example:

```html
<div class="container">

    <div class="row">

        <div class="col">

            Column 1

        </div>

        <div class="col">

            Column 2

        </div>

    </div>

</div>
```

Bootstrap automatically divides the available space equally.

---

# Column Sizes

Specify how many of the 12 columns an element occupies.

Example:

```html
<div class="row">

    <div class="col-4">

        Left

    </div>

    <div class="col-8">

        Right

    </div>

</div>
```

Result:

```text
|----4----|--------8--------|
```

---

# Responsive Columns

Bootstrap allows different layouts for different screen sizes.

Example:

```html
<div class="col-sm-12 col-md-6 col-lg-4">

    Card

</div>
```

Behavior:

- Small screens → Full width
- Medium screens → Half width
- Large screens → One-third width

---

# Bootstrap Breakpoints

| Class | Screen Width |
|--------|--------------|
| `col-` | Extra Small (<576px) |
| `col-sm-` | ≥576px |
| `col-md-` | ≥768px |
| `col-lg-` | ≥992px |
| `col-xl-` | ≥1200px |
| `col-xxl-` | ≥1400px |

---

# Equal Width Columns

Bootstrap automatically distributes available space.

```html
<div class="row">

    <div class="col">

        One

    </div>

    <div class="col">

        Two

    </div>

    <div class="col">

        Three

    </div>

</div>
```

Each column occupies one-third of the row.

---

# Nested Grid

Columns can contain another grid.

```html
<div class="container">

    <div class="row">

        <div class="col-8">

            <div class="row">

                <div class="col-6">

                    Nested

                </div>

                <div class="col-6">

                    Grid

                </div>

            </div>

        </div>

        <div class="col-4">

            Sidebar

        </div>

    </div>

</div>
```

---

# Offsetting Columns

Offsets create empty space before a column.

Example:

```html
<div class="row">

    <div class="col-4 offset-2">

        Content

    </div>

</div>
```

This leaves two empty columns before the content.

---

# Ordering Columns

Bootstrap allows changing the visual order.

```html
<div class="row">

    <div class="col order-2">

        Second

    </div>

    <div class="col order-1">

        First

    </div>

</div>
```

---

# Horizontal Alignment

Align columns horizontally.

```html
<div class="row justify-content-center">

    <div class="col-4">

        Centered

    </div>

</div>
```

Common classes:

- `justify-content-start`
- `justify-content-center`
- `justify-content-end`
- `justify-content-between`
- `justify-content-around`

---

# Vertical Alignment

Align columns vertically.

```html
<div class="row align-items-center">

    <div class="col">

        Content

    </div>

</div>
```

Common classes:

- `align-items-start`
- `align-items-center`
- `align-items-end`

---

# Gutters

Gutters are the spaces between columns.

Example:

```html
<div class="row g-3">

    ...

</div>
```

Common gutter classes:

- `g-0`
- `g-1`
- `g-2`
- `g-3`
- `g-4`
- `g-5`

---

# Complete Example

```html
<div class="container">

    <div class="row">

        <div class="col-md-4">

            Card 1

        </div>

        <div class="col-md-4">

            Card 2

        </div>

        <div class="col-md-4">

            Card 3

        </div>

    </div>

</div>
```

On mobile devices, each card occupies the full width.

On medium screens and larger, three cards appear side by side.

---

# Best Practices

- Always place rows inside containers.
- Place columns only inside rows.
- Ensure column widths do not exceed 12.
- Use responsive breakpoint classes.
- Prefer Bootstrap's spacing utilities instead of custom margins.
- Test layouts on different screen sizes.

---

# Summary

Bootstrap's Grid System provides a powerful and flexible way to build responsive layouts using containers, rows, and columns.

Main concepts covered:

```text
- Container
- Container Fluid
- Row
- Columns
- 12-Column Grid
- Breakpoints
- Responsive Columns
- Nested Grid
- Offsets
- Ordering
- Alignment
- Gutters
```

The Bootstrap Grid System is one of the framework's most important features, making it easy to create responsive and well-structured layouts with minimal CSS.

---

# Key Takeaways

- Bootstrap uses a 12-column responsive grid.
- Layouts are built using containers, rows, and columns.
- Responsive breakpoint classes adapt layouts to different screen sizes.
- Columns can be nested, reordered, and offset.
- Gutters control spacing between columns.
- The grid system simplifies responsive web development.
