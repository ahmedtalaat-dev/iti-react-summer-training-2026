# Lesson 02: HTML5 Multimedia

## Introduction

HTML5 introduced built-in multimedia elements that allow developers to embed audio and video directly into web pages without relying on third-party plugins such as Adobe Flash.

The primary multimedia elements are:

- `<audio>`
- `<video>`

These elements support various attributes and multiple media sources to provide a rich user experience across modern browsers.

---

# What is HTML5 Multimedia?

HTML5 multimedia refers to the native support for playing media files within web pages.

Common multimedia content includes:

- Music
- Podcasts
- Videos
- Tutorials
- Live recordings
- Background audio

---

# The `<audio>` Element

The `<audio>` element embeds audio files into a webpage.

Example:

```html
<audio controls>
    <source src="audio/song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

The text inside the element is displayed if the browser does not support HTML5 audio.

---

# Audio Attributes

### `controls`

Displays the default audio controls.

```html
<audio controls>
```

Controls typically include:

- Play
- Pause
- Volume
- Progress bar

---

### `autoplay`

Starts playing the audio automatically.

```html
<audio autoplay>
```

> Note: Many browsers block autoplay unless the media is muted.

---

### `loop`

Repeats the audio continuously.

```html
<audio loop>
```

---

### `muted`

Starts the audio with the sound muted.

```html
<audio muted>
```

---

### `preload`

Specifies how the browser should load the audio.

Values:

- `none`
- `metadata`
- `auto`

Example:

```html
<audio preload="metadata">
```

---

# Multiple Audio Sources

Provide different file formats for browser compatibility.

```html
<audio controls>

    <source src="song.mp3" type="audio/mpeg">

    <source src="song.ogg" type="audio/ogg">

</audio>
```

The browser uses the first supported format.

---

# The `<video>` Element

The `<video>` element embeds videos into a webpage.

Example:

```html
<video width="640" height="360" controls>

    <source src="movie.mp4" type="video/mp4">

</video>
```

---

# Video Attributes

## Width and Height

Specify the video dimensions.

```html
<video
    width="640"
    height="360"
>
```

---

## Controls

Displays the default video controls.

```html
<video controls>
```

Controls include:

- Play
- Pause
- Volume
- Fullscreen
- Progress bar

---

## Autoplay

Automatically starts the video.

```html
<video autoplay>
```

Often used with:

```html
muted
```

---

## Loop

Repeats the video after it finishes.

```html
<video loop>
```

---

## Muted

Starts the video without sound.

```html
<video muted>
```

---

## Poster

Displays an image before the video starts.

```html
<video
    poster="images/thumbnail.jpg"
    controls
>
```

---

# Multiple Video Sources

Example:

```html
<video controls>

    <source src="movie.mp4" type="video/mp4">

    <source src="movie.webm" type="video/webm">

</video>
```

The browser selects the first supported format.

---

# Supported Media Formats

## Audio

| Format | MIME Type |
|---------|-----------|
| MP3 | audio/mpeg |
| OGG | audio/ogg |
| WAV | audio/wav |

---

## Video

| Format | MIME Type |
|---------|-----------|
| MP4 | video/mp4 |
| WebM | video/webm |
| OGG | video/ogg |

---

# Controlling Multimedia with JavaScript

Play media:

```javascript
const video = document.querySelector("video");

video.play();
```

Pause media:

```javascript
video.pause();
```

Check if paused:

```javascript
console.log(video.paused);
```

Adjust volume:

```javascript
video.volume = 0.5;
```

Jump to a specific time:

```javascript
video.currentTime = 30;
```

---

# Example: Audio Player

```html
<audio controls>

    <source src="music.mp3" type="audio/mpeg">

</audio>
```

---

# Example: Video Player

```html
<video
    width="500"
    controls
    poster="poster.jpg"
>

    <source src="lesson.mp4" type="video/mp4">

</video>
```

---

# Best Practices

- Use the `<source>` element to provide multiple media formats.
- Always include fallback text for unsupported browsers.
- Compress media files to improve page performance.
- Use the `poster` attribute for videos.
- Avoid autoplay with sound to improve user experience.
- Use appropriate dimensions for responsive layouts.

---

# Summary

HTML5 multimedia elements provide a simple and standardized way to embed audio and video directly into web pages.

Main concepts covered:

```text
- HTML5 Multimedia
- Audio Element
- Video Element
- Source Element
- Controls
- Autoplay
- Loop
- Muted
- Poster
- Preload
- JavaScript Media Controls
```

These built-in elements eliminate the need for external plugins while offering flexible playback options and seamless integration with HTML, CSS, and JavaScript.

---

# Key Takeaways

- HTML5 provides native support for audio and video.
- The `<audio>` element is used for sound playback.
- The `<video>` element is used for video playback.
- The `<source>` element improves browser compatibility.
- JavaScript can control media playback dynamically.
- Using multiple media formats ensures better cross-browser support.
