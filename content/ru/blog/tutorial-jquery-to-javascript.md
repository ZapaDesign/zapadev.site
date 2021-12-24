---
title: JS | Нативные аналоги jQuery
description: '| Нативные аналоги jQuery'
createdAt: 2021-12-24
---

## Links
- [Нативные аналоги jQuery ](https://dev-gang.ru/article/nativnye-analogi-jquery-93vqf10ia8/)

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


