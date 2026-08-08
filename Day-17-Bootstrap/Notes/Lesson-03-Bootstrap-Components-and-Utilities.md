# Lesson 03: Bootstrap Components and Utilities

## Introduction

Bootstrap provides a rich collection of **pre-built components** and **utility classes** that help developers build responsive and attractive user interfaces quickly without writing much custom CSS.

Components are reusable UI elements, while utilities are small CSS helper classes for spacing, colors, typography, sizing, alignment, and more.

---

# Bootstrap Components

Components are ready-made interface elements that can be added using predefined Bootstrap classes.

Some of the most commonly used components are:

- Buttons
- Cards
- Navbar
- Forms
- Alerts
- Badges
- Modals
- Tables

---

# Buttons

Bootstrap offers several button styles.

Example:

```html
<button class="btn btn-primary">Primary</button>

<button class="btn btn-success">Success</button>

<button class="btn btn-danger">Danger</button>

<button class="btn btn-warning">Warning</button>
```

Common button classes:

- `btn-primary`
- `btn-secondary`
- `btn-success`
- `btn-danger`
- `btn-warning`
- `btn-info`
- `btn-dark`
- `btn-light`

---

# Cards

Cards display content inside a flexible container.

Example:

```html
<div class="card" style="width: 18rem;">

    <img src="image.jpg" class="card-img-top" alt="Image">

    <div class="card-body">

        <h5 class="card-title">Bootstrap Card</h5>

        <p class="card-text">
            Simple card component.
        </p>

        <a href="#" class="btn btn-primary">
            Learn More
        </a>

    </div>

</div>
```

---

# Navbar

The Navbar is used for website navigation.

Example:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <div class="container">

        <a class="navbar-brand" href="#">
            My Website
        </a>

    </div>

</nav>
```

---

# Forms

Bootstrap provides styled form controls.

Example:

```html
<div class="mb-3">

    <label class="form-label">

        Email

    </label>

    <input
        type="email"
        class="form-control">

</div>
```

Useful form classes:

- `form-control`
- `form-label`
- `form-select`
- `form-check`

---

# Alerts

Alerts display important messages.

Example:

```html
<div class="alert alert-success">

    Data saved successfully.

</div>
```

Other alert styles:

- `alert-primary`
- `alert-danger`
- `alert-warning`
- `alert-info`

---

# Badges

Badges highlight small pieces of information.

Example:

```html
<span class="badge bg-primary">

    New

</span>
```

---

# Tables

Bootstrap makes tables responsive and attractive.

Example:

```html
<table class="table table-striped">

    <tr>

        <th>Name</th>

        <th>Age</th>

    </tr>

    <tr>

        <td>Ahmed</td>

        <td>22</td>

    </tr>

</table>
```

---

# Bootstrap Utility Classes

Utility classes are small helper classes that apply a single style.

They reduce the need for writing custom CSS.

---

# Spacing Utilities

Margin:

```html
<div class="m-3">

Content

</div>
```

Padding:

```html
<div class="p-4">

Content

</div>
```

Directional spacing:

```text
mt-
mb-
ms-
me-
mx-
my-
pt-
pb-
ps-
pe-
px-
py-
```

---

# Text Utilities

Center text:

```html
<p class="text-center">

Centered Text

</p>
```

Other text utilities:

```text
text-start
text-end
text-uppercase
text-lowercase
text-capitalize
fw-bold
fst-italic
```

---

# Color Utilities

Text colors:

```html
<p class="text-primary">

Primary Text

</p>
```

Background colors:

```html
<div class="bg-success text-white">

Success

</div>
```

---

# Display Utilities

Show or hide elements.

```html
<div class="d-none">

Hidden

</div>

<div class="d-block">

Visible

</div>
```

Other values:

- `d-flex`
- `d-grid`
- `d-inline`
- `d-inline-block`

---

# Flex Utilities

Bootstrap provides helper classes for Flexbox.

Example:

```html
<div class="d-flex justify-content-between">

    <div>Left</div>

    <div>Right</div>

</div>
```

Useful classes:

- `justify-content-center`
- `justify-content-between`
- `justify-content-around`
- `align-items-center`
- `flex-column`
- `flex-wrap`

---

# Border and Shadow Utilities

Border:

```html
<div class="border">

Box

</div>
```

Rounded corners:

```html
<div class="rounded">

Rounded

</div>
```

Shadow:

```html
<div class="shadow">

Shadow Box

</div>
```

---

# Complete Example

```html
<div class="container mt-5">

    <div class="card shadow">

        <div class="card-body text-center">

            <h3 class="text-primary">

                Bootstrap Demo

            </h3>

            <button class="btn btn-success mt-3">

                Submit

            </button>

        </div>

    </div>

</div>
```

---

# Best Practices

- Use Bootstrap components instead of recreating common UI elements.
- Combine utility classes to reduce custom CSS.
- Keep HTML clean and organized.
- Use semantic HTML with Bootstrap classes.
- Avoid excessive nesting of components.
- Customize Bootstrap only when necessary.

---

# Summary

Bootstrap Components and Utilities make it easy to build responsive, consistent, and professional web interfaces with minimal custom CSS.

Main concepts covered:

```text
- Buttons
- Cards
- Navbar
- Forms
- Alerts
- Badges
- Tables
- Spacing Utilities
- Text Utilities
- Color Utilities
- Display Utilities
- Flex Utilities
- Border Utilities
- Shadow Utilities
```

By combining Bootstrap's components with its utility classes, developers can rapidly create modern, responsive web applications.

---

# Key Takeaways

- Bootstrap components are reusable UI elements.
- Utility classes apply single-purpose styles without writing CSS.
- Buttons, cards, forms, and navbars are among the most commonly used components.
- Spacing, color, typography, and flex utilities simplify layout creation.
- Utility classes promote cleaner and more maintainable code.
- Bootstrap speeds up front-end development while maintaining responsive and consistent designs.
