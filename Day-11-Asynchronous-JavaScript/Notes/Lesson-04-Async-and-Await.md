# Lesson 04: Async and Await

## Introduction

Async and Await were introduced in ES8 (ECMAScript 2017) to simplify working with Promises.

They allow asynchronous code to be written in a style that looks similar to synchronous code, making it easier to read, understand, and maintain.

Async/Await is built on top of Promises and does not replace them.

---

# Why Async and Await?

Before Async/Await, asynchronous code was commonly written using:

```javascript
.then()
.catch()
```

Example:

```javascript
fetchData()

.then(function(data) {

    console.log(data);

})

.catch(function(error) {

    console.log(error);

});
```

While this works well, large Promise chains can become difficult to read.

Async/Await provides a cleaner syntax.

---

# The async Keyword

The:

```javascript
async
```

keyword is used before a function declaration.

An async function automatically returns a Promise.

---

## Syntax

```javascript
async function functionName() {

}
```

---

## Example

```javascript
async function greet() {

    return "Hello";

}
```

Even though a string is returned, JavaScript automatically wraps it inside a Promise.

---

### Usage

```javascript
greet()

.then(function(message) {

    console.log(message);

});
```

Output:

```text
Hello
```

---

# The await Keyword

The:

```javascript
await
```

keyword pauses the execution of an async function until a Promise is resolved.

It can only be used inside an async function.

---

## Example

```javascript
function getData() {

    return Promise.resolve(
        "Data Loaded"
    );

}
```

---

### Using await

```javascript
async function displayData() {

    let result =
    await getData();

    console.log(result);

}

displayData();
```

Output:

```text
Data Loaded
```

---

# How await Works

When JavaScript encounters:

```javascript
await
```

it waits for the Promise to settle before continuing to the next line.

Example:

```javascript
async function test() {

    console.log("Start");

    await Promise.resolve();

    console.log("End");

}

test();
```

Output:

```text
Start
End
```

---

# Converting Promise Chains to Async/Await

## Promise Version

```javascript
fetchData()

.then(function(data) {

    return processData(data);

})

.then(function(result) {

    console.log(result);

})

.catch(function(error) {

    console.log(error);

});
```

---

## Async/Await Version

```javascript
async function loadData() {

    try {

        const data =
        await fetchData();

        const result =
        await processData(data);

        console.log(result);

    }

    catch(error) {

        console.log(error);

    }

}
```

The Async/Await version is easier to read and resembles synchronous code.

---

# Example with setTimeout

```javascript
function wait(seconds) {

    return new Promise(
        function(resolve) {

            setTimeout(
                resolve,
                seconds * 1000
            );

        }
    );

}
```

---

### Usage

```javascript
async function run() {

    console.log("Step 1");

    await wait(1);

    console.log("Step 2");

    await wait(1);

    console.log("Step 3");

}

run();
```

Output:

```text
Step 1
Step 2
Step 3
```

---

# Error Handling with try...catch

When using Async/Await, errors are handled using:

```javascript
try...catch
```

---

## Example

```javascript
function getUser() {

    return Promise.reject(
        "User Not Found"
    );

}
```

---

### Handling the Error

```javascript
async function loadUser() {

    try {

        const user =
        await getUser();

        console.log(user);

    }

    catch(error) {

        console.log(error);

    }

}

loadUser();
```

Output:

```text
User Not Found
```

---

# Multiple Await Operations

Example:

```javascript
function getName() {

    return Promise.resolve(
        "Ahmed"
    );

}

function getAge() {

    return Promise.resolve(
        22
    );

}
```

---

### Usage

```javascript
async function showData() {

    const name =
    await getName();

    const age =
    await getAge();

    console.log(
        `${name} - ${age}`
    );

}

showData();
```

Output:

```text
Ahmed - 22
```

---

# Async Function Return Value

Every async function returns a Promise.

Example:

```javascript
async function getNumber() {

    return 10;

}
```

Equivalent to:

```javascript
function getNumber() {

    return Promise.resolve(
        10
    );

}
```

---

# Real-World Example

## Simulating API Requests

```javascript
function fetchUser() {

    return new Promise(
        function(resolve) {

            setTimeout(
                function() {

                    resolve(
                        "Ahmed"
                    );

                },
                1000
            );

        }
    );

}
```

---

### Using Async/Await

```javascript
async function displayUser() {

    const user =
    await fetchUser();

    console.log(
        `Welcome ${user}`
    );

}

displayUser();
```

Output:

```text
Welcome Ahmed
```

---

# Async/Await vs Promises

| Feature | Promises | Async/Await |
|----------|----------|-------------|
| Readability | Good | Excellent |
| Syntax | Chain-based | Synchronous-like |
| Error Handling | catch() | try...catch |
| Complex Logic | Harder | Easier |
| Built on Promises | Yes | Yes |

---

# Common Mistakes

## Using await Outside Async Function

Wrong:

```javascript
const data =
await fetchData();
```

Output:

```text
SyntaxError
```

Correct:

```javascript
async function load() {

    const data =
    await fetchData();

}
```

---

## Forgetting Error Handling

Wrong:

```javascript
async function load() {

    const data =
    await fetchData();

}
```

Correct:

```javascript
async function load() {

    try {

        const data =
        await fetchData();

    }

    catch(error) {

        console.log(error);

    }

}
```

---

# Best Practices

- Use Async/Await for readable asynchronous code.
- Always wrap asynchronous operations in try...catch.
- Keep async functions focused on a single responsibility.
- Avoid unnecessary await statements.
- Use meaningful function names.
- Understand that Async/Await still relies on Promises internally.

---

# Advantages of Async/Await

- Cleaner syntax.
- Easier to read.
- Easier debugging.
- Better error handling.
- Reduces complex Promise chains.

---

# Summary

Async and Await provide a modern way to work with asynchronous JavaScript.

Main concepts:

```javascript
async
await
Promises
try...catch
Asynchronous Programming
```

They make asynchronous code look and behave more like synchronous code while still benefiting from the power of Promises.

---

# Key Takeaways

- `async` makes a function return a Promise.
- `await` pauses execution until a Promise is resolved.
- `await` can only be used inside async functions.
- Async/Await simplifies Promise-based code.
- Errors should be handled using try...catch.
- Async/Await improves readability and maintainability.
- It is one of the most commonly used features in modern JavaScript.
