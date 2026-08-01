# Lesson 01: Introduction to TypeScript

## Introduction

TypeScript is an open-source programming language developed by Microsoft. It is a **superset of JavaScript**, which means every valid JavaScript program is also valid TypeScript.

TypeScript extends JavaScript by adding **static typing**, better tooling, and modern language features that help developers write more reliable and maintainable code.

Before running in a browser or Node.js, TypeScript code is compiled into standard JavaScript.

---

# What is TypeScript?

TypeScript is a strongly typed language built on top of JavaScript.

Instead of waiting until runtime to discover errors, TypeScript can detect many mistakes during development.

Example:

```typescript
let username: string = "Ahmed";

console.log(username);
```

---

# Why Use TypeScript?

TypeScript provides several advantages over plain JavaScript.

## Benefits

- Static type checking
- Better code completion (IntelliSense)
- Early error detection
- Easier debugging
- Improved code readability
- Better maintainability
- Excellent support for large-scale applications

---

# TypeScript vs JavaScript

| JavaScript | TypeScript |
|------------|------------|
| Dynamically typed | Statically typed |
| Errors found at runtime | Errors found during compilation |
| No compilation required | Compiles to JavaScript |
| Less suitable for large projects | Better for large applications |
| Limited IDE support | Excellent IDE support |

---

# How TypeScript Works

The TypeScript workflow consists of three steps:

1. Write code in a `.ts` file.
2. Compile the file using the TypeScript compiler.
3. Run the generated JavaScript file.

```text
TypeScript (.ts)
        │
        ▼
TypeScript Compiler (tsc)
        │
        ▼
JavaScript (.js)
        │
        ▼
Browser / Node.js
```

---

# Installing TypeScript

Install TypeScript globally using npm:

```bash
npm install -g typescript
```

Verify the installation:

```bash
tsc --version
```

---

# Creating Your First TypeScript File

Create a file named:

```text
app.ts
```

Example:

```typescript
let message: string = "Hello TypeScript";

console.log(message);
```

---

# Compiling TypeScript

Compile a TypeScript file using:

```bash
tsc app.ts
```

This generates:

```text
app.js
```

Run the JavaScript file with Node.js:

```bash
node app.js
```

---

# Watching for File Changes

Instead of compiling manually every time, use watch mode:

```bash
tsc --watch
```

The compiler automatically recompiles files whenever they change.

---

# What is tsconfig.json?

The `tsconfig.json` file stores TypeScript project configuration.

Create it using:

```bash
tsc --init
```

Common settings include:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "strict": true,
    "outDir": "./dist"
  }
}
```

---

# Static Typing

One of the biggest features of TypeScript is static typing.

Example:

```typescript
let age: number = 22;
```

Wrong assignment:

```typescript
age = "Twenty Two";
```

Compilation Error:

```text
Type 'string' is not assignable to type 'number'.
```

---

# JavaScript Compatibility

Since TypeScript is a superset of JavaScript, existing JavaScript code works without modification.

Example:

```javascript
console.log("Hello");
```

This is also valid TypeScript.

---

# Where TypeScript is Used

TypeScript is widely used in modern web development.

Popular frameworks include:

- Angular
- React
- Vue
- Next.js
- NestJS

It is also commonly used in enterprise applications because of its strong type system.

---

# Advantages of TypeScript

- Detects errors before execution.
- Improves developer productivity.
- Makes code easier to understand.
- Simplifies refactoring.
- Provides better IDE support.
- Scales well for large projects.
- Fully compatible with JavaScript.

---

# Disadvantages of TypeScript

- Requires a compilation step.
- Slight learning curve for beginners.
- Additional project configuration.
- Small projects may not benefit significantly from static typing.

---

# Best Practices

- Use explicit types whenever appropriate.
- Enable strict mode in `tsconfig.json`.
- Organize code into modules.
- Use meaningful variable and function names.
- Keep TypeScript updated to benefit from new features.

---

# Summary

TypeScript is a powerful extension of JavaScript that introduces static typing and modern development features.

Main concepts covered:

```text
- What is TypeScript
- TypeScript vs JavaScript
- Installation
- Compilation
- tsconfig.json
- Static Typing
- JavaScript Compatibility
```

TypeScript helps developers build safer, cleaner, and more maintainable applications while remaining fully compatible with JavaScript.

---

# Key Takeaways

- TypeScript is a superset of JavaScript.
- Every JavaScript program is valid TypeScript.
- TypeScript adds static typing.
- Code is compiled into JavaScript before execution.
- `tsc` is the TypeScript compiler.
- `tsconfig.json` manages project settings.
- TypeScript improves code quality and developer productivity.
