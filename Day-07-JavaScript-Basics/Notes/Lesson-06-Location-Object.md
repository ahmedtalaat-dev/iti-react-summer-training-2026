# Lesson 06: Location Object in JavaScript

## Introduction

The **Location Object** is part of the Browser Object Model (BOM).

It contains information about the current page URL and provides methods for navigating between web pages.

Using the Location Object, JavaScript can:

- Read the current URL.
- Redirect users to another page.
- Reload the current page.
- Access URL parameters.
- Navigate to different websites.

The Location Object is widely used in modern web applications for navigation and routing.

---

# What is the Location Object?

The `location` object represents the URL of the current webpage.

It is a property of the `window` object.

### Example

```javascript
console.log(window.location);
```

or simply:

```javascript
console.log(location);
```

Output:

```text
Location Object Information
```

---

# Example URL

Assume the current page URL is:

```text
https://www.example.com/products/item.html?id=10
```

We will use this URL to understand the Location properties.

---

# location.href

Returns the complete URL of the current page.

### Example

```javascript
console.log(location.href);
```

Output:

```text
https://www.example.com/products/item.html?id=10
```

---

# Changing location.href

You can redirect the user to another page.

### Example

```javascript
location.href =
"https://www.google.com";
```

Result:

```text
Redirects the user to Google
```

---

# location.protocol

Returns the protocol used by the page.

### Example

```javascript
console.log(
    location.protocol
);
```

Output:

```text
https:
```

---

# location.hostname

Returns the domain name.

### Example

```javascript
console.log(
    location.hostname
);
```

Output:

```text
www.example.com
```

---

# location.pathname

Returns the path of the current page.

### Example

```javascript
console.log(
    location.pathname
);
```

Output:

```text
/products/item.html
```

---

# location.search

Returns the query string.

### Example

```javascript
console.log(
    location.search
);
```

Output:

```text
?id=10
```

---

# location.hash

Returns the fragment identifier.

Assume URL:

```text
https://example.com/page.html#about
```

### Example

```javascript
console.log(
    location.hash
);
```

Output:

```text
#about
```

---

# location.port

Returns the port number.

### Example

URL:

```text
http://localhost:5500
```

Code:

```javascript
console.log(
    location.port
);
```

Output:

```text
5500
```

---

# location.reload()

Reloads the current webpage.

### Syntax

```javascript
location.reload();
```

### Example

```javascript
location.reload();
```

Result:

```text
Refreshes the page
```

---

# location.assign()

Loads a new document.

### Syntax

```javascript
location.assign(url);
```

### Example

```javascript
location.assign(
    "https://www.google.com"
);
```

Result:

```text
Redirects to Google
```

---

# location.replace()

Replaces the current page with a new page.

### Example

```javascript
location.replace(
    "https://www.google.com"
);
```

Result:

```text
Redirects to Google
```

---

## Difference Between assign() and replace()

### assign()

```javascript
location.assign(url);
```

- Adds the current page to browser history.
- User can click Back.

---

### replace()

```javascript
location.replace(url);
```

- Removes the current page from browser history.
- User cannot return using Back.

---

# Real-World Example

## Redirect After Login

```javascript
let isLoggedIn = true;

if (isLoggedIn) {

    location.href =
    "dashboard.html";

}
```

Result:

```text
User is redirected to dashboard page
```

---

# Real-World Example

## Refresh Page After Action

```javascript
function refreshPage() {

    location.reload();

}
```

Result:

```text
Current page reloads
```

---

# Reading URL Parameters

Suppose the URL is:

```text
https://example.com?id=15
```

### Example

```javascript
console.log(
    location.search
);
```

Output:

```text
?id=15
```

These parameters are commonly used for:

- Product IDs
- User IDs
- Search Filters
- Pagination

---

# Common Mistakes

## Infinite Reload Loop

Wrong:

```javascript
location.reload();
```

inside code that runs automatically every page load.

Result:

```text
Page reloads forever
```

---

## Using replace() Accidentally

Wrong:

```javascript
location.replace(
    "home.html"
);
```

when users need to return to the previous page.

Result:

```text
Back button will not work
```

---

# Best Practices

- Use `href` for simple redirects.
- Use `assign()` when browser history should be preserved.
- Use `replace()` when returning to the previous page should be prevented.
- Avoid unnecessary page reloads.
- Validate URLs before redirecting users.

---

# Summary

The Location Object provides information about the current URL and allows navigation between pages.

Important properties:

| Property | Description |
|----------|-------------|
| href | Full URL |
| protocol | URL protocol |
| hostname | Domain name |
| pathname | Page path |
| search | Query string |
| hash | URL fragment |
| port | Port number |

Important methods:

| Method | Description |
|----------|-------------|
| reload() | Reload page |
| assign() | Navigate to new page |
| replace() | Replace current page |

The Location Object is essential for navigation, redirection, and working with URLs in JavaScript applications.

---

# Key Takeaways

- The Location Object represents the current page URL.
- It is a property of the `window` object.
- `location.href` returns the complete URL.
- `location.reload()` refreshes the page.
- `location.assign()` redirects while keeping history.
- `location.replace()` redirects without keeping history.
- URL properties can be used to read paths, domains, parameters, and fragments.
- The Location Object is commonly used in navigation and routing systems.
