---
title: Variable Fonts - Anicons
description: "| Anicons is the world’s first animated color icon font"
---

## Links

[typogram.github.io/Anicons](https://typogram.github.io/Anicons/)


## Use Anicons on Web

1. Embed Font

To embed Anicons fonts for production, you can self host the Anicons Webfont Kit on your server. To quickly try Anicons fonts out on a webpage, copy this code into the <head> of your HTML document.

Use the following HTML to embed Anicons Regular:
```html
<link href="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons-regular.css" rel="stylesheet">
```

Use the following HTML to embed Anicons Color:

```html
<link href="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons-color.css" rel="stylesheet">
```
Use the following HTML to embed Anicons Regular and Anicons Color:
```html
<link href="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons.css" rel="stylesheet">
```

2. Specify Icon Character in HTML
Use the following HTML to specify the icon character:
```html
<!-- replace “A” with appropriate character. -->
<div class=”icon”>A</div>
```

3. Specify Font Family in CSS
Use the following CSS rules to specify the families:
```css
font-family: "Anicons Regular", sans-serif;
font-family: "Anicons Color", sans-serif;
```

4. Animate
Use the following CSS rules to animate the icon:
```css
.icon {
   font-variation-settings: "TIME" 1;
   transition: font-variation-settings 0.4s ease;
}
.icon:hover {
   font-variation-settings: "TIME" 100;
}
```
Or use @keyframes animation:
```css
@keyframes icon-animation {
     0% { font-variation-settings: "TIME" 1; }
   100% { font-variation-settings: "TIME" 100; }
}
.icon {
   animation: icon-animation .5s ease-in-out infinite;
}
```


## Semple

<variable-fonts-anicon></variable-fonts-anicon>
