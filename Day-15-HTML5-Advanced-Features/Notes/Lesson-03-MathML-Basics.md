# Lesson 03: MathML Basics

## Introduction

**MathML (Mathematical Markup Language)** is an XML-based markup language used to display mathematical expressions on web pages. It is part of the HTML5 specification and allows developers to write equations in a structured, machine-readable format.

MathML is especially useful in educational websites, scientific publications, engineering applications, and e-learning platforms.

---

# What is MathML?

MathML stands for:

```text
Mathematical Markup Language
```

It describes the structure and meaning of mathematical expressions using HTML-like tags.

Example:

```html
<math>

    <mi>x</mi>

    <mo>+</mo>

    <mn>5</mn>

</math>
```

This displays:

```text
x + 5
```

---

# The `<math>` Element

The `<math>` element is the root container for every MathML expression.

Example:

```html
<math>

    <mi>a</mi>

    <mo>=</mo>

    <mn>10</mn>

</math>
```

---

# The `<mrow>` Element

The `<mrow>` element groups multiple mathematical elements together.

Example:

```html
<math>

    <mrow>

        <mi>a</mi>

        <mo>+</mo>

        <mi>b</mi>

    </mrow>

</math>
```

Grouping expressions improves readability and is useful for complex equations.

---

# The `<mi>` Element

The `<mi>` element represents a mathematical identifier such as a variable.

Example:

```html
<math>

    <mi>x</mi>

</math>
```

Common identifiers:

- x
- y
- z
- a
- b
- π

---

# The `<mn>` Element

The `<mn>` element represents a number.

Example:

```html
<math>

    <mn>25</mn>

</math>
```

Another example:

```html
<math>

    <mn>3.14</mn>

</math>
```

---

# The `<mo>` Element

The `<mo>` element represents a mathematical operator.

Examples include:

- +
- −
- ×
- ÷
- =
- <
- >

Example:

```html
<math>

    <mi>x</mi>

    <mo>+</mo>

    <mn>5</mn>

</math>
```

---

# The `<msup>` Element

The `<msup>` element displays superscripts (powers).

Example:

```html
<math>

    <msup>

        <mi>x</mi>

        <mn>2</mn>

    </msup>

</math>
```

Output:

```text
x²
```

---

# Combining Elements

Example:

```html
<math>

    <mrow>

        <msup>

            <mi>x</mi>

            <mn>2</mn>

        </msup>

        <mo>+</mo>

        <mn>5</mn>

    </mrow>

</math>
```

Output:

```text
x² + 5
```

---

# Quadratic Expression Example

```html
<math>

    <mrow>

        <msup>

            <mi>x</mi>

            <mn>2</mn>

        </msup>

        <mo>+</mo>

        <mn>4</mn>

        <mi>x</mi>

        <mo>+</mo>

        <mn>4</mn>

    </mrow>

</math>
```

Represents:

```text
x² + 4x + 4
```

---

# Basic Equation Example

```html
<math>

    <mrow>

        <mi>a</mi>

        <mo>=</mo>

        <mi>b</mi>

        <mo>+</mo>

        <mi>c</mi>

    </mrow>

</math>
```

---

# Common MathML Elements

| Element | Purpose |
|---------|----------|
| `<math>` | Root MathML element |
| `<mrow>` | Groups expressions |
| `<mi>` | Mathematical identifier |
| `<mn>` | Number |
| `<mo>` | Mathematical operator |
| `<msup>` | Superscript (power) |

---

# Advantages of MathML

- Displays mathematical equations accurately.
- Supported by modern browsers.
- Accessible to screen readers.
- Searchable and machine-readable.
- Ideal for educational and scientific content.

---

# Best Practices

- Always wrap equations inside the `<math>` element.
- Use `<mrow>` to group related expressions.
- Use `<mi>` for variables.
- Use `<mn>` for numbers.
- Use `<mo>` for operators.
- Use `<msup>` for exponents instead of styling text manually.

---

# Summary

MathML is the standard markup language for representing mathematical expressions in HTML documents.

Main concepts covered:

```text
- MathML
- math
- mrow
- mi
- mn
- mo
- msup
- Mathematical Expressions
```

MathML enables developers to create structured, accessible, and standards-compliant mathematical content directly within web pages.

---

# Key Takeaways

- MathML is used to display mathematical notation in HTML.
- `<math>` is the root element for every MathML expression.
- `<mrow>` groups related mathematical elements.
- `<mi>` represents variables and identifiers.
- `<mn>` represents numeric values.
- `<mo>` represents mathematical operators.
- `<msup>` is used to display superscripts and exponents.
