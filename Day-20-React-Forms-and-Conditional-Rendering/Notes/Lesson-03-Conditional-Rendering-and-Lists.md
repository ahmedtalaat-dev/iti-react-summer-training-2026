# Lesson 03: Conditional Rendering and Lists

## Introduction

React allows developers to display different UI elements based on conditions and efficiently render multiple components from arrays of data. These features make applications dynamic, interactive, and easier to maintain.

Conditional rendering determines **what** is displayed, while list rendering determines **how many** components are displayed.

---

# What is Conditional Rendering?

Conditional rendering means displaying different UI elements depending on a condition.

Instead of manually showing or hiding HTML elements, React decides what to render based on JavaScript expressions.

Example:

```text
If user is logged in
    Show Dashboard

Else
    Show Login Page
```

---

# Why Use Conditional Rendering?

Conditional rendering helps:

- Show or hide content.
- Display loading messages.
- Show error messages.
- Display different layouts for different users.
- Improve user experience.

---

# Using the if Statement

A normal JavaScript `if` statement can be used before returning JSX.

Example:

```jsx
function Welcome({ isLoggedIn }) {

    if (isLoggedIn) {

        return <h2>Welcome Back!</h2>;

    }

    return <h2>Please Login</h2>;

}
```

---

# Using the Ternary Operator

The ternary operator is commonly used for simple conditions.

Syntax:

```jsx
condition ? trueValue : falseValue
```

Example:

```jsx
function App() {

    const isLoggedIn = true;

    return (

        <h2>

            {isLoggedIn ? "Welcome!" : "Please Login"}

        </h2>

    );

}
```

---

# Using the Logical AND (`&&`) Operator

The `&&` operator renders content only if the condition is true.

Example:

```jsx
function App() {

    const isAdmin = true;

    return (

        <div>

            {isAdmin && <button>Delete User</button>}

        </div>

    );

}
```

If `isAdmin` is false, nothing is rendered.

---

# Rendering Lists

React can render multiple components using JavaScript arrays.

The most common method is `map()`.

Example:

```jsx
const fruits = [

    "Apple",

    "Orange",

    "Banana"

];

function App() {

    return (

        <ul>

            {fruits.map((fruit) => (

                <li>{fruit}</li>

            ))}

        </ul>

    );

}
```

Each array item becomes a list element.

---

# Rendering Components from Arrays

Instead of rendering plain text, entire components can be generated.

Example:

```jsx
function Card({ name }) {

    return <h3>{name}</h3>;

}

function App() {

    const users = [

        "Ahmed",

        "Sara",

        "Omar"

    ];

    return (

        <div>

            {users.map((user) => (

                <Card name={user} />

            ))}

        </div>

    );

}
```

---

# Using the `key` Prop

When rendering lists, React requires a unique `key` for each element.

Example:

```jsx
const users = [

    { id: 1, name: "Ahmed" },

    { id: 2, name: "Sara" }

];

users.map((user) => (

    <li key={user.id}>

        {user.name}

    </li>

));
```

Keys help React efficiently update the UI.

---

# Conditional Rendering with Lists

Conditions can also be used while rendering lists.

Example:

```jsx
const products = [

    { id: 1, available: true },

    { id: 2, available: false }

];

products.map((product) => (

    product.available &&

    <p key={product.id}>

        Product Available

    </p>

));
```

Only available products are displayed.

---

# Best Practices

- Use the ternary operator for simple conditions.
- Use `&&` when rendering a single element conditionally.
- Always provide a unique `key` when rendering lists.
- Keep conditional logic simple and readable.
- Avoid using array indexes as keys unless the list never changes.

---

# Summary

Conditional rendering and list rendering are essential React techniques for building dynamic and interactive user interfaces.

Main concepts covered:

```text
- Conditional Rendering
- if Statement
- Ternary Operator
- Logical AND (&&)
- Rendering Lists
- map()
- key Prop
- Rendering Multiple Components
```

These features allow React applications to display different content based on application state and efficiently render collections of data.

---

# Key Takeaways

- Conditional rendering displays UI based on conditions.
- The `if` statement, ternary operator, and `&&` are common conditional rendering techniques.
- Arrays are rendered using the `map()` method.
- Every rendered list item should have a unique `key` prop.
- Lists and conditional rendering work together to build flexible and responsive React interfaces.
