# Lesson 04: Class vs Functional Components

## Introduction

React components can be created in two ways: **Class Components** and **Functional Components**. Both are used to build reusable pieces of a user interface, but they differ in syntax, features, and modern usage.

Today, **Functional Components** are the recommended approach because they are simpler, easier to read, and support React Hooks.

---

# What is a Class Component?

A class component is a JavaScript class that extends `React.Component` and must include a `render()` method.

Example:

```jsx
import React from "react";

class Welcome extends React.Component {

    render() {

        return <h1>Hello, React!</h1>;

    }

}
```

Class components were the primary way to create stateful components before React Hooks were introduced.

---

# What is a Functional Component?

A functional component is simply a JavaScript function that returns JSX.

Example:

```jsx
function Welcome() {

    return <h1>Hello, React!</h1>;

}
```

Or using an arrow function:

```jsx
const Welcome = () => {

    return <h1>Hello, React!</h1>;

};
```

Functional components are shorter, cleaner, and the preferred approach in modern React.

---

# Using Props

Both component types can receive props.

### Class Component

```jsx
class Welcome extends React.Component {

    render() {

        return <h2>Hello, {this.props.name}</h2>;

    }

}
```

### Functional Component

```jsx
function Welcome(props) {

    return <h2>Hello, {props.name}</h2>;

}
```

Or with destructuring:

```jsx
function Welcome({ name }) {

    return <h2>Hello, {name}</h2>;

}
```

---

# Managing State

### Class Component

State is initialized in the constructor and updated using `this.setState()`.

```jsx
class Counter extends React.Component {

    state = {

        count: 0

    };

}
```

---

### Functional Component

State is managed using the `useState` Hook.

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

}
```

---

# Event Handling

### Class Component

```jsx
<button

    onClick={() => this.setState({

        count: this.state.count + 1

    })}

>

    Increase

</button>
```

---

### Functional Component

```jsx
<button

    onClick={() => setCount(count + 1)}

>

    Increase

</button>
```

---

# Lifecycle Methods vs Hooks

Class components use lifecycle methods such as:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

Functional components use Hooks instead.

Example:

```jsx
useEffect(() => {

    console.log("Component Mounted");

}, []);
```

Hooks provide the same functionality with less code.

---

# Comparison

| Class Components | Functional Components |
|------------------|-----------------------|
| Use ES6 classes | Use JavaScript functions |
| Require `render()` | Return JSX directly |
| Use `this.props` | Use `props` |
| Use `this.setState()` | Use `useState()` |
| Lifecycle methods | React Hooks |
| More boilerplate | Less code |
| Older approach | Modern approach |

---

# Advantages of Class Components

- Support lifecycle methods.
- Suitable for maintaining older React projects.
- Familiar to developers experienced with object-oriented programming.

---

# Advantages of Functional Components

- Simpler syntax.
- Easier to read and maintain.
- Support React Hooks.
- Less boilerplate code.
- Better performance in modern React development.
- Recommended by the React team.

---

# When to Use Each

Use **Functional Components** for all new React projects.

Use **Class Components** only when:

- Maintaining legacy applications.
- Working with older codebases that have not been migrated to Hooks.

---

# Best Practices

- Prefer functional components for new development.
- Use Hooks (`useState`, `useEffect`, etc.) instead of lifecycle methods.
- Keep components small and focused.
- Avoid mixing class and functional styles unless maintaining legacy code.
- Write reusable components that receive data through props.

---

# Summary

React supports both class and functional components, but functional components have become the standard approach thanks to their simplicity and support for Hooks.

Main concepts covered:

```text
- Class Components
- Functional Components
- Props
- State
- render()
- useState
- useEffect
- Lifecycle Methods
- React Hooks
```

Understanding the differences between these two component types helps developers work with both modern React applications and older codebases.

---

# Key Takeaways

- React components can be written as classes or functions.
- Functional components are the recommended approach in modern React.
- Class components use `render()` and `this.setState()`.
- Functional components use Hooks such as `useState()` and `useEffect()`.
- Functional components are simpler, cleaner, and require less code.
- Knowledge of both types is useful for working with new and legacy React projects.
