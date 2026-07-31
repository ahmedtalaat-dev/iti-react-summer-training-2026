# Lesson 02: Promises

## Introduction

Promises were introduced in ES6 to provide a cleaner way of handling asynchronous operations and to solve many of the problems caused by Callback Hell.

A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

Promises make asynchronous code more readable, maintainable, and easier to manage.

---

# What is a Promise?

A Promise is a JavaScript object that represents a future value.

The value may be:

- Successfully returned.
- Rejected because of an error.

Think of a Promise as a guarantee that a result will be available later.

---

# Why Use Promises?

Before Promises, asynchronous operations were commonly handled using nested callbacks.

Example:

```javascript
getUser(function(user) {

    getPosts(user.id, function(posts) {

        getComments(posts[0].id, function(comments) {

            console.log(comments);

        });

    });

});
```

This leads to Callback Hell.

Promises provide a cleaner solution.

---

# Promise States

A Promise has three possible states.

---

## 1. Pending

The initial state.

The operation is still running.

```text
Pending
```

---

## 2. Fulfilled

The operation completed successfully.

```text
Fulfilled
```

---

## 3. Rejected

The operation failed.

```text
Rejected
```

---

## Promise Lifecycle

```text
Pending
   |
   +----> Fulfilled
   |
   +----> Rejected
```

Once fulfilled or rejected, the state cannot change again.

---

# Creating a Promise

### Syntax

```javascript
const promise =
new Promise(
    function(
        resolve,
        reject
    ) {

    }
);
```

Parameters:

- resolve → called when the operation succeeds.
- reject → called when the operation fails.

---

# Basic Promise Example

```javascript
const promise =
new Promise(
    function(
        resolve,
        reject
    ) {

        resolve(
            "Success"
        );

    }
);
```

The Promise immediately becomes fulfilled.

---

# Consuming a Promise

Use:

```javascript
then()
```

to handle successful results.

Example:

```javascript
promise.then(
    function(result) {

        console.log(result);

    }
);
```

Output:

```text
Success
```

---

# Promise Rejection

Example:

```javascript
const promise =
new Promise(
    function(
        resolve,
        reject
    ) {

        reject(
            "Something went wrong"
        );

    }
);
```

---

# Handling Errors

Use:

```javascript
catch()
```

Example:

```javascript
promise.catch(
    function(error) {

        console.log(error);

    }
);
```

Output:

```text
Something went wrong
```

---

# Simulating an Asynchronous Operation

Example:

```javascript
const fetchData =
new Promise(
    function(
        resolve,
        reject
    ) {

        setTimeout(
            function() {

                resolve(
                    "Data Loaded"
                );

            },
            2000
        );

    }
);
```

---

## Handling the Result

```javascript
fetchData.then(
    function(data) {

        console.log(data);

    }
);
```

Output after 2 seconds:

```text
Data Loaded
```

---

# Using then()

The:

```javascript
then()
```

method executes when the Promise is fulfilled.

Example:

```javascript
promise.then(
    function(result) {

        console.log(result);

    }
);
```

---

# Using catch()

The:

```javascript
catch()
```

method executes when the Promise is rejected.

Example:

```javascript
promise.catch(
    function(error) {

        console.log(error);

    }
);
```

---

# Using finally()

The:

```javascript
finally()
```

method runs regardless of success or failure.

Example:

```javascript
promise
.then(function() {

    console.log("Success");

})
.catch(function() {

    console.log("Error");

})
.finally(function() {

    console.log(
        "Finished"
    );

});
```

Output:

```text
Success
Finished
```

---

# Practical Example

```javascript
function loginUser() {

    return new Promise(
        function(
            resolve,
            reject
        ) {

            let success = true;

            if (success) {

                resolve(
                    "Login Successful"
                );

            } else {

                reject(
                    "Login Failed"
                );

            }

        }
    );

}
```

---

## Usage

```javascript
loginUser()
.then(function(message) {

    console.log(message);

})
.catch(function(error) {

    console.log(error);

});
```

Output:

```text
Login Successful
```

---

# Promise vs Callback

| Feature | Callback | Promise |
|----------|----------|----------|
| Readability | Lower | Higher |
| Error Handling | Difficult | Easier |
| Callback Hell | Possible | Reduced |
| Chaining | Difficult | Easy |
| Maintainability | Lower | Higher |

---

# Returning Values from Promises

Example:

```javascript
const promise =
new Promise(
    function(resolve) {

        resolve(10);

    }
);

promise.then(
    function(number) {

        console.log(
            number * 2
        );

    }
);
```

Output:

```text
20
```

---

# Promise Example with Data Validation

```javascript
function checkAge(age) {

    return new Promise(
        function(
            resolve,
            reject
        ) {

            if (age >= 18) {

                resolve(
                    "Access Granted"
                );

            } else {

                reject(
                    "Access Denied"
                );

            }

        }
    );

}
```

---

### Usage

```javascript
checkAge(20)
.then(function(message) {

    console.log(message);

})
.catch(function(error) {

    console.log(error);

});
```

Output:

```text
Access Granted
```

---

# Common Mistakes

## Forgetting catch()

Wrong:

```javascript
promise.then(
    function(result) {

        console.log(result);

    }
);
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

## Calling Both resolve() and reject()

Wrong:

```javascript
resolve("Success");

reject("Error");
```

A Promise can settle only once.

---

# Best Practices

- Always handle errors with `catch()`.
- Use `finally()` for cleanup code.
- Keep Promise logic simple.
- Return Promises from asynchronous functions.
- Avoid unnecessary nesting.
- Use Async/Await for more readable code when appropriate.

---

# Advantages of Promises

- Cleaner asynchronous code.
- Better error handling.
- Reduced Callback Hell.
- Easy chaining of operations.
- Improved readability.

---

# Disadvantages of Promises

- Slightly more complex than simple callbacks.
- Can become difficult if chains are very large.
- Requires understanding asynchronous behavior.

---

# Summary

Promises provide a modern way to handle asynchronous operations.

Main concepts:

```javascript
Promise
Pending
Fulfilled
Rejected
resolve()
reject()
then()
catch()
finally()
```

Promises help organize asynchronous code and make it easier to read and maintain.

---

# Key Takeaways

- A Promise represents a future result.
- Promises have three states: Pending, Fulfilled, and Rejected.
- `resolve()` completes a Promise successfully.
- `reject()` indicates failure.
- `then()` handles success.
- `catch()` handles errors.
- `finally()` runs regardless of the outcome.
- Promises are a cleaner alternative to deeply nested callbacks.
