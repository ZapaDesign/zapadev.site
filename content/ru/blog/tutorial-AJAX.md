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

- jQuery.ajax( url, {settings} )
- jQuery.ajax( {settings} )

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

## {settings}

Тип: PlainObject  
Ассоциативный массив для конфигурации Ajax запроса. Все настройки не обязательные к заполнению (опциональны). Значения по умолчанию могут быть установлены при помощи метод $.ajaxSetup().

### **accepts** (значение по умолчанию: зависит от dataType)

Тип: *PlainObject*

Ассоциативный массив отображающий заданный dataType его типу MIME, который отправляется полем Accept в заголовке HTTP запроса. Этот заголовок сообщает серверу какой формат ответа будет принят. Например, следующий пользовательский тип данных mycustomtype будет отправлен в запросе:
```js
$.ajax({
  accepts: {
    mycustomtype: 'application/x-some-custom-type'
  },
 
  // Инструкции кк десериализовать тип данных  `mycustomtype`
  converters: {
    'text mycustomtype': function(result) {
      // Как то преобразуем
      return newresult;
    }
  },
 
  // Ожидаем от сервера тип данных `mycustomtype`
  dataType: 'mycustomtype'
});
```
**Важно:** Вы должны дополнительно указать соотвествующие типу converters для корректной обработки Ajax ответа.

### **async** (значение по умолчанию: true)

Тип: *Boolean*

По умолчанию, все зпросы отпрвляются асинхронно (т.е. это значение установленное в `true` по умолчанию).
Если Вам нужен синхронный запрос, установите значение параметра `false`. Кросс-доменные и `dataType: "jsonp"` запросы не поддерживают синхронные операции.
Обратите внимние, что синхронные запросы могут временно блокировать браузер или приостанавливать какие то активные операции в моменты выполнения запроса.
**Начиная с jQuery 1.8**, использование `async: false` с jqXHR ($.Deferred) **не рекомендуется**.
Вы должны использовать обработчики `success / error / complete` вместо соотвествующих методов объекта jqXHR, таких как `jqXHR.done()`.

### **beforeSend**
Тип: *Function( jqXHR jqXHR, PlainObject settings )*

Обработчик вызываемый перед совершения запроса, в котором Вы можете модицифировать объект jqXHR (В версиях jQuery 1.4.x и ниже, XMLHTTPRequest) перед тем как Ajax запрос будет отправлен. 
Использовать пользовательские заголовки и т.д. The jqXHR and settings objects are passed as arguments. 
This is an Ajax Event. Returning false in the beforeSend function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless of the type of request.

### **cache** (значение по умолчанию: `true, false` для `dataType 'script' и 'jsonp'`)
Тип: *Boolean*

Если устновлено значение false, то принудительно запрошенные страницы не будут закешированы браузером.
**Важно:** Значение false параметра cache будет корректно работать только с запросами HEAD и GET.
Это работает путем добавления `_={timestamp}` к адресу GET запроса.
Этот параметр не нужендля других типов запросов, исключая случай с IE8 когда POST запрос осуществляется к тому же адресу URL к которому уже выполнялся GET запрос.

### **complete**

Тип: *Function( jqXHR jqXHR, String textStatus )*

Функция которая вызывается когда запрос завершается (после того как success или error обработчики будут вызваны).
Функция принимает два аргумента: объект jqXHR (в версии jQuery 1.4.x и ниже, XMLHTTPRequest) и строка статуса запроса (`"success"`, `"notmodified"`, `"nocontent"`, `"error"`, `"timeout"`, `"abort"` или `"parsererror"`).
**Начиная с jQuery 1.5**, параметр complete может принимать массив функций. Каждая функция будет вызывана в свою очередь. Является Ajax событием.

### **contents**

Тип: PlainObject

Ассоциативный массив с парами строки/регулярные выражения определяющие как jQuery будет парсить ответ, в зависимости от типа контента. (**Добавлен в версии: 1.5**)

**contentType** (значение по умолчанию: 'application/x-www-form-urlencoded; charset=UTF-8')

Тип: Boolean or String

Когда отправляются данные на сервер, используется этот тип контента `Content-Type`.
Значение по умолчанию `"application/x-www-form-urlencoded; charset=UTF-8"`, которое прекрасно подходит для большинства случаев.
Если Вы явно передаете content-type в метод `$.ajax()`, то он всегда будет отправлен на сервер (даже если никакие данные не будут отправлены на сервер).
Начиная с jQuery 1.6 Вы можете указать значени `false` чтобы jQuery не передавал в заголовке поле `Content-Type` совсем.
**Важно:** Стандарт W3C XMLHttpRequest specification предписывает всегда использовать кодировку UTF-8; указание другой кодировки не вынудит браузер изменить кодировку.
**Важно:** Для кросс-доменных запросов, установка тип контента в значение отличающегося от `application/x-www-form-urlencoded`, `multipart/form-data` или `text/plain` вынудит браузер отправить подготовительный OPTIONS запрос на сервер.
