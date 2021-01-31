---
title: JS-Примеры | Как сделать ненавязчивую кнопку прокрутки вверх
thumbnail: post_cheat_sheet_nuxtjs.png
---

<!-- ### Содержание

[Итого](#total)  
[Задачи](#exercise)  
- [Задача 1](#exercise1)  
- [Задача 2](#exercise2)  
- [Задача 3](#exercise3)  
- [Задача 4](#exercise4)  
- [Задача 5](#exercise5)  
- [Задача 6](#exercise6)   -->

> Оригинал [How to Make an Unobtrusive Scroll-to-Top Button](https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/)

Кнопка возврата в верхнюю часть страницы позволяет пользователю быстро вернуться в верхнюю часть страницы, не прилагая особых усилий. Это может быть очень полезно, когда на странице много контента или что происходит, например, на одностраничных веб-сайтах, когда используется бесконечная прокрутка, или на мобильных устройствах, где разные размеры экрана могут привести к расширению прокрутки контента.

Эти кнопки обычно плавают в нижнем углу сайтов, а затем при нажатии возвращают вас в верхнюю часть страницы. Их довольно легко создать с помощью JavaScript. Но визуально мы хотим, чтобы он был ненавязчивым, но при этом оставался достаточно большой целью, чтобы ее можно было коснуться или щелкнуть. Давайте рассмотрим несколько способов сделать это, начиная с простого, а затем улучшая вещи по ходу.

### Вариант 1. Будьте проще

Сначала мы выбираем кнопку в JavaScript.

```js
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
```

Теперь `document.documentElement` возвращает корневой элемент документа. Он нужен нам для получения значений смещения. Итак, теперь давайте сохраним его в переменной с именем `rootElement` - так будет проще вызывать код.

```js
var rootElement = document.documentElement
```
Мы добавим к кнопке прослушиватель событий нажатия:

```js
function scrollToTop {
  // scroll to top logic
}

scrollToTopBtn.addEventListener("click", scrollToTop)
```
Затем внутри функции `scrollToTop` мы заставим ее прокручиваться к верхней части экрана с помощью метода `scrollTo`.

```js
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
```
Мы также можем немного изменить стиль кнопки:
```css
#scrollToTopBtn {
  background-color: black;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 16px;
  line-height: 48px;
  width: 48px;
}
```
Теперь мы можем разместить кнопку где-нибудь внизу страницы, например, в нижнем колонтитуле:
```html
<footer>
  <!-- Scroll to top button -->
  <button id="scrollToTopBtn">☝️</button>
</footer>
```
И получаем вот что:
<div style="height:450px">
<iframe id="cp_embed_bGpxyEM" src="//codepen.io/anon/embed/bGpxyEM?height=450&amp;theme-id=1&amp;slug-hash=bGpxyEM&amp;default-tab=result" height="450" scrolling="no" frameborder="0" allowfullscreen="" allowpaymentrequest="" name="CodePen Embed bGpxyEM" title="CodePen Embed bGpxyEM" class="cp_embed_iframe" style="width: 100%; overflow: hidden; height: 100%;">CodePen Embed Fallback</iframe>
</div>


### Вариант 2: определение положения прокрутки

Мы можем обнаружить прокрутку с помощью прослушивателя событий прокрутки.
```js
function handleScroll() {
  // Do something on scroll
}
document.addEventListener("scroll", handleScroll)
```
Функция `handleScroll` будет вызываться каждый раз, когда пользователь прокручивает. Теперь нам нужно общее количество пикселей, которые мы можем прокрутить.

- `scrollHeight` дает высоту элемента, включая часть, не видимую из-за переполнения.
- `clientHeight` дает внутреннюю высоту элемента в пикселях, которая является высотой видимой части.

Если мы вычтем `scrollHeight` на `clientHeight`, мы получим общее количество пикселей, которые мы можем прокрутить:
```js
var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
```
Теперь у нас есть переменная `scrollTotal`, которая представляет максимальное количество пикселей, которые можно прокручивать по вертикали. Разделив количество прокручиваемых пикселей на общее количество пикселей, которые мы можем прокрутить, мы получим соотношение между 0 и 1. Играя с этим соотношением, мы можем легко включать и выключать кнопку.

Например, мы добавим условие, которое показывает кнопку прокрутки вверх, когда пользователь прокручивает 80% (или 0,80) вниз по общей высоте страницы. 80% - произвольное число. По сути, чем ближе мы приближаемся к 1, тем больше пользователь должен прокрутить, прежде чем увидит кнопку.

Вот код JavaScript:
```js
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)
```
Нам понадобится некоторый CSS для правильного позиционирования кнопки, когда она появится в поле зрения:
```css
.scrollToTopBtn {
  /* same general styles as before */
  
  /* place it at the bottom-right corner */
  position: fixed;
  bottom: 30px;
  right: 30px;
  /* keep it at the top of everything else */
  z-index: 100;
  /* hide with opacity */
  opacity: 0;
  /* also add a translate effect */
  transform: translateY(100px);
  /* and a transition */
  transition: all .5s ease
}
.showBtn {
  opacity: 1;
  transform: translateY(0)
}
```
При этом кнопка появляется, когда пользователь опускается на 80% по странице, и скрывается, когда она выше.

<iframe allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi" allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="result-iframe " frameborder="0" id="result-iframe" name="CodePen Preview for Scroll-to-Top Button with Vanilla JS (Detecting the scroll position)" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" scrolling="yes" title="CodePen Preview for Scroll-to-Top Button with Vanilla JS (Detecting the scroll position)" data-src="https://cdpn.io/marcelrojas/fullembedgrid/GRZOWwp?animations=run&amp;type=embed" src="https://cdpn.io/marcelrojas/fullembedgrid/GRZOWwp?animations=run&amp;type=embed">
  </iframe>

Это кажется отличным вариантом, и настроить прослушиватель событий для этого довольно просто. Но накладные расходы на производительность могут быть дорогостоящими, поскольку мы всегда проверяем текущую позицию прокрутки.

Есть еще один вариант, который позаботится об этом ...

### Вариант 3: Наблюдатель за перекрестком

API-интерфейс Intersection Observer - отличное решение вышеуказанной проблемы. Это довольно новый API для браузера, который позволяет разработчикам передавать большинство этих задач браузеру более оптимизированным способом. Трэвис Алманд подробно объяснил, как это работает. Вот как это определяет MDN:

> API-интерфейс Intersection Observer предоставляет способ асинхронно наблюдать изменения пересечения целевого элемента с элементом-предком или с окном просмотра документа верхнего уровня.

Довольно аккуратно! Это означает, что кнопка может быть нашим целевым элементом:
```js
// We select the element we want to target
var target = document.querySelector("footer");
```
Затем мы пишем функцию обратного вызова, которая что-то делает, когда наш элемент «пересекается» с окном просмотра - что является причудливым способом сказать, когда он появляется в поле зрения.

И как только нижний колонтитул входит в область просмотра или покидает ее, все, что нам действительно нужно, - это добавить или удалить класс. Обратный вызов получает в качестве параметра массив записей.
```js
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add('showBtn')
    } else {
      // Hide button
      scrollToTopBtn.classList.remove('showBtn')
    }
  });
}
```
Нам нужно создать новый экземпляр `IntersectionObserver` и передать ему только что написанную функцию обратного вызова.
```js
let observer = new IntersectionObserver(callback);
```
Наконец, мы говорим наблюдателю начать наблюдение (э-э, наблюдение) целевой элемент, который был выбран выше, когда он пересекается с окном просмотра:
```js
observer.observe(target);
```
<div style="height:450px">
<iframe id="cp_embed_WNwgBRg" src="//codepen.io/anon/embed/WNwgBRg?height=450&amp;theme-id=1&amp;slug-hash=WNwgBRg&amp;default-tab=result" height="450" scrolling="no" frameborder="0" allowfullscreen="" allowpaymentrequest="" name="CodePen Embed WNwgBRg" title="CodePen Embed WNwgBRg" class="cp_embed_iframe" style="width: 100%; overflow: hidden; height: 100%;">CodePen Embed Fallback</iframe>
</div>

### А как насчет плавной прокрутки?

Конечно возможно! Фактически, Крис показал нам, как это можно сделать с помощью CSS еще в 2019 году:

```html
<html id="top">
  <body>
     <!-- the entire document -->
     <a href="#top">Jump to top of page</a>
  </body>
</html>
```
```css
html {
  scroll-behavior: smooth;
}
```
Здесь есть еще немного нюансов, например, улучшения доступности, о которых Крис также рассказывает в своем посте. Дело в том, что CSS приобретает новые возможности, которые могут выполнять то, для чего мы использовали JavaScript.

---

Вот и все! Мы начали с довольно простой идеи. Мы улучшили его, отображая и скрывая кнопку в зависимости от положения прокрутки пользователя. Затем мы улучшили производительность, реализовав API-интерфейс Intersection Observer вместо отслеживания текущей позиции прокрутки. И, наконец, мы увидели, как можно использовать CSS для плавной прокрутки. Все вместе мы получаем кнопку с прокруткой вверх, которую легко увидеть и использовать, не блокируя при этом другие элементы на странице.
