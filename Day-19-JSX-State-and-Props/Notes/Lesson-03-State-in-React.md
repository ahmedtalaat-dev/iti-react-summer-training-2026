# Lesson 03: State in React

## Introduction

**State** is one of the most important concepts in React. It allows components to store and manage data that can change over time. Whenever the state changes, React automatically updates (re-renders) the component to reflect the new data on the screen.

State is what makes React applications interactive.

---

# What is State?

State is a built-in object that stores information about a component.

Examples of data stored in state include:

- Counter values
- User input
- Login status
- Theme mode
- Shopping cart items

Unlike regular variables, updating state automatically updates the user interface.

---

# Why Use State?

State provides several benefits:

- Stores dynamic data.
- Automatically updates the UI.
- Makes applications interactive.
- Keeps component data organized.
- Works seamlessly with React's rendering system.

---

# The `useState` Hook

In functional components, state is managed using the **useState** Hook.

First, import it:

```jsx
import { useState } from "react";
```

Create a state variable:

```jsx
const [count, setCount] = useState(0);
```

Here:

- `count` → Current state value.
- `setCount` → Function used to update the state.
- `0` → Initial value.

---

# Reading State

State values can be displayed directly inside JSX.

Example:

```jsx
function Counter() {

    const [count, setCount] = useState(0);

    return <h2>{count}</h2>;

}
```

Initially, the component displays:

```text
0
```

---

# Updating State

State should always be updated using its setter function.

Example:

```jsx
<button
    onClick={() => setCount(count + 1)}>
    Increment
</button>
```

Each click increases the counter and React updates the displayed value automatically.

---

# Complete Counter Example

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h2>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}>
                Increase
            </button>

        </div>

    );

}
```

---

# Multiple State Variables

A component can have more than one state variable.

Example:

```jsx
const [name, setName] = useState("");

const [age, setAge] = useState(20);
```

Each piece of state is managed independently.

---

# State with User Input

State is commonly used to store form input.

Example:

```jsx
function App() {

    const [name, setName] = useState("");

    return (

        <input

            type="text"

            value={name}

            onChange={(e) => setName(e.target.value)}

        />

    );

}
```

The input value stays synchronized with the component's state.

---

# State Causes Re-rendering

Whenever state changes:

1. React detects the change.
2. The component is re-rendered.
3. The updated UI is displayed.

Developers do not need to manually update the DOM.

---

# State vs Regular Variables

| Regular Variable | State |
|------------------|-------|
| Changes do not update the UI | Changes automatically update the UI |
| Lost after re-render | Preserved between renders |
| Updated directly | Updated using the setter function |

---

# Rules for Using State

- Call `useState` only at the top level of a component.
- Never update state directly.
- Always use the setter function returned by `useState`.
- State should contain only data that changes over time.

---

# Best Practices

- Keep state as simple as possible.
- Use separate state variables for unrelated data.
- Do not modify state directly.
- Use meaningful names for state variables.
- Avoid storing derived data that can be calculated when needed.

---

# Summary

State allows React components to store dynamic data and automatically update the user interface whenever that data changes.

Main concepts covered:

```text
- State
- useState
- State Variables
- Setter Functions
- Component Re-rendering
- Dynamic UI
- User Input
```

State is a fundamental part of React that enables developers to build interactive and responsive applications.

---

# Key Takeaways

- State stores data that can change during a component's lifetime.
- The `useState` Hook is used to manage state in functional components.
- Updating state automatically re-renders the component.
- Always update state using its setter function.
- State is commonly used for counters, forms, and interactive UI elements.
- Proper state management leads to cleaner and more maintainable React applications.
