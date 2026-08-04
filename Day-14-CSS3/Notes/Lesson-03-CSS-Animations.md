# Lesson 03: CSS Animations

## Introduction

CSS Animations allow developers to create smooth visual effects without using JavaScript. By defining animation steps with `@keyframes`, elements can move, rotate, fade, scale, and change colors automatically.

Animations enhance user experience by making web pages more interactive and engaging.

---

# What are CSS Animations?

A CSS animation changes an element's style gradually over time.

Unlike CSS transitions, animations:

- Can run automatically.
- Can have multiple steps.
- Can repeat indefinitely.
- Do not require user interaction to start.

---

# The `@keyframes` Rule

Animations are defined using the `@keyframes` rule.

Example:

```css
@keyframes moveRight {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(300px);
    }

}
```

The animation moves an element from its original position to 300 pixels to the right.

---

# Applying an Animation

Use the `animation-name` and `animation-duration` properties.

```css
.box {

    animation-name: moveRight;

    animation-duration: 2s;

}
```

---

# Shorthand Property

Instead of writing multiple properties, use the `animation` shorthand.

```css
.box {

    animation: moveRight 2s;

}
```

---

# Animation Duration

Defines how long the animation lasts.

```css
animation-duration: 3s;
```

Example values:

- `1s`
- `2s`
- `500ms`

---

# Animation Delay

Specifies when the animation starts.

```css
animation-delay: 2s;
```

The animation waits two seconds before starting.

---

# Animation Iteration Count

Controls how many times the animation repeats.

```css
animation-iteration-count: 3;
```

Infinite animation:

```css
animation-iteration-count: infinite;
```

---

# Animation Direction

Controls the direction of the animation.

```css
animation-direction: normal;
```

Other values:

- `reverse`
- `alternate`
- `alternate-reverse`

Example:

```css
animation-direction: alternate;
```

The animation plays forward, then backward.

---

# Animation Timing Function

Controls the animation speed.

```css
animation-timing-function: ease;
```

Common values:

- `linear`
- `ease`
- `ease-in`
- `ease-out`
- `ease-in-out`

Example:

```css
animation-timing-function: linear;
```

The animation moves at a constant speed.

---

# Animation Fill Mode

Determines how styles are applied before and after the animation.

```css
animation-fill-mode: forwards;
```

Values:

- `none`
- `forwards`
- `backwards`
- `both`

---

# Multiple Keyframes

Animations can have several stages.

```css
@keyframes colorChange {

    0% {

        background: red;

    }

    50% {

        background: yellow;

    }

    100% {

        background: green;

    }

}
```

---

# Moving an Element

```css
@keyframes slide {

    from {

        left: 0;

    }

    to {

        left: 250px;

    }

}

.box {

    position: relative;

    animation: slide 3s infinite alternate;

}
```

---

# Rotating an Element

```css
@keyframes rotateBox {

    from {

        transform: rotate(0deg);

    }

    to {

        transform: rotate(360deg);

    }

}
```

---

# Scaling an Element

```css
@keyframes grow {

    from {

        transform: scale(1);

    }

    to {

        transform: scale(1.5);

    }

}
```

---

# Fading an Element

```css
@keyframes fade {

    from {

        opacity: 1;

    }

    to {

        opacity: 0;

    }

}
```

---

# Combining Transformations

```css
@keyframes fancyAnimation {

    0% {

        transform: translateX(0);

    }

    50% {

        transform: translateX(150px) rotate(180deg);

    }

    100% {

        transform: translateX(300px) rotate(360deg);

    }

}
```

---

# Complete Example

```html
<div class="box"></div>
```

```css
.box {

    width: 100px;

    height: 100px;

    background: steelblue;

    position: relative;

    animation: bounce 2s infinite alternate;

}

@keyframes bounce {

    from {

        top: 0;

    }

    to {

        top: 150px;

    }

}
```

---

# Animation Properties

| Property | Description |
|----------|-------------|
| `animation-name` | Name of the animation |
| `animation-duration` | Duration of the animation |
| `animation-delay` | Delay before starting |
| `animation-iteration-count` | Number of repetitions |
| `animation-direction` | Playback direction |
| `animation-fill-mode` | Final animation state |
| `animation-timing-function` | Speed curve |
| `animation` | Shorthand property |

---

# CSS Animations vs CSS Transitions

| Animation | Transition |
|-----------|------------|
| Uses `@keyframes` | No keyframes |
| Can run automatically | Requires a state change |
| Supports multiple stages | Only start and end states |
| Can repeat infinitely | Runs once per change |

---

# Best Practices

- Keep animations smooth and subtle.
- Avoid excessive or distracting effects.
- Use `transform` and `opacity` for better performance.
- Use meaningful animation durations.
- Test animations on different devices and browsers.
- Avoid animating layout-related properties when possible.

---

# Summary

CSS Animations allow developers to create dynamic visual effects using only CSS.

Main concepts covered:

```text
- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-timing-function
- Transform Animations
- Opacity Animations
```

Animations make websites more engaging while reducing the need for JavaScript for many visual effects.

---

# Key Takeaways

- CSS animations are defined with `@keyframes`.
- The `animation` shorthand combines multiple animation properties.
- Animations can move, rotate, scale, fade, and change colors.
- `animation-iteration-count: infinite` creates continuous animations.
- `animation-direction: alternate` makes animations reverse direction automatically.
- Using `transform` and `opacity` results in smoother, more performant animations.
