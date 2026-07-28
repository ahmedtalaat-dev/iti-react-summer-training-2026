# Day 09 Tasks - HTML DOM and Style Object

## Overview

This folder contains the practical assignments completed during **Day 09 - HTML DOM and Style Object**.

The assignments focus on applying DOM manipulation techniques, dynamic styling, events, drag-and-drop functionality, image galleries, animations, and interactive user interfaces using JavaScript.

---

## Folder Structure

```text
Tasks
│
├── README.md
│
└── Output
```

---

# Task 01 - DOM Node Manipulation

## Objective

Practice creating, inserting, counting, and removing DOM elements dynamically.

## Requirements

- Create an image element using:

```javascript
document.createElement()
```

- Set the image source using:

```javascript
setAttribute()
```

- Append the image to a div using:

```javascript
appendChild()
```

- Try:

```javascript
insertBefore()
```

and compare it with `appendChild()`.

- Display the number of child nodes inside the div using:

```javascript
element.childNodes.length
```

- Remove the image using:

```javascript
removeChild()
```

## Concepts Practiced

- createElement()
- setAttribute()
- appendChild()
- insertBefore()
- childNodes
- removeChild()

---

# Task 02 - Star Rating Control

## Objective

Create an interactive star rating component.

## Requirements

- Display an empty star image.
- Change it to a filled star on mouse hover.
- Return it to empty when the mouse leaves.
- Keep it filled after clicking.
- Allow toggling back to empty when clicked again.

## Concepts Practiced

- Mouse Events
- Event Handling
- Image Manipulation
- DOM Attributes

---

# Task 03 - Animated Search Textbox

## Objective

Create a search textbox whose width changes dynamically using JavaScript.

## Requirements

- Increase textbox width gradually on focus.
- Return to original width on blur.
- Use JavaScript only.
- Do not use CSS transitions or animations.

## Concepts Practiced

- Focus Events
- Blur Events
- Timers
- Style Object
- Dynamic Styling

---

# Task 04 - Image Slideshow Gallery

## Objective

Create an automatic image slideshow with descriptions and controls.

## Requirements

- Store image names in an array.
- Store image descriptions in an array (or use an associative array).
- Start slideshow automatically on page load.
- Show image description when hovering over an image.
- Pause slideshow while hovering.
- Resume slideshow when mouse leaves.
- Stop slideshow while hovering over Next and Previous buttons.
- Resume slideshow when leaving buttons.
- Implement Next and Previous navigation.

## Concepts Practiced

- Arrays
- Timers
- Mouse Events
- DOM Manipulation
- Image Galleries

---

# Task 05 - Drag and Drop

## Objective

Create a drag-and-drop interface using JavaScript.

## Requirements

- Create a div with:
  - Width: 100px
  - Height: 100px
  - Border
  - Background Color

- Allow an image to be dragged and dropped into the div.

### Additional Requirements

- If dropped outside the div, return the image to its original position.
- Change the div background color when the image is successfully dropped.

## Concepts Practiced

- DOM Events
- Dynamic Styling
- User Interaction

---

# Task 06 - Five Star Rating System

## Objective

Extend the previous star assignment into a complete 5-star rating control.

## Requirements

- Display five stars.
- Clicking the first star fills one star.
- Clicking the second star fills two stars.
- Clicking the third star fills three stars.
- Clicking the fourth star fills four stars.
- Clicking the fifth star fills all five stars.
- Selected stars remain fixed until another rating is chosen.

## Concepts Practiced

- Loops
- Event Handling
- DOM Manipulation
- Interactive UI Components

---

# Task 07 - Gender-Based Greeting

## Objective

Enhance the registration form with gender selection and dynamic greeting generation.

## Requirements

### Add Gender Dropdown

Options:

- Male
- Female

### Display Greeting

After selecting gender:

```text
Your Name: Mr. Ahmed
```

or

```text
Your Name: Ms. Sara
```

based on:

- Selected gender.
- Entered user name.

## Concepts Practiced

- Form Elements
- Change Events
- DOM Manipulation
- Dynamic Content Updates

---

## Skills Practiced

Throughout these assignments, the following concepts were applied:

- HTML DOM Manipulation
- DOM Node Operations
- Event Handling
- Style Object
- Dynamic CSS Manipulation
- Timers
- Arrays
- Image Galleries
- Form Validation
- Interactive User Interfaces

---

## Output

Each assignment solution is stored inside its corresponding folder under:

```text
Task/Output
```

and contains the implementation files required to complete the task.
