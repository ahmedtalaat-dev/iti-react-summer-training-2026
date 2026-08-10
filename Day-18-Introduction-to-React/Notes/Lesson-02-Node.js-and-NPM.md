# Lesson 02: Node.js and npm

## Introduction

Before building React applications, developers need **Node.js** and **npm** installed on their computers. Although React runs in the browser, its development tools, build system, and package management rely on Node.js and npm.

These tools make it easy to create projects, install libraries, and manage dependencies.

---

# What is Node.js?

**Node.js** is an open-source JavaScript runtime built on Google's V8 JavaScript engine.

It allows JavaScript code to run **outside the browser**, making it possible to build server-side applications and use development tools for front-end frameworks like React.

---

# Why React Uses Node.js

React itself runs in the browser, but during development Node.js is used to:

- Create React projects
- Run the development server
- Install dependencies
- Build production-ready applications
- Execute build tools such as Vite

Without Node.js, React development tools cannot run.

---

# What is npm?

**npm (Node Package Manager)** is the default package manager that comes with Node.js.

It allows developers to:

- Install packages
- Update packages
- Remove packages
- Manage project dependencies

npm provides access to thousands of open-source JavaScript libraries.

---

# Installing Node.js

Download the latest **LTS (Long-Term Support)** version from the official website:

```text
https://nodejs.org
```

Installing Node.js automatically installs npm.

---

# Checking the Installation

Verify that Node.js is installed.

```bash
node -v
```

Example output:

```text
v22.x.x
```

Check the npm version.

```bash
npm -v
```

Example output:

```text
10.x.x
```

---

# Creating a Project

Initialize a new Node project.

```bash
npm init
```

Or skip the setup questions.

```bash
npm init -y
```

This creates a **package.json** file.

---

# package.json

The `package.json` file stores information about the project.

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "vite"
  }
}
```

It contains:

- Project name
- Version
- Scripts
- Dependencies
- Project metadata

---

# Installing Packages

Install a package:

```bash
npm install package-name
```

Example:

```bash
npm install react
```

Shortcut:

```bash
npm i react
```

---

# Installing Development Dependencies

Development-only packages can be installed using:

```bash
npm install --save-dev package-name
```

Example:

```bash
npm install --save-dev vite
```

Shortcut:

```bash
npm i -D vite
```

---

# Removing Packages

Remove an installed package.

```bash
npm uninstall package-name
```

Example:

```bash
npm uninstall react-router-dom
```

---

# Updating Packages

Update installed packages.

```bash
npm update
```

---

# npm Scripts

Scripts automate common tasks.

Example:

```json
"scripts": {

    "dev": "vite",

    "build": "vite build",

    "preview": "vite preview"

}
```

Run a script using:

```bash
npm run dev
```

---

# node_modules

When packages are installed, npm creates a **node_modules** folder.

This folder contains:

- Installed libraries
- Project dependencies
- Supporting files

Since it can become very large, it is usually **not committed** to Git repositories.

---

# package-lock.json

npm also creates a **package-lock.json** file.

Its purpose is to:

- Lock dependency versions
- Ensure consistent installations
- Improve installation speed

---

# Creating a React Project with Vite

One of the easiest ways to create a React application is with Vite.

```bash
npm create vite@latest
```

Then install the dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# Advantages of npm

- Easy package management
- Large ecosystem of libraries
- Automatic dependency installation
- Version management
- Script automation

---

# Best Practices

- Install the latest LTS version of Node.js.
- Commit `package.json` and `package-lock.json` to Git.
- Do not commit the `node_modules` folder.
- Keep project dependencies updated.
- Use npm scripts to automate repetitive tasks.

---

# Summary

Node.js provides the runtime environment required for modern JavaScript development, while npm manages project dependencies and development tools.

Main concepts covered:

```text
- Node.js
- npm
- package.json
- package-lock.json
- node_modules
- npm install
- npm uninstall
- npm scripts
- Vite
```

Together, Node.js and npm form the foundation of modern React development by simplifying project setup, dependency management, and development workflows.

---

# Key Takeaways

- Node.js allows JavaScript to run outside the browser.
- npm is the default package manager for Node.js.
- `package.json` stores project information and dependencies.
- `node_modules` contains installed packages.
- `package-lock.json` ensures consistent dependency versions.
- npm scripts automate development tasks.
- Vite is a fast tool for creating and running React projects.
