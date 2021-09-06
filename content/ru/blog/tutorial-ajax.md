---
title: Руководство по AJAX
description: "| AJAX (асинхронный JavaScript и XML)"
---

## LINKS

[api.jquery.com - jquery.ajax (OFFICIAL)](https://api.jquery.com/jquery.ajax/)

[webref.ru - Основы jQuery: AJAX](https://webref.ru/dev/jqfundamentals/ajax)

[jquery-docs.ru - jQuery.ajax](https://jquery-docs.ru/jQuery.ajax/)

[basicweb.ru - jQuery функция $.ajax()](https://basicweb.ru/jquery/jquery_method_ajax.php)

---

AJAX (асинхронный JavaScript и XML) — это средство загрузки данных с сервера без перезагрузки страницы. Он использует функциональность встроенного в браузер XMLHttpRequest (XHR), чтобы сделать запрос к серверу, а затем обработать полученные от сервера данные.

jQuery предлагает метод $.ajax и несколько удобных методов чтобы упростить работу с XHR во всех браузерах.

## $.ajax
Мы можем использовать метод $.ajax() несколькими путями: можем передать объект конфигурации в качестве единственного аргумента или можем передать адрес и необязательный объект конфигурации. Давайте посмотрим в первом приближении:
```js
// Создаём функцию «обработчика» которая вызывается, когда...

// ...запрос AJAX успешен
var updatePage = function( resp ) {
  $( '#target').html( resp.people[0].name );
};
  
// ...запрос AJAX провалился
var printError = function( req, status, err ) {
  console.log( 'что-то пошло не так', status, err );
};

// Создаём объект для описания запроса AJAX
var ajaxOptions = {
  url: '/data/people.json',
  dataType: 'json',
  success: updatePage,
  error: printError
};

// Инициализируем запрос!
$.ajax(ajaxOptions);
```
Конечно, вы можете быть менее многословны, просто передавая литеральный объект в метод $.ajax() и применяя анонимные функции для success и error. Такая версия проще для написания и её, вероятно, проще поддерживать:
```js
$.ajax({
  url: '/data/people.json',
  dataType: 'json',
  success: function( resp ) {
    $( '#target').html( resp.people[0].name );
  },
  error: function( req, status, err ) {
    console.log( 'что-то пошло не так', status, err );
  }
});
```
Как упоминалось ранее, вы можете вызвать метод $.ajax(), передавая ему адрес и необязательный объект конфигурации. Это может быть полезно, если вы хотите использовать конфигурацию по умолчанию для $.ajax() или если вы желаете использовать ту же конфигурацию для нескольких адресов.
```js
$.ajax( '/data/people.json', {
  type: 'GET',
  dataType: 'json',
  success: function( resp ) {
    console.log( resp.people );
  },
  error: function( req, status, err ) {
    console.log( 'что-то пошло не так', status, err );
  }
});
```
В этой версии обязателен только адрес, но объект конфигурации позволяет нам сказать jQuery какие данные мы хотим передать, какой использовать метод HTTP (GET, POST и др.), какие данные мы ожидаем получить, как реагировать когда запрос успешен или нет и многое другое.

Смотрите документацию по $.ajax() для получения полного списка параметров конфигурации.
