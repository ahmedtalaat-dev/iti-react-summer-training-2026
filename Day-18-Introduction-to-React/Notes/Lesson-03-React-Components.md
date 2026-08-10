# Lesson 03: React Components

## Introduction

Components are the **building blocks of React applications**. Instead of writing one large HTML page, React encourages developers to divide the user interface into small, reusable pieces called **components**.

Each component is responsible for rendering a specific part of the UI and can be reused throughout the application.

---

# What is a React Component?

A React component is a JavaScript function or class that returns **JSX** describing what should appear on the screen.

Example:

```jsx
function Welcome() {

    return <h1>Welcome to React!</h1>;

}
```

This component displays a simple heading.

---

# Why Use Components?

Components provide several benefits:

- Reusable code
- Better organization
- Easier maintenance
- Separation of concerns
- Improved readability
- Scalable application structure

Instead of duplicating code, developers can reuse components wherever needed.

---

# Types of Components

React supports two types of components:

## Functional Components

A functional component is simply a JavaScript function.

Example:

```jsx
function Header() {

    return <h1>My Website</h1>;

}
```

Functional components are the recommended approach in modern React.

---

## Class Components

A class component extends the `React.Component` class.

Example:

```jsx
class Header extends React.Component {

    render() {

        return <h1>My Website</h1>;

    }

}
```

Today, functional components are preferred because they are simpler and work with React Hooks.

---

# JSX in Components

Components return **JSX**, which looks similar to HTML.

Example:

```jsx
function Greeting() {

    return (

        <div>

            <h2>Hello!</h2>

            <p>Welcome to React.</p>

        </div>

    );

}
```

JSX allows combining HTML-like syntax with JavaScript.

---

# Rendering Components

Components can be used inside other components.

Example:

```jsx
function Header() {

    return <h1>My Website</h1>;

}

function App() {

    return (

        <div>

            <Header />

        </div>

    );

}
```

React renders the `Header` component inside the `App` component.

---

# Component Composition

Applications are created by combining multiple components.

Example structure:

```text
App
│
├── Header
├── Navbar
├── Hero
├── Services
├── Footer
```

Each component is responsible for one part of the interface.

---

# Reusing Components

A component can be rendered multiple times.

Example:

```jsx
function Card() {

    return <div>Product Card</div>;

}

function App() {

    return (

        <div>

            <Card />

            <Card />

            <Card />

        </div>

    );

}
```

This avoids repeating the same HTML.

---

# Props (Properties)

Props allow data to be passed from one component to another.

Example:

```jsx
function Welcome(props) {

    return <h2>Hello, {props.name}</h2>;

}

function App() {

    return <Welcome name="Ahmed" />;

}
```

Output:

```text
Hello, Ahmed
```

Props make components dynamic and reusable.

---

# Component File Structure

Each component is typically stored in its own file.

Example:

```text
src
│
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Card.jsx
│
└── App.jsx
```

This improves project organization.

---

# Naming Components

React component names must start with an uppercase letter.

Correct:

```jsx
function Header() {

    return <h1>Header</h1>;

}
```

Incorrect:

```jsx
function header() {

    return <h1>Header</h1>;

}
```

React treats lowercase names as HTML elements.

---

# Best Practices

- Keep components small and focused.
- Use functional components whenever possible.
- Store each component in a separate file.
- Use meaningful component names.
- Reuse components instead of duplicating code.
- Pass data using props.

---

# Summary

React applications are built from reusable components that make development more modular and maintainable.

Main concepts covered:

```text
- React Components
- Functional Components
- Class Components
- JSX
- Component Composition
- Props
- Reusable Components
- Component File Structure
```

Components are the foundation of React development, allowing developers to build complex user interfaces by combining small, independent, and reusable pieces.

---

# Key Takeaways

- Components are the core building blocks of React applications.
- Functional components are the modern and recommended approach.
- Components return JSX to describe the UI.
- Components can be nested and reused throughout an application.
- Props allow components to receive dynamic data.
- Organizing components into separate files improves maintainability and scalability.
