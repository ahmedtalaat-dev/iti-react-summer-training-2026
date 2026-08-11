# Lesson 04: Props in React

## Introduction

**Props** (short for **Properties**) are used to pass data from one React component to another. They allow components to become **dynamic** and **reusable** by receiving different values instead of using hardcoded data.

Props are passed from a **parent component** to a **child component** and are **read-only**, meaning the child component cannot modify them.

---

# What are Props?

Props are arguments passed to React components.

They allow one component to send information to another.

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

---

# Why Use Props?

Props provide several benefits:

- Pass data between components.
- Make components reusable.
- Avoid code duplication.
- Customize component behavior.
- Build dynamic user interfaces.

---

# Passing Props

Props are passed as attributes when using a component.

Example:

```jsx
function App() {

    return (

        <User

            name="Ahmed"

            age={22}

        />

    );

}
```

The `User` component receives both `name` and `age`.

---

# Receiving Props

A component receives props as a parameter.

Example:

```jsx
function User(props) {

    return (

        <div>

            <h2>{props.name}</h2>

            <p>{props.age}</p>

        </div>

    );

}
```

---

# Destructuring Props

Instead of using `props.property`, props can be destructured.

Example:

```jsx
function User({ name, age }) {

    return (

        <div>

            <h2>{name}</h2>

            <p>{age}</p>

        </div>

    );

}
```

This makes the code cleaner and easier to read.

---

# Passing Different Data

The same component can be reused with different props.

Example:

```jsx
<User name="Ahmed" age={22} />

<User name="Sara" age={20} />

<User name="Omar" age={24} />
```

Each component displays different information while using the same code.

---

# Passing Numbers and Expressions

Props are not limited to strings.

Example:

```jsx
<Product

    name="Laptop"

    price={15000}

/>
```

JavaScript expressions can also be passed.

```jsx
<Product

    price={100 * 2}

/>
```

---

# Parent and Child Components

Props always flow from the parent component to the child component.

Example:

```text
App (Parent)

│

└── User (Child)
```

The parent provides data, and the child displays it.

---

# Props are Read-Only

Props should never be modified inside a component.

Incorrect:

```jsx
props.name = "Ali";
```

Instead, the parent component should pass a new value if needed.

---

# Props vs State

| Props | State |
|-------|-------|
| Passed from parent | Managed inside the component |
| Read-only | Can be updated |
| Used for communication | Used for dynamic data |
| Received as parameters | Managed with `useState` |

---

# Combining Props and State

Props and state are often used together.

Example:

```jsx
function Welcome({ name }) {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h2>Hello, {name}</h2>

            <button
                onClick={() => setCount(count + 1)}>
                {count}
            </button>

        </div>

    );

}
```

The component receives the user's name through props and manages the counter using state.

---

# Best Practices

- Use props to pass data between components.
- Treat props as read-only.
- Use meaningful prop names.
- Destructure props when appropriate.
- Keep components reusable by avoiding hardcoded values.
- Use state only for data that changes within a component.

---

# Summary

Props allow React components to receive data from their parent components, making applications more flexible and reusable.

Main concepts covered:

```text
- Props
- Parent Component
- Child Component
- Passing Props
- Receiving Props
- Destructuring Props
- Read-Only Data
- Props vs State
```

Props are essential for component communication and play a key role in building modular, reusable React applications.

---

# Key Takeaways

- Props are used to pass data from parent to child components.
- Components receive props as function parameters.
- Props are read-only and should not be modified.
- Destructuring props improves code readability.
- Props make components reusable and dynamic.
- State manages changing data, while props transfer data between components.
