# Lesson 04: Classes and Modules

## Introduction

TypeScript fully supports **Object-Oriented Programming (OOP)** by extending JavaScript classes with features like access modifiers, readonly properties, parameter properties, and strong typing.

TypeScript also supports **Modules**, allowing developers to split applications into multiple files, making projects easier to organize, maintain, and scale.

---

# Classes

A class is a blueprint for creating objects.

It defines the properties and methods that every object created from the class will have.

## Syntax

```typescript
class ClassName {

    // Properties

    // Methods

}
```

---

# Creating a Class

Example:

```typescript
class Person {

    name: string;

    age: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

    introduce(): void {

        console.log(
            `My name is ${this.name} and I am ${this.age} years old.`
        );

    }

}
```

---

# Creating an Object

```typescript
const person = new Person("Ahmed", 22);

person.introduce();
```

Output:

```text
My name is Ahmed and I am 22 years old.
```

---

# Constructors

A constructor is a special method that is called automatically when an object is created.

Example:

```typescript
class Car {

    brand: string;

    constructor(brand: string) {

        this.brand = brand;

    }

}
```

---

# Access Modifiers

TypeScript provides three access modifiers.

## Public

Accessible from anywhere.

```typescript
class Student {

    public name: string;

    constructor(name: string) {

        this.name = name;

    }

}
```

---

## Private

Accessible only inside the class.

```typescript
class BankAccount {

    private balance: number = 1000;

}
```

Trying to access `balance` outside the class results in an error.

---

## Protected

Accessible inside the class and its subclasses.

```typescript
class Animal {

    protected name: string;

    constructor(name: string) {

        this.name = name;

    }

}
```

---

# Parameter Properties

TypeScript allows properties to be declared directly in the constructor.

Instead of:

```typescript
class User {

    name: string;

    constructor(name: string) {

        this.name = name;

    }

}
```

You can write:

```typescript
class User {

    constructor(public name: string) {}

}
```

---

# Readonly Properties

Readonly properties cannot be changed after initialization.

Example:

```typescript
class Employee {

    readonly id: number;

    constructor(id: number) {

        this.id = id;

    }

}
```

Attempting to change `id` later causes a compilation error.

---

# Static Members

Static members belong to the class itself rather than to individual objects.

Example:

```typescript
class MathHelper {

    static pi = 3.14;

    static square(number: number): number {

        return number * number;

    }

}
```

Usage:

```typescript
console.log(MathHelper.pi);

console.log(MathHelper.square(5));
```

Output:

```text
3.14
25
```

---

# Inheritance

Classes can inherit properties and methods from other classes using `extends`.

Example:

```typescript
class Person {

    constructor(public name: string) {}

}

class Student extends Person {

    constructor(
        name: string,
        public grade: number
    ) {

        super(name);

    }

}
```

---

# Method Overriding

A subclass can override methods inherited from a parent class.

Example:

```typescript
class Animal {

    speak(): void {

        console.log("Animal Sound");

    }

}

class Dog extends Animal {

    speak(): void {

        console.log("Bark");

    }

}
```

---

# Getters and Setters

TypeScript supports getter and setter methods.

Example:

```typescript
class Product {

    private _price = 0;

    get price(): number {

        return this._price;

    }

    set price(value: number) {

        this._price = value;

    }

}
```

---

# What are Modules?

Modules allow code to be divided into multiple files.

Each file can export functionality and import it where needed.

Benefits include:

- Better organization
- Reusable code
- Easier maintenance
- Improved scalability

---

# Exporting

Use the `export` keyword to make code available outside the file.

Example:

```typescript
export class Person {

    constructor(public name: string) {}

}
```

You can also export variables and functions.

```typescript
export const appName = "TypeScript App";
```

---

# Importing

Use the `import` keyword to access exported members.

Example:

```typescript
import { Person } from "./Person";

const user = new Person("Ahmed");
```

---

# Default Export

A file can have one default export.

Example:

```typescript
export default class Student {

}
```

Import:

```typescript
import Student from "./Student";
```

---

# Named Exports

A file may contain multiple named exports.

Example:

```typescript
export function add() {}

export function subtract() {}
```

Import:

```typescript
import {
    add,
    subtract
} from "./math";
```

---

# Module Structure Example

```text
src
│
├── Person.ts
├── Student.ts
├── math.ts
└── app.ts
```

---

# Best Practices

- Keep classes focused on a single responsibility.
- Use access modifiers to protect data.
- Prefer `private` for internal properties.
- Use `readonly` for values that should never change.
- Split large projects into modules.
- Export only what other files need.
- Use meaningful class and module names.

---

# Summary

TypeScript classes provide powerful object-oriented programming features, while modules help organize applications into reusable files.

Main concepts covered:

```text
- Classes
- Constructors
- Access Modifiers
- Parameter Properties
- Readonly Properties
- Static Members
- Inheritance
- Method Overriding
- Getters and Setters
- Modules
- Export
- Import
- Default Export
- Named Export
```

Using classes and modules makes TypeScript applications more maintainable, scalable, and easier to understand.

---

# Key Takeaways

- Classes are templates for creating objects.
- Constructors initialize object properties.
- `public`, `private`, and `protected` control access to class members.
- `readonly` prevents property modification.
- Static members belong to the class itself.
- Inheritance promotes code reuse.
- Modules organize code into separate files.
- `export` and `import` enable sharing code between modules.
