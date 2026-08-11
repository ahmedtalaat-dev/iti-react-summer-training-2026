# Lesson 02: Reusable Components

## Introduction

One of React's greatest strengths is its **component-based architecture**. Instead of writing the same UI code multiple times, developers can create **reusable components** that can be used throughout an application.

Reusable components make applications easier to maintain, organize, and scale.

---

# What is a Reusable Component?

A reusable component is a React component that can be used in multiple places with different data or behavior.

Instead of copying and pasting HTML, you create one component and reuse it wherever needed.

Example:

```text
Website

├── Header
├── Product Card
├── Product Card
├── Product Card
└── Footer
```

The same **Product Card** component is reused for every product.

---

# Why Use Reusable Components?

Reusable components provide several benefits:

- Reduce code duplication.
- Improve maintainability.
- Make projects easier to organize.
- Increase development speed.
- Ensure a consistent user interface.

---

# Creating a Reusable Component

A component is simply a JavaScript function that returns JSX.

Example:

```jsx
function Button() {

    return (

        <button>

            Click Me

        </button>

    );

}
```

This component can now be used multiple times.

---

# Using Components

Components are used like HTML elements.

Example:

```jsx
function App() {

    return (

        <div>

            <Button />

            <Button />

            <Button />

        </div>

    );

}
```

The `Button` component is rendered three times.

---

# Making Components Dynamic with Props

Reusable components become more powerful when combined with **props**.

Example:

```jsx
function Button(props) {

    return (

        <button>

            {props.text}

        </button>

    );

}
```

Using the component:

```jsx
<Button text="Login" />

<Button text="Register" />

<Button text="Contact" />
```

Each button displays different text while using the same component.

---

# Component Composition

React applications are built by combining smaller components.

Example:

```text
App

├── Header
├── Navbar
├── Hero
├── Card
├── Card
├── Card
└── Footer
```

Each component has a single responsibility.

---

# Organizing Components

Large React projects usually store components inside a dedicated folder.

Example:

```text
src
│
├── components
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── Button.jsx
│   └── Footer.jsx
│
├── App.jsx
└── main.jsx
```

This structure improves readability and project organization.

---

# Reusing Layout Components

Components are not limited to buttons or cards.

Examples of reusable layout components include:

- Header
- Navbar
- Sidebar
- Footer
- Card
- Modal
- Form
- Button

These components can be shared across multiple pages.

---

# Single Responsibility Principle

Each component should perform **one specific task**.

For example:

- `Navbar` → Navigation links
- `Footer` → Footer content
- `Card` → Display product information
- `Button` → Render a button

Keeping components focused makes them easier to maintain and reuse.

---

# Best Practices

- Keep components small and focused.
- Reuse components instead of duplicating code.
- Use meaningful component names.
- Store components in separate files.
- Pass data through props instead of hardcoding values.
- Organize components into a dedicated `components` folder.

---

# Summary

Reusable components are one of React's core features. They allow developers to build modular, maintainable, and scalable applications by creating UI elements once and using them throughout the project.

Main concepts covered:

```text
- Reusable Components
- Component-Based Architecture
- Functional Components
- JSX
- Props
- Component Composition
- Project Organization
- Single Responsibility Principle
```

By designing reusable components, React applications become cleaner, more consistent, and easier to extend.

---

# Key Takeaways

- Reusable components reduce code duplication.
- Components can be rendered multiple times.
- Props make components dynamic and flexible.
- Component composition builds complex interfaces from smaller pieces.
- Organizing components into separate files improves maintainability.
- Small, focused components lead to cleaner and more scalable React applications.
