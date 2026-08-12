# Lesson 05: Handling Forms in React

## Introduction

Forms are an essential part of most web applications. They allow users to enter information such as login credentials, registration details, search queries, and contact messages.

In React, forms are typically managed using **controlled components**, where the form data is stored in the component's state. This approach keeps the user interface and application data synchronized.

---

# What are Controlled Components?

A controlled component is a form element whose value is controlled by React state.

Instead of the browser managing the input value, React stores and updates it.

Example:

```jsx
import { useState } from "react";

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

---

# Why Use Controlled Components?

Controlled components provide several benefits:

- Keep form data synchronized with state.
- Simplify validation.
- Make form behavior predictable.
- Easily reset form values.
- Enable dynamic form interactions.

---

# The `onChange` Event

The `onChange` event updates the state whenever the user changes an input's value.

Example:

```jsx
<input

    type="text"

    value={name}

    onChange={(e) => setName(e.target.value)}

/>
```

Here:

- `e.target.value` contains the current input value.
- `setName()` updates the component's state.

---

# Handling Multiple Inputs

A form often contains multiple fields.

Example:

```jsx
const [formData, setFormData] = useState({

    name: "",

    email: ""

});

function handleChange(e) {

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });

}
```

Input elements:

```jsx
<input

    name="name"

    value={formData.name}

    onChange={handleChange}

/>

<input

    name="email"

    value={formData.email}

    onChange={handleChange}

/>
```

Using a single handler simplifies form management.

---

# Handling Form Submission

React uses the `onSubmit` event to process form data.

Example:

```jsx
function handleSubmit(e) {

    e.preventDefault();

    console.log(formData);

}
```

Form:

```jsx
<form onSubmit={handleSubmit}>

    ...

</form>
```

`preventDefault()` prevents the browser from reloading the page.

---

# Working with Different Input Types

React supports all standard HTML form elements.

### Text Input

```jsx
<input type="text" />
```

### Email Input

```jsx
<input type="email" />
```

### Password Input

```jsx
<input type="password" />
```

### Checkbox

```jsx
<input

    type="checkbox"

    checked={isChecked}

    onChange={(e) => setIsChecked(e.target.checked)}

/>
```

### Select Menu

```jsx
<select

    value={country}

    onChange={(e) => setCountry(e.target.value)}

>

    <option>Egypt</option>

    <option>USA</option>

</select>
```

---

# Form Validation

Validation ensures users enter correct information before submitting the form.

Example:

```jsx
if (name.trim() === "") {

    alert("Name is required.");

}
```

Common validation rules include:

- Required fields
- Email format
- Password length
- Matching passwords

---

# Resetting the Form

State can be reset after successful submission.

Example:

```jsx
setFormData({

    name: "",

    email: ""

});
```

This clears the form fields.

---

# Controlled vs Uncontrolled Components

| Controlled Components | Uncontrolled Components |
|-----------------------|-------------------------|
| Managed by React state | Managed by the DOM |
| Use `value` | Use `defaultValue` |
| Easier validation | Simpler for basic forms |
| Recommended for most React apps | Used less frequently |

---

# Best Practices

- Use controlled components for form inputs.
- Keep form state organized.
- Use one handler for multiple fields when possible.
- Validate input before submission.
- Call `preventDefault()` when handling form submissions.
- Reset form state after successful submission if appropriate.

---

# Summary

Handling forms in React involves managing input values with state, responding to user input through events, and processing form data in a predictable way.

Main concepts covered:

```text
- Controlled Components
- useState
- onChange
- onSubmit
- preventDefault()
- Form Validation
- Multiple Inputs
- Form Reset
- Controlled vs Uncontrolled Components
```

By using controlled components and React state, developers can build reliable, interactive, and maintainable forms.

---

# Key Takeaways

- React forms are typically built using controlled components.
- Input values are stored in component state.
- The `onChange` event updates state as users type.
- The `onSubmit` event processes form data.
- `preventDefault()` prevents page refresh during submission.
- Controlled components simplify validation and improve application reliability.
