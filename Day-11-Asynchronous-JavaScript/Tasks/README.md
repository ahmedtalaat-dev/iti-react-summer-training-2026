# Day 11 Tasks - Asynchronous JavaScript

## Overview

This folder contains the practical assignments completed during **Day 11 - Asynchronous JavaScript**.

The tasks focus on using modern asynchronous JavaScript techniques including Fetch API, AJAX requests, Promises, Async/Await, Promise Chaining, and ES.Next features such as Proxy.

---

## Folder Structure

```text
Tasks
│
├── README.md
│
└── Output
    │
    ├── task1and2.html
    └── task3.html
    └── task4.html
    └── task5.html
```

---

# Task 01 - Fetch Users and Display Details

## Objectives

Practice making AJAX requests using the Fetch API.

### Requirements

- Create a function that uses `fetch()` to retrieve users from the provided API.
- Display the retrieved users inside a `<select>` dropdown list.
- Create a **Show Image** button beside the dropdown.
- Keep the button disabled initially.
- After the users are loaded successfully:
  - Populate the dropdown.
  - Enable the button.
- When the button is clicked:
  - Display the selected user's details.
  - Display the selected user's image (or related information if provided by the API).

### Concepts Practiced

- Fetch API
- AJAX Requests
- DOM Manipulation
- Dynamic Dropdown Lists
- Button State Management

---

# Task 02 - Async/Await Version

## Objectives

Convert the previous Fetch implementation to Async/Await syntax.

### Requirements

- Rewrite the user retrieval logic using:
  - `async`
  - `await`
- Handle errors using:
  - `try`
  - `catch`
- Populate the dropdown after successful retrieval.
- Enable the Show Image button after data loading.

### Concepts Practiced

- Async Functions
- Await Keyword
- Error Handling
- Cleaner Asynchronous Code

---

# Task 03 - Add New Post Using Fetch API

## Objectives

Practice sending data to a server using HTTP POST requests.

### API Endpoint

```text
https://jsonplaceholder.typicode.com/posts
```

### Requirements

Send the following object:

```javascript
{
    title: "foo",
    body: "bar",
    userId: 1
}
```

### Conditions

- Use `fetch()`.
- Use HTTP `POST` method.
- Convert data to JSON format.
- Handle the response correctly.

### Expected Response

```javascript
{
    id: 101,
    title: "foo",
    body: "bar",
    userId: 1
}
```

### Concepts Practiced

- HTTP POST Requests
- JSON Data
- Fetch API
- API Communication

---

# Task 04 - Promise Chaining Scenario

## Objectives

Practice sequencing asynchronous operations using Promises.

### Requirements

Create a web page that performs the following actions in order:

### Step 1

Display a welcome message after:

```text
3 seconds
```

### Step 2

After the previous Promise finishes:

```text
Display the user image
```

### Step 3

After displaying the image:

```text
Display a thank you message after 3 seconds
```

### Step 4

Finally:

```text
Redirect the user to another page
```

### Concepts Practiced

- Promises
- Promise Chaining
- Delayed Execution
- Sequential Asynchronous Operations
- Page Redirection

---

# Task 05 - ES.Next Proxy

## Objectives

Research and implement a practical example using JavaScript Proxy.

### Requirements

- Learn what a Proxy object is.
- Create a demo showing how Proxy intercepts operations on an object.
- Demonstrate at least one of the following:
  - Property Access
  - Property Modification
  - Validation
  - Logging

### Example Concepts

```javascript
get()
set()
has()
deleteProperty()
```

### Concepts Practiced

- ES.Next Features
- Proxy Objects
- Object Interception
- Data Validation

---

## Skills Practiced

Throughout these assignments, the following concepts were applied:

- Fetch API
- AJAX
- Async/Await
- Promises
- Promise Chaining
- Error Handling
- JSON
- HTTP Requests
- DOM Manipulation
- API Integration
- ES.Next Proxy
- JavaScript ES6+

---

## Output

All assignment solutions are stored inside:

```text
Tasks/Output
```

The output files contain the implementation and testing code for each assignment.
