# Lesson 02: Using Icon Libraries

## Introduction

Icons improve the appearance and usability of web applications by providing visual cues for actions, navigation, and information. In React, icon libraries make it easy to add scalable vector icons without downloading image files.

One of the most popular icon libraries for React is **React Icons**, which combines icons from many well-known icon sets into a single package.

---

# What are Icon Libraries?

An icon library is a collection of ready-made icons that can be imported and used as React components.

Instead of using image files, icons are rendered as scalable SVG elements.

Examples of icon libraries include:

- React Icons
- Font Awesome
- Heroicons
- Material Icons
- Bootstrap Icons

---

# Why Use Icon Libraries?

Icon libraries provide several benefits:

- Easy to use
- Scalable without losing quality
- Lightweight
- Customizable with CSS
- Large collection of icons
- Improve user experience

---

# React Icons

**React Icons** is one of the most popular icon libraries for React.

It includes icons from multiple icon packs, such as:

- Font Awesome
- Bootstrap Icons
- Material Design Icons
- Heroicons
- Feather Icons
- Remix Icons

---

# Installing React Icons

Install the package using npm.

```bash
npm install react-icons
```

---

# Importing Icons

Import only the icons you need.

Example:

```jsx
import { FaHome } from "react-icons/fa";
```

Here:

- `Fa` → Font Awesome
- `Home` → Home icon

---

# Using Icons

Icons are React components.

Example:

```jsx
import { FaHome } from "react-icons/fa";

function App() {

    return (

        <div>

            <FaHome />

        </div>

    );

}
```

---

# Styling Icons

Icons can be styled using CSS properties.

Example:

```jsx
<FaHeart

    size={40}

    color="red"

/>
```

Common properties:

- `size`
- `color`
- `className`

---

# Using Multiple Icons

Example:

```jsx
import {

    FaHome,

    FaUser,

    FaEnvelope

} from "react-icons/fa";

function App() {

    return (

        <div>

            <FaHome />

            <FaUser />

            <FaEnvelope />

        </div>

    );

}
```

---

# Icons Inside Buttons

Icons are commonly placed inside buttons.

Example:

```jsx
import { FaSearch } from "react-icons/fa";

<button>

    <FaSearch />

    Search

</button>
```

---

# Icons in Navigation

Icons can improve navigation menus.

Example:

```jsx
<nav>

    <a href="#">

        <FaHome />

        Home

    </a>

</nav>
```

---

# Customizing with CSS

Icons can also be styled using CSS classes.

Example:

```jsx
<FaGithub className="github-icon" />
```

```css
.github-icon {

    color: black;

    font-size: 32px;

}
```

---

# Best Practices

- Import only the icons you need.
- Use icons to enhance usability, not replace text entirely.
- Keep icon sizes consistent throughout the application.
- Use meaningful icons that clearly represent their purpose.
- Combine icons with labels when appropriate for better accessibility.

---

# Summary

Icon libraries make it easy to add scalable, customizable icons to React applications. React Icons provides access to thousands of icons from multiple popular icon sets through a simple and consistent API.

Main concepts covered:

```text
- Icon Libraries
- React Icons
- Installing Icons
- Importing Icons
- Styling Icons
- Icons in Buttons
- Icons in Navigation
- CSS Customization
```

Using icon libraries improves the visual appeal and usability of React applications while keeping the code clean and maintainable.

---

# Key Takeaways

- Icon libraries provide reusable SVG icons for React.
- React Icons combines multiple popular icon sets in one package.
- Install React Icons using npm.
- Icons are imported and used as React components.
- Icons can be customized with props or CSS.
- Use icons consistently to improve user experience and interface design.
