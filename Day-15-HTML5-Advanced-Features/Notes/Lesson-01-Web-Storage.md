# Lesson 01: Web Storage

## Introduction

Web Storage is an HTML5 feature that allows web applications to store data directly in the user's browser. Unlike cookies, Web Storage provides a larger storage capacity and does not send data to the server with every HTTP request.

There are two types of Web Storage:

- Local Storage
- Session Storage

---

# What is Web Storage?

Web Storage enables websites to save key-value pairs in the browser.

Common uses include:

- Saving user preferences
- Remembering theme settings
- Storing shopping cart items
- Saving form data
- Keeping users logged in (with proper authentication)

---

# Types of Web Storage

HTML5 provides two storage objects:

- `localStorage`
- `sessionStorage`

| Feature | localStorage | sessionStorage |
|---------|--------------|----------------|
| Data persists after closing browser | ✅ Yes | ❌ No |
| Shared across tabs | ✅ Yes | ❌ No |
| Storage limit | ~5–10 MB | ~5–10 MB |
| Data cleared | Manually | When the tab/window closes |

---

# Local Storage

`localStorage` stores data with no expiration date. The data remains available until it is explicitly removed.

Example:

```javascript
localStorage.setItem("username", "Ahmed");
```

---

# Getting Data

Retrieve stored data using `getItem()`.

```javascript
const username = localStorage.getItem("username");

console.log(username);
```

Output:

```text
Ahmed
```

---

# Updating Data

Simply call `setItem()` again with the same key.

```javascript
localStorage.setItem("username", "Ali");
```

The previous value is replaced.

---

# Removing Data

Remove a specific item.

```javascript
localStorage.removeItem("username");
```

---

# Clearing Storage

Delete all stored data.

```javascript
localStorage.clear();
```

---

# Checking if Data Exists

```javascript
if (localStorage.getItem("theme")) {

    console.log("Theme found");

}
```

---

# Storing Numbers

Values are stored as strings.

```javascript
localStorage.setItem("age", 22);
```

Retrieve and convert if needed:

```javascript
const age = Number(localStorage.getItem("age"));
```

---

# Storing Objects

Convert objects to JSON before storing.

```javascript
const user = {

    name: "Ahmed",
    age: 22

};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

Retrieve the object:

```javascript
const storedUser = JSON.parse(
    localStorage.getItem("user")
);

console.log(storedUser.name);
```

---

# Session Storage

`sessionStorage` works like `localStorage` but only lasts for the current browser session.

Store data:

```javascript
sessionStorage.setItem(
    "language",
    "English"
);
```

Retrieve data:

```javascript
const language = sessionStorage.getItem("language");
```

Remove data:

```javascript
sessionStorage.removeItem("language");
```

Clear storage:

```javascript
sessionStorage.clear();
```

---

# Common Methods

| Method | Description |
|---------|-------------|
| `setItem()` | Store data |
| `getItem()` | Retrieve data |
| `removeItem()` | Remove one item |
| `clear()` | Remove all items |
| `key()` | Get a key by index |

---

# Example: Save User Theme

```javascript
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

document.body.className = theme;
```

---

# Example: Remember User Name

```javascript
const name = prompt("Enter your name");

localStorage.setItem("username", name);

alert(
    `Welcome back, ${localStorage.getItem("username")}`
);
```

---

# When to Use Local Storage

Use `localStorage` for:

- User preferences
- Theme selection
- Language settings
- Persistent application data

---

# When to Use Session Storage

Use `sessionStorage` for:

- Temporary form data
- Current session information
- Multi-step forms
- Data needed only while the tab is open

---

# Limitations

- Stores only strings.
- Not suitable for sensitive information.
- Limited storage capacity.
- Data is accessible through JavaScript running on the same origin.

---

# Best Practices

- Store only necessary data.
- Convert objects using `JSON.stringify()`.
- Parse stored objects with `JSON.parse()`.
- Avoid storing passwords or sensitive information.
- Remove outdated data when it is no longer needed.
- Use meaningful keys for stored values.

---

# Summary

Web Storage provides a simple way to store data in the browser without relying on cookies.

Main concepts covered:

```text
- Web Storage
- localStorage
- sessionStorage
- setItem()
- getItem()
- removeItem()
- clear()
- JSON.stringify()
- JSON.parse()
```

Web Storage is widely used in modern web applications to improve user experience by preserving data across sessions or within a single browser tab.

---

# Key Takeaways

- Web Storage stores data as key-value pairs.
- `localStorage` persists until manually cleared.
- `sessionStorage` lasts only for the current browser session.
- Objects must be converted to JSON before storage.
- Use `JSON.parse()` to retrieve stored objects.
- Never store sensitive information such as passwords in Web Storage.
