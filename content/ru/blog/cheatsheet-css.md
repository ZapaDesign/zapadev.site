---
title: CSS
description: "| Шпаргалка по CSS"
createdAt: 2022-01-13
---

## Links
- [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)

To exclude some image from lazyload add data-no-lazy="1" attribute. Or class="skip-lazy"

## zapaDEV
### Стилизация подчеркивания
```css
text-decoration: underline;
text-underline-offset: ; // растояние до линии подчеркивания
text-decoration-color: ;  // 
text-decoration-thickness: // толщина линии подчеркивания
```

### Пропорции
```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
```

### Списки
```css
list-style-position: outside  | inside | inherit;
```

### Фильтры
[CSS filter generator to convert from black to target hex color](https://codepen.io/sosuke/pen/Pjoqqp)

```css
filter: brightness(0) invert(1); // Белый
```

### Двухцветный bakcground
```css
background-image: linear-gradient(180deg, $main-color 96px, $sub-color 96px);
```

### Перенос слов
```css
word-break: break-all;
```

### Транзишин/анимация при появлении
```css
.element.show {
  animation: SHW .3s;
  animation-fill-mode: both;
}


@keyframes SHW {
  from {
    opacity:0
  }
  to {
    opacity:1
  }
}
````

### Input[type="search"] убрать крест
```css
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
```



## CSS Cheat Sheet

![](/blog/CSS-CHEAT-SHEET-p1-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p2-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p3-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p4.png)
