---
title: CSS
description: "| Шпаргалка по CSS"
createdAt: 2022-01-13
---

## Links
- [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)

## zapaDEV

> To exclude some image from lazyload add data-no-lazy="1" attribute. Or class="skip-lazy"

### Стилизация подчеркивания

```scss
text-decoration: text-decoration-line || text-decoration-color || text-decoration-style || text-decoration-thickness
```

#### text-decoration-line
Тип линии подчеркивания
```scss
text-decoration-line: underline; // подчёркивание;
text-decoration-line: line-through; // зачёркивание;
text-decoration-line: overline; // надчёркивание;
text-decoration-line: underline overline; // подчёркивание + надчёркивание;
text-decoration-line: underline line-through; // подчёркивание + зачёркивание;
text-decoration-line: none; //  убирает вышеперечисленные эффекты;
```

#### text-decoration-color
Цвет линии подчеркивания
```css
text-decoration-color: ;
```

#### text-underline-offset
Растояние до линии подчеркивания
```css
text-underline-offset: ;
```

#### text-decoration-thickness
Толщина линии подчеркивания
```css
text-decoration-thickness: ;
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

## Псевдо-элементы и Псевдо-классы
### Links
- [Что такое псевдоклассы и псевдоэлементы в CSS](https://webkyrs.info/post/chto-takoe-psevdoklassy-i-psevdoelementy-v-css)
- [Сочетание с псевдоклассами](https://webref.ru/layout/after-before/pseudo-class)
- [Исчерпывающее руководство по псевдоэлементам и псевдоклассам в CSS](https://abatickaya.medium.com/%D0%B8%D1%81%D1%87%D0%B5%D1%80%D0%BF%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%BF%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC-%D0%B8-%D0%BF%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0%D0%BC-%D0%B2-css-3282b5ea029)
- [Полное руководство по псевдоклассам и псевдоэлементам](http://prgssr.ru/development/polnoe-rukovodstvo-po-psevdoklassam-i-psevdoelementam.html)

### Псевдо-классы
*Псевдо-классы* предназначены для изменения стиля существующих элементов страницы в зависимости от их динамического состояния, например при работе со ссылками (`:link`, `:visited`, `:hover`, `:active`, `:focus`).

#### Состояния
```scss
:link {}; // это ПК, отвечающий за “нормальное” состояние ссылки и используется для выбора ссылок, которые еще не были посещены.
:visited {}; // используется для стилей ссылок, по которым был переход. Позиция ПК :visited вторая по счету (после :link).
:hover {};  // используется для стилизации элементов, когда курсор пользователя находится над ними.
:active {}; // используется для элементов, которые были “активированы” при помощи курсора или касанием для сенсорных устройств.
:focus {}; // используется для стилизации элементов, которые получили фокус при помощи курсора, тапа на тачскрине или при помощи клавиатуры.
```
#### Структура

```scss
:first-child {}; // первый дочерний элемент.
:first-of-type {}; // первый дочерний элемент заданного типа
:last-child {}; // последний дочерний элемент.
:last-of-type {}; // последний дочерний элемент заданного типа.
:not(s) {}; // стилизация элементов, которые не содержат заданный селектор.
:nth-child(n) {}; // n-дочерний элемент.
:nth-last-child(n) {}; // n-дочерний элемент, отсчёт ведётся с конца.
:nth-of-type(n) {}; // n-дочерний элемент заданного типа.
:nth-last-of-type(n) {}; // n-дочерний элемент заданного типа, отсчёт ведётся с конца.
:only-child {}; // выбирает единственный дочерний элемент в родителе.
:only-of-type {}; // нацелен на элемент, который не имеет братьев этого конкретного типа. Это похоже на :only-child за исключением того, что мы можем нацелится на конкретный элемент, сделав селектор более специфичным.
:target {}; // … что ж, он выбирает уникальный ID элемента и помещает его в URL. Пример: статья с уникальным ID будет иметь желтый фон если URL страницы заканчивается на #target.
```

#### Валидация
```scss
:checked {}; // управляет радио-кнопками, чекбоксами и элементами option, которые были выбраны.
:default {}; // нацелен на элемент по умолчанию в форме среди группы сходных элементов.
:disabled {}; // работает с элементами форм в их отключенном состоянии. “Задизейбленный” (отключенный) элемент не может быть выбран, с ним нельзя взаимодействовать или активировать его, он не может получить фокус.
:empty {};  // нацелен на элементы, которые не содержат в себе контент любого рода.
:enabled {}; // выбирает включенные (активные для взаимодействия) элементы. Все элементы формы активны по умолчанию — утверждение верно до тех пор, пока мы не используем disabled атрибут в разметке.
:in-range {}; // выбирает элементы, которые имеют диапазон значений и значения, находящиеся в этом диапазоне.
:out-of-range {}; // работает с элементами, которые имеют диапазон значений и значения которого выходят за пределы этого диапазона.
:indeterminate {}; // нацелен на элементы ввода (радио-кнопки и чекбоксы), которые не были выбраны или не выбраны при загрузке страницы.
:valid {}; // нацелен на элемент формы, который заполнен в соответствии с форматированием этого элемента.
:invalid {}; // работает с элементами формы, чье форматирование не совпадает с требуемым.
:optional {}; // предназначен для полей ввода, которые не являются обязательными. Другими словами до тех пор, пока поле не имеет атрибута required, оно будет подчиняться ПК :optional.
:read-only {}; // нацелен на нередактируемый элемент.
:read-write {}; // выбирает элементы, которые могут быть отредактированы пользователем.
:required {}; // работает с элементами, которые имеют атрибут required в html-разметке.
```

#### Язык
Языковые псевдоклассы связаны с текстом, содержащимся на странице. Они не управляют никакими медиа-элементами, такими как изображения или видео.
```scss
:lang(fr) {}; // соответствует языку элемента, который определен комбинацией атрибута lang=””, определенного meta элемента и информации из заголовка полученного по протоколу HTTP.
:dir {}; // (эксперимент) нацелен на элемент, направление которого указывается в документе
```

#### Прочее
```scss
:root {}; // относится к самому высокому родительскому элементу в документе. Практически во всех случаях :root будет относится к элементу html в документе. Однако он может обратится и к другому элементу, если он используется в другом языке разметки, например SVG или XML.
:fullscreen {}; // (эксперимент) выбирает элементы, которые отображаются в полноэкранном режиме.
```

### Псевдо-элементы
*Псевдо-элементы*  определяют стиль элементов, чётко не определённых в структуре документа (`:first-letter`, `:first-line`), а также позволяют генерировать и стилизировать несуществующее содержимое (`:before`, `:after` и свойство `content`).

В CSS3 псевдо-элементы начинаются с двух двоеточий `::` (`::first-letter`, `::first-line`, `::before`, `::after`).

В CSS3 также был (до 2008 года) псевдо-элемент `::selection`. Он стилизует выделенный пользователем текст. Браузеры Mozilla Firefox и SeaMonkey поддерживают нестандартный псевдо-элемент `::-moz-selection`.

```css
E::first-line
E::first-letter
E::before
E::after
```

## Image CSS Cheat Sheet

![](/blog/CSS-CHEAT-SHEET-p1-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p2-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p3-2019-update.png)
![](/blog/CSS-CHEAT-SHEET-p4.png)