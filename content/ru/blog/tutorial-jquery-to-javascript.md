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

// Без jQuery
// Создаем и запускаем myEvent
document.dispatchEvent(new Event("myEvent"));
document.querySelector(".box").dispatchEvent(new Event("myEvent"));
```


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


