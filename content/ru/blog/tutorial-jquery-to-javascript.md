---
title: JS | Нативные аналоги jQuery
description: '| Нативные аналоги jQuery'
createdAt: 2021-12-24
---

## Links
- [Нативные аналоги jQuery ](https://dev-gang.ru/article/nativnye-analogi-jquery-93vqf10ia8/)
- [Переходим с jQuery на чистый JavaScript](https://medium.com/@stasonmars/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B8%D0%BC-%D1%81-jquery-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D1%8B%D0%B8%CC%86-javascript-e2b3c2c6ab4)


### Выборка элементов
Выборка одного или нескольких элементов DOM для каких-либо манипуляций с ними это одна из самых простых функций jQuery. Эквивалентом `$()` или `jQuery()` в JavaScript являются `querySelector()` или `querySelectorAll()`, в которых вы можете задавать параметры как и в jQuery — с помощью CSS селектора.
```js
// Выбираем все элементы .box
$(".box");
```
```js
// Вместо этого, мы можем выбрать первый элемент с .box
document.querySelector(".box");

// …или же выбрать все элементы .box  
document.querySelectorAll(".box");
```

#### Запускаем функцию на всех элементах выборки

`querySelectorAll()` отдаёт, как и jQuery, массив элементов, с которым вы уже в последствии можете работать. Но там, где вам нужно просто запустить функцию с jQuery на всей выборке, просто вызвав её, на чистом JavaScript вам нужно будет пройтись по всему массиву элементов:
```js
// C jQuery
//  Скрываем все .box
$(".box").hide();
```
```js
// Без jQuery
// Проходимся по всему массиву элементов, чтобы скрыть все элементы с .box
document.querySelectorAll(".box").forEach(box => { box.style.display = "none" }
```

#### Находим элемент внутри элемента
Обычно в jQuery это делается с помощью `find()`. Вы можете достичь такого же эффекта, сузив выборку до потомков элемента, просто вызвав querySelector или querySelectorAll на самом элементе:
```js
// С jQuery
// Выбираем первый .box в .container
var container = $(".container");
// И потом...
container.find(".box");
```
```js
// Без jQuery
// Выбираем первый .box в .container
var container = document.querySelector(".container");
// И потом...
container.querySelector(".box");
```
#### Выбираем элементы в DOM-дереве с помощью parent(), next() и prev()
Если вы хотите пройтись по DOM-дереву для выборки родственных или родительских элементов, относительно какого-либо элемента, то вы можете это сделать с помощью методов nextElementSibling, previousElemenSibling и parentElemnt. Которые вам нужно применить на интересующем вас элементе:
```js
// jQuery
// Отдаст следующий, предыдущий и родительский элемент для .box
$(".box").next();
$(".box").prev();
$(".box").parent();
```
```js
// Без jQuery
// Отдаст следующий, предыдущий и родительский элемент для .box
var box = document.querySelector(".box");
box.nextElementSibling;
box.previousElementSibling;
box.parentElement;
```

### Работа с событиями
В jQuery есть огромное множество способов для того, чтобы слушать события, вместо `on()`, `bind()`, `live()` или `click()`, вы могли бы сделать всё тоже самое с помощью их эквивалента addEventListener:
```js
// С jQuery
$(".button").click(function(e) { /* handle click event */ });
$(".button").mouseenter(function(e) {  /* handle click event */ });
$(document).keyup(function(e) {  /* handle key up event */  });
```
```js
// Без jQuery
document.querySelector(".button").addEventListener("click", (e) => { /* ... */ });
document.querySelector(".button").addEventListener("mouseenter", (e) => { /* ... */ });
document.addEventListener("keyup", (e) => { /* ... */ });
```
#### Слушаем события на динамически добавленных элементах
С помощью jQuery метода on(), вы можете работать с элементами “на живца”, слушая ещё и те, которые были динамически добавлены в структуру DOM. Чтобы сделать что-то подобное без jQuery, вы можете прикрепить обработчик события к элементу, как только вы добавите его в структуру DOM:
```js
// С jQuery
// Обработка событий по клику на .search-result элементы,
// даже когда они динамически добавляются в DOM
$(".search-container").on("click", ".search-result", handleClick);
```
```js
// Без jQuery
// Создаём элемент в структуре DOM
var searchElement = document.createElement("div");
document.querySelector(".search-container").appendChild(searchElement);
// Слушаем событие на элементе
searchElement.addEventListener("click", handleClick);
```
#### Вызываем и создаем события
Вы можете вручную вызывать события с помощью `trigger()` в jQuery, а также в чистом JS при помощи `dispatchEvent()`. Метод `dispatchEvent()` может быть вызван совершенно на любом элементе и берёт Event, как первый аргумент:
```js
// C jQuery
// Вызываем myEvent на документе и .box
$(document).trigger("myEvent");
$(".box").trigger("myEvent");
```
```js
// Без jQuery
// Создаем и запускаем myEvent
document.dispatchEvent(new Event("myEvent"));
document.querySelector(".box").dispatchEvent(new Event("myEvent"));
```

### Стилизация элементов
Если вы вызываете `css()` на элементе, чтобы поменять его CSS инлайново с помощью jQuery, то этого же эффекта вы можете добиться с помощью .`style` в чистом JavaScript.
```js
// С jQuery
// Выбирает .box и меняет его цвет текста на #000
$(".box").css("color", "#000");
```
```js
// Без jQuery
// Выбирает первый .box и меняет его цвет текста на #000
document.querySelector(".box").style.color = "#000";
```
С jQuery вы можете передать объект с парами ключ-значения, чтобы стилизовать уже большое количество свойств за раз. В JavaScript вы можете выставить только одно значение за раз или указать вcе стили одной строкой:
```js
// С jQuery
// Передаем несколько стилей
$(".box").css({
  "color": "#000",
  "background-color": "red"
});
```
```js
// Без jQuery
// Выставляем цвет на #000 и делаем фон красным
var box = document.querySelector(".box");
box.style.color = "#000";
box.style.backgroundColor = "red";

// Выставляем все стили разом, но перезаписываем уже существующие
box.style.cssText = "color: #000; background-color: red";
```

#### hide() и show()
Все удобства методов `hide()` и `show()` можно получить через свойство `.style`, выставив `display` на none или `block`:
```js
// C jQuery
// Спрятать и показать элемент
$(".box").hide();
$(".box").show();
```
```js
// Без jQuery
// Прячем и показываем элемент, изменяя display на block или none
document.querySelector(".box").style.display = "none";
document.querySelector(".box").style.display = "block";
```

### Document ready
Если вам нужно подождать полной загрузки DOM, перед, к примеру, развешиванием ивентов на объекты в структуре документа, то в jQuery вы бы использовали `$(document).ready()` или его сокращение `$()`. Но на самом деле мы можем легко и просто сами создать похожую функцию, в которой будем слушать событие DOMContentLoaded:
```js
// C jQuery
$(document).ready(function() { 
  /*  Начинаем работу после полной загрузки DOM */
});
```
```js
// Без jQuery
// Пишем схожий метод и смело начинаем его использовать
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /*  Начинаем работу после полной загрузки DOM */ 
});
```


### Работа с классами
Вы легко можете работать с классами через свойство `classList`, в котором есть возможности для переключения, замены, добавления и удаления классов любого элемента DOM.
```js
// C jQuery
// Добавляем, удаляем и переключаем класс focus
$(".box").addClass("focus");
$(".box").removeClass("focus");
$(".box").toggleClass("focus");
```
```js
// Без jQuery
// Добавляем, удаляем и переключаем класс focus
var box = document.querySelector(".box");
box.classList.add("focus");
box.classList.remove("focus");
box.classList.toggle("focus");
```
Если вам надо удалить или добавить несколько классов, то вы можете просто передать несколько аргументов в `add()` и `remove()`:
```js
// Добавляем "focus" и "highlighted" классы, а затем удаляем их
var box = document.querySelector(".box");
box.classList.add("focus", "highlighted");
box.classList.remove("focus", "highlighted");
```
Если вам надо поменять два класса, которые взаимозаменяют друг друга, то вы можете вызывать `replace()` на `classList` и заменить один класс другим:
```js
// Удаляем класс "focus" и добавляем "blurred"
document.querySelector(".box").classList.replace("focus", "blurred");
```

#### Проверяем есть ли класс у элемента
Если вы хотите запустить функцию на элементе только в том случае, если у него есть определенный класс, то вы можете заменить `hasClass()` на `classList.contains()`:
```js
// С jQuery
// Проверяем есть ли у .box класс focus и потом запускаем на нем функцию
if ($(".box").hasClass("focus")) {
  //  Понеслась...
}
```
```js
// Без jQuery
// Проверяем есть ли у .box класс focus и потом запускаем на нем функцию
if (document.querySelector(".box").classList.contains("focus")) {
  //  Понеслась...
}
```

### Сетевые запросы с get() или ajax()
Метод `fetch()` позволяет вам создавать сетевые запросы схожим образом с `ajax()` и `get()` методами от jQuery. `fetch()` берёт ссылку, как аргумент и отдаёт промис, который вы уже можете использовать для обработки данных.
```js
// С jQuery
$.ajax({
    url: "data.json"
  }).done(function(data) {
    // ...
  }).fail(function() {
    // Handle error
  });
```
```js
// Без jQuery
fetch("data.json")
  .then(data => {
    // Handle data
  }).catch(error => {
    // Handle error
  });
```

### Создание элементов
Если вы хотите динамически создать элемент в JavaScript, чтобы добавить его в DOM, то вы можете вызывать `createElement()` на `document` и передать ему имя тега, как аргумент, чтобы указать какой именно элемент вы хотите создать:
```js
// Создаем div и span
$("<div/>");
$("<span/>");
```
```js
// Создаем div и span
document.createElement("div");
document.createElement("span");
```
Если вы хотите добавить какой-либо контент этим элементам, то вы можете просто использовать свойство `textContent` или создать текстовой узел с помощью `createTextNode` и добавить его созданному элементу:
```js
var element = document.createElement("div");
element.textContent = "Text"
// или создайте textNode и добавьте его элементу
var text = document.createTextNode("Text");
element.appendChild(text);
```

### Обновление DOM
Если вам нужно изменить текст элемента или добавить новые элементы в DOM, то скорее всего вы будете использовать `innerHTML`, но его использование довольно рисковое дело, связанное с XSS атаками.

Если вам надо только “прочесть” или обновить текст элемента, то вы можете применить свойство textContent на нужном объекте, чтобы получить текст в элементе или обновить его:
```js
// C jQuery
// Меняем текст в .button
$(".button").text("New text");
// Считываем текст в .button
$(".button").text(); // Отдаёт"New text"
```
```js
// Без jQuery
// Меняем текст в .button
document.querySelector(".button").textContent = "New text";
// Считываем текст в .button
document.querySelector(".button").textContent; // Отдаёт"New text"
```
Если вы создаёте элемент, то вам надо добавить его уже другому элементу, используя на родительском элементе метод `appendChild()`:
```js
// Создаём div и вставляем его в .container
$(".container").append($("<div/>"));
```
```js
// Создаём div и вставляем его в .container
var element = document.createElement("div");
document.querySelector(".container").appendChild(element);
```
А теперь всё вместе, как мы можем обновить текст и класс и добавить это всё в DOM:
```js
// Создаём div
var element = document.createElement("div");

// Добавляем ему класс
element.classList.add("box");

// Указываем текст
element.textContent = "Text inside box";

// Вставляем его в .container
document.querySelector(".container").appendChild(element);
```

### Резюмируем
Это никак не полное руководство по нативным JavaScript методам, упомянутым в статье, но я надеюсь, что эта статья была полезным гайдом для тех, кто хочет уйти с jQuery. В общем, вот несколько методом, которые мы тут обсудили:
- Выбор элементов с `querySelector` и `querySelectorAll`
- Прослушиваем события с помощью `addEventListener`
- Обновляем CSS и стили через свойство `style`
- Работаем с классами, через свойство `classList`
- AJAX запросы с `fetch`
- Вызываем события с помощью `dispatchEvent`
- Создаем элементы с `createElement`
- Обновляем текст с помощью свойства `textContent`
- Добавляем элементы в DOM с `appendChild`


## Short List

### Поиск по селектору

```javascript
// jQuery
var els = $('.el');

// Native
var els = document.querySelectorAll('.el');

// Shorthand
var $ = function (el) {
    return document.querySelectorAll(el);
}

var els = $('.el');

// Или используйте регулярное выражение
// http://jsperf.com/micro-selector-libraries
```

### Создание элемента
```javascript
// jQuery
var newEl = $('');

// Native
var newEl = document.createElement('div');
```

### .on
```javascript
// jQuery
$('.el').on('event', function() {

});

// Native
[].forEach.call(document.querySelectorAll('.el'), function (el) {
	el.addEventListener('event', function() {

	}, false);
});
```

### .html
```javascript
//jQuery
$('.el’).html();

// Native
document.querySelector('.el’).innerHTML;
```

### attr
```javascript
// jQuery
$('.el').filter(':first').attr('key', 'value');
$('.el').filter(':first').attr('key');

// Native
document.querySelector('.el').setAttribute('key', 'value');
document.querySelector('.el').getAttribute('key');
```

.offset
```javascript
// jQuery
$('.el').offset();

// Native
document.querySelector('.el').getBoundingClientRect();
```

### addClass / removeClass / toggleClass

```javascript
// jQuery
$('.el').addClass('class');
$('.el').removeClass('class');
$('.el').toggleClass('class');

// Native
document.querySelector('.el').classList.add('class');
document.querySelector('.el').classList.remove('class');
document.querySelector('.el').classList.toggle('class');
```

### .append
```javascript
// jQuery
$('.el').append($(''));

// Native
document.querySelector('.el').appendChild(document.createElement('div'));
```

### .clone
```javascript
// jQuery
var clonedEl = $('.el').clone();

// Native
var clonedEl = document.querySelector('.el').cloneNode(true);
```

### .remove
```javascript
// jQuery
$('.el').remove();

// Native
remove('.el');

function remove(el) {
	var toRemove = document.querySelector(el);
	toRemove.parentNode.removeChild(toRemove);
}
```

### .empty
```javascript
// jQuery
$("#container").empty();

// Native
document.getElementById("container").innerHTML = null;
// или
var c = document.getElementById("container");
while (c.lastChild) c.removeChild(c.lastChild);
```

### .parent
```javascript
// jQuery
$('.el').parent();

// Native
document.querySelector('.el').parentNode;
```
### .next / .prev
```javascript
// jQuery
$('.el').prev();
$('.el').next();

// Native
document.querySelector('.el').previousElementSibling;
document.querySelector('.el').nextElementSibling;
```
### .post / .get
```javascript
// jQuery
$.get('url', function (data) {

});
$.post('url', {data: data}, function (data) {

});

// Native

// get
var xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.onreadystatechange = function (data) {

}
xhr.send();

// post
var xhr = new XMLHttpRequest()

xhr.open('POST', url);
xhr.onreadystatechange = function (data) {

}
xhr.send({data: data});
```


