# Lesson 01: Closures

## Introduction

A **Closure** is one of the most important concepts in JavaScript.

A closure occurs when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

Closures are commonly used for:

- Data privacy
- Function factories
- Maintaining state
- Event handlers
- Callbacks

Understanding closures helps developers write more powerful and efficient JavaScript code.

---

# What is a Closure?

A closure is created when:

1. A function is defined inside another function.
2. The inner function accesses variables from the outer function.
3. The inner function continues to remember those variables after the outer function finishes execution.

---

## Basic Example

```javascript
function outer() {

    let message = "Hello";

    function inner() {

        console.log(message);

    }

    return inner;

}

let myFunction = outer();

myFunction();
```

Output:

```text
Hello
```

---

# How Closures Work

When:

```javascript
outer()
```

finishes execution, you might expect the variable:

```javascript
message
```

to be destroyed.

However, because:

```javascript
inner()
```

still references it, JavaScript keeps it in memory.

This preserved relationship is called a **Closure**.

---

# Closure Scope Chain

Closures have access to:

1. Their own scope.
2. Parent function scope.
3. Global scope.

Example:

```javascript
let globalVar = "Global";

function outer() {

    let outerVar = "Outer";

    function inner() {

        let innerVar = "Inner";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);

    }

    inner();

}

outer();
```

Output:

```text
Inner
Outer
Global
```

---

# Returning Functions

Closures are most commonly seen when functions return other functions.

Example:

```javascript
function greet(name) {

    return function () {

        console.log(
            "Hello " + name
        );

    };

}

let sayHello =
greet("Ahmed");

sayHello();
```

Output:

```text
Hello Ahmed
```

The returned function remembers the value of:

```javascript
name
```

even after:

```javascript
greet()
```

has completed execution.

---

# Maintaining State with Closures

Closures allow functions to keep data between calls.

Example:

```javascript
function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

let increment =
counter();

increment();
increment();
increment();
```

Output:

```text
1
2
3
```

The variable:

```javascript
count
```

remains available because of the closure.

---

# Data Privacy

Closures can create private variables.

Example:

```javascript
function createUser() {

    let password =
    "123456";

    return {

        getPassword() {

            return password;

        }

    };

}

let user =
createUser();

console.log(
    user.getPassword()
);
```

Output:

```text
123456
```

Direct access is not possible:

```javascript
console.log(
    user.password
);
```

Output:

```text
undefined
```

---

# Function Factory Example

Closures can generate customized functions.

Example:

```javascript
function multiplyBy(number) {

    return function (value) {

        return value * number;

    };

}

let double =
multiplyBy(2);

let triple =
multiplyBy(3);

console.log(
    double(5)
);

console.log(
    triple(5)
);
```

Output:

```text
10
15
```

---

# Closures in Event Handlers

Closures are often used with events.

Example:

```javascript
function setupButton() {

    let clicks = 0;

    document
    .getElementById("btn")
    .onclick =
    function () {

        clicks++;

        console.log(
            clicks
        );

    };

}
```

Each click updates the stored value.

---

# Common Closure Problem

Consider:

```javascript
for (
    var i = 1;
    i <= 3;
    i++
) {

    setTimeout(
        function () {

            console.log(i);

        },
        1000
    );

}
```

Output:

```text
4
4
4
```

Why?

Because all functions share the same variable:

```javascript
i
```

and the loop finishes before the timeout executes.

---

# Solving the Problem with let

```javascript
for (
    let i = 1;
    i <= 3;
    i++
) {

    setTimeout(
        function () {

            console.log(i);

        },
        1000
    );

}
```

Output:

```text
1
2
3
```

Each iteration gets its own block-scoped variable.

---

# Solving with a Closure

```javascript
for (
    var i = 1;
    i <= 3;
    i++
) {

    (function (currentValue) {

        setTimeout(
            function () {

                console.log(
                    currentValue
                );

            },
            1000
        );

    })(i);

}
```

Output:

```text
1
2
3
```

---

# Real-World Use Cases

## Counters

```javascript
function createCounter() {

    let count = 0;

    return function () {

        return ++count;

    };

}
```

---

## User Settings

```javascript
function createSettings() {

    let theme =
    "dark";

    return {

        getTheme() {

            return theme;

        }

    };

}
```

---

## Shopping Cart

```javascript
function cart() {

    let items = [];

    return {

        addItem(item) {

            items.push(item);

        },

        getItems() {

            return items;

        }

    };

}
```

---

# Advantages of Closures

- Preserve data between function calls.
- Create private variables.
- Improve code organization.
- Support function factories.
- Useful in asynchronous programming.
- Commonly used in modern JavaScript frameworks.

---

# Disadvantages of Closures

- Can increase memory usage.
- Variables remain in memory longer.
- Overusing closures may make debugging harder.
- Can lead to memory leaks if not managed properly.

---

# Best Practices

- Use closures when state preservation is needed.
- Avoid storing large unnecessary objects inside closures.
- Prefer `let` and `const` over `var`.
- Use meaningful variable names.
- Keep closure logic simple and readable.

---

# Summary

A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

Key concepts:

```javascript
Outer Function
Inner Function
Lexical Scope
State Preservation
Data Privacy
Function Factories
```

Closures are one of the most powerful features in JavaScript and are widely used in modern web development.

---

# Key Takeaways

- Closures allow functions to remember outer variables.
- Inner functions can access outer function variables.
- Closures help preserve state between function calls.
- They are useful for counters, private variables, and event handlers.
- Closures are frequently used in real-world JavaScript applications.
- Understanding closures is essential for mastering JavaScript.
