# Lesson 01: JSX Basics

## Introduction

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It is the standard way to describe the user interface in React applications.

Although JSX looks like HTML, it is actually converted into JavaScript by tools such as **Babel** before the code runs in the browser.

---

# What is JSX?

JSX combines the power of JavaScript with the readability of HTML.

Example:

```jsx
const element = <h1>Hello, React!</h1>;
```

This is transformed into JavaScript behind the scenes.

---

# Why Use JSX?

JSX offers several advantages:

- Makes UI code easier to read.
- Combines HTML and JavaScript in one place.
- Supports JavaScript expressions.
- Improves developer productivity.
- Works seamlessly with React components.

---

# JSX vs HTML

JSX is very similar to HTML but has a few important differences.

| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| Inline CSS is a string | Inline CSS is a JavaScript object |
| Attributes are lowercase | Most attributes use camelCase |

Example:

```jsx
<div className="container">

    Welcome

</div>
```

---

# Embedding JavaScript Expressions

JavaScript expressions can be placed inside JSX using **curly braces `{}`**.

Example:

```jsx
const name = "Ahmed";

function App() {

    return <h1>Hello, {name}</h1>;

}
```

Output:

```text
Hello, Ahmed
```

---

# JSX with Expressions

Example:

```jsx
const price = 100;

function App() {

    return <p>Total: {price * 2}</p>;

}
```

Output:

```text
Total: 200
```

---

# JSX Must Return One Parent Element

Every JSX expression must have a single parent element.

Correct:

```jsx
return (

    <div>

        <h1>Title</h1>

        <p>Description</p>

    </div>

);
```

Alternatively, use a React Fragment:

```jsx
return (

    <>

        <h1>Title</h1>

        <p>Description</p>

    </>

);
```

---

# Attributes in JSX

Attributes are written similarly to HTML.

Example:

```jsx
<img
    src="logo.png"
    alt="Logo" />
```

Some attribute names differ from HTML:

- `class` → `className`
- `for` → `htmlFor`

---

# Inline Styling

Inline styles use JavaScript objects.

Example:

```jsx
<h1
    style={{
        color: "blue",
        fontSize: "32px"
    }}>
    Welcome
</h1>
```

Property names use **camelCase**.

---

# Comments in JSX

Comments are written inside curly braces.

Example:

```jsx
function App() {

    return (

        <div>

            {/* Welcome Message */}

            <h1>Hello</h1>

        </div>

    );

}
```

---

# Rendering Lists

JavaScript methods can be used inside JSX.

Example:

```jsx
const fruits = ["Apple", "Orange", "Banana"];

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

---

# Conditional Rendering

JSX supports conditional expressions.

Example:

```jsx
const isLoggedIn = true;

function App() {

    return (

        <h2>

            {isLoggedIn ? "Welcome!" : "Please Login"}

        </h2>

    );

}
```

---

# JSX Rules

When writing JSX:

- Return one parent element.
- Close all tags.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- Write JavaScript inside `{}`.
- Use camelCase for event and style properties.

---

# Best Practices

- Keep JSX clean and readable.
- Avoid complex logic directly inside JSX.
- Use meaningful component names.
- Extract repeated UI into reusable components.
- Use React Fragments when no wrapper element is needed.

---

# Summary

JSX is a syntax extension that makes it easier to build user interfaces in React by combining HTML-like syntax with JavaScript.

Main concepts covered:

```text
- JSX
- JavaScript Expressions
- JSX Rules
- Attributes
- Inline Styles
- Comments
- Lists
- Conditional Rendering
- React Fragments
```

JSX improves code readability and is a core part of modern React development.

---

# Key Takeaways

- JSX allows writing HTML-like syntax inside JavaScript.
- Babel converts JSX into regular JavaScript.
- JavaScript expressions are embedded using `{}`.
- JSX must return a single parent element.
- `className` and `htmlFor` replace `class` and `for`.
- Inline styles use JavaScript objects with camelCase property names.
- JSX supports lists and conditional rendering for dynamic user interfaces.
