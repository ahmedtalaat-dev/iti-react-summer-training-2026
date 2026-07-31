# Lesson 03: Promise Chaining

## Introduction

Promise Chaining is a technique that allows multiple asynchronous operations to be executed in sequence using multiple:

```javascript
.then()
```

methods.

Instead of nesting callbacks inside each other, Promise Chaining creates cleaner, more readable, and easier-to-maintain code.

---

# What is Promise Chaining?

Promise Chaining occurs when a Promise returned from one:

```javascript
.then()
```

is passed to the next:

```javascript
.then()
```

in the chain.

Example:

```javascript
promise
.then(function(result) {

    return result;

})
.then(function(result) {

    console.log(result);

});
```

Each step receives the result from the previous step.

---

# Why Use Promise Chaining?

Without chaining, asynchronous code can become difficult to read.

Example:

```javascript
getUser()
.then(function(user) {

    getPosts(user.id)
    .then(function(posts) {

        getComments(posts[0].id)
        .then(function(comments) {

            console.log(comments);

        });

    });

});
```

This resembles Callback Hell.

Promise Chaining provides a cleaner solution.

---

# Basic Promise Chain

Example:

```javascript
Promise.resolve(5)

.then(function(number) {

    return number * 2;

})

.then(function(result) {

    return result + 10;

})

.then(function(result) {

    console.log(result);

});
```

Output:

```text
20
```

---

# How Chaining Works

Each:

```javascript
.then()
```

returns a new Promise.

The returned value automatically becomes available to the next:

```javascript
.then()
```

in the chain.

Example:

```javascript
Promise.resolve(10)

.then(function(value) {

    return value + 5;

})

.then(function(value) {

    return value * 2;

})

.then(function(value) {

    console.log(value);

});
```

Output:

```text
30
```

---

# Returning Values

Example:

```javascript
Promise.resolve("Ahmed")

.then(function(name) {

    return `Hello ${name}`;

})

.then(function(message) {

    console.log(message);

});
```

Output:

```text
Hello Ahmed
```

---

# Returning Another Promise

A:

```javascript
.then()
```

can return another Promise.

Example:

```javascript
Promise.resolve(10)

.then(function(number) {

    return new Promise(
        function(resolve) {

            resolve(
                number * 2
            );

        }
    );

})

.then(function(result) {

    console.log(result);

});
```

Output:

```text
20
```

The next step waits until the returned Promise is resolved.

---

# Practical Example

## User Login Workflow

```javascript
function loginUser() {

    return Promise.resolve(
        "Ahmed"
    );

}

function getProfile(name) {

    return Promise.resolve(
        `${name}'s Profile`
    );

}

function getPosts(profile) {

    return Promise.resolve(
        `${profile} Posts`
    );

}
```

---

## Chaining Operations

```javascript
loginUser()

.then(function(user) {

    return getProfile(user);

})

.then(function(profile) {

    return getPosts(profile);

})

.then(function(posts) {

    console.log(posts);

});
```

Output:

```text
Ahmed's Profile Posts
```

---

# Error Handling in Chains

Errors can occur anywhere in the chain.

Instead of handling errors at every step, use a single:

```javascript
catch()
```

at the end.

---

## Example

```javascript
Promise.resolve(10)

.then(function(value) {

    throw new Error(
        "Something went wrong"
    );

})

.then(function(value) {

    console.log(value);

})

.catch(function(error) {

    console.log(
        error.message
    );

});
```

Output:

```text
Something went wrong
```

---

# Error Propagation

When an error occurs:

```javascript
throw new Error(...)
```

JavaScript automatically skips the remaining:

```javascript
.then()
```

methods and jumps directly to:

```javascript
.catch()
```

---

## Example

```javascript
Promise.resolve("Start")

.then(function(result) {

    throw new Error(
        "Failed"
    );

})

.then(function(result) {

    console.log(
        "Never Runs"
    );

})

.catch(function(error) {

    console.log(
        error.message
    );

});
```

Output:

```text
Failed
```

---

# Using finally()

The:

```javascript
finally()
```

method executes regardless of success or failure.

Example:

```javascript
Promise.resolve("Done")

.then(function(result) {

    console.log(result);

})

.finally(function() {

    console.log(
        "Operation Finished"
    );

});
```

Output:

```text
Done
Operation Finished
```

---

# Chain with Delays

Example:

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

## Usage

```javascript
wait(1)

.then(function() {

    console.log("Step 1");

    return wait(1);

})

.then(function() {

    console.log("Step 2");

    return wait(1);

})

.then(function() {

    console.log("Step 3");

});
```

Output:

```text
Step 1
Step 2
Step 3
```

---

# Promise Chaining vs Nested Promises

## Nested Promises

```javascript
getUser()

.then(function(user) {

    getPosts(user.id)

    .then(function(posts) {

        console.log(posts);

    });

});
```

---

## Chained Promises

```javascript
getUser()

.then(function(user) {

    return getPosts(
        user.id
    );

})

.then(function(posts) {

    console.log(posts);

});
```

The chained version is cleaner and easier to maintain.

---

# Common Mistakes

## Forgetting Return

Wrong:

```javascript
Promise.resolve(5)

.then(function(number) {

    number * 2;

});
```

Result:

```text
undefined
```

Correct:

```javascript
Promise.resolve(5)

.then(function(number) {

    return number * 2;

});
```

---

## Missing catch()

Wrong:

```javascript
promise

.then(function(result) {

    console.log(result);

});
```

Always handle errors.

Correct:

```javascript
promise

.then(function(result) {

    console.log(result);

})

.catch(function(error) {

    console.log(error);

});
```

---

# Best Practices

- Always return values from `.then()` when needed.
- Use a single `.catch()` at the end of the chain.
- Avoid nested Promises when chaining is possible.
- Keep each `.then()` focused on one task.
- Use `finally()` for cleanup operations.
- Consider Async/Await for complex chains.

---

# Advantages of Promise Chaining

- Cleaner code.
- Better readability.
- Easier error handling.
- Avoids Callback Hell.
- Simplifies asynchronous workflows.

---

# Summary

Promise Chaining allows multiple asynchronous operations to execute sequentially using:

```javascript
.then()
```

Each step receives the result from the previous step, making asynchronous code more organized and maintainable.

Main concepts:

```javascript
Promise Chaining
then()
catch()
finally()
Return Values
Error Propagation
```

---

# Key Takeaways

- Promise Chaining connects multiple asynchronous operations.
- Each `.then()` receives the previous result.
- Returning values passes data to the next step.
- Returning a Promise pauses the chain until it resolves.
- Errors automatically propagate to `.catch()`.
- `finally()` executes regardless of success or failure.
- Promise Chaining is cleaner than nested callbacks and nested Promises.
