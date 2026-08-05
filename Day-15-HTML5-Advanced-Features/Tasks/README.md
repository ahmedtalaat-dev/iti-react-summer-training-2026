# Day 15 Tasks - HTML5 Advanced Features

## Overview

This folder contains the practical assignments completed during **Day 15 - HTML5 Advanced Features**. These tasks focus on using HTML5 APIs and features such as Geolocation, MathML, Web Storage, and Multimedia to build interactive web applications.

---

## Folder Structure

```text
Tasks
│
├── README.md
│
└── Output
    └── index.html
```

---

# Tasks

## Task 1 — Geolocation API

### Objective

Build a **My Location** section that demonstrates the HTML5 Geolocation API.

### Requirements

- Add a **Get My Current Location** button using `getCurrentPosition()`.
- Display the user's latitude and longitude.
- Add a **Track My Movement** button using `watchPosition()`.
- Continuously update the user's coordinates while tracking.
- Add a **Stop Tracking** button using `clearWatch()`.
- Display user-friendly error messages if:
  - Geolocation is not supported.
  - Permission is denied.
  - Location retrieval fails.

---

## Task 2 — MathML

### Objective

Display mathematical equations using MathML.

### Requirements

Create the following equations:

1. Area of a Circle

```text
A = πr²
```

2. One additional equation, such as:

- Pythagorean Theorem
- Ohm's Law

Use at least four different MathML elements including:

- `<mrow>`
- `<mi>`
- `<mn>`
- `<mo>`
- `<msup>`
- `<msqrt>`
- `<mfrac>`
- `<msub>`

---

## Task 3 — HTML5 Web Storage

### Objective

Build a Todo List application using Local Storage.

### Requirements

- Add new tasks.
- Save tasks in `localStorage`.
- Automatically load saved tasks when the page opens.
- Delete individual tasks.
- Clear all tasks.
- Display a persistent **Page Visits** counter using `localStorage`.

---

## Task 4 — Multimedia

### Objective

Create a custom media player using HTML5 audio and video.

### Requirements

#### Video

- Include at least two video formats.
- Provide fallback text.
- Do not use the default `controls` attribute.

#### Audio

- Include at least one audio source.

#### Custom Video Controls

- Play / Pause button
- Volume slider
- Mute / Unmute button
- Live current time and total duration display

---

## Skills Practiced

- HTML5 Geolocation API
- Local Storage
- MathML
- HTML5 Audio
- HTML5 Video
- JavaScript DOM Manipulation
- Event Handling
- Browser APIs

---

## Output

The completed implementation is located inside the **Output** folder.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
